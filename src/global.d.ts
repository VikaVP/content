interface ContentLists {
  id: string;
  title: string;
  channel: string;
  owner: string;
}
interface ContentResponses {
  page: number;
  limit: number;
  explicit: boolean;
  total: number;
  has_more: boolean;
  list: ContentLists[];
}
