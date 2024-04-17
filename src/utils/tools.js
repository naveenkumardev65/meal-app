function truncateString(str) {
    return str && str?.length > 20 ? str?.slice(0, 20) + '...' : str;
}

function generateAlphanumeric(length) {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
      result += alphanumericChars.charAt(randomIndex);
    }
    return result;
}


export {
    truncateString,
    generateAlphanumeric
}
