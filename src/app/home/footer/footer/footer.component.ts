import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';
import { ConfigService } from '../../../../app/shared/services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  implements OnInit{
  MenuSeleccionado: string = "";
  UrlConsultaWhatsaap: string = '';

  constructor(
    private servicioComunicacion: ComunicacionService,
    private configService: ConfigService
  ) {      
  }
  
  ngOnInit(): void {
   this.UrlConsultaWhatsaap = this.configService.readConfig().UrlConsultaWhatsaap;
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
