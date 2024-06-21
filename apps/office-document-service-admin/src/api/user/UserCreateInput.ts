import { DocumentCreateNestedManyWithoutUsersInput } from "./DocumentCreateNestedManyWithoutUsersInput";
import { FolderCreateNestedManyWithoutUsersInput } from "./FolderCreateNestedManyWithoutUsersInput";
import { PermissionCreateNestedManyWithoutUsersInput } from "./PermissionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  documents?: DocumentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  folders?: FolderCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  permissions?: PermissionCreateNestedManyWithoutUsersInput;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
};
