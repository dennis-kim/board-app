import React from 'react';

import '@style/reset.css';
import '@style/index.css';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

import Gallery01 from '@images/p_images/gallery_01.jpg';
import Gallery02 from '@images/p_images/gallery_02.jpg';
import W3cLogo from '@images/s_images/w3c_logo.png';
import JsLogo from '@images/s_images/js_logo.png';
import HtmlLogo from '@images/s_images/html_logo.png';
import CssLogo from '@images/s_images/css_logo.png';
import SocialIcon01 from '@images/s_images/social_icon_01.png';
import SocialIcon02 from '@images/s_images/social_icon_02.png';
import SocialIcon03 from '@images/s_images/social_icon_03.png';


const Main = () => {

    return (
        <>
            <div id="wrap">
                <Header />


                {/* 슬라이더 영역 */}
                <section className="slider_section">
                    <span className="prev_btn">
                        이전 버튼
                    </span>
                    <span className="next_btn">
                        다음 버튼
                    </span>
                </section>

                {/* 최근글 영역 */}
                <section className="latest_post_section">
                    <h2 className="title">최근 글</h2>
                    <ul className="latest_post_list">
                        <li>
                            <a href="">안녕하세요 홈페...</a>
                        </li>
                        <li>
                            <a href="">홈페이지 리뉴얼..</a>
                        </li>
                        <li>
                            <a href="">flat design은..</a>
                        </li>
                        <li>
                            <a href="">blog에서 다양한..</a>
                        </li>
                        <li>
                            <a href="">저는 누굴까...</a>
                        </li>
                    </ul>
                </section>


                {/* 인기글 영역 */}
                <section className="popular_post_section">
                    <h2 className="title">인기글</h2>
                    <ul className="popular_post_list">
                        <li>
                            <a href="">안녕하세요 홈페...</a>
                        </li>
                        <li>
                            <a href="">홈페이지 리뉴얼..</a>
                        </li>
                        <li>
                            <a href="">flat design은..</a>
                        </li>
                        <li>
                            <a href="">blog에서 다양한..</a>
                        </li>
                        <li>
                            <a href="">저는 누굴까...</a>
                        </li>
                    </ul>
                </section>

                {/* 갤러리 영역 */}
                <section className="gallery_section">
                    <ul className="gallery_list">
                        <li>
                            <a href="">
                                <figure>
                                    <img src={Gallery01} alt=""/>
                                    <figcaption>디자인 트렌트 플랫</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <figure>
                                    <img src={Gallery02} alt=""/>
                                    <figcaption>원색이 포인트 플랫</figcaption>
                                </figure>
                            </a>
                        </li>
                    </ul>
                </section>

                {/* 인기 검색어 영역 */}
                <section className="rankup_section">
                    <h2 className="title">인기 검색어</h2>
                    <ul className="rankup_list">
                        <li>
                            <a href="">반응형 웹</a>
                        </li>
                        <li>
                            <a href="">미디어 쿼리</a>
                        </li>
                        <li>
                            <a href="">뷰포트</a>
                        </li>
                        <li>
                            <a href="">CSS 트릭스</a>
                        </li>
                        <li>
                            <a href="">W3C</a>
                        </li>
                        <li>
                            <a href="">루크 W</a>
                        </li>
                        <li>
                            <a href="">클리어 보스</a>
                        </li>
                        <li>
                            <a href="">XE</a>
                        </li>
                        <li>
                            <a href="">워드프레스</a>
                        </li>
                    </ul>
                </section>

                {/* 배너 영역 */}
                <section className="banner_section">
                    <div className="banner_box_01">
                        <a href="">
                            <img src={W3cLogo} alt=""/>
                        </a>
                    </div>
                    <div className="banner_box_02">
                        <ul className="banner_list">
                            <li>
                                <a href="">
                                    <img src={JsLogo} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={HtmlLogo} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={CssLogo} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 소셜 네트워크 영역 */}
                <section className="social_section">
                    <ul className="social_list">
                        <li>
                            <a href="">
                                <img src={SocialIcon01} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={SocialIcon02} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={SocialIcon03} alt=""/>
                            </a>
                        </li>
                    </ul>
                </section>

                <Footer />

            </div>

        </>
    )
}

export default Main;