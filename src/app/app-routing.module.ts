import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
    canLoad: [GuestGuard],
    canActivate: [GuestGuard]
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(m => m.CreateModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
