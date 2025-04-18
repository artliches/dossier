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
            your vow, you <strong>Stagger</strong>. Then decide whether to
            keep the vow or abandon it.`
        ]
    },
}

export const INFAMOUS_MOVES = [
{
    title: 'Wicked Past',
    descrip: `When you hear about a villain for the first time, you may decide that
    you know them from your past. If so, give them a String on you to ask a question
    from the <strong>Figure Out a Person</strong> list and take +1 forward against them.`,
    starting: true,
    canTakeFromAdvance: true,
},
{
    title: 'Make It Right',
    descrip: `When you allow yourself to be vulnerable to someone you hurt
    during your villainous past, they choose 1:
    <ul>
        <li><u>Decline to engage</u>; they gain a String on you</li>
        <li><u>Lash out</u>; you <strong>Stagger</strong></li>
        <li><u>Guide you</u>; they mark XP and give you a task to help make amends</li>
        <li><u>Show vulnerability</u>; you take +1 forward to interact with them</li>
        <li><u>Forgive you</u>; you each clear a Condition and this move no longer triggers with this person</li>
    </ul>
    `,
    starting: true,
    canTakeFromAdvance: true,
},
{
    title: `Always Suspect`,
    descrip: `When you pretend to be a villain to win a villain’s trust, they trust
    you enough to offer you an opportunity and you gain a String on them. You must
    choose one of the following options:
    <ul>
        <li>Someone watching comes to the worst possible conclusion</li>
        <li>The villain requires an act of villainy to prove your intentions first</li>
        <li>The villain is only pretending to trust you and the opportunity is a trap</li>
    </ul>
    `,
    starting: false,
    canTakeFromAdvance: true,
},
{
    title: `Talons of the Past`,
    descrip: `When you gain a String on someone associated with your
    villainous past, or vice versa, mark XP. The first time this happens for a given person,
    you each can define a secret or vulnerability you know about the other.`,
    starting: false,
    canTakeFromAdvance: true,
},
{
    title: `They Can Change, Too`,
    descrip: `When you give up an advantage on someone dangerous
    because you believe they can mend their wicked ways, you can ask a question as
    if you’d Figured Them Out.`,
    starting: false,
    canTakeFromAdvance: true,
},
{
    title: `Used to Disappointment`,
    descrip: `When you rely upon or trust someone else with
    something important, say how you expect them to let you down.
    <ul>
        <li>If they pleasantly surprise you, they gain a String on you</li>
        <li>If they do as you expect, choose 1: they lose a String on you, or you gain a String on them</li>
        <li>If they are somehow even worse than you expected, you have a choice: berate them and inflict a Condition, or swallow your loneliness and take a Condition yourself</li>
    </ul>
    `,
    starting: false,
    canTakeFromAdvance: true,
},
{
    title: `What Makes a Home`,
    descrip: `If every other PC in a scene has a String on you, your
    Conditions cause you only a –1 penalty instead of a –2 to the associated basic moves.`,
    starting: false,
    canTakeFromAdvance: true,
},
{
    title: `Who’s the Monster?`,
    descrip: `When you expose the hypocrisy of someone who is
    supposedly virtuous, roll +Daring:
    10+:Gain a String on them and choose 1
    7–9:Choose 1
    <ul>
        <li>The wrongness of their act is exposed to all; they mark XP if they change their mind. If they don’t, they must attack you or take a Condition.</li>
        <li>Your words sting; they take a Condition.</li>
        <li>You impress an onlooker; gain a String on them.</li>
    </ul>
    `,
    starting: false,
    canTakeFromAdvance: true,
}
];