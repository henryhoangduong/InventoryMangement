import { apiClient } from '../../api/api';

const getAllSuppliers = async () => {
    try {
        const res = await apiClient.get('/api/suppliers');
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export { getAllSuppliers };
