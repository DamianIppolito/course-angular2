import  {Component} from "angular2/core";

@Component({
  selector: "mi-app",
  template: `<h1>{{titulo}}</h1>
            <ul>
              <li>Titulo: {{pelicula}}</li>
              <li>Director: {{director}}</li>
              <li>Año: <strong>{{anio}}</strong></li>
            </ul>`
})

export class AppComponent{
  public titulo = "Películas con Angular2";
  pelicula = "Batman vs Superman";
  director = "Zack Snider";
  anio = "2016";
}
