import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h2 className='mt-5 text-center text-danger'>404! Page not found!</h2>
            <div className='mt-2 mb-5 d-flex justify-content-center '>
                <img className='img-fluid w-50 rounded rounded-lg' src="../../../not-found.jpg" alt="" />
            </div>
        </div>
    );
};

export default NotFound;