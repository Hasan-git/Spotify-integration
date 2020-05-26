import { SpotifyService } from './../services/spotify.service';
import { Artist, Album, Paginated } from './../interface/all';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumResolverService implements Resolve<Paginated> {

  constructor(private spotifyService: SpotifyService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Paginated> {
    console.log(route.paramMap)

    return this.spotifyService.GetAlbum(route.paramMap.get('id'));
  }
}
