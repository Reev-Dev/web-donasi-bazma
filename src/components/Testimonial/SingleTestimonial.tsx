import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({
  name,
  designation,
  content,
  image,
  star,
}: Testimonial) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col flex-grow rounded-sm bg-white p-8 shadow-lg transition justify-between duration-300 hover:shadow-xl lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1 text-yellow-500">
          {[...Array(star)].map((_, index) => (
            <span key={index} className="text-yellow">
              {starIcon}
            </span>
          ))}
        </div>
        <p className="mb-8 pb-8 text-base leading-relaxed text-body-color">
          "{content}"
        </p>
        <div className="flex border-t border-body-color border-opacity-10 pt-8 align-center">
          <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
