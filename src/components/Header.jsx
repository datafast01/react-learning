import headerImg from '../assets/react-core-concepts.png'

const reatDescription = ['Fundamental', 'Crucial', 'Core'];
function getRamdom(max) {
    return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    return (
        <div>
            <header>
                <img src={headerImg} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {reatDescription[getRamdom(2)]} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>

        </div>
    );
}