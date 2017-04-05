import redis from 'redis';
import {promisify} from '../vendor/spider-utils';


export default function createClient (opts = {}) {
  const client = redis.createClient(opts);

  const keys = promisify(client.keys, client);

  // string
  const pdel = promisify(client.del, client);
  const pset = promisify(client.set, client);
  const pget = promisify(client.get, client);

  return {
    get: pget,
    del: pdel,
    set: pset,
    keys: keys
  };
}
