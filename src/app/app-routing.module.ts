import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninpageComponent } from './user/signinpage/signinpage.component';
import { SignuppageComponent } from './user/signuppage/signuppage.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./mainview/mainview.module').then(m => m.MainviewModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {
    path: "signin",
    component: SigninpageComponent
  },
  {
    path: "signup",
    component: SignuppageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
