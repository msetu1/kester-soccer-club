import InnerPages from "../innerPages/InnerPages";
import Products from "../project/Products";
import AllDevice from "../section/AllDevice";
import Elementor from "../section/Elementor";
import Feature from "../section/Feature";
import Feature2 from "../section/Feature2";
import PlayerList from "../section/PlayerList";
import Purchase from "../section/Purchase";
import ShopFeature from "../section/ShopFeature";
import SoccerClub from "../section/SoccerClub";
import Sportspress from "../section/Sportspress";
import ThreeCard from "../section/ThreeCard";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SoccerClub></SoccerClub>
            <Products></Products>
            <InnerPages></InnerPages>
            <Feature></Feature>
            <Feature2></Feature2>
            <PlayerList></PlayerList>
            <ShopFeature></ShopFeature>
            <Sportspress></Sportspress>
            <AllDevice></AllDevice>
           <Elementor></Elementor>
           <ThreeCard></ThreeCard>
           <Purchase></Purchase>
        </div>
    );
};

export default Home;