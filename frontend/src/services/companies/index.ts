import { apiClient } from '../../api/api';
import { toast } from 'sonner';

const getCompanies = async () => {
    try {
        const res = await apiClient.get('/api/company');
        return res.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products');
        return null;
    }
};

export { getCompanies };
