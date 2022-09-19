import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const [filedata, setfiledata] = useState("")
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }  // eslint-disable-next-line
        else
            showProfile();
    }, [])

    const showProfile = async () => {
        const response = await axios.get('http://localhost:8080/api/user/getuser',
            {
                headers: {
                    'auth-token': localStorage.getItem('token')
                },
            });
        //console.log(response);
        setProfile({ "erpId": response.data.erpId, "name": response.data.name, "designation": response.data.designation, "office": response.data.office, "mobileno": response.data.mobileno, "email": response.data.email, "role": response.data.role })


    }
    const data=new FormData();
    data.append('image',filedata);

    const onSubmit=async(e)=>{
        e.preventDefault();

        try{
           // const img=document.querySelector('#photoupload').files[0];

            console.log(filedata);

            //const data = new FormData();
            //data.append("image",img)
            //const img = e.target.photoupload.value;
            //console.log(img);
            const response = await axios.post(
                'http://localhost:8080/api/user/setprofilepic',data     
            );
        }
        catch(error){
            // const errorInString = JSON.stringify(error.response.data.msg)
            //     props.showAlert(errorInString,"success");
            console.log(error);
        }

        // //const formData = new FormData();

        
    }

    const onChange=async(e)=>{
        setfiledata(e.target.files[0]);
    }

    return (
        <>
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{profile.name}</h4>
                                        </div>

                                        <form onSubmit={onSubmit}>
                                            <div class="mb-3">
                                                
                                                <input class="form-control" type="file" id="photoupload" name="photoupload" onChange={onChange}/>
                                                <button type="submit" class="btn btn-dark my-2">Upload</button>
                                            </div>
                                        </form>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Erp Id</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.erpId}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Designation</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.designation}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Office</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.office}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.mobileno}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Role</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profile.role}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            {/* <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
