import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// Kullanacağın TÜM ikonları buradan import etmelisin
import { LucideAngularModule, Menu, User, Settings, Info, Sun, Moon, Phone, ChevronDown, Home, Car, PhoneCall, Wrench, X, ChevronRight,Facebook, Instagram, Music2, MapPin, Mail, ArrowRight, Crown, Component, PencilLine, Heart, Award} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      // Buradaki listeye Sun, Moon ve Phone ikonlarını eklemeyi unutma!
      LucideAngularModule.pick({ Menu, User, Settings, Info, Sun, Moon, Phone, ChevronDown, Home, Car, PhoneCall, Wrench, X, ChevronRight, Facebook, Instagram, Music2, MapPin, Mail, ArrowRight, Crown, Component, PencilLine, Heart, Award})
    )
  ]
};