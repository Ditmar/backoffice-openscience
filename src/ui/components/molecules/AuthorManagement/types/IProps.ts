export interface IProps {
  title?: string;
  apiId?: string;
  buttonLabel?: string;
  onSave?: (event: { count: number; event: MouseEvent }) => void;
  onPublish?: (event: { count: number; event: MouseEvent }) => void;
  disabled?: boolean;
}
