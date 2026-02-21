import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ipro } from 'src/app/shared/Modals/product';
import { ProductService } from 'src/app/shared/Services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  prodArr: Array<Ipro> = [];


  constructor(
    private _prodService : ProductService,
    private _snackbar : MatSnackBar
  ) { }

  ngOnInit(): void {
  this.fetchProducts();
  this.onAdd();
  this.onPUpdate();
  this.onRemovePro();
  }


fetchProducts(){
   this._prodService.fetchAllProducts().subscribe({
      next : data => {
        this.prodArr = data
      },
      error : err => {
        console.log(err);
      }
    })
}

 onAdd(){
    this._prodService.newProObs$.subscribe({
      next : data => {
        this.prodArr.unshift(data)
        this._snackbar.open(`Added successfully!!!`, 'Close', {
          duration: 3000
        })
      },
      error :err => {
        console.log(err)
      }
    })
  }


  onPUpdate(){
    this._prodService.updateProObs$.subscribe(res => {
      let get = this.prodArr.findIndex(u => u.id === res.id)
      this.prodArr[get] = res
      this._snackbar.open(`Updated successfully!!!`, 'Close', {
        duration: 3000
      })

    })
  }

  onRemovePro(){
    this._prodService.removeProObs$.subscribe(res => {
      let get = this.prodArr.findIndex(r => r.id === res)
      this.prodArr.splice(get,1)
      this._snackbar.open(`Removed successfully!!!`, 'Close', {
        duration: 3000
      })

    })
  }


//////////////////////////////////////2///////////////////////////////////////




// fetchProducts(){
//    this._prodService.fetchAllProducts().subscribe({
//       next : data => {
//         this.prodArr = data
//       },
//       error : err => {
//         console.log(err);
//       }
//     })
// }

//  onAdd(){
//     this._prodService.newProObs$.subscribe({
//       next : data => {
//         this.prodArr.unshift(data)
//         this._snackbar.open(`Added successfully!!!`, 'Close', {
//           duration: 3000
//         })
//       },
//       error :err => {
//         console.log(err)
//       }
//     })
//   }


//   onPUpdate(){
//     this._prodService.updateProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(u => u.id === res.id)
//       this.prodArr[get] = res
//       this._snackbar.open(`Updated successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }

//   onRemovePro(){
//     this._prodService.removeProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(r => r.id === res)
//       this.prodArr.splice(get,1)
//       this._snackbar.open(`Removed successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }


  

  //////////////////////////////////////3///////////////////////////////////////




// fetchProducts(){
//    this._prodService.fetchAllProducts().subscribe({
//       next : data => {
//         this.prodArr = data
//       },
//       error : err => {
//         console.log(err);
//       }
//     })
// }

//  onAdd(){
//     this._prodService.newProObs$.subscribe({
//       next : data => {
//         this.prodArr.unshift(data)
//         this._snackbar.open(`Added successfully!!!`, 'Close', {
//           duration: 3000
//         })
//       },
//       error :err => {
//         console.log(err)
//       }
//     })
//   }


//   onPUpdate(){
//     this._prodService.updateProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(u => u.id === res.id)
//       this.prodArr[get] = res
//       this._snackbar.open(`Updated successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }

//   onRemovePro(){
//     this._prodService.removeProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(r => r.id === res)
//       this.prodArr.splice(get,1)
//       this._snackbar.open(`Removed successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }


//////////////////////////////////////4///////////////////////////////////////




// fetchProducts(){
//    this._prodService.fetchAllProducts().subscribe({
//       next : data => {
//         this.prodArr = data
//       },
//       error : err => {
//         console.log(err);
//       }
//     })
// }

//  onAdd(){
//     this._prodService.newProObs$.subscribe({
//       next : data => {
//         this.prodArr.unshift(data)
//         this._snackbar.open(`Added successfully!!!`, 'Close', {
//           duration: 3000
//         })
//       },
//       error :err => {
//         console.log(err)
//       }
//     })
//   }


//   onPUpdate(){
//     this._prodService.updateProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(u => u.id === res.id)
//       this.prodArr[get] = res
//       this._snackbar.open(`Updated successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }

//   onRemovePro(){
//     this._prodService.removeProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(r => r.id === res)
//       this.prodArr.splice(get,1)
//       this._snackbar.open(`Removed successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }



//////////////////////////////////////5///////////////////////////////////////




// fetchProducts(){
//    this._prodService.fetchAllProducts().subscribe({
//       next : data => {
//         this.prodArr = data
//       },
//       error : err => {
//         console.log(err);
//       }
//     })
// }

//  onAdd(){
//     this._prodService.newProObs$.subscribe({
//       next : data => {
//         this.prodArr.unshift(data)
//         this._snackbar.open(`Added successfully!!!`, 'Close', {
//           duration: 3000
//         })
//       },
//       error :err => {
//         console.log(err)
//       }
//     })
//   }


//   onPUpdate(){
//     this._prodService.updateProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(u => u.id === res.id)
//       this.prodArr[get] = res
//       this._snackbar.open(`Updated successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }

//   onRemovePro(){
//     this._prodService.removeProObs$.subscribe(res => {
//       let get = this.prodArr.findIndex(r => r.id === res)
//       this.prodArr.splice(get,1)
//       this._snackbar.open(`Removed successfully!!!`, 'Close', {
//         duration: 3000
//       })

//     })
//   }


}
