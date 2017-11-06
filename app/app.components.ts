import  {Component} from "angular2/core";

@Component({
  selector: "mi-app",
  templateUrl: "app/view/peliculas.html"
})

export class AppComponent{
  public titulo:string = "Películas con Angular2";

  private pelicula:string;
  private director:string;
  private anio:number;

  constructor(){
    this.pelicula = "Batman vs Superman";
    this.director = "Zack Snider";
    this.anio = 2016
  }
}
