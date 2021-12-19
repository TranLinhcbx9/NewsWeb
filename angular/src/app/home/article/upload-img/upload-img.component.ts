import { UploadfileService } from './../uploadfile.service';
import { ArticleDto } from '@proxy/news-web/apis/article-services/dto';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {
  article: ArticleDto
  selectedFiles: FileList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private toast: ToasterService,
    public ref: MatDialogRef<UploadImgComponent>, private uploadFileService: UploadfileService) { }

  ngOnInit(): void {
    this.article = this.data
  }
  saveAndClose() {
    this.uploadFileService.uploadFile(this.selectedFiles, this.article.id
    ).subscribe(rs => {
      this.toast.success("upload success", "success")
      this.ref.close(this.article)
    })
  }
  selectFile(event) {
    this.selectedFiles = event.target.files.item(0);
  }
}
