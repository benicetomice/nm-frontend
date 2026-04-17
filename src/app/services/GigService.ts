import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GigService {

  private apiUrl = 'http://localhost:8080/api/gigs';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(gig: any) {
    return this.http.post(this.apiUrl, gig);
  }

  update(id: number, gig: any) {
    return this.http.put(`${this.apiUrl}/${id}`, gig);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
