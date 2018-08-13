import html from '../libs/html.js';

import Header from '../layout/header.js';
import Footer from '../layout/footer.js';

import NationCreator from '../components/nation-creator.js';
import nationApi from '../services/nation-api.js';

let template = function() {
    return html`
    <header></header>
    <main>Hello World</main>
    <footer></footer>
   `;
};

export default class App {
    constructor() {
        this.nation = nationApi.get();

       
    }

    render() {

        let dom = template();
        let main = dom.querySelector('main');

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header({});
        let footer = new Footer;

        console.log('in app.js', this.nation);

        let nationCreator = new NationCreator({
            test: 'i a prop',
        });

        head.appendChild(header.render());
        foot.appendChild(footer.render());

        main.appendChild(nationCreator.render());
        return dom;
    }
}
