import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


export default function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
       
        <Footer.Divider />
        <div className="w-full place-content-center">
          <Footer.Copyright href="#" by="Team 2" year={2024} />
          <div className="mt-4 flex justify-center place-content-center">
            <Footer.Icon className="footer-icon" href="#" icon={BsFacebook} />
            <Footer.Icon className="footer-icon" href="#" icon={BsInstagram} />
            <Footer.Icon className="footer-icon" href="#" icon={BsTwitter} />
            <Footer.Icon className="footer-icon" href="#" icon={BsGithub} />
            <Footer.Icon className="footer-icon" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}