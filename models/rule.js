/**
 * @file rule model
 * @author hushicai(bluthcy@gmail.com)
 */

import settings from '../vendor/spider-settings';
import createClient from '../lib/createClient'

const client = createClient(settings.rule_redis_db);

async function __makeTask (key) {
  try {
    let result = await client.get(key);

    // 转成json格式
    let rule = JSON.parse(result);

    return rule;
  }
  catch (ex) {
    console.log(ex);

    return ex;
  }
}

export async function create (rule) {
  const d = JSON.parse(rule);
  const key = d.id;

  try {
    // node redis不支持nested hash
    // 直接存储string吧
    let result = await client.set(key, rule);

    return result;
  }
  catch (ex) {
    console.log(ex);
    return ex;
  }
}

export async function read (key) {
  let task = __makeTask(key);

  try {
    let rule = await task;

    return rule;
  }
  catch (ex) {
    console.log(ex);

    return ex;
  }
}

export async function update (id, rule) {
  const d = JSON.parse(rule);
  const key = d.id;

  try {
    if (id != key) {
       await client.del(id);
    }

    await client.set(key, rule);
  }
  catch (ex) {
    console.log(ex);
  }
}

export async function del (key) {
  try {
    client.del(key);

    return 0;
  }
  catch (ex) {
    console.log(ex);
    return 1;
  }
}

export async function getList () {
  let result = await client.keys('rule:*');
  let tasks = result.map((key) => {
    return __makeTask(key)
  });

  try {
    let result = await Promise.all(tasks);

    return result;
  }
  catch (ex) {
    console.log(ex);
    return ex;
  }
}
