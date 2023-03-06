import React from "react";
import '../css/NotFound.css';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
  return (
    <div id="Notfound">
        <section className="page_404">
        <div className="container">
        <div className="row"> 
        <div className="col-sm-12 ">
        <div className="col-sm-10 col-sm-offset-1  text-center">
          <h1>404</h1>
          <h2>Page Not Found</h2>
        <div className="four_zero_four_bg" >
          {/* <h1 class="text-center">404</h1> */}
    
    
    </div>
    
    <div className="contant_box_404">
    <h3 className="h2">
      کاربر محترم مشانیر
    </h3>
    
    <p>!صفحه ای که دنبالش هستید یافت نشد</p>
    
    <NavLink to="/" className="link_404">برگشت به صفحه اصلی</NavLink>
        </div>
          </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
