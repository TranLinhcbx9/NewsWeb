import { UploadfileService } from './uploadfile.service';
import { ToastrService } from 'ngx-toastr';
import { ArticleDialogComponent } from './article-dialog/article-dialog.component';
import { ListService, AuthService } from '@abp/ng.core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { ArticleService } from './../../proxy/news-web/apis/article-services/article.service';
import { Component, OnInit } from '@angular/core';
import { ArticleDto } from '@proxy/news-web/apis/article-services/dto';
import { MatDialog } from '@angular/material/dialog';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { enumTopicCodeEnumOptions } from '@proxy/news-web/enums';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ListService]
})
export class ArticleComponent implements OnInit {
  rootUrl: string = "https://localhost:44357/"
  articleList: ArticleDto[] = []
  startDate
  endDate
  searchText
  p =1
  selectedFiles: FileList;
  topicList = enumTopicCodeEnumOptions

  constructor(public readonly list: ListService, private dialog: MatDialog, private router: Router, private toast: ToasterService, private confirmation: ConfirmationService,
    private authService: AuthService, private articaleService: ArticleService, private uploadFileService: UploadfileService) { }

  ngOnInit(): void {
    this.getAllArticle()
  }
  getAllArticle() {
    // const bookStreamCreator = (query) => this.articaleService.getAllPaggingByParamAndSearchText(query,"");

    // this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
    //   this.articleList = response;
    // });

    this.articaleService.getAllPaggingByParamAndSearchTextAndStartDateAndEndDate({ maxResultCount: 1000, skipCount: 0, sorting: "" }, this.searchText,this.startDate,this.endDate).subscribe((data:any) => {
      this.articleList = data.results
      this.articleList.forEach(item=>{
        if(item.topic>=0){
          item.topic = this.topicList.find(topic=>topic.value == item.topic).key
  
        }
      })
    })

  }
  createArticle() {
    let ref = this.dialog.open(ArticleDialogComponent, {
      width: "700px"
    })
    ref.afterClosed().subscribe(rs => {
      if (rs) {
        this.getAllArticle()
      }
    })
  }
  editArticle(article: ArticleDto) {
    let item = {
      ...article
    } as ArticleDto
    let ref = this.dialog.open(ArticleDialogComponent, {
      width: "700px",
      data: item
    })
    ref.afterClosed().subscribe(rs => {
      if (rs) {
        this.getAllArticle()
      }
    })
  }
  deleteArticle(article: ArticleDto) {
    this.confirmation
      .warn(`::delete ${article.title}?`, { key: '::Are You Sure', defaultValue: 'Are you sure?' })
      .subscribe((status: Confirmation.Status) => {
        if (status == 'confirm') {
          this.articaleService.deleteById(article.id).subscribe(rs => {
            this.toast.success(`Deleted article ${article.title}`, "Success")
            this.getAllArticle()
            this.searchText =""
          })
        }
      });
  }


  downloadFile() {
    this.startDate = moment(this.startDate).format("YYYY-MM-DD")
    this.endDate = moment(this.endDate).format("YYYY-MM-DD")
    this.articaleService.exportExcelByStartDateAndEndDate(this.startDate,this.endDate).subscribe((data:any)=>{
      const file = new Blob([this.s2ab(atob(data))], {
        type: "application/vnd.ms-excel;charset=utf-8"
      });
      FileSaver.saveAs(file, "article");
    })
  }
  s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
  selectFile(event) {
    this.selectedFiles = event.target.files.item(0);
  }
  uploadImage(article:ArticleDto){
   
    let ref =   this.dialog.open(UploadImgComponent,{
        data: article
      })
      ref.afterClosed().subscribe(rs=>{
        if(rs){
          this.getAllArticle()
        }
      })
  }

}
