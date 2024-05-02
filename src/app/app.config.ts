import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
              provideHttpClient(withInterceptorsFromDi()),
              provideRouter(routes,              
              withPreloading(PreloadAllModules)
              ),              
              importProvidersFrom([
                BrowserModule
              ])
            ]
};
