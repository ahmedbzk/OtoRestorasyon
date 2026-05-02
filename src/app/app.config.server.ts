import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

export class ServerTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const devPath = path.join(process.cwd(), 'src', 'assets', 'i18n', `${lang.toLowerCase()}.json`);
    const prodPath = path.join(process.cwd(), 'dist', 'oto-restorasyon', 'browser', 'assets', 'i18n', `${lang.toLowerCase()}.json`);
    
    let content = '{}';
    if (fs.existsSync(devPath)) {
      content = fs.readFileSync(devPath, 'utf8');
    } else if (fs.existsSync(prodPath)) {
      content = fs.readFileSync(prodPath, 'utf8');
    }
    return of(JSON.parse(content));
  }
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: TranslateLoader,
      useClass: ServerTranslateLoader
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
