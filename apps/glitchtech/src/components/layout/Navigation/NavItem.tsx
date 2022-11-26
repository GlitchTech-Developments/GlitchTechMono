import Router, { useRouter } from "next/router";

interface Iprops {
  route: string;
  label: string;
}

const NavItem = (props: Iprops) => {
  const localRouter = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const RoutePush = (url: string) => {
    Router.push(url);
  };
  return (
    <>
      {localRouter.pathname !== props.route ? (
        <li className="mr-2">
          <button
            className="btn rounded-md bg-black"
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

export default NavItem;
