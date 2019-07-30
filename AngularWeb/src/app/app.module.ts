import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './people.service';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PriceComponent } from './price/price.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './detail/detail.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';




@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    NavbarComponent,
    DetailComponent,
    PeoplelistComponent,
  ],
  exports: [
    AppComponent,
    PriceComponent,
    NavbarComponent,
    DetailComponent,
    PeoplelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
