import { SiWebcomponentsdotorg } from "react-icons/si";
import { GiHomeGarage } from "react-icons/gi";
import { Icons } from "../constants/icon.contant";
import { achievementData } from "../data/home.data";
export default function Achievement() {
    
    return (
        <>
            <section className="achievement">
                <div className="achievement__grid">
                    {achievementData.map(a =>
                        <div className="achievement__item" key={a.title}>
                            <div className="achievement__img">
                                {Icons[a.icon]}
                            </div>
                            <div className="achievement__title">
                                {a.title}
                            </div>
                            <div className="achievement__desc">
                                {a.desc}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}