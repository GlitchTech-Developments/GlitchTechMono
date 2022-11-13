import { useTheme } from "../providers/ThemeProvider/ThemeProvider";

const Header = () => {
  const { ThemeToggleButton } = useTheme();
  return (
    <div className="flex w-full justify-between bg-white py-2 px-4 text-black dark:bg-black dark:text-white">
      <h4 className="my-auto font-bold">GlitchTech</h4>
      <ThemeToggleButton />
    </div>
  );
};

export default Header;
