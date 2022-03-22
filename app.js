

// -----------------Form-------------//

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const dev_form = document.querySelector('form');
const tbody = document.querySelector('tbody')

dev_form.addEventListener('submit', function(e){
    e.preventDefault()
    const msg = document.querySelector('.msg');

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    let {name, phone, location, photo} = data;

    if (name == '' || phone == '' || location == '') {
        msg.innerHTML = Alert.danger('All fields are required');
    } else {
        Storage.set('Developer', data);
        dev_form.reset();

        all_data();
        msg.innerHTML = Alert.success('Data Stable');
    }
})


all_data();
function all_data() {
    let get_data = Storage.get('Developer')

    let list = '';
    get_data.map((data, index) => {
        let {name, phone, photo, location} = data;
        list += `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${name}</td>
                                    <td>${phone}</td>
                                    <td>${location}</td>
                                    <td><img style="width: 30px; height: 30px; object-fit: cover;" src="${photo ? photo : './assets/img/avatar.jpg'}" alt=""></td>
                                    <td>
                                        <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#modal"><i class="fa fa-eye" aria-hidden="true"></i></button>
                                        <button class="btn btn-warning btn-sm"><i class="fa fa-edit" aria-hidden="true"></i></button>
                                        <button class="btn btn-danger btn-sm"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
        `
    })

    tbody.innerHTML = list;

}