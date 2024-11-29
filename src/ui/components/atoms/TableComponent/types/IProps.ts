export interface TableRow {
  protected: boolean;
  id: number;
  title: string;
  visible: boolean;
  updated: string;
}

export interface IProps {
  data: TableRow[];
}
