import React from 'react'
import profile from './../../img/profile.jpg'
import resume from './../../documents/resume.pdf'
import './About.css'

function About() {
    return (
        <section>
            <div className="container-fluid bg-dark d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                            <img className="img-fluid rounded-circle shadow-sm" src={profile} alt="Profile" />
                        </div>
                        <div className="col-lg-7 text-lg-left">
                            <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                            <h1 className="name text-uppercase mb-2" style={{ WebkitTextStroke: "2px #ffffff" }}>Kumara Ruben</h1>
                            <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
                            <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                            <div className="d-flex align-items-center justify-content-lg-start pt-5">
                                <a href={resume} className="btn btn-outline-light mx-auto">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About