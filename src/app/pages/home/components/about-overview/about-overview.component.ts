import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-about-overview',
  standalone: true,
  imports: [LucideAngularModule,RouterLink,TranslateModule],
  templateUrl: './about-overview.component.html',
  styleUrl: './about-overview.component.scss'
})
export class AboutOverviewComponent {

}
