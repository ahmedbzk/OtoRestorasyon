import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { routes } from './app.routes';
import {CheckCircle,AlertCircle,Map,ArrowUpRight,ZoomIn,Maximize2,Building2,Minus,Plus,ExternalLink, LucideAngularModule, Menu, MessageCircle, LayoutGrid, User, Settings, Info, Sun, Moon, Phone, ChevronDown, Home, Car, PhoneCall, Wrench, X, ChevronRight,Facebook, Instagram, Music2, MapPin, Mail, ArrowRight, Crown, Component, PencilLine, Heart, Award} from 'lucide-angular';

import { map } from 'rxjs'; 
import { IMAGE_CONFIG } from '@angular/common';


export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation(lang: string) {
      return http.get<any>(`./assets/i18n/${lang.toLowerCase()}.json`);
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true,
      disableImageLazyLoadWarning: true
    }
  },
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideClientHydration(),
    provideAnimations(), 
    provideHttpClient(withFetch()), 
    importProvidersFrom(
  LucideAngularModule.pick({
        Menu, X, Home, Building2, Car, Wrench, PhoneCall, 
        ChevronDown, Facebook, Instagram, MessageCircle, 
        ArrowRight, CheckCircle, AlertCircle, Map, ArrowUpRight,
        ZoomIn, Music2,Maximize2,Minus,Plus,ExternalLink,LayoutGrid, User, Settings, Info, Sun, Moon, Phone,ChevronRight,MapPin, Mail,Crown, Component, PencilLine, Heart, Award
      }),      
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        fallbackLang: 'TR'
      })
    )
  ]
};