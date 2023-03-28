buttonFooter = document.querySelector('.button-footer');
legalNotice = document.querySelector('.legal-notice');
let legalNoticeActive = false;

function displayLegalNotice() {

    if(!legalNoticeActive) {
        legalNotice.classList.add('legal-notice-active');
        legalNoticeActive = !legalNoticeActive
    }
    else {
        legalNotice.classList.remove('legal-notice-active');
        legalNoticeActive = !legalNoticeActive
    }
}


buttonFooter.addEventListener('click', () => {
    displayLegalNotice()
})
