import React from "react";

const Main = ()=>{
    return (
        <>
            <div className="container flex items-center flex-col min-w-56 max-w-80 drop-shadow-2xl rounded-lg p-8 bg-white">
                
                <div className=" flex flex-col items-center gap-4">
                    <div className="profile-img rounded-full h-20 w-20">
                        <img src="../../public/testimonial/headshot.jpeg" alt="profile image"/>
                    </div>
                    <div className="text text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cum veniam eum veritatis magnam aliquam accusamus facilis incidunt illum vitae!
                    </div>

                    <div className="profile flex flex-col items-center">
                        <h4 className="name text-lg font-bold">Rishav Raj</h4>
                        <h5 className="name text-sm font-semibold uppercase text-orange-500">Lorem, ipsum dolor.</h5>
                    </div>
                    <div>
                        <div className="bottom-bar rounded-lg w-6 h-2 bg-orange-400"></div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Main