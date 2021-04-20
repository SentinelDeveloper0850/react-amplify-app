import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class QuoteItem {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly rate: number;
  readonly isTaxable: boolean;
  readonly total: number;
  constructor(init: ModelInit<QuoteItem>);
}

export declare class Quotation {
  readonly id: string;
  readonly description: string;
  readonly expiresOn: string;
  readonly total: number;
  readonly quotedItems?: (QuoteItem | null)[];
  constructor(init: ModelInit<Quotation>);
  static copyOf(source: Quotation, mutator: (draft: MutableModel<Quotation>) => MutableModel<Quotation> | void): Quotation;
}