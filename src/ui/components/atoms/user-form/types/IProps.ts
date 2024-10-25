interface FormData {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface IProps {
  onSubmit: (data: FormData) => void;
  onClick?: () => void;
}
