import { Paginated } from './../../blocks/interface/all';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from 'src/app/blocks/animations';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  animations: fuseAnimations,
})
export class AlbumComponent implements OnInit {

  artist: Paginated
  artistName$: Observable<string>
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.artist = this.route.snapshot.data.data as Paginated;
    this.artistName$ = this.route.params.pipe(map(params => params.name))
  }

  trackFn(index, item) {
    return item.id;
  }
}
