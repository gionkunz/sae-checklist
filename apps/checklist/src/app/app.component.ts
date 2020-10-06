import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChecklistItem } from '../../../../libs/api-interfaces/src';
import { ChecklistService } from './checklist.service';

@Component({
  selector: 'checklist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  checklist = this.checklistService.getChecklist();
  constructor(public checklistService: ChecklistService) {}

  addChecklistItem(titleInput: HTMLInputElement) {
    this.checklistService.addChecklistItem({
      title: titleInput.value
    }).subscribe(() => {
      this.checklist = this.checklistService.getChecklist();
    });

    titleInput.value = '';
    titleInput.focus();
  }

  deleteChecklistItem(id: string) {
    this.checklistService.deleteChecklistItem(id).subscribe(() => {
      this.checklist = this.checklistService.getChecklist();
    });
  }

  trackById(index: number, item: ChecklistItem) {
    return item.id;
  }
}
