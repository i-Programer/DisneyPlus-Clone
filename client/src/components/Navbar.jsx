import React, { useContext } from "react";
import {
  ArrowForwardIosOutlined,
  ArrowRightSharp,
  Close,
  Menu,
  SearchOutlined,
} from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { login } from "../context/authContext/apiCalls";
import axios from "axios";
import { AuthContext } from "../context/authContext/AuthContext";
import { logout } from "../context/authContext/AuthActions";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useNavigate();
  const [kidMode, setKidMode] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const [authType, setAuthType] = useState("");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { t } = useTranslation();

  const handleLanguage = (e) => {
    const value = e.target.value;
    i18next.changeLanguage(value);
  }

  const handleContinue = (at) => {
    setEmail(emailRef.current.value);
    setAuthType(at);
  };

  const handleSubmit = async (authType) => {
    if (authType === "login") {
      login({ email, password }, dispatch);
      setIsLogin(false);
      setEmail(null);
    } else {
      await axios.post("auth/register", { email, username, password });
      history("/");
      setIsLogin(false);
      setEmail(null);
    }
  };

  const handleClose = () => {
    setIsLogin(false);
    setEmail(null);
  }

  return (
    <>
      {isLogin && (
        <>
          <div className="fixed flex flex-col justify-center min-h-screen overflow-hidden w-full z-[999]">
            <div className="w-full p-6 m-auto bg-formColor rounded-md lg:max-w-md pt-25 text-left">
              <Close className="mb-5 cursor-pointer" onClick={() => handleClose()}/>
              {!email ? (
                <>
                  <div className="mb-2">
                    <label className="block text-sm font-semibold text-white text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-white bg-formColor outline-none border-b-2"
                      ref={emailRef}
                    />
                  </div>
                  <div className="mb-2 flex flex-row justify-around">
                    <div>
                      <button
                        className="w-full px-5 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md"
                        onClick={() => handleContinue("login")}
                      >
                        Login
                      </button>
                    </div>
                    <div>
                      <button
                        className="w-full px-5 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md"
                        onClick={() => handleContinue("register")}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {authType === "register" ? (
                    <>
                      <div className="mb-2">
                        <label className="block text-sm font-semibold text-white text-left">
                          Username
                        </label>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 mt-2 text-white bg-formColor outline-none border-b-2"
                          ref={usernameRef}
                          onChange={(e) =>
                            setUsername(usernameRef.current.value)
                          }
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-semibold text-white text-left">
                          Password
                        </label>
                        <input
                          type="password"
                          className="block w-full px-4 py-2 mt-2 text-white bg-formColor outline-none border-b-2"
                          ref={passwordRef}
                          onChange={(e) =>
                            setPassword(passwordRef.current.value)
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-2">
                        <label className="block text-sm font-semibold text-white text-left">
                          Password
                        </label>
                        <input
                          type="password"
                          className="block w-full px-4 py-2 mt-2 text-white bg-formColor outline-none border-b-2"
                          ref={passwordRef}
                          onChange={(e) =>
                            setPassword(passwordRef.current.value)
                          }
                        />
                      </div>
                    </>
                  )}
                  <div className="mt-6">
                    <button
                      className="w-full p-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md"
                      onClick={() => handleSubmit(authType)}
                    >
                      CONTINUE <ArrowForwardIosOutlined />
                    </button>
                  </div>
                </>
              )}
              <span className="text-sm">
                By clicking continue, you agree to our Terms of use and
                acknowledge that you have read our Privacy policy
              </span>
            </div>
          </div>
        </>
      )}
      <div
        className={`fixed h-full w-64 ${
          open ? "translate-x-[0px]" : "translate-x-[-500px]"
        } duration-300  bg-sidebarColor z-[1000] text-left`}
      >
        <Close onClick={() => setOpen(!open)} className="mt-5 ml-5" />
        <div className="mt-5">
          <ul className="flex flex-col list-none">
            {user ? (
              <li className="flex flex-row items-center justify-start py-3">
                <img
                  src="https://www.hotstar.com/assets/313a051cb835cc411946b02a94579c72.svg"
                  alt="user"
                  className="mr-2"
                  width="50rem"
                />
                <span className="flex flex-col ">
                  <span className="text-left">{user.username}</span>
                  <span>
                    Logged in via Email <ArrowRightSharp />
                  </span>
                </span>
              </li>
            ) : (
              <li className="flex flex-row items-center justify-start py-3">
                <img
                  src="https://www.hotstar.com/assets/313a051cb835cc411946b02a94579c72.svg"
                  alt="user"
                  className="mr-2"
                  width="50rem"
                />
                <span className="flex flex-col">
                  <span className="text-left">Login </span>
                  <span>
                    For a better experience <ArrowRightSharp />
                  </span>
                </span>
              </li>
            )}
            <hr className="border-b-[1px]" />
            <li className="flex flex-row items-center justify-center py-3 cursor-pointer">
              <span>Wathclist</span>
            </li>
            <hr className="border-b-[1px]" />
            <li className="flex flex-row items-center justify-center py-3 cursor-pointer relative">
              <span className="flex flex-row items-center gap-x-2">
                <span className="w-12 h-4 bg-kidsText bg-contain bg-center bg-no-repeat"></span>

                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={kidMode}
                  />

                  <div
                    onClick={() => setKidMode(!kidMode)}
                    className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                  ></div>
                </label>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-mainColor mb-3">
        <div className="w-full px-4 mx-auto flex justify-start lg:w-auto lg:static lg:block lg:justify-start items-center">
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
          <div className="text-sm font-bold leading-relaxed py-2 whitespace-nowrap uppercase text-white flex flex-row justify-between items-center w-full">
            <button className="pc-menu text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent hidden lg:block outline-none focus:outline-none">
              <Menu />
              <div className="pc-menuItem absolute hidden bg-slate-800  p-2 rounded-md mt-1 z-[100]">
                <span className="text-sm font-base">Genre</span>
              </div>
            </button>
            <div className="lg:block xss:grid grid-cols-2">
              <Link to="/">
                <img
                  src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                  alt="logo "
                  className="logoImg mr-3 lg:w-[8rem] xss:w-[100px]"
                />
              </Link>
              <Link
                to="/subscribe"
                className="lg:hidden flex justify-center items-center"
              >
                <button className="p-1 rounded-md bg-sky-600 font-xs text-xs">
                  {t('Navbar.subscribe')}
                </button>
              </Link>
            </div>
            <div className="lg:hidden block">
              <button>
                <SearchOutlined />
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col justify-center items-center lg:flex-row list-none w-full">
            <li>
              <Link
                to="/"
                className="px-3 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75"
              >
                <span className="text-gray-300 font-medium">{t("Navbar.series")}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="px-3 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75"
              >
                <span className="text-gray-300 font-medium">{t("Navbar.movie")}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="px-3 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75"
              >
                <span className="text-gray-300 font-medium">Disney+</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="px-3 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75"
              >
                <span className="text-gray-300 font-medium">{t("local")}</span>
              </Link>
            </li>
            <li className="bg-kidsText bg-center bg-no-repeat bg-contain w-12 mr-auto">
              <Link
                to="/"
                className="px-3 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75"
              >
                <span className="text-gray-300 font-medium"></span>
              </Link>
            </li>
            <li>
              <div className="px-3 py-2 flex items-center text-lg font-semibold leading-snug text-white relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-mainColor border-b-[1px] p-2 outline-none mr-3"
                />
              </div>
            </li>
            <li>
              <Link
                to="/subscribe"
                className="px-3 py-2 flex items-center text-lg font-semibold leading-snug text-white"
              >
                <button className="p-1 rounded-md bg-sky-600 font-xs text-xs">
                {t("subscribe")}
                </button>
              </Link>
            </li>
            <li>
              <div className="px-3 py-2 flex items-center text-md font-semibold leading-snug text-white">
                <span>
                  <select className="bg-mainColor outline-none" onChange={handleLanguage}>
                    <option value="en" className="w-10 h-10">
                      English
                    </option>
                    <option value="id" className="w-10 h-10">
                      Indonesia
                    </option>
                  </select>
                </span>
              </div>
            </li>

            {user ? (
              <>
                <li className="relative w-28">
                  <button className="userDropdown p-1 rounded-md font-base">
                    {user.username}
                    <div className="userItem absolute p-2 rounded-md hidden z-[100] bg-sliderColor text-white">
                      <ul>
                        <li>
                          <Link to="/watchlist">Wathlist</Link>
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => dispatch(logout())}
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <div className="px-3 py-2 flex items-center text-md font-semibold leading-snug text-white">
                    <span
                      className="text-md font-semibold leading-snug text-white hover:opacity-75 cursor-pointer"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      Login
                    </span>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
