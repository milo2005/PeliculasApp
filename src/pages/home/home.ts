import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movie, MovieService } from "../../providers/movie";
import { AddMovie} from '../add-movie/addmovie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private service:MovieService) {
    
  }

  goToAdd(){
    this.navCtrl.push(AddMovie);
  }

}
