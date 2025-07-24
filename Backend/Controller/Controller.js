let userData = require("../Model/UserSchema")


let PostDataApi = async (req, res) => {

    console.log(req.body);
    // res.json({message: "Data Sent Successfuly"})


    let { firstName, lastName, email, password } = req.body

    try {

        let existingUser = await userData.findOne({ email: email })

        if (existingUser) {
            res.json({
                message: "User Already Exist"
            });
        }
        else {

            let saveData = await userData({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }).save()
            res.json({
                message: "Data insert Successfully"
            })

        }







    } catch (error) {

        res.json({
            message: "Somethong Went Wrong"
        })

    }




}

let GetDataApi = async (req, res) => {
    try {

        let getData = await userData.find({});
        res.json({
            data: getData,
        });

    } catch (error) {
        res.json
        message: "Something Went Wrong"

    }
};

let GetDataByName = async (req, res) => {

    let { email } = req.body;

    try {

        let getData = await userData.findOne({ email: email });
        res.json({
            data: getData,
        })
    } catch (error) {
        res.json({ message: "Something Went Wrong" })

    }
}

let GetDataById = async (req, res) => {

    // console.log(req.params.id)
    let { id } = req.params;


    try {
        let getData = await userData.findById(id)

        if (!getData) {
            res.json({
                message: "Id does not exist"
            });
        }

        else {
            res.json({
                data: getData
            })
        }




    } catch (error) {
        res.json({
            message: "Something Went Wrong"
        })
    }

}

let UpdateDataApi = async (req, res) => {

    console.log(req.params.id)
    console.log(req.body)

    let id = req.params.id;
    let { firstName, lastName, email, password } = req.body

    try {

        let existingUser = await userData.findById(id)
        if (!existingUser) {
            res.json({
                message: "User not exist"
            })
        }
        else {

            let updateData = await userData.findByIdAndUpdate(id,
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            )

            res.json({
                message: "Data Update Successfully."
            })
        }

    }
    catch (error) {
        res.json({
            message: "Something went wrong"
        })

    }
}

let deleteDataApi=async(req,res)=>{

    let id=req.params.id;

    try {
        
        let existingUser= await userData.findById(id)

        if(!existingUser){
            res.json({
                message:"Use not found"
            })
        }
        else{
            let deleteData = await userData.findByIdAndDelete(id);
            res.json({
                message:"Data deleted successfully"
            })
        }



    } catch (error) {

        res.json({
            message:"Something went wrong"
        })
        
    }

}


module.exports = { PostDataApi, GetDataApi, GetDataByName, GetDataById, UpdateDataApi, deleteDataApi}