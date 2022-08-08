export default class BaseEntity {
  constructor(options?: Record<string, unknown>) {
    this.init(options);
  }

  init(options?: Record<string, unknown>) {
    if (options) {
      Object.keys(options).forEach((key) => {
        this[key] = options[key];
      });
    }
  }
}
