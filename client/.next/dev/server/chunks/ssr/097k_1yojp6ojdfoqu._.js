(()=>{"use strict";module.exports = [
"[project]/client/node_modules/@tanstack/query-core/build/modern/environmentManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environmentManager",
    ()=>environmentManager,
    "isServer",
    ()=>isServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
//#region src/environmentManager.ts
let isServerFn = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"];
/**
* Returns whether the current runtime should be treated as a server environment.
* @returns `true` if the runtime is treated as a server.
*/ const isServer = ()=>isServerFn();
/**
* Manages how TanStack Query detects whether the current runtime should be treated as
* server-side, which disables scheduling refetch timers and changes the default `retry` count
* and `gcTime`. By default, the detection treats a missing `window` (or the presence of a
* `Deno` global) as server.
*
* Override this for runtimes where that default detection would give the wrong answer — for
* example, a Service Worker, where `window` is undefined even though the environment should
* behave like a client.
* @example
* ```ts
* import { environmentManager } from '@tanstack/query-core'
*
* environmentManager.setIsServer(() => false)
* ```
*/ const environmentManager = {
    isServer,
    /**
	* Overrides the server check globally.
	* @param isServerValue - A function that returns whether the runtime should be treated as a
	* server.
	*/ setIsServer (isServerValue) {
        isServerFn = isServerValue;
    }
};
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
//#region src/focusManager.ts
/**
* The `FocusManager` manages the focus state within TanStack Query.
*
* It can be used to change the default event listeners or to manually change the focus state.
*/ var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) this.setEventListener(this.#setup);
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    /**
	* `setEventListener` can be used to set a custom event listener that will
	* be used to determine the focus state. The provided `setup` function
	* receives a `setFocused` callback: call it with a `boolean` to manually
	* set the focus state, or with no arguments to re-evaluate the current
	* focus state and notify subscribers.
	* @param setup - Receives the `setFocused` callback, registers the event listener, and may return
	* a cleanup function that is called when the listener is replaced or no longer needed.
	* @example
	* ```ts
	* import { focusManager } from '@tanstack/query-core'
	*
	* focusManager.setEventListener((handleFocus) => {
	*   const listener = () => handleFocus()
	*   // Listen to visibilitychange
	*   if (typeof window !== 'undefined' && window.addEventListener) {
	*     window.addEventListener('visibilitychange', listener, false)
	*   }
	*
	*   return () => {
	*     // Be sure to unsubscribe if a new handler is set
	*     window.removeEventListener('visibilitychange', listener)
	*   }
	* })
	* ```
	*/ setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") this.setFocused(focused);
            else this.onFocus();
        });
    }
    /**
	* `setFocused` can be used to manually set the focus state. Set `undefined`
	* to fall back to the default focus check.
	* @param focused - The focus state, or `undefined` to use the default focus check.
	* @example
	* ```ts
	* import { focusManager } from '@tanstack/query-core'
	*
	* // Set focused
	* focusManager.setFocused(true)
	*
	* // Set unfocused
	* focusManager.setFocused(false)
	*
	* // Fallback to the default focus check
	* focusManager.setFocused(undefined)
	* ```
	*/ setFocused(focused) {
        if (this.#focused !== focused) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    /**
	* `onFocus` notifies all subscribed listeners with the current focus state.
	*/ onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    /**
	* `isFocused` can be used to get the current focus state.
	* @returns The focus state set with `setFocused`, or otherwise whether the document is visible.
	*/ isFocused() {
        if (typeof this.#focused === "boolean") return this.#focused;
        return globalThis.document?.visibilityState !== "hidden";
    }
};
/**
* Singleton instance of {@link FocusManager}, used to manage and observe the focus state within TanStack Query.
*/ const focusManager = new FocusManager();
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
//#region src/infiniteQueryBehavior.ts
/**
* Creates the behavior that fetches the pages of an infinite query: the next or previous page for
* `fetchNextPage`/`fetchPreviousPage`, or all pages again from the start on a refetch.
* @param pages - The number of pages to fetch from the start when all pages are fetched again,
* e.g. from the `pages` option of `queryClient.infiniteQuery`. Defaults to the number of cached
* pages.
* @returns The query behavior to set on an infinite query.
*/ function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            const options = context.options;
            const direction = context.fetchOptions?.meta?.fetchMore?.direction;
            const oldPages = context.state.data?.pages || [];
            const oldPageParams = context.state.data?.pageParams || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addConsumeAwareSignal"])(object, ()=>context.signal, ()=>cancelled = true);
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) return Promise.reject(context.signal.reason);
                    if (param == null && data.pages.length) return Promise.resolve(data);
                    const createQueryFnContext = ()=>{
                        const queryFnContext = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext);
                        return queryFnContext;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    result = await fetchPage(oldData, pageParamFn(options, oldData), previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] === void 0 ? options.initialPageParam : oldPageParams[0] : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) break;
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) context.fetchFn = ()=>{
                return context.options.persister?.(fetchFn, {
                    client: context.client,
                    queryKey: context.queryKey,
                    meta: context.options.meta,
                    signal: context.signal
                }, query);
            };
            else context.fetchFn = fetchFn;
        }
    };
}
/**
* Computes the page param of the page after the last one, with the `getNextPageParam` option.
* @param options - The infinite query options.
* @param data - The current pages and page params.
* @returns The next page param, or `undefined` if there are no pages yet.
*/ function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
/**
* Computes the page param of the page before the first one, with the `getPreviousPageParam`
* option.
* @param options - The infinite query options.
* @param data - The current pages and page params.
* @returns The previous page param, or `undefined` if there are no pages yet or no
* `getPreviousPageParam` option.
*/ function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
/**
* Checks if there is a next page.
* @param options - The infinite query options with `getNextPageParam`.
* @param data - The current pages and page params.
* @returns `true` if `getNextPageParam` returns a value other than `null` or `undefined`.
*/ function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
/**
* Checks if there is a previous page.
* @param options - The infinite query options with `getPreviousPageParam`.
* @param data - The current pages and page params.
* @returns `true` if `getPreviousPageParam` is set and returns a value other than `null` or
* `undefined`.
*/ function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)");
;
;
;
//#region src/mutation.ts
/**
* Represents a single mutation attempt. A `Mutation` holds the mutation's
* options, state (data/error/status), and the `MutationObserver`s currently
* subscribed to it.
*
* Instances are created and managed internally by `MutationCache`; application
* code typically interacts with mutations indirectly through `QueryClient` or
* a framework hook like `useMutation`. Direct access to a `Mutation` instance
* is possible via `mutationCache.find()`/`getAll()` for inspecting cache state.
* @example
* ```ts
* const mutationCache = queryClient.getMutationCache()
*
* const mutation = mutationCache.find({ mutationKey: ['addPost'] })
* ```
*/ var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Removable"] {
    #client;
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.#client = config.client;
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    /**
	* Replaces the mutation's options and applies their `gcTime`.
	* @internal
	* @param options - The new mutation options.
	*/ setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    /**
	* The `meta` object passed in the mutation's options, if any.
	* @returns The mutation's `meta`, or `undefined` if none was set.
	*/ get meta() {
        return this.options.meta;
    }
    /**
	* Subscribes an observer to the mutation and stops its garbage collection.
	* @internal
	* @param observer - The observer to add. Adding an observer that is already subscribed does
	* nothing.
	*/ addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    /**
	* Unsubscribes an observer from the mutation.
	* @internal
	* @param observer - The observer to remove. Garbage collection is scheduled afterwards.
	*/ removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") this.scheduleGc();
            else this.#mutationCache.remove(this);
        }
    }
    /**
	* Resumes a mutation that is currently paused or was restored from a
	* dehydrated, still-`pending` state.
	*
	* - If this mutation has an active retryer (it paused mid-attempt, e.g. due
	*   to the network mode or scope-based queuing), its retryer is resumed.
	* - Otherwise, if the mutation's status is still `pending` (e.g. it was
	*   dehydrated while an attempt was in flight and never got a retryer in
	*   this instance), `execute` is called again with the last known variables.
	* - Otherwise the mutation has already settled and this resolves immediately
	*   without running anything again.
	* @returns A promise that settles with the resumed mutation: it rejects if the mutation fails.
	* It resolves immediately if the mutation has already settled.
	* @see {@link Mutation#execute}
	* @example
	* ```ts
	* // typically driven by reconnect handling, e.g. queryClient.resumePausedMutations()
	* const mutation = mutationCache.find({ mutationKey: ['addPost'] })
	* await mutation?.continue()
	* ```
	*/ continue() {
        return this.#retryer?.continue() ?? (this.state.status === "pending" ? this.execute(this.state.variables) : Promise.resolve());
    }
    /**
	* Runs the mutation function for the given variables through a retryer, and
	* drives the mutation's state and lifecycle callbacks through to settlement.
	*
	* If this mutation's state is already `pending` when `execute` is called
	* (i.e. it was restored, still in-flight, from a dehydrated state), the
	* `onMutate` step is skipped and a `continue` action is dispatched to
	* unpause it; otherwise a `pending` action is dispatched first, then the
	* mutation cache's `onMutate` and the mutation's own `onMutate` option are
	* awaited in that order, and the resulting context is stored.
	*
	* The mutation function is then run (subject to `retry`/`retryDelay`/
	* `networkMode`, and to the mutation cache's scope-based serialization).
	* On success, the cache's `onSuccess`/`onSettled` callbacks run before the
	* mutation's own `onSuccess`/`onSettled` options, a `success` action is
	* dispatched, and the resolved data is returned. On failure, the same
	* cache-then-option ordering is used for `onError`/`onSettled`, but each of
	* those four callbacks is individually caught so that a throwing callback
	* cannot mask the original error; an `error` action is then dispatched and
	* the original error is re-thrown.
	* @param variables - The variables passed to the `mutationFn`.
	* @returns A promise that resolves with the mutation's data, or rejects with its error.
	* @see {@link Mutation#continue}
	* @example
	* ```ts
	* // Called internally by `MutationObserver.mutate` and `Mutation.continue` —
	* // applications normally trigger mutations through those, not this method.
	* const data = await mutation.execute(variables)
	* ```
	*/ async execute(variables) {
        const onContinue = ()=>{
            this.#dispatch({
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: this.#client,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        const retryer = this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !retryer.canStart();
        try {
            if (restored) onContinue();
            else {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                if (this.#mutationCache.config.onMutate) await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
                const context = await this.options.onMutate?.(variables, mutationFnContext);
                if (context !== this.state.context) this.#dispatch({
                    type: "pending",
                    context,
                    variables,
                    isPaused
                });
            }
            const data = await retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
            await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
            await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
            } catch (e) {
                Promise.reject(e);
            }
            try {
                await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
            } catch (e) {
                Promise.reject(e);
            }
            try {
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
            } catch (e) {
                Promise.reject(e);
            }
            try {
                await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
            } catch (e) {
                Promise.reject(e);
            }
            this.#dispatch({
                type: "error",
                error
            });
            throw error;
        } finally{
            if (this.#retryer === retryer) this.#retryer = void 0;
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
/**
* Returns the initial state of a mutation: `'idle'`, with no data, error, or variables.
* @returns The initial mutation state.
*/ function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutationCache",
    ()=>MutationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)");
;
;
;
;
//#region src/mutationCache.ts
/**
* The `MutationCache` is the storage for mutations.
*
* Normally, you will not interact with the `MutationCache` directly and instead use a
* `QueryClient`. You can subscribe to it (inherited from `Subscribable`) to be informed of
* safe/known updates to the cache, such as mutations being added, removed, or updated.
* @example
* ```ts
* const unsubscribe = mutationCache.subscribe((event) => {
*   console.log(event.type, event.mutation)
* })
* ```
*/ var MutationCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #mutations;
    #scopes;
    #mutationId;
    constructor(config = {}){
        super();
        this.config = config;
        this.#mutations = /* @__PURE__ */ new Set();
        this.#scopes = /* @__PURE__ */ new Map();
        this.#mutationId = 0;
    }
    /**
	* Creates a mutation and adds it to the cache.
	* @internal
	* @param client - The client the mutation belongs to, used to default its options.
	* @param options - The mutation options. They are defaulted with {@link
	* QueryClient#defaultMutationOptions}.
	* @param state - The initial state of the mutation, e.g. when restoring a dehydrated mutation.
	* @returns The new mutation, already added to the cache.
	*/ build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Mutation"]({
            client,
            mutationCache: this,
            mutationId: ++this.#mutationId,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    /**
	* Adds a mutation to the cache.
	* @internal
	* @param mutation - The mutation to add. If it has a `scope`, it is queued in that scope.
	*/ add(mutation) {
        this.#mutations.add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = this.#scopes.get(scope);
            if (scopedMutations) scopedMutations.push(mutation);
            else this.#scopes.set(scope, [
                mutation
            ]);
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    /**
	* Removes a mutation from the cache.
	* @internal
	* @param mutation - The mutation to remove, also from its scope's queue.
	*/ remove(mutation) {
        if (this.#mutations.delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = this.#scopes.get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) scopedMutations.splice(index, 1);
                    } else if (scopedMutations[0] === mutation) this.#scopes.delete(scope);
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    /**
	* Checks whether a mutation can run now, given the other mutations in its `scope`.
	* @internal
	* @param mutation - The mutation to check.
	* @returns `true` if the mutation has no `scope`, or no other mutation in its scope is pending
	* ahead of it.
	*/ canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const firstPendingMutation = this.#scopes.get(scope)?.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else return true;
    }
    /**
	* Continues the next paused mutation in the same `scope` after a mutation finishes.
	* @internal
	* @param mutation - The mutation that finished.
	* @returns A promise that resolves once the next paused mutation in the same scope has continued,
	* or immediately if there is none.
	*/ runNext(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") return this.#scopes.get(scope)?.find((m)=>m !== mutation && m.state.isPaused)?.continue() ?? Promise.resolve();
        else return Promise.resolve();
    }
    /**
	* Removes all mutations from the cache.
	* @example
	* ```ts
	* const mutationCache = queryClient.getMutationCache()
	*
	* mutationCache.clear()
	* ```
	*/ clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            const mutations = this.getAll();
            this.#mutations.clear();
            this.#scopes.clear();
            mutations.forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
        });
    }
    /**
	* Returns all mutations within the cache.
	*
	* This is not typically needed for most applications, but can come in handy when needing more
	* information about a mutation in rare scenarios.
	* @returns Every mutation in the cache.
	* @example
	* ```ts
	* const mutationCache = queryClient.getMutationCache()
	*
	* const mutations = mutationCache.getAll()
	* ```
	*/ getAll() {
        return Array.from(this.#mutations);
    }
    /**
	* A slightly more advanced method that can be used to get an existing mutation instance from
	* the cache. If the mutation does not exist, `undefined` is returned.
	*
	* This is not typically needed for most applications, but can come in handy when needing more
	* information about a mutation in rare scenarios.
	* @param filters - The filters to match. `exact` defaults to `true`.
	* @returns The first matching mutation, or `undefined`.
	* @see {@link MutationCache#findAll}
	* @example
	* ```ts
	* const mutationCache = queryClient.getMutationCache()
	*
	* const mutation = mutationCache.find({ mutationKey: ['addPost'] })
	* ```
	*/ find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    /**
	* An even more advanced method that can be used to get existing mutation instances from the
	* cache that match the given filters. If no mutations match, an empty array is returned.
	*
	* This is not typically needed for most applications, but can come in handy when needing more
	* information about mutations in rare scenarios.
	* @param filters - The filters to match. Without filters, every mutation is returned.
	* @returns The matching mutations.
	* @see {@link MutationCache#find}
	* @example
	* ```ts
	* const mutationCache = queryClient.getMutationCache()
	*
	* const mutations = mutationCache.findAll({ mutationKey: ['addPost'] })
	* ```
	*/ findAll(filters = {}) {
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    /**
	* Notifies every cache listener of an event, in one batch.
	* @internal
	* @param event - The event passed to every listener.
	*/ notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    /**
	* Continues every paused mutation, e.g. when the app comes back online.
	* @internal
	* @returns A promise that resolves once every paused mutation has continued and settled.
	*/ resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]))));
    }
};
/**
* Returns the scope id of a mutation, used to run mutations with the same scope one after another.
* @param mutation - The mutation to read the scope of.
* @returns The mutation's `scope.id`, or `undefined` if it has no scope.
*/ function scopeFor(mutation) {
    return mutation.options.scope?.id;
}
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)");
;
//#region src/notifyManager.ts
/**
* Default scheduling function used by the notify manager.
* Schedules the callback with the system's `setTimeout(callback, 0)`.
*/ const defaultScheduler = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["systemSetTimeoutZero"];
/**
* Creates a notify manager, which schedules and batches notifications to subscribers. Query uses a
* single instance of it, exported as {@link notifyManager}.
* @returns A new notify manager.
*/ function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) queue.push(callback);
        else scheduleFn(()=>{
            notifyFn(callback);
        });
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) scheduleFn(()=>{
            batchNotifyFn(()=>{
                originalQueue.forEach((callback)=>{
                    notifyFn(callback);
                });
            });
        });
    };
    return {
        /**
		* Batches all updates scheduled inside the passed callback.
		* This is mainly used internally to optimize query client updating.
		* Batches can be nested; the queue is only flushed once the outermost `batch` call finishes.
		* The return value of `callback` is passed through.
		* @param callback - The function to run in the batch.
		* @returns The return value of `callback`.
		*/ batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) flush();
            }
            return result;
        },
        /**
		* All calls to the wrapped function will be batched.
		* @param callback - The function to wrap.
		* @returns A function that schedules a call to `callback` with the given arguments.
		*/ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        /**
		* Schedules a function to be run on the next batch.
		* By default, the batch is run with a `setTimeout`, but this can be configured via `setScheduler`.
		*/ schedule,
        /**
		* Use this method to set a custom notify function.
		* This can be used to for example wrap notifications with `React.act` while running tests.
		* @param fn - Receives each notification callback and must call it.
		*/ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
		* Use this method to set a custom function to batch notifications together into a single tick.
		* Framework adapters use this to plug in their own batching primitive, so that a single query
		* update only triggers one re-render instead of one per subscriber.
		* @param fn - Receives a function that runs a batch of notifications and must call it.
		* @example
		* ```ts
		* import { notifyManager } from '@tanstack/query-core'
		* import { batch } from 'solid-js'
		*
		* notifyManager.setBatchNotifyFunction(batch)
		* ```
		*/ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        /**
		* Configures a custom callback that schedules when the next batch runs.
		* The default behavior is `setTimeout(callback, 0)`.
		* @param fn - Receives a callback that runs the next batch, and schedules it.
		* @example
		* ```ts
		* import { notifyManager } from '@tanstack/query-core'
		*
		* // Schedule batches in the next microtask
		* notifyManager.setScheduler(queueMicrotask)
		*
		* // Schedule batches before the next frame is rendered
		* notifyManager.setScheduler(requestAnimationFrame)
		*
		* // Schedule batches some time in the future
		* notifyManager.setScheduler((cb) => setTimeout(cb, 10))
		* ```
		*/ setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
/**
* Handles scheduling and batching callbacks in TanStack Query.
*/ const notifyManager = createNotifyManager();
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
//#region src/onlineManager.ts
/**
* The `OnlineManager` manages the online state within TanStack Query. It can
* be used to change the default event listeners or to manually change the
* online state.
*
* By default, the `onlineManager` assumes an active network connection, and
* listens to the `online` and `offline` events on the `window` object to
* detect changes.
*/ var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) this.setEventListener(this.#setup);
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    /**
	* `setEventListener` can be used to set a custom event listener that will
	* be used to determine the online state. The provided `setup` function
	* receives a `setOnline` callback that should be called with a `boolean`
	* whenever the online state changes.
	* @param setup - Receives the `setOnline` callback, registers the event listener, and may return
	* a cleanup function that is called when the listener is replaced or no longer needed.
	* @example
	* ```ts
	* import NetInfo from '@react-native-community/netinfo'
	* import { onlineManager } from '@tanstack/query-core'
	*
	* onlineManager.setEventListener((setOnline) => {
	*   return NetInfo.addEventListener((state) => {
	*     setOnline(!!state.isConnected)
	*   })
	* })
	* ```
	*/ setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    /**
	* `setOnline` can be used to manually set the online state.
	* @param online - The online state.
	* @example
	* ```ts
	* import { onlineManager } from '@tanstack/query-core'
	*
	* // Set to online
	* onlineManager.setOnline(true)
	*
	* // Set to offline
	* onlineManager.setOnline(false)
	* ```
	*/ setOnline(online) {
        if (this.#online !== online) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    /**
	* `isOnline` can be used to get the current online state.
	* @returns `true` if online.
	*/ isOnline() {
        return this.#online;
    }
};
/**
* Singleton instance of {@link OnlineManager}, used to manage and observe the online state within TanStack Query.
*/ const onlineManager = new OnlineManager();
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)");
;
;
;
;
;
//#region src/query.ts
/**
* Represents a single cached query. A `Query` holds the query's key, options,
* state (data/error/status), and the observers currently subscribed to it.
*
* Instances are created and managed internally by `QueryCache`; application
* code typically interacts with queries indirectly through `QueryClient` or
* a framework hook like `useQuery`. Direct access to a `Query` instance is
* possible via `queryCache.find()`/`findAll()` for inspecting cache state.
* @example
* ```ts
* const queryCache = queryClient.getQueryCache()
* const query = queryCache.find({ queryKey: ['posts'] })
*
* if (query) {
*   console.log(query.state.dataUpdatedAt)
* }
* ```
*/ var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Removable"] {
    #queryType;
    #initialState;
    #revertState;
    #cache;
    #client;
    #retryer;
    #defaultOptions;
    #abortSignalConsumed;
    constructor(config){
        super();
        this.#abortSignalConsumed = false;
        this.#defaultOptions = config.defaultOptions;
        this.setOptions(config.options);
        this.observers = [];
        this.#client = config.client;
        this.#cache = this.#client.getQueryCache();
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        this.#initialState = getDefaultState(this.options);
        this.state = config.state ?? this.#initialState;
        this.scheduleGc();
    }
    /**
	* The `meta` object passed in the query's options, if any.
	* @returns The query's `meta`, or `undefined` if none was set.
	*/ get meta() {
        return this.options.meta;
    }
    /**
	* `'infinite'` for an infinite query, otherwise `undefined`.
	* @internal
	* @returns The type of the query, set from the `_type` option (e.g. `'infinite'`).
	*/ get queryType() {
        return this.#queryType;
    }
    /**
	* The promise for the currently in-flight fetch, if the query is fetching.
	* `undefined` when the query is not fetching.
	* @returns The promise of the in-flight fetch, or `undefined`.
	*/ get promise() {
        return this.#retryer?.promise;
    }
    /**
	* Replaces the query's options and applies their `gcTime`. If the query has no data yet, it gets
	* the `initialData` from the new options, if any.
	* @internal
	* @param options - The new query options, merged on top of the query's default options.
	*/ setOptions(options) {
        this.options = {
            ...this.#defaultOptions,
            ...options
        };
        if (options?._type) this.#queryType = options._type;
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
                this.#initialState = defaultState;
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") this.#cache.remove(this);
    }
    /**
	* Writes new data to the query and marks it as successfully fetched.
	* @internal
	* @param newData - The data to write. Structural sharing with the current data is applied.
	* @param options - Set `updatedAt` to override the timestamp, and `manual` to mark the write as
	* manual (e.g. from `queryClient.setQueryData`).
	* @returns The data that was written.
	*/ setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        this.#dispatch({
            data,
            type: "success",
            dataUpdatedAt: options?.updatedAt,
            manual: options?.manual
        });
        return data;
    }
    /**
	* Merges the given partial state directly into this query's state, notifying observers. Used
	* by persistence and broadcast plugins to restore a state snapshot, and by devtools to let a
	* user manually trigger a loading/error state or edit the cached data.
	* @param state - The partial state to merge into the query's state.
	*/ setState(state) {
        this.#dispatch({
            type: "setState",
            state
        });
    }
    /**
	* Cancels the query's currently in-flight fetch, if any.
	* - Returns a promise that resolves once the cancellation has settled.
	* - If no fetch is in progress, resolves immediately.
	* @param options - Set `revert` to restore the state from before the fetch started, and `silent`
	* to suppress the cancellation error when a new fetch replaces the cancelled one.
	* @returns A promise that resolves once the cancellation has settled.
	* @example
	* ```ts
	* await query.cancel()
	* ```
	*/ cancel(options) {
        const promise = this.#retryer?.promise;
        this.#retryer?.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    /**
	* Clears the query's garbage collection timeout and silently cancels any
	* in-flight fetch. Called by `QueryCache` when the query is removed from
	* the cache.
	* @see {@link Query#cancel}
	*/ destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    /**
	* The state the query was created with.
	* @internal
	* @returns The state the query had when it was first created, used by {@link Query#reset}.
	*/ get resetState() {
        return this.#initialState;
    }
    /**
	* Resets the query back to its initial state (the state it had when it was
	* first created, e.g. any `initialData`), destroying it first to cancel any
	* in-flight fetch.
	*/ reset() {
        this.destroy();
        this.setState(this.resetState);
    }
    /**
	* Returns `true` if the query has at least one observer for which `enabled`
	* does not resolve to `false`.
	* @returns `true` if the query has an enabled observer.
	*/ isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveQueryValue"])(observer.options.enabled, this) !== false);
    }
    /**
	* Returns `true` if the query is disabled, meaning it will not fetch
	* automatically.
	* - If the query has observers, it is disabled when none of them are active
	*   (see `isActive`).
	* - If the query has no observers, it is disabled when its `queryFn` is
	*   `skipToken` or it has never been fetched.
	* @returns `true` if the query is disabled.
	*/ isDisabled() {
        if (this.getObserversCount() > 0) return !this.isActive();
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] || !this.isFetched();
    }
    /**
	* Returns `true` if the query has been fetched, i.e. it has resolved with
	* either data or an error at least once.
	* @returns `true` if the query has been fetched.
	*/ isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    /**
	* Returns `true` if the query has at least one observer configured with
	* `staleTime: 'static'`, meaning it is treated as never stale.
	* @returns `true` if the query is static.
	*/ isStatic() {
        if (this.getObserversCount() > 0) return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveQueryValue"])(observer.options.staleTime, this) === "static");
        return false;
    }
    /**
	* Returns `true` if the query is stale.
	* - If the query has observers, defers to whether any observer's current
	*   result reports `isStale` (which accounts for each observer's own
	*   `staleTime` and `enabled` state).
	* - If the query has no observers, it is considered stale when it has no
	*   data or has been invalidated.
	* @returns `true` if the query is stale.
	* @see {@link Query#isStaleByTime}
	* @example
	* ```ts
	* if (query.isStale()) {
	*   // refetch or otherwise treat the cached data as outdated
	* }
	* ```
	*/ isStale() {
        if (this.getObserversCount() > 0) return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    /**
	* Returns `true` if the query's data is stale relative to the given
	* `staleTime` (defaults to `0`).
	* - A query with no data is always stale.
	* - `staleTime: 'static'` is never stale.
	* - An invalidated query is always stale.
	* - Otherwise, staleness is based on elapsed time since `dataUpdatedAt`.
	* @param staleTime - The time, in milliseconds, after which data is considered stale, or
	* `'static'` to never treat existing data as stale. A query without data is stale either way.
	* @returns `true` if the query's data is stale.
	* @see {@link Query#isStale}
	* @example
	* ```ts
	* const isStale = query.isStaleByTime(1000 * 60)
	* ```
	*/ isStaleByTime(staleTime = 0) {
        if (this.state.data === void 0) return true;
        if (staleTime === "static") return false;
        if (this.state.isInvalidated) return true;
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    /**
	* Refetches the query when the window regains focus, if an observer wants that, and continues a
	* paused fetch.
	* @internal
	*/ onFocus() {
        this.observers.find((x)=>x.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    /**
	* Refetches the query when the app reconnects, if an observer wants that, and continues a paused
	* fetch.
	* @internal
	*/ onOnline() {
        this.observers.find((x)=>x.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    /**
	* Subscribes an observer to the query and stops its garbage collection.
	* @internal
	* @param observer - The observer to add. Adding an observer that is already subscribed does
	* nothing.
	*/ addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            this.#cache.notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    /**
	* Unsubscribes an observer from the query.
	* @internal
	* @param observer - The observer to remove. When the last observer is removed, the in-flight
	* fetch is cancelled if its abort signal was consumed (otherwise only its retries are stopped),
	* and garbage collection is scheduled.
	*/ removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
            if (!this.observers.length) {
                if (this.#retryer) {
                    if (this.#abortSignalConsumed || this.state.fetchStatus === "paused" && this.state.status === "pending") this.#retryer.cancel({
                        revert: true
                    });
                    else this.#retryer.cancelRetry();
                }
                this.scheduleGc();
            }
            this.#cache.notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    /**
	* Returns the number of observers currently subscribed to this query.
	* @returns The number of observers.
	* @example
	* ```ts
	* if (query.getObserversCount() === 0) {
	*   // no component is currently watching this query
	* }
	* ```
	*/ getObserversCount() {
        return this.observers.length;
    }
    /**
	* Marks the query as invalidated, unless it is already invalidated. This
	* updates `state.isInvalidated` and notifies observers, but does not by
	* itself trigger a refetch.
	* @example
	* ```ts
	* query.invalidate()
	* ```
	*/ invalidate() {
        if (!this.state.isInvalidated) this.#dispatch({
            type: "invalidate"
        });
    }
    /**
	* Fetches the query, i.e. runs its `queryFn` (through any configured
	* retryer/behavior) and updates the query's state with the result.
	* - If a fetch is already in flight, returns its promise instead of
	*   starting a new one, unless `fetchOptions.cancelRefetch` is set and the
	*   query already has data, in which case the current fetch is silently
	*   cancelled first.
	* - If `options` is passed, it replaces the query's current options
	*   before fetching.
	* @param options - Query options that replace the query's current options before fetching. They
	* are not applied when an in-flight fetch is reused.
	* @param fetchOptions - Set `cancelRefetch` to cancel an in-flight fetch first (only if the query
	* already has data), and `meta` to pass extra information to the query's behavior.
	* @returns A promise that resolves with the fetched data, or rejects with the fetch error. If the
	* fetch is cancelled with `revert` while the query has data, it resolves with the restored data
	* instead.
	*/ async fetch(options, fetchOptions) {
        if (this.state.fetchStatus !== "idle" && this.#retryer?.status() !== "rejected") {
            if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) this.cancel({
                silent: true
            });
            else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
            }
        }
        if (options) this.setOptions(options);
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) this.setOptions(observer.options);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    this.#abortSignalConsumed = true;
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext = {
                    client: this.#client,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext);
                return queryFnContext;
            };
            const queryFnContext = createQueryFnContext();
            this.#abortSignalConsumed = false;
            if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#client,
                state: this.state,
                fetchFn
            };
            addSignalProperty(context);
            return context;
        };
        const context = createFetchContext();
        (this.#queryType === "infinite" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(this.options.pages) : this.options.behavior)?.onFetch(context, this);
        this.#revertState = this.state;
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) this.#dispatch({
            type: "fetch",
            meta: context.fetchOptions?.meta
        });
        const retryer = this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions?.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CancelledError"] && error.revert) this.setState({
                    ...this.#revertState,
                    fetchStatus: "idle"
                });
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        });
        try {
            const data = await retryer.start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                throw new Error(`${this.queryHash} data is undefined`);
            }
            this.setData(data);
            this.#cache.config.onSuccess?.(data, this);
            this.#cache.config.onSettled?.(data, this.state.error, this);
            return data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) return this.#retryer.promise;
                else if (error.revert) {
                    if (this.state.data === void 0) throw error;
                    return this.state.data;
                }
            }
            this.#dispatch({
                type: "error",
                error
            });
            this.#cache.config.onError?.(error, this);
            this.#cache.config.onSettled?.(this.state.data, error, this);
            throw error;
        } finally{
            if (this.#retryer === retryer) this.#retryer = void 0;
            this.scheduleGc();
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        fetchFailureCount: action.failureCount,
                        fetchFailureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...state,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...state,
                        ...fetchState(state.data, this.options),
                        fetchMeta: action.meta ?? null
                    };
                case "success":
                    const newState = {
                        ...state,
                        ...successState(action.data, action.dataUpdatedAt),
                        dataUpdateCount: state.dataUpdateCount + 1,
                        ...!action.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    this.#revertState = action.manual ? newState : void 0;
                    return newState;
                case "error":
                    const error = action.error;
                    return {
                        ...state,
                        error,
                        errorUpdateCount: state.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: state.fetchFailureCount + 1,
                        fetchFailureReason: error,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: true
                    };
                case "invalidate":
                    return {
                        ...state,
                        isInvalidated: true
                    };
                case "setState":
                    return {
                        ...state,
                        ...action.state
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.observers.slice().forEach((observer)=>{
                observer.onQueryUpdate();
            });
            this.#cache.notify({
                query: this,
                type: "updated",
                action
            });
        });
    }
};
/**
* Returns the state changes applied when a query starts fetching.
* @param data - The query's current data. If it is `undefined`, the query is also reset to
* `'pending'` with no error.
* @param options - The query options, whose `networkMode` decides whether the query is `'fetching'`
* or `'paused'`.
* @returns The partial query state for a starting fetch.
*/ function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
/**
* Returns the state changes applied when a query receives data.
* @param data - The new data.
* @param dataUpdatedAt - The timestamp the data is recorded with. Defaults to the current time.
* @returns The partial query state for a successful update.
*/ function successState(data, dataUpdatedAt) {
    return {
        data,
        dataUpdatedAt: dataUpdatedAt ?? Date.now(),
        error: null,
        isInvalidated: false,
        status: "success"
    };
}
/**
* Returns the initial state of a query, based on its `initialData` and `initialDataUpdatedAt`
* options.
* @param options - The query options.
* @returns The initial query state: `'success'` if `initialData` is set, otherwise `'pending'`.
*/ function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)");
;
;
;
;
//#region src/queryCache.ts
/**
* The `QueryCache` is the storage mechanism for TanStack Query. It stores all the data, meta
* information, and state of the queries it contains.
*
* Normally, you will not interact with the `QueryCache` directly and instead use a `QueryClient`
* for a specific cache. You can subscribe to it (inherited from `Subscribable`) to be informed of
* safe/known updates to the cache, such as queries being added, removed, or updated — updates made
* outside of the cache's own tracked mechanisms (e.g. mutating a query's state object directly) do
* not notify subscribers.
* @example
* ```ts
* const unsubscribe = queryCache.subscribe((event) => {
*   console.log(event.type, event.query)
* })
* ```
*/ var QueryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #queries;
    constructor(config = {}){
        super();
        this.config = config;
        this.#queries = /* @__PURE__ */ new Map();
    }
    /**
	* Returns the existing `Query` instance for the given options' `queryKey`/`queryHash`, or
	* builds and adds a new one to the cache if none exists yet. Used by framework adapters and
	* plugins (e.g. broadcast/persistence) that need to get-or-create a `Query` directly, bypassing
	* the reactive `QueryObserver` machinery.
	* @param client - The client the query belongs to, used to default its options.
	* @param options - The query options, including the `queryKey`. A new query is created with the
	* options defaulted by {@link QueryClient#defaultQueryOptions}.
	* @param state - The initial state of a newly created query, e.g. when hydrating. Ignored if the
	* query already exists.
	* @returns The existing or newly created query.
	* @example
	* ```ts
	* const queryCache = queryClient.getQueryCache()
	*
	* const query = queryCache.build(queryClient, {
	*   queryKey: ['posts'],
	*   queryFn: fetchPosts,
	* })
	* ```
	*/ build(client, options, state) {
        const queryKey = options.queryKey;
        const queryHash = options.queryHash ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"]({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    /**
	* Adds a query to the cache.
	* @internal
	* @param query - The query to add. If a query with the same hash is already cached, nothing
	* happens.
	*/ add(query) {
        if (!this.#queries.has(query.queryHash)) {
            this.#queries.set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    /**
	* Destroys the given `Query` and removes it from the cache, notifying subscribers with a
	* `'removed'` event. A no-op if the query is no longer the one currently stored under its hash
	* (e.g. it was already replaced). Used by plugins (e.g. the broadcast client) that mirror
	* removals across `QueryCache` instances.
	* @param query - The query to remove.
	* @example
	* ```ts
	* const queryCache = queryClient.getQueryCache()
	* const query = queryCache.find({ queryKey: ['posts'] })
	*
	* if (query) {
	*   queryCache.remove(query)
	* }
	* ```
	*/ remove(query) {
        if (this.#queries.get(query.queryHash) === query) {
            query.destroy();
            this.#queries.delete(query.queryHash);
            this.notify({
                type: "removed",
                query
            });
        }
    }
    /**
	* Removes all queries from the cache.
	* @example
	* ```ts
	* const queryCache = queryClient.getQueryCache()
	*
	* queryCache.clear()
	* ```
	*/ clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    /**
	* Returns the `Query` instance stored under the given `queryHash`, or `undefined` if none
	* exists. Unlike {@link QueryCache#find}, this looks up by the already-computed hash rather
	* than by `QueryFilters`. Used by plugins (e.g. broadcast/hydration) that already have a hash
	* to look up directly.
	* @param queryHash - The hash of the query to look up.
	* @returns The query stored under the hash, or `undefined`.
	* @example
	* ```ts
	* const queryCache = queryClient.getQueryCache()
	* const queryHash = hashKey(['posts'])
	*
	* const query = queryCache.get(queryHash)
	* ```
	*/ get(queryHash) {
        return this.#queries.get(queryHash);
    }
    /**
	* Returns all queries within the cache.
	* @returns Every query in the cache.
	* @example
	* ```ts
	* const queryCache = queryClient.getQueryCache()
	*
	* const queries = queryCache.getAll()
	* ```
	*/ getAll() {
        return [
            ...this.#queries.values()
        ];
    }
    /**
	* A slightly more advanced method that can be used to get an existing query instance from the
	* cache. This instance not only contains all the state for the query, but all of the instances,
	* and underlying guts of the query as well. If the query does not exist, `undefined` is
	* returned.
	*
	* This is not typically needed for most applications, but can come in handy when needing more
	* information about a query in rare scenarios (e.g. looking at `query.state.dataUpdatedAt` to
	* decide whether a query is fresh enough to be used as an initial value).
	* @param filters - The filters to match, including the required `queryKey`. `exact` defaults to
	* `true`.
	* @returns The first matching query, or `undefined`.
	* @see {@link QueryCache#findAll}
	* @example
	* ```ts
	* const queryCache = queryClient.getQueryCache()
	*
	* const query = queryCache.find({ queryKey: ['posts'] })
	* ```
	*/ find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    /**
	* An even more advanced method that can be used to get existing query instances from the cache
	* that partially match a query key. If no queries match, an empty array is returned.
	*
	* This is not typically needed for most applications, but can come in handy when needing more
	* information about queries in rare scenarios.
	* @param filters - The filters to match. Without filters, every query is returned.
	* @returns The matching queries.
	* @see {@link QueryCache#find}
	* @example
	* ```ts
	* const queryCache = queryClient.getQueryCache()
	*
	* const queries = queryCache.findAll({ queryKey: ['posts'] })
	* ```
	*/ findAll(filters = {}) {
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    /**
	* Notifies every cache listener of an event, in one batch.
	* @internal
	* @param event - The event passed to every listener.
	*/ notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    /**
	* Calls {@link Query#onFocus} on every cached query, in one batch.
	* @internal
	*/ onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    /**
	* Calls {@link Query#onOnline} on every cached query, in one batch.
	* @internal
	*/ onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
};
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClient",
    ()=>QueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
//#region src/queryClient.ts
/**
* `QueryClient` is used to interact with a cache of queries and mutations. It owns a
* `QueryCache` and a `MutationCache` (creating default ones if none are passed in) and holds
* the default options that are applied to queries and mutations created through it.
* @example
* ```ts
* const queryClient = new QueryClient({
*   defaultOptions: {
*     queries: {
*       staleTime: Infinity,
*     },
*   },
* })
*
* await queryClient.query({ queryKey: ['posts'], queryFn: fetchPosts })
* ```
*/ var QueryClient = class {
    #queryCache;
    #mutationCache;
    #defaultOptions;
    #queryDefaults;
    #mutationDefaults;
    #mountCount;
    #unsubscribeFocus;
    #unsubscribeOnline;
    constructor(config = {}){
        this.#queryCache = config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryCache"]();
        this.#mutationCache = config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MutationCache"]();
        this.#defaultOptions = config.defaultOptions || {};
        this.#queryDefaults = /* @__PURE__ */ new Map();
        this.#mutationDefaults = /* @__PURE__ */ new Map();
        this.#mountCount = 0;
    }
    /**
	* Called by a framework adapter's `QueryClientProvider`-equivalent when it mounts, to start
	* listening for focus/online events and resume paused mutations. Ref-counted via an internal
	* mount count, so nested or multiple providers sharing the same `QueryClient` don't tear down
	* the shared listeners until the last one unmounts.
	*/ mount() {
        this.#mountCount++;
        if (this.#mountCount !== 1) return;
        this.#unsubscribeFocus = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                this.#queryCache.onFocus();
            }
        });
        this.#unsubscribeOnline = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                this.#queryCache.onOnline();
            }
        });
    }
    /**
	* The inverse of {@link QueryClient#mount} — called by a framework adapter's
	* `QueryClientProvider`-equivalent when it unmounts. Only tears down the focus/online
	* listeners once the mount count returns to `0`.
	*/ unmount() {
        this.#mountCount--;
        if (this.#mountCount !== 0) return;
        this.#unsubscribeFocus?.();
        this.#unsubscribeFocus = void 0;
        this.#unsubscribeOnline?.();
        this.#unsubscribeOnline = void 0;
    }
    /**
	* Returns the number of queries in the cache that are currently fetching, optionally
	* matching a set of filters. This includes background-fetching, loading new pages, and
	* loading more infinite query results.
	* @param filters - Narrows down which fetching queries are counted. Without filters, every
	* fetching query is counted.
	* @returns The number of matching queries whose `fetchStatus` is `'fetching'`.
	* @example
	* ```ts
	* if (queryClient.isFetching()) {
	*   console.log('At least one query is fetching!')
	* }
	* ```
	*/ isFetching(filters) {
        return this.#queryCache.findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    /**
	* Returns the number of mutations in the cache that are currently pending, optionally
	* matching a set of filters.
	* @param filters - Narrows down which pending mutations are counted. Without filters, every
	* pending mutation is counted.
	* @returns The number of matching mutations whose `status` is `'pending'`.
	* @example
	* ```ts
	* if (queryClient.isMutating()) {
	*   console.log('At least one mutation is pending!')
	* }
	* ```
	*/ isMutating(filters) {
        return this.#mutationCache.findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
	* Imperative (non-reactive) way to retrieve data for a QueryKey.
	* Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
	*
	* Hint: Do not use this function inside a component, because it won't receive updates.
	* Use `useQuery` to create a `QueryObserver` that subscribes to changes.
	* @param queryKey - The query key of the query to read.
	* @returns The cached data for the query, or `undefined` if no query with this key has been observed yet.
	* @see {@link QueryClient#getQueriesData}
	*/ getQueryData(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state.data;
    }
    /**
	* Returns the cached data of a query, or fetches it if there is none. With `revalidateIfStale`,
	* stale cached data is also refetched in the background.
	* @param options - The query options. If the query has no cached data yet, it is fetched with
	* these options.
	* @returns A promise that resolves to the cached data, or to the fetched data if nothing was
	* cached yet.
	* @deprecated Use queryClient.query({ ...options, staleTime: 'static' }) instead. This method will be removed in the next major version.
	*/ ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = this.#queryCache.build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) return this.fetchQuery(options);
        if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveQueryValue"])(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
        return Promise.resolve(cachedData);
    }
    /**
	* Imperative (non-reactive) way to retrieve the cached data of multiple queries at once.
	* Only queries matching the given filters are returned; if none match, an empty array is
	* returned.
	*
	* Because the matched queries can hold data of different shapes (e.g. a broad filter can match
	* queries with unrelated data types), the `TQueryFnData` generic defaults to `unknown` rather
	* than being inferred. Passing a more specific type is a convenience for call sites that know
	* every matched query holds the same shape — it is not checked against the actual cache
	* contents.
	* @param filters - The filters that select which queries to read.
	* @returns An array of query key and data pairs. The data is `undefined` for a query with no cached data.
	* @see {@link QueryClient#getQueryData}
	* @example
	* ```ts
	* const data = queryClient.getQueriesData({ queryKey: ['posts'] })
	* ```
	*/ getQueriesData(filters) {
        return this.#queryCache.findAll(filters).map(({ queryKey, state })=>{
            return [
                queryKey,
                state.data
            ];
        });
    }
    /**
	* Synchronous way to immediately update a query's cached data. If the updater (or the value
	* passed) resolves to `undefined`, the cache is left untouched and no query is created;
	* otherwise, if the query does not exist yet, it will be created. To update multiple queries
	* at once by partially matching query keys, use {@link QueryClient#setQueriesData} instead.
	*
	* Updates must be performed immutably: do not mutate `oldData`, or data previously retrieved
	* via {@link QueryClient#getQueryData}, in place.
	* @param queryKey - The query key to set data for.
	* @param updater - Either the new data, or a function that receives the current data (which
	* may be `undefined`) and returns the new data.
	* @param options - Set `updatedAt` to override the timestamp the written data is recorded with.
	* @returns The data that was written, or `undefined` if the updater returned `undefined` — in that case
	* the write is skipped and the cache is left unchanged.
	* @example
	* ```ts
	* queryClient.setQueryData(['posts'], newPosts)
	*
	* // Or, using an updater function that receives the current data:
	* queryClient.setQueryData(['posts'], (oldPosts) => [...oldPosts, newPost])
	* ```
	*/ setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const prevData = this.#queryCache.get(defaultedOptions.queryHash)?.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) return;
        return this.#queryCache.build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    /**
	* Synchronous way to immediately update the cached data of multiple queries at once, using
	* filters or partial query key matching. Only queries that already exist and match the given
	* filters are updated; no new cache entries are created. Internally this calls
	* {@link QueryClient#setQueryData} for each matching query.
	* @param filters - The filters that select which existing queries to update.
	* @param updater - Either the new data, or a function that receives each matched query's current
	* data (which may be `undefined`) and returns the new data.
	* @param options - Set `updatedAt` to override the timestamp the written data is recorded with.
	* @returns One `[queryKey, data]` tuple per matched query, in the same shape and with the same
	* `undefined` case as {@link QueryClient#setQueryData}.
	* @example
	* ```ts
	* queryClient.setQueriesData({ queryKey: ['posts'] }, (oldPosts) =>
	*   oldPosts ? oldPosts.filter((post) => post.id !== deletedId) : oldPosts,
	* )
	* ```
	*/ setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map(({ queryKey })=>[
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ]));
    }
    /**
	* Imperative (non-reactive) way to retrieve an existing query's state. If the query does not
	* exist, `undefined` is returned.
	* @param queryKey - The query key of the query to read.
	* @returns The query's state, or `undefined` if no query with this key exists.
	* @example
	* ```ts
	* const state = queryClient.getQueryState(['posts'])
	* console.log(state?.dataUpdatedAt)
	* ```
	*/ getQueryState(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state;
    }
    /**
	* Removes queries from the cache that match the given filters. Unlike
	* {@link QueryClient#invalidateQueries} or {@link QueryClient#refetchQueries}, this removes
	* matching queries from the cache instead of refetching them. Without filters, every query in
	* the cache is removed.
	* @param filters - The filters that select which queries to remove. Without filters, every query
	* is removed.
	* @example
	* ```ts
	* queryClient.removeQueries({ queryKey: ['posts'], exact: true })
	* ```
	*/ removeQueries(filters) {
        const queryCache = this.#queryCache;
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    /**
	* Resets queries matching the given filters back to their initial state (e.g. any
	* `initialData`), notifying subscribers rather than removing them. Active queries among the
	* matched set are then refetched, and the returned promise resolves once that refetch settles.
	* @param filters - The filters that select which queries to reset. Without filters, every query
	* is reset.
	* @param options - Passed to the refetch of the active matched queries, e.g. `cancelRefetch` and
	* `throwOnError`.
	* @returns A promise that resolves once the refetch of the active matched queries settles.
	* @example
	* ```ts
	* await queryClient.resetQueries({ queryKey: ['posts'], exact: true })
	* ```
	*/ resetQueries(filters, options) {
        const queryCache = this.#queryCache;
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            const matched = queryCache.findAll(filters);
            const queriesToRefetch = new Set(matched);
            matched.forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                predicate: (query)=>queriesToRefetch.has(query)
            }, options);
        });
    }
    /**
	* Cancels outgoing fetches for queries matching the given filters. Most useful when performing
	* optimistic updates, since any outgoing refetch that resolves afterwards would otherwise
	* overwrite the optimistic update. By default (`revert: true`), a cancelled query's data is
	* reverted to its state before the outgoing fetch started.
	*
	* The returned promise never rejects, even if individual cancellations fail.
	* @param filters - The filters that select which queries to cancel. Without filters, every query
	* is cancelled.
	* @param cancelOptions - Passed to each matched query's cancellation. `revert` defaults to
	* `true`.
	* @returns A promise that resolves once every cancellation has settled.
	* @example
	* ```ts
	* await queryClient.cancelQueries({ queryKey: ['posts'], exact: true })
	* ```
	*/ cancelQueries(filters, cancelOptions = {}) {
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    /**
	* Marks queries matching the given filters as invalidated. Unlike
	* {@link QueryClient#removeQueries}, invalidated queries stay in the cache.
	*
	* Unless `filters.refetchType` is `'none'`, matching queries are then refetched via
	* {@link QueryClient#refetchQueries}, using `filters.refetchType` if set, otherwise
	* `filters.type`, otherwise `'active'`.
	* @param filters - The filters that select which queries to invalidate, plus `refetchType` to
	* control which of them to refetch afterwards. Without filters, every query is invalidated.
	* @param options - Passed to {@link QueryClient#refetchQueries}, e.g. `cancelRefetch` and
	* `throwOnError`.
	* @returns A promise that resolves once the refetch settles, or immediately if `refetchType` is
	* `'none'`.
	* @example
	* ```ts
	* await queryClient.invalidateQueries({ queryKey: ['posts'], refetchType: 'active' })
	* ```
	*/ invalidateQueries(filters, options = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#queryCache.findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if (filters?.refetchType === "none") return Promise.resolve();
            return this.refetchQueries({
                ...filters,
                type: filters?.refetchType ?? filters?.type ?? "active"
            }, options);
        });
    }
    /**
	* Refetches queries matching the given filters, regardless of whether they are stale. Without
	* filters, every query in the cache is refetched. Queries that are disabled, or static (only
	* have observers with a static `staleTime`), are never refetched.
	*
	* By default (`cancelRefetch: true`), a currently running fetch is cancelled before the new
	* one starts. The returned promise resolves once all matching queries have settled; it does
	* not reject on individual query failures unless `throwOnError` is set.
	* @param filters - The filters that select which queries to refetch. Without filters, every query
	* in the cache is included.
	* @param options - Set `cancelRefetch` to `false` to keep a running fetch instead of cancelling
	* it, and `throwOnError` to `true` to reject when a refetch fails.
	* @returns A promise that resolves once every matched query has settled.
	* @example
	* ```ts
	* // refetch all active queries partially matching a query key:
	* await queryClient.refetchQueries({ queryKey: ['posts'], type: 'active' })
	* ```
	*/ refetchQueries(filters, options = {}) {
        const fetchOptions = {
            ...options,
            cancelRefetch: options.cancelRefetch ?? true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    /**
	* Asynchronous method to fetch and cache a query, resolving with the data or throwing with
	* the error.
	*
	* If the query already exists in the cache and its data is not stale (per the given
	* `staleTime`), the cached data is returned without fetching. Otherwise, the query is fetched
	* and the promise resolves once the fetch settles. If a `select` function is provided, it is
	* applied to the data in both cases (cached or freshly fetched) before it is returned.
	*
	* Unlike a reactive observer, retries are disabled by default here (`retry: false`) unless
	* explicitly configured, since there is no component to catch a thrown error and retry through
	* re-render.
	*
	* The accepted options are `QueryObserverOptions` minus the fields that only make sense for a
	* reactive observer — `enabled`, `refetchInterval`, `refetchIntervalInBackground`,
	* `refetchOnWindowFocus`, `refetchOnReconnect`, `refetchOnMount`, `retryOnMount`,
	* `notifyOnChangeProps`, `throwOnError`, `suspense`, and `placeholderData` are not part of this
	* method's options.
	*
	* This method replaces the deprecated `fetchQuery`, and — combined with
	* `{ staleTime: 'static' }` — the deprecated `ensureQueryData`.
	* @param options - The query options, including the `queryKey` and the `queryFn` used if the
	* query needs to fetch.
	* @returns A promise that resolves to the data, or to the result of `select` if provided. It
	* rejects with the error from the fetch or from `select`.
	* @example
	* ```ts
	* try {
	*   const data = await queryClient.query({ queryKey, queryFn, staleTime: 10000 })
	* } catch (error) {
	*   console.log(error)
	* }
	* ```
	*/ async query(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
        const query = this.#queryCache.build(this, defaultedOptions);
        const queryData = query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveQueryValue"])(defaultedOptions.staleTime, query)) ? await query.fetch(defaultedOptions) : query.state.data;
        const select = defaultedOptions.select;
        if (select) return select(queryData);
        return queryData;
    }
    /**
	* Fetches and caches a query, or returns its cached data if it isn't stale. Unlike in observers,
	* the fetch isn't retried unless `retry` is set.
	* @param options - The query options, including the `queryKey` and the `queryFn` used if the
	* query needs to fetch.
	* @returns A promise that resolves to the cached or fetched data, or rejects with the fetch
	* error.
	* @deprecated Use queryClient.query(options) instead. This method will be removed in the next major version.
	*/ fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
        const query = this.#queryCache.build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveQueryValue"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    /**
	* Fetches and caches a query like {@link QueryClient#fetchQuery}, but ignores the result and any
	* error.
	* @param options - The query options, including the `queryKey` and the `queryFn` used if the
	* query needs to fetch.
	* @returns A promise that resolves once the fetch settles. It never rejects.
	* @deprecated Use queryClient.query(options) instead. You can swallow errors with `.catch(noop)`. This method will be removed in the next major version.
	*/ prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    /**
	* Asynchronous method to fetch and cache an infinite query, resolving with an
	* {@link InfiniteData} object or throwing with the error.
	*
	* Behaves like {@link QueryClient#query}, accepting the same options (minus
	* `initialPageParam`), plus the required `initialPageParam`, and an optional `pages` /
	* `getNextPageParam` pair used to refetch a fixed number of pages from the start.
	*
	* This method replaces the deprecated `fetchInfiniteQuery`, and — combined with
	* `{ staleTime: 'static' }` — the deprecated `ensureInfiniteQueryData`.
	* @param options - The infinite query options, including the `queryKey`, the `queryFn`, and the
	* `initialPageParam`.
	* @returns A promise that resolves to the {@link InfiniteData}, or to the result of `select` if
	* provided. It rejects with the error from the fetch or from `select`.
	* @example
	* ```ts
	* try {
	*   const data = await queryClient.infiniteQuery({ queryKey, queryFn, initialPageParam: 0 })
	*   console.log(data.pages)
	* } catch (error) {
	*   console.log(error)
	* }
	* ```
	*/ infiniteQuery(options) {
        options._type = "infinite";
        return this.query(options);
    }
    /**
	* Fetches and caches an infinite query, or returns its cached data if it isn't stale.
	* @param options - The infinite query options, including the `queryKey`, the `queryFn`, and the
	* `initialPageParam`.
	* @returns A promise that resolves to the cached or fetched {@link InfiniteData}, or rejects with
	* the fetch error.
	* @deprecated Use queryClient.infiniteQuery(options) instead. This method will be removed in the next major version.
	*/ fetchInfiniteQuery(options) {
        options._type = "infinite";
        return this.fetchQuery(options);
    }
    /**
	* Fetches and caches an infinite query like {@link QueryClient#fetchInfiniteQuery}, but ignores
	* the result and any error.
	* @param options - The infinite query options, including the `queryKey`, the `queryFn`, and the
	* `initialPageParam`.
	* @returns A promise that resolves once the fetch settles. It never rejects.
	* @deprecated Use queryClient.infiniteQuery(options) instead. You can swallow errors with `.catch(noop)`. This method will be removed in the next major version.
	*/ prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    /**
	* Returns the cached data of an infinite query, or fetches it if there is none. With
	* `revalidateIfStale`, stale cached data is also refetched in the background.
	* @param options - The infinite query options. If the query has no cached data yet, it is fetched
	* with these options.
	* @returns A promise that resolves to the cached {@link InfiniteData}, or to the fetched data if
	* nothing was cached yet.
	* @deprecated Use queryClient.infiniteQuery({ ...options, staleTime: 'static' }) instead. This method will be removed in the next major version.
	*/ ensureInfiniteQueryData(options) {
        options._type = "infinite";
        return this.ensureQueryData(options);
    }
    /**
	* Resumes mutations that were paused because there was no network connection. Does nothing
	* (resolving immediately) if the client is currently offline.
	* @returns A promise that resolves once the resumed mutations have settled.
	* @example
	* ```ts
	* import { QueryClient } from '@tanstack/query-core'
	*
	* const queryClient = new QueryClient()
	* await queryClient.resumePausedMutations()
	* ```
	*/ resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) return this.#mutationCache.resumePausedMutations();
        return Promise.resolve();
    }
    /**
	* Returns the query cache this client is connected to.
	* @returns The {@link QueryCache} instance.
	* @example
	* ```ts
	* import { QueryClient } from '@tanstack/query-core'
	*
	* const queryClient = new QueryClient()
	* const queryCache = queryClient.getQueryCache()
	* const queries = queryCache.findAll({ queryKey: ['posts'] })
	* ```
	*/ getQueryCache() {
        return this.#queryCache;
    }
    /**
	* Returns the mutation cache this client is connected to.
	* @returns The {@link MutationCache} instance.
	* @example
	* ```ts
	* import { QueryClient } from '@tanstack/query-core'
	*
	* const queryClient = new QueryClient()
	* const mutationCache = queryClient.getMutationCache()
	* const mutations = mutationCache.findAll({ status: 'pending' })
	* ```
	*/ getMutationCache() {
        return this.#mutationCache;
    }
    /**
	* Returns the default options that were set when creating the client, or via
	* {@link QueryClient#setDefaultOptions}.
	* @returns The client's current default options.
	* @example
	* ```ts
	* import { QueryClient } from '@tanstack/query-core'
	*
	* const queryClient = new QueryClient()
	* const defaultOptions = queryClient.getDefaultOptions()
	* ```
	*/ getDefaultOptions() {
        return this.#defaultOptions;
    }
    /**
	* Dynamically sets the default options for this client, overwriting any previously defined
	* default options.
	* @param options - The new default options for queries and mutations.
	* @see {@link QueryClient#getDefaultOptions}
	* @example
	* ```ts
	* import { QueryClient } from '@tanstack/query-core'
	*
	* const queryClient = new QueryClient()
	* queryClient.setDefaultOptions({
	*   queries: {
	*     staleTime: Infinity,
	*   },
	* })
	* ```
	*/ setDefaultOptions(options) {
        this.#defaultOptions = options;
    }
    /**
	* Sets default options for queries whose query key partially matches the given `queryKey`.
	*
	* If several registered query defaults match a given query key, they are merged together in
	* registration order by {@link QueryClient#getQueryDefaults}, so register defaults from the
	* most generic key to the least generic one — more specific defaults should be registered
	* after more generic ones so they take precedence.
	* @param queryKey - The query key that query keys are partially matched against.
	* @param options - The default options applied to matching queries.
	* @example
	* ```ts
	* queryClient.setQueryDefaults(['posts'], { queryFn: fetchPosts })
	*
	* await queryClient.query({ queryKey: ['posts'] })
	* ```
	*/ setQueryDefaults(queryKey, options) {
        this.#queryDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    /**
	* Returns the default options registered for queries whose query key partially matches the
	* given `queryKey`, via {@link QueryClient#setQueryDefaults}. If multiple registered defaults
	* match, they are merged together in registration order.
	* @param queryKey - The query key to look up registered defaults for.
	* @returns The merged default options of every registration that matches, or an empty object if
	* none match.
	* @example
	* ```ts
	* const defaultOptions = queryClient.getQueryDefaults(['posts'])
	* ```
	*/ getQueryDefaults(queryKey) {
        const defaults = [
            ...this.#queryDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
        });
        return result;
    }
    /**
	* Sets default options for mutations whose mutation key partially matches the given
	* `mutationKey`. As with {@link QueryClient#setQueryDefaults}, the order of registration
	* matters when several registered defaults match the same mutation key.
	* @param mutationKey - The mutation key that mutation keys are partially matched against.
	* @param options - The default options applied to matching mutations.
	* @see {@link QueryClient#getMutationDefaults}
	* @example
	* ```ts
	* queryClient.setMutationDefaults(['addPost'], { mutationFn: addPost })
	* ```
	*/ setMutationDefaults(mutationKey, options) {
        this.#mutationDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    /**
	* Returns the default options registered for mutations whose mutation key partially matches
	* the given `mutationKey`, via {@link QueryClient#setMutationDefaults}. If multiple registered
	* defaults match, they are merged together in registration order.
	* @param mutationKey - The mutation key to look up registered defaults for.
	* @returns The merged default options of every registration that matches, or an empty object if
	* none match.
	* @example
	* ```ts
	* const defaultOptions = queryClient.getMutationDefaults(['addPost'])
	* ```
	*/ getMutationDefaults(mutationKey) {
        const defaults = [
            ...this.#mutationDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
        });
        return result;
    }
    /**
	* Called by framework adapters (e.g. inside `useQuery`) to resolve the options passed by the
	* caller into their final, defaulted form: merging the client's own `defaultOptions.queries`,
	* then `queryClient.setQueryDefaults` for the given `queryKey`, then the caller's options on
	* top. A no-op if the options are already defaulted (`_defaulted: true`).
	* @param options - The query options passed by the caller.
	* @returns The defaulted options, with `queryHash` and dependent defaults (e.g.
	* `refetchOnReconnect`) filled in.
	*/ defaultQueryOptions(options) {
        if (options._defaulted) return options;
        const defaultedOptions = {
            ...this.#defaultOptions.queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
        if (defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"]) defaultedOptions.enabled = false;
        return defaultedOptions;
    }
    /**
	* The mutation counterpart of {@link QueryClient#defaultQueryOptions}. Called by framework
	* adapters (e.g. inside `useMutation`) to merge the client's `defaultOptions.mutations`, then
	* `queryClient.setMutationDefaults` for the given `mutationKey`, then the caller's options on
	* top. A no-op if the options are already defaulted (`_defaulted: true`).
	* @param options - The mutation options passed by the caller.
	* @returns The defaulted options.
	*/ defaultMutationOptions(options) {
        if (options?._defaulted) return options;
        return {
            ...this.#defaultOptions.mutations,
            ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    /**
	* Clears both the query cache and the mutation cache this client is connected to.
	* @example
	* ```ts
	* import { QueryClient } from '@tanstack/query-core'
	*
	* const queryClient = new QueryClient()
	* queryClient.clear()
	* ```
	*/ clear() {
        this.#queryCache.clear();
        this.#mutationCache.clear();
    }
};
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/environmentManager.js [app-rsc] (ecmascript)");
;
;
;
//#region src/removable.ts
/**
* The base class for cache entries that are garbage collected once nothing is using them —
* `Query` and `Mutation` both extend it. `gcTime` controls how long an unused entry is kept.
*/ var Removable = class {
    #gcTimeout;
    /**
	* Clears the pending garbage collection timeout, so the entry is no longer scheduled for removal.
	* A subclass may override this to release what it holds on to as well — `Query` also cancels any
	* in-flight fetch.
	*/ destroy() {
        this.clearGcTimeout();
    }
    /**
	* Schedules the entry to be removed from its cache after `gcTime`, replacing any timeout scheduled
	* before. Nothing is scheduled if `gcTime` is `Infinity`.
	*/ scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) this.#gcTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            this.optionalRemove();
        }, this.gcTime);
    }
    /**
	* Updates `gcTime`, keeping the longest one seen so far. Without a value, it defaults to 5 minutes
	* on the client and `Infinity` on the server.
	* @param newGcTime - The `gcTime` from the latest options, if any.
	*/ updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"])() ? Infinity : 3e5));
    }
    /**
	* Cancels the scheduled removal, if there is one.
	*/ clearGcTimeout() {
        if (this.#gcTimeout !== void 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/environmentManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)");
;
;
;
;
//#region src/retryer.ts
/**
* The default `retryDelay`: doubles with every failure, starting at 1 second, up to 30 seconds.
* @param failureCount - The number of failures so far.
* @returns The delay before the next retry, in milliseconds.
*/ function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
/**
* Checks whether a fetch can run for the given network mode.
* @param networkMode - The `networkMode` option. Defaults to `'online'`.
* @returns `true` if the network mode is not `'online'`, or if it is and the client is online.
*/ function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
/**
* The error thrown by a `Retryer` (and surfaced to `query.promise`/`mutation`) when a fetch is cancelled, e.g. via
* `query.cancel()`. `revert`, if `true`, tells the caller to restore the state the query was in before the fetch
* started instead of surfacing the error. `silent`, if `true`, tells the caller to suppress this error and instead
* resolve with the promise of the fetch that triggered the cancellation.
* @example
* ```ts
* query.cancel()
*
* try {
*   await query.promise
* } catch (error) {
*   if (error instanceof CancelledError) {
*     // the fetch was cancelled, e.g. via `query.cancel()`
*   }
* }
* ```
*/ var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
/**
* Checks whether a value is a `CancelledError`.
* @param value - The value to check.
* @returns `true` if `value` is a `CancelledError`.
* @deprecated Use instanceof `CancelledError` instead.
*/ function isCancelledError(value) {
    return value instanceof CancelledError;
}
/**
* Creates a retryer, which runs a function and retries it on failure according to the `retry` and
* `retryDelay` options. It pauses while the network mode doesn't allow fetching or `canRun` returns
* `false`, and can be cancelled. Queries and mutations use it to run their `queryFn` and
* `mutationFn`.
* @param config - The function to run, the retry options, and the callbacks for failures, pausing,
* continuing, and cancellation.
* @returns The retryer, whose `promise` settles with the result of the function.
*/ function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    let status = "pending";
    let promiseResolve;
    let promiseReject;
    const promise = new Promise((resolve, reject)=>{
        promiseResolve = resolve;
        promiseReject = reject;
    });
    promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    const isResolved = ()=>status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            const error = new CancelledError(cancelOptions);
            reject(error);
            config.onCancel?.(error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            status = "resolved";
            promiseResolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            status = "rejected";
            promiseReject(value);
        }
    };
    const pause = (canResume)=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved() || canResume()) continueResolve(value);
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) config.onContinue?.();
        });
    };
    const run = ()=>{
        if (isResolved()) return;
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved()) return;
            const retry = config.retry ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$environmentManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"])() ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause(canContinue);
            }).then(()=>{
                if (isRetryCancelled) reject(error);
                else run();
            });
        });
    };
    return {
        promise,
        status: ()=>status,
        cancel,
        continue: ()=>{
            continueFn?.();
            return promise;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) run();
            else pause(canStart).then(run);
            return promise;
        }
    };
}
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
//#region src/subscribable.ts
/**
* The base class behind everything in Query that you can subscribe to: `QueryCache`, `MutationCache`,
* the observers, and the `FocusManager`/`OnlineManager` behind `focusManager` and `onlineManager`.
* Subclasses decide what a listener receives and when it is called.
*/ var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    /**
	* Registers a listener to be called on every update this object notifies about. Returns a function
	* that removes the listener again — call it to stop listening. The base class never drops a listener
	* on its own, though some subclasses clear all of theirs in `destroy()`.
	* @param listener - Called on each update, with whatever the subclass passes to its subscribers.
	* @returns A function that removes the listener.
	* @example
	* ```ts
	* const unsubscribe = subscribable.subscribe(() => {
	*   // react to the update
	* })
	*
	* unsubscribe()
	* ```
	*/ subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    /**
	* Returns `true` while at least one listener is registered, `false` once they have all unsubscribed.
	* @returns `true` if at least one listener is registered.
	*/ hasListeners() {
        return this.listeners.size > 0;
    }
    /**
	* Called after a listener is added. Does nothing here; subclasses override it, e.g. to start
	* tracking what they observe once the first listener subscribes.
	*/ onSubscribe() {}
    /**
	* Called after a listener is removed. Does nothing here; subclasses override it, e.g. to clean up
	* once the last listener unsubscribes.
	*/ onUnsubscribe() {}
};
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeoutManager",
    ()=>TimeoutManager,
    "defaultTimeoutProvider",
    ()=>defaultTimeoutProvider,
    "systemSetTimeoutZero",
    ()=>systemSetTimeoutZero,
    "timeoutManager",
    ()=>timeoutManager
]);
//#region src/timeoutManager.ts
const defaultTimeoutProvider = {
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
/**
* Allows customization of how timeouts are created.
*
* `@tanstack/query-core` makes liberal use of timeouts to implement `staleTime`
* and `gcTime`. The default TimeoutManager provider uses the platform's global
* `setTimeout` implementation, which is known to have scalability issues with
* thousands of timeouts on the event loop.
*
* If you hit this limitation, consider providing a custom TimeoutProvider that
* coalesces timeouts.
*/ var TimeoutManager = class {
    #provider = defaultTimeoutProvider;
    #providerCalled = false;
    /**
	* `setTimeoutProvider` can be used to set a custom implementation of the
	* `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval` functions,
	* called a `TimeoutProvider`.
	*
	* This may be useful if you notice event loop performance issues with
	* thousands of queries. A custom TimeoutProvider could also support timer
	* delays longer than the global `setTimeout` maximum delay value of about
	* 24 days.
	*
	* It is important to call `setTimeoutProvider` before creating a
	* QueryClient or queries, so that the same provider is used consistently
	* for all timers in the application, since different TimeoutProviders
	* cannot cancel each others' timers.
	* @param provider - The `TimeoutProvider` to use for all timers from now on.
	* @example
	* ```ts
	* import { timeoutManager, QueryClient } from '@tanstack/query-core'
	* import { CustomTimeoutProvider } from './CustomTimeoutProvider'
	*
	* timeoutManager.setTimeoutProvider(new CustomTimeoutProvider())
	*
	* export const queryClient = new QueryClient()
	* ```
	*/ setTimeoutProvider(provider) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.#providerCalled && provider !== this.#provider) console.error(`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`, {
                previous: this.#provider,
                provider
            });
        }
        this.#provider = provider;
        if (("TURBOPACK compile-time value", "development") !== "production") this.#providerCalled = false;
    }
    /**
	* `setTimeout` schedules a callback to run after approximately `delay`
	* milliseconds, like the global `setTimeout` function. The callback can be
	* canceled with `clearTimeout`.
	*
	* It returns a timer ID, which may be a number or an object that can be
	* coerced to a number via `Symbol.toPrimitive`.
	* @param callback - The function to call when the timeout elapses.
	* @param delay - The time to wait before calling `callback`, in milliseconds.
	* @returns The timer ID, to pass to {@link TimeoutManager#clearTimeout}.
	* @example
	* ```ts
	* import { timeoutManager } from '@tanstack/query-core'
	*
	* const timeoutId = timeoutManager.setTimeout(
	*   () => console.log('ran at:', new Date()),
	*   1000,
	* )
	*
	* const timeoutIdNumber: number = Number(timeoutId)
	* ```
	*/ setTimeout(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") this.#providerCalled = true;
        return this.#provider.setTimeout(callback, delay);
    }
    /**
	* `clearTimeout` cancels a timeout callback scheduled with `setTimeout`,
	* like the global `clearTimeout` function. It should be called with a
	* timer ID returned by `setTimeout`.
	* @param timeoutId - The timer ID returned by `setTimeout`, or `undefined`.
	* @example
	* ```ts
	* import { timeoutManager } from '@tanstack/query-core'
	*
	* const timeoutId = timeoutManager.setTimeout(
	*   () => console.log('ran at:', new Date()),
	*   1000,
	* )
	*
	* timeoutManager.clearTimeout(timeoutId)
	* ```
	*/ clearTimeout(timeoutId) {
        this.#provider.clearTimeout(timeoutId);
    }
    /**
	* `setInterval` schedules a callback to be called approximately every
	* `delay` milliseconds, like the global `setInterval` function.
	*
	* Like `setTimeout`, it returns a timer ID, which may be a number or an
	* object that can be coerced to a number via `Symbol.toPrimitive`.
	* @param callback - The function to call on every interval.
	* @param delay - The time between calls, in milliseconds.
	* @returns The timer ID, to pass to {@link TimeoutManager#clearInterval}.
	* @example
	* ```ts
	* import { timeoutManager } from '@tanstack/query-core'
	*
	* const intervalId = timeoutManager.setInterval(
	*   () => console.log('ran at:', new Date()),
	*   1000,
	* )
	* ```
	*/ setInterval(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") this.#providerCalled = true;
        return this.#provider.setInterval(callback, delay);
    }
    /**
	* `clearInterval` can be used to cancel an interval, like the global
	* `clearInterval` function. It should be called with an interval ID
	* returned by `setInterval`.
	* @param intervalId - The timer ID returned by `setInterval`, or `undefined`.
	* @example
	* ```ts
	* import { timeoutManager } from '@tanstack/query-core'
	*
	* const intervalId = timeoutManager.setInterval(
	*   () => console.log('ran at:', new Date()),
	*   1000,
	* )
	*
	* timeoutManager.clearInterval(intervalId)
	* ```
	*/ clearInterval(intervalId) {
        this.#provider.clearInterval(intervalId);
    }
};
/**
* Singleton instance of {@link TimeoutManager}, used throughout TanStack Query to schedule and cancel timers.
*/ const timeoutManager = new TimeoutManager();
/**
* In many cases code wants to delay to the next event loop tick; this is not
* mediated by {@link timeoutManager}.
*
* This function is provided to make auditing the `tanstack/query-core` for
* incorrect use of system `setTimeout` easier.
* @param callback - The function to call on the next event loop tick.
*/ function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}
;
}),
"[project]/client/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addConsumeAwareSignal",
    ()=>addConsumeAwareSignal,
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveQueryValue",
    ()=>resolveQueryValue,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-rsc] (ecmascript)");
;
//#region src/utils.ts
/**
* @deprecated use `environmentManager.isServer()` instead.
*/ const isServer = ("TURBOPACK compile-time value", "undefined") === "undefined" || "Deno" in globalThis;
function noop() {}
/**
* Resolves an {@link Updater}: calls it with `input` if it is a function, otherwise returns it as
* is.
* @param updater - The new value, or a function that receives `input` and returns the new value.
* @param input - The current value, passed to `updater` if it is a function.
* @returns The new value.
*/ function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
/**
* Checks whether a value can be used as a timeout: a non-negative, finite number.
* @param value - The value to check.
* @returns `true` if `value` is a number that is `>= 0` and not `Infinity`.
*/ function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
/**
* Calculates how long until data updated at `updatedAt` becomes stale.
* @param updatedAt - The timestamp, in milliseconds, at which the data was last updated.
* @param staleTime - The time, in milliseconds, after which data is considered stale. Defaults to
* `0`.
* @returns The remaining time in milliseconds, or `0` if the data is already stale.
*/ function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
/**
* Resolves an option that can be given either as a value or as a function of the query, such as
* `staleTime`.
* @param value - The option value, or a function that receives `query` and returns the value.
* @param query - The query passed to `value` if it is a function.
* @returns The resolved value, or `undefined` if `value` is `undefined`.
*/ function resolveQueryValue(value, query) {
    return typeof value === "function" ? value(query) : value;
}
/**
* Checks whether a query matches the given {@link QueryFilters}.
* Every filter that is specified must match; filters that are left unspecified are ignored.
* @param filters - The filters to check the query against.
* @param query - The query to check.
* @returns `true` if the query matches every specified filter.
* @example
* ```ts
* const queryCache = queryClient.getQueryCache()
*
* const matchingQueries = queryCache
*   .getAll()
*   .filter((query) => matchQuery({ queryKey: ['posts'] }, query))
* ```
*/ function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
        } else if (!partialMatchKey(query.queryKey, queryKey)) return false;
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) return false;
        if (type === "inactive" && isActive) return false;
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) return false;
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
    if (predicate && !predicate(query)) return false;
    return true;
}
/**
* Checks whether a mutation matches the given {@link MutationFilters}.
* Every filter that is specified must match; filters that are left unspecified are ignored.
* If a `mutationKey` filter is provided but the mutation has no `mutationKey` of its own, it does not match.
* @param filters - The filters to check the mutation against.
* @param mutation - The mutation to check.
* @returns `true` if the mutation matches every specified filter.
* @example
* ```ts
* const mutationCache = queryClient.getMutationCache()
*
* const matchingMutations = mutationCache
*   .getAll()
*   .filter((mutation) => matchMutation({ mutationKey: ['addPost'] }, mutation))
* ```
*/ function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) return false;
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
    }
    if (status && mutation.state.status !== status) return false;
    if (predicate && !predicate(mutation)) return false;
    return true;
}
/**
* Hashes a query key with the query's `queryKeyHashFn` option, falling back to {@link hashKey}.
* @param queryKey - The query key to hash.
* @param options - The query options that may provide a custom `queryKeyHashFn`.
* @returns The query hash, a string that identifies the query in the cache.
*/ function hashQueryKeyByOptions(queryKey, options) {
    return (options?.queryKeyHashFn || hashKey)(queryKey);
}
/**
* Default query & mutation keys hash function.
* Hashes the value into a stable hash.
* @param queryKey - The query or mutation key to hash.
* @returns The stable hash of the key, as a JSON string.
* @example
* ```ts
* // Object keys are sorted, so key order doesn't affect the hash:
* hashKey(['todos', { page: 1, filter: 'done' }]) // === '["todos",{"filter":"done","page":1}]'
* ```
*/ function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (a && b && typeof a === "object" && typeof b === "object") {
        if (Array.isArray(a) && Array.isArray(b)) {
            if (b.length > a.length) return false;
            for(let i = 0; i < b.length; i++)if (!partialMatchKey(a[i], b[i])) return false;
            return true;
        }
        const bKeys = Object.keys(b);
        for (const key of bKeys)if (!partialMatchKey(a[key], b[key])) return false;
        return true;
    }
    return false;
}
const hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
    if (a === b) return a;
    if (depth > 500) return b;
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aSize = (array ? a : Object.keys(a)).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem, depth + 1);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
/**
* Shallow compare objects.
* @param a - The first object.
* @param b - The second object, or `undefined`.
* @returns `true` if both objects have the same keys, with strictly equal values for each key.
*/ function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) return false;
    for(const key in a)if (a[key] !== b[key]) return false;
    return true;
}
/**
* Checks whether a value is an array with no holes and no extra properties.
* @param value - The value to check.
* @returns `true` if `value` is an array whose number of own keys equals its `length`.
*/ function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
/**
* Checks whether a value is a plain object, e.g. created with an object literal or
* `Object.create(null)`.
* @param o - The value to check.
* @returns `true` if `o` is a plain object.
*/ function isPlainObject(o) {
    if (!hasObjectPrototype(o)) return false;
    const objectPrototype = Object.getPrototypeOf(o);
    const ctor = objectPrototype?.constructor;
    if (ctor === void 0) return true;
    if (typeof ctor !== "function") return false;
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) return false;
    if (!prot.hasOwnProperty("isPrototypeOf")) return false;
    if (objectPrototype !== Object.prototype) return false;
    return true;
}
/**
* Checks whether a value's `Object.prototype.toString` tag is `[object Object]`.
* @param o - The value to check.
* @returns `true` if the tag is `[object Object]`.
*/ function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
/**
* Waits for the given time, using the configured {@link timeoutManager}.
* @param timeout - The time to wait, in milliseconds.
* @returns A promise that resolves after `timeout` milliseconds.
*/ function sleep(timeout) {
    return new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(resolve, timeout);
    });
}
/**
* Applies a query's `structuralSharing` option when writing new data.
* @param prevData - The previously cached data.
* @param data - The new data.
* @param options - The query options, whose `structuralSharing` decides how the data is merged.
* @returns The result of a custom `structuralSharing` function, `data` with its unchanged parts
* replaced by those of `prevData` by default, or `data` as is if `structuralSharing` is `false`.
* @throws {Error} The error from the default structural sharing, e.g. when the data is not JSON serializable.
* Outside production, it is also logged to the console.
*/ function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
    else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) try {
            return replaceEqualDeep(prevData, data);
        } catch (error) {
            console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
            throw error;
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
/**
* Intended to be passed as a query's `placeholderData` option, for example
* `placeholderData: keepPreviousData`. Instead of resetting the query's data to `undefined` while a new
* query key is fetching, it keeps displaying the previously fetched data until the new data arrives.
* @param previousData - The data of the previous query key, passed by the observer.
* @returns The previous data, unchanged.
* @example
* ```ts
* new QueryObserver(queryClient, {
*   queryKey: ['posts', page],
*   queryFn: () => fetchPosts(page),
*   placeholderData: keepPreviousData,
* })
* ```
*/ function keepPreviousData(previousData) {
    return previousData;
}
/**
* Returns a new array with `item` added at the end. If that makes the array longer than `max`,
* the first item is dropped. Only one item is dropped, so the result can still exceed `max` if
* `items` already did.
* @param items - The current items.
* @param item - The value to append.
* @param max - The length above which an item is dropped. `0` (the default) means no limit.
* @returns A new array with `item` added.
*/ function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
/**
* Returns a new array with `item` added at the start. If that makes the array longer than `max`,
* the last item is dropped. Only one item is dropped, so the result can still exceed `max` if
* `items` already did.
* @param items - The current items.
* @param item - The value to prepend.
* @param max - The length above which an item is dropped. `0` (the default) means no limit.
* @returns A new array with `item` added.
*/ function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
/**
* Sentinel value that can be passed as a query's `queryFn` to conditionally disable the query (equivalent
* to `enabled: false`) while preserving full type inference for the query's data. Unlike `enabled: false`,
* a query disabled via `skipToken` cannot be triggered with `refetch`.
* @example
* ```ts
* new QueryObserver(queryClient, {
*   queryKey: ['post', postId],
*   queryFn: postId != null ? () => fetchPost(postId) : skipToken,
* })
* ```
*/ const skipToken = Symbol();
/**
* Returns the function to call for a fetch. If there is no `queryFn` but the fetch was started from
* an `initialPromise`, that promise is returned instead. If there is no usable `queryFn` (missing or
* {@link skipToken}), the returned function rejects with a `Missing queryFn` error.
* @param options - The query options with the `queryFn`, and the `queryHash` used in error messages.
* @param fetchOptions - The fetch options, which may carry an `initialPromise`.
* @returns The function to call for the fetch.
*/ function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
    }
    if (!options.queryFn && fetchOptions?.initialPromise) return ()=>fetchOptions.initialPromise;
    if (!options.queryFn || options.queryFn === skipToken) return ()=>Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`));
    return options.queryFn;
}
/**
* Resolves a `throwOnError` option to a boolean.
* If `throwOnError` is a function, it is called with `params` (e.g. the error and, depending on the caller,
* additional context such as the query or mutation) and its result is returned, allowing the throwing
* behavior to be decided per error. Otherwise, `throwOnError` itself is coerced to a boolean (`undefined`
* resolves to `false`).
* @param throwOnError - The `throwOnError` option: a boolean, a function that decides per error, or
* `undefined`.
* @param params - The arguments passed to `throwOnError` if it is a function.
* @returns Whether the error should be thrown.
* @example
* ```ts
* const throwOnError =
*   query.state.error && typeof options.throwOnError === 'function'
*     ? shouldThrowError(options.throwOnError, [query.state.error, query])
*     : options.throwOnError
* ```
*/ function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") return throwOnError(...params);
    return !!throwOnError;
}
/**
* Adds a lazy `signal` getter to an object, such as a query function context. The first time
* `signal` is read, `onCancelled` is registered for the signal's `abort` event (or called right
* away if it is already aborted), so cancellation is only tracked when the signal is actually used.
* @param object - The object to add the `signal` property to.
* @param getSignal - Returns the `AbortSignal`. Called once, when `signal` is first read.
* @param onCancelled - Called when the signal is aborted, if `signal` was read.
* @returns The same object, with the `signal` property added.
*/ function addConsumeAwareSignal(object, getSignal, onCancelled) {
    let consumed = false;
    let signal;
    Object.defineProperty(object, "signal", {
        enumerable: true,
        get: ()=>{
            signal ??= getSignal();
            if (consumed) return signal;
            consumed = true;
            if (signal.aborted) onCancelled();
            else signal.addEventListener("abort", onCancelled, {
                once: true
            });
            return signal;
        }
    });
    return object;
}
;
}),
"[project]/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const QueryClientContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call QueryClientContext() from the server but QueryClientContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js", "QueryClientContext");
const QueryClientProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call QueryClientProvider() from the server but QueryClientProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js", "QueryClientProvider");
const useQueryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useQueryClient() from the server but useQueryClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js", "useQueryClient");
}),
"[project]/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/client/node_modules/cn/dist/engine.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "createCn",
    ()=>createCn,
    "createEngine",
    ()=>createEngine,
    "twJoin",
    ()=>twJoin,
    "wrapClsx",
    ()=>wrapClsx
]);
//#region src/engine.ts
const IS_JSC = "line" in /* @__PURE__ */ new Error();
const EXTERNAL = -1;
const DEAD = -1;
const fnv = (str, s, e)=>{
    let h = 2166136261;
    for(let p = s; p < e; p++)h = Math.imul(h ^ str.charCodeAt(p), 16777619);
    return h;
};
const spanHash = (str, s, e)=>{
    const len = e - s;
    let h = Math.imul(len, 2654435761) ^ str.charCodeAt(s);
    if (len > 3) {
        const q = len >> 2;
        const m = len >> 1;
        h = Math.imul(h ^ str.charCodeAt(s + 1) << 8 ^ str.charCodeAt(s + 2) << 16 ^ str.charCodeAt(s + q), 2246822507);
        h = Math.imul(h ^ str.charCodeAt(s + m) << 8 ^ str.charCodeAt(s + m + q) << 16 ^ str.charCodeAt(e - 3), 3266489909);
        h ^= str.charCodeAt(e - 2) << 8 ^ str.charCodeAt(e - 1) << 16;
        for(let p = s + 3, q = e - 4; p < s + 8 && p < q; p++, q--)h = Math.imul(h ^ str.charCodeAt(p) ^ str.charCodeAt(q) << 8, 16777619);
    }
    return h ^ h >>> 15 | 0;
};
const createEngine = (T, validatorImpls, options = {})=>{
    const { GROUP_COUNT, edgeStart, labelStart, labelText, edgeTarget, nodeGroup, nodeVlist, vlistPat, vlistOps, vlistRef, vlistGroup, litAnchor, litGroup, litPool, poolOffsets, poolText, adjGid, adjStart, adjTgt, patGid, patTgt, postfixLookupGroups, customValidatorNames, orderSensitiveModifiers } = T;
    const adjRow = new Int32Array(GROUP_COUNT).fill(-1);
    for(let i = 0; i < adjGid.length; i++)adjRow[adjGid[i]] = i;
    let maxAdj = 0;
    for(let r = 0; r + 1 < adjStart.length; r++){
        const n = adjStart[r + 1] - adjStart[r];
        if (n > maxAdj) maxAdj = n;
    }
    let CLAIM_PER_TOKEN = 32;
    while(CLAIM_PER_TOKEN < 2 * (1 + maxAdj + patGid.length))CLAIM_PER_TOKEN <<= 1;
    const vgStart = new Int32Array(vlistRef.length + 1);
    for(let l = 0; l < vlistRef.length; l++)vgStart[l + 1] = vgStart[l] + vlistPat[vlistRef[l] + 1] - vlistPat[vlistRef[l]];
    const postfixLookupSet = new Uint8Array(GROUP_COUNT);
    for(let i = 0; i < postfixLookupGroups.length; i++)postfixLookupSet[postfixLookupGroups[i]] = 1;
    const nodeCount = edgeStart.length - 1;
    const nodeHasLit = new Uint8Array(nodeCount);
    let litMaxLen = 0;
    let litNoArb = true;
    for(let i = 0; i < litAnchor.length; i++){
        nodeHasLit[litAnchor[i]] = 1;
        const len = poolOffsets[litPool[i] * 2 + 1];
        if (len > litMaxLen) litMaxLen = len;
        const c0 = poolText.charCodeAt(poolOffsets[litPool[i] * 2]);
        if (c0 === 91 || c0 === 40) litNoArb = false;
    }
    let LIT_SIZE = 1;
    while(LIT_SIZE < litAnchor.length * 2)LIT_SIZE <<= 1;
    const litTable = new Int32Array(LIT_SIZE).fill(-1);
    for(let i = 0; i < litAnchor.length; i++){
        const off = poolOffsets[litPool[i] * 2];
        let idx = (fnv(poolText, off, off + poolOffsets[litPool[i] * 2 + 1]) ^ Math.imul(litAnchor[i], 2654435761) | 0) & LIT_SIZE - 1;
        while(litTable[idx] !== -1)idx = idx + 1 & LIT_SIZE - 1;
        litTable[idx] = i;
    }
    const litProbe = (anchor, input, s, e)=>{
        let idx = (fnv(input, s, e) ^ Math.imul(anchor, 2654435761) | 0) & LIT_SIZE - 1;
        const len = e - s;
        for(;;){
            const entry = litTable[idx];
            if (entry === -1) return -1;
            if (litAnchor[entry] === anchor && poolOffsets[litPool[entry] * 2 + 1] === len) {
                const off = poolOffsets[litPool[entry] * 2];
                let ok = true;
                for(let k = 0; k < len; k++)if (poolText.charCodeAt(off + k) !== input.charCodeAt(s + k)) {
                    ok = false;
                    break;
                }
                if (ok) return litGroup[entry];
            }
            idx = idx + 1 & LIT_SIZE - 1;
        }
    };
    const cacheSize = options.cacheSize ?? 8192;
    const RAW_PREFIX = options.prefix ?? T.prefix ?? "";
    const FULL_PREFIX = RAW_PREFIX === "" ? "" : RAW_PREFIX + ":";
    const FPL = FULL_PREFIX.length;
    const vCustom = (customValidatorNames ?? []).map((name)=>{
        const fn = validatorImpls && validatorImpls[name];
        if (!fn) throw new Error("cn: missing validator " + name);
        return fn;
    });
    const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
    const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
    const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
    let aKind = 0;
    let aLabelS = -1;
    let aLabelE = -1;
    let aValS = -1;
    let aValE = -1;
    const isWordCode = (c)=>c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95;
    const isUniWS = (c)=>/\s/.test(String.fromCharCode(c));
    const analyzeArb = (input, s, e)=>{
        aKind = 0;
        aLabelS = -1;
        if (e - s < 3) return;
        const c0 = input.charCodeAt(s);
        const cl = input.charCodeAt(e - 1);
        if (c0 === 91 && cl === 93) aKind = 1;
        else if (c0 === 40 && cl === 41) aKind = 2;
        else return;
        aValS = s + 1;
        aValE = e - 1;
        let p = s + 1;
        if (isWordCode(input.charCodeAt(p))) {
            p++;
            while(p < e - 1){
                const c = input.charCodeAt(p);
                if (!isWordCode(c) && c !== 45) break;
                p++;
            }
            if (p < e - 2 && input.charCodeAt(p) === 58) {
                aLabelS = s + 1;
                aLabelE = p;
                aValS = p + 1;
            }
        }
    };
    const spanEq = (input, s, e, str)=>{
        if (e - s !== str.length) return false;
        for(let i = 0; i < str.length; i++)if (input.charCodeAt(s + i) !== str.charCodeAt(i)) return false;
        return true;
    };
    const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
    const tshirtRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
    const isNumStr = (v)=>!!v && !Number.isNaN(Number(v));
    const spanIsNamedContainerQuery = (input, s, e)=>{
        if (e - s < 11 || !spanEq(input, s, s + 10, "@container")) return false;
        if (input.charCodeAt(s + 10) === 47) return e - s >= 12;
        const c11 = input.charCodeAt(s + 11);
        return c11 === 115 && e - s >= 17 && spanEq(input, s + 10, s + 16, "-size/") || c11 === 110 && e - s >= 19 && spanEq(input, s + 10, s + 18, "-normal/");
    };
    const VKIND = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2
    ];
    const VLABELS = "length|number|number weight|family-name|position percentage|length size bg-size|image url|shadow|length|family-name|position percentage|length size bg-size|image url|shadow|number weight".split("|").map((s)=>s.split(" "));
    const VFALL = [
        2,
        3,
        1,
        0,
        0,
        0,
        4,
        5,
        0,
        0,
        0,
        0,
        0,
        1,
        1
    ];
    const runValidator = (op, input, s, e)=>{
        if (op >= 10) {
            if (op >= 25) return vCustom[op - 25](input.slice(s, e));
            const i = op - 10;
            if (aKind !== VKIND[i]) return false;
            if (aLabelS >= 0) {
                for (const L of VLABELS[i])if (spanEq(input, aLabelS, aLabelE, L)) return true;
                return false;
            }
            switch(VFALL[i]){
                case 0:
                    return false;
                case 1:
                    return true;
                case 2:
                    {
                        const v = input.slice(aValS, aValE);
                        return lengthUnitRegex.test(v) && !colorFunctionRegex.test(v);
                    }
                case 3:
                    return isNumStr(input.slice(aValS, aValE));
                case 4:
                    return imageRegex.test(input.slice(aValS, aValE));
                default:
                    return shadowRegex.test(input.slice(aValS, aValE));
            }
        }
        switch(op){
            case 0:
                return true;
            case 1:
                return aKind === 0;
            case 2:
                return aKind === 1;
            case 3:
                return aKind === 2;
            case 4:
                return fractionRegex.test(input.slice(s, e));
            case 5:
                return isNumStr(input.slice(s, e));
            case 6:
                {
                    const v = input.slice(s, e);
                    return !!v && Number.isInteger(Number(v));
                }
            case 7:
                return e > s && input.charCodeAt(e - 1) === 37 && isNumStr(input.slice(s, e - 1));
            case 8:
                return tshirtRegex.test(input.slice(s, e));
            default:
                return spanIsNamedContainerQuery(input, s, e);
        }
    };
    const orderSensitive = new Set(typeof orderSensitiveModifiers === "string" ? orderSensitiveModifiers.split(" ") : orderSensitiveModifiers);
    const internSpan = (map, input, s, e, imp, make)=>{
        const h = fnv(input, s, e) ^ (imp ? 2654435769 : 0) | 0;
        let bucket = map.get(h);
        if (bucket !== void 0) outer: for(let b = 0; b < bucket.length; b++){
            const en = bucket[b];
            if (en.imp !== imp || en.k.length !== e - s) continue;
            for(let i = 0; i < en.k.length; i++)if (en.k.charCodeAt(i) !== input.charCodeAt(s + i)) continue outer;
            return en.id;
        }
        else map.set(h, bucket = []);
        const k = input.slice(s, e);
        const id = make(k);
        bucket.push({
            k,
            imp,
            id
        });
        return id;
    };
    let ctxByHash = /* @__PURE__ */ new Map();
    let ctxByCanon = /* @__PURE__ */ new Map();
    let nextCtxId = 2;
    const MAX_CTX = 4096;
    const canonicalizeContext = (raw, important)=>{
        const mods = [];
        let dB = 0, dP = 0, start = 0;
        for(let i = 0; i < raw.length; i++){
            const c = raw.charCodeAt(i);
            if (dB === 0 && dP === 0 && c === 58) {
                mods.push(raw.slice(start, i));
                start = i + 1;
            } else if (c === 91) dB++;
            else if (c === 93) dB--;
            else if (c === 40) dP++;
            else if (c === 41) dP--;
        }
        mods.push(raw.slice(start));
        let canonical = mods[0];
        if (mods.length > 1) {
            const result = [];
            let segment = [];
            for (const mod of mods)if (mod.charCodeAt(0) === 91 || orderSensitive.has(mod)) {
                if (segment.length) {
                    result.push(...segment.sort());
                    segment = [];
                }
                result.push(mod);
            } else segment.push(mod);
            if (segment.length) result.push(...segment.sort());
            canonical = result.join(":");
        }
        const key = important ? canonical + " !" : canonical;
        let id = ctxByCanon.get(key);
        if (id === void 0) ctxByCanon.set(key, id = nextCtxId++);
        return id;
    };
    let dynByHash = /* @__PURE__ */ new Map();
    let nextDynId = GROUP_COUNT;
    const MAX_DYN = GROUP_COUNT + 4096;
    const newDynId = ()=>nextDynId++;
    const ID_LIMIT = 2097152;
    const TOKEN_TABLE = 8192;
    const memoHash = new Int32Array(TOKEN_TABLE);
    const memoStr = new Array(TOKEN_TABLE).fill(null);
    const memoGid = new Int32Array(TOKEN_TABLE);
    const memoCtx = new Int32Array(TOKEN_TABLE);
    const memoFlags = new Uint8Array(TOKEN_TABLE);
    let memoTick = 0;
    const memoPut = (way0, input, ts, te, h, gid, ctxId, flags)=>{
        let slot = way0;
        if (memoStr[way0] !== null) {
            if (memoStr[way0 | 1] === null) slot = way0 | 1;
            else if ((memoTick++ & 3) === 0) slot = way0 | memoTick >> 2 & 1;
            else return;
        }
        memoStr[slot] = input.slice(ts, te);
        memoHash[slot] = h;
        memoGid[slot] = gid;
        memoCtx[slot] = ctxId;
        memoFlags[slot] = flags;
    };
    const memoReset = ()=>memoStr.fill(null);
    let cap = 256;
    let tokI32 = [
        new Int32Array(cap),
        new Int32Array(cap),
        new Int32Array(cap),
        new Int32Array(cap)
    ];
    let [tokStart, tokEnd, tokGid, tokCtx] = tokI32;
    let tokFlags = new Uint8Array(cap);
    let keep = new Uint8Array(cap);
    const growTokens = ()=>{
        cap *= 2;
        tokI32 = tokI32.map((a)=>{
            const n = new Int32Array(cap);
            n.set(a);
            return n;
        });
        [tokStart, tokEnd, tokGid, tokCtx] = tokI32;
        const nf = new Uint8Array(cap);
        nf.set(tokFlags);
        tokFlags = nf;
        keep = new Uint8Array(cap);
    };
    let ckptCap = 64;
    let ckptNode = new Int32Array(ckptCap);
    let ckptTail = new Int32Array(ckptCap);
    const claim0 = new Int32Array(GROUP_COUNT);
    let CLAIM_TABLE = 2048;
    let claimShift = 21;
    let claimKeys = new Float64Array(CLAIM_TABLE);
    let claimEpochs = new Int32Array(CLAIM_TABLE);
    let epoch = 0;
    const claimTest = (ctx, gid)=>{
        if (ctx === 0 && gid < GROUP_COUNT) {
            if (claim0[gid] === epoch) return 1;
            claim0[gid] = epoch;
            return 0;
        }
        const key = ctx * 2097152 + gid + 1;
        let idx = Math.imul(key, 2654435761) >>> claimShift;
        for(;;){
            if (claimEpochs[idx] !== epoch) break;
            if (claimKeys[idx] === key) return 1;
            idx = idx + 1 & CLAIM_TABLE - 1;
        }
        claimKeys[idx] = key;
        claimEpochs[idx] = epoch;
        return 0;
    };
    const resolveAt = (input, bs, endPos, nodeAt, ckptAt)=>{
        if (endPos - bs >= 2 && input.charCodeAt(bs) === 91 && input.charCodeAt(endPos - 1) === 93) {
            let colon = -1;
            for(let p = bs + 1; p < endPos - 1; p++)if (input.charCodeAt(p) === 58) {
                colon = p;
                break;
            }
            if (colon === -1 || colon === bs + 1) return EXTERNAL;
            return internSpan(dynByHash, input, bs + 1, colon, 0, newDynId);
        }
        if (nodeAt >= 0 && nodeGroup[nodeAt] >= 0) return nodeGroup[nodeAt];
        for(let k = ckptAt - 1; k >= 0; k--){
            const tailStart = ckptTail[k];
            if (tailStart > endPos) continue;
            const nodeId = ckptNode[k];
            const tlen = endPos - tailStart;
            if (nodeHasLit[nodeId] === 1 && tlen > 0 && tlen <= litMaxLen) {
                const c0 = input.charCodeAt(tailStart);
                if (litNoArb === false || c0 !== 91 && c0 !== 40) {
                    const g = litProbe(nodeId, input, tailStart, endPos);
                    if (g >= 0) return g;
                }
            }
            const vl = nodeVlist[nodeId];
            if (vl < 0) continue;
            const pat = vlistRef[vl];
            const vs = vlistPat[pat];
            const ve = vlistPat[pat + 1];
            if (vs === ve) continue;
            analyzeArb(input, tailStart, endPos);
            const g0 = vgStart[vl] - vs;
            for(let v = vs; v < ve; v++)if (runValidator(vlistOps[v], input, tailStart, endPos)) return vlistGroup[g0 + v];
        }
        return EXTERNAL;
    };
    const mergeClassList = (input)=>{
        const n = input.length;
        let tokenCount = 0;
        let totalTokenChars = 0;
        let sawNonSpaceWS = false;
        if (nextCtxId > MAX_CTX || ctxByHash.size > MAX_CTX) {
            ctxByHash = /* @__PURE__ */ new Map();
            ctxByCanon = /* @__PURE__ */ new Map();
            nextCtxId = 2;
            memoReset();
        }
        if (nextDynId > MAX_DYN) {
            dynByHash = /* @__PURE__ */ new Map();
            nextDynId = GROUP_COUNT;
            memoReset();
        }
        let i = 0;
        while(i < n){
            let c = input.charCodeAt(i);
            if (c === 32 || c >= 9 && c <= 13 || c >= 160 && isUniWS(c)) {
                if (c !== 32) sawNonSpaceWS = true;
                i++;
                continue;
            }
            const ts = i;
            let th = 0;
            while(i < n){
                c = input.charCodeAt(i);
                if (c <= 32) {
                    if (c === 32) break;
                    if (c >= 9 && c <= 13) {
                        sawNonSpaceWS = true;
                        break;
                    }
                } else if (c >= 160 && isUniWS(c)) {
                    sawNonSpaceWS = true;
                    break;
                }
                th = Math.imul(th ^ c, 16777619);
                i++;
            }
            const te = i;
            const len = te - ts;
            if (tokenCount === cap) growTokens();
            const t = tokenCount++;
            tokStart[t] = ts;
            tokEnd[t] = te;
            totalTokenChars += len;
            th ^= Math.imul(len, 2654435761);
            const h = th ^ th >>> 15 | 0;
            const way0 = h & 8190;
            {
                let hitAt = -1;
                if (memoHash[way0] === h && memoStr[way0] !== null && memoStr[way0].length === len) hitAt = way0;
                else if (memoHash[way0 | 1] === h && memoStr[way0 | 1] !== null && memoStr[way0 | 1].length === len) hitAt = way0 | 1;
                if (hitAt >= 0) {
                    const s = memoStr[hitAt];
                    let ok = true;
                    for(let k = 0; k < len; k++)if (s.charCodeAt(k) !== input.charCodeAt(ts + k)) {
                        ok = false;
                        break;
                    }
                    if (ok) {
                        tokGid[t] = memoGid[hitAt];
                        tokCtx[t] = memoCtx[hitAt];
                        tokFlags[t] = memoFlags[hitAt];
                        continue;
                    }
                }
            }
            let pts = ts;
            if (FPL !== 0) {
                if (te - ts <= FPL || !input.startsWith(FULL_PREFIX, ts)) {
                    tokGid[t] = EXTERNAL;
                    memoPut(way0, input, ts, te, h, EXTERNAL, 0, 0);
                    continue;
                }
                pts = ts + FPL;
            }
            let depthB = 0, depthP = 0;
            let lastColon = -1, lastSlash = -1;
            for(let p = pts; p < te; p++){
                const pc = input.charCodeAt(p);
                if (depthB === 0 && depthP === 0) {
                    if (pc === 58) {
                        lastColon = p;
                        continue;
                    }
                    if (pc === 47) {
                        lastSlash = p;
                        continue;
                    }
                }
                if (pc === 91) depthB++;
                else if (pc === 93) depthB--;
                else if (pc === 40) depthP++;
                else if (pc === 41) depthP--;
            }
            const modStart = lastColon >= pts ? lastColon + 1 : pts;
            let bs = modStart;
            let be = te;
            let important = false;
            let prefixShift = 0;
            if (be > bs && input.charCodeAt(be - 1) === 33) {
                important = true;
                be--;
            } else if (be > bs && input.charCodeAt(bs) === 33) {
                important = true;
                bs++;
                prefixShift = 1;
            }
            let postfixEnd = -1;
            if (lastSlash > modStart) {
                postfixEnd = lastSlash + prefixShift;
                if (postfixEnd >= be) postfixEnd = -1;
            }
            let feedStart = bs;
            if (be - bs > 1 && input.charCodeAt(bs) === 45) feedStart = bs + 1;
            let node = 0;
            let lp = 0;
            let le = 0;
            let pending = -1;
            let ckptTop = 0;
            if (nodeVlist[0] >= 0 || nodeHasLit[0] === 1) {
                ckptNode[0] = 0;
                ckptTail[0] = feedStart;
                ckptTop = 1;
            }
            let slashNode = DEAD;
            let slashCkpt = 0;
            for(let p = feedStart; p < be; p++){
                if (p === postfixEnd) {
                    slashNode = lp < le ? DEAD : node;
                    slashCkpt = ckptTop;
                }
                if (node !== DEAD) {
                    const cc = input.charCodeAt(p);
                    let arrived = -1;
                    if (lp < le) {
                        if (labelText.charCodeAt(lp) === cc) {
                            lp++;
                            if (lp === le) arrived = node = pending;
                        } else node = DEAD;
                    } else {
                        const es = edgeStart[node];
                        const ee = edgeStart[node + 1];
                        let next = DEAD;
                        for(let e = es; e < ee; e++){
                            const ls = labelStart[e];
                            if (labelText.charCodeAt(ls) === cc) {
                                if (labelStart[e + 1] - ls === 1) arrived = next = edgeTarget[e];
                                else {
                                    lp = ls + 1;
                                    le = labelStart[e + 1];
                                    pending = edgeTarget[e];
                                    next = node;
                                }
                                break;
                            }
                        }
                        node = next;
                    }
                    if (arrived >= 0 && (nodeVlist[arrived] >= 0 || nodeHasLit[arrived] === 1) && p + 1 < be && input.charCodeAt(p + 1) === 45) {
                        if (ckptTop === ckptCap) {
                            ckptCap *= 2;
                            const nv = new Int32Array(ckptCap);
                            nv.set(ckptNode);
                            ckptNode = nv;
                            const nt = new Int32Array(ckptCap);
                            nt.set(ckptTail);
                            ckptTail = nt;
                        }
                        ckptNode[ckptTop] = arrived;
                        ckptTail[ckptTop] = p + 2;
                        ckptTop++;
                    }
                }
            }
            if (postfixEnd === be) {
                slashNode = lp < le ? DEAD : node;
                slashCkpt = ckptTop;
            }
            const endNode = lp < le ? DEAD : node;
            let gid;
            let hasPostfix = false;
            if (postfixEnd >= 0) {
                hasPostfix = true;
                gid = resolveAt(input, bs, postfixEnd, slashNode, slashCkpt);
                if (gid !== EXTERNAL && gid < GROUP_COUNT && postfixLookupSet[gid]) {
                    const gidFull = resolveAt(input, bs, be, endNode, ckptTop);
                    if (gidFull !== EXTERNAL && gidFull !== gid) {
                        gid = gidFull;
                        hasPostfix = false;
                    }
                } else if (gid === EXTERNAL) {
                    gid = resolveAt(input, bs, be, endNode, ckptTop);
                    hasPostfix = false;
                }
            } else gid = resolveAt(input, bs, be, endNode, ckptTop);
            let ctxId = 0;
            let flags = 0;
            if (gid === EXTERNAL) tokGid[t] = EXTERNAL;
            else {
                flags = hasPostfix ? 1 : 0;
                ctxId = pts >= lastColon ? important ? 1 : 0 : internSpan(ctxByHash, input, pts, lastColon, important ? 1 : 0, (k)=>canonicalizeContext(k, important));
                tokGid[t] = gid;
                tokFlags[t] = flags;
                tokCtx[t] = ctxId;
            }
            memoPut(way0, input, ts, te, h, gid, ctxId, flags);
        }
        if (tokenCount === 0) return "";
        if (tokenCount === 1) return tokStart[0] === 0 && tokEnd[0] === n ? input : input.slice(tokStart[0], tokEnd[0]);
        if (tokenCount * CLAIM_PER_TOKEN > CLAIM_TABLE) {
            while(tokenCount * CLAIM_PER_TOKEN > CLAIM_TABLE){
                CLAIM_TABLE <<= 1;
                claimShift--;
            }
            claimKeys = new Float64Array(CLAIM_TABLE);
            claimEpochs = new Int32Array(CLAIM_TABLE);
        }
        if (nextCtxId >= ID_LIMIT || nextDynId >= ID_LIMIT) throw new Error("cn: too many distinct classes in one merge");
        epoch = epoch + 1 | 0;
        if (epoch === 0) {
            claim0.fill(0);
            claimEpochs.fill(0);
            epoch = 1;
        }
        let didDrop = false;
        for(let t = tokenCount - 1; t >= 0; t--){
            const gid = tokGid[t];
            if (gid === EXTERNAL) {
                keep[t] = 1;
                continue;
            }
            const ctxId = tokCtx[t];
            if (claimTest(ctxId, gid) === 1) {
                keep[t] = 0;
                didDrop = true;
                continue;
            }
            keep[t] = 1;
            if (gid < GROUP_COUNT) {
                const r = adjRow[gid];
                if (r >= 0) for(let k = adjStart[r]; k < adjStart[r + 1]; k++)claimTest(ctxId, adjTgt[k]);
                if (tokFlags[t] & 1) {
                    for(let k = 0; k < patGid.length; k++)if (patGid[k] === gid) claimTest(ctxId, patTgt[k]);
                }
            }
        }
        if (!didDrop && !sawNonSpaceWS && n === totalTokenChars + tokenCount - 1) return input;
        let out = "";
        let t = 0;
        while(t < tokenCount){
            if (!keep[t]) {
                t++;
                continue;
            }
            const runStart = tokStart[t];
            let runEnd = tokEnd[t];
            let u = t + 1;
            while(u < tokenCount && keep[u] && tokStart[u] === runEnd + 1 && input.charCodeAt(runEnd) === 32){
                runEnd = tokEnd[u];
                u++;
            }
            if (out.length > 0) out += " ";
            out += input.slice(runStart, runEnd);
            t = u;
        }
        return out;
    };
    const DOOR_SIZE = 16384;
    const door = new Int32Array(DOOR_SIZE * 2);
    let doorBase = 0;
    let doorEpoch = 1;
    let cache = Object.create(null);
    let prevCache = Object.create(null);
    let cacheMap = /* @__PURE__ */ new Map();
    let prevCacheMap = /* @__PURE__ */ new Map();
    let cacheCount = 0;
    let doorMarks = 0;
    const rotateDoor = ()=>{
        doorBase ^= DOOR_SIZE;
        doorEpoch = doorEpoch + 1 | 0;
        doorMarks = 0;
    };
    const mergeCached = (input)=>{
        let merged = cache[input];
        if (merged !== void 0) return merged;
        const hash = spanHash(input, 0, input.length);
        const slot = (hash & 16383) + doorBase;
        const wasSeen = door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1);
        if (wasSeen) {
            merged = prevCache[input];
            if (merged !== void 0) {
                cache[input] = merged;
                return merged;
            }
        }
        merged = mergeClassList(input);
        if (wasSeen) {
            cache[input] = merged;
            if (++cacheCount > cacheSize) {
                cacheCount = 0;
                prevCache = cache;
                cache = Object.create(null);
                rotateDoor();
            }
        } else {
            door[slot] = hash ^ doorEpoch;
            if (++doorMarks > DOOR_SIZE) rotateDoor();
        }
        return merged;
    };
    const mergeCachedMap = (input)=>{
        let merged = cacheMap.get(input);
        if (merged !== void 0) return merged;
        const hash = spanHash(input, 0, input.length);
        const slot = (hash & 16383) + doorBase;
        const wasSeen = door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1);
        if (wasSeen) {
            merged = prevCacheMap.get(input);
            if (merged !== void 0) {
                cacheMap.set(input, merged);
                return merged;
            }
        }
        merged = mergeClassList(input);
        if (wasSeen) {
            cacheMap.set(input, merged);
            if (++cacheCount > cacheSize) {
                cacheCount = 0;
                prevCacheMap = cacheMap;
                cacheMap = /* @__PURE__ */ new Map();
                rotateDoor();
            }
        } else {
            door[slot] = hash ^ doorEpoch;
            if (++doorMarks > DOOR_SIZE) rotateDoor();
        }
        return merged;
    };
    const seenBefore = (input)=>{
        const hash = spanHash(input, 0, input.length);
        const slot = (hash & 16383) + doorBase;
        if (door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1)) return true;
        door[slot] = hash ^ doorEpoch;
        if (++doorMarks > DOOR_SIZE) rotateDoor();
        return false;
    };
    const mergeString = cacheSize === 0 ? mergeClassList : IS_JSC ? (input)=>{
        const merged = cacheMap.get(input);
        return merged !== void 0 ? merged : mergeCachedMap(input);
    } : mergeCached;
    const merge = function() {
        return arguments.length === 1 && typeof arguments[0] === "string" ? mergeString(arguments[0]) : mergeString(twJoin.apply(null, arguments));
    };
    return {
        merge,
        mergeString,
        seenBefore: cacheSize === 0 ? ()=>false : seenBefore,
        mergeUncached: mergeClassList
    };
};
const resolveValue = (v, clsxMode)=>{
    if (!v) return "";
    if (typeof v === "string") return v;
    let out = "";
    if (typeof v.length === "number" && (clsxMode ? Array.isArray(v) : true)) {
        const arr = v;
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if (!item) continue;
            const r = typeof item === "string" ? item : resolveValue(item, clsxMode);
            if (r) {
                if (out) out += " ";
                out += r;
            }
        }
        return out;
    }
    if (clsxMode) {
        if (typeof v === "number") return "" + v;
        if (typeof v === "object") {
            for(const k in v)if (v[k]) {
                if (out) out += " ";
                out += k;
            }
        }
    }
    return out;
};
const joinArgs = (args, clsxMode)=>{
    let s = "";
    for(let i = 0; i < args.length; i++){
        const a = args[i];
        if (!a) continue;
        const r = typeof a === "string" ? a : resolveValue(a, clsxMode);
        if (r) {
            if (s) s += " ";
            s += r;
        }
    }
    return s;
};
/** join-only, `twJoin`-compatible (strings + nested arrays, falsy skipped) */ const twJoin = function() {
    return joinArgs(arguments, false);
};
/** join-only, `clsx`-compatible (no merging) */ const clsx = function() {
    return joinArgs(arguments, true);
};
const BUCKET_CAP = 256;
const BUCKET_MISS_CAP = 16;
const BUCKET_SKIP = 1024;
const CHURN_SIZE = 4096;
const wrapClsx = (mergeString, fresh)=>{
    const seenBefore = fresh === void 0 ? ()=>true : fresh.seenBefore;
    const mergeUncached = fresh === void 0 ? mergeString : fresh.mergeUncached;
    let argCache = /* @__PURE__ */ new Map();
    let prevArgCache = /* @__PURE__ */ new Map();
    let argCount = 0;
    let lastHit = null;
    let churnKey = null;
    let churnOwn = [];
    let churnVal = [];
    let churnTick = 0;
    const churnLookup = (key, own, join)=>{
        if (churnKey === null) {
            churnKey = new Array(CHURN_SIZE).fill("");
            churnOwn = new Array(CHURN_SIZE).fill("");
            churnVal = new Array(CHURN_SIZE).fill("");
        }
        const way0 = spanHash(key, 0, key.length) & 4094;
        if (churnKey[way0] === key && churnOwn[way0] === own) return churnVal[way0];
        if (churnKey[way0 | 1] === key && churnOwn[way0 | 1] === own) return churnVal[way0 | 1];
        const merged = mergeString(join ? own + " " + key : key);
        const slot = churnKey[way0] === "" ? way0 : way0 | (churnKey[way0 | 1] === "" ? 1 : churnTick++ & 1);
        churnKey[slot] = key;
        churnOwn[slot] = own;
        churnVal[slot] = merged;
        return merged;
    };
    const match3 = (e, v0, v1, v2)=>{
        let k = 0;
        if (v0) {
            if (v0 !== e.a0) return false;
            k = 1;
        }
        if (v1) {
            if (v1 !== (k === 0 ? e.a0 : e.a1)) return false;
            k++;
        }
        if (v2) {
            if (v2 !== (k === 0 ? e.a0 : k === 1 ? e.a1 : e.a2)) return false;
            k++;
        }
        return k === e.t;
    };
    const matchN = (e, vals)=>{
        const ea = e.a;
        let k = 0;
        for(let i = 0; i < vals.length; i++){
            const v = vals[i];
            if (!v) continue;
            if (v !== ea[k]) return false;
            k++;
        }
        return k === e.t;
    };
    const resolveArgs = (vals, probed)=>{
        const nArgs = vals.length;
        const pred = lastHit === null ? null : lastHit.n;
        if (!probed) {
            if (pred !== null && matchN(pred, vals)) {
                lastHit = pred;
                return pred.r;
            }
            if (lastHit !== null && lastHit !== pred && matchN(lastHit, vals)) return lastHit.r;
        }
        let first = "";
        let firstIdx = -1;
        let truthy = 0;
        let hasResolvedValue = false;
        for(let i = 0; i < nArgs; i++){
            let v = vals[i];
            if (!v) continue;
            if (typeof v !== "string") {
                v = vals[i] = resolveValue(v, true);
                if (!v) continue;
                hasResolvedValue = true;
            }
            if (firstIdx < 0) {
                first = v;
                firstIdx = i;
            }
            truthy++;
        }
        if (truthy === 0) return "";
        if (truthy === 1) return mergeString(first);
        if (hasResolvedValue) {
            if (pred !== null && matchN(pred, vals)) {
                lastHit = pred;
                return pred.r;
            }
            if (lastHit !== null && lastHit !== pred && matchN(lastHit, vals)) return lastHit.r;
        }
        let bucket = argCache.get(first);
        if (bucket === void 0) {
            bucket = prevArgCache.get(first);
            if (bucket !== void 0) argCache.set(first, bucket);
        }
        let hit = null;
        if (bucket !== void 0) {
            if (bucket.skip > 0) {
                bucket.skip--;
                lastHit = null;
                let joined = first;
                for(let i = firstIdx + 1; i < nArgs; i++){
                    const v = vals[i];
                    if (v) joined += " " + v;
                }
                return churnLookup(joined, "", false);
            }
            const entries = bucket.e;
            outer: for(let b = 0; b < entries.length; b++){
                const e = entries[b];
                if (e.t !== truthy) continue;
                const ea = e.a;
                let k = 1;
                for(let i = firstIdx + 1; i < nArgs; i++){
                    const v = vals[i];
                    if (v && v !== ea[k++]) continue outer;
                }
                hit = e;
                break;
            }
            if (hit !== null) bucket.miss = 0;
        }
        if (hit === null) {
            let joined = first;
            const a = [
                first
            ];
            for(let i = firstIdx + 1; i < nArgs; i++){
                const v = vals[i];
                if (!v) continue;
                joined += " " + v;
                a.push(v);
            }
            if (!seenBefore(joined)) return mergeUncached(joined);
            hit = {
                r: mergeString(joined),
                t: a.length,
                a0: a[0],
                a1: a[1],
                a2: a[2] ?? "",
                a,
                n: null
            };
            if (bucket === void 0) argCache.set(first, bucket = {
                e: [],
                miss: 0,
                skip: 0,
                at: 0
            });
            else if (++bucket.miss > BUCKET_MISS_CAP) {
                bucket.miss = BUCKET_MISS_CAP;
                bucket.skip = BUCKET_SKIP;
                bucket.e.length = 0;
                bucket.at = 0;
            }
            const entries = bucket.e;
            if (entries.length < BUCKET_CAP) entries.push(hit);
            else {
                entries[bucket.at] = hit;
                bucket.at = bucket.at + 1 & 255;
            }
            if (++argCount > 1e3) {
                argCount = 0;
                prevArgCache = argCache;
                argCache = /* @__PURE__ */ new Map();
            }
        }
        if (lastHit !== null && lastHit !== hit) lastHit.n = hit;
        lastHit = hit;
        return hit.r;
    };
    const mergeSingleValue = (value)=>Array.isArray(value) ? resolveArgs(value.slice(), false) : mergeString(resolveValue(value, true));
    return function(v0, v1, v2) {
        const nArgs = arguments.length;
        if ((nArgs | 1) === 3) {
            const lh = lastHit;
            if (lh !== null) {
                const pred = lh.n;
                if (pred !== null && match3(pred, v0, v1, v2)) {
                    lastHit = pred;
                    return pred.r;
                }
                if (lh !== pred && match3(lh, v0, v1, v2)) return lh.r;
            }
            if (nArgs === 2 && typeof v1 === "string" && v1 !== "") {
                const bucket = argCache.get(v0);
                if (bucket !== void 0 && bucket.skip > 0) {
                    bucket.skip--;
                    lastHit = null;
                    return churnLookup(v1, v0, true);
                }
            }
            return resolveArgs([
                v0,
                v1,
                v2
            ], true);
        }
        if (nArgs === 1) return typeof v0 === "string" ? mergeString(v0) : mergeSingleValue(v0);
        const lh = lastHit;
        if (lh !== null) {
            const pred = lh.n;
            if (pred !== null) {
                const pa = pred.a;
                let k = 0;
                let ok = true;
                for(let i = 0; i < nArgs; i++){
                    const v = arguments[i];
                    if (!v) continue;
                    if (v !== pa[k]) {
                        ok = false;
                        break;
                    }
                    k++;
                }
                if (ok && k === pred.t) {
                    lastHit = pred;
                    return pred.r;
                }
            }
            if (lh !== pred) {
                const la = lh.a;
                let k = 0;
                let ok = true;
                for(let i = 0; i < nArgs; i++){
                    const v = arguments[i];
                    if (!v) continue;
                    if (v !== la[k]) {
                        ok = false;
                        break;
                    }
                    k++;
                }
                if (ok && k === lh.t) return lh.r;
            }
        }
        const vals = [];
        for(let i = 0; i < nArgs; i++)vals.push(arguments[i]);
        return resolveArgs(vals, true);
    };
};
/**
* Create a `cn` function bound to compiled tables — the entry point for
* project-compiled (`cn build`) tables:
*
* ```ts
* import tables from "./cn-tables.js"
* import { createCn } from "cn/engine"
* export const cn = createCn(tables)
* ```
*/ const createCn = (tables, validatorImpls, options)=>{
    const engine = createEngine(tables, validatorImpls, options);
    return wrapClsx(engine.mergeString, engine);
};
;
}),
"[project]/client/node_modules/cn/dist/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "twMerge",
    ()=>twMerge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$cn$2f$dist$2f$tables$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/cn/dist/tables.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$cn$2f$dist$2f$engine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/cn/dist/engine.js [app-rsc] (ecmascript)");
;
;
//#region src/index.ts
const instance = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$cn$2f$dist$2f$engine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEngine"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$cn$2f$dist$2f$tables$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
/**
* Merge Tailwind CSS classes with clsx-style arguments (strings, arrays,
* objects, conditionals). Drop-in replacement for `twMerge(clsx(...))`.
*/ const cn = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$cn$2f$dist$2f$engine$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapClsx"])(instance.mergeString, instance);
/** tailwind-merge–compatible variadic merge (strings + nested arrays). */ const twMerge = instance.merge;
;
}),
"[project]/client/node_modules/cn/dist/tables.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>tables_generated_default
]);
//#region src/tables.generated.ts
const P = 48;
const U = (s, o = 0)=>{
    const out = new Int32Array(s.length);
    for(let i = 0; i < s.length; i++)out[i] = s.charCodeAt(i) - P - o;
    return out;
};
const PS = (counts)=>{
    const out = new Int32Array(counts.length + 1);
    for(let i = 0; i < counts.length; i++)out[i + 1] = out[i] + counts[i];
    return out;
};
const DZ = (s)=>{
    const out = new Int32Array(s.length);
    let a = 0;
    for(let i = 0; i < s.length; i++){
        const z = s.charCodeAt(i) - P;
        a += z >>> 1 ^ -(z & 1);
        out[i] = a;
    }
    return out;
};
const GROUP_COUNT = 384;
const customValidatorNames = [];
const edgeStart = PS(U("E0500002005282000000002000150000020021820000011200000003022202000300004200120000200420001200021200301200010400162000010000220021010:2192001200220012000220012000200200200400010200040000000000400200108200110100000022010313000162002000020020012020080213000228200000000082000000000120002000120020020040101020300130001001010"));
const labelStart = PS(U(":11111111211111119311546544411119731869:671397415686432441111111111161114151214313433415:78311132233313187211117221449443411141111151152226611131111112212518142224214215421421542142424242516171151615616347111111111197911327451111111111111111111113134714133513411111311111111111111111111112444411111342312715245411117:3"));
const labelText = "@containerabcdefghinlmoprstunderlineviawzccentlignnimatespectuto-colsrowsaglorightnessckdrop-sisbcontrastfiltergrayscalehue-rotateinvertopacityslurrightnessaturateepia-coniclinearpositionradialsizeockurrderttom-belrstxyespacing-xyaretoursorlnt-umnsendspantartainentrasteividerop-shadowurationcorationlay-xyasendillexontromlter-featuresstretchapr-xyayscaleidow-colsrowsue-rotatedentlinesetvert-beringsxyeshadoweiadingftnest-clamp-imageabein-lrstxyskx--b-coniclpositionrsizet-x-y-fromto-fromto-inearfromto-fromto-adialfromto-fromtofromtofromtofromtoblockhinlinew-screenesblockhinlinewbjectpacityrutlinederigin-offsetbelrstxyesrspective-originaceholderioghtng-offsettateundedw-xyz-belrstlreseslr-endspantartaturatecepiahizekewpace-taleroll-xyz-barmpbelrstxyesbelrstxyes-thumbrackadowrink-xyxyartrokeabextora-shadowpckingnsformitionlate-xyz-offsetill-changeoom";
const edgeTarget = (()=>{
    const N = edgeStart.length - 1;
    const sizes = new Int32Array(N);
    for(let i = N - 1; i >= 0; i--){
        let s = 1;
        let c = i + 1;
        for(let k = edgeStart[i]; k < edgeStart[i + 1]; k++){
            s += sizes[c];
            c += sizes[c];
        }
        sizes[i] = s;
    }
    const out = new Int32Array(edgeStart[N]);
    let e = 0;
    for(let i = 0; i < N; i++){
        let c = i + 1;
        for(let k = edgeStart[i]; k < edgeStart[i + 1]; k++){
            out[e++] = c;
            c += sizes[c];
        }
    }
    return out;
})();
const nodeGroup = U("02000000000000900<=0?000B000F00F00ŏI0J0LNPRTVX0000]_a00000000000000000000000rst0000000zŏ00000000000ŏ0000000ŏ00000000000000000000000000000000000000000000000000000000000000Ë000000000000000000000Þ000000000000000000ð0000000ø0ùúûüýþÿĀāĂăĄąĆ000000000000000000000000000000000000000000ħ0ĨĪ00000000000000000000ļĽ00000Ŭ000000", 1);
const vlistPat = PS(U("123333359346463635126536711576"));
const vlistOps = U("93203242332583253248325D>E?F@03263243255B:032523853:0325B:8GA032542H<C=12727B:0328432553;D>E?3257D>032585:0325B:;0328B:032");
const vlistRef = U("012113445661666666789111:5;;;;;;;;444;;;:62999<1161=62>>?61:21@ABCD4446996:64E:::;:?::64:F114GHHIHHHHIHH1HH1HH1HHHHHH::EEJ4444::EE4444441691;644444114244444:;K6666555555555555555999666664444444444444444444444226?6:66644L9M?D:111::::6DE199");
const vlistGroup = DZ("020200202020020020020020020020200200200200200200200002020202001003040106000200200200200200200200200200200200200200200200200200200200200200200200200200200200020020020020020020002020200202002002002002002002002002002020002002020020200220200200200200200200200200200200020020020000200020002000200200200020020020002000200200200020020202002020202000200200020022000200200020020002002000200220002002000200W0Z00020020002002020002002000200g0j0002002000200200020020002002000200200020020002000200002000002002002002002000200020000200002002002002002002002020020020200200200200200200200200202020020020020020020020020002002002020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020002002002002002002000200200200200200200200200200020202020002000200020002002002002000020200200");
const nodeVlist = (()=>{
    const out = /* @__PURE__ */ new Int32Array(319).fill(-1);
    const A = DZ("02422242:222222242224222242442222222422222244442242226224222426222422442462222422622222222626222462242622422622422424242422222222422222222242422222222222222222622442224222222222222224424442262222222222222222222226224222424242422224422422422222");
    const V = DZ("02222222222222222222202222222222222222222222221422222222222222222222222222222222222Y\\222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221422222222222222222222222222222222222222Ŀł222222222222222222");
    for(let i = 0; i < A.length; i++)out[A[i]] = V[i];
    return out;
})();
const SETS = "container |break-after- all auto avoid avoid-page column left page right|break-before- all auto avoid avoid-page column left page right|break-inside-a uto void void-column void-page|box-decoration- clone slice|box- border content| contents flow-root hidden table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group| not-sr-only sr-only|float- end left none right start|clear- both end left none right start|isolat e ion-auto|overflow- auto clip hidden scroll visible|overflow-x- auto clip hidden scroll visible|overflow-y- auto clip hidden scroll visible|overscroll- auto contain none|overscroll-x- auto contain none|overscroll-y- auto contain none| absolute fixed relative static sticky| collapse invisible visible|justify- around baseline between center center-safe end end-safe evenly normal start stretch|justify-items- center center-safe end end-safe normal start stretch|justify-self- auto center center-safe end end-safe start stretch|items- baseline baseline-last center center-safe end end-safe start stretch|self- auto baseline baseline-last center center-safe end end-safe start stretch|place-content- around baseline between center center-safe end end-safe evenly start stretch|place-items- baseline center center-safe end end-safe start stretch|place-self- auto center center-safe end end-safe start stretch| antialiased subpixel-antialiased| italic not-italic|normal-nums |ordinal |slashed-zero | lining-nums oldstyle-nums| proportional-nums tabular-nums| diagonal-fractions stacked-fractions| no-underline overline| capitalize lowercase normal-case uppercase|truncate |whitespace- break-spaces normal nowrap pre pre-line pre-wrap|break- all keep normal words|wrap- anywhere break-word normal|hyphens- auto manual none|mix-blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay plus-darker plus-lighter saturation screen soft-light|table- auto fixed|caption- bottom top|backface- hidden visible|appearance- auto none|scheme- dark light light-dark normal only-dark only-light|field-sizing- content fixed|pointer-events- auto none|resize  -none -x -y|snap- align-none center end start|snap- always normal|snap- both none x y|snap- mandatory proximity|touch- auto manipulation none|touch-pan- left right x|touch-pan- down up y|touch-pinch-zoom |select- all auto none text|forced-color-adjust- auto none| normal size| baseline bottom middle sub super text-bottom text-top top| bounce none ping pulse spin| auto square video| auto fr max min px|none | auto full px| fixed local scroll|clip- border content padding text|origin- border content padding| bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| no-repeat repeat repeat-round repeat-space repeat-x repeat-y| auto contain cover| gradient-to-b gradient-to-bl gradient-to-br gradient-to-l gradient-to-r gradient-to-t gradient-to-tl gradient-to-tr none|blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay saturation screen soft-light|to- b bl br l r t tl tr| auto dvh fit full lh lvh max min px screen svh| dashed dotted double hidden none solid| collapse separate|px |auto |full | content none strict| inline-size size|layout |paint |style | around baseline between center center-safe end end-safe evenly normal start stretch| alias all-scroll auto cell col-resize context-menu copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize no-drop none not-allowed ns-resize nw-resize nwse-resize pointer progress row-resize s-resize se-resize sw-resize text vertical-text w-resize wait zoom-in zoom-out| dashed dotted double solid wavy| auto from-font|reverse |initial | in in-out initial linear out| col col-reverse row row-reverse| nowrap wrap wrap-reverse| auto initial none| black bold extrabold extralight light medium normal semibold thin| condensed expanded extra-condensed extra-expanded normal semi-condensed semi-expanded ultra-condensed ultra-expanded|flow- col col-dense dense row row-dense| none subgrid| auto dvh dvw fit full lh lvh lvw max min px screen svh svw| block flex grid table| auto dvw fit full lvw max min px screen svw| loose none normal px relaxed snug tight|through |item | inside outside| decimal disc none| auto px| clip-border clip-content clip-fill clip-padding clip-stroke clip-view no-clip| add exclude intersect subtract| alpha luminance match|origin- border content fill padding stroke view|type- alpha luminance| circle ellipse| closest-corner closest-side farthest-corner farthest-side|at- bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| dvh fit full lh lvh max min none px screen svh| auto dvh dvw fit full lh lvh lvw max min none px screen svh svw| dvw fit full lvw max min none px screen svw| auto dvh dvw fit full lvh lvw max min none prose px svh svw| auto dvh dvw fit full lvh lvw max min none px screen svh svw| contain cover fill none scale-down| first last none| distant dramatic midrange near none normal|inset | full none|3d | auto smooth|gutter- auto both stable| auto none thin| inner none| auto dvh dvw fit full lvh lvw max min px svh svw|base | center end justify left right start| clip ellipsis| balance nowrap pretty wrap| normal tight tighter wide wider widest| cpu gpu none| 3d flat| all colors none opacity shadow transform| discrete normal| full px| auto dvh dvw fit full lvh lvw max min px screen svh svw| auto contents scroll transform".split("|").map((s)=>{
    const tails = s.split(" ");
    const prefix = tails.shift();
    for(let i = 0; i < tails.length; i++)tails[i] = prefix + tails[i];
    return tails;
});
const AA = DZ("0000000000000000000000000000000000000000000000000000000000000262242:6@200000006:240B428:4422400002046044222426220026642642462026224222824220022400000000\\00N222422242222222224062242222222422226264222422222222222222442804222422222222222222222222220<4<0204260002444020204224422");
const AG = DZ("ɠ222222222222222222222222222222222222222222222222222222222222˕4222226>ʶ22ʷʺʷ2ʸʷ42ʴ2ʓ22>621422ɶ222ɹɼɷɺɷɺ22ɱ42222ɨ2ɧ26622ɘɓ244ƸƵ222]d24242ǖǓƚÄȫ2263ȨȥȨ2222222ǣ222222222222222222ǂƽ2ƾƵ2222222422222ƜƑ22222222222222222222144Ŧţ22Ţş222222222222222222222ĸ2ı68ĦģĦɡŰ4Ġ«®ĝ822ĔđĔ2ē2222622");
const AS = DZ("02222222222222222222222222222222222222222222222222222222222222222202022222222222EH2200IL021042222Y\\222IL0cf2e10j2222U00X202[^2y0000120|{~22:22|22222222222G000qOVI00000}2>40000B00000I¨©000¬00000000000000021M®­00°000000000000000000000222HGHa1º222¿2À2222ÉÌ000­°2±");
const litAnchor = /* @__PURE__ */ new Int32Array(995);
const litGroup = /* @__PURE__ */ new Int32Array(995);
const litPool = /* @__PURE__ */ new Int32Array(995);
let poolText = "";
const poolOffsets = /* @__PURE__ */ new Int32Array(1038);
{
    const tailRef = /* @__PURE__ */ new Map();
    let nextRef = 0;
    let e = 0;
    for(let i = 0; i < AA.length; i++)for (const tail of SETS[AS[i]]){
        let r = tailRef.get(tail);
        if (r === void 0) {
            r = nextRef++;
            tailRef.set(tail, r);
            poolOffsets[r * 2] = poolText.length;
            poolOffsets[r * 2 + 1] = tail.length;
            poolText += tail;
        }
        litAnchor[e] = AA[i];
        litGroup[e] = AG[i];
        litPool[e] = r;
        e++;
    }
}const adjGid = DZ("0b2N:222@R>F@286¦2@H2D266226FB22B2>BD\\6N22222Z222D222p");
const adjStart = PS(U("1::24444432:442:44:44>222222:44:4421322511111311111114"));
const adjTgt = DZ("24A;33N=C@H4A;33N=C@<27;83:;8393NQ:3NQʰ222ˉºŴŽ2R2=18cƴÅŇ=cĞÛC1ƈǝȈ:ħ25=11D3A@4=<1;1DEr25;11B3?<6;:371BCn9@7=<8192>2E121@9@EHE@9>2T25511<398454131<=V25511<398454131<=ƧNž2Đå242L222290000f22500ɛ000ǘ222");
const patGid = U("ĳ");
const patTgt = U("");
const postfixLookupGroups = U("1");
const orderSensitiveModifiers = "* ** after backdrop before details-content file first-letter first-line marker placeholder selection";
var tables_generated_default = {
    GROUP_COUNT,
    customValidatorNames,
    edgeStart,
    labelStart,
    labelText,
    edgeTarget,
    nodeGroup,
    nodeVlist,
    vlistPat,
    vlistOps,
    vlistRef,
    vlistGroup,
    litAnchor,
    litGroup,
    litPool,
    poolOffsets,
    poolText,
    adjGid,
    adjStart,
    adjTgt,
    patGid,
    patTgt,
    postfixLookupGroups,
    orderSensitiveModifiers
};
;
}),
"[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/client/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];})()

//# sourceMappingURL=097k_1yojp6ojdfoqu._.js.map