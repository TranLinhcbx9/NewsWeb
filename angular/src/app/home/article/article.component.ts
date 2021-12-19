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

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ListService]
})
export class ArticleComponent implements OnInit {
  rootUrl: string = "https://localhost:44357/"
  articleList: ArticleDto[] = []
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

    this.articaleService.getAllPaggingByParamAndSearchText({ maxResultCount: 20, skipCount: 0, sorting: "" }, "").subscribe(data => {
      this.articleList = data, console.log(data)
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
          })
        }

      });
  }
  generateTopic(content: string) {
    this.articaleService.dataLabelByInput({ text: content }).subscribe(rs => {
      this.getAllArticle()
    })
  }

}
