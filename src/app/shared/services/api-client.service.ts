import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BaseApiClientService} from './base-api-client.service';
import {HttpClient} from '@angular/common/http';
import {TransferState} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService extends BaseApiClientService {
  scope: string;
  constructor(
    protected http: HttpClient,
    protected state: TransferState,
    @Inject(PLATFORM_ID) protected platformId) {
    super(http, state, platformId, environment.apiHost);
    this.scope = environment.scope;
  }

  addRequestHeaders() {
    return {
      'X-Scope': this.scope
    };
  }
}
