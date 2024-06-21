import { PermissionCreateNestedManyWithoutDocumentsInput } from "./PermissionCreateNestedManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  content?: string | null;
  permissions?: PermissionCreateNestedManyWithoutDocumentsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
