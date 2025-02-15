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
import { getCompanies } from '../../services/companies';
const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getCompanies();
            if (res) {
                setCompanies(res);
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
                                Company Name
                            </TableHead>
                            <TableHead className="text-center">Email</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {companies.map((item: any, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>{item.companyId} </TableCell>
                                    <TableCell>{item.companyName} </TableCell>
                                    <TableCell>{item.email}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default Companies;
