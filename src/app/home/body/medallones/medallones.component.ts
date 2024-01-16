import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-medallones',
  templateUrl: './medallones.component.html',
  styleUrls: ['./medallones.component.css']
})
export class MedallonesComponent {
  constructor(private router: Router, private publicacionesService: PublicacionesService) {
    this.getMedallones();
  } 
  medallones_promo_1_2_3: PublicacionExt[] = [];
  medallones_promo_14_15_16: PublicacionExt[] = [];  
  medallonesMaxi_41_42_43: PublicacionExt[] = [];
  medallonesMaxi_50_51_52: PublicacionExt[] = [];
  medallonesMaxi_11_12_13: PublicacionExt[] = [];
  medallonesMaxi_31_32_33: PublicacionExt[] = [];
  medallonesMaxi_23_24_25: PublicacionExt[] = [];

  ngOnInit(): void {
  }

  getMedallones() {
    this.publicacionesService.getMedallones()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.medallones_promo_1_2_3 = data.filter(x => x.nombre == 'Promo 1' || x.nombre == 'Promo 2' || x.nombre == 'Promo 3');
      this.medallones_promo_14_15_16 = data.filter(x => x.nombre == 'Promo 14' || x.nombre == 'Promo 15' || x.nombre == 'Promo 16');
      this.medallonesMaxi_41_42_43 = data.filter(x => x.nombre == 'Promo 41' || x.nombre == 'Promo 42' || x.nombre == 'Promo 43');
      this.medallonesMaxi_50_51_52 = data.filter(x => x.nombre == 'Promo 50' || x.nombre == 'Promo 51' || x.nombre == 'Promo 52');
      this.medallonesMaxi_11_12_13 = data.filter(x => x.nombre == 'Promo 11' || x.nombre == 'Promo 12' || x.nombre == 'Promo 13');
      this.medallonesMaxi_31_32_33 = data.filter(x => x.nombre == 'Promo 31' || x.nombre == 'Promo 32' || x.nombre == 'Promo 33');
      this.medallonesMaxi_23_24_25 = data.filter(x => x.nombre == 'Promo 23' || x.nombre == 'Promo 24' || x.nombre == 'Promo 25');

    });
  }
}
