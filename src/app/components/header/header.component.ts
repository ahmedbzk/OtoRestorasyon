import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  currentLang = 'TR';
  isBrowser: boolean;
  isScrolled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      // 20px bile kaydırılsa akıcı bir şekilde renk değişimi başlasın
      this.isScrolled = window.scrollY > 20;
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('lang');
      this.currentLang = savedLang ? savedLang : 'TR';
      if (!savedLang) localStorage.setItem('lang', 'TR');
    }
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
    }
    this.isMenuOpen = false;
  }
}