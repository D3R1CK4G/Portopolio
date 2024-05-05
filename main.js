function toggleDetail(e) {
    const target = $(e.target)
    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass
    }else{
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()

}

function onSubmitForm(e) {
    e.preventDefault()
    const email = $("inp_email")
    const subject = $("inp_subject")
    const massege = $("inp_masssege")

    if(!$("email").val()) {
        alert("Email Belom Terisi Boss")
    } else if(!$("subject").val()) {
        alert("Subjet Di isi Bos")
    } else if(!$("massege").val()) {
        alert("Massege Jangan Lupa Boss")
    } else {
        alert("Form Sudah Di Kirim")
        $(email).val("")
        $(subject).val("")
        $(massege).val("")
        alert("Form Sudah Di Kirim")
    }
}