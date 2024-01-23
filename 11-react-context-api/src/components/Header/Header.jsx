import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
    const appContext = useContext(AppContext);

    return <header> Quantidade de Favs: {appContext.favorites.length}</header>

}
export default Header;
