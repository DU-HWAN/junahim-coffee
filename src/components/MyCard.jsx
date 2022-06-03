import React from "react";

const MyCard = ({title, description, image, link, actionText}) => {
	const redirectToLink = () => {
		window.location.href = link;
	}

	return (
		<div
			className="py-8 px-8 m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
			<img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={image} alt={title}/>
			<div className="text-center space-y-2 sm:text-left">
				<div className="space-y-0.5">
					<p className="text-lg text-black font-semibold">
						{title}
					</p>
					<p className="text-slate-500 font-medium">
						{description}
					</p>
				</div>
				<button
					className="px-4 py-1 text-sm text-blue-600 text-2xl
											font-semibold rounded-full border border-blue-600
											hover:text-white hover:bg-blue-600 hover:border-transparent
											focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
					onClick={redirectToLink}
					>
					{actionText}
				</button>
			</div>
		</div>
	);
}

export default React.memo(MyCard);