export interface Server {
  id: number;
  img: string;
  label: string;
  categories: Category[];
}

export interface Category {
  id: number;
  label: string;
  channels: Channel[];
}

export interface Channel {
  id: number;
  label: string;
  icon?: string;
  unread?: boolean;
  description?: string;
  messages: Message[];
}

export interface Message {
  id: number;
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
}
