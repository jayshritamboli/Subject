import { Injectable } from '@angular/core';
import { Imovie, Ires } from '../Modals/movie';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  base_url: string = environment.Base_Url
  Post_url: string = `${environment.Base_Url}/movies.json`

  constructor(

    private _httpClient:HttpClient,

  ) { }


private newMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
  newMoviesobs$ : Observable<Imovie> = this.newMovieSub$.asObservable()
  setNewMovie(m : Imovie){
    return this.newMovieSub$.next(m)
  }

  private editMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
  editMoviesobs$ : Observable<Imovie> = this.editMovieSub$.asObservable()
  setNEditMovie(m : Imovie){
    return this.editMovieSub$.next(m)
  }

    private updateMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
  updateMoviesobs$ : Observable<Imovie> = this.updateMovieSub$.asObservable()
  setUpdateMovie(m : Imovie){
    return this.updateMovieSub$.next(m)
  }

    private removeMovieSub$ : Subject<string> = new Subject<string>()
  removeMoviesobs$ : Observable<string> = this.removeMovieSub$.asObservable()
  setREmoveMovie(m : string){
    return this.removeMovieSub$.next(m)
  }


  fetchMovies():Observable<Imovie[]>{
    return this._httpClient.get<Imovie[]>(this.base_url + '/movies.json').pipe(
      map(obj=>{
        let moviesArr : Array<Imovie>= [];
        for(const key in obj){
          moviesArr.unshift({...obj[key] , id : key})
        }
        return moviesArr;
      })
    )
    

  }


  createMovies(movie : Imovie) : Observable<Ires>{
    return this._httpClient.post<any>(this.Post_url,movie)
  }

  removeMovies(id : string) : Observable<any>{
    let REMOVE_URL = `${this.base_url}/movies/${id}.json`
    return this._httpClient.delete(REMOVE_URL)
  }

  updateMovie(update : Imovie) : Observable<Imovie>{
    let UPDATE_URL = `${this.base_url}/movies/${update.id}.json`
    return this._httpClient.patch<Imovie>(UPDATE_URL,update)
  }




//   ////////////////////////////////////////2//////////////////////////////////////


  
// private newMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   newMoviesobs$ : Observable<Imovie> = this.newMovieSub$.asObservable()
//   setNewMovie(m : Imovie){
//     return this.newMovieSub$.next(m)
//   }

//   private editMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   editMoviesobs$ : Observable<Imovie> = this.editMovieSub$.asObservable()
//   setNEditMovie(m : Imovie){
//     return this.editMovieSub$.next(m)
//   }

//     private updateMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   updateMoviesobs$ : Observable<Imovie> = this.updateMovieSub$.asObservable()
//   setUpdateMovie(m : Imovie){
//     return this.updateMovieSub$.next(m)
//   }

//     private removeMovieSub$ : Subject<string> = new Subject<string>()
//   removeMoviesobs$ : Observable<string> = this.removeMovieSub$.asObservable()
//   setREmoveMovie(m : string){
//     return this.removeMovieSub$.next(m)
//   }


//   fetchMovies():Observable<Imovie[]>{
//     return this._httpClient.get<Imovie[]>(this.base_url + '/movies.json').pipe(
//       map(obj=>{
//         let moviesArr : Array<Imovie>= [];
//         for(const key in obj){
//           moviesArr.unshift({...obj[key] , id : key})
//         }
//         return moviesArr;
//       })
//     )
    

//   }


//   createMovies(movie : Imovie) : Observable<Ires>{
//     return this._httpClient.post<any>(this.Post_url,movie)
//   }

//   removeMovies(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.base_url}/movies/${id}.json`
//     return this._httpClient.delete(REMOVE_URL)
//   }

//   updateMovie(update : Imovie) : Observable<Imovie>{
//     let UPDATE_URL = `${this.base_url}/movies/${update.id}.json`
//     return this._httpClient.patch<Imovie>(UPDATE_URL,update)
//   }



  ////////////////////////////////////////3//////////////////////////////////////


  
// private newMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   newMoviesobs$ : Observable<Imovie> = this.newMovieSub$.asObservable()
//   setNewMovie(m : Imovie){
//     return this.newMovieSub$.next(m)
//   }

//   private editMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   editMoviesobs$ : Observable<Imovie> = this.editMovieSub$.asObservable()
//   setNEditMovie(m : Imovie){
//     return this.editMovieSub$.next(m)
//   }

//     private updateMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   updateMoviesobs$ : Observable<Imovie> = this.updateMovieSub$.asObservable()
//   setUpdateMovie(m : Imovie){
//     return this.updateMovieSub$.next(m)
//   }

//     private removeMovieSub$ : Subject<string> = new Subject<string>()
//   removeMoviesobs$ : Observable<string> = this.removeMovieSub$.asObservable()
//   setREmoveMovie(m : string){
//     return this.removeMovieSub$.next(m)
//   }


//   fetchMovies():Observable<Imovie[]>{
//     return this._httpClient.get<Imovie[]>(this.base_url + '/movies.json').pipe(
//       map(obj=>{
//         let moviesArr : Array<Imovie>= [];
//         for(const key in obj){
//           moviesArr.unshift({...obj[key] , id : key})
//         }
//         return moviesArr;
//       })
//     )
    

//   }


//   createMovies(movie : Imovie) : Observable<Ires>{
//     return this._httpClient.post<any>(this.Post_url,movie)
//   }

//   removeMovies(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.base_url}/movies/${id}.json`
//     return this._httpClient.delete(REMOVE_URL)
//   }

//   updateMovie(update : Imovie) : Observable<Imovie>{
//     let UPDATE_URL = `${this.base_url}/movies/${update.id}.json`
//     return this._httpClient.patch<Imovie>(UPDATE_URL,update)
//   }



  ////////////////////////////////////////3//////////////////////////////////////


  
// private newMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   newMoviesobs$ : Observable<Imovie> = this.newMovieSub$.asObservable()
//   setNewMovie(m : Imovie){
//     return this.newMovieSub$.next(m)
//   }

//   private editMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   editMoviesobs$ : Observable<Imovie> = this.editMovieSub$.asObservable()
//   setNEditMovie(m : Imovie){
//     return this.editMovieSub$.next(m)
//   }

//     private updateMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   updateMoviesobs$ : Observable<Imovie> = this.updateMovieSub$.asObservable()
//   setUpdateMovie(m : Imovie){
//     return this.updateMovieSub$.next(m)
//   }

//     private removeMovieSub$ : Subject<string> = new Subject<string>()
//   removeMoviesobs$ : Observable<string> = this.removeMovieSub$.asObservable()
//   setREmoveMovie(m : string){
//     return this.removeMovieSub$.next(m)
//   }


//   fetchMovies():Observable<Imovie[]>{
//     return this._httpClient.get<Imovie[]>(this.base_url + '/movies.json').pipe(
//       map(obj=>{
//         let moviesArr : Array<Imovie>= [];
//         for(const key in obj){
//           moviesArr.unshift({...obj[key] , id : key})
//         }
//         return moviesArr;
//       })
//     )
    

//   }


//   createMovies(movie : Imovie) : Observable<Ires>{
//     return this._httpClient.post<any>(this.Post_url,movie)
//   }

//   removeMovies(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.base_url}/movies/${id}.json`
//     return this._httpClient.delete(REMOVE_URL)
//   }

//   updateMovie(update : Imovie) : Observable<Imovie>{
//     let UPDATE_URL = `${this.base_url}/movies/${update.id}.json`
//     return this._httpClient.patch<Imovie>(UPDATE_URL,update)
//   }




  ////////////////////////////////////////4//////////////////////////////////////


  
// private newMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   newMoviesobs$ : Observable<Imovie> = this.newMovieSub$.asObservable()
//   setNewMovie(m : Imovie){
//     return this.newMovieSub$.next(m)
//   }

//   private editMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   editMoviesobs$ : Observable<Imovie> = this.editMovieSub$.asObservable()
//   setNEditMovie(m : Imovie){
//     return this.editMovieSub$.next(m)
//   }

//     private updateMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   updateMoviesobs$ : Observable<Imovie> = this.updateMovieSub$.asObservable()
//   setUpdateMovie(m : Imovie){
//     return this.updateMovieSub$.next(m)
//   }

//     private removeMovieSub$ : Subject<string> = new Subject<string>()
//   removeMoviesobs$ : Observable<string> = this.removeMovieSub$.asObservable()
//   setREmoveMovie(m : string){
//     return this.removeMovieSub$.next(m)
//   }


//   fetchMovies():Observable<Imovie[]>{
//     return this._httpClient.get<Imovie[]>(this.base_url + '/movies.json').pipe(
//       map(obj=>{
//         let moviesArr : Array<Imovie>= [];
//         for(const key in obj){
//           moviesArr.unshift({...obj[key] , id : key})
//         }
//         return moviesArr;
//       })
//     )
    

//   }


//   createMovies(movie : Imovie) : Observable<Ires>{
//     return this._httpClient.post<any>(this.Post_url,movie)
//   }

//   removeMovies(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.base_url}/movies/${id}.json`
//     return this._httpClient.delete(REMOVE_URL)
//   }

//   updateMovie(update : Imovie) : Observable<Imovie>{
//     let UPDATE_URL = `${this.base_url}/movies/${update.id}.json`
//     return this._httpClient.patch<Imovie>(UPDATE_URL,update)
//   }




  ////////////////////////////////////////5//////////////////////////////////////


  
// private newMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   newMoviesobs$ : Observable<Imovie> = this.newMovieSub$.asObservable()
//   setNewMovie(m : Imovie){
//     return this.newMovieSub$.next(m)
//   }

//   private editMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   editMoviesobs$ : Observable<Imovie> = this.editMovieSub$.asObservable()
//   setNEditMovie(m : Imovie){
//     return this.editMovieSub$.next(m)
//   }

//     private updateMovieSub$ : Subject<Imovie> = new Subject<Imovie>()
//   updateMoviesobs$ : Observable<Imovie> = this.updateMovieSub$.asObservable()
//   setUpdateMovie(m : Imovie){
//     return this.updateMovieSub$.next(m)
//   }

//     private removeMovieSub$ : Subject<string> = new Subject<string>()
//   removeMoviesobs$ : Observable<string> = this.removeMovieSub$.asObservable()
//   setREmoveMovie(m : string){
//     return this.removeMovieSub$.next(m)
//   }


//   fetchMovies():Observable<Imovie[]>{
//     return this._httpClient.get<Imovie[]>(this.base_url + '/movies.json').pipe(
//       map(obj=>{
//         let moviesArr : Array<Imovie>= [];
//         for(const key in obj){
//           moviesArr.unshift({...obj[key] , id : key})
//         }
//         return moviesArr;
//       })
//     )
    

//   }


//   createMovies(movie : Imovie) : Observable<Ires>{
//     return this._httpClient.post<any>(this.Post_url,movie)
//   }

//   removeMovies(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.base_url}/movies/${id}.json`
//     return this._httpClient.delete(REMOVE_URL)
//   }

//   updateMovie(update : Imovie) : Observable<Imovie>{
//     let UPDATE_URL = `${this.base_url}/movies/${update.id}.json`
//     return this._httpClient.patch<Imovie>(UPDATE_URL,update)
//   }
}
