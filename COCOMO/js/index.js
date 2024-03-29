let Calculator = function () {

    this.ptSelect = document.getElementById("ptSelect");
    this.psInput = document.getElementById("psInput");
    this.tmElem = document.getElementById("TM");
    this.pmElem = document.getElementById("PM");
    this.ssElem = document.getElementById("SS");
    this.pElem = document.getElementById("P");
    this.useInt = document.getElementById("use");
    this.intCov = document.getElementsByClassName("intCocOver")[0];
    this.tBody = document.getElementById("tBody");

    this.COEF = {
        0: { a: 2.4, b: 1.05, c: 2.5, d: 0.38, ai: 3.2, bi: 1.05 },
        1: { a: 3.0, b: 1.12, c: 2.5, d: 0.35, ai: 3.0, bi: 1.12 },
        2: { a: 3.6, b: 1.20, c: 2.5, d: 0.32, ai: 2.8, bi: 1.20 }
    };
    this.HANDLED = false;

    this.init();

};

Calculator.prototype.init = function () {

    let self = this;

    this.ptSelect.addEventListener("input", function () { self.process.call(self) });
    this.psInput.addEventListener("input", function () { self.process.call(self) });
    this.useInt.addEventListener("click", function () {
        self.intCov.style.display = self.useInt.checked ? "flex" : "none";
        self.process.call(self);
    });

    this.process();

};

Calculator.prototype.process = function () {

    let round = function (v) { return Math.round(v * 100) / 100; };

    let type = this.ptSelect.options[this.ptSelect.selectedIndex].index,
        size = parseInt(this.psInput.value) || 0,
        useInt = this.useInt.checked,
        EAF = 1,
        self = this,
        pm = 0, tm = 0, ss = 0, p = 0;

    let a = function (c) { return Array.prototype.slice.call(c); };

    if (useInt) {
        a(this.tBody.getElementsByTagName("tr")).map(function (tr) {
            return (tr.childNodes.length < 5) ? null : tr;
        }).filter(function (e) { return e !== null; }).map(function (tr) {
            if (!self.HANDLED) 
                a(tr.getElementsByTagName("input")).map(function (i) {
                i.addEventListener("click", function () { self.process.call(self) }); return i;
            })[0].checked = true; return tr;
        });


        EAF = a(self.tBody.getElementsByTagName("input")).filter(function (e) {
            return e.checked; 
        }).map(function (e) {
            return parseFloat(e.value); 
        }).reduce(function (a, b) { return a * b; });

        this.HANDLED = true;
    }

    pm = EAF * this.COEF[type][useInt ? "a" : "ai"] * Math.pow(size, this.COEF[type][useInt ? "b" : "bi"]);
    tm = this.COEF[type].c * Math.pow(pm, this.COEF[type].d);
    ss = pm / tm;
    p = size / pm;

    this.pmElem.textContent = round(pm);
    this.tmElem.textContent = round(tm);
    this.ssElem.textContent = round(ss);
    this.pElem.textContent = round(p);
};