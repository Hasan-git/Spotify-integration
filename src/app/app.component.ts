import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from './blocks/core/auth.service';

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
    private ngxLoader: NgxUiLoaderService
  ) {

    this.isDoneLoading = this.authService.isDoneLoading$;

    this.authService.runInitialLoginSequence();

    this.ngxLoader.startLoader('splash-screen');
  }


  ngOnInit(): void {
    this.watchSplachProgress()
  }

  // ---------------------------------------------------------------
  // Private method
  // ---------------------------------------------------------------
  private watchSplachProgress() {
    this.isDoneLoading.subscribe(_ => this.ngxLoader.stopLoader('splash-screen'))
  }

}
