import { Album } from './../../../blocks/interface/all';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-album-box',
  templateUrl: './album-box.component.html',
  styleUrls: ['./album-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumBoxComponent implements OnInit {

  @Input() album: Album;
  @Input() artistName: string;
  constructor() { }

  ngOnInit() {
  }

}
