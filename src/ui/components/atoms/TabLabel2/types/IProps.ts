export interface IProps {
  text: string;
  isEnable: boolean;
  variant: 'small' | 'medium' | 'large' | 'selected' | 'disabled';
  isSelect?: boolean;
}
