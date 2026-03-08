import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about-overview',
  standalone: true,
  imports: [LucideAngularModule,RouterLink],
  templateUrl: './about-overview.component.html',
  styleUrl: './about-overview.component.scss'
})
export class AboutOverviewComponent {

}
