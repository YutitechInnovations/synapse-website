// import Footer from "../../components/footer/Footer.js";
// import LoginForm from "../../components/loginform/LoginForm.js";
// import Navbar from "../../components/navbar/Navbar.js";

// export default function LoginPage() {
//   return (
//     <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center w-full h-full  pt-9">
//       <Navbar />
//       <LoginForm />
//       <Footer />
//     </div>
//   );
// }

import ClientOnly from "../../components/ClientOnly";
import LoginForm from "../../components/loginform/LoginForm.js";
import Navbar from "../../components/navbar/Navbar.js";

export default function LoginPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <main className="flex items-center justify-center pt-43 pb-43 px-4">
        <LoginForm />
      </main>
    </div>
  );
}
