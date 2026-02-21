import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Imovie } from 'src/app/shared/Modals/movie';
import { MovieService } from 'src/app/shared/Services/movie.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
  
  moviesArr: Array<Imovie> = [];

  constructor(
    private _movieService: MovieService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getFetchMovies();
    this.onAdd()
    this.onUpdate()
    this.onRemoveM()
  }

  trackById(index:number,m:Imovie){
    return m.id;
  }


  getFetchMovies(){

    this._movieService.fetchMovies().subscribe({
      next : data =>{
        this.moviesArr = data;
        this._snackBar.open('Movies fetched successfully', 'Close', {duration: 1500});
      },
      error : err =>{
        console.log(err);
      }
    })
  }
   onRemoveM (){
    this._movieService.removeMoviesobs$.subscribe(res => {
      let get = this.moviesArr.findIndex(u => u.id === res)
      this.moviesArr.splice(get,1)
      this._snackBar.open(`Card is removed successfully!!!`, 'Close', {duration: 1500})
    })
  }

  onAdd(){
    this._movieService.newMoviesobs$.subscribe({
      next : data => {
        this.moviesArr.unshift(data)
        this._snackBar.open(`Card is added successfully!!!`, 'Close', {duration: 1500})
      },
      error : err => {
        console.log(err)
      }
    })
  }

  onUpdate(){
    this._movieService.updateMoviesobs$.subscribe(res => {
      let get = this.moviesArr.findIndex(r => r.id === res.id)
      this.moviesArr[get] = res
      this._snackBar.open(`Card is updated successfully!!!`, 'Close', {duration: 1500})
    })
  }




  // //////////////////////////////////////2////////////////////////


  
  // trackById(index:number,m:Imovie){
  //   return m.id;
  // }


  // getFetchMovies(){

  //   this._movieService.fetchMovies().subscribe({
  //     next : data =>{
  //       this.moviesArr = data;
  //       this._snackBar.open('Movies fetched successfully', 'Close', {duration: 1500});
  //     },
  //     error : err =>{
  //       console.log(err);
  //     }
  //   })
  // }
  //  onRemoveM (){
  //   this._movieService.removeMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(u => u.id === res)
  //     this.moviesArr.splice(get,1)
  //     this._snackBar.open(`Card is removed successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }

  // onAdd(){
  //   this._movieService.newMoviesobs$.subscribe({
  //     next : data => {
  //       this.moviesArr.unshift(data)
  //       this._snackBar.open(`Card is added successfully!!!`, 'Close', {duration: 1500})
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // onUpdate(){
  //   this._movieService.updateMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(r => r.id === res.id)
  //     this.moviesArr[get] = res
  //     this._snackBar.open(`Card is updated successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }





  

  // ///////////////////////////////3////////////////////////


  
  // trackById(index:number,m:Imovie){
  //   return m.id;
  // }


  // getFetchMovies(){

  //   this._movieService.fetchMovies().subscribe({
  //     next : data =>{
  //       this.moviesArr = data;
  //       this._snackBar.open('Movies fetched successfully', 'Close', {duration: 1500});
  //     },
  //     error : err =>{
  //       console.log(err);
  //     }
  //   })
  // }
  //  onRemoveM (){
  //   this._movieService.removeMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(u => u.id === res)
  //     this.moviesArr.splice(get,1)
  //     this._snackBar.open(`Card is removed successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }

  // onAdd(){
  //   this._movieService.newMoviesobs$.subscribe({
  //     next : data => {
  //       this.moviesArr.unshift(data)
  //       this._snackBar.open(`Card is added successfully!!!`, 'Close', {duration: 1500})
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // onUpdate(){
  //   this._movieService.updateMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(r => r.id === res.id)
  //     this.moviesArr[get] = res
  //     this._snackBar.open(`Card is updated successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }




  

  // ////////////////////////////////4////////////////////////


  
  // trackById(index:number,m:Imovie){
  //   return m.id;
  // }


  // getFetchMovies(){

  //   this._movieService.fetchMovies().subscribe({
  //     next : data =>{
  //       this.moviesArr = data;
  //       this._snackBar.open('Movies fetched successfully', 'Close', {duration: 1500});
  //     },
  //     error : err =>{
  //       console.log(err);
  //     }
  //   })
  // }
  //  onRemoveM (){
  //   this._movieService.removeMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(u => u.id === res)
  //     this.moviesArr.splice(get,1)
  //     this._snackBar.open(`Card is removed successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }

  // onAdd(){
  //   this._movieService.newMoviesobs$.subscribe({
  //     next : data => {
  //       this.moviesArr.unshift(data)
  //       this._snackBar.open(`Card is added successfully!!!`, 'Close', {duration: 1500})
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // onUpdate(){
  //   this._movieService.updateMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(r => r.id === res.id)
  //     this.moviesArr[get] = res
  //     this._snackBar.open(`Card is updated successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }




  

  // ///////////////////////////5////////////////////////


  
  // trackById(index:number,m:Imovie){
  //   return m.id;
  // }


  // getFetchMovies(){

  //   this._movieService.fetchMovies().subscribe({
  //     next : data =>{
  //       this.moviesArr = data;
  //       this._snackBar.open('Movies fetched successfully', 'Close', {duration: 1500});
  //     },
  //     error : err =>{
  //       console.log(err);
  //     }
  //   })
  // }
  //  onRemoveM (){
  //   this._movieService.removeMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(u => u.id === res)
  //     this.moviesArr.splice(get,1)
  //     this._snackBar.open(`Card is removed successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }

  // onAdd(){
  //   this._movieService.newMoviesobs$.subscribe({
  //     next : data => {
  //       this.moviesArr.unshift(data)
  //       this._snackBar.open(`Card is added successfully!!!`, 'Close', {duration: 1500})
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // onUpdate(){
  //   this._movieService.updateMoviesobs$.subscribe(res => {
  //     let get = this.moviesArr.findIndex(r => r.id === res.id)
  //     this.moviesArr[get] = res
  //     this._snackBar.open(`Card is updated successfully!!!`, 'Close', {duration: 1500})
  //   })
  // }
}
