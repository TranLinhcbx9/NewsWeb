import { eLayoutType, RoutesService } from '@abp/ng.core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  /**
   *
   */
  constructor(private routes:RoutesService) {
    
  }
  ngOnInit(): void {
    this.routes.add([
      {
        path: '/article',
        name: 'article',
        order: 101,
        iconClass: 'fas fa-question-circle',
        requiredPolicy: '',
        layout: eLayoutType.application,
      },
     
    ]);
  }
}
