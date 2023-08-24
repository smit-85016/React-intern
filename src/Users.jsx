// import React, { useState } from 'react'
// import './User.css';    

// const Users = () => {

//     const [data, setData] = useState();
//     const getData = () => {
//         fetch('https://dummyjson.com/users')
//         .then(res => res.json())
//         .then(json => setData(json.users))
//     }
//     getData()



//     return (
//         <>
//         <div >Users</div>
//         {
//             data?.map(( user ) => (
//                 <div>
//                     {user.id}
//                     <img src={user.image} alt='photos' 
//                     style={{height:'100px'}} />
//                   {user.firstName} {user.lastName} {user.age} {user.email} {user.username} {user.birthDate} {user.bloodGroup} 
//                 </div>
//             ))

//         }
//         </>
//     )
// }

// export default Users


import React, { useState, useEffect } from 'react';
import './User.css';    

const Users = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(json => setData(json.users))
    }, []);

    return (
        <div className="user-container">
            <h2>Users</h2>
            <div className="user-list">
                {data.map((user) => (
                    <div key={user.id} className="user-card">
                        <img src={user.image} alt='User' className="user-image" />
                        <div className="user-details">
                            <p className="user-name">{user.firstName} {user.lastName}</p>
                            <p className="user-info">Age: {user.age}</p>
                            <p className="user-info">Email: {user.email}</p>
                            <p className="user-info">Phone: {user.phone}</p>
                            <p className="user-info">Username: {user.username}</p>
                            <p className="user-info">Birth Date: {user.birthDate}</p>
                            <p className="user-info">Blood Group: {user.bloodGroup}</p>
                            <p className="user-info">Address: {user.address.address}, {user.address.city}, {user.address.postalCode}, {user.address.state}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
