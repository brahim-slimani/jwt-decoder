function bas64_decode(str) {
    return Buffer.from(str, "base64");
}

payload = (token) => {
    try {
        const splitedToken = token.replace("Bearer ", "").split(".");
        const decodedClaims = JSON.parse(bas64_decode(splitedToken[1]));
        return decodedClaims;
    } catch (error) {
        //throw InvalidTokenException("Invalid token error: "+error.message);
    }

}