import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppMenuComponent } from './home/header/app-menu/app-menu.component';
import { SubMenuComponent } from './home/header/sub-menu/sub-menu.component';
import { MarcasComponent } from './home/header/marcas/marcas.component';
import { FooterComponent } from './home/footer/footer/footer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../app/shared/services/config.service';
import { ModalComponent } from './home/modal/modal.component';

function appInitializerFn(configService: ConfigService) {
  return () => {
    return configService.setConfig();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppMenuComponent,
    SubMenuComponent,
    MarcasComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, 
    { provide: APP_INITIALIZER, useFactory: appInitializerFn, multi: true, deps: [ConfigService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
