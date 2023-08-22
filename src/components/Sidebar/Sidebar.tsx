import { IconButton } from "@mui/material";
import { useState } from "react";
import "./sidebar.css";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar(props: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Function;
}) {
  const [currentPage, setCurrentPage] = useState("Home");

  const pages = [
    { name: "Home", element: <HomeIcon />, path: "/home" },
    {
      name: "Mudar Senha",
      element: <BuildIcon />,
      path: "/changePassword",
    },
    {
      name: "Encerrar Sessão",
      element: <LogoutIcon />,
      path: "/login",
    },
  ];

  return (
    <aside
      id="sidebarTransition"
      className={`bg-[#143789] z-10  h-full  ${
        props.isSidebarOpen ? "w-72" : "w-32"
      } py-8 px-0 overflow-hidden  flex flex-col text-white items-start justify-center `}
    >
      <IconButton
        id="menuButton"
        onClick={() => {
          props.setIsSidebarOpen(!props.isSidebarOpen);
        }}
        className="hover:cursor-pointer flex  !mx-auto  "
        size="large"
        edge="start"
        sx={{ color: "#fff" }}
        aria-label="logo"
      >
        <SmartToyIcon fontSize="large" />
      </IconButton>
      <nav
        id="navItens"
        className=" w-full flex flex-col items-center justify-center h-full"
      >
        <ul
          id="navItens"
          className="flex transition-all gap-3 mt-4 justify-center items-center flex-col h-full"
        >
          {pages.map((page) => (
            <li
              title={page.name}
              onClick={() => {
                setCurrentPage(page.name);
              }}
              key={page.name}
            >
              <div className="flex transition-all  relative gap-3 mt-4 h-full">
                <NavLink
                  to={page.path}
                  id={page.name == currentPage ? "active" : "item"}
                  className={`  p-3 transition-all rounded-lg !flex flex-col !justify-center !items-center gap-4 ${
                    currentPage == page.name ? "bg-[#526ba3]" : null
                  }`}
                >
                  <span
                    className={`${
                      page.name == currentPage
                        ? "!text-white"
                        : "text-slate-400"
                    } !`}
                  >
                    {page.element}
                  </span>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
