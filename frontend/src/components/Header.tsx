import { Avatar } from '@radix-ui/themes';
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { DropdownMenu } from './ui/dropdown-menu';

import { ModeToggle } from './mode-toggle';
import { useAuth } from '../context/AuthContext';
const Header = () => {
    const { logout } = useAuth();
    return (
        <div className=" flex flex-row border-b  p-3">
            <div className="ml-auto flex flex-row items-center gap-2">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger className="p-0 bg-transparent">
                        <Avatar
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                            fallback="A"
                            className="m-0"
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={logout}>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
