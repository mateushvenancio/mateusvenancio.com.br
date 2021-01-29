export class ProfileModel {

    constructor(profilePicture: string, quote: string) {
        this.profilePicture = profilePicture
        this.quote = quote
    }

    profilePicture: string;
    quote: string;
}