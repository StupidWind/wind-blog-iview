export const isEmpty = obj => {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}

export const notEmpty = obj => {
    return !isEmpty(obj);
}