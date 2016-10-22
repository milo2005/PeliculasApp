import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  user:String
  pass:String

  constructor(public navCtrl: NavController) {}

  onIn(){
    //this.navCtrl.push(HomePage)
    this.navCtrl.setRoot(HomePage)
  }

 

}
