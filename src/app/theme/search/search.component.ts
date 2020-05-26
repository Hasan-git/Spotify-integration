import { Paginated, Artist } from './../../blocks/interface/all';
import { Observable, Subscription, Subject } from 'rxjs';
import { SpotifyService } from '../../blocks/services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap, tap, catchError, filter } from 'rxjs/operators';
import { fuseAnimations } from 'src/app/blocks/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: fuseAnimations,
})
export class SearchComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;

  search: FormControl = new FormControl('');
  artists$: Observable<Paginated>;
  loading: boolean = false;

  constructor(
    private spotifyService: SpotifyService
  ) {

    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.watchSearchInput()
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // ------------------------------------------------------
  //  Public methods
  // ------------------------------------------------------

  watchSearchInput() {
    this.artists$ = this.search.valueChanges
      .pipe(
        filter(value => !!value ? true : false),
        debounceTime(600),
        distinctUntilChanged(),
        tap(_ => this.loading = true),
        switchMap(value => this.spotifyService.searchArtist(value)),
        catchError((err, source) => { return source; }), // @ Notify user , do something
        tap(_ => this.loading = false),
      )
  }

  trackFn(index, item) {
    return item.id;
  }
}
