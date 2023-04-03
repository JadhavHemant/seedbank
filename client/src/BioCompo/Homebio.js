import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import moment from "moment"
import Alert from 'react-bootstrap/Alert';
import Hemant from './img/hemanta.jpg'

const Home = () => {

    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const getUserData = async () => {
        const res = await axios.get("/getdatamap", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            console.log("data get");
            setData(res.data.data)

        } else {
            console.log("error")
        }
    }


    const dltUsermap = async (id) => {
        console.log(id)
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status == 201) {
            getUserData()
            setShow(true)
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    Map Is Deleted
                </Alert> : ""
            }
            <div class="small-container">
                <h2 class="title">Biodiversity Map</h2>
                <br />
                <h5 >Draw A Biodiversity Map For Your Area On
                    A Plain Paper Click A photograph Of It And upload Over Here
                    you May Use Differnt Signs,Colours And Index.
                    <center>   <br /> You May Refer Image While Preparing your map</center>
                </h5>
                <br />
                <center><img src={Hemant} height='250px' />
                    <br />
                    <br />
                    <div class="col-2">
                        <a href="/registerbio" class="btn">Add Map &#8594;</a>
                    </div>
                </center>
                <div className=' align-iteams-center mt-5'>
                    {
                        data.length > 0 ? data.map((el, i) => {
                            return (
                                <>
                                    <div class="small-container">

                                        {/* <div class="row">
                                            <div class="col-4">
                                                <img src={`/uploads/${el.mapimg}`} alt="map" />
                                                <h3>{el.mapname}</h3>
                                                <p>Date: {moment(el.date).format("DD-MM-YYYY")}</p>
                                            </div> 

                            </div> */}
                                    </div>

                                </>
                            )
                        }) : ""
                    }

                </div>
            </div>
        </>
    )
}

export default Home