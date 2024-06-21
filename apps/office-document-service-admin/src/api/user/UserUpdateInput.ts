import { DocumentUpdateManyWithoutUsersInput } from "./DocumentUpdateManyWithoutUsersInput";
import { FolderUpdateManyWithoutUsersInput } from "./FolderUpdateManyWithoutUsersInput";
import { PermissionUpdateManyWithoutUsersInput } from "./PermissionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  documents?: DocumentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  folders?: FolderUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  permissions?: PermissionUpdateManyWithoutUsersInput;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
