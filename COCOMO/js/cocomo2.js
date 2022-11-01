typeSelect = document.getElementById('typeSelect');
input = document.getElementById('kInput');

resu = document.getElementById('res');

prec = document.getElementById('PREC');
flex = document.getElementById('FLEX');
resl = document.getElementById('RESL');
team = document.getElementById('TEAM');
pmat = document.getElementById('PMAT');

pers = document.getElementById('PERS');
prex = document.getElementById('PREX');
rcpx = document.getElementById('RCPX');
ruse = document.getElementById('RUSE');
pdif = document.getElementById('PDIF');
fcil = document.getElementById('FCIL');
sced = document.getElementById('SCED');

acap = document.getElementById('ACAP');
aexp = document.getElementById('AEXP');
pcap = document.getElementById('PCAP');
pcon = document.getElementById('PCON');
pexp = document.getElementById('PEXP');
ltex = document.getElementById('LTEX');
rely = document.getElementById('RELY');
data = document.getElementById('DATA');
cplx = document.getElementById('CPLX');
ruse2 = document.getElementById('RUSE2');
docu = document.getElementById('DOCU');
time = document.getElementById('TIME');
stor = document.getElementById('STOR');
pvol = document.getElementById('PVOL');
tool = document.getElementById('TOOL');
site = document.getElementById('SITE');
sced2 = document.getElementById('SCED2');

res = document.getElementById('result-co2');


SCALE_COEF = {
    0: { 0: 6.20, 1: 4.96, 2: 3.72, 3: 2.48, 4: 1.24, 5: 1 },
    1: { 0: 5.07, 1: 4.05, 2: 3.04, 3: 2.03, 4: 1.01, 5: 1 },
    2: { 0: 7.07, 1: 5.65, 2: 4.24, 3: 2.83, 4: 1.41, 5: 1 },
    3: { 0: 5.48, 1: 4.38, 2: 3.29, 3: 2.19, 4: 1.10, 5: 1 },
    4: { 0: 7.80, 1: 6.24, 2: 4.68, 3: 3.12, 4: 1.56, 5: 1 }
};

EARLY_COEF = {
    0: { 0: 2.12, 1: 1.62, 2: 1.26, 3: 1.00, 4: 0.83, 5: 0.63, 6: 0.50},
    1: { 0: 1.59, 1: 1.33, 2: 1.22, 3: 1.00, 4: 0.87, 5: 0.74, 6: 0.62 },
    2: { 0: 0.49, 1: 0.60, 2: 0.83, 3: 1.00, 4: 1.33, 5: 1.91, 6: 2.72 },
    3: { 0: 1, 1: 1, 2: 0.95, 3: 1.00, 4: 1.07, 5: 1.15, 6: 1.24 },
    4: { 0: 1, 1: 1, 2: 0.87, 3: 1.00, 4: 1.29, 5: 1.81, 6: 2.61 },
    5: { 0: 1.43, 1: 1.30, 2: 1.10, 3: 1.00, 4: 0.87, 5: 0.73, 6: 0.62 },
    6: { 0: 1, 1: 1.43, 2: 1.14, 3: 1.00, 4: 1.00, 5: 1, 6: 1 }
};

POST_COEF = {
    0: { 0: 1.42, 1: 1.29, 2: 1.00, 3: 0.85, 4: 0.71, 5: 1 },
    1: { 0: 1.22, 1: 1.10, 2: 1.00, 3: 0.88, 4: 0.81, 5: 1 },
    2: { 0: 1.34, 1: 1.15, 2: 1.00, 3: 0.88, 4: 0.76, 5: 1 },
    3: { 0: 1.29, 1: 1.12, 2: 1.00, 3: 0.90, 4: 0.81, 5: 1 },
    4: { 0: 1.19, 1: 1.09, 2: 1.00, 3: 0.91, 4: 0.85, 5: 1 },
    5: { 0: 1.20, 1: 1.09, 2: 1.00, 3: 0.91, 4: 0.84, 5: 1 },
    6: { 0: 0.84, 1: 0.92, 2: 1.00, 3: 1.10, 4: 1.26, 5: 1 },
    7: { 0: 1, 1: 0.23, 2: 1.00, 3: 1.14, 4: 1.28, 5: 1 },
    8: { 0: 0.73, 1: 0.87, 2: 1.00, 3: 1.17, 4: 1.34, 5: 1.74 },
    9: { 0: 1, 1: 0.95, 2: 1.00, 3: 1.07, 4: 1.15, 5: 1.24 },
    10: { 0: 0.81, 1: 0.91, 2: 1.00, 3: 1.11, 4: 1.23, 5: 1 },
    11: { 0: 1, 1: 0, 2: 1.00, 3: 1.11, 4: 1.29, 5: 1.63 },
    12: { 0: 1, 1: 0, 2: 1.00, 3: 1.05, 4: 1.17, 5: 1.46 },
    13: { 0: 1, 1: 0.87, 2: 1.00, 3: 1.15, 4: 1.30, 5: 1 },
    14: { 0: 1.17, 1: 1.09, 2: 1.00, 3: 0.90, 4: 0.78, 5: 1},
    15: { 0: 1.22, 1: 1.09, 2: 1.00, 3: 0.93, 4: 0.86, 5: 0.80 },
    16: { 0: 1.43, 1: 1.14, 2: 1.00, 3: 1.00, 4: 1.00, 5: 1 }
};

let e, a, b = 0.91, sf, em, eaf, pm, ex; 



function sum() {
    if (typeSelect.selectedIndex == 0) {
        a = 2.94
        eaf = EARLY_COEF[0][pers.selectedIndex] * EARLY_COEF[1][prex.selectedIndex] *
        EARLY_COEF[2][rcpx.selectedIndex] * EARLY_COEF[3][ruse.selectedIndex] *
        EARLY_COEF[4][pdif.selectedIndex] * EARLY_COEF[5][fcil.selectedIndex] *
        EARLY_COEF[6][sced.selectedIndex];
    }
    else if (typeSelect.selectedIndex == 1){   
        a = 2.45
        eaf = POST_COEF[0][acap.selectedIndex] * POST_COEF[1][aexp.selectedIndex] *
        POST_COEF[2][pcap.selectedIndex] * POST_COEF[3][pcon.selectedIndex] *
        POST_COEF[4][pexp.selectedIndex] * POST_COEF[5][ltex.selectedIndex] *
        POST_COEF[6][rely.selectedIndex] * POST_COEF[7][data.selectedIndex] *
        POST_COEF[8][cplx.selectedIndex] * POST_COEF[9][ruse2.selectedIndex] *
        POST_COEF[10][docu.selectedIndex] * POST_COEF[11][time.selectedIndex] *
        POST_COEF[12][stor.selectedIndex] * POST_COEF[13][pvol.selectedIndex] *
        POST_COEF[14][tool.selectedIndex] * POST_COEF[15][site.selectedIndex] *
        POST_COEF[16][sced2.selectedIndex];
    }

    ex = SCALE_COEF[0][prec.selectedIndex] + 
    SCALE_COEF[1][flex.selectedIndex] + 
    SCALE_COEF[2][resl.selectedIndex] +
    SCALE_COEF[3][team.selectedIndex] + 
    SCALE_COEF[4][pmat.selectedIndex];

    e = b + 0.01 * ex;

    pm = eaf * a * Math.pow(input.value, e)
}



resu.addEventListener("click", function() {
    sum();
    res.textContent = pm;
});





