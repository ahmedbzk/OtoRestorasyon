import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { AboutComponent } from './pages/corporate/components/about/about.component';
import { MediaComponent } from './pages/corporate/components/media/media.component';
import { SssComponent } from './pages/corporate/components/sss/sss.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ServicesComponent } from './pages/services/services.component';
import { BusDesignComponent } from './pages/services/components/bus-design/bus-design.component';
import { VipDesignComponent } from './pages/services/components/vip-design/vip-design.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  
  { 
    path: 'corporate', 
    component: CorporateComponent, 
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'media', component: MediaComponent },
      { path: 'sss', component: SssComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' } 
    ]
  },
   { 
    path: 'services', 
    component: ServicesComponent, 
    children: [
      { path: 'bus-design', component: BusDesignComponent },
      { path: 'vip-design', component: VipDesignComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' } 
    ]
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: '**', redirectTo: '' } // Yanlış link girilirse ana sayfaya döner
];