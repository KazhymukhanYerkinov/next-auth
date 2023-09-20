import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next"

const Home = async () => {

  const session = await getServerSession(authOptions);


  return (
    <main>
      Hello {session?.user?.name} {session?.user?.randomKey}
    </main>
  )
}

export default Home;
