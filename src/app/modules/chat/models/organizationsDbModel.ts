export interface OrganizationGroup{
    DataName?: string;
    DataDescription?: string;
    Datas?: Organization[];
}

export interface Organization {
    DataNo?: string;
    DataName?: string;
    DataDescription?: string;
    Address1?: string;
    Phone1?: string;
    Web1?: string;
    Address2?: string;
    Phone2?: string;
    Web2?: string;
    Address3?: string;
    Phone3?: string;
    Web3?: string;
    Address4?: string;
    Phone4?: string;
    Web4?: string;
    Address5?: string;
    Phone5?: string;
    Web5?: string;
}

export interface Query{
    Location: string;
    Group: string;
    Suspect: string;
    Protection: string;
}