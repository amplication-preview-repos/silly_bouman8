import { User } from "../user/User";

export type Folder = {
  createdAt: Date;
  id: string;
  name: string | null;
  parentFolder: string | null;
  updatedAt: Date;
  user?: User | null;
};
