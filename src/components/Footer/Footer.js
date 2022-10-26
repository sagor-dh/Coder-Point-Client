import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
function Footer() {
    return (
        <div>
            <div className=" my-5">

                <footer className="text-center text-white bg-black" >

                    <div className="container">

                        <section className="mt-5">

                            <div className="row text-center d-flex justify-content-center pt-5">

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to='/' className="text-white">Hoem</Link>
                                    </h6>
                                </div>



                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to='/courses' className="text-white">Courses</Link>
                                    </h6>
                                </div>



                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to='/block' className="text-white">Block</Link>
                                    </h6>
                                </div>



                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to='/fqa' className="text-white">FQA</Link>
                                    </h6>
                                </div>



                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to='/login' className="text-white">Login</Link>
                                    </h6>
                                </div>

                            </div>

                        </section>


                        <hr className="my-5" />


                        <section className="mb-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <p>
                                        Welcome to EH102. This course is a distance learning equivalent to the EH102 sections offered in traditional classrooms.
                                        This means that we will never meet face-to-face. Our course will be conducted via the Internet and our communications
                                        will be limited to e-mail, bulletin board postings, and chatrooms. We will use a program called Blackboard Vista to run the
                                        course. Everything we need — our calendar, bulletin board, chatrooms, e-mail, assignments, grades, etc., will be housed
                                        within this one system. Therefore, no outside e-mail address is necessary.
                                    </p>
                                </div>
                            </div>
                        </section>



                        <section className="text-center mb-5">
                            <Link href="" className="text-white me-4">
                                <FaFacebook />
                            </Link>
                            <Link href="" className="text-white me-4">
                                <FaTwitter />
                            </Link>
                            <Link href="" className="text-white me-4">
                                <FaGoogle />
                            </Link>
                            <Link href="" className="text-white me-4">
                                <FaInstagram />
                            </Link>
                            <Link href="" className="text-white me-4">
                                <FaLinkedin />
                            </Link>
                            <Link href="" className="text-white me-4">
                                <FaGithub />
                            </Link>
                        </section>

                    </div>



                    <div className="text-center p-3">
                        © 2022 Copyright:
                        <Link className="text-white" to="/"
                        >Mostafizur</Link>
                    </div>

                </footer>

            </div>

        </div>
    )
}

export default Footer