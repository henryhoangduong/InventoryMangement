import React from 'react';
import { Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    };
    return (
        <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={handleClick}
        >
            <Target />
            <p className="font-bold text-[20px]">Inventory Managent</p>
        </div>
    );
};

export default Logo;
