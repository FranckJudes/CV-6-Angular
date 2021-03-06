import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScolaireComponent } from './scolaire/scolaire.component';
import { ProfilComponent } from './profil/profil.component';
import { ProposComponent } from './propos/propos.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { CathegorieComponent } from './cathegorie/cathegorie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    ScolaireComponent,
    ProfilComponent,
    ProposComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CathegorieComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    AngularFireModule.initializeApp(environment.firebase),
    
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
