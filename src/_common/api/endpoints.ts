export const baseURL = "http://localhost:4003/api";

export const endPoints = {
    auth: {
        signin: "/authentication/adminlogin",
    },
    category: {
        getbusinesscategories: "/category/getbusinesscategories",
        getChildCategoriesByParent: "/category/getchildcategorybyparent",
        create: "/category/createcategory",
        update: "/category/updatecategory",
        delete: "/category/deletecategory"
    },
}