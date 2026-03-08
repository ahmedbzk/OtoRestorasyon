import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-spare-parts-overview',
  standalone: true,
  imports: [LucideAngularModule, RouterLinkActive,RouterLink],
  templateUrl: './spare-parts-overview.component.html',
  styleUrl: './spare-parts-overview.component.scss'
})
export class SparePartsOverviewComponent {

}
