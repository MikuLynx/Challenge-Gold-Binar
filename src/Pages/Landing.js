import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const Landing = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = './'; 
    navigate(path);
    }


    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <Button style={{background:"none", border:"none"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="px-4"onClick={routeChange}>
                        <a class="navbar-brand" href="#">BCR</a>
                    </Button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#our-services">Our Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#why-us">Why Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#testimonial">Testimonial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#faq">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn btn-success" href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Landing;