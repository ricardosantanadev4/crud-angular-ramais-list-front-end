import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ramais } from 'src/app/model/ramais';
import { RamaisService } from 'src/app/services/ramais.service';

@Injectable({
  providedIn: 'root'
})
export class RamaisResolver implements Resolve<Ramais> {
  constructor(private ramaisService: RamaisService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ramais> {
    if (route.params && route.params['id']) {
      return this.ramaisService.getById(route.params['id']);
    }
    return of(
      {
        id: '', 
        name: '', 
        number: '', 
        contextPermission: '', 
        captureGroup: '', 
        departament: '', 
        paused: ''
      });
  }
}