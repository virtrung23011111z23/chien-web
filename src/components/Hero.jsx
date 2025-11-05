import { FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__job">SALE</div>
                <div className="hero__name">
                    Trương Chiến
                </div>
                <div className="hero__slug">
                    <span>Chuyên cung cấp phụ tùng</span> các dòng xe <span>ISUZU - SAMCO - HINO</span><br />Liên hệ: 0923.160.180
                </div>
                <Link to ="/products" className="hero__product">
                    <FaThLarge className="hero__icon"/>
                     <div className="hero__link">
                        Tất cả sản phẩm
                     </div>
                </Link>
            </div>
        </section>
    )
}