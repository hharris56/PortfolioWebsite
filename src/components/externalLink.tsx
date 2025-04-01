export default function ExternalLink(props: {text: string, href: string}){
    return (
        <a href={props.href} target="_blank" className="external-link">
            <img src="/icons/link.png" className="external-link-icon" />
            {props.text}
        </a>
    )
}