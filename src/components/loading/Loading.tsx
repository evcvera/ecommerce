import React from 'react';
import richard from '../../assets/images/ricardito.png'


const Loading: React.FC = () => {
    return (
        <>
            <div className="text-center vh-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border w-25">
                    <img className="w-50" alt="contact" src={richard}/>
                </div>
            </div>
        </>
    )};

export default Loading;
