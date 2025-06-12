import ClientOnly from "../../components/ClientOnly";
import Navbar from "../../components/navbar/Navbar.js";
import ForgotPasswordForm from "../../components/forgotPassword/ForgotPasswordForm.js";

export default function ForgotPasswordPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex items-center justify-center pt-43 pb-43 px-4">
        <ForgotPasswordForm />
      </main>
    </div>
  );
} 