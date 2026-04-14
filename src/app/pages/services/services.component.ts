import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; 
import { LucideAngularModule } from 'lucide-angular';
import { filter } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LucideAngularModule, TranslateModule], 
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  pageTitle: string = 'NAV.SERVICES'; 

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
    if (url.includes('vip-design')) {
      this.pageTitle = 'NAV.VIP_DESIGN';
    } else if (url.includes('bus-design')) {
      this.pageTitle = 'NAV.BUS_DESIGN';
    } else {
      this.pageTitle = 'NAV.SERVICES';
    }
  }
}