import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from "moment"
import Alert from 'react-bootstrap/Alert';

const Home = () => {

    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const getPlantData = async () => {
        const res = await axios.get("/getdataplant", {
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
            getPlantData()
            setShow(true)
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getPlantData()
    }, [])

    return (
        <>
            {
                show ? <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    Plant Is Deleted
                </Alert> : ""
            }
            <div class="small-container">
                <h2 class="title">Plant's</h2>
                <div class="col-2">
                    <a href="/plantreg" class="btn">Add Plant &#8594;</a>
                </div>

                {
                    data.length > 0 ? data.map((el, i) => {
                        return (
                            <>
                                {/* <div class="small-container">

                                    {/* <div class="row">
                                        <div class="col-4">
                                            <img src={`/uploads/${el.plantimg}`} alt="plant" />
                                            <h3>{el.plantname}</h3>
                                            <p>plant location: {el.plantloc}</p>
                                            <p>Date: {moment(el.date).format("DD-MM-YYYY")}</p>
                                        </div>
                                    
                                    </div> */}
                            

                            </>
                        )
                    }) : ""
                }

            </div>

        </>
    )
}

export default Home