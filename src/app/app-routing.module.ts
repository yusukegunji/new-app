import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomModule } from './welcom/welcom.module';


const routes: Routes = [
  {
    path: 'welcom',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
