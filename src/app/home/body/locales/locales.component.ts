import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent {
  
  constructor(private router: Router){}    
  SeleccionarLocal(local: number){    
    this.router.navigate(['/home/ubicaciones/'+local]);
  }
}
