import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule } from 'lucide-angular';
import { SeoService } from '../../../../services/seo.service'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule,TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService){}
  
    ngOnInit() {
      this.seoService.updateMeta('SEO.ABOUT_TITLE', 'SEO.ABOUT_DESC');
    }

}
