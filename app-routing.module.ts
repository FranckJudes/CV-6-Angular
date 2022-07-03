import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { ProposComponent } from './propos/propos.component';
import { ScolaireComponent } from './scolaire/scolaire.component';
import { Templet1Component } from './templet1/templet1.component';

const routes: Routes = [
  {path:'' ,redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},

  {path: 'scolaire', component: ScolaireComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'propos', component: ProposComponent},
  {path: 'templet1', component: Templet1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
