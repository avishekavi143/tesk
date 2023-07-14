const CustomeLibrary = (function () {
    // to change class name
    function changeClass(element, className) {
        element.className = className;
    }
    // to get dataset
    function getDataset(element) {
        return element.dataset;
    }
    // to inject element
    function injectElement(parentElement, newElement) {
        parentElement.appendChild(newElement);
    }
    // to make ajax and get request
    function makeRequest(url, method, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback(new Error('Request failed'));
                }
            }
        };
        xhr.send(JSON.stringify(data));
    }
    // for ajax request
    function ajax(url, data, callback) {
        makeRequest(url, 'POST', data, callback);
    }
    // for get
    function get(url, callback) {
        makeRequest(url, 'GET', null, callback);
    }
    // to get value of checkbox/input/dropdown
    function getValue(element) {
        if (element.type === 'checkbox') {
            return element.checked;
        } else {
            return element.value;
        }
    }
    // to set value of checkbox/input/dropdown
    function setValue(element, value) {
        if (element.type === 'checkbox') {
            element.checked = value;
        } else {
            element.value = value;
        }
    }

    // to use from external
    return {
        changeClass: changeClass,
        getDataset: getDataset,
        injectElement: injectElement,
        ajax: ajax,
        get: get,
        getValue: getValue,
        setValue: setValue
    };
})();