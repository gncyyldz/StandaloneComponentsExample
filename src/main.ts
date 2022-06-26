import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloDirective } from './app/directives/hello.directive';
import { HelloComponent } from './app/hello/hello.component';
import { HelloPipe } from './app/pipes/hello.pipe';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    { provide: "url", useValue: "https://..." },
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
    )
  ]
})
