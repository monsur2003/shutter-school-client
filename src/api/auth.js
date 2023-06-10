// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { Swal } from "sweetalert2/dist/sweetalert2";

// export const saveUser = (user) => {
//    const navigate = useNavigate();
//    const saveUser = {
//       name: user.displayName,
//       email: user.email,
//       photoUrl: user.photoURL,
//       role: "student",
//    };

//    fetch("http://localhost:5000/users", {
//       method: "POST",
//       headers: {
//          "content-type": "application/json",
//       },
//       body: JSON.stringify(saveUser),
//    })
//       .then((res) => res.json())
//       .then((data) => {
//          console.log(data);
//          if (data.insertedId) {
//             toast("account created successfully");
//             navigate("/");
//          }
//       });
// };

// // add class post api methods

// // const addClass = (data)=>{

// // }
