import ReactDOM from 'react-dom/client';
import { Heading } from './Component/Heading';
import { Main } from './Component/Main';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
        <Heading/>
        <Main/>
        </>
);

