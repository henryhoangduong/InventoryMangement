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
import { getBrands } from '../../services/brands';
const Brand = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getBrands();
            if (res) {
                setBrands(res);
            }
            setLoading(false);
        };
        fetchData();
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
                                Brand Name
                            </TableHead>
                            <TableHead className="text-center">
                                Description
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {brands.map((item: any, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.brandId} </TableCell>
                                    <TableCell>{item.brandName} </TableCell>
                                    <TableCell>
                                        {item.brandDescription != null
                                            ? item.brandDescription
                                            : 'N/A'}
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

export default Brand;
