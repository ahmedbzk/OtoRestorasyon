import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// Kullanacağın TÜM ikonları buradan import etmelisin
import {CheckCircle,Maximize2,Building2,Minus,Plus,ExternalLink, LucideAngularModule, Menu, MessageCircle, LayoutGrid, User, Settings, Info, Sun, Moon, Phone, ChevronDown, Home, Car, PhoneCall, Wrench, X, ChevronRight,Facebook, Instagram, Music2, MapPin, Mail, ArrowRight, Crown, Component, PencilLine, Heart, Award} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      // Buradaki listeye Sun, Moon ve Phone ikonlarını eklemeyi unutma!
      LucideAngularModule.pick({ Minus,Building2,CheckCircle,Maximize2,
        Plus,ExternalLink,LayoutGrid, MessageCircle, Menu, User, 
        Settings, Info, Sun, Moon, Phone, ChevronDown, Home, Car, 
        PhoneCall, Wrench, X, ChevronRight, Facebook, Instagram, Music2, 
        MapPin, Mail, ArrowRight, Crown, Component, PencilLine, Heart, Award})
    )
  ]
};