import React, { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
} from "./ui/alert-dialog";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  Form,
} from "./ui/form";
import { Input } from "./ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";
import { cn } from "../lib/utils";
import { useTheme } from "./thems-provider";
import { getRoles } from "../services/role";
interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
  role: string;
}

const AddUser = () => {
  const theme = useTheme();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await getRoles();
        if (res) {
          setRoles(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoles();
  }, []);

  // Initialize the form with react-hook-form
  const form = useForm<FormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // You can add the user here or handle the submission accordingly
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-muted">
        <div className="flex flex-row items-center">
          <Plus size={18} />
          Add user
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add new user</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...form}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter the user's email address.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter the user's first name.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Please enter password.</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter last name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Please enter user's last name.
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
        </Form>
        <AlertDialogFooter>
          <AlertDialogCancel
            className={cn(theme.theme === "light" ? "bg-white" : "bg-black")}
          >
            Close
          </AlertDialogCancel>{" "}
          <AlertDialogAction
            className={cn(theme.theme === "light" ? "bg-white" : "bg-black")}
          >
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddUser;
