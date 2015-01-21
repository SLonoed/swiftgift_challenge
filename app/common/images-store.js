/*
Data store. Can be connected with backend
 */

var images = [
        'http://imgs.xkcd.com/comics/automation.png',
        'http://imgs.xkcd.com/comics/in_ur_reality.png',
        'http://imgs.xkcd.com/comics/computer_problems.png',
        'http://imgs.xkcd.com/comics/delta_p.png'
    ],
    handlers = [];


/**
 * Return images links
 * @returns {String[]}
 */
function getImages() {
    return images;
}


/**
 * Add images
 * @param {String} url image link
 */
function addImage(url) {

    // Make async, like server POST
    setTimeout(function() {
        images.unshift(url);
        triggerChange();
    }, 100);
}

/**
 * Add change listener
 * @param {Function} handler
 */
function onChange(handler) {
    handlers.push(handler);
}


/**
 * Call all change listeners
 */
function triggerChange() {
    handlers.forEach((handler) => handler());
}

module.exports = { getImages, addImage, onChange };
