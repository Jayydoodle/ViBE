import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TestComponent } from './test/test.component';
=======
import { SidenavComponent } from './sidenav/sidenav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSliderModule } from '@angular/material/slider';

>>>>>>> fe92c141ea02582cbbfde650062f8b05ac12bb37

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TestComponent
=======
    SidenavComponent,
    NavbarComponent
>>>>>>> fe92c141ea02582cbbfde650062f8b05ac12bb37
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
