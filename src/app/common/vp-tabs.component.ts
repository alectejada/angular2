import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { VpTab } from './vp-tab.component';

@Component({
  selector: 'vp-tabs',
  template: `<div class="vp-tabs-links">
    <ul class="nav nav-tabs">
      <li class="vp-tab-link-item" *ngFor="let tab of tabs" [class.active]="tab.active" (click)="selectTab(tab)">
        <a>{{tab.title}}</a>
      </li>
    </ul>
  </div>
  <div class="vp-tab-content">
    <ng-content selector="vp-tab"></ng-content>
  </div>
  `,
  styles: [
    `.vp-tab-link-item { margin:2px; padding: 10px 5px; background-color: #f5f5f5; display: inline-block; cursor: pointer; list-style: none; }`
  ]

})
export class VpTabs implements AfterContentInit {

  @ContentChildren(VpTab) tabs: QueryList<VpTab>;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length == 0) {
      this.tabs.first.active = true;
    }
  }

  selectTab(tab: VpTab) {
    this.tabs.toArray().forEach((tab) => tab.active = false);
    tab.active = true;
  }
}
