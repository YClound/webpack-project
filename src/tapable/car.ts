import { SyncHook, SyncBailHook, SyncWaterfallHook, SyncLoopHook } from 'tapable';

export default class Car {
    hooks: {
        starHook: SyncHook<any, any, any>;
        accelerateHook: SyncHook<any, any, any>;
        brakeHook: SyncBailHook<any, any, any>;
        newAccelerateHook: SyncWaterfallHook<any, any, any>;
        newStartHook: SyncLoopHook<any, any, any>;
    };
    constructor() {
        this.hooks = {
            starHook: new SyncHook(),
            accelerateHook: new SyncHook(['newSpeed']),
            brakeHook: new SyncBailHook(),
            newAccelerateHook: new SyncWaterfallHook(['newSpeed']),
            newStartHook: new SyncLoopHook(),
        }
    }

    start() {
        this.hooks.starHook.call();
    }

    accelerate(speed: number) {
        this.hooks.accelerateHook.call(speed);
    }

    brake() {
        this.hooks.brakeHook.call();
    }

    newAccelerate(speed: number) {
        this.hooks.newAccelerateHook.call(speed);
    }

    newStart() {
        this.hooks.newStartHook.call();
    }
}