import Header from "../../Components/header/header.js"
import Footer from "../../Components/Footer/Footer.js"
import imageHomeBanner from "../../Asset/images/Banner-imgs/bannerHome.png"
import Gallery from "../../Components/Gallery/Gallery.js"
import Banner from "../../Components/Banner/Banner.js"

function Home () {
    return ( 
        <div className="home">
            <Header/>
            <main>
                <Banner texte="Chez vous, partout et ailleurs" image={imageHomeBanner} />
                <Gallery/>
            </main>
            <Footer/>
        </div>
    );
};
export default Home;