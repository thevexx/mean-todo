import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId;
  todos = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.userId = jwt_decode(localStorage.getItem('token')).data._id;
    this.apiService.getTodo(this.userId).subscribe(res => {
      this.todos = res.json();
    });
  }



}
