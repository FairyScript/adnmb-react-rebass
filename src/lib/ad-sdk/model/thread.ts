export interface Reply {
  id: number;
  img: string;
  ext: string;
  now: Date;
  userid: string;
  name: string;
  email: string;
  title: string;
  content: string;
  sage: number;
  admin: number;
  status: string;
  bannedip: boolean;
  cookieValid: boolean;
}

export interface Thread extends Reply {
  replys: Reply[];
}
