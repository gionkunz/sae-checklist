import { Injectable } from '@nestjs/common';
import { ChecklistItem } from '@checklist/api-interfaces';

let checklist: readonly ChecklistItem[] = [{
  id: '1',
  title: 'Item One',
  done: false
}, {
  id: '2',
  title: 'Item 2',
  done: false
}, {
  id: '3',
  title: 'Item 3',
  done: false
}];

@Injectable()
export class AppService {
  getChecklist(): readonly ChecklistItem[] {
    return checklist;
  }
}
