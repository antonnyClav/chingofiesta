import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';
@Component({
  selector: 'app-promo-cumple',
  templateUrl: './promo-cumple.component.html',
  styleUrls: ['./promo-cumple.component.css']
})
export class PromoCumpleComponent {
  constructor(private router: Router, private publicacionesService: PublicacionesService) {
    this.getPromoCumple();
  } 
  promosCumple: PublicacionExt[] = [];

  getPromoCumple() {
    this.publicacionesService.getPromoCumple()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.promosCumple = data;
    });
  }

}
