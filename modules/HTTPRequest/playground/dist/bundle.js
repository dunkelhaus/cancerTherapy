(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
function shuffle(array) {
    var counter = array.length;
    var temp = 0;
    var index = 0;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
}
exports.shuffle = shuffle;
function classifyFmMutationsIndependent(numSamples, noise) {
    var points = [];
    points.push({ x: 2, y: 2, label: 1 });
    points.push({ x: 232.9259012627718732, y: -65.64313686291839645, label: 1 });
    points.push({ x: 223.5849416849567319, y: -66.81057035041969527, label: 1 });
    points.push({ x: 4.632009239561352842e+01, y: -1.029703526952492041e+02, label: 1 });
    points.push({ x: -1.995874183764628924e+02, y: -2.520791010190839359e+02, label: 1 });
    points.push({ x: 2.130644688893144689e+02, y: -3.856466381225438056e+01, label: 1 });
    points.push({ x: 2.177829675128117231e+02, y: -4.220374650947678674e+01, label: 1 });
    points.push({ x: -5.386687468479245808e+02, y: -4.543970469079715713e+02, label: 1 });
    points.push({ x: 2.346462828747968103e+02, y: -4.034846543536298924e+01, label: 1 });
    points.push({ x: -5.769687615392518865e+02, y: -4.038249390064855220e+02, label: 1 });
    points.push({ x: 2.304235174776049178e+02, y: -3.183657153016453023e+01, label: 1 });
    points.push({ x: 2.187036782333427141e+02, y: -7.158072659140367477e+01, label: 1 });
    points.push({ x: 2.279194304899255883e+02, y: -3.541269535329949747e+01, label: 1 });
    points.push({ x: 2.163143841637689491e+02, y: -6.281362216820984656e+01, label: 1 });
    points.push({ x: 2.263067441348846387e+02, y: -4.029113287136251387e+01, label: 1 });
    points.push({ x: 2.288612846858472381e+02, y: -5.740417384683024693e+01, label: 1 });
    points.push({ x: 2.186222686303180751e+02, y: -4.102708440783631261e+01, label: 1 });
    points.push({ x: 2.371049884182706649e+02, y: -5.735684687140816607e+01, label: 1 });
    points.push({ x: 2.271434440083232289e+02, y: -3.499914223566467086e+01, label: 1 });
    points.push({ x: 2.190500689794874063e+02, y: -7.155175909817857871e+01, label: 1 });
    points.push({ x: 2.257852997986466335e+02, y: -2.791291525203694590e+01, label: 1 });
    points.push({ x: -6.000735597502371093e+02, y: -3.524538556040854473e+02, label: 1 });
    points.push({ x: 2.377627458341793556e+02, y: -3.907298226015912235e+01, label: 1 });
    points.push({ x: 2.380596873041136803e+02, y: -2.070434263604102298e+01, label: 1 });
    points.push({ x: -4.709083864853874957e+02, y: -4.797385187727253424e+02, label: 1 });
    points.push({ x: 2.262207316817875267e+02, y: -3.822867449040744958e+01, label: 1 });
    points.push({ x: 2.227636121450891551e+02, y: -4.113391306442599671e+01, label: 1 });
    points.push({ x: 2.280672964435658230e+02, y: -2.526332027306547801e+01, label: 1 });
    points.push({ x: 2.338488133325182332e+02, y: -6.217931226836832082e+01, label: 1 });
    points.push({ x: 2.310430352233218514e+02, y: -7.417012322208057640e+01, label: 1 });
    points.push({ x: -5.840986307535371225e+02, y: -4.304417481056336214e+02, label: 1 });
    points.push({ x: 2.022021862745052658e+02, y: -3.912893688535457670e+01, label: 1 });
    points.push({ x: 2.080274740394852131e+02, y: -6.960092283881542130e+01, label: 1 });
    points.push({ x: -5.542233137708917639e+02, y: -4.908452685694195452e+02, label: 1 });
    points.push({ x: -5.260527474999045126e+02, y: -4.563760041808781693e+02, label: 1 });
    points.push({ x: 2.211309013405527253e+02, y: -3.613367353065402199e+01, label: 1 });
    points.push({ x: 2.285036774749400195e+02, y: -3.140535354917864908e+01, label: 1 });
    points.push({ x: 2.263543143243043403e+02, y: -5.478220223553727664e+01, label: 1 });
    points.push({ x: 1.587856775320940983e+02, y: -7.029415412583709610e+01, label: 1 });
    points.push({ x: 2.150564511914752188e+02, y: -4.572939278220106729e+01, label: 1 });
    points.push({ x: 2.244713320927205018e+02, y: -4.670604913865339114e+01, label: 1 });
    points.push({ x: 2.262034367875725138e+02, y: -4.156052634273417823e+01, label: 1 });
    points.push({ x: 2.295719613197408648e+02, y: -7.040933621210572824e+01, label: 1 });
    points.push({ x: 1.600032360731002162879e+02, y: 1.256999482766598391e+02, label: -1 });
    points.push({ x: -7.192893641987253659e+02, y: 2.290174774126199111e+02, label: -1 });
    points.push({ x: 1.755329645887285892e+02, y: 1.095684773521298752e+02, label: -1 });
    points.push({ x: 2.209422459822382052e+02, y: -2.350766149733388488e+01, label: -1 });
    points.push({ x: 1.404727303561630549e+02, y: 1.453468144763643295e+02, label: -1 });
    points.push({ x: -3.644175904080955775e+02, y: 2.038210332543099810e+02, label: -1 });
    points.push({ x: 1.262558174827285313e+02, y: 1.506205843826975013e+02, label: -1 });
    points.push({ x: -3.794289123884498736e+02, y: 2.452560694460117077e+02, label: -1 });
    points.push({ x: -6.899102516492438326e+02, y: -1.658626006789170333e+02, label: -1 });
    points.push({ x: 1.939829945431313831e+02, y: 8.173387810220705774e+01, label: -1 });
    points.push({ x: -6.0718410042394490347e+02, y: 3.460041476701848637e+02, label: -1 });
    points.push({ x: 9.951087954956389581e+01, y: 1.650120781611104519e+02, label: -1 });
    points.push({ x: 2.292953930662955599e+02, y: -2.711123209671264078e+01, label: -1 });
    points.push({ x: 2.215747122767829183e+02, y: -1.602409378965252529e+01, label: -1 });
    points.push({ x: 2.244450835726389357e+02, y: -2.210993526044977386e+01, label: -1 });
    points.push({ x: 1.416322801140474326e+02, y: 1.442224612979137817e+02, label: -1 });
    points.push({ x: 2.117289112263208040e+02, y: 2.748295695019183071e+01, label: -1 });
    points.push({ x: -3.714340221199145731e+02, y: 2.076527496838945410e+02, label: -1 });
    points.push({ x: 2.163780683947854016e+02, y: -5.362455962590898295e+00, label: -1 });
    points.push({ x: 1.841926403032167059e+02, y: 9.631914852190867293e+01, label: -1 });
    points.push({ x: 2.256122348249041067e+02, y: -3.190779926434733937e+01, label: -1 });
    points.push({ x: 2.303352187910737428e+02, y: -2.175570887827676358e+01, label: -1 });
    points.push({ x: 1.164618324021589473e+02, y: 1.569305817402551213e+02, label: -1 });
    points.push({ x: 2.190932815712637591e+02, y: 2.431969147006469001e+01, label: -1 });
    points.push({ x: -3.728243565871858891e+02, y: 2.272394172060681115e+02, label: -1 });
    points.push({ x: -3.889991040302405167e+02, y: 2.721590231737243357e+02, label: -1 });
    points.push({ x: -3.238582549887559026e+02, y: 3.326542809119883515e+01, label: -1 });
    points.push({ x: -8.281882970033014999e+02, y: 9.193061031841301656e+01, label: -1 });
    points.push({ x: 2.025356060798337410e+02, y: 6.646657283630973723e+01, label: -1 });
    points.push({ x: 2.050743778863981959e+02, y: 6.127576508049813953e+01, label: -1 });
    points.push({ x: -7.291347803212760255e+02, y: 3.342321747303824964e+01, label: -1 });
    points.push({ x: 2.224743810836521618e+02, y: -2.546625996920402812e+01, label: -1 });
    points.push({ x: 1.982076978761977273e+02, y: 7.008719273061045385e+01, label: -1 });
    points.push({ x: -2.991103511549893028e+02, y: -6.734359293077288555e+01, label: -1 });
    points.push({ x: -6.835956661066936704e+02, y: -2.023598393050500022e+02, label: -1 });
    points.push({ x: 2.004755734841604635e+02, y: 6.833285891518677602e+01, label: -1 });
    points.push({ x: 2.207899235916929115e+02, y: -1.404940350387022718e+01, label: -1 });
    points.push({ x: 2.201514714738945599e+02, y: -2.232703546039997278e+01, label: -1 });
    points.push({ x: 2.174587426639785122e+02, y: 4.775387663772204583e+00, label: -1 });
    points.push({ x: 1.708174973430615182e+02, y: 1.168153841598900584e+02, label: -1 });
    points.push({ x: -3.786456452223087012e+02, y: 2.517302923648182684e+02, label: -1 });
    points.push({ x: 2.238796568636625750e+02, y: -2.625273058733527520e+01, label: -1 });
    points.push({ x: -3.563593641852502287e+02, y: 1.310115936735700757e+02, label: -1 });
    points.push({ x: 2.123545947308724635e+02, y: 3.177988339669906637e+01, label: -1 });
    points.push({ x: 4.205390023710861414e+01, y: -7.446899995206581480e+01, label: -1 });
    points.push({ x: 1.736073355650341057e+02, y: 1.137725638563691462e+02, label: -1 });
    points.push({ x: 2.199912814686136926e+02, y: -6.641372175172317149e+00, label: -1 });
    points.push({ x: 2.257039034947660809e+02, y: -2.916525657652788439e+01, label: -1 });
    points.push({ x: -7.339984713888007946e+02, y: 6.014565438076182602e+01, label: -1 });
    points.push({ x: 1.658846735502027911e+02, y: 1.218622148909373664e+02, label: -1 });
    points.push({ x: 2.264687004063264908e+02, y: -3.848499128492908739e+01, label: -1 });
    points.push({ x: 1.711413929014057373e+02, y: 1.126416925702144880e+02, label: -1 });
    points.push({ x: 2.192523545633961817e+02, y: -1.203272414350453978e+01, label: -1 });
    points.push({ x: -7.101093954422901788e+02, y: 2.559891063218517218e+02, label: -1 });
    points.push({ x: 1.718051821980955367e+02, y: 1.138608893468728667e+02, label: -1 });
    points.push({ x: 1.604236254931022074e+02, y: 1.194784125436319329e+02, label: -1 });
    points.push({ x: -3.565166379606089890e+02, y: 1.570984181318374340e+02, label: -1 });
    points.push({ x: 2.158155643476885643e+02, y: -1.311115084040642564e+01, label: -1 });
    points.push({ x: -7.115285357019380399e+02, y: 2.771646535927042692e+02, label: -1 });
    points.push({ x: 2.117793764819160458e+02, y: -5.069043546386096111e+00, label: -1 });
    points.push({ x: 2.269295637380153607e+02, y: -3.521602148637619223e+01, label: -1 });
    points.push({ x: 1.991477778369971929e+02, y: 6.344093890904989053e+01, label: -1 });
    points.push({ x: 1.836725771235219895e+02, y: 1.007046357608692517e+02, label: -1 });
    points.push({ x: -7.182042556564593951e+02, y: 2.483189103694917321e+02, label: -1 });
    points.push({ x: -7.337970281457197643e+02, y: 7.376934027479435940e+01, label: -1 });
    points.push({ x: -7.253555483185965613e+02, y: 1.958436956733936825e+02, label: -1 });
    points.push({ x: 2.225176029939569560e+02, y: -1.389412294321929231e+01, label: -1 });
    points.push({ x: 2.233976066354335046e+02, y: -1.848051585761580995e+01, label: -1 });
    return points;
}
exports.classifyFmMutationsIndependent = classifyFmMutationsIndependent;
function classifyFmSampleIndependent(numSamples, noise) {
    var points = [];
    function genFmSampleIndependent() {
    }
    return points;
}
exports.classifyFmSampleIndependent = classifyFmSampleIndependent;
function classifytop10000LungMel(numSamples, noise) {
    var points = [];
    function genClassifyTop10000() {
    }
    return points;
}
exports.classifytop10000LungMel = classifytop10000LungMel;
function classifytop1000LungMel(numSamples, noise) {
    var points = [];
    function genClassifyTop1000() {
    }
    return points;
}
exports.classifytop1000LungMel = classifytop1000LungMel;
function classifytop100LungMel(numSamples, noise) {
    var points = [];
    function genClassifyTop100() {
    }
    return points;
}
exports.classifytop100LungMel = classifytop100LungMel;
function classifytop10LungMel(numSamples, noise) {
    var points = [];
    function genClassifyTop10() {
    }
    return points;
}
exports.classifytop10LungMel = classifytop10LungMel;
function regressFmMutationsIndependent(numSamples, noise) {
    var points = [];
    points.push({ x: 2, y: 2, label: 1 });
    points.push({ x: 232.9259012627718732, y: -65.64313686291839645, label: 1 });
    points.push({ x: 223.5849416849567319, y: -66.81057035041969527, label: 1 });
    points.push({ x: 4.632009239561352842e+01, y: -1.029703526952492041e+02, label: 1 });
    points.push({ x: -1.995874183764628924e+02, y: -2.520791010190839359e+02, label: 1 });
    points.push({ x: 2.130644688893144689e+02, y: -3.856466381225438056e+01, label: 1 });
    points.push({ x: 2.177829675128117231e+02, y: -4.220374650947678674e+01, label: 1 });
    points.push({ x: -5.386687468479245808e+02, y: -4.543970469079715713e+02, label: 1 });
    points.push({ x: 2.346462828747968103e+02, y: -4.034846543536298924e+01, label: 1 });
    points.push({ x: -5.769687615392518865e+02, y: -4.038249390064855220e+02, label: 1 });
    points.push({ x: 2.304235174776049178e+02, y: -3.183657153016453023e+01, label: 1 });
    points.push({ x: 2.187036782333427141e+02, y: -7.158072659140367477e+01, label: 1 });
    points.push({ x: 2.279194304899255883e+02, y: -3.541269535329949747e+01, label: 1 });
    points.push({ x: 2.163143841637689491e+02, y: -6.281362216820984656e+01, label: 1 });
    points.push({ x: 2.263067441348846387e+02, y: -4.029113287136251387e+01, label: 1 });
    points.push({ x: 2.288612846858472381e+02, y: -5.740417384683024693e+01, label: 1 });
    points.push({ x: 2.186222686303180751e+02, y: -4.102708440783631261e+01, label: 1 });
    points.push({ x: 2.371049884182706649e+02, y: -5.735684687140816607e+01, label: 1 });
    points.push({ x: 2.271434440083232289e+02, y: -3.499914223566467086e+01, label: 1 });
    points.push({ x: 2.190500689794874063e+02, y: -7.155175909817857871e+01, label: 1 });
    points.push({ x: 2.257852997986466335e+02, y: -2.791291525203694590e+01, label: 1 });
    points.push({ x: -6.000735597502371093e+02, y: -3.524538556040854473e+02, label: 1 });
    points.push({ x: 2.377627458341793556e+02, y: -3.907298226015912235e+01, label: 1 });
    points.push({ x: 2.380596873041136803e+02, y: -2.070434263604102298e+01, label: 1 });
    points.push({ x: -4.709083864853874957e+02, y: -4.797385187727253424e+02, label: 1 });
    points.push({ x: 2.262207316817875267e+02, y: -3.822867449040744958e+01, label: 1 });
    points.push({ x: 2.227636121450891551e+02, y: -4.113391306442599671e+01, label: 1 });
    points.push({ x: 2.280672964435658230e+02, y: -2.526332027306547801e+01, label: 1 });
    points.push({ x: 2.338488133325182332e+02, y: -6.217931226836832082e+01, label: 1 });
    points.push({ x: 2.310430352233218514e+02, y: -7.417012322208057640e+01, label: 1 });
    points.push({ x: -5.840986307535371225e+02, y: -4.304417481056336214e+02, label: 1 });
    points.push({ x: 2.022021862745052658e+02, y: -3.912893688535457670e+01, label: 1 });
    points.push({ x: 2.080274740394852131e+02, y: -6.960092283881542130e+01, label: 1 });
    points.push({ x: -5.542233137708917639e+02, y: -4.908452685694195452e+02, label: 1 });
    points.push({ x: -5.260527474999045126e+02, y: -4.563760041808781693e+02, label: 1 });
    points.push({ x: 2.211309013405527253e+02, y: -3.613367353065402199e+01, label: 1 });
    points.push({ x: 2.285036774749400195e+02, y: -3.140535354917864908e+01, label: 1 });
    points.push({ x: 2.263543143243043403e+02, y: -5.478220223553727664e+01, label: 1 });
    points.push({ x: 1.587856775320940983e+02, y: -7.029415412583709610e+01, label: 1 });
    points.push({ x: 2.150564511914752188e+02, y: -4.572939278220106729e+01, label: 1 });
    points.push({ x: 2.244713320927205018e+02, y: -4.670604913865339114e+01, label: 1 });
    points.push({ x: 2.262034367875725138e+02, y: -4.156052634273417823e+01, label: 1 });
    points.push({ x: 2.295719613197408648e+02, y: -7.040933621210572824e+01, label: 1 });
    points.push({ x: 1.600032360731002162879e+02, y: 1.256999482766598391e+02, label: -1 });
    points.push({ x: -7.192893641987253659e+02, y: 2.290174774126199111e+02, label: -1 });
    points.push({ x: 1.755329645887285892e+02, y: 1.095684773521298752e+02, label: -1 });
    points.push({ x: 2.209422459822382052e+02, y: -2.350766149733388488e+01, label: -1 });
    points.push({ x: 1.404727303561630549e+02, y: 1.453468144763643295e+02, label: -1 });
    points.push({ x: -3.644175904080955775e+02, y: 2.038210332543099810e+02, label: -1 });
    points.push({ x: 1.262558174827285313e+02, y: 1.506205843826975013e+02, label: -1 });
    points.push({ x: -3.794289123884498736e+02, y: 2.452560694460117077e+02, label: -1 });
    points.push({ x: -6.899102516492438326e+02, y: -1.658626006789170333e+02, label: -1 });
    points.push({ x: 1.939829945431313831e+02, y: 8.173387810220705774e+01, label: -1 });
    points.push({ x: -6.0718410042394490347e+02, y: 3.460041476701848637e+02, label: -1 });
    points.push({ x: 9.951087954956389581e+01, y: 1.650120781611104519e+02, label: -1 });
    points.push({ x: 2.292953930662955599e+02, y: -2.711123209671264078e+01, label: -1 });
    points.push({ x: 2.215747122767829183e+02, y: -1.602409378965252529e+01, label: -1 });
    points.push({ x: 2.244450835726389357e+02, y: -2.210993526044977386e+01, label: -1 });
    points.push({ x: 1.416322801140474326e+02, y: 1.442224612979137817e+02, label: -1 });
    points.push({ x: 2.117289112263208040e+02, y: 2.748295695019183071e+01, label: -1 });
    points.push({ x: -3.714340221199145731e+02, y: 2.076527496838945410e+02, label: -1 });
    points.push({ x: 2.163780683947854016e+02, y: -5.362455962590898295e+00, label: -1 });
    points.push({ x: 1.841926403032167059e+02, y: 9.631914852190867293e+01, label: -1 });
    points.push({ x: 2.256122348249041067e+02, y: -3.190779926434733937e+01, label: -1 });
    points.push({ x: 2.303352187910737428e+02, y: -2.175570887827676358e+01, label: -1 });
    points.push({ x: 1.164618324021589473e+02, y: 1.569305817402551213e+02, label: -1 });
    points.push({ x: 2.190932815712637591e+02, y: 2.431969147006469001e+01, label: -1 });
    points.push({ x: -3.728243565871858891e+02, y: 2.272394172060681115e+02, label: -1 });
    points.push({ x: -3.889991040302405167e+02, y: 2.721590231737243357e+02, label: -1 });
    points.push({ x: -3.238582549887559026e+02, y: 3.326542809119883515e+01, label: -1 });
    points.push({ x: -8.281882970033014999e+02, y: 9.193061031841301656e+01, label: -1 });
    points.push({ x: 2.025356060798337410e+02, y: 6.646657283630973723e+01, label: -1 });
    points.push({ x: 2.050743778863981959e+02, y: 6.127576508049813953e+01, label: -1 });
    points.push({ x: -7.291347803212760255e+02, y: 3.342321747303824964e+01, label: -1 });
    points.push({ x: 2.224743810836521618e+02, y: -2.546625996920402812e+01, label: -1 });
    points.push({ x: 1.982076978761977273e+02, y: 7.008719273061045385e+01, label: -1 });
    points.push({ x: -2.991103511549893028e+02, y: -6.734359293077288555e+01, label: -1 });
    points.push({ x: -6.835956661066936704e+02, y: -2.023598393050500022e+02, label: -1 });
    points.push({ x: 2.004755734841604635e+02, y: 6.833285891518677602e+01, label: -1 });
    points.push({ x: 2.207899235916929115e+02, y: -1.404940350387022718e+01, label: -1 });
    points.push({ x: 2.201514714738945599e+02, y: -2.232703546039997278e+01, label: -1 });
    points.push({ x: 2.174587426639785122e+02, y: 4.775387663772204583e+00, label: -1 });
    points.push({ x: 1.708174973430615182e+02, y: 1.168153841598900584e+02, label: -1 });
    points.push({ x: -3.786456452223087012e+02, y: 2.517302923648182684e+02, label: -1 });
    points.push({ x: 2.238796568636625750e+02, y: -2.625273058733527520e+01, label: -1 });
    points.push({ x: -3.563593641852502287e+02, y: 1.310115936735700757e+02, label: -1 });
    points.push({ x: 2.123545947308724635e+02, y: 3.177988339669906637e+01, label: -1 });
    points.push({ x: 4.205390023710861414e+01, y: -7.446899995206581480e+01, label: -1 });
    points.push({ x: 1.736073355650341057e+02, y: 1.137725638563691462e+02, label: -1 });
    points.push({ x: 2.199912814686136926e+02, y: -6.641372175172317149e+00, label: -1 });
    points.push({ x: 2.257039034947660809e+02, y: -2.916525657652788439e+01, label: -1 });
    points.push({ x: -7.339984713888007946e+02, y: 6.014565438076182602e+01, label: -1 });
    points.push({ x: 1.658846735502027911e+02, y: 1.218622148909373664e+02, label: -1 });
    points.push({ x: 2.264687004063264908e+02, y: -3.848499128492908739e+01, label: -1 });
    points.push({ x: 1.711413929014057373e+02, y: 1.126416925702144880e+02, label: -1 });
    points.push({ x: 2.192523545633961817e+02, y: -1.203272414350453978e+01, label: -1 });
    points.push({ x: -7.101093954422901788e+02, y: 2.559891063218517218e+02, label: -1 });
    points.push({ x: 1.718051821980955367e+02, y: 1.138608893468728667e+02, label: -1 });
    points.push({ x: 1.604236254931022074e+02, y: 1.194784125436319329e+02, label: -1 });
    points.push({ x: -3.565166379606089890e+02, y: 1.570984181318374340e+02, label: -1 });
    points.push({ x: 2.158155643476885643e+02, y: -1.311115084040642564e+01, label: -1 });
    points.push({ x: -7.115285357019380399e+02, y: 2.771646535927042692e+02, label: -1 });
    points.push({ x: 2.117793764819160458e+02, y: -5.069043546386096111e+00, label: -1 });
    points.push({ x: 2.269295637380153607e+02, y: -3.521602148637619223e+01, label: -1 });
    points.push({ x: 1.991477778369971929e+02, y: 6.344093890904989053e+01, label: -1 });
    points.push({ x: 1.836725771235219895e+02, y: 1.007046357608692517e+02, label: -1 });
    points.push({ x: -7.182042556564593951e+02, y: 2.483189103694917321e+02, label: -1 });
    points.push({ x: -7.337970281457197643e+02, y: 7.376934027479435940e+01, label: -1 });
    points.push({ x: -7.253555483185965613e+02, y: 1.958436956733936825e+02, label: -1 });
    points.push({ x: 2.225176029939569560e+02, y: -1.389412294321929231e+01, label: -1 });
    points.push({ x: 2.233976066354335046e+02, y: -1.848051585761580995e+01, label: -1 });
    return points;
}
exports.regressFmMutationsIndependent = regressFmMutationsIndependent;
function regressFmSampleIndependent(numSamples, noise) {
    var points = [];
    function getFmSampleIndependent() {
    }
    return points;
}
exports.regressFmSampleIndependent = regressFmSampleIndependent;
function regresstop10000LungMel(numSamples, noise) {
    var points = [];
    function genRegressTop10000() {
    }
    return points;
}
exports.regresstop10000LungMel = regresstop10000LungMel;
function regresstop1000LungMel(numSamples, noise) {
    var points = [];
    function genRegressTop1000() {
    }
    return points;
}
exports.regresstop1000LungMel = regresstop1000LungMel;
function regresstop100LungMel(numSamples, noise) {
    var points = [];
    function genRegressTop100() {
    }
    return points;
}
exports.regresstop100LungMel = regresstop100LungMel;
function regresstop10LungMel(numSamples, noise) {
    var points = [];
    function genRegressTop10() {
    }
    return points;
}
exports.regresstop10LungMel = regresstop10LungMel;
function regressPlane(numSamples, noise) {
    var radius = 6;
    var labelScale = d3.scale.linear()
        .domain([-10, 10])
        .range([-1, 1]);
    var getLabel = function (x, y) { return labelScale(x + y); };
    var points = [];
    for (var i = 0; i < numSamples; i++) {
        var x = randUniform(-radius, radius);
        var y = randUniform(-radius, radius);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getLabel(x + noiseX, y + noiseY);
        points.push({ x: x, y: y, label: label });
    }
    return points;
}
exports.regressPlane = regressPlane;
function regressGaussian(numSamples, noise) {
    var points = [];
    var labelScale = d3.scale.linear()
        .domain([0, 2])
        .range([1, 0])
        .clamp(true);
    var gaussians = [
        [-4, 2.5, 1],
        [0, 2.5, -1],
        [4, 2.5, 1],
        [-4, -2.5, -1],
        [0, -2.5, 1],
        [4, -2.5, -1]
    ];
    function getLabel(x, y) {
        var label = 0;
        gaussians.forEach(function (_a) {
            var cx = _a[0], cy = _a[1], sign = _a[2];
            var newLabel = sign * labelScale(dist({ x: x, y: y }, { x: cx, y: cy }));
            if (Math.abs(newLabel) > Math.abs(label)) {
                label = newLabel;
            }
        });
        return label;
    }
    var radius = 6;
    for (var i = 0; i < numSamples; i++) {
        var x = randUniform(-radius, radius);
        var y = randUniform(-radius, radius);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getLabel(x + noiseX, y + noiseY);
        points.push({ x: x, y: y, label: label });
    }
    ;
    return points;
}
exports.regressGaussian = regressGaussian;
function classifyCircleData(numSamples, noise) {
    var points = [];
    var radius = 5;
    function getCircleLabel(p, center) {
        return (dist(p, center) < (radius * 0.5)) ? 1 : -1;
    }
    for (var i = 0; i < numSamples / 2; i++) {
        var r = randUniform(0, radius * 0.5);
        var angle = randUniform(0, 2 * Math.PI);
        var x = r * Math.sin(angle);
        var y = r * Math.cos(angle);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getCircleLabel({ x: x + noiseX, y: y + noiseY }, { x: 0, y: 0 });
        points.push({ x: x, y: y, label: label });
    }
    for (var i = 0; i < numSamples / 2; i++) {
        var r = randUniform(radius * 0.7, radius);
        var angle = randUniform(0, 2 * Math.PI);
        var x = r * Math.sin(angle);
        var y = r * Math.cos(angle);
        var noiseX = randUniform(-radius, radius) * noise;
        var noiseY = randUniform(-radius, radius) * noise;
        var label = getCircleLabel({ x: x + noiseX, y: y + noiseY }, { x: 0, y: 0 });
        points.push({ x: x, y: y, label: label });
    }
    return points;
}
exports.classifyCircleData = classifyCircleData;
function classifyXORData(numSamples, noise) {
    function getXORLabel(p) { return p.x * p.y >= 0 ? 1 : -1; }
    var points = [];
    for (var i = 0; i < numSamples; i++) {
        var x = randUniform(-5, 5);
        var padding = 0.3;
        x += x > 0 ? padding : -padding;
        var y = randUniform(-5, 5);
        y += y > 0 ? padding : -padding;
        var noiseX = randUniform(-5, 5) * noise;
        var noiseY = randUniform(-5, 5) * noise;
        var label = getXORLabel({ x: x + noiseX, y: y + noiseY });
        points.push({ x: x, y: y, label: label });
    }
    return points;
}
exports.classifyXORData = classifyXORData;
function randUniform(a, b) {
    return Math.random() * (b - a) + a;
}
function normalRandom(mean, variance) {
    if (mean === void 0) { mean = 0; }
    if (variance === void 0) { variance = 1; }
    var v1, v2, s;
    do {
        v1 = 2 * Math.random() - 1;
        v2 = 2 * Math.random() - 1;
        s = v1 * v1 + v2 * v2;
    } while (s > 1);
    var result = Math.sqrt(-2 * Math.log(s) / s) * v1;
    return mean + Math.sqrt(variance) * result;
}
function dist(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

},{}],2:[function(require,module,exports){
"use strict";
var NUM_SHADES = 30;
var HeatMap = (function () {
    function HeatMap(width, numSamples, xDomain, yDomain, container, userSettings) {
        this.settings = {
            showAxes: false,
            noSvg: false
        };
        this.numSamples = numSamples;
        var height = width;
        var padding = userSettings.showAxes ? 20 : 0;
        if (userSettings != null) {
            for (var prop in userSettings) {
                this.settings[prop] = userSettings[prop];
            }
        }
        this.xScale = d3.scale.linear()
            .domain(xDomain)
            .range([0, width - 2 * padding]);
        this.yScale = d3.scale.linear()
            .domain(yDomain)
            .range([height - 2 * padding, 0]);
        var tmpScale = d3.scale.linear()
            .domain([0, .5, 1])
            .range(["#f59322", "#e8eaeb", "#0877bd"])
            .clamp(true);
        var colors = d3.range(0, 1 + 1E-9, 1 / NUM_SHADES).map(function (a) {
            return tmpScale(a);
        });
        this.color = d3.scale.quantize()
            .domain([-1, 1])
            .range(colors);
        container = container.append("div")
            .style({
            width: width + "px",
            height: height + "px",
            position: "relative",
            top: "-" + padding + "px",
            left: "-" + padding + "px"
        });
        this.canvas = container.append("canvas")
            .attr("width", numSamples)
            .attr("height", numSamples)
            .style("width", (width - 2 * padding) + "px")
            .style("height", (height - 2 * padding) + "px")
            .style("position", "absolute")
            .style("top", padding + "px")
            .style("left", padding + "px");
        if (!this.settings.noSvg) {
            this.svg = container.append("svg").attr({
                "width": width,
                "height": height
            }).style({
                "position": "absolute",
                "left": "0",
                "top": "0"
            }).append("g")
                .attr("transform", "translate(" + padding + "," + padding + ")");
            this.svg.append("g").attr("class", "train");
            this.svg.append("g").attr("class", "test");
        }
        if (this.settings.showAxes) {
            var xAxis = d3.svg.axis()
                .scale(this.xScale)
                .orient("bottom");
            var yAxis = d3.svg.axis()
                .scale(this.yScale)
                .orient("right");
            this.svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (height - 2 * padding) + ")")
                .call(xAxis);
            this.svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + (width - 2 * padding) + ",0)")
                .call(yAxis);
        }
    }
    HeatMap.prototype.updateTestPoints = function (points) {
        if (this.settings.noSvg) {
            throw Error("Can't add points since noSvg=true");
        }
        this.updateCircles(this.svg.select("g.test"), points);
    };
    HeatMap.prototype.updatePoints = function (points) {
        if (this.settings.noSvg) {
            throw Error("Can't add points since noSvg=true");
        }
        this.updateCircles(this.svg.select("g.train"), points);
    };
    HeatMap.prototype.updateBackground = function (data, discretize) {
        var dx = data[0].length;
        var dy = data.length;
        if (dx !== this.numSamples || dy !== this.numSamples) {
            throw new Error("The provided data matrix must be of size " +
                "numSamples X numSamples");
        }
        var context = this.canvas.node().getContext("2d");
        var image = context.createImageData(dx, dy);
        for (var y = 0, p = -1; y < dy; ++y) {
            for (var x = 0; x < dx; ++x) {
                var value = data[x][y];
                if (discretize) {
                    value = (value >= 0 ? 1 : -1);
                }
                var c = d3.rgb(this.color(value));
                image.data[++p] = c.r;
                image.data[++p] = c.g;
                image.data[++p] = c.b;
                image.data[++p] = 160;
            }
        }
        context.putImageData(image, 0, 0);
    };
    HeatMap.prototype.updateCircles = function (container, points) {
        var _this = this;
        var xDomain = this.xScale.domain();
        var yDomain = this.yScale.domain();
        points = points.filter(function (p) {
            return p.x >= xDomain[0] && p.x <= xDomain[1]
                && p.y >= yDomain[0] && p.y <= yDomain[1];
        });
        var selection = container.selectAll("circle").data(points);
        selection.enter().append("circle").attr("r", 3);
        selection
            .attr({
            cx: function (d) { return _this.xScale(d.x); },
            cy: function (d) { return _this.yScale(d.y); }
        })
            .style("fill", function (d) { return _this.color(d.label); });
        selection.exit().remove();
    };
    return HeatMap;
}());
exports.HeatMap = HeatMap;
function reduceMatrix(matrix, factor) {
    if (matrix.length !== matrix[0].length) {
        throw new Error("The provided matrix must be a square matrix");
    }
    if (matrix.length % factor !== 0) {
        throw new Error("The width/height of the matrix must be divisible by " +
            "the reduction factor");
    }
    var result = new Array(matrix.length / factor);
    for (var i = 0; i < matrix.length; i += factor) {
        result[i / factor] = new Array(matrix.length / factor);
        for (var j = 0; j < matrix.length; j += factor) {
            var avg = 0;
            for (var k = 0; k < factor; k++) {
                for (var l = 0; l < factor; l++) {
                    avg += matrix[i + k][j + l];
                }
            }
            avg /= (factor * factor);
            result[i / factor][j / factor] = avg;
        }
    }
    return result;
}
exports.reduceMatrix = reduceMatrix;

},{}],3:[function(require,module,exports){
"use strict";
var AppendingLineChart = (function () {
    function AppendingLineChart(container, lineColors) {
        this.data = [];
        this.minY = Number.MAX_VALUE;
        this.maxY = Number.MIN_VALUE;
        this.lineColors = lineColors;
        this.numLines = lineColors.length;
        var node = container.node();
        var totalWidth = node.offsetWidth;
        var totalHeight = node.offsetHeight;
        var margin = { top: 2, right: 0, bottom: 2, left: 2 };
        var width = totalWidth - margin.left - margin.right;
        var height = totalHeight - margin.top - margin.bottom;
        this.xScale = d3.scale.linear()
            .domain([0, 0])
            .range([0, width]);
        this.yScale = d3.scale.linear()
            .domain([0, 0])
            .range([height, 0]);
        this.svg = container.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        this.paths = new Array(this.numLines);
        for (var i = 0; i < this.numLines; i++) {
            this.paths[i] = this.svg.append("path")
                .attr("class", "line")
                .style({
                "fill": "none",
                "stroke": lineColors[i],
                "stroke-width": "1.5px"
            });
        }
    }
    AppendingLineChart.prototype.reset = function () {
        this.data = [];
        this.redraw();
        this.minY = Number.MAX_VALUE;
        this.maxY = Number.MIN_VALUE;
    };
    AppendingLineChart.prototype.addDataPoint = function (dataPoint) {
        var _this = this;
        if (dataPoint.length !== this.numLines) {
            throw Error("Length of dataPoint must equal number of lines");
        }
        dataPoint.forEach(function (y) {
            _this.minY = Math.min(_this.minY, y);
            _this.maxY = Math.max(_this.maxY, y);
        });
        this.data.push({ x: this.data.length + 1, y: dataPoint });
        this.redraw();
    };
    AppendingLineChart.prototype.redraw = function () {
        var _this = this;
        this.xScale.domain([1, this.data.length]);
        this.yScale.domain([this.minY, this.maxY]);
        var getPathMap = function (lineIndex) {
            return d3.svg.line()
                .x(function (d) { return _this.xScale(d.x); })
                .y(function (d) { return _this.yScale(d.y[lineIndex]); });
        };
        for (var i = 0; i < this.numLines; i++) {
            this.paths[i].datum(this.data).attr("d", getPathMap(i));
        }
    };
    return AppendingLineChart;
}());
exports.AppendingLineChart = AppendingLineChart;

},{}],4:[function(require,module,exports){
"use strict";
var Node = (function () {
    function Node(id, activation, initZero) {
        this.inputLinks = [];
        this.bias = 0.1;
        this.outputs = [];
        this.outputDer = 0;
        this.inputDer = 0;
        this.accInputDer = 0;
        this.numAccumulatedDers = 0;
        this.id = id;
        this.activation = activation;
        if (initZero) {
            this.bias = 0;
        }
    }
    Node.prototype.updateOutput = function () {
        this.totalInput = this.bias;
        for (var j = 0; j < this.inputLinks.length; j++) {
            var link = this.inputLinks[j];
            this.totalInput += link.weight * link.source.output;
        }
        this.output = this.activation.output(this.totalInput);
        return this.output;
    };
    return Node;
}());
exports.Node = Node;
var Errors = (function () {
    function Errors() {
    }
    return Errors;
}());
Errors.SQUARE = {
    error: function (output, target) {
        return 0.5 * Math.pow(output - target, 2);
    },
    der: function (output, target) { return output - target; }
};
exports.Errors = Errors;
Math.tanh = Math.tanh || function (x) {
    if (x === Infinity) {
        return 1;
    }
    else if (x === -Infinity) {
        return -1;
    }
    else {
        var e2x = Math.exp(2 * x);
        return (e2x - 1) / (e2x + 1);
    }
};
var Activations = (function () {
    function Activations() {
    }
    return Activations;
}());
Activations.TANH = {
    output: function (x) { return Math.tanh(x); },
    der: function (x) {
        var output = Activations.TANH.output(x);
        return 1 - output * output;
    }
};
Activations.RELU = {
    output: function (x) { return Math.max(0, x); },
    der: function (x) { return x <= 0 ? 0 : 1; }
};
Activations.SIGMOID = {
    output: function (x) { return 1 / (1 + Math.exp(-x)); },
    der: function (x) {
        var output = Activations.SIGMOID.output(x);
        return output * (1 - output);
    }
};
Activations.LINEAR = {
    output: function (x) { return x; },
    der: function (x) { return 1; }
};
exports.Activations = Activations;
var RegularizationFunction = (function () {
    function RegularizationFunction() {
    }
    return RegularizationFunction;
}());
RegularizationFunction.L1 = {
    output: function (w) { return Math.abs(w); },
    der: function (w) { return w < 0 ? -1 : (w > 0 ? 1 : 0); }
};
RegularizationFunction.L2 = {
    output: function (w) { return 0.5 * w * w; },
    der: function (w) { return w; }
};
exports.RegularizationFunction = RegularizationFunction;
var Link = (function () {
    function Link(source, dest, regularization, initZero) {
        this.weight = Math.random() - 0.5;
        this.isDead = false;
        this.errorDer = 0;
        this.accErrorDer = 0;
        this.numAccumulatedDers = 0;
        this.id = source.id + "-" + dest.id;
        this.source = source;
        this.dest = dest;
        this.regularization = regularization;
        if (initZero) {
            this.weight = 0;
        }
    }
    return Link;
}());
exports.Link = Link;
function buildNetwork(networkShape, activation, outputActivation, regularization, inputIds, initZero) {
    var numLayers = networkShape.length;
    var id = 1;
    var network = [];
    for (var layerIdx = 0; layerIdx < numLayers; layerIdx++) {
        var isOutputLayer = layerIdx === numLayers - 1;
        var isInputLayer = layerIdx === 0;
        var currentLayer = [];
        network.push(currentLayer);
        var numNodes = networkShape[layerIdx];
        for (var i = 0; i < numNodes; i++) {
            var nodeId = id.toString();
            if (isInputLayer) {
                nodeId = inputIds[i];
            }
            else {
                id++;
            }
            var node = new Node(nodeId, isOutputLayer ? outputActivation : activation, initZero);
            currentLayer.push(node);
            if (layerIdx >= 1) {
                for (var j = 0; j < network[layerIdx - 1].length; j++) {
                    var prevNode = network[layerIdx - 1][j];
                    var link = new Link(prevNode, node, regularization, initZero);
                    prevNode.outputs.push(link);
                    node.inputLinks.push(link);
                }
            }
        }
    }
    return network;
}
exports.buildNetwork = buildNetwork;
function forwardProp(network, inputs) {
    var inputLayer = network[0];
    if (inputs.length !== inputLayer.length) {
        throw new Error("The number of inputs must match the number of nodes in" +
            " the input layer");
    }
    for (var i = 0; i < inputLayer.length; i++) {
        var node = inputLayer[i];
        node.output = inputs[i];
    }
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            node.updateOutput();
        }
    }
    return network[network.length - 1][0].output;
}
exports.forwardProp = forwardProp;
function backProp(network, target, errorFunc) {
    var outputNode = network[network.length - 1][0];
    outputNode.outputDer = errorFunc.der(outputNode.output, target);
    for (var layerIdx = network.length - 1; layerIdx >= 1; layerIdx--) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            node.inputDer = node.outputDer * node.activation.der(node.totalInput);
            node.accInputDer += node.inputDer;
            node.numAccumulatedDers++;
        }
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                if (link.isDead) {
                    continue;
                }
                link.errorDer = node.inputDer * link.source.output;
                link.accErrorDer += link.errorDer;
                link.numAccumulatedDers++;
            }
        }
        if (layerIdx === 1) {
            continue;
        }
        var prevLayer = network[layerIdx - 1];
        for (var i = 0; i < prevLayer.length; i++) {
            var node = prevLayer[i];
            node.outputDer = 0;
            for (var j = 0; j < node.outputs.length; j++) {
                var output = node.outputs[j];
                node.outputDer += output.weight * output.dest.inputDer;
            }
        }
    }
}
exports.backProp = backProp;
function updateWeights(network, learningRate, regularizationRate) {
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            if (node.numAccumulatedDers > 0) {
                node.bias -= learningRate * node.accInputDer / node.numAccumulatedDers;
                node.accInputDer = 0;
                node.numAccumulatedDers = 0;
            }
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                if (link.isDead) {
                    continue;
                }
                var regulDer = link.regularization ?
                    link.regularization.der(link.weight) : 0;
                if (link.numAccumulatedDers > 0) {
                    link.weight = link.weight -
                        (learningRate / link.numAccumulatedDers) * link.accErrorDer;
                    var newLinkWeight = link.weight -
                        (learningRate * regularizationRate) * regulDer;
                    if (link.regularization === RegularizationFunction.L1 &&
                        link.weight * newLinkWeight < 0) {
                        link.weight = 0;
                        link.isDead = true;
                    }
                    else {
                        link.weight = newLinkWeight;
                    }
                    link.accErrorDer = 0;
                    link.numAccumulatedDers = 0;
                }
            }
        }
    }
}
exports.updateWeights = updateWeights;
function forEachNode(network, ignoreInputs, accessor) {
    for (var layerIdx = ignoreInputs ? 1 : 0; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            accessor(node);
        }
    }
}
exports.forEachNode = forEachNode;
function getOutputNode(network) {
    return network[network.length - 1][0];
}
exports.getOutputNode = getOutputNode;

},{}],5:[function(require,module,exports){
"use strict";
var nn = require("./nn");
var heatmap_1 = require("./heatmap");
var state_1 = require("./state");
var dataset_1 = require("./dataset");
var linechart_1 = require("./linechart");
var mainWidth;
var state = state_1.State.deserializeState();
var globalIsPlaying = false;
d3.select(".more button").on("click", function () {
    var position = 800;
    d3.transition()
        .duration(1000)
        .tween("scroll", scrollTween(position));
});
function scrollTween(offset) {
    return function () {
        var i = d3.interpolateNumber(window.pageYOffset ||
            document.documentElement.scrollTop, offset);
        return function (t) { scrollTo(0, i(t)); };
    };
}
var RECT_SIZE = 30;
var BIAS_SIZE = 5;
var NUM_SAMPLES_CLASSIFY = 500;
var NUM_SAMPLES_REGRESS = 1200;
var DENSITY = 100;
var djangoDataset = "fm_sample_independent";
var HoverType;
(function (HoverType) {
    HoverType[HoverType["BIAS"] = 0] = "BIAS";
    HoverType[HoverType["WEIGHT"] = 1] = "WEIGHT";
})(HoverType || (HoverType = {}));
var INPUTS = {
    "_5A": { f: function (x, y) { return x; }, label: "5A" },
    "_5C": { f: function (x, y) { return x; }, label: "5C" },
    "_5G": { f: function (x, y) { return x; }, label: "5G" },
    "_5T": { f: function (x, y) { return x; }, label: "5T" },
    "_3A": { f: function (x, y) { return x; }, label: "3A" },
    "_3C": { f: function (x, y) { return x; }, label: "3C" },
    "_3G": { f: function (x, y) { return x; }, label: "3G" },
    "_3T": { f: function (x, y) { return x; }, label: "3T" },
    "_CA": { f: function (x, y) { return x; }, label: "C>A" },
    "_CG": { f: function (x, y) { return x; }, label: "C>G" },
    "_CT": { f: function (x, y) { return x; }, label: "C>T" },
    "_TA": { f: function (x, y) { return y; }, label: "T>A" },
    "_TC": { f: function (x, y) { return y; }, label: "T>C" },
    "_TG": { f: function (x, y) { return y; }, label: "T>G" }
};
var HIDABLE_CONTROLS = [
    ["Show test data", "showTestData"],
    ["Discretize output", "discretize"],
    ["Play button", "playButton"],
    ["Step button", "stepButton"],
    ["Reset button", "resetButton"],
    ["Learning rate", "learningRate"],
    ["Activation", "activation"],
    ["Regularization", "regularization"],
    ["Regularization rate", "regularizationRate"],
    ["Problem type", "problem"],
    ["Which dataset", "dataset"],
    ["Ratio train data", "percTrainData"],
    ["Noise level", "noise"],
    ["Batch size", "batchSize"],
    ["# of hidden layers", "numHiddenLayers"],
];
var Player = (function () {
    function Player() {
        this.timerIndex = 0;
        this.isPlaying = false;
        this.callback = null;
    }
    Player.prototype.playOrPause = function () {
        if (this.isPlaying) {
            this.isPlaying = false;
            this.pause();
        }
        else {
            this.isPlaying = true;
            if (iter === 0) {
                simulationStarted();
            }
            this.play();
        }
    };
    Player.prototype.onPlayPause = function (callback) {
        this.callback = callback;
    };
    Player.prototype.play = function () {
        this.pause();
        this.isPlaying = true;
        state.isPlaying = this.isPlaying;
        var data = "discretize=" + state.discretize + "&play=True&showTestData=" + state.showTestData;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/run/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        if (this.callback) {
            this.callback(this.isPlaying);
        }
        this.start(this.timerIndex);
    };
    Player.prototype.pause = function () {
        this.timerIndex++;
        this.isPlaying = false;
        state.isPlaying = this.isPlaying;
        var data = "discretize=" + state.discretize + "&play=False&showTestData=" + state.showTestData;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/run/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        var str;
        if (state.regularization == null) {
            str = "none";
        }
        if (state.regularization == nn.RegularizationFunction.L1) {
            str = "L1";
        }
        if (state.regularization == nn.RegularizationFunction.L2) {
            str = "L2";
        }
        var str2;
        if (state.activation == nn.Activations.RELU) {
            str2 = "RELU";
        }
        if (state.activation == nn.Activations.TANH) {
            str2 = "TANH";
        }
        if (state.activation == nn.Activations.SIGMOID) {
            str2 = "SIGMOID";
        }
        var data = "learningRate=" + state.learningRate + "&activation=" + str2 + "&regularization=" + str + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        var data = "dataset=" + djangoDataset + "&weights=" + state.weights + "&biases=" + state.biases;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://35.184.171.249/v1/settings/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        if (this.callback) {
            this.callback(this.isPlaying);
        }
    };
    Player.prototype.start = function (localTimerIndex) {
        var _this = this;
        d3.timer(function () {
            if (localTimerIndex < _this.timerIndex) {
                return true;
            }
            oneStep();
            return false;
        }, 0);
    };
    return Player;
}());
state.getHiddenProps().forEach(function (prop) {
    if (prop in INPUTS) {
        delete INPUTS[prop];
    }
});
var boundary = {};
var selectedNodeId = null;
var xDomain = [-800, 400];
var yDomain = [-500, 500];
var heatMap = new heatmap_1.HeatMap(300, DENSITY, xDomain, yDomain, d3.select("#heatmap"), { showAxes: true });
var linkWidthScale = d3.scale.linear()
    .domain([0, 5])
    .range([1, 10])
    .clamp(true);
var colorScale = d3.scale.linear()
    .domain([-1, 0, 1])
    .range(["#f59322", "#e8eaeb", "#0877bd"])
    .clamp(true);
var iter = 0;
var trainData = [];
var testData = [];
var network = null;
var lossTrain = 0;
var lossTest = 0;
var player = new Player();
var lineChart = new linechart_1.AppendingLineChart(d3.select("#linechart"), ["#777", "black"]);
function makeGUI() {
    d3.select("#reset-button").on("click", function () {
        reset();
        userHasInteracted();
        d3.select("#play-pause-button");
    });
    d3.select("#play-pause-button").on("click", function () {
        userHasInteracted();
        player.playOrPause();
    });
    player.onPlayPause(function (isPlaying) {
        d3.select("#play-pause-button").classed("playing", isPlaying);
    });
    d3.select("#next-step-button").on("click", function () {
        player.pause();
        userHasInteracted();
        if (iter === 0) {
            simulationStarted();
        }
        oneStep();
    });
    d3.select("#data-regen-button").on("click", function () {
        generateData();
        parametersChanged = true;
    });
    var dataThumbnails = d3.selectAll("canvas[data-dataset]");
    dataThumbnails.on("click", function () {
        var newDataset = state_1.datasets[this.dataset.dataset];
        if (newDataset === state.dataset) {
            return;
        }
        state.dataset = newDataset;
        djangoDataset = this.dataset.dataset;
        var data = "dataset=" + this.dataset.dataset + "&weights=" + state.weights + "&biases=" + state.biases;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://35.184.171.249/v1/settings/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        dataThumbnails.classed("selected", false);
        d3.select(this).classed("selected", true);
        generateData();
        parametersChanged = true;
        reset();
    });
    var datasetKey = state_1.getKeyFromValue(state_1.datasets, state.dataset);
    d3.select("canvas[data-dataset=" + datasetKey + "]")
        .classed("selected", true);
    var regDataThumbnails = d3.selectAll("canvas[data-regDataset]");
    regDataThumbnails.on("click", function () {
        var newDataset = state_1.regDatasets[this.dataset.regdataset];
        if (newDataset === state.regDataset) {
            return;
        }
        state.regDataset = newDataset;
        djangoDataset = this.dataset.regdataset;
        var data = "dataset=" + this.dataset.regdataset + "&weights=" + state.weights + "&biases=" + state.biases;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://35.184.171.249/v1/settings/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        regDataThumbnails.classed("selected", false);
        d3.select(this).classed("selected", true);
        generateData();
        parametersChanged = true;
        reset();
    });
    var regDatasetKey = state_1.getKeyFromValue(state_1.regDatasets, state.regDataset);
    d3.select("canvas[data-regDataset=" + regDatasetKey + "]")
        .classed("selected", true);
    d3.select("#add-layers").on("click", function () {
        if (state.numHiddenLayers >= 10) {
            return;
        }
        state.networkShape[state.numHiddenLayers] = 2;
        state.numHiddenLayers++;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    });
    d3.select("#remove-layers").on("click", function () {
        if (state.numHiddenLayers <= 0) {
            return;
        }
        state.numHiddenLayers--;
        state.networkShape.splice(state.numHiddenLayers);
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    });
    var showTestData = d3.select("#show-test-data").on("change", function () {
        state.showTestData = this.checked;
        var data = "discretize=" + state.discretize + "&play=" + state.isPlaying + "&showTestData=" + state.showTestData;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/run/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        state.serialize();
        userHasInteracted();
        heatMap.updateTestPoints(state.showTestData ? testData : []);
    });
    showTestData.property("checked", state.showTestData);
    var discretize = d3.select("#discretize").on("change", function () {
        state.discretize = this.checked;
        var data = "discretize=" + state.discretize + "&play=" + state.isPlaying + "&showTestData=" + state.showTestData;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/run/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        state.serialize();
        userHasInteracted();
        updateUI();
    });
    discretize.property("checked", state.discretize);
    var percTrain = d3.select("#percTrainData").on("input", function () {
        state.percTrainData = this.value;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        d3.select("label[for='percTrainData'] .value").text(this.value);
        generateData();
        parametersChanged = true;
        reset();
    });
    percTrain.property("value", state.percTrainData);
    d3.select("label[for='percTrainData'] .value").text(state.percTrainData);
    var noise = d3.select("#noise").on("input", function () {
        state.noise = this.value;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        d3.select("label[for='noise'] .value").text(this.value);
    });
    var currentMax = parseInt(noise.property("max"));
    noise.property("value", state.noise);
    d3.select("label[for='noise'] .value").text(state.noise);
    var batchSize = d3.select("#batchSize").on("input", function () {
        state.batchSize = this.value;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        d3.select("label[for='batchSize'] .value").text(this.value);
        parametersChanged = true;
        reset();
    });
    batchSize.property("value", state.batchSize);
    d3.select("label[for='batchSize'] .value").text(state.batchSize);
    var activationDropdown = d3.select("#activations").on("change", function () {
        state.activation = state_1.activations[this.value];
        var str;
        if (state.regularization == null) {
            str = "none";
        }
        if (state.regularization == nn.RegularizationFunction.L1) {
            str = "L1";
        }
        if (state.regularization == nn.RegularizationFunction.L2) {
            str = "L2";
        }
        var str2;
        if (state.activation == nn.Activations.RELU) {
            str2 = "RELU";
        }
        if (state.activation == nn.Activations.TANH) {
            str2 = "TANH";
        }
        if (state.activation == nn.Activations.SIGMOID) {
            str2 = "SIGMOID";
        }
        var data = "learningRate=" + state.learningRate + "&activation=" + str2 + "&regularization=" + str + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    });
    activationDropdown.property("value", state_1.getKeyFromValue(state_1.activations, state.activation));
    var learningRate = d3.select("#learningRate").on("change", function () {
        state.learningRate = this.value;
        var str;
        if (state.regularization == null) {
            str = "none";
        }
        if (state.regularization == nn.RegularizationFunction.L1) {
            str = "L1";
        }
        if (state.regularization == nn.RegularizationFunction.L2) {
            str = "L2";
        }
        var str2;
        if (state.activation == nn.Activations.RELU) {
            str2 = "RELU";
        }
        if (state.activation == nn.Activations.TANH) {
            str2 = "TANH";
        }
        if (state.activation == nn.Activations.SIGMOID) {
            str2 = "SIGMOID";
        }
        var data = "learningRate=" + state.learningRate + "&activation=" + str2 + "&regularization=" + str + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        state.serialize();
        userHasInteracted();
        parametersChanged = true;
    });
    learningRate.property("value", state.learningRate);
    var regularDropdown = d3.select("#regularizations").on("change", function () {
        state.regularization = state_1.regularizations[this.value];
        var str;
        if (state.regularization == null) {
            str = "none";
        }
        if (state.regularization == nn.RegularizationFunction.L1) {
            str = "L1";
        }
        if (state.regularization == nn.RegularizationFunction.L2) {
            str = "L2";
        }
        var str2;
        if (state.activation == nn.Activations.RELU) {
            str2 = "RELU";
        }
        if (state.activation == nn.Activations.TANH) {
            str2 = "TANH";
        }
        if (state.activation == nn.Activations.SIGMOID) {
            str2 = "SIGMOID";
        }
        var data = "learningRate=" + state.learningRate + "&activation=" + str2 + "&regularization=" + str + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    });
    regularDropdown.property("value", state_1.getKeyFromValue(state_1.regularizations, state.regularization));
    var regularRate = d3.select("#regularRate").on("change", function () {
        state.regularizationRate = this.value;
        var str;
        if (state.regularization == null) {
            str = "none";
        }
        if (state.regularization == nn.RegularizationFunction.L1) {
            str = "L1";
        }
        if (state.regularization == nn.RegularizationFunction.L2) {
            str = "L2";
        }
        var str2;
        if (state.activation == nn.Activations.RELU) {
            str2 = "RELU";
        }
        if (state.activation == nn.Activations.TANH) {
            str2 = "TANH";
        }
        if (state.activation == nn.Activations.SIGMOID) {
            str2 = "SIGMOID";
        }
        var data = "learningRate=" + state.learningRate + "&activation=" + str2 + "&regularization=" + str + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    });
    regularRate.property("value", state.regularizationRate);
    var problem = d3.select("#problem").on("change", function () {
        state.problem = state_1.problems[this.value];
        var str;
        if (state.regularization == null) {
            str = "none";
        }
        if (state.regularization == nn.RegularizationFunction.L1) {
            str = "L1";
        }
        if (state.regularization == nn.RegularizationFunction.L2) {
            str = "L2";
        }
        var str2;
        if (state.activation == nn.Activations.RELU) {
            str2 = "RELU";
        }
        if (state.activation == nn.Activations.TANH) {
            str2 = "TANH";
        }
        if (state.activation == nn.Activations.SIGMOID) {
            str2 = "SIGMOID";
        }
        var data = "learningRate=" + state.learningRate + "&activation=" + str2 + "&regularization=" + str + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        generateData();
        drawDatasetThumbnails();
        parametersChanged = true;
        reset();
    });
    problem.property("value", state_1.getKeyFromValue(state_1.problems, state.problem));
    var x = d3.scale.linear().domain([-1, 1]).range([0, 144]);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickValues([-1, 0, 1])
        .tickFormat(d3.format("d"));
    d3.select("#colormap g.core").append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0,10)")
        .call(xAxis);
    window.addEventListener("resize", function () {
        var newWidth = document.querySelector("#main-part")
            .getBoundingClientRect().width;
        if (newWidth !== mainWidth) {
            mainWidth = newWidth;
            drawNetwork(network);
            updateUI(true);
        }
    });
    if (state.hideText) {
        d3.select("#article-text").style("display", "none");
        d3.select("div.more").style("display", "none");
        d3.select("header").style("display", "none");
    }
}
function updateBiasesUI(network) {
    nn.forEachNode(network, true, function (node) {
        d3.select("rect#bias-" + node.id).style("fill", colorScale(node.bias));
    });
    state.biases = true;
    var data = "dataset=" + djangoDataset + "&weights=" + state.weights + "&biases=" + state.biases;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://35.184.171.249/v1/settings/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
    xhr.send(data);
}
function updateWeightsUI(network, container) {
    for (var layerIdx = 1; layerIdx < network.length; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            for (var j = 0; j < node.inputLinks.length; j++) {
                var link = node.inputLinks[j];
                container.select("#link" + link.source.id + "-" + link.dest.id)
                    .style({
                    "stroke-dashoffset": -iter / 3,
                    "stroke-width": linkWidthScale(Math.abs(link.weight)),
                    "stroke": colorScale(link.weight)
                })
                    .datum(link);
            }
        }
    }
    state.weights = true;
    var data = "dataset=" + djangoDataset + "&weights=" + state.weights + "&biases=" + state.biases;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://35.184.171.249/v1/settings/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
    xhr.send(data);
}
function drawNode(cx, cy, nodeId, isInput, container, node) {
    var x = cx - RECT_SIZE / 2;
    var y = cy - RECT_SIZE / 2;
    var nodeGroup = container.append("g")
        .attr({
        "class": "node",
        "id": "node" + nodeId,
        "transform": "translate(" + x + "," + y + ")"
    });
    nodeGroup.append("rect")
        .attr({
        x: 0,
        y: 0,
        width: RECT_SIZE,
        height: RECT_SIZE
    });
    var activeOrNotClass = state[nodeId] ? "active" : "inactive";
    if (isInput) {
        var label = INPUTS[nodeId].label != null ?
            INPUTS[nodeId].label : nodeId;
        var text = nodeGroup.append("text").attr({
            "class": "main-label",
            x: -10,
            y: RECT_SIZE / 2, "text-anchor": "end"
        });
        if (/[_^]/.test(label)) {
            var myRe = /(.*?)([_^])(.)/g;
            var myArray = void 0;
            var lastIndex = void 0;
            while ((myArray = myRe.exec(label)) != null) {
                lastIndex = myRe.lastIndex;
                var prefix = myArray[1];
                var sep = myArray[2];
                var suffix = myArray[3];
                if (prefix) {
                    text.append("tspan").text(prefix);
                }
                text.append("tspan")
                    .attr("baseline-shift", sep === "_" ? "sub" : "super")
                    .style("font-size", "9px")
                    .text(suffix);
            }
            if (label.substring(lastIndex)) {
                text.append("tspan").text(label.substring(lastIndex));
            }
        }
        else {
            text.append("tspan").text(label);
        }
        nodeGroup.classed(activeOrNotClass, true);
    }
    if (!isInput) {
        nodeGroup.append("rect")
            .attr({
            id: "bias-" + nodeId,
            x: -BIAS_SIZE - 2,
            y: RECT_SIZE - BIAS_SIZE + 3,
            width: BIAS_SIZE,
            height: BIAS_SIZE
        }).on("mouseenter", function () {
            updateHoverCard(HoverType.BIAS, node, d3.mouse(container.node()));
        }).on("mouseleave", function () {
            updateHoverCard(null);
        });
    }
    var div = d3.select("#network").insert("div", ":first-child")
        .attr({
        "id": "canvas-" + nodeId,
        "class": "canvas"
    })
        .style({
        position: "absolute",
        left: x + 3 + "px",
        top: y + 3 + "px"
    })
        .on("mouseenter", function () {
        selectedNodeId = nodeId;
        div.classed("hovered", true);
        nodeGroup.classed("hovered", true);
        updateDecisionBoundary(network, false);
        heatMap.updateBackground(boundary[nodeId], state.discretize);
    })
        .on("mouseleave", function () {
        selectedNodeId = null;
        div.classed("hovered", false);
        nodeGroup.classed("hovered", false);
        updateDecisionBoundary(network, false);
        heatMap.updateBackground(boundary[nn.getOutputNode(network).id], state.discretize);
    });
    if (isInput) {
        div.on("click", function () {
            state[nodeId] = !state[nodeId];
            parametersChanged = true;
            reset();
        });
        div.style("cursor", "pointer");
    }
    if (isInput) {
        div.classed(activeOrNotClass, true);
    }
    var nodeHeatMap = new heatmap_1.HeatMap(RECT_SIZE, DENSITY / 10, xDomain, xDomain, div, { noSvg: true });
    div.datum({ heatmap: nodeHeatMap, id: nodeId });
}
function drawNetwork(network) {
    var svg = d3.select("#svg");
    svg.select("g.core").remove();
    d3.select("#network").selectAll("div.canvas").remove();
    d3.select("#network").selectAll("div.plus-minus-neurons").remove();
    var padding = 3;
    var co = d3.select(".column.output").node();
    var cf = d3.select(".column.features").node();
    var width = co.offsetLeft - cf.offsetLeft;
    svg.attr("width", width);
    var node2coord = {};
    var container = svg.append("g")
        .classed("core", true)
        .attr("transform", "translate(" + padding + "," + padding + ")");
    var numLayers = network.length;
    var featureWidth = 118;
    var layerScale = d3.scale.ordinal()
        .domain(d3.range(1, numLayers - 1))
        .rangePoints([featureWidth, width - RECT_SIZE], 0.7);
    var nodeIndexScale = function (nodeIndex) { return nodeIndex * (RECT_SIZE + 25); };
    var calloutThumb = d3.select(".callout.thumbnail").style("display", "none");
    var calloutWeights = d3.select(".callout.weights").style("display", "none");
    var idWithCallout = null;
    var targetIdWithCallout = null;
    var cx = RECT_SIZE / 2 + 50;
    var nodeIds = Object.keys(INPUTS);
    var maxY = nodeIndexScale(nodeIds.length);
    nodeIds.forEach(function (nodeId, i) {
        var cy = nodeIndexScale(i) + RECT_SIZE / 2;
        node2coord[nodeId] = { cx: cx, cy: cy };
        drawNode(cx, cy, nodeId, true, container);
    });
    for (var layerIdx = 1; layerIdx < numLayers - 1; layerIdx++) {
        var numNodes = network[layerIdx].length;
        var cx_1 = layerScale(layerIdx) + RECT_SIZE / 2;
        maxY = Math.max(maxY, nodeIndexScale(numNodes));
        addPlusMinusControl(layerScale(layerIdx), layerIdx);
        for (var i = 0; i < numNodes; i++) {
            var node_1 = network[layerIdx][i];
            var cy_1 = nodeIndexScale(i) + RECT_SIZE / 2;
            node2coord[node_1.id] = { cx: cx_1, cy: cy_1 };
            drawNode(cx_1, cy_1, node_1.id, false, container, node_1);
            var numNodes_1 = network[layerIdx].length;
            var nextNumNodes = network[layerIdx + 1].length;
            if (idWithCallout == null &&
                i === numNodes_1 - 1 &&
                nextNumNodes <= numNodes_1) {
                calloutThumb.style({
                    display: null,
                    top: 20 + 3 + cy_1 + "px",
                    left: cx_1 + "px"
                });
                idWithCallout = node_1.id;
            }
            for (var j = 0; j < node_1.inputLinks.length; j++) {
                var link = node_1.inputLinks[j];
                var path = drawLink(link, node2coord, network, container, j === 0, j, node_1.inputLinks.length).node();
                var prevLayer = network[layerIdx - 1];
                var lastNodePrevLayer = prevLayer[prevLayer.length - 1];
                if (targetIdWithCallout == null &&
                    i === numNodes_1 - 1 &&
                    link.source.id === lastNodePrevLayer.id &&
                    (link.source.id !== idWithCallout || numLayers <= 5) &&
                    link.dest.id !== idWithCallout &&
                    prevLayer.length >= numNodes_1) {
                    var midPoint = path.getPointAtLength(path.getTotalLength() * 0.7);
                    calloutWeights.style({
                        display: null,
                        top: midPoint.y + 5 + "px",
                        left: midPoint.x + 3 + "px"
                    });
                    targetIdWithCallout = link.dest.id;
                }
            }
        }
    }
    cx = width + RECT_SIZE / 2;
    var node = network[numLayers - 1][0];
    var cy = nodeIndexScale(0) + RECT_SIZE / 2;
    node2coord[node.id] = { cx: cx, cy: cy };
    for (var i = 0; i < node.inputLinks.length; i++) {
        var link = node.inputLinks[i];
        drawLink(link, node2coord, network, container, i === 0, i, node.inputLinks.length);
    }
    svg.attr("height", maxY);
    var height = Math.max(getRelativeHeight(calloutThumb), getRelativeHeight(calloutWeights), getRelativeHeight(d3.select("#network")));
    d3.select(".column.features").style("height", height + "px");
}
function getRelativeHeight(selection) {
    var node = selection.node();
    return node.offsetHeight + node.offsetTop;
}
function addPlusMinusControl(x, layerIdx) {
    var div = d3.select("#network").append("div")
        .classed("plus-minus-neurons", true)
        .style("left", x - 10 + "px");
    var i = layerIdx - 1;
    var firstRow = div.append("div").attr("class", "ui-numNodes" + layerIdx);
    firstRow.append("button")
        .attr("class", "mdl-button mdl-js-button mdl-button--icon")
        .on("click", function () {
        var numNeurons = state.networkShape[i];
        if (numNeurons >= 30) {
            return;
        }
        state.networkShape[i]++;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    })
        .append("i")
        .attr("class", "material-icons")
        .text("add");
    firstRow.append("button")
        .attr("class", "mdl-button mdl-js-button mdl-button--icon")
        .on("click", function () {
        var numNeurons = state.networkShape[i];
        if (numNeurons <= 1) {
            return;
        }
        state.networkShape[i]--;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                console.log(this.responseText);
            }
        };
        xhr.open("POST", "http://35.184.171.249/v1/state/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    })
        .append("i")
        .attr("class", "material-icons")
        .text("remove");
    var suffix = state.networkShape[i] > 1 ? "s" : "";
    div.append("div").text(state.networkShape[i] + " neuron" + suffix);
}
function updateHoverCard(type, nodeOrLink, coordinates) {
    var hovercard = d3.select("#hovercard");
    if (type == null) {
        hovercard.style("display", "none");
        d3.select("#svg").on("click", null);
        return;
    }
    d3.select("#svg").on("click", function () {
        hovercard.select(".value").style("display", "none");
        var input = hovercard.select("input");
        input.style("display", null);
        input.on("input", function () {
            if (this.value != null && this.value !== "") {
                if (type === HoverType.WEIGHT) {
                    nodeOrLink.weight = +this.value;
                }
                else {
                    nodeOrLink.bias = +this.value;
                }
                updateUI();
            }
        });
        input.on("keypress", function () {
            if (d3.event.keyCode === 13) {
                updateHoverCard(type, nodeOrLink, coordinates);
            }
        });
        input.node().focus();
    });
    var value = (type === HoverType.WEIGHT) ?
        nodeOrLink.weight :
        nodeOrLink.bias;
    var name = (type === HoverType.WEIGHT) ? "Weight" : "Bias";
    hovercard.style({
        "left": coordinates[0] + 20 + "px",
        "top": coordinates[1] + "px",
        "display": "block"
    });
    hovercard.select(".type").text(name);
    hovercard.select(".value")
        .style("display", null)
        .text(value.toPrecision(2));
    hovercard.select("input")
        .property("value", value.toPrecision(2))
        .style("display", "none");
}
function drawLink(input, node2coord, network, container, isFirst, index, length) {
    var line = container.insert("path", ":first-child");
    var source = node2coord[input.source.id];
    var dest = node2coord[input.dest.id];
    var datum = {
        source: {
            y: source.cx + RECT_SIZE / 2 + 2,
            x: source.cy
        },
        target: {
            y: dest.cx - RECT_SIZE / 2,
            x: dest.cy + ((index - (length - 1) / 2) / length) * 12
        }
    };
    var diagonal = d3.svg.diagonal().projection(function (d) { return [d.y, d.x]; });
    line.attr({
        "marker-start": "url(#markerArrow)",
        "class": "link",
        id: "link" + input.source.id + "-" + input.dest.id,
        d: diagonal(datum, 0)
    });
    container.append("path")
        .attr("d", diagonal(datum, 0))
        .attr("class", "link-hover")
        .on("mouseenter", function () {
        updateHoverCard(HoverType.WEIGHT, input, d3.mouse(this));
    }).on("mouseleave", function () {
        updateHoverCard(null);
    });
    return line;
}
function updateDecisionBoundary(network, firstTime) {
    if (firstTime) {
        boundary = {};
        nn.forEachNode(network, true, function (node) {
            boundary[node.id] = new Array(DENSITY);
        });
        for (var nodeId in INPUTS) {
            boundary[nodeId] = new Array(DENSITY);
        }
    }
    var xScale = d3.scale.linear().domain([0, DENSITY - 1]).range(xDomain);
    var yScale = d3.scale.linear().domain([DENSITY - 1, 0]).range(xDomain);
    var i = 0, j = 0;
    for (i = 0; i < DENSITY; i++) {
        if (firstTime) {
            nn.forEachNode(network, true, function (node) {
                boundary[node.id][i] = new Array(DENSITY);
            });
            for (var nodeId in INPUTS) {
                boundary[nodeId][i] = new Array(DENSITY);
            }
        }
        for (j = 0; j < DENSITY; j++) {
            var x = xScale(i);
            var y = yScale(j);
            var input = constructInput(x, y);
            nn.forwardProp(network, input);
            nn.forEachNode(network, true, function (node) {
                boundary[node.id][i][j] = node.output;
            });
            if (firstTime) {
                for (var nodeId in INPUTS) {
                    boundary[nodeId][i][j] = INPUTS[nodeId].f(x, y);
                }
            }
        }
    }
}
function getLoss(network, dataPoints) {
    var loss = 0;
    for (var i = 0; i < dataPoints.length; i++) {
        var dataPoint = dataPoints[i];
        var input = constructInput(dataPoint.x, dataPoint.y);
        var output = nn.forwardProp(network, input);
        loss += nn.Errors.SQUARE.error(output, dataPoint.label);
    }
    return loss / dataPoints.length;
}
function updateUI(firstStep) {
    if (firstStep === void 0) { firstStep = false; }
    updateWeightsUI(network, d3.select("g.core"));
    updateBiasesUI(network);
    updateDecisionBoundary(network, firstStep);
    var selectedId = selectedNodeId != null ?
        selectedNodeId : nn.getOutputNode(network).id;
    heatMap.updateBackground(boundary[selectedId], state.discretize);
    d3.select("#network").selectAll("div.canvas")
        .each(function (data) {
        data.heatmap.updateBackground(heatmap_1.reduceMatrix(boundary[data.id], 10), state.discretize);
    });
    function zeroPad(n) {
        var pad = "000000";
        return (pad + n).slice(-pad.length);
    }
    function addCommas(s) {
        return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function humanReadable(n) {
        return n.toFixed(3);
    }
    d3.select("#loss-train").text(humanReadable(lossTrain));
    d3.select("#loss-test").text(humanReadable(lossTest));
    d3.select("#iter-number").text(addCommas(zeroPad(iter)));
    lineChart.addDataPoint([lossTrain, lossTest]);
}
function constructInputIds() {
    var result = [];
    for (var inputName in INPUTS) {
        if (state[inputName]) {
            result.push(inputName);
        }
    }
    return result;
}
function constructInput(x, y) {
    var input = [];
    for (var inputName in INPUTS) {
        if (state[inputName]) {
            input.push(INPUTS[inputName].f(x, y));
        }
    }
    return input;
}
function oneStep() {
    iter++;
    trainData.forEach(function (point, i) {
        var input = constructInput(point.x, point.y);
        nn.forwardProp(network, input);
        nn.backProp(network, point.label, nn.Errors.SQUARE);
        if ((i + 1) % state.batchSize === 0) {
            nn.updateWeights(network, state.learningRate, state.regularizationRate);
        }
    });
    lossTrain = getLoss(network, trainData);
    lossTest = getLoss(network, testData);
    updateUI();
}
function getOutputWeights(network) {
    var weights = [];
    for (var layerIdx = 0; layerIdx < network.length - 1; layerIdx++) {
        var currentLayer = network[layerIdx];
        for (var i = 0; i < currentLayer.length; i++) {
            var node = currentLayer[i];
            for (var j = 0; j < node.outputs.length; j++) {
                var output = node.outputs[j];
                weights.push(output.weight);
            }
        }
    }
    return weights;
}
exports.getOutputWeights = getOutputWeights;
function toJson(onStartup) {
    if (onStartup === void 0) { onStartup = false; }
    var jsonObj = { "dataset": state.dataset, "newDataset": state.regDataset, "numHiddenLayers": state.numHiddenLayers,
        "networkShape": state.networkShape, "showTestData": state.showTestData, "discretize": state.discretize,
        "percTrainData": state.percTrainData, "noise": state.noise, "batchSize": state.batchSize,
        "activation": state.activation, "learningRate": state.learningRate, "regularization": state.regularization,
        "regularizationRate": state.regularizationRate, "problem": state.problem,
        "initZero": state.initZero, "tutorial": state.tutorial };
    return jsonObj;
}
;
function reset(onStartup) {
    if (onStartup === void 0) { onStartup = false; }
    lineChart.reset();
    state.serialize();
    if (!onStartup) {
        userHasInteracted();
    }
    player.pause();
    var suffix = state.numHiddenLayers !== 1 ? "s" : "";
    d3.select("#layers-label").text("Hidden layer" + suffix);
    d3.select("#num-layers").text(state.numHiddenLayers);
    iter = 0;
    var numInputs = constructInput(0, 0).length;
    var shape = [numInputs].concat(state.networkShape).concat([1]);
    var outputActivation = (state.problem === state_1.Problem.REGRESSION) ?
        nn.Activations.LINEAR : nn.Activations.TANH;
    network = nn.buildNetwork(shape, state.activation, outputActivation, state.regularization, constructInputIds(), state.initZero);
    lossTrain = getLoss(network, trainData);
    lossTest = getLoss(network, testData);
    drawNetwork(network);
    updateUI(true);
}
;
function initTutorial() {
    if (state.tutorial == null || state.tutorial === '' || state.hideText) {
        return;
    }
    d3.selectAll("article div.l--body").remove();
    var tutorial = d3.select("article").append("div")
        .attr("class", "l--body");
    d3.html("tutorials/" + state.tutorial + ".html", function (err, htmlFragment) {
        if (err) {
            throw err;
        }
        tutorial.node().appendChild(htmlFragment);
        var title = tutorial.select("title");
        if (title.size()) {
            d3.select("header h1").style({
                "margin-top": "20px",
                "margin-bottom": "20px"
            })
                .text(title.text());
            document.title = title.text();
        }
    });
}
function drawDatasetThumbnails() {
    function renderThumbnail(canvas, dataGenerator) {
        var w = 100;
        var h = 100;
        canvas.setAttribute("width", w);
        canvas.setAttribute("height", h);
        var context = canvas.getContext("2d");
        var data = dataGenerator(200, 0);
        data.forEach(function (d) {
            context.fillStyle = colorScale(d.label);
            context.fillRect(w * (d.x + 6) / 12, h * (d.y + 6) / 12, 4, 4);
        });
        d3.select(canvas.parentNode).style("display", null);
    }
    d3.selectAll(".dataset").style("display", "none");
    if (state.problem === state_1.Problem.CLASSIFICATION) {
        for (var dataset in state_1.datasets) {
            var canvas = document.querySelector("canvas[data-dataset=" + dataset + "]");
            var dataGenerator = state_1.datasets[dataset];
            renderThumbnail(canvas, dataGenerator);
        }
    }
    if (state.problem === state_1.Problem.REGRESSION) {
        for (var regDataset in state_1.regDatasets) {
            var canvas = document.querySelector("canvas[data-regDataset=" + regDataset + "]");
            var dataGenerator = state_1.regDatasets[regDataset];
            renderThumbnail(canvas, dataGenerator);
        }
    }
}
function hideControls() {
    var hiddenProps = state.getHiddenProps();
    hiddenProps.forEach(function (prop) {
        var controls = d3.selectAll(".ui-" + prop);
        if (controls.size() === 0) {
            console.warn("0 html elements found with class .ui-" + prop);
        }
        controls.style("display", "none");
    });
    var hideControls = d3.select(".hide-controls");
    HIDABLE_CONTROLS.forEach(function (_a) {
        var text = _a[0], id = _a[1];
        var label = hideControls.append("label")
            .attr("class", "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect");
        var input = label.append("input")
            .attr({
            type: "checkbox",
            "class": "mdl-checkbox__input"
        });
        if (hiddenProps.indexOf(id) === -1) {
            input.attr("checked", "true");
        }
        input.on("change", function () {
            state.setHideProperty(id, !this.checked);
            state.serialize();
            userHasInteracted();
            d3.select(".hide-controls-link")
                .attr("href", window.location.href);
        });
        label.append("span")
            .attr("class", "mdl-checkbox__label label")
            .text(text);
    });
    d3.select(".hide-controls-link")
        .attr("href", window.location.href);
}
function generateData(firstTime) {
    if (firstTime === void 0) { firstTime = false; }
    if (!firstTime) {
        state.seed = Math.random().toFixed(5);
        state.serialize();
        userHasInteracted();
    }
    Math.seedrandom(state.seed);
    var numSamples = (state.problem === state_1.Problem.REGRESSION) ?
        NUM_SAMPLES_REGRESS : NUM_SAMPLES_CLASSIFY;
    var generator = state.problem === state_1.Problem.CLASSIFICATION ?
        state.dataset : state.regDataset;
    var data = generator(numSamples, 0);
    dataset_1.shuffle(data);
    var splitIndex = Math.floor(data.length * state.percTrainData / 100);
    trainData = data.slice(0, splitIndex);
    testData = data.slice(splitIndex);
    heatMap.updatePoints(trainData);
    heatMap.updateTestPoints(state.showTestData ? testData : []);
}
var firstInteraction = true;
var parametersChanged = false;
function userHasInteracted() {
    if (!firstInteraction) {
        return;
    }
    firstInteraction = false;
    var page = 'index';
    if (state.tutorial != null && state.tutorial !== '') {
        page = "/v/tutorials/" + state.tutorial;
    }
    ga('set', 'page', page);
    ga('send', 'pageview', { 'sessionControl': 'start' });
}
function simulationStarted() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Starting Simulation',
        eventAction: parametersChanged ? 'changed' : 'unchanged',
        eventLabel: state.tutorial == null ? '' : state.tutorial
    });
    parametersChanged = false;
}
drawDatasetThumbnails();
initTutorial();
makeGUI();
generateData(true);
reset(true);
hideControls();

},{"./dataset":1,"./heatmap":2,"./linechart":3,"./nn":4,"./state":6}],6:[function(require,module,exports){
"use strict";
var nn = require("./nn");
var dataset = require("./dataset");
var HIDE_STATE_SUFFIX = "_hide";
exports.activations = {
    "relu": nn.Activations.RELU,
    "tanh": nn.Activations.TANH,
    "sigmoid": nn.Activations.SIGMOID
};
exports.regularizations = {
    "none": null,
    "L1": nn.RegularizationFunction.L1,
    "L2": nn.RegularizationFunction.L2
};
exports.datasets = {
    "fm_mutations_independent": dataset.classifyFmMutationsIndependent,
    "fm_sample_independent": dataset.classifyFmSampleIndependent,
    "top10000LungMel": dataset.classifytop10000LungMel,
    "top1000LungMel": dataset.classifytop1000LungMel,
    "top100LungMel": dataset.classifytop100LungMel,
    "top10LungMel": dataset.classifytop10LungMel
};
exports.regDatasets = {
    "fm_sample_independent": dataset.regressFmSampleIndependent,
    "fm_mutations_independent": dataset.regressFmMutationsIndependent,
    "top10000LungMel": dataset.regresstop10000LungMel,
    "top1000LungMel": dataset.regresstop1000LungMel,
    "top100LungMel": dataset.regresstop100LungMel,
    "top10LungMel": dataset.regresstop10LungMel
};
function getKeyFromValue(obj, value) {
    for (var key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return undefined;
}
exports.getKeyFromValue = getKeyFromValue;
function endsWith(s, suffix) {
    return s.substr(-suffix.length) === suffix;
}
function getHideProps(obj) {
    var result = [];
    for (var prop in obj) {
        if (endsWith(prop, HIDE_STATE_SUFFIX)) {
            result.push(prop);
        }
    }
    return result;
}
var Type;
(function (Type) {
    Type[Type["STRING"] = 0] = "STRING";
    Type[Type["NUMBER"] = 1] = "NUMBER";
    Type[Type["ARRAY_NUMBER"] = 2] = "ARRAY_NUMBER";
    Type[Type["ARRAY_STRING"] = 3] = "ARRAY_STRING";
    Type[Type["BOOLEAN"] = 4] = "BOOLEAN";
    Type[Type["OBJECT"] = 5] = "OBJECT";
})(Type = exports.Type || (exports.Type = {}));
var Problem;
(function (Problem) {
    Problem[Problem["CLASSIFICATION"] = 0] = "CLASSIFICATION";
    Problem[Problem["REGRESSION"] = 1] = "REGRESSION";
})(Problem = exports.Problem || (exports.Problem = {}));
exports.problems = {
    "classification": Problem.CLASSIFICATION,
    "regression": Problem.REGRESSION
};
;
var State = (function () {
    function State() {
        this.learningRate = 0.1;
        this.regularizationRate = 0;
        this.showTestData = false;
        this.noise = 2;
        this.batchSize = 10;
        this.discretize = false;
        this.tutorial = null;
        this.percTrainData = 50;
        this.activation = nn.Activations.RELU;
        this.regularization = null;
        this.problem = Problem.CLASSIFICATION;
        this.isPlaying = false;
        this.initZero = false;
        this.hideText = false;
        this.collectStates = false;
        this.numHiddenLayers = 5;
        this.hiddenLayerControls = [];
        this.networkShape = [10, 10, 10, 10, 10];
        this._5A = false;
        this._5C = false;
        this._5G = false;
        this._5T = false;
        this._CA = true;
        this._CG = true;
        this._CT = true;
        this._TA = true;
        this._TC = true;
        this._TG = true;
        this._3A = false;
        this._3C = false;
        this._3G = false;
        this._3T = false;
        this.dataset = dataset.classifyXORData;
        this.regDataset = dataset.regressPlane;
        this.weights = false;
        this.biases = false;
    }
    State.deserializeState = function () {
        var map = {};
        for (var _i = 0, _a = window.location.hash.slice(1).split("&"); _i < _a.length; _i++) {
            var keyvalue = _a[_i];
            var _b = keyvalue.split("="), name_1 = _b[0], value = _b[1];
            map[name_1] = value;
        }
        var state = new State();
        function hasKey(name) {
            return name in map && map[name] != null && map[name].trim() !== "";
        }
        function parseArray(value) {
            return value.trim() === "" ? [] : value.split(",");
        }
        State.PROPS.forEach(function (_a) {
            var name = _a.name, type = _a.type, keyMap = _a.keyMap;
            switch (type) {
                case Type.OBJECT:
                    if (keyMap == null) {
                        throw Error("A key-value map must be provided for state " +
                            "variables of type Object");
                    }
                    if (hasKey(name) && map[name] in keyMap) {
                        state[name] = keyMap[map[name]];
                    }
                    break;
                case Type.NUMBER:
                    if (hasKey(name)) {
                        state[name] = +map[name];
                    }
                    break;
                case Type.STRING:
                    if (hasKey(name)) {
                        state[name] = map[name];
                    }
                    break;
                case Type.BOOLEAN:
                    if (hasKey(name)) {
                        state[name] = (map[name] === "false" ? false : true);
                    }
                    break;
                case Type.ARRAY_NUMBER:
                    if (name in map) {
                        state[name] = parseArray(map[name]).map(Number);
                    }
                    break;
                case Type.ARRAY_STRING:
                    if (name in map) {
                        state[name] = parseArray(map[name]);
                    }
                    break;
                default:
                    throw Error("Encountered an unknown type for a state variable");
            }
        });
        getHideProps(map).forEach(function (prop) {
            state[prop] = (map[prop] === "true") ? true : false;
        });
        state.numHiddenLayers = state.networkShape.length;
        if (state.seed == null) {
            state.seed = Math.random().toFixed(5);
        }
        Math.seedrandom(state.seed);
        return state;
    };
    State.prototype.serialize = function () {
        var _this = this;
        var props = [];
        State.PROPS.forEach(function (_a) {
            var name = _a.name, type = _a.type, keyMap = _a.keyMap;
            var value = _this[name];
            if (value == null) {
                return;
            }
            if (type === Type.OBJECT) {
                value = getKeyFromValue(keyMap, value);
            }
            else if (type === Type.ARRAY_NUMBER ||
                type === Type.ARRAY_STRING) {
                value = value.join(",");
            }
            props.push(name + "=" + value);
        });
        getHideProps(this).forEach(function (prop) {
            props.push(prop + "=" + _this[prop]);
        });
        window.location.hash = props.join("&");
    };
    State.prototype.getHiddenProps = function () {
        var result = [];
        for (var prop in this) {
            if (endsWith(prop, HIDE_STATE_SUFFIX) && String(this[prop]) === "true") {
                result.push(prop.replace(HIDE_STATE_SUFFIX, ""));
            }
        }
        return result;
    };
    State.prototype.setHideProperty = function (name, hidden) {
        this[name + HIDE_STATE_SUFFIX] = hidden;
    };
    return State;
}());
State.PROPS = [
    { name: "isPlaying", type: Type.BOOLEAN },
    { name: "activation", type: Type.OBJECT, keyMap: exports.activations },
    { name: "regularization", type: Type.OBJECT, keyMap: exports.regularizations },
    { name: "batchSize", type: Type.NUMBER },
    { name: "dataset", type: Type.OBJECT, keyMap: exports.datasets },
    { name: "regDataset", type: Type.OBJECT, keyMap: exports.regDatasets },
    { name: "learningRate", type: Type.NUMBER },
    { name: "regularizationRate", type: Type.NUMBER },
    { name: "noise", type: Type.NUMBER },
    { name: "networkShape", type: Type.ARRAY_NUMBER },
    { name: "seed", type: Type.STRING },
    { name: "showTestData", type: Type.BOOLEAN },
    { name: "discretize", type: Type.BOOLEAN },
    { name: "percTrainData", type: Type.NUMBER },
    { name: "_5A", type: Type.BOOLEAN },
    { name: "_5C", type: Type.BOOLEAN },
    { name: "_5G", type: Type.BOOLEAN },
    { name: "_5T", type: Type.BOOLEAN },
    { name: "_CA", type: Type.BOOLEAN },
    { name: "_CG", type: Type.BOOLEAN },
    { name: "_CT", type: Type.BOOLEAN },
    { name: "_TA", type: Type.BOOLEAN },
    { name: "_TC", type: Type.BOOLEAN },
    { name: "_TG", type: Type.BOOLEAN },
    { name: "_3A", type: Type.BOOLEAN },
    { name: "_3C", type: Type.BOOLEAN },
    { name: "_3G", type: Type.BOOLEAN },
    { name: "_3T", type: Type.BOOLEAN },
    { name: "collectStats", type: Type.BOOLEAN },
    { name: "tutorial", type: Type.STRING },
    { name: "problem", type: Type.OBJECT, keyMap: exports.problems },
    { name: "initZero", type: Type.BOOLEAN },
    { name: "hideText", type: Type.BOOLEAN },
    { name: "weights", type: Type.BOOLEAN },
    { name: "biases", type: Type.BOOLEAN },
];
exports.State = State;

},{"./dataset":1,"./nn":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YXNldC50cyIsInNyYy9oZWF0bWFwLnRzIiwic3JjL2xpbmVjaGFydC50cyIsInNyYy9ubi50cyIsInNyYy9wbGF5Z3JvdW5kLnRzIiwic3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ2tDQSxpQkFBd0IsS0FBWTtJQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBRW5CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUU1QyxPQUFPLEVBQUUsQ0FBQztRQUVWLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUM7QUFJRCx3Q0FBK0MsVUFBa0IsRUFBRSxLQUFhO0lBRTlFLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7SUFFN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQywyQkFBMkIsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMseUJBQXlCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFB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QyxFQUFDLENBQUMsQ0FBQztJQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLDJCQUEyQixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx5QkFBeUIsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFB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LEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFF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LEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsZ0JBQVEsRUFBQztJQUN0RCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDdEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ3RDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNyQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7Q0FDckMsQ0FBQztBQXJDUyxzQkFBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4vKipcbiAqIEEgdHdvIGRpbWVuc2lvbmFsIGV4YW1wbGU6IHggYW5kIHkgY29vcmRpbmF0ZXMgd2l0aCB0aGUgbGFiZWwuXG4gKi9cbmV4cG9ydCB0eXBlIEV4YW1wbGUyRCA9IHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIGxhYmVsOiBudW1iZXJcbn07XG5cbnR5cGUgUG9pbnQgPSB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyXG59O1xuXG5cbi8qKlxuICogU2h1ZmZsZXMgdGhlIGFycmF5IHVzaW5nIEZpc2hlci1ZYXRlcyBhbGdvcml0aG0uIFVzZXMgdGhlIHNlZWRyYW5kb21cbiAqIGxpYnJhcnkgYXMgdGhlIHJhbmRvbSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlKGFycmF5OiBhbnlbXSk6IHZvaWQge1xuICBsZXQgY291bnRlciA9IGFycmF5Lmxlbmd0aDtcbiAgbGV0IHRlbXAgPSAwO1xuICBsZXQgaW5kZXggPSAwO1xuICAvLyBXaGlsZSB0aGVyZSBhcmUgZWxlbWVudHMgaW4gdGhlIGFycmF5XG4gIHdoaWxlIChjb3VudGVyID4gMCkge1xuICAgIC8vIFBpY2sgYSByYW5kb20gaW5kZXhcbiAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvdW50ZXIpO1xuICAgIC8vIERlY3JlYXNlIGNvdW50ZXIgYnkgMVxuICAgIGNvdW50ZXItLTtcbiAgICAvLyBBbmQgc3dhcCB0aGUgbGFzdCBlbGVtZW50IHdpdGggaXRcbiAgICB0ZW1wID0gYXJyYXlbY291bnRlcl07XG4gICAgYXJyYXlbY291bnRlcl0gPSBhcnJheVtpbmRleF07XG4gICAgYXJyYXlbaW5kZXhdID0gdGVtcDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEYXRhR2VuZXJhdG9yID0gKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcikgPT4gRXhhbXBsZTJEW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZtTXV0YXRpb25zSW5kZXBlbmRlbnQobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG4gIFxuICBwb2ludHMucHVzaCh7eDoyLCB5OjIsIGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MjMyLjkyNTkwMTI2Mjc3MTg3MzIseTotNjUuNjQzMTM2ODYyOTE4Mzk2NDUsIGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MjIzLjU4NDk0MTY4NDk1NjczMTkseTotNjYuODEwNTcwMzUwNDE5Njk1MjcsIGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6NC42MzIwMDkyMzk1NjEzNTI4NDJlKzAxLHk6LTEuMDI5NzAzNTI2OTUyNDkyMDQxZSswMiwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotMS45OTU4NzQxODM3NjQ2Mjg5MjRlKzAyLHk6LTIuNTIwNzkxMDEwMTkwODM5MzU5ZSswMiwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjEzMDY0NDY4ODg5MzE0NDY4OWUrMDIseTotMy44NTY0NjYzODEyMjU0MzgwNTZlKzAxLCBsYWJlbDoxfSk7ICAgIFxuICBwb2ludHMucHVzaCh7eDoyLjE3NzgyOTY3NTEyODExNzIzMWUrMDIseTotNC4yMjAzNzQ2NTA5NDc2Nzg2NzRlKzAxLCBsYWJlbDoxfSk7ICAgIFxuICBwb2ludHMucHVzaCh7eDotNS4zODY2ODc0Njg0NzkyNDU4MDhlKzAyLHk6LTQuNTQzOTcwNDY5MDc5NzE1NzEzZSswMiwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjM0NjQ2MjgyODc0Nzk2ODEwM2UrMDIseTotNC4wMzQ4NDY1NDM1MzYyOTg5MjRlKzAxLCBsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi01Ljc2OTY4NzYxNTM5MjUxODg2NWUrMDIseTotNC4wMzgyNDkzOTAwNjQ4NTUyMjBlKzAyLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4zMDQyMzUxNzQ3NzYwNDkxNzhlKzAyLHk6LTMuMTgzNjU3MTUzMDE2NDUzMDIzZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTg3MDM2NzgyMzMzNDI3MTQxZSswMix5Oi03LjE1ODA3MjY1OTE0MDM2NzQ3N2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI3OTE5NDMwNDg5OTI1NTg4M2UrMDIseTotMy41NDEyNjk1MzUzMjk5NDk3NDdlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xNjMxNDM4NDE2Mzc2ODk0OTFlKzAyLHk6LTYuMjgxMzYyMjE2ODIwOTg0NjU2ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjYzMDY3NDQxMzQ4ODQ2Mzg3ZSswMix5Oi00LjAyOTExMzI4NzEzNjI1MTM4N2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI4ODYxMjg0Njg1ODQ3MjM4MWUrMDIseTotNS43NDA0MTczODQ2ODMwMjQ2OTNlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xODYyMjI2ODYzMDMxODA3NTFlKzAyLHk6LTQuMTAyNzA4NDQwNzgzNjMxMjYxZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzcxMDQ5ODg0MTgyNzA2NjQ5ZSswMix5Oi01LjczNTY4NDY4NzE0MDgxNjYwN2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI3MTQzNDQ0MDA4MzIzMjI4OWUrMDIseTotMy40OTk5MTQyMjM1NjY0NjcwODZlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xOTA1MDA2ODk3OTQ4NzQwNjNlKzAyLHk6LTcuMTU1MTc1OTA5ODE3ODU3ODcxZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjU3ODUyOTk3OTg2NDY2MzM1ZSswMix5Oi0yLjc5MTI5MTUyNTIwMzY5NDU5MGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNi4wMDA3MzU1OTc1MDIzNzEwOTNlKzAyLHk6LTMuNTI0NTM4NTU2MDQwODU0NDczZSswMixsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzc3NjI3NDU4MzQxNzkzNTU2ZSswMix5Oi0zLjkwNzI5ODIyNjAxNTkxMjIzNWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjM4MDU5Njg3MzA0MTEzNjgwM2UrMDIseTotMi4wNzA0MzQyNjM2MDQxMDIyOThlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTQuNzA5MDgzODY0ODUzODc0OTU3ZSswMix5Oi00Ljc5NzM4NTE4NzcyNzI1MzQyNGUrMDIsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI2MjIwNzMxNjgxNzg3NTI2N2UrMDIseTotMy44MjI4Njc0NDkwNDA3NDQ5NThlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMjc2MzYxMjE0NTA4OTE1NTFlKzAyLHk6LTQuMTEzMzkxMzA2NDQyNTk5NjcxZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjgwNjcyOTY0NDM1NjU4MjMwZSswMix5Oi0yLjUyNjMzMjAyNzMwNjU0NzgwMWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjMzODQ4ODEzMzMyNTE4MjMzMmUrMDIseTotNi4yMTc5MzEyMjY4MzY4MzIwODJlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4zMTA0MzAzNTIyMzMyMTg1MTRlKzAyLHk6LTcuNDE3MDEyMzIyMjA4MDU3NjQwZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi01Ljg0MDk4NjMwNzUzNTM3MTIyNWUrMDIseTotNC4zMDQ0MTc0ODEwNTYzMzYyMTRlKzAyLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4wMjIwMjE4NjI3NDUwNTI2NThlKzAyLHk6LTMuOTEyODkzNjg4NTM1NDU3NjcwZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMDgwMjc0NzQwMzk0ODUyMTMxZSswMix5Oi02Ljk2MDA5MjI4Mzg4MTU0MjEzMGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNS41NDIyMzMxMzc3MDg5MTc2MzllKzAyLHk6LTQuOTA4NDUyNjg1Njk0MTk1NDUyZSswMixsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi01LjI2MDUyNzQ3NDk5OTA0NTEyNmUrMDIseTotNC41NjM3NjAwNDE4MDg3ODE2OTNlKzAyLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMTEzMDkwMTM0MDU1MjcyNTNlKzAyLHk6LTMuNjEzMzY3MzUzMDY1NDAyMTk5ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjg1MDM2Nzc0NzQ5NDAwMTk1ZSswMix5Oi0zLjE0MDUzNTM1NDkxNzg2NDkwOGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI2MzU0MzE0MzI0MzA0MzQwM2UrMDIseTotNS40NzgyMjAyMjM1NTM3Mjc2NjRlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS41ODc4NTY3NzUzMjA5NDA5ODNlKzAyLHk6LTcuMDI5NDE1NDEyNTgzNzA5NjEwZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTUwNTY0NTExOTE0NzUyMTg4ZSswMix5Oi00LjU3MjkzOTI3ODIyMDEwNjcyOWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI0NDcxMzMyMDkyNzIwNTAxOGUrMDIseTotNC42NzA2MDQ5MTM4NjUzMzkxMTRlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNjIwMzQzNjc4NzU3MjUxMzhlKzAyLHk6LTQuMTU2MDUyNjM0MjczNDE3ODIzZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjk1NzE5NjEzMTk3NDA4NjQ4ZSswMix5Oi03LjA0MDkzMzYyMTIxMDU3MjgyNGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjYwMDAzMjM2MDczMTAwMjE2Mjg3OWUrMDIseToxLjI1Njk5OTQ4Mjc2NjU5ODM5MWUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMTkyODkzNjQxOTg3MjUzNjU5ZSswMix5OjIuMjkwMTc0Nzc0MTI2MTk5MTExZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjc1NTMyOTY0NTg4NzI4NTg5MmUrMDIseToxLjA5NTY4NDc3MzUyMTI5ODc1MmUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMDk0MjI0NTk4MjIzODIwNTJlKzAyLHk6LTIuMzUwNzY2MTQ5NzMzMzg4NDg4ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjQwNDcyNzMwMzU2MTYzMDU0OWUrMDIseToxLjQ1MzQ2ODE0NDc2MzY0MzI5NWUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNjQ0MTc1OTA0MDgwOTU1Nzc1ZSswMix5OjIuMDM4MjEwMzMyNTQzMDk5ODEwZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjI2MjU1ODE3NDgyNzI4NTMxM2UrMDIseToxLjUwNjIwNTg0MzgyNjk3NTAxM2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNzk0Mjg5MTIzODg0NDk4NzM2ZSswMix5OjIuNDUyNTYwNjk0NDYwMTE3MDc3ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNi44OTkxMDI1MTY0OTI0MzgzMjZlKzAyLHk6LTEuNjU4NjI2MDA2Nzg5MTcwMzMzZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjkzOTgyOTk0NTQzMTMxMzgzMWUrMDIseTo4LjE3MzM4NzgxMDIyMDcwNTc3NGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTYuMDcxODQxMDA0MjM5NDQ5MDM0N2UrMDIseTozLjQ2MDA0MTQ3NjcwMTg0ODYzN2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6OS45NTEwODc5NTQ5NTYzODk1ODFlKzAxLHk6MS42NTAxMjA3ODE2MTExMDQ1MTllKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjkyOTUzOTMwNjYyOTU1NTk5ZSswMix5Oi0yLjcxMTEyMzIwOTY3MTI2NDA3OGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMTU3NDcxMjI3Njc4MjkxODNlKzAyLHk6LTEuNjAyNDA5Mzc4OTY1MjUyNTI5ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI0NDQ1MDgzNTcyNjM4OTM1N2UrMDIseTotMi4yMTA5OTM1MjYwNDQ5NzczODZlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNDE2MzIyODAxMTQwNDc0MzI2ZSswMix5OjEuNDQyMjI0NjEyOTc5MTM3ODE3ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjExNzI4OTExMjI2MzIwODA0MGUrMDIseToyLjc0ODI5NTY5NTAxOTE4MzA3MWUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNzE0MzQwMjIxMTk5MTQ1NzMxZSswMix5OjIuMDc2NTI3NDk2ODM4OTQ1NDEwZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjE2Mzc4MDY4Mzk0Nzg1NDAxNmUrMDIseTotNS4zNjI0NTU5NjI1OTA4OTgyOTVlKzAwLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuODQxOTI2NDAzMDMyMTY3MDU5ZSswMix5OjkuNjMxOTE0ODUyMTkwODY3MjkzZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI1NjEyMjM0ODI0OTA0MTA2N2UrMDIseTotMy4xOTA3Nzk5MjY0MzQ3MzM5MzdlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzAzMzUyMTg3OTEwNzM3NDI4ZSswMix5Oi0yLjE3NTU3MDg4NzgyNzY3NjM1OGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS4xNjQ2MTgzMjQwMjE1ODk0NzNlKzAyLHk6MS41NjkzMDU4MTc0MDI1NTEyMTNlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTkwOTMyODE1NzEyNjM3NTkxZSswMix5OjIuNDMxOTY5MTQ3MDA2NDY5MDAxZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotMy43MjgyNDM1NjU4NzE4NTg4OTFlKzAyLHk6Mi4yNzIzOTQxNzIwNjA2ODExMTVlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0zLjg4OTk5MTA0MDMwMjQwNTE2N2UrMDIseToyLjcyMTU5MDIzMTczNzI0MzM1N2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuMjM4NTgyNTQ5ODg3NTU5MDI2ZSswMix5OjMuMzI2NTQyODA5MTE5ODgzNTE1ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotOC4yODE4ODI5NzAwMzMwMTQ5OTllKzAyLHk6OS4xOTMwNjEwMzE4NDEzMDE2NTZlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMDI1MzU2MDYwNzk4MzM3NDEwZSswMix5OjYuNjQ2NjU3MjgzNjMwOTczNzIzZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjA1MDc0Mzc3ODg2Mzk4MTk1OWUrMDIseTo2LjEyNzU3NjUwODA0OTgxMzk1M2UrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMjkxMzQ3ODAzMjEyNzYwMjU1ZSswMix5OjMuMzQyMzIxNzQ3MzAzODI0OTY0ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIyNDc0MzgxMDgzNjUyMTYxOGUrMDIseTotMi41NDY2MjU5OTY5MjA0MDI4MTJlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuOTgyMDc2OTc4NzYxOTc3MjczZSswMix5OjcuMDA4NzE5MjczMDYxMDQ1Mzg1ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotMi45OTExMDM1MTE1NDk4OTMwMjhlKzAyLHk6LTYuNzM0MzU5MjkzMDc3Mjg4NTU1ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNi44MzU5NTY2NjEwNjY5MzY3MDRlKzAyLHk6LTIuMDIzNTk4MzkzMDUwNTAwMDIyZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjAwNDc1NTczNDg0MTYwNDYzNWUrMDIseTo2LjgzMzI4NTg5MTUxODY3NzYwMmUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMDc4OTkyMzU5MTY5MjkxMTVlKzAyLHk6LTEuNDA0OTQwMzUwMzg3MDIyNzE4ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIwMTUxNDcxNDczODk0NTU5OWUrMDIseTotMi4yMzI3MDM1NDYwMzk5OTcyNzhlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTc0NTg3NDI2NjM5Nzg1MTIyZSswMix5OjQuNzc1Mzg3NjYzNzcyMjA0NTgzZSswMCxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjcwODE3NDk3MzQzMDYxNTE4MmUrMDIseToxLjE2ODE1Mzg0MTU5ODkwMDU4NGUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNzg2NDU2NDUyMjIzMDg3MDEyZSswMix5OjIuNTE3MzAyOTIzNjQ4MTgyNjg0ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIzODc5NjU2ODYzNjYyNTc1MGUrMDIseTotMi42MjUyNzMwNTg3MzM1Mjc1MjBlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0zLjU2MzU5MzY0MTg1MjUwMjI4N2UrMDIseToxLjMxMDExNTkzNjczNTcwMDc1N2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xMjM1NDU5NDczMDg3MjQ2MzVlKzAyLHk6My4xNzc5ODgzMzk2Njk5MDY2MzdlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjQuMjA1MzkwMDIzNzEwODYxNDE0ZSswMSx5Oi03LjQ0Njg5OTk5NTIwNjU4MTQ4MGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS43MzYwNzMzNTU2NTAzNDEwNTdlKzAyLHk6MS4xMzc3MjU2Mzg1NjM2OTE0NjJlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTk5OTEyODE0Njg2MTM2OTI2ZSswMix5Oi02LjY0MTM3MjE3NTE3MjMxNzE0OWUrMDAsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNTcwMzkwMzQ5NDc2NjA4MDllKzAyLHk6LTIuOTE2NTI1NjU3NjUyNzg4NDM5ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNy4zMzk5ODQ3MTM4ODgwMDc5NDZlKzAyLHk6Ni4wMTQ1NjU0MzgwNzYxODI2MDJlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNjU4ODQ2NzM1NTAyMDI3OTExZSswMix5OjEuMjE4NjIyMTQ4OTA5MzczNjY0ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI2NDY4NzAwNDA2MzI2NDkwOGUrMDIseTotMy44NDg0OTkxMjg0OTI5MDg3MzllKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNzExNDEzOTI5MDE0MDU3MzczZSswMix5OjEuMTI2NDE2OTI1NzAyMTQ0ODgwZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjE5MjUyMzU0NTYzMzk2MTgxN2UrMDIseTotMS4yMDMyNzI0MTQzNTA0NTM5NzhlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi03LjEwMTA5Mzk1NDQyMjkwMTc4OGUrMDIseToyLjU1OTg5MTA2MzIxODUxNzIxOGUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS43MTgwNTE4MjE5ODA5NTUzNjdlKzAyLHk6MS4xMzg2MDg4OTM0Njg3Mjg2NjdlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNjA0MjM2MjU0OTMxMDIyMDc0ZSswMix5OjEuMTk0Nzg0MTI1NDM2MzE5MzI5ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotMy41NjUxNjYzNzk2MDYwODk4OTBlKzAyLHk6MS41NzA5ODQxODEzMTgzNzQzNDBlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTU4MTU1NjQzNDc2ODg1NjQzZSswMix5Oi0xLjMxMTExNTA4NDA0MDY0MjU2NGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMTE1Mjg1MzU3MDE5MzgwMzk5ZSswMix5OjIuNzcxNjQ2NTM1OTI3MDQyNjkyZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjExNzc5Mzc2NDgxOTE2MDQ1OGUrMDIseTotNS4wNjkwNDM1NDYzODYwOTYxMTFlKzAwLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjY5Mjk1NjM3MzgwMTUzNjA3ZSswMix5Oi0zLjUyMTYwMjE0ODYzNzYxOTIyM2UrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS45OTE0Nzc3NzgzNjk5NzE5MjllKzAyLHk6Ni4zNDQwOTM4OTA5MDQ5ODkwNTNlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuODM2NzI1NzcxMjM1MjE5ODk1ZSswMix5OjEuMDA3MDQ2MzU3NjA4NjkyNTE3ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNy4xODIwNDI1NTY1NjQ1OTM5NTFlKzAyLHk6Mi40ODMxODkxMDM2OTQ5MTczMjFlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi03LjMzNzk3MDI4MTQ1NzE5NzY0M2UrMDIseTo3LjM3NjkzNDAyNzQ3OTQzNTk0MGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMjUzNTU1NDgzMTg1OTY1NjEzZSswMix5OjEuOTU4NDM2OTU2NzMzOTM2ODI1ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIyNTE3NjAyOTkzOTU2OTU2MGUrMDIseTotMS4zODk0MTIyOTQzMjE5MjkyMzFlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjMzOTc2MDY2MzU0MzM1MDQ2ZSswMix5Oi0xLjg0ODA1MTU4NTc2MTU4MDk5NWUrMDEsbGFiZWw6LTF9KTtcblxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZtU2FtcGxlSW5kZXBlbmRlbnQobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuRm1TYW1wbGVJbmRlcGVuZGVudCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnl0b3AxMDAwMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuQ2xhc3NpZnlUb3AxMDAwMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnl0b3AxMDAwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5DbGFzc2lmeVRvcDEwMDAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5dG9wMTAwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5DbGFzc2lmeVRvcDEwMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnl0b3AxMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuQ2xhc3NpZnlUb3AxMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NGbU11dGF0aW9uc0luZGVwZW5kZW50KG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIHBvaW50cy5wdXNoKHt4OjIsIHk6MiwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyMzIuOTI1OTAxMjYyNzcxODczMix5Oi02NS42NDMxMzY4NjI5MTgzOTY0NSwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyMjMuNTg0OTQxNjg0OTU2NzMxOSx5Oi02Ni44MTA1NzAzNTA0MTk2OTUyNywgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDo0LjYzMjAwOTIzOTU2MTM1Mjg0MmUrMDEseTotMS4wMjk3MDM1MjY5NTI0OTIwNDFlKzAyLCBsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0xLjk5NTg3NDE4Mzc2NDYyODkyNGUrMDIseTotMi41MjA3OTEwMTAxOTA4MzkzNTllKzAyLCBsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTMwNjQ0Njg4ODkzMTQ0Njg5ZSswMix5Oi0zLjg1NjQ2NjM4MTIyNTQzODA1NmUrMDEsIGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xNzc4Mjk2NzUxMjgxMTcyMzFlKzAyLHk6LTQuMjIwMzc0NjUwOTQ3Njc4Njc0ZSswMSwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNS4zODY2ODc0Njg0NzkyNDU4MDhlKzAyLHk6LTQuNTQzOTcwNDY5MDc5NzE1NzEzZSswMiwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjM0NjQ2MjgyODc0Nzk2ODEwM2UrMDIseTotNC4wMzQ4NDY1NDM1MzYyOTg5MjRlKzAxLCBsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi01Ljc2OTY4NzYxNTM5MjUxODg2NWUrMDIseTotNC4wMzgyNDkzOTAwNjQ4NTUyMjBlKzAyLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4zMDQyMzUxNzQ3NzYwNDkxNzhlKzAyLHk6LTMuMTgzNjU3MTUzMDE2NDUzMDIzZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTg3MDM2NzgyMzMzNDI3MTQxZSswMix5Oi03LjE1ODA3MjY1OTE0MDM2NzQ3N2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI3OTE5NDMwNDg5OTI1NTg4M2UrMDIseTotMy41NDEyNjk1MzUzMjk5NDk3NDdlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xNjMxNDM4NDE2Mzc2ODk0OTFlKzAyLHk6LTYuMjgxMzYyMjE2ODIwOTg0NjU2ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjYzMDY3NDQxMzQ4ODQ2Mzg3ZSswMix5Oi00LjAyOTExMzI4NzEzNjI1MTM4N2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI4ODYxMjg0Njg1ODQ3MjM4MWUrMDIseTotNS43NDA0MTczODQ2ODMwMjQ2OTNlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xODYyMjI2ODYzMDMxODA3NTFlKzAyLHk6LTQuMTAyNzA4NDQwNzgzNjMxMjYxZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzcxMDQ5ODg0MTgyNzA2NjQ5ZSswMix5Oi01LjczNTY4NDY4NzE0MDgxNjYwN2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI3MTQzNDQ0MDA4MzIzMjI4OWUrMDIseTotMy40OTk5MTQyMjM1NjY0NjcwODZlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xOTA1MDA2ODk3OTQ4NzQwNjNlKzAyLHk6LTcuMTU1MTc1OTA5ODE3ODU3ODcxZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjU3ODUyOTk3OTg2NDY2MzM1ZSswMix5Oi0yLjc5MTI5MTUyNTIwMzY5NDU5MGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNi4wMDA3MzU1OTc1MDIzNzEwOTNlKzAyLHk6LTMuNTI0NTM4NTU2MDQwODU0NDczZSswMixsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzc3NjI3NDU4MzQxNzkzNTU2ZSswMix5Oi0zLjkwNzI5ODIyNjAxNTkxMjIzNWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjM4MDU5Njg3MzA0MTEzNjgwM2UrMDIseTotMi4wNzA0MzQyNjM2MDQxMDIyOThlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTQuNzA5MDgzODY0ODUzODc0OTU3ZSswMix5Oi00Ljc5NzM4NTE4NzcyNzI1MzQyNGUrMDIsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI2MjIwNzMxNjgxNzg3NTI2N2UrMDIseTotMy44MjI4Njc0NDkwNDA3NDQ5NThlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMjc2MzYxMjE0NTA4OTE1NTFlKzAyLHk6LTQuMTEzMzkxMzA2NDQyNTk5NjcxZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjgwNjcyOTY0NDM1NjU4MjMwZSswMix5Oi0yLjUyNjMzMjAyNzMwNjU0NzgwMWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjMzODQ4ODEzMzMyNTE4MjMzMmUrMDIseTotNi4yMTc5MzEyMjY4MzY4MzIwODJlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4zMTA0MzAzNTIyMzMyMTg1MTRlKzAyLHk6LTcuNDE3MDEyMzIyMjA4MDU3NjQwZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi01Ljg0MDk4NjMwNzUzNTM3MTIyNWUrMDIseTotNC4zMDQ0MTc0ODEwNTYzMzYyMTRlKzAyLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4wMjIwMjE4NjI3NDUwNTI2NThlKzAyLHk6LTMuOTEyODkzNjg4NTM1NDU3NjcwZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMDgwMjc0NzQwMzk0ODUyMTMxZSswMix5Oi02Ljk2MDA5MjI4Mzg4MTU0MjEzMGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNS41NDIyMzMxMzc3MDg5MTc2MzllKzAyLHk6LTQuOTA4NDUyNjg1Njk0MTk1NDUyZSswMixsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi01LjI2MDUyNzQ3NDk5OTA0NTEyNmUrMDIseTotNC41NjM3NjAwNDE4MDg3ODE2OTNlKzAyLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMTEzMDkwMTM0MDU1MjcyNTNlKzAyLHk6LTMuNjEzMzY3MzUzMDY1NDAyMTk5ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjg1MDM2Nzc0NzQ5NDAwMTk1ZSswMix5Oi0zLjE0MDUzNTM1NDkxNzg2NDkwOGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI2MzU0MzE0MzI0MzA0MzQwM2UrMDIseTotNS40NzgyMjAyMjM1NTM3Mjc2NjRlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS41ODc4NTY3NzUzMjA5NDA5ODNlKzAyLHk6LTcuMDI5NDE1NDEyNTgzNzA5NjEwZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTUwNTY0NTExOTE0NzUyMTg4ZSswMix5Oi00LjU3MjkzOTI3ODIyMDEwNjcyOWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI0NDcxMzMyMDkyNzIwNTAxOGUrMDIseTotNC42NzA2MDQ5MTM4NjUzMzkxMTRlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNjIwMzQzNjc4NzU3MjUxMzhlKzAyLHk6LTQuMTU2MDUyNjM0MjczNDE3ODIzZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjk1NzE5NjEzMTk3NDA4NjQ4ZSswMix5Oi03LjA0MDkzMzYyMTIxMDU3MjgyNGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjYwMDAzMjM2MDczMTAwMjE2Mjg3OWUrMDIseToxLjI1Njk5OTQ4Mjc2NjU5ODM5MWUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMTkyODkzNjQxOTg3MjUzNjU5ZSswMix5OjIuMjkwMTc0Nzc0MTI2MTk5MTExZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjc1NTMyOTY0NTg4NzI4NTg5MmUrMDIseToxLjA5NTY4NDc3MzUyMTI5ODc1MmUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMDk0MjI0NTk4MjIzODIwNTJlKzAyLHk6LTIuMzUwNzY2MTQ5NzMzMzg4NDg4ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjQwNDcyNzMwMzU2MTYzMDU0OWUrMDIseToxLjQ1MzQ2ODE0NDc2MzY0MzI5NWUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNjQ0MTc1OTA0MDgwOTU1Nzc1ZSswMix5OjIuMDM4MjEwMzMyNTQzMDk5ODEwZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjI2MjU1ODE3NDgyNzI4NTMxM2UrMDIseToxLjUwNjIwNTg0MzgyNjk3NTAxM2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNzk0Mjg5MTIzODg0NDk4NzM2ZSswMix5OjIuNDUyNTYwNjk0NDYwMTE3MDc3ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNi44OTkxMDI1MTY0OTI0MzgzMjZlKzAyLHk6LTEuNjU4NjI2MDA2Nzg5MTcwMzMzZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjkzOTgyOTk0NTQzMTMxMzgzMWUrMDIseTo4LjE3MzM4NzgxMDIyMDcwNTc3NGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTYuMDcxODQxMDA0MjM5NDQ5MDM0N2UrMDIseTozLjQ2MDA0MTQ3NjcwMTg0ODYzN2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6OS45NTEwODc5NTQ5NTYzODk1ODFlKzAxLHk6MS42NTAxMjA3ODE2MTExMDQ1MTllKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjkyOTUzOTMwNjYyOTU1NTk5ZSswMix5Oi0yLjcxMTEyMzIwOTY3MTI2NDA3OGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMTU3NDcxMjI3Njc4MjkxODNlKzAyLHk6LTEuNjAyNDA5Mzc4OTY1MjUyNTI5ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI0NDQ1MDgzNTcyNjM4OTM1N2UrMDIseTotMi4yMTA5OTM1MjYwNDQ5NzczODZlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNDE2MzIyODAxMTQwNDc0MzI2ZSswMix5OjEuNDQyMjI0NjEyOTc5MTM3ODE3ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjExNzI4OTExMjI2MzIwODA0MGUrMDIseToyLjc0ODI5NTY5NTAxOTE4MzA3MWUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNzE0MzQwMjIxMTk5MTQ1NzMxZSswMix5OjIuMDc2NTI3NDk2ODM4OTQ1NDEwZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjE2Mzc4MDY4Mzk0Nzg1NDAxNmUrMDIseTotNS4zNjI0NTU5NjI1OTA4OTgyOTVlKzAwLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuODQxOTI2NDAzMDMyMTY3MDU5ZSswMix5OjkuNjMxOTE0ODUyMTkwODY3MjkzZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI1NjEyMjM0ODI0OTA0MTA2N2UrMDIseTotMy4xOTA3Nzk5MjY0MzQ3MzM5MzdlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzAzMzUyMTg3OTEwNzM3NDI4ZSswMix5Oi0yLjE3NTU3MDg4NzgyNzY3NjM1OGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS4xNjQ2MTgzMjQwMjE1ODk0NzNlKzAyLHk6MS41NjkzMDU4MTc0MDI1NTEyMTNlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTkwOTMyODE1NzEyNjM3NTkxZSswMix5OjIuNDMxOTY5MTQ3MDA2NDY5MDAxZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotMy43MjgyNDM1NjU4NzE4NTg4OTFlKzAyLHk6Mi4yNzIzOTQxNzIwNjA2ODExMTVlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0zLjg4OTk5MTA0MDMwMjQwNTE2N2UrMDIseToyLjcyMTU5MDIzMTczNzI0MzM1N2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuMjM4NTgyNTQ5ODg3NTU5MDI2ZSswMix5OjMuMzI2NTQyODA5MTE5ODgzNTE1ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotOC4yODE4ODI5NzAwMzMwMTQ5OTllKzAyLHk6OS4xOTMwNjEwMzE4NDEzMDE2NTZlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMDI1MzU2MDYwNzk4MzM3NDEwZSswMix5OjYuNjQ2NjU3MjgzNjMwOTczNzIzZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjA1MDc0Mzc3ODg2Mzk4MTk1OWUrMDIseTo2LjEyNzU3NjUwODA0OTgxMzk1M2UrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMjkxMzQ3ODAzMjEyNzYwMjU1ZSswMix5OjMuMzQyMzIxNzQ3MzAzODI0OTY0ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIyNDc0MzgxMDgzNjUyMTYxOGUrMDIseTotMi41NDY2MjU5OTY5MjA0MDI4MTJlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuOTgyMDc2OTc4NzYxOTc3MjczZSswMix5OjcuMDA4NzE5MjczMDYxMDQ1Mzg1ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotMi45OTExMDM1MTE1NDk4OTMwMjhlKzAyLHk6LTYuNzM0MzU5MjkzMDc3Mjg4NTU1ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNi44MzU5NTY2NjEwNjY5MzY3MDRlKzAyLHk6LTIuMDIzNTk4MzkzMDUwNTAwMDIyZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjAwNDc1NTczNDg0MTYwNDYzNWUrMDIseTo2LjgzMzI4NTg5MTUxODY3NzYwMmUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yMDc4OTkyMzU5MTY5MjkxMTVlKzAyLHk6LTEuNDA0OTQwMzUwMzg3MDIyNzE4ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIwMTUxNDcxNDczODk0NTU5OWUrMDIseTotMi4yMzI3MDM1NDYwMzk5OTcyNzhlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTc0NTg3NDI2NjM5Nzg1MTIyZSswMix5OjQuNzc1Mzg3NjYzNzcyMjA0NTgzZSswMCxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjcwODE3NDk3MzQzMDYxNTE4MmUrMDIseToxLjE2ODE1Mzg0MTU5ODkwMDU4NGUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTMuNzg2NDU2NDUyMjIzMDg3MDEyZSswMix5OjIuNTE3MzAyOTIzNjQ4MTgyNjg0ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIzODc5NjU2ODYzNjYyNTc1MGUrMDIseTotMi42MjUyNzMwNTg3MzM1Mjc1MjBlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0zLjU2MzU5MzY0MTg1MjUwMjI4N2UrMDIseToxLjMxMDExNTkzNjczNTcwMDc1N2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xMjM1NDU5NDczMDg3MjQ2MzVlKzAyLHk6My4xNzc5ODgzMzk2Njk5MDY2MzdlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjQuMjA1MzkwMDIzNzEwODYxNDE0ZSswMSx5Oi03LjQ0Njg5OTk5NTIwNjU4MTQ4MGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS43MzYwNzMzNTU2NTAzNDEwNTdlKzAyLHk6MS4xMzc3MjU2Mzg1NjM2OTE0NjJlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTk5OTEyODE0Njg2MTM2OTI2ZSswMix5Oi02LjY0MTM3MjE3NTE3MjMxNzE0OWUrMDAsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNTcwMzkwMzQ5NDc2NjA4MDllKzAyLHk6LTIuOTE2NTI1NjU3NjUyNzg4NDM5ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNy4zMzk5ODQ3MTM4ODgwMDc5NDZlKzAyLHk6Ni4wMTQ1NjU0MzgwNzYxODI2MDJlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNjU4ODQ2NzM1NTAyMDI3OTExZSswMix5OjEuMjE4NjIyMTQ4OTA5MzczNjY0ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI2NDY4NzAwNDA2MzI2NDkwOGUrMDIseTotMy44NDg0OTkxMjg0OTI5MDg3MzllKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNzExNDEzOTI5MDE0MDU3MzczZSswMix5OjEuMTI2NDE2OTI1NzAyMTQ0ODgwZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjE5MjUyMzU0NTYzMzk2MTgxN2UrMDIseTotMS4yMDMyNzI0MTQzNTA0NTM5NzhlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi03LjEwMTA5Mzk1NDQyMjkwMTc4OGUrMDIseToyLjU1OTg5MTA2MzIxODUxNzIxOGUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS43MTgwNTE4MjE5ODA5NTUzNjdlKzAyLHk6MS4xMzg2MDg4OTM0Njg3Mjg2NjdlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNjA0MjM2MjU0OTMxMDIyMDc0ZSswMix5OjEuMTk0Nzg0MTI1NDM2MzE5MzI5ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotMy41NjUxNjYzNzk2MDYwODk4OTBlKzAyLHk6MS41NzA5ODQxODEzMTgzNzQzNDBlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTU4MTU1NjQzNDc2ODg1NjQzZSswMix5Oi0xLjMxMTExNTA4NDA0MDY0MjU2NGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMTE1Mjg1MzU3MDE5MzgwMzk5ZSswMix5OjIuNzcxNjQ2NTM1OTI3MDQyNjkyZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjExNzc5Mzc2NDgxOTE2MDQ1OGUrMDIseTotNS4wNjkwNDM1NDYzODYwOTYxMTFlKzAwLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjY5Mjk1NjM3MzgwMTUzNjA3ZSswMix5Oi0zLjUyMTYwMjE0ODYzNzYxOTIyM2UrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS45OTE0Nzc3NzgzNjk5NzE5MjllKzAyLHk6Ni4zNDQwOTM4OTA5MDQ5ODkwNTNlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuODM2NzI1NzcxMjM1MjE5ODk1ZSswMix5OjEuMDA3MDQ2MzU3NjA4NjkyNTE3ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDotNy4xODIwNDI1NTY1NjQ1OTM5NTFlKzAyLHk6Mi40ODMxODkxMDM2OTQ5MTczMjFlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi03LjMzNzk3MDI4MTQ1NzE5NzY0M2UrMDIseTo3LjM3NjkzNDAyNzQ3OTQzNTk0MGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTcuMjUzNTU1NDgzMTg1OTY1NjEzZSswMix5OjEuOTU4NDM2OTU2NzMzOTM2ODI1ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjIyNTE3NjAyOTkzOTU2OTU2MGUrMDIseTotMS4zODk0MTIyOTQzMjE5MjkyMzFlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjMzOTc2MDY2MzU0MzM1MDQ2ZSswMix5Oi0xLjg0ODA1MTU4NTc2MTU4MDk5NWUrMDEsbGFiZWw6LTF9KTtcblxuICBcbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc0ZtU2FtcGxlSW5kZXBlbmRlbnQobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0Rm1TYW1wbGVJbmRlcGVuZGVudCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc3RvcDEwMDAwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5SZWdyZXNzVG9wMTAwMDAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3N0b3AxMDAwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5SZWdyZXNzVG9wMTAwMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc3RvcDEwMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuUmVncmVzc1RvcDEwMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc3RvcDEwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5SZWdyZXNzVG9wMTAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NQbGFuZShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICBFeGFtcGxlMkRbXSB7XG4gIGxldCByYWRpdXMgPSA2O1xuICBsZXQgbGFiZWxTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgLmRvbWFpbihbLTEwLCAxMF0pXG4gICAgLnJhbmdlKFstMSwgMV0pO1xuICBsZXQgZ2V0TGFiZWwgPSAoeCwgeSkgPT4gbGFiZWxTY2FsZSh4ICsgeSk7XG5cbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzOyBpKyspIHtcbiAgICBsZXQgeCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cyk7XG4gICAgbGV0IHkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRMYWJlbCh4ICsgbm9pc2VYLCB5ICsgbm9pc2VZKTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc0dhdXNzaWFuKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBsZXQgbGFiZWxTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgLmRvbWFpbihbMCwgMl0pXG4gICAgLnJhbmdlKFsxLCAwXSlcbiAgICAuY2xhbXAodHJ1ZSk7XG5cbiAgbGV0IGdhdXNzaWFucyA9IFtcbiAgICBbLTQsIDIuNSwgMV0sXG4gICAgWzAsIDIuNSwgLTFdLFxuICAgIFs0LCAyLjUsIDFdLFxuICAgIFstNCwgLTIuNSwgLTFdLFxuICAgIFswLCAtMi41LCAxXSxcbiAgICBbNCwgLTIuNSwgLTFdXG4gIF07XG5cbiAgZnVuY3Rpb24gZ2V0TGFiZWwoeCwgeSkge1xuICAgIC8vIENob29zZSB0aGUgb25lIHRoYXQgaXMgbWF4aW11bSBpbiBhYnMgdmFsdWUuXG4gICAgbGV0IGxhYmVsID0gMDtcbiAgICBnYXVzc2lhbnMuZm9yRWFjaCgoW2N4LCBjeSwgc2lnbl0pID0+IHtcbiAgICAgIGxldCBuZXdMYWJlbCA9IHNpZ24gKiBsYWJlbFNjYWxlKGRpc3Qoe3gsIHl9LCB7eDogY3gsIHk6IGN5fSkpO1xuICAgICAgaWYgKE1hdGguYWJzKG5ld0xhYmVsKSA+IE1hdGguYWJzKGxhYmVsKSkge1xuICAgICAgICBsYWJlbCA9IG5ld0xhYmVsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuICBsZXQgcmFkaXVzID0gNjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzOyBpKyspIHtcbiAgICBsZXQgeCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cyk7XG4gICAgbGV0IHkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRMYWJlbCh4ICsgbm9pc2VYLCB5ICsgbm9pc2VZKTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfTtcbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlDaXJjbGVEYXRhKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuICBsZXQgcmFkaXVzID0gNTtcbiAgZnVuY3Rpb24gZ2V0Q2lyY2xlTGFiZWwocDogUG9pbnQsIGNlbnRlcjogUG9pbnQpIHtcbiAgICByZXR1cm4gKGRpc3QocCwgY2VudGVyKSA8IChyYWRpdXMgKiAwLjUpKSA/IDEgOiAtMTtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIHBvc2l0aXZlIHBvaW50cyBpbnNpZGUgdGhlIGNpcmNsZS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzIC8gMjsgaSsrKSB7XG4gICAgbGV0IHIgPSByYW5kVW5pZm9ybSgwLCByYWRpdXMgKiAwLjUpO1xuICAgIGxldCBhbmdsZSA9IHJhbmRVbmlmb3JtKDAsIDIgKiBNYXRoLlBJKTtcbiAgICBsZXQgeCA9IHIgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgbGV0IHkgPSByICogTWF0aC5jb3MoYW5nbGUpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRDaXJjbGVMYWJlbCh7eDogeCArIG5vaXNlWCwgeTogeSArIG5vaXNlWX0sIHt4OiAwLCB5OiAwfSk7XG4gICAgcG9pbnRzLnB1c2goe3gsIHksIGxhYmVsfSk7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBuZWdhdGl2ZSBwb2ludHMgb3V0c2lkZSB0aGUgY2lyY2xlLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNhbXBsZXMgLyAyOyBpKyspIHtcbiAgICBsZXQgciA9IHJhbmRVbmlmb3JtKHJhZGl1cyAqIDAuNywgcmFkaXVzKTtcbiAgICBsZXQgYW5nbGUgPSByYW5kVW5pZm9ybSgwLCAyICogTWF0aC5QSSk7XG4gICAgbGV0IHggPSByICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGxldCB5ID0gciAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0Q2lyY2xlTGFiZWwoe3g6IHggKyBub2lzZVgsIHk6IHkgKyBub2lzZVl9LCB7eDogMCwgeTogMH0pO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeVhPUkRhdGEobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGZ1bmN0aW9uIGdldFhPUkxhYmVsKHA6IFBvaW50KSB7IHJldHVybiBwLnggKiBwLnkgPj0gMCA/IDEgOiAtMTsgfVxuXG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlczsgaSsrKSB7XG4gICAgbGV0IHggPSByYW5kVW5pZm9ybSgtNSwgNSk7XG4gICAgbGV0IHBhZGRpbmcgPSAwLjM7XG4gICAgeCArPSB4ID4gMCA/IHBhZGRpbmcgOiAtcGFkZGluZzsgIC8vIFBhZGRpbmcuXG4gICAgbGV0IHkgPSByYW5kVW5pZm9ybSgtNSwgNSk7XG4gICAgeSArPSB5ID4gMCA/IHBhZGRpbmcgOiAtcGFkZGluZztcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLTUsIDUpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC01LCA1KSAqIG5vaXNlO1xuICAgIGxldCBsYWJlbCA9IGdldFhPUkxhYmVsKHt4OiB4ICsgbm9pc2VYLCB5OiB5ICsgbm9pc2VZfSk7XG4gICAgLy9jb25zb2xlLmxvZyh4KTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfVxuXG5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2FtcGxlIGZyb20gYSB1bmlmb3JtIFthLCBiXSBkaXN0cmlidXRpb24uXG4gKiBVc2VzIHRoZSBzZWVkcmFuZG9tIGxpYnJhcnkgYXMgdGhlIHJhbmRvbSBnZW5lcmF0b3IuXG4gKi9cbmZ1bmN0aW9uIHJhbmRVbmlmb3JtKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKGIgLSBhKSArIGE7XG59XG5cbi8qKlxuICogU2FtcGxlcyBmcm9tIGEgbm9ybWFsIGRpc3RyaWJ1dGlvbi4gVXNlcyB0aGUgc2VlZHJhbmRvbSBsaWJyYXJ5IGFzIHRoZVxuICogcmFuZG9tIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gbWVhbiBUaGUgbWVhbi4gRGVmYXVsdCBpcyAwLlxuICogQHBhcmFtIHZhcmlhbmNlIFRoZSB2YXJpYW5jZS4gRGVmYXVsdCBpcyAxLlxuICovXG5mdW5jdGlvbiBub3JtYWxSYW5kb20obWVhbiA9IDAsIHZhcmlhbmNlID0gMSk6IG51bWJlciB7XG4gIGxldCB2MTogbnVtYmVyLCB2MjogbnVtYmVyLCBzOiBudW1iZXI7XG4gIGRvIHtcbiAgICB2MSA9IDIgKiBNYXRoLnJhbmRvbSgpIC0gMTtcbiAgICB2MiA9IDIgKiBNYXRoLnJhbmRvbSgpIC0gMTtcbiAgICBzID0gdjEgKiB2MSArIHYyICogdjI7XG4gIH0gd2hpbGUgKHMgPiAxKTtcblxuICBsZXQgcmVzdWx0ID0gTWF0aC5zcXJ0KC0yICogTWF0aC5sb2cocykgLyBzKSAqIHYxO1xuICByZXR1cm4gbWVhbiArIE1hdGguc3FydCh2YXJpYW5jZSkgKiByZXN1bHQ7XG59XG5cbi8qKiBSZXR1cm5zIHRoZSBldWNsZWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzIGluIHNwYWNlLiAqL1xuZnVuY3Rpb24gZGlzdChhOiBQb2ludCwgYjogUG9pbnQpOiBudW1iZXIge1xuICBsZXQgZHggPSBhLnggLSBiLng7XG4gIGxldCBkeSA9IGEueSAtIGIueTtcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmltcG9ydCB7RXhhbXBsZTJEfSBmcm9tIFwiLi9kYXRhc2V0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhdE1hcFNldHRpbmdzIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBzaG93QXhlcz86IGJvb2xlYW47XG4gIG5vU3ZnPzogYm9vbGVhbjtcbn1cblxuLyoqIE51bWJlciBvZiBkaWZmZXJlbnQgc2hhZGVzIChjb2xvcnMpIHdoZW4gZHJhd2luZyBhIGdyYWRpZW50IGhlYXRtYXAgKi9cbmNvbnN0IE5VTV9TSEFERVMgPSAzMDtcblxuLyoqXG4gKiBEcmF3cyBhIGhlYXRtYXAgdXNpbmcgY2FudmFzLiBVc2VkIGZvciBzaG93aW5nIHRoZSBsZWFybmVkIGRlY2lzaW9uXG4gKiBib3VuZGFyeSBvZiB0aGUgY2xhc3NpZmljYXRpb24gYWxnb3JpdGhtLiBDYW4gYWxzbyBkcmF3IGRhdGEgcG9pbnRzXG4gKiB1c2luZyBhbiBzdmcgb3ZlcmxheWVkIG9uIHRvcCBvZiB0aGUgY2FudmFzIGhlYXRtYXAuXG4gKi9cbmV4cG9ydCBjbGFzcyBIZWF0TWFwIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogSGVhdE1hcFNldHRpbmdzID0ge1xuICAgIHNob3dBeGVzOiBmYWxzZSxcbiAgICBub1N2ZzogZmFsc2VcbiAgfTtcbiAgcHJpdmF0ZSB4U2NhbGU6IGQzLnNjYWxlLkxpbmVhcjxudW1iZXIsIG51bWJlcj47XG4gIHByaXZhdGUgeVNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIG51bVNhbXBsZXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBjb2xvcjogZDMuc2NhbGUuUXVhbnRpemU8c3RyaW5nPjtcbiAgcHJpdmF0ZSBjYW52YXM6IGQzLlNlbGVjdGlvbjxhbnk+O1xuICBwcml2YXRlIHN2ZzogZDMuU2VsZWN0aW9uPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB3aWR0aDogbnVtYmVyLCBudW1TYW1wbGVzOiBudW1iZXIsIHhEb21haW46IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICB5RG9tYWluOiBbbnVtYmVyLCBudW1iZXJdLCBjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LFxuICAgICAgdXNlclNldHRpbmdzPzogSGVhdE1hcFNldHRpbmdzKSB7XG4gICAgdGhpcy5udW1TYW1wbGVzID0gbnVtU2FtcGxlcztcbiAgICBsZXQgaGVpZ2h0ID0gd2lkdGg7XG4gICAgbGV0IHBhZGRpbmcgPSB1c2VyU2V0dGluZ3Muc2hvd0F4ZXMgPyAyMCA6IDA7XG5cbiAgICBpZiAodXNlclNldHRpbmdzICE9IG51bGwpIHtcbiAgICAgIC8vIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdHMgd2l0aCB0aGUgdXNlci1zcGVjaWZpZWQgc2V0dGluZ3MuXG4gICAgICBmb3IgKGxldCBwcm9wIGluIHVzZXJTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldHRpbmdzW3Byb3BdID0gdXNlclNldHRpbmdzW3Byb3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgIC5kb21haW4oeERvbWFpbilcbiAgICAgIC5yYW5nZShbMCwgd2lkdGggLSAyICogcGFkZGluZ10pO1xuXG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgICAgLmRvbWFpbih5RG9tYWluKVxuICAgICAgLnJhbmdlKFtoZWlnaHQgLSAyICogcGFkZGluZywgMF0pO1xuXG4gICAgLy8gR2V0IGEgcmFuZ2Ugb2YgY29sb3JzLlxuICAgIGxldCB0bXBTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcjxzdHJpbmcsIHN0cmluZz4oKVxuICAgICAgICAuZG9tYWluKFswLCAuNSwgMV0pXG4gICAgICAgIC5yYW5nZShbXCIjZjU5MzIyXCIsIFwiI2U4ZWFlYlwiLCBcIiMwODc3YmRcIl0pXG4gICAgICAgIC5jbGFtcCh0cnVlKTtcbiAgICAvLyBEdWUgdG8gbnVtZXJpY2FsIGVycm9yLCB3ZSBuZWVkIHRvIHNwZWNpZnlcbiAgICAvLyBkMy5yYW5nZSgwLCBlbmQgKyBzbWFsbF9lcHNpbG9uLCBzdGVwKVxuICAgIC8vIGluIG9yZGVyIHRvIGd1YXJhbnRlZSB0aGF0IHdlIHdpbGwgaGF2ZSBlbmQvc3RlcCBlbnRyaWVzIHdpdGhcbiAgICAvLyB0aGUgbGFzdCBlbGVtZW50IGJlaW5nIGVxdWFsIHRvIGVuZC5cbiAgICBsZXQgY29sb3JzID0gZDMucmFuZ2UoMCwgMSArIDFFLTksIDEgLyBOVU1fU0hBREVTKS5tYXAoYSA9PiB7XG4gICAgICByZXR1cm4gdG1wU2NhbGUoYSk7XG4gICAgfSk7XG4gICAgdGhpcy5jb2xvciA9IGQzLnNjYWxlLnF1YW50aXplPHN0cmluZz4oKVxuICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbLTEsIDFdKVxuICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKGNvbG9ycyk7XG5cbiAgICBjb250YWluZXIgPSBjb250YWluZXIuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoe1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIHRvcDogYC0ke3BhZGRpbmd9cHhgLFxuICAgICAgICBsZWZ0OiBgLSR7cGFkZGluZ31weGBcbiAgICAgIH0pO1xuICAgIHRoaXMuY2FudmFzID0gY29udGFpbmVyLmFwcGVuZChcImNhbnZhc1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBudW1TYW1wbGVzKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgbnVtU2FtcGxlcylcbiAgICAgIC5zdHlsZShcIndpZHRoXCIsICh3aWR0aCAtIDIgKiBwYWRkaW5nKSArIFwicHhcIilcbiAgICAgIC5zdHlsZShcImhlaWdodFwiLCAoaGVpZ2h0IC0gMiAqIHBhZGRpbmcpICsgXCJweFwiKVxuICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgLnN0eWxlKFwidG9wXCIsIGAke3BhZGRpbmd9cHhgKVxuICAgICAgLnN0eWxlKFwibGVmdFwiLCBgJHtwYWRkaW5nfXB4YCk7XG5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3Mubm9TdmcpIHtcbiAgICAgIHRoaXMuc3ZnID0gY29udGFpbmVyLmFwcGVuZChcInN2Z1wiKS5hdHRyKHtcbiAgICAgICAgICBcIndpZHRoXCI6IHdpZHRoLFxuICAgICAgICAgIFwiaGVpZ2h0XCI6IGhlaWdodFxuICAgICAgfSkuc3R5bGUoe1xuICAgICAgICAvLyBPdmVybGF5IHRoZSBzdmcgb24gdG9wIG9mIHRoZSBjYW52YXMuXG4gICAgICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBcImxlZnRcIjogXCIwXCIsXG4gICAgICAgIFwidG9wXCI6IFwiMFwiXG4gICAgICB9KS5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtwYWRkaW5nfSwke3BhZGRpbmd9KWApO1xuXG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRyYWluXCIpO1xuICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0ZXN0XCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dBeGVzKSB7XG4gICAgICBsZXQgeEF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgICAgIC5zY2FsZSh0aGlzLnhTY2FsZSlcbiAgICAgICAgLm9yaWVudChcImJvdHRvbVwiKTtcblxuICAgICAgbGV0IHlBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgICAgICAuc2NhbGUodGhpcy55U2NhbGUpXG4gICAgICAgIC5vcmllbnQoXCJyaWdodFwiKTtcblxuICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke2hlaWdodCAtIDIgKiBwYWRkaW5nfSlgKVxuICAgICAgICAuY2FsbCh4QXhpcyk7XG5cbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInkgYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArICh3aWR0aCAtIDIgKiBwYWRkaW5nKSArIFwiLDApXCIpXG4gICAgICAgIC5jYWxsKHlBeGlzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUZXN0UG9pbnRzKHBvaW50czogRXhhbXBsZTJEW10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5ub1N2Zykge1xuICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBhZGQgcG9pbnRzIHNpbmNlIG5vU3ZnPXRydWVcIik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2lyY2xlcyh0aGlzLnN2Zy5zZWxlY3QoXCJnLnRlc3RcIiksIHBvaW50cyk7XG4gIH1cblxuICB1cGRhdGVQb2ludHMocG9pbnRzOiBFeGFtcGxlMkRbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm5vU3ZnKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkNhbid0IGFkZCBwb2ludHMgc2luY2Ugbm9Tdmc9dHJ1ZVwiKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaXJjbGVzKHRoaXMuc3ZnLnNlbGVjdChcImcudHJhaW5cIiksIHBvaW50cyk7XG4gIH1cblxuICB1cGRhdGVCYWNrZ3JvdW5kKGRhdGE6IG51bWJlcltdW10sIGRpc2NyZXRpemU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBsZXQgZHggPSBkYXRhWzBdLmxlbmd0aDtcbiAgICBsZXQgZHkgPSBkYXRhLmxlbmd0aDtcblxuICAgIGlmIChkeCAhPT0gdGhpcy5udW1TYW1wbGVzIHx8IGR5ICE9PSB0aGlzLm51bVNhbXBsZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBcIlRoZSBwcm92aWRlZCBkYXRhIG1hdHJpeCBtdXN0IGJlIG9mIHNpemUgXCIgK1xuICAgICAgICAgIFwibnVtU2FtcGxlcyBYIG51bVNhbXBsZXNcIik7XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSB0aGUgcGl4ZWwgY29sb3JzOyBzY2FsZWQgYnkgQ1NTLlxuICAgIGxldCBjb250ZXh0ID0gKHRoaXMuY2FudmFzLm5vZGUoKSBhcyBIVE1MQ2FudmFzRWxlbWVudCkuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBpbWFnZSA9IGNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKGR4LCBkeSk7XG5cbiAgICBmb3IgKGxldCB5ID0gMCwgcCA9IC0xOyB5IDwgZHk7ICsreSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkeDsgKyt4KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGFbeF1beV07XG4gICAgICAgIGlmIChkaXNjcmV0aXplKSB7XG4gICAgICAgICAgdmFsdWUgPSAodmFsdWUgPj0gMCA/IDEgOiAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGMgPSBkMy5yZ2IodGhpcy5jb2xvcih2YWx1ZSkpO1xuICAgICAgICBpbWFnZS5kYXRhWysrcF0gPSBjLnI7XG4gICAgICAgIGltYWdlLmRhdGFbKytwXSA9IGMuZztcbiAgICAgICAgaW1hZ2UuZGF0YVsrK3BdID0gYy5iO1xuICAgICAgICBpbWFnZS5kYXRhWysrcF0gPSAxNjA7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlLCAwLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2lyY2xlcyhjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LCBwb2ludHM6IEV4YW1wbGUyRFtdKSB7XG4gICAgLy8gS2VlcCBvbmx5IHBvaW50cyB0aGF0IGFyZSBpbnNpZGUgdGhlIGJvdW5kcy5cbiAgICBsZXQgeERvbWFpbiA9IHRoaXMueFNjYWxlLmRvbWFpbigpO1xuICAgIGxldCB5RG9tYWluID0gdGhpcy55U2NhbGUuZG9tYWluKCk7XG4gICAgcG9pbnRzID0gcG9pbnRzLmZpbHRlcihwID0+IHtcbiAgICAgIHJldHVybiBwLnggPj0geERvbWFpblswXSAmJiBwLnggPD0geERvbWFpblsxXVxuICAgICAgICAmJiBwLnkgPj0geURvbWFpblswXSAmJiBwLnkgPD0geURvbWFpblsxXTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBkYXRhIHRvIGluaXRpYWxseSBlbXB0eSBzZWxlY3Rpb24uXG4gICAgbGV0IHNlbGVjdGlvbiA9IGNvbnRhaW5lci5zZWxlY3RBbGwoXCJjaXJjbGVcIikuZGF0YShwb2ludHMpO1xuXG4gICAgLy8gSW5zZXJ0IGVsZW1lbnRzIHRvIG1hdGNoIGxlbmd0aCBvZiBwb2ludHMgYXJyYXkuXG4gICAgc2VsZWN0aW9uLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpLmF0dHIoXCJyXCIsIDMpO1xuXG4gICAgLy8gVXBkYXRlIHBvaW50cyB0byBiZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICBzZWxlY3Rpb25cbiAgICAgIC5hdHRyKHtcbiAgICAgICAgY3g6IChkOiBFeGFtcGxlMkQpID0+IHRoaXMueFNjYWxlKGQueCksXG4gICAgICAgIGN5OiAoZDogRXhhbXBsZTJEKSA9PiB0aGlzLnlTY2FsZShkLnkpLFxuICAgICAgfSlcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgZCA9PiB0aGlzLmNvbG9yKGQubGFiZWwpKTtcblxuICAgIC8vIFJlbW92ZSBwb2ludHMgaWYgdGhlIGxlbmd0aCBoYXMgZ29uZSBkb3duLlxuICAgIHNlbGVjdGlvbi5leGl0KCkucmVtb3ZlKCk7XG4gIH1cbn0gIC8vIENsb3NlIGNsYXNzIEhlYXRNYXAuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VNYXRyaXgobWF0cml4OiBudW1iZXJbXVtdLCBmYWN0b3I6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBpZiAobWF0cml4Lmxlbmd0aCAhPT0gbWF0cml4WzBdLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwcm92aWRlZCBtYXRyaXggbXVzdCBiZSBhIHNxdWFyZSBtYXRyaXhcIik7XG4gIH1cbiAgaWYgKG1hdHJpeC5sZW5ndGggJSBmYWN0b3IgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgd2lkdGgvaGVpZ2h0IG9mIHRoZSBtYXRyaXggbXVzdCBiZSBkaXZpc2libGUgYnkgXCIgK1xuICAgICAgICBcInRoZSByZWR1Y3Rpb24gZmFjdG9yXCIpO1xuICB9XG4gIGxldCByZXN1bHQ6IG51bWJlcltdW10gPSBuZXcgQXJyYXkobWF0cml4Lmxlbmd0aCAvIGZhY3Rvcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4Lmxlbmd0aDsgaSArPSBmYWN0b3IpIHtcbiAgICByZXN1bHRbaSAvIGZhY3Rvcl0gPSBuZXcgQXJyYXkobWF0cml4Lmxlbmd0aCAvIGZhY3Rvcik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXgubGVuZ3RoOyBqICs9IGZhY3Rvcikge1xuICAgICAgbGV0IGF2ZyA9IDA7XG4gICAgICAvLyBTdW0gYWxsIHRoZSB2YWx1ZXMgaW4gdGhlIG5laWdoYm9yaG9vZC5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmFjdG9yOyBrKyspIHtcbiAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBmYWN0b3I7IGwrKykge1xuICAgICAgICAgIGF2ZyArPSBtYXRyaXhbaSArIGtdW2ogKyBsXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXZnIC89IChmYWN0b3IgKiBmYWN0b3IpO1xuICAgICAgcmVzdWx0W2kgLyBmYWN0b3JdW2ogLyBmYWN0b3JdID0gYXZnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xudHlwZSBEYXRhUG9pbnQgPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyW107XG59O1xuXG4vKipcbiAqIEEgbXVsdGktc2VyaWVzIGxpbmUgY2hhcnQgdGhhdCBhbGxvd3MgeW91IHRvIGFwcGVuZCBuZXcgZGF0YSBwb2ludHNcbiAqIGFzIGRhdGEgYmVjb21lcyBhdmFpbGFibGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBlbmRpbmdMaW5lQ2hhcnQge1xuICBwcml2YXRlIG51bUxpbmVzOiBudW1iZXI7XG4gIHByaXZhdGUgZGF0YTogRGF0YVBvaW50W10gPSBbXTtcbiAgcHJpdmF0ZSBzdmc6IGQzLlNlbGVjdGlvbjxhbnk+O1xuICBwcml2YXRlIHhTY2FsZTogZDMuc2NhbGUuTGluZWFyPG51bWJlciwgbnVtYmVyPjtcbiAgcHJpdmF0ZSB5U2NhbGU6IGQzLnNjYWxlLkxpbmVhcjxudW1iZXIsIG51bWJlcj47XG4gIHByaXZhdGUgcGF0aHM6IEFycmF5PGQzLlNlbGVjdGlvbjxhbnk+PjtcbiAgcHJpdmF0ZSBsaW5lQ29sb3JzOiBzdHJpbmdbXTtcblxuICBwcml2YXRlIG1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICBwcml2YXRlIG1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogZDMuU2VsZWN0aW9uPGFueT4sIGxpbmVDb2xvcnM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5saW5lQ29sb3JzID0gbGluZUNvbG9ycztcbiAgICB0aGlzLm51bUxpbmVzID0gbGluZUNvbG9ycy5sZW5ndGg7XG4gICAgbGV0IG5vZGUgPSBjb250YWluZXIubm9kZSgpIGFzIEhUTUxFbGVtZW50O1xuICAgIGxldCB0b3RhbFdpZHRoID0gbm9kZS5vZmZzZXRXaWR0aDtcbiAgICBsZXQgdG90YWxIZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodDtcbiAgICBsZXQgbWFyZ2luID0ge3RvcDogMiwgcmlnaHQ6IDAsIGJvdHRvbTogMiwgbGVmdDogMn07XG4gICAgbGV0IHdpZHRoID0gdG90YWxXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGxldCBoZWlnaHQgPSB0b3RhbEhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMF0pXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICB0aGlzLnlTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAwXSlcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICB0aGlzLnN2ZyA9IGNvbnRhaW5lci5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgdGhpcy5wYXRocyA9IG5ldyBBcnJheSh0aGlzLm51bUxpbmVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtTGluZXM7IGkrKykge1xuICAgICAgdGhpcy5wYXRoc1tpXSA9IHRoaXMuc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmVcIilcbiAgICAgICAgLnN0eWxlKHtcbiAgICAgICAgICBcImZpbGxcIjogXCJub25lXCIsXG4gICAgICAgICAgXCJzdHJva2VcIjogbGluZUNvbG9yc1tpXSxcbiAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBcIjEuNXB4XCJcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgICB0aGlzLm1pblkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHRoaXMubWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG4gIH1cblxuICBhZGREYXRhUG9pbnQoZGF0YVBvaW50OiBudW1iZXJbXSkge1xuICAgIGlmIChkYXRhUG9pbnQubGVuZ3RoICE9PSB0aGlzLm51bUxpbmVzKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkxlbmd0aCBvZiBkYXRhUG9pbnQgbXVzdCBlcXVhbCBudW1iZXIgb2YgbGluZXNcIik7XG4gICAgfVxuICAgIGRhdGFQb2ludC5mb3JFYWNoKHkgPT4ge1xuICAgICAgdGhpcy5taW5ZID0gTWF0aC5taW4odGhpcy5taW5ZLCB5KTtcbiAgICAgIHRoaXMubWF4WSA9IE1hdGgubWF4KHRoaXMubWF4WSwgeSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRhdGEucHVzaCh7eDogdGhpcy5kYXRhLmxlbmd0aCArIDEsIHk6IGRhdGFQb2ludH0pO1xuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICBwcml2YXRlIHJlZHJhdygpIHtcbiAgICAvLyBBZGp1c3QgdGhlIHggYW5kIHkgZG9tYWluLlxuICAgIHRoaXMueFNjYWxlLmRvbWFpbihbMSwgdGhpcy5kYXRhLmxlbmd0aF0pO1xuICAgIHRoaXMueVNjYWxlLmRvbWFpbihbdGhpcy5taW5ZLCB0aGlzLm1heFldKTtcbiAgICAvLyBBZGp1c3QgYWxsIHRoZSA8cGF0aD4gZWxlbWVudHMgKGxpbmVzKS5cbiAgICBsZXQgZ2V0UGF0aE1hcCA9IChsaW5lSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIGQzLnN2Zy5saW5lPERhdGFQb2ludD4oKVxuICAgICAgLngoZCA9PiB0aGlzLnhTY2FsZShkLngpKVxuICAgICAgLnkoZCA9PiB0aGlzLnlTY2FsZShkLnlbbGluZUluZGV4XSkpO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpbmVzOyBpKyspIHtcbiAgICAgIHRoaXMucGF0aHNbaV0uZGF0dW0odGhpcy5kYXRhKS5hdHRyKFwiZFwiLCBnZXRQYXRoTWFwKGkpKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyoqXG4gKiBBIG5vZGUgaW4gYSBuZXVyYWwgbmV0d29yay4gRWFjaCBub2RlIGhhcyBhIHN0YXRlXG4gKiAodG90YWwgaW5wdXQsIG91dHB1dCwgYW5kIHRoZWlyIHJlc3BlY3RpdmVseSBkZXJpdmF0aXZlcykgd2hpY2ggY2hhbmdlc1xuICogYWZ0ZXIgZXZlcnkgZm9yd2FyZCBhbmQgYmFjayBwcm9wYWdhdGlvbiBydW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgaWQ6IHN0cmluZztcbiAgLyoqIExpc3Qgb2YgaW5wdXQgbGlua3MuICovXG4gIGlucHV0TGlua3M6IExpbmtbXSA9IFtdO1xuICBiaWFzID0gMC4xO1xuICAvKiogTGlzdCBvZiBvdXRwdXQgbGlua3MuICovXG4gIG91dHB1dHM6IExpbmtbXSA9IFtdO1xuICB0b3RhbElucHV0OiBudW1iZXI7XG4gIG91dHB1dDogbnVtYmVyO1xuICAvKiogRXJyb3IgZGVyaXZhdGl2ZSB3aXRoIHJlc3BlY3QgdG8gdGhpcyBub2RlJ3Mgb3V0cHV0LiAqL1xuICBvdXRwdXREZXIgPSAwO1xuICAvKiogRXJyb3IgZGVyaXZhdGl2ZSB3aXRoIHJlc3BlY3QgdG8gdGhpcyBub2RlJ3MgdG90YWwgaW5wdXQuICovXG4gIGlucHV0RGVyID0gMDtcbiAgLyoqXG4gICAqIEFjY3VtdWxhdGVkIGVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgbm9kZSdzIHRvdGFsIGlucHV0IHNpbmNlXG4gICAqIHRoZSBsYXN0IHVwZGF0ZS4gVGhpcyBkZXJpdmF0aXZlIGVxdWFscyBkRS9kYiB3aGVyZSBiIGlzIHRoZSBub2RlJ3NcbiAgICogYmlhcyB0ZXJtLlxuICAgKi9cbiAgYWNjSW5wdXREZXIgPSAwO1xuICAvKipcbiAgICogTnVtYmVyIG9mIGFjY3VtdWxhdGVkIGVyci4gZGVyaXZhdGl2ZXMgd2l0aCByZXNwZWN0IHRvIHRoZSB0b3RhbCBpbnB1dFxuICAgKiBzaW5jZSB0aGUgbGFzdCB1cGRhdGUuXG4gICAqL1xuICBudW1BY2N1bXVsYXRlZERlcnMgPSAwO1xuICAvKiogQWN0aXZhdGlvbiBmdW5jdGlvbiB0aGF0IHRha2VzIHRvdGFsIGlucHV0IGFuZCByZXR1cm5zIG5vZGUncyBvdXRwdXQgKi9cbiAgYWN0aXZhdGlvbjogQWN0aXZhdGlvbkZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IG5vZGUgd2l0aCB0aGUgcHJvdmlkZWQgaWQgYW5kIGFjdGl2YXRpb24gZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBhY3RpdmF0aW9uOiBBY3RpdmF0aW9uRnVuY3Rpb24sIGluaXRaZXJvPzogYm9vbGVhbikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmFjdGl2YXRpb24gPSBhY3RpdmF0aW9uO1xuICAgIGlmIChpbml0WmVybykge1xuICAgICAgdGhpcy5iaWFzID0gMDtcbiAgICB9XG4gIH1cblxuICAvKiogUmVjb21wdXRlcyB0aGUgbm9kZSdzIG91dHB1dCBhbmQgcmV0dXJucyBpdC4gKi9cbiAgdXBkYXRlT3V0cHV0KCk6IG51bWJlciB7XG4gICAgLy8gU3RvcmVzIHRvdGFsIGlucHV0IGludG8gdGhlIG5vZGUuXG4gICAgdGhpcy50b3RhbElucHV0ID0gdGhpcy5iaWFzO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgbGluayA9IHRoaXMuaW5wdXRMaW5rc1tqXTtcbiAgICAgIHRoaXMudG90YWxJbnB1dCArPSBsaW5rLndlaWdodCAqIGxpbmsuc291cmNlLm91dHB1dDtcbiAgICB9XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLmFjdGl2YXRpb24ub3V0cHV0KHRoaXMudG90YWxJbnB1dCk7XG4gICAgcmV0dXJuIHRoaXMub3V0cHV0O1xuICB9XG59XG5cbi8qKlxuICogQW4gZXJyb3IgZnVuY3Rpb24gYW5kIGl0cyBkZXJpdmF0aXZlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRnVuY3Rpb24ge1xuICBlcnJvcjogKG91dHB1dDogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcikgPT4gbnVtYmVyO1xuICBkZXI6IChvdXRwdXQ6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuLyoqIEEgbm9kZSdzIGFjdGl2YXRpb24gZnVuY3Rpb24gYW5kIGl0cyBkZXJpdmF0aXZlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY3RpdmF0aW9uRnVuY3Rpb24ge1xuICBvdXRwdXQ6IChpbnB1dDogbnVtYmVyKSA9PiBudW1iZXI7XG4gIGRlcjogKGlucHV0OiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuLyoqIEZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgYSBwZW5hbHR5IGNvc3QgZm9yIGEgZ2l2ZW4gd2VpZ2h0IGluIHRoZSBuZXR3b3JrLiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uIHtcbiAgb3V0cHV0OiAod2VpZ2h0OiBudW1iZXIpID0+IG51bWJlcjtcbiAgZGVyOiAod2VpZ2h0OiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuLyoqIEJ1aWx0LWluIGVycm9yIGZ1bmN0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIEVycm9ycyB7XG4gIHB1YmxpYyBzdGF0aWMgU1FVQVJFOiBFcnJvckZ1bmN0aW9uID0ge1xuICAgIGVycm9yOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PlxuICAgICAgICAgICAgICAgMC41ICogTWF0aC5wb3cob3V0cHV0IC0gdGFyZ2V0LCAyKSxcbiAgICBkZXI6IChvdXRwdXQ6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpID0+IG91dHB1dCAtIHRhcmdldFxuICB9O1xufVxuXG4vKiogUG9seWZpbGwgZm9yIFRBTkggKi9cbihNYXRoIGFzIGFueSkudGFuaCA9IChNYXRoIGFzIGFueSkudGFuaCB8fCBmdW5jdGlvbih4KSB7XG4gIGlmICh4ID09PSBJbmZpbml0eSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHggPT09IC1JbmZpbml0eSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZTJ4ID0gTWF0aC5leHAoMiAqIHgpO1xuICAgIHJldHVybiAoZTJ4IC0gMSkgLyAoZTJ4ICsgMSk7XG4gIH1cbn07XG5cbi8qKiBCdWlsdC1pbiBhY3RpdmF0aW9uIGZ1bmN0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIEFjdGl2YXRpb25zIHtcbiAgcHVibGljIHN0YXRpYyBUQU5IOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IChNYXRoIGFzIGFueSkudGFuaCh4KSxcbiAgICBkZXI6IHggPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IEFjdGl2YXRpb25zLlRBTkgub3V0cHV0KHgpO1xuICAgICAgcmV0dXJuIDEgLSBvdXRwdXQgKiBvdXRwdXQ7XG4gICAgfVxuICB9O1xuICBwdWJsaWMgc3RhdGljIFJFTFU6IEFjdGl2YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHggPT4gTWF0aC5tYXgoMCwgeCksXG4gICAgZGVyOiB4ID0+IHggPD0gMCA/IDAgOiAxXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgU0lHTU9JRDogQWN0aXZhdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogeCA9PiAxIC8gKDEgKyBNYXRoLmV4cCgteCkpLFxuICAgIGRlcjogeCA9PiB7XG4gICAgICBsZXQgb3V0cHV0ID0gQWN0aXZhdGlvbnMuU0lHTU9JRC5vdXRwdXQoeCk7XG4gICAgICByZXR1cm4gb3V0cHV0ICogKDEgLSBvdXRwdXQpO1xuICAgIH1cbiAgfTtcbiAgcHVibGljIHN0YXRpYyBMSU5FQVI6IEFjdGl2YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHggPT4geCxcbiAgICBkZXI6IHggPT4gMVxuICB9O1xufVxuXG4vKiogQnVpbGQtaW4gcmVndWxhcml6YXRpb24gZnVuY3Rpb25zICovXG5leHBvcnQgY2xhc3MgUmVndWxhcml6YXRpb25GdW5jdGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgTDE6IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB3ID0+IE1hdGguYWJzKHcpLFxuICAgIGRlcjogdyA9PiB3IDwgMCA/IC0xIDogKHcgPiAwID8gMSA6IDApXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgTDI6IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB3ID0+IDAuNSAqIHcgKiB3LFxuICAgIGRlcjogdyA9PiB3XG4gIH07XG59XG5cbi8qKlxuICogQSBsaW5rIGluIGEgbmV1cmFsIG5ldHdvcmsuIEVhY2ggbGluayBoYXMgYSB3ZWlnaHQgYW5kIGEgc291cmNlIGFuZFxuICogZGVzdGluYXRpb24gbm9kZS4gQWxzbyBpdCBoYXMgYW4gaW50ZXJuYWwgc3RhdGUgKGVycm9yIGRlcml2YXRpdmVcbiAqIHdpdGggcmVzcGVjdCB0byBhIHBhcnRpY3VsYXIgaW5wdXQpIHdoaWNoIGdldHMgdXBkYXRlZCBhZnRlclxuICogYSBydW4gb2YgYmFjayBwcm9wYWdhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIExpbmsge1xuICBpZDogc3RyaW5nO1xuICBzb3VyY2U6IE5vZGU7XG4gIGRlc3Q6IE5vZGU7XG4gIHdlaWdodCA9IE1hdGgucmFuZG9tKCkgLSAwLjU7XG4gIGlzRGVhZCA9IGZhbHNlO1xuICAvKiogRXJyb3IgZGVyaXZhdGl2ZSB3aXRoIHJlc3BlY3QgdG8gdGhpcyB3ZWlnaHQuICovXG4gIGVycm9yRGVyID0gMDtcbiAgLyoqIEFjY3VtdWxhdGVkIGVycm9yIGRlcml2YXRpdmUgc2luY2UgdGhlIGxhc3QgdXBkYXRlLiAqL1xuICBhY2NFcnJvckRlciA9IDA7XG4gIC8qKiBOdW1iZXIgb2YgYWNjdW11bGF0ZWQgZGVyaXZhdGl2ZXMgc2luY2UgdGhlIGxhc3QgdXBkYXRlLiAqL1xuICBudW1BY2N1bXVsYXRlZERlcnMgPSAwO1xuICByZWd1bGFyaXphdGlvbjogUmVndWxhcml6YXRpb25GdW5jdGlvbjtcblxuICAvKipcbiAgICogQ29uc3RydWN0cyBhIGxpbmsgaW4gdGhlIG5ldXJhbCBuZXR3b3JrIGluaXRpYWxpemVkIHdpdGggcmFuZG9tIHdlaWdodC5cbiAgICpcbiAgICogQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG5vZGUuXG4gICAqIEBwYXJhbSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBub2RlLlxuICAgKiBAcGFyYW0gcmVndWxhcml6YXRpb24gVGhlIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgdGhlXG4gICAqICAgICBwZW5hbHR5IGZvciB0aGlzIHdlaWdodC4gSWYgbnVsbCwgdGhlcmUgd2lsbCBiZSBubyByZWd1bGFyaXphdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogTm9kZSwgZGVzdDogTm9kZSxcbiAgICAgIHJlZ3VsYXJpemF0aW9uOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uLCBpbml0WmVybz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlkID0gc291cmNlLmlkICsgXCItXCIgKyBkZXN0LmlkO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZGVzdCA9IGRlc3Q7XG4gICAgdGhpcy5yZWd1bGFyaXphdGlvbiA9IHJlZ3VsYXJpemF0aW9uO1xuICAgIGlmIChpbml0WmVybykge1xuICAgICAgdGhpcy53ZWlnaHQgPSAwO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhIG5ldXJhbCBuZXR3b3JrLlxuICpcbiAqIEBwYXJhbSBuZXR3b3JrU2hhcGUgVGhlIHNoYXBlIG9mIHRoZSBuZXR3b3JrLiBFLmcuIFsxLCAyLCAzLCAxXSBtZWFuc1xuICogICB0aGUgbmV0d29yayB3aWxsIGhhdmUgb25lIGlucHV0IG5vZGUsIDIgbm9kZXMgaW4gZmlyc3QgaGlkZGVuIGxheWVyLFxuICogICAzIG5vZGVzIGluIHNlY29uZCBoaWRkZW4gbGF5ZXIgYW5kIDEgb3V0cHV0IG5vZGUuXG4gKiBAcGFyYW0gYWN0aXZhdGlvbiBUaGUgYWN0aXZhdGlvbiBmdW5jdGlvbiBvZiBldmVyeSBoaWRkZW4gbm9kZS5cbiAqIEBwYXJhbSBvdXRwdXRBY3RpdmF0aW9uIFRoZSBhY3RpdmF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgb3V0cHV0IG5vZGVzLlxuICogQHBhcmFtIHJlZ3VsYXJpemF0aW9uIFRoZSByZWd1bGFyaXphdGlvbiBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIGEgcGVuYWx0eVxuICogICAgIGZvciBhIGdpdmVuIHdlaWdodCAocGFyYW1ldGVyKSBpbiB0aGUgbmV0d29yay4gSWYgbnVsbCwgdGhlcmUgd2lsbCBiZVxuICogICAgIG5vIHJlZ3VsYXJpemF0aW9uLlxuICogQHBhcmFtIGlucHV0SWRzIExpc3Qgb2YgaWRzIGZvciB0aGUgaW5wdXQgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5ldHdvcmsoXG4gICAgbmV0d29ya1NoYXBlOiBudW1iZXJbXSwgYWN0aXZhdGlvbjogQWN0aXZhdGlvbkZ1bmN0aW9uLFxuICAgIG91dHB1dEFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbixcbiAgICByZWd1bGFyaXphdGlvbjogUmVndWxhcml6YXRpb25GdW5jdGlvbixcbiAgICBpbnB1dElkczogc3RyaW5nW10sIGluaXRaZXJvPzogYm9vbGVhbik6IE5vZGVbXVtdIHtcbiAgbGV0IG51bUxheWVycyA9IG5ldHdvcmtTaGFwZS5sZW5ndGg7XG4gIGxldCBpZCA9IDE7XG4gIC8qKiBMaXN0IG9mIGxheWVycywgd2l0aCBlYWNoIGxheWVyIGJlaW5nIGEgbGlzdCBvZiBub2Rlcy4gKi9cbiAgbGV0IG5ldHdvcms6IE5vZGVbXVtdID0gW107XG4gIGZvciAobGV0IGxheWVySWR4ID0gMDsgbGF5ZXJJZHggPCBudW1MYXllcnM7IGxheWVySWR4KyspIHtcbiAgICBsZXQgaXNPdXRwdXRMYXllciA9IGxheWVySWR4ID09PSBudW1MYXllcnMgLSAxO1xuICAgIGxldCBpc0lucHV0TGF5ZXIgPSBsYXllcklkeCA9PT0gMDtcbiAgICBsZXQgY3VycmVudExheWVyOiBOb2RlW10gPSBbXTtcbiAgICBuZXR3b3JrLnB1c2goY3VycmVudExheWVyKTtcbiAgICBsZXQgbnVtTm9kZXMgPSBuZXR3b3JrU2hhcGVbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTm9kZXM7IGkrKykge1xuICAgICAgbGV0IG5vZGVJZCA9IGlkLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoaXNJbnB1dExheWVyKSB7XG4gICAgICAgIG5vZGVJZCA9IGlucHV0SWRzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQrKztcbiAgICAgIH1cbiAgICAgIGxldCBub2RlID0gbmV3IE5vZGUobm9kZUlkLFxuICAgICAgICAgIGlzT3V0cHV0TGF5ZXIgPyBvdXRwdXRBY3RpdmF0aW9uIDogYWN0aXZhdGlvbiwgaW5pdFplcm8pO1xuICAgICAgY3VycmVudExheWVyLnB1c2gobm9kZSk7XG4gICAgICBpZiAobGF5ZXJJZHggPj0gMSkge1xuICAgICAgICAvLyBBZGQgbGlua3MgZnJvbSBub2RlcyBpbiB0aGUgcHJldmlvdXMgbGF5ZXIgdG8gdGhpcyBub2RlLlxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ldHdvcmtbbGF5ZXJJZHggLSAxXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBwcmV2Tm9kZSA9IG5ldHdvcmtbbGF5ZXJJZHggLSAxXVtqXTtcbiAgICAgICAgICBsZXQgbGluayA9IG5ldyBMaW5rKHByZXZOb2RlLCBub2RlLCByZWd1bGFyaXphdGlvbiwgaW5pdFplcm8pO1xuICAgICAgICAgIHByZXZOb2RlLm91dHB1dHMucHVzaChsaW5rKTtcbiAgICAgICAgICBub2RlLmlucHV0TGlua3MucHVzaChsaW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV0d29yaztcbn1cblxuLyoqXG4gKiBSdW5zIGEgZm9yd2FyZCBwcm9wYWdhdGlvbiBvZiB0aGUgcHJvdmlkZWQgaW5wdXQgdGhyb3VnaCB0aGUgcHJvdmlkZWRcbiAqIG5ldHdvcmsuIFRoaXMgbWV0aG9kIG1vZGlmaWVzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgbmV0d29yayAtIHRoZVxuICogdG90YWwgaW5wdXQgYW5kIG91dHB1dCBvZiBlYWNoIG5vZGUgaW4gdGhlIG5ldHdvcmsuXG4gKlxuICogQHBhcmFtIG5ldHdvcmsgVGhlIG5ldXJhbCBuZXR3b3JrLlxuICogQHBhcmFtIGlucHV0cyBUaGUgaW5wdXQgYXJyYXkuIEl0cyBsZW5ndGggc2hvdWxkIG1hdGNoIHRoZSBudW1iZXIgb2YgaW5wdXRcbiAqICAgICBub2RlcyBpbiB0aGUgbmV0d29yay5cbiAqIEByZXR1cm4gVGhlIGZpbmFsIG91dHB1dCBvZiB0aGUgbmV0d29yay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRQcm9wKG5ldHdvcms6IE5vZGVbXVtdLCBpbnB1dHM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgbGV0IGlucHV0TGF5ZXIgPSBuZXR3b3JrWzBdO1xuICBpZiAoaW5wdXRzLmxlbmd0aCAhPT0gaW5wdXRMYXllci5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbnVtYmVyIG9mIGlucHV0cyBtdXN0IG1hdGNoIHRoZSBudW1iZXIgb2Ygbm9kZXMgaW5cIiArXG4gICAgICAgIFwiIHRoZSBpbnB1dCBsYXllclwiKTtcbiAgfVxuICAvLyBVcGRhdGUgdGhlIGlucHV0IGxheWVyLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbm9kZSA9IGlucHV0TGF5ZXJbaV07XG4gICAgbm9kZS5vdXRwdXQgPSBpbnB1dHNbaV07XG4gIH1cbiAgZm9yIChsZXQgbGF5ZXJJZHggPSAxOyBsYXllcklkeCA8IG5ldHdvcmsubGVuZ3RoOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIC8vIFVwZGF0ZSBhbGwgdGhlIG5vZGVzIGluIHRoaXMgbGF5ZXIuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgbm9kZS51cGRhdGVPdXRwdXQoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldHdvcmtbbmV0d29yay5sZW5ndGggLSAxXVswXS5vdXRwdXQ7XG59XG5cbi8qKlxuICogUnVucyBhIGJhY2t3YXJkIHByb3BhZ2F0aW9uIHVzaW5nIHRoZSBwcm92aWRlZCB0YXJnZXQgYW5kIHRoZVxuICogY29tcHV0ZWQgb3V0cHV0IG9mIHRoZSBwcmV2aW91cyBjYWxsIHRvIGZvcndhcmQgcHJvcGFnYXRpb24uXG4gKiBUaGlzIG1ldGhvZCBtb2RpZmllcyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIG5ldHdvcmsgLSB0aGUgZXJyb3JcbiAqIGRlcml2YXRpdmVzIHdpdGggcmVzcGVjdCB0byBlYWNoIG5vZGUsIGFuZCBlYWNoIHdlaWdodFxuICogaW4gdGhlIG5ldHdvcmsuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrUHJvcChuZXR3b3JrOiBOb2RlW11bXSwgdGFyZ2V0OiBudW1iZXIsXG4gICAgZXJyb3JGdW5jOiBFcnJvckZ1bmN0aW9uKTogdm9pZCB7XG4gIC8vIFRoZSBvdXRwdXQgbm9kZSBpcyBhIHNwZWNpYWwgY2FzZS4gV2UgdXNlIHRoZSB1c2VyLWRlZmluZWQgZXJyb3JcbiAgLy8gZnVuY3Rpb24gZm9yIHRoZSBkZXJpdmF0aXZlLlxuICBsZXQgb3V0cHV0Tm9kZSA9IG5ldHdvcmtbbmV0d29yay5sZW5ndGggLSAxXVswXTtcbiAgb3V0cHV0Tm9kZS5vdXRwdXREZXIgPSBlcnJvckZ1bmMuZGVyKG91dHB1dE5vZGUub3V0cHV0LCB0YXJnZXQpO1xuXG4gIC8vIEdvIHRocm91Z2ggdGhlIGxheWVycyBiYWNrd2FyZHMuXG4gIGZvciAobGV0IGxheWVySWR4ID0gbmV0d29yay5sZW5ndGggLSAxOyBsYXllcklkeCA+PSAxOyBsYXllcklkeC0tKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIC8vIENvbXB1dGUgdGhlIGVycm9yIGRlcml2YXRpdmUgb2YgZWFjaCBub2RlIHdpdGggcmVzcGVjdCB0bzpcbiAgICAvLyAxKSBpdHMgdG90YWwgaW5wdXRcbiAgICAvLyAyKSBlYWNoIG9mIGl0cyBpbnB1dCB3ZWlnaHRzLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIG5vZGUuaW5wdXREZXIgPSBub2RlLm91dHB1dERlciAqIG5vZGUuYWN0aXZhdGlvbi5kZXIobm9kZS50b3RhbElucHV0KTtcbiAgICAgIG5vZGUuYWNjSW5wdXREZXIgKz0gbm9kZS5pbnB1dERlcjtcbiAgICAgIG5vZGUubnVtQWNjdW11bGF0ZWREZXJzKys7XG4gICAgfVxuXG4gICAgLy8gRXJyb3IgZGVyaXZhdGl2ZSB3aXRoIHJlc3BlY3QgdG8gZWFjaCB3ZWlnaHQgY29taW5nIGludG8gdGhlIG5vZGUuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmlucHV0TGlua3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBub2RlLmlucHV0TGlua3Nbal07XG4gICAgICAgIGlmIChsaW5rLmlzRGVhZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsuZXJyb3JEZXIgPSBub2RlLmlucHV0RGVyICogbGluay5zb3VyY2Uub3V0cHV0O1xuICAgICAgICBsaW5rLmFjY0Vycm9yRGVyICs9IGxpbmsuZXJyb3JEZXI7XG4gICAgICAgIGxpbmsubnVtQWNjdW11bGF0ZWREZXJzKys7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXllcklkeCA9PT0gMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCBwcmV2TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4IC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gcHJldkxheWVyW2ldO1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgZXJyb3IgZGVyaXZhdGl2ZSB3aXRoIHJlc3BlY3QgdG8gZWFjaCBub2RlJ3Mgb3V0cHV0LlxuICAgICAgbm9kZS5vdXRwdXREZXIgPSAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLm91dHB1dHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IG5vZGUub3V0cHV0c1tqXTtcbiAgICAgICAgbm9kZS5vdXRwdXREZXIgKz0gb3V0cHV0LndlaWdodCAqIG91dHB1dC5kZXN0LmlucHV0RGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHdlaWdodHMgb2YgdGhlIG5ldHdvcmsgdXNpbmcgdGhlIHByZXZpb3VzbHkgYWNjdW11bGF0ZWQgZXJyb3JcbiAqIGRlcml2YXRpdmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2VpZ2h0cyhuZXR3b3JrOiBOb2RlW11bXSwgbGVhcm5pbmdSYXRlOiBudW1iZXIsXG4gICAgcmVndWxhcml6YXRpb25SYXRlOiBudW1iZXIpIHtcbiAgZm9yIChsZXQgbGF5ZXJJZHggPSAxOyBsYXllcklkeCA8IG5ldHdvcmsubGVuZ3RoOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgbm9kZSdzIGJpYXMuXG4gICAgICBpZiAobm9kZS5udW1BY2N1bXVsYXRlZERlcnMgPiAwKSB7XG4gICAgICAgIG5vZGUuYmlhcyAtPSBsZWFybmluZ1JhdGUgKiBub2RlLmFjY0lucHV0RGVyIC8gbm9kZS5udW1BY2N1bXVsYXRlZERlcnM7XG4gICAgICAgIG5vZGUuYWNjSW5wdXREZXIgPSAwO1xuICAgICAgICBub2RlLm51bUFjY3VtdWxhdGVkRGVycyA9IDA7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgdGhlIHdlaWdodHMgY29taW5nIGludG8gdGhpcyBub2RlLlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmlucHV0TGlua3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBub2RlLmlucHV0TGlua3Nbal07XG4gICAgICAgIGlmIChsaW5rLmlzRGVhZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWd1bERlciA9IGxpbmsucmVndWxhcml6YXRpb24gP1xuICAgICAgICAgICAgbGluay5yZWd1bGFyaXphdGlvbi5kZXIobGluay53ZWlnaHQpIDogMDtcbiAgICAgICAgaWYgKGxpbmsubnVtQWNjdW11bGF0ZWREZXJzID4gMCkge1xuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgd2VpZ2h0IGJhc2VkIG9uIGRFL2R3LlxuICAgICAgICAgIGxpbmsud2VpZ2h0ID0gbGluay53ZWlnaHQgLVxuICAgICAgICAgICAgICAobGVhcm5pbmdSYXRlIC8gbGluay5udW1BY2N1bXVsYXRlZERlcnMpICogbGluay5hY2NFcnJvckRlcjtcbiAgICAgICAgICAvLyBGdXJ0aGVyIHVwZGF0ZSB0aGUgd2VpZ2h0IGJhc2VkIG9uIHJlZ3VsYXJpemF0aW9uLlxuICAgICAgICAgIGxldCBuZXdMaW5rV2VpZ2h0ID0gbGluay53ZWlnaHQgLVxuICAgICAgICAgICAgICAobGVhcm5pbmdSYXRlICogcmVndWxhcml6YXRpb25SYXRlKSAqIHJlZ3VsRGVyO1xuICAgICAgICAgIGlmIChsaW5rLnJlZ3VsYXJpemF0aW9uID09PSBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwxICYmXG4gICAgICAgICAgICAgIGxpbmsud2VpZ2h0ICogbmV3TGlua1dlaWdodCA8IDApIHtcbiAgICAgICAgICAgIC8vIFRoZSB3ZWlnaHQgY3Jvc3NlZCAwIGR1ZSB0byB0aGUgcmVndWxhcml6YXRpb24gdGVybS4gU2V0IGl0IHRvIDAuXG4gICAgICAgICAgICBsaW5rLndlaWdodCA9IDA7XG4gICAgICAgICAgICBsaW5rLmlzRGVhZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpbmsud2VpZ2h0ID0gbmV3TGlua1dlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGluay5hY2NFcnJvckRlciA9IDA7XG4gICAgICAgICAgbGluay5udW1BY2N1bXVsYXRlZERlcnMgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKiBJdGVyYXRlcyBvdmVyIGV2ZXJ5IG5vZGUgaW4gdGhlIG5ldHdvcmsvICovXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaE5vZGUobmV0d29yazogTm9kZVtdW10sIGlnbm9yZUlucHV0czogYm9vbGVhbixcbiAgICBhY2Nlc3NvcjogKG5vZGU6IE5vZGUpID0+IGFueSkge1xuICBmb3IgKGxldCBsYXllcklkeCA9IGlnbm9yZUlucHV0cyA/IDEgOiAwO1xuICAgICAgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDtcbiAgICAgIGxheWVySWR4KyspIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgYWNjZXNzb3Iobm9kZSk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBSZXR1cm5zIHRoZSBvdXRwdXQgbm9kZSBpbiB0aGUgbmV0d29yay4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdXRwdXROb2RlKG5ldHdvcms6IE5vZGVbXVtdKSB7XG4gIHJldHVybiBuZXR3b3JrW25ldHdvcmsubGVuZ3RoIC0gMV1bMF07XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmltcG9ydCAqIGFzIG5uIGZyb20gXCIuL25uXCI7XG5pbXBvcnQge0hlYXRNYXAsIHJlZHVjZU1hdHJpeH0gZnJvbSBcIi4vaGVhdG1hcFwiO1xuaW1wb3J0IHtcbiAgU3RhdGUsXG4gIGRhdGFzZXRzLFxuICByZWdEYXRhc2V0cyxcbiAgYWN0aXZhdGlvbnMsXG4gIHByb2JsZW1zLFxuICByZWd1bGFyaXphdGlvbnMsXG4gIGdldEtleUZyb21WYWx1ZSxcbiAgUHJvYmxlbVxufSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHtFeGFtcGxlMkQsIHNodWZmbGV9IGZyb20gXCIuL2RhdGFzZXRcIjtcbmltcG9ydCB7QXBwZW5kaW5nTGluZUNoYXJ0fSBmcm9tIFwiLi9saW5lY2hhcnRcIjtcblxubGV0IG1haW5XaWR0aDtcblxuLy8gTW9yZSBzY3JvbGxpbmdcbmxldCBzdGF0ZSA9IFN0YXRlLmRlc2VyaWFsaXplU3RhdGUoKTtcbmxldCBnbG9iYWxJc1BsYXlpbmcgPSBmYWxzZTtcbmQzLnNlbGVjdChcIi5tb3JlIGJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBsZXQgcG9zaXRpb24gPSA4MDA7XG4gIGQzLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbigxMDAwKVxuICAgIC50d2VlbihcInNjcm9sbFwiLCBzY3JvbGxUd2Vlbihwb3NpdGlvbikpO1xufSk7XG5cbmZ1bmN0aW9uIHNjcm9sbFR3ZWVuKG9mZnNldCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGkgPSBkMy5pbnRlcnBvbGF0ZU51bWJlcih3aW5kb3cucGFnZVlPZmZzZXQgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgb2Zmc2V0KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkgeyBzY3JvbGxUbygwLCBpKHQpKTsgfTtcbiAgfTtcbn1cblxuY29uc3QgUkVDVF9TSVpFID0gMzA7XG5jb25zdCBCSUFTX1NJWkUgPSA1O1xuY29uc3QgTlVNX1NBTVBMRVNfQ0xBU1NJRlkgPSA1MDA7XG5jb25zdCBOVU1fU0FNUExFU19SRUdSRVNTID0gMTIwMDtcbmNvbnN0IERFTlNJVFkgPSAxMDA7XG52YXIgZGphbmdvRGF0YXNldCA9IFwiZm1fc2FtcGxlX2luZGVwZW5kZW50XCI7XG5cbmVudW0gSG92ZXJUeXBlIHtcbiAgQklBUywgV0VJR0hUXG59XG5cbmludGVyZmFjZSBJbnB1dEZlYXR1cmUge1xuICBmOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IG51bWJlcjtcbiAgbGFiZWw/OiBzdHJpbmc7XG59XG5cbmxldCBJTlBVVFM6IHtbbmFtZTogc3RyaW5nXTogSW5wdXRGZWF0dXJlfSA9IHtcbiAgXCJfNUFcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCI1QVwifSxcbiAgXCJfNUNcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCI1Q1wifSxcbiAgXCJfNUdcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCI1R1wifSxcbiAgXCJfNVRcIjoge2Y6ICh4LCB5KSA9PiB4LCAgbGFiZWw6IFwiNVRcIn0sXG4gIFwiXzNBXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiM0FcIn0sXG4gIFwiXzNDXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiM0NcIn0sXG4gIFwiXzNHXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiM0dcIn0sXG4gIFwiXzNUXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiM1RcIn0sXG4gIFwiX0NBXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiQz5BXCJ9LFxuICBcIl9DR1wiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIkM+R1wifSxcbiAgXCJfQ1RcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCJDPlRcIn0sXG4gIFwiX1RBXCI6IHtmOiAoeCwgeSkgPT4geSwgbGFiZWw6IFwiVD5BXCJ9LFxuICBcIl9UQ1wiOiB7ZjogKHgsIHkpID0+IHksIGxhYmVsOiBcIlQ+Q1wifSxcbiAgXCJfVEdcIjoge2Y6ICh4LCB5KSA9PiB5LCBsYWJlbDogXCJUPkdcIn0sXG59O1xuXG5sZXQgSElEQUJMRV9DT05UUk9MUyA9IFtcbiAgW1wiU2hvdyB0ZXN0IGRhdGFcIiwgXCJzaG93VGVzdERhdGFcIl0sXG4gIFtcIkRpc2NyZXRpemUgb3V0cHV0XCIsIFwiZGlzY3JldGl6ZVwiXSxcbiAgW1wiUGxheSBidXR0b25cIiwgXCJwbGF5QnV0dG9uXCJdLFxuICBbXCJTdGVwIGJ1dHRvblwiLCBcInN0ZXBCdXR0b25cIl0sXG4gIFtcIlJlc2V0IGJ1dHRvblwiLCBcInJlc2V0QnV0dG9uXCJdLFxuICBbXCJMZWFybmluZyByYXRlXCIsIFwibGVhcm5pbmdSYXRlXCJdLFxuICBbXCJBY3RpdmF0aW9uXCIsIFwiYWN0aXZhdGlvblwiXSxcbiAgW1wiUmVndWxhcml6YXRpb25cIiwgXCJyZWd1bGFyaXphdGlvblwiXSxcbiAgW1wiUmVndWxhcml6YXRpb24gcmF0ZVwiLCBcInJlZ3VsYXJpemF0aW9uUmF0ZVwiXSxcbiAgW1wiUHJvYmxlbSB0eXBlXCIsIFwicHJvYmxlbVwiXSxcbiAgW1wiV2hpY2ggZGF0YXNldFwiLCBcImRhdGFzZXRcIl0sXG4gIFtcIlJhdGlvIHRyYWluIGRhdGFcIiwgXCJwZXJjVHJhaW5EYXRhXCJdLFxuICBbXCJOb2lzZSBsZXZlbFwiLCBcIm5vaXNlXCJdLFxuICBbXCJCYXRjaCBzaXplXCIsIFwiYmF0Y2hTaXplXCJdLFxuICBbXCIjIG9mIGhpZGRlbiBsYXllcnNcIiwgXCJudW1IaWRkZW5MYXllcnNcIl0sXG5dO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBwcml2YXRlIHRpbWVySW5kZXggPSAwO1xuICBwcml2YXRlIGlzUGxheWluZyA9IGZhbHNlO1xuICBwcml2YXRlIGNhbGxiYWNrOiAoaXNQbGF5aW5nOiBib29sZWFuKSA9PiB2b2lkID0gbnVsbDtcblxuICAvKiogUGxheXMvcGF1c2VzIHRoZSBwbGF5ZXIuICovXG4gIHBsYXlPclBhdXNlKCkge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgaWYgKGl0ZXIgPT09IDApIHtcbiAgICAgICAgc2ltdWxhdGlvblN0YXJ0ZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGxheVBhdXNlKGNhbGxiYWNrOiAoaXNQbGF5aW5nOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnBhdXNlKCk7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgIHN0YXRlLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nXG5cbiAgICB2YXIgZGF0YSA9IFwiZGlzY3JldGl6ZT1cIitzdGF0ZS5kaXNjcmV0aXplK1wiJnBsYXk9VHJ1ZSZzaG93VGVzdERhdGE9XCIrc3RhdGUuc2hvd1Rlc3REYXRhO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAgZnVuY3Rpb24gKCkge1xuXG5cblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiBcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9ydW4vXCIpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcblxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5pc1BsYXlpbmcpO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0KHRoaXMudGltZXJJbmRleCk7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICB0aGlzLnRpbWVySW5kZXgrKztcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgIHN0YXRlLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nXG5cbiAgICAvLyBzZW50IHBvc3QgcmVxdWVzdFxuICAgIHZhciBkYXRhID0gXCJkaXNjcmV0aXplPVwiK3N0YXRlLmRpc2NyZXRpemUrXCImcGxheT1GYWxzZSZzaG93VGVzdERhdGE9XCIrc3RhdGUuc2hvd1Rlc3REYXRhO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0ICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpXG5cdCAge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3J1bi9cIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgICAgdmFyIHN0cjtcbiAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAge1xuICAgICAgIHN0ciA9IFwibm9uZVwiOyAgICBcbiAgIH1cbiAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwxKVxuICAge1xuICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgIH1cbiAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyKVxuICAge1xuICAgICAgIHN0ciA9IFwiTDJcIjtcbiAgIH1cblxuXG5cbiAgIHZhciBzdHIyO1xuICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuUkVMVSlcbiAgIHtcbiAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgfVxuICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuVEFOSClcbiAgIHtcbiAgICAgICBzdHIyID0gXCJUQU5IXCI7XG4gICB9XG4gICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAge1xuICAgICAgIHN0cjIgPSBcIlNJR01PSURcIjtcbiAgIH1cblxuICAgICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBcImRhdGFzZXQ9XCIrZGphbmdvRGF0YXNldCtcIiZ3ZWlnaHRzPVwiK3N0YXRlLndlaWdodHMrXCImYmlhc2VzPVwiK3N0YXRlLmJpYXNlcztcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc2V0dGluZ3MvXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcblxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xuICAgICAgIFxuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5pc1BsYXlpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnQobG9jYWxUaW1lckluZGV4OiBudW1iZXIpIHtcbiAgICBkMy50aW1lcigoKSA9PiB7XG4gICAgICBpZiAobG9jYWxUaW1lckluZGV4IDwgdGhpcy50aW1lckluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAgLy8gRG9uZS5cbiAgICAgIH1cbiAgICAgIG9uZVN0ZXAoKTtcbiAgICAgIHJldHVybiBmYWxzZTsgIC8vIE5vdCBkb25lLlxuICAgIH0sIDApO1xuICB9XG59XG5cbi8vbGV0IHN0YXRlID0gU3RhdGUuZGVzZXJpYWxpemVTdGF0ZSgpO1xuXG4vLyBGaWx0ZXIgb3V0IGlucHV0cyB0aGF0IGFyZSBoaWRkZW4uXG5zdGF0ZS5nZXRIaWRkZW5Qcm9wcygpLmZvckVhY2gocHJvcCA9PiB7XG4gIGlmIChwcm9wIGluIElOUFVUUykge1xuICAgIGRlbGV0ZSBJTlBVVFNbcHJvcF07XG4gIH1cbn0pO1xuXG5sZXQgYm91bmRhcnk6IHtbaWQ6IHN0cmluZ106IG51bWJlcltdW119ID0ge307XG5sZXQgc2VsZWN0ZWROb2RlSWQ6IHN0cmluZyA9IG51bGw7XG4vLyBQbG90IHRoZSBoZWF0bWFwLlxubGV0IHhEb21haW46IFtudW1iZXIsIG51bWJlcl0gPSBbLTgwMCwgNDAwXTtcbmxldCB5RG9tYWluOiBbbnVtYmVyLCBudW1iZXJdID0gWy01MDAsIDUwMF07XG5sZXQgaGVhdE1hcCA9XG4gICAgbmV3IEhlYXRNYXAoMzAwLCBERU5TSVRZLCB4RG9tYWluLCB5RG9tYWluLCBkMy5zZWxlY3QoXCIjaGVhdG1hcFwiKSxcbiAgICAgICAge3Nob3dBeGVzOiB0cnVlfSk7XG5sZXQgbGlua1dpZHRoU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAuZG9tYWluKFswLCA1XSlcbiAgLnJhbmdlKFsxLCAxMF0pXG4gIC5jbGFtcCh0cnVlKTtcbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGUubGluZWFyPHN0cmluZz4oKVxuICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbLTEsIDAsIDFdKVxuICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFtcIiNmNTkzMjJcIiwgXCIjZThlYWViXCIsIFwiIzA4NzdiZFwiXSlcbiAgICAgICAgICAgICAgICAgICAgIC5jbGFtcCh0cnVlKTtcbmxldCBpdGVyID0gMDtcbmxldCB0cmFpbkRhdGE6IEV4YW1wbGUyRFtdID0gW107XG5sZXQgdGVzdERhdGE6IEV4YW1wbGUyRFtdID0gW107XG5sZXQgbmV0d29yazogbm4uTm9kZVtdW10gPSBudWxsO1xubGV0IGxvc3NUcmFpbiA9IDA7XG5sZXQgbG9zc1Rlc3QgPSAwO1xubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbmxldCBsaW5lQ2hhcnQgPSBuZXcgQXBwZW5kaW5nTGluZUNoYXJ0KGQzLnNlbGVjdChcIiNsaW5lY2hhcnRcIiksXG4gICAgW1wiIzc3N1wiLCBcImJsYWNrXCJdKTtcblxuZnVuY3Rpb24gbWFrZUdVSSgpIHtcbiAgZDMuc2VsZWN0KFwiI3Jlc2V0LWJ1dHRvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldCgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgZDMuc2VsZWN0KFwiI3BsYXktcGF1c2UtYnV0dG9uXCIpO1xuICB9KTtcblxuICBkMy5zZWxlY3QoXCIjcGxheS1wYXVzZS1idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hhbmdlIHRoZSBidXR0b24ncyBjb250ZW50LlxuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgcGxheWVyLnBsYXlPclBhdXNlKCk7XG4gIH0pO1xuXG4gIHBsYXllci5vblBsYXlQYXVzZShpc1BsYXlpbmcgPT4ge1xuICAgIGQzLnNlbGVjdChcIiNwbGF5LXBhdXNlLWJ1dHRvblwiKS5jbGFzc2VkKFwicGxheWluZ1wiLCBpc1BsYXlpbmcpO1xuICB9KTtcblxuICBkMy5zZWxlY3QoXCIjbmV4dC1zdGVwLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICAgIGlmIChpdGVyID09PSAwKSB7XG4gICAgICBzaW11bGF0aW9uU3RhcnRlZCgpO1xuICAgIH1cbiAgICBvbmVTdGVwKCk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNkYXRhLXJlZ2VuLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gIH0pO1xuXG4gIGxldCBkYXRhVGh1bWJuYWlscyA9IGQzLnNlbGVjdEFsbChcImNhbnZhc1tkYXRhLWRhdGFzZXRdXCIpO1xuICBkYXRhVGh1bWJuYWlscy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBuZXdEYXRhc2V0ID0gZGF0YXNldHNbdGhpcy5kYXRhc2V0LmRhdGFzZXRdO1xuICAgIGlmIChuZXdEYXRhc2V0ID09PSBzdGF0ZS5kYXRhc2V0KSB7XG4gICAgICByZXR1cm47IC8vIE5vLW9wLlxuICAgIH1cblxuICAgIHN0YXRlLmRhdGFzZXQgPSAgbmV3RGF0YXNldDtcbiAgICBkamFuZ29EYXRhc2V0ID0gdGhpcy5kYXRhc2V0LmRhdGFzZXQ7XG4gICAgdmFyIGRhdGEgPSBcImRhdGFzZXQ9XCIrdGhpcy5kYXRhc2V0LmRhdGFzZXQrXCImd2VpZ2h0cz1cIitzdGF0ZS53ZWlnaHRzK1wiJmJpYXNlcz1cIitzdGF0ZS5iaWFzZXM7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zZXR0aW5ncy9cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBkYXRhVGh1bWJuYWlscy5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGxldCBkYXRhc2V0S2V5ID0gZ2V0S2V5RnJvbVZhbHVlKGRhdGFzZXRzLCBzdGF0ZS5kYXRhc2V0KTtcbiAgLy8gU2VsZWN0IHRoZSBkYXRhc2V0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgZDMuc2VsZWN0KGBjYW52YXNbZGF0YS1kYXRhc2V0PSR7ZGF0YXNldEtleX1dYClcbiAgICAuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpO1xuXG4gIGxldCByZWdEYXRhVGh1bWJuYWlscyA9IGQzLnNlbGVjdEFsbChcImNhbnZhc1tkYXRhLXJlZ0RhdGFzZXRdXCIpO1xuICByZWdEYXRhVGh1bWJuYWlscy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBuZXdEYXRhc2V0ID0gcmVnRGF0YXNldHNbdGhpcy5kYXRhc2V0LnJlZ2RhdGFzZXRdO1xuICAgIGlmIChuZXdEYXRhc2V0ID09PSBzdGF0ZS5yZWdEYXRhc2V0KSB7XG4gICAgICByZXR1cm47IC8vIE5vLW9wLlxuICAgIH1cbiAgICBzdGF0ZS5yZWdEYXRhc2V0ID0gIG5ld0RhdGFzZXQ7XG4gICAgZGphbmdvRGF0YXNldCA9IHRoaXMuZGF0YXNldC5yZWdkYXRhc2V0O1xuICAgIHZhciBkYXRhID0gXCJkYXRhc2V0PVwiK3RoaXMuZGF0YXNldC5yZWdkYXRhc2V0K1wiJndlaWdodHM9XCIrc3RhdGUud2VpZ2h0cytcIiZiaWFzZXM9XCIrc3RhdGUuYmlhc2VzO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc2V0dGluZ3MvXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcmVnRGF0YVRodW1ibmFpbHMuY2xhc3NlZChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgIGdlbmVyYXRlRGF0YSgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcblxuICBsZXQgcmVnRGF0YXNldEtleSA9IGdldEtleUZyb21WYWx1ZShyZWdEYXRhc2V0cywgc3RhdGUucmVnRGF0YXNldCk7XG4gIC8vIFNlbGVjdCB0aGUgZGF0YXNldCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXG4gIGQzLnNlbGVjdChgY2FudmFzW2RhdGEtcmVnRGF0YXNldD0ke3JlZ0RhdGFzZXRLZXl9XWApXG4gICAgLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCB0cnVlKTtcblxuICBkMy5zZWxlY3QoXCIjYWRkLWxheWVyc1wiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoc3RhdGUubnVtSGlkZGVuTGF5ZXJzID49IDEwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLm5ldHdvcmtTaGFwZVtzdGF0ZS5udW1IaWRkZW5MYXllcnNdID0gMjtcbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMrKztcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNyZW1vdmUtbGF5ZXJzXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5udW1IaWRkZW5MYXllcnMgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMtLTtcbiAgICBzdGF0ZS5uZXR3b3JrU2hhcGUuc3BsaWNlKHN0YXRlLm51bUhpZGRlbkxheWVycyk7XG5cbiAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICArXCImbnVtSGlkZGVuTGF5ZXJzPVwiK3N0YXRlLm51bUhpZGRlbkxheWVycytcIiZuZXR3b3JrU2hhcGU9XCIrc3RhdGUubmV0d29ya1NoYXBlO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGxldCBzaG93VGVzdERhdGEgPSBkMy5zZWxlY3QoXCIjc2hvdy10ZXN0LWRhdGFcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUuc2hvd1Rlc3REYXRhID0gdGhpcy5jaGVja2VkO1xuXG4gICAgdmFyIGRhdGEgPSBcImRpc2NyZXRpemU9XCIrc3RhdGUuZGlzY3JldGl6ZStcIiZwbGF5PVwiK3N0YXRlLmlzUGxheWluZytcIiZzaG93VGVzdERhdGE9XCIrc3RhdGUuc2hvd1Rlc3REYXRhO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9ydW4vXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgc3RhdGUuc2VyaWFsaXplKCk7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBoZWF0TWFwLnVwZGF0ZVRlc3RQb2ludHMoc3RhdGUuc2hvd1Rlc3REYXRhID8gdGVzdERhdGEgOiBbXSk7XG4gIH0pO1xuICAvLyBDaGVjay91bmNoZWNrIHRoZSBjaGVja2JveCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXG4gIHNob3dUZXN0RGF0YS5wcm9wZXJ0eShcImNoZWNrZWRcIiwgc3RhdGUuc2hvd1Rlc3REYXRhKTtcblxuICBsZXQgZGlzY3JldGl6ZSA9IGQzLnNlbGVjdChcIiNkaXNjcmV0aXplXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLmRpc2NyZXRpemUgPSB0aGlzLmNoZWNrZWQ7XG5cbiAgICB2YXIgZGF0YSA9IFwiZGlzY3JldGl6ZT1cIitzdGF0ZS5kaXNjcmV0aXplK1wiJnBsYXk9XCIrc3RhdGUuaXNQbGF5aW5nK1wiJnNob3dUZXN0RGF0YT1cIitzdGF0ZS5zaG93VGVzdERhdGE7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvcnVuL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICAgIHVwZGF0ZVVJKCk7XG4gIH0pO1xuICAvLyBDaGVjay91bmNoZWNrIHRoZSBjaGVjYm94IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgZGlzY3JldGl6ZS5wcm9wZXJ0eShcImNoZWNrZWRcIiwgc3RhdGUuZGlzY3JldGl6ZSk7XG5cbiAgbGV0IHBlcmNUcmFpbiA9IGQzLnNlbGVjdChcIiNwZXJjVHJhaW5EYXRhXCIpLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUucGVyY1RyYWluRGF0YSA9IHRoaXMudmFsdWU7XG5cbiAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICArXCImbnVtSGlkZGVuTGF5ZXJzPVwiK3N0YXRlLm51bUhpZGRlbkxheWVycytcIiZuZXR3b3JrU2hhcGU9XCIrc3RhdGUubmV0d29ya1NoYXBlO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0ncGVyY1RyYWluRGF0YSddIC52YWx1ZVwiKS50ZXh0KHRoaXMudmFsdWUpO1xuICAgIGdlbmVyYXRlRGF0YSgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgcGVyY1RyYWluLnByb3BlcnR5KFwidmFsdWVcIiwgc3RhdGUucGVyY1RyYWluRGF0YSk7XG4gIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0ncGVyY1RyYWluRGF0YSddIC52YWx1ZVwiKS50ZXh0KHN0YXRlLnBlcmNUcmFpbkRhdGEpO1xuXG4gIGxldCBub2lzZSA9IGQzLnNlbGVjdChcIiNub2lzZVwiKS5vbihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLm5vaXNlID0gdGhpcy52YWx1ZTtcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdub2lzZSddIC52YWx1ZVwiKS50ZXh0KHRoaXMudmFsdWUpO1xuICAgIC8vZ2VuZXJhdGVEYXRhKCk7XG4gICAgLy9wYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgLy9yZXNldCgpO1xuICB9KTtcbiAgbGV0IGN1cnJlbnRNYXggPSBwYXJzZUludChub2lzZS5wcm9wZXJ0eShcIm1heFwiKSk7XG4gIC8qaWYgKHN0YXRlLm5vaXNlID4gY3VycmVudE1heCkge1xuICAgIGlmIChzdGF0ZS5ub2lzZSA8PSA4MCkge1xuICAgICAgbm9pc2UucHJvcGVydHkoXCJtYXhcIiwgc3RhdGUubm9pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5ub2lzZSA9IDUwO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0ZS5ub2lzZSA8IDApIHtcbiAgICBzdGF0ZS5ub2lzZSA9IDA7XG4gIH0qL1xuICBub2lzZS5wcm9wZXJ0eShcInZhbHVlXCIsIHN0YXRlLm5vaXNlKTtcbiAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdub2lzZSddIC52YWx1ZVwiKS50ZXh0KHN0YXRlLm5vaXNlKTtcblxuICBsZXQgYmF0Y2hTaXplID0gZDMuc2VsZWN0KFwiI2JhdGNoU2l6ZVwiKS5vbihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLmJhdGNoU2l6ZSA9IHRoaXMudmFsdWU7XG5cbiAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICArXCImbnVtSGlkZGVuTGF5ZXJzPVwiK3N0YXRlLm51bUhpZGRlbkxheWVycytcIiZuZXR3b3JrU2hhcGU9XCIrc3RhdGUubmV0d29ya1NoYXBlO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cblxuICAgIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0nYmF0Y2hTaXplJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBiYXRjaFNpemUucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5iYXRjaFNpemUpO1xuICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J2JhdGNoU2l6ZSddIC52YWx1ZVwiKS50ZXh0KHN0YXRlLmJhdGNoU2l6ZSk7XG5cbiAgbGV0IGFjdGl2YXRpb25Ecm9wZG93biA9IGQzLnNlbGVjdChcIiNhY3RpdmF0aW9uc1wiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5hY3RpdmF0aW9uID0gYWN0aXZhdGlvbnNbdGhpcy52YWx1ZV07XG5cbiAgICB2YXIgc3RyO1xuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwyXCI7XG4gICAgfVxuXG5cblxuICAgIHZhciBzdHIyO1xuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuXG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9hcmd1bWVudHMvXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgYWN0aXZhdGlvbkRyb3Bkb3duLnByb3BlcnR5KFwidmFsdWVcIixcbiAgICAgIGdldEtleUZyb21WYWx1ZShhY3RpdmF0aW9ucywgc3RhdGUuYWN0aXZhdGlvbikpO1xuXG4gIGxldCBsZWFybmluZ1JhdGUgPSBkMy5zZWxlY3QoXCIjbGVhcm5pbmdSYXRlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLmxlYXJuaW5nUmF0ZSA9IHRoaXMudmFsdWU7XG5cbiAgICB2YXIgc3RyO1xuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwyXCI7XG4gICAgfVxuXG5cblxuICAgIHZhciBzdHIyO1xuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuXG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9hcmd1bWVudHMvXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICB9KTtcbiAgbGVhcm5pbmdSYXRlLnByb3BlcnR5KFwidmFsdWVcIiwgc3RhdGUubGVhcm5pbmdSYXRlKTtcblxuICBsZXQgcmVndWxhckRyb3Bkb3duID0gZDMuc2VsZWN0KFwiI3JlZ3VsYXJpemF0aW9uc1wiKS5vbihcImNoYW5nZVwiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUucmVndWxhcml6YXRpb24gPSByZWd1bGFyaXphdGlvbnNbdGhpcy52YWx1ZV07XG5cbiAgICB2YXIgc3RyO1xuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwyXCI7XG4gICAgfVxuXG5cblxuICAgIHZhciBzdHIyO1xuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL2FyZ3VtZW50cy9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICByZWd1bGFyRHJvcGRvd24ucHJvcGVydHkoXCJ2YWx1ZVwiLFxuICAgICAgZ2V0S2V5RnJvbVZhbHVlKHJlZ3VsYXJpemF0aW9ucywgc3RhdGUucmVndWxhcml6YXRpb24pKTtcblxuICBsZXQgcmVndWxhclJhdGUgPSBkMy5zZWxlY3QoXCIjcmVndWxhclJhdGVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUucmVndWxhcml6YXRpb25SYXRlID0gdGhpcy52YWx1ZTtcblxuICAgIHZhciBzdHI7XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG51bGwpXG4gICAge1xuICAgICAgICBzdHIgPSBcIm5vbmVcIjsgICAgXG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwxKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMVwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMilcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDJcIjtcbiAgICB9XG5cblxuXG4gICAgdmFyIHN0cjI7XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuUkVMVSlcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlJFTFVcIjsgICAgXG4gICAgfVxuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlRBTkgpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJUQU5IXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlNJR01PSUQpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJTSUdNT0lEXCI7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBcImxlYXJuaW5nUmF0ZT1cIitzdGF0ZS5sZWFybmluZ1JhdGUrXCImYWN0aXZhdGlvbj1cIitzdHIyK1wiJnJlZ3VsYXJpemF0aW9uPVwiK3N0citcIiZyZWd1bGFyaXphdGlvblJhdGU9XCIrc3RhdGUucmVndWxhcml6YXRpb25SYXRlK1wiJnByb2JsZW1UeXBlPVwiK3N0YXRlLnByb2JsZW07XG5cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIHJlZ3VsYXJSYXRlLnByb3BlcnR5KFwidmFsdWVcIiwgc3RhdGUucmVndWxhcml6YXRpb25SYXRlKTtcblxuICBsZXQgcHJvYmxlbSA9IGQzLnNlbGVjdChcIiNwcm9ibGVtXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLnByb2JsZW0gPSBwcm9ibGVtc1t0aGlzLnZhbHVlXTtcblxuICAgIHZhciBzdHI7XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG51bGwpXG4gICAge1xuICAgICAgICBzdHIgPSBcIm5vbmVcIjsgICAgXG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwxKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMVwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMilcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDJcIjtcbiAgICB9XG5cblxuXG4gICAgdmFyIHN0cjI7XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuUkVMVSlcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlJFTFVcIjsgICAgXG4gICAgfVxuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlRBTkgpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJUQU5IXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlNJR01PSUQpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJTSUdNT0lEXCI7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBcImxlYXJuaW5nUmF0ZT1cIitzdGF0ZS5sZWFybmluZ1JhdGUrXCImYWN0aXZhdGlvbj1cIitzdHIyK1wiJnJlZ3VsYXJpemF0aW9uPVwiK3N0citcIiZyZWd1bGFyaXphdGlvblJhdGU9XCIrc3RhdGUucmVndWxhcml6YXRpb25SYXRlK1wiJnByb2JsZW1UeXBlPVwiK3N0YXRlLnByb2JsZW07XG5cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBkcmF3RGF0YXNldFRodW1ibmFpbHMoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIHByb2JsZW0ucHJvcGVydHkoXCJ2YWx1ZVwiLCBnZXRLZXlGcm9tVmFsdWUocHJvYmxlbXMsIHN0YXRlLnByb2JsZW0pKTtcblxuICAvLyBBZGQgc2NhbGUgdG8gdGhlIGdyYWRpZW50IGNvbG9yIG1hcC5cbiAgbGV0IHggPSBkMy5zY2FsZS5saW5lYXIoKS5kb21haW4oWy0xLCAxXSkucmFuZ2UoWzAsIDE0NF0pO1xuICBsZXQgeEF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgLnNjYWxlKHgpXG4gICAgLm9yaWVudChcImJvdHRvbVwiKVxuICAgIC50aWNrVmFsdWVzKFstMSwgMCwgMV0pXG4gICAgLnRpY2tGb3JtYXQoZDMuZm9ybWF0KFwiZFwiKSk7XG4gIGQzLnNlbGVjdChcIiNjb2xvcm1hcCBnLmNvcmVcIikuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDEwKVwiKVxuICAgIC5jYWxsKHhBeGlzKTtcblxuICAvLyBMaXN0ZW4gZm9yIGNzcy1yZXNwb25zaXZlIGNoYW5nZXMgYW5kIHJlZHJhdyB0aGUgc3ZnIG5ldHdvcmsuXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGxldCBuZXdXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1wYXJ0XCIpXG4gICAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBpZiAobmV3V2lkdGggIT09IG1haW5XaWR0aCkge1xuICAgICAgbWFpbldpZHRoID0gbmV3V2lkdGg7XG4gICAgICBkcmF3TmV0d29yayhuZXR3b3JrKTtcbiAgICAgIHVwZGF0ZVVJKHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gSGlkZSB0aGUgdGV4dCBiZWxvdyB0aGUgdmlzdWFsaXphdGlvbiBkZXBlbmRpbmcgb24gdGhlIFVSTC5cbiAgaWYgKHN0YXRlLmhpZGVUZXh0KSB7XG4gICAgZDMuc2VsZWN0KFwiI2FydGljbGUtdGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcImRpdi5tb3JlXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgZDMuc2VsZWN0KFwiaGVhZGVyXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmlhc2VzVUkobmV0d29yazogbm4uTm9kZVtdW10pIHtcbiAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgZDMuc2VsZWN0KGByZWN0I2JpYXMtJHtub2RlLmlkfWApLnN0eWxlKFwiZmlsbFwiLCBjb2xvclNjYWxlKG5vZGUuYmlhcykpO1xuICB9KTtcblxuICAgc3RhdGUuYmlhc2VzID0gdHJ1ZTtcbiAgdmFyIGRhdGEgPSBcImRhdGFzZXQ9XCIrZGphbmdvRGF0YXNldCtcIiZ3ZWlnaHRzPVwiK3N0YXRlLndlaWdodHMrXCImYmlhc2VzPVwiK3N0YXRlLmJpYXNlcztcbiAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zZXR0aW5ncy9cIik7XG4gICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcblxuICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgeGhyLnNlbmQoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlaWdodHNVSShuZXR3b3JrOiBubi5Ob2RlW11bXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55Pikge1xuXG5cbiAgZm9yIChsZXQgbGF5ZXJJZHggPSAxOyBsYXllcklkeCA8IG5ldHdvcmsubGVuZ3RoOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIC8vIFVwZGF0ZSBhbGwgdGhlIG5vZGVzIGluIHRoaXMgbGF5ZXIuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmlucHV0TGlua3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBub2RlLmlucHV0TGlua3Nbal07XG4gICAgICAgIGNvbnRhaW5lci5zZWxlY3QoYCNsaW5rJHtsaW5rLnNvdXJjZS5pZH0tJHtsaW5rLmRlc3QuaWR9YClcbiAgICAgICAgICAgIC5zdHlsZSh7XG4gICAgICAgICAgICAgIFwic3Ryb2tlLWRhc2hvZmZzZXRcIjogLWl0ZXIgLyAzLFxuICAgICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiBsaW5rV2lkdGhTY2FsZShNYXRoLmFicyhsaW5rLndlaWdodCkpLFxuICAgICAgICAgICAgICBcInN0cm9rZVwiOiBjb2xvclNjYWxlKGxpbmsud2VpZ2h0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kYXR1bShsaW5rKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuc3RhdGUud2VpZ2h0cyA9IHRydWU7XG4gIHZhciBkYXRhID0gXCJkYXRhc2V0PVwiK2RqYW5nb0RhdGFzZXQrXCImd2VpZ2h0cz1cIitzdGF0ZS53ZWlnaHRzK1wiJmJpYXNlcz1cIitzdGF0ZS5iaWFzZXM7XG4gICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc2V0dGluZ3MvXCIpO1xuICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgIHhoci5zZW5kKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBkcmF3Tm9kZShjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBub2RlSWQ6IHN0cmluZywgaXNJbnB1dDogYm9vbGVhbixcbiAgICBjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LCBub2RlPzogbm4uTm9kZSkge1xuICBsZXQgeCA9IGN4IC0gUkVDVF9TSVpFIC8gMjtcbiAgbGV0IHkgPSBjeSAtIFJFQ1RfU0laRSAvIDI7XG5cbiAgbGV0IG5vZGVHcm91cCA9IGNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoe1xuICAgICAgXCJjbGFzc1wiOiBcIm5vZGVcIixcbiAgICAgIFwiaWRcIjogYG5vZGUke25vZGVJZH1gLFxuICAgICAgXCJ0cmFuc2Zvcm1cIjogYHRyYW5zbGF0ZSgke3h9LCR7eX0pYFxuICAgIH0pO1xuXG4gIC8vIERyYXcgdGhlIG1haW4gcmVjdGFuZ2xlLlxuICBub2RlR3JvdXAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgd2lkdGg6IFJFQ1RfU0laRSxcbiAgICAgIGhlaWdodDogUkVDVF9TSVpFLFxuICAgIH0pO1xuICBsZXQgYWN0aXZlT3JOb3RDbGFzcyA9IHN0YXRlW25vZGVJZF0gPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZVwiO1xuICBpZiAoaXNJbnB1dCkge1xuICAgIGxldCBsYWJlbCA9IElOUFVUU1tub2RlSWRdLmxhYmVsICE9IG51bGwgP1xuICAgICAgICBJTlBVVFNbbm9kZUlkXS5sYWJlbCA6IG5vZGVJZDtcbiAgICAvLyBEcmF3IHRoZSBpbnB1dCBsYWJlbC5cbiAgICBsZXQgdGV4dCA9IG5vZGVHcm91cC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoe1xuICAgICAgY2xhc3M6IFwibWFpbi1sYWJlbFwiLFxuICAgICAgeDogLTEwLFxuICAgICAgeTogUkVDVF9TSVpFIC8gMiwgXCJ0ZXh0LWFuY2hvclwiOiBcImVuZFwiXG4gICAgfSk7XG4gICAgaWYgKC9bX15dLy50ZXN0KGxhYmVsKSkge1xuICAgICAgbGV0IG15UmUgPSAvKC4qPykoW19eXSkoLikvZztcbiAgICAgIGxldCBteUFycmF5O1xuICAgICAgbGV0IGxhc3RJbmRleDtcbiAgICAgIHdoaWxlICgobXlBcnJheSA9IG15UmUuZXhlYyhsYWJlbCkpICE9IG51bGwpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gbXlSZS5sYXN0SW5kZXg7XG4gICAgICAgIGxldCBwcmVmaXggPSBteUFycmF5WzFdO1xuICAgICAgICBsZXQgc2VwID0gbXlBcnJheVsyXTtcbiAgICAgICAgbGV0IHN1ZmZpeCA9IG15QXJyYXlbM107XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLnRleHQocHJlZml4KTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpXG4gICAgICAgIC5hdHRyKFwiYmFzZWxpbmUtc2hpZnRcIiwgc2VwID09PSBcIl9cIiA/IFwic3ViXCIgOiBcInN1cGVyXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjlweFwiKVxuICAgICAgICAudGV4dChzdWZmaXgpO1xuICAgICAgfVxuICAgICAgaWYgKGxhYmVsLnN1YnN0cmluZyhsYXN0SW5kZXgpKSB7XG4gICAgICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikudGV4dChsYWJlbC5zdWJzdHJpbmcobGFzdEluZGV4KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikudGV4dChsYWJlbCk7XG4gICAgfVxuICAgIG5vZGVHcm91cC5jbGFzc2VkKGFjdGl2ZU9yTm90Q2xhc3MsIHRydWUpO1xuICB9XG4gIGlmICghaXNJbnB1dCkge1xuICAgIC8vIERyYXcgdGhlIG5vZGUncyBiaWFzLlxuICAgIG5vZGVHcm91cC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cih7XG4gICAgICAgIGlkOiBgYmlhcy0ke25vZGVJZH1gLFxuICAgICAgICB4OiAtQklBU19TSVpFIC0gMixcbiAgICAgICAgeTogUkVDVF9TSVpFIC0gQklBU19TSVpFICsgMyxcbiAgICAgICAgd2lkdGg6IEJJQVNfU0laRSxcbiAgICAgICAgaGVpZ2h0OiBCSUFTX1NJWkUsXG4gICAgICB9KS5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUhvdmVyQ2FyZChIb3ZlclR5cGUuQklBUywgbm9kZSwgZDMubW91c2UoY29udGFpbmVyLm5vZGUoKSkpO1xuICAgICAgfSkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVIb3ZlckNhcmQobnVsbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIERyYXcgdGhlIG5vZGUncyBjYW52YXMuXG4gIGxldCBkaXYgPSBkMy5zZWxlY3QoXCIjbmV0d29ya1wiKS5pbnNlcnQoXCJkaXZcIiwgXCI6Zmlyc3QtY2hpbGRcIilcbiAgICAuYXR0cih7XG4gICAgICBcImlkXCI6IGBjYW52YXMtJHtub2RlSWR9YCxcbiAgICAgIFwiY2xhc3NcIjogXCJjYW52YXNcIlxuICAgIH0pXG4gICAgLnN0eWxlKHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBgJHt4ICsgM31weGAsXG4gICAgICB0b3A6IGAke3kgKyAzfXB4YFxuICAgIH0pXG4gICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGVjdGVkTm9kZUlkID0gbm9kZUlkO1xuICAgICAgZGl2LmNsYXNzZWQoXCJob3ZlcmVkXCIsIHRydWUpO1xuICAgICAgbm9kZUdyb3VwLmNsYXNzZWQoXCJob3ZlcmVkXCIsIHRydWUpO1xuICAgICAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmYWxzZSk7XG4gICAgICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbbm9kZUlkXSwgc3RhdGUuZGlzY3JldGl6ZSk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZWN0ZWROb2RlSWQgPSBudWxsO1xuICAgICAgZGl2LmNsYXNzZWQoXCJob3ZlcmVkXCIsIGZhbHNlKTtcbiAgICAgIG5vZGVHcm91cC5jbGFzc2VkKFwiaG92ZXJlZFwiLCBmYWxzZSk7XG4gICAgICB1cGRhdGVEZWNpc2lvbkJvdW5kYXJ5KG5ldHdvcmssIGZhbHNlKTtcbiAgICAgIGhlYXRNYXAudXBkYXRlQmFja2dyb3VuZChib3VuZGFyeVtubi5nZXRPdXRwdXROb2RlKG5ldHdvcmspLmlkXSxcbiAgICAgICAgICBzdGF0ZS5kaXNjcmV0aXplKTtcbiAgICB9KTtcbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBkaXYub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHN0YXRlW25vZGVJZF0gPSAhc3RhdGVbbm9kZUlkXTtcbiAgICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHJlc2V0KCk7XG4gICAgfSk7XG4gICAgZGl2LnN0eWxlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgfVxuICBpZiAoaXNJbnB1dCkge1xuICAgIGRpdi5jbGFzc2VkKGFjdGl2ZU9yTm90Q2xhc3MsIHRydWUpO1xuICB9XG4gIGxldCBub2RlSGVhdE1hcCA9IG5ldyBIZWF0TWFwKFJFQ1RfU0laRSwgREVOU0lUWSAvIDEwLCB4RG9tYWluLFxuICAgICAgeERvbWFpbiwgZGl2LCB7bm9Tdmc6IHRydWV9KTtcbiAgZGl2LmRhdHVtKHtoZWF0bWFwOiBub2RlSGVhdE1hcCwgaWQ6IG5vZGVJZH0pO1xuXG59XG5cbi8vIERyYXcgbmV0d29ya1xuZnVuY3Rpb24gZHJhd05ldHdvcmsobmV0d29yazogbm4uTm9kZVtdW10pOiB2b2lkIHtcbiAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNzdmdcIik7XG4gIC8vIFJlbW92ZSBhbGwgc3ZnIGVsZW1lbnRzLlxuICBzdmcuc2VsZWN0KFwiZy5jb3JlXCIpLnJlbW92ZSgpO1xuICAvLyBSZW1vdmUgYWxsIGRpdiBlbGVtZW50cy5cbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LmNhbnZhc1wiKS5yZW1vdmUoKTtcbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LnBsdXMtbWludXMtbmV1cm9uc1wiKS5yZW1vdmUoKTtcblxuICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzdmcgY29udGFpbmVyLlxuICBsZXQgcGFkZGluZyA9IDM7XG4gIGxldCBjbyA9IGQzLnNlbGVjdChcIi5jb2x1bW4ub3V0cHV0XCIpLm5vZGUoKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgbGV0IGNmID0gZDMuc2VsZWN0KFwiLmNvbHVtbi5mZWF0dXJlc1wiKS5ub2RlKCkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGxldCB3aWR0aCA9IGNvLm9mZnNldExlZnQgLSBjZi5vZmZzZXRMZWZ0O1xuICBzdmcuYXR0cihcIndpZHRoXCIsIHdpZHRoKTtcblxuICAvLyBNYXAgb2YgYWxsIG5vZGUgY29vcmRpbmF0ZXMuXG4gIGxldCBub2RlMmNvb3JkOiB7W2lkOiBzdHJpbmddOiB7Y3g6IG51bWJlciwgY3k6IG51bWJlcn19ID0ge307XG4gIGxldCBjb250YWluZXIgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jbGFzc2VkKFwiY29yZVwiLCB0cnVlKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtwYWRkaW5nfSwke3BhZGRpbmd9KWApO1xuICAvLyBEcmF3IHRoZSBuZXR3b3JrIGxheWVyIGJ5IGxheWVyLlxuICBsZXQgbnVtTGF5ZXJzID0gbmV0d29yay5sZW5ndGg7XG4gIGxldCBmZWF0dXJlV2lkdGggPSAxMTg7XG4gIGxldCBsYXllclNjYWxlID0gZDMuc2NhbGUub3JkaW5hbDxudW1iZXIsIG51bWJlcj4oKVxuICAgICAgLmRvbWFpbihkMy5yYW5nZSgxLCBudW1MYXllcnMgLSAxKSlcbiAgICAgIC5yYW5nZVBvaW50cyhbZmVhdHVyZVdpZHRoLCB3aWR0aCAtIFJFQ1RfU0laRV0sIDAuNyk7XG4gIGxldCBub2RlSW5kZXhTY2FsZSA9IChub2RlSW5kZXg6IG51bWJlcikgPT4gbm9kZUluZGV4ICogKFJFQ1RfU0laRSArIDI1KTtcblxuXG4gIGxldCBjYWxsb3V0VGh1bWIgPSBkMy5zZWxlY3QoXCIuY2FsbG91dC50aHVtYm5haWxcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGV0IGNhbGxvdXRXZWlnaHRzID0gZDMuc2VsZWN0KFwiLmNhbGxvdXQud2VpZ2h0c1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZXQgaWRXaXRoQ2FsbG91dCA9IG51bGw7XG4gIGxldCB0YXJnZXRJZFdpdGhDYWxsb3V0ID0gbnVsbDtcblxuICAvLyBEcmF3IHRoZSBpbnB1dCBsYXllciBzZXBhcmF0ZWx5LlxuICBsZXQgY3ggPSBSRUNUX1NJWkUgLyAyICsgNTA7XG4gIGxldCBub2RlSWRzID0gT2JqZWN0LmtleXMoSU5QVVRTKTtcbiAgbGV0IG1heFkgPSBub2RlSW5kZXhTY2FsZShub2RlSWRzLmxlbmd0aCk7XG4gIG5vZGVJZHMuZm9yRWFjaCgobm9kZUlkLCBpKSA9PiB7XG4gICAgbGV0IGN5ID0gbm9kZUluZGV4U2NhbGUoaSkgKyBSRUNUX1NJWkUgLyAyO1xuICAgIG5vZGUyY29vcmRbbm9kZUlkXSA9IHtjeCwgY3l9O1xuICAgIGRyYXdOb2RlKGN4LCBjeSwgbm9kZUlkLCB0cnVlLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBEcmF3IHRoZSBpbnRlcm1lZGlhdGUgbGF5ZXJzLlxuICBmb3IgKGxldCBsYXllcklkeCA9IDE7IGxheWVySWR4IDwgbnVtTGF5ZXJzIC0gMTsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBudW1Ob2RlcyA9IG5ldHdvcmtbbGF5ZXJJZHhdLmxlbmd0aDtcbiAgICBsZXQgY3ggPSBsYXllclNjYWxlKGxheWVySWR4KSArIFJFQ1RfU0laRSAvIDI7XG4gICAgbWF4WSA9IE1hdGgubWF4KG1heFksIG5vZGVJbmRleFNjYWxlKG51bU5vZGVzKSk7XG4gICAgYWRkUGx1c01pbnVzQ29udHJvbChsYXllclNjYWxlKGxheWVySWR4KSwgbGF5ZXJJZHgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTm9kZXM7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBuZXR3b3JrW2xheWVySWR4XVtpXTtcbiAgICAgIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKGkpICsgUkVDVF9TSVpFIC8gMjtcbiAgICAgIG5vZGUyY29vcmRbbm9kZS5pZF0gPSB7Y3gsIGN5fTtcbiAgICAgIGRyYXdOb2RlKGN4LCBjeSwgbm9kZS5pZCwgZmFsc2UsIGNvbnRhaW5lciwgbm9kZSk7XG5cbiAgICAgIC8vIFNob3cgY2FsbG91dCB0byB0aHVtYm5haWxzLlxuICAgICAgbGV0IG51bU5vZGVzID0gbmV0d29ya1tsYXllcklkeF0ubGVuZ3RoO1xuICAgICAgbGV0IG5leHROdW1Ob2RlcyA9IG5ldHdvcmtbbGF5ZXJJZHggKyAxXS5sZW5ndGg7XG4gICAgICBpZiAoaWRXaXRoQ2FsbG91dCA9PSBudWxsICYmXG4gICAgICAgICAgaSA9PT0gbnVtTm9kZXMgLSAxICYmXG4gICAgICAgICAgbmV4dE51bU5vZGVzIDw9IG51bU5vZGVzKSB7XG4gICAgICAgIGNhbGxvdXRUaHVtYi5zdHlsZSh7XG4gICAgICAgICAgZGlzcGxheTogbnVsbCxcbiAgICAgICAgICB0b3A6IGAkezIwICsgMyArIGN5fXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHtjeH1weGBcbiAgICAgICAgfSk7XG4gICAgICAgIGlkV2l0aENhbGxvdXQgPSBub2RlLmlkO1xuICAgICAgfVxuXG4gICAgICAvLyBEcmF3IGxpbmtzLlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmlucHV0TGlua3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBub2RlLmlucHV0TGlua3Nbal07XG4gICAgICAgIGxldCBwYXRoOiBTVkdQYXRoRWxlbWVudCA9IGRyYXdMaW5rKGxpbmssIG5vZGUyY29vcmQsIG5ldHdvcmssXG4gICAgICAgICAgICBjb250YWluZXIsIGogPT09IDAsIGosIG5vZGUuaW5wdXRMaW5rcy5sZW5ndGgpLm5vZGUoKSBhcyBhbnk7XG4gICAgICAgIC8vIFNob3cgY2FsbG91dCB0byB3ZWlnaHRzLlxuICAgICAgICBsZXQgcHJldkxheWVyID0gbmV0d29ya1tsYXllcklkeCAtIDFdO1xuICAgICAgICBsZXQgbGFzdE5vZGVQcmV2TGF5ZXIgPSBwcmV2TGF5ZXJbcHJldkxheWVyLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGFyZ2V0SWRXaXRoQ2FsbG91dCA9PSBudWxsICYmXG4gICAgICAgICAgICBpID09PSBudW1Ob2RlcyAtIDEgJiZcbiAgICAgICAgICAgIGxpbmsuc291cmNlLmlkID09PSBsYXN0Tm9kZVByZXZMYXllci5pZCAmJlxuICAgICAgICAgICAgKGxpbmsuc291cmNlLmlkICE9PSBpZFdpdGhDYWxsb3V0IHx8IG51bUxheWVycyA8PSA1KSAmJlxuICAgICAgICAgICAgbGluay5kZXN0LmlkICE9PSBpZFdpdGhDYWxsb3V0ICYmXG4gICAgICAgICAgICBwcmV2TGF5ZXIubGVuZ3RoID49IG51bU5vZGVzKSB7XG4gICAgICAgICAgbGV0IG1pZFBvaW50ID0gcGF0aC5nZXRQb2ludEF0TGVuZ3RoKHBhdGguZ2V0VG90YWxMZW5ndGgoKSAqIDAuNyk7XG4gICAgICAgICAgY2FsbG91dFdlaWdodHMuc3R5bGUoe1xuICAgICAgICAgICAgZGlzcGxheTogbnVsbCxcbiAgICAgICAgICAgIHRvcDogYCR7bWlkUG9pbnQueSArIDV9cHhgLFxuICAgICAgICAgICAgbGVmdDogYCR7bWlkUG9pbnQueCArIDN9cHhgXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGFyZ2V0SWRXaXRoQ2FsbG91dCA9IGxpbmsuZGVzdC5pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERyYXcgdGhlIG91dHB1dCBub2RlIHNlcGFyYXRlbHkuXG4gIGN4ID0gd2lkdGggKyBSRUNUX1NJWkUgLyAyO1xuICBsZXQgbm9kZSA9IG5ldHdvcmtbbnVtTGF5ZXJzIC0gMV1bMF07XG4gIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKDApICsgUkVDVF9TSVpFIC8gMjtcbiAgbm9kZTJjb29yZFtub2RlLmlkXSA9IHtjeCwgY3l9O1xuICAvLyBEcmF3IGxpbmtzLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2ldO1xuICAgIGRyYXdMaW5rKGxpbmssIG5vZGUyY29vcmQsIG5ldHdvcmssIGNvbnRhaW5lciwgaSA9PT0gMCwgaSxcbiAgICAgICAgbm9kZS5pbnB1dExpbmtzLmxlbmd0aCk7XG4gIH1cbiAgLy8gQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIHN2Zy5cbiAgc3ZnLmF0dHIoXCJoZWlnaHRcIiwgbWF4WSk7XG5cbiAgLy8gQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGZlYXR1cmVzIGNvbHVtbi5cbiAgbGV0IGhlaWdodCA9IE1hdGgubWF4KFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGNhbGxvdXRUaHVtYiksXG4gICAgZ2V0UmVsYXRpdmVIZWlnaHQoY2FsbG91dFdlaWdodHMpLFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpKVxuICApO1xuICBkMy5zZWxlY3QoXCIuY29sdW1uLmZlYXR1cmVzXCIpLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCArIFwicHhcIik7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlSGVpZ2h0KHNlbGVjdGlvbjogZDMuU2VsZWN0aW9uPGFueT4pIHtcbiAgbGV0IG5vZGUgPSBzZWxlY3Rpb24ubm9kZSgpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICByZXR1cm4gbm9kZS5vZmZzZXRIZWlnaHQgKyBub2RlLm9mZnNldFRvcDtcbn1cblxuZnVuY3Rpb24gYWRkUGx1c01pbnVzQ29udHJvbCh4OiBudW1iZXIsIGxheWVySWR4OiBudW1iZXIpIHtcbiAgbGV0IGRpdiA9IGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5jbGFzc2VkKFwicGx1cy1taW51cy1uZXVyb25zXCIsIHRydWUpXG4gICAgLnN0eWxlKFwibGVmdFwiLCBgJHt4IC0gMTB9cHhgKTtcblxuICBsZXQgaSA9IGxheWVySWR4IC0gMTtcbiAgbGV0IGZpcnN0Um93ID0gZGl2LmFwcGVuZChcImRpdlwiKS5hdHRyKFwiY2xhc3NcIiwgYHVpLW51bU5vZGVzJHtsYXllcklkeH1gKTtcbiAgZmlyc3RSb3cuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb25cIilcbiAgICAgIC5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IG51bU5ldXJvbnMgPSBzdGF0ZS5uZXR3b3JrU2hhcGVbaV07XG4gICAgICAgIGlmIChudW1OZXVyb25zID49IDMwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm5ldHdvcmtTaGFwZVtpXSsrO1xuXG4gICAgICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICAgICArXCImbnVtSGlkZGVuTGF5ZXJzPVwiK3N0YXRlLm51bUhpZGRlbkxheWVycytcIiZuZXR3b3JrU2hhcGU9XCIrc3RhdGUubmV0d29ya1NoYXBlO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgIFx0Y29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgICAgXHRcdCB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICBcdFx0IHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgIFx0XHQgIHhoci5zZW5kKGRhdGEpO1xuICAgICAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICB9KVxuICAgIC5hcHBlbmQoXCJpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICAgIC50ZXh0KFwiYWRkXCIpO1xuXG4gIGZpcnN0Um93LmFwcGVuZChcImJ1dHRvblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIpXG4gICAgICAub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBudW1OZXVyb25zID0gc3RhdGUubmV0d29ya1NoYXBlW2ldO1xuICAgICAgICBpZiAobnVtTmV1cm9ucyA8PSAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm5ldHdvcmtTaGFwZVtpXS0tO1xuXG4gICAgICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICAgICArXCImbnVtSGlkZGVuTGF5ZXJzPVwiK3N0YXRlLm51bUhpZGRlbkxheWVycytcIiZuZXR3b3JrU2hhcGU9XCIrc3RhdGUubmV0d29ya1NoYXBlO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgICAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgIH0pXG4gICAgLmFwcGVuZChcImlcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtYXRlcmlhbC1pY29uc1wiKVxuICAgICAgLnRleHQoXCJyZW1vdmVcIik7XG5cbiAgbGV0IHN1ZmZpeCA9IHN0YXRlLm5ldHdvcmtTaGFwZVtpXSA+IDEgPyBcInNcIiA6IFwiXCI7XG4gIGRpdi5hcHBlbmQoXCJkaXZcIikudGV4dChcbiAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0gKyBcIiBuZXVyb25cIiArIHN1ZmZpeFxuICApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIb3ZlckNhcmQodHlwZTogSG92ZXJUeXBlLCBub2RlT3JMaW5rPzogbm4uTm9kZSB8IG5uLkxpbmssXG4gICAgY29vcmRpbmF0ZXM/OiBbbnVtYmVyLCBudW1iZXJdKSB7XG4gIGxldCBob3ZlcmNhcmQgPSBkMy5zZWxlY3QoXCIjaG92ZXJjYXJkXCIpO1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgaG92ZXJjYXJkLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgZDMuc2VsZWN0KFwiI3N2Z1wiKS5vbihcImNsaWNrXCIsIG51bGwpO1xuICAgIHJldHVybjtcbiAgfVxuICBkMy5zZWxlY3QoXCIjc3ZnXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhvdmVyY2FyZC5zZWxlY3QoXCIudmFsdWVcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICBsZXQgaW5wdXQgPSBob3ZlcmNhcmQuc2VsZWN0KFwiaW5wdXRcIik7XG4gICAgaW5wdXQuc3R5bGUoXCJkaXNwbGF5XCIsIG51bGwpO1xuICAgIGlucHV0Lm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPSBudWxsICYmIHRoaXMudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IEhvdmVyVHlwZS5XRUlHSFQpIHtcbiAgICAgICAgICAobm9kZU9yTGluayBhcyBubi5MaW5rKS53ZWlnaHQgPSArdGhpcy52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAobm9kZU9yTGluayBhcyBubi5Ob2RlKS5iaWFzID0gK3RoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlVUkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpbnB1dC5vbihcImtleXByZXNzXCIsICgpID0+IHtcbiAgICAgIGlmICgoZDMuZXZlbnQgYXMgYW55KS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICB1cGRhdGVIb3ZlckNhcmQodHlwZSwgbm9kZU9yTGluaywgY29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIChpbnB1dC5ub2RlKCkgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgfSk7XG4gIGxldCB2YWx1ZSA9ICh0eXBlID09PSBIb3ZlclR5cGUuV0VJR0hUKSA/XG4gICAgKG5vZGVPckxpbmsgYXMgbm4uTGluaykud2VpZ2h0IDpcbiAgICAobm9kZU9yTGluayBhcyBubi5Ob2RlKS5iaWFzO1xuICBsZXQgbmFtZSA9ICh0eXBlID09PSBIb3ZlclR5cGUuV0VJR0hUKSA/IFwiV2VpZ2h0XCIgOiBcIkJpYXNcIjtcbiAgaG92ZXJjYXJkLnN0eWxlKHtcbiAgICBcImxlZnRcIjogYCR7Y29vcmRpbmF0ZXNbMF0gKyAyMH1weGAsXG4gICAgXCJ0b3BcIjogYCR7Y29vcmRpbmF0ZXNbMV19cHhgLFxuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgfSk7XG4gIGhvdmVyY2FyZC5zZWxlY3QoXCIudHlwZVwiKS50ZXh0KG5hbWUpO1xuICBob3ZlcmNhcmQuc2VsZWN0KFwiLnZhbHVlXCIpXG4gICAgLnN0eWxlKFwiZGlzcGxheVwiLCBudWxsKVxuICAgIC50ZXh0KHZhbHVlLnRvUHJlY2lzaW9uKDIpKTtcbiAgaG92ZXJjYXJkLnNlbGVjdChcImlucHV0XCIpXG4gICAgLnByb3BlcnR5KFwidmFsdWVcIiwgdmFsdWUudG9QcmVjaXNpb24oMikpXG4gICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5rKFxuICAgIGlucHV0OiBubi5MaW5rLCBub2RlMmNvb3JkOiB7W2lkOiBzdHJpbmddOiB7Y3g6IG51bWJlciwgY3k6IG51bWJlcn19LFxuICAgIG5ldHdvcms6IG5uLk5vZGVbXVtdLCBjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LFxuICAgIGlzRmlyc3Q6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSB7XG4gIGxldCBsaW5lID0gY29udGFpbmVyLmluc2VydChcInBhdGhcIiwgXCI6Zmlyc3QtY2hpbGRcIik7XG4gIGxldCBzb3VyY2UgPSBub2RlMmNvb3JkW2lucHV0LnNvdXJjZS5pZF07XG4gIGxldCBkZXN0ID0gbm9kZTJjb29yZFtpbnB1dC5kZXN0LmlkXTtcbiAgbGV0IGRhdHVtID0ge1xuICAgIHNvdXJjZToge1xuICAgICAgeTogc291cmNlLmN4ICsgUkVDVF9TSVpFIC8gMiArIDIsXG4gICAgICB4OiBzb3VyY2UuY3lcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgeTogZGVzdC5jeCAtIFJFQ1RfU0laRSAvIDIsXG4gICAgICB4OiBkZXN0LmN5ICsgKChpbmRleCAtIChsZW5ndGggLSAxKSAvIDIpIC8gbGVuZ3RoKSAqIDEyXG4gICAgfVxuICB9O1xuICBsZXQgZGlhZ29uYWwgPSBkMy5zdmcuZGlhZ29uYWwoKS5wcm9qZWN0aW9uKGQgPT4gW2QueSwgZC54XSk7XG4gIGxpbmUuYXR0cih7XG4gICAgXCJtYXJrZXItc3RhcnRcIjogXCJ1cmwoI21hcmtlckFycm93KVwiLFxuICAgIGNsYXNzOiBcImxpbmtcIixcbiAgICBpZDogXCJsaW5rXCIgKyBpbnB1dC5zb3VyY2UuaWQgKyBcIi1cIiArIGlucHV0LmRlc3QuaWQsXG4gICAgZDogZGlhZ29uYWwoZGF0dW0sIDApXG4gIH0pO1xuXG4gIC8vIEFkZCBhbiBpbnZpc2libGUgdGhpY2sgbGluayB0aGF0IHdpbGwgYmUgdXNlZCBmb3JcbiAgLy8gc2hvd2luZyB0aGUgd2VpZ2h0IHZhbHVlIG9uIGhvdmVyLlxuICBjb250YWluZXIuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiZFwiLCBkaWFnb25hbChkYXR1bSwgMCkpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmstaG92ZXJcIilcbiAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlSG92ZXJDYXJkKEhvdmVyVHlwZS5XRUlHSFQsIGlucHV0LCBkMy5tb3VzZSh0aGlzKSk7XG4gICAgfSkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlSG92ZXJDYXJkKG51bGwpO1xuICAgIH0pO1xuICByZXR1cm4gbGluZTtcbn1cblxuLyoqXG4gKiBHaXZlbiBhIG5ldXJhbCBuZXR3b3JrLCBpdCBhc2tzIHRoZSBuZXR3b3JrIGZvciB0aGUgb3V0cHV0IChwcmVkaWN0aW9uKVxuICogb2YgZXZlcnkgbm9kZSBpbiB0aGUgbmV0d29yayB1c2luZyBpbnB1dHMgc2FtcGxlZCBvbiBhIHNxdWFyZSBncmlkLlxuICogSXQgcmV0dXJucyBhIG1hcCB3aGVyZSBlYWNoIGtleSBpcyB0aGUgbm9kZSBJRCBhbmQgdGhlIHZhbHVlIGlzIGEgc3F1YXJlXG4gKiBtYXRyaXggb2YgdGhlIG91dHB1dHMgb2YgdGhlIG5ldHdvcmsgZm9yIGVhY2ggaW5wdXQgaW4gdGhlIGdyaWQgcmVzcGVjdGl2ZWx5LlxuICovXG5mdW5jdGlvbiB1cGRhdGVEZWNpc2lvbkJvdW5kYXJ5KG5ldHdvcms6IG5uLk5vZGVbXVtdLCBmaXJzdFRpbWU6IGJvb2xlYW4pIHtcbiAgaWYgKGZpcnN0VGltZSkge1xuICAgIGJvdW5kYXJ5ID0ge307XG4gICAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgICBib3VuZGFyeVtub2RlLmlkXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICB9KTtcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBwcmVkZWZpbmVkIGlucHV0cy5cbiAgICBmb3IgKGxldCBub2RlSWQgaW4gSU5QVVRTKSB7XG4gICAgICBib3VuZGFyeVtub2RlSWRdID0gbmV3IEFycmF5KERFTlNJVFkpO1xuICAgIH1cbiAgfVxuICBsZXQgeFNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFswLCBERU5TSVRZIC0gMV0pLnJhbmdlKHhEb21haW4pO1xuICBsZXQgeVNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFtERU5TSVRZIC0gMSwgMF0pLnJhbmdlKHhEb21haW4pO1xuXG4gIGxldCBpID0gMCwgaiA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCBERU5TSVRZOyBpKyspIHtcbiAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICBubi5mb3JFYWNoTm9kZShuZXR3b3JrLCB0cnVlLCBub2RlID0+IHtcbiAgICAgICAgYm91bmRhcnlbbm9kZS5pZF1baV0gPSBuZXcgQXJyYXkoREVOU0lUWSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEdvIHRocm91Z2ggYWxsIHByZWRlZmluZWQgaW5wdXRzLlxuICAgICAgZm9yIChsZXQgbm9kZUlkIGluIElOUFVUUykge1xuICAgICAgICBib3VuZGFyeVtub2RlSWRdW2ldID0gbmV3IEFycmF5KERFTlNJVFkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGogPSAwOyBqIDwgREVOU0lUWTsgaisrKSB7XG4gICAgICAvLyAxIGZvciBwb2ludHMgaW5zaWRlIHRoZSBjaXJjbGUsIGFuZCAwIGZvciBwb2ludHMgb3V0c2lkZSB0aGUgY2lyY2xlLlxuICAgICAgbGV0IHggPSB4U2NhbGUoaSk7XG4gICAgICBsZXQgeSA9IHlTY2FsZShqKTtcbiAgICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KHgsIHkpO1xuICAgICAgbm4uZm9yd2FyZFByb3AobmV0d29yaywgaW5wdXQpO1xuICAgICAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgICAgIGJvdW5kYXJ5W25vZGUuaWRdW2ldW2pdID0gbm9kZS5vdXRwdXQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgLy8gR28gdGhyb3VnaCBhbGwgcHJlZGVmaW5lZCBpbnB1dHMuXG4gICAgICAgIGZvciAobGV0IG5vZGVJZCBpbiBJTlBVVFMpIHtcbiAgICAgICAgICBib3VuZGFyeVtub2RlSWRdW2ldW2pdID0gSU5QVVRTW25vZGVJZF0uZih4LCB5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMb3NzKG5ldHdvcms6IG5uLk5vZGVbXVtdLCBkYXRhUG9pbnRzOiBFeGFtcGxlMkRbXSk6IG51bWJlciB7XG4gIGxldCBsb3NzID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRhdGFQb2ludCA9IGRhdGFQb2ludHNbaV07XG4gICAgbGV0IGlucHV0ID0gY29uc3RydWN0SW5wdXQoZGF0YVBvaW50LngsIGRhdGFQb2ludC55KTtcbiAgICBsZXQgb3V0cHV0ID0gbm4uZm9yd2FyZFByb3AobmV0d29yaywgaW5wdXQpO1xuICAgIGxvc3MgKz0gbm4uRXJyb3JzLlNRVUFSRS5lcnJvcihvdXRwdXQsIGRhdGFQb2ludC5sYWJlbCk7XG4gIH1cbiAgcmV0dXJuIGxvc3MgLyBkYXRhUG9pbnRzLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVUkoZmlyc3RTdGVwID0gZmFsc2UpIHtcbiAgLy8gVXBkYXRlIHRoZSBsaW5rcyB2aXN1YWxseS5cbiAgdXBkYXRlV2VpZ2h0c1VJKG5ldHdvcmssIGQzLnNlbGVjdChcImcuY29yZVwiKSk7XG4gIC8vIFVwZGF0ZSB0aGUgYmlhcyB2YWx1ZXMgdmlzdWFsbHkuXG4gIHVwZGF0ZUJpYXNlc1VJKG5ldHdvcmspO1xuICAvLyBHZXQgdGhlIGRlY2lzaW9uIGJvdW5kYXJ5IG9mIHRoZSBuZXR3b3JrLlxuICB1cGRhdGVEZWNpc2lvbkJvdW5kYXJ5KG5ldHdvcmssIGZpcnN0U3RlcCk7XG4gIGxldCBzZWxlY3RlZElkID0gc2VsZWN0ZWROb2RlSWQgIT0gbnVsbCA/XG4gICAgICBzZWxlY3RlZE5vZGVJZCA6IG5uLmdldE91dHB1dE5vZGUobmV0d29yaykuaWQ7XG4gIGhlYXRNYXAudXBkYXRlQmFja2dyb3VuZChib3VuZGFyeVtzZWxlY3RlZElkXSwgc3RhdGUuZGlzY3JldGl6ZSk7XG5cbiAgLy8gVXBkYXRlIGFsbCBkZWNpc2lvbiBib3VuZGFyaWVzLlxuICBkMy5zZWxlY3QoXCIjbmV0d29ya1wiKS5zZWxlY3RBbGwoXCJkaXYuY2FudmFzXCIpXG4gICAgICAuZWFjaChmdW5jdGlvbihkYXRhOiB7aGVhdG1hcDogSGVhdE1hcCwgaWQ6IHN0cmluZ30pIHtcbiAgICBkYXRhLmhlYXRtYXAudXBkYXRlQmFja2dyb3VuZChyZWR1Y2VNYXRyaXgoYm91bmRhcnlbZGF0YS5pZF0sIDEwKSxcbiAgICAgICAgc3RhdGUuZGlzY3JldGl6ZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHplcm9QYWQobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgcGFkID0gXCIwMDAwMDBcIjtcbiAgICByZXR1cm4gKHBhZCArIG4pLnNsaWNlKC1wYWQubGVuZ3RoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbW1hcyhzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGh1bWFuUmVhZGFibGUobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbi50b0ZpeGVkKDMpO1xuICB9XG5cbiAgLy8gVXBkYXRlIGxvc3MgYW5kIGl0ZXJhdGlvbiBudW1iZXIuXG4gIGQzLnNlbGVjdChcIiNsb3NzLXRyYWluXCIpLnRleHQoaHVtYW5SZWFkYWJsZShsb3NzVHJhaW4pKTtcbiAgZDMuc2VsZWN0KFwiI2xvc3MtdGVzdFwiKS50ZXh0KGh1bWFuUmVhZGFibGUobG9zc1Rlc3QpKTtcbiAgZDMuc2VsZWN0KFwiI2l0ZXItbnVtYmVyXCIpLnRleHQoYWRkQ29tbWFzKHplcm9QYWQoaXRlcikpKTtcbiAgbGluZUNoYXJ0LmFkZERhdGFQb2ludChbbG9zc1RyYWluLCBsb3NzVGVzdF0pO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RJbnB1dElkcygpOiBzdHJpbmdbXSB7XG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGZvciAobGV0IGlucHV0TmFtZSBpbiBJTlBVVFMpIHtcbiAgICBpZiAoc3RhdGVbaW5wdXROYW1lXSkge1xuICAgICAgcmVzdWx0LnB1c2goaW5wdXROYW1lKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SW5wdXQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gIGxldCBpbnB1dDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaW5wdXROYW1lIGluIElOUFVUUykge1xuICAgIGlmIChzdGF0ZVtpbnB1dE5hbWVdKSB7XG4gICAgICBpbnB1dC5wdXNoKElOUFVUU1tpbnB1dE5hbWVdLmYoeCwgeSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIG9uZVN0ZXAoKTogdm9pZCB7XG4gIGl0ZXIrKztcbiAgdHJhaW5EYXRhLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgbGV0IGlucHV0ID0gY29uc3RydWN0SW5wdXQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgbm4uZm9yd2FyZFByb3AobmV0d29yaywgaW5wdXQpO1xuICAgIG5uLmJhY2tQcm9wKG5ldHdvcmssIHBvaW50LmxhYmVsLCBubi5FcnJvcnMuU1FVQVJFKTtcbiAgICBpZiAoKGkgKyAxKSAlIHN0YXRlLmJhdGNoU2l6ZSA9PT0gMCkge1xuICAgICAgbm4udXBkYXRlV2VpZ2h0cyhuZXR3b3JrLCBzdGF0ZS5sZWFybmluZ1JhdGUsIHN0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZSk7XG4gICAgfVxuICB9KTtcbiAgLy8gQ29tcHV0ZSB0aGUgbG9zcy5cbiAgbG9zc1RyYWluID0gZ2V0TG9zcyhuZXR3b3JrLCB0cmFpbkRhdGEpO1xuICBsb3NzVGVzdCA9IGdldExvc3MobmV0d29yaywgdGVzdERhdGEpO1xuICB1cGRhdGVVSSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0cHV0V2VpZ2h0cyhuZXR3b3JrOiBubi5Ob2RlW11bXSk6IG51bWJlcltdIHtcbiAgbGV0IHdlaWdodHM6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGxheWVySWR4ID0gMDsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aCAtIDE7IGxheWVySWR4KyspIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLm91dHB1dHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IG5vZGUub3V0cHV0c1tqXTtcbiAgICAgICAgd2VpZ2h0cy5wdXNoKG91dHB1dC53ZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gd2VpZ2h0cztcbn1cblxuZnVuY3Rpb24gdG9Kc29uKG9uU3RhcnR1cD1mYWxzZSl7XG5cbiAgdmFyIGpzb25PYmogPSB7XCJkYXRhc2V0XCIgOiBzdGF0ZS5kYXRhc2V0LCBcIm5ld0RhdGFzZXRcIiA6IHN0YXRlLnJlZ0RhdGFzZXQsIFwibnVtSGlkZGVuTGF5ZXJzXCIgOiBzdGF0ZS5udW1IaWRkZW5MYXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibmV0d29ya1NoYXBlXCIgOiBzdGF0ZS5uZXR3b3JrU2hhcGUsIFwic2hvd1Rlc3REYXRhXCIgOiBzdGF0ZS5zaG93VGVzdERhdGEsIFwiZGlzY3JldGl6ZVwiIDogc3RhdGUuZGlzY3JldGl6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJjVHJhaW5EYXRhXCIgOiBzdGF0ZS5wZXJjVHJhaW5EYXRhLCBcIm5vaXNlXCIgOiBzdGF0ZS5ub2lzZSwgXCJiYXRjaFNpemVcIiA6IHN0YXRlLmJhdGNoU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmF0aW9uXCIgOiBzdGF0ZS5hY3RpdmF0aW9uLCBcImxlYXJuaW5nUmF0ZVwiIDogc3RhdGUubGVhcm5pbmdSYXRlLCBcInJlZ3VsYXJpemF0aW9uXCIgOiBzdGF0ZS5yZWd1bGFyaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWd1bGFyaXphdGlvblJhdGVcIiA6IHN0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZSwgXCJwcm9ibGVtXCIgOiBzdGF0ZS5wcm9ibGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImluaXRaZXJvXCIgOiBzdGF0ZS5pbml0WmVybywgXCJ0dXRvcmlhbFwiIDogc3RhdGUudHV0b3JpYWwgIH07XG5cbiAgICByZXR1cm4ganNvbk9iajtcbn07XG5cbmZ1bmN0aW9uIHJlc2V0KG9uU3RhcnR1cD1mYWxzZSkge1xuICBsaW5lQ2hhcnQucmVzZXQoKTtcbiAgc3RhdGUuc2VyaWFsaXplKCk7XG4gIGlmICghb25TdGFydHVwKSB7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgfVxuICBwbGF5ZXIucGF1c2UoKTtcblxuICBsZXQgc3VmZml4ID0gc3RhdGUubnVtSGlkZGVuTGF5ZXJzICE9PSAxID8gXCJzXCIgOiBcIlwiO1xuICBkMy5zZWxlY3QoXCIjbGF5ZXJzLWxhYmVsXCIpLnRleHQoXCJIaWRkZW4gbGF5ZXJcIiArIHN1ZmZpeCk7XG4gIGQzLnNlbGVjdChcIiNudW0tbGF5ZXJzXCIpLnRleHQoc3RhdGUubnVtSGlkZGVuTGF5ZXJzKTtcblxuXG4gIC8vIE1ha2UgYSBzaW1wbGUgbmV0d29yay5cbiAgaXRlciA9IDA7XG4gIGxldCBudW1JbnB1dHMgPSBjb25zdHJ1Y3RJbnB1dCgwICwgMCkubGVuZ3RoO1xuICBsZXQgc2hhcGUgPSBbbnVtSW5wdXRzXS5jb25jYXQoc3RhdGUubmV0d29ya1NoYXBlKS5jb25jYXQoWzFdKTtcbiAgbGV0IG91dHB1dEFjdGl2YXRpb24gPSAoc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5SRUdSRVNTSU9OKSA/XG4gICAgICBubi5BY3RpdmF0aW9ucy5MSU5FQVIgOiBubi5BY3RpdmF0aW9ucy5UQU5IO1xuICBuZXR3b3JrID0gbm4uYnVpbGROZXR3b3JrKHNoYXBlLCBzdGF0ZS5hY3RpdmF0aW9uLCBvdXRwdXRBY3RpdmF0aW9uLFxuICAgICAgc3RhdGUucmVndWxhcml6YXRpb24sIGNvbnN0cnVjdElucHV0SWRzKCksIHN0YXRlLmluaXRaZXJvKTtcbiAgbG9zc1RyYWluID0gZ2V0TG9zcyhuZXR3b3JrLCB0cmFpbkRhdGEpO1xuICBsb3NzVGVzdCA9IGdldExvc3MobmV0d29yaywgdGVzdERhdGEpO1xuICBkcmF3TmV0d29yayhuZXR3b3JrKTtcbiAgdXBkYXRlVUkodHJ1ZSk7XG59O1xuXG5mdW5jdGlvbiBpbml0VHV0b3JpYWwoKSB7XG4gIGlmIChzdGF0ZS50dXRvcmlhbCA9PSBudWxsIHx8IHN0YXRlLnR1dG9yaWFsID09PSAnJyB8fCBzdGF0ZS5oaWRlVGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBSZW1vdmUgYWxsIG90aGVyIHRleHQuXG4gIGQzLnNlbGVjdEFsbChcImFydGljbGUgZGl2LmwtLWJvZHlcIikucmVtb3ZlKCk7XG4gIGxldCB0dXRvcmlhbCA9IGQzLnNlbGVjdChcImFydGljbGVcIikuYXBwZW5kKFwiZGl2XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImwtLWJvZHlcIik7XG4gIC8vIEluc2VydCB0dXRvcmlhbCB0ZXh0LlxuICBkMy5odG1sKGB0dXRvcmlhbHMvJHtzdGF0ZS50dXRvcmlhbH0uaHRtbGAsIChlcnIsIGh0bWxGcmFnbWVudCkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgdHV0b3JpYWwubm9kZSgpLmFwcGVuZENoaWxkKGh0bWxGcmFnbWVudCk7XG4gICAgLy8gSWYgdGhlIHR1dG9yaWFsIGhhcyBhIDx0aXRsZT4gdGFnLCBzZXQgdGhlIHBhZ2UgdGl0bGUgdG8gdGhhdC5cbiAgICBsZXQgdGl0bGUgPSB0dXRvcmlhbC5zZWxlY3QoXCJ0aXRsZVwiKTtcbiAgICBpZiAodGl0bGUuc2l6ZSgpKSB7XG4gICAgICBkMy5zZWxlY3QoXCJoZWFkZXIgaDFcIikuc3R5bGUoe1xuICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCIsXG4gICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjIwcHhcIixcbiAgICAgIH0pXG4gICAgICAudGV4dCh0aXRsZS50ZXh0KCkpO1xuICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZS50ZXh0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhd0RhdGFzZXRUaHVtYm5haWxzKCkge1xuICBmdW5jdGlvbiByZW5kZXJUaHVtYm5haWwoY2FudmFzLCBkYXRhR2VuZXJhdG9yKSB7XG4gICAgbGV0IHcgPSAxMDA7XG4gICAgbGV0IGggPSAxMDA7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHcpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaCk7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBkYXRhID0gZGF0YUdlbmVyYXRvcigyMDAsIDApO1xuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yU2NhbGUoZC5sYWJlbCk7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KHcgKiAoZC54ICsgNikgLyAxMiwgaCAqIChkLnkgKyA2KSAvIDEyLCA0LCA0KTtcbiAgICB9KTtcbiAgICBkMy5zZWxlY3QoY2FudmFzLnBhcmVudE5vZGUpLnN0eWxlKFwiZGlzcGxheVwiLCBudWxsKTtcbiAgfVxuICBkMy5zZWxlY3RBbGwoXCIuZGF0YXNldFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXG4gIGlmIChzdGF0ZS5wcm9ibGVtID09PSBQcm9ibGVtLkNMQVNTSUZJQ0FUSU9OKSB7XG4gICAgZm9yIChsZXQgZGF0YXNldCBpbiBkYXRhc2V0cykge1xuICAgICAgbGV0IGNhbnZhczogYW55ID1cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBjYW52YXNbZGF0YS1kYXRhc2V0PSR7ZGF0YXNldH1dYCk7XG4gICAgICBsZXQgZGF0YUdlbmVyYXRvciA9IGRhdGFzZXRzW2RhdGFzZXRdO1xuICAgICAgcmVuZGVyVGh1bWJuYWlsKGNhbnZhcywgZGF0YUdlbmVyYXRvcik7XG4gICAgfVxuICB9XG4gIGlmIChzdGF0ZS5wcm9ibGVtID09PSBQcm9ibGVtLlJFR1JFU1NJT04pIHtcbiAgICBmb3IgKGxldCByZWdEYXRhc2V0IGluIHJlZ0RhdGFzZXRzKSB7XG4gICAgICBsZXQgY2FudmFzOiBhbnkgPVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGNhbnZhc1tkYXRhLXJlZ0RhdGFzZXQ9JHtyZWdEYXRhc2V0fV1gKTtcbiAgICAgIGxldCBkYXRhR2VuZXJhdG9yID0gcmVnRGF0YXNldHNbcmVnRGF0YXNldF07XG4gICAgICByZW5kZXJUaHVtYm5haWwoY2FudmFzLCBkYXRhR2VuZXJhdG9yKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUNvbnRyb2xzKCkge1xuICAvLyBTZXQgZGlzcGxheTpub25lIHRvIGFsbCB0aGUgVUkgZWxlbWVudHMgdGhhdCBhcmUgaGlkZGVuLlxuICBsZXQgaGlkZGVuUHJvcHMgPSBzdGF0ZS5nZXRIaWRkZW5Qcm9wcygpO1xuICBoaWRkZW5Qcm9wcy5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGxldCBjb250cm9scyA9IGQzLnNlbGVjdEFsbChgLnVpLSR7cHJvcH1gKTtcbiAgICBpZiAoY29udHJvbHMuc2l6ZSgpID09PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYDAgaHRtbCBlbGVtZW50cyBmb3VuZCB3aXRoIGNsYXNzIC51aS0ke3Byb3B9YCk7XG4gICAgfVxuICAgIGNvbnRyb2xzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIH0pO1xuXG4gIC8vIEFsc28gYWRkIGNoZWNrYm94IGZvciBlYWNoIGhpZGFibGUgY29udHJvbCBpbiB0aGUgXCJ1c2UgaXQgaW4gY2xhc3Nyb21cIlxuICAvLyBzZWN0aW9uLlxuICBsZXQgaGlkZUNvbnRyb2xzID0gZDMuc2VsZWN0KFwiLmhpZGUtY29udHJvbHNcIik7XG4gIEhJREFCTEVfQ09OVFJPTFMuZm9yRWFjaCgoW3RleHQsIGlkXSkgPT4ge1xuICAgIGxldCBsYWJlbCA9IGhpZGVDb250cm9scy5hcHBlbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1jaGVja2JveCBtZGwtanMtY2hlY2tib3ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIik7XG4gICAgbGV0IGlucHV0ID0gbGFiZWwuYXBwZW5kKFwiaW5wdXRcIilcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBjbGFzczogXCJtZGwtY2hlY2tib3hfX2lucHV0XCIsXG4gICAgICB9KTtcbiAgICBpZiAoaGlkZGVuUHJvcHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICBpbnB1dC5hdHRyKFwiY2hlY2tlZFwiLCBcInRydWVcIik7XG4gICAgfVxuICAgIGlucHV0Lm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc3RhdGUuc2V0SGlkZVByb3BlcnR5KGlkLCAhdGhpcy5jaGVja2VkKTtcbiAgICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICAgIGQzLnNlbGVjdChcIi5oaWRlLWNvbnRyb2xzLWxpbmtcIilcbiAgICAgICAgLmF0dHIoXCJocmVmXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICB9KTtcbiAgICBsYWJlbC5hcHBlbmQoXCJzcGFuXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWRsLWNoZWNrYm94X19sYWJlbCBsYWJlbFwiKVxuICAgICAgLnRleHQodGV4dCk7XG4gIH0pO1xuICBkMy5zZWxlY3QoXCIuaGlkZS1jb250cm9scy1saW5rXCIpXG4gICAgLmF0dHIoXCJocmVmXCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEYXRhKGZpcnN0VGltZSA9IGZhbHNlKSB7XG4gIGlmICghZmlyc3RUaW1lKSB7XG4gICAgLy8gQ2hhbmdlIHRoZSBzZWVkLlxuICAgIHN0YXRlLnNlZWQgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoNSk7XG4gICAgc3RhdGUuc2VyaWFsaXplKCk7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgfVxuICBNYXRoLnNlZWRyYW5kb20oc3RhdGUuc2VlZCk7XG4gIGxldCBudW1TYW1wbGVzID0gKHN0YXRlLnByb2JsZW0gPT09IFByb2JsZW0uUkVHUkVTU0lPTikgP1xuICAgICAgTlVNX1NBTVBMRVNfUkVHUkVTUyA6IE5VTV9TQU1QTEVTX0NMQVNTSUZZO1xuICBsZXQgZ2VuZXJhdG9yID0gc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5DTEFTU0lGSUNBVElPTiA/XG4gICAgICBzdGF0ZS5kYXRhc2V0IDogc3RhdGUucmVnRGF0YXNldDtcbiAgbGV0IGRhdGEgPSBnZW5lcmF0b3IobnVtU2FtcGxlcywgMCk7IC8vLCBzdGF0ZS5ub2lzZSAvIDEwMCk7XG4gIC8vIFNodWZmbGUgdGhlIGRhdGEgaW4tcGxhY2UuXG4gIHNodWZmbGUoZGF0YSk7XG4gIC8vIFNwbGl0IGludG8gdHJhaW4gYW5kIHRlc3QgZGF0YS5cbiAgbGV0IHNwbGl0SW5kZXggPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoICogc3RhdGUucGVyY1RyYWluRGF0YSAvIDEwMCk7XG4gIHRyYWluRGF0YSA9IGRhdGEuc2xpY2UoMCwgc3BsaXRJbmRleCk7XG4gIHRlc3REYXRhID0gZGF0YS5zbGljZShzcGxpdEluZGV4KTtcbiAgaGVhdE1hcC51cGRhdGVQb2ludHModHJhaW5EYXRhKTtcbiAgaGVhdE1hcC51cGRhdGVUZXN0UG9pbnRzKHN0YXRlLnNob3dUZXN0RGF0YSA/IHRlc3REYXRhIDogW10pO1xufVxuXG5sZXQgZmlyc3RJbnRlcmFjdGlvbiA9IHRydWU7XG5sZXQgcGFyYW1ldGVyc0NoYW5nZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gdXNlckhhc0ludGVyYWN0ZWQoKSB7XG4gIGlmICghZmlyc3RJbnRlcmFjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBmaXJzdEludGVyYWN0aW9uID0gZmFsc2U7XG4gIGxldCBwYWdlID0gJ2luZGV4JztcbiAgaWYgKHN0YXRlLnR1dG9yaWFsICE9IG51bGwgJiYgc3RhdGUudHV0b3JpYWwgIT09ICcnKSB7XG4gICAgcGFnZSA9IGAvdi90dXRvcmlhbHMvJHtzdGF0ZS50dXRvcmlhbH1gO1xuICB9XG4gIGdhKCdzZXQnLCAncGFnZScsIHBhZ2UpO1xuICBnYSgnc2VuZCcsICdwYWdldmlldycsIHsnc2Vzc2lvbkNvbnRyb2wnOiAnc3RhcnQnfSk7XG59XG5cbmZ1bmN0aW9uIHNpbXVsYXRpb25TdGFydGVkKCkge1xuICBnYSgnc2VuZCcsIHtcbiAgICBoaXRUeXBlOiAnZXZlbnQnLFxuICAgIGV2ZW50Q2F0ZWdvcnk6ICdTdGFydGluZyBTaW11bGF0aW9uJyxcbiAgICBldmVudEFjdGlvbjogcGFyYW1ldGVyc0NoYW5nZWQgPyAnY2hhbmdlZCcgOiAndW5jaGFuZ2VkJyxcbiAgICBldmVudExhYmVsOiBzdGF0ZS50dXRvcmlhbCA9PSBudWxsID8gJycgOiBzdGF0ZS50dXRvcmlhbFxuICB9KTtcbiAgcGFyYW1ldGVyc0NoYW5nZWQgPSBmYWxzZTtcbn1cblxuZHJhd0RhdGFzZXRUaHVtYm5haWxzKCk7XG5pbml0VHV0b3JpYWwoKTtcbm1ha2VHVUkoKTtcbmdlbmVyYXRlRGF0YSh0cnVlKTtcbnJlc2V0KHRydWUpO1xuaGlkZUNvbnRyb2xzKCk7XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbmltcG9ydCAqIGFzIG5uIGZyb20gXCIuL25uXCI7XG5pbXBvcnQgKiBhcyBkYXRhc2V0IGZyb20gXCIuL2RhdGFzZXRcIjtcblxuLyoqIFN1ZmZpeCBhZGRlZCB0byB0aGUgc3RhdGUgd2hlbiBzdG9yaW5nIGlmIGEgY29udHJvbCBpcyBoaWRkZW4gb3Igbm90LiAqL1xuY29uc3QgSElERV9TVEFURV9TVUZGSVggPSBcIl9oaWRlXCI7XG5cbi8qKiBBIG1hcCBiZXR3ZWVuIG5hbWVzIGFuZCBhY3RpdmF0aW9uIGZ1bmN0aW9ucy4gKi9cbmV4cG9ydCBsZXQgYWN0aXZhdGlvbnM6IHtba2V5OiBzdHJpbmddOiBubi5BY3RpdmF0aW9uRnVuY3Rpb259ID0ge1xuICBcInJlbHVcIjogbm4uQWN0aXZhdGlvbnMuUkVMVSxcbiAgXCJ0YW5oXCI6IG5uLkFjdGl2YXRpb25zLlRBTkgsXG4gIFwic2lnbW9pZFwiOiBubi5BY3RpdmF0aW9ucy5TSUdNT0lELFxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gbmFtZXMgYW5kIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9ucy4gKi9cbmV4cG9ydCBsZXQgcmVndWxhcml6YXRpb25zOiB7W2tleTogc3RyaW5nXTogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbn0gPSB7XG4gIFwibm9uZVwiOiBudWxsLFxuICBcIkwxXCI6IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEsXG4gIFwiTDJcIjogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMlxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gZGF0YXNldCBuYW1lcyBhbmQgZnVuY3Rpb25zIHRoYXQgZ2VuZXJhdGUgY2xhc3NpZmljYXRpb24gZGF0YS4gKi9cbmV4cG9ydCBsZXQgZGF0YXNldHM6IHtba2V5OiBzdHJpbmddOiBkYXRhc2V0LkRhdGFHZW5lcmF0b3J9ID0ge1xuICAvL1wiZm1fbXV0YXRpb25zX2luZGVwZW5kZW50XCI6IGRhdGFzZXQuY2xhc3NpZnlYT1JEYXRhLFxuICBcImZtX211dGF0aW9uc19pbmRlcGVuZGVudFwiOiBkYXRhc2V0LmNsYXNzaWZ5Rm1NdXRhdGlvbnNJbmRlcGVuZGVudCxcbiAgXCJmbV9zYW1wbGVfaW5kZXBlbmRlbnRcIjogZGF0YXNldC5jbGFzc2lmeUZtU2FtcGxlSW5kZXBlbmRlbnQsXG4gIFwidG9wMTAwMDBMdW5nTWVsXCI6IGRhdGFzZXQuY2xhc3NpZnl0b3AxMDAwMEx1bmdNZWwsXG4gIFwidG9wMTAwMEx1bmdNZWxcIjogZGF0YXNldC5jbGFzc2lmeXRvcDEwMDBMdW5nTWVsLFxuICBcInRvcDEwMEx1bmdNZWxcIjogZGF0YXNldC5jbGFzc2lmeXRvcDEwMEx1bmdNZWwsXG4gIFwidG9wMTBMdW5nTWVsXCI6IGRhdGFzZXQuY2xhc3NpZnl0b3AxMEx1bmdNZWxcbn07XG5cbi8qKiBBIG1hcCBiZXR3ZWVuIGRhdGFzZXQgbmFtZXMgYW5kIGZ1bmN0aW9ucyB0aGF0IGdlbmVyYXRlIHJlZ3Jlc3Npb24gZGF0YS4gKi9cbmV4cG9ydCBsZXQgcmVnRGF0YXNldHM6IHtba2V5OiBzdHJpbmddOiBkYXRhc2V0LkRhdGFHZW5lcmF0b3J9ID0ge1xuICBcImZtX3NhbXBsZV9pbmRlcGVuZGVudFwiOiBkYXRhc2V0LnJlZ3Jlc3NGbVNhbXBsZUluZGVwZW5kZW50LFxuICAvL1wiZm1fbXV0YXRpb25zX2luZGVwZW5kZW50XCI6IGRhdGFzZXQucmVncmVzc1BsYW5lLFxuICBcImZtX211dGF0aW9uc19pbmRlcGVuZGVudFwiOiBkYXRhc2V0LnJlZ3Jlc3NGbU11dGF0aW9uc0luZGVwZW5kZW50LFxuICBcInRvcDEwMDAwTHVuZ01lbFwiOiBkYXRhc2V0LnJlZ3Jlc3N0b3AxMDAwMEx1bmdNZWwsXG4gIFwidG9wMTAwMEx1bmdNZWxcIjogZGF0YXNldC5yZWdyZXNzdG9wMTAwMEx1bmdNZWwsXG4gIFwidG9wMTAwTHVuZ01lbFwiOiBkYXRhc2V0LnJlZ3Jlc3N0b3AxMDBMdW5nTWVsLFxuICBcInRvcDEwTHVuZ01lbFwiOiBkYXRhc2V0LnJlZ3Jlc3N0b3AxMEx1bmdNZWxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlGcm9tVmFsdWUob2JqOiBhbnksIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9ialtrZXldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZW5kc1dpdGgoczogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcy5zdWJzdHIoLXN1ZmZpeC5sZW5ndGgpID09PSBzdWZmaXg7XG59XG5cbmZ1bmN0aW9uIGdldEhpZGVQcm9wcyhvYmo6IGFueSk6IHN0cmluZ1tdIHtcbiAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChsZXQgcHJvcCBpbiBvYmopIHtcbiAgICBpZiAoZW5kc1dpdGgocHJvcCwgSElERV9TVEFURV9TVUZGSVgpKSB7XG4gICAgICByZXN1bHQucHVzaChwcm9wKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgZGF0YSB0eXBlIG9mIGEgc3RhdGUgdmFyaWFibGUuIFVzZWQgZm9yIGRldGVybWluaW5nIHRoZVxuICogKGRlKXNlcmlhbGl6YXRpb24gbWV0aG9kLlxuICovXG5leHBvcnQgZW51bSBUeXBlIHtcbiAgU1RSSU5HLFxuICBOVU1CRVIsXG4gIEFSUkFZX05VTUJFUixcbiAgQVJSQVlfU1RSSU5HLFxuICBCT09MRUFOLFxuICBPQkpFQ1Rcbn1cblxuZXhwb3J0IGVudW0gUHJvYmxlbSB7XG4gIENMQVNTSUZJQ0FUSU9OLFxuICBSRUdSRVNTSU9OXG59XG5cbmV4cG9ydCBsZXQgcHJvYmxlbXMgPSB7XG4gIFwiY2xhc3NpZmljYXRpb25cIjogUHJvYmxlbS5DTEFTU0lGSUNBVElPTixcbiAgXCJyZWdyZXNzaW9uXCI6IFByb2JsZW0uUkVHUkVTU0lPTlxufTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogVHlwZTtcbiAga2V5TWFwPzoge1trZXk6IHN0cmluZ106IGFueX07XG59O1xuXG4vLyBBZGQgdGhlIEdVSSBzdGF0ZS5cbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gIHByaXZhdGUgc3RhdGljIFBST1BTOiBQcm9wZXJ0eVtdID0gW1xuICAgIHtuYW1lOiBcImlzUGxheWluZ1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImFjdGl2YXRpb25cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogYWN0aXZhdGlvbnN9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uXCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ3VsYXJpemF0aW9uc30sXG4gICAge25hbWU6IFwiYmF0Y2hTaXplXCIsIHR5cGU6IFR5cGUuTlVNQkVSfSxcbiAgICB7bmFtZTogXCJkYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IGRhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJyZWdEYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ0RhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJsZWFybmluZ1JhdGVcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uUmF0ZVwiLCB0eXBlOiBUeXBlLk5VTUJFUn0sXG4gICAge25hbWU6IFwibm9pc2VcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcIm5ldHdvcmtTaGFwZVwiLCB0eXBlOiBUeXBlLkFSUkFZX05VTUJFUn0sXG4gICAge25hbWU6IFwic2VlZFwiLCB0eXBlOiBUeXBlLlNUUklOR30sXG4gICAge25hbWU6IFwic2hvd1Rlc3REYXRhXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiZGlzY3JldGl6ZVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInBlcmNUcmFpbkRhdGFcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcIl81QVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl81Q1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl81R1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl81VFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9DQVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9DR1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9DVFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9UQVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9UQ1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9UR1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zQVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zQ1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zR1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zVFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImNvbGxlY3RTdGF0c1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInR1dG9yaWFsXCIsIHR5cGU6IFR5cGUuU1RSSU5HfSxcbiAgICB7bmFtZTogXCJwcm9ibGVtXCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHByb2JsZW1zfSxcbiAgICB7bmFtZTogXCJpbml0WmVyb1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImhpZGVUZXh0XCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwid2VpZ2h0c1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImJpYXNlc1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICBdO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICBsZWFybmluZ1JhdGUgPSAwLjE7XG4gICAgcmVndWxhcml6YXRpb25SYXRlID0gMDtcbiAgICBzaG93VGVzdERhdGEgPSBmYWxzZTtcbiAgICBub2lzZSA9IDI7XG4gICAgYmF0Y2hTaXplID0gMTA7XG4gICAgZGlzY3JldGl6ZSA9IGZhbHNlO1xuICAgIHR1dG9yaWFsOiBzdHJpbmcgPSBudWxsO1xuICAgIHBlcmNUcmFpbkRhdGEgPSA1MDtcbiAgICBhY3RpdmF0aW9uID0gbm4uQWN0aXZhdGlvbnMuUkVMVTtcbiAgICByZWd1bGFyaXphdGlvbjogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbiA9IG51bGw7XG4gICAgcHJvYmxlbSA9IFByb2JsZW0uQ0xBU1NJRklDQVRJT047XG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgaW5pdFplcm8gPSBmYWxzZTtcbiAgICBoaWRlVGV4dCA9IGZhbHNlO1xuICAgIGNvbGxlY3RTdGF0ZXMgPSBmYWxzZTtcbiAgICBudW1IaWRkZW5MYXllcnMgPSA1O1xuICAgIGhpZGRlbkxheWVyQ29udHJvbHM6IGFueVtdID0gW107XG4gICAgbmV0d29ya1NoYXBlOiBudW1iZXJbXSA9IFsxMCwgMTAsIDEwLCAxMCwgMTBdO1xuICAgIF81QSA9IGZhbHNlO1xuICAgIF81QyA9IGZhbHNlO1xuICAgIF81RyA9IGZhbHNlO1xuICAgIF81VCA9IGZhbHNlO1xuICAgIF9DQSA9IHRydWU7XG4gICAgX0NHID0gdHJ1ZTtcbiAgICBfQ1QgPSB0cnVlO1xuICAgIF9UQSA9IHRydWU7XG4gICAgX1RDID0gdHJ1ZTtcbiAgICBfVEcgPSB0cnVlO1xuICAgIF8zQSA9IGZhbHNlO1xuICAgIF8zQyA9IGZhbHNlO1xuICAgIF8zRyA9IGZhbHNlO1xuICAgIF8zVCA9IGZhbHNlO1xuICAgIGRhdGFzZXQ6IGRhdGFzZXQuRGF0YUdlbmVyYXRvciA9IGRhdGFzZXQuY2xhc3NpZnlYT1JEYXRhO1xuICAgIHJlZ0RhdGFzZXQ6IGRhdGFzZXQuRGF0YUdlbmVyYXRvciA9IGRhdGFzZXQucmVncmVzc1BsYW5lO1xuICAgIHNlZWQ6IHN0cmluZztcbiAgICB3ZWlnaHRzID0gZmFsc2U7XG4gICAgYmlhc2VzID0gZmFsc2U7XG5cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIHRoZSBzdGF0ZSBmcm9tIHRoZSB1cmwgaGFzaC5cbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZVN0YXRlKCk6IFN0YXRlIHtcbiAgICBsZXQgbWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGZvciAobGV0IGtleXZhbHVlIG9mIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnNwbGl0KFwiJlwiKSkge1xuICAgICAgbGV0IFtuYW1lLCB2YWx1ZV0gPSBrZXl2YWx1ZS5zcGxpdChcIj1cIik7XG4gICAgICBtYXBbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXkobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gbmFtZSBpbiBtYXAgJiYgbWFwW25hbWVdICE9IG51bGwgJiYgbWFwW25hbWVdLnRyaW0oKSAhPT0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUFycmF5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gdmFsdWUudHJpbSgpID09PSBcIlwiID8gW10gOiB2YWx1ZS5zcGxpdChcIixcIik7XG4gICAgfVxuXG4gICAgLy8gRGVzZXJpYWxpemUgcmVndWxhciBwcm9wZXJ0aWVzLlxuICAgIFN0YXRlLlBST1BTLmZvckVhY2goKHtuYW1lLCB0eXBlLCBrZXlNYXB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBUeXBlLk9CSkVDVDpcbiAgICAgICAgICBpZiAoa2V5TWFwID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSBrZXktdmFsdWUgbWFwIG11c3QgYmUgcHJvdmlkZWQgZm9yIHN0YXRlIFwiICtcbiAgICAgICAgICAgICAgICBcInZhcmlhYmxlcyBvZiB0eXBlIE9iamVjdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0tleShuYW1lKSAmJiBtYXBbbmFtZV0gaW4ga2V5TWFwKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IGtleU1hcFttYXBbbmFtZV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUeXBlLk5VTUJFUjpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBUaGUgKyBvcGVyYXRvciBpcyBmb3IgY29udmVydGluZyBhIHN0cmluZyB0byBhIG51bWJlci5cbiAgICAgICAgICAgIHN0YXRlW25hbWVdID0gK21hcFtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5TVFJJTkc6XG4gICAgICAgICAgaWYgKGhhc0tleShuYW1lKSkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBtYXBbbmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQk9PTEVBTjpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IChtYXBbbmFtZV0gPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQVJSQVlfTlVNQkVSOlxuICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBwYXJzZUFycmF5KG1hcFtuYW1lXSkubWFwKE51bWJlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQVJSQVlfU1RSSU5HOlxuICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBwYXJzZUFycmF5KG1hcFtuYW1lXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IEVycm9yKFwiRW5jb3VudGVyZWQgYW4gdW5rbm93biB0eXBlIGZvciBhIHN0YXRlIHZhcmlhYmxlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVzZXJpYWxpemUgc3RhdGUgcHJvcGVydGllcyB0aGF0IGNvcnJlc3BvbmQgdG8gaGlkaW5nIFVJIGNvbnRyb2xzLlxuICAgIGdldEhpZGVQcm9wcyhtYXApLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBzdGF0ZVtwcm9wXSA9IChtYXBbcHJvcF0gPT09IFwidHJ1ZVwiKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9KTtcbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMgPSBzdGF0ZS5uZXR3b3JrU2hhcGUubGVuZ3RoO1xuICAgIGlmIChzdGF0ZS5zZWVkID09IG51bGwpIHtcbiAgICAgIHN0YXRlLnNlZWQgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoNSk7XG4gICAgfVxuICAgIE1hdGguc2VlZHJhbmRvbShzdGF0ZS5zZWVkKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyB0aGUgc3RhdGUgaW50byB0aGUgdXJsIGhhc2guXG4gICAqL1xuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gU2VyaWFsaXplIHJlZ3VsYXIgcHJvcGVydGllcy5cbiAgICBsZXQgcHJvcHM6IHN0cmluZ1tdID0gW107XG4gICAgU3RhdGUuUFJPUFMuZm9yRWFjaCgoe25hbWUsIHR5cGUsIGtleU1hcH0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAvLyBEb24ndCBzZXJpYWxpemUgbWlzc2luZyB2YWx1ZXMuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gVHlwZS5PQkpFQ1QpIHtcbiAgICAgICAgdmFsdWUgPSBnZXRLZXlGcm9tVmFsdWUoa2V5TWFwLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFR5cGUuQVJSQVlfTlVNQkVSIHx8XG4gICAgICAgICAgdHlwZSA9PT0gVHlwZS5BUlJBWV9TVFJJTkcpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKFwiLFwiKTtcbiAgICAgIH1cbiAgICAgIHByb3BzLnB1c2goYCR7bmFtZX09JHt2YWx1ZX1gKTtcbiAgICB9KTtcbiAgICAvLyBTZXJpYWxpemUgcHJvcGVydGllcyB0aGF0IGNvcnJlc3BvbmQgdG8gaGlkaW5nIFVJIGNvbnRyb2xzLlxuICAgIGdldEhpZGVQcm9wcyh0aGlzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgcHJvcHMucHVzaChgJHtwcm9wfT0ke3RoaXNbcHJvcF19YCk7XG4gICAgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwcm9wcy5qb2luKFwiJlwiKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGFsbCB0aGUgaGlkZGVuIHByb3BlcnRpZXMuICovXG4gIGdldEhpZGRlblByb3BzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKGVuZHNXaXRoKHByb3AsIEhJREVfU1RBVEVfU1VGRklYKSAmJiAgU3RyaW5nKHRoaXNbcHJvcF0pID09PSBcInRydWVcIikge1xuICAgICAgICByZXN1bHQucHVzaChwcm9wLnJlcGxhY2UoSElERV9TVEFURV9TVUZGSVgsIFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNldEhpZGVQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIGhpZGRlbjogYm9vbGVhbikge1xuICAgIHRoaXNbbmFtZSArIEhJREVfU1RBVEVfU1VGRklYXSA9IGhpZGRlbjtcbiAgfVxufVxuIl19
