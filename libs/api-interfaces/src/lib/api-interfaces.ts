export interface ChecklistItem {
  readonly id: string;
  readonly title: string;
  readonly done: boolean;
}

export interface AddChecklistItem {
  readonly title: string;
}
