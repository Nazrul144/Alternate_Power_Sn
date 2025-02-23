import axios from "axios";

export const getServicesAllData = async()=>{
    try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`
        )
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}



export const getServicesDetails = async(id)=>{
  try {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`
    )
    return res.data;
  } catch (error) {
    return {}
  }
}


// const res = await fetch('http://localhost:3000/services/api/get-all')
//     const services = res.json()
//     return services;


//Details:
// const res = await fetch(`http://localhost:3000/services/api/${id}`)
// const service = res.json()
// return service;
