import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit{
  constructor(private router: Router, private publicacionesService: PublicacionesService) {
    this.getOfertas();
  }
  ofertas: PublicacionExt[] = [];

  ngOnInit(): void {
    
  }

  getOfertas() {
    this.publicacionesService.getOfertas()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.ofertas = data;
      
    });
  }   
}
/*
promofiesta
econofiesta
fiestaya
*/