import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumResolverService } from './blocks/resolvers/artist-resolver.service';
import { AuthGuard } from './blocks/core/auth-guard.service';
import { AlbumComponent } from './theme/album/album.component';
import { SearchComponent } from './theme/search/search.component';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () => import('./theme/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'albums/:id/:name',
    component: AlbumComponent,
    canActivate: [AuthGuard],
    resolve: { data: AlbumResolverService }
  },
  { path: '**', redirectTo: 'search', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
