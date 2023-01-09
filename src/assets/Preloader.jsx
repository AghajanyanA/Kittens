import React from "react";

export const Preloader = () => {

    return <img className='preloaderIMG' src={process.env.PUBLIC_URL + '/loading.gif'} alt='loading' />
}