/// <reference types="node" />
import EventEmitter from "events";
import { Document } from "mongoose";
declare enum ObservableType {
    SAVE = "save",
    REMOVE = "remove"
}
declare type ObserverCallback<T extends Document> = (document: T) => void;
export default class Observable extends EventEmitter {
    registerObservable<T extends Document>(entityName: string, type: ObservableType, isPost: boolean, callback: ObserverCallback<T>): void;
    registerSavePost<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
    registerRemovePost<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
    registerSavePre<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
    registerRemovePre<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
}
export {};
