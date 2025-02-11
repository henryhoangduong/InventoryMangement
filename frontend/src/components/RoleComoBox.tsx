import {
    Command,
    CommandInput,
    CommandList,
    CommandGroup,
    CommandEmpty,
    CommandItem,
} from './ui/command';
import React, { Dispatch } from 'react';
import { Role, roles } from '../lib/roles';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';
import { useMediaQuery } from '../hooks/use-media-query';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface Props {
    selectedOption: Role | null;
    setSelectedOption: Dispatch<Role | null>;
}

const RoleComoBox = ({ selectedOption, setSelectedOption }: Props) => {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    // const [selectedOption, ] = React.useState<Role | null>(
    //     null,
    // );

    if (isDesktop) {
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                        {selectedOption ? (
                            <>{selectedOption.label}</>
                        ) : (
                            <>+ Select role</>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0" align="start">
                    <OptionList
                        setOpen={setOpen}
                        setSelectedOption={setSelectedOption}
                    />
                </PopoverContent>
            </Popover>
        );
    }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="w-[150px] justify-start">
                    {selectedOption ? (
                        <>{selectedOption.label}</>
                    ) : (
                        <>Select Role</>
                    )}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 border-t">
                    <OptionList
                        setOpen={setOpen}
                        setSelectedOption={setSelectedOption}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default RoleComoBox;

function OptionList({
    setOpen,
    setSelectedOption,
}: {
    setOpen: (open: boolean) => void;
    setSelectedOption: (option: Role | null) => void;
}) {
    return (
        <Command>
            <CommandInput placeholder="Filter Role..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    {roles.map((role) => (
                        <CommandItem
                            key={role.value}
                            value={role.value}
                            onSelect={(value) => {
                                setSelectedOption(
                                    roles.find(
                                        (priority) => priority.value === value,
                                    ) || null,
                                );
                                setOpen(false);
                            }}
                        >
                            {role.label}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
