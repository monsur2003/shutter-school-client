import axios from "axios";
import Title from "../../../../Components/Title/Title";
import useClass from "../../../../Hook/useClass";
import SelectedCard from "./SelectedCard";

const MySelectedClass = () => {
   const [myClasses, refetch] = useClass();
   const handleDelete = (id) => {
      console.log(id);
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         fetch(`http://localhost:5000/selectedClass/${id}`, {
            method: "delete",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount > 0) {
                  refetch();
                  Swal.fire(
                     "Deleted!",
                     "Your file has been deleted.",
                     "success"
                  );
               }
            });
      });
   };

   return (
      <div>
         <div className=" flex justify-center items-center flex-col">
            {myClasses.map((singleClass) => (
               <SelectedCard
                  key={singleClass._id}
                  singleClass={singleClass}
                  handleDelete={handleDelete}></SelectedCard>
            ))}
         </div>
      </div>
   );
};

export default MySelectedClass;
