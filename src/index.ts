import { DynamoDBStore } from './store';

/**
 * Return the `DynamoDBStore` extending `connect`'s session Store.
 *
 * @param {object} connect
 * @return {Function}
 * @api public
 */

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export default function connect(_session: any): Function {
  return DynamoDBStore;
}
