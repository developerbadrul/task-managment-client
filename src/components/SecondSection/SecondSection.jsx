import { Card } from "flowbite-react";
import { BiTask } from "react-icons/bi";



const SecondSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5 w-11/12 mx-auto">
            <Card className="max-w-sm bg-[#e3defc] md:p-3">
                <i className="text-2xl"><BiTask /></i>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Task Management
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    It is a long established fact that a reader will be distracted.
                </p>
            </Card>
            <Card className="max-w-sm bg-[#dffdec] md:p-3">
                <i className="text-2xl"><BiTask /></i>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Team Collaboration
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    It is a long established fact that a reader will be distracted.
                </p>
            </Card>
            <Card className="max-w-sm bg-[#fceedf] md:p-3">
                <i className="text-2xl"><BiTask /></i>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Project Planning
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    It is a long established fact that a reader will be distracted.
                </p>
            </Card>
        </div>
    );
};

export default SecondSection;