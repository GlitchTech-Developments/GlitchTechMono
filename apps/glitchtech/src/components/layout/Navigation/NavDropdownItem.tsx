import Router, { useRouter } from "next/router";

interface Iprops {
  route: string;
  label: string;
}

const NavDropdownItem = (props: Iprops) => {
  const localRouter = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const RoutePush = (url: string) => {
    Router.push(url);
  };

  return (
    <>
      {localRouter.pathname !== props.route ? (
        <li className="mt-2 rounded-xl border-[1px] border-stone-900 hover:bg-glitchtech hover:font-bold hover:text-black">
          <button
            className="bg-black"
            onClick={(e) => {
              e.preventDefault();
              RoutePush(props.route);
            }}
          >
            {props.label}
          </button>
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavDropdownItem;
