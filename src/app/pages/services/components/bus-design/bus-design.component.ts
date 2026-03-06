import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface BusService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  mainImage: string;
  gallery: string[];
}

@Component({
  selector: 'app-bus-design',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './bus-design.component.html',
  styleUrl: './bus-design.component.scss'
})
export class BusDesignComponent {
    // LIGHTBOX MANTIĞI: Tıklanan görseli tutan değişken
  lightboxImage: string | null = null;
  // Otobüs Dizayn Başlıkları
  services: BusService[] = [
    {
      id: 'multimedia',
      title: 'TV, MÜZİK VE ŞARJ SİSTEMLERİ',
      subtitle: 'Yolculuk Boyu Kesintisiz Eğlence',
      description: 'Otobüs içi eğlence sistemlerinde devrim yapıyoruz. Her koltuğa özel multimedya ekranları, yüksek kaliteli ses sistemleri ve her yolcu için bağımsız USB şarj üniteleri ile konforu standart hale getiriyoruz.',
      features: ['Merkezi TV & Uydu Sistemi', 'Bağımsız Mikrofon Üniteleri', 'Koltuk Arkası Multimedya', 'Hızlı Şarj Aparatları'],
      mainImage: 'assets/services/tvdvd3.png',
      gallery: ['assets/services/mikrofon1.png', 'assets/services/tv1.png', 'assets/services/tvdvd3.png', 'assets/services/tvdvd4.png']
    },
    {
      id: 'upholstery',
      title: 'KOLTUK DÖŞEME MODELLERİ',
      subtitle: 'Ergonomi ve Estetiğin Buluşması',
      description: 'Uzun yolculukların yorgunluğunu unutturan özel tasarım koltuk döşemeleri. Terletmeyen kumaş teknolojisi, hakiki deri seçenekleri ve her otobüs tipine uygun modern desenlerle iç mekanı baştan yaratıyoruz.',
      features: ['Ortopedik Sünger Yapısı', 'Alev Almaz Kumaşlar', 'Kişiye Özel Renk Seçenekleri', 'Logolu Nakış İşlemeleri'],
      mainImage: 'assets/services/koltuk1.png',
      gallery: ['assets/services/koltuk2.png', 'assets/services/koltuk3.png','assets/services/koltuk4.png']
    },
    {
      id: 'storage',
      title: 'PORT BAGAJ VE DEPOLAMA',
      subtitle: 'Maksimum Kapasite, Akıllı Çözümler',
      description: 'Otobüs iç hacmini en verimli şekilde kullanan port bagaj ve depolama sistemleri. Dayanıklı malzemeler ve şık aydınlatma detayları ile bagaj alanlarını daha güvenli ve kullanışlı hale getiriyoruz.',
      features: ['Led Aydınlatmalı Kanallar', 'Yüksek Taşıma Kapasitesi', 'Darbelere Dayanıklı Malzeme', 'Kilitli Bölme Seçenekleri'],
      mainImage: 'assets/services/portbagaj1.png',
      gallery: ['assets/services/portbagaj2.png', 'assets/services/portbagaj3.png','assets/services/portbagaj4.png']
    }
  ];

  selectedService: BusService = this.services[0];

  selectCategory(service: BusService) {
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