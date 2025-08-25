// pages/admin/index.js (React component)
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.replace("/login"); // Redirect if no token
    }
  }, [router]);

  return <div>Welcome to Admin Dashboard</div>;
}
