(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/node_modules/@base-ui/react/button/Button.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$use$2d$button$2f$useButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/use-button/useButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, style, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$use$2d$button$2f$useButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) Button.displayName = "Button";
}),
"[project]/client/node_modules/@base-ui/react/context-menu/root/ContextMenuRootContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenuRootContext",
    ()=>ContextMenuRootContext,
    "useContextMenuRootContext",
    ()=>useContextMenuRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const ContextMenuRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ContextMenuRootContext.displayName = "ContextMenuRootContext";
function useContextMenuRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ContextMenuRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/clear/FilterDropdownClear.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdownClear",
    ()=>FilterDropdownClear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$use$2d$button$2f$useButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/use-button/useButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$createBaseUIEventDetails$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$clearPress$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/reason-parts.mjs [app-client] (ecmascript) <export * as REASONS .clearPress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const FilterDropdownClear = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FilterDropdownClear(componentProps, forwardedRef) {
    const { render, className, style, disabled: disabledProp = false, nativeButton = true, ...elementProps } = componentProps;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownRootContext"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownValueContext"])();
    const disabled = context.disabled || disabledProp;
    const visible = value !== '';
    const { buttonRef, getButtonProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$use$2d$button$2f$useButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useButton"])({
        disabled,
        native: nativeButton
    });
    // `visible` is deliberately absent from the state: the component renders nothing when it is
    // false, so a `data-visible` attribute would be present on every rendered instance.
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('button', componentProps, {
        enabled: visible,
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            {
                tabIndex: -1,
                'aria-hidden': true,
                onMouseDown (event) {
                    // Avoid stealing focus from the input on pointer interaction.
                    event.preventDefault();
                },
                onClick (event) {
                    const eventDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$createBaseUIEventDetails$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$clearPress$3e$__["REASONS"].clearPress, event.nativeEvent);
                    context.onValueChange('', eventDetails);
                    context.focusOwnerRef.current?.focus({
                        preventScroll: true
                    });
                }
            },
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) FilterDropdownClear.displayName = "FilterDropdownClear";
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/empty/FilterDropdownEmpty.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdownEmpty",
    ()=>FilterDropdownEmpty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$useStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/store/useStore.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useInitialLiveRegionTextMutation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useInitialLiveRegionTextMutation.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const FilterDropdownEmpty = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FilterDropdownEmpty(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownItemContext"])();
    const isEmpty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$useStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].isEmpty);
    // Items mounting in the same commit register in layout effects, after this first render, and
    // don't register on the server at all. Deciding once they have keeps the children from
    // mounting for a frame on every open, and the message out of server markup.
    const [ready, setReady] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FilterDropdownEmpty.FilterDropdownEmpty.useIsoLayoutEffect": ()=>{
            setReady(true);
        }
    }["FilterDropdownEmpty.FilterDropdownEmpty.useIsoLayoutEffect"], []);
    const visible = ready && isEmpty;
    const emptyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useInitialLiveRegionTextMutation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInitialLiveRegionTextMutation"])(visible);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        enabled: visible,
        ref: [
            forwardedRef,
            emptyRef
        ],
        props: [
            {
                role: 'status',
                'aria-live': 'polite',
                'aria-atomic': true
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) FilterDropdownEmpty.displayName = "FilterDropdownEmpty";
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/group/FilterDropdownGroupContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdownGroupContext",
    ()=>FilterDropdownGroupContext,
    "useFilterDropdownGroupContext",
    ()=>useFilterDropdownGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const FilterDropdownGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) FilterDropdownGroupContext.displayName = "FilterDropdownGroupContext";
function useFilterDropdownGroupContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FilterDropdownGroupContext);
}
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/group/useFilterDropdownGroup.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterDropdownGroup",
    ()=>useFilterDropdownGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$useStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/store/useStore.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useRefWithInit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$group$2f$FilterDropdownGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/group/FilterDropdownGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useItemRegistry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useItemRegistry.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function isGroupHidden(state, items) {
    // A group with no members hasn't been filtered out, it hasn't registered yet.
    if (state.visibleItemIds === null || items.size === 0) {
        return false;
    }
    for (const [id, retained] of items){
        if (retained || state.visibleItemIds.has(id)) {
            return false;
        }
    }
    return true;
}
function useFilterDropdownGroup() {
    const { store } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownItemContext"])();
    const parentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$group$2f$FilterDropdownGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownGroupContext"])();
    const { items, registerItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useItemRegistry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemRegistry"])();
    const hidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$useStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, isGroupHidden, items);
    // A nested container collects its own items, so the enclosing one only ever sees this
    // registration. Report visibility upward or a group of groups would look empty.
    const groupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "useFilterDropdownGroup.useRefWithInit": ()=>Symbol('filter-dropdown-group')
    }["useFilterDropdownGroup.useRefWithInit"]).current;
    const registerInParent = parentContext?.registerItem;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useFilterDropdownGroup.useIsoLayoutEffect": ()=>registerInParent?.(groupId, !hidden)
    }["useFilterDropdownGroup.useIsoLayoutEffect"], [
        registerInParent,
        groupId,
        hidden
    ]);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFilterDropdownGroup.useMemo[context]": ()=>({
                registerItem
            })
    }["useFilterDropdownGroup.useMemo[context]"], [
        registerItem
    ]);
    return {
        hidden,
        context
    };
}
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/input/FilterDropdownInput.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdownInput",
    ()=>FilterDropdownInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$platform$2f$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__platform__$2e$os$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/platform/parts.mjs [app-client] (ecmascript) <export * as platform .os>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useBaseUiId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useBaseUiId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$createBaseUIEventDetails$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$inputChange$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/reason-parts.mjs [app-client] (ecmascript) <export * as REASONS .inputChange>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$inputClear$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/reason-parts.mjs [app-client] (ecmascript) <export * as REASONS .inputClear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$utils$2f$refocusOwner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/utils/refocusOwner.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FilterDropdownInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FilterDropdownInput(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, disabled, activeItemId, navigationProps, ...elementProps } = componentProps;
    // Browsers flag a form field with neither an id nor a name.
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useBaseUiId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])(idProp);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownRootContext"])();
    const { listRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownItemContext"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownValueContext"])();
    // IME text isn't committed until the composition ends, so filtering waits for it.
    const [composingValue, setComposingValue] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const isComposingRef = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    function commitValue(nextValue, nativeEvent) {
        // The input keeps focus until the popup unmounts. An edit made while it animates out would
        // land after the close reset the query and carry over into the next open.
        if (!context.open) {
            return;
        }
        const reason = nextValue === '' ? __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$inputClear$3e$__["REASONS"].inputClear : __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$inputChange$3e$__["REASONS"].inputChange;
        context.onValueChange(nextValue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$createBaseUIEventDetails$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(reason, nativeEvent));
    }
    const state = {
        highlighted: context.inputFocusVisible && (!context.keyboardModality || activeItemId == null)
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('input', componentProps, {
        state,
        ref: [
            forwardedRef,
            context.focusOwnerRef
        ],
        props: [
            navigationProps,
            {
                id,
                type: 'text',
                disabled: context.disabled || disabled,
                'aria-activedescendant': activeItemId,
                role: 'searchbox',
                inputMode: 'search',
                autoComplete: 'off',
                spellCheck: 'false',
                autoCorrect: 'off',
                autoCapitalize: 'none',
                // The aria-autocomplete 'list' value is only valid with `aria-haspopup` so we depend
                // on the searchbox role to communicate affordance, with an input label as fallback
                // https://w3c.github.io/aria/#aria-autocomplete
                'aria-autocomplete': undefined,
                'aria-controls': context.listId,
                value: composingValue ?? value,
                onCompositionStart (event) {
                    // Some Android keyboards treat all typing as one composition.
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$platform$2f$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__platform__$2e$os$3e$__["platform"].os.android) {
                        return;
                    }
                    isComposingRef.current = true;
                    setComposingValue(event.currentTarget.value);
                },
                onCompositionEnd (event) {
                    if (!isComposingRef.current) {
                        return;
                    }
                    isComposingRef.current = false;
                    setComposingValue(null);
                    commitValue(event.currentTarget.value, event.nativeEvent);
                },
                onChange (event) {
                    if (isComposingRef.current) {
                        setComposingValue(event.currentTarget.value);
                        return;
                    }
                    commitValue(event.currentTarget.value, event.nativeEvent);
                },
                onKeyDown () {
                    context.setKeyboardModality(true);
                },
                onPointerDown () {
                    context.setKeyboardModality(false);
                },
                onMouseEnter (event) {
                    context.setKeyboardModality(false);
                    // Take focus so typing filters immediately.
                    if (context.open) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$utils$2f$refocusOwner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refocusOwner"])(event.currentTarget);
                    }
                },
                onFocus (event) {
                    context.setInputFocusVisible(true);
                    // A screen reader that followed `aria-activedescendant` put real focus on the item, so
                    // focus returning from an item means the user moved back to the input on purpose and
                    // the highlight no longer reflects where they are. The list's own key replay and
                    // pointer refocus also pass through here and keep it.
                    if (context.autoHighlight === 'always' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$utils$2f$refocusOwner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRefocusingOwner"])()) {
                        return;
                    }
                    const from = event.relatedTarget;
                    if (from !== null && listRef.current.includes(from)) {
                        context.setActiveIndex(null);
                    }
                },
                onBlur () {
                    context.setInputFocusVisible(false);
                }
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) FilterDropdownInput.displayName = "FilterDropdownInput";
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/item/useFilterDropdownItem.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterDropdownItem",
    ()=>useFilterDropdownItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useRefWithInit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useValueAsRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useValueAsRef.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$useStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/store/useStore.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$group$2f$FilterDropdownGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/group/FilterDropdownGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
/** Text of the rendered children, for when the element is filtered out and has no DOM node. */ function childrenText(children) {
    if (typeof children === 'string' || typeof children === 'number') {
        return String(children);
    }
    if (Array.isArray(children)) {
        return children.map(childrenText).join('');
    }
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        return childrenText(children.props.children);
    }
    return '';
}
function useFilterDropdownItem(params) {
    const { label, retainGroup = false, children, render, context } = params;
    const nearestContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownItemContext"])(context !== undefined);
    const groupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$group$2f$FilterDropdownGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownGroupContext"])();
    const owner = context === undefined ? nearestContext : context;
    const { registerItem, store } = owner ?? __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DETACHED_OWNER"];
    const registerGroupItem = groupContext?.registerItem;
    const itemId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "useFilterDropdownItem.useRefWithInit": ()=>Symbol('filter-dropdown-item')
    }["useFilterDropdownItem.useRefWithInit"]).current;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const registeredTextRef = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const matched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$useStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(store, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectors"].isItemVisible, itemId);
    // An initial item is visible before registration (`visibleItemIds` is null), so start
    // registered and skip the mount re-render. A late item under an active filter starts
    // unregistered and renders once so its DOM text can be captured.
    const [registered, setRegistered] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](matched);
    // Read through refs so `register` stays stable while the children change identity.
    const childrenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useValueAsRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(children);
    const renderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useValueAsRef$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueAsRef"])(render);
    // What the children last read as, to tell whether they changed while the item rendered no text.
    const childrenTextRef = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const resolveText = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFilterDropdownItem.useCallback[resolveText]": ()=>{
            if (label != null) {
                return label;
            }
            // An item without children can carry its text in its `render` element instead.
            const fromChildren = childrenText(childrenRef.current ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unwrapLazyRenderProp"])(renderRef.current));
            const previousChildrenText = childrenTextRef.current;
            childrenTextRef.current = fromChildren;
            if (ref.current !== null) {
                return ref.current.textContent ?? '';
            }
            // A filtered-out item has no DOM node left. Its children are only a stand-in for the text it
            // renders, which can differ (a translation component, for example), so the cached text wins
            // unless the children changed.
            if (registeredTextRef.current !== undefined && fromChildren === previousChildrenText) {
                return registeredTextRef.current;
            }
            return fromChildren;
        }
    }["useFilterDropdownItem.useCallback[resolveText]"], [
        label,
        childrenRef,
        renderRef
    ]);
    const register = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFilterDropdownItem.useCallback[register]": (resolvedText)=>{
            const text = resolvedText ?? resolveText();
            if (text) {
                registeredTextRef.current = text;
            }
            return registerItem(itemId, {
                getText () {
                    // A mounted item reports what it renders now, even nothing, since a descendant can change
                    // its text without the item re-rendering. A filtered-out item falls back to the cached
                    // text.
                    if (label == null && ref.current) {
                        registeredTextRef.current = ref.current.textContent ?? '';
                    }
                    return registeredTextRef.current;
                }
            });
        }
    }["useFilterDropdownItem.useCallback[register]"], [
        itemId,
        label,
        registerItem,
        resolveText
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useFilterDropdownItem.useIsoLayoutEffect": ()=>{
            const unregister = register();
            setRegistered(true);
            return unregister;
        }
    }["useFilterDropdownItem.useIsoLayoutEffect"], [
        register
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useFilterDropdownItem.useIsoLayoutEffect": ()=>registerGroupItem?.(itemId, retainGroup)
    }["useFilterDropdownItem.useIsoLayoutEffect"], [
        registerGroupItem,
        itemId,
        retainGroup
    ]);
    // Re-register when the item's text changes, so the active query runs again.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useFilterDropdownItem.useIsoLayoutEffect": ()=>{
            const text = resolveText();
            if (text !== registeredTextRef.current) {
                registeredTextRef.current = text;
                void register(text);
            }
        }
    }["useFilterDropdownItem.useIsoLayoutEffect"], [
        register,
        resolveText,
        children,
        render,
        label
    ]);
    return {
        visible: !registered || matched,
        ref
    };
}
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/list/FilterDropdownList.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdownList",
    ()=>FilterDropdownList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$group$2f$FilterDropdownGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/group/FilterDropdownGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$resolveRenderedId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/resolveRenderedId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$shadowDom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/shadowDom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$utils$2f$refocusOwner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/utils/refocusOwner.mjs [app-client] (ecmascript)");
/**
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const FilterDropdownList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function FilterDropdownList(componentProps, forwardedRef) {
    // `id` is resolved by `useRenderedId`, which also honors an id on the `render` element.
    const { render, className, style, id: idProp, ...elementProps } = componentProps;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterDropdownRootContext"])();
    const [id, registerIdRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$resolveRenderedId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderedId"])(componentProps, context.defaultListId, context.setRenderedListId);
    const defaultProps = {
        // Chromium includes scrollable elements in sequential focus navigation by default.
        tabIndex: -1,
        id,
        onFocus (event) {
            // A press on the list's own content, such as its background, a group, or a group label,
            // focuses the list.
            const owner = context.focusOwnerRef.current;
            if (owner && event.relatedTarget === owner && (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$shadowDom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event.nativeEvent) === event.currentTarget) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$utils$2f$refocusOwner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refocusOwner"])(owner);
            }
        },
        onPointerMove () {
            context.setKeyboardModality(false);
        },
        onPointerDown () {
            context.setKeyboardModality(false);
        }
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            registerIdRef
        ],
        props: [
            defaultProps,
            elementProps,
            {
                // The list's groups and items belong to this root's query. A nested root's list renders
                // inside an enclosing group, which must not count them as its own members.
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$group$2f$FilterDropdownGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdownGroupContext"].Provider, {
                    value: null,
                    children: elementProps.children
                })
            }
        ]
    });
});
if ("TURBOPACK compile-time truthy", 1) FilterDropdownList.displayName = "FilterDropdownList";
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRoot.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdownRoot",
    ()=>FilterDropdownRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useRefWithInit.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useStableCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useStableCallback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/filter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useBaseUiId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useBaseUiId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useItemRegistry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useItemRegistry.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/filter-dropdown/store.mjs [app-client] (ecmascript)");
/**
 * Holds the filter query, matches it against the registered items, and publishes the result. The
 * host owns list navigation; this root moves the highlight through `setActiveIndex`.
 *
 * @internal
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function FilterDropdownRoot(props) {
    const { children, open, disabled = false, openedByKeyboard = false, locale, value, query, onValueChange, filter, autoHighlight = false, triggerId: triggerIdProp, listRef, getActiveIndex, setActiveIndex, focusOwnerRef: focusOwnerRefProp } = props;
    const parentItemContext = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdownItemContext"]);
    const [renderedListId, setRenderedListId] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    const [inputFocusVisible, setInputFocusVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](openedByKeyboard);
    const [keyboardModality, setKeyboardModality] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](openedByKeyboard);
    const [previousOpenedByKeyboard, setPreviousOpenedByKeyboard] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](openedByKeyboard);
    // Both reset when the host reports a new value; doing it during render skips an extra commit.
    if (openedByKeyboard !== previousOpenedByKeyboard) {
        setPreviousOpenedByKeyboard(openedByKeyboard);
        setInputFocusVisible(openedByKeyboard);
        setKeyboardModality(openedByKeyboard);
    }
    const { items: registeredItems, registerItem: registerInRegistry, liveItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useItemRegistry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemRegistry"])();
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useBaseUiId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseUiId"])();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useRefWithInit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefWithInit"])({
        "FilterDropdownRoot.useRefWithInit": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdownStore"]()
    }["FilterDropdownRoot.useRefWithInit"]).current;
    // The count is published as items register, not with the next registry snapshot, so a
    // `Menu.Empty` mounting alongside the items never reads a stale zero.
    const registerItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useStableCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FilterDropdownRoot.useStableCallback[registerItem]": (id, item)=>{
            const unregister = registerInRegistry(id, item);
            store.set('registeredItemCount', liveItems.size);
            return ({
                "FilterDropdownRoot.useStableCallback[registerItem]": ()=>{
                    unregister();
                    store.set('registeredItemCount', liveItems.size);
                }
            })["FilterDropdownRoot.useStableCallback[registerItem]"];
        }
    }["FilterDropdownRoot.useStableCallback[registerItem]"]);
    const fallbackFocusOwnerRef = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const lastFilterQueryRef = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const defaultMatchItem = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FilterDropdownRoot.useMemo[defaultMatchItem]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$filter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilter"])({
                locale
            }).contains
    }["FilterDropdownRoot.useMemo[defaultMatchItem]"], [
        locale
    ]);
    const focusOwnerRef = focusOwnerRefProp ?? fallbackFocusOwnerRef;
    const filterQuery = (query ?? value).trim();
    // An unused inline filter must not re-run auto-highlighting when the consumer re-renders.
    const matchItem = filterQuery === '' || filter === null ? null : filter ?? defaultMatchItem;
    const autoHighlightEnabled = open && (autoHighlight === 'always' || autoHighlight && filterQuery !== '');
    // React 17 resolves generated ids in an effect, so they must be read live rather than captured
    // in a state initializer.
    const defaultListId = defaultId ? `${defaultId}-list` : undefined;
    const listId = (renderedListId ?? defaultListId) || undefined;
    // The host owns the trigger. `null` and `''` both mean no element carries an id to point at.
    const triggerId = triggerIdProp || undefined;
    const handleValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useStableCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FilterDropdownRoot.useStableCallback[handleValueChange]": (nextValue, eventDetails)=>{
            onValueChange?.(nextValue, eventDetails);
            // Indexes are positional, so a kept highlight would land on whatever fills its slot.
            // With `autoHighlight`, the filtering effect below places the highlight instead.
            if (!eventDetails.isCanceled && !autoHighlight) {
                setActiveIndex(null);
            }
        }
    }["FilterDropdownRoot.useStableCallback[handleValueChange]"]);
    const handleItemsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useStableCallback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCallback"])({
        "FilterDropdownRoot.useStableCallback[handleItemsChange]": (previousItems)=>{
            const items = listRef.current;
            const activeIndex = getActiveIndex();
            // A positional highlight must not silently move to another item. A change that leaves the
            // highlighted item in place keeps it, such as an item appended after it or one that renders
            // once before the query filters it out. A query change already reset the highlight.
            if (activeIndex != null && items[activeIndex] != null && items[activeIndex] === previousItems[activeIndex]) {
                return;
            }
            setActiveIndex(autoHighlightEnabled && items.length > 0 ? 0 : null);
        }
    }["FilterDropdownRoot.useStableCallback[handleItemsChange]"]);
    // Re-runs on the registry snapshot published once every item in the commit has registered,
    // and on the committed query, because a controlled consumer can reject a proposed change. It
    // reads the live registry so items registered in this commit count before their snapshot.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "FilterDropdownRoot.useIsoLayoutEffect": ()=>{
            if (!open && query === undefined) {
                return;
            }
            const queryChanged = lastFilterQueryRef.current !== null && lastFilterQueryRef.current !== filterQuery;
            lastFilterQueryRef.current = filterQuery;
            // With no query or external filtering, every registered item is visible. External filtering
            // still follows `autoHighlight`; otherwise the item set invalidates the highlight.
            if (matchItem === null) {
                store.set('visibleItemIds', null);
                // Registry updates, such as an item's text changing, keep the current highlight.
                if (autoHighlightEnabled && liveItems.size > 0) {
                    if (queryChanged || getActiveIndex() == null) {
                        setActiveIndex(0);
                    }
                } else if (filterQuery === '' && queryChanged) {
                    setActiveIndex(null);
                }
                return;
            }
            const currentIds = store.state.visibleItemIds;
            // The popup's content mounts a commit after the root opens. Publishing an empty result before
            // anything registered would hide every item as it arrives and remount the matches.
            if (currentIds === null && liveItems.size === 0) {
                return;
            }
            const nextIds = new Set();
            let hasNewMatch = currentIds === null;
            liveItems.forEach({
                "FilterDropdownRoot.useIsoLayoutEffect": ({ getText }, id)=>{
                    const text = getText();
                    if (text != null && matchItem(text, filterQuery)) {
                        nextIds.add(id);
                        hasNewMatch ||= !currentIds?.has(id);
                    }
                }
            }["FilterDropdownRoot.useIsoLayoutEffect"]);
            // New matches or a smaller result set invalidate the previous item identities.
            if (hasNewMatch || currentIds?.size !== nextIds.size) {
                // The first filtered snapshot can land after initial keyboard navigation in React 18. It
                // has no prior result identity to invalidate, unless the controlled query itself changed.
                if (autoHighlightEnabled && nextIds.size > 0) {
                    setActiveIndex(0);
                } else if (currentIds !== null || queryChanged) {
                    setActiveIndex(null);
                }
                store.set('visibleItemIds', nextIds);
            } else if (autoHighlightEnabled && queryChanged && nextIds.size > 0) {
                setActiveIndex(0);
            }
        }
    }["FilterDropdownRoot.useIsoLayoutEffect"], [
        open,
        query,
        filterQuery,
        registeredItems,
        liveItems,
        matchItem,
        autoHighlightEnabled,
        store,
        setActiveIndex,
        getActiveIndex
    ]);
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FilterDropdownRoot.useMemo[contextValue]": ()=>({
                open,
                disabled,
                inputFocusVisible,
                setInputFocusVisible,
                keyboardModality,
                setKeyboardModality,
                autoHighlight,
                triggerId,
                defaultListId,
                listId,
                setRenderedListId,
                focusOwnerRef,
                setActiveIndex,
                onItemsChange: handleItemsChange,
                onValueChange: handleValueChange
            })
    }["FilterDropdownRoot.useMemo[contextValue]"], [
        open,
        disabled,
        inputFocusVisible,
        keyboardModality,
        autoHighlight,
        triggerId,
        defaultListId,
        listId,
        focusOwnerRef,
        setActiveIndex,
        handleItemsChange,
        handleValueChange
    ]);
    const itemContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "FilterDropdownRoot.useMemo[itemContextValue]": ()=>({
                parent: parentItemContext,
                store,
                registerItem,
                listRef
            })
    }["FilterDropdownRoot.useMemo[itemContextValue]"], [
        parentItemContext,
        store,
        registerItem,
        listRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdownItemContext"].Provider, {
        value: itemContextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdownRootContext"].Provider, {
            value: contextValue,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$filter$2d$dropdown$2f$root$2f$FilterDropdownRootContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdownValueContext"].Provider, {
                value: query ?? value,
                children: children
            })
        })
    });
}
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/root/FilterDropdownRootContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdownItemContext",
    ()=>FilterDropdownItemContext,
    "FilterDropdownRoot",
    ()=>FilterDropdownRoot,
    "FilterDropdownRootContext",
    ()=>FilterDropdownRootContext,
    "FilterDropdownValueContext",
    ()=>FilterDropdownValueContext,
    "useFilterContextForList",
    ()=>useFilterContextForList,
    "useFilterDropdownItemContext",
    ()=>useFilterDropdownItemContext,
    "useFilterDropdownRootContext",
    ()=>useFilterDropdownRootContext,
    "useFilterDropdownValueContext",
    ()=>useFilterDropdownValueContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function throwMissingFilterRoot() {
    throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: Filter parts are missing their filter context and cannot access the query or items. ' + 'Wrap the component root in its filter provider.' : "TURBOPACK unreachable");
}
const FilterDropdownItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) FilterDropdownItemContext.displayName = "FilterDropdownItemContext";
function useFilterDropdownItemContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FilterDropdownItemContext);
    if (context === null && !optional) {
        throwMissingFilterRoot();
    }
    return context;
}
const FilterDropdownRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) FilterDropdownRootContext.displayName = "FilterDropdownRootContext";
function useFilterDropdownRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FilterDropdownRootContext);
    if (context === null && !optional) {
        throwMissingFilterRoot();
    }
    return context;
}
function useFilterContextForList(listRef) {
    let context = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FilterDropdownItemContext);
    if (listRef === null) {
        return null;
    }
    while(context !== null && context.listRef !== listRef){
        context = context.parent;
    }
    return context;
}
const FilterDropdownValueContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]('');
if ("TURBOPACK compile-time truthy", 1) FilterDropdownValueContext.displayName = "FilterDropdownValueContext";
function useFilterDropdownValueContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FilterDropdownValueContext);
}
let FilterDropdownRoot;
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/root/useFilterDropdownCloseQuery.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterDropdownCloseQuery",
    ()=>useFilterDropdownCloseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$createBaseUIEventDetails$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$popupClose$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/reason-parts.mjs [app-client] (ecmascript) <export * as REASONS .popupClose>");
'use client';
;
;
;
;
function useFilterDropdownCloseQuery(parameters) {
    const { open, mounted, value, onValueChange } = parameters;
    const [closeQuery, setCloseQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const previousOpenRef = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$useIsoLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoLayoutEffect"])({
        "useFilterDropdownCloseQuery.useIsoLayoutEffect": ()=>{
            const wasOpen = previousOpenRef.current;
            previousOpenRef.current = open;
            if (wasOpen && !open && value !== '') {
                setCloseQuery(value);
                onValueChange('', (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$createBaseUIEventDetails$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChangeEventDetails"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$reason$2d$parts$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__REASONS__$2e$popupClose$3e$__["REASONS"].popupClose));
            } else if ((open || !mounted) && closeQuery !== null) {
                setCloseQuery(null);
            }
        }
    }["useFilterDropdownCloseQuery.useIsoLayoutEffect"], [
        open,
        mounted,
        value,
        closeQuery,
        onValueChange
    ]);
    return !open && closeQuery !== null ? closeQuery : value;
}
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/store.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DETACHED_OWNER",
    ()=>DETACHED_OWNER,
    "FilterDropdownStore",
    ()=>FilterDropdownStore,
    "selectors",
    ()=>selectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$ReactStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/store/ReactStore.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/empty.mjs [app-client] (ecmascript)");
;
;
const selectors = {
    // A null `visibleItemIds` means no query, so fall back to whether anything registered.
    isEmpty: (state)=>state.visibleItemIds === null ? state.registeredItemCount === 0 : state.visibleItemIds.size === 0,
    isItemVisible: (state, id)=>state.visibleItemIds === null || state.visibleItemIds.has(id)
};
class FilterDropdownStore extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$store$2f$ReactStore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactStore"] {
    constructor(){
        super({
            visibleItemIds: null,
            registeredItemCount: 0
        }, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJECT"], selectors);
    }
}
const DETACHED_OWNER = {
    registerItem: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$empty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"],
    store: new FilterDropdownStore()
};
}),
"[project]/client/node_modules/@base-ui/react/filter-dropdown/utils/refocusOwner.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRefocusingOwner",
    ()=>isRefocusingOwner,
    "refocusOwner",
    ()=>refocusOwner
]);
let refocusing = false;
function refocusOwner(owner) {
    refocusing = true;
    try {
        owner.focus({
            preventScroll: true
        });
    } finally{
        refocusing = false;
    }
}
function isRefocusingOwner() {
    return refocusing;
}
}),
"[project]/client/node_modules/@base-ui/react/menubar/MenubarContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenubarContext",
    ()=>MenubarContext,
    "useMenubarContext",
    ()=>useMenubarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const MenubarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
if ("TURBOPACK compile-time truthy", 1) MenubarContext.displayName = "MenubarContext";
function useMenubarContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](MenubarContext);
    if (context === null && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/client/node_modules/@base-ui/react/merge-props/mergeProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeEventPreventable",
    ()=>makeEventPreventable,
    "mergeClassNames",
    ()=>mergeClassNames,
    "mergeProps",
    ()=>mergeProps,
    "mergePropsN",
    ()=>mergePropsN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$mergeObjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/utils/mergeObjects.mjs [app-client] (ecmascript)");
;
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
    if (!c && !d && !e && !a) {
        return createInitialMergedProps(b);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(a);
    if (b) {
        merged = mergeInto(merged, b);
    }
    if (c) {
        merged = mergeInto(merged, c);
    }
    if (d) {
        merged = mergeInto(merged, d);
    }
    if (e) {
        merged = mergeInto(merged, e);
    }
    return merged;
}
function mergePropsN(props) {
    if (props.length === 0) {
        return EMPTY_PROPS;
    }
    if (props.length === 1) {
        return createInitialMergedProps(props[0]);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(props[0]);
    for(let i = 1; i < props.length; i += 1){
        merged = mergeInto(merged, props[i]);
    }
    return merged;
}
function createInitialMergedProps(inputProps) {
    if (isPropsGetter(inputProps)) {
        // Getter-returned handlers intentionally keep their existing semantics.
        return {
            ...inputProps(EMPTY_PROPS)
        };
    }
    return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(merged);
    }
    return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
    const copiedProps = {
        ...inputProps
    };
    // `copiedProps` is our fresh own-object copy, so iterating with `for...in` is safe here.
    // eslint-disable-next-line guard-for-in
    for(const propName in copiedProps){
        const propValue = copiedProps[propName];
        if (isEventHandler(propName, propValue)) {
            copiedProps[propName] = wrapEventHandler(propValue);
        }
    }
    return copiedProps;
}
/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */ function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
        return mergedProps;
    }
    // eslint-disable-next-line guard-for-in
    for(const propName in externalProps){
        const externalPropValue = externalProps[propName];
        switch(propName){
            case 'style':
                {
                    mergedProps[propName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$utils$2f$mergeObjects$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjects"])(mergedProps.style, externalPropValue);
                    break;
                }
            case 'className':
                {
                    mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
                    break;
                }
            default:
                {
                    if (isEventHandler(propName, externalPropValue)) {
                        mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
                    } else {
                        mergedProps[propName] = externalPropValue;
                    }
                }
        }
    }
    return mergedProps;
}
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 /* o */  && code1 === 110 /* n */  && code2 >= 65 /* A */  && code2 <= 90 /* Z */  && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
    return typeof inputProps === 'function';
}
function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
        return ourHandler;
    }
    if (!ourHandler) {
        return wrapEventHandler(theirHandler);
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            const baseUIEvent = event;
            makeEventPreventable(baseUIEvent);
            const result = theirHandler(...args);
            if (!baseUIEvent.baseUIHandlerPrevented) {
                ourHandler?.(...args);
            }
            return result;
        }
        const result = theirHandler(...args);
        ourHandler?.(...args);
        return result;
    };
}
function wrapEventHandler(handler) {
    if (!handler) {
        return handler;
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            makeEventPreventable(event);
        }
        return handler(...args);
    };
}
function makeEventPreventable(event) {
    event.preventBaseUIHandler = ()=>{
        event.baseUIHandlerPrevented = true;
    };
    return event;
}
function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
        if (ourClassName) {
            // eslint-disable-next-line prefer-template
            return theirClassName + ' ' + ourClassName;
        }
        return theirClassName;
    }
    return ourClassName;
}
function isSyntheticEvent(event) {
    return event != null && typeof event === 'object' && 'nativeEvent' in event;
}
}),
"[project]/client/node_modules/@base-ui/react/separator/Separator.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/internals/useRenderElement.mjs [app-client] (ecmascript)");
'use client';
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SeparatorComponent(componentProps, forwardedRef) {
    const { className, render, orientation = 'horizontal', style, ...elementProps } = componentProps;
    const state = {
        orientation
    };
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$internals$2f$useRenderElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                role: 'separator',
                'aria-orientation': orientation
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time truthy", 1) Separator.displayName = "Separator";
}),
"[project]/client/node_modules/@base-ui/react/toolbar/root/ToolbarRootContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolbarRootContext",
    ()=>ToolbarRootContext,
    "useToolbarRootContext",
    ()=>useToolbarRootContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const ToolbarRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
if ("TURBOPACK compile-time truthy", 1) ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ToolbarRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time truthy", 1) ? 'Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>.' : "TURBOPACK unreachable");
    }
    return context;
}
}),
"[project]/client/node_modules/@base-ui/react/tooltip/trigger/TooltipTriggerDataAttributes.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "popupOpen",
    ()=>popupOpen,
    "triggerDisabled",
    ()=>triggerDisabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$CommonTriggerDataAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__CommonTriggerDataAttributes__$2e$popupOpen$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@base-ui/react/utils/CommonTriggerDataAttributes.mjs [app-client] (ecmascript) <export * as CommonTriggerDataAttributes .popupOpen>");
;
const popupOpen = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$base$2d$ui$2f$react$2f$utils$2f$CommonTriggerDataAttributes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__CommonTriggerDataAttributes__$2e$popupOpen$3e$__["CommonTriggerDataAttributes"].popupOpen;
const triggerDisabled = 'data-trigger-disabled';
}),
]);})()

//# sourceMappingURL=097k_%40base-ui_react_18tyunyu73ade._.js.map