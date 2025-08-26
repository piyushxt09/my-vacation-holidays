// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     // Forward login request to Express backend
//     const res = await fetch(`https://my-vacation-backend.onrender.com/api/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//       credentials: "include",
//     });

//     // Get response body
//     const data = await res.json();

//     // Forward cookies + response back to Next.js client
//     const response = NextResponse.json(data, { status: res.status });
//     const setCookie = res.headers.get("set-cookie");
//     if (setCookie) {
//       response.headers.set("set-cookie", setCookie);
//     }

//     return response;
//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }
