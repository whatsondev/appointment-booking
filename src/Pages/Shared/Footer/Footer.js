import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Twitter, Facebook, Instagram, LinkedIn, GitHub, Pinterest, Reddit, Telegram, YouTube,  } from '@mui/icons-material';



import white from '../../../assets/images/footer logo.png';

const Footer = () => {
    return (
        <footer className='max-w-[1440px] footer-bg container'>
            <div className="footer">
                <div>
                    <span className="footer-title">
                        <img src={white} className="max-w-sm rounded-lg w-56	h-auto" alt='logo' />
                    </span>
                    <Link to="/" className="link left-side-f link-hover">Whaton agency is a Digital and <br></br>IT Company.</Link>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Web Design & Development</Link>
                    <Link to="/" className="link link-hover">Web Application</Link>
                    <Link to="/" className="link link-hover">eCommerce Solution</Link>
                    <Link to="/" className="link link-hover">Domain & Hosting</Link>
                    <Link to="/" className="link link-hover">Social Media Marketing</Link>
                    <Link to="/" className="link link-hover">Email Marketing</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Careers</Link>
                    <Link to="/" className="link link-hover">Press</Link>
                    <Link to="/" className="link link-hover">News</Link>
                    <Link to="/" className="link link-hover">Media kit</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to="/" className="link link-hover">New York - 101010 Hudson</Link>
                    <Link to="/" className="link link-hover">contact@whaton.agency</Link>
                </div>
            </div>

            <hr className='divider-bottom container md:justify-center md:items-center'></hr>
            <div className='max-w-[1200px] footer-bottom container'>
                <p className='social-icons'>
                    &copy; 2023 Whatson All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://twitter.com">
                        <Twitter />
                    </a>
                    <a href="https://facebook.com">
                        <Facebook />
                    </a>
                    <a href="https://instagram.com">
                        <Instagram />
                    </a>
                    <a href="https://linkedin.com/">
                        <LinkedIn />
                    </a>
                    <a href="https://github.com/">
                        <GitHub />
                    </a>
                    <a href="https://pinterest.com/">
                        <Pinterest />
                    </a>
                    <a href="https://reddit.com/">
                        <Reddit />
                    </a>
                    <a href="https://telegram.org/">
                        <Telegram />
                    </a>
                    <a href="https://youtube.com">
                        <YouTube />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;