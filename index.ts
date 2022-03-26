import { Options, Quote } from './typings';
import { quoteObjectArray } from './quotes';
import getRandomNumber from './functions/getRandomNumber';
import getShortenedName from './functions/getShortenedName';

const getQuote = (
    options: Options = {
        // default values
        length: 'medium',
        categories: ['ALL'],
        includesNSFW: false,
        forProffessionalUse: false,
        includeAuthorName: true,
        authorNameFormat: 'FirstLong MiddleShort LastLong',
        includeSpecialCharacters: true,
    }
): string => {
    let quotesThatMeetCriteria: Quote[] = quoteObjectArray.filter((quote) => {
        return (
            quote.length === options.length &&
            quote.categories.some((el) => quote.categories.includes(el)) &&
            quote.includesNSFW === options.includesNSFW &&
            quote.forProffessionalUse === options.forProffessionalUse &&
            quote.includesSpecialCharacters === options.includeSpecialCharacters
        );
    });

    const quote = quotesThatMeetCriteria[getRandomNumber(0, quotesThatMeetCriteria.length - 1)];

    // quote formatting

    let quoteFormatted: string;
    const authorName = getShortenedName(
        quote.authorFirstName,
        quote.authorMiddleName,
        quote.authorLastName,
        options.authorNameFormat
    )
    if (options.includeAuthorName === true) {
        quoteFormatted = `${quote.quote} - ${authorName}`;
    } else {
        quoteFormatted = quote.quote
    }

    return quoteFormatted;
};

module.exports = getQuote;
