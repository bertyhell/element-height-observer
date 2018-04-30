export interface IHeightObserverOptions {
    direction?: 'both' | 'horizontal' | 'vertical';
}
export declare function registerHeightObserver(element: HTMLElement, options: IHeightObserverOptions | (() => void), callback?: () => void): void;
export declare function unregisterHeightObserver(element: HTMLElement): void;
