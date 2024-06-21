import { SortOrder } from "../../util/SortOrder";

export type FolderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentFolder?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
