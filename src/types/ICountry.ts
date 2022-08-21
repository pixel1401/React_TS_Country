
    export interface Datasource {
        sourcename: string;
        attribution: string;
        license: string;
        url: string;
    }

    export interface Rank {
        importance: number;
        confidence: number;
        confidence_city_level: number;
        match_type: string;
    }

    export interface Properties {
        datasource: Datasource;
        name: string;
        city: string;
        state: string;
        country: string;
        country_code: string;
        lon: number;
        lat: number;
        formatted: string;
        address_line1: string;
        address_line2: string;
        category: string;
        result_type: string;
        rank: Rank;
        place_id: string;
        county: string;
        town: string;
        state_code: string;
        district: string;
        village: string;
    }

    export interface Geometry {
        type: string;
        coordinates: number[];
    }

    export interface IFeature {
        type?: string;
        properties?: Properties;
        geometry?: Geometry;
        bbox?: number[];
    }

    export interface Parsed {
        city: string;
        expected_type: string;
    }

    export interface Query {
        text: string;
        parsed: Parsed;
    }

    export interface ICountry {
        type: string;
        features: IFeature[];
        query: Query;
    }


