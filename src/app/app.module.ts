import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClassVehiclesService } from './class-vehicles.service';
import { CountriesService } from './countries.service';
import { ManufacturersService } from './manufacturers.service';
import { TypesService } from './types.service';
import { VehiclesService } from './vehicles.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule,
  MatIconModule, MatRadioModule, MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatToolbarModule
} from '@angular/material';
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [HttpClientModule, ClassVehiclesService, CountriesService, ManufacturersService, TypesService, VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
