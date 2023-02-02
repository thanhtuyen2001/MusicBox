import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { logo_removebg } from '../assets';

const company = ['About', 'Jobs', 'For the Record'];
const communities = [
  'For Artists',
  'Developers',
  'Brands',
  'Investors',
  'Vendors',
];
const usefulLinks = ['Helps', 'Web Player', 'Free Mobile App'];

const Footer = () => (
  <div className="flex justify-between p-4 mt-12 bg-movingStar font-Roboto">
    <div className="flex gap-12">
      {/* logo */}
      <div>
        <img src={logo_removebg} alt="logo" className="w-60 " />
      </div>
      {/* link */}
      <div>
        <div className="text-lg text-slate-300 pr-10 font-Roboto font-medium mb-1 border-b ">COMPANY</div>
        <div className="fex flex-col gap-3 text-slate-400 mx-1 cursor-pointer ">
          {company.map((item, i) => (
            <p key={i} className="my-1 hover:pl-2 hover:text-slate-100 hover:shadow-md  transition-all">{item}</p>
          ))}
        </div>
      </div>

      <div>
        <div className={styleTitle}>COMMUNITIES</div>
        <div className={styleSndTitle}>
          {communities.map((item, i) => (
            <p key={i} className={styleLink}>{item}</p>
          ))}
        </div>
      </div>

      <div>
        <div className={styleTitle}>USEFUL LINKS</div>
        <div className={styleSndTitle}>
          {usefulLinks.map((item, i) => (
            <p key={i} className={styleLink}>{item}</p>
          ))}
        </div>
      </div>
    </div>
    {/* social media */}
    <div className="flex gap-6 text-3xl mr-12 text-slate-400">
      <BsInstagram />
      <BsFacebook />
      <BsTwitter />
    </div>
  </div>
);

export default Footer;

const styleTitle = 'text-lg text-slate-300 pr-10 font-Roboto font-medium mb-1 border-b';
const styleSndTitle = 'fex flex-col gap-3 text-slate-400 mx-1 cursor-pointer ';
const styleLink = 'py-1 hover:pl-2 hover:text-slate-100  transition-all hover:shadow-lg';
