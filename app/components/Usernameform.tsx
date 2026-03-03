"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const Usernameform = () => {
const {push} = useRouter();

  const router = useRouter();
  const [username, setUsername] = React.useState("");

  const handleSubmit = () => {
    console.log(username);
    push("./set-name");
  };

  return (
    <div className="w-350px">
      <div className="pb-10">
        <Label htmlFor="name" className="pb-4">
          UserName
        </Label>
        <Input
          className=""
          id="name"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Usernameform;
