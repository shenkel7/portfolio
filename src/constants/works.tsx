import { ReactNode } from 'react'

export interface TWork {
    path: string;
    thumbnail: string;
    name: string;
    category: string;
    description: ReactNode;
    link?: string;
};

export const WorksList : TWork[] = [
    {
        path: "/assets/works/the_hanged.png",
        thumbnail: "/assets/thumbnails/the_hanged_thumbnail.jpg",
        name: "One",
        category: "Personal Project - Elucidate",
        description: <p>ELUCIDATE I
        <br />
        <br />
        It goes something like this: a striking afternoon underneath the ancient oak, the astringent taste of blackberry jam on your tongue, the billowing fabric of your cotton dress. You find yourself in a place from your childhood brought into alarming clarity, and it’s the same as you’ve always remembered. The grass cool against your neck, soft blades cutting uselessly at your exposed skin. The sun forcing through the oak’s arching shade, piercing between spades and spades of leaves. The frayed rope of the broken tire swing, dangling loosely in the wind.
        <br />
        <br />
        It’s hard to remember why you’re here. You feel your mind drift. You see the clouds drift.
        <br />
        <br />
        You think, this is nice, isn’t it? You want to stay forever and ever.
        </p>,
    },
    {
        path: "/assets/works/the_devoured.png",
        thumbnail: "/assets/thumbnails/the_devoured_thumbnail.jpg",
        name: "Two",
        category: "Personal Project - Elucidate",
        description: <p>ELUCIDATE II
        <br />
        <br />
        Your father used to tell you that it was a sink or swim world, and you took his words to heart perhaps a little too much.
        <br />
        <br />
        The water in <span className="font-ephemeris select-none">Cataclysm Sound</span> is warm in the summer, slipping between your ankles like heated silk. It laps at your calves, then your thighs, then your chest, pressing against you with the vigor of a living thing. You will it to carry you outwards, where your father is waiting, tethered by seagrass to his favorite mistress.
        <br />
        <br />
        In a moment of lucidity, you surveil the surrounding sea. You frown. This is not <span className="font-ephemeris select-none">Cataclysm Sound</span>. But the sea hooks around the crook of your elbow and pulls, and you acquiesce because water is water everywhere.

        </p>,
    },
    {
        path: "/assets/works/the_poisoned.png",
        thumbnail: "/assets/thumbnails/the_poisoned_thumbnail.jpg",
        name: "Three",
        category: "Personal Project - Elucidate",
        description: "",
    },
    {
        path: "/assets/works/cutout_boy.png",
        thumbnail: "/assets/thumbnails/cutout_boy_thumbnail.jpg",
        name: "Cutout Boy",
        category: "Personal Project",
        description: 
        <p>
            A piece aiming to capture the feeling of loss and depersonalization.
            Will the telephone ring? The boy doesn't know. He's a 2D person in a 2D piece, after all.
        </p>,
    },
];

export interface TInteractiveWork extends TWork {
    page: ReactNode;
}

export const InteractiveList : TInteractiveWork[] = [];

export const CodeList : TWork[] = [
    {
        path: "/assets/codeworks/grassland.jpg",
        thumbnail: "/assets/codeworks/grassland.jpg",
        name: "Byte-Sized Biome Generator",
        category: `C#, Shaderlab, Unity`,
        description: 
        <p>
            Create a mini-biome with inputs of precipitation and temperature!
        </p>,
        link: "https://github.com/shenkel7/Byte-sized-Biome-Generator"
    },
    {
        path: "/assets/codeworks/critter-picker.png",
        thumbnail: "/assets/codeworks/critter-picker.png",
        name: "Critter Picker",
        category: `Javascript, React, Petfinder API, Firebase`,
        description: 
        <p>
            Tinder for finding your future soul-pet.
        </p>,
        link: "https://github.com/shenkel7/Critter-Picker"
    },
    {
        path: "/assets/codeworks/dungeon_addventure.png",
        thumbnail: "/assets/codeworks/dungeon_addventure.png",
        name: "Dungeon ADDVenture",
        category: `Javascript, React Native, Firebase`,
        description: 
        <p>
            An educational math game for kids built using an unconventional game engine.
        </p>,
        link: "https://devpost.com/software/dungeon-addventure"
    }
];