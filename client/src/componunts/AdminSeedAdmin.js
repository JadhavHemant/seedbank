import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import moment from "moment"
import Alert from 'react-bootstrap/Alert';

const Admin = () => {

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


    const dltUserseed = async (id) => {
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
                    Seed Delete
                </Alert> : ""
            }
            <div className="container mt-2">
                <h1 className='text-center mt-2'>SeedBank Admin Page</h1>
                <div className='text-start'>
                  
                  <Button variant="primary"><NavLink to="/Adminbio" className="text-decoration-none text-light">Go To Biodiversity Admin page</NavLink></Button>
                  </div>
                <div className=' align-iteams-center mt-5'>

                    {
                        data.length > 0 ? data.map((el, i) => {
                            return (
                                <>
                                    <Card>
                                       <Card.Img variant="top" src={`/uploads/${el.seedimg}`} style={{ width: '100px', textAlign: "center", margin: "auto" }} className="mt-2" />
                                        <Card.Body className='text-center'>
                                        <Card.Title>Seed Name : {el.seedname}</Card.Title>
                                            <Card.Text>
                                            Date Added : {moment(el.date).format("DD-MM-YYYY")}
                                            </Card.Text>
                                            <Button variant="danger" onClick={() => dltUserseed(el.id)} className='col-lg-6 text-center'>Delete</Button>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                    <br/>
                                </>
                            )
                        }) : ""
                    }

                </div>
            </div>
        </>
    )
}

export default Admin