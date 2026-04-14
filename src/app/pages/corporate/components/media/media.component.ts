import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent implements AfterViewInit {

  videos = [
    { id: '7389714216653032712', desc: 'MEDIA.VIDEO1_DESC' },
    { id: '7207054171122437382', desc: 'MEDIA.VIDEO2_DESC' },
    { id: '7273992921982995718', desc: 'MEDIA.VIDEO3_DESC' },
    { id: '7231685759646862597', desc: 'MEDIA.VIDEO4_DESC' },
    { id: '7126635137185484034', desc: 'MEDIA.VIDEO5_DESC' },
    { id: '7067043602316250370', desc: 'MEDIA.VIDEO6_DESC' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTikTokScript();
    }
  }

  loadTikTokScript() {
    if ((window as any).tiktok) {
      (window as any).tiktok.reload();
    } else {
      const script = document.createElement('script');
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }
}