const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");
const multer = require("multer");
const moment = require("moment");   
const { Router } = require("express");
// /////   BIODIVERSITY MAP

//   ///img storage confing
var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});


    
const isImagem = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowd"))
    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImagem
})



   
router.post("/registerbio", upload.single("photo"), (req, res) => {
    const { fname } = req.body;
    const{ are }=req.body;
    const{ conta }=req.body;
    const { filename } = req.file;
 


    if (!fname || !filename || !are || !conta) {
        res.status(422).json({ status: 422, message: "fill all the details" })
    }

    try {

        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        conn.query("INSERT INTO biodiversity SET ?", { mapname: fname, mapimg:filename, date: date,area:are,contact:conta }, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data added")
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


 
router.get("/getdatamap", (req, res) => {
    try {
        conn.query("SELECT * FROM biodiversity",(err,result)=>{
            if (err) {
                console.log("error")
            } else {
                console.log("data get")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


     
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    try {
        conn.query(`DELETE FROM biodiversity WHERE id ='${id}'`,(err,result)=>{
            if (err) {
                console.log("error")
            } else {
                console.log("data delete")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
})



///////////////////////////////////////////////////////    seed bank    



    
var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});


    
const isImagep = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowd"))
    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImagep
})



   
router.post("/register", upload.single("photo"), (req, res) => {
    const { fname } = req.body;
    const { filename } = req.file;


    if (!fname || !filename) {
        res.status(422).json({ status: 422, message: "fill all the details" })
    }

    try {

        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        conn.query("INSERT INTO usersdata SET ?", { seedname: fname, seedimg: filename, date: date }, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data added")
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


 
router.get("/getdata", (req, res) => {
    try {
        conn.query("SELECT * FROM usersdata", (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data get")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


     
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    try {
        conn.query(`DELETE FROM usersdata WHERE id ='${id}'`, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data delete")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
})
//////////////////////
///Plant data


    
var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});


    
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowd"))
    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})



   
router.post("/registerplant", upload.single("photo"), (req, res) => {
    const { fname } = req.body;
    const {location}=req.body;
    const { filename } = req.file;


    if (!fname || !filename ||!location) {
        res.status(422).json({ status: 422, message: "fill all the details" })
    }

    try {

        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        conn.query("INSERT INTO plantdata SET ?", { plantname: fname, plantimg: filename,plantloc:location, date: date }, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data added")
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


 
router.get("/getdataplant", (req, res) => {
    try {
        conn.query("SELECT * FROM plantdata", (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data get")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


     
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    try {
        conn.query(`DELETE FROM plantdatas WHERE id ='${id}'`, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data delete")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
})



////////////////////////////////////////////////////////////////
////////////////////
// /Student data

    

var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});


    
const isImaget = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowd"))
    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImaget
})



   
router.post("/studentreg", upload.single("photo"), (req, res) => {
    const { fname } = req.body;
    const { address }=req.body;
    const { location }=req.body;
    const { cont } =req.body;
    const { sch }=req.body;
    const { dat }=req.body;
    const { nagarp }=req.body;
    const { filename } = req.file;
   


    if (!fname || !filename ||!location) {
        res.status(422).json({ status: 422, message: "fill all the details" })
    }

    try {

        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        conn.query("INSERT INTO personal SET ?", {name:fname,addresss:address,location:location,contact:cont,school:sch,image:filename,dob:dat,nagarparishad:nagarp,date: date}, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data added")
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


 
router.get("/getper", (req, res) => {
    try {
        conn.query("SELECT * FROM personal", (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data get")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


     
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    try {
        conn.query(`DELETE FROM personal WHERE id ='${id}'`, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data delete")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
})

///////////////////////////////////////
////birds data

    
var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});


    
const isImageani = (req, file, callback) => {
    if (file.mimetype.startsWith(" ")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowd"))
    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImageani
})



   
router.post("/birdanimale", upload.single("photo"), (req, res) => {
    const { fname } = req.body;
    const { location } = req.body;
    const { own } = req.body;
    const { cordi } = req.body;
    const { filename } = req.file;


    if (!fname || !filename) {
        res.status(422).json({ status: 422, message: "fill all the details" })
    }

    try {

        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        conn.query("INSERT INTO birdanimale SET ?", { birdanimalename: fname, owne:own, address:location, cordinates:cordi, birdanimaleimg: filename, date: date }, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data added")
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});


 
router.get("/getbird", (req, res) => {
    try {
        conn.query("SELECT * FROM birdanimale", (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data get")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});



router.delete("/:id", (req, res) => {
    const { id } = req.params;
    try {
        conn.query(`DELETE FROM birdanimale WHERE id ='${id}'`, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data delete")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
})





module.exports = router;