require("./index.css");
var $i9b1P$reactjsxruntime = require("react/jsx-runtime");
var $i9b1P$react = require("react");
var $i9b1P$reactdom = require("react-dom");
var $i9b1P$classnames = require("classnames");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9233cea927cb9637$export$2e2bcd8739ae039);





const $9ba0f9a5c47c04f2$var$getBaseImageZoomIndicatorSize = ({ baseImageBox: baseImageBox, zoomedImageViewportRegion: zoomedImageViewportRegion, magnificationFactor: magnificationFactor })=>{
    if (!baseImageBox) return {};
    const magnifiedViewAspectRatio = zoomedImageViewportRegion.width / zoomedImageViewportRegion.height;
    return {
        x: baseImageBox.left,
        y: baseImageBox.top,
        width: baseImageBox.width <= baseImageBox.height ? baseImageBox.width / magnificationFactor : baseImageBox.height / magnificationFactor * magnifiedViewAspectRatio,
        height: baseImageBox.height <= baseImageBox.width ? baseImageBox.height / magnificationFactor : baseImageBox.width / magnificationFactor * magnifiedViewAspectRatio
    };
};
const $9ba0f9a5c47c04f2$var$getBaseImageZoomIndicatorPosition = ({ baseImageBox: baseImageBox, baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, baseImageCursorCoordinate: baseImageCursorCoordinate, scrollY: scrollY })=>{
    if (!baseImageBox) return {};
    const magnifierPointerLimiterMargin = {
        x: Math.round(baseImageZoomIndicatorRegion.width / 2),
        y: Math.round(baseImageZoomIndicatorRegion.height / 2)
    };
    const magnifierPointerLimiterBox = {
        top: baseImageBox.top + magnifierPointerLimiterMargin.y,
        left: baseImageBox.left + magnifierPointerLimiterMargin.x,
        bottom: baseImageBox.bottom - magnifierPointerLimiterMargin.y,
        right: baseImageBox.right - magnifierPointerLimiterMargin.x
    };
    let adjustedX = 0;
    let adjustedY = 0;
    if (baseImageCursorCoordinate.x < magnifierPointerLimiterBox.left) adjustedX = baseImageBox.left;
    else if (baseImageCursorCoordinate.x > magnifierPointerLimiterBox.right) adjustedX = baseImageBox.right - baseImageZoomIndicatorRegion.width;
    else adjustedX = baseImageCursorCoordinate.x - magnifierPointerLimiterMargin.x;
    if (baseImageCursorCoordinate.y < magnifierPointerLimiterBox.top) adjustedY = baseImageBox.top;
    else if (baseImageCursorCoordinate.y > magnifierPointerLimiterBox.bottom) adjustedY = baseImageBox.bottom - baseImageZoomIndicatorRegion.height;
    else adjustedY = baseImageCursorCoordinate.y - magnifierPointerLimiterMargin.y;
    return {
        x: adjustedX,
        y: adjustedY + scrollY
    };
};
const $9ba0f9a5c47c04f2$var$getZoomedImageSize = ({ baseImageBox: baseImageBox, baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, zoomedImageViewportRegion: zoomedImageViewportRegion })=>{
    if (!baseImageBox) return {};
    const zoomedImageViewportWidthMagnificationFactor = zoomedImageViewportRegion.width / baseImageZoomIndicatorRegion.width;
    const zoomedImageViewportHeightMagnificationFactor = zoomedImageViewportRegion.height / baseImageZoomIndicatorRegion.height;
    const zoomedImageWidth = baseImageBox?.width * zoomedImageViewportWidthMagnificationFactor;
    const zoomedImageHeight = baseImageBox?.height * zoomedImageViewportHeightMagnificationFactor;
    return {
        width: zoomedImageWidth,
        height: zoomedImageHeight
    };
};
const $9ba0f9a5c47c04f2$var$getZoomedImageVisibleRegionOffset = ({ baseImageBox: baseImageBox, baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, zoomedImageViewportRegion: zoomedImageViewportRegion, zoomedImageVisibleRegion: zoomedImageVisibleRegion, scrollY: scrollY })=>{
    if (!baseImageBox) return {};
    const baseImageTraversedPixelsX = baseImageZoomIndicatorRegion.x - baseImageBox.x;
    const baseImageTraversedPixelsY = baseImageZoomIndicatorRegion.y - (baseImageBox.y + scrollY);
    const baseImageTraversablePixelsX = baseImageBox.width - baseImageZoomIndicatorRegion.width;
    const baseImageTraversablePixelsY = baseImageBox.height - baseImageZoomIndicatorRegion.height;
    const baseImageTraversedPercentageX = baseImageTraversedPixelsX / baseImageTraversablePixelsX;
    const baseImageTraversedPercentageY = baseImageTraversedPixelsY / baseImageTraversablePixelsY;
    const zoomedImageTraversablePixelsX = zoomedImageVisibleRegion.width - zoomedImageViewportRegion.width;
    const zoomedImageTraversablePixelsY = zoomedImageVisibleRegion.height - zoomedImageViewportRegion.height;
    const zoomedImageTraversedPixelsX = baseImageTraversedPercentageX * zoomedImageTraversablePixelsX;
    const zoomedImageTraversedPixelsY = baseImageTraversedPercentageY * zoomedImageTraversablePixelsY;
    return {
        x: zoomedImageTraversedPixelsX,
        y: zoomedImageTraversedPixelsY
    };
};
const $9ba0f9a5c47c04f2$export$b593efc554e75ca7 = (params)=>{
    const defaultParams = {
        magnificationFactor: 2.0,
        isHidden: false
    };
    const { magnificationFactor: magnificationFactor, isHidden: isHidden } = Object.assign({}, defaultParams, params);
    const baseImageRef = (0, $i9b1P$react.useRef)(null);
    const [scrollY, setScrollY] = (0, $i9b1P$react.useState)(window.scrollY);
    const [baseImageZoomIndicatorRegion, setBaseImageZoomIndicatorRegion] = (0, $i9b1P$react.useState)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    const [baseImageCursorCoordinate, setBaseImageCursorCoordinate] = (0, $i9b1P$react.useState)({
        x: 0,
        y: 0
    });
    const [zoomedImageViewportRegion, setZoomedImageViewportRegion] = (0, $i9b1P$react.useState)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    // x, y indicates offset from the top-left corner, where width and height are the size of the zoomed image
    const [zoomedImageVisibleRegion, setZoomedImageVisibleRegion] = (0, $i9b1P$react.useState)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    // Convenience updaters
    const updateBaseImageZoomIndicatorRegion = (region)=>setBaseImageZoomIndicatorRegion((prev)=>({
                ...prev,
                ...region
            }));
    const updateBaseImageCursorCoordinate = ({ x: x, y: y })=>{
        const normalizedX = Math.max(x, 0);
        const normalizedY = Math.max(y, 0);
        setBaseImageCursorCoordinate({
            x: normalizedX,
            y: normalizedY
        });
    };
    const updateZoomedImageViewportRegion = (region)=>{
        setZoomedImageViewportRegion((prev)=>({
                ...prev,
                ...region
            }));
    };
    const updateZoomedImageVisibleRegion = (region)=>setZoomedImageVisibleRegion((prev)=>({
                ...prev,
                ...region
            }));
    // Processors
    (0, $i9b1P$react.useEffect)(()=>{
        const handleScroll = ()=>{
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0, $i9b1P$react.useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateBaseImageZoomIndicatorRegion($9ba0f9a5c47c04f2$var$getBaseImageZoomIndicatorSize({
            baseImageBox: baseImageBox,
            zoomedImageViewportRegion: zoomedImageViewportRegion,
            magnificationFactor: magnificationFactor
        }));
    }, [
        baseImageRef.current,
        zoomedImageViewportRegion.width,
        zoomedImageViewportRegion.height,
        magnificationFactor,
        isHidden
    ]);
    (0, $i9b1P$react.useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateBaseImageZoomIndicatorRegion($9ba0f9a5c47c04f2$var$getBaseImageZoomIndicatorPosition({
            baseImageBox: baseImageBox,
            baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion,
            baseImageCursorCoordinate: baseImageCursorCoordinate,
            scrollY: scrollY
        }));
    }, [
        baseImageRef.current,
        baseImageZoomIndicatorRegion.width,
        baseImageZoomIndicatorRegion.height,
        baseImageCursorCoordinate.x,
        baseImageCursorCoordinate.y,
        isHidden
    ]);
    (0, $i9b1P$react.useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateZoomedImageVisibleRegion($9ba0f9a5c47c04f2$var$getZoomedImageSize({
            baseImageBox: baseImageBox,
            baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion,
            zoomedImageViewportRegion: zoomedImageViewportRegion
        }));
    }, [
        baseImageRef.current,
        baseImageZoomIndicatorRegion.width,
        baseImageZoomIndicatorRegion.height,
        zoomedImageViewportRegion.width,
        zoomedImageViewportRegion.height,
        isHidden
    ]);
    (0, $i9b1P$react.useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateZoomedImageVisibleRegion($9ba0f9a5c47c04f2$var$getZoomedImageVisibleRegionOffset({
            baseImageBox: baseImageBox,
            baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion,
            zoomedImageViewportRegion: zoomedImageViewportRegion,
            zoomedImageVisibleRegion: zoomedImageVisibleRegion,
            scrollY: scrollY
        }));
    }, [
        baseImageRef.current,
        baseImageZoomIndicatorRegion.width,
        baseImageZoomIndicatorRegion.height,
        baseImageZoomIndicatorRegion.x,
        baseImageZoomIndicatorRegion.y,
        zoomedImageViewportRegion.width,
        zoomedImageViewportRegion.height,
        zoomedImageVisibleRegion.width,
        zoomedImageVisibleRegion.height,
        scrollY,
        isHidden
    ]);
    return [
        {
            baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion,
            zoomedImageViewportRegion: zoomedImageViewportRegion,
            zoomedImageVisibleRegion: zoomedImageVisibleRegion,
            scrollY: scrollY
        },
        {
            baseImageRef: baseImageRef,
            updateBaseImageCursorCoordinate: updateBaseImageCursorCoordinate,
            updateZoomedImageViewportRegion: updateZoomedImageViewportRegion
        }
    ];
};



/**
 * # ImageMagnifier
 *
 * A superset of the native HTML `img` component that provides a magnified view of the image when hovered.
 *
 * ## Features
 * - Provides a magnified view of the image when hovered
 * - Since it is a superset of the `img` component, all the props of the `img` component are supported and
 *   therefore this component can be plugged in as a drop-in replacement for the `img` component.
 *
 * ## Current Limitations
 * - All the props are forwared to the base image except for the `ref`
 */ const $9233cea927cb9637$var$ImageMagnifier = ({ // Self props
imageElement: ImageElement, magnifiedViewRegion: magnifiedViewRegion, isHidden: isHidden, classes: classes, src: // img props
src, className: className, onMouseMove: onMouseMove, onMouseLeave: onMouseLeave, ...otherProps })=>{
    const [{ baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, zoomedImageVisibleRegion: zoomedImageVisibleRegion, zoomedImageViewportRegion: zoomedImageViewportRegion, scrollY: scrollY }, { baseImageRef: baseImageRef, updateBaseImageCursorCoordinate: updateBaseImageCursorCoordinate, updateZoomedImageViewportRegion: updateZoomedImageViewportRegion }] = (0, $9ba0f9a5c47c04f2$export$b593efc554e75ca7)({
        isHidden: isHidden
    });
    const magnifiedImageRef = (0, $i9b1P$react.useRef)(null);
    const [isMagnifierVisible, setIsMagnifierVisible] = (0, $i9b1P$react.useState)(false);
    // Window resize handler
    const [windowSize, setWindowSize] = (0, $i9b1P$react.useState)({
        width: window.innerWidth,
        height: window.innerHeight
    });
    (0, $i9b1P$react.useEffect)(()=>{
        const onResize = ()=>{
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", onResize);
        return ()=>window.removeEventListener("resize", onResize);
    }, []);
    (0, $i9b1P$react.useEffect)(()=>{
        if (!baseImageRef.current || isHidden) return;
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateZoomedImageViewportRegion(magnifiedViewRegion({
            windowSize: windowSize,
            baseImageBox: baseImageBox,
            scrollY: scrollY
        }));
    }, [
        src,
        baseImageRef.current,
        windowSize,
        scrollY,
        isHidden
    ]);
    return /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsxs)((0, $i9b1P$react.Fragment), {
        children: [
            /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsx)(ImageElement, {
                src: src,
                className: (0, ($parcel$interopDefault($i9b1P$classnames)))("baseImage", classes?.baseImage, className),
                onMouseMove: (event)=>{
                    updateBaseImageCursorCoordinate({
                        x: event.clientX,
                        y: event.clientY
                    });
                    setIsMagnifierVisible(true);
                    onMouseMove?.(event);
                },
                onMouseLeave: (e)=>{
                    setIsMagnifierVisible(false);
                    onMouseLeave?.(e);
                },
                ref: baseImageRef,
                ...otherProps
            }),
            !isHidden && /*#__PURE__*/ (0, $i9b1P$reactdom.createPortal)(/*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsxs)((0, $i9b1P$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($i9b1P$classnames)))("magnifiedViewContainer", classes?.magnifiedViewContainer, !isMagnifierVisible && "invisible"),
                        style: {
                            left: zoomedImageViewportRegion.x,
                            top: zoomedImageViewportRegion.y,
                            width: zoomedImageViewportRegion.width,
                            height: zoomedImageViewportRegion.height
                        },
                        children: /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsx)("div", {
                            className: (0, ($parcel$interopDefault($i9b1P$classnames)))("magnifiedViewInnerContainer", classes?.magnifiedViewInnerContainer),
                            children: /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsx)(ImageElement, {
                                src: src,
                                className: (0, ($parcel$interopDefault($i9b1P$classnames)))("magnifiedView", classes?.magnifiedView),
                                style: Object.assign({}, {
                                    width: zoomedImageVisibleRegion.width,
                                    height: zoomedImageVisibleRegion.height,
                                    marginLeft: -zoomedImageVisibleRegion.x,
                                    marginTop: -zoomedImageVisibleRegion.y
                                }),
                                ref: magnifiedImageRef
                            })
                        })
                    }),
                    isMagnifierVisible && !!baseImageZoomIndicatorRegion.width && !!baseImageZoomIndicatorRegion.height && /*#__PURE__*/ (0, $i9b1P$reactjsxruntime.jsx)("div", {
                        className: (0, ($parcel$interopDefault($i9b1P$classnames)))("magnifier", classes?.magnifier),
                        style: {
                            left: baseImageZoomIndicatorRegion.x,
                            top: baseImageZoomIndicatorRegion.y,
                            width: baseImageZoomIndicatorRegion.width,
                            height: baseImageZoomIndicatorRegion.height
                        }
                    })
                ]
            }), document.body)
        ]
    });
};
$9233cea927cb9637$var$ImageMagnifier.defaultProps = {
    imageElement: "img"
};
var $9233cea927cb9637$export$2e2bcd8739ae039 = $9233cea927cb9637$var$ImageMagnifier;


//# sourceMappingURL=index.js.map
