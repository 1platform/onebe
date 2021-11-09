import HTTPStatus from "../HTTP/HTTPStatus";
export default class HTTPError extends Error {
    status: number;
    parameters: any;
    constructor(message: string, status?: HTTPStatus, parameters?: any);
}
