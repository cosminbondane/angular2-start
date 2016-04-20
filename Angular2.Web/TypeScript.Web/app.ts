module Model {

    interface ContactInterface {
        isActive(): boolean;
    }

    export class Contact implements ContactInterface {
        public firstName: string; // by default is public; must specify if private/protected
        public lastName: string;
        public email: string;
        public phone: string;
        public birthDate: Date;

        constructor(firstName: string, lastName: string, email: string, phone: string, birthDate: Date) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.birthDate = birthDate;
        }

        isActive(): boolean {
            return this.isNotEmpty(this.email) || this.isNotEmpty(this.phone);
        }

        protected isNotEmpty(value): boolean {
            return value !== null && value !== '';
        }
    }
}

module Container {

    export class ContactContainer {
        protected list: Array<Model.Contact>;
        protected element: HTMLElement;

        constructor(element: HTMLElement) {
            this.element = element;
            this.list = new Array<Model.Contact>();
        }

        add(contact: Model.Contact) {
            this.list.push(contact);

            var child = this.createElement(contact);
            this.element.appendChild(child);
        }

        private createElement(contact: Model.Contact): HTMLDivElement {
            var div = document.createElement('div');

            div.innerText = contact.firstName + " " + contact.lastName;
            if (contact.isActive()) {
                div.innerText += " can be contacted";
            } else {
                div.innerText += " cannot be contacted";
            }

            return div;
        }
    }
}

window.onload = () => {
    var el = document.getElementById('content');

    var container = new Container.ContactContainer(el);
    container.add(new Model.Contact("John", "Doe", null, null, new Date(1980, 10)));
    container.add(new Model.Contact("John", "Doe2", "john@doe2.com", null, new Date(1980, 10)));
    container.add(new Model.Contact("John", "Doe3", null, "+32132143", new Date(1980, 10)));
};