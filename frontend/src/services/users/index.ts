import { apiClient } from '../../api/api';
import { toast } from 'sonner';
import { Role } from '../../lib/roles';

const getAllUsers = async () => {
    toast.loading('Loading users...'); // Show loading toast

    try {
        const res = await apiClient.get('/api/users');
        toast.success('Users loaded successfully!'); // Success toast
        return res.data;
    } catch (error) {
        toast.error('Error fetching users!'); // Error toast
        console.log(error);
    }
};

const updateUser = async () => {
    toast.loading('Updating users...'); // Show loading toast

    try {
        toast.success('Update Uuser successfully!'); // Success toast
    } catch (error) {
        toast.error('Error updating users!'); // Error toast
        console.log(error);
    }
};

export type AddUserType = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role | null;
};

const addUser = async ({ ...args }: AddUserType) => {
    console.log(args);
    try {
        const res = await apiClient.post(`/api/users/${args.role?.id}`, {
                ...args
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
};

export { getAllUsers, updateUser, addUser };
