import { Button } from "antd";
import { useRouter } from "next/navigation";
import InstructionButton from "./instruction-button";

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    router.push("/login");
  };

  return (
    <nav className="flex justify-end bg-gray-200 p-4">
      <div>
        <span className="mr-4 text-black">Username: {username}</span>
        <InstructionButton />
        <Button className="ml-4" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
