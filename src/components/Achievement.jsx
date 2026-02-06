import { useEffect, useState } from "react";
import { Icons } from "../constants/icon.contant";
import { achievementData } from "../data/home.data";

function useUpCount(count, duration = 2000) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const achievement = document.querySelector(".achievement");
        if (!achievement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const start = performance.now();
                    const tick = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        setValue(Math.round(progress * count));
                        if (progress < 1) {
                            requestAnimationFrame(tick);
                        } else {
                            setValue(count); 
                        }
                    };
                    requestAnimationFrame(tick);
                    observer.disconnect();
                }
            },
            { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(achievement);
    }, [count, duration]);

    return value;
}

function AchievementUI({ icon, title, count, desc }) {
    const countValue = useUpCount(count);

    return (
        <div className="achievement__item">
            <div className="achievement__img">
                <div className="achievement__icon">
                    {Icons[icon]}
                </div>
            </div>
            <div className="achievement__title">{`${countValue} ${title}`}</div>
            <div className="achievement__desc">{desc}</div>
        </div>
    );
}

export default function Achievement() {
    return (
        <section className="achievement">
            <div className="achievement__grid">
                {achievementData.map(a => (
                    <AchievementUI
                        key={a.title}
                        icon={a.icon}
                        title={a.title}
                        count={a.count}
                        desc={a.desc}
                    />
                ))}
            </div>
        </section>
    );
}
