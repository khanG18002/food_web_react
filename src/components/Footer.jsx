import React from "react";

function Footer() {
    return (
        <>
            <div className="flex flex-col-reverse sm:flex-row justify-between bg-black text-white px-16 py-5 font-light"> {/* parent div */}


                <div className="sm:py-6">
                    <h1 className="text-2xl py-3 font-righteous underline text-custom-pink "> WEB LOGO</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. <br />
                        Duis lorem purus ipsum sed id tortor <br />
                        vulputate iaculis. Aliquam bibendum dictu <br />
                        felis aenean nisl duis. Dictumst sed integ <br />
                        vitae velit lectus nunc. Tristique tincidun <br />
                        in tellus sagittis ab.
                    </p>
                </div>



                <div className="sm:py-6">
                    <h1 className="text-2xl py-3 font-righteous underline text-custom-pink"> QUICK LINKS </h1>
                    <ol>
                        <li>Home</li>
                        <li>Recipe</li>
                        <li>Share Recipe</li>
                        <li>Contact Us</li>
                    </ol>
                </div>



                <div className="sm:py-6">
                    <h1 className="text-2xl py-3 font-righteous underline text-custom-pink"> CONTECT US ON </h1>

                    <div className="flex  justify-center gap-9">
                        <div>
                            <img src="./public/images/facebook.png" alt="" />
                        </div>
                        <div>
                            <img src="/public/images/twitter.png" className="bg-white" alt="" />
                        </div>
                        <div>
                            <img src="/images/opera.png" className="w-8 h-8" alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}


export default Footer 