import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../../../config/server";

const FundTransferBeneficiaryList = () => {
<<<<<<< HEAD
    return (
        <div className='mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-primary'>
            <div className='p-4'>
                <h1 className='text-3xl font-bold text-primary'>Fund Transfer Beneficiary List</h1>
                <div className='bg-slate-100 p-2 rounded-lg'>
                    <p><Link className='text-primary '>Click Here</Link> To Add Beneficiary Credit Card </p>

                </div>
                <div className='bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid'>

                    <p className='text-center mt-4'>Total number of Beneficiary : 5</p>
                    <div className=''>
                        <div className="overflow-x-auto ">
                            <table className="table table-zebra border border-primary">
                                {/* head */}
                                <thead className='bg-primary text-white font-bold'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Beneficiary</th>
                                        <th>Status</th>
                                        <th>Transfer</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    <tr>
                                        <td >rupa</td>
                                        <td>54221745562568</td>
                                        <td>active</td>
                                        <td> <button
                                            onClick={() => { handelEdit() }}
                                            className='btn bg-gradient-to-b from-indigo-600 to-primary rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td >siam  </td>
                                         <td>444451745562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-indigo-600 to-primary  rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 3*/}
                                    <tr>
                                        <td >Prince</td>
                                         <td>5555745562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-indigo-600 to-primary rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <td >mahdee</td>
                                          <td>75745562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-indigo-600 to-primary  rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <td >manik</td>
                                         <td>445445562568</td>
                                        <td>active</td>
                                        <td> <button className='btn bg-gradient-to-b from-indigo-600 to-primary  rounded-md text-white ms-10 mt-4'>Edit</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
=======
    const [beneficiaryList,setBeneficiaryList] = useState([]);
  const username = "test1";
  useEffect(() => {
    fetch(`${baseUrl}/beneficiaryList/${username}`)
      .then((res) => res.json())
      .then((data) => setBeneficiaryList(data))
      .then((err) => console.log(err));
  }, [username]);
  return (
    <div className="mt-20 border rounded-lg bg-white border-gray-400 shadow-md shadow-green-200">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-green-600">
          Fund Transfer Beneficiary List
        </h1>
        <div className="bg-slate-100 p-2 rounded-lg">
          <p>
            <Link to="AddBeneficiary" className="text-green-600 ">
              Click Here
            </Link>{" "}
            To Add Beneficiary Credit Card{" "}
          </p>
>>>>>>> 834819bd15ccdf9d299df87379d6cfbe297af7e5
        </div>
        <div className="bg-slate-100 p-2 rounded-lg mt-4 divide-y-2 divide-solid">
          <p className="text-center mt-4">Total number of Beneficiary : {beneficiaryList.length}</p>
          <div className="">
            <div className="overflow-x-auto ">
              <table className="table table-zebra border border-green-500">
                {/* head */}
                <thead className="bg-green-600 text-white font-bold">
                  <tr>
                    <th>Name</th>
                    <th>Beneficiary</th>
                    <th>Status</th>
                    <th>Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                    beneficiaryList?.map((beneficiary,index)=><tr>
                    <td>{beneficiary?.username}</td>
                    <td>{beneficiary?.account_number}</td>
                    <td>{beneficiary?.status}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => {
                          handelEdit();
                        }}
                        className="btn bg-gradient-to-b from-green-500 to-green-700 rounded-md text-white ms-10 mt-4"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundTransferBeneficiaryList;
