import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts } from '../../services/products';
import {
    Table,
    TableBody,
    TableHeader,
    TableRow,
    TableHead,
    TableCell,
} from '../../components/ui/table';
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { Badge } from '../../components/ui/badge';
import { EllipsisVertical } from 'lucide-react';
import { Card } from '../../components/ui/card';
const Product = () => {
    // Create state for storing users
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null | unknown>(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
                setLoading(false);
            } catch (err) {
                setError(err);
                console.log(err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading users: {error}</div>;
    return (
        <div className="p-4 flex flex-col gap-3">
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">ID</TableHead>
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
                        {products.map((item: any, index) => {
                            return (
                                <TableRow>
                                    {' '}
                                    <TableCell
                                        className="text-center"
                                        key={index}
                                    >
                                        {item?.userId}
                                    </TableCell>
                                    <TableCell
                                        className="text-center"
                                        key={index}
                                    >
                                        {item?.firstName}
                                    </TableCell>
                                    <TableCell key={index}>
                                        {item?.lastName}
                                    </TableCell>
                                    <TableCell key={index}>
                                        {item?.email}
                                    </TableCell>
                                    <TableCell key={index}>
                                        {item?.userName}
                                    </TableCell>
                                    <TableCell key={index}>
                                        <Badge color="green">
                                            {item?.userStatus}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="bg-transparent">
                                                <EllipsisVertical size={16} />
                                            </DropdownMenuTrigger>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default Product;
