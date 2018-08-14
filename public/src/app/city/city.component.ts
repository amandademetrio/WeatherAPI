import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  main = {};
  city = "";
  weather = [];
  picture = "";

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getForecast(params.name)
  });
  }

  getForecast(city) {
    let observable = this._httpService.getForecast(city);
    observable.subscribe(data => {
      this.main = data['main'];
      this.city = data['name'];
      this.weather = data['weather'];

      if (this.city == "Seattle") {
        this.picture = "https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg"
      }
      else if (this.city == "San Jose") {
        this.picture = "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
      }
      else if (this.city == "Burbank") {
        this.picture = "https://42708cacf40f89a132b5-6283e94302505d72a5788c346190d53d.ssl.cf1.rackcdn.com/properties/photos/17241568_20_1498500829.jpg"
      }
      else if (this.city == "Dallas") {
        this.picture = "https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg"
      }
      else if (this.city == "Washington DC.") {
        this.picture = "https://images.pexels.com/photos/208702/pexels-photo-208702.jpeg"
      }
      else if (this.city == "Chicago") {
        this.picture = "https://images.pexels.com/photos/1108402/pexels-photo-1108402.jpeg"
      }
      console.log(data)
    })

  }

}
