import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");

  if (token?.value) {
    redirect("/home");
  } else {
    redirect("/welcome");
  }
}
