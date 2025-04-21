export interface TSL_Info {
    name: string,
    playbook: string,
    playbook_descrip: string,
    stats: {
        daring: number | null,
        grace: number | null,
        heart: number | null,
        wit: number | null,
        spirit: number | null,
    },
    truths: NameQuestionObj[]
};

export interface NameQuestionObj {
    name: string,
    questions: string[]
}

export interface InfamousUnique {
    title: string,
    firstSection: string,
    firstSectionQuestion: {
        question: string,
        descrip: string,
    },
    secondSection: {
        title: string,
        question: string[]
    },
}

export interface ForgiveObj {
    name: string,
    atonement: string,
    forgiven: boolean,
}

export interface MoveObj {
    title: string,
    descrip: string,
    starting: boolean,
    canTakeFromAdvance: boolean,
}

export interface StringObj {
    name: string,
    numStrings: number
}
