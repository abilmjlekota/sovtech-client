import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/chucknorris/chucknorris.module').then(m => m.ChucknorrisModule) },
  { path: 'chuck', loadChildren: () => import('./modules/chucknorris/chucknorris.module').then(m => m.ChucknorrisModule) },
  { path: '**', loadChildren: () => import('./modules/chucknorris/chucknorris.module').then(m => m.ChucknorrisModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
