import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Part {
  title: string;
  category: string;
  image: string;
  code: string;
}

@Component({
  selector: 'app-spare-parts',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.scss'],
  animations: [
    // Liste değişim animasyonu
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('50ms', animate('400ms cubic-bezier(0.23, 1, 0.32, 1)', 
            style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true }),
        query(':leave', [
          animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class SparePartsComponent {
  pageTitle= 'YEDEK PARÇALAR'
  categories = ['Tümü', 'HAVA AKSAMI', 'YÜRÜR AKSAM', 'MEKANİK AKSAM', 'ELEKTRİK AKSAMI', 'AKSESUAR', 'AYNA AKSAMI'];
  selectedCategory = 'Tümü';
  displayLimit = 16;
  lightboxImage: string | null = null;

   // Assets listesine göre güncellenmiş örnek veri
  allParts: Part[] = [
    { title: 'Hava Süspansiyon Körüğü', category: 'HAVA AKSAMI', image: 'assets/spare-parts/havaaksami.png', code: 'BUS-HVA-01' },
    { title: 'Hava Süspansiyon Körüğü2', category: 'HAVA AKSAMI', image: 'assets/spare-parts/havaaksami2.png', code: 'BUS-HVA-02' },
    { title: 'Hava Süspansiyon Körüğü3', category: 'HAVA AKSAMI', image: 'assets/spare-parts/havaaksami3.png', code: 'BUS-HVA-03' },
    { title: 'Hava Süspansiyon Körüğü4', category: 'HAVA AKSAMI', image: 'assets/spare-parts/havaaksami4.png', code: 'BUS-HVA-04' },
    { title: 'Amortisör Komple', category: 'YÜRÜR AKSAM', image: 'assets/spare-parts/yürüraksam.png', code: 'BUS-YRR-04' },
    { title: 'Amortisör Komple2', category: 'YÜRÜR AKSAM', image: 'assets/spare-parts/yürüraksam2.png', code: 'BUS-YRR-05' },
    { title: 'Amortisör Komple3', category: 'YÜRÜR AKSAM', image: 'assets/spare-parts/yürüraksam3.png', code: 'BUS-YRR-06' },
    { title: 'Amortisör Komple4', category: 'YÜRÜR AKSAM', image: 'assets/spare-parts/yürüraksam4.png', code: 'BUS-YRR-07' },
    { title: 'LED Far Grubu', category: 'ELEKTRİK AKSAMI', image: 'assets/spare-parts/elektrikaksam.png', code: 'BUS-ELK-12' },
    { title: 'LED Far Grubu2', category: 'ELEKTRİK AKSAMI', image: 'assets/spare-parts/elektrikaksamı2.png', code: 'BUS-ELK-13' },
    { title: 'LED Far Grubu3', category: 'ELEKTRİK AKSAMI', image: 'assets/spare-parts/elektrikaksamı3.png', code: 'BUS-ELK-14' },
    { title: 'LED Far Grubu4', category: 'ELEKTRİK AKSAMI', image: 'assets/spare-parts/elektrikaksamı4.png', code: 'BUS-ELK-15' },
    { title: 'LED Far Grubu5', category: 'ELEKTRİK AKSAMI', image: 'assets/spare-parts/elektrikaksamı5.png', code: 'BUS-ELK-16' },
    { title: 'Havalı Korna Seti', category: 'AKSESUAR', image: 'assets/spare-parts/aksesuarkorna.png', code: 'BUS-AKS-09' },
    { title: 'Havalı Korna Seti2', category: 'AKSESUAR', image: 'assets/spare-parts/aksesuaryanayna.png', code: 'BUS-AKS-10' },
    { title: 'Motor Takozu', category: 'MEKANİK AKSAM', image: 'assets/spare-parts/mekanikaksam.png', code: 'BUS-MKN-22' },
    { title: 'Motor Takozu2', category: 'MEKANİK AKSAM', image: 'assets/spare-parts/mekanikaksam2.png', code: 'BUS-MKN-23' },
    { title: 'Motor Takozu3', category: 'MEKANİK AKSAM', image: 'assets/spare-parts/mekanikaksam3.png', code: 'BUS-MKN-24' },
    { title: 'Motor Takozu4', category: 'MEKANİK AKSAM', image: 'assets/spare-parts/mekanikaksam4.png', code: 'BUS-MKN-25' },
    { title: 'Motor Takozu5', category: 'MEKANİK AKSAM', image: 'assets/spare-parts/mekanikaksam5.png', code: 'BUS-MKN-26' },
    { title: 'Yan Ayna Kapağı', category: 'AYNA AKSAMI', image: 'assets/spare-parts/aynaaksamı.png', code: 'BUS-AYN-05' },
    { title: 'Yan Ayna Kapağı2', category: 'AYNA AKSAMI', image: 'assets/spare-parts/aksesuaryanayna.png', code: 'BUS-AYN-06' },

  ];

  get currentCategoryAllParts() {
    return this.selectedCategory === 'Tümü' 
      ? this.allParts 
      : this.allParts.filter(p => p.category === this.selectedCategory);
  }

  get filteredParts() {
    return this.currentCategoryAllParts.slice(0, this.displayLimit);
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
    this.displayLimit = 16;
  }

  loadMore() {
    this.displayLimit += 16;
  }

  openLightbox(img: string) {
    this.lightboxImage = img;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxImage = null;
    document.body.style.overflow = 'auto';
  }
}