'use client';

import { useSession } from "next-auth/react";



const Developer = () => {
    const { data: session, status } = useSession();

    console.log({ session, status });

    return (
      <main>
        Developer Page
      </main>
    )
  }
  
  export default Developer;
  