import React, { useEffect, useState } from 'react';
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
import { getAllSuppliers } from '../../services/supplier';

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoles = async () => {
            setLoading(true);
            const res = await getAllSuppliers();
            if (res) {
                setSuppliers(res);
            }
            setLoading(false);
        };
        fetchRoles();
    }, []);
    if (loading) return <>...loading</>;
    return (
        <div className="p-4 flex flex-col gap-3">
            <Card>
                <CardHeader>
                    <CardTitle>Suppliers Table</CardTitle>
                    <CardDescription>
                        All the users from the system
                    </CardDescription>
                </CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Id</TableHead>
                            <TableHead className="text-center">
                                Avatar
                            </TableHead>
                            <TableHead className="text-center">
                                First Name
                            </TableHead>
                            <TableHead className="hidden sm:table-cell text-center">
                                Last Name
                            </TableHead>
                            <TableHead className="hidden md:table-cell text-center">
                                Email
                            </TableHead>
                            <TableHead className="hidden sm:table-cell text-center">
                                User Name
                            </TableHead>
                            <TableHead className="text-center">
                                Status
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {suppliers.map((item: any, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.supplierId} </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default Supplier;
