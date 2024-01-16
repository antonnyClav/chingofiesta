import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  implements OnInit{
  MenuSeleccionado: string = "";

  constructor(
    private servicioComunicacion: ComunicacionService
  ) {      
  }
  
  ngOnInit(): void {
   
  }  
  
  SeleccionarMenu(SubMenu: string): void {
    this.MenuSeleccionado = SubMenu;
    this.servicioComunicacion.cambioMenu(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
