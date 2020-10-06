import { Injectable } from '@nestjs/common';
import { ChecklistItem } from '@checklist/api-interfaces';

let checklist: Record<string, ChecklistItem> = {};

@Injectable()
export class AppService {
  getChecklist(): readonly ChecklistItem[] {
    return Object.values(checklist);
  }

  addChecklistItem(title: string) {
    const id = `${+new Date()}`;
    checklist = {
      ...checklist,
      [id]: {
        id,
        title,
        done: false
      }
    };
  }

  deleteChecklistItem(id: string) {
    delete checklist[id];
  }
}
