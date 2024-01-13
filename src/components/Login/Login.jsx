import "./LoginStyle.css"
import React, { useEffect, useState } from 'react'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import login from "./../../assets/Login.avif"
import logo from "./../../assets/wasiehLogo.png"
import { NavBar } from "../NavBar/NavBar";
export const Login = () => {
    const [signType, setSignType] = useState('Login');
     const [activeIndex, setActiveIndex] = useState(0);
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  
    const handleSignUp = () => {
      setSignType('Sign');
    };
    const handleSignIn = () => {
      setSignType('Login');
    }
   
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
   
    useEffect(() => {
      const timer = setTimeout(() => {
  
        setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      }, 5000);
  
      return () => {
        clearTimeout(timer);
      };
    }, [activeIndex]);
  
    const handleVisiblePassword = () => {
      setVisiblePassword(!visiblePassword);
    };
  
    const handleVisibleConfirmPassword = () => {
      setVisibleConfirmPassword(!visibleConfirmPassword);
    };
   
    return (
        <section className="myLogin mt-5 d-flex justify-content-center align-items-end">
            <NavBar/>
        <div className="container containerSign mt-5">
          <div className={signType === "Login" ? "Login col-lg-6 col-md-12 mt-5" : "Sign col-lg-6 col-md-12 mt-5"}>
            <div className="leftSec">
                <h1>{signType === "Login" ? 'LogIn' : 'Sign Up'}</h1>
              <p >{!signType === "Sign" ? 'Let’s get you all st up so you can access your personal account' : 'Login to access your account'}</p>
  
              <form onSubmit={handleSubmit}>
                {signType === "Login" ? (
                  <>
                    <div className='d-flex flex-row w-100 my-4 order-0'>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          Email
                        </label>
                        <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='eng.alimoh98m@gmail.com' />
                      </div>
  
                    </div>
                    <div className='d-flex flex-row w-100 my-4'> 
                     <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                      <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        PassWord
                      </label>
                      <input type={!visiblePassword ? 'text' : 'password'} className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='******************' />
                      <span onClick={handleVisiblePassword}> {visiblePassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>
  
                    </div></div>
                    <div className='d-flex align-items-center'>
                      <div className='col-12'>
                        <div className='form-check'>
                          <input type='checkbox' id='forgetPass' className='form-check-input' />
                        
                         
                            <span className='forgetPass gold'>Forget Password ?</span>
                        
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-block btn-orange w-100">Login</button>
                    <div className="ToSign">Don’t have an account?<span className="forgetPass" onClick={handleSignUp}><span className="gold">Sign Up</span>
                    </span></div>
                       </>
                ) :
                  (<>
                  <div className='w-100  my-3 order-2'>
                    <div className='d-flex flex-row w-100'>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding me-2  w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          First Name
                        </label>
                        <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='Ali' />
                      </div>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding  w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          Last Name
                        </label>
                        <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='Mohammad' />
                      </div>
                    </div>
                  </div>
                    <div className='w-100 my-3 '>
                      <div className='d-flex flex-row w-100'>
                        <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding me-2  w-100'>
                          <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                            Email
                          </label>
                          <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='eng.alimoh98m@gmail.com' />
                        </div>
                        <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding  w-100'>
                          <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                            Phone Number
                          </label>
                          <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='0999 999 999' />
                        </div>
                      </div>
                    </div>
                    <div className='fa_fromTo-input w-100 my-3 '>
                      <div className='d-flex flex-row w-100'>
                        <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding w-100'>
                          <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                            PassWord
                          </label>
                          <input type={!visiblePassword ? 'text' : 'password'} className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='******************' />
                          <span onClick={handleVisiblePassword}> {visiblePassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>
                        </div>
  
                      </div>
                    </div>
                    <div className='fa_fromTo-input w-100 my-3 '>
                      <div className='d-flex flex-row w-100'>
                        <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding w-100'>
                          <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                            Confirm PassWord
                          </label>
                          <input type={!visibleConfirmPassword ? 'text' : 'password'} className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='******************' />
                          <span onClick={handleVisibleConfirmPassword}> {visibleConfirmPassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>
                        </div>
  
                      </div>
                    </div>
                    <div className='d-flex align-items-center'>
                      <input type="checkbox" id='agree' />
                      <label htmlFor="agree" className='ms-2 fa_class-lable'>I agree to all the <span className="orangText">Terms</span> and <span className="orangText">Privacy Policies</span></label>
                    </div>
                    <button type="button" className="btn btn-block btn-orange">Create Account</button>
                    <div className="ToSign">Already have an account? <span className="forgetPass" onClick={handleSignIn}> <span className="gold">Login</span>
                    
                    </span></div>
                 
                  </>
                  )}
  
  
              </form>
            </div>
            <div className="rightSec order-1 d-flex justify-content-center align-items-center col-lg-6 col-md-12">
              <div className="col">
               <img src={login} className="img-fluid" alt="Login"/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}



