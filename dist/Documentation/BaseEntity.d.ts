export default class BaseEntity {
    constructor(options?: Record<string, unknown>);
    init(options?: Record<string, unknown>): void;
}
