"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={handleLogin}
        className="rounded-md bg-black px-5 py-2 text-white"
      >
        Sign In
      </button>
    </div>
  );
};

export default page;
