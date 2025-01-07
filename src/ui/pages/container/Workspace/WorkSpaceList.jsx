// import { Box, Divider, Grid, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Header from "../../component/common/Header";
// import ProjectCard from "../../component/common/ProjectCard";
// import WorkspaceTable from "../../component/common/WorkspaceTable";
// import DatasetStyle from "../../../styles/Dataset";
// import GetProjectsAPI from "../../../../redux/actions/api/Dashboard/GetProjects";
// import {useDispatch,useSelector} from 'react-redux';
// import APITransport from '../../../../redux/actions/apitransport/apitransport';
// import GetWorkspacesAPI from "../../../../redux/actions/api/Dashboard/GetWorkspaces";

// export default function WorkSpaces(props) {
 
//   //   const classes = DatasetStyle();
//   //   const dispatch = useDispatch();
//   //   const workspaceData = useSelector(state=>state.getWorkspaces.data);

//   //   const getDashboardWorkspaceData = ()=>{
//   //   const workspaceObj = new GetWorkspacesAPI(1);
//   //   dispatch(APITransport(workspaceObj));
//   // }
  
//   // useEffect(()=>{
//   //   getDashboardWorkspaceData();
//   // },[]);
    

//   return (
//     <React.Fragment>
//     {/* <Header /> */}
//     <Box sx={{ margin : "0 auto", pb : 5 }}>
//         {/* <Typography variant="h5" sx={{mt : 2, mb : 2}}>Visit Workspaces</Typography> */}
//         <WorkspaceTable 
//           showManager={false} 
//           showCreatedBy={false} 
//           // workspaceData={workspaceData} 
//         />
//     </Box>
// </React.Fragment>
//   )
// }


import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import WorkspaceTable from "../../component/common/WorkspaceTable";
// import Header from "../../component/common/Header";
import DatasetStyle from "../../../styles/Dataset";
import GetWorkspacesAPI from "../../../../redux/actions/api/Dashboard/GetWorkspaces";
import { useDispatch, useSelector } from "react-redux";
import APITransport from "../../../../redux/actions/apitransport/apitransport";

export default function WorkSpaces(props) {
  // Uncomment and use these lines for Redux-based state management
  const dispatch = useDispatch();
  const workspaceData = useSelector((state) => state.getWorkspaces?.data || []);

  const [loading, setLoading] = useState(true);

  const getDashboardWorkspaceData = () => {
    const workspaceObj = new GetWorkspacesAPI(1); // Replace `1` with appropriate parameter if needed
    dispatch(APITransport(workspaceObj));
  };

  useEffect(() => {
    getDashboardWorkspaceData();
    // Simulate data fetch completion with a delay
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <React.Fragment>
      {/* <Header /> */}
      <Box sx={{ margin: "0 auto", pb: 5, textAlign: "center" }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
              Visit Workspaces
            </Typography>
            <WorkspaceTable
              showManager={false}
              showCreatedBy={false}
              workspaceData={workspaceData} // Pass actual workspace data
            />
          </>
        )}
      </Box>
    </React.Fragment>
  );
}


// import { Box } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import WorkspaceTable from "../../component/common/WorkspaceTable";
// import GetWorkspacesAPI from "../../../../redux/actions/api/Dashboard/GetWorkspaces";
// import { useDispatch, useSelector } from "react-redux";
// import APITransport from "../../../../redux/actions/apitransport/apitransport";
// import Spinner from "../../component/common/Spinner"; // Ensure Spinner component is imported

// export default function WorkSpaces(props) {
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const workspaceData = useSelector((state) => state.getWorkspaces.data);

//   const getDashboardWorkspaceData = async () => {
//     setLoading(true);
//     try {
//       const workspaceObj = new GetWorkspacesAPI(1);
//       await dispatch(APITransport(workspaceObj));
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getDashboardWorkspaceData();
//   }, []);

//   return (
//     <React.Fragment>
//       <Box sx={{ margin: "0 auto", pb: 5 }}>
//         {loading && <Spinner />} 
//         <WorkspaceTable
//           showManager={false}
//           showCreatedBy={false}
//           workspaceData={workspaceData}
//         />
//       </Box>
//     </React.Fragment>
//   );
// }
