import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [
    NavbarComponent, 
    AboutComponent, 
    SearchComponent
  ]
})

export class AppComponent { }
