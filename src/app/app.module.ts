import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
 
import { AppComponent } from './app.component'; 
import { ServiceWorkerModule } from '@angular/service-worker'; 
import { environment } from '../environments/environment'; 
 
@NgModule({ 
  declarations: [ 
    AppComponent 
  ], 
  imports: [ 
    BrowserModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { 
      enabled: environment.production, 
      // Register the ServiceWorker as soon as the app is stable 
      // or after 30 seconds (whichever comes first). 
      registrationStrategy: 
'registerWhenStable:30000' 
    }), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}) 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 
