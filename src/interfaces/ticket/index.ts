import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  status: string;
  customer_id?: string;
  agent_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  user_ticket_customer_idTouser?: UserInterface;
  user_ticket_agent_idTouser?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
  agent_id?: string;
  company_id?: string;
}
