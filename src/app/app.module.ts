import { RegisterService } from './services/register.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule} from '@angular/common/http';
import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';



const config = {
  issuer: 'https://dev-96827083.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback',
  clientId: '0oa86pz8gD2KvS0qw5d6',
  pkce: true
}

export function onAuthRequired(oktaAuth, injector) {
  const router = injector.get(Router);

  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const appRoutes: Routes = [
  
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ],
    data: {
      onAuthRequired
    },
  }
  
]
@NgModule({
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule,
    FormsModule,                               
    ReactiveFormsModule,
    HttpClientModule     
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    RegisterComponent
    
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
