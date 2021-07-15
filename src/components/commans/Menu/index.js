import { MenuWrapper } from "./styles/MenuWrapper";

export default function Menu(props) {
    const itens = [
        {
            name: 'Home',
            url:  '#home'
        },
        {
            name: 'About',
            url:  '#about'
        },
        {
            name: 'Portfolio',
            url:  '#portfolio'
        },
        {
            name: 'Services',
            url:  '#services'
        },
        {
            name: 'Blog',
            url:  '#blog'
        },
        {
            name: 'Contact',
            url:  '#contact'
        }
    ]

    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide as='div'>
                <img src='/static/dev_64.png' />
            </MenuWrapper.LeftSide>
            <MenuWrapper.RightSide as='ul'>
                {
                    itens.map( item => (
                            <li key={item.url}>
                                <a href={item.url}>
                                    {item.name}
                                </a>
                            </li>
                        )
                    )
                }
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}