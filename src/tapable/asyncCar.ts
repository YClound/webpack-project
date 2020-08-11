import {
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} from 'tapable';

export default class AsyncCar {
    hooks: {
        calculateRoutesHook: AsyncParallelHook<any, any, any>;
        calculateRoutesPromiseHook: AsyncParallelHook<any, any, any>;
        diffHook: AsyncParallelBailHook<any, any, any>;
        waterfallHook: AsyncSeriesWaterfallHook<any, any, any>;
    };
    constructor() {
        this.hooks = {
            // calculateRoutesHook: new AsyncParallelHook(),
            // calculateRoutesPromiseHook: new AsyncParallelHook(),
            // diffHook: new AsyncParallelBailHook(['callback']),
            calculateRoutesHook: new AsyncSeriesHook(),
            calculateRoutesPromiseHook: new AsyncSeriesHook(),
            diffHook: new AsyncSeriesBailHook(['callback']),
            waterfallHook: new AsyncSeriesWaterfallHook(['home']),
        }
    }
    calculateRoutes(callback: any) {
        this.hooks.calculateRoutesHook.callAsync(callback);
    }
    /**
     * promise
     */
    calculateRoutesPromise() {
        return this.hooks.calculateRoutesPromiseHook.promise()
    }

    diff(callback: any) {
        this.hooks.diffHook.callAsync(callback);
    }

    waterfall(home:number) {
        return this.hooks.waterfallHook.promise(home);
    }
}