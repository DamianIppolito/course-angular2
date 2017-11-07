import  {Component} from "angular2/core";
import {Pelicula} from '../model/pelicula';

@Component({
  selector: "peliculas-list",
  templateUrl: "app/view/peliculas-list.html"
})

export class PeliculasListComponent{
  public pelicula:Pelicula;
  public peliculaElegida:Pelicula;
  public mostrarDatos:boolean;
  public peliculas:Array<Pelicula>;

  constructor(){
    this.mostrarDatos = false;
    this.peliculas = [
      new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
      new Pelicula(2, "La verdad duele", "Will Smith", 2016),
      new Pelicula(3, "El señor de los anillos", "Peter Jackson",null),
      new Pelicula(4, "Una historia real", "El de supersalidos", 2015),
      new Pelicula(5, "Don Jon", "joseph gordon levitt", 2014)
    ];
    this.pelicula = this.peliculas[0];
    this.peliculaElegida = this.peliculas[0];
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

  onChangePelicula(pelicula){
    this.pelicula = pelicula;
    this.peliculaElegida = pelicula;
  }
}
