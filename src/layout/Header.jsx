import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { MdOutlineSupportAgent, MdOutlineNavigateNext } from "react-icons/md";
import "../scss/layouts/header.scss"
import { useState } from 'react';
export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="header__container">
                <div className="header__logo"><img src="/images/logo.svg" alt="logo" /></div>
                <div className="header__content">
                    <div className="header__box">
                        <button onClick={() => setOpen(true)} className="header__container-bar">
                            <FaBars className="header__bar" />
                        </button>
                        <div className="header__page" >
                            <Link to ='/'>Trang chủ</Link>
                            <Link to ='/product'>Sản phẩm</Link>
                            <Link to ='/profile'>Hồ sơ</Link>
                            <Link to ='/contact'>Liên hệ</Link>
                        </div>
                        <div className={`header__page-fixed ${open ? "open-mobie" : ""}`} >
                            <div className="header-fixed__top">
                                <div className="header__logo"><img src="/images/logo.svg" alt="logo" /></div>
                                <button className='header-fixed__close' onClick={() => setOpen(false)}>
                                    <FaTimes className='header-fixed__close-icon' />
                                </button>
                            </div>
                            <Link className="header-fixed__link" to='/'>Trang chủ
                                <div className="header-fixed__link-icon">
                                    <MdOutlineNavigateNext />
                                </div>
                            </Link>
                            <Link className="header-fixed__link" to='/product'>Sản phẩm
                                <div className="header-fixed__link-icon">
                                    <MdOutlineNavigateNext />
                                </div>
                            </Link>
                            <Link className="header-fixed__link" to='/profile'>Hồ sơ
                                <div className="header-fixed__link-icon">
                                    <MdOutlineNavigateNext />
                                </div>
                            </Link>
                            <Link className="header-fixed__link" to='/contact'>Liên hệ
                                <div className="header-fixed__link-icon">
                                    <MdOutlineNavigateNext />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="header__change">
                        <div className="change__box chang__shopping">
                            <FaShoppingCart className='change__icon' />
                            <div className="chage__text">
                                Mua ngay
                            </div>
                        </div>
                        <div className="change__box pc">
                            <MdOutlineSupportAgent className='change__icon' />
                            <div className="change__tex">
                                Tư vấn
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}