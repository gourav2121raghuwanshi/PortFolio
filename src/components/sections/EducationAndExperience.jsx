import user_info from "../../data/user_info.js";
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { SiHackerrank, SiIbm } from "react-icons/si";

function EducationAndExperience() {
  return (
    <section id="education-and-experience" className="mt-20 mx-4 text-lg sm:text-2xl lg:mx-20 flex items-center justify-center flex-row  gap-4 md:gap-2">

      <div className="w-full md:w-[100%]">

        <h4 className="sm:text-3xl text-xl dark:text-white mb-4 font-bold flex gap-2 items-center">
          <FaLandmark className="text-xl text-red-800 dark:text-red-500" />
          Education
        </h4>


        {user_info.education.map((edu, index) => {
          return (
            <div key={index}>

              <div className="ps-2 my-2 first:mt-0 !mt-2">
                <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                  {edu.duration}
                </h3>
              </div>

              <div className="flex gap-x-3 relative group rounded-lg">
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-zinc-600"></div>
                  </div>
                </div>

                <div className="grow p-2 pb-8">

                  <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                    <img className="w-9 h-9 rounded-full" src={edu.image} alt="School Logo" />
                    <div className="leading-5">
                      {edu.school}

                      <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                        {edu.degree}
                      </p>
                    </div>
                  </h3>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default EducationAndExperience;
