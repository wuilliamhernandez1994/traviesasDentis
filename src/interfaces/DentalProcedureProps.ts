export interface DentalProcedure {
    id: string;
    title: string;
    image: string;
    description: string;
    readMoreUrl?: string;
}

export interface DentalProcedureProps {
    title: string;
    description: string;
    procedures: DentalProcedure[];
}
