import { Controller, Get } from '@nestjs/common';

import { ChecklistItem } from '@checklist/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('checklist')
  getChecklist(): readonly ChecklistItem[] {
    return this.appService.getChecklist();
  }
}
