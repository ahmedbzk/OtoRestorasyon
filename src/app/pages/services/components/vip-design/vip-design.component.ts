import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../../../../services/seo.service'; 

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
  imports: [CommonModule, LucideAngularModule, TranslateModule], 
  templateUrl: './vip-design.component.html',
  styleUrl: './vip-design.component.scss'
})
export class VipDesignComponent {
  constructor(private seoService: SeoService){
    this.seoService.updateMeta('SEO.VIP_TITLE', 'SEO.VIP_DESC');
  }

  lightboxImage: string | null = null;

  services: ServiceDetail[] = [
    {
      id: 'luxury',
      title: 'VIP_DESIGN.LUXURY_TITLE',
      subtitle: 'VIP_DESIGN.LUXURY_SUBTITLE',
      description: 'VIP_DESIGN.LUXURY_DESC',
      features: [
        'VIP_DESIGN.LUXURY_FEAT_1', 
        'VIP_DESIGN.LUXURY_FEAT_2', 
        'VIP_DESIGN.LUXURY_FEAT_3', 
        'VIP_DESIGN.LUXURY_FEAT_4'
      ],
      mainImage: 'assets/services/vipluxury1.png',
      gallery: ['assets/services/vipluxury2.png', 'assets/services/vipluxury3.png','assets/services/vipluxury4.png','assets/services/vipluxury5.png']
    },
    {
      id: 'economy',
      title: 'VIP_DESIGN.ECONOMY_TITLE',
      subtitle: 'VIP_DESIGN.ECONOMY_SUBTITLE',
      description: 'VIP_DESIGN.ECONOMY_DESC',
      features: [
        'VIP_DESIGN.ECONOMY_FEAT_1', 
        'VIP_DESIGN.ECONOMY_FEAT_2', 
        'VIP_DESIGN.ECONOMY_FEAT_3', 
        'VIP_DESIGN.ECONOMY_FEAT_4'
      ],
      mainImage: 'assets/services/eco1.png',
      gallery: ['assets/services/mikrofon1.png', 'assets/services/portbagaj1.png']
    },
    {
      id: 'commercial',
      title: 'VIP_DESIGN.COMMERCIAL_TITLE',
      subtitle: 'VIP_DESIGN.COMMERCIAL_SUBTITLE',
      description: 'VIP_DESIGN.COMMERCIAL_DESC',
      features: [
        'VIP_DESIGN.COMMERCIAL_FEAT_1', 
        'VIP_DESIGN.COMMERCIAL_FEAT_2', 
        'VIP_DESIGN.COMMERCIAL_FEAT_3', 
        'VIP_DESIGN.COMMERCIAL_FEAT_4'
      ],
      mainImage: 'assets/services/commercial1.png',
      gallery: ['assets/services/commercial2.png', 'assets/services/commercial3.png','assets/services/commercial4.png','assets/services/commercial5.png']
    }
  ];

  selectedService: ServiceDetail = this.services[0];

  selectCategory(service: ServiceDetail) {
    this.selectedService = service;
  }

  openLightbox(imageUrl: string) {
    this.lightboxImage = imageUrl;
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxImage = null;
    if (typeof document !== 'undefined') document.body.style.overflow = 'auto';
  }
}