import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-panchos-largos',
  templateUrl: './panchos-largos.component.html',
  styleUrls: ['./panchos-largos.component.css']
})
export class PanchosLargosComponent implements OnInit, OnDestroy{
  constructor(private router: Router, private publicacionesService: PublicacionesService, private servicioComunicacion: ComunicacionService) {
    this.getPanchosLargos();
  }
  dataTMP: PublicacionExt[] = [];
  panchosLargos_v1: PublicacionExt[] = [];
  panchosLargos_v2: PublicacionExt[] = [];
  panchosLargos_v3: PublicacionExt[] = [];
  panchosLargos_v4: PublicacionExt[] = [];
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
  
  getPanchosLargos() {
    this.publicacionesService.getPanchosLargos()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);
      this.dataTMP = data;
      this.panchosLargos_v1 = data.filter(x=> x.nombre == 'Promo 7 (Económica)' || x.nombre == 'Promo 8 (Económica)');
      this.panchosLargos_v2 = data.filter(x=> x.nombre == 'Promo 7' || x.nombre == 'Promo 8');
      this.panchosLargos_v3 = data.filter(x=> x.nombre == 'Promo Unión Ganadera');
      this.panchosLargos_v4 = data.filter(x=> x.nombre == 'Promo Swift');
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
    
    this.panchosLargos_v1 = dataTMP.filter(x=> x.nombre == 'Promo 7 (Económica)' || x.nombre == 'Promo 8 (Económica)');
    this.panchosLargos_v2 = dataTMP.filter(x=> x.nombre == 'Promo 7' || x.nombre == 'Promo 8');
    this.panchosLargos_v3 = dataTMP.filter(x=> x.nombre == 'Promo Unión Ganadera');
    this.panchosLargos_v4 = dataTMP.filter(x=> x.nombre == 'Promo Swift');

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
