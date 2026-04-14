import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-social-fab',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslateModule],
  templateUrl: './social-fab.component.html',
  styleUrl: './social-fab.component.scss'
})
export class SocialFabComponent {
  isOpen = false; 

    toggleMenu() {
      this.isOpen = !this.isOpen; 
    }
  }
