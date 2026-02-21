import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Iposts } from 'src/app/shared/Modals/post';
import { PostService } from 'src/app/shared/Services/post.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

   @Input() data !: Iposts

  constructor(
    private _postService: PostService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onRemove(){
    let matConfig = new MatDialogConfig()
    matConfig.data = `Are you sure to remove this post with id <strong>${this.data.id}</strong>`
    matConfig.width = "300px"

    let matRef = this._dialog.open(GetConfirmComponent,matConfig)
    matRef.disableClose = true
    matRef.afterClosed().subscribe(res => {
      if(res){
        this._postService.removePosts(this.data.id).subscribe({
          next :data => {
            console.log(data);
            this._postService.setRemove(this.data.id)
          },
          error : err => {
            console.log(err)
          }
        })
      }
    })
  }


  onEdit(){
    this._postService.setEditPost(this.data)
  }





  ////////////////////////////////2//////////////////////



  
  // onRemove(){
  //   let matConfig = new MatDialogConfig()
  //   matConfig.data = `Are you sure to remove this post with id <strong>${this.data.id}</strong>`
  //   matConfig.width = "300px"

  //   let matRef = this._dialog.open(GetConfirmComponent,matConfig)
  //   matRef.disableClose = true
  //   matRef.afterClosed().subscribe(res => {
  //     if(res){
  //       this._postService.removePosts(this.data.id).subscribe({
  //         next :data => {
  //           console.log(data);
  //           this._postService.setRemove(this.data.id)
  //         },
  //         error : err => {
  //           console.log(err)
  //         }
  //       })
  //     }
  //   })
  // }


  // onEdit(){
  //   this._postService.setEditPost(this.data)
  // }





  

  ////////////////////////////////3//////////////////////



  
  // onRemove(){
  //   let matConfig = new MatDialogConfig()
  //   matConfig.data = `Are you sure to remove this post with id <strong>${this.data.id}</strong>`
  //   matConfig.width = "300px"

  //   let matRef = this._dialog.open(GetConfirmComponent,matConfig)
  //   matRef.disableClose = true
  //   matRef.afterClosed().subscribe(res => {
  //     if(res){
  //       this._postService.removePosts(this.data.id).subscribe({
  //         next :data => {
  //           console.log(data);
  //           this._postService.setRemove(this.data.id)
  //         },
  //         error : err => {
  //           console.log(err)
  //         }
  //       })
  //     }
  //   })
  // }


  // onEdit(){
  //   this._postService.setEditPost(this.data)
  // }



  

  ////////////////////////////////4//////////////////////



  
  // onRemove(){
  //   let matConfig = new MatDialogConfig()
  //   matConfig.data = `Are you sure to remove this post with id <strong>${this.data.id}</strong>`
  //   matConfig.width = "300px"

  //   let matRef = this._dialog.open(GetConfirmComponent,matConfig)
  //   matRef.disableClose = true
  //   matRef.afterClosed().subscribe(res => {
  //     if(res){
  //       this._postService.removePosts(this.data.id).subscribe({
  //         next :data => {
  //           console.log(data);
  //           this._postService.setRemove(this.data.id)
  //         },
  //         error : err => {
  //           console.log(err)
  //         }
  //       })
  //     }
  //   })
  // }


  // onEdit(){
  //   this._postService.setEditPost(this.data)
  // }




  

  ////////////////////////////////5//////////////////////



  
  // onRemove(){
  //   let matConfig = new MatDialogConfig()
  //   matConfig.data = `Are you sure to remove this post with id <strong>${this.data.id}</strong>`
  //   matConfig.width = "300px"

  //   let matRef = this._dialog.open(GetConfirmComponent,matConfig)
  //   matRef.disableClose = true
  //   matRef.afterClosed().subscribe(res => {
  //     if(res){
  //       this._postService.removePosts(this.data.id).subscribe({
  //         next :data => {
  //           console.log(data);
  //           this._postService.setRemove(this.data.id)
  //         },
  //         error : err => {
  //           console.log(err)
  //         }
  //       })
  //     }
  //   })
  // }


  // onEdit(){
  //   this._postService.setEditPost(this.data)
  // }

}
