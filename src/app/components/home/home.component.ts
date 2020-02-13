import { Component, OnInit } from '@angular/core';
declare var $:any;
import * as moment from 'moment';
import 'moment/locale/es';


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

    //Posts

    var posts = [
        {
          title: 'Prueba de titulo 1',
          date: 'Publicado el dia '+ moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla dignissim odio, vehicula tincidunt nisl mattis et. Vivamus consequat justo sit amet viverra auctor. Ut sed accumsan metus. Fusce id arcu at enim pellentesque varius. Cras lorem magna, accumsan a cursus nec, eleifend nec ex. Phasellus enim purus, viverra sed suscipit scelerisque, lobortis a magna. Morbi venenatis tellus id ex euismod laoreet. Sed vitae pretium libero. Proin et quam augue. Nunc eget convallis metus. Curabitur varius quis massa at fringilla. Ut vehicula risus odio, sed elementum nisi maximus at. In sollicitudin consequat dolor sed auctor. Praesent consectetur rutrum nisi, ut malesuada urna consequat quis.'
        },
        {
          title: 'Prueba de titulo 2',
          date: 'Publicado el dia '+ moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla dignissim odio, vehicula tincidunt nisl mattis et. Vivamus consequat justo sit amet viverra auctor. Ut sed accumsan metus. Fusce id arcu at enim pellentesque varius. Cras lorem magna, accumsan a cursus nec, eleifend nec ex. Phasellus enim purus, viverra sed suscipit scelerisque, lobortis a magna. Morbi venenatis tellus id ex euismod laoreet. Sed vitae pretium libero. Proin et quam augue. Nunc eget convallis metus. Curabitur varius quis massa at fringilla. Ut vehicula risus odio, sed elementum nisi maximus at. In sollicitudin consequat dolor sed auctor. Praesent consectetur rutrum nisi, ut malesuada urna consequat quis.'
        },
        {
          title: 'Prueba de titulo 3',
          date: 'Publicado el dia '+ moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla dignissim odio, vehicula tincidunt nisl mattis et. Vivamus consequat justo sit amet viverra auctor. Ut sed accumsan metus. Fusce id arcu at enim pellentesque varius. Cras lorem magna, accumsan a cursus nec, eleifend nec ex. Phasellus enim purus, viverra sed suscipit scelerisque, lobortis a magna. Morbi venenatis tellus id ex euismod laoreet. Sed vitae pretium libero. Proin et quam augue. Nunc eget convallis metus. Curabitur varius quis massa at fringilla. Ut vehicula risus odio, sed elementum nisi maximus at. In sollicitudin consequat dolor sed auctor. Praesent consectetur rutrum nisi, ut malesuada urna consequat quis.'
        },
        {
          title: 'Prueba de titulo 4',
          date: 'Publicado el dia '+ moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla dignissim odio, vehicula tincidunt nisl mattis et. Vivamus consequat justo sit amet viverra auctor. Ut sed accumsan metus. Fusce id arcu at enim pellentesque varius. Cras lorem magna, accumsan a cursus nec, eleifend nec ex. Phasellus enim purus, viverra sed suscipit scelerisque, lobortis a magna. Morbi venenatis tellus id ex euismod laoreet. Sed vitae pretium libero. Proin et quam augue. Nunc eget convallis metus. Curabitur varius quis massa at fringilla. Ut vehicula risus odio, sed elementum nisi maximus at. In sollicitudin consequat dolor sed auctor. Praesent consectetur rutrum nisi, ut malesuada urna consequat quis.'
        }

    ];
    
   posts.forEach((item, index) => {
      var about = `
        <article class="about">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
            ${item.content}  
          </p>
          <a href="#" class="button-more">Leer mas</a>
        </article>

      `;

      $("#posts").append(about);
    });

  });

  }

}
