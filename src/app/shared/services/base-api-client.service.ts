import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { of, ReplaySubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export abstract class BaseApiClientService {
  constructor(
    protected http: HttpClient,
    protected state: TransferState,
    protected platformId,
    protected apiUrl) {
    this.apiUrl = environment.apiHost + '/api';
    }

  addRequestHeaders() {
    return {};
  }
  createRequestHeaders(options) {
    if(!options) {
      options = {};
    }
    if(!options.headers) {
      options.headers = new HttpHeaders();
    }
    options.observe = 'response';
    const headers = this.addRequestHeaders();
    for(let index in headers) {
      options.headers = options.headers.append(index, headers[index]);
    }
    return options;
  }

  get(url, options?) {
    const STATE_KEY = makeStateKey(`get-${url}-${options && options.params ? JSON.stringify(options.params) : null}`);
    if(isPlatformBrowser(this.platformId) && this.state.hasKey(STATE_KEY)) {
      const response = this.state.get(STATE_KEY, null as any);
      this.state.remove(STATE_KEY);
      return of(response);
    }
    return this.http.get( this.apiUrl + url, this.createRequestHeaders(options)).pipe(map((response) => {
      this.checkHeaders(response);
      if(isPlatformServer(this.platformId)) {
        this.state.set(STATE_KEY, JSON.parse(JSON.stringify(response['body'])));
      }
      return response['body'];
    }), catchError((err) => {
      this.checkHeaders(err);
      return throwError(err);
    }));
  }

  post(url, data = {}, options?) {
    data = this.dataToSnakeCase(data);
    return this.http.post(this.apiUrl + url, data, this.createRequestHeaders(options)).pipe(map((response) => {
      this.checkHeaders(response);
      return response['body'];
    }), catchError((err) => {
      this.checkHeaders(err);
      return throwError(err);
    }));
  }
  request(type, url, options?) {
    //data = this.dataToSnakeCase(data);
    return this.http.request(type, this.apiUrl + url, this.createRequestHeaders(options)).pipe(map((response) => {
      this.checkHeaders(response);
      return response['body'];
    }), catchError((err) => {
      this.checkHeaders(err);
      return throwError(err);
    }));
  }
  put(url, data = {}, options?) {
    data = this.dataToSnakeCase(data);
    return this.http.put(this.apiUrl + url, data, this.createRequestHeaders(options)).pipe(map((response) => {
      this.checkHeaders(response);
      return response['body'];
    }), catchError((err) => {
      this.checkHeaders(err);
      return throwError(err);
    }));
  }
  delete(url, options?) {
    return this.http.delete(this.apiUrl + url, this.createRequestHeaders(options)).pipe(map((response) => {
      this.checkHeaders(response);
      return response['body'];
    }), catchError((err) => {
      this.checkHeaders(err);
      return throwError(err);
    }));
  }
  checkHeaders(response) {
  }
  private toSnakeCase(str) {
    let upperChars = str.match(/([A-Z])/g);
    if (! upperChars) {
      return str;
    }
    for (let i = 0, n = upperChars.length; i < n; i++) {
      str = str.replace(new RegExp(upperChars[i]), '_' + upperChars[i].toLowerCase());
    }

    if (str.slice(0, 1) === '_') {
      str = str.slice(1);
    }
    return str;
  };
  private dataToSnakeCase(data: Object) {
    for(let k in data) {
      let snake = this.toSnakeCase(k);
      if(snake !== k) {
        data[this.toSnakeCase(k)] = data[k];
        delete data[k];
      }
    }
    return data;
  }
}
