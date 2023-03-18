import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { RamaisList } from '../model/ramais-list';

@Injectable({
  providedIn: 'root'
})
export class RamaisListService {
  // ramaisList: RamaisList[] = [{ name: 'Ricardo - TI', number: '6099', contextPermission: 'DDI', captureGroup: '1', departament: 'TI', paused: 'não' }];
  // private readonly API = 'http://localhost:3000/values';
  private readonly API = '/api/ramais-list';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<RamaisList[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(ramaisList => console.log(ramaisList)),
    );
  }

  save(record: RamaisList) {
    // necessario se inscrever no observable para poder funcionar .subscrib()
    return this.httpClient.post(this.API, record).subscribe(data => console.log(data));
  }
}
