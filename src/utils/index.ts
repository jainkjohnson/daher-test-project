import { IConfig } from "src/types";

const generateJSON = (data: IConfig) => {
  let jsonData: any = [];
  const { region, site, activity, workspace } = data;

  for (let i = 0; i < region; i++) {
    jsonData.push({
      label: `Region-${Math.floor(Math.random() * 50)}`,
      child: site && [],
    });
    for (let siteCount = 0; siteCount < site; siteCount++) {
      jsonData[i].child.push({
        label: `Site-${Math.floor(Math.random() * 50)}`,
        child: activity && [],
      });
      for (let activityCount = 0; activityCount < activity; activityCount++) {
        jsonData[i].child[siteCount].child.push({
          label: `Activity-${Math.floor(Math.random() * 50)}`,
          child: workspace && [],
        });
        for (
          let workspaceCount = 0;
          workspaceCount < workspace;
          workspaceCount++
        ) {
          jsonData[i].child[siteCount].child[activityCount].child.push({
            label: `Workspace-${Math.floor(Math.random() * 50)}`,
          });
        }
      }
    }
  }

  return jsonData;
};

export default generateJSON;
