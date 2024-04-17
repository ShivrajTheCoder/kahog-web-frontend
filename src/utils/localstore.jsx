import secureLocalStorage from 'react-secure-storage';

export function setDataWithExpiry(key, data, expiryInHours) {
    const now = new Date();
    // Convert hours to milliseconds
    const expiryInMilliseconds = expiryInHours * 60 * 60 * 1000;
    const item = {
        value: data,
        expiry: now.getTime() + expiryInMilliseconds,
    };
    secureLocalStorage.setItem(key, JSON.stringify(item));
};

export function getDataWithExpiry(key) {
    const itemStr = secureLocalStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        // Remove the expired item from localStorage
        secureLocalStorage.removeItem(key);
        return null;
    }
    return item;
};

