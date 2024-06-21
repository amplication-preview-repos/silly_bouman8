import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PermissionWhereInput = {
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
  permissionType?: "Option1";
  user?: UserWhereUniqueInput;
};
