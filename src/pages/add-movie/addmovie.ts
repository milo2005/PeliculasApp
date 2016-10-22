import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Movie, MovieService} from '../../providers/movie';

@Component({
  selector: 'page-addmovie',
  templateUrl: 'addmovie.html'
})
export class AddMovie {
  
  movie:Movie;

  constructor(public navCtrl: NavController, private service:MovieService) {
    this.movie = new Movie();
  }

  insertMovie(){
    this.service.insert(this.movie);
    this.navCtrl.pop();
  }

}
