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

export interface PostAttributes {
  body: string;
  tags: string[];
  title: string;
  user_id: string;
  votes: number;
  created_at: Date;
  update_at: Date;
  id: string;
}

export interface PostCardTypes {
  attributes: PostAttributes;
  id: string;
  relationships: any;
}

export interface PostTypes {
  post: PostCardTypes;
  update: boolean;
  setUpdate: any;
}

export interface PostContentType {
  content: PostAttributes;
}

export interface UserInfo {
  email: string;
  firstname: string;
  lastname: string;
  posts: any;
  username: string;
  data: any;
}

export interface UserInfoTypes {
  info: UserInfo;
}

export interface CommentsType {
  created_at: Date;
  id: string;
  message: string;
  post_id: string;
  updated_at: string;
  username: string;
  votes: number;
}

export interface CommentDetails {
  details: CommentsType;
}

export interface CreatePost {
  title: string;
  body: string;
  user_id: string;
  tags: string[];
}

export interface Post {
  post: CreatePost;
}

export interface Username {
  username: string;
}
