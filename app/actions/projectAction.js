import CommonAjax from "../ajax/commonAjax";
import { DEV_SERVER_ADDRESS } from "../config/config";

const commonAjax = new CommonAjax();
export function getProjects(projectInfo) {
  return new Promise((resolve, reject) => {
    commonAjax.post(`${DEV_SERVER_ADDRESS}projects`, projectInfo).then(projects => {
      resolve(projects.body);
    });
  });
}