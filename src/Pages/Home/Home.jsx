import Banner from "../../components/Banner/Banner";
import ForthSection from "../../components/ForthSection/ForthSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection/ThirdSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <ForthSection></ForthSection>
        </div>
    );
};

export default Home;