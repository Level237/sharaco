export const menus=[
    {
        id:1,
        menu:"Dashboard",
        icon:'bi-house nav-icon'
    },{
        id:2,
        menu:"Devis",
        icon:"bi-stickies nav-icon",
        items:[
            {
                itemsId:"2-1",
                title:"nouveau devis"
            },
            {
                itemsId:"2-2",
                title:"mes Devis"
            }
        ]
    },{

        id:3,
        menu:"Utilisateurs",
        icon:`bi-people nav-icon`,
        items:[
            {
                itemsId:"3-1",
                title:"Nouveau utilisateur"
            },{
                itemsId:"3-2",
                title:"Utilisateurs"
            }
        ]
    },{
        id:4,
        menu:"Mon Profile",
        icon:`bi-person nav-icon`
    }
]