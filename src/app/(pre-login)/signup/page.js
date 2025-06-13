import ClientOnly from "../../../components/ClientOnly";
import Navbar from "../../../components/navbar/Navbar.js";
import SignupForm from "../../../components/registrationForm/SignupForm.js";

export default function Signup() {
  return (
    <div className="grid w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex items-center justify-center pt-40 pb-[100px] px-4">
        <SignupForm />
      </main>
    </div>
  );
}
