import Image from "next/image";
import Link from "next/link"; 

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-6 sm:py-8 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              src="/images/rocket.svg"
              alt="Logo"
              width={22}
              height={36}
            />
            <h1 className="text-2xl sm:text-3xl font-bold mx-2">
              <span className="text-[#4EA8DE]">Todo </span>
              <span className="text-[#5E60CE]">App</span>
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
