export interface Post {
    _id: string;
    title:string;
    description:string;
    mainImage: {
        asset: {
            url:string;
        };
    };
    slug: {
        current: string;
    };
    categories: [{
        _ref:string;
}]
    body: [object];
}
export interface Category {
    _id: string;
    title:string;
    description:string;
    image: {
        asset: {
            url:string;
        };
    };
    slug: {
        current: string;
    };
    categories: [{
        _ref:string;
}]
    body: [object];
}