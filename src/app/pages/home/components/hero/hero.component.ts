import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  isBrowser: boolean;
  currentIndex = 0;
  interval: any;

  slides = [
    { image: 'assets/hero1.jpg', topText: 'Mükemmellik Detayda Gizlidir', title: 'Eskiyi Unutun,', subtitle: 'Yıldızı Yeniden Parlatın' },
    { image: 'assets/hero2.jpg', topText: 'Orijinaline Sadık Restorasyon', title: 'Klasik Ruh,', subtitle: 'Modern Dokunuşlar' },
    { image: 'assets/hero3.jpg', topText: 'Size Özel İç Tasarım Çözümleri', title: 'VIP Konfor,', subtitle: 'Sınırsız Lüks Deneyimi' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.isBrowser && this.interval) clearInterval(this.interval);
  }
}