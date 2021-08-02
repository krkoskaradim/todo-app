export interface urlParam {
    key: string
    value: string
}

export const getUrlWithParams = (url: string, params: urlParam[]): string => {
    let urlWithParams: string = url;
    params.forEach((param) => {
        urlWithParams = url.replace(`:${param.key}`, param.value);
    });

    return urlWithParams;
};
