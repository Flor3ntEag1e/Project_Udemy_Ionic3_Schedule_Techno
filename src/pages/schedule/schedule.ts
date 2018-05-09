import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController} from 'ionic-angular';

import { Schedule } from '../../models/schedules';
import { Technology } from '../../models/technology';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  schedule: Schedule = {
    name: '',
    date: '',
    duration: 0,
    priority: '',
    remark: '',
    technology: { name: '', category: ''}
  };

  technologies: Technology[];  
  categories: string[];
  priorities: string[];

  isInEditMode = false;

  constructor(public navCtrl: NavController, private ds: DataProvider, private toastCtrl: ToastController) {
  }

  ionViewWillLoad() {
    this.technologies = this.ds.getAllTechnologies();
    this.categories = this.ds.getAllCategories();
    this.priorities = this.ds.getAllPriorities();
  }

  createSchedule() {
    this.ds.createSchedule(this.schedule);
    this.toastCtrl.create({
      message: 'Votre programme a été créé',
      duration: 2000,
      cssClass: 'toastStyle'
    }).present();
    this.resetSchedule();
  }

  resetSchedule() {
    this.schedule =  {
      name: '',
      date: '',
      duration: 0,
      priority: '',
      remark: '',
      technology: { name: '', category: ''}
  }
}

}
