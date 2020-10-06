import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ChecklistItem, AddChecklistItem } from '@checklist/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('checklist')
  getChecklist(): readonly ChecklistItem[] {
    return this.appService.getChecklist();
  }

  @Post('checklist')
  addChecklistItem(@Body() addChecklistItem: AddChecklistItem) {
    this.appService.addChecklistItem(addChecklistItem.title);
  }

  @Delete('checklist/:id')
  deleteChecklistItem(@Param('id') id) {
    this.appService.deleteChecklistItem(id);
  }
}
