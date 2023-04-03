import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sideimg from './img/imga.png'

const Registerbio = () => {


    const [fname, setFName] = useState("");
    const [are,setAre]=useState("");
    const[conta,setContact]=useState("");
    const [file, setFile] = useState("");

    const history = useNavigate();

    const setdata = (e) => {
        setFName(e.target.value)
    }
    const setarea =(e)=>{
        setAre(e.target.value)
    }

    const setcontac=(e)=>{
        setContact(e.target.value)
    }
    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }

    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo", file);
        formData.append("are",are)
        formData.append("conta",conta)
        formData.append("fname", fname);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = await axios.post("/registerbio", formData, config);

        if (res.data.status == 201) {
            history("/homebio")
        } else {
            console.log("error")
        }
    }

    return (
        <>
          <div class="small-container">
                <h2 class="title">Biodiversity Map </h2>
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

                                    <span>Map Details</span>
                                    <hr id="indicator" />
                                </div>

                                <form>
                                    {/* <p>This Is /p> */}
                                    <input type="text" name='fname' onChange={setdata} placeholder='Enter your Name'/>
                                    <input type="text" name='are' onChange={setarea} placeholder='Area Name'/>
                                    <input type="text" name='conta' onChange={setcontac} placeholder='Contact Number'/>
                                    <h6> Upload Your Biodiversity Map</h6>
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

export default Registerbio
