import { Document } from "../document/Document";
import { Folder } from "../folder/Folder";
import { Permission } from "../permission/Permission";
import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  createdAt: Date;
  documents?: Array<Document>;
  email: string | null;
  firstName: string | null;
  folders?: Array<Folder>;
  id: string;
  lastName: string | null;
  permissions?: Array<Permission>;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
