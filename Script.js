const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        this.classList.add("active");
        pane.classList.add("active");
    };
});


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

let account = {
    email: 'xuanbach.2519@gmail.com',
    fullName: 'Trịnh Xuân Bách',
    passWord: '123456',
    phoneNumber: '0987044428',
    address: 'hà đông, hà nội',
    dateOfBirth: '25/01/1999',
};

function change() {
    let oldPass = document.getElementById("oldPass").value;
    let newPass = document.getElementById("newPass").value;
    let reTypePass = document.getElementById("reTypePass").value;
    if (oldPass != account.passWord) {
        alert("nhập sai mật khẩu cũ");
    } else {
        if (newPass.length > 8) {
            if (newPass === reTypePass) {
                account.passWord = newPass;
                alert("thay đổi mật khẩu thành công")
            } else {
                alert(" mật khẩu nhập lại không đúng");
            }
        } else if (newPass.length < 8) {
            alert(" mat khau phai 8 ky tu tro len");
        }
    }
}

// xử lý khi click vào button xóa của item
var btnXoa = document.querySelectorAll(".btn-delete")
console.log(btnXoa)
var itemGrid = null

btnXoa.forEach(button => {
    button.addEventListener('click', function() {
        itemGrid = this.parentElement.parentElement
        console.log("====itemGrid===", itemGrid)
    })
})

// khi bấm vào confirm để xóa
var btnXoa1 = document.getElementsByClassName("btn-confirm-delete")
console.log("===btnXoa1===", btnXoa1)
btnXoa1[0].addEventListener('click', function() {
    itemGrid.remove()
})