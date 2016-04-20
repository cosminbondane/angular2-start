var Model;
(function (Model) {
    var Contact = (function () {
        function Contact(firstName, lastName, email, phone, birthDate) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.birthDate = birthDate;
        }
        Contact.prototype.isActive = function () {
            return this.isNotEmpty(this.email) || this.isNotEmpty(this.phone);
        };
        Contact.prototype.isNotEmpty = function (value) {
            return value !== null && value !== '';
        };
        return Contact;
    }());
    Model.Contact = Contact;
})(Model || (Model = {}));
var Container;
(function (Container) {
    var ContactContainer = (function () {
        function ContactContainer(element) {
            this.element = element;
            this.list = new Array();
        }
        ContactContainer.prototype.add = function (contact) {
            this.list.push(contact);
            var child = this.createElement(contact);
            this.element.appendChild(child);
        };
        ContactContainer.prototype.createElement = function (contact) {
            var div = document.createElement('div');
            div.innerText = contact.firstName + " " + contact.lastName;
            if (contact.isActive()) {
                div.innerText += " can be contacted";
            }
            else {
                div.innerText += " cannot be contacted";
            }
            return div;
        };
        return ContactContainer;
    }());
    Container.ContactContainer = ContactContainer;
})(Container || (Container = {}));
window.onload = function () {
    var el = document.getElementById('content');
    var container = new Container.ContactContainer(el);
    container.add(new Model.Contact("John", "Doe", null, null, new Date(1980, 10)));
    container.add(new Model.Contact("John", "Doe2", "john@doe2.com", null, new Date(1980, 10)));
    container.add(new Model.Contact("John", "Doe3", null, "+32132143", new Date(1980, 10)));
};
//# sourceMappingURL=app.js.map