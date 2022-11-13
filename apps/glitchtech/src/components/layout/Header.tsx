import { useTheme } from "../providers/ThemeProvider/ThemeProvider";

const Header = () => {
  const { ThemeToggleButton } = useTheme();
  return (
    <div className="flex w-full justify-between bg-black py-2 px-4 text-white">
      <h4>GlitchTech</h4>
      <ThemeToggleButton />
    </div>
  );
};

export default Header;
