import { Outlet } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="w-4/5">
				<Header />
				<div className="h-4/6 ">
					<Outlet />
				</div>
				{/* <Content /> */}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
