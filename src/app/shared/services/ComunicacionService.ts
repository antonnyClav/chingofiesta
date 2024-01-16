import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  constructor() { }
  /* nos permite enviar mensajes a multiples observadores */
  private cambioMenuSubject = new Subject<boolean>();
  private cambioSubMenuSubject = new Subject<boolean>();

  /* permite que nuestros componentes se puedan suscribir al subject */
  cambioMenuObservable = this.cambioMenuSubject.asObservable(); 
  cambioSubMenuObservable = this.cambioSubMenuSubject.asObservable(); 

  cambioMenu(cambio: boolean) {
    this.cambioMenuSubject.next(cambio);
  } 

  cambioSubMenu(cambio: boolean) {
    this.cambioSubMenuSubject.next(cambio);
  } 
}
