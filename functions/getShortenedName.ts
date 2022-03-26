import { ShortenedNameFormat } from '../typings'

export default (firstName: string, middleName: string | null, lastName: string, format: ShortenedNameFormat | undefined): string => {

    if (format === undefined || format === 'AllLong') { // return default format

        if (middleName === null ) { // return both names full
            return `${firstName} ${lastName}`
        } else { // return all 3 names full
            return `${firstName} ${middleName} ${lastName}`
        }

    } else if (format === 'AllShort') {
        if (middleName === null) { // return first 2 initials 
            return `${firstName.charAt(0).toUpperCase()} ${lastName.charAt(0).toUpperCase()}`
        } else {
            return `${firstName.charAt(0).toUpperCase()} ${middleName.charAt(0).toUpperCase()} ${lastName.charAt(0).toUpperCase()}`
        }
    } else if (format === 'FirstLong MiddleShort LastLong') {
        if (middleName === null) {
            return `${firstName.charAt(0).toUpperCase()} ${lastName.charAt(0).toUpperCase()}`
        } else {
            return `${firstName} ${middleName.charAt(0).toUpperCase()} ${lastName}`
        }
        
    } else if (format === 'FirstShort MiddleShort LastLong') {
        if (middleName === null) {
            return `${firstName.charAt(0).toUpperCase()} ${lastName}`
        } else {
            return `${firstName.charAt(0).toUpperCase()} ${middleName.charAt(0).toUpperCase()} ${lastName}`
        }
    }

    // if none of these are true (can never happen)
    return `Unknown`


}