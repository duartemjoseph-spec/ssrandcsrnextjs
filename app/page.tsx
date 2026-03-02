import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <h1 className="text-3xl font-bold">Server vs Client Components</h1>
        <div className="w-350px">
          <div className="pb-10">
            <label htmlFor="name" className="pb-4">
              UserName
            </label>
            <input
              className=""
              id="name"
              placeholder="Enter your username"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <Button>Submit</Button>
        </div>
      </main>
    </div>
  );
}
