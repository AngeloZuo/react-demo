import SuperAgent from "superagent";

export default class CommonAjax {
    get(url, queryParams) {
        const request = SuperAgent;
        return request.get(url).query(queryParams);
    }

    post() {

    }

    put() {

    }

    delete() {

    }
}