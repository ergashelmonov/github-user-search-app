import { useState } from "react";
import Moon from "../../assets/icons/moon.svg";
import Sun from "../../assets/icons/sun.svg";
const Header = () => {
  const [dark, setDark] = useState(false);
  return (
    <header className="w-full flex justify-between items-center">
      <h1 className="font-bold text-[26px] text-[#222731] dark:text-[#fff]">
        devfinder
      </h1>
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          setDark(document.documentElement.className == "dark");
        }}
        className="text-[13px] tracking-[0.19em] flex gap-4 font-bold dark-mode-btn outline-none  text-[#697c9a] dark:text-[#fff] "
      >
        {dark ? "LIGHT" : "DARK"}
        {dark ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};
export default Header;
