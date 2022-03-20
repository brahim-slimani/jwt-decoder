function InvalidTokenException(message) {
    this.message = message;
}

InvalidTokenException.prototype = new Error();
InvalidTokenException.prototype.name = "InvalidTokenException";

/**
 * Decode Base64 to UTF-8 string
 * @param {String} str encoded base64 string
 * @returns Decoded string in UTF-8
 */
const bas64_decode = (str) => {
    return decodeURIComponent(atob(str));
}

/**
 * Resolve payload data from JWT token
 * @param {String} token to be decoded
 * @returns Data claims
 */
const payload = (token) => {
    try {
        const splitedToken = token.replace("Bearer ", "").split(".");
        const decodedClaims = JSON.parse(bas64_decode(splitedToken[1]));
        return decodedClaims;
    } catch (error) {
        throw InvalidTokenException("Invalid token error: " + error.message);
    }
}

/**
 * Resolve header from token
 * @param {String} token to be encoded
 * @returns JWT Header
 */
const header = (token) => {
    try {
        const splitedToken = token.replace("Bearer ", "").split(".");
        const decodedHeader = JSON.parse(bas64_decode(splitedToken[0]));
        return decodedHeader;
    } catch (error) {
        throw InvalidTokenException("Invalid token error: " + error.message);
    }
}

/**
 * Resolve payload data and header from JWT token
 * @param {String} token to be decoded
 * @returns entire jwt data claims
 */
const resolve = (token) => {
    return { header: header(token), payload: payload(token) }
}

module.exports = {
    header, payload, resolve
}