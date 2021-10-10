import React from 'react';

function Contact() {
    return (
      <div>
        <h2 style={{color:"blue"}}>
            Contact
        </h2> 
        <p style={{color:"green"}}>
            email: kkaur@emich.edu
        </p>
      </div>  

    );
 }

function Address() {
  return (
    <div>
      <h2 style={{color:"blue"}}>
          Address    
      </h2> 
      <p style={{color:"green"}}>
         Canton, MI 48188
      </p>
    </div>  

  );

}
  

export {Address, Contact};
export default Contact;