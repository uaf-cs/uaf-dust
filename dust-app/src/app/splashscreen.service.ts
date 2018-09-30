import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashscreenService {
  private disclaimerAccepted_ = false;
  get disclaimerAccepted(): boolean { return this.disclaimerAccepted_; }
  
  constructor() { }

  accept() {
    this.disclaimerAccepted_ = true;
  }
}
