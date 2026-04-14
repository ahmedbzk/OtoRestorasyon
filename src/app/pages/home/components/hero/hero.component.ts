import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink, TranslateModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  isBrowser: boolean;
  currentIndex = 0;
  interval: any;

  slides = [
    { 
      image: 'assets/hero1.jpg', 
      topText: 'HERO.SLIDE1_TOP', 
      title: 'HERO.SLIDE1_TITLE', 
      subtitle: 'HERO.SLIDE1_SUBTITLE' 
    },
    { 
      image: 'assets/hero2.jpg', 
      topText: 'HERO.SLIDE2_TOP', 
      title: 'HERO.SLIDE2_TITLE', 
      subtitle: 'HERO.SLIDE2_SUBTITLE' 
    },
    { 
      image: 'assets/hero3.jpg', 
      topText: 'HERO.SLIDE3_TOP', 
      title: 'HERO.SLIDE3_TITLE', 
      subtitle: 'HERO.SLIDE3_SUBTITLE' 
    }
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