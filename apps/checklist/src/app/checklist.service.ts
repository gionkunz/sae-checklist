import { HttpClient } from '@angular/common/http';
import { ChecklistItem } from '@checklist/api-interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class ChecklistService {
  constructor(private http: HttpClient) { }

  getChecklist() {
    return this.http.get<readonly ChecklistItem[]>('/api/checklist');
  }
}
