//This is an example of bad code we want to replace
export default {
    isIE: false,
    isChrome: false,
    isEdge: false,
    getUserAgent() {
        return navigator.userAgent;
    }
}