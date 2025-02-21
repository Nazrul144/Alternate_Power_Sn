import { getTestimonialData } from "@/services/testimonial";

const Testimonial = async () => {
  const data = await getTestimonialData();
  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="">
        <h1 className="text-center font-bold text-[#FF3811] mb-4">Testimonial</h1>
        <h1 className="text-center font-bold text-4xl mb-4">What Customer Says</h1>
        <p className="text-center">
          The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even
          slightly believable.{" "}
        </p>
      </div>
      <div>
        {
            data.res.map((item)=>(
                <p>Love: {item.name}</p>
            ))
        }
      </div>
    </div>
  );
};

export default Testimonial;
