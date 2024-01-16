import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit, OnDestroy{
  SubMenuSeleccionado : string = "";
  EsMobile: boolean = false;
  constructor(
    private servicioComunicacion: ComunicacionService
  ) {  
    let url = document.location.href.split('/');
    //if(url[url.length-1]==""){
      this.SubMenuSeleccionado = url[url.length-1];
    //}
    //console.log(url[url.length-1]);

    this.SetTypeOfDevice();
  }
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  ngOnInit(): void {    
    this.servicioComunicacion.cambioMenuObservable.subscribe(cambio => {
      if(cambio){        
        console.log("SubMenu notificado!!! ");
        this.SubMenuSeleccionado = "Otro";        
      }            
    });
  }

  SeleccionarSubMenu(SubMenu: string): void {
    this.SubMenuSeleccionado = SubMenu;
    this.servicioComunicacion.cambioSubMenu(true);

    //si es mobile y le dio al sub-menu hago un pequeño scroll para ir a los detalles
    //console.log("es mobile: " + this.EsMobile);
        
    const subMenu = window.document.getElementById("subMenu")!;
    let clientWidth: number = 0;
    if (subMenu != null) {      
      //console.log("alto: " + subMenu.clientWidth);
      clientWidth = subMenu.clientWidth;
    }       

    if(this.EsMobile && clientWidth <= 400){
      window.scroll({
        top: 450,
        left: 0,
        behavior: "smooth",
      });
    }    
  }

  SetTypeOfDevice(){
    let mobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows());
      }
    };
    this.EsMobile = mobile.any()!==null;
  }
}
