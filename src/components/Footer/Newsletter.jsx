import bgShadow from "../../assets/bg-shadow.png";

export default function Newsletter() {
    return (
        <div className="absolute -top-40 max-w-[1320px] left-5 right-5 mx-auto bg-white/15 rounded-3xl p-4 border border-white">
            <div className=" bg-white rounded-3xl overflow-hidden">
                <div
                    style={{ backgroundImage: `url(${bgShadow})` }}
                    className="bg-cover bg-center px-2 py-20 flex flex-col items-center gap-4"
                >
                    <h2 className="font-bold text-3xl">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="font-inter font-medium text-xl text-gray-400">
                        Get the latest update and news right in your inbox!
                    </p>
                    <div className="flex gap-2 w-full justify-center">
                        <input
                            className="w-1/3 py-3 pl-3 rounded-xl border border-gray-300"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <button className="rounded-xl bg-[#E7FE29] px-7 py-3 text-black font-semibold cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
