import { IconBrandLinkedin } from "@tabler/icons-react";
import { Info, socialLinks} from "../User";

const Footer=()=>{
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out">
        <socialLink.icon stroke={1.5}  size={25} />
    </a>
    })
    return <div><div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
<a href="https://www.linkedin.com/in/kirti-pandey-b0066124a/"><div className="text-3xl md:text-2xl text-primaryColor flex items-center">{Info.name}<IconBrandLinkedin size={30} className="ml-2"/></div></a>
        <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcons}</div>
        <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span></div>
        
    </div>
    </div>
    
}
export default Footer;



// import { IconBrandLinkedin } from "@tabler/icons-react";
// import { Info, socialLinks } from "../User";


// const Footer = () => {
//     // Create social media icons
//     const socialIcons = socialLinks.map((socialLink, index) => {
//         return (
//             <a
//                 key={index}
//                 href={socialLink.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-mono text-lg hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out"
//             >
//                 <socialLink.icon stroke={1.5} size={25} />
//             </a>
//         );
//     });

//     // Function to handle chatbot launch
//     const handleChatbotClick = () => {
//         // Open chatbot window or trigger chatbot logic
//         window.open('https://your-chatbot-url.com', '_blank');
//     };

//     return (
//         <div>
//             <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
//                 <a href="https://www.linkedin.com/in/kirti-pandey-b0066124a/">
//                     <div className="text-3xl md:text-2xl text-primaryColor flex items-center">
//                         {Info.name}
//                         <IconBrandLinkedin size={30} className="ml-2" />
//                     </div>
//                 </a>
//                 <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6">
//                     {socialIcons}
//                 </div>
//                 <div className="text-textColor text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">
//                     Copyright &copy; {new Date().getFullYear()} {Info.name} <span className="xs-mx:hidden">|</span> <span>All Rights Reserved</span>
//                 </div>
//             </div>
//             <div className="fixed bottom-4 right-4">
//                 <button 
//                     onClick={handleChatbotClick}
//                     className="bg-primaryColor text-white p-3 rounded-full shadow-lg hover:bg-primaryDark transition duration-300"
//                 >
//                    hiiiiii
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Footer;
