import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  login(form) {
    return this.http.post('http://localhost:3000/auth/login', form);
  }

  register(form) {
    return this.http.post('http://localhost:3000/auth/register', form);
  }

  getTodo(idUser) {
    return this.http.get('http://localhost:3000/todo/' + idUser);
  }

  addTodo(idUser, form) {
    return this.http.post('http://localhost:3000/todo/' + idUser, form);
  }
}
