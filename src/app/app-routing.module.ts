import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CathegorieComponent } from './cathegorie/cathegorie.component';
import { CompetenceComponent } from './competence/competence.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CreerCompetenceComponent } from './creerCompetence/creer-competence/creer-competence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { ProposComponent } from './propos/propos.component';
import { ScolaireComponent } from './scolaire/scolaire.component';


const routes: Routes = [
  {path:'' ,redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},
   {path: 'competence', component: CompetenceComponent},
  {path: 'scolaire', component: ScolaireComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'cathegorie', component: CathegorieComponent},
  {path: 'propos', component: ProposComponent},
  {path: 'creer-competence', component: CreerCompetenceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
