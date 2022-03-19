import React, {FormEvent, ChangeEvent,Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { Construction, Password } from '@mui/icons-material';
import useWindowWidthBreakpoints from 'use-window-width-breakpoints';
import { error } from 'console';

type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T; 
  }
class SignIn extends Component <any,any> {

constructor(props: any){
        super(props);
        this.state = this.initialState;
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
}

initialState ={
        email:'', password:''
}
    
emailChange = (event: { target: { name: any; value: any; }; }) =>
  {
   this.setState({[event.target.name]:event.target.value});
  }
  passwordChange = (event: { target: { name: any; value: any; }; }) =>
  {
    this.setState({[event.target.name]:event.target.value});
  }
    Registration = (event: { preventDefault: () => void; }) =>
  {
    
    event.preventDefault();
    
    const user = {
        username: this.state.email,
        password: this.state.password
        };
    const data ={
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "x-access-token": "token-value",
        },
        body: JSON.stringify(user),
    };

    fetch("http://localhost:8080/user/save",data)
    .then((res)=>{
        return res.json();
    })
    .then((res) =>{
        alert("User added Successfully");
    })
     .catch((error)=> {    
        alert("User not added");
        console.log(error);
    }); 
  }

  Login = (event: { preventDefault: () => void; }) =>
  {
    event.preventDefault()
    const user = {
        username: this.state.email,
        password: this.state.password
        };
        const data ={
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify(user),
        };
        
        fetch("http://localhost:8080/user/check",data)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
        if(res.newUser === false){
            alert("User Exist");
        }
        alert("User is a ghost");
        })
         .catch((error)=> {
            console.log(error);
        });
  };
   
    render() {
           const {email,password} = this.state;
        return(
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 w-full h-20 shadow-2xl">
        <div className="container flex flex-wrap justify-between items-center mx-auto">  
          <a href="#" className="flex items-center">
            <img src="https://img.icons8.com/ios-filled/50/000000/car.png" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white italic">CleanMyCar</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-green-400 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-400 dark:hover:bg-blue-700 ">Get started</button>
            <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-green-400 rounded md:bg-transparent md:text-green-400 md:p-0
                 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                 md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                 md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                 md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center" data-collapse-toggle="mobile-menu-4">
        <div className="bg-white flex w-2/3 max-w-4xl shadow-lg shadow-green-300">
          <div className="w-2/5 p-5 bg-green-400 py-36 px-12">
            <img className="place-items-center" src="https://img.icons8.com/ios-filled/50/000000/car.png" />
            <h2 className="text-3xl font-bold italic mb-2">CleanMyCar</h2>
            <div className="border-2 w-20 border-black inline-block mb-2"></div>
            <p className="mb-4">Jamaica's first waterless car cleaning company</p>
          </div>
          <div className="w-3/5">
            <div className="py-10">
              <h2 className="font-bold text-3xl mb-10 mt-5 my-2"> Log In</h2>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-5">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input type="email" name="email" placeholder="joe@email.com" value={email} onChange = {this.emailChange} className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-5">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input type="password" name="password" placeholder="password" value={password} onChange ={this.passwordChange} className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className=" flex justify-between w-64 mb-5">
                  <a href="#" className="border-2 border-black rounded full px-10 py-2 inline-block font-semibold
                  hover:bg-green-400 hover:text-white" onClick ={this.Registration} >Add</a>
                  <a href="#" className="border-2 border-black rounded full px-8 py-2 inline-block font-semibold
                  hover:bg-green-400 hover:text-white" onClick ={this.Login}>Check</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    );
    }
}
export default SignIn;