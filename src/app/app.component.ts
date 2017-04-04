import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HttpModule } from '@angular/http';
import { SpotyfyService } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [
    NavbarComponent, 
    AboutComponent, 
    SearchComponent
  ],
  providers: [HttpModule, SpotyfyService]
})

export class AppComponent { }
