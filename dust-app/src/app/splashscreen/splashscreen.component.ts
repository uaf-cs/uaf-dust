import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashscreenService } from '../splashscreen.service';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent implements OnInit {
  get accepted(): boolean { return this.splashscreenService.disclaimerAccepted; }

  constructor(
    public router: Router,
    private splashscreenService: SplashscreenService
    ) { }

  ngOnInit() {
  }

  accept() {
    this.splashscreenService.accept();
  }
}
