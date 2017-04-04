import { Component } from '@angular/core';
import { SpotyfyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [SpotyfyService]
})

export class SearchComponent { 
  searchStr: string;

  constructor(private _spotifyService:SpotyfyService){

  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res.artists.items)
      })
  }
}