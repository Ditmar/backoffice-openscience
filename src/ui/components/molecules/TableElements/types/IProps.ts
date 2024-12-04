export interface IProps {
  id: number;
  attributes: {
    content: string;
    author: string;
    category: string;
    date: string;
    buttonLabel: string;
    isToggleOn: boolean;
  };
}
