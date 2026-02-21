import { Component, OnInit } from '@angular/core';
import { Iposts } from 'src/app/shared/Modals/post';
import { PostService } from 'src/app/shared/Services/post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  postsArr : Array<Iposts> = []
  
  constructor(
    private _postService : PostService
  ) { }

 trackById(index : number,d : Iposts){
    return d.id
  }


  ngOnInit(): void {  
    this.fetchData()
    this.getPosts()
    this.deletePost()
    this.updatePost()
  }

  fetchData(){
    this._postService.fetchPosts().subscribe({
      next : data => {
        console.log(data);
        this.postsArr = data
      },
      error : err => {
        console.log(err)
      }
    })
  }

  getPosts(){
    this._postService.newPostObs$.subscribe(data => {
      this.postsArr.unshift(data)
    })
  }

  deletePost(){
    this._postService.removePostObs$.subscribe(id => {
      let getIndex = this.postsArr.findIndex(r => r.id === id)
      this.postsArr.splice(getIndex,1)

    })
  }

  updatePost(){
    this._postService.updatePostObs$.subscribe(res => {
      let getIndex = this.postsArr.findIndex(u => u.id === res.id)
        this.postsArr[getIndex] = res
     
    })
  }





/////////////////////////2///////////////////////////////
  
  // fetchData(){
  //   this._postService.fetchPosts().subscribe({
  //     next : data => {
  //       console.log(data);
  //       this.postsArr = data
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // getPosts(){
  //   this._postService.newPostObs$.subscribe(data => {
  //     this.postsArr.unshift(data)
  //   })
  // }

  // deletePost(){
  //   this._postService.removePostObs$.subscribe(id => {
  //     let getIndex = this.postsArr.findIndex(r => r.id === id)
  //     this.postsArr.splice(getIndex,1)

  //   })
  // }

  // updatePost(){
  //   this._postService.updatePostObs$.subscribe(res => {
  //     let getIndex = this.postsArr.findIndex(u => u.id === res.id)
  //       this.postsArr[getIndex] = res
     
  //   })
  // }





  ////////////////////////////////3///////////////////////



  
  // fetchData(){
  //   this._postService.fetchPosts().subscribe({
  //     next : data => {
  //       console.log(data);
  //       this.postsArr = data
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // getPosts(){
  //   this._postService.newPostObs$.subscribe(data => {
  //     this.postsArr.unshift(data)
  //   })
  // }

  // deletePost(){
  //   this._postService.removePostObs$.subscribe(id => {
  //     let getIndex = this.postsArr.findIndex(r => r.id === id)
  //     this.postsArr.splice(getIndex,1)

  //   })
  // }

  // updatePost(){
  //   this._postService.updatePostObs$.subscribe(res => {
  //     let getIndex = this.postsArr.findIndex(u => u.id === res.id)
  //       this.postsArr[getIndex] = res
     
  //   })
  // }








  ////////////////////////////////4///////////////////////



  
  // fetchData(){
  //   this._postService.fetchPosts().subscribe({
  //     next : data => {
  //       console.log(data);
  //       this.postsArr = data
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // getPosts(){
  //   this._postService.newPostObs$.subscribe(data => {
  //     this.postsArr.unshift(data)
  //   })
  // }

  // deletePost(){
  //   this._postService.removePostObs$.subscribe(id => {
  //     let getIndex = this.postsArr.findIndex(r => r.id === id)
  //     this.postsArr.splice(getIndex,1)

  //   })
  // }

  // updatePost(){
  //   this._postService.updatePostObs$.subscribe(res => {
  //     let getIndex = this.postsArr.findIndex(u => u.id === res.id)
  //       this.postsArr[getIndex] = res
     
  //   })
  // }



  
  ////////////////////////////////5///////////////////////



  
  // fetchData(){
  //   this._postService.fetchPosts().subscribe({
  //     next : data => {
  //       console.log(data);
  //       this.postsArr = data
  //     },
  //     error : err => {
  //       console.log(err)
  //     }
  //   })
  // }

  // getPosts(){
  //   this._postService.newPostObs$.subscribe(data => {
  //     this.postsArr.unshift(data)
  //   })
  // }

  // deletePost(){
  //   this._postService.removePostObs$.subscribe(id => {
  //     let getIndex = this.postsArr.findIndex(r => r.id === id)
  //     this.postsArr.splice(getIndex,1)

  //   })
  // }

  // updatePost(){
  //   this._postService.updatePostObs$.subscribe(res => {
  //     let getIndex = this.postsArr.findIndex(u => u.id === res.id)
  //       this.postsArr[getIndex] = res
     
  //   })
  // }

}
