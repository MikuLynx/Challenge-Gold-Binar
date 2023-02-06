import React, { useEffect, useState } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

const Mobil = () => {
    const [listMobil, setListMobil] = useState([]);


    function getlistMobil(){

        const requestOptions = {
            method: 'GET',
            headers: { 
                access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTQ4MTQ2Mn0.M1celd6ur5KJY0rJztnMqX7zUqJA9DnG1zOgWz4IRCY"
            }
        };
        
        try{
          fetch("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10",requestOptions) // Ambil data API
          .then(resp=>resp.json())
          .then((data) =>{
            console.log("Hasil ", data)
            setListMobil(data.cars)
          })
        } catch (error) {
          console.log("Error: " + error.message);
        }
      }

      useEffect(() =>{
        getlistMobil();
      },[] )

      return(
        <div>
          <div className="main-section pt-md-5"></div>

          <div className="search-bar_section1">
          <div className="search-bar_section2">
            <div className="search-bar_container">
            <aside>
              <form className="search-bar_inputs">
                <div>
                  <p>Nama Mobil</p>
                  <input type="text" placeholder="Ketik nama/tipe mobil"/>
                </div>
                <div>
                  <p>Kategori</p>
                  <input type="text" placeholder="Masukkan Kapasitas Mobil"/>
                </div>
                <div>
                  <p>Harga</p>
                  <input type="text" disabled=""/>
                </div>
                <div>
                  <p>Status</p>
                  <select disabled="" name="status" id="status"></select>
                </div>
                <div className="search-bar_button">
                    <Button style={{background: "green"}}>Cari Mobil</Button> 
                </div>
              </form>
            </aside>
            </div>
          </div>
          </div>


          <div>
            {listMobil.map((cars)=> (
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={cars.image} style={{height:200, width:300}} />
                  <Card.Body>
                    <Card.Title>{cars.name}</Card.Title>
                    <Card.Text>
                      {cars.category}<br></br>
                      {cars.price}
                    </Card.Text>
                  </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
              </CardGroup>
            ))}
            </div>
        </div>
      )
}

export default Mobil;