import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy{
  constructor(private router: Router, private publicacionesService: PublicacionesService, private servicioComunicacion: ComunicacionService) {
    this.getOfertas();
  }
  ofertas: PublicacionExt[] = [];
  ofertasTMP: PublicacionExt[] = [];
  busqueda: string = "";
  intervalId: any;
  color: string = 'rgb(20, 130, 42)';
  ngOnInit(): void {
    this.servicioComunicacion.buscandoObservable.subscribe(busqueda => {
      //if(busqueda){        
        //console.log("buscando: " + busqueda);
        this.busqueda = busqueda;
        this.Buscar();
      //}            
    });
    this.intervalId = setInterval(() => {
      this.color = this.color === 'rgb(20, 130, 42)' ? 'rgb(9, 161, 39)' : 'rgb(20, 130, 42)';
    }, 500); // Cambia cada x segundo (500ms)
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo cuando el componente se destruye
    }
  }

  getOfertas() {
    this.publicacionesService.getOfertas()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.ofertas = data;
      this.ofertasTMP = data;
      
    });
  }   
  Buscar(): void{

    this.ofertas = [];
    let ofertasTMP: PublicacionExt[];
    
    ofertasTMP = this.ofertasTMP;        
    ofertasTMP = ofertasTMP.filter(item => 
      Object.keys(item).some(k => 
        (item as any)[k] != null && 
        this.removeAccents((item as any)[k].toString()).toLowerCase().includes(
          this.removeAccents(this.busqueda.toLowerCase())
        )
      )
    );
    
    this.ofertas = ofertasTMP; 
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  removeAccents = (str: any) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 
}
/*
promofiesta
econofiesta
fiestaya
*/