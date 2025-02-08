import React, { FormEvent } from "react";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { FormMessage } from "../../components/ui/form";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/AuthContext";
const SignIn = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Both email and password are required.");
    } else {
      setError("");
      console.log("Form submitted", { email, password });
    }

    await login(email, password);
  };
  return (
    <div className="w-[20vw] h-[50vh] p-4 border rounded-lg shadow-md left-[50%] transform -translate-x-1/2 relative translate-y-1/2">
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col items-center gap-8"
      >
        <Logo />
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="email" className="mr-auto ml-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          {error && !email && <FormMessage>{error}</FormMessage>}
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="password" className="mr-auto ml-2">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          {error && !password && <FormMessage>{error}</FormMessage>}
        </div>

        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
