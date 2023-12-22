import { FaTasks } from "react-icons/fa";
import { MdOutlineWebhook, MdTimeline  } from "react-icons/md";
import { CgMoveTask } from "react-icons/cg";
import { GiSelfLove, GiBrain } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { SiSololearn, SiDask  } from "react-icons/si";



const Features = () => {
    return (
        <div>
            <div className="mx-auto w-11/12">
                <div>
                    <img className="rounded-md w-10/12 mx-auto" src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                    <div>
                        <i className="text-2xl text-yellow-400"><FaTasks /></i>
                        <h5 className="font-bold">Kanban Boards</h5>
                        <p>Efficiently organise your work on Boards.</p>
                    </div>
                    <div>
                        <i className="text-2xl text-red-600"><MdTimeline /></i>
                        <h5 className="font-bold">Timeline</h5>
                        <p>Plan your work in Gantt Charts.</p>
                    </div>
                    <div>
                        <i className="text-2xl text-blue-600"><CgMoveTask /></i>
                        <h5 className="font-bold">Task Lists</h5>
                        <p>Organise your work in Lists.</p>
                    </div>
                    <div>
                        <i className="text-2xl text-blue-600"><GiSelfLove /></i>
                        <h5 className="font-bold">Automations</h5>
                        <p>Automate processes across components & teams.</p>
                    </div>
                    <div>
                        <i className="text-2xl text-yellow-400"><CiCalendarDate /></i>
                        <h5 className="font-bold">Calendar</h5>
                        <p>View your teams work on a shared calendar.</p>
                    </div>
                    <div>
                        <i className="text-2xl text-cyan-400"><GiBrain /></i>
                        <h5 className="font-bold">Knowledge Base</h5>
                        <p>Create shared Knowledge base for Team.</p>
                    </div>
                    <div>
                        <i className="text-2xl text-cyan-400"><SiSololearn /></i>
                        <h5 className="font-bold">LMS</h5>
                        <p>Learning management, compliance trainings</p>
                    </div>
                    <div>
                        <i className="text-2xl"><SiDask /></i>
                        <h5 className="font-bold">Helpdesk</h5>
                        <p>Integrated helpdesk and ticketing system.</p>
                    </div>
                    <div>
                        <i className="text-2xl text-red-600"><MdOutlineWebhook /></i>
                        <h5 className="font-bold">Client Portals</h5>
                        <p>Allow clients to view project progress.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;