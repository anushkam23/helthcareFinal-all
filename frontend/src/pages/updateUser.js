// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import React, { useState } from 'react';

// function UpdateUser(){
//     const location=useLocation();
//     const [fname,setFname]=useState("");
//     const [lname,setLname]=useState("");
//     const [email,setEmail]=useState("");

//     useEffect(()=>{
//         console.log(location);
//         setFname(location.state.fname);
//         setLname(location.state.lname);
//         setEmail(location.state.email);
//     },[])
//     return(
//         <div className="auth-wrapper">
//             <div className="auth-inner">
            
//             First Name <br/>
//             <input placeholder="First Name" className="form-control" defaultValue={fname} /> <br/>
//             Last Name <br/>
//             <input placeholder="Last Name" className="form-control" defaultValue={lname} /> <br/>
//             Email<br/>
//             <input placeholder="email" className="form-control" disabled defaultValue={email} /> <br/>
//             <button>Update Details</button>
//             <div>
//                 Hii
//             </div>
//             </div> 
//         </div>
//     )
// }
// export default UpdateUser;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function UpdateUser() {
//     const location = useLocation();
//     const [id, setId] = useState("");
//     const [fname, setFname] = useState("");
//     const [lname, setLname] = useState("");
//     const [email, setEmail] = useState("");

//     useEffect(() => {
//         if (location.state) {
//             setId(location.state._id || "");
//             setFname(location.state.fname || "");
//             setLname(location.state.lname || "");
//             setEmail(location.state.email || "");
//         }
//     }, [location.state]);

//     const updateData=()=>{
//         console.log(fname,lname);
//         fetch("http://localhost:5000/updateUser", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//               "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//                 id:id,
//                 // id:location.state._id,
//                 fname:fname,
//                 lname:lname
//             //   token: window.localStorage.getItem("token"),
//             }),
//           })
//             .then((res) => res.json())
//             .then((data) => {
//               console.log(data);
//               window.location.href="/userHome"
//             //   setUserData(data.data);
//             });

//     }

//     return (
//         <div className="auth-wrapper">
//             <div className="auth-inner">
//                 First Name <br />
//                 <input placeholder="First Name" className="form-control" 
//                 defaultValue={fname} 
//                 onChange={(e) => setFname(e.target.value)} /> <br />
                
//                 Last Name <br />
//                 <input placeholder="Last Name" className="form-control" defaultValue={lname} onChange={(e)=>setLname(e.target.value)} /> <br />
//                 Email<br />
//                 <input placeholder="Email" className="form-control" disabled defaultValue={email} /> <br />
//                 <button onClick={updateData}>Update Details</button>
//             </div>
//         </div>
//     );
// }

// export default UpdateUser;








// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function UpdateUser() {
//     const location = useLocation();
//     const [id, setId] = useState("");
//     const [fname, setFname] = useState("");
//     const [lname, setLname] = useState("");
//     const [email, setEmail] = useState("");

//     useEffect(() => {
//         if (location.state) {
//             setId(location.state._id || "");
//             setFname(location.state.fname || "");
//             setLname(location.state.lname || "");
//             setEmail(location.state.email || "");
//         }
//     }, [location.state]);

//     const updateData = async () => {
//         try {
//             const response = await fetch("http://localhost:5000/updateUser", {
//                 method: "POST",
//                 crossDomain: true,
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                     "Access-Control-Allow-Origin": "*",
//                 },
//                 body: JSON.stringify({
//                     id: id,
//                     fname: fname,
//                     lname: lname,
//                 }),
//             });

//             if (!response.ok) {
//                 const error = await response.text();
//                 throw new Error(error);
//             }

//             const data = await response.json();
//             console.log(data);

//             if (data.status === "ok") {
                
//                 window.location.href = "/userHome";
//             } else {
//                 console.error("Failed to update user details:", data);
//             }
//         } catch (error) {
//             console.error("Error while updating user details:", error);
//         }
//     };

//     return (
//         <div className="auth-wrapper">
//             <div className="auth-inner">
//                 <div>
//                     First Name <br />
//                     <input
//                         placeholder="First Name"
//                         className="form-control"
//                         value={fname}
//                         onChange={(e) => setFname(e.target.value)}
//                     />
//                     <br />
//                     Last Name <br />
//                     <input
//                         placeholder="Last Name"
//                         className="form-control"
//                         value={lname}
//                         onChange={(e) => setLname(e.target.value)}
//                     />
//                     <br />
//                     Email<br />
//                     <input
//                         placeholder="Email"
//                         className="form-control"
//                         value={email}
//                         disabled
//                     />
//                     <br />
//                     <button onClick={updateData}>Update Details</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UpdateUser;











import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location.state) {
            setId(location.state._id || "");
            setFname(location.state.fname || "");
            setLname(location.state.lname || "");
            setEmail(location.state.email || "");
        }
    }, [location.state]);

    const updateData = async () => {
        try {
            const response = await fetch("http://localhost:5000/updateUser", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    id: id,
                    fname: fname,
                    lname: lname,
                }),
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error(error);
            }

            const data = await response.json();
            console.log(data);

            if (data.status === "ok") {
                // Show alert
                alert("Profile has been edited.");
                // Redirect to userDetails page
                navigate('/userDetails');
            } else {
                console.error("Failed to update user details:", data);
            }
        } catch (error) {
            console.error("Error while updating user details:", error);
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h2>Edit Profile</h2>
                First Name <br />
                <input placeholder="First Name" className="form-control" 
                    value={fname} 
                    onChange={(e) => setFname(e.target.value)} /> <br />
                
                Last Name <br />
                <input placeholder="Last Name" className="form-control" 
                    value={lname} 
                    onChange={(e) => setLname(e.target.value)} /> <br />
                Email<br />
                <input placeholder="Email" className="form-control" 
                    value={email} 
                    disabled /> <br />
                <button onClick={updateData}>Update Details</button>
            </div>
        </div>
    );
}

export default UpdateUser;
