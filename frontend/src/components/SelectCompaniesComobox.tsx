import React, { Dispatch, useEffect, useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { Button } from './ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from './ui/command';
import { getCompanies } from '../services/companies';

interface Props {
    onChange: (value: number) => void;
}

const SelectCompaniesComobox = ({ onChange }: Props) => {
    const [open, setOpen] = React.useState(false);
    const [companies, setCompanies] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [value, setValue] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await getCompanies();
            setCompanies(res);
            setLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (value.length != 0) {
            console.log(value);
            const company = companies.find((c) => c.companyName === value);
            onChange(company.companyId);
        }
    }, [value]);

    if (loading) return <>...loading</>;
    return (
        <Popover modal={true} onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                    {value ? <>{value}</> : <>+ Select company</>}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandInput />
                    <CommandList>
                        <CommandEmpty>No results found</CommandEmpty>
                        <CommandGroup>
                            {companies.map((item, index) => (
                                <CommandItem
                                    key={index}
                                    onSelect={(value) => {
                                        setValue(value);
                                        setOpen(false);
                                    }}
                                >
                                    {item.companyName}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default SelectCompaniesComobox;
