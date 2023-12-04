import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllItems(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('pageSize', new DefaultValuePipe(10), ParseIntPipe) pageSize: number,
    @Query('tier') tier: string,
    @Query('character') character: string,
  ): any {
    const filteredItems = this.appService.filterItems({
      tier,
      character /*, add more filters */,
    });
    const paginatedItems = this.appService.getPaginatedItems(
      filteredItems,
      page,
      pageSize,
    );

    return {
      page,
      pageSize,
      totalItems: paginatedItems.totalItems,
      totalPages: paginatedItems.totalPages,
      items: paginatedItems.items,
    };
  }
}
