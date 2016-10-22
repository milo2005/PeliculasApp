import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  data: Movie[];

  constructor() {
    this.data = [];
    let m1: Movie = new Movie();
    m1.nombre = "La Liga de la Justicia";
    m1.sinopsis = "La mejor pelicula del 2017";
    m1.imagen = "http://otecnosi.com/wp-content/uploads/2015/06/liga-justicia.jpg";

    let m2: Movie = new Movie();
    m2.nombre = "Transformers";
    m2.sinopsis = "La peor pelicula del 2017";
    m2.imagen = "http://static.blastingnews.com/media/photogallery/2016/9/20/main/los-22-estrenos-mas-esperados-para-el-2017-transformers_878237.jpg";

    this.data.push(m1);
    this.data.push(m2);
  }

  insert(m: Movie) {
    this.data.push(m);
  }

  delete(pos: number) {
    this.data.splice(pos, 1);
  }

}

export class Movie {
  nombre: string;
  sinopsis: string;
  imagen: string;
}
