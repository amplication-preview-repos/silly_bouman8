import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderUpdateInput = {
  name?: string | null;
  parentFolder?: string | null;
  user?: UserWhereUniqueInput | null;
};
