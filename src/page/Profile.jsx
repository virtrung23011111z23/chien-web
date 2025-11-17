import "../scss/pages/profile.scss";
import { dataProfile__history, dataProfile__service } from "../data/profile.data";
import { Icons } from "../constants/icon.contant";

function History({ data }) {
    return (
        <>
            <div className="profile__history">
                {data.map((data, indx) => {
                    const time = data.time ?? '';
                    const title = data.title ?? "";
                    const desc = data.desc ?? "";
                    const signature = data.signature ?? "";
                    const logoGara = data.logoGara ?? [];
                    const logoSchool = data.logoSchool ?? "";
                    const nameStudy = data.nameStudy ?? "";
                    return (
                        <div className={`history__box ${indx % 2 != 0 ? "history__box-left" : ""} `} key={time}>
                            <div className="history__container">
                                {time && <div className="history__time">{time}</div>}

                                {logoSchool && <div className="history__logo-school">
                                    <img src={`images/${logoSchool}`} alt="logo HAUI" />
                                </div>
                                }

                                {nameStudy && <div className="history__name">{nameStudy}</div>}

                                {title && <div className="history__title">{title}</div>}

                                {logoGara.length != 0 &&
                                    <div className="history__list-auto">
                                        {
                                            logoGara.map(gara =>
                                                <div className="history__logo-gara" key={gara}>
                                                    <img src={`/images/${gara}`} alt={gara} />
                                                </div>
                                            )}
                                    </div>
                                }
                                {desc && <div className="history__desc">{desc}</div>}

                                {signature && <div className="history__signature"> <img src={`/images/${signature}`} alt={signature} /></div>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

function HrefInfo({ href, children }) {
    if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className="profile__service-item">{children}</a>
    return <div className="profile__service-item">{children}</div>
}
function ProfileService({ icon, title, desc, link }) {
    return (

        <HrefInfo href={link} >
            <div className="profile__service-icon">
                {Icons[icon]}
            </div>
            <div className="profile__service-content">
                <div className="profile__service-title">
                    {title}
                </div>
                <div className="profile__service-desc">
                    {desc}
                </div>
            </div>
        </HrefInfo>
    )
}
export default function Profile() {
    return (
        <>
            <div className="profile">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-2.jpg" alt="avatar" />
                    </div>
                    <div className="profile__name">Chương Văn Chiến</div>
                    <div className="profile__address">{Icons.address}Bắc Từ Liêm, Hà Nội</div>
                    <div className="profile__online">
                        <a href="$" className="profile-icon icon-blue">{Icons.facebook}</a>
                        <a href="#" className="profile-icon icon-pink">{Icons.instagram}</a>
                        <a href="#" className="profile-icon icon-green">{Icons.phone}</a>
                        <a href="#" className="profile-icon "><img src="images/zalo.svg" alt="zalo" /></a>
                    </div>
                </div>
                <History data={dataProfile__history} />
                <div className="profile__service">
                    {dataProfile__service.map((col, indx) => (
                        <div className="profile__service-box" key={indx}>
                            {col.map((ser) => {
                                const link = ser.link ?? "";
                                const icon = ser.icon ?? "";
                                const title = ser.title ?? "";
                                const desc = ser.desc ?? "";
                                return <ProfileService icon={icon} title={title} desc={desc} link={link} />
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}