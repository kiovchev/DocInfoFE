import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl: string = "http://localhost:52156";
  private createPath = this.apiUrl + '/Profil/create'

  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data): Observable<any> {
    return this.http.post(this.createPath, data);
  }
}
