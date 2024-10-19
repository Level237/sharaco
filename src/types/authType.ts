export type authType={
    isAuthenticated:boolean | null,
    user:any,
    token:string | null,
    error:string | String[] | any,
    loading:boolean
}