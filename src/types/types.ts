export interface InputTypes {
  label: string;
  placeholder: string;
  value: string | number;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  showError: boolean;
}
