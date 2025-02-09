import { apiClient } from "../../api/api";
import { toast } from "sonner";

const getAllUsers = async () => {
  toast.loading("Loading users..."); // Show loading toast

  try {
    const res = await apiClient.get("/api/users");
    toast.success("Users loaded successfully!"); // Success toast
    return res.data;
  } catch (error) {
    toast.error("Error fetching users!"); // Error toast
    console.log(error);
  }
};

const updateUser = async () => {
  toast.loading("Updating users..."); // Show loading toast

  try {
    toast.success("Update Uuser successfully!"); // Success toast
  } catch (error) {
    toast.error("Error updating users!"); // Error toast
    console.log(error);
  }
};

export { getAllUsers, updateUser };
