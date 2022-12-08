import Footer from "../Components/Footer.js";
import Hero from "../Components/Hero.js";
import Navbar from "../Components/Navbar.js";
import ServiceList from "../Components/ServiceList.js";
import Stacks from "../Components/Stacks.js";
import Teams from "../Components/Teams.js";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-6xl">
                <Hero />
                <Teams />
                <ServiceList />
            </div>
            <Stacks />
            <Footer />
        </div>
    );
}