import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Imovie } from 'src/app/shared/Modals/movie';
import { MovieService } from 'src/app/shared/Services/movie.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';



@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() data !: Imovie;
  
  constructor(
    private _service :MovieService,
    private _dialog : MatDialog
  ) { }

  ngOnInit(): void {

  }

  onEdit(){
    this._service.setNEditMovie(this.data)
  }

onRemove(){
    let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure to remove this card with id ${this.data.id}`
    matConfig.width = "500px"

    let matRef = this._dialog.open(GetConfirmComponent,matConfig)
    matRef.afterClosed().subscribe(res => {
      if(res){

        this._service.removeMovies(this.data.id).subscribe({
          next : data => {
            console.log(data)
            this._service.setREmoveMovie(this.data.id)
          },
          error : err => {
            console.log(err);
            
          }
        })
      }
    })
  }




  //////////////////////////////2///////////////////////



  
//   onEdit(){
//     this._service.setNEditMovie(this.data)
//   }

// onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card with id ${this.data.id}`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.afterClosed().subscribe(res => {
//       if(res){

//         this._service.removeMovies(this.data.id).subscribe({
//           next : data => {
//             console.log(data)
//             this._service.setREmoveMovie(this.data.id)
//           },
//           error : err => {
//             console.log(err);
            
//           }
//         })
//       }
//     })
//   }






  //////////////////////////////3///////////////////////



  
//   onEdit(){
//     this._service.setNEditMovie(this.data)
//   }

// onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card with id ${this.data.id}`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.afterClosed().subscribe(res => {
//       if(res){

//         this._service.removeMovies(this.data.id).subscribe({
//           next : data => {
//             console.log(data)
//             this._service.setREmoveMovie(this.data.id)
//           },
//           error : err => {
//             console.log(err);
            
//           }
//         })
//       }
//     })
//   }






  //////////////////////////////4///////////////////////



  
//   onEdit(){
//     this._service.setNEditMovie(this.data)
//   }

// onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card with id ${this.data.id}`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.afterClosed().subscribe(res => {
//       if(res){

//         this._service.removeMovies(this.data.id).subscribe({
//           next : data => {
//             console.log(data)
//             this._service.setREmoveMovie(this.data.id)
//           },
//           error : err => {
//             console.log(err);
            
//           }
//         })
//       }
//     })
//   }







  //////////////////////////////5///////////////////////



  
//   onEdit(){
//     this._service.setNEditMovie(this.data)
//   }

// onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card with id ${this.data.id}`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.afterClosed().subscribe(res => {
//       if(res){

//         this._service.removeMovies(this.data.id).subscribe({
//           next : data => {
//             console.log(data)
//             this._service.setREmoveMovie(this.data.id)
//           },
//           error : err => {
//             console.log(err);
            
//           }
//         })
//       }
//     })
//   }

}
