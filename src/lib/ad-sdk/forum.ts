import { apiGet } from './api';
import { Forum, ForumList, Timeline } from './model/forum';

export async function getForumList() {
  const res = await apiGet('getForumList');
  if (res.status === 200) {
    return parseForumList(res.data);
  } else {
    throw res;
  }
}

function parseForumList(data: any[]) {
  const res: ForumList = data.map(group =>
    Object.assign(group, {
      id: Number(group.id),
      sort: Number(group.sort),
      forums: parseForums(group.forums),
    }),
  );

  return res;
}

function parseForums(forums: any[]) {
  const res = forums.map(f => {
    if (Number(f.id) < 1) {
      return {
        id: Number(f.id),
        msg: f.msg,
        name: f.name,
      } as Timeline;
    }
    return {
      createdAt: new Date(f.createdAt),
      fgroup: Number(f.fgroup),
      forum_fuse_id: Number(f.forum_fuse_id),
      id: Number(f.id),
      interval: Number(f.interval),
      msg: f.msg,
      name: f.name,
      permission_level: Number(f.permission_level),
      showName: f.showName,
      sort: Number(f.sort),
      status: f.status,
      updateAt: new Date(f.updateAt),
    } as Forum;
  });
  return res;
}

export function getForumByID(id: number, page?: number) {}
