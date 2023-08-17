import React from 'react';
import creditCard from '../../../assets/images/credit-card-payment/credit-card-full-org.png';

const CreditCardPayment = () => {
    return (
        <div className='bg-[#F7F9FA] py-10'>
            <div className="container mx-auto px-3 ">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 items-center'>
                    <div className=''>
                        <h1 className="text-3xl lg:text-5xl my-2 lg:mt-3 lg:mb-5 text-blue-950 font-semibold">Simplicity Credit Card Payment</h1>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quisquam cum tempore itaque placeat ea minima. Ad, deserunt corporis? Laboriosam?
                        </p>
                        <button className='nav-btn mt-5 text-white px-5 py-3 rounded-lg'>Learn More</button>
                    </div>
                    <div className='mx-auto'>
                        <img className='mx-auto w-5/6' src={creditCard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardPayment;