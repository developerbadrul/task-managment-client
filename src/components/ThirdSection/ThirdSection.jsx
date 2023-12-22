
const ThirdSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center w-11/12 mx-auto">
            <div>
                <img src="https://micronet.work/demo/wp-content/uploads/2023/03/hero2.png" alt="" />
            </div>
            <div>
                <h2 className="text-3xl font-bold">
                    Get the Micronet Advantage. Our stats speak for temselves.
                </h2>
                <p className="my-3">It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distracted.</p>
                <div className="flex gap-8">
                    <div>
                        <h5 className="font-bold">Intense research</h5>
                        <p>It is a long established fact that a reader will be distracted.</p>
                    </div>
                    <div>
                        <h5 className="font-bold">Audience segmentation</h5>
                        <p>It is a long established fact that a reader will be distracted</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;