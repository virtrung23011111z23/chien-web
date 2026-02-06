import { Icons } from "../constants/icon.contant";
import { products } from "../data/products.data"

function ProductItem({ img, name, desc }) {
    const startList = [];
    for (let i = 0; i < 5; i++) {
        startList.push(
            <div key={i} className="product__start">
                {Icons["star"]}
            </div>
        )
    }
    let imgPart = "images/" + (img ? img.trim().replace(/^[/\\]+/, "") : "");
    return (
        <div className="product__item">
            <div className="product__img">
                <img src={imgPart} alt={name} />
            </div>
            <div className="product__name">
                {name}
            </div>
            <div className="product__mid">
                 <div className="box-product__info">
                            <div className="box-product__avatar">
                                <img src="images/avatar.png" alt="avatar" />
                            </div>
                            <div className="box-product__name">
                                Tiến Trung
                            </div>
                        </div>
                <div className="product__start-list">
                    {startList}
                </div>
            </div>
            <div className="product__desc">
                {desc}
            </div>
            <div className="product__item-bottom">
                <div className="product__button">
                    <div className="product__button-text">
                        Liên hệ
                    </div>
                    <div className="product__icon">
                        {Icons["external"]}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Product() {
    return (
        <div className="product">
            <div className="product__heading">
                Phụ tùng của chúng tôi
            </div>
            <div className="product__slug">
                Với kinh nghiệm lâu năm trong ngành cơ khí giao thông và vận tải, chúng tôi cam kết mang đến cho khách hàng giải pháp phụ tùng chất lượng cao, độ bền vượt trội và khả năng cung ứng nhanh chóng.
            </div>
            <div className="product__box">
                <div className="box-product__img">
                    <img src="images/product_home.png" alt="product home" />
                </div>
                <div className="box-product__content">
                    <div className="box-product__title">
                        Biến chuyến đi của bạn thành kỷ niệm
                    </div>
                    <div className="box-product__desc">
                        Tôi luôn muốn có thể cung cấp những phụ tùng, linh kiện tốt nhất, đúng thời điểm với mức giá hợp lý để có thể biến chuyến đi công việc mỗi ngày của bạn thành một hành trình của cuộc đời
                    </div>
                    <div className="box-product__content-bottom">
                        <div className="box-product__info">
                            <div className="box-product__avatar">
                                <img src="images/avatar.png" alt="avatar" />
                            </div>
                            <div className="box-product__name">
                                Tiến Trung
                            </div>
                        </div>
                        <div className="box-product__date">
                            Ngày 21 tháng 2 năm 2023
                        </div>
                    </div>
                </div>
            </div>
            <div className="product__grid">
                {products.map(pr => {
                    const name = pr.name ?? "";
                    const img = pr.image ?? "";
                    const desc = pr.desc ?? "";
                    return (
                        <ProductItem key={name} img={img} name={name} desc={desc} />
                    )
                }
                )}
            </div>
        </div>
    )
}