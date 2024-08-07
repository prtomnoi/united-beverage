import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import NavMenu from "./NavMenu";

const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image alt="Menu" src="/menu.svg" width={40} height={40} />
      </SheetTrigger>
      <SheetContent className="w-full max-w-[500px]">
        <div className="flex flex-col gap-6 mt-8">
          <NavMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
