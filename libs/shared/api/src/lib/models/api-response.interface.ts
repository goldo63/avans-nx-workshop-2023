export interface ApiMetaInfo{
    version: string;
    type: 'object' | 'array' | 'list' | 'none';
    count: number;
}

export interface ApiResponse<T>{
    info: ApiMetaInfo
    results?: T[] | T
}