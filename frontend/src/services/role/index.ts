import { apiClient } from "../../api/api";
import { toast } from "sonner";

const getRoles = async () => {
  try {
    const res = await apiClient.get("/api/roles");
    return res.data; // Assuming the roles are in the 'data' property of the response
  } catch (error) {
    console.error("Error fetching roles:", error);
    toast.error("Failed to fetch roles"); // Display a toast notification for the error
    return null;
  }
};

export { getRoles };
