export interface InputTypes {
  label: string;
  placeholder: string;
  value: string | number;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  showError: boolean;
}

export interface TextareaTypes extends Omit<InputTypes, "onChange" | "type"> {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height: string;
}

export interface OptionTypes {
  options: string[];
}

export interface TagsTypes {
  label: string;
  active: boolean;
  onClick: () => void;
}

export interface LoginTypes {
  username: string;
  password: string;
}

export interface SignupTypes extends LoginTypes {
  email: string;
  navigate: (path: string) => void;
}
