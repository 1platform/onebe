import EventEmitter from "events";
import { Document } from "mongoose";

enum ObservableType {
  SAVE = "save",
  REMOVE = "remove",
}

type ObserverCallback<T extends Document> = (document: T) => void;

export default class Observable extends EventEmitter {
  public registerObservable<T extends Document>(
    entityName: string,
    type: ObservableType,
    isPost: boolean,
    callback: ObserverCallback<T>
  ): void {
    this.on(
      `${ entityName }:${ type }:${ isPost ? "post" : "pre" }`.toLowerCase(),
      callback
    );
  }

  public registerSavePost<T extends Document>(
    entityName: string,
    callback: ObserverCallback<T>
  ): void {
    this.registerObservable<T>(entityName, ObservableType.SAVE, true, callback);
  }

  public registerRemovePost<T extends Document>(
    entityName: string,
    callback: ObserverCallback<T>
  ): void {
    this.registerObservable<T>(
      entityName,
      ObservableType.REMOVE,
      true,
      callback
    );
  }

  public registerSavePre<T extends Document>(
    entityName: string,
    callback: ObserverCallback<T>
  ): void {
    this.registerObservable<T>(
      entityName,
      ObservableType.SAVE,
      false,
      callback
    );
  }

  public registerRemovePre<T extends Document>(
    entityName: string,
    callback: ObserverCallback<T>
  ): void {
    this.registerObservable<T>(
      entityName,
      ObservableType.REMOVE,
      false,
      callback
    );
  }
}
