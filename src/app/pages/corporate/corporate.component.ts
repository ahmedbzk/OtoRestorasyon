import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; 
import { LucideAngularModule } from 'lucide-angular';
import { filter } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-corporate',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LucideAngularModule, TranslateModule], 
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {
  pageTitle: string = 'NAV.ABOUT_US'; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTitle();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  updateTitle() {
    const url = this.router.url;
    if (url.includes('media')) {
      this.pageTitle = 'NAV.MEDIA';
    } else if (url.includes('sss')) {
      this.pageTitle = 'NAV.FAQ';
    } else {
      this.pageTitle = 'NAV.ABOUT_US';
    }
  }
}