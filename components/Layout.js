import { useSession, useEffect, signIn, signOut } from "next-auth/react"
import Nav from '../components/Nav';

export default function Layout({children}) {
  const { data: session } = useSession()
 if (!session) {
  return (
    <div className=" bg-cover w-full h-full bg-no-repeat  top-0 left-0 bg-center bg-[url('../assets/sunflowers4.jpg')]">
    <div className="grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-1/2 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-accent-2 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-accent-1/80 after:animate-spin-slow after:-z-10">
    <button onClick={() => signIn('google')} className="bg-yellow-800 text-yellow-200 p-2 px-4 rounded-lg">Login with Google</button>
    <button onClick={() => signIn('facebook')} className="bg-yellow-800 text-yellow-200 p-2 px-4 rounded-lg">Login with Facebook</button>
    <div className="text-6x1 font-bold">
    </div>
</div>
</div>
  );
 }
  return (
   <div className="bg-yellow-200 min-h-screen flex">
    <Nav/>
    <div className=" bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
      <div>{children}</div>
        </div>            
    </div>
   
  );
}