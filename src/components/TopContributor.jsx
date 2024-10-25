import React from "react";

function TopContributor() {

    return (
        <>
            <div className="grid place-items-center "> {/*parent div */}

                <div> {/* Title  */}
                    <h1 className="text-center font-righteous text-3xl my-9">TOP CONTRIBITER </h1>
                </div>


                <div className="grid md:grid-cols-3 gap-20 sm:grid-cols-1">  {/* all 3  colume  parent div*/}



                    {/* 1st  */}



                    <div className=""> {/* 1st  colume parent div*/}

                        <div className="flex "> {/* image */}
                            <img src="./images/image 1.png" className="w-60" alt="" />
                        </div>

                        <div className="bg-custom-Gray text-center my-3 font-semibold shadow-2xl shadow-black rounded-xl"> {/* text */}
                            <h1> Contributor bane </h1>

                            <div className="flex gap-2 justify-center ">
                                <h1 className="text-custom-pink "> 450  </h1>
                                <h1> Recipes </h1>
                            </div>

                        </div>

                    </div>


                    {/* 2nd  */}


                    <div className=""> {/* 2nd  colume parent div*/}

                        <div className="flex "> {/* image */}
                            <img src="./images/image 2.png" className="w-60" alt="" />
                        </div>

                        <div className="bg-custom-Gray text-center my-3 font-semibold shadow-2xl shadow-black rounded-xl"> {/* text */}
                            <h1> Contributor bane </h1>

                            <div className="flex gap-2 justify-center ">
                                <h1 className="text-custom-pink "> 450  </h1>
                                <h1> Recipes </h1>
                            </div>

                        </div>

                    </div>


                    {/* 3rd  */}

                    <div className=""> {/* 3rd  colume parent div*/}

                        <div className="flex "> {/* image */}
                            <img src="./images/image 3.png" className="w-60" alt="" />
                        </div>

                        <div className="bg-custom-Gray text-center my-3 font-semibold shadow-2xl shadow-black rounded-xl"> {/* text */}
                            <h1> Contributor bane </h1>

                            <div className="flex gap-2 justify-center ">
                                <h1 className="text-custom-pink "> 450  </h1>
                                <h1> Recipes </h1>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}

export default TopContributor 