import Link from "next/link";

const NavigationBar = (links: NavigationBarLinks) => {
	return (
		<div>
			<nav className="navigation-bar">
				<ul className="navigation-links">
					{links.links.map((link) => (
						<li
							key={link.name}
							className={`navigation-link ${link.isActive ? "navigation-link-active" : ""}`}
						>
							<Link href={`/${link.name.toLowerCase()}`}>{link.name}</Link>
							{/* {link.name} --- IGNORE --- */}
						</li>
					))}
				</ul>
			</nav>
			<div className="navigation-bar-placeholder"></div>
		</div>
	);
};

export default NavigationBar;
