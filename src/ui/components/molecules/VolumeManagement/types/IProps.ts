export interface IProps {
  title: string;
  date: string;
  article: string;
  year: string;
  onFieldChange: (field: string, value: string) => void;
}
