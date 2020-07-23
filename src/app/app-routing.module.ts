import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
