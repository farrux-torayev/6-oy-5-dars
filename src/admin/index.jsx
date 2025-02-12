import axios from "axios";
import { toast } from "react-toastify";

const Admin = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.values = "";
    console.log(formData);

    try {
      const res = await axios.post("http://localhost:5000/products", formData);
      toast("Muvaffaqiyatli qo'shdingiz");
    } catch (err) {
      toast.error(err?.response.data.message);
    }
  }

  return (
    <div className="m-auto w-[350px] h-[500px] border my-[50px]">
      <form onSubmit={handleSubmit} className="flex flex-col" action="">
        <h1 className="text-center my-[15px]">Admin</h1>
        <input
          className=" ml-[20px] border outline-none pl-[10px] rounded-[5px] w-[300px] h-[30px]"
          type="text"
          placeholder="Enter name"
          name="name"
        />
        <br />
        <input
          className=" ml-[20px] border outline-none pl-[10px] rounded-[5px] w-[300px] h-[30px]"
          type="text"
          placeholder="Enter category"
          name="category"
        />{" "}
        <br />
        <input
          className=" ml-[20px] border outline-none pl-[10px] rounded-[5px] w-[300px] h-[30px]"
          type="number"
          placeholder="Enter price"
          name="price"
        />{" "}
        <br />
        <textarea
          className=" ml-[20px] border outline-none pl-[10px] w-[300px] h-[30px]"
          type="description"
          placeholder="Enter description"
          name="description"
          cols="30"
        />
        <br />
        <input
          className=" ml-[20px] border outline-none pl-[10px] rounded-[5px] w-[300px] h-[30px]"
          type="file"
          placeholder="Enter image"
          name="image"
        />{" "}
        <br />
        <input
          className=" ml-[20px] border outline-none pl-[10px] rounded-[5px] w-[300px] h-[30px]"
          type="number"
          placeholder="Enter stock"
          name="stock"
        />{" "}
        <br />
        <input
          className=" ml-[20px] border outline-none pl-[10px] rounded-[5px] w-[300px] h-[30px]"
          min={0}
          max={5}
          type="number"
          placeholder="Enter rating"
          name="rating"
        />{" "}
        <br />
        <div className="flex justify-center h-[30px] my-[10px]">
          <button className="border w-[300px] bg-green-700 text-white rounded-[10px]">
            Add Product{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Admin;
