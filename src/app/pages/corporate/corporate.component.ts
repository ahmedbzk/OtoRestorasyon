import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet,  Router, NavigationEnd } from '@angular/router'; 
import { LucideAngularModule } from 'lucide-angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-corporate',
  standalone: true, // Eğer standalone kullanıyorsan
  imports: [CommonModule,RouterOutlet,  LucideAngularModule], // 2. Buraya ekle
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {
  pageTitle: string = 'HAKKIMIZDA'; // Varsayılan

  constructor(private router: Router) {}

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
    if (url.includes('media')) {
      this.pageTitle = 'MEDYA İÇERİKLERİ';
    } else if (url.includes('sss')) {
      this.pageTitle = 'SIKÇA SORULAN SORULAR';
    } else {
      this.pageTitle = 'HAKKIMIZDA';
    }
  }
}