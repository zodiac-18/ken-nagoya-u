function count() {
    var text = String(document.form3.a.value)
    document.form2.c.value = text.trim().length;
    document.form2.d.value = text.replace(/\s+/g, "").length;
    document.form2.b.value = (text+=".").trim().replace(/(\,|\.|\?|:|;|\!|\s)+/g, " ").split(" ").length - 1;
}
