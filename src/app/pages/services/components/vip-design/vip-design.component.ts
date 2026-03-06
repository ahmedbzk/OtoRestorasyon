import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  mainImage: string;
  gallery: string[];
}

@Component({
  selector: 'app-vip-design',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './vip-design.component.html',
  styleUrl: './vip-design.component.scss'
})
export class VipDesignComponent {
  // LIGHTBOX MANTIĞI: Tıklanan görseli tutan değişken
  lightboxImage: string | null = null;


  
  // 3 Ana Başlığımız ve İçerikleri
  services: ServiceDetail[] = [
    {
      id: 'luxury',
      title: 'LUXURY EDITION',
      subtitle: 'Sınırsız Konfor, Eşsiz Lüks',
      description: 'En üst segment malzemelerle donatılmış, tamamen kişiselleştirilebilir lüks yaşam alanı. İş seyahatlerinizde ofis, ailenizle seyahatlerinizde ise bir saray konforu sunar.',
      features: ['Nappa Deri Kaplama', 'Yıldız Tavan Aydınlatma', 'Ara Bölme TV Sistemi', 'Kahve Makinesi & Buzdolabı'],
      mainImage: 'assets/services/vipluxury1.png',
      gallery: ['assets/services/vipluxury2.png', 'assets/services/vipluxury3.png','assets/services/vipluxury4.png','assets/services/vipluxury5.png']
    },
    {
      id: 'economy',
      title: 'ECONOMY DESIGN',
      subtitle: 'Fonksiyonel ve Şık Çözümler',
      description: 'Kaliteden ödün vermeden, daha kompakt ve fonksiyonel çözümler arayanlar için tasarlandı. Ergonomik koltuk yapısı ve dayanıklı malzemelerle uzun ömürlü kullanım sağlar.',
      features: ['Ergonomik Koltuklar', 'Multimedya Eğlence Paketi', 'USB Şarj Noktaları', 'Özel Saklama Alanları'],
      mainImage: 'assets/services/eco1.png',
      gallery: ['assets/services/mikrofon1.png', 'assets/services/portbagaj1.png']
    },
    {
      id: 'commercial',
      title: 'COMMERCIAL VEHICLE',
      subtitle: 'İş Dünyasının Yeni Ofisi',
      description: 'Ticari araçlarınızı mobil bir ofise dönüştürüyoruz. Toplantı masalarından yüksek hızlı internet altyapısına kadar her şey profesyonel ihtiyaçlarınız için hazır.',
      features: ['Mobil Ofis Donanımı', 'Katlanabilir Toplantı Masası', 'Yüksek Hızlı Wi-Fi', '220V Priz Bağlantıları'],
      mainImage: 'assets/services/commercial1.png',
      gallery: ['assets/services/commercial2.png', 'assets/services/commercial3.png','assets/services/commercial4.png','assets/services/commercial5.png']
    }
  ];

  selectedService: ServiceDetail = this.services[0]; // Varsayılan Luxury Edition

  selectCategory(service: ServiceDetail) {
    this.selectedService = service;
  }

  // Görseli açan fonksiyon
  openLightbox(imageUrl: string) {
    this.lightboxImage = imageUrl;
    // Sayfa kaydırılmasını durdur (isteğe bağlı, VIP için tavsiye edilir)
    document.body.style.overflow = 'hidden';
  }

  // Görseli kapatan fonksiyon
  closeLightbox() {
    this.lightboxImage = null;
    // Sayfa kaydırılmasını geri aç
    document.body.style.overflow = 'auto';
  }
}