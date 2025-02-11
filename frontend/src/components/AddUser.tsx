import React from 'react';
import { Plus, X } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
} from './ui/alert-dialog';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    Form,
} from './ui/form';
import { Input } from './ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
    AlertDialogAction,
    AlertDialogCancel,
} from '@radix-ui/react-alert-dialog';
import { cn } from '../lib/utils';
import { useTheme } from './thems-provider';
import RoleComoBox from './RoleComoBox';
import { addUser } from '../services/users';
import { AddUserType } from '../services/users';
import { Role } from '../lib/roles';
import { Button } from './ui/button';

const AddUser = () => {
    const theme = useTheme();
    const [selectedOption, setSelectedOption] = React.useState<Role | null>(
        null,
    );

    // Initialize the form with react-hook-form
    const form = useForm<AddUserType>();

    // Handle form submission
    const onSubmit: SubmitHandler<AddUserType> = async (data) => {
        const res = await addUser({ ...data, role: selectedOption });
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-muted">
                <div className="flex flex-row items-center">
                    <Plus size={18} />
                    Add user
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add new user</AlertDialogTitle>
                </AlertDialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="grid grid-cols-2 gap-4"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the user's email address.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter first name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the user's first name.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter password"
                                            type="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter password.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter last name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter user's last name.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <RoleComoBox
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        />
                                        <AlertDialogFooter>
                    <AlertDialogCancel
                        className={cn(
                            theme.theme === 'light' ? 'bg-white' : 'bg-black',
                        )}
                    >
                        Close
                    </AlertDialogCancel>{' '}
                    <AlertDialogAction
                        type='submit'
                        className={cn(
                            theme.theme === 'light' ? 'bg-white' : 'bg-black',
                        )}
                    >
                        Save
                    </AlertDialogAction>
                </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AddUser;
