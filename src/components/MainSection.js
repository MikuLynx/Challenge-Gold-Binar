import React from "react";
import img_mercedes from '../img/Mercedes.png';

const MainSection = ()  => {
    return(
        <div>
        <div className="main-section pt-md-5">
        <div className="bg-car"></div>
            <div className="container h-100 d-flex pt-md-5">
                <div className="row d-flex justify-content-center align-items-left">
                    <div className="col-md-6 tagline py-5">
                        <h2>sewa &amp; rental mobil terbaik dikawasan lokasimu</h2>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a href="#" className="btn btn-success">Mulai Sewa Mobil</a>
                    </div>
                    <div className="col-md-6 img-car py-5">
                        <img src={img_mercedes} alt="" className="w-100 back-side" />
                    </div>
                </div>
            </div>
    </div>
        </div>
    )
}

export default MainSection;