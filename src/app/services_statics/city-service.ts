import { Injectable } from "@angular/core";
import { CITY } from "./mock_city";

@Injectable()
export class CityService {
  private city:any;

  constructor() {
    this.city = CITY;
  }

  getAll() {
    return this.city;
  }

  getItem(id) {
    for (var i = 0; i < this.city.length; i++) {
      if (this.city[i].id === parseInt(id)) {
        return this.city[i];
      }
    }
    return null;
  }

  remove(item) {
    this.city.splice(this.city.indexOf(item), 1);
  }
}