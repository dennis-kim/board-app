import React from 'react';

// 이미지 파일
import InfoIcon01 from '@images/s_images/info_icon_01.png';
import InfoIcon02 from '@images/s_images/info_icon_02.png';
import InfoIcon03 from '@images/s_images/info_icon_03.png';
import InfoIcon04 from '@images/s_images/info_icon_04.png';

const Header = () => {

    return (
        <>
            {/* 인포메이션 영역 */}
            <section className="info_section">
            <ul className="info_list">
                <li>
                    <a href="index.html"><img src={InfoIcon01} alt=""/></a>
                </li>
                <li>
                    <a href=""><img src={InfoIcon02} alt=""/></a>
                </li>
                <li>
                    <a href=""><img src={InfoIcon03} alt=""/></a>
                </li>
                <li>
                    <a href=""><img src={InfoIcon04} alt=""/></a>
                </li>
            </ul>
            </section>

            {/* 헤더 영역 */}
            <header className="header">
            <h1 className="logo">
                <a href="index.html">flat<br/>design</a>
            </h1>
            <nav className="nav">
                <ul className="gnb">
                    <li>
                        <a href="index.html">홈</a>
                        <span className="sub_menu_toggle_btn">하위 메뉴 토글 버튼</span>
                    </li>
                    <li>
                        <a href="introduce.html">플랫 디자인이란?</a>
                        <span className="sub_menu_toggle_btn">하위 메뉴 토글 버튼</span>
                    </li>
                    <li>
                        <a href="gallery.html">갤러리</a>
                        <span className="sub_menu_toggle_btn">하위 메뉴 토글 버튼</span>
                    </li>
                    <li>
                        <a href="board.html">문의사항</a>
                        <span className="sub_menu_toggle_btn">하위 메뉴 토글 버튼</span>
                    </li>
                </ul>
            </nav>
            <span className="menu_toggle_btn">전체 메뉴 토글 버튼</span>
            </header>
        </>
    )
}

export default Header;