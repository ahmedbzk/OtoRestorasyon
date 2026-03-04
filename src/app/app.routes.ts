import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { AboutComponent } from './pages/corporate/components/about/about.component';
import { MediaComponent } from './pages/corporate/components/media/media.component';
import { SssComponent } from './pages/corporate/components/sss/sss.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ana Sayfa
  
  { 
    path: 'corporate', 
    component: CorporateComponent, // Banner burada duruyor
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'media', component: MediaComponent },
      { path: 'sss', component: SssComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' } // /corporate yazınca direkt Hakkımızda'ya atar
    ]
  },

  { path: '**', redirectTo: '' } // Yanlış link girilirse ana sayfaya döner
];