import Image from "next/image";
import GithubIcon from "@/components/svg/github.svg";
import Logo from "@/components/svg/logo.svg";
import Link from "next/link";

const NavbarUI =()=>{
    return(
        <nav className="w-full backdrop-filter backdrop-blur-3xl fixed xl:px-60 lg:px-48 max-md:px-5 top-0 justify-between flex py-5 bg-transparent">
        <Link href="/" className="flex items-center btn bg-transparent border-0 text-2xl">
          <Image src={Logo} alt="logo" width={25} />
          <p className="text-white">westock</p>
        </Link>
        <div className="bg-transparent border-0  btn btn-square">
          <button>
            <Image src={GithubIcon} alt="Icon" width={40} />
          </button>
        </div>
      </nav>
    )
}
export default NavbarUI