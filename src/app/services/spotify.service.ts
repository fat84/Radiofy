import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotyfyService {
  private searchUrl: string;
  private addressUrl: string;

  constructor(private _http:Http){

  }

  searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
            .map(res => res.json());
  }

  getArtist(id:string){
    this.addressUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.addressUrl)
            .map(res => res.json());
  }
}