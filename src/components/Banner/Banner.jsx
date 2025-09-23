import heroImg from "../../assets/banner-main.png";
import heroImgBg from "../../assets/bg-shadow.png";

export default function Banner() {
    return (
        <div className="max-w-[1320px] mx-auto bg-black rounded-3xl overflow-hidden">
            <div
                style={{ backgroundImage: `url(${heroImgBg})` }}
                className="bg-cover bg-center flex flex-col justify-center items-center py-16 px-2 space-y-6"
            >
                <img src={heroImg} alt="Hero Image" />
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-4xl font-bold text-white">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>
                    <p className="text-2xl font-medium text-gray-400 font-inter">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <button
                        className="mt-6 cursor-pointer bg-[#E7FE29] rounded-xl px-5 py-3 font-bold outline-2 outline-gray-200 outline-offset-8 "
                        style={{
                            boxShadow: "inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)",
                        }}
                    >
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
}
