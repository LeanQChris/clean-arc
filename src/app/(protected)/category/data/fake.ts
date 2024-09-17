import { ICategoryDTO } from "./interface";

export const fakeCategories: ICategoryDTO[] = [
    {
        id: "1",
        name: "Hospitality",
        image: null,
        iconImage: null,
        parentId: null,
        hasChild: true
    },
    {
        id: "11baf536-a23a-4d49-bc0c-0203dfbc8fc2",
        name: "Wellness retreats",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: false
    },
    {
        id: "f726a84f-cb60-4e48-96b7-105607ef290b",
        name: "Sightseeing",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: false
    },
    {
        id: "902b3b5f-c12b-4b91-bb70-199fded40158",
        name: "Landmarks",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: false
    },
    {
        id: "49d2ba65-d9cf-46f6-b150-3556889401d8",
        name: "Bars",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: false
    },
    {
        id: "b0a53505-5a6d-42f0-bb10-548b4fcf96dc",
        name: "Restaurants",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: true
    },
    {
        id: "14f13072-cfcf-4646-bb9b-64e82e7d7690",
        name: "Museums",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: false
    },
    {
        id: "c7597a15-b299-4f3b-b457-31eb657b8490",
        name: "Nightlife",
        image: null,
        iconImage: null,
        parentId: "b0a53505-5a6d-42f0-bb10-548b4fcf96dc",
        hasChild: false
    },
    {
        id: "f3915267-1b39-4e94-910e-7cfa0632c3d7",
        name: "Galleries",
        image: null,
        iconImage: null,
        parentId: "b0a53505-5a6d-42f0-bb10-548b4fcf96dc",
        hasChild: false
    },
    {
        id: "e8b812ba-f37d-49f9-b614-09e05aefce04",
        name: "Shopping",
        image: null,
        iconImage: null,
        parentId: "b0a53505-5a6d-42f0-bb10-548b4fcf96dc",
        hasChild: true
    },
    {
        id: "b10e0421-2cb0-4c50-85a4-2d29a87e7ab4",
        name: "Hotels",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: true
    },
    {
        id: "b1836c53-b6c2-4964-a27c-4d0f44f07fc0",
        name: "Parks",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: false
    },
    {
        id: "91bb1f66-e3f2-4c82-a728-494a1a51abf3",
        name: "Tours",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: true
    },
    {
        id: "78e0c858-eaca-49d1-bc3a-72d907063b5b",
        name: "Main Category",
        image: null,
        iconImage: null,
        parentId: "1",
        hasChild: true
    }
];
