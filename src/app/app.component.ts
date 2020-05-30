import { TitleService } from './blocks/utils/title.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from './blocks/core/auth.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated: Observable<boolean>;
  isDoneLoading: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private ngxLoader: NgxUiLoaderService,
    private titleService: TitleService
  ) {

    this.isDoneLoading = this.authService.isDoneLoading$;

    this.authService.runInitialLoginSequence();

    this.ngxLoader.startLoader('splash-screen');
  }


  ngOnInit(): void {
    this.watchSplachProgress();

    this.titleService.init()
  }

  // ---------------------------------------------------------------
  // Private method
  // ---------------------------------------------------------------
  private watchSplachProgress() {
    this.isDoneLoading.subscribe(_ => this.ngxLoader.stopLoader('splash-screen'));
  }

}
