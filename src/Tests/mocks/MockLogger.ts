import Transport from "winston-transport";

import { Logger } from "@/System/Logger";
import LogLevel from "@/System/LogLevel";

interface IMockLoggerLine {
  type: string;
  message: string;
}

class MockLoggerTransport extends Transport {
  /**
   * NoLoggerTransport constructor
   */
  public constructor() {
    super();
  }

  protected _lines: Array<IMockLoggerLine> = [];

  public get lines(): Array<IMockLoggerLine> {
    return [ ...this._lines ];
  }

  /**
   * Log the message.
   */
  public log(info: any, next: () => void): void {
    this._lines.push({
      type: info.level,
      message: info.message,
    });
    next();
  }

  public clear(): void {
    this._lines = [];
  }
}

export default class MockLogger extends Logger {
  private readonly _transport: MockLoggerTransport;

  constructor() {
    super(LogLevel.SILLY, new MockLoggerTransport());
    this._transport = this.log.transports[0] as MockLoggerTransport;
  }

  public get lines(): Array<IMockLoggerLine> {
    return this._transport.lines;
  }

  public clear() {
    this._transport.clear();
  }
}
