function InvalidTokenException(message) {
    this.message = message;
}

InvalidTokenException.prototype = new Error();
InvalidTokenException.prototype.name = "InvalidTokenException";

function bas64_decode(str) {
    return Buffer.from(str, "base64");
}

payload = (token) => {
    try {
        const splitedToken = token.replace("Bearer ", "").split(".");
        const decodedClaims = JSON.parse(bas64_decode(splitedToken[1]));
        return decodedClaims;
    } catch (error) {
        throw InvalidTokenException("Invalid token error: "+error.message);
    }
}

header = (token) => {
    try {
        const splitedToken = token.replace("Bearer ", "").split(".");
        const decodedHeader = JSON.parse(bas64_decode(splitedToken[0]));
        return decodedHeader;
    } catch (error) {
        throw InvalidTokenException("Invalid token error: "+error.message);
    }
}

resolve = (token) => {
    return {
        header: header(token),
        payload: payload(token)
    }
}

module.exports = {
    header, payload, resolve
}