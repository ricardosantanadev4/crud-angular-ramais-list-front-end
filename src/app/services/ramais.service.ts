import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Ramais } from '../model/ramais';

@Injectable({
  providedIn: 'root'
})
export class RamaisService {
  // ramaisList: RamaisList[] = [{ name: 'Ricardo - TI', number: '6099', contextPermission: 'DDI', captureGroup: '1', departament: 'TI', paused: 'não' }];
  // private readonly API = 'http://localhost:3000/values';
  private readonly API = '/api/ramais-list';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Ramais[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(ramaisList => console.log(ramaisList)),
    );
  }

  save(record: Partial<Ramais>) {
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  create(record: Partial<Ramais>){
    return this.httpClient.post<Ramais>(this.API, record);
  }

  update(record: Partial<Ramais>){
    return this.httpClient.put<Ramais>(`${this.API}/${record.id}`, record);
  }

  getById(id: string) {
    return this.httpClient.get<Ramais>(`${this.API}/${id}`);
  }
}