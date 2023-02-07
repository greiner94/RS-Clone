export function addLSParams(paramsName: string, value: string | number | object): void {
    const data = JSON.stringify(value);
    localStorage.setItem(paramsName, data);
}
