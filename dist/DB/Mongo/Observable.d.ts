/// <reference types="node" />
import EventEmitter from "events";
import { Document } from "mongoose";
/**
 * Defines Observable Types
 * */
export declare enum ObservableType {
    SAVE = "save",
    REMOVE = "remove"
}
export declare type ObserverCallback<T extends Document> = (document: T) => void;
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
    registerObservable<T extends Document>(entityName: string, type: ObservableType, isPost: boolean, callback: ObserverCallback<T>): void;
    /**
     * Registers a Save Post Observable
     * @param entityName The entity name
     * @param callback The callback to be executed
     * */
    registerSavePost<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
    /**
     * Registers a Remove Post Observable
     * @param entityName The entity name
     * @param callback The callback to be executed
     * */
    registerRemovePost<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
    /**
     * Registers a Pre Save Observable
     * @param entityName The entity name
     * @param callback The callback to be executed
     * */
    registerSavePre<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
    /**
     * Registers a Pre Remove Observable
     * @param entityName The entity name
     * @param callback The callback to be executed
     * */
    registerRemovePre<T extends Document>(entityName: string, callback: ObserverCallback<T>): void;
}
