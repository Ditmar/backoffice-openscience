export interface IProps {
  items: string[];
  page: number;
  onCheck: (item: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}
