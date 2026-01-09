export interface WeddingSponsorProps {
    addorment?:string;
    addormentEnd?:string;
    mainTypo:string;
    bodyTypo:string;
    sponsors:PairSponsors[];
    height:string;
    color:string;
    bgColor?:string;
    headerFontSize?:string;
}

export interface XVSponsorProps {
    addorment?:string;
    mainTypo?:string;
    bodyTypo?:string;
    sponsors?:PairSponsors[];
    color:string;
}

export interface Sponsor {
    name?:string;
}

export interface PairSponsors {
    title?:string;
    sponsorOne?:Sponsor;
    sponsorTwo?:Sponsor;
}

