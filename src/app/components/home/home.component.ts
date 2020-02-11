import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public title: string;
	public subtitle: string;
	public email: string;

  constructor() { 
  	this.title = "Grupo scout 137";
  	this.subtitle = "Bienvenidos a nuestra pagina web!";
  	this.email = "sadas@gmail.com"
  }

  ngOnInit() {
  }

}
