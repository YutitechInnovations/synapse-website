import ClientOnly from "../../components/ClientOnly";
import Footer from "../../components/footer/Footer.js";
import Navbar from "../../components/navbar/Navbar.js";
import SignupForm from "../../components/registrationForm/SignupForm.js";

export default function Signup() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex items-center justify-center pt-43 pb-43 px-4">
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}
