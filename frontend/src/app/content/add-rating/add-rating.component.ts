import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {BeerEntity} from '../BeerEntity';
import {Router} from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormUploadComponent} from '../../Upload/form-upload.component';


@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css'],
  providers: [HttpService, NgbRatingConfig]
})
export class AddRatingComponent implements OnInit {

  beer: BeerEntity;

  constructor(private HttpService: HttpService, private router: Router, config: NgbRatingConfig) {
    config.max = 5;
  }

  ngOnInit() {
    this.beer = new BeerEntity();
  }



  postRating() {
    this.HttpService.addBeer(this.beer).subscribe(
      answer => this.router.navigate(['/Overview'])
    );
  }
}
