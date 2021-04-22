import daisyMaeImage from '../../graphics/daisy_mae.jpg';
import fManImage from '../../graphics/f_man.jpg';

export interface DiscordBot {
    image:string;
    title:string;
    tags:string[];
    description:string;
    link:string;
    primaryColor:string;
    secondaryColor:string;
}
export function GetAll():DiscordBot[]{
    return [
        {
            image: daisyMaeImage,
            title: 'Daisy Mae',
            tags: ['Game', 'Stonks'],
            description: 'Find the best prices for Stonks. Open your ports to allow friends to maximize profit. Consider timezones and even best purchase prices.',
            link: 'www.google.com',
            primaryColor: '#76ddeb',
            secondaryColor: '#2b2e38'
        },
        {
            image: fManImage,
            title: 'DnD: Pending',
            tags: ['Game', 'Person'],
            description: 'Keep up with your characters. Battle with your friends. Keep up with your chaotic inventory and stories.',
            link: 'www.bing.com',
            primaryColor: 'red',
            secondaryColor: 'black'
        }
    ]
}