import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-panchos-largos',
  templateUrl: './panchos-largos.component.html',
  styleUrls: ['./panchos-largos.component.css']
})
export class PanchosLargosComponent {
  constructor(private router: Router, private publicacionesService: PublicacionesService) {
    this.getPanchosLargos();
  }
  panchosLargos_v1: PublicacionExt[] = [];
  panchosLargos_v2: PublicacionExt[] = [];
  panchosLargos_v3: PublicacionExt[] = [];
  panchosLargos_v4: PublicacionExt[] = [];

  ngOnInit(): void {

  }

  getPanchosLargos() {
    this.publicacionesService.getPanchosLargos()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.panchosLargos_v1 = data.filter(x=> x.nombre == 'Promo 7 (Económica)' || x.nombre == 'Promo 8 (Económica)');
      this.panchosLargos_v2 = data.filter(x=> x.nombre == 'Promo 7' || x.nombre == 'Promo 8');
      this.panchosLargos_v3 = data.filter(x=> x.nombre == 'Promo Unión Ganadera');
      this.panchosLargos_v4 = data.filter(x=> x.nombre == 'Promo Swift');
    });
  }
}
