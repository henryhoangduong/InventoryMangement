export const roles = [
    { id: '1', label: 'Admin', value: 'admin' },
    { id: '3', label: 'Supplier', value: 'supplier' },
    { id: '4', label: 'Customer', value: 'Customer' },
    { id: '6', label: 'Inventory Manager', value: 'inventory manager' },
    { id: '7', label: 'Corporate Manager', value: 'corporate manager' },
];

export type Role = (typeof roles)[0];
