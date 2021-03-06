import SuperAgent from "superagent";

export default class CommonAjax {
    get(url, queryParams) {
        const request = SuperAgent;
        return request.get(url).query(queryParams);
    }

    post(url, postData) {
        const request = SuperAgent;
        return request.post(url).send(postData);
    }

    update(url, postData) {
        const request = SuperAgent;
        return request.post(url).send(postData);
    }

    delete(url, postData) {
        const request = SuperAgent;
        return request.delete(url).send(postData);
    }
}