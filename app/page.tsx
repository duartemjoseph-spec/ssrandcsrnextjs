import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import Usernameform from "./components/Usernameform";

export default function Home() {
  redirect("./set-name");
 
}
