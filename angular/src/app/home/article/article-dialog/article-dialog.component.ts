import { UploadfileService } from './../uploadfile.service';
import { ArticleDto } from '@proxy/news-web/apis/article-services/dto';
import { ArticleService } from './../../../proxy/news-web/apis/article-services/article.service';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToasterService } from '@abp/ng.theme.shared';
import { AppComponentBase } from 'src/app/shared/app-component-base';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.scss']
})
export class ArticleDialogComponent extends AppComponentBase implements OnInit {
  article = {} as ArticleDto
  selectedFiles: FileList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, injector: Injector, private toast: ToasterService,
    public dialogRef: MatDialogRef<ArticleDialogComponent>, private articleService: ArticleService, private uploadFileService:UploadfileService) {
    super();
  }

  ngOnInit(): void {
    if (this.data) {
      this.article = this.data
    }
  }
  saveAndClose() {
    if (!this.data?.id) {
      this.articleService.createByInput(this.article).subscribe(rs => {
        this.uploadFileService.uploadFile( this.selectedFiles, rs.id
        ).subscribe(rs => {
          this.toast.success("Create success", "success")
          this.dialogRef.close(this.article)
        })
      })
    }
    else {
      this.articleService.updateByInput(this.article).subscribe(rs => {
        this.uploadFileService.uploadFile(this.selectedFiles, rs.id).subscribe(rs => {
          this.toast.success(`updated article ${this.article.title}`, "success")
          this.dialogRef.close(this.article)
        })

      })
    }

  }
  selectFile(event) {
    this.selectedFiles = event.target.files.item(0);
  }
}
