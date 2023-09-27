import { Parallax } from 'react-parallax';

import React, { useEffect, useRef } from 'react';


import img from '../../../assets/computer-screens-desk-empty-data-room-computers-background-running-programming-code-data-algorithms-neural-network-servers-cloud-computing-software-it-agency-office_482257-41840.jpg'


const Banner = () => {

    // const typedRef = useRef(null);;

    // useEffect(() => {
    //     const options = {
    //         strings: ['<i>events.</i> ', 'meetups', 'conferences'],
    //         typeSpeed: 50,
    //     };


    //     const typed = new Typed(typedRef.current, options);

    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);

    return (
        <div>
            <div>
                <Parallax
                    blur={{ min: -50, max: 50 }}
                    bgImage={img}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    <div className="hero h-[600px]">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                <h1 className="mb-5 text-4xl text-yellow-600" style={{fontFamily: 'cursive'}}>Welcome to our Problemsolving Website</h1>

                                <h1 className='text-5xl font-bold'>events, meetups & conferences</h1>

                                {/* <span style={{ fontFamily: 'Quicksand' }} className='md:text-xl text-white font-bold text-2xl' ref={typedRef}></span>  <br /> <br /> */}

                                <p className='text-xl my-2 text-gray-400'>World's most influential media, entertainment & technology show inspirational speakers including game changing ideas.</p>


                            </div>


                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    );
};

export default Banner;