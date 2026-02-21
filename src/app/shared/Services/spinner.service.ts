import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSub$ : Subject<boolean> = new Subject<boolean>()

  spinnerObs$ : Observable<boolean> = this.spinnerSub$.asObservable()


  constructor() { }


  setSpinner(flag : boolean){
    this.spinnerSub$.next(flag)
  }
}
