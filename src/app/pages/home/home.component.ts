import { Component } from '@angular/core';
import { ServicesOverviewComponent } from "./components/services-overview/services-overview.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutOverviewComponent } from './components/about-overview/about-overview.component';
import { SparePartsOverviewComponent } from './components/spare-parts-overview/spare-parts-overview.component';
import { ReferancesOverviewComponent } from './components/referances-overview/referances-overview.component';
import { MottoOverviewComponent } from './components/motto-overview/motto-overview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesOverviewComponent, HeroComponent,AboutOverviewComponent,SparePartsOverviewComponent,ReferancesOverviewComponent,MottoOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
