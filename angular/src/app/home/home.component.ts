import { Router } from '@angular/router';
import { ArticleDto } from './../proxy/news-web/apis/article-services/dto/models';
import { ArticleService } from './../proxy/news-web/apis/article-services/article.service';
import { AuthService, ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ListService]
})
export class HomeComponent implements OnInit {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  articleList = {} as ArticleDto[]

  constructor( public readonly list: ListService,private oAuthService: OAuthService, private router:Router,
    private authService: AuthService, private articaleService: ArticleService,) { }

  login() {
    this.authService.navigateToLogin();
  }
  ngOnInit(): void {
    const bookStreamCreator = (query) => this.articaleService.getAllPaggingByParamAndSearchText(query,"");

    // this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
    //   this.articleList = response;
    // });
    this.articaleService.getAllPaggingByParamAndSearchText(0, 10, "").subscribe(data => {
      console.log(data)
      this.articleList = data
    })

  }
  navDashboard(){
    this.router.navigate(["dashboard"])
  }
}
