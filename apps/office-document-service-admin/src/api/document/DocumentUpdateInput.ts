import { PermissionUpdateManyWithoutDocumentsInput } from "./PermissionUpdateManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  content?: string | null;
  permissions?: PermissionUpdateManyWithoutDocumentsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
