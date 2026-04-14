import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [LucideAngularModule,RouterLink,TranslateModule],
  templateUrl: './services-overview.component.html',
  styleUrl: './services-overview.component.scss'
})
export class ServicesOverviewComponent {

}
