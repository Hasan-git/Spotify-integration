import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, skip, switchMap, tap } from 'rxjs/operators';
import { fuseAnimations } from 'src/app/blocks/animations';

import { SpotifyService } from '../../blocks/services/spotify.service';
import { Paginated } from './../../blocks/interface/all';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: fuseAnimations,
})
export class SearchComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;

  private artistsSubjective$: BehaviorSubject<Paginated> = new BehaviorSubject<Paginated>({});
  artists$: Observable<any> = this.artistsSubjective$.asObservable();

  private fetch$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  search: FormControl = new FormControl('');
  loading: boolean = false;

  count: number = 0;
  offset: number = 1;
  limit: number = 8;
  failed: boolean = false;

  constructor(
    private spotifyService: SpotifyService,
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {

    this.watchSearchInput();
    this.fetchProcessor();
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


  fetchProcessor() {
    this.fetch$
      .pipe(
        skip(1),
        tap(_ => this.loading = true),
        switchMap(value => this.spotifyService.searchArtist(this.search.value, this.offset, this.limit)),
        catchError((err, source) => { return source; }), // @ Notify user , do something
        tap(_ => this.loading = false),
      ).subscribe(
        data => {
          this.artistsSubjective$.next(data);
          this.count = data.total;
        });
  }

  watchSearchInput() {
    this.search.valueChanges
      .pipe(
        tap(value => !value && this.artistsSubjective$.next({})),
        filter(value => !!value ? true : false),
        debounceTime(700),
        distinctUntilChanged(),
        tap(_ => { this.offset = 1 }),
        tap(_ => this.fetch$.next(null)),
      ).subscribe()
  }

  trackFn(index, item) {
    return item.id;
  }

  onPageChange(offset) {
    this.offset = offset;
    this.fetch$.next(null)
  }
}
