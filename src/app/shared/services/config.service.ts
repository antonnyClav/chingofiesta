import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

class Config {
  captcha!: boolean;
  API_URL!: string;
  API_URL_DEBUG!: string;
  Moneda!: string;
  sinDecimales!: Array<string>;
  Actualizando!:boolean;
  UrlConsultaWhatsaap!:string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuration!: Config;

  constructor(private httpClient: HttpClient,private router: Router) {}

  setConfig(): Promise<Config> {
    //localStorage.clear();
    return new Promise((resolve, reject) => {
      this.httpClient.get<Config>('./config.json').subscribe(
        (config) => {
          this.configuration = config;
          resolve(config);
        },
        (err) => reject(err)
      );
    });
    // return this.httpClient
    //   .get<Config>('./config.json')
    //   .toPromise()
    //   .then((config) => (this.configuration = config));
  }

  readConfig(): Config {
    return this.configuration;
  }
}
