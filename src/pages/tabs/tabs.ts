import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NoticiasPage } from '../noticias/noticias';
import { BugigangaPage } from '../bugiganga/bugiganga';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = NoticiasPage;
  tab5Root = BugigangaPage

  constructor() {

  }
}
