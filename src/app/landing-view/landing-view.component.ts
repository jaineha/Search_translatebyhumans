import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  public searchActive = false;
  apiUrl = 'http://www.omdbapi.com/';
  public plotData = ['Short','Full'];
  public responseData= ['JSON','XML'];
  public plot = 'Short';
  public response ='JSON';
  public title;
  public year;
  public result;
  public url;

  constructor(
    public api: ApiService,
  ) { }

  ngOnInit() {
  }

  search(){
    this.searchActive = true;
    this.url = this.apiUrl + "?t=" + this.title + "&y=" + this.year +"&plot=" + this.plot + "&r=" + this.response;
    this.api.getmovie( this.url ).subscribe(data => {
      this.result = JSON.stringify(data);
    });
  }

  reset(){
    this.searchActive = false;
    this.title = this.year = '';
    this.plot = 'Short';
    this.response = 'JSON';
  }
}
