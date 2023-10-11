export function getScreenSize(params) {
    // or based on width
    let isMobile = window.matchMedia("(max-width: 767px)").matches;
    window.onresize = function () {
    isMobile = window.matchMedia("(max-width: 767px)").matches;
    };
    return isMobile
}