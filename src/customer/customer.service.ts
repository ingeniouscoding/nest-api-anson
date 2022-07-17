import { Injectable } from '@nestjs/common';

import { CreateCustomerDto } from './dto';
import { Customer } from './entities';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'leonardo@email.dev',
      name: 'Leo',
    },
    {
      id: 2,
      email: 'danatello@email.dev',
      name: 'dan',
    },
    {
      id: 3,
      email: 'mikelangelo@email.dev',
      name: 'Mike',
    },
  ];

  findAll() {
    return this.customers;
  }

  findById(id: number) {
    return this.customers.find((c) => c.id === id) ?? null;
  }

  create(dto: CreateCustomerDto) {
    this.customers.push(dto);
    return dto;
  }
}
