import { Link, useNavigate } from "react-router-dom";

const CommentList = () => {
	const navigate = useNavigate();

	return (
		<section className="text-center flex flex-col items-center">
			<h2 className="text-3xl font-bold">Comment List</h2>
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
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut
				assumenda animi deleniti voluptates hic laudantium dolorem qui quidem,
				aperiam aliquid soluta molestias ipsa iste repellat est recusandae quasi
				illum?
			</p>
		</section>
	);
};

export default CommentList;
