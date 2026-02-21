import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipro } from 'src/app/shared/Modals/product';
import { ProductService } from 'src/app/shared/Services/product.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  @Input() data!: Ipro;


  constructor(
    private _dialog : MatDialog,
    private _proService : ProductService
    
  ) { }

  ngOnInit(): void {

  }




  
 onEdit(){
    this._proService.setEditPro(this.data)
  }

  onRemove(){
    let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure to remove this card?`
    matConfig.width = "500px"

    let matRef = this._dialog.open(GetConfirmComponent,matConfig)
    matRef.disableClose = true
    matRef.afterClosed().subscribe(res => {
      if(res){
        this._proService.removePro(this.data.id).subscribe({
          next : data => {
            console.log(data);
            this._proService.setRemovePro(this.data.id)
          },
          error : err =>{
            console.log(err)
          }
        })
      }
    })
  }


  

///////////////////2///////////////////////////////

  
//  onEdit(){
//     this._proService.setEditPro(this.data)
//   }

//   onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card?`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.disableClose = true
//     matRef.afterClosed().subscribe(res => {
//       if(res){
//         this._proService.removePro(this.data.id).subscribe({
//           next : data => {
//             console.log(data);
//             this._proService.setRemovePro(this.data.id)
//           },
//           error : err =>{
//             console.log(err)
//           }
//         })
//       }
//     })
//   }



// ///////////////////////////////3///////////////////////


//  onEdit(){
//     this._proService.setEditPro(this.data)
//   }

//   onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card?`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.disableClose = true
//     matRef.afterClosed().subscribe(res => {
//       if(res){
//         this._proService.removePro(this.data.id).subscribe({
//           next : data => {
//             console.log(data);
//             this._proService.setRemovePro(this.data.id)
//           },
//           error : err =>{
//             console.log(err)
//           }
//         })
//       }
//     })
//   }





// ///////////////////////////////4///////////////////////


//  onEdit(){
//     this._proService.setEditPro(this.data)
//   }

//   onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card?`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.disableClose = true
//     matRef.afterClosed().subscribe(res => {
//       if(res){
//         this._proService.removePro(this.data.id).subscribe({
//           next : data => {
//             console.log(data);
//             this._proService.setRemovePro(this.data.id)
//           },
//           error : err =>{
//             console.log(err)
//           }
//         })
//       }
//     })
//   }




// ///////////////////////////////5///////////////////////


//  onEdit(){
//     this._proService.setEditPro(this.data)
//   }

//   onRemove(){
//     let matConfig = new MatDialogConfig()
//     matConfig.data = `Are you sure to remove this card?`
//     matConfig.width = "500px"

//     let matRef = this._dialog.open(GetConfirmComponent,matConfig)
//     matRef.disableClose = true
//     matRef.afterClosed().subscribe(res => {
//       if(res){
//         this._proService.removePro(this.data.id).subscribe({
//           next : data => {
//             console.log(data);
//             this._proService.setRemovePro(this.data.id)
//           },
//           error : err =>{
//             console.log(err)
//           }
//         })
//       }
//     })
//   }
}
