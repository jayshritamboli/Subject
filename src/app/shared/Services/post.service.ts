import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IpostRes, Iposts } from '../Modals/post';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PostService {

BASE_URL : string = environment.BASE_URL;
POST_URL : string = `${this.BASE_URL}/blogs.json`

  constructor(
   private _http: HttpClient,
   private _snackBar: MatSnackBar

  ) { }

private newPostSub$ : Subject<Iposts> = new Subject<Iposts>()
  newPostObs$ : Observable<Iposts> = this.newPostSub$.asObservable()
  setNewPost (p : Iposts){
    this.newPostSub$.next(p)
  }

  private editPostSub$ : Subject<Iposts> = new Subject<Iposts>()
  editPostObs$ : Observable<Iposts> = this.editPostSub$.asObservable()
  setEditPost (post : Iposts){
    this.editPostSub$.next(post)
  }

   private updatePostSub$ : Subject<Iposts> = new Subject<Iposts>()
  updatePostObs$ : Observable<Iposts> = this.updatePostSub$.asObservable()
  setPost (post : Iposts){
    this.updatePostSub$.next(post)
  }

  private removePostSub$ : Subject<string> = new Subject<string>()
  removePostObs$ : Observable<string> = this.removePostSub$.asObservable()

  setRemove(r : string){
    this.removePostSub$.next(r)
  }

  fetchPosts() : Observable<Iposts[]>{
    return this._http.get<any>(this.POST_URL).pipe(
      map(obj => {
        let postArr :Array<Iposts> = []
        for(const key in obj){
          postArr.push({...obj[key],id:key})
        }
        return postArr
      })
    )
  }

  createPost(post : Iposts) : Observable<IpostRes>{
  this._snackBar.open('This post is created successfully !!!', 'Close', {
  duration: 2000
});
      return this._http.post<any>(this.POST_URL,post)
  }

  removePosts(id : string) : Observable<any>{
    let REMOVE_URL = `${this.BASE_URL}/cards/${id}.json`
    this._snackBar.open('This post is removed successfully !!!', 'Close', {
  duration: 2000
});
    return this._http.delete(REMOVE_URL)
  }

  updatePosts(up : Iposts) : Observable<Iposts>{
    let UPDATE_URL = `${this.BASE_URL}/cards/${up.id}.json`
    console.log(UPDATE_URL);
    

    this._snackBar.open('This post is updated successfully !!!', 'Close', {
  duration: 2000
});

    return this._http.patch<Iposts>(UPDATE_URL,up)
  }




///////////////////////////2///////////////////////////////




// private newPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   newPostObs$ : Observable<Iposts> = this.newPostSub$.asObservable()
//   setNewPost (p : Iposts){
//     this.newPostSub$.next(p)
//   }

//   private editPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   editPostObs$ : Observable<Iposts> = this.editPostSub$.asObservable()
//   setEditPost (post : Iposts){
//     this.editPostSub$.next(post)
//   }

//    private updatePostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   updatePostObs$ : Observable<Iposts> = this.updatePostSub$.asObservable()
//   setPost (post : Iposts){
//     this.updatePostSub$.next(post)
//   }

//   private removePostSub$ : Subject<string> = new Subject<string>()
//   removePostObs$ : Observable<string> = this.removePostSub$.asObservable()

//   setRemove(r : string){
//     this.removePostSub$.next(r)
//   }

//   fetchPosts() : Observable<Iposts[]>{
//     return this._http.get<any>(this.POST_URL).pipe(
//       map(obj => {
//         let postArr :Array<Iposts> = []
//         for(const key in obj){
//           postArr.push({...obj[key],id:key})
//         }
//         return postArr
//       })
//     )
//   }

//   createPost(post : Iposts) : Observable<IpostRes>{
//   this._snackBar.open('This post is created successfully !!!', 'Close', {
//   duration: 2000
// });
//       return this._http.post<any>(this.POST_URL,post)
//   }

//   removePosts(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.BASE_URL}/cards/${id}.json`
//     this._snackBar.open('This post is removed successfully !!!', 'Close', {
//   duration: 2000
// });
//     return this._http.delete(REMOVE_URL)
//   }

//   updatePosts(up : Iposts) : Observable<Iposts>{
//     let UPDATE_URL = `${this.BASE_URL}/cards/${up.id}.json`
//     console.log(UPDATE_URL);
    

//     this._snackBar.open('This post is updated successfully !!!', 'Close', {
//   duration: 2000
// });

//     return this._http.patch<Iposts>(UPDATE_URL,up)
//   }





//////////////////////////////3//////////////////////////////////





// private newPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   newPostObs$ : Observable<Iposts> = this.newPostSub$.asObservable()
//   setNewPost (p : Iposts){
//     this.newPostSub$.next(p)
//   }

//   private editPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   editPostObs$ : Observable<Iposts> = this.editPostSub$.asObservable()
//   setEditPost (post : Iposts){
//     this.editPostSub$.next(post)
//   }

//    private updatePostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   updatePostObs$ : Observable<Iposts> = this.updatePostSub$.asObservable()
//   setPost (post : Iposts){
//     this.updatePostSub$.next(post)
//   }

//   private removePostSub$ : Subject<string> = new Subject<string>()
//   removePostObs$ : Observable<string> = this.removePostSub$.asObservable()

//   setRemove(r : string){
//     this.removePostSub$.next(r)
//   }

//   fetchPosts() : Observable<Iposts[]>{
//     return this._http.get<any>(this.POST_URL).pipe(
//       map(obj => {
//         let postArr :Array<Iposts> = []
//         for(const key in obj){
//           postArr.push({...obj[key],id:key})
//         }
//         return postArr
//       })
//     )
//   }

//   createPost(post : Iposts) : Observable<IpostRes>{
//   this._snackBar.open('This post is created successfully !!!', 'Close', {
//   duration: 2000
// });
//       return this._http.post<any>(this.POST_URL,post)
//   }

//   removePosts(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.BASE_URL}/cards/${id}.json`
//     this._snackBar.open('This post is removed successfully !!!', 'Close', {
//   duration: 2000
// });
//     return this._http.delete(REMOVE_URL)
//   }

//   updatePosts(up : Iposts) : Observable<Iposts>{
//     let UPDATE_URL = `${this.BASE_URL}/cards/${up.id}.json`
//     console.log(UPDATE_URL);
    

//     this._snackBar.open('This post is updated successfully !!!', 'Close', {
//   duration: 2000
// });

//     return this._http.patch<Iposts>(UPDATE_URL,up)
//   }






////////////////////////////////4///////////////////////////////////////






// private newPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   newPostObs$ : Observable<Iposts> = this.newPostSub$.asObservable()
//   setNewPost (p : Iposts){
//     this.newPostSub$.next(p)
//   }

//   private editPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   editPostObs$ : Observable<Iposts> = this.editPostSub$.asObservable()
//   setEditPost (post : Iposts){
//     this.editPostSub$.next(post)
//   }

//    private updatePostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   updatePostObs$ : Observable<Iposts> = this.updatePostSub$.asObservable()
//   setPost (post : Iposts){
//     this.updatePostSub$.next(post)
//   }

//   private removePostSub$ : Subject<string> = new Subject<string>()
//   removePostObs$ : Observable<string> = this.removePostSub$.asObservable()

//   setRemove(r : string){
//     this.removePostSub$.next(r)
//   }

//   fetchPosts() : Observable<Iposts[]>{
//     return this._http.get<any>(this.POST_URL).pipe(
//       map(obj => {
//         let postArr :Array<Iposts> = []
//         for(const key in obj){
//           postArr.push({...obj[key],id:key})
//         }
//         return postArr
//       })
//     )
//   }

//   createPost(post : Iposts) : Observable<IpostRes>{
//   this._snackBar.open('This post is created successfully !!!', 'Close', {
//   duration: 2000
// });
//       return this._http.post<any>(this.POST_URL,post)
//   }

//   removePosts(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.BASE_URL}/cards/${id}.json`
//     this._snackBar.open('This post is removed successfully !!!', 'Close', {
//   duration: 2000
// });
//     return this._http.delete(REMOVE_URL)
//   }

//   updatePosts(up : Iposts) : Observable<Iposts>{
//     let UPDATE_URL = `${this.BASE_URL}/cards/${up.id}.json`
//     console.log(UPDATE_URL);
    

//     this._snackBar.open('This post is updated successfully !!!', 'Close', {
//   duration: 2000
// });

//     return this._http.patch<Iposts>(UPDATE_URL,up)
//   }





///////////////////////////////////////5////////////////////////////////////




// private newPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   newPostObs$ : Observable<Iposts> = this.newPostSub$.asObservable()
//   setNewPost (p : Iposts){
//     this.newPostSub$.next(p)
//   }

//   private editPostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   editPostObs$ : Observable<Iposts> = this.editPostSub$.asObservable()
//   setEditPost (post : Iposts){
//     this.editPostSub$.next(post)
//   }

//    private updatePostSub$ : Subject<Iposts> = new Subject<Iposts>()
//   updatePostObs$ : Observable<Iposts> = this.updatePostSub$.asObservable()
//   setPost (post : Iposts){
//     this.updatePostSub$.next(post)
//   }

//   private removePostSub$ : Subject<string> = new Subject<string>()
//   removePostObs$ : Observable<string> = this.removePostSub$.asObservable()

//   setRemove(r : string){
//     this.removePostSub$.next(r)
//   }

//   fetchPosts() : Observable<Iposts[]>{
//     return this._http.get<any>(this.POST_URL).pipe(
//       map(obj => {
//         let postArr :Array<Iposts> = []
//         for(const key in obj){
//           postArr.push({...obj[key],id:key})
//         }
//         return postArr
//       })
//     )
//   }

//   createPost(post : Iposts) : Observable<IpostRes>{
//   this._snackBar.open('This post is created successfully !!!', 'Close', {
//   duration: 2000
// });
//       return this._http.post<any>(this.POST_URL,post)
//   }

//   removePosts(id : string) : Observable<any>{
//     let REMOVE_URL = `${this.BASE_URL}/cards/${id}.json`
//     this._snackBar.open('This post is removed successfully !!!', 'Close', {
//   duration: 2000
// });
//     return this._http.delete(REMOVE_URL)
//   }

//   updatePosts(up : Iposts) : Observable<Iposts>{
//     let UPDATE_URL = `${this.BASE_URL}/cards/${up.id}.json`
//     console.log(UPDATE_URL);
    

//     this._snackBar.open('This post is updated successfully !!!', 'Close', {
//   duration: 2000
// });

//     return this._http.patch<Iposts>(UPDATE_URL,up)
//   }



}
