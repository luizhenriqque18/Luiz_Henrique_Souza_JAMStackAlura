import { css } from "styled-components";
import { breakpoints } from "../theme/breakpoints";

export const breakpointsMedia = (objectBreakpoints = {}) => {
    
    const breakpointKeys = Object.keys(breakpoints);

    let result = breakpointKeys.filter(breakpoint => objectBreakpoints[breakpoint])
    .map( breakpoint => css`
        @media only screen and (min-width:${breakpoints[breakpoint]}px) {
            ${objectBreakpoints[breakpoint]}
        }`
    );
    return result;
};