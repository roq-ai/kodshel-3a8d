import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  agent_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
