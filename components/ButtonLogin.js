import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className={`btn btn-primary ${extraStyle}`}>
        Welcome back {name}
      </Link>
    );
  }
  return <button className="btn btn-primary">Login</button>; // Added DaisyUI classes
};

export default ButtonLogin;
