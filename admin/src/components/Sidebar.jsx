import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { currentColor, activeMenu, screenSize, setActiveMenu } = useStateContext();
  const links = [
    {
      title: "Dashboard",
      links: [
        {
          name: "home",
          icon: <AiOutlineDashboard />,
        },
      ],
    },
    {
      title: "Movies",
      links: [
        {
          name: "movies",
          icon: <AiOutlineDashboard />,
        },
        {
          name: "newMovie",
          icon: <AiOutlineDashboard />,
        },
      ],
    },
    {
      title: "Lists",
      links: [
        {
          name: "lists",
          icon: <AiOutlineDashboard />,
        },
        {
          name: "newList",
          icon: <AiOutlineDashboard />,
        },
      ],
    },
    {
      title: "Users",
      links: [
        {
          name: "users",
          icon: <AiOutlineDashboard />,
        },
      ],
    },
  ];

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 hover:bg-light-gray m-2";

  return (
    <>
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            <div className="justify-between items-center">
              <div className="mt-10">
                {links.map((item) => (
                  <div key={item.title}>
                    <p className="text-gray-400 m-3 mt-4 uppercase">
                      {item.title}
                    </p>
                    {item.links.map((link) => (
                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          backgroundColor: isActive ? currentColor : "",
                        })}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                      >
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
