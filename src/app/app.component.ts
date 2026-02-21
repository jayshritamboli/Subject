import { Component, inject } from '@angular/core';
import { SpinnerService } from './shared/Services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


   isLoading : boolean = false


   private _spinner = inject(SpinnerService);


  ngOnInit(): void {
    this._spinner.spinnerObs$.subscribe(flag => {
      this.isLoading = flag;
    });
  }
}
