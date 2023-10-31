import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Details, Error } from '../../pages';

const Router = ( ) => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;