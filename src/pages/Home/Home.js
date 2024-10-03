import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import ListFood from "../../components/ListFood/ListFood";
import AppDownload from "../../components/AppDownload/AppDownload";
const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu category_menu={category} setCategory_menu={setCategory} />
            <ListFood category_List={category} />
            <AppDownload />
        </div>
    )
}
export default Home;