import user_info from "../../data/user_info.js";

import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
    
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
      </h4>

    
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {user_info.contact.description}
      </p>

    
      <div className="mt-12">
     
       <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Linkedin</span>
        </a>

       <a
          href={user_info.socials.twitter}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on X</span>
        </a>
        
      

        
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      <a
        href={`mailto:${user_info.main.email}`}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{user_info.main.email}</span>
      </a>
    </section>
  );
}

export default Contact;
