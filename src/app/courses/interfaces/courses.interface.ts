export interface Course {
    emit(value: Course);
    id: number;
    title: string;
    description: string;
    isTopRated: boolean
    date: string
    authors: Author[];
    duration: number;
}

export interface Author {
    id: number;
    name: string;
    lastName: string;
}
