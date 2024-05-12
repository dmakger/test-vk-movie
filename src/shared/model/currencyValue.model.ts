export interface ICurrencyValue {
    value?: string | null,
    currency?: string | null,
}


export interface IFees {
    world: ICurrencyValue,
    russia: ICurrencyValue,
    usa: ICurrencyValue,
}

