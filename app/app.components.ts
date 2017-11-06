import  {Component} from "angular2/core";

@Component({
  selector: "mi-app",
  templateUrl: "app/view/peliculas.html"
})

export class AppComponent{
  public titulo:string = "Películas con Angular2";
  public pelicula:string = "Batman vs Superman";
  public director:string = "Zack Snider";
  public anio:number = 2016;
}
