import axios from 'axios';
import { isMock } from './testData';
import testForumList from './mock/forumList.json';

const path = {
  pathname: 'https://adnmb.com/',
  apiPath: '/Api/',
  managePath: '/Home/Forum/',
  cdnPath: 'https://nmbimg.fastmirror.org/',
  postPath: '/Home/Forum/doReplyThread.html',
  testPath: '/',
};

const instance = axios.create({
  baseURL: path.pathname,
  timeout: 3000,
  headers: { 'user-agent': 'HavefunClient-ADR', 'Cache-Control': 'no-cache' },
});

export async function apiGet(
  command: string,
  params?: { [k: string]: string | number },
) {
  if (isMock()) {
    return mockApiGet(command, params);
  }
  return instance.get('/Api/' + command, {
    params,
  });
}

async function mockApiGet(command: string, params: any) {
  let data;
  switch (command) {
    case 'getForumList':
      data = testForumList;
      break;
    default:
      return {
        status: 500,
        data: 'mock: 未命中的command',
      };
  }

  return {
    status: 200,
    data,
  };
}
