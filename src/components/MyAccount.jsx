import React from "react";


const MyAccount = ({title, description, image, actionText}) => {
	const copyToClipboard = () => {
		const account = '3333231348000';
		const input = document.createElement('input');
		input.value = account;
		document.body.appendChild(input);
		input.select();
		document.execCommand('copy', false, null);
		document.body.removeChild(input);
	}

	return (
		<div
			className="py-8 px-8 m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
			<img className="block mx-auto h-10 sm:mx-0 sm:shrink-0" src={image} alt={title}/>
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
					className="px-4 py-1 text-sm text-yellow-400 text-2xl
											font-semibold rounded-full border border-yellow-400
											hover:text-white hover:bg-yellow-400 hover:border-transparent
											focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
					onClick={copyToClipboard}
				>
					{actionText}
				</button>
			</div>
		</div>
	);
}

export default React.memo(MyAccount);