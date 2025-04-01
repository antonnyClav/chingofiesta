import { Component, OnDestroy, OnInit } from '@angular/core';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit, OnDestroy{
  constructor(private publicacionesService: PublicacionesService, private servicioComunicacion: ComunicacionService) {
    this.getSnacks();
  }

  dataTMP: PublicacionExt[] = [];
  snacks: PublicacionExt[] = [];
  snacks_combos: PublicacionExt[] = [];
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

  getSnacks() {
    this.publicacionesService.getSnacks()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.dataTMP = data;
      this.snacks = data.filter(x=> x.nombre!='Combo Snacks');         
      this.snacks_combos = data.filter(x=> x.nombre=='Combo Snacks'); 
    });
  }

  Buscar(): void{
    let dataTMP: PublicacionExt[];
    
    dataTMP = this.dataTMP;        
    dataTMP = dataTMP.filter(item => 
      Object.keys(item).some(k => 
        (item as any)[k] != null && 
        this.removeAccents((item as any)[k].toString()).toLowerCase().includes(
          this.removeAccents(this.busqueda.toLowerCase())
        )
      )
    );
    
    this.snacks = dataTMP.filter(x=> x.nombre!='Combo Snacks');         
    this.snacks_combos = dataTMP.filter(x=> x.nombre=='Combo Snacks'); 

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
