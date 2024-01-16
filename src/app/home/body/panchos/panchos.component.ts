import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-panchos',
  templateUrl: './panchos.component.html',
  styleUrls: ['./panchos.component.css']
})
export class PanchosComponent {
  constructor(private router: Router, private publicacionesService: PublicacionesService) {
    this.getPanchos();
  }
  panchos_promo_5_6_eco: PublicacionExt[] = [];
  panchos_promo_5_6: PublicacionExt[] = [];
  panchos_ug: PublicacionExt[] = [];
  panchos_swift: PublicacionExt[] = [];

  ngOnInit(): void {

  }

  getPanchos() {
    this.publicacionesService.getPanchos()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);      
      this.panchos_promo_5_6_eco = data.filter(x=> x.nombre == 'Promo 5 (Económica)' || x.nombre == 'Promo 6 (Económica)');
      this.panchos_promo_5_6 = data.filter(x=> x.nombre == 'Promo 5' || x.nombre == 'Promo 6');
      this.panchos_ug = data.filter(x=> x.nombre == 'Promo Unión Ganadera');
      this.panchos_swift = data.filter(x=> x.nombre == 'Promo Swift');
    });
  }
}
