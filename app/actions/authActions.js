import CommonAjax from "../ajax/commonAjax";
import { DEV_SERVER_ADDRESS } from "../config/config";

const commonAjax = new CommonAjax();
export function authRequest(userInfo) {
  return new Promise((resolve, reject) => {
    commonAjax.post(`${DEV_SERVER_ADDRESS}auth`, userInfo).then(isAuth => {
      resolve(isAuth.body);
    });
  });
}
