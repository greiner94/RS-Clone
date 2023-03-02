export function getLSParams(paramName: string): string | number | string[] {
    const data = <string>localStorage.getItem(paramName);
    return JSON.parse(data);
}
