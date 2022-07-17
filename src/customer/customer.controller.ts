import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Get()
  index() {
    return this.customerService.findAll();
  }

  @Post()
  store(@Body() dto: CreateCustomerDto) {
    console.log(dto);
    return this.customerService.create(dto);
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findById(id);
    if (!customer) {
      throw new NotFoundException();
    }
    return customer;
  }
}
