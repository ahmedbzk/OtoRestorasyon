import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sss',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './sss.component.html'
})
export class SssComponent {
  faqs = [
    { q: 'Mercedes restorasyonu ne kadar sürer?', a: 'Aracın durumuna göre süreç 3-6 ay arasında değişmektedir.', isOpen: false },
    { q: 'Orijinal parça garantisi var mı?', a: 'Tüm projelerimizde %100 orijinal Mercedes parçaları önceliğimizdir.', isOpen: false },
    { q: 'VIP tasarım ruhsata işlenir mi?', a: 'Evet, tüm dönüşümlerimiz TSE onaylı projelerle ruhsata uygun yapılır.', isOpen: false },
    { q: 'Otobüsleri modernize ediyor musunuz?', a: 'Eski model otobüsleri en son teknolojiyle baştan yaratıyoruz.', isOpen: false },
    { q: 'Randevu ile mi çalışıyorsunuz?', a: 'İşçilik kalitemizi korumak adına sadece randevulu araç kabul ediyoruz.', isOpen: false },
    { q: 'Şehir dışından araç alıyor musunuz?', a: 'Türkiye geneli ve yurt dışı projelerimiz için lojistik desteğimiz mevcuttur.', isOpen: false },
    { q: 'Koltuk mekanizmaları garantili mi?', a: 'VIP tasarımlarımızdaki tüm elektronik aksamlar 2 yıl garantilidir.', isOpen: false },
    { q: 'Fiyatlandırma nasıl yapılıyor?', a: 'Fiyatlar seçilen malzeme kalitesi ve donanımlara göre belirlenir.', isOpen: false }
  ];

  toggle(item: any) {
  item.isOpen = !item.isOpen;
}
}