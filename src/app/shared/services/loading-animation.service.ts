import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingAnimationService {
  animationLoading: boolean = true;

  constructor() { }
}
