// Donald James Trump | DJT | Donald J Trump | D J Trump
export type ShortenedNameFormat = 'AllLong' | 'AllShort' | 'FirstLong MiddleShort LastLong' | 'FirstShort MiddleShort LastLong';

export interface Options {
    length?: 'short' | 'medium' | 'long';
    categories: ['ALL' | 'Fun' | 'Inspirational' | 'Motivational' | 'Funny' | 'Exciting' | 'Rude']; // change to string literal later
    includesNSFW: boolean;
    forProffessionalUse: boolean; // as in no joking around ones (true would be for proffessional use)
    includeAuthorName: boolean;
    authorNameFormat: ShortenedNameFormat
    includeSpecialCharacters: boolean; // emojis, foreign letters/characters
}

export interface Quote {
    nickname: string;
    quote: string;
    includesSpecialCharacters: boolean; // emojis, foreign letters/characters
    length: 'short' | 'medium' | 'long'; // 0-10 = short, 10-20 = medium 20+ = large
    categories: string[];
    includesNSFW: boolean;
    forProffessionalUse: boolean; // as in no joking around ones (true would be for proffessional use)
    authorFirstName: string;
    authorMiddleName: string | null;
    authorLastName: string;
}

