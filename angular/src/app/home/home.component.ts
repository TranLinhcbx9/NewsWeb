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
export class HomeComponent  {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
  articleList = {} as ArticleDto[]

  constructor( public readonly list: ListService,private oAuthService: OAuthService, private router:Router,
    private authService: AuthService, private articaleService: ArticleService,) { }

  login() {
    this.authService.navigateToLogin();
  }
 
  navDashboard(){
    this.router.navigate(["dashboard"])
  }
}
