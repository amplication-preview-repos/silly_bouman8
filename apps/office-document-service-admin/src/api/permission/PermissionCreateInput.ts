import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PermissionCreateInput = {
  document?: DocumentWhereUniqueInput | null;
  permissionType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
