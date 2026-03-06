import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet,  Router, NavigationEnd } from '@angular/router'; 
import { LucideAngularModule } from 'lucide-angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterOutlet,  LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{
  pageTitle: string = 'HİZMETLERİMİZ'; // Varsayılan

  constructor(private router: Router){}


  ngOnInit() {
      this.updateTitle();
      // Sayfa her değiştiğinde başlığı güncelle
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.updateTitle();
      });
    }
  
    updateTitle() {
      const url = this.router.url;
      if (url.includes('vip-design')) {
        this.pageTitle = 'VIP DİZAYN';
      } else  if(url.includes('bus-design')) {
        this.pageTitle = 'OTOBÜS DİZAYN';
      } else {
        this.pageTitle = 'HİZMETLERİMİZ';
      }
    }

    
}
