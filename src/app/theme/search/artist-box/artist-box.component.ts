import { Artist } from './../../../blocks/interface/all';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-artist-box',
  templateUrl: './artist-box.component.html',
  styleUrls: ['./artist-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistBoxComponent implements OnInit {

  @Input() artist: Artist;
  constructor() { }

  ngOnInit() {
  }

  // --------------------------------------------
  //  Public methods
  // --------------------------------------------

  convertRate(value) {
    const old_max = 100, old_min = 0, new_max = 5, new_min = 0;
    return ((value - old_min) / (old_max - old_min)) * (new_max - new_min) + new_min;
  }

}
