import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent {
  constructor(private router: Router, private publicacionesService: PublicacionesService) {
    this.getHamburguesas();
    this.getHamburguesas100Carne();
  }
  hamburguesas: PublicacionExt[] = [];
  hamburguesas_NoCaseras: PublicacionExt[] = [];
  hamburguesas_Caseras: PublicacionExt[] = [];

  ngOnInit(): void {

  }

  getHamburguesas() {
    this.publicacionesService.getHamburguesas()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.hamburguesas = data;         
    });
  }
  getHamburguesas100Carne() {
    this.publicacionesService.getHamburguesas100Carne()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => {       
      this.hamburguesas_Caseras = data.filter(x => x.imagen == './assets/swift_casera.png');         
      this.hamburguesas_NoCaseras = data.filter(x => x.imagen != './assets/swift_casera.png');         
      //console.log(this.hamburguesas_NoCaseras);
    });
  }
}
