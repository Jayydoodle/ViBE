import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MapComponent } from './components/map/map.component';

import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { EventService } from './services/event.service';
import { UserService } from './services/user.service';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    MapComponent,
    SplashScreenComponent,
    EventsComponent
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
          whitelistedDomains: ['http://localhost:3000'],
          blacklistedRoutes: ['http://localhost:3000/api/authenticate/login']
      }
    }),
    FormsModule,
    BrowserModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,EventService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
