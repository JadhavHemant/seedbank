import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Sideimg from './img/hemant.png'

const Registerplant = () => {


    const [fname, setFName] = useState("");
    const [file, setFile] = useState("");
    const [location, setLocation] = useState("");

    const history = useNavigate();

    const setdata = (e) => {
        setFName(e.target.value)
    }

    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }
    const setLoca = (e) => {
        setLocation(e.target.value)
    }

    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo", file)
        formData.append("fname", fname);
        formData.append("location", location)
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = await axios.post("/registerplant", formData,);

        if (res.data.status == 201) {
            history("/planthome")
        } else {
            console.log("error")
        }
    }

    return (
        <>
            <div class="small-container">
                <h2 class="title">Upload Your Plant Here</h2>
            </div>
            <div class="account-page">
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <img src={Sideimg} alt="image1" width="100%" />
                        </div>
                        <div class="col-2">
                            <div class="form-container">
                                <div class="form-btn">

                                    <span>Register</span>
                                    <hr id="indicator" />
                                </div>

                                <form>
                                    <p>This Is Biodiversity Regitration</p>
                                    <input type="text" name='fname' onChange={setdata} placeholder='Enter Biodiversity Map Name' />
                                    <input type="text" name='location' onChange={setLoca} placeholder='Enter Plant location coordinates' />
                                    <input type="file" name='photo' onChange={setimgfile} />
                                    <button type="submit" class="btn" onClick={addUserData}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Registerplant
