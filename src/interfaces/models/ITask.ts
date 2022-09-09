export interface ITask {
  id: number;
  title: string;
  situation: Boolean;
  userId: number;
  createdAt?: string;
  updatedAt?: string;
}
