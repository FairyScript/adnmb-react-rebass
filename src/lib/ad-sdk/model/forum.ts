export type ForumList = ForumGroup[];

export interface ForumGroup {
  forums: Forum[];
  id: number;
  name: string;
  sort: number;
  status: string;
}

export type Forum = BasicForum | Timeline;
export interface BasicForum {
  createdAt: Date;
  fgroup: number;
  forum_fuse_id: number;
  id: number;
  interval: number;
  msg: string;
  name: string;
  permission_level: number;
  showName: string;
  sort: number;
  status: string;
  updateAt: Date;
}

export interface Timeline {
  id: number;
  msg: string;
  name: string;
}
