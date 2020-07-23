import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicles } from './vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  url = 'http://localhost:60094/Api/TB_Vehicles/';
  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicles[]> {
    return this.http.get<Vehicles[]>(this.url + 'GetVehicleById');
  }

  getVehicleById(IdVehicle: number): Observable<Vehicles> {
    return this.http.get<Vehicles>(this.url + 'GetVehicleById?id=' + IdVehicle);
  }

  createVehicle(objVehicle: Vehicles): Observable<Vehicles> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Vehicles>(this.url + 'PostTB_Vehicles', objVehicle, httpOptions);
  }

  updateVehicle(objVehicle: Vehicles): Observable<Vehicles> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Vehicles>(this.url + 'PutTB_Vehicles', objVehicle, httpOptions);
  }

  deleteVehicle(IdVehicle: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + 'DeleteTB_Vehicles?id=' + IdVehicle);
  }

}
