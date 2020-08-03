function fib() {
    var n = eval(document.form.a.value);
    if (n == 0) {
        document.form2.b.value = 0
    }
    else if (n < 0) {
        document.form2.b.value = "0以上の数を入力してください。"
    }
    else {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        document.form2.b.value = b
    }
  }