import "./index.css";
import {jsxs as $gMmFq$jsxs, jsx as $gMmFq$jsx, Fragment as $gMmFq$Fragment} from "react/jsx-runtime";
import {useRef as $gMmFq$useRef, useState as $gMmFq$useState, useEffect as $gMmFq$useEffect, Fragment as $gMmFq$Fragment1} from "react";
import {createPortal as $gMmFq$createPortal} from "react-dom";
import $gMmFq$classnames from "classnames";






const $fab42eb3dee39b5b$var$getBaseImageZoomIndicatorSize = ({ baseImageBox: baseImageBox, zoomedImageViewportRegion: zoomedImageViewportRegion, magnificationFactor: magnificationFactor })=>{
    if (!baseImageBox) return {};
    const magnifiedViewAspectRatio = zoomedImageViewportRegion.width / zoomedImageViewportRegion.height;
    return {
        x: baseImageBox.left,
        y: baseImageBox.top,
        width: baseImageBox.width <= baseImageBox.height ? baseImageBox.width / magnificationFactor : baseImageBox.height / magnificationFactor * magnifiedViewAspectRatio,
        height: baseImageBox.height <= baseImageBox.width ? baseImageBox.height / magnificationFactor : baseImageBox.width / magnificationFactor * magnifiedViewAspectRatio
    };
};
const $fab42eb3dee39b5b$var$getBaseImageZoomIndicatorPosition = ({ baseImageBox: baseImageBox, baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, baseImageCursorCoordinate: baseImageCursorCoordinate, scrollY: scrollY })=>{
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
const $fab42eb3dee39b5b$var$getZoomedImageSize = ({ baseImageBox: baseImageBox, baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, zoomedImageViewportRegion: zoomedImageViewportRegion })=>{
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
const $fab42eb3dee39b5b$var$getZoomedImageVisibleRegionOffset = ({ baseImageBox: baseImageBox, baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, zoomedImageViewportRegion: zoomedImageViewportRegion, zoomedImageVisibleRegion: zoomedImageVisibleRegion, scrollY: scrollY })=>{
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
const $fab42eb3dee39b5b$export$b593efc554e75ca7 = (params)=>{
    const defaultParams = {
        magnificationFactor: 2.0,
        isHidden: false
    };
    const { magnificationFactor: magnificationFactor, isHidden: isHidden } = Object.assign({}, defaultParams, params);
    const baseImageRef = (0, $gMmFq$useRef)(null);
    const [scrollY, setScrollY] = (0, $gMmFq$useState)(window.scrollY);
    const [baseImageZoomIndicatorRegion, setBaseImageZoomIndicatorRegion] = (0, $gMmFq$useState)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    const [baseImageCursorCoordinate, setBaseImageCursorCoordinate] = (0, $gMmFq$useState)({
        x: 0,
        y: 0
    });
    const [zoomedImageViewportRegion, setZoomedImageViewportRegion] = (0, $gMmFq$useState)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    // x, y indicates offset from the top-left corner, where width and height are the size of the zoomed image
    const [zoomedImageVisibleRegion, setZoomedImageVisibleRegion] = (0, $gMmFq$useState)({
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
    (0, $gMmFq$useEffect)(()=>{
        const handleScroll = ()=>{
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    (0, $gMmFq$useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateBaseImageZoomIndicatorRegion($fab42eb3dee39b5b$var$getBaseImageZoomIndicatorSize({
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
    (0, $gMmFq$useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateBaseImageZoomIndicatorRegion($fab42eb3dee39b5b$var$getBaseImageZoomIndicatorPosition({
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
    (0, $gMmFq$useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateZoomedImageVisibleRegion($fab42eb3dee39b5b$var$getZoomedImageSize({
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
    (0, $gMmFq$useEffect)(()=>{
        const baseImageBox = baseImageRef.current?.getBoundingClientRect();
        updateZoomedImageVisibleRegion($fab42eb3dee39b5b$var$getZoomedImageVisibleRegionOffset({
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
 */ const $090815f5086f7f29$var$ImageMagnifier = ({ // Self props
imageElement: ImageElement, magnifiedViewRegion: magnifiedViewRegion, isHidden: isHidden, classes: classes, src: // img props
src, className: className, onMouseMove: onMouseMove, onMouseLeave: onMouseLeave, ...otherProps })=>{
    const [{ baseImageZoomIndicatorRegion: baseImageZoomIndicatorRegion, zoomedImageVisibleRegion: zoomedImageVisibleRegion, zoomedImageViewportRegion: zoomedImageViewportRegion, scrollY: scrollY }, { baseImageRef: baseImageRef, updateBaseImageCursorCoordinate: updateBaseImageCursorCoordinate, updateZoomedImageViewportRegion: updateZoomedImageViewportRegion }] = (0, $fab42eb3dee39b5b$export$b593efc554e75ca7)({
        isHidden: isHidden
    });
    const magnifiedImageRef = (0, $gMmFq$useRef)(null);
    const [isMagnifierVisible, setIsMagnifierVisible] = (0, $gMmFq$useState)(false);
    // Window resize handler
    const [windowSize, setWindowSize] = (0, $gMmFq$useState)({
        width: window.innerWidth,
        height: window.innerHeight
    });
    (0, $gMmFq$useEffect)(()=>{
        const onResize = ()=>{
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", onResize);
        return ()=>window.removeEventListener("resize", onResize);
    }, []);
    (0, $gMmFq$useEffect)(()=>{
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
    return /*#__PURE__*/ (0, $gMmFq$jsxs)((0, $gMmFq$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $gMmFq$jsx)(ImageElement, {
                src: src,
                className: (0, $gMmFq$classnames)("baseImage", classes?.baseImage, className),
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
            !isHidden && /*#__PURE__*/ (0, $gMmFq$createPortal)(/*#__PURE__*/ (0, $gMmFq$jsxs)((0, $gMmFq$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $gMmFq$jsx)("div", {
                        className: (0, $gMmFq$classnames)("magnifiedViewContainer", classes?.magnifiedViewContainer, !isMagnifierVisible && "invisible"),
                        style: {
                            left: zoomedImageViewportRegion.x,
                            top: zoomedImageViewportRegion.y,
                            width: zoomedImageViewportRegion.width,
                            height: zoomedImageViewportRegion.height
                        },
                        children: /*#__PURE__*/ (0, $gMmFq$jsx)("div", {
                            className: (0, $gMmFq$classnames)("magnifiedViewInnerContainer", classes?.magnifiedViewInnerContainer),
                            children: /*#__PURE__*/ (0, $gMmFq$jsx)(ImageElement, {
                                src: src,
                                className: (0, $gMmFq$classnames)("magnifiedView", classes?.magnifiedView),
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
                    isMagnifierVisible && !!baseImageZoomIndicatorRegion.width && !!baseImageZoomIndicatorRegion.height && /*#__PURE__*/ (0, $gMmFq$jsx)("div", {
                        className: (0, $gMmFq$classnames)("magnifier", classes?.magnifier),
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
$090815f5086f7f29$var$ImageMagnifier.defaultProps = {
    imageElement: "img"
};
var $090815f5086f7f29$export$2e2bcd8739ae039 = $090815f5086f7f29$var$ImageMagnifier;


export {$090815f5086f7f29$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.js.map
