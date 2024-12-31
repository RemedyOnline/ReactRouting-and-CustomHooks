import { Link, useParams } from "react-router-dom";

const RecipeDetails = () => {
	const params = useParams();

	console.log(params);

	const { id } = params;

	return (
		<div className="text-center flex flex-col items-center">
			<h2 className="text-3xl font-bold">Recipe Details Page</h2>
			<p>Details of {id}</p>
			<p className="mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
				reprehenderit! Ducimus doloribus amet ab doloremque tempore atque
				architecto tempora temporibus porro placeat! Inventore ullam veniam
				aspernatur sunt veritatis molestias hic.
			</p>
			<Link to={"/"} className="p-2 rounded-md bg-black text-white">
				Go HOME
			</Link>
		</div>
	);
};

export default RecipeDetails;
