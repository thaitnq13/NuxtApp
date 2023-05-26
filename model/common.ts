export interface UniversityModel {
    country: string;
    alpha_two_code: string;
    name: string;
    domains: Array<string>;
    web_pages: Array<string>;
}

export interface ResponseModel {
    status: string;
    status_code: number;
    version: string;
    access: string;
    data: any;
}
