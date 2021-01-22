import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appangular';
  public personajes: Array<any> = [];
  

  constructor (
    private personajesService:PersonajesService
  ) {

    this.personajesService.getPersonajes().subscribe((resp: any) => {
      console.log(resp)
      this.personajes = resp
    })

  }
  
}
