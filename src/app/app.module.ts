import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChipsComponent } from './my-chips/my-chips.component';
import { MyChipComponent } from './my-chip/my-chip.component';

@NgModule({
  declarations: [AppComponent, MyChipsComponent, MyChipComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) { 
    appRef.bootstrap(AppComponent);
    if (window.Cypress) {
      // and save the application reference
      window.appRef = appRef;
    }
  }
}
