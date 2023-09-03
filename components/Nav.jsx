import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3 mt-5">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/zesty-io-logo-horizontal.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex gap-3 md:gap-5">
        <Link href="/" className="black_btn">
          Home
        </Link>
        <Link href="/about" className="black_btn">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
