import { apiClient } from '../../api/api';
import { toast } from 'sonner';

const getStores = async () => {
    try {
        const res = await apiClient.get('/api/stores');
        console.log(res);
        return res.data; // Assuming the roles are in the 'data' property of the response
    } catch (error) {
        console.error('Error fetching roles:', error);
        toast.error('Failed to fetch roles'); // Display a toast notification for the error
        return null;
    }
};

export type AddStoreType = {
    storeName: string;
    storeSize: number;
    building: string;
    floor: number;
    room: number;
    companyId: number;
};

const addStore = async ({ ...args }: AddStoreType) => {
    try {
        toast.success(`Category ${args.storeName} created successfully 🎉 `, {
            id: 'create-store',
        });
        const res = await apiClient.post(`/api/stores/${args.companyId}`, args);
        if (res) {
            return true;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};

export { getStores, addStore };
