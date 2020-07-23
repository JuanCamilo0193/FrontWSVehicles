import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Countries } from './countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }
}
