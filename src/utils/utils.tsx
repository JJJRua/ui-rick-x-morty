export const getImageByUrl = (url:string)=>{
    const publicAssets= `${process.env.PUBLIC_URL}/assets`;
    return `${publicAssets}${url}`;
}