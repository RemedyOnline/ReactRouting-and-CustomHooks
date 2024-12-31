import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="h-full w-full items-center justify-center flex flex-col">
			<h2 className="font-bold text-2xl">404 Error</h2>
			<p className="mb-5 text-red-500 font-semibold">
				The page you are trying to access is not available
			</p>
			<Link to={"/"} className="p-2 rounded-md bg-black text-white">
				Go HOME
			</Link>
		</div>
	);
};

export default NotFoundPage;
