import RecipeList from "./pages/recipes/RecipeList";
import CommentList from "./pages/comments/CommentList";
import { Route, Routes } from "react-router-dom";
import RecipeDetails from "./pages/recipes/RecipeDetails";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/outletScenario/Layout";
import Content from "./components/outletScenario/Content";

function App() {
	return (
		<section>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/recipes" element={<RecipeList />} />
				<Route path="/recipes/:id" element={<RecipeDetails />} />
				<Route path="/comments" element={<CommentList />} />
				<Route path="/layout" element={<Layout />}>
					<Route path="recipes" element={<RecipeList />} />
					<Route path="recipes/:id" element={<RecipeDetails />} />
					<Route path="comments" element={<CommentList />} />
					<Route path="" element={<Content />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</section>
	);
}

export default App;
