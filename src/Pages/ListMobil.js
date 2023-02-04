import React, { useEffect, useState } from "react";

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
            {JSON.stringify(listMobil)}
        </div>
      )
}

export default Mobil;