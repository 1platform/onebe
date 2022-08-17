/// <reference types="node" />
import EventEmitter from "events";
import { Document } from "mongoose";
/**
 * A list with what can be observed in a Mongoose model.
 *
 * @enum
 */
export declare enum ObservableType {
    /**
     * Observe the save operation.
     */
    SAVE = "save",
    /**
     * Observe the remove/delete operation.
     */
    REMOVE = "remove"
}
/**
 * Type used to define what a callback used to register an observer function should look like.
 *
 * @param document The document we want to observe.
 */
export declare type ObserverCallback<T extends Document> = (document: T) => void;
/**
 * Class used to perform observable actions to a Mongoose model.
 *
 * Using this class we register observers that can perform various tasks
 * on the Mongoose model when an action happens (Save or Remove).
 * Through the usage of Observers we can do updates on related elements
 * from other models (think at the cascade delete action).
 */
export default class Observable extends EventEmitter {
    /**
     * Method used to register an observer for a given model, with a given type,
     * at a given time moment (pre- or post-action).
     *
     * @param modelName The name of the model for which we want to register the observer.
     * @param type The type of the Observable action.
     * @param isPost The moment of the action (true = POST, false = PRE).
     * @param observerCallback The observer to be executed.
     */
    registerObservable<T extends Document>(modelName: string, type: ObservableType, isPost: boolean, observerCallback: ObserverCallback<T>): void;
    /**
     * Register a post save observer for a given model.
     *
     * @param modelName The name of the model for which we want to register the observer.
     * @param observerCallback The observer to be executed.
     */
    registerSavePost<T extends Document>(modelName: string, observerCallback: ObserverCallback<T>): void;
    /**
     * Register a post remove observer for a given model.
     *
     * @param modelName The name of the model for which we want to register the observer.
     * @param observerCallback The observer to be executed.
     * */
    registerRemovePost<T extends Document>(modelName: string, observerCallback: ObserverCallback<T>): void;
    /**
     * Register a pre save observer for a given model.
     *
     * @param modelName The name of the model for which we want to register the observer.
     * @param observerCallback The observer to be executed.
     * */
    registerSavePre<T extends Document>(modelName: string, observerCallback: ObserverCallback<T>): void;
    /**
     * Register a pre remove observer for a given model.
     *
     * @param modelName The name of the model for which we want to register the observer.
     * @param observerCallback The observer to be executed.
     * */
    registerRemovePre<T extends Document>(modelName: string, observerCallback: ObserverCallback<T>): void;
}
