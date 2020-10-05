import { Component } from '@angular/core';
import { ChecklistService } from './checklist.service';

@Component({
  selector: 'checklist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  checklist = this.checklistService.getChecklist();
  constructor(public checklistService: ChecklistService) {}
}
