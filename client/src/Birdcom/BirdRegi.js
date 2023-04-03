import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bird from './img/heman.png'

const Registerbird = () => {


    const [fname, setFName] = useState("");
    const [file, setFile] = useState("");
    const [location, setLocation] = useState("");
    const [own,setOwn]=useState("");
    const [cordi,setCordi]=useState("");

    const history = useNavigate();

    const setdata = (e) => {
        setFName(e.target.value)
    }

    const setimgfile = (e) => {
        setFile(e.target.files[0])
    }
    const setown=(e)=>{
        setOwn(e.target.value)
    }
    const setLoca = (e) => {
        setLocation(e.target.value)
    }
    const setcordi=(e)=>{
        setCordi(e.target.value)
    }
    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("photo", file)
        formData.append("fname", fname);
        formData.append("location", location);
        formData.append("own",own);
        formData.append("cordi",cordi);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = await axios.post("/birdanimale", formData,);

        if (res.data.status == 201) {
            history("/Homebird")
        } else {
            console.log("error")
        }
    }

    return (
        <>
            <div class="small-container">
                <h2 class="title">Bird/Animal Information</h2>
            </div>
            <div class="account-page">
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <img src={Bird} alt="image1" style={{width:"110%"}} />
                        </div>
                        <div class="col-2">
                            <div class="form-container" style={{height:"450px"}}>
                                <div class="form-btn">

                                    <span>Register</span>
                                    <hr id="indicator" />
                                </div>

                                <form>
                                    <p>This Is Biodiversity Regitration</p>
                                    <input type="text" name='fname' onChange={setdata} placeholder='Enter Bird/Animale Name' />
                                    <input type="text" name='own' onChange={setown} placeholder='Enter Bird/Animale Owner name' />
                                    <input type="text" name='location' onChange={setLoca} placeholder='Enter Adress That Place'/>
                                    <input type="text" name='cordi  ' onChange={setcordi} placeholder='Enter Bird/Animale location coordinate' />
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

export default Registerbird
