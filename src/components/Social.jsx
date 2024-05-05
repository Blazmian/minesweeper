import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Social = () => {

    const iconStyle = "cursor-pointer hover:scale-110 hover:text-gray-700 transition"

    return (
        <div className="space-x-4 text-lg mb-1">
            <a href="https://github.com/Blazmian" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={iconStyle} />
            </a>
            <a href="https://twitter.com/DemiRascon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/demi-rascon/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={iconStyle} />
            </a>
        </div>
    )
}

export default Social