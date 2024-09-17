export interface ICategoryDTO{
    id:string;
    name:string;
    image:string|null;
    iconImage:string|null;
    parentId:string|null;
    hasChild:boolean;
}