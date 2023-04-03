import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import moment from "moment"
import Alert from 'react-bootstrap/Alert';
import Bird from './img/bird.jpg'
const Homebird = () => {

    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const getBirdData = async () => {
        const res = await axios.get("/getbird", {
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
            getBirdData()
            setShow(true)
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getBirdData()
    }, [])

    return (
        <>
            {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    Plant Is Deleted
                </Alert> : ""
            }
            <div class="small-container">
                <h2 class="title">Bird / Animal</h2>
                <br />
                <h5 >Draw A Biodiversity Map For Your Area On
                    A Plain Paper Click A photograph Of It And upload Over Here
                    you May Use Differnt Signs,Colours And Index.
                    <center>
                        <br /> You May Refer Image While Preparing your map</center>
                </h5>
                <br />
                <center>
                <img src={Bird} height='250px' style={{ height: "500px", width: "400px", borderRadius: "20px" }} />
                    <br />
                    <br />
                <div class="col-2">
                    <a href="/regibird" class="btn">Add Bird &#8594;</a>
                </div>
                </center>
                {
                    data.length > 0 ? data.map((el, i) => {
                        return (
                            <>
                                <div class="small-container">

                                    {/* <div class="row">
                                        <div class="col-4">
                                            <img src={`/uploads/${el.plantimg}`} alt="plant" />
                                            <h3>{el.plantname}</h3>
                                            <p>plant location: {el.plantloc}</p>
                                            <p>Date: {moment(el.date).format("DD-MM-YYYY")}</p>
                                        </div> 
                                     </div> */}
                                </div>

                            </>
                        )
                    }) : ""
                }

            </div>

        </>
    )
}

export default Homebird