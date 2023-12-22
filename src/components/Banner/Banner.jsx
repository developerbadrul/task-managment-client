
const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
            <div>
                <h1 className="text-5xl font-bold">Manage work <br /><span className="text-[#d88531]">Efficiently.</span></h1>
                <h4 className="text-2xl font-bold">Plan, Track and Organise your work.</h4>
                <p>An Intranet platform to Manage projects, organise <br /> work and focus on what’s important.</p>
                <button className="bg-[#d88531] p-3 rounded-md">Explore</button>
            </div>
            <div>
                <img src="https://micronet.work/demo/wp-content/uploads/2023/03/her_micronet.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;