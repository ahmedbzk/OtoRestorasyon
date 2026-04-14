import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core'; 
import { SeoService } from '../../../../services/seo.service'; 

@Component({
  selector: 'app-sss',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './sss.component.html'
})
export class SssComponent implements OnInit {

  constructor(private seoService: SeoService){}
  ngOnInit(): void {
    this.seoService.updateMeta('SEO.FAQ_TITLE', 'SEO.FAQ_DESC');
  }
  
  faqs = [
    { q: 'SSS.Q1', a: 'SSS.A1', isOpen: false },
    { q: 'SSS.Q2', a: 'SSS.A2', isOpen: false },
    { q: 'SSS.Q3', a: 'SSS.A3', isOpen: false },
    { q: 'SSS.Q4', a: 'SSS.A4', isOpen: false },
    { q: 'SSS.Q5', a: 'SSS.A5', isOpen: false },
    { q: 'SSS.Q6', a: 'SSS.A6', isOpen: false },
    { q: 'SSS.Q7', a: 'SSS.A7', isOpen: false },
    { q: 'SSS.Q8', a: 'SSS.A8', isOpen: false }
  ];

  toggle(item: any) {
    item.isOpen = !item.isOpen;
  }
}