import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit{
  Direccion: number = 1;  
  private sub: any;
  
  constructor(private route: ActivatedRoute){}    
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      var Id = +params['id']; // (+) converts string 'id' to a number
      if(Id!=0 && !isNaN(Id) && Id!=undefined) this.SeleccionarDireccion2(Id);
    });
  }

  SeleccionarDireccion(dir: number){    
    this.Direccion = dir;
  }

  SeleccionarDireccion2(dir: number){    
    if(dir < 0 || dir > 4) dir = 1;
    this.Direccion = dir;
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }


}
