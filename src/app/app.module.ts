import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassVehiclesComponent } from './class-vehicles/class-vehicles.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { CountriesComponent } from './countries/countries.component';
import { TypesComponent } from './types/types.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClassVehiclesComponent,
    ManufacturersComponent,
    CountriesComponent,
    TypesComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
