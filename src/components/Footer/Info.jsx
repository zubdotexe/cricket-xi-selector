import logoFooter from "../../assets/logo-footer.png";
import subBtnBg from "../../assets/subBtnBg.png";

export default function Info() {
    return (
        <div className="max-w-[1320px] mx-auto space-y-16 px-4">
            <div className="flex justify-center">
                <img src={logoFooter} alt="Logo" />
            </div>
            <div className="text-gray-400 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                <div className="flex-1 space-y-4">
                    <h3 className="font-semibold text-white">About Us</h3>
                    <p className="w-3/5">
                        We are a passionate team dedicated to providing the best
                        services to our customers.
                    </p>
                </div>
                <div className="flex-1 space-y-4">
                    <h3 className="font-semibold text-white">Quick Links</h3>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex-1 space-y-4">
                    <h3 className="font-semibold text-white">Subscribe</h3>
                    <div className="space-y-5">
                        <p className="w-2/3">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="rounded-xl overflow-hidden flex">
                            <input
                                className="flex-1 min-w-0 bg-white py-3 pl-4 text-gray-600"
                                placeholder="Enter your email"
                                type="email"
                            />
                            {/* <button className="relative w-1/3 flex">
                                        <div className="absolute bg-green-200 w-full">
                                            hey
                                        </div>
                                        <span className="bg-red-400 z-10">2</span>
                                    </button> */}
                            <button className="flex-shrink-0 bg-[#E7FE29] px-7 py-3 text-black font-semibold cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
