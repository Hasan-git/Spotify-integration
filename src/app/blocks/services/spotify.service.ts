import { ArtistsResponse, Paginated } from './../interface/all';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl: string = environment.backEnd
  constructor(
    private httpClient: HttpClient
  ) { }

  public searchArtist(filter = '', offset = 1, limit = 10) {

    const params = new HttpParams()
      .set('q', filter)
      .set('offset', offset.toString())
      .set('limit', limit.toString())
      .set('type', 'artist');

    return this.httpClient.get<ArtistsResponse>(`${this.baseUrl}/v1/search`, { params })
      .pipe(map(data => data.artists));
  }

  public GetAlbum(id: string) {

    return this.httpClient.get<Paginated>(`${this.baseUrl}/v1/artists/${id}/albums`);

  }
}
