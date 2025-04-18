export const PLAYBOOK_LIST = [
    `beast`,
    `chosen`,
    `devoted`,
    `infamous`,
    // `nature witch`,
    // `scoundrel`,
    // `seeker`,
    // `spooky witch`,
    // `trickster`,
];

export const BEAST = {
    descrip: `
        <span class="playbook-descrip">
            <div>
                The Beast follows their truth and their
                passions, which puts them in conflict
                with civilization and civilized norms.
                Unless they give up what makes them
                special and powerful, they cannot make
                themself acceptable to that civilized
                society.
            </div>
            <div>
                Their central conflict is living their
                truth versus fitting in with a dominant
                social order.
            </div>
        </span>
    `,
    startingStats: [
        [1, 0, 1, -1, 0],
        [1, 1, -1, 0, 0]
    ],
    truths: [
        {
            name: 'SMITTEN KITTEN',
            questions: [
                'What have you done that you are sure they view as inappropriate?'
            ]
        },
        {
            name: 'THE BLOODY TRUTH',
            questions: [
                'What awakens the beast inside you?',
                'How could I get you to kiss me?'
            ]
        }
    ],
};

export const CHOSEN = {
    descrip: `
        <span class="playbook-descrip">
            <div>
                The Chosen playbook revolves around
                special status, relationships across
                social strata, and the crushing expectations of fate, family, or the adoring public.
            </div>
            <div>
                Their central conflict is inner truth
                versus crushing social expectations.
            </div>
        </span>
    `,
    startingStats: [
        [-1, 1, 1, 0, 0],
        [0, 1, 0, 1, -1]
    ],
    truths: [
        {
            name: 'LOVE IS NOT MY DESTINY',
            questions: [
                'How do our respective stations make it impossible to be together?'
            ]
        },
        {
            name: 'INESCAPABLE CONCLUSIONS',
            questions: [
                `What do you hope for your future?`,
                `What do you fear is your destiny?`,
            ]
        }
    ],
};

export const DEVOTED = {
    descrip: `
        <span class="playbook-descrip">
            <div>
                The Devoted is a selfless protector,
                committed to a person or a cause.
            </div>
            <div>
                Their central conflict lies in pitting this
                devotion against self-care.
            </div>
        </span>
    `,
    startingStats: [
        [1, 0, 0, -1, 1],
        [1, 1, -1, 0, 0]
    ],
    truths: [
        {
            name: 'MY HEART IS NOT MINE TO GIVE',
            questions: [
                'How does pursuing them conflict with your Devotion?'
            ]
        },
        {
            name: 'WHAT WILL YOU FIGHT FOR?',
            questions: [
                `What are you willing to risk death for?`,
                `What kind of deeds earn your loyalty?`,
            ]
        }
    ],
};

export const INFAMOUS = {
    descrip: `
        <span class="playbook-descrip">
            <div>
                The Infamous once participated in
                wicked deeds, but they've become
                fiercely righteous in trying to atone.
            </div>
            <div>
                Their central conflict arises from the
                lasting consequences of their past
                actions and beliefs versus their new
                convictions. Will they repair the harm
                they caused, will they seek forgiveness,
                or will they despair? Will they find a
                new place to belong?
            </div>
        </span>
    `,
    startingStats: [
        [1, -1, 0, 0, 1],
        [1, 0, 0, 1, -1]
    ],
    truths: [
        {
            name: 'UNDESERVING',
            questions: [
                'Why do you think they would be wrong to forgive you?'
            ]
        },
        {
            name: 'YOUR WICKED HEART',
            questions: [
                `What are you most ashamed of?`,
                `How could I get you to betray your ideals?`,
            ]
        }
    ],
};

export const INFAMOUS_UNIQUE = {
    title: 'WHAT CANNOT BE UNDONE',
    firstSection: [
        {
            header:`
                <div>You’ve hurt people, and they have no obligation to forgive you or engage with you.</div>
                <div><strong>Before defining Relationships in character creation, propose a <u>wicked past</u> that you think could be forgiven.</div>
            `,
            label: `WICKED PAST`
        },
        {
            header: `Then ask each PC the following question: <strong>What circumstances or subsequent deeds could make it possible to forgive this past?</strong>`,
            label: `If anyone hesitates or can’t answer the question, revisit your past and tone it down. You can tone down the gravity of your backstory by reducing the severity of your deeds or the agency you had in enacting them.`
        }
    ],
    secondSection: {
        title: 'Afterwards, answer these questions',
        questions: [
            `What personal growth are you proud of?`,
            `What about your past causes you the most grief?`,
            `You swore to never again perform certain actions
            that could lead to harm. What are they? Examples
            include: Lying, stealing, accepting someone’s love,
            drawing blood, or breaking a promise. If you break
            your vow, you Stagger. Then decide whether to
            keep the vow or abandon it.`
        ]
    },
}