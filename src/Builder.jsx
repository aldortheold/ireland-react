import text from './assets/text.json';

function Builder(props) {
    
    const titles = text.titles;
    const names = text.names;
    const texts = text.texts;
    const images = text.images;
    
    let language = "ENG";

    document.addEventListener("keydown", event => {
        if ((event.key == "t") || (event.key == "е")) {
            languageToggle();
        }
    });

    function languageToggle() {
        language = (language === "ENG" ? "RUS" : "ENG");
        document.querySelector("h1").textContent = language === "ENG" ? titles[0] : titles[1];
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll("h2")[i].textContent = language === "ENG" ? names[i] : names[i + 8];
            document.querySelectorAll("p")[i].textContent = language === "ENG" ? texts[i] : texts[i + 8];
            document.body.style.fontFamily = language === "ENG" ? "\"Platypi\", serif" : "\"Merriweather\", serif";
        }
    }

    return (
        <div className="container">
            <div className="text">
                <h2>{names[props.index]}</h2>
                <p>{texts[props.index]}</p>
            </div>
            <div className="image">
                <img src="https://i.imgur.com/hj0y8pW.jpeg" alt={images[props.index]} title={images[props.index]} />
            </div>
            <div className="image">
                <img src="https://i.imgur.com/hj0y8pW.jpeg" alt={images[props.index + 1]} title={images[props.index + 1]} />
            </div>
            <div className="text">
                <h2>{names[props.index + 1]}</h2>
                <p>{texts[props.index + 1]}</p>
            </div>
        </div>
    )
}

export default Builder