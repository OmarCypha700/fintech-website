import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <>
      <div className=" py-4 px-2 md:p-6 flex flex-col md:flex-row gap-24 justify-center items-center">
        <div className="">
          <h1 className="font-semibold">LOGO</h1>
        </div>
        <div className="flex flex-wrap items-start gap-12 md:px-12 justify-evenly">
          <div className=" md:p6">
            <ul>
              <li className="font-semibold">Company</li>
              <li className="nav-link">About Us</li>
              <li className="nav-link">Blog</li>
              <li className="nav-link">Pricing</li>
              <li className="nav-link">Features</li>
              <li className="nav-link">FAQ</li>
            </ul>
          </div>
          <div className=" md:p6">
            <ul>
              <li className="font-semibold">
                Follow Us
              </li>

              <li className="flex gap-1 items-center">
                <Icon icon="ph:instagram-logo" inline={true} />
                IG
                </li>

              <li className="flex gap-1 items-center">
                <Icon icon="ri:facebook-box-fill" inline={true} />
                Facebook
                </li>

              <li className="flex gap-1 items-center"> 
                <Icon icon="mdi:twitter" inline={true} />
                Twitter
              </li>
              <li className="flex gap-1 items-center">
                <Icon icon="carbon:logo-linkedin" inline={true} />
                LinkedIn
                </li>
            </ul>
          </div>
          <div className=" md:p6">
            <ul>
              <li className="font-semibold">Get In Touch</li>
              <li>contactus@gmail.com</li>
              <li>+************</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
