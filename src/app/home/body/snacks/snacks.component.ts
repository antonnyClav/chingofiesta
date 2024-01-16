import { Component } from '@angular/core';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent {
  constructor(private publicacionesService: PublicacionesService) {
    this.getSnacks();
  }

  snacks: PublicacionExt[] = [];
  snacks_combos: PublicacionExt[] = [];
  getSnacks() {
    this.publicacionesService.getSnacks()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.snacks = data.filter(x=> x.nombre!='Combo Snacks');         
      this.snacks_combos = data.filter(x=> x.nombre=='Combo Snacks'); 
    });
  }

}
