import React, { useEffect, useState } from 'react';
import AnalyticsCardTitle from '../../../../components/AnalyticsCardTitle/AnalyticsCardTitle';
import { baseUrl } from '../../../../config/server';

const StudentAccount = () => {

    const [studentsAccounts, setStudentsAccounts] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/student-user-account`)
            .then(res => res.json())
            .then(data => {
                setStudentsAccounts(data)
            })
    }, [])

    return (
        <div className='bg-white p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <AnalyticsCardTitle cardTitle={`Total Student Accounts`} total={studentsAccounts.length} />
            </div>
        </div>
    );
};

export default StudentAccount;