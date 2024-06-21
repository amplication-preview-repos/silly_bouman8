import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FolderCreateInput = {
  name?: string | null;
  parentFolder?: string | null;
  user?: UserWhereUniqueInput | null;
};
