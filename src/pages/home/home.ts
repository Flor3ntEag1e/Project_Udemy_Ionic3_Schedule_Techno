import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DataProvider } from "../../providers/data/data";
import { Technology } from "../../models/technology"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  technologies: Technology[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataProvider, private lc: LoadingController) {

  }

  ionViewWillLoad() {
    const loader = this.lc.create({
      content: 'veuiller patienter'
    })
    loader.present();
    this.technologies = this.ds.getAllTechnologies();
    console.log(this.technologies);
    loader.dismiss();
  }

  ionViewWillEnter() {
    const loader = this.lc.create({
      content: 'Chargement...'
    })
    loader.present();
    this.technologies = this.ds.getAllTechnologies();
    loader.dismiss();
  }

  onInput(event) {
    this.technologies = this.ds.search(event.target.value);
  }

}
