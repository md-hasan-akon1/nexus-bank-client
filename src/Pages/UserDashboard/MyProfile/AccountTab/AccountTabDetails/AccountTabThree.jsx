import React from 'react';
import { FaUser } from 'react-icons/fa';

const AccountTabThree = ({user}) => {
  const {accountType, accountNumber, balance}=user

  return (
      <div className='shadow-xl bg-slate-50 p-10 w-full'>
        <div className='flex justify-center'>
          <h4 className="font-bold text-violet-600 text-lg md:text-2xl flex gap-2 mb-7 items-center">
            <FaUser></FaUser> Salary Account Details</h4>
        </div>
        <div>
          <table className="responsive-table bordered">
            <tbody>
              <tr className="text-md md:text-lg lg:text-xl">
                <td className="font-semibold">Account Number</td>
                <td className="py-1 pl-1 pr-2">:</td>
                <td>{accountNumber}</td>
              </tr>
              <tr className="text-md md:text-lg lg:text-xl">
                <td className="font-semibold">Total Balance</td>
                <td className="py-1 pl-1 pr-2">:</td>
                <td>{balance.toFixed(2)} tk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AccountTabThree;