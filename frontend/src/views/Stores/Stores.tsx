import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from '../../components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../components/ui/table';
import { useEffect, useState } from 'react';
import { getStores } from '../../services/stores';
import AddStores from '../../components/AddStores';
const Stores = () => {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getStores();
            if (res) {
                setStores(res);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    if (loading) return <>...loading</>;
    return (
        <div className="p-4 flex flex-col gap-3">
            <div className="w-full flex flex-row ">
                <div className="ml-auto">
                    <AddStores />
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Stores Table</CardTitle>
                    <CardDescription>
                        All the stores from the system
                    </CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Id</TableHead>
                            <TableHead className="text-center">
                                Company Name
                            </TableHead>
                            <TableHead className="text-center">Size</TableHead>
                            <TableHead className="text-center">
                                Building
                            </TableHead>
                            <TableHead className="text-center">Floor</TableHead>{' '}
                            <TableHead className="text-center">Room</TableHead>
                            <TableHead className="text-center">
                                Address
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {stores.map((item: any, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.storeId} </TableCell>
                                    <TableCell>{item.storeName} </TableCell>
                                    <TableCell>{item.storeSize}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default Stores;
