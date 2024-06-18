import Builder from './Builder.jsx';
import text from './assets/text.json';

function App() {

    return (
        <>
            <h1>{text.titles[0]}</h1>
            <Builder index={0} />
            <Builder index={2} />
            <Builder index={4} />
            <Builder index={6} />
        </>
    )
}

export default App
