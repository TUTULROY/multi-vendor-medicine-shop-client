

const Footer = () => {
    return (
        <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
  <img className="w-1/5 rounded-full" src="/public/logo.jpg" alt="" />
  <p className="text-xl uppercase font-bold"> <span className="text-green-500">T.R</span> <span className="text-blue-500">Medicine Shop</span> </p>
    <p>T.R Industries Ltd.<br/>Providing reliable tech since 2021</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
<div className="text-center">
        <aside className=" items-center grid-flow-col">
         
        <p>Copyright © 2024 - All right reserved</p>
      </aside> 
      </div>
</div>

    );
};

export default Footer;