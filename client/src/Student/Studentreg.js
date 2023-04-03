import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Sideimg from './img/Birds.png'

const StudentReg = () => {


    const [fname, setFName] = useState("");
    const [address, setAddress ]=useState("");
    const [file, setFile] = useState("");
    const [location, setLocation] = useState("");
    const [cont,setContact]=useState("");
    const [sch,setSch]=useState("");
    const [photo,setPhoto]=useState("")
    const [dat,setDat ]=useState("");
   const [nagarp,setNp ]=useState("");
    const history = useNavigate();

    const setdata = (e) => {
        setFName(e.target.value)
    }

    const setaddres =(e)=>{
        setAddress(e.target.value)
    }

    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }
    const setLoca = (e) => {
        setLocation(e.target.value)
    }
    const setcont =(e)=>{
        setContact(e.target.value)
    }
    const setscho =(e)=>{
        setSch(e.target.value)
    }
    
    const setimg=(e)=>{
        setPhoto(e.target.files[0])
    }
    const setdat =(e)=>{
        setDat(e.target.value)
    }
    const setnp =(e)=>{
        setNp(e.target.value)
    }
   
    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo", file)
        formData.append("fname", fname);
        formData.append("address",address);
        formData.append("location", location);
        formData.append("cont",cont);
        formData.append("sch",sch);
        formData.append("dat",dat);
        formData.append("nagarp",nagarp);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = await axios.post("/studentreg", formData,);

        if (res.data.status == 201) {
            history("/homebio")
        } else {
            console.log("error")
        }
    }

    return (
        <>
            <div class="small-container">
                <h2 class="title">* Persnol Details *</h2>
            </div>
            <div class="account-page">
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <img src={Sideimg} alt="image1" width="100%" />
                        </div>
                        <div class="col-2">
                            <div class="form-container" style={{height:"630px"}}>
                                <div class="form-btn">

                                    <span>Register</span>
                                    <hr id="indicator" />
                                </div>

                                <form>
                                    <input type="text" name='fname' onChange={setdata} placeholder='Enter your Name' />
                                    <input type="text" name='address' onChange={setaddres} placeholder='Enter your Address' />
                                    <input type="text" name='location' onChange={setLoca} placeholder='Enter location coordinates' />
                                    <input type="text" name='cont' onChange={setcont} placeholder='contact' />
                                    <input type="text" name='sch' onChange={setscho} placeholder="school college"/>
                                    <h6>upload Your Image</h6>
                                    <input type="file" name='photo' onChange={setimgfile} />
                                    <h6>Enter Your Birth Date</h6>
                                    <input type='date' name='dat' onChange={setdat} placeholder='date'/>
                                    <input type='text' name='nagarp' onChange={setnp} placeholder='Enter Your Nagarparishad/Palika name'/>
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

export default StudentReg
