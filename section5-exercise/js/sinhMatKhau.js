const matKhau = {
  template: "abcdefghijklmnABCDED0123456789$%#@",
  sinhMatKhau: function (length) {
    let mk = "";

    for (let i = 0; i < length; i++) {
      let rnd = Math.floor(Math.random() * this.template.length);

      mk += this.template.charAt(rnd);
    }

    return mk;
  },
};

console.log(matKhau.sinhMatKhau(10));
