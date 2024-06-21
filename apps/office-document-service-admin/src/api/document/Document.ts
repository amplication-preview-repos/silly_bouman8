import { Permission } from "../permission/Permission";
import { User } from "../user/User";

export type Document = {
  content: string | null;
  createdAt: Date;
  id: string;
  permissions?: Array<Permission>;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
