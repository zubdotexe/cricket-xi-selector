import logo from "../../assets/logo.png";
import dollarImg from "../../assets/dollarImg.png";

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 max-w-[1320px] mx-auto mt-16">
                <div className="flex-1">
                    <a className="text-xl cursor-pointer">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex">
                    <div className="dropdown md:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-24 p-2 shadow"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Fixture</a>
                            </li>
                            <li>
                                <a>Teams</a>
                            </li>
                            <li>
                                <a>Schedules</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <div className="hidden md:flex gap-4 items-center font-semibold text-gray-500">
                            <a className="cursor-pointer hover:text-black">
                                Home
                            </a>
                            <a className="cursor-pointer hover:text-black">
                                Fixture
                            </a>
                            <a className="cursor-pointer hover:text-black">
                                Teams
                            </a>
                            <a className="cursor-pointer hover:text-black">
                                Schedules
                            </a>
                        </div>
                        <button className="flex gap-1 font-bold btn">
                            <span>0</span> Coin{" "}
                            <img src={dollarImg} alt="Dollar icon" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
