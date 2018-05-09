import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Technology } from "../../models/technology"
import { Schedule } from '../../models/schedules';

@Injectable()
export class DataProvider {

  technologies: Technology[] = [
    {name: 'Angular', category:'Front'},
    {name: 'Ionic', category:'Hybride'},
    {name: 'Node', category:'Backend'}
  ];

  categories: string[] = ['Front', 'Backend', 'Hybride', 'Fullstack', 'Autre'];

  priorities: string[] = ['basse', 'moyenne', 'haute'];

  schedules: Schedule[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getAllTechnologies() {
    return this.technologies;
  }

  getAllCategories() {
    return this.categories;
  }

  getAllPriorities() {
    return this.priorities;
  }

  getAllSchedules() {
    return this.schedules;
  }

  search(term: string) {
    return this.technologies.filter(tech => tech.name.toString().includes(term));
  }

  addTechno(technology: Technology) {
    this.technologies = [...this.technologies, technology];
    console.log(this.technologies);
  }

  createSchedule(schedule: Schedule) {
    this.schedules = [...this.schedules, schedule];
    console.log(this.schedules);
  }

}
