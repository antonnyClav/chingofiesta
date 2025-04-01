import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrls: ['./hamburguesas.component.css']
})
export class HamburguesasComponent implements OnInit, OnDestroy{
  constructor(private router: Router, private publicacionesService: PublicacionesService, private servicioComunicacion: ComunicacionService) {
    this.getHamburguesas();
    this.getHamburguesas100Carne();
  }
  hamburguesas: PublicacionExt[] = [];
  hamburguesas_NoCaseras: PublicacionExt[] = [];
  hamburguesas_Caseras: PublicacionExt[] = [];

  hamburguesasTMP: PublicacionExt[] = [];
  hamburguesas_NoCaserasTMP: PublicacionExt[] = [];
  hamburguesas_CaserasTMP: PublicacionExt[] = [];

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
    }, 500); // Cambia cada 1 segundo (1000ms)
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo cuando el componente se destruye
    }
  }

  getHamburguesas() {
    this.publicacionesService.getHamburguesas()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.hamburguesas = data; 
      this.hamburguesasTMP = data;   
    });
  }
  getHamburguesas100Carne() {
    this.publicacionesService.getHamburguesas100Carne()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => {       
      this.hamburguesas_Caseras = data.filter(x => x.imagen == './assets/swift_casera.png');    
      this.hamburguesas_CaserasTMP = data.filter(x => x.imagen == './assets/swift_casera.png');    

      this.hamburguesas_NoCaseras = data.filter(x => x.imagen != './assets/swift_casera.png');     
      this.hamburguesas_NoCaserasTMP = data.filter(x => x.imagen != './assets/swift_casera.png');         
      //console.log(this.hamburguesas_NoCaseras);
    });
  }

  Buscar(): void{
    this.hamburguesas = [];     
    let hamburguesasTMP: PublicacionExt[];
    
    hamburguesasTMP = this.hamburguesasTMP;        
    hamburguesasTMP = hamburguesasTMP.filter(item => 
      Object.keys(item).some(k =>  
        (item as any)[k] != null && 
        this.removeAccents((item as any)[k].toString()).toLowerCase().includes(
          this.removeAccents(this.busqueda.toLowerCase())
        )
      )
    );    
    this.hamburguesas = hamburguesasTMP; 

    this.hamburguesas_Caseras =[];
    let hamburguesas_CaserasTMP: PublicacionExt[];

    hamburguesas_CaserasTMP = this.hamburguesas_CaserasTMP;        
    hamburguesas_CaserasTMP = hamburguesas_CaserasTMP.filter(item => 
      Object.keys(item).some(k =>  
        (item as any)[k] != null && 
        this.removeAccents((item as any)[k].toString()).toLowerCase().includes(
          this.removeAccents(this.busqueda.toLowerCase())
        )
      )
    );    
    this.hamburguesas_Caseras = hamburguesas_CaserasTMP;

    this.hamburguesas_NoCaseras = [];
    let hamburguesas_NoCaserasTMP: PublicacionExt[];

    hamburguesas_NoCaserasTMP = this.hamburguesas_NoCaserasTMP;        
    hamburguesas_NoCaserasTMP = hamburguesas_NoCaserasTMP.filter(item => 
      Object.keys(item).some(k =>  
        (item as any)[k] != null && 
        this.removeAccents((item as any)[k].toString()).toLowerCase().includes(
          this.removeAccents(this.busqueda.toLowerCase())
        )
      )
    );    
    this.hamburguesas_NoCaseras = hamburguesas_NoCaserasTMP;

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
