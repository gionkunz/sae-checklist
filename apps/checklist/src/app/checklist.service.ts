import { HttpClient } from '@angular/common/http';
import { AddChecklistItem, ChecklistItem } from '@checklist/api-interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class ChecklistService {
  constructor(private http: HttpClient) { }

  getChecklist() {
    return this.http.get<readonly ChecklistItem[]>('/api/checklist');
  }

  addChecklistItem(addChecklistItem: AddChecklistItem) {
    return this.http.post<void>('/api/checklist', addChecklistItem);
  }

  deleteChecklistItem(id: string) {
    return this.http.delete<void>(`/api/checklist/${id}`);
  }
}
