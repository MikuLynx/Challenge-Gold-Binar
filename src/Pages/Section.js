import React from "react";
import img_mercedes from '../img/Mercedes.png';
import service from '../img/img_service.png';


const Section = () => {
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
            

        <div className="our-services py-5" id="our-services">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={service} alt="img_service"/>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-start flex-column my-5">
                    <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                        lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                        wedding, meeting, dll.
                    </p>
                    <div className="custom-list">
                        <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Sewa Mobil Dengan Supir di Bali
                            12 Jam
                        </p>
                        <p className="custom-text-2 pe-2"><i className="bi bi-check-lg me-3"></i>Sewa Mobil Lepas Kunci di Bali
                            24
                            Jam</p>
                        <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Sewa Mobil Jangka Panjang Bulanan
                        </p>
                        <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Gratis Antar - Jemput Mobil di
                            Bandara</p>
                        <p className="custom-text pe-2"><i className="bi bi-check-lg me-3"></i>Layanan Airport Transfer / Drop
                            In Out</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="why-us py-5" id="why-us">
        <div className="container py-5">
            <h3>Why Us?</h3>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3 my-2">
                    <div className="card">
                        <div className="card-body yellow">
                            <i className="bi bi-hand-thumbs-up"></i>
                            <p>Mobil Lengkap</p>
                            <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 my-2">
                    <div className="card">
                        <div className="card-body red">
                            <i className="bi bi-tag"></i>
                            <p>Harga Murah</p>
                            <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 my-2">
                    <div className="card">
                        <div className="card-body blue">
                            <i className="bi bi-clock"></i>
                            <p>Layanan 24 Jam</p>
                            <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 my-2">
                    <div className="card">
                        <div className="card-body green">
                            <i className="bi bi-award"></i>
                            <p>Sopir Profesional</p>
                            <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div className="testimonial py-5" id="testimonial">
        <div className="text-center pt-3">
            <h3>Testimonial</h3>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="container">
                <div className="carousel-inner">
                    <div className="carousel-item active py-3 p-md-4">
                        <div className="card p-5">
                            <div className="card-body p-0 py-md-5">
                                <div className="row">
                                    <div className="col-md-4 text-center text-md-end">
                                        <img src="https://www.dailysia.com/wp-content/uploads/2022/04/Vonny-Felicia.jpg"
                                            alt="" className="rounded-circle img-thumbnail"/>
                                    </div>
                                    <div className="col-md-8 text-center text-md-start">
                                        <div
                                            className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                            itaque dicta nostrum
                                            laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                            reiciendis delectus aut? Quaerat, dolor.
                                        </p>
                                        <p className="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item py-3 p-md-4">
                        <div className="card p-5">
                            <div className="card-body p-0 py-md-5">
                                <div className="row">
                                    <div className="col-md-4 text-center text-md-end">
                                        <img src="https://i.pinimg.com/736x/0d/4c/c7/0d4cc7728140233e614c6414132136ce.jpg"
                                            alt="" className="rounded-circle img-thumbnail"/>
                                    </div>
                                    <div className="col-md-8 text-center text-md-start">
                                        <div
                                            className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                            itaque dicta nostrum
                                            laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                            reiciendis delectus aut? Quaerat, dolor.
                                        </p>
                                        <p className="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item py-3 p-md-4">
                        <div className="card p-5">
                            <div className="card-body p-0 py-md-5">
                                <div className="row">
                                    <div className="col-md-4 text-center text-md-end">
                                        <img src="https://matalelaki.com/media/8b/67/f2/5c/8b67f25cf8c5f478d9581f205fc45fbd.jpg"
                                            alt="" className="rounded-circle img-thumbnail"/>
                                    </div>
                                    <div className="col-md-8 text-center text-md-start">
                                        <div
                                            className="d-flex flex-row justify-content-center justify-content-md-start my-3">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill me-1"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p className="pe-md-5">Lorem ipsum dolor sit arly consectetur adipisicing elit. Quo
                                            itaque dicta nostrum
                                            laboriosam quisquam! Iure, officiis! Praesentium ullam laudantium, tempore
                                            reiciendis delectus aut? Quaerat, dolor.
                                        </p>
                                        <p className="fw-bold">Vonny Felicia, 22? Jakarta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <button className="carousel-control-prev position-relative d-flex justify-content-end mx-4" type="button"
                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <i className="bi bi-chevron-left"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next position-relative d-flex justify-content-start mx-4" type="button"
                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <i className="bi bi-chevron-right"></i>
                    <span className="visually-hidden ">Next</span>
                </button>
            </div>
        </div>
    </div>

    <div className="banner py-5">
        <div className="container text-center py-5 d-flex justify-content-center align-items-center flex-column">
            <h1 className="fw-bold">Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p className="w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et
                dolore magna aliqua. </p>
            <button className="btn btn-success">Mulai Sewa Mobil</button>
        </div>
    </div>

    <div className="faq py-5" id="faq">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h3>Frequently Asked Question</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-md-6">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="card mb-3">
                            <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                data-bs-toggle="collapse" data-bs-target="#collapseButuh" aria-expanded="false"
                                aria-controls="collapseButuh">
                                <p>Apa saja syarat yang dibutuhkan?</p>
                            </div>
                            <div id="collapseButuh" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit arly consectetur adipisicing elit. Voluptatibus
                                        eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                        veniam!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                data-bs-toggle="collapse" data-bs-target="#collapseKunci" aria-expanded="false"
                                aria-controls="collapseKunci">
                                <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                            </div>
                            <div id="collapseKunci" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                        eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                        veniam!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                data-bs-toggle="collapse" data-bs-target="#collapseSewa" aria-expanded="false"
                                aria-controls="collapseSewa">
                                <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                            </div>
                            <div id="collapseSewa" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                        eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                        veniam!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                data-bs-toggle="collapse" data-bs-target="#collapseAntar" aria-expanded="false"
                                aria-controls="collapseAntar">
                                <p>Apakah Ada biaya antar-jemput?</p>
                            </div>
                            <div id="collapseAntar" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                        eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                        veniam!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="accordion-header accordion-button collapsed cursor-pointer rounded"
                                data-bs-toggle="collapse" data-bs-target="#collapseCelaka" aria-expanded="false"
                                aria-controls="collapseCelaka">
                                <p>Bagaimana jika terjadi kecelakaan?</p>
                            </div>
                            <div id="collapseCelaka" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                        eligendi deleniti in tenetur distinctio repellendus ut quo dolorem dicta
                                        veniam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}

export default Section;