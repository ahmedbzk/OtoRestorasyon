import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // CommonModule *ngFor için şart

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule], // Buraya CommonModule eklediğinden emin ol
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent implements AfterViewInit {

  // TİKTOK LİNKLERİNİ BURAYA EKLE
  // 'id' kısmına videonun URL'sindeki son rakamları yapıştır.
  videos = [
    { id: '7389714216653032712', desc: 'Mercedes Tourismo VIP Restorasyon çalışmamız.' },
    { id: '7207054171122437382', desc: 'İç mekan detayları ve özel işçilik.' },
    { id: '7273992921982995718', desc: 'Çalışmalarımıza Göz Atın.' },
    { id: '7231685759646862597', desc: 'Göz Alıcı Dönüşümler' },
    { id: '7126635137185484034', desc: 'Otobüs Dizaynı' },
    { id: '7067043602316250370', desc: 'İç Tasarım Ferahlığı' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Sadece tarayıcıda çalışması için bu kontrol ŞART
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