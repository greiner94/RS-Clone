export function getLSParams(paramName: string): string | number | object {
    const data = <string>localStorage.getItem(paramName);
    return JSON.parse(data);
}
