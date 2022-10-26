import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import CoursesCards from '../CoursesCards/CoursesCards';
import './Courses.css'

function Courses() {
    const courses = useLoaderData()

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-lg-3 '>
                    <h3 className='fw-bold mb-4'>Courses Category</h3>
                    {courses.map(({ id, name }) => <p key={id}><NavLink className='text-decoration-none ' to={`/details/${id}`}>{name}</NavLink></p>)}
                </div>

                <div className='col-lg-9 '>
                    <h3 className='fw-bold mb-4'>Courses</h3>
                    <div className='row'>
                        {courses.map(cours => {
                            return (
                                <div key={cours.id} className='col-md-4 mb-4'>
                                    <CoursesCards cours={cours} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Courses