export interface Article {
  id: string;
  title: string;
  content: string;
  cover: any;
  publishedAt: Date;
  slug: string;
  description: string;
  author: Author;
  blocks?: Array<{
    __component: string;
    id: number;
    body: string;
  }>;
}

export interface Author {
    id: number;
    name: string;
    bio?: string;
    avatar: {
        url: string;
    };
};