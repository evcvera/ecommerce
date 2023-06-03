import {IMeliItem, Struct} from "./iMeliItem";


export interface IMeliSearch {
    site_id?: string;
    country_default_time_zone?: string;
    query?: string;
    paging?: Paging;
    results?: (ResultsEntity)[] | null;
    sort?: CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort;
    available_sorts?: (CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort)[] | null;
    filters?: (FiltersEntity)[] | null;
    available_filters?: (AvailableFiltersEntity)[] | null;
    classified?: boolean;
    itemIds?: string[];
}

export interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

export interface ResultsEntity {
    description?: string;
    category?: string;
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price?: null;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments?: Installment;
    quantity?: any;
    address: Address;
    shipping?: Shipping;
    variations: Variation[];
    seller_address: SellerAddress;
    seller_contact: SellerContact;
    location: Location;
    attributes?: (AttributesEntity)[] | null;
    original_price?: number;
    category_id: string;
    official_store_id?: null;
    domain_id: string;
    catalog_product_id?: null;
    tags?: (string)[] | null;
    order_backend: number;
    use_thumbnail_id: boolean;
    offer_score?: null;
    offer_share?: null;
    iMeliItem?: IMeliItem;
    pictures?: string[];
    rating_average?: number;
    comments_count?: number;
    isFavourite?: boolean;
    timeRequired?: string;
}

export interface Variation {
    id: number;
    price: number;
    attribute_combinations: AttributeCombination[];
    available_quantity: number;
    sold_quantity: number;
    sale_terms: any[];
    picture_ids: string[];
    catalog_product_id: null;
}

export interface AttributeCombination {
    id: string;
    name: string;
    value_id: null;
    value_name: string;
    value_struct: null;
    values: Value[];
}

export interface Value {
    id: null | string;
    name: string;
    struct: Struct | null;
}


export interface Seller {
    id: number;
    permalink: string;
    registration_date: string;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags?: (string)[] | null;
    seller_reputation: SellerReputation;
    home_image_url?: string | null;
    eshop?: Eshop;
}

export interface Eshop {
    nick_name?: string;
    eshop_rubro?: EshopRubro;
    eshop_id?: number;
    eshop_locations?: (EshopLocationsEntity)[] | null;
    site_id?: string;
    eshop_logo_url?: string;
    eshop_status_id?: number;
    seller?: number;
    eshop_experience?: number;
}

export interface EshopRubro {
    id?: string;
    name?: string;
    category_id?: string;
}

export interface EshopLocationsEntity {
    state?: StateOrCountryOrCity;
    neighborhood?: Neighborhood;
    country?: StateOrCountryOrCity;
    city?: StateOrCountryOrCity;
}

export interface StateOrCountryOrCity {
    id?: string;
}

export interface Neighborhood {
    id?: null;
}


export interface SellerReputation {
    transactions: Transactions;
    power_seller_status?: null;
    metrics: Metrics;
    level_id?: null;
}

export interface Transactions {
    total: number;
    canceled: number;
    period: string;
    ratings: Ratings;
    completed: number;
}

export interface Ratings {
    negative: number;
    positive: number;
    neutral: number;
}

export interface Metrics {
    claims: ClaimsOrDelayedHandlingTimeOrCancellations;
    delayed_handling_time: ClaimsOrDelayedHandlingTimeOrCancellations;
    sales: Sales;
    cancellations: ClaimsOrDelayedHandlingTimeOrCancellations;
}

export interface ClaimsOrDelayedHandlingTimeOrCancellations {
    rate: number;
    value: number;
    period: string;
}

export interface Sales {
    period: string;
    completed: number;
}

export interface Prices {
    id: string;
    prices?: (PricesEntity)[] | null;
    presentation: Presentation;
    payment_method_prices?: (null)[] | null;
    reference_prices?: ReferencePrices[];
    purchase_discounts?: (null)[] | null;
}

export interface ReferencePrices {
    id: string;
    type: string;
    conditions: Conditions;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags: any[];
    last_updated: Date;
}

export interface PricesEntity {
    id: string;
    type: string;
    amount: number;
    regular_amount?: null;
    currency_id: string;
    last_updated: string;
    conditions: Conditions;
    exchange_rate_context: string;
    metadata: Metadata;
}

export interface Conditions {
    context_restrictions?: string[];
    start_time?: Date | null;
    end_time?: Date | null;
    eligible?: boolean;
}

export interface Metadata {
    promotion_id?: string;
    promotion_type?: string;
    campaign_id?: string;
    discount_meli_amount?: number;
    campaign_discount_percentage?: number;
    campaign_end_date?: Date;
    order_item_price?: number;
}

export interface Presentation {
    display_currency: string;
}

export interface Address {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
    area_code: string;
    phone1: string;
}

export interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags?: (null)[] | null;
    logistic_type: string;
    store_pick_up: boolean;
}

export interface SellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort;
    state: CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort;
    city: City;
    latitude: string;
    longitude: string;
}

export interface CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort {
    id: string;
    name: string;
}

export interface City {
    id?: string | null;
    name: string;
}

export interface SellerContact {
    contact: string;
    other_info: string;
    area_code: string;
    phone: string;
    area_code2: string;
    phone2: string;
    email: string;
    webpage: string;
}

export interface Location {
    address_line: string;
    zip_code: string;
    subneighborhood?: null;
    neighborhood: CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort;
    city: CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort;
    state: CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort;
    country: CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort;
    latitude: number;
    longitude: number;
}

export interface AttributesEntity {
    id: string;
    name: string;
    value_id?: string | null;
    value_struct?: StructOrValueStruct | null;
    value_name: string;
    values?: (ValuesEntity)[] | null;
    attribute_group_id: string;
    attribute_group_name: string;
    source: number;
}

export interface StructOrValueStruct {
    number: number;
    unit: string;
}

export interface ValuesEntity {
    id?: string | null;
    name: string;
    struct?: StructOrValueStruct1 | null;
    source: number;
}

export interface StructOrValueStruct1 {
    number: number;
    unit: string;
}

export interface FiltersEntity {
    id: string;
    name: string;
    type: string;
    values?: (ValuesEntity1)[] | null;
}

export interface ValuesEntity1 {
    id: string;
    name: string;
    path_from_root?: (CountryOrStateOrCityOrNeighborhoodOrAvailableSortsEntityOrPathFromRootEntityOrValuesEntityOrSort)[] | null;
}

export interface AvailableFiltersEntity {
    id?: string;
    name?: string;
    type?: string;
    values?: (ValuesEntity2)[] | null;
}

export interface ValuesEntity2 {
    id?: string;
    name?: string;
    display_currency?: string;
    results?: number;
}

export interface Installment {
    amount?: number;
    currency_id?: string;
    quantity?: number;
    rate?: number;
}

