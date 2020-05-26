import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './blocks/reusable-components/header/header.module';
import { CoreModule } from './blocks/core/core.module';
import { AlbumBoxComponent } from './theme/album/album-box/album-box.component';
import { AlbumComponent } from './theme/album/album.component';
import { ArtistBoxComponent } from './theme/search/artist-box/artist-box.component';
import { SearchComponent } from './theme/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumComponent,
    ArtistBoxComponent,
    AlbumBoxComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,


    NgxUiLoaderModule,
    FlexLayoutModule,
    StarRatingModule.forRoot(),
    LazyLoadImageModule,

    AppRoutingModule,
    CoreModule.forRoot(),
    HeaderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
