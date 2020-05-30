import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private _titleService: Title,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) { }

  init() {

    this._router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.resolveSnapshot()))
      .subscribe((title: any) => {
        this._titleService.setTitle(title);
      });
  }

  //-----------------------------------------------
  // @ Private methods
  //-----------------------------------------------

  resolveSnapshot() {
    let child = this._activatedRoute.firstChild;
    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
      } else if (child.snapshot.data && child.snapshot.data['title']) {
        return child.snapshot.data['title'];
      } else {
        return null;
      }
    }
    return null;
  }

}
