import { Component, OnInit } from '@angular/core';

@Component({
    // moduleId: module.id,
    selector: 'app-fixedplugin-cmp',
    templateUrl: 'fixedplugin.component.html'
})

export class FixedPluginComponent {

  public sidebarColor: string = "white";
  public sidebarActiveColor: string = "danger";

  public state: boolean = true;

  changeSidebarColor(color){
    var sidebar = <HTMLElement>document.querySelector('.sidebar');

    this.sidebarColor = color;
    if(sidebar != undefined){
        sidebar.setAttribute('data-color',color);
    }
  }
  changeSidebarActiveColor(color){
    var sidebar = <HTMLElement>document.querySelector('.sidebar');
    this.sidebarActiveColor = color;
    if(sidebar != undefined){
        sidebar.setAttribute('data-active-color',color);
    }
  }
 
}
