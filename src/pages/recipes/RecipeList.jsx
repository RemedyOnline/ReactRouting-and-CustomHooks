import { Link, useLocation, useNavigate } from "react-router-dom";

const RecipeList = () => {
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location);

	return (
		<section className="text-center flex flex-col items-center">
			<h2 className="mb-2 text-3xl font-bold">Recipe List</h2>
			<div className="flex my-5 text-sm items-center">
				<div>
					<p className="font-mono text-xs my-2 italic underline">
						Using the useNavigate Hook from ReactRouterDome
					</p>
					<div className="flex gap-2">
						<button
							onClick={() => navigate("/recipes")}
							className="px-2 py-1 rounded-lg bg-green-300"
						>
							View Recipes
						</button>
						<button
							onClick={() => navigate("/comments")}
							className="px-2 py-1 rounded-lg bg-blue-300"
						>
							View Comments
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-between h-fit self-start">
					<p className="font-mono text-xs my-2 italic underline">
						Using the Link tag from ReactRouterDome
					</p>
					<div className="flex">
						<Link to={"/recipes"} className="font-semibold hover:underline">
							Alt: View Recipies
						</Link>
						<Link to={"/comments"} className="font-semibold hover:underline">
							Alt: View Comments
						</Link>
					</div>
				</div>
			</div>
			<p className="mb-4">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore
				ipsum eligendi, architecto earum porro molestiae saepe eaque, assumenda
				iusto enim, natus provident. Error aperiam quas iure ab quo consectetur.
			</p>
			<Link to={":id"} className="p-1 rounded-md bg-neutral-400">
				View Details
			</Link>
		</section>
	);
};

export default RecipeList;
