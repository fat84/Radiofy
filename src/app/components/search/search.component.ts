import { Component } from '@angular/core';
import { SpotyfyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Routes, RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [SpotyfyService]
})

export class SearchComponent { 
  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotyfyService){

  }

  searchMusic() {
    if(this.searchStr === ""){
      this.searchRes = [];
    }else{
      this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = (res.artists.items)
      })
    }
  }
}