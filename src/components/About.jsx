import { useEffect, useState, useRef } from "react"

function UpLine(ref, width, time = 1500) {
    const element = ref.current;
    if (!element) return;
    const start = performance.now();
    const tick = () => {
        const now = performance.now();
        const progress = Math.min((now - start) / time, 1);
        const widthPart = progress * width;
        let widthStyle = widthPart + "%";
        element.style.width = widthStyle;
        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            element.style.width = width + "%"
        }
    }
    requestAnimationFrame(tick);
}
function ObserveHandle(handle, ref) {
    if (!ref || !ref.current) return () => { };
    const element = ref.current;
    const observer = new IntersectionObserver((entries) => {
        entries.map(
            entry => {
                if (entry.isIntersecting) {
                    handle();
                }
            });
    }, {
        threshold: 0.3,
        rootMargin: "0px 0px 50px 0px"
    })
    observer.observe(element);
    return () => observer.disconnect();
}
export default function About() {
    const isuzuRef = useRef(null);
    const hinoRef = useRef(null);
    const samcoRef = useRef(null);
    const company_img = useRef(null);
    const about__contentTop = useRef(null);
    const achievement__grid = useRef(null);
    const about__me = useRef(null);
    const about__imageBorder = useRef(null);
    useEffect(() => {
        ObserveHandle(() => {
            if (company_img.current) company_img.current.classList.add("active");
            if (about__contentTop.current) about__contentTop.current.classList.add("active");
            setTimeout(() => {
                UpLine(isuzuRef, 90);
                UpLine(samcoRef, 95);
                UpLine(hinoRef, 80);
            }, 1200)
        }, about__contentTop);
        ObserveHandle(() => {
            
        },about__me);
    }, [about__contentTop]);
    return (
        <div className="about">
            <div className="about__company">
                <div className="about__image-container about__image-company fale-in" ref={company_img} >
                    <div className="about__image about__image-top">
                        <img src="images/about-us-2.jpg" alt="about-us-2" />
                    </div>
                    <div className="about__image about__image-right">
                        <img src="images/about-us-3.jpg" alt="about-us-3" />
                    </div>
                </div>
                <div className="about__content about__content-top" ref={about__contentTop}>
                    <div className="about__title">
                        Công ty chúng tôi
                    </div>
                    <div className="about__desc">
                        Sứ mệnh của chúng tôi là đồng hành cùng các doanh nghiệp vận tải, đơn vị kinh doanh xe buýt và khách hàng cá nhân trong việc duy trì hiệu suất vận hành cao, tối ưu chi phí và đảm bảo an toàn cho mỗi chuyến hành trình.
                    </div>
                    <div className="about__strong" ref={achievement__grid} >
                        <div className="strong__item">
                            <div className="strong__title">
                                Isuzu
                            </div>
                            <div className="strong__line">
                                <div className="strong__line-active" ref={isuzuRef} ></div>
                            </div>
                        </div>
                        <div className="strong__item">
                            <div className="strong__title">
                                Samco
                            </div>
                            <div className="strong__line">
                                <div className="strong__line-active" ref={samcoRef} ></div>
                            </div>
                        </div>
                        <div className="strong__item">
                            <div className="strong__title">
                                Hino
                            </div>
                            <div className="strong__line">
                                <div className="strong__line-active" ref={hinoRef} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__me" ref={about__me}>
                <div className="about__image-container about__image-border">
                    <img src="images/about-us-1.jpg" alt="about-us-1" />
                </div>
                <div className="about__content about__content-bottom">
                    <div className="about__title">
                        Sứ mệnh cá nhân
                    </div>
                    <div className="about__descs">
                        <div className="about__desc">
                            Đối với tôi, người cung cấp,bán hàng phụ tùng – không chỉ đơn thuần trao tay khách hàng một linh kiện, mà còn trao gửi niềm tin vận hành.Mỗi chi tiết nhỏ mà chúng ta giới thiệu đều mang giá trị lớn: đó là sự an toàn, hiệu suất và độ bền.
                        </div>
                        <div className="about__desc">
                            Mục tiêu của tôi là giúp xe của khách hàng vận hành mượt mà, mạnh mẽ và ổn định — và qua mỗi giao dịch, chúng ta khẳng định uy tín, xây dựng niềm tin và phát triển bền vững.
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