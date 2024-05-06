import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-bebidas-congelados',
  templateUrl: './bebidas-congelados.component.html',
  styleUrls: ['./bebidas-congelados.component.css']
})
export class BebidasCongeladosComponent implements OnInit{
  constructor(private router: Router, private publicacionesService: PublicacionesService) {
    this.getBebidas();
  }
  bebidas: PublicacionExt[] = [];

  ngOnInit(): void {

  }

  getBebidas() {
    this.publicacionesService.getBebidasCongelados()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.bebidas = data;
    });
  }
}
