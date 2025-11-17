
export default function About() {
    return (
        <div className="about">
            <div className="about__company">
                <div className="about__image-container about__image-company">
                    <div className="about__image about__image-top">
                        <img src="images/about-us-2.jpg" alt="about-us-2" />
                    </div>
                    <div className="about__image about__image-right">
                        <img src="images/about-us-3.jpg" alt="about-us-3" />
                    </div>
                </div>
                <div className="about__content about__content-top">
                    <div className="about__title">
                        Công ty chúng tôi
                    </div>
                    <div className="about__desc">
                        Themesberg là một nhóm gồm các nhà thiết kế,
                    </div>
                    <div className="about__strong">
                        <div className="strong__item">
                            <div className="strong__title">
                                Isuzu
                            </div>
                            <div className="strong__line">
                                <div className="strong__line-bg"></div>
                                <div className="strong__line-active"></div>
                            </div>
                        </div>
                        <div className="strong__item">
                            <div className="strong__title">
                                Samco
                            </div>
                            <div className="strong__line">
                                <div className="strong__line-bg"></div>
                                <div className="strong__line-active"></div>
                            </div>
                        </div>
                        <div className="strong__item">
                            <div className="strong__title">
                                Hino
                            </div>
                            <div className="strong__line">
                                <div className="strong__line-bg"></div>
                                <div className="strong__line-active"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__me">
                <div className="about__image-container about__image-border">
                    <img src="images/about-us-1.jpg" alt="about-us-1" />
                </div>
                <div className="about__content about__content-bottom">
                    <div className="about__title">
                        Công ty chúng tôi
                    </div>
                    <div className="about__descs">
                        <div className="about__desc">
                            Themesberg là một nhóm gồm các nhà thiết kế,
                        </div>
                        <div className="about__desc">
                            Themesberg là một nhóm gồm các nhà thiết kế,
                        </div>
                    </div>
                    <div className="about__sigture">
                        <img src="images/signature.svg" alt="signature" />
                    </div>
                </div>
            </div>
        </div>
    )
}