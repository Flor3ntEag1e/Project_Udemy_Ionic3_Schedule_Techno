import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Schedule } from '../../models/schedules';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-schedule-list',
  templateUrl: 'schedule-list.html',
})
export class ScheduleListPage {

  schedules: Schedule[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataProvider) {
  }

  ionViewWillEnter() {
    console.log('Mise à jour');
    this.schedules = this.ds.getAllSchedules();
  }

}
