import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {CheckCircle,AlertCircle,Map,ArrowUpRight,ZoomIn,Maximize2,Building2,Minus,Plus,ExternalLink, LucideAngularModule, Menu, MessageCircle, LayoutGrid, User, Settings, Info, Sun, Moon, Phone, ChevronDown, Home, Car, PhoneCall, Wrench, X, ChevronRight,Facebook, Instagram, Music2, MapPin, Mail, ArrowRight, Crown, Component, PencilLine, Heart, Award} from 'lucide-angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      LucideAngularModule.pick({ Minus,Building2,CheckCircle,Maximize2,ZoomIn,Map,ArrowUpRight,AlertCircle,
        Plus,ExternalLink,LayoutGrid, MessageCircle, Menu, User, 
        Settings, Info, Sun, Moon, Phone, ChevronDown, Home, Car, 
        PhoneCall, Wrench, X, ChevronRight, Facebook, Instagram, Music2, 
        MapPin, Mail, ArrowRight, Crown, Component, PencilLine, Heart, Award})
    )
  ]
};