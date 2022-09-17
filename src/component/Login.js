import React from 'react'
import'./Login.css'
import hierarchy from '../image/hierarchy.jpg';
import uppcl from '../image/uppcl.png';


export default function Login() {
    const blockInvalidChar = e => ['.','e', 'E', '+', '-'].includes(e.key) && e.preventDefault();


        
    return (
        <div>
            <div className="login-page bg-light">
                <div className="container">
                   
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                        {/* <div className="row" >
                        <img src={uppcl} alt="uppcllogo" className="img-fluid"/>
                    </div> */}
                    <div className="mx-auto container d-flex justify-content-center">
                    <img src={uppcl} alt="uppcllogo" className="img-fluid mb-3"/>
                    </div>
                            <h3 className="mb-3">Login Now</h3>
                            <div className="bg-white shadow rounded">
                                <div className="row">
                                    <div className="col-md-7 pe-0">
                                        <div className="form-left h-100 py-5 px-5">
                                            <form action="" className="row g-4">
                                                <div className="col-12">
                                                    <label>Erp Id<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="fa-regular fa-id-card"></i></div>
                                                        <input type="number" step="1" onKeyDown={blockInvalidChar}
                                                        //  min="10000000"
                                                         max="99999999"
                                                         className="form-control" id="erpid" name="erpid" placeholder="Enter Your Erp Id"/>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label>Password<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="fa-solid fa-lock"></i></div>
                                                        <input type="password" className="form-control"  name="password" id="password" placeholder="Enter Password" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                                        <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                                                    </div>
                                                </div>

                                                {/* <div className="col-sm-6">
                                                    <a href="#" className="float-end text-primary">Forgot Password?</a>
                                                </div> */}

                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-dark px-4 float-end mt-4">login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ps-0 d-none d-md-block">
                                        <div className="form-right h-100 bg-white text-white text-center pt-5">
                                            {/* <i className="bi bi-bootstrap"></i> */}
                                            <img src={hierarchy} className="img-fluid" alt="hierarchylogo" />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
