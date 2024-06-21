import { Document } from "../document/Document";
import { User } from "../user/User";

export type Permission = {
  createdAt: Date;
  document?: Document | null;
  id: string;
  permissionType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
