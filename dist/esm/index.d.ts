import React from "react";
interface Coordinate {
    x: number;
    y: number;
}
interface Size {
    width: number;
    height: number;
}
type Region = Coordinate & Size;
interface SetMagnifiedViewRegionParams {
    /**
     * Auto updating window size
     */
    windowSize: Size;
    /**
     * Reference to the base image DOM element's bounding client rect
     */
    baseImageBox: DOMRect;
    scrollY: number;
}
interface ImageMagnifierProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    imageElement?: 'img' | any;
    magnifiedViewRegion: (params: SetMagnifiedViewRegionParams) => Region;
    isHidden?: boolean;
    classes?: {
        baseImage?: string;
        magnifiedViewContainer?: string;
        magnifiedViewInnerContainer?: string;
        magnifiedView?: string;
        magnifier?: string;
    };
}
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
 */
declare const ImageMagnifier: {
    ({ imageElement: ImageElement, magnifiedViewRegion, isHidden, classes, src, className, onMouseMove, onMouseLeave, ...otherProps }: ImageMagnifierProps): React.JSX.Element;
    defaultProps: {
        imageElement: string;
    };
};
export default ImageMagnifier;

//# sourceMappingURL=index.d.ts.map
