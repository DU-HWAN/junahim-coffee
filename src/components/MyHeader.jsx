const myHeader = ({image}) => {
	return (
		<header className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
			<img className="bg-auto bg-no-repeat bg-center"  src={image}/>
		</header>
	);
}

export default myHeader;