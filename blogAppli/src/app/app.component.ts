import { Component } from '@angular/core';
import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  posts: Post[] = [ {titre : 'Mon premier poste', contenu : 'Poste de developpeur en java', loveIts : 0, createDate: null},
    {titre : 'Mon deuxieme poste', contenu : 'Poste de gestion de projet', loveIts : 0, createDate: null},
    {titre : 'Encore un poste', contenu : 'Poste de developpement en C++', loveIts : 0, createDate: null}];

}
