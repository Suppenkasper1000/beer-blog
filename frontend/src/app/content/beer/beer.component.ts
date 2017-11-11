import { Component, OnInit } from '@angular/core';
import {BeerEntity} from '../BeerEntity';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers: BeerEntity[];

  constructor(private HttpService: HttpService) { }

  ngOnInit() {
    const headers = new Headers();
    headers.append('Accept', 'q=0.8;application/json;q=0.9');
    this.getAllBeers();
  }

  getAllBeers() {
    this.HttpService.getAllBeers()
      .subscribe(
        data => this.beers = data,
        () => console.log('List is available')
      );
  }
}
