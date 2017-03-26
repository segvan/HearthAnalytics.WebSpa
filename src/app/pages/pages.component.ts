import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right"> </div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; Sergii Trotsenko 2017</div>
        <ul class="al-share clearfix">
         <li><a href="https://www.linkedin.com/in/strotsenko/" target="_blank"><i class="socicon socicon-linkedin"></i></a></li>         
          <li><a href="https://github.com/segvan" target="_blank"><i class="socicon socicon-github"></i></a></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
