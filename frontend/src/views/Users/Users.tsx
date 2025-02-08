import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { getAllUsers } from "../../services/users";
import { useState } from "react";
import { Avatar, Badge } from "@radix-ui/themes";
import { EllipsisVertical } from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
} from "../../components/ui/dropdown-menu";
const Users = () => {
  // Create state for storing users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null | unknown>(null);

  useEffect(() => {
    // Fetch the users when the component mounts
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        console.log(usersData);
        setUsers(usersData);
        setLoading(false); // Turn off loading
      } catch (err) {
        setError(err);
        console.log(err);
        setLoading(false); // Turn off loading on error
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading users: {error}</div>;

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Users Table</CardTitle>
          <CardDescription>All the users from the system</CardDescription>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">ID</TableHead>
              <TableHead className="text-center">Avatar</TableHead>

              <TableHead className="text-center">First Name</TableHead>
              <TableHead className="hidden sm:table-cell text-center">
                Last Name
              </TableHead>
              <TableHead className="hidden md:table-cell text-center">
                Email
              </TableHead>
              <TableHead className="hidden sm:table-cell text-center">
                User Name
              </TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item: any, index) => {
              return (
                <TableRow>
                  {" "}
                  <TableCell className="text-center" key={index}>
                    {item?.userId}
                  </TableCell>
                  <TableCell>
                    <Avatar fallback="A" />
                  </TableCell>
                  <TableCell className="text-center" key={index}>
                    {item?.firstName}
                  </TableCell>
                  <TableCell key={index}>{item?.lastName}</TableCell>
                  <TableCell key={index}>{item?.email}</TableCell>
                  <TableCell key={index}>{item?.userName}</TableCell>
                  <TableCell key={index}>
                    <Badge color="green">{item?.userStatus}</Badge>
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

export default Users;
