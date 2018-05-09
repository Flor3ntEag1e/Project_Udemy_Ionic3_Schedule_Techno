import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { Technology } from '../../models/technology';

@IonicPage()
@Component({
  selector: 'page-add-techno',
  templateUrl: 'add-techno.html',
})
export class AddTechnoPage {
  categories: string[];
  technology: Technology = {name: '', category: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataProvider) {
  }

  ionViewWillLoad() {
    this.categories = this.ds.getAllCategories();
  }

  addTechnology() {
    this.ds.addTechno(this.technology);
    this.technology = {name: '', category: ''};
  }

}
