import { Routes } from '@angular/router';
import { HamburguesasComponent } from '../home/body/hamburguesas/hamburguesas.component';
import { HomeComponent } from '../home/home.component';
import { DefaultComponent } from '../home/body/default/default.component';
import { SnacksComponent } from '../home/body/snacks/snacks.component';
import { MedallonesComponent } from './body/medallones/medallones.component';
import { BebidasCongeladosComponent } from '../home/body/bebidas-congelados/bebidas-congelados.component';
import { PanchosLargosComponent } from './body/panchos-largos/panchos-largos.component';
import { PromoCumpleComponent } from '../home/body/promo-cumple/promo-cumple.component';
import { PanchosComponent } from '../home/body/panchos/panchos.component';
import { ProductosComponent } from '../home/body/productos/productos.component';
import { LocalesComponent } from '../home/body/locales/locales.component';
import { UbicacionesComponent } from '../home/body/ubicaciones/ubicaciones.component';

export const routesHome: Routes = [
  {path: '', component: HomeComponent, 
    children: [
    {path: 'default', component: DefaultComponent},
    {path: 'hamburguesas', component: HamburguesasComponent}, 
    {path: 'panchos', component: PanchosComponent}, 
    {path: 'snacks', component: SnacksComponent},  
    {path: 'medallones', component: MedallonesComponent},
    {path: 'bebidas_congelados', component: BebidasCongeladosComponent},
    {path: 'panchos_largos', component: PanchosLargosComponent},
    {path: 'promo_cumple', component: PromoCumpleComponent},

    {path: 'productos', component: ProductosComponent},
    {path: 'locales', component: LocalesComponent},
    {path: 'ubicaciones/:id', component: UbicacionesComponent},
    {path: 'ubicaciones', component: UbicacionesComponent},
    
    {path: '**', redirectTo:'default'},
  ]
}];