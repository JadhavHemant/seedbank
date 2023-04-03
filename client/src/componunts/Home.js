import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from "moment"
import Seed from './img/seeds.jpg'

const Home = () => {

    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const getUserData = async () => {
        const res = await axios.get("/getdata", {
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


    const dltUser = async (id) => {
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
                // show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                //     Seed Delete
                // </Alert> : ""
            }
            <div class="small-container">
                <h2 class="title">SeedBank</h2>
                <br />
                <h5 >Draw A Biodiversity Map For Your Area On
                    A Plain Paper Click A photograph Of It And upload Over Here
                    you May Use Differnt Signs,Colours And Index.
                    <center>
                        <br /> You May Refer Image While Preparing your map</center>
                </h5>
                <br />
                <center>
                    <img src={Seed} height='250px' style={{ height: "500px", width: "500px", borderRadius: "20px" }} />
                    <br />
                    <br />
                <div class="col-2">
                    <a href="/register" class="btn">Add Seed &#8594;</a>
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
                                                <img src={`/uploads/${el.seedimg}`} alt="plant" />
                                                <h3>{el.seedname}</h3>
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