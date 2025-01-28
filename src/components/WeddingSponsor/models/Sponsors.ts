export interface WeddingSponsorProps {
    addorment?:string;
    mainTypo:string;
    bodyTypo:string;
    sponsors:PairSponsors[];
    height:string;
    color:string;
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
    sponsorOne?:Sponsor;
    sponsorTwo?:Sponsor;
}

