import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  isMenuOpen = false;
  currentLang = 'TR'; // Bellekteki anlık dil
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // 1. Dil Kontrolü
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.currentLang = savedLang;
      } else {
        // İlk defa giriyorsa TR default ata ve locale yaz
        this.currentLang = 'TR';
        localStorage.setItem('lang', 'TR');
      }

      // 2. Tema Kontrolü (Corporate Default)
      const savedTheme = localStorage.getItem('theme') || 'corporate';
      document.documentElement.setAttribute('data-theme', savedTheme);
      this.isDarkMode = savedTheme === 'business';
    }
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    if (this.isBrowser) {
      localStorage.setItem('lang', lang); // Seçilen dili locale işle
    }
    this.isMenuOpen = false; // Menüleri kapat
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'business' : 'corporate';
    document.documentElement.setAttribute('data-theme', theme);
    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
    }
  }
}