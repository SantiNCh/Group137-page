import { Component, OnInit } from '@angular/core';
declare var $:any;

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
  	this.email = "Distrito 1 - Zona 5"
  }

  ngOnInit() {

    $(function(){
      $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
    });




  });

  }

}
