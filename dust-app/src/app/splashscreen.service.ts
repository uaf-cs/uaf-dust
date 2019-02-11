import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashscreenService {
  private disclaimerAccepted_ = true;
  get disclaimerAccepted(): boolean { return this.disclaimerAccepted_; }
  
  constructor() { }

  accept() {
    this.disclaimerAccepted_ = true;
  }
}
