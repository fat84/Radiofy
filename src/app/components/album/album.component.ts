import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css']
})

export class AlbumComponent implements OnInit{ 
  id: string;
  album: Album[];

  constructor(
    private _spotifyService:SpotyfyService,
    private _route:ActivatedRoute){

  }

  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }
}