import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicacionExt } from 'src/app/shared/models/Publicacion';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';
import { PublicacionesService } from 'src/app/shared/services/Publicaciones.service';

@Component({
  selector: 'app-panchos',
  templateUrl: './panchos.component.html',
  styleUrls: ['./panchos.component.css']
})
export class PanchosComponent implements OnInit, OnDestroy{
  constructor(private router: Router, private publicacionesService: PublicacionesService, private servicioComunicacion: ComunicacionService) {
    this.getPanchos();
  }
  dataTMP: PublicacionExt[] = [];
  panchos_promo_5_6_eco: PublicacionExt[] = [];
  panchos_promo_5_6: PublicacionExt[] = [];
  panchos_ug: PublicacionExt[] = [];
  panchos_swift: PublicacionExt[] = [];
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

  getPanchos() {
    this.publicacionesService.getPanchos()
    /*.pipe(
      map( response => response )
    )*/
    .subscribe( data => { 
      //console.log(data);     
      this.dataTMP = data; 
      this.panchos_promo_5_6_eco = data.filter(x=> x.nombre == 'Promo 5 (Económica)' || x.nombre == 'Promo 6 (Económica)');
      this.panchos_promo_5_6 = data.filter(x=> x.nombre == 'Promo 5' || x.nombre == 'Promo 6');
      this.panchos_ug = data.filter(x=> x.nombre == 'Promo Unión Ganadera');
      this.panchos_swift = data.filter(x=> x.nombre == 'Promo Swift');
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
    
    this.panchos_promo_5_6_eco = dataTMP.filter(x=> x.nombre == 'Promo 5 (Económica)' || x.nombre == 'Promo 6 (Económica)');
    this.panchos_promo_5_6 = dataTMP.filter(x=> x.nombre == 'Promo 5' || x.nombre == 'Promo 6');
    this.panchos_ug = dataTMP.filter(x=> x.nombre == 'Promo Unión Ganadera');
    this.panchos_swift = dataTMP.filter(x=> x.nombre == 'Promo Swift');

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
