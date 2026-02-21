import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipro } from 'src/app/shared/Modals/product';
import { ProductService } from 'src/app/shared/Services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  prodForm !: FormGroup
  isInEditMode : boolean = false
  editId !: string


  constructor(
    private _prodService : ProductService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.patch()
  }


  
createForm(){
    this.prodForm = new FormGroup({
      title : new FormControl(null,[Validators.required]),
      description : new FormControl(null,[Validators.required]),
      image : new FormControl(null,[Validators.required]),
      price : new FormControl(null,[Validators.required]),
      category : new FormControl(null,[Validators.required])
    })
  }

  get f() {
    return this.prodForm.controls
  }

  onSubmit(){
    if(this.prodForm.valid){
      let obj = this.prodForm.value
      console.log(obj);

      this._prodService.createProd(obj).subscribe({
        next : data => {
          console.log(data);
          this.prodForm.reset()
          
          this._prodService.setNewPro({...obj,id : data.name})
        },
        error : err => {
          console.log(err)
        }
      })
      
    }
  }


  patch(){
    this._prodService.editProObs$.subscribe({
      next : data => {
        console.log(data);
        this.prodForm.patchValue(data)
        this.isInEditMode = true
        this.editId = data.id

       
      }
    })
  }

  onUpdate(){
    if(this.prodForm.valid){
      let obj : Ipro = {
        ...this.prodForm.value,
        id : this.editId
      }
      this._prodService.updatePro(obj).subscribe({
        next : data => {
          console.log(data);
          this.prodForm.reset()
          this.isInEditMode = false 
          this._prodService.setUpdatePro(obj)
          
        },
        error : err => {
          console.log(err)
        }
      })
    }
  }




//   ////////////////////////////////2//////////////////////////////////////////



  
  
// createForm(){
//     this.prodForm = new FormGroup({
//       title : new FormControl(null,[Validators.required]),
//       description : new FormControl(null,[Validators.required]),
//       image : new FormControl(null,[Validators.required]),
//       price : new FormControl(null,[Validators.required]),
//       category : new FormControl(null,[Validators.required])
//     })
//   }

//   get f() {
//     return this.prodForm.controls
//   }

//   onSubmit(){
//     if(this.prodForm.valid){
//       let obj = this.prodForm.value
//       console.log(obj);

//       this._prodService.createProd(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
          
//           this._prodService.setNewPro({...obj,id : data.name})
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
      
//     }
//   }


//   patch(){
//     this._prodService.editProObs$.subscribe({
//       next : data => {
//         console.log(data);
//         this.prodForm.patchValue(data)
//         this.isInEditMode = true
//         this.editId = data.id

       
//       }
//     })
//   }

//   onUpdate(){
//     if(this.prodForm.valid){
//       let obj : Ipro = {
//         ...this.prodForm.value,
//         id : this.editId
//       }
//       this._prodService.updatePro(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
//           this.isInEditMode = false 
//           this._prodService.setUpdatePro(obj)
          
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
//     }
//   }



  ////////////////////////////////3//////////////////////////////////////////



  
  
// createForm(){
//     this.prodForm = new FormGroup({
//       title : new FormControl(null,[Validators.required]),
//       description : new FormControl(null,[Validators.required]),
//       image : new FormControl(null,[Validators.required]),
//       price : new FormControl(null,[Validators.required]),
//       category : new FormControl(null,[Validators.required])
//     })
//   }

//   get f() {
//     return this.prodForm.controls
//   }

//   onSubmit(){
//     if(this.prodForm.valid){
//       let obj = this.prodForm.value
//       console.log(obj);

//       this._prodService.createProd(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
          
//           this._prodService.setNewPro({...obj,id : data.name})
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
      
//     }
//   }


//   patch(){
//     this._prodService.editProObs$.subscribe({
//       next : data => {
//         console.log(data);
//         this.prodForm.patchValue(data)
//         this.isInEditMode = true
//         this.editId = data.id

       
//       }
//     })
//   }

//   onUpdate(){
//     if(this.prodForm.valid){
//       let obj : Ipro = {
//         ...this.prodForm.value,
//         id : this.editId
//       }
//       this._prodService.updatePro(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
//           this.isInEditMode = false 
//           this._prodService.setUpdatePro(obj)
          
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
//     }
//   }





  ////////////////////////////////4//////////////////////////////////////////



  
  
// createForm(){
//     this.prodForm = new FormGroup({
//       title : new FormControl(null,[Validators.required]),
//       description : new FormControl(null,[Validators.required]),
//       image : new FormControl(null,[Validators.required]),
//       price : new FormControl(null,[Validators.required]),
//       category : new FormControl(null,[Validators.required])
//     })
//   }

//   get f() {
//     return this.prodForm.controls
//   }

//   onSubmit(){
//     if(this.prodForm.valid){
//       let obj = this.prodForm.value
//       console.log(obj);

//       this._prodService.createProd(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
          
//           this._prodService.setNewPro({...obj,id : data.name})
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
      
//     }
//   }


//   patch(){
//     this._prodService.editProObs$.subscribe({
//       next : data => {
//         console.log(data);
//         this.prodForm.patchValue(data)
//         this.isInEditMode = true
//         this.editId = data.id

       
//       }
//     })
//   }

//   onUpdate(){
//     if(this.prodForm.valid){
//       let obj : Ipro = {
//         ...this.prodForm.value,
//         id : this.editId
//       }
//       this._prodService.updatePro(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
//           this.isInEditMode = false 
//           this._prodService.setUpdatePro(obj)
          
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
//     }
//   }





  ////////////////////////////////5//////////////////////////////////////////



  
  
// createForm(){
//     this.prodForm = new FormGroup({
//       title : new FormControl(null,[Validators.required]),
//       description : new FormControl(null,[Validators.required]),
//       image : new FormControl(null,[Validators.required]),
//       price : new FormControl(null,[Validators.required]),
//       category : new FormControl(null,[Validators.required])
//     })
//   }

//   get f() {
//     return this.prodForm.controls
//   }

//   onSubmit(){
//     if(this.prodForm.valid){
//       let obj = this.prodForm.value
//       console.log(obj);

//       this._prodService.createProd(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
          
//           this._prodService.setNewPro({...obj,id : data.name})
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
      
//     }
//   }


//   patch(){
//     this._prodService.editProObs$.subscribe({
//       next : data => {
//         console.log(data);
//         this.prodForm.patchValue(data)
//         this.isInEditMode = true
//         this.editId = data.id

       
//       }
//     })
//   }

//   onUpdate(){
//     if(this.prodForm.valid){
//       let obj : Ipro = {
//         ...this.prodForm.value,
//         id : this.editId
//       }
//       this._prodService.updatePro(obj).subscribe({
//         next : data => {
//           console.log(data);
//           this.prodForm.reset()
//           this.isInEditMode = false 
//           this._prodService.setUpdatePro(obj)
          
//         },
//         error : err => {
//           console.log(err)
//         }
//       })
//     }
//   }
}
