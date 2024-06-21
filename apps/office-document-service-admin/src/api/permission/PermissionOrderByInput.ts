import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  createdAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  permissionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
