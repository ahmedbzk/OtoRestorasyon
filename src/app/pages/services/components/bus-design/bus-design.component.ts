import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core'; 
import { SeoService } from '../../../../services/seo.service'; 

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
  imports: [CommonModule, LucideAngularModule, TranslateModule], 
  templateUrl: './bus-design.component.html',
  styleUrl: './bus-design.component.scss'
})
export class BusDesignComponent implements OnInit {

  constructor(private seoService: SeoService){}

  ngOnInit() {
    this.seoService.updateMeta('SEO.BUS_TITLE', 'SEO.BUS_DESC');
  }


  lightboxImage: string | null = null;

  services: BusService[] = [
    {
      id: 'multimedia',
      title: 'BUS_DESIGN.MULTIMEDIA_TITLE',
      subtitle: 'BUS_DESIGN.MULTIMEDIA_SUBTITLE',
      description: 'BUS_DESIGN.MULTIMEDIA_DESC',
      features: [
        'BUS_DESIGN.MULTIMEDIA_FEAT_1', 
        'BUS_DESIGN.MULTIMEDIA_FEAT_2', 
        'BUS_DESIGN.MULTIMEDIA_FEAT_3', 
        'BUS_DESIGN.MULTIMEDIA_FEAT_4'
      ],
      mainImage: 'assets/services/tvdvd3.png',
      gallery: ['assets/services/mikrofon1.png', 'assets/services/tv1.png', 'assets/services/tvdvd3.png', 'assets/services/tvdvd4.png']
    },
    {
      id: 'upholstery',
      title: 'BUS_DESIGN.UPHOLSTERY_TITLE',
      subtitle: 'BUS_DESIGN.UPHOLSTERY_SUBTITLE',
      description: 'BUS_DESIGN.UPHOLSTERY_DESC',
      features: [
        'BUS_DESIGN.UPHOLSTERY_FEAT_1', 
        'BUS_DESIGN.UPHOLSTERY_FEAT_2', 
        'BUS_DESIGN.UPHOLSTERY_FEAT_3', 
        'BUS_DESIGN.UPHOLSTERY_FEAT_4'
      ],
      mainImage: 'assets/services/koltuk1.png',
      gallery: ['assets/services/koltuk2.png', 'assets/services/koltuk3.png','assets/services/koltuk4.png']
    },
    {
      id: 'storage',
      title: 'BUS_DESIGN.STORAGE_TITLE',
      subtitle: 'BUS_DESIGN.STORAGE_SUBTITLE',
      description: 'BUS_DESIGN.STORAGE_DESC',
      features: [
        'BUS_DESIGN.STORAGE_FEAT_1', 
        'BUS_DESIGN.STORAGE_FEAT_2', 
        'BUS_DESIGN.STORAGE_FEAT_3', 
        'BUS_DESIGN.STORAGE_FEAT_4'
      ],
      mainImage: 'assets/services/portbagaj1.png',
      gallery: ['assets/services/portbagaj2.png', 'assets/services/portbagaj3.png','assets/services/portbagaj4.png']
    }
  ];

  selectedService: BusService = this.services[0];

  selectCategory(service: BusService) {
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