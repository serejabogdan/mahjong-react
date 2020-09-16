class Dom {
    constructor(element) {
        this.$selector = element === 'string' ?
            new Error('Dom node did not find') : element;
    }

    addClass(className) {
        this.$selector.classList.add(className);
    }
    
    removeClass(className) {
        this.$selector.classList.remove(className);
    }

    classContains(className) {
        return this.$selector.classList.contains(className);
    }

    get text() {
        return this.$selector.textContent;
    }
}

export function $(element) {
    return new Dom(element);
}