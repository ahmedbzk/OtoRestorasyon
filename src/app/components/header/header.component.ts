import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router'; 
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  currentLang = 'TR';
  isBrowser: boolean;
  isScrolled = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.translate.addLangs(['TR', 'EN', 'RO', 'BG']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 20;
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('lang') || 'TR';
      this.currentLang = savedLang;
      this.translate.use(this.currentLang);
    }
  }

  setLanguage(lang: string) {
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
      this.currentLang = lang;
      window.location.reload(); 
    }
    this.isMenuOpen = false;
  }
}