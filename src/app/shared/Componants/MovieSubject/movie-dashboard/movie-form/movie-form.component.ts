import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Imovie } from 'src/app/shared/Modals/movie';
import { MovieService } from 'src/app/shared/Services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {


  movieForm !: FormGroup
  isInEditMode : boolean = false
  editId !: string

  ratingg = [1,2,3,4,5,6,7,8]

  constructor(
    private _service :MovieService
  ) { }

  ngOnInit(): void {
    this.createMoviForm()
    this.patch()
  }

   createMoviForm(){
    this.movieForm = new FormGroup({
      title : new FormControl(null,[Validators.required],[]),
      desc : new FormControl(null,[Validators.required]),
      image : new FormControl(null,[Validators.required]),
      rating : new FormControl(null,[Validators.required])
    })
  }

  get f(){
    return this.movieForm.controls
  }


  onSubmit(){
    if(this.movieForm.valid){
      let obj = this.movieForm.value

      this._service.createMovies(obj).subscribe({
        next : data => {
          this.movieForm.reset()
          console.log(data);
          
          this._service.setNewMovie({...obj,id : data.name})
        },
        error : err => {
          console.log(err)
        }
      })
    }
  }


  patch(){
    this._service.editMoviesobs$.subscribe(res => {
      if(res){
        this.movieForm.patchValue(res)
        this.isInEditMode = true
        this.editId = res.id
      }
    })
  }


  onUpdate(){
    if(this.movieForm.valid){
      let obj : Imovie = {
        ...this.movieForm.value,
        id : this.editId

      }
      console.log(obj);

      this._service.updateMovie(obj).subscribe({
        next : data => {
          this.isInEditMode = false
          this.movieForm.reset()
          this._service.setUpdateMovie(obj)
          console.log(data);
        },
        error : err => {
          console.log(err);
          
        }
      })
      
    }
  }





  // ///////////////////////////////2///////////////////////////////


  
  //  createMoviForm(){
  //   this.movieForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required],[]),
  //     desc : new FormControl(null,[Validators.required]),
  //     image : new FormControl(null,[Validators.required]),
  //     rating : new FormControl(null,[Validators.required])
  //   })
  // }

  // get f(){
  //   return this.movieForm.controls
  // }


  // onSubmit(){
  //   if(this.movieForm.valid){
  //     let obj = this.movieForm.value

  //     this._service.createMovies(obj).subscribe({
  //       next : data => {
  //         this.movieForm.reset()
  //         console.log(data);
          
  //         this._service.setNewMovie({...obj,id : data.name})
  //       },
  //       error : err => {
  //         console.log(err)
  //       }
  //     })
  //   }
  // }


  // patch(){
  //   this._service.editMoviesobs$.subscribe(res => {
  //     if(res){
  //       this.movieForm.patchValue(res)
  //       this.isInEditMode = true
  //       this.editId = res.id
  //     }
  //   })
  // }


  // onUpdate(){
  //   if(this.movieForm.valid){
  //     let obj : Imovie = {
  //       ...this.movieForm.value,
  //       id : this.editId

  //     }
  //     console.log(obj);

  //     this._service.updateMovie(obj).subscribe({
  //       next : data => {
  //         this.isInEditMode = false
  //         this.movieForm.reset()
  //         this._service.setUpdateMovie(obj)
  //         console.log(data);
  //       },
  //       error : err => {
  //         console.log(err);
          
  //       }
  //     })
      
  //   }
  // }





  

  // //////////////////////////////3///////////////////////////////


  
  //  createMoviForm(){
  //   this.movieForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required],[]),
  //     desc : new FormControl(null,[Validators.required]),
  //     image : new FormControl(null,[Validators.required]),
  //     rating : new FormControl(null,[Validators.required])
  //   })
  // }

  // get f(){
  //   return this.movieForm.controls
  // }


  // onSubmit(){
  //   if(this.movieForm.valid){
  //     let obj = this.movieForm.value

  //     this._service.createMovies(obj).subscribe({
  //       next : data => {
  //         this.movieForm.reset()
  //         console.log(data);
          
  //         this._service.setNewMovie({...obj,id : data.name})
  //       },
  //       error : err => {
  //         console.log(err)
  //       }
  //     })
  //   }
  // }


  // patch(){
  //   this._service.editMoviesobs$.subscribe(res => {
  //     if(res){
  //       this.movieForm.patchValue(res)
  //       this.isInEditMode = true
  //       this.editId = res.id
  //     }
  //   })
  // }


  // onUpdate(){
  //   if(this.movieForm.valid){
  //     let obj : Imovie = {
  //       ...this.movieForm.value,
  //       id : this.editId

  //     }
  //     console.log(obj);

  //     this._service.updateMovie(obj).subscribe({
  //       next : data => {
  //         this.isInEditMode = false
  //         this.movieForm.reset()
  //         this._service.setUpdateMovie(obj)
  //         console.log(data);
  //       },
  //       error : err => {
  //         console.log(err);
          
  //       }
  //     })
      
  //   }
  // }




  

  // //////////////////////////////4///////////////////////////////


  
  //  createMoviForm(){
  //   this.movieForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required],[]),
  //     desc : new FormControl(null,[Validators.required]),
  //     image : new FormControl(null,[Validators.required]),
  //     rating : new FormControl(null,[Validators.required])
  //   })
  // }

  // get f(){
  //   return this.movieForm.controls
  // }


  // onSubmit(){
  //   if(this.movieForm.valid){
  //     let obj = this.movieForm.value

  //     this._service.createMovies(obj).subscribe({
  //       next : data => {
  //         this.movieForm.reset()
  //         console.log(data);
          
  //         this._service.setNewMovie({...obj,id : data.name})
  //       },
  //       error : err => {
  //         console.log(err)
  //       }
  //     })
  //   }
  // }


  // patch(){
  //   this._service.editMoviesobs$.subscribe(res => {
  //     if(res){
  //       this.movieForm.patchValue(res)
  //       this.isInEditMode = true
  //       this.editId = res.id
  //     }
  //   })
  // }


  // onUpdate(){
  //   if(this.movieForm.valid){
  //     let obj : Imovie = {
  //       ...this.movieForm.value,
  //       id : this.editId

  //     }
  //     console.log(obj);

  //     this._service.updateMovie(obj).subscribe({
  //       next : data => {
  //         this.isInEditMode = false
  //         this.movieForm.reset()
  //         this._service.setUpdateMovie(obj)
  //         console.log(data);
  //       },
  //       error : err => {
  //         console.log(err);
          
  //       }
  //     })
      
  //   }
  // }




  

  // //////////////////////////////5///////////////////////////////


  
  //  createMoviForm(){
  //   this.movieForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required],[]),
  //     desc : new FormControl(null,[Validators.required]),
  //     image : new FormControl(null,[Validators.required]),
  //     rating : new FormControl(null,[Validators.required])
  //   })
  // }

  // get f(){
  //   return this.movieForm.controls
  // }


  // onSubmit(){
  //   if(this.movieForm.valid){
  //     let obj = this.movieForm.value

  //     this._service.createMovies(obj).subscribe({
  //       next : data => {
  //         this.movieForm.reset()
  //         console.log(data);
          
  //         this._service.setNewMovie({...obj,id : data.name})
  //       },
  //       error : err => {
  //         console.log(err)
  //       }
  //     })
  //   }
  // }


  // patch(){
  //   this._service.editMoviesobs$.subscribe(res => {
  //     if(res){
  //       this.movieForm.patchValue(res)
  //       this.isInEditMode = true
  //       this.editId = res.id
  //     }
  //   })
  // }


  // onUpdate(){
  //   if(this.movieForm.valid){
  //     let obj : Imovie = {
  //       ...this.movieForm.value,
  //       id : this.editId

  //     }
  //     console.log(obj);

  //     this._service.updateMovie(obj).subscribe({
  //       next : data => {
  //         this.isInEditMode = false
  //         this.movieForm.reset()
  //         this._service.setUpdateMovie(obj)
  //         console.log(data);
  //       },
  //       error : err => {
  //         console.log(err);
          
  //       }
  //     })
      
  //   }
  // }
}
