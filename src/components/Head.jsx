import React from "react";

function Head() {
    return (
        <>
            <div className="w-full flex flex-col  gap-8 py-7 md:flex-row sm:justify-center"> {/* Parent div of Heading */}

                <div className="md:w-[50%] w-full flex justify-center items-center"> {/* image  */}
                    <img src="./public/images/Heading pic.png" alt="Picture" />
                </div>


                <div className="md:w-[50%] w-full grid place-items-center "> {/* Paragrape Parent div  */}
                    <div>
                        <div className="flex justify-center gap-4 font-bold text-3xl font-righteous">

                            <div className="text-neutral-900 "> <h1> SHARE YOUR </h1> </div> {/* 1st Title  */}

                            <div className=" text-custom-pink"> <h1>RECIPE</h1> </div> {/* 2nd Title  */}

                        </div>

                        <div className="font-thin font my-2  "> <p> Lorem ipsum dolor sit amet consectetur. Penatibus molestie Amet <br />
                            adipiscing eu blandit et netus. Mi ante tristique volutpat <br />
                            vitae massa sit ac. </p> </div> {/* Paragrape  */}

                        <div className="flex justify-center  "> <button className="py-2 bg-custom-pink w-40 h-10 rounded-md    hover:text-white hover:bg-custom-coral ">
                            Share Recipe
                        </button>
                        </div> {/* Button */}

                    </div>
                </div>
            </div>
        </>
    )

}

export default Head 