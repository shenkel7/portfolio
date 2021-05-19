export type TWork = {
    path: string;
    thumbnail: string;
    name: string;
    category: string;
};

export const WorksList : TWork[] = [
    {
        path: "/assets/works/the_hanged.png",
        thumbnail: "assets/thumbnails/the_hanged_thumbnail.jpg",
        name: "The Hanged",
        category: "Personal Project - Elucidate",
    },
    {
        path: "/assets/works/the_devoured.png",
        thumbnail: "assets/thumbnails/the_devoured_thumbnail.jpg",
        name: "The Devoured",
        category: "Personal Project - Elucidate",
    },
    {
        path: "/assets/works/the_poisoned.png",
        thumbnail: "assets/thumbnails/the_poisoned_thumbnail.jpg",
        name: "The Poisoned",
        category: "Personal Project - Elucidate",
    },
    {
        path: "/assets/works/cutout_boy.png",
        thumbnail: "assets/thumbnails/cutout_boy_thumbnail.jpg",
        name: "Cutout Boy",
        category: "Personal Project",
    }
];

export const InteractiveList : TWork[] = [];

export const CodeList : TWork[] = [];