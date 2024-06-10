import React, { Component, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";


export const Contact = () => {
    const { store, actions } = useContext(Context);
    console.log(store.demo[0].name)

  return (
    // <div className="card"  style={{width:'18rem'}}>
    //   <img className="rounded-circle" src={rigoImage} />
    //   <div className="card-body">
    //     <h5 className="card-title">Mike Anamendolla</h5>
    //     <p className="card-text">
    //       direccion
    //     </p>
    //     <p className="card-text">
    //       telefono
    //       </p>
    //       <p className="card-text">
    //       email
    //       </p>
    //     <a href="#" className="btn btn-primary">
    //       Go somewhere
    //     </a>
    //   </div>
    // </div>
    <div className="d-flex justify-content-between border py-3 px-5 m-5">
      <div className="d-flex">
        <div className="me-5">
          <img className="rounded-circle" src={rigoImage} />
        </div>
        <div>
          <p>{store.demo[0].name}</p>
          <p>{store.demo[0].address}</p>
          <p>{store.demo[0].phone}</p>
          <p>{store.demo[0].email}</p>
        </div>
      </div>
      <div>botones</div>
    </div>
  );
};
