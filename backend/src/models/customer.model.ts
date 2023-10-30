import { ICustomers, IResponseCustomers } from '../interfaces';
import HttpException from '../utils/httpException';
import { Context, prismaContext } from './context';

class CustomerModel {
  context: Context;

  constructor(context: Context = prismaContext) {
    this.context = context;
  }

  getAllCustomers = async() =>  this.context.prisma.customer.findMany();

  public async createCustomer(customer: any) {
    try {
      const customerCreated = await this.context.prisma.customer.create({
        data: customer
      });
      return customerCreated
      
    } catch (error: any) {
      if (error && error.meta.target[0]) {
        throw new HttpException(409, `${error.meta.target[0]} already registered`);
      }
      // console.log(error);
    }
  }

  
}

export default CustomerModel;
