import  {Component} from "angular2/core";
import {Pelicula} from './model/pelicula';

@Component({
  selector: "mi-app",
  templateUrl: "app/view/peliculas.html",
  styleUrls: ["../assets/css/styles.css"]
})

export class AppComponent{
  public titulo:string = "Películas con Angular2";
  public pelicula:Pelicula;
  public mostrarDatos:boolean;
  public peliculas:Array<Pelicula>;

  constructor(){
    this.mostrarDatos = false;
    this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);
    this.peliculas = [
      new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
      new Pelicula(2, "La verdad duele", "Will Smith", 2016),
      new Pelicula(3, "El señor de los anillos", "Peter Jackson",null),
      new Pelicula(4, "Una historia real", "El de supersalidos", 2015),
      new Pelicula(5, "Don Jon", "joseph gordon levitt", 2014)
    ];
    this.debug();
  }

  debug(titulo = null){
    if(titulo != null){
        console.log(this.pelicula.titulo);
    }else{
      console.log(this.pelicula);
    }
  }

  onShowHide(value){
    this.mostrarDatos = value;
  }
}
