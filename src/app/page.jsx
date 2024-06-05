import DigInForm from "@/Components/DigInForm";
import JwtLogin from "@/Components/JwtLogin";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen bg-black text-gray-300" >
      <h2 className="font-thin text-3xl" >Encryption and Decription..</h2>
      {/* <DigInForm /> */}
      <JwtLogin />
    </main>
  );
}
