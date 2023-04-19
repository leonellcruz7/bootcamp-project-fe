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
}

export interface OptionTypes {
  options: string[];
}

export interface TagsTypes {
  label: string;
  active: boolean;
  onClick: () => void;
}
