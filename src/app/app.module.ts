import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompetenceComponent } from './competence/competence.component';
import { ScolaireComponent } from './scolaire/scolaire.component';
import { ProfilComponent } from './profil/profil.component';
import { ProposComponent } from './propos/propos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompetenceComponent,
    ScolaireComponent,
    ProfilComponent,
    ProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'navbar', component: NavbarComponent},
      {path: 'competence', component: CompetenceComponent},
      {path: 'scolaire', component: ScolaireComponent},
      {path: 'profil', component: ProfilComponent},
      {path: 'propos', component: ProposComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
