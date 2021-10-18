import Image from "next/image";
import logo from "../public/logo.svg";
import navStyles from "../styles/Nav.module.scss";

const Navbar = ({ click }) => {
    return (
        <header className={navStyles.header}>
            <div className={navStyles.nav}>
                <div className={navStyles.nav_logo}>
                    <div className={navStyles.logo}>
                        <div className={navStyles.icon}>
                            <Image 
                                src={logo}
                                alt="unsplash logo"
                                width={25.15}
                                height={14.3}
                            />
                        </div>
                        <div className={navStyles.logo_text}>
                            <h2>My unsplash</h2>
                            <h4>devchallenges.io</h4>
                        </div>
                    </div>
                    <form className={navStyles.search} onSubmit={(e) => e.preventDefault()}>
                        <label><i className="fa fa-search" aria-hidden="true"></i></label>
                        <input type="text" placeholder="Search by name" />
                    </form>
                </div>
                <div className={navStyles.add_photo}>
                    <button onClick={click}>Add a photo</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
