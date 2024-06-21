import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { FolderListRelationFilter } from "../folder/FolderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionListRelationFilter } from "../permission/PermissionListRelationFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  folders?: FolderListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  permissions?: PermissionListRelationFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
