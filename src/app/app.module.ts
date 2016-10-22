import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from "../pages/login/login";
import { MovieService } from "../providers/movie";
import { AddMovie } from '../pages/add-movie/addmovie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    AddMovie
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    AddMovie
  ],
  providers: [ MovieService ]
})
export class AppModule {}
