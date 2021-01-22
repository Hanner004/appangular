import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {


  url = 'https://jsonplaceholder.typicode.com/users'
  //url = 'https://github.com/AniList/ApiV2-GraphQL-Docs?ref=public-apis'

  constructor(
    private http:HttpClient
  ) { 
    console.log("Servicio ejecutandose")
  }

  getPersonajes(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    });
  }
}
