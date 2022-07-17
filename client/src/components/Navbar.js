import React from "react";
import ToggleDarkMode from "../hooks/toggleDarkMode";

function Navbar() {
  const [colorTheme, setTheme] = ToggleDarkMode();
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1 dark:bg-gray-600 shadow-md">
        {" "}
        <div className="container justify-between flex flex-wrap items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src={"logo.png"} className="mr-3 h-6 sm:h-9" alt="Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 items-center">
            <span
              onClick={() => setTheme(colorTheme)}
              className="flex rounded-lg p-2 cursor-pointer transition duration-700"
            >
              {colorTheme !== "dark" ? (
                <>
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 100 100"
                    y={0}
                    x={0}
                    xmlns="http://www.w3.org/2000/svg"
                    id="圖層_1"
                    version="1.1"
                    width="35px"
                    height="35px"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <g
                      className="ldl-scale"
                      style={{
                        transformOrigin: "50% 50% 0px",
                        transform: "rotate(0deg) scale(0.8)",
                      }}
                    >
                      <circle
                        fill="#ffdc6c"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        r="21.4"
                        cy={50}
                        cx={50}
                        style={{
                          fill: "rgb(255, 194, 0)",
                        }}
                      />
                      <path
                        d="M50 10v11.8"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M30 15.4l5.9 10.2"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M15.4 30l10.2 5.9"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M10 50h11.8"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M15.4 70l10.2-5.9"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M30 84.6l5.9-10.2"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M50 90V78.2"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M70 84.6l-5.9-10.2"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M84.6 70l-10.2-5.9"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M90 50H78.2"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M84.6 30l-10.2 5.9"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      <path
                        d="M70 15.4l-5.9 10.2"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeWidth="4.588"
                        stroke="#f8b26a"
                        fill="none"
                        style={{
                          stroke: "rgb(255, 129, 0)",
                        }}
                      />
                      {/* <metadata style={{ animationPlayState: "running" }}>
                        <d:name style={{ animationPlayState: "running" }}>
                          sun
                        </d:name>
                        <d:tags style={{ animationPlayState: "running" }}>
                          sunny,light,star,solar,sky,hot,warm,sun,weather
                        </d:tags>
                        <d:license style={{ animationPlayState: "running" }}>
                          by
                        </d:license>
                        <d:slug style={{ animationPlayState: "running" }}>
                          hrh4cd
                        </d:slug>
                      </metadata> */}
                    </g>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 100 100"
                    y={0}
                    x={0}
                    xmlns="http://www.w3.org/2000/svg"
                    id="圖層_1"
                    version="1.1"
                    width="35px"
                    height="35px"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                  >
                    <g
                      className="ldl-scale"
                      style={{
                        transformOrigin: "50% 50% 0px",
                        transform: "rotate(0deg) scale(0.8)",
                      }}
                    >
                      <path
                        fill="#f8b26a"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M68.2 63.9c-19.9 0-36-15.7-36-35.1 0-7.3 2.3-14.1 6.2-19.8.6-.8-.3-1.9-1.2-1.4-12.1 5.9-20.8 17.8-22 31.9-2.1 24 18.5 44.5 42.5 42.3 14.2-1.3 26.3-10.2 32-22.6.4-.9-.6-1.8-1.4-1.2-5.8 3.7-12.7 5.9-20.1 5.9z"
                        style={{
                          fill: "rgb(248, 178, 106)",
                        }}
                      />
                      <path
                        fill="#b5b5b5"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M69.2 67.3c.5-1.7.8-3.5.8-5.4C70 52 62 44 52.1 44c-6.9 0-12.8 3.9-15.8 9.5-1.1-.4-2.3-.6-3.6-.6-6.6 0-12 5.4-12 12 0 .8.1 1.6.2 2.4-6.1 1-10.7 6.2-10.7 12.5 0 7 5.7 12.7 12.7 12.7H67c7 0 12.7-5.7 12.7-12.7.1-6.3-4.5-11.5-10.5-12.5z"
                        style={{
                          fill: "rgb(181, 181, 181)",
                        }}
                      />
                      {/* <metadata style={{ animationPlayState: "running" }}>
                        <d:name style={{ animationPlayState: "running" }}>
                          moon
                        </d:name>
                        <d:tags style={{ animationPlayState: "running" }}>
                          night,star,cloud,lunar,sky,dark,midnight,moon,weather
                        </d:tags>
                        <d:license style={{ animationPlayState: "running" }}>
                          pro
                        </d:license>
                        <d:slug style={{ animationPlayState: "running" }}>
                          avrglq
                        </d:slug>
                      </metadata> */}
                    </g>
                  </svg>
                </>
              )}
            </span>
            <div className="flex md:order-2 items-center justify-center space-x-3">
              <button
                type="button"
                className="text-white font-semibold shadow-lg bg-aqua-500 hover:bg-aqua-700 focus:ring-4 focus:outline-none focus:ring-aqua-300 rounded-md text-sm px-5 py-2.5 mr-3 md:mr-0 dark:bg-aqua-600 dark:hover:bg-aqua-700 dark:focus:ring-aqua-800"
                onClick={() => console.log("Redirect to login page")}
              >
                Login
              </button>
              {/* <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="" alt="user" />
              </button> */}
              {/* Dropdown menu */}
              {/* <div
                className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    User
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    user@email.com
                  </span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="mobile-menu-4"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-4"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
