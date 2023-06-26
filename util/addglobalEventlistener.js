export default function addglobalEventlistener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })


}
