import daisyMaeImage from '../../graphics/daisy_mae.jpg';

export interface DiscordBot {
    image:string;
    title:string;
    tags:string[];
    description:string;
    link:string;
}
export function GetAll():DiscordBot[]{
    return [
        {
            image: daisyMaeImage,
            title: 'Daisy Mae',
            tags: ['Game', 'Stonks'],
            description: 'Find the best prices',
            link: 'link'
        },
        {
            image: 'image',
            title: 'DnD',
            tags: ['Game', 'Person'],
            description: 'Keep up with your characters',
            link: 'link'
        }
    ]
}