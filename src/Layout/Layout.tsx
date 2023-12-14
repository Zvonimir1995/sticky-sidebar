import React from 'react';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="flex h-[5rem] items-center border-b border-black bg-[#b7b7b7cc] text-center text-2xl font-bold">
				<div className="app-width-container">Sticky Sidebar Example</div>
			</header>
			<section className="app-width-container flex-1 py-[3rem] md:py-[6rem]">{children}</section>
			<footer className="h-[3rem] border-t border-black bg-[#b7b7b7]">
				<div className="app-width-container flex h-full flex-row-reverse items-center">
					<a
						className="text-unset no-underline hover:underline hover:opacity-60"
						target="_blank"
						rel="noreferrer"
						href="mailto:zvonimir.milicevic112@gmail.com"
					>
						zvonimir.milicevic112@gmail.com
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
