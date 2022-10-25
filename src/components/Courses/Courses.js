import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

import './Courses.css'

import CoursesCards from '../CoursesCards/CoursesCards';
function Courses() {
    const courses = useLoaderData()
    return (
        <div className='container'>
            <div className="row">
                <div className='col-lg-3'>
                    {courses.map(({id, name}) => <p key={id}><NavLink className='' to={`/details/${id}`}>{name}</NavLink></p> )}
                </div>

                <div className='col-lg-9'>
                    <div className='row'>
                        {courses.map(cours => {
                            return (
                                <div className='col-md-4 mb-4'>
                                    <CoursesCards key={cours.id} cours={cours} />
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