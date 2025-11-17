import Hero from "../components/Hero"
import "../scss/pages/home.scss"
import Achievement from "../components/Achievement"
import About from "../components/About"
export default function Home() {
    return (
        <>
            <Hero />
            <Achievement />
            <About />
        </>
    )
}