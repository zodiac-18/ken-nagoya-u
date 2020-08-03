function gcd() {
    var m = eval(document.form.a.value);
    var n = eval(document.form.b.value);
    var r;
  
    if (m < n) {
      r = m;
      m = n;
      n = r;
    }
  
    while ((r = m % n) != 0) {
      m = n;
      n = r;
    }
    document.form2.c.value = n
  }