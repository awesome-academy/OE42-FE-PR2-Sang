import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container'
import SwitchLang from '../switchLang/SwitchLang'
import HeaderMobile from './HeaderMobile'

import iconCareers from '../../../assets/img/recruitment_icon1.png'
import iconNews from '../../../assets/img/icon_promotion25.png'
import iconTicket from '../../../assets/img/icon_ticket25.png'
import iconAccount from '../../../assets/img/icon_login25.png'

function Header() {
    const { t } = useTranslation();
    return (
        <header className="header">
            <div className="header__top">
                <Container className="header__top-container">
                    <Link className="header__top-item" to="/">
                        <img src={iconCareers} alt="careers"/>
                        <p>{t('header.navTop.careers')}</p>
                    </Link>

                    <Link className="header__top-item" to="/">
                        <img src={iconNews} alt="news"/>
                        <p>{t('header.navTop.news_&_offers')}</p>
                    </Link>

                    <Link className="header__top-item" to="/">
                        <img src={iconTicket} alt="ticket"/>
                        <p>{t('header.navTop.my_ticker')}</p>
                    </Link>

                    <Link className="header__top-item" to="/">
                        <img src={iconAccount} alt="account"/>
                        <p>{t('header.navTop.account')}</p>
                    </Link>
                    <div className="header__top-item">
                        <SwitchLang></SwitchLang>
                    </div>
                </Container>
            </div>
            <div className="header__center">
                <Container className="header__center-container">
                    <h1 className="header__center__logo">
                        <Link to="/">
                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="logoCgv"/>
                        </Link>
                    </h1>

                    <div className="header__center__menu">
                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0">
                                {t('header.navBottom.movies.title')}
                            </Link>
                            <div className="header__center__menu-item--lvl1">
                                <Link to="/" className="lvl1-item">   
                                    <p>{t('header.navBottom.movies.now_showing')}</p>
                                </Link>
                                <Link to="/" className="lvl1-item">
                                    <p>{t('header.navBottom.movies.coming_soon')}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0">
                                {t('header.navBottom.theaters.title')}
                            </Link>
                            <div className="header__center__menu-item--lvl1">
                                <Link to="/" className="lvl1-item">   
                                    <p>{t('header.navBottom.theaters.all_cinema')}</p>
                                </Link>
                                <Link to="/" className="lvl1-item">
                                    <p>{t('header.navBottom.theaters.special_cinema')}</p>
                                </Link>
                                <Link to="/" className="lvl1-item">
                                    <p>{t('header.navBottom.theaters.opening_soon')}</p>
                                </Link>
                            </div>
                        </div>
                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0" to="/">
                                {t('header.navBottom.membership')}
                            </Link>
                        </div>

                        <div className="header__center__menu-item">
                            <Link className="header__center__menu-item--lvl0" to="/">
                                {t('header.navBottom.contact')}
                            </Link>
                        </div>
                    </div>
                    
                    <div className="header__center__search">
                        <div className="header__center__search-left">
                            <a href="https://kenhcine.cgv.vn/">
                                <img src="https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif" alt="kenhcine"/>
                            </a>
                        </div>
                        <div className="header__center__search-right">
                            <Link to="/">
                                <img src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png" alt="orderNow"/>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <HeaderMobile></HeaderMobile>
        </header>
    )
}

export default Header