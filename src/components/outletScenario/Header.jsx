import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-blue-200 h-1/6 flex flex-col justify-center">
			<ul className="flex justify-around items-center">
				<Link
					to={""}
					className="text-sm hover:underline text-gray-600 hover:text-black hover:cursor-pointer"
				>
					Home
				</Link>
				<Link
					to={"recipes"}
					className="text-sm hover:underline text-gray-600 hover:text-black hover:cursor-pointer"
				>
					Recipes
				</Link>
				<Link
					to={"comments"}
					className="text-sm hover:underline text-gray-600 hover:text-black hover:cursor-pointer"
				>
					Comments
				</Link>
				<Link
					to={"*"}
					className="text-sm hover:underline text-gray-600 hover:text-black hover:cursor-pointer"
				>
					About Us
				</Link>
				<Link
					to={"/"}
					className="text-sm hover:underline text-gray-600 hover:text-black hover:cursor-pointer"
				>
					Contact Us
				</Link>
			</ul>
		</header>
	);
};

export default Header;
