import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

interface Part {
  title: string;
  category: string;
  categoryKey: string;
  image: string;
  code: string;
}

@Component({
  selector: 'app-spare-parts',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.scss'],
  animations: [
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
export class SparePartsComponent implements OnInit {
  pageTitleKey = 'NAV.SPARE_PARTS';


  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMeta('SEO.PARTS_TITLE', 'SEO.PARTS_DESC');
  }

  categories = [
    { key: 'ALL', label: 'SPARE_PARTS.CAT_ALL' },
    { key: 'AIR', label: 'SPARE_PARTS.CAT_AIR' },
    { key: 'DRIVE', label: 'SPARE_PARTS.CAT_DRIVE' },
    { key: 'MECH', label: 'SPARE_PARTS.CAT_MECH' },
    { key: 'ELEC', label: 'SPARE_PARTS.CAT_ELEC' },
    { key: 'ACC', label: 'SPARE_PARTS.CAT_ACC' },
    { key: 'MIRROR', label: 'SPARE_PARTS.CAT_MIRROR' }
  ];

  selectedCategory = 'ALL';
  displayLimit = 16;
  lightboxImage: string | null = null;

  allParts: Part[] = [
    { title: 'SPARE_PARTS.PART_AIR_BELLOW', category: 'SPARE_PARTS.CAT_AIR', categoryKey: 'AIR', image: 'assets/spare-parts/havaaksami.png', code: 'BUS-HVA-01' },
    { title: 'SPARE_PARTS.PART_AIR_BELLOW', category: 'SPARE_PARTS.CAT_AIR', categoryKey: 'AIR', image: 'assets/spare-parts/havaaksami2.png', code: 'BUS-HVA-02' },
    { title: 'SPARE_PARTS.PART_AIR_BELLOW', category: 'SPARE_PARTS.CAT_AIR', categoryKey: 'AIR', image: 'assets/spare-parts/havaaksami3.png', code: 'BUS-HVA-03' },
    { title: 'SPARE_PARTS.PART_AIR_BELLOW', category: 'SPARE_PARTS.CAT_AIR', categoryKey: 'AIR', image: 'assets/spare-parts/havaaksami4.png', code: 'BUS-HVA-04' },
    { title: 'SPARE_PARTS.PART_SHOCK', category: 'SPARE_PARTS.CAT_DRIVE', categoryKey: 'DRIVE', image: 'assets/spare-parts/yururaksam.png', code: 'BUS-YRR-04' },
    { title: 'SPARE_PARTS.PART_SHOCK', category: 'SPARE_PARTS.CAT_DRIVE', categoryKey: 'DRIVE', image: 'assets/spare-parts/yururaksam2.png', code: 'BUS-YRR-05' },
    { title: 'SPARE_PARTS.PART_SHOCK', category: 'SPARE_PARTS.CAT_DRIVE', categoryKey: 'DRIVE', image: 'assets/spare-parts/yururaksam3.png', code: 'BUS-YRR-06' },
    { title: 'SPARE_PARTS.PART_SHOCK', category: 'SPARE_PARTS.CAT_DRIVE', categoryKey: 'DRIVE', image: 'assets/spare-parts/yururaksam4.png', code: 'BUS-YRR-07' },
    { title: 'SPARE_PARTS.PART_LED', category: 'SPARE_PARTS.CAT_ELEC', categoryKey: 'ELEC', image: 'assets/spare-parts/elektrikaksam.png', code: 'BUS-ELK-12' },
    { title: 'SPARE_PARTS.PART_LED', category: 'SPARE_PARTS.CAT_ELEC', categoryKey: 'ELEC', image: 'assets/spare-parts/elektrikaksami2.png', code: 'BUS-ELK-13' },
    { title: 'SPARE_PARTS.PART_LED', category: 'SPARE_PARTS.CAT_ELEC', categoryKey: 'ELEC', image: 'assets/spare-parts/elektrikaksami3.png', code: 'BUS-ELK-14' },
    { title: 'SPARE_PARTS.PART_LED', category: 'SPARE_PARTS.CAT_ELEC', categoryKey: 'ELEC', image: 'assets/spare-parts/elektrikaksami4.png', code: 'BUS-ELK-15' },
    { title: 'SPARE_PARTS.PART_LED', category: 'SPARE_PARTS.CAT_ELEC', categoryKey: 'ELEC', image: 'assets/spare-parts/elektrikaksami5.png', code: 'BUS-ELK-16' },
    { title: 'SPARE_PARTS.PART_HORN', category: 'SPARE_PARTS.CAT_ACC', categoryKey: 'ACC', image: 'assets/spare-parts/aksesuarkorna.png', code: 'BUS-AKS-09' },
    { title: 'SPARE_PARTS.PART_HORN', category: 'SPARE_PARTS.CAT_ACC', categoryKey: 'ACC', image: 'assets/spare-parts/aksesuaryanayna.png', code: 'BUS-AKS-10' },
    { title: 'SPARE_PARTS.PART_MOUNT', category: 'SPARE_PARTS.CAT_MECH', categoryKey: 'MECH', image: 'assets/spare-parts/mekanikaksam.png', code: 'BUS-MKN-22' },
    { title: 'SPARE_PARTS.PART_MOUNT', category: 'SPARE_PARTS.CAT_MECH', categoryKey: 'MECH', image: 'assets/spare-parts/mekanikaksam2.png', code: 'BUS-MKN-23' },
    { title: 'SPARE_PARTS.PART_MOUNT', category: 'SPARE_PARTS.CAT_MECH', categoryKey: 'MECH', image: 'assets/spare-parts/mekanikaksam3.png', code: 'BUS-MKN-24' },
    { title: 'SPARE_PARTS.PART_MOUNT', category: 'SPARE_PARTS.CAT_MECH', categoryKey: 'MECH', image: 'assets/spare-parts/mekanikaksam4.png', code: 'BUS-MKN-25' },
    { title: 'SPARE_PARTS.PART_MOUNT', category: 'SPARE_PARTS.CAT_MECH', categoryKey: 'MECH', image: 'assets/spare-parts/mekanikaksam5.png', code: 'BUS-MKN-26' },
    { title: 'SPARE_PARTS.PART_MIRROR', category: 'SPARE_PARTS.CAT_MIRROR', categoryKey: 'MIRROR', image: 'assets/spare-parts/aynaaksami.png', code: 'BUS-AYN-05' },
    { title: 'SPARE_PARTS.PART_MIRROR', category: 'SPARE_PARTS.CAT_MIRROR', categoryKey: 'MIRROR', image: 'assets/spare-parts/aksesuaryanayna.png', code: 'BUS-AYN-06' }
  ];

  get currentCategoryAllParts() {
    return this.selectedCategory === 'ALL'
      ? this.allParts
      : this.allParts.filter(p => p.categoryKey === this.selectedCategory);
  }

  get filteredParts() {
    return this.currentCategoryAllParts.slice(0, this.displayLimit);
  }

  setCategory(catKey: string) {
    this.selectedCategory = catKey;
    this.displayLimit = 16;
  }

  loadMore() {
    this.displayLimit += 16;
  }

  openLightbox(img: string) {
    this.lightboxImage = img;
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxImage = null;
    if (typeof document !== 'undefined') document.body.style.overflow = 'auto';
  }
}