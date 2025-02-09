import { apiClient } from "../../api/api";
import { toast } from "sonner";

const getProducts = async () => {
  try {
    const res = await apiClient.get("/api/products");
    return res.data; // Assuming the products are inside the 'data' property of the response
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error("Failed to fetch products"); // Display a toast notification for the error
    return null; // Return null or handle the error response as needed
  }
};

export { getProducts };
