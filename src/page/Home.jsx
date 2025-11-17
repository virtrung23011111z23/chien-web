import Hero from "../components/Hero"
import "../scss/pages/home.scss"
import Achievement from "../components/Achievement"
import About from "../components/About"
import Product from "../components/Product"
export default function Home() {
    return (
        <>
            <Hero />
            <Achievement />
            <About />
            <Product />
        </>
    )
}