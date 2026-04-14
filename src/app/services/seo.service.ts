import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title, 
    private meta: Meta, 
    private translate: TranslateService
  ) {}

  updateMeta(titleKey: string, descKey: string) {
    this.translate.get([titleKey, descKey]).subscribe(translations => {
      const pageTitle = `${translations[titleKey]} | VIP Auto Design`;
      const description = translations[descKey];

      this.title.setTitle(pageTitle);

      this.meta.updateTag({ name: 'description', content: description });
      
      this.meta.updateTag({ property: 'og:title', content: pageTitle });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:image', content: 'assets/logo2.png' });
    });
  }
}