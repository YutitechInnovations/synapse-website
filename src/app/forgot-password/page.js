import ClientOnly from "../../components/ClientOnly";
import Navbar from "../../components/navbar/Navbar.js";
import ForgotPasswordForm from "../../components/forgotPassword/ForgotPasswordForm.js";

export default function ForgotPasswordPage() {
  return (
    <div className="grid w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex items-center justify-center pt-60 pb-[100px] px-4">
        <ForgotPasswordForm />
      </main>
    </div>
  );
} 