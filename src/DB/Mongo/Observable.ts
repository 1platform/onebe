import EventEmitter from "events";
import { Document } from "mongoose";

/**
 * Defines Observable Types
 * */
enum ObservableType {
  SAVE = "save",
  REMOVE = "remove",
}

type ObserverCallback<T extends Document> = (document: T) => void;

/**
 * Class representing an Observable
 * @class
 * */

export default class Observable extends EventEmitter {
  /**
   * Registers an Observable
   * @param entityName The name of the entity
   * @param type The type of the Observable
   * @param isPost if the action is a POST
   * @param callback The callback to be executed
   * */
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

  /**
   * Registers a Save Post Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */
  public registerSavePost<T extends Document>(
    entityName: string,
    callback: ObserverCallback<T>
  ): void {
    this.registerObservable<T>(entityName, ObservableType.SAVE, true, callback);
  }

  /**
   * Registers a Remove Post Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */
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

  /**
   * Registers a Pre Save Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */
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

  /**
   * Registers a Pre Remove Observable
   * @param entityName The entity name
   * @param callback The callback to be executed
   * */
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
