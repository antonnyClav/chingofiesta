import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicacionExt } from '../models/Publicacion';
import { ConfigService } from '../../shared/services/config.service';


@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  private API_URL = this.configService.readConfig().API_URL;
  private Entidad = "publicacion";

  //public ofertas!: Publicacion[];
  constructor(private http: HttpClient, private configService: ConfigService) {}
/*
  public getOfertas(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/ofertas.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }

  public getHamburguesas(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/hamburguesas.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  } 

  public getMedallones(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/medallones.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }

  public getHamburguesas100Carne(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/hamburguesas_100_carne.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }  

  public getPanchos(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/panchos_cortos.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }

  public getPanchosLargos(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/panchos_largos.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }

  public getSnacks(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/snacks.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }

  public getBebidasCongelados(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/bebidas_congelados.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }

  public getPromoCumple(): Observable<PublicacionExt[]> {
    const endpointUrl = `./assets/json/promo_cumple.json`;
    return this.http.get<PublicacionExt[]>(endpointUrl);
  }
  */
  /*public searchOfertas() {
    let endpointUrl = `./assets/json/ofertas.json`;
    return this.http
      .get(endpointUrl)
      .toPromise()
      .then((response: any) => {
        console.log(response);
        this.ofertas = response.response;
      });
  }*/


  //consumiendo la api
  getOfertas(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/Getofertas');   
  }

  public getHamburguesas(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetHamburguesas');   
  }

  public getMedallones(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetMedallones');   
  } 

  public getBebidasCongelados(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetBebidasCongelados');   
  }

  public getHamburguesas100Carne(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetHamburguesas100Carne');   
  }

  public getPanchos(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetPanchosCortos');   
  }

  public getPanchosLargos(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetPanchosLargos');   
  }

  public getSnacks(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetSnacks');   
  }

  public getPromoCumple(): Observable<PublicacionExt[]> {
    return this.http.get<PublicacionExt[]>(this.API_URL + this.Entidad + '/GetPromoCumple');   
  }
}
