import data from './Customer-large.json';
export class CustomerService {
    getCustomersSmall() {
        const result = [];
        data.map((datas) => {
            result.push(datas)
        });
        return result;
        // return fetch('data/customers-small.json').then(res => res.json())
        //         .then(d => d.data);
    }
    getCustomersMedium() {
        return fetch('data/customers-medium.json').then(res => res.json()).then(d => d.data);
    }
    // getCustomersLarge() {
    //     return fetch('data/customers-large.json').then(res => res.json())
    //             .then(d => d.data);
    // }
    getCustomersLarge() {
        const result = [];
        data.map((data) => {
            result.push(data)
        });
        return result;
        console.log(result)
        // return fetch('data/customers-large.json').then(res => res.json())
        //         .then(d => d.data);
    }
    getCustomersXLarge() {
        return fetch('data/customers-xlarge.json').then(res => res.json()).then(d => d.data);
    }
    // getCustomers(params) {
    //     debugger
    //     const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
    //     debugger
    //     return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    // }
}
