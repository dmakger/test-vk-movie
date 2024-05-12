export type TParams = Record<string, string | number>

export interface IQueryParams extends TParams {
    page: number | string,
    limit: number | string,
}