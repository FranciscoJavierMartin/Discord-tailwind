export type RootData = { [key: number]: Server };

export interface Server {
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
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
}
