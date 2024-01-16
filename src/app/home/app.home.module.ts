import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routesHome } from './app.home.routing.module';
import { DefaultComponent } from '../home/body/default/default.component';
import { HamburguesasComponent } from '../home/body/hamburguesas/hamburguesas.component';
import { PanchosComponent } from '../home/body/panchos/panchos.component';
import { SnacksComponent } from '../home/body/snacks/snacks.component';
import { MedallonesComponent } from './body/medallones/medallones.component';
import { BebidasCongeladosComponent } from '../home/body/bebidas-congelados/bebidas-congelados.component';
import { PanchosLargosComponent } from './body/panchos-largos/panchos-largos.component';
import { PromoCumpleComponent } from '../home/body/promo-cumple/promo-cumple.component';
import { ProductosComponent } from '../home/body/productos/productos.component';
import { LocalesComponent } from '../home/body/locales/locales.component';
import { UbicacionesComponent } from '../home/body/ubicaciones/ubicaciones.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultComponent,
    HamburguesasComponent,
    PanchosComponent,
    SnacksComponent,
    MedallonesComponent,
    BebidasCongeladosComponent,
    PanchosLargosComponent,
    PromoCumpleComponent,
    ProductosComponent,
    LocalesComponent,
    UbicacionesComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesHome)
  ],
  providers: [],
  bootstrap: []
})
export class AppHomeModule { }
