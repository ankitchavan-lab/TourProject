import { useEffect, useState, useRef } from "react";
import AuthService from "../Services/auth.service";
import React from 'react'

function Profile() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/customer/" + user.cust_Id)
      .then((res) => res.json())
      .then((result) => {
        setCustomer(result);
      });
  }, []);
  const [pack, setPackage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/package/")
      .then((res) => res.json())
      .then((result) => {
        setPackage(result);
      });
  }, []);

  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/alltours/" + user.cust_Id)
      .then((res) => res.json())
      .then((result) => {
        setBooking(result);
      });
  }, []);

  const res = pack.filter((el) => {
    return booking.find((element) => {
      return element.packageid === el.packageid;
    });
  });

  const handledelete = (passid) => {
    fetch("http://localhost:8080/canceltour/" + passid, {
      method: "Put",
    }).then(
      (r) => {
        console.log(r.json());
        alert(
          "Sucessfully Created Request for Cancel Tour.....Wait for Admin to approve"
        );
        window.location.reload();
      },
      (error) => {
        alert(error);
      }
    );

    refreshpage();
  };

  function refreshpage() {
    window.location.reload(false);
  }
  const user = AuthService.getCurrentUser();
  useEffect(() => {
    if (user.roles.includes("ROLE_ADMIN")) {
      window.location.replace("http://localhost:3000");
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          <h2 className="text-dark">Your Information</h2>
          {customer.map((cust) => (
            <>
              <div className="card1" style={{ display: "inline-block" }}>
                <table width={500}>
                  <tr id="tr1">
                    <td>Name </td>
                    <td>
                      <b>
                        {" "}
                        {cust.firstname} {cust.lastname}{" "}
                      </b>
                    </td>
                  </tr>
                  <tr id="tr">
                    <td>Email</td>
                    <td>
                      {" "}
                      <b>{cust.email}</b>
                    </td>
                  </tr>
                </table>
              </div>
            </>
          ))}
        </div>
        <hr></hr>
        <div>
        <h2 className="text-dark">Your Bookings</h2>
          {booking?.map((book,i)=> ( 
                    <div className='row d-flex' style={{margin:"20px"}}>
                      <div className="col-6 mx-auto">
                        <div className='row justify-content-center'>
                          <div class="card text-center"style={{width:"70%"}}>
                            
                            <div class="card-header" style={{color:"red" }} >
                            Booking ID:-  {book?.bookingid}
                            </div>
                            <div class="card-body">
                              
                              <h5 class="text-success" >Number of Passengers: {book?.totalpassanger}</h5>
                              <p class="card-text">Booking Date:  {book?.bookingdate}</p>
                              <p class="card-text">Amount Paid:  ₹ {book?.totalfinalcost}</p>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div> ))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
