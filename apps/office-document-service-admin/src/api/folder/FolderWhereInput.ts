import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  parentFolder?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
