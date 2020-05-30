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
    loadChildren: () => import('./theme/login/login.module').then(m => m.LoginModule),
    data: {title: 'Login'}
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
    data: {title: 'Artists'}
  },
  {
    path: 'albums/:id/:name',
    component: AlbumComponent,
    canActivate: [AuthGuard],
    resolve: { data: AlbumResolverService },
    data: {title: 'Albums'}
  },
  { path: 'pagination', loadChildren: () => import('./blocks/reusable-components/pagination/pagination.module').then(m => m.PaginationModule) },
  { path: '**', redirectTo: 'search', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
