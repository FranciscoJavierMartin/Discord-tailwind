export type Root = { [key: string]: Server };

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
}
