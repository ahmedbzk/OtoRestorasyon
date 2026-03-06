import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-social-fab',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './social-fab.component.html',
  styleUrl: './social-fab.component.scss'
})
export class SocialFabComponent {
  isOpen = false; // Menü durumu kontrolü

    toggleMenu() {
      this.isOpen = !this.isOpen; // Tıklayınca tersine çevir
    }
  }
