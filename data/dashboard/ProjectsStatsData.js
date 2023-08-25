import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Total balance",
       value : "$314.27",
       icon: <Briefcase size={18}/>,
      //  statInfo: '<span className="text-dark me-2"></span> Completed' 
    },
    {
        id:2,
        title : "Total spending",
        value : "$42.040",
        icon: <ListTask size={18}/>,
      //   statInfo: '<span className="text-dark me-2">No Pending Transfers</span>' 
     },
   //   {
   //      id:3,
   //      title : "Teams",
   //      value : 12,
   //      icon: <People size={18}/>,
   //      statInfo: '<span className="text-dark me-2">1</span> Completed' 
   //   },
     {
        id:4,
        title : "Total saved",
        value : "$501.074",
        icon: <Bullseye size={18}/>,
      //   statInfo: '<span className="text-dark me-2"></span> Completed' 
     }
];
export default ProjectsStats;
