import Image from "next/image";
import React from "react";

function Navbar() {
    return (
        <section className="h-screen w-24  flex items-center justify-center">
            <div className="bg-primary h-[98%] ml-2 w-full rounded-lg flex flex-col justify-between">
                <div className="flex justify-center mt-4">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="rounded-full w-14 bg-gray-300"
                    />
                </div>
                <div className="mb-4 space-y-8">
                    <div className="flex justify-center">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="rounded-full w-14 bg-gray-300"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="rounded-full w-14 bg-gray-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
