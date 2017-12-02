import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {BeerEntity} from '../BeerEntity';
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css'],
  providers: [HttpService]
})
export class AddRatingComponent implements OnInit {

  beer: BeerEntity;

  constructor(private HttpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.beer = new BeerEntity();
  }

  addRating() {
    this.HttpService.addBeer(this.beer).subscribe(
      answer => this.router.navigate(['/Overview'])
    );
  }
}
