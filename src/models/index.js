// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Quotation, QuoteItem } = initSchema(schema);

export {
  Quotation,
  QuoteItem
};