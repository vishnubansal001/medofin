import React from 'react'
import DoctorCard from './DoctorCard'
import { doctors } from '../../database/data'
import '../../../src/index.css'

const DoctorList = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid:cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>{doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>
        </div>
    )
}

export default DoctorList