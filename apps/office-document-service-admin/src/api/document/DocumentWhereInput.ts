import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  permissions?: PermissionListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
