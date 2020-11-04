import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CtaComponent } from './cta/cta.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ConfigService } from './config.service';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FeaturesComponent } from './features/features.component';
import { ResetComponent } from './reset/reset.component';
import {UserDashboardModule}from './user-dashboard/user-dashboard.module';
import {SignaturePadModule}from '@ng-plus/signature-pad'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    CtaComponent,
    ContactComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    NotfoundComponent,
    FeaturesComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserDashboardModule,
    SignaturePadModule

  ],
  providers: [ConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
