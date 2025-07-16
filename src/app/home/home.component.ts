import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('modal', {static: false}) modal!: ModalComponent
  constructor(
    private router: Router
  ) {

    //si en la url no viene recurso, envio a la pagina default
    /*let url = document.location.href.split('/');
    if(url[url.length-1]==""){
      this.router.navigate(['default']);
    }*/
    //console.log(url[url.length-1]);
  }
  ngAfterViewInit(): void {
    //promocion cuenta dni u otra
    /*setTimeout(()=>{ 
      this.openModal();
    }, 1000)*/    
  }

  ngOnInit() {    
  }

  openModal(): void {      
    this.modal.open();
  }
}
