export const getTestimonialData = async()=>{
    const res = await fetch('http://localhost:3000/testimonial/api')
    const data = await res.json()
    return data;
}