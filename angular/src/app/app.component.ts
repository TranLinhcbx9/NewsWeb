import { ReplaceableComponentsService } from '@abp/ng.core';
import { eThemeBasicComponents, RoutesComponent } from '@abp/ng.theme.basic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent implements OnInit {


  constructor( private replaceableComponents: ReplaceableComponentsService) {} // injected ReplaceableComponentsService

  ngOnInit() {
    this.replaceableComponents.add({
        component: RoutesComponent,
        key: eThemeBasicComponents.Routes,
      });
  }
}
