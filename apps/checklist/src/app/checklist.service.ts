import { HttpClient } from '@angular/common/http';
import { Message } from '@checklist/api-interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class ChecklistService {
  hello$ = this.http.get<Message>('/api/hello');
  version$ = this.http.get<any>('/api/version');

  constructor(private http: HttpClient) { }
}
