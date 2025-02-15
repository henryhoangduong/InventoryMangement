import React, { useCallback, useEffect, useState } from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from './ui/dialog';
import { Plus } from 'lucide-react';
import { useTheme } from './thems-provider';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addStore, AddStoreType } from '../services/stores';
import {
    FormField,
    FormItem,
    FormDescription,
    FormControl,
    FormLabel,
    Form,
} from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cn } from '../lib/utils';
import SelectCompaniesComobox from './SelectCompaniesComobox';
const AddStores = () => {
    const [open, setOpen] = useState(false)
    const theme = useTheme();

    const form = useForm<AddStoreType>();

    const onSubmit: SubmitHandler<AddStoreType> = async (data) => {
        const res = await addStore(data);
        if (res) {
            setOpen(false);
        }
    };

    const handleCategoryChange = useCallback(
        (value: number) => {
            console.log(value);
            form.setValue('companyId', value);
        },
        [form],
    );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="flex flex-row bg-muted">
                <Plus />
                Add store
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new store</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="grid grid-cols-2 gap-4"
                    >
                        <FormField
                            control={form.control}
                            name="storeName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Store Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter store name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the store name.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="storeSize"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Store Size</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter store size"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the store size in square
                                        meters.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="building"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Building</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter building name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the building name or
                                        address.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="floor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Floor</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter floor number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the floor number in the
                                        building.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="room"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Room</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter room number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the room number on the
                                        floor.
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="companyId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl>
                                        <SelectCompaniesComobox
                                            onChange={handleCategoryChange}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please select company
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="hover:bg-none">
                            <Button
                                type="submit"
                                className={cn(
                                    theme.theme === 'light'
                                        ? 'bg-white text-black hover:bg-none'
                                        : 'bg-black text-white hover:bg-none',
                                    '',
                                )}
                            >
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddStores;
