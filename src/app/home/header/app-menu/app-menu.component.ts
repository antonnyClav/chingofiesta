import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ComunicacionService } from 'src/app/shared/services/ComunicacionService';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit{
  MenuSeleccionado: string = "";
  EsMobile: boolean = false;

  constructor(
    private servicioComunicacion: ComunicacionService
  ) {  
    this.SetTypeOfDevice();    
  }

  ngOnInit(): void{
    AOS.init();
    this.servicioComunicacion.cambioSubMenuObservable.subscribe(cambio => {
      if(cambio){        
        console.log("Menu notificado!!! ");
        this.MenuSeleccionado = "Otro";        
      }            
    });
  }

  SeleccionarMenu(SubMenu: string): void {
    this.MenuSeleccionado = SubMenu;
    this.servicioComunicacion.cambioMenu(true);
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
    else    
    {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  openNav() {
    //console.log("openNav");
    const myNav = window.document.getElementById("myNav")!;
    if (myNav != null) {      
      myNav.style.height = "100%";
    }    
  }

  closeNav() {
    //console.log("closeNav");
    const myNav = window.document.getElementById("myNav")!;
    if (myNav != null) {      
      myNav.style.height = "0%";
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

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("ngOnChanges");
    
  //   window.onscroll = function(){
  //     console.log(document.documentElement.scrollTop);
  //     if(document.documentElement.scrollTop > 100) {
  //       const goTopContainer = window.document.querySelector(".go-top-container")!;
  //       if (goTopContainer != null) {      
  //         goTopContainer.classList.add('show')
  //       }           
  //     }
  //     else{
  //       const goTopContainer = window.document.querySelector(".go-top-container")!;
  //       if (goTopContainer != null) {      
  //         goTopContainer.classList.remove('show')
  //       }           
  //     }
  //   }
     
  //   const goTopContainer = window.document.querySelector(".go-top-container")!;
  //   if (goTopContainer != null) {      
  //     goTopContainer.addEventListener('click', () => {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //       });
  //     });
  //   }
  // }
}
