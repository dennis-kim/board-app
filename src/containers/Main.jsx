import React from 'react';
import Helmet from 'react-helmet';
import '@style/reset.css';
import '@style/index.css';

const Main = () => {


    return (
        <>
            <Helmet 
                meta={[
                    { charset: "UTF-8" },
                    { name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" }
                ]}
            />

            <div id="wrap">
                <section class="info_section">
                    <ul class="info_list">
                        <li>
                            <a href="index.html"><img src="@images/s_images/info_icon_01.png" alt=""/></a>
                        </li>
                        <li>
                            <a href=""><img src="@images/s_images/info_icon_02.png" alt=""/></a>
                        </li>
                        <li>
                            <a href=""><img src="@images/s_images/info_icon_03.png" alt=""/></a>
                        </li>
                        <li>
                            <a href=""><img src="@images/s_images/info_icon_04.png" alt=""/></a>
                        </li>
                    </ul>
                </section>

            </div>

        </>
    )
}

export default Main;