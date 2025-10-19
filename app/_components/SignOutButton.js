import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";
import { useMediaQuery } from "react-responsive";

function SignOutButton() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600 " />
        {/* <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600 " /> */}
        {/* {!isMobile && <span>Sign out</span>} */}
      </button>
    </form>
  );
}

export default SignOutButton;
