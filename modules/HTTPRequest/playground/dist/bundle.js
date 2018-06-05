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
    1.841926403032167059e+02, 9.631914852190867293e+01, 0.000000000000000000e+00;
    2.256122348249041067e+02, -3.190779926434733937e+01, 0.000000000000000000e+00;
    2.303352187910737428e+02, -2.175570887827676358e+01, 0.000000000000000000e+00;
    1.164618324021589473e+02, 1.569305817402551213e+02, 0.000000000000000000e+00;
    2.190932815712637591e+02, 2.431969147006469001e+01, 0.000000000000000000e+00
        - 3.728243565871858891e+02, 2.272394172060681115e+02, 0.000000000000000000e+00
        - 3.889991040302405167e+02, 2.721590231737243357e+02, 0.000000000000000000e+00
        - 3.238582549887559026e+02, 3.326542809119883515e+01, 0.000000000000000000e+00
        - 8.281882970033014999e+02, 9.193061031841301656e+01, 0.000000000000000000e+00;
    2.025356060798337410e+02, 6.646657283630973723e+01, 0.000000000000000000e+00;
    2.050743778863981959e+02, 6.127576508049813953e+01, 0.000000000000000000e+00
        - 7.291347803212760255e+02, 3.342321747303824964e+01, 0.000000000000000000e+00;
    2.224743810836521618e+02, -2.546625996920402812e+01, 0.000000000000000000e+00;
    1.982076978761977273e+02, 7.008719273061045385e+01, 0.000000000000000000e+00
        - 2.991103511549893028e+02, -6.734359293077288555e+01, 0.000000000000000000e+00
        - 6.835956661066936704e+02, -2.023598393050500022e+02, 0.000000000000000000e+00;
    2.004755734841604635e+02, 6.833285891518677602e+01, 0.000000000000000000e+00;
    2.207899235916929115e+02, -1.404940350387022718e+01, 0.000000000000000000e+00;
    2.201514714738945599e+02, -2.232703546039997278e+01, 0.000000000000000000e+00;
    2.174587426639785122e+02, 4.775387663772204583e+00, 0.000000000000000000e+00;
    1.708174973430615182e+02, 1.168153841598900584e+02, 0.000000000000000000e+00
        - 3.786456452223087012e+02, 2.517302923648182684e+02, 0.000000000000000000e+00;
    2.238796568636625750e+02, -2.625273058733527520e+01, 0.000000000000000000e+00
        - 3.563593641852502287e+02, 1.310115936735700757e+02, 0.000000000000000000e+00;
    2.123545947308724635e+02, 3.177988339669906637e+01, 0.000000000000000000e+00;
    4.205390023710861414e+01, -7.446899995206581480e+01, 0.000000000000000000e+00;
    1.736073355650341057e+02, 1.137725638563691462e+02, 0.000000000000000000e+00;
    2.199912814686136926e+02, -6.641372175172317149e+00, 0.000000000000000000e+00;
    2.257039034947660809e+02, -2.916525657652788439e+01, 0.000000000000000000e+00
        - 7.339984713888007946e+02, 6.014565438076182602e+01, 0.000000000000000000e+00;
    1.658846735502027911e+02, 1.218622148909373664e+02, 0.000000000000000000e+00;
    2.264687004063264908e+02, -3.848499128492908739e+01, 0.000000000000000000e+00;
    1.711413929014057373e+02, 1.126416925702144880e+02, 0.000000000000000000e+00;
    2.192523545633961817e+02, -1.203272414350453978e+01, 0.000000000000000000e+00
        - 7.101093954422901788e+02, 2.559891063218517218e+02, 0.000000000000000000e+00;
    1.718051821980955367e+02, 1.138608893468728667e+02, 0.000000000000000000e+00;
    1.604236254931022074e+02, 1.194784125436319329e+02, 0.000000000000000000e+00
        - 3.565166379606089890e+02, 1.570984181318374340e+02, 0.000000000000000000e+00;
    2.158155643476885643e+02, -1.311115084040642564e+01, 0.000000000000000000e+00
        - 7.115285357019380399e+02, 2.771646535927042692e+02, 0.000000000000000000e+00;
    2.117793764819160458e+02, -5.069043546386096111e+00, 0.000000000000000000e+00;
    2.269295637380153607e+02, -3.521602148637619223e+01, 0.000000000000000000e+00;
    1.991477778369971929e+02, 6.344093890904989053e+01, 0.000000000000000000e+00;
    1.836725771235219895e+02, 1.007046357608692517e+02, 0.000000000000000000e+00
        - 7.182042556564593951e+02, 2.483189103694917321e+02, 0.000000000000000000e+00
        - 7.337970281457197643e+02, 7.376934027479435940e+01, 0.000000000000000000e+00
        - 7.253555483185965613e+02, 1.958436956733936825e+02, 0.000000000000000000e+00;
    2.225176029939569560e+02, -1.389412294321929231e+01, 0.000000000000000000e+00;
    2.233976066354335046e+02, -1.848051585761580995e+01, 0.000000000000000000e+00;
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
    function genFmMutationsIndependent() {
    }
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
    .domain([0, 500])
    .range([1, 100])
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
        generateData();
        parametersChanged = true;
        reset();
    });
    var currentMax = parseInt(noise.property("max"));
    if (state.noise > currentMax) {
        if (state.noise <= 80) {
            noise.property("max", state.noise);
        }
        else {
            state.noise = 50;
        }
    }
    else if (state.noise < 0) {
        state.noise = 0;
    }
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
    var data = generator(numSamples, state.noise / 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YXNldC50cyIsInNyYy9oZWF0bWFwLnRzIiwic3JjL2xpbmVjaGFydC50cyIsInNyYy9ubi50cyIsInNyYy9wbGF5Z3JvdW5kLnRzIiwic3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ2tDQSxpQkFBd0IsS0FBWTtJQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBRW5CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUU1QyxPQUFPLEVBQUUsQ0FBQztRQUVWLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUM7QUFJRCx3Q0FBK0MsVUFBa0IsRUFBRSxLQUFhO0lBRTlFLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7SUFFN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNoRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQywyQkFBMkIsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqRixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMseUJBQXlCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLENBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqRix3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMxRSx3QkFBd0IsRUFBQyxDQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLENBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDM0Usd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDMUUsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCO1VBQ3pFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QjtVQUMxRSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0I7VUFDMUUsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCO1VBQzFFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzFFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QjtVQUN6RSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMzRSx3QkFBd0IsRUFBQyxDQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QjtVQUN6RSx3QkFBd0IsRUFBQyxDQUFDLHdCQUF3QixFQUFDLHdCQUF3QjtVQUMzRSx3QkFBd0IsRUFBQyxDQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzVFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzFFLHdCQUF3QixFQUFDLENBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDM0Usd0JBQXdCLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMzRSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMxRSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0I7VUFDekUsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDM0Usd0JBQXdCLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyx3QkFBd0I7VUFDMUUsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDM0Usd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDMUUsd0JBQXdCLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMzRSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMxRSx3QkFBd0IsRUFBQyxDQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLENBQUMsd0JBQXdCLEVBQUMsd0JBQXdCO1VBQzFFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzFFLHdCQUF3QixFQUFDLENBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDM0Usd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDMUUsd0JBQXdCLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyx3QkFBd0I7VUFDMUUsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDM0Usd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDMUUsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCO1VBQ3pFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLENBQUMsd0JBQXdCLEVBQUMsd0JBQXdCO1VBQzFFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLENBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFDM0Usd0JBQXdCLEVBQUMsQ0FBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMzRSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMxRSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0I7VUFDekUsd0JBQXdCLEVBQUMsd0JBQXdCLEVBQUMsd0JBQXdCO1VBQzFFLHdCQUF3QixFQUFDLHdCQUF3QixFQUFDLHdCQUF3QjtVQUMxRSx3QkFBd0IsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQTtJQUMzRSx3QkFBd0IsRUFBQyxDQUFDLHdCQUF3QixFQUFDLHdCQUF3QixDQUFBO0lBQzNFLHdCQUF3QixFQUFDLENBQUMsd0JBQXdCLEVBQUMsd0JBQXdCLENBQUE7SUFFekUsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBckhELHdFQXFIQztBQUdELHFDQUE0QyxVQUFrQixFQUFFLEtBQWE7SUFFM0UsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxrRUFTQztBQUdELGlDQUF3QyxVQUFrQixFQUFFLEtBQWE7SUFFdkUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCwwREFTQztBQUdELGdDQUF1QyxVQUFrQixFQUFFLEtBQWE7SUFFdEUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCx3REFTQztBQUdELCtCQUFzQyxVQUFrQixFQUFFLEtBQWE7SUFFckUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxzREFTQztBQUdELDhCQUFxQyxVQUFrQixFQUFFLEtBQWE7SUFFcEUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxvREFTQztBQUtELHVDQUE4QyxVQUFrQixFQUFFLEtBQWE7SUFFN0UsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxzRUFTQztBQUdELG9DQUEyQyxVQUFrQixFQUFFLEtBQWE7SUFFMUUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxnRUFTQztBQUdELGdDQUF1QyxVQUFrQixFQUFFLEtBQWE7SUFFdEUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCx3REFTQztBQUdELCtCQUFzQyxVQUFrQixFQUFFLEtBQWE7SUFFckUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxzREFTQztBQUdELDhCQUFxQyxVQUFrQixFQUFFLEtBQWE7SUFFcEUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxvREFTQztBQUdELDZCQUFvQyxVQUFrQixFQUFFLEtBQWE7SUFFbkUsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QjtJQUdBLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxrREFTQztBQU1ELHNCQUE2QixVQUFrQixFQUFFLEtBQWE7SUFFNUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7U0FDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixJQUFJLFFBQVEsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDO0lBRTNDLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7SUFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBbEJELG9DQWtCQztBQUVELHlCQUFnQyxVQUFrQixFQUFFLEtBQWE7SUFFL0QsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUU3QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtTQUMvQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDZCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDYixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFZixJQUFJLFNBQVMsR0FBRztRQUNkLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDZCxDQUFDO0lBRUYsa0JBQWtCLENBQUMsRUFBRSxDQUFDO1FBRXBCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFjO2dCQUFiLFVBQUUsRUFBRSxVQUFFLEVBQUUsWUFBSTtZQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUFBLENBQUM7SUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUF2Q0QsMENBdUNDO0FBR0QsNEJBQW1DLFVBQWtCLEVBQUUsS0FBYTtJQUVsRSxJQUFJLE1BQU0sR0FBZ0IsRUFBRSxDQUFDO0lBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLHdCQUF3QixDQUFRLEVBQUUsTUFBYTtRQUM3QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFHRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUdELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBaENELGdEQWdDQztBQUVELHlCQUFnQyxVQUFrQixFQUFFLEtBQWE7SUFFL0QscUJBQXFCLENBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxFLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7SUFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBcEJELDBDQW9CQztBQU1ELHFCQUFxQixDQUFTLEVBQUUsQ0FBUztJQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBU0Qsc0JBQXNCLElBQVEsRUFBRSxRQUFZO0lBQXRCLHFCQUFBLEVBQUEsUUFBUTtJQUFFLHlCQUFBLEVBQUEsWUFBWTtJQUMxQyxJQUFJLEVBQVUsRUFBRSxFQUFVLEVBQUUsQ0FBUyxDQUFDO0lBQ3RDLEdBQUcsQ0FBQztRQUNGLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQixFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUVoQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDN0MsQ0FBQztBQUdELGNBQWMsQ0FBUSxFQUFFLENBQVE7SUFDOUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDOzs7O0FDcGJELElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQU90QjtJQVlFLGlCQUNJLEtBQWEsRUFBRSxVQUFrQixFQUFFLE9BQXlCLEVBQzVELE9BQXlCLEVBQUUsU0FBNEIsRUFDdkQsWUFBOEI7UUFkMUIsYUFBUSxHQUFvQjtZQUNsQyxRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQztRQVlBLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFN0MsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFekIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7YUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHcEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQWtCO2FBQzNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEIsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFLakIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztZQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBVTthQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNmLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDaEMsS0FBSyxDQUFDO1lBQ0wsS0FBSyxFQUFLLEtBQUssT0FBSTtZQUNuQixNQUFNLEVBQUssTUFBTSxPQUFJO1lBQ3JCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxNQUFJLE9BQU8sT0FBSTtZQUNwQixJQUFJLEVBQUUsTUFBSSxPQUFPLE9BQUk7U0FDdEIsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNyQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQzthQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQzthQUMxQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDNUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzlDLEtBQUssQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO2FBQzdCLEtBQUssQ0FBQyxLQUFLLEVBQUssT0FBTyxPQUFJLENBQUM7YUFDNUIsS0FBSyxDQUFDLE1BQU0sRUFBSyxPQUFPLE9BQUksQ0FBQyxDQUFDO1FBRWpDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxNQUFNO2FBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBRVAsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLE1BQU0sRUFBRSxHQUFHO2dCQUNYLEtBQUssRUFBRSxHQUFHO2FBQ1gsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLFdBQVcsRUFBRSxlQUFhLE9BQU8sU0FBSSxPQUFPLE1BQUcsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO2lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5CLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsa0JBQWUsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLE9BQUcsQ0FBQztpQkFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCLFVBQWlCLE1BQW1CO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCw4QkFBWSxHQUFaLFVBQWEsTUFBbUI7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGtDQUFnQixHQUFoQixVQUFpQixJQUFnQixFQUFFLFVBQW1CO1FBQ3BELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVyQixFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTSxJQUFJLEtBQUssQ0FDWCwyQ0FBMkM7Z0JBQzNDLHlCQUF5QixDQUFDLENBQUM7UUFDakMsQ0FBQztRQUdELElBQUksT0FBTyxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNwQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsS0FBSyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sK0JBQWEsR0FBckIsVUFBc0IsU0FBNEIsRUFBRSxNQUFtQjtRQUF2RSxpQkF5QkM7UUF2QkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25DLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztZQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO21CQUN4QyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztRQUdILElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRzNELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUdoRCxTQUFTO2FBQ04sSUFBSSxDQUFDO1lBQ0osRUFBRSxFQUFFLFVBQUMsQ0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCO1lBQ3RDLEVBQUUsRUFBRSxVQUFDLENBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQjtTQUN2QyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFHM0MsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0EvS0EsQUErS0MsSUFBQTtBQS9LWSwwQkFBTztBQWlMcEIsc0JBQTZCLE1BQWtCLEVBQUUsTUFBYztJQUM3RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRDtZQUNsRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLE1BQU0sR0FBZSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7UUFDL0MsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7WUFDL0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRVosR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDaEMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0gsQ0FBQztZQUNELEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUF4QkQsb0NBd0JDOzs7O0FDak5EO0lBWUUsNEJBQVksU0FBNEIsRUFBRSxVQUFvQjtRQVZ0RCxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQU92QixTQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN4QixTQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUc5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBaUIsQ0FBQztRQUMzQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDcEQsSUFBSSxLQUFLLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLE1BQU0sR0FBRyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRXRELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7YUFDNUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTthQUM1QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsZUFBYSxNQUFNLENBQUMsSUFBSSxTQUFJLE1BQU0sQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztpQkFDckIsS0FBSyxDQUFDO2dCQUNMLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsT0FBTzthQUN4QixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxTQUFtQjtRQUFoQyxpQkFXQztRQVZDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDakIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxtQ0FBTSxHQUFkO1FBQUEsaUJBYUM7UUFYQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTNDLElBQUksVUFBVSxHQUFHLFVBQUMsU0FBaUI7WUFDakMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFhO2lCQUM5QixDQUFDLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQztpQkFDeEIsQ0FBQyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FsRkEsQUFrRkMsSUFBQTtBQWxGWSxnREFBa0I7Ozs7QUNIL0I7SUE4QkUsY0FBWSxFQUFVLEVBQUUsVUFBOEIsRUFBRSxRQUFrQjtRQTNCMUUsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBRVgsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUlyQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWQsYUFBUSxHQUFHLENBQUMsQ0FBQztRQU1iLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBS2hCLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQVFyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUdELDJCQUFZLEdBQVo7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3RELENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsV0FBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksb0JBQUk7QUF3RWpCO0lBQUE7SUFNQSxDQUFDO0lBQUQsYUFBQztBQUFELENBTkEsQUFNQztBQUxlLGFBQU0sR0FBa0I7SUFDcEMsS0FBSyxFQUFFLFVBQUMsTUFBYyxFQUFFLE1BQWM7UUFDM0IsT0FBQSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUFsQyxDQUFrQztJQUM3QyxHQUFHLEVBQUUsVUFBQyxNQUFjLEVBQUUsTUFBYyxJQUFLLE9BQUEsTUFBTSxHQUFHLE1BQU0sRUFBZixDQUFlO0NBQ3pELENBQUM7QUFMUyx3QkFBTTtBQVNsQixJQUFZLENBQUMsSUFBSSxHQUFJLElBQVksQ0FBQyxJQUFJLElBQUksVUFBUyxDQUFDO0lBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7QUFDSCxDQUFDLENBQUM7QUFHRjtJQUFBO0lBdUJBLENBQUM7SUFBRCxrQkFBQztBQUFELENBdkJBLEFBdUJDO0FBdEJlLGdCQUFJLEdBQXVCO0lBQ3ZDLE1BQU0sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFDLElBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCO0lBQ2xDLEdBQUcsRUFBRSxVQUFBLENBQUM7UUFDSixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUM7QUFDWSxnQkFBSSxHQUF1QjtJQUN2QyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBZCxDQUFjO0lBQzNCLEdBQUcsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBZCxDQUFjO0NBQ3pCLENBQUM7QUFDWSxtQkFBTyxHQUF1QjtJQUMxQyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXRCLENBQXNCO0lBQ25DLEdBQUcsRUFBRSxVQUFBLENBQUM7UUFDSixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFDO0FBQ1ksa0JBQU0sR0FBdUI7SUFDekMsTUFBTSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUM7SUFDZCxHQUFHLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQztDQUNaLENBQUM7QUF0QlMsa0NBQVc7QUEwQnhCO0lBQUE7SUFTQSxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQVRBLEFBU0M7QUFSZSx5QkFBRSxHQUEyQjtJQUN6QyxNQUFNLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFYLENBQVc7SUFDeEIsR0FBRyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUN2QyxDQUFDO0FBQ1kseUJBQUUsR0FBMkI7SUFDekMsTUFBTSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVztJQUN4QixHQUFHLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQztDQUNaLENBQUM7QUFSUyx3REFBc0I7QUFpQm5DO0lBc0JFLGNBQVksTUFBWSxFQUFFLElBQVUsRUFDaEMsY0FBc0MsRUFBRSxRQUFrQjtRQW5COUQsV0FBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDN0IsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVoQix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFhckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUNILFdBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLG9CQUFJO0FBK0NqQixzQkFDSSxZQUFzQixFQUFFLFVBQThCLEVBQ3RELGdCQUFvQyxFQUNwQyxjQUFzQyxFQUN0QyxRQUFrQixFQUFFLFFBQWtCO0lBQ3hDLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDcEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRVgsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDeEQsSUFBSSxhQUFhLEdBQUcsUUFBUSxLQUFLLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxZQUFZLEdBQUcsUUFBUSxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLFlBQVksR0FBVyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxFQUFFLENBQUM7WUFDUCxDQUFDO1lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUN0QixhQUFhLEdBQUcsZ0JBQWdCLEdBQUcsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWxCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDdEQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzlELFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQXJDRCxvQ0FxQ0M7QUFZRCxxQkFBNEIsT0FBaUIsRUFBRSxNQUFnQjtJQUM3RCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RDtZQUNwRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1FBQzdELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMvQyxDQUFDO0FBcEJELGtDQW9CQztBQVNELGtCQUF5QixPQUFpQixFQUFFLE1BQWMsRUFDdEQsU0FBd0I7SUFHMUIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFHaEUsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsUUFBUSxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO1FBQ2xFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUlyQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUdELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoQixRQUFRLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixRQUFRLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDekQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQS9DRCw0QkErQ0M7QUFNRCx1QkFBOEIsT0FBaUIsRUFBRSxZQUFvQixFQUNqRSxrQkFBMEI7SUFDNUIsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUM7UUFDN0QsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdDLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoQixRQUFRLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYztvQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07d0JBQ3JCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBRWhFLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNO3dCQUMzQixDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsS0FBSyxzQkFBc0IsQ0FBQyxFQUFFO3dCQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVwQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3JCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7b0JBQzlCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBekNELHNDQXlDQztBQUdELHFCQUE0QixPQUFpQixFQUFFLFlBQXFCLEVBQ2hFLFFBQTZCO0lBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxHQUFHLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFDekIsUUFBUSxFQUFFLEVBQUUsQ0FBQztRQUNmLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQVhELGtDQVdDO0FBR0QsdUJBQThCLE9BQWlCO0lBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRkQsc0NBRUM7Ozs7QUMzWEQseUJBQTJCO0FBQzNCLHFDQUFnRDtBQUNoRCxpQ0FTaUI7QUFDakIscUNBQTZDO0FBQzdDLHlDQUErQztBQUUvQyxJQUFJLFNBQVMsQ0FBQztBQUdkLElBQUksS0FBSyxHQUFHLGFBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JDLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztBQUM1QixFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDcEMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxVQUFVLEVBQUU7U0FDWixRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ2QsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVILHFCQUFxQixNQUFNO0lBQ3pCLE1BQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsV0FBVztZQUMzQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsVUFBUyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNwQixJQUFNLG9CQUFvQixHQUFHLEdBQUcsQ0FBQztBQUNqQyxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQztBQUNqQyxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDcEIsSUFBSSxhQUFhLEdBQUcsdUJBQXVCLENBQUM7QUFFNUMsSUFBSyxTQUVKO0FBRkQsV0FBSyxTQUFTO0lBQ1oseUNBQUksQ0FBQTtJQUFFLDZDQUFNLENBQUE7QUFDZCxDQUFDLEVBRkksU0FBUyxLQUFULFNBQVMsUUFFYjtBQU9ELElBQUksTUFBTSxHQUFtQztJQUMzQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ3BDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7SUFDcEMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztJQUNwQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBRyxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ3JDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7SUFDcEMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztJQUNwQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ3BDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7SUFDcEMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztJQUNyQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO0lBQ3JDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7SUFDckMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztJQUNyQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO0lBQ3JDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVB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Um9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyoqXG4gKiBBIHR3byBkaW1lbnNpb25hbCBleGFtcGxlOiB4IGFuZCB5IGNvb3JkaW5hdGVzIHdpdGggdGhlIGxhYmVsLlxuICovXG5leHBvcnQgdHlwZSBFeGFtcGxlMkQgPSB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBsYWJlbDogbnVtYmVyXG59O1xuXG50eXBlIFBvaW50ID0ge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlclxufTtcblxuXG4vKipcbiAqIFNodWZmbGVzIHRoZSBhcnJheSB1c2luZyBGaXNoZXItWWF0ZXMgYWxnb3JpdGhtLiBVc2VzIHRoZSBzZWVkcmFuZG9tXG4gKiBsaWJyYXJ5IGFzIHRoZSByYW5kb20gZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheTogYW55W10pOiB2b2lkIHtcbiAgbGV0IGNvdW50ZXIgPSBhcnJheS5sZW5ndGg7XG4gIGxldCB0ZW1wID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgLy8gV2hpbGUgdGhlcmUgYXJlIGVsZW1lbnRzIGluIHRoZSBhcnJheVxuICB3aGlsZSAoY291bnRlciA+IDApIHtcbiAgICAvLyBQaWNrIGEgcmFuZG9tIGluZGV4XG4gICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb3VudGVyKTtcbiAgICAvLyBEZWNyZWFzZSBjb3VudGVyIGJ5IDFcbiAgICBjb3VudGVyLS07XG4gICAgLy8gQW5kIHN3YXAgdGhlIGxhc3QgZWxlbWVudCB3aXRoIGl0XG4gICAgdGVtcCA9IGFycmF5W2NvdW50ZXJdO1xuICAgIGFycmF5W2NvdW50ZXJdID0gYXJyYXlbaW5kZXhdO1xuICAgIGFycmF5W2luZGV4XSA9IHRlbXA7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRGF0YUdlbmVyYXRvciA9IChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpID0+IEV4YW1wbGUyRFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGbU11dGF0aW9uc0luZGVwZW5kZW50KG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuICBcbiAgcG9pbnRzLnB1c2goe3g6MiwgeToyLCBsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIzMi45MjU5MDEyNjI3NzE4NzMyLHk6LTY1LjY0MzEzNjg2MjkxODM5NjQ1LCBsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIyMy41ODQ5NDE2ODQ5NTY3MzE5LHk6LTY2LjgxMDU3MDM1MDQxOTY5NTI3LCBsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjQuNjMyMDA5MjM5NTYxMzUyODQyZSswMSx5Oi0xLjAyOTcwMzUyNjk1MjQ5MjA0MWUrMDIsIGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTEuOTk1ODc0MTgzNzY0NjI4OTI0ZSswMix5Oi0yLjUyMDc5MTAxMDE5MDgzOTM1OWUrMDIsIGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xMzA2NDQ2ODg4OTMxNDQ2ODllKzAyLHk6LTMuODU2NDY2MzgxMjI1NDM4MDU2ZSswMSwgbGFiZWw6MX0pOyAgICBcbiAgcG9pbnRzLnB1c2goe3g6Mi4xNzc4Mjk2NzUxMjgxMTcyMzFlKzAyLHk6LTQuMjIwMzc0NjUwOTQ3Njc4Njc0ZSswMSwgbGFiZWw6MX0pOyAgICBcbiAgcG9pbnRzLnB1c2goe3g6LTUuMzg2Njg3NDY4NDc5MjQ1ODA4ZSswMix5Oi00LjU0Mzk3MDQ2OTA3OTcxNTcxM2UrMDIsIGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4zNDY0NjI4Mjg3NDc5NjgxMDNlKzAyLHk6LTQuMDM0ODQ2NTQzNTM2Mjk4OTI0ZSswMSwgbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNS43Njk2ODc2MTUzOTI1MTg4NjVlKzAyLHk6LTQuMDM4MjQ5MzkwMDY0ODU1MjIwZSswMixsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzA0MjM1MTc0Nzc2MDQ5MTc4ZSswMix5Oi0zLjE4MzY1NzE1MzAxNjQ1MzAyM2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjE4NzAzNjc4MjMzMzQyNzE0MWUrMDIseTotNy4xNTgwNzI2NTkxNDAzNjc0NzdlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNzkxOTQzMDQ4OTkyNTU4ODNlKzAyLHk6LTMuNTQxMjY5NTM1MzI5OTQ5NzQ3ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTYzMTQzODQxNjM3Njg5NDkxZSswMix5Oi02LjI4MTM2MjIxNjgyMDk4NDY1NmUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI2MzA2NzQ0MTM0ODg0NjM4N2UrMDIseTotNC4wMjkxMTMyODcxMzYyNTEzODdlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yODg2MTI4NDY4NTg0NzIzODFlKzAyLHk6LTUuNzQwNDE3Mzg0NjgzMDI0NjkzZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTg2MjIyNjg2MzAzMTgwNzUxZSswMix5Oi00LjEwMjcwODQ0MDc4MzYzMTI2MWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjM3MTA0OTg4NDE4MjcwNjY0OWUrMDIseTotNS43MzU2ODQ2ODcxNDA4MTY2MDdlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNzE0MzQ0NDAwODMyMzIyODllKzAyLHk6LTMuNDk5OTE0MjIzNTY2NDY3MDg2ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMTkwNTAwNjg5Nzk0ODc0MDYzZSswMix5Oi03LjE1NTE3NTkwOTgxNzg1Nzg3MWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI1Nzg1Mjk5Nzk4NjQ2NjMzNWUrMDIseTotMi43OTEyOTE1MjUyMDM2OTQ1OTBlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTYuMDAwNzM1NTk3NTAyMzcxMDkzZSswMix5Oi0zLjUyNDUzODU1NjA0MDg1NDQ3M2UrMDIsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjM3NzYyNzQ1ODM0MTc5MzU1NmUrMDIseTotMy45MDcyOTgyMjYwMTU5MTIyMzVlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4zODA1OTY4NzMwNDExMzY4MDNlKzAyLHk6LTIuMDcwNDM0MjYzNjA0MTAyMjk4ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi00LjcwOTA4Mzg2NDg1Mzg3NDk1N2UrMDIseTotNC43OTczODUxODc3MjcyNTM0MjRlKzAyLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNjIyMDczMTY4MTc4NzUyNjdlKzAyLHk6LTMuODIyODY3NDQ5MDQwNzQ0OTU4ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjI3NjM2MTIxNDUwODkxNTUxZSswMix5Oi00LjExMzM5MTMwNjQ0MjU5OTY3MWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI4MDY3Mjk2NDQzNTY1ODIzMGUrMDIseTotMi41MjYzMzIwMjczMDY1NDc4MDFlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4zMzg0ODgxMzMzMjUxODIzMzJlKzAyLHk6LTYuMjE3OTMxMjI2ODM2ODMyMDgyZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMzEwNDMwMzUyMjMzMjE4NTE0ZSswMix5Oi03LjQxNzAxMjMyMjIwODA1NzY0MGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNS44NDA5ODYzMDc1MzUzNzEyMjVlKzAyLHk6LTQuMzA0NDE3NDgxMDU2MzM2MjE0ZSswMixsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMDIyMDIxODYyNzQ1MDUyNjU4ZSswMix5Oi0zLjkxMjg5MzY4ODUzNTQ1NzY3MGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjA4MDI3NDc0MDM5NDg1MjEzMWUrMDIseTotNi45NjAwOTIyODM4ODE1NDIxMzBlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTUuNTQyMjMzMTM3NzA4OTE3NjM5ZSswMix5Oi00LjkwODQ1MjY4NTY5NDE5NTQ1MmUrMDIsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDotNS4yNjA1Mjc0NzQ5OTkwNDUxMjZlKzAyLHk6LTQuNTYzNzYwMDQxODA4NzgxNjkzZSswMixsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjExMzA5MDEzNDA1NTI3MjUzZSswMix5Oi0zLjYxMzM2NzM1MzA2NTQwMjE5OWUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI4NTAzNjc3NDc0OTQwMDE5NWUrMDIseTotMy4xNDA1MzUzNTQ5MTc4NjQ5MDhlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNjM1NDMxNDMyNDMwNDM0MDNlKzAyLHk6LTUuNDc4MjIwMjIzNTUzNzI3NjY0ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjEuNTg3ODU2Nzc1MzIwOTQwOTgzZSswMix5Oi03LjAyOTQxNTQxMjU4MzcwOTYxMGUrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjE1MDU2NDUxMTkxNDc1MjE4OGUrMDIseTotNC41NzI5MzkyNzgyMjAxMDY3MjllKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNDQ3MTMzMjA5MjcyMDUwMThlKzAyLHk6LTQuNjcwNjA0OTEzODY1MzM5MTE0ZSswMSxsYWJlbDoxfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjYyMDM0MzY3ODc1NzI1MTM4ZSswMix5Oi00LjE1NjA1MjYzNDI3MzQxNzgyM2UrMDEsbGFiZWw6MX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI5NTcxOTYxMzE5NzQwODY0OGUrMDIseTotNy4wNDA5MzM2MjEyMTA1NzI4MjRlKzAxLGxhYmVsOjF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS42MDAwMzIzNjA3MzEwMDIxNjI4NzllKzAyLHk6MS4yNTY5OTk0ODI3NjY1OTgzOTFlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi03LjE5Mjg5MzY0MTk4NzI1MzY1OWUrMDIseToyLjI5MDE3NDc3NDEyNjE5OTExMWUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS43NTUzMjk2NDU4ODcyODU4OTJlKzAyLHk6MS4wOTU2ODQ3NzM1MjEyOTg3NTJlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjA5NDIyNDU5ODIyMzgyMDUyZSswMix5Oi0yLjM1MDc2NjE0OTczMzM4ODQ4OGUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS40MDQ3MjczMDM1NjE2MzA1NDllKzAyLHk6MS40NTM0NjgxNDQ3NjM2NDMyOTVlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0zLjY0NDE3NTkwNDA4MDk1NTc3NWUrMDIseToyLjAzODIxMDMzMjU0MzA5OTgxMGUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS4yNjI1NTgxNzQ4MjcyODUzMTNlKzAyLHk6MS41MDYyMDU4NDM4MjY5NzUwMTNlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0zLjc5NDI4OTEyMzg4NDQ5ODczNmUrMDIseToyLjQ1MjU2MDY5NDQ2MDExNzA3N2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6LTYuODk5MTAyNTE2NDkyNDM4MzI2ZSswMix5Oi0xLjY1ODYyNjAwNjc4OTE3MDMzM2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6MS45Mzk4Mjk5NDU0MzEzMTM4MzFlKzAyLHk6OC4xNzMzODc4MTAyMjA3MDU3NzRlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi02LjA3MTg0MTAwNDIzOTQ0OTAzNDdlKzAyLHk6My40NjAwNDE0NzY3MDE4NDg2MzdlKzAyLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjkuOTUxMDg3OTU0OTU2Mzg5NTgxZSswMSx5OjEuNjUwMTIwNzgxNjExMTA0NTE5ZSswMixsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoyLjI5Mjk1MzkzMDY2Mjk1NTU5OWUrMDIseTotMi43MTExMjMyMDk2NzEyNjQwNzhlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4OjIuMjE1NzQ3MTIyNzY3ODI5MTgzZSswMix5Oi0xLjYwMjQwOTM3ODk2NTI1MjUyOWUrMDEsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4yNDQ0NTA4MzU3MjYzODkzNTdlKzAyLHk6LTIuMjEwOTkzNTI2MDQ0OTc3Mzg2ZSswMSxsYWJlbDotMX0pO1xuICBwb2ludHMucHVzaCh7eDoxLjQxNjMyMjgwMTE0MDQ3NDMyNmUrMDIseToxLjQ0MjIyNDYxMjk3OTEzNzgxN2UrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xMTcyODkxMTIyNjMyMDgwNDBlKzAyLHk6Mi43NDgyOTU2OTUwMTkxODMwNzFlKzAxLGxhYmVsOi0xfSk7XG4gIHBvaW50cy5wdXNoKHt4Oi0zLjcxNDM0MDIyMTE5OTE0NTczMWUrMDIseToyLjA3NjUyNzQ5NjgzODk0NTQxMGUrMDIsbGFiZWw6LTF9KTtcbiAgcG9pbnRzLnB1c2goe3g6Mi4xNjM3ODA2ODM5NDc4NTQwMTZlKzAyLHk6LTUuMzYyNDU1OTYyNTkwODk4Mjk1ZSswMCxsYWJlbDotMX0pO1xuMS44NDE5MjY0MDMwMzIxNjcwNTllKzAyLDkuNjMxOTE0ODUyMTkwODY3MjkzZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMjU2MTIyMzQ4MjQ5MDQxMDY3ZSswMiwtMy4xOTA3Nzk5MjY0MzQ3MzM5MzdlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4zMDMzNTIxODc5MTA3Mzc0MjhlKzAyLC0yLjE3NTU3MDg4NzgyNzY3NjM1OGUrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4xLjE2NDYxODMyNDAyMTU4OTQ3M2UrMDIsMS41NjkzMDU4MTc0MDI1NTEyMTNlKzAyLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4xOTA5MzI4MTU3MTI2Mzc1OTFlKzAyLDIuNDMxOTY5MTQ3MDA2NDY5MDAxZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbi0zLjcyODI0MzU2NTg3MTg1ODg5MWUrMDIsMi4yNzIzOTQxNzIwNjA2ODExMTVlKzAyLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuLTMuODg5OTkxMDQwMzAyNDA1MTY3ZSswMiwyLjcyMTU5MDIzMTczNzI0MzM1N2UrMDIsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4tMy4yMzg1ODI1NDk4ODc1NTkwMjZlKzAyLDMuMzI2NTQyODA5MTE5ODgzNTE1ZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbi04LjI4MTg4Mjk3MDAzMzAxNDk5OWUrMDIsOS4xOTMwNjEwMzE4NDEzMDE2NTZlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4wMjUzNTYwNjA3OTgzMzc0MTBlKzAyLDYuNjQ2NjU3MjgzNjMwOTczNzIzZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMDUwNzQzNzc4ODYzOTgxOTU5ZSswMiw2LjEyNzU3NjUwODA0OTgxMzk1M2UrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4tNy4yOTEzNDc4MDMyMTI3NjAyNTVlKzAyLDMuMzQyMzIxNzQ3MzAzODI0OTY0ZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMjI0NzQzODEwODM2NTIxNjE4ZSswMiwtMi41NDY2MjU5OTY5MjA0MDI4MTJlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMS45ODIwNzY5Nzg3NjE5NzcyNzNlKzAyLDcuMDA4NzE5MjczMDYxMDQ1Mzg1ZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbi0yLjk5MTEwMzUxMTU0OTg5MzAyOGUrMDIsLTYuNzM0MzU5MjkzMDc3Mjg4NTU1ZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbi02LjgzNTk1NjY2MTA2NjkzNjcwNGUrMDIsLTIuMDIzNTk4MzkzMDUwNTAwMDIyZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMDA0NzU1NzM0ODQxNjA0NjM1ZSswMiw2LjgzMzI4NTg5MTUxODY3NzYwMmUrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4yLjIwNzg5OTIzNTkxNjkyOTExNWUrMDIsLTEuNDA0OTQwMzUwMzg3MDIyNzE4ZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMjAxNTE0NzE0NzM4OTQ1NTk5ZSswMiwtMi4yMzI3MDM1NDYwMzk5OTcyNzhlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4xNzQ1ODc0MjY2Mzk3ODUxMjJlKzAyLDQuNzc1Mzg3NjYzNzcyMjA0NTgzZSswMCwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjEuNzA4MTc0OTczNDMwNjE1MTgyZSswMiwxLjE2ODE1Mzg0MTU5ODkwMDU4NGUrMDIsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4tMy43ODY0NTY0NTIyMjMwODcwMTJlKzAyLDIuNTE3MzAyOTIzNjQ4MTgyNjg0ZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMjM4Nzk2NTY4NjM2NjI1NzUwZSswMiwtMi42MjUyNzMwNTg3MzM1Mjc1MjBlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuLTMuNTYzNTkzNjQxODUyNTAyMjg3ZSswMiwxLjMxMDExNTkzNjczNTcwMDc1N2UrMDIsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4yLjEyMzU0NTk0NzMwODcyNDYzNWUrMDIsMy4xNzc5ODgzMzk2Njk5MDY2MzdlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuNC4yMDUzOTAwMjM3MTA4NjE0MTRlKzAxLC03LjQ0Njg5OTk5NTIwNjU4MTQ4MGUrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4xLjczNjA3MzM1NTY1MDM0MTA1N2UrMDIsMS4xMzc3MjU2Mzg1NjM2OTE0NjJlKzAyLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4xOTk5MTI4MTQ2ODYxMzY5MjZlKzAyLC02LjY0MTM3MjE3NTE3MjMxNzE0OWUrMDAsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4yLjI1NzAzOTAzNDk0NzY2MDgwOWUrMDIsLTIuOTE2NTI1NjU3NjUyNzg4NDM5ZSswMSwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbi03LjMzOTk4NDcxMzg4ODAwNzk0NmUrMDIsNi4wMTQ1NjU0MzgwNzYxODI2MDJlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMS42NTg4NDY3MzU1MDIwMjc5MTFlKzAyLDEuMjE4NjIyMTQ4OTA5MzczNjY0ZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMjY0Njg3MDA0MDYzMjY0OTA4ZSswMiwtMy44NDg0OTkxMjg0OTI5MDg3MzllKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMS43MTE0MTM5MjkwMTQwNTczNzNlKzAyLDEuMTI2NDE2OTI1NzAyMTQ0ODgwZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMTkyNTIzNTQ1NjMzOTYxODE3ZSswMiwtMS4yMDMyNzI0MTQzNTA0NTM5NzhlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuLTcuMTAxMDkzOTU0NDIyOTAxNzg4ZSswMiwyLjU1OTg5MTA2MzIxODUxNzIxOGUrMDIsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4xLjcxODA1MTgyMTk4MDk1NTM2N2UrMDIsMS4xMzg2MDg4OTM0Njg3Mjg2NjdlKzAyLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMS42MDQyMzYyNTQ5MzEwMjIwNzRlKzAyLDEuMTk0Nzg0MTI1NDM2MzE5MzI5ZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbi0zLjU2NTE2NjM3OTYwNjA4OTg5MGUrMDIsMS41NzA5ODQxODEzMTgzNzQzNDBlKzAyLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4xNTgxNTU2NDM0NzY4ODU2NDNlKzAyLC0xLjMxMTExNTA4NDA0MDY0MjU2NGUrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4tNy4xMTUyODUzNTcwMTkzODAzOTllKzAyLDIuNzcxNjQ2NTM1OTI3MDQyNjkyZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMTE3NzkzNzY0ODE5MTYwNDU4ZSswMiwtNS4wNjkwNDM1NDYzODYwOTYxMTFlKzAwLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4yNjkyOTU2MzczODAxNTM2MDdlKzAyLC0zLjUyMTYwMjE0ODYzNzYxOTIyM2UrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4xLjk5MTQ3Nzc3ODM2OTk3MTkyOWUrMDIsNi4zNDQwOTM4OTA5MDQ5ODkwNTNlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMS44MzY3MjU3NzEyMzUyMTk4OTVlKzAyLDEuMDA3MDQ2MzU3NjA4NjkyNTE3ZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbi03LjE4MjA0MjU1NjU2NDU5Mzk1MWUrMDIsMi40ODMxODkxMDM2OTQ5MTczMjFlKzAyLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuLTcuMzM3OTcwMjgxNDU3MTk3NjQzZSswMiw3LjM3NjkzNDAyNzQ3OTQzNTk0MGUrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG4tNy4yNTM1NTU0ODMxODU5NjU2MTNlKzAyLDEuOTU4NDM2OTU2NzMzOTM2ODI1ZSswMiwwLjAwMDAwMDAwMDAwMDAwMDAwMGUrMDBcbjIuMjI1MTc2MDI5OTM5NTY5NTYwZSswMiwtMS4zODk0MTIyOTQzMjE5MjkyMzFlKzAxLDAuMDAwMDAwMDAwMDAwMDAwMDAwZSswMFxuMi4yMzM5NzYwNjYzNTQzMzUwNDZlKzAyLC0xLjg0ODA1MTU4NTc2MTU4MDk5NWUrMDEsMC4wMDAwMDAwMDAwMDAwMDAwMDBlKzAwXG5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGbVNhbXBsZUluZGVwZW5kZW50KG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlbkZtU2FtcGxlSW5kZXBlbmRlbnQoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5dG9wMTAwMDBMdW5nTWVsKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlbkNsYXNzaWZ5VG9wMTAwMDAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5dG9wMTAwMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuQ2xhc3NpZnlUb3AxMDAwKCkge1xuXG5cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeXRvcDEwMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuQ2xhc3NpZnlUb3AxMDAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5dG9wMTBMdW5nTWVsKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlbkNsYXNzaWZ5VG9wMTAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzRm1NdXRhdGlvbnNJbmRlcGVuZGVudChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5GbU11dGF0aW9uc0luZGVwZW5kZW50KCkge1xuXG5cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzRm1TYW1wbGVJbmRlcGVuZGVudChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZXRGbVNhbXBsZUluZGVwZW5kZW50KCkge1xuXG5cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzdG9wMTAwMDBMdW5nTWVsKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlblJlZ3Jlc3NUb3AxMDAwMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc3RvcDEwMDBMdW5nTWVsKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlblJlZ3Jlc3NUb3AxMDAwKCkge1xuXG5cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzdG9wMTAwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5SZWdyZXNzVG9wMTAwKCkge1xuXG5cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzdG9wMTBMdW5nTWVsKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlblJlZ3Jlc3NUb3AxMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc1BsYW5lKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHJhZGl1cyA9IDY7XG4gIGxldCBsYWJlbFNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAuZG9tYWluKFstMTAsIDEwXSlcbiAgICAucmFuZ2UoWy0xLCAxXSk7XG4gIGxldCBnZXRMYWJlbCA9ICh4LCB5KSA9PiBsYWJlbFNjYWxlKHggKyB5KTtcblxuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNhbXBsZXM7IGkrKykge1xuICAgIGxldCB4ID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKTtcbiAgICBsZXQgeSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cyk7XG4gICAgbGV0IG5vaXNlWCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbm9pc2VZID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBsYWJlbCA9IGdldExhYmVsKHggKyBub2lzZVgsIHkgKyBub2lzZVkpO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzR2F1c3NpYW4obnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGxldCBsYWJlbFNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAuZG9tYWluKFswLCAyXSlcbiAgICAucmFuZ2UoWzEsIDBdKVxuICAgIC5jbGFtcCh0cnVlKTtcblxuICBsZXQgZ2F1c3NpYW5zID0gW1xuICAgIFstNCwgMi41LCAxXSxcbiAgICBbMCwgMi41LCAtMV0sXG4gICAgWzQsIDIuNSwgMV0sXG4gICAgWy00LCAtMi41LCAtMV0sXG4gICAgWzAsIC0yLjUsIDFdLFxuICAgIFs0LCAtMi41LCAtMV1cbiAgXTtcblxuICBmdW5jdGlvbiBnZXRMYWJlbCh4LCB5KSB7XG4gICAgLy8gQ2hvb3NlIHRoZSBvbmUgdGhhdCBpcyBtYXhpbXVtIGluIGFicyB2YWx1ZS5cbiAgICBsZXQgbGFiZWwgPSAwO1xuICAgIGdhdXNzaWFucy5mb3JFYWNoKChbY3gsIGN5LCBzaWduXSkgPT4ge1xuICAgICAgbGV0IG5ld0xhYmVsID0gc2lnbiAqIGxhYmVsU2NhbGUoZGlzdCh7eCwgeX0sIHt4OiBjeCwgeTogY3l9KSk7XG4gICAgICBpZiAoTWF0aC5hYnMobmV3TGFiZWwpID4gTWF0aC5hYnMobGFiZWwpKSB7XG4gICAgICAgIGxhYmVsID0gbmV3TGFiZWw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG4gIGxldCByYWRpdXMgPSA2O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNhbXBsZXM7IGkrKykge1xuICAgIGxldCB4ID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKTtcbiAgICBsZXQgeSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cyk7XG4gICAgbGV0IG5vaXNlWCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbm9pc2VZID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBsYWJlbCA9IGdldExhYmVsKHggKyBub2lzZVgsIHkgKyBub2lzZVkpO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9O1xuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUNpcmNsZURhdGEobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG4gIGxldCByYWRpdXMgPSA1O1xuICBmdW5jdGlvbiBnZXRDaXJjbGVMYWJlbChwOiBQb2ludCwgY2VudGVyOiBQb2ludCkge1xuICAgIHJldHVybiAoZGlzdChwLCBjZW50ZXIpIDwgKHJhZGl1cyAqIDAuNSkpID8gMSA6IC0xO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgcG9zaXRpdmUgcG9pbnRzIGluc2lkZSB0aGUgY2lyY2xlLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNhbXBsZXMgLyAyOyBpKyspIHtcbiAgICBsZXQgciA9IHJhbmRVbmlmb3JtKDAsIHJhZGl1cyAqIDAuNSk7XG4gICAgbGV0IGFuZ2xlID0gcmFuZFVuaWZvcm0oMCwgMiAqIE1hdGguUEkpO1xuICAgIGxldCB4ID0gciAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICBsZXQgeSA9IHIgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgbGV0IG5vaXNlWCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbm9pc2VZID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBsYWJlbCA9IGdldENpcmNsZUxhYmVsKHt4OiB4ICsgbm9pc2VYLCB5OiB5ICsgbm9pc2VZfSwge3g6IDAsIHk6IDB9KTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIG5lZ2F0aXZlIHBvaW50cyBvdXRzaWRlIHRoZSBjaXJjbGUuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlcyAvIDI7IGkrKykge1xuICAgIGxldCByID0gcmFuZFVuaWZvcm0ocmFkaXVzICogMC43LCByYWRpdXMpO1xuICAgIGxldCBhbmdsZSA9IHJhbmRVbmlmb3JtKDAsIDIgKiBNYXRoLlBJKTtcbiAgICBsZXQgeCA9IHIgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgbGV0IHkgPSByICogTWF0aC5jb3MoYW5nbGUpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRDaXJjbGVMYWJlbCh7eDogeCArIG5vaXNlWCwgeTogeSArIG5vaXNlWX0sIHt4OiAwLCB5OiAwfSk7XG4gICAgcG9pbnRzLnB1c2goe3gsIHksIGxhYmVsfSk7XG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5WE9SRGF0YShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgZnVuY3Rpb24gZ2V0WE9STGFiZWwocDogUG9pbnQpIHsgcmV0dXJuIHAueCAqIHAueSA+PSAwID8gMSA6IC0xOyB9XG5cbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzOyBpKyspIHtcbiAgICBsZXQgeCA9IHJhbmRVbmlmb3JtKC01LCA1KTtcbiAgICBsZXQgcGFkZGluZyA9IDAuMztcbiAgICB4ICs9IHggPiAwID8gcGFkZGluZyA6IC1wYWRkaW5nOyAgLy8gUGFkZGluZy5cbiAgICBsZXQgeSA9IHJhbmRVbmlmb3JtKC01LCA1KTtcbiAgICB5ICs9IHkgPiAwID8gcGFkZGluZyA6IC1wYWRkaW5nO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtNSwgNSkgKiBub2lzZTtcbiAgICBsZXQgbm9pc2VZID0gcmFuZFVuaWZvcm0oLTUsIDUpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0WE9STGFiZWwoe3g6IHggKyBub2lzZVgsIHk6IHkgKyBub2lzZVl9KTtcbiAgICAvL2NvbnNvbGUubG9nKHgpO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9XG5cblxuICByZXR1cm4gcG9pbnRzO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzYW1wbGUgZnJvbSBhIHVuaWZvcm0gW2EsIGJdIGRpc3RyaWJ1dGlvbi5cbiAqIFVzZXMgdGhlIHNlZWRyYW5kb20gbGlicmFyeSBhcyB0aGUgcmFuZG9tIGdlbmVyYXRvci5cbiAqL1xuZnVuY3Rpb24gcmFuZFVuaWZvcm0oYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpICsgYTtcbn1cblxuLyoqXG4gKiBTYW1wbGVzIGZyb20gYSBub3JtYWwgZGlzdHJpYnV0aW9uLiBVc2VzIHRoZSBzZWVkcmFuZG9tIGxpYnJhcnkgYXMgdGhlXG4gKiByYW5kb20gZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSBtZWFuIFRoZSBtZWFuLiBEZWZhdWx0IGlzIDAuXG4gKiBAcGFyYW0gdmFyaWFuY2UgVGhlIHZhcmlhbmNlLiBEZWZhdWx0IGlzIDEuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbFJhbmRvbShtZWFuID0gMCwgdmFyaWFuY2UgPSAxKTogbnVtYmVyIHtcbiAgbGV0IHYxOiBudW1iZXIsIHYyOiBudW1iZXIsIHM6IG51bWJlcjtcbiAgZG8ge1xuICAgIHYxID0gMiAqIE1hdGgucmFuZG9tKCkgLSAxO1xuICAgIHYyID0gMiAqIE1hdGgucmFuZG9tKCkgLSAxO1xuICAgIHMgPSB2MSAqIHYxICsgdjIgKiB2MjtcbiAgfSB3aGlsZSAocyA+IDEpO1xuXG4gIGxldCByZXN1bHQgPSBNYXRoLnNxcnQoLTIgKiBNYXRoLmxvZyhzKSAvIHMpICogdjE7XG4gIHJldHVybiBtZWFuICsgTWF0aC5zcXJ0KHZhcmlhbmNlKSAqIHJlc3VsdDtcbn1cblxuLyoqIFJldHVybnMgdGhlIGV1Y2xlZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHMgaW4gc3BhY2UuICovXG5mdW5jdGlvbiBkaXN0KGE6IFBvaW50LCBiOiBQb2ludCk6IG51bWJlciB7XG4gIGxldCBkeCA9IGEueCAtIGIueDtcbiAgbGV0IGR5ID0gYS55IC0gYi55O1xuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbn1cbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuaW1wb3J0IHtFeGFtcGxlMkR9IGZyb20gXCIuL2RhdGFzZXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIZWF0TWFwU2V0dGluZ3Mge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIHNob3dBeGVzPzogYm9vbGVhbjtcbiAgbm9Tdmc/OiBib29sZWFuO1xufVxuXG4vKiogTnVtYmVyIG9mIGRpZmZlcmVudCBzaGFkZXMgKGNvbG9ycykgd2hlbiBkcmF3aW5nIGEgZ3JhZGllbnQgaGVhdG1hcCAqL1xuY29uc3QgTlVNX1NIQURFUyA9IDMwO1xuXG4vKipcbiAqIERyYXdzIGEgaGVhdG1hcCB1c2luZyBjYW52YXMuIFVzZWQgZm9yIHNob3dpbmcgdGhlIGxlYXJuZWQgZGVjaXNpb25cbiAqIGJvdW5kYXJ5IG9mIHRoZSBjbGFzc2lmaWNhdGlvbiBhbGdvcml0aG0uIENhbiBhbHNvIGRyYXcgZGF0YSBwb2ludHNcbiAqIHVzaW5nIGFuIHN2ZyBvdmVybGF5ZWQgb24gdG9wIG9mIHRoZSBjYW52YXMgaGVhdG1hcC5cbiAqL1xuZXhwb3J0IGNsYXNzIEhlYXRNYXAge1xuICBwcml2YXRlIHNldHRpbmdzOiBIZWF0TWFwU2V0dGluZ3MgPSB7XG4gICAgc2hvd0F4ZXM6IGZhbHNlLFxuICAgIG5vU3ZnOiBmYWxzZVxuICB9O1xuICBwcml2YXRlIHhTY2FsZTogZDMuc2NhbGUuTGluZWFyPG51bWJlciwgbnVtYmVyPjtcbiAgcHJpdmF0ZSB5U2NhbGU6IGQzLnNjYWxlLkxpbmVhcjxudW1iZXIsIG51bWJlcj47XG4gIHByaXZhdGUgbnVtU2FtcGxlczogbnVtYmVyO1xuICBwcml2YXRlIGNvbG9yOiBkMy5zY2FsZS5RdWFudGl6ZTxzdHJpbmc+O1xuICBwcml2YXRlIGNhbnZhczogZDMuU2VsZWN0aW9uPGFueT47XG4gIHByaXZhdGUgc3ZnOiBkMy5TZWxlY3Rpb248YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHdpZHRoOiBudW1iZXIsIG51bVNhbXBsZXM6IG51bWJlciwgeERvbWFpbjogW251bWJlciwgbnVtYmVyXSxcbiAgICAgIHlEb21haW46IFtudW1iZXIsIG51bWJlcl0sIGNvbnRhaW5lcjogZDMuU2VsZWN0aW9uPGFueT4sXG4gICAgICB1c2VyU2V0dGluZ3M/OiBIZWF0TWFwU2V0dGluZ3MpIHtcbiAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgIGxldCBoZWlnaHQgPSB3aWR0aDtcbiAgICBsZXQgcGFkZGluZyA9IHVzZXJTZXR0aW5ncy5zaG93QXhlcyA/IDIwIDogMDtcblxuICAgIGlmICh1c2VyU2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgLy8gb3ZlcndyaXRlIHRoZSBkZWZhdWx0cyB3aXRoIHRoZSB1c2VyLXNwZWNpZmllZCBzZXR0aW5ncy5cbiAgICAgIGZvciAobGV0IHByb3AgaW4gdXNlclNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NbcHJvcF0gPSB1c2VyU2V0dGluZ3NbcHJvcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgICAgLmRvbWFpbih4RG9tYWluKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aCAtIDIgKiBwYWRkaW5nXSk7XG5cbiAgICB0aGlzLnlTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAuZG9tYWluKHlEb21haW4pXG4gICAgICAucmFuZ2UoW2hlaWdodCAtIDIgKiBwYWRkaW5nLCAwXSk7XG5cbiAgICAvLyBHZXQgYSByYW5nZSBvZiBjb2xvcnMuXG4gICAgbGV0IHRtcFNjYWxlID0gZDMuc2NhbGUubGluZWFyPHN0cmluZywgc3RyaW5nPigpXG4gICAgICAgIC5kb21haW4oWzAsIC41LCAxXSlcbiAgICAgICAgLnJhbmdlKFtcIiNmNTkzMjJcIiwgXCIjZThlYWViXCIsIFwiIzA4NzdiZFwiXSlcbiAgICAgICAgLmNsYW1wKHRydWUpO1xuICAgIC8vIER1ZSB0byBudW1lcmljYWwgZXJyb3IsIHdlIG5lZWQgdG8gc3BlY2lmeVxuICAgIC8vIGQzLnJhbmdlKDAsIGVuZCArIHNtYWxsX2Vwc2lsb24sIHN0ZXApXG4gICAgLy8gaW4gb3JkZXIgdG8gZ3VhcmFudGVlIHRoYXQgd2Ugd2lsbCBoYXZlIGVuZC9zdGVwIGVudHJpZXMgd2l0aFxuICAgIC8vIHRoZSBsYXN0IGVsZW1lbnQgYmVpbmcgZXF1YWwgdG8gZW5kLlxuICAgIGxldCBjb2xvcnMgPSBkMy5yYW5nZSgwLCAxICsgMUUtOSwgMSAvIE5VTV9TSEFERVMpLm1hcChhID0+IHtcbiAgICAgIHJldHVybiB0bXBTY2FsZShhKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbG9yID0gZDMuc2NhbGUucXVhbnRpemU8c3RyaW5nPigpXG4gICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFstMSwgMV0pXG4gICAgICAgICAgICAgICAgICAgICAucmFuZ2UoY29sb3JzKTtcblxuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5hcHBlbmQoXCJkaXZcIilcbiAgICAgIC5zdHlsZSh7XG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgdG9wOiBgLSR7cGFkZGluZ31weGAsXG4gICAgICAgIGxlZnQ6IGAtJHtwYWRkaW5nfXB4YFxuICAgICAgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBjb250YWluZXIuYXBwZW5kKFwiY2FudmFzXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIG51bVNhbXBsZXMpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBudW1TYW1wbGVzKVxuICAgICAgLnN0eWxlKFwid2lkdGhcIiwgKHdpZHRoIC0gMiAqIHBhZGRpbmcpICsgXCJweFwiKVxuICAgICAgLnN0eWxlKFwiaGVpZ2h0XCIsIChoZWlnaHQgLSAyICogcGFkZGluZykgKyBcInB4XCIpXG4gICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAuc3R5bGUoXCJ0b3BcIiwgYCR7cGFkZGluZ31weGApXG4gICAgICAuc3R5bGUoXCJsZWZ0XCIsIGAke3BhZGRpbmd9cHhgKTtcblxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5ub1N2Zykge1xuICAgICAgdGhpcy5zdmcgPSBjb250YWluZXIuYXBwZW5kKFwic3ZnXCIpLmF0dHIoe1xuICAgICAgICAgIFwid2lkdGhcIjogd2lkdGgsXG4gICAgICAgICAgXCJoZWlnaHRcIjogaGVpZ2h0XG4gICAgICB9KS5zdHlsZSh7XG4gICAgICAgIC8vIE92ZXJsYXkgdGhlIHN2ZyBvbiB0b3Agb2YgdGhlIGNhbnZhcy5cbiAgICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgICAgIFwibGVmdFwiOiBcIjBcIixcbiAgICAgICAgXCJ0b3BcIjogXCIwXCJcbiAgICAgIH0pLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3BhZGRpbmd9LCR7cGFkZGluZ30pYCk7XG5cbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidHJhaW5cIik7XG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRlc3RcIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd0F4ZXMpIHtcbiAgICAgIGxldCB4QXhpcyA9IGQzLnN2Zy5heGlzKClcbiAgICAgICAgLnNjYWxlKHRoaXMueFNjYWxlKVxuICAgICAgICAub3JpZW50KFwiYm90dG9tXCIpO1xuXG4gICAgICBsZXQgeUF4aXMgPSBkMy5zdmcuYXhpcygpXG4gICAgICAgIC5zY2FsZSh0aGlzLnlTY2FsZSlcbiAgICAgICAgLm9yaWVudChcInJpZ2h0XCIpO1xuXG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0IC0gMiAqIHBhZGRpbmd9KWApXG4gICAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBheGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHdpZHRoIC0gMiAqIHBhZGRpbmcpICsgXCIsMClcIilcbiAgICAgICAgLmNhbGwoeUF4aXMpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRlc3RQb2ludHMocG9pbnRzOiBFeGFtcGxlMkRbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLm5vU3ZnKSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkNhbid0IGFkZCBwb2ludHMgc2luY2Ugbm9Tdmc9dHJ1ZVwiKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaXJjbGVzKHRoaXMuc3ZnLnNlbGVjdChcImcudGVzdFwiKSwgcG9pbnRzKTtcbiAgfVxuXG4gIHVwZGF0ZVBvaW50cyhwb2ludHM6IEV4YW1wbGUyRFtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mubm9TdmcpIHtcbiAgICAgIHRocm93IEVycm9yKFwiQ2FuJ3QgYWRkIHBvaW50cyBzaW5jZSBub1N2Zz10cnVlXCIpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNpcmNsZXModGhpcy5zdmcuc2VsZWN0KFwiZy50cmFpblwiKSwgcG9pbnRzKTtcbiAgfVxuXG4gIHVwZGF0ZUJhY2tncm91bmQoZGF0YTogbnVtYmVyW11bXSwgZGlzY3JldGl6ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGxldCBkeCA9IGRhdGFbMF0ubGVuZ3RoO1xuICAgIGxldCBkeSA9IGRhdGEubGVuZ3RoO1xuXG4gICAgaWYgKGR4ICE9PSB0aGlzLm51bVNhbXBsZXMgfHwgZHkgIT09IHRoaXMubnVtU2FtcGxlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiVGhlIHByb3ZpZGVkIGRhdGEgbWF0cml4IG11c3QgYmUgb2Ygc2l6ZSBcIiArXG4gICAgICAgICAgXCJudW1TYW1wbGVzIFggbnVtU2FtcGxlc1wiKTtcbiAgICB9XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwaXhlbCBjb2xvcnM7IHNjYWxlZCBieSBDU1MuXG4gICAgbGV0IGNvbnRleHQgPSAodGhpcy5jYW52YXMubm9kZSgpIGFzIEhUTUxDYW52YXNFbGVtZW50KS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IGltYWdlID0gY29udGV4dC5jcmVhdGVJbWFnZURhdGEoZHgsIGR5KTtcblxuICAgIGZvciAobGV0IHkgPSAwLCBwID0gLTE7IHkgPCBkeTsgKyt5KSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGR4OyArK3gpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVt4XVt5XTtcbiAgICAgICAgaWYgKGRpc2NyZXRpemUpIHtcbiAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA+PSAwID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYyA9IGQzLnJnYih0aGlzLmNvbG9yKHZhbHVlKSk7XG4gICAgICAgIGltYWdlLmRhdGFbKytwXSA9IGMucjtcbiAgICAgICAgaW1hZ2UuZGF0YVsrK3BdID0gYy5nO1xuICAgICAgICBpbWFnZS5kYXRhWysrcF0gPSBjLmI7XG4gICAgICAgIGltYWdlLmRhdGFbKytwXSA9IDE2MDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2UsIDAsIDApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaXJjbGVzKGNvbnRhaW5lcjogZDMuU2VsZWN0aW9uPGFueT4sIHBvaW50czogRXhhbXBsZTJEW10pIHtcbiAgICAvLyBLZWVwIG9ubHkgcG9pbnRzIHRoYXQgYXJlIGluc2lkZSB0aGUgYm91bmRzLlxuICAgIGxldCB4RG9tYWluID0gdGhpcy54U2NhbGUuZG9tYWluKCk7XG4gICAgbGV0IHlEb21haW4gPSB0aGlzLnlTY2FsZS5kb21haW4oKTtcbiAgICBwb2ludHMgPSBwb2ludHMuZmlsdGVyKHAgPT4ge1xuICAgICAgcmV0dXJuIHAueCA+PSB4RG9tYWluWzBdICYmIHAueCA8PSB4RG9tYWluWzFdXG4gICAgICAgICYmIHAueSA+PSB5RG9tYWluWzBdICYmIHAueSA8PSB5RG9tYWluWzFdO1xuICAgIH0pO1xuXG4gICAgLy8gQXR0YWNoIGRhdGEgdG8gaW5pdGlhbGx5IGVtcHR5IHNlbGVjdGlvbi5cbiAgICBsZXQgc2VsZWN0aW9uID0gY29udGFpbmVyLnNlbGVjdEFsbChcImNpcmNsZVwiKS5kYXRhKHBvaW50cyk7XG5cbiAgICAvLyBJbnNlcnQgZWxlbWVudHMgdG8gbWF0Y2ggbGVuZ3RoIG9mIHBvaW50cyBhcnJheS5cbiAgICBzZWxlY3Rpb24uZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInJcIiwgMyk7XG5cbiAgICAvLyBVcGRhdGUgcG9pbnRzIHRvIGJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLlxuICAgIHNlbGVjdGlvblxuICAgICAgLmF0dHIoe1xuICAgICAgICBjeDogKGQ6IEV4YW1wbGUyRCkgPT4gdGhpcy54U2NhbGUoZC54KSxcbiAgICAgICAgY3k6IChkOiBFeGFtcGxlMkQpID0+IHRoaXMueVNjYWxlKGQueSksXG4gICAgICB9KVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkID0+IHRoaXMuY29sb3IoZC5sYWJlbCkpO1xuXG4gICAgLy8gUmVtb3ZlIHBvaW50cyBpZiB0aGUgbGVuZ3RoIGhhcyBnb25lIGRvd24uXG4gICAgc2VsZWN0aW9uLmV4aXQoKS5yZW1vdmUoKTtcbiAgfVxufSAgLy8gQ2xvc2UgY2xhc3MgSGVhdE1hcC5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZU1hdHJpeChtYXRyaXg6IG51bWJlcltdW10sIGZhY3RvcjogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGlmIChtYXRyaXgubGVuZ3RoICE9PSBtYXRyaXhbMF0ubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHByb3ZpZGVkIG1hdHJpeCBtdXN0IGJlIGEgc3F1YXJlIG1hdHJpeFwiKTtcbiAgfVxuICBpZiAobWF0cml4Lmxlbmd0aCAlIGZhY3RvciAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB3aWR0aC9oZWlnaHQgb2YgdGhlIG1hdHJpeCBtdXN0IGJlIGRpdmlzaWJsZSBieSBcIiArXG4gICAgICAgIFwidGhlIHJlZHVjdGlvbiBmYWN0b3JcIik7XG4gIH1cbiAgbGV0IHJlc3VsdDogbnVtYmVyW11bXSA9IG5ldyBBcnJheShtYXRyaXgubGVuZ3RoIC8gZmFjdG9yKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpICs9IGZhY3Rvcikge1xuICAgIHJlc3VsdFtpIC8gZmFjdG9yXSA9IG5ldyBBcnJheShtYXRyaXgubGVuZ3RoIC8gZmFjdG9yKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5sZW5ndGg7IGogKz0gZmFjdG9yKSB7XG4gICAgICBsZXQgYXZnID0gMDtcbiAgICAgIC8vIFN1bSBhbGwgdGhlIHZhbHVlcyBpbiB0aGUgbmVpZ2hib3Job29kLlxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBmYWN0b3I7IGsrKykge1xuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGZhY3RvcjsgbCsrKSB7XG4gICAgICAgICAgYXZnICs9IG1hdHJpeFtpICsga11baiArIGxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhdmcgLz0gKGZhY3RvciAqIGZhY3Rvcik7XG4gICAgICByZXN1bHRbaSAvIGZhY3Rvcl1baiAvIGZhY3Rvcl0gPSBhdmc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG50eXBlIERhdGFQb2ludCA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXJbXTtcbn07XG5cbi8qKlxuICogQSBtdWx0aS1zZXJpZXMgbGluZSBjaGFydCB0aGF0IGFsbG93cyB5b3UgdG8gYXBwZW5kIG5ldyBkYXRhIHBvaW50c1xuICogYXMgZGF0YSBiZWNvbWVzIGF2YWlsYWJsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGVuZGluZ0xpbmVDaGFydCB7XG4gIHByaXZhdGUgbnVtTGluZXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBkYXRhOiBEYXRhUG9pbnRbXSA9IFtdO1xuICBwcml2YXRlIHN2ZzogZDMuU2VsZWN0aW9uPGFueT47XG4gIHByaXZhdGUgeFNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIHlTY2FsZTogZDMuc2NhbGUuTGluZWFyPG51bWJlciwgbnVtYmVyPjtcbiAgcHJpdmF0ZSBwYXRoczogQXJyYXk8ZDMuU2VsZWN0aW9uPGFueT4+O1xuICBwcml2YXRlIGxpbmVDb2xvcnM6IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgbWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gIHByaXZhdGUgbWF4WSA9IE51bWJlci5NSU5fVkFMVUU7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PiwgbGluZUNvbG9yczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmxpbmVDb2xvcnMgPSBsaW5lQ29sb3JzO1xuICAgIHRoaXMubnVtTGluZXMgPSBsaW5lQ29sb3JzLmxlbmd0aDtcbiAgICBsZXQgbm9kZSA9IGNvbnRhaW5lci5ub2RlKCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0IHRvdGFsV2lkdGggPSBub2RlLm9mZnNldFdpZHRoO1xuICAgIGxldCB0b3RhbEhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCBtYXJnaW4gPSB7dG9wOiAyLCByaWdodDogMCwgYm90dG9tOiAyLCBsZWZ0OiAyfTtcbiAgICBsZXQgd2lkdGggPSB0b3RhbFdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgbGV0IGhlaWdodCA9IHRvdGFsSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAwXSlcbiAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgIHRoaXMueVNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDBdKVxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxuICAgIHRoaXMuc3ZnID0gY29udGFpbmVyLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgICB0aGlzLnBhdGhzID0gbmV3IEFycmF5KHRoaXMubnVtTGluZXMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaW5lczsgaSsrKSB7XG4gICAgICB0aGlzLnBhdGhzW2ldID0gdGhpcy5zdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgICAuc3R5bGUoe1xuICAgICAgICAgIFwiZmlsbFwiOiBcIm5vbmVcIixcbiAgICAgICAgICBcInN0cm9rZVwiOiBsaW5lQ29sb3JzW2ldLFxuICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFwiMS41cHhcIlxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLnJlZHJhdygpO1xuICAgIHRoaXMubWluWSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgdGhpcy5tYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgfVxuXG4gIGFkZERhdGFQb2ludChkYXRhUG9pbnQ6IG51bWJlcltdKSB7XG4gICAgaWYgKGRhdGFQb2ludC5sZW5ndGggIT09IHRoaXMubnVtTGluZXMpIHtcbiAgICAgIHRocm93IEVycm9yKFwiTGVuZ3RoIG9mIGRhdGFQb2ludCBtdXN0IGVxdWFsIG51bWJlciBvZiBsaW5lc1wiKTtcbiAgICB9XG4gICAgZGF0YVBvaW50LmZvckVhY2goeSA9PiB7XG4gICAgICB0aGlzLm1pblkgPSBNYXRoLm1pbih0aGlzLm1pblksIHkpO1xuICAgICAgdGhpcy5tYXhZID0gTWF0aC5tYXgodGhpcy5tYXhZLCB5KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGF0YS5wdXNoKHt4OiB0aGlzLmRhdGEubGVuZ3RoICsgMSwgeTogZGF0YVBvaW50fSk7XG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVkcmF3KCkge1xuICAgIC8vIEFkanVzdCB0aGUgeCBhbmQgeSBkb21haW4uXG4gICAgdGhpcy54U2NhbGUuZG9tYWluKFsxLCB0aGlzLmRhdGEubGVuZ3RoXSk7XG4gICAgdGhpcy55U2NhbGUuZG9tYWluKFt0aGlzLm1pblksIHRoaXMubWF4WV0pO1xuICAgIC8vIEFkanVzdCBhbGwgdGhlIDxwYXRoPiBlbGVtZW50cyAobGluZXMpLlxuICAgIGxldCBnZXRQYXRoTWFwID0gKGxpbmVJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gZDMuc3ZnLmxpbmU8RGF0YVBvaW50PigpXG4gICAgICAueChkID0+IHRoaXMueFNjYWxlKGQueCkpXG4gICAgICAueShkID0+IHRoaXMueVNjYWxlKGQueVtsaW5lSW5kZXhdKSk7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtTGluZXM7IGkrKykge1xuICAgICAgdGhpcy5wYXRoc1tpXS5kYXR1bSh0aGlzLmRhdGEpLmF0dHIoXCJkXCIsIGdldFBhdGhNYXAoaSkpO1xuICAgIH1cbiAgfVxufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4vKipcbiAqIEEgbm9kZSBpbiBhIG5ldXJhbCBuZXR3b3JrLiBFYWNoIG5vZGUgaGFzIGEgc3RhdGVcbiAqICh0b3RhbCBpbnB1dCwgb3V0cHV0LCBhbmQgdGhlaXIgcmVzcGVjdGl2ZWx5IGRlcml2YXRpdmVzKSB3aGljaCBjaGFuZ2VzXG4gKiBhZnRlciBldmVyeSBmb3J3YXJkIGFuZCBiYWNrIHByb3BhZ2F0aW9uIHJ1bi5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGUge1xuICBpZDogc3RyaW5nO1xuICAvKiogTGlzdCBvZiBpbnB1dCBsaW5rcy4gKi9cbiAgaW5wdXRMaW5rczogTGlua1tdID0gW107XG4gIGJpYXMgPSAwLjE7XG4gIC8qKiBMaXN0IG9mIG91dHB1dCBsaW5rcy4gKi9cbiAgb3V0cHV0czogTGlua1tdID0gW107XG4gIHRvdGFsSW5wdXQ6IG51bWJlcjtcbiAgb3V0cHV0OiBudW1iZXI7XG4gIC8qKiBFcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byB0aGlzIG5vZGUncyBvdXRwdXQuICovXG4gIG91dHB1dERlciA9IDA7XG4gIC8qKiBFcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byB0aGlzIG5vZGUncyB0b3RhbCBpbnB1dC4gKi9cbiAgaW5wdXREZXIgPSAwO1xuICAvKipcbiAgICogQWNjdW11bGF0ZWQgZXJyb3IgZGVyaXZhdGl2ZSB3aXRoIHJlc3BlY3QgdG8gdGhpcyBub2RlJ3MgdG90YWwgaW5wdXQgc2luY2VcbiAgICogdGhlIGxhc3QgdXBkYXRlLiBUaGlzIGRlcml2YXRpdmUgZXF1YWxzIGRFL2RiIHdoZXJlIGIgaXMgdGhlIG5vZGUnc1xuICAgKiBiaWFzIHRlcm0uXG4gICAqL1xuICBhY2NJbnB1dERlciA9IDA7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgYWNjdW11bGF0ZWQgZXJyLiBkZXJpdmF0aXZlcyB3aXRoIHJlc3BlY3QgdG8gdGhlIHRvdGFsIGlucHV0XG4gICAqIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZS5cbiAgICovXG4gIG51bUFjY3VtdWxhdGVkRGVycyA9IDA7XG4gIC8qKiBBY3RpdmF0aW9uIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdG90YWwgaW5wdXQgYW5kIHJldHVybnMgbm9kZSdzIG91dHB1dCAqL1xuICBhY3RpdmF0aW9uOiBBY3RpdmF0aW9uRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgbm9kZSB3aXRoIHRoZSBwcm92aWRlZCBpZCBhbmQgYWN0aXZhdGlvbiBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbiwgaW5pdFplcm8/OiBib29sZWFuKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuYWN0aXZhdGlvbiA9IGFjdGl2YXRpb247XG4gICAgaWYgKGluaXRaZXJvKSB7XG4gICAgICB0aGlzLmJpYXMgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZWNvbXB1dGVzIHRoZSBub2RlJ3Mgb3V0cHV0IGFuZCByZXR1cm5zIGl0LiAqL1xuICB1cGRhdGVPdXRwdXQoKTogbnVtYmVyIHtcbiAgICAvLyBTdG9yZXMgdG90YWwgaW5wdXQgaW50byB0aGUgbm9kZS5cbiAgICB0aGlzLnRvdGFsSW5wdXQgPSB0aGlzLmJpYXM7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmlucHV0TGlua3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5rID0gdGhpcy5pbnB1dExpbmtzW2pdO1xuICAgICAgdGhpcy50b3RhbElucHV0ICs9IGxpbmsud2VpZ2h0ICogbGluay5zb3VyY2Uub3V0cHV0O1xuICAgIH1cbiAgICB0aGlzLm91dHB1dCA9IHRoaXMuYWN0aXZhdGlvbi5vdXRwdXQodGhpcy50b3RhbElucHV0KTtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlcnJvciBmdW5jdGlvbiBhbmQgaXRzIGRlcml2YXRpdmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JGdW5jdGlvbiB7XG4gIGVycm9yOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiBudW1iZXI7XG4gIGRlcjogKG91dHB1dDogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG4vKiogQSBub2RlJ3MgYWN0aXZhdGlvbiBmdW5jdGlvbiBhbmQgaXRzIGRlcml2YXRpdmUuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2YXRpb25GdW5jdGlvbiB7XG4gIG91dHB1dDogKGlucHV0OiBudW1iZXIpID0+IG51bWJlcjtcbiAgZGVyOiAoaW5wdXQ6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG4vKiogRnVuY3Rpb24gdGhhdCBjb21wdXRlcyBhIHBlbmFsdHkgY29zdCBmb3IgYSBnaXZlbiB3ZWlnaHQgaW4gdGhlIG5ldHdvcmsuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24ge1xuICBvdXRwdXQ6ICh3ZWlnaHQ6IG51bWJlcikgPT4gbnVtYmVyO1xuICBkZXI6ICh3ZWlnaHQ6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG4vKiogQnVpbHQtaW4gZXJyb3IgZnVuY3Rpb25zICovXG5leHBvcnQgY2xhc3MgRXJyb3JzIHtcbiAgcHVibGljIHN0YXRpYyBTUVVBUkU6IEVycm9yRnVuY3Rpb24gPSB7XG4gICAgZXJyb3I6IChvdXRwdXQ6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpID0+XG4gICAgICAgICAgICAgICAwLjUgKiBNYXRoLnBvdyhvdXRwdXQgLSB0YXJnZXQsIDIpLFxuICAgIGRlcjogKG91dHB1dDogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcikgPT4gb3V0cHV0IC0gdGFyZ2V0XG4gIH07XG59XG5cbi8qKiBQb2x5ZmlsbCBmb3IgVEFOSCAqL1xuKE1hdGggYXMgYW55KS50YW5oID0gKE1hdGggYXMgYW55KS50YW5oIHx8IGZ1bmN0aW9uKHgpIHtcbiAgaWYgKHggPT09IEluZmluaXR5KSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoeCA9PT0gLUluZmluaXR5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIGxldCBlMnggPSBNYXRoLmV4cCgyICogeCk7XG4gICAgcmV0dXJuIChlMnggLSAxKSAvIChlMnggKyAxKTtcbiAgfVxufTtcblxuLyoqIEJ1aWx0LWluIGFjdGl2YXRpb24gZnVuY3Rpb25zICovXG5leHBvcnQgY2xhc3MgQWN0aXZhdGlvbnMge1xuICBwdWJsaWMgc3RhdGljIFRBTkg6IEFjdGl2YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHggPT4gKE1hdGggYXMgYW55KS50YW5oKHgpLFxuICAgIGRlcjogeCA9PiB7XG4gICAgICBsZXQgb3V0cHV0ID0gQWN0aXZhdGlvbnMuVEFOSC5vdXRwdXQoeCk7XG4gICAgICByZXR1cm4gMSAtIG91dHB1dCAqIG91dHB1dDtcbiAgICB9XG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgUkVMVTogQWN0aXZhdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogeCA9PiBNYXRoLm1heCgwLCB4KSxcbiAgICBkZXI6IHggPT4geCA8PSAwID8gMCA6IDFcbiAgfTtcbiAgcHVibGljIHN0YXRpYyBTSUdNT0lEOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IDEgLyAoMSArIE1hdGguZXhwKC14KSksXG4gICAgZGVyOiB4ID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSBBY3RpdmF0aW9ucy5TSUdNT0lELm91dHB1dCh4KTtcbiAgICAgIHJldHVybiBvdXRwdXQgKiAoMSAtIG91dHB1dCk7XG4gICAgfVxuICB9O1xuICBwdWJsaWMgc3RhdGljIExJTkVBUjogQWN0aXZhdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogeCA9PiB4LFxuICAgIGRlcjogeCA9PiAxXG4gIH07XG59XG5cbi8qKiBCdWlsZC1pbiByZWd1bGFyaXphdGlvbiBmdW5jdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uIHtcbiAgcHVibGljIHN0YXRpYyBMMTogUmVndWxhcml6YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHcgPT4gTWF0aC5hYnModyksXG4gICAgZGVyOiB3ID0+IHcgPCAwID8gLTEgOiAodyA+IDAgPyAxIDogMClcbiAgfTtcbiAgcHVibGljIHN0YXRpYyBMMjogUmVndWxhcml6YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHcgPT4gMC41ICogdyAqIHcsXG4gICAgZGVyOiB3ID0+IHdcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGxpbmsgaW4gYSBuZXVyYWwgbmV0d29yay4gRWFjaCBsaW5rIGhhcyBhIHdlaWdodCBhbmQgYSBzb3VyY2UgYW5kXG4gKiBkZXN0aW5hdGlvbiBub2RlLiBBbHNvIGl0IGhhcyBhbiBpbnRlcm5hbCBzdGF0ZSAoZXJyb3IgZGVyaXZhdGl2ZVxuICogd2l0aCByZXNwZWN0IHRvIGEgcGFydGljdWxhciBpbnB1dCkgd2hpY2ggZ2V0cyB1cGRhdGVkIGFmdGVyXG4gKiBhIHJ1biBvZiBiYWNrIHByb3BhZ2F0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgTGluayB7XG4gIGlkOiBzdHJpbmc7XG4gIHNvdXJjZTogTm9kZTtcbiAgZGVzdDogTm9kZTtcbiAgd2VpZ2h0ID0gTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgaXNEZWFkID0gZmFsc2U7XG4gIC8qKiBFcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byB0aGlzIHdlaWdodC4gKi9cbiAgZXJyb3JEZXIgPSAwO1xuICAvKiogQWNjdW11bGF0ZWQgZXJyb3IgZGVyaXZhdGl2ZSBzaW5jZSB0aGUgbGFzdCB1cGRhdGUuICovXG4gIGFjY0Vycm9yRGVyID0gMDtcbiAgLyoqIE51bWJlciBvZiBhY2N1bXVsYXRlZCBkZXJpdmF0aXZlcyBzaW5jZSB0aGUgbGFzdCB1cGRhdGUuICovXG4gIG51bUFjY3VtdWxhdGVkRGVycyA9IDA7XG4gIHJlZ3VsYXJpemF0aW9uOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGEgbGluayBpbiB0aGUgbmV1cmFsIG5ldHdvcmsgaW5pdGlhbGl6ZWQgd2l0aCByYW5kb20gd2VpZ2h0LlxuICAgKlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugbm9kZS5cbiAgICogQHBhcmFtIGRlc3QgVGhlIGRlc3RpbmF0aW9uIG5vZGUuXG4gICAqIEBwYXJhbSByZWd1bGFyaXphdGlvbiBUaGUgcmVndWxhcml6YXRpb24gZnVuY3Rpb24gdGhhdCBjb21wdXRlcyB0aGVcbiAgICogICAgIHBlbmFsdHkgZm9yIHRoaXMgd2VpZ2h0LiBJZiBudWxsLCB0aGVyZSB3aWxsIGJlIG5vIHJlZ3VsYXJpemF0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc291cmNlOiBOb2RlLCBkZXN0OiBOb2RlLFxuICAgICAgcmVndWxhcml6YXRpb246IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24sIGluaXRaZXJvPzogYm9vbGVhbikge1xuICAgIHRoaXMuaWQgPSBzb3VyY2UuaWQgKyBcIi1cIiArIGRlc3QuaWQ7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5kZXN0ID0gZGVzdDtcbiAgICB0aGlzLnJlZ3VsYXJpemF0aW9uID0gcmVndWxhcml6YXRpb247XG4gICAgaWYgKGluaXRaZXJvKSB7XG4gICAgICB0aGlzLndlaWdodCA9IDA7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQnVpbGRzIGEgbmV1cmFsIG5ldHdvcmsuXG4gKlxuICogQHBhcmFtIG5ldHdvcmtTaGFwZSBUaGUgc2hhcGUgb2YgdGhlIG5ldHdvcmsuIEUuZy4gWzEsIDIsIDMsIDFdIG1lYW5zXG4gKiAgIHRoZSBuZXR3b3JrIHdpbGwgaGF2ZSBvbmUgaW5wdXQgbm9kZSwgMiBub2RlcyBpbiBmaXJzdCBoaWRkZW4gbGF5ZXIsXG4gKiAgIDMgbm9kZXMgaW4gc2Vjb25kIGhpZGRlbiBsYXllciBhbmQgMSBvdXRwdXQgbm9kZS5cbiAqIEBwYXJhbSBhY3RpdmF0aW9uIFRoZSBhY3RpdmF0aW9uIGZ1bmN0aW9uIG9mIGV2ZXJ5IGhpZGRlbiBub2RlLlxuICogQHBhcmFtIG91dHB1dEFjdGl2YXRpb24gVGhlIGFjdGl2YXRpb24gZnVuY3Rpb24gZm9yIHRoZSBvdXRwdXQgbm9kZXMuXG4gKiBAcGFyYW0gcmVndWxhcml6YXRpb24gVGhlIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgYSBwZW5hbHR5XG4gKiAgICAgZm9yIGEgZ2l2ZW4gd2VpZ2h0IChwYXJhbWV0ZXIpIGluIHRoZSBuZXR3b3JrLiBJZiBudWxsLCB0aGVyZSB3aWxsIGJlXG4gKiAgICAgbm8gcmVndWxhcml6YXRpb24uXG4gKiBAcGFyYW0gaW5wdXRJZHMgTGlzdCBvZiBpZHMgZm9yIHRoZSBpbnB1dCBub2Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmV0d29yayhcbiAgICBuZXR3b3JrU2hhcGU6IG51bWJlcltdLCBhY3RpdmF0aW9uOiBBY3RpdmF0aW9uRnVuY3Rpb24sXG4gICAgb3V0cHV0QWN0aXZhdGlvbjogQWN0aXZhdGlvbkZ1bmN0aW9uLFxuICAgIHJlZ3VsYXJpemF0aW9uOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uLFxuICAgIGlucHV0SWRzOiBzdHJpbmdbXSwgaW5pdFplcm8/OiBib29sZWFuKTogTm9kZVtdW10ge1xuICBsZXQgbnVtTGF5ZXJzID0gbmV0d29ya1NoYXBlLmxlbmd0aDtcbiAgbGV0IGlkID0gMTtcbiAgLyoqIExpc3Qgb2YgbGF5ZXJzLCB3aXRoIGVhY2ggbGF5ZXIgYmVpbmcgYSBsaXN0IG9mIG5vZGVzLiAqL1xuICBsZXQgbmV0d29yazogTm9kZVtdW10gPSBbXTtcbiAgZm9yIChsZXQgbGF5ZXJJZHggPSAwOyBsYXllcklkeCA8IG51bUxheWVyczsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBpc091dHB1dExheWVyID0gbGF5ZXJJZHggPT09IG51bUxheWVycyAtIDE7XG4gICAgbGV0IGlzSW5wdXRMYXllciA9IGxheWVySWR4ID09PSAwO1xuICAgIGxldCBjdXJyZW50TGF5ZXI6IE5vZGVbXSA9IFtdO1xuICAgIG5ldHdvcmsucHVzaChjdXJyZW50TGF5ZXIpO1xuICAgIGxldCBudW1Ob2RlcyA9IG5ldHdvcmtTaGFwZVtsYXllcklkeF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Ob2RlczsgaSsrKSB7XG4gICAgICBsZXQgbm9kZUlkID0gaWQudG9TdHJpbmcoKTtcbiAgICAgIGlmIChpc0lucHV0TGF5ZXIpIHtcbiAgICAgICAgbm9kZUlkID0gaW5wdXRJZHNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZCsrO1xuICAgICAgfVxuICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZShub2RlSWQsXG4gICAgICAgICAgaXNPdXRwdXRMYXllciA/IG91dHB1dEFjdGl2YXRpb24gOiBhY3RpdmF0aW9uLCBpbml0WmVybyk7XG4gICAgICBjdXJyZW50TGF5ZXIucHVzaChub2RlKTtcbiAgICAgIGlmIChsYXllcklkeCA+PSAxKSB7XG4gICAgICAgIC8vIEFkZCBsaW5rcyBmcm9tIG5vZGVzIGluIHRoZSBwcmV2aW91cyBsYXllciB0byB0aGlzIG5vZGUuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV0d29ya1tsYXllcklkeCAtIDFdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IHByZXZOb2RlID0gbmV0d29ya1tsYXllcklkeCAtIDFdW2pdO1xuICAgICAgICAgIGxldCBsaW5rID0gbmV3IExpbmsocHJldk5vZGUsIG5vZGUsIHJlZ3VsYXJpemF0aW9uLCBpbml0WmVybyk7XG4gICAgICAgICAgcHJldk5vZGUub3V0cHV0cy5wdXNoKGxpbmspO1xuICAgICAgICAgIG5vZGUuaW5wdXRMaW5rcy5wdXNoKGxpbmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXR3b3JrO1xufVxuXG4vKipcbiAqIFJ1bnMgYSBmb3J3YXJkIHByb3BhZ2F0aW9uIG9mIHRoZSBwcm92aWRlZCBpbnB1dCB0aHJvdWdoIHRoZSBwcm92aWRlZFxuICogbmV0d29yay4gVGhpcyBtZXRob2QgbW9kaWZpZXMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBuZXR3b3JrIC0gdGhlXG4gKiB0b3RhbCBpbnB1dCBhbmQgb3V0cHV0IG9mIGVhY2ggbm9kZSBpbiB0aGUgbmV0d29yay5cbiAqXG4gKiBAcGFyYW0gbmV0d29yayBUaGUgbmV1cmFsIG5ldHdvcmsuXG4gKiBAcGFyYW0gaW5wdXRzIFRoZSBpbnB1dCBhcnJheS4gSXRzIGxlbmd0aCBzaG91bGQgbWF0Y2ggdGhlIG51bWJlciBvZiBpbnB1dFxuICogICAgIG5vZGVzIGluIHRoZSBuZXR3b3JrLlxuICogQHJldHVybiBUaGUgZmluYWwgb3V0cHV0IG9mIHRoZSBuZXR3b3JrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZFByb3AobmV0d29yazogTm9kZVtdW10sIGlucHV0czogbnVtYmVyW10pOiBudW1iZXIge1xuICBsZXQgaW5wdXRMYXllciA9IG5ldHdvcmtbMF07XG4gIGlmIChpbnB1dHMubGVuZ3RoICE9PSBpbnB1dExheWVyLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBudW1iZXIgb2YgaW5wdXRzIG11c3QgbWF0Y2ggdGhlIG51bWJlciBvZiBub2RlcyBpblwiICtcbiAgICAgICAgXCIgdGhlIGlucHV0IGxheWVyXCIpO1xuICB9XG4gIC8vIFVwZGF0ZSB0aGUgaW5wdXQgbGF5ZXIuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRMYXllci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBub2RlID0gaW5wdXRMYXllcltpXTtcbiAgICBub2RlLm91dHB1dCA9IGlucHV0c1tpXTtcbiAgfVxuICBmb3IgKGxldCBsYXllcklkeCA9IDE7IGxheWVySWR4IDwgbmV0d29yay5sZW5ndGg7IGxheWVySWR4KyspIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgLy8gVXBkYXRlIGFsbCB0aGUgbm9kZXMgaW4gdGhpcyBsYXllci5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBub2RlLnVwZGF0ZU91dHB1dCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV0d29ya1tuZXR3b3JrLmxlbmd0aCAtIDFdWzBdLm91dHB1dDtcbn1cblxuLyoqXG4gKiBSdW5zIGEgYmFja3dhcmQgcHJvcGFnYXRpb24gdXNpbmcgdGhlIHByb3ZpZGVkIHRhcmdldCBhbmQgdGhlXG4gKiBjb21wdXRlZCBvdXRwdXQgb2YgdGhlIHByZXZpb3VzIGNhbGwgdG8gZm9yd2FyZCBwcm9wYWdhdGlvbi5cbiAqIFRoaXMgbWV0aG9kIG1vZGlmaWVzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgbmV0d29yayAtIHRoZSBlcnJvclxuICogZGVyaXZhdGl2ZXMgd2l0aCByZXNwZWN0IHRvIGVhY2ggbm9kZSwgYW5kIGVhY2ggd2VpZ2h0XG4gKiBpbiB0aGUgbmV0d29yay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhY2tQcm9wKG5ldHdvcms6IE5vZGVbXVtdLCB0YXJnZXQ6IG51bWJlcixcbiAgICBlcnJvckZ1bmM6IEVycm9yRnVuY3Rpb24pOiB2b2lkIHtcbiAgLy8gVGhlIG91dHB1dCBub2RlIGlzIGEgc3BlY2lhbCBjYXNlLiBXZSB1c2UgdGhlIHVzZXItZGVmaW5lZCBlcnJvclxuICAvLyBmdW5jdGlvbiBmb3IgdGhlIGRlcml2YXRpdmUuXG4gIGxldCBvdXRwdXROb2RlID0gbmV0d29ya1tuZXR3b3JrLmxlbmd0aCAtIDFdWzBdO1xuICBvdXRwdXROb2RlLm91dHB1dERlciA9IGVycm9yRnVuYy5kZXIob3V0cHV0Tm9kZS5vdXRwdXQsIHRhcmdldCk7XG5cbiAgLy8gR28gdGhyb3VnaCB0aGUgbGF5ZXJzIGJhY2t3YXJkcy5cbiAgZm9yIChsZXQgbGF5ZXJJZHggPSBuZXR3b3JrLmxlbmd0aCAtIDE7IGxheWVySWR4ID49IDE7IGxheWVySWR4LS0pIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgLy8gQ29tcHV0ZSB0aGUgZXJyb3IgZGVyaXZhdGl2ZSBvZiBlYWNoIG5vZGUgd2l0aCByZXNwZWN0IHRvOlxuICAgIC8vIDEpIGl0cyB0b3RhbCBpbnB1dFxuICAgIC8vIDIpIGVhY2ggb2YgaXRzIGlucHV0IHdlaWdodHMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgbm9kZS5pbnB1dERlciA9IG5vZGUub3V0cHV0RGVyICogbm9kZS5hY3RpdmF0aW9uLmRlcihub2RlLnRvdGFsSW5wdXQpO1xuICAgICAgbm9kZS5hY2NJbnB1dERlciArPSBub2RlLmlucHV0RGVyO1xuICAgICAgbm9kZS5udW1BY2N1bXVsYXRlZERlcnMrKztcbiAgICB9XG5cbiAgICAvLyBFcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byBlYWNoIHdlaWdodCBjb21pbmcgaW50byB0aGUgbm9kZS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgbGluayA9IG5vZGUuaW5wdXRMaW5rc1tqXTtcbiAgICAgICAgaWYgKGxpbmsuaXNEZWFkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluay5lcnJvckRlciA9IG5vZGUuaW5wdXREZXIgKiBsaW5rLnNvdXJjZS5vdXRwdXQ7XG4gICAgICAgIGxpbmsuYWNjRXJyb3JEZXIgKz0gbGluay5lcnJvckRlcjtcbiAgICAgICAgbGluay5udW1BY2N1bXVsYXRlZERlcnMrKztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxheWVySWR4ID09PSAxKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IHByZXZMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBwcmV2TGF5ZXJbaV07XG4gICAgICAvLyBDb21wdXRlIHRoZSBlcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byBlYWNoIG5vZGUncyBvdXRwdXQuXG4gICAgICBub2RlLm91dHB1dERlciA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUub3V0cHV0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgb3V0cHV0ID0gbm9kZS5vdXRwdXRzW2pdO1xuICAgICAgICBub2RlLm91dHB1dERlciArPSBvdXRwdXQud2VpZ2h0ICogb3V0cHV0LmRlc3QuaW5wdXREZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgd2VpZ2h0cyBvZiB0aGUgbmV0d29yayB1c2luZyB0aGUgcHJldmlvdXNseSBhY2N1bXVsYXRlZCBlcnJvclxuICogZGVyaXZhdGl2ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXZWlnaHRzKG5ldHdvcms6IE5vZGVbXVtdLCBsZWFybmluZ1JhdGU6IG51bWJlcixcbiAgICByZWd1bGFyaXphdGlvblJhdGU6IG51bWJlcikge1xuICBmb3IgKGxldCBsYXllcklkeCA9IDE7IGxheWVySWR4IDwgbmV0d29yay5sZW5ndGg7IGxheWVySWR4KyspIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gY3VycmVudExheWVyW2ldO1xuICAgICAgLy8gVXBkYXRlIHRoZSBub2RlJ3MgYmlhcy5cbiAgICAgIGlmIChub2RlLm51bUFjY3VtdWxhdGVkRGVycyA+IDApIHtcbiAgICAgICAgbm9kZS5iaWFzIC09IGxlYXJuaW5nUmF0ZSAqIG5vZGUuYWNjSW5wdXREZXIgLyBub2RlLm51bUFjY3VtdWxhdGVkRGVycztcbiAgICAgICAgbm9kZS5hY2NJbnB1dERlciA9IDA7XG4gICAgICAgIG5vZGUubnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSB0aGUgd2VpZ2h0cyBjb21pbmcgaW50byB0aGlzIG5vZGUuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgbGluayA9IG5vZGUuaW5wdXRMaW5rc1tqXTtcbiAgICAgICAgaWYgKGxpbmsuaXNEZWFkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZ3VsRGVyID0gbGluay5yZWd1bGFyaXphdGlvbiA/XG4gICAgICAgICAgICBsaW5rLnJlZ3VsYXJpemF0aW9uLmRlcihsaW5rLndlaWdodCkgOiAwO1xuICAgICAgICBpZiAobGluay5udW1BY2N1bXVsYXRlZERlcnMgPiAwKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSB3ZWlnaHQgYmFzZWQgb24gZEUvZHcuXG4gICAgICAgICAgbGluay53ZWlnaHQgPSBsaW5rLndlaWdodCAtXG4gICAgICAgICAgICAgIChsZWFybmluZ1JhdGUgLyBsaW5rLm51bUFjY3VtdWxhdGVkRGVycykgKiBsaW5rLmFjY0Vycm9yRGVyO1xuICAgICAgICAgIC8vIEZ1cnRoZXIgdXBkYXRlIHRoZSB3ZWlnaHQgYmFzZWQgb24gcmVndWxhcml6YXRpb24uXG4gICAgICAgICAgbGV0IG5ld0xpbmtXZWlnaHQgPSBsaW5rLndlaWdodCAtXG4gICAgICAgICAgICAgIChsZWFybmluZ1JhdGUgKiByZWd1bGFyaXphdGlvblJhdGUpICogcmVndWxEZXI7XG4gICAgICAgICAgaWYgKGxpbmsucmVndWxhcml6YXRpb24gPT09IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEgJiZcbiAgICAgICAgICAgICAgbGluay53ZWlnaHQgKiBuZXdMaW5rV2VpZ2h0IDwgMCkge1xuICAgICAgICAgICAgLy8gVGhlIHdlaWdodCBjcm9zc2VkIDAgZHVlIHRvIHRoZSByZWd1bGFyaXphdGlvbiB0ZXJtLiBTZXQgaXQgdG8gMC5cbiAgICAgICAgICAgIGxpbmsud2VpZ2h0ID0gMDtcbiAgICAgICAgICAgIGxpbmsuaXNEZWFkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluay53ZWlnaHQgPSBuZXdMaW5rV2VpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaW5rLmFjY0Vycm9yRGVyID0gMDtcbiAgICAgICAgICBsaW5rLm51bUFjY3VtdWxhdGVkRGVycyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqIEl0ZXJhdGVzIG92ZXIgZXZlcnkgbm9kZSBpbiB0aGUgbmV0d29yay8gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoTm9kZShuZXR3b3JrOiBOb2RlW11bXSwgaWdub3JlSW5wdXRzOiBib29sZWFuLFxuICAgIGFjY2Vzc29yOiAobm9kZTogTm9kZSkgPT4gYW55KSB7XG4gIGZvciAobGV0IGxheWVySWR4ID0gaWdub3JlSW5wdXRzID8gMSA6IDA7XG4gICAgICBsYXllcklkeCA8IG5ldHdvcmsubGVuZ3RoO1xuICAgICAgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBhY2Nlc3Nvcihub2RlKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFJldHVybnMgdGhlIG91dHB1dCBub2RlIGluIHRoZSBuZXR3b3JrLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE91dHB1dE5vZGUobmV0d29yazogTm9kZVtdW10pIHtcbiAgcmV0dXJuIG5ldHdvcmtbbmV0d29yay5sZW5ndGggLSAxXVswXTtcbn1cbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuaW1wb3J0ICogYXMgbm4gZnJvbSBcIi4vbm5cIjtcbmltcG9ydCB7SGVhdE1hcCwgcmVkdWNlTWF0cml4fSBmcm9tIFwiLi9oZWF0bWFwXCI7XG5pbXBvcnQge1xuICBTdGF0ZSxcbiAgZGF0YXNldHMsXG4gIHJlZ0RhdGFzZXRzLFxuICBhY3RpdmF0aW9ucyxcbiAgcHJvYmxlbXMsXG4gIHJlZ3VsYXJpemF0aW9ucyxcbiAgZ2V0S2V5RnJvbVZhbHVlLFxuICBQcm9ibGVtXG59IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQge0V4YW1wbGUyRCwgc2h1ZmZsZX0gZnJvbSBcIi4vZGF0YXNldFwiO1xuaW1wb3J0IHtBcHBlbmRpbmdMaW5lQ2hhcnR9IGZyb20gXCIuL2xpbmVjaGFydFwiO1xuXG5sZXQgbWFpbldpZHRoO1xuXG4vLyBNb3JlIHNjcm9sbGluZ1xubGV0IHN0YXRlID0gU3RhdGUuZGVzZXJpYWxpemVTdGF0ZSgpO1xubGV0IGdsb2JhbElzUGxheWluZyA9IGZhbHNlO1xuZDMuc2VsZWN0KFwiLm1vcmUgYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIGxldCBwb3NpdGlvbiA9IDgwMDtcbiAgZDMudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDEwMDApXG4gICAgLnR3ZWVuKFwic2Nyb2xsXCIsIHNjcm9sbFR3ZWVuKHBvc2l0aW9uKSk7XG59KTtcblxuZnVuY3Rpb24gc2Nyb2xsVHdlZW4ob2Zmc2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaSA9IGQzLmludGVycG9sYXRlTnVtYmVyKHdpbmRvdy5wYWdlWU9mZnNldCB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLCBvZmZzZXQpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7IHNjcm9sbFRvKDAsIGkodCkpOyB9O1xuICB9O1xufVxuXG5jb25zdCBSRUNUX1NJWkUgPSAzMDtcbmNvbnN0IEJJQVNfU0laRSA9IDU7XG5jb25zdCBOVU1fU0FNUExFU19DTEFTU0lGWSA9IDUwMDtcbmNvbnN0IE5VTV9TQU1QTEVTX1JFR1JFU1MgPSAxMjAwO1xuY29uc3QgREVOU0lUWSA9IDEwMDtcbnZhciBkamFuZ29EYXRhc2V0ID0gXCJmbV9zYW1wbGVfaW5kZXBlbmRlbnRcIjtcblxuZW51bSBIb3ZlclR5cGUge1xuICBCSUFTLCBXRUlHSFRcbn1cblxuaW50ZXJmYWNlIElucHV0RmVhdHVyZSB7XG4gIGY6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gbnVtYmVyO1xuICBsYWJlbD86IHN0cmluZztcbn1cblxubGV0IElOUFVUUzoge1tuYW1lOiBzdHJpbmddOiBJbnB1dEZlYXR1cmV9ID0ge1xuICBcIl81QVwiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIjVBXCJ9LFxuICBcIl81Q1wiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIjVDXCJ9LFxuICBcIl81R1wiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIjVHXCJ9LFxuICBcIl81VFwiOiB7ZjogKHgsIHkpID0+IHgsICBsYWJlbDogXCI1VFwifSxcbiAgXCJfM0FcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCIzQVwifSxcbiAgXCJfM0NcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCIzQ1wifSxcbiAgXCJfM0dcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCIzR1wifSxcbiAgXCJfM1RcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCIzVFwifSxcbiAgXCJfQ0FcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCJDPkFcIn0sXG4gIFwiX0NHXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiQz5HXCJ9LFxuICBcIl9DVFwiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIkM+VFwifSxcbiAgXCJfVEFcIjoge2Y6ICh4LCB5KSA9PiB5LCBsYWJlbDogXCJUPkFcIn0sXG4gIFwiX1RDXCI6IHtmOiAoeCwgeSkgPT4geSwgbGFiZWw6IFwiVD5DXCJ9LFxuICBcIl9UR1wiOiB7ZjogKHgsIHkpID0+IHksIGxhYmVsOiBcIlQ+R1wifSxcbn07XG5cbmxldCBISURBQkxFX0NPTlRST0xTID0gW1xuICBbXCJTaG93IHRlc3QgZGF0YVwiLCBcInNob3dUZXN0RGF0YVwiXSxcbiAgW1wiRGlzY3JldGl6ZSBvdXRwdXRcIiwgXCJkaXNjcmV0aXplXCJdLFxuICBbXCJQbGF5IGJ1dHRvblwiLCBcInBsYXlCdXR0b25cIl0sXG4gIFtcIlN0ZXAgYnV0dG9uXCIsIFwic3RlcEJ1dHRvblwiXSxcbiAgW1wiUmVzZXQgYnV0dG9uXCIsIFwicmVzZXRCdXR0b25cIl0sXG4gIFtcIkxlYXJuaW5nIHJhdGVcIiwgXCJsZWFybmluZ1JhdGVcIl0sXG4gIFtcIkFjdGl2YXRpb25cIiwgXCJhY3RpdmF0aW9uXCJdLFxuICBbXCJSZWd1bGFyaXphdGlvblwiLCBcInJlZ3VsYXJpemF0aW9uXCJdLFxuICBbXCJSZWd1bGFyaXphdGlvbiByYXRlXCIsIFwicmVndWxhcml6YXRpb25SYXRlXCJdLFxuICBbXCJQcm9ibGVtIHR5cGVcIiwgXCJwcm9ibGVtXCJdLFxuICBbXCJXaGljaCBkYXRhc2V0XCIsIFwiZGF0YXNldFwiXSxcbiAgW1wiUmF0aW8gdHJhaW4gZGF0YVwiLCBcInBlcmNUcmFpbkRhdGFcIl0sXG4gIFtcIk5vaXNlIGxldmVsXCIsIFwibm9pc2VcIl0sXG4gIFtcIkJhdGNoIHNpemVcIiwgXCJiYXRjaFNpemVcIl0sXG4gIFtcIiMgb2YgaGlkZGVuIGxheWVyc1wiLCBcIm51bUhpZGRlbkxheWVyc1wiXSxcbl07XG5cbmNsYXNzIFBsYXllciB7XG4gIHByaXZhdGUgdGltZXJJbmRleCA9IDA7XG4gIHByaXZhdGUgaXNQbGF5aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgY2FsbGJhY2s6IChpc1BsYXlpbmc6IGJvb2xlYW4pID0+IHZvaWQgPSBudWxsO1xuXG4gIC8qKiBQbGF5cy9wYXVzZXMgdGhlIHBsYXllci4gKi9cbiAgcGxheU9yUGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgICBpZiAoaXRlciA9PT0gMCkge1xuICAgICAgICBzaW11bGF0aW9uU3RhcnRlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgb25QbGF5UGF1c2UoY2FsbGJhY2s6IChpc1BsYXlpbmc6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMucGF1c2UoKTtcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgc3RhdGUuaXNQbGF5aW5nID0gdGhpcy5pc1BsYXlpbmdcblxuICAgIHZhciBkYXRhID0gXCJkaXNjcmV0aXplPVwiK3N0YXRlLmRpc2NyZXRpemUrXCImcGxheT1UcnVlJnNob3dUZXN0RGF0YT1cIitzdGF0ZS5zaG93VGVzdERhdGE7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIFxuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICBmdW5jdGlvbiAoKSB7XG5cblxuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuIFxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3J1bi9cIik7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmlzUGxheWluZyk7XG4gICAgfVxuICAgIHRoaXMuc3RhcnQodGhpcy50aW1lckluZGV4KTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHRoaXMudGltZXJJbmRleCsrO1xuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgc3RhdGUuaXNQbGF5aW5nID0gdGhpcy5pc1BsYXlpbmdcblxuICAgIC8vIHNlbnQgcG9zdCByZXF1ZXN0XG4gICAgdmFyIGRhdGEgPSBcImRpc2NyZXRpemU9XCIrc3RhdGUuZGlzY3JldGl6ZStcIiZwbGF5PUZhbHNlJnNob3dUZXN0RGF0YT1cIitzdGF0ZS5zaG93VGVzdERhdGE7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXHQgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNClcblx0ICB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgfTtcblxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvcnVuL1wiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICArXCImbnVtSGlkZGVuTGF5ZXJzPVwiK3N0YXRlLm51bUhpZGRlbkxheWVycytcIiZuZXR3b3JrU2hhcGU9XCIrc3RhdGUubmV0d29ya1NoYXBlO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgICAgICB2YXIgc3RyO1xuICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG51bGwpXG4gICB7XG4gICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgfVxuICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEpXG4gICB7XG4gICAgICAgc3RyID0gXCJMMVwiO1xuICAgfVxuICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICB7XG4gICAgICAgc3RyID0gXCJMMlwiO1xuICAgfVxuXG5cblxuICAgdmFyIHN0cjI7XG4gICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5SRUxVKVxuICAge1xuICAgICAgIHN0cjIgPSBcIlJFTFVcIjsgICAgXG4gICB9XG4gICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAge1xuICAgICAgIHN0cjIgPSBcIlRBTkhcIjtcbiAgIH1cbiAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlNJR01PSUQpXG4gICB7XG4gICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgfVxuXG4gICAgICAgdmFyIGRhdGEgPSBcImxlYXJuaW5nUmF0ZT1cIitzdGF0ZS5sZWFybmluZ1JhdGUrXCImYWN0aXZhdGlvbj1cIitzdHIyK1wiJnJlZ3VsYXJpemF0aW9uPVwiK3N0citcIiZyZWd1bGFyaXphdGlvblJhdGU9XCIrc3RhdGUucmVndWxhcml6YXRpb25SYXRlK1wiJnByb2JsZW1UeXBlPVwiK3N0YXRlLnByb2JsZW07XG4gICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9hcmd1bWVudHMvXCIpO1xuICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgICAgICB2YXIgZGF0YSA9IFwiZGF0YXNldD1cIitkamFuZ29EYXRhc2V0K1wiJndlaWdodHM9XCIrc3RhdGUud2VpZ2h0cytcIiZiaWFzZXM9XCIrc3RhdGUuYmlhc2VzO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zZXR0aW5ncy9cIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgICAgXG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmlzUGxheWluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydChsb2NhbFRpbWVySW5kZXg6IG51bWJlcikge1xuICAgIGQzLnRpbWVyKCgpID0+IHtcbiAgICAgIGlmIChsb2NhbFRpbWVySW5kZXggPCB0aGlzLnRpbWVySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7ICAvLyBEb25lLlxuICAgICAgfVxuICAgICAgb25lU3RlcCgpO1xuICAgICAgcmV0dXJuIGZhbHNlOyAgLy8gTm90IGRvbmUuXG4gICAgfSwgMCk7XG4gIH1cbn1cblxuLy9sZXQgc3RhdGUgPSBTdGF0ZS5kZXNlcmlhbGl6ZVN0YXRlKCk7XG5cbi8vIEZpbHRlciBvdXQgaW5wdXRzIHRoYXQgYXJlIGhpZGRlbi5cbnN0YXRlLmdldEhpZGRlblByb3BzKCkuZm9yRWFjaChwcm9wID0+IHtcbiAgaWYgKHByb3AgaW4gSU5QVVRTKSB7XG4gICAgZGVsZXRlIElOUFVUU1twcm9wXTtcbiAgfVxufSk7XG5cbmxldCBib3VuZGFyeToge1tpZDogc3RyaW5nXTogbnVtYmVyW11bXX0gPSB7fTtcbmxldCBzZWxlY3RlZE5vZGVJZDogc3RyaW5nID0gbnVsbDtcbi8vIFBsb3QgdGhlIGhlYXRtYXAuXG5sZXQgeERvbWFpbjogW251bWJlciwgbnVtYmVyXSA9IFstODAwLCA0MDBdO1xubGV0IHlEb21haW46IFtudW1iZXIsIG51bWJlcl0gPSBbLTUwMCwgNTAwXTtcbmxldCBoZWF0TWFwID1cbiAgICBuZXcgSGVhdE1hcCgzMDAsIERFTlNJVFksIHhEb21haW4sIHlEb21haW4sIGQzLnNlbGVjdChcIiNoZWF0bWFwXCIpLFxuICAgICAgICB7c2hvd0F4ZXM6IHRydWV9KTtcbmxldCBsaW5rV2lkdGhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gIC5kb21haW4oWzAsIDUwMF0pXG4gIC5yYW5nZShbMSwgMTAwXSlcbiAgLmNsYW1wKHRydWUpO1xubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZS5saW5lYXI8c3RyaW5nPigpXG4gICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFstMSwgMCwgMV0pXG4gICAgICAgICAgICAgICAgICAgICAucmFuZ2UoW1wiI2Y1OTMyMlwiLCBcIiNlOGVhZWJcIiwgXCIjMDg3N2JkXCJdKVxuICAgICAgICAgICAgICAgICAgICAgLmNsYW1wKHRydWUpO1xubGV0IGl0ZXIgPSAwO1xubGV0IHRyYWluRGF0YTogRXhhbXBsZTJEW10gPSBbXTtcbmxldCB0ZXN0RGF0YTogRXhhbXBsZTJEW10gPSBbXTtcbmxldCBuZXR3b3JrOiBubi5Ob2RlW11bXSA9IG51bGw7XG5sZXQgbG9zc1RyYWluID0gMDtcbmxldCBsb3NzVGVzdCA9IDA7XG5sZXQgcGxheWVyID0gbmV3IFBsYXllcigpO1xubGV0IGxpbmVDaGFydCA9IG5ldyBBcHBlbmRpbmdMaW5lQ2hhcnQoZDMuc2VsZWN0KFwiI2xpbmVjaGFydFwiKSxcbiAgICBbXCIjNzc3XCIsIFwiYmxhY2tcIl0pO1xuXG5mdW5jdGlvbiBtYWtlR1VJKCkge1xuICBkMy5zZWxlY3QoXCIjcmVzZXQtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0KCk7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBkMy5zZWxlY3QoXCIjcGxheS1wYXVzZS1idXR0b25cIik7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNwbGF5LXBhdXNlLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDaGFuZ2UgdGhlIGJ1dHRvbidzIGNvbnRlbnQuXG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBwbGF5ZXIucGxheU9yUGF1c2UoKTtcbiAgfSk7XG5cbiAgcGxheWVyLm9uUGxheVBhdXNlKGlzUGxheWluZyA9PiB7XG4gICAgZDMuc2VsZWN0KFwiI3BsYXktcGF1c2UtYnV0dG9uXCIpLmNsYXNzZWQoXCJwbGF5aW5nXCIsIGlzUGxheWluZyk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNuZXh0LXN0ZXAtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllci5wYXVzZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgaWYgKGl0ZXIgPT09IDApIHtcbiAgICAgIHNpbXVsYXRpb25TdGFydGVkKCk7XG4gICAgfVxuICAgIG9uZVN0ZXAoKTtcbiAgfSk7XG5cbiAgZDMuc2VsZWN0KFwiI2RhdGEtcmVnZW4tYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdlbmVyYXRlRGF0YSgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgfSk7XG5cbiAgbGV0IGRhdGFUaHVtYm5haWxzID0gZDMuc2VsZWN0QWxsKFwiY2FudmFzW2RhdGEtZGF0YXNldF1cIik7XG4gIGRhdGFUaHVtYm5haWxzLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5ld0RhdGFzZXQgPSBkYXRhc2V0c1t0aGlzLmRhdGFzZXQuZGF0YXNldF07XG4gICAgaWYgKG5ld0RhdGFzZXQgPT09IHN0YXRlLmRhdGFzZXQpIHtcbiAgICAgIHJldHVybjsgLy8gTm8tb3AuXG4gICAgfVxuXG4gICAgc3RhdGUuZGF0YXNldCA9ICBuZXdEYXRhc2V0O1xuICAgIGRqYW5nb0RhdGFzZXQgPSB0aGlzLmRhdGFzZXQuZGF0YXNldDtcbiAgICB2YXIgZGF0YSA9IFwiZGF0YXNldD1cIit0aGlzLmRhdGFzZXQuZGF0YXNldCtcIiZ3ZWlnaHRzPVwiK3N0YXRlLndlaWdodHMrXCImYmlhc2VzPVwiK3N0YXRlLmJpYXNlcztcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3NldHRpbmdzL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgIGRhdGFUaHVtYm5haWxzLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgbGV0IGRhdGFzZXRLZXkgPSBnZXRLZXlGcm9tVmFsdWUoZGF0YXNldHMsIHN0YXRlLmRhdGFzZXQpO1xuICAvLyBTZWxlY3QgdGhlIGRhdGFzZXQgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkMy5zZWxlY3QoYGNhbnZhc1tkYXRhLWRhdGFzZXQ9JHtkYXRhc2V0S2V5fV1gKVxuICAgIC5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG5cbiAgbGV0IHJlZ0RhdGFUaHVtYm5haWxzID0gZDMuc2VsZWN0QWxsKFwiY2FudmFzW2RhdGEtcmVnRGF0YXNldF1cIik7XG4gIHJlZ0RhdGFUaHVtYm5haWxzLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5ld0RhdGFzZXQgPSByZWdEYXRhc2V0c1t0aGlzLmRhdGFzZXQucmVnZGF0YXNldF07XG4gICAgaWYgKG5ld0RhdGFzZXQgPT09IHN0YXRlLnJlZ0RhdGFzZXQpIHtcbiAgICAgIHJldHVybjsgLy8gTm8tb3AuXG4gICAgfVxuICAgIHN0YXRlLnJlZ0RhdGFzZXQgPSAgbmV3RGF0YXNldDtcbiAgICBkamFuZ29EYXRhc2V0ID0gdGhpcy5kYXRhc2V0LnJlZ2RhdGFzZXQ7XG4gICAgdmFyIGRhdGEgPSBcImRhdGFzZXQ9XCIrdGhpcy5kYXRhc2V0LnJlZ2RhdGFzZXQrXCImd2VpZ2h0cz1cIitzdGF0ZS53ZWlnaHRzK1wiJmJpYXNlcz1cIitzdGF0ZS5iaWFzZXM7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zZXR0aW5ncy9cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICByZWdEYXRhVGh1bWJuYWlscy5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGxldCByZWdEYXRhc2V0S2V5ID0gZ2V0S2V5RnJvbVZhbHVlKHJlZ0RhdGFzZXRzLCBzdGF0ZS5yZWdEYXRhc2V0KTtcbiAgLy8gU2VsZWN0IHRoZSBkYXRhc2V0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgZDMuc2VsZWN0KGBjYW52YXNbZGF0YS1yZWdEYXRhc2V0PSR7cmVnRGF0YXNldEtleX1dYClcbiAgICAuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpO1xuXG4gIGQzLnNlbGVjdChcIiNhZGQtbGF5ZXJzXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5udW1IaWRkZW5MYXllcnMgPj0gMTApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdGUubmV0d29ya1NoYXBlW3N0YXRlLm51bUhpZGRlbkxheWVyc10gPSAyO1xuICAgIHN0YXRlLm51bUhpZGRlbkxheWVycysrO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgZDMuc2VsZWN0KFwiI3JlbW92ZS1sYXllcnNcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLm51bUhpZGRlbkxheWVycyA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLm51bUhpZGRlbkxheWVycy0tO1xuICAgIHN0YXRlLm5ldHdvcmtTaGFwZS5zcGxpY2Uoc3RhdGUubnVtSGlkZGVuTGF5ZXJzKTtcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgbGV0IHNob3dUZXN0RGF0YSA9IGQzLnNlbGVjdChcIiNzaG93LXRlc3QtZGF0YVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5zaG93VGVzdERhdGEgPSB0aGlzLmNoZWNrZWQ7XG5cbiAgICB2YXIgZGF0YSA9IFwiZGlzY3JldGl6ZT1cIitzdGF0ZS5kaXNjcmV0aXplK1wiJnBsYXk9XCIrc3RhdGUuaXNQbGF5aW5nK1wiJnNob3dUZXN0RGF0YT1cIitzdGF0ZS5zaG93VGVzdERhdGE7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3J1bi9cIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICAgIGhlYXRNYXAudXBkYXRlVGVzdFBvaW50cyhzdGF0ZS5zaG93VGVzdERhdGEgPyB0ZXN0RGF0YSA6IFtdKTtcbiAgfSk7XG4gIC8vIENoZWNrL3VuY2hlY2sgdGhlIGNoZWNrYm94IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgc2hvd1Rlc3REYXRhLnByb3BlcnR5KFwiY2hlY2tlZFwiLCBzdGF0ZS5zaG93VGVzdERhdGEpO1xuXG4gIGxldCBkaXNjcmV0aXplID0gZDMuc2VsZWN0KFwiI2Rpc2NyZXRpemVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUuZGlzY3JldGl6ZSA9IHRoaXMuY2hlY2tlZDtcblxuICAgIHZhciBkYXRhID0gXCJkaXNjcmV0aXplPVwiK3N0YXRlLmRpc2NyZXRpemUrXCImcGxheT1cIitzdGF0ZS5pc1BsYXlpbmcrXCImc2hvd1Rlc3REYXRhPVwiK3N0YXRlLnNob3dUZXN0RGF0YTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9ydW4vXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgdXBkYXRlVUkoKTtcbiAgfSk7XG4gIC8vIENoZWNrL3VuY2hlY2sgdGhlIGNoZWNib3ggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkaXNjcmV0aXplLnByb3BlcnR5KFwiY2hlY2tlZFwiLCBzdGF0ZS5kaXNjcmV0aXplKTtcblxuICBsZXQgcGVyY1RyYWluID0gZDMuc2VsZWN0KFwiI3BlcmNUcmFpbkRhdGFcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5wZXJjVHJhaW5EYXRhID0gdGhpcy52YWx1ZTtcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdwZXJjVHJhaW5EYXRhJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBwZXJjVHJhaW4ucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5wZXJjVHJhaW5EYXRhKTtcbiAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdwZXJjVHJhaW5EYXRhJ10gLnZhbHVlXCIpLnRleHQoc3RhdGUucGVyY1RyYWluRGF0YSk7XG5cbiAgbGV0IG5vaXNlID0gZDMuc2VsZWN0KFwiI25vaXNlXCIpLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUubm9pc2UgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J25vaXNlJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBsZXQgY3VycmVudE1heCA9IHBhcnNlSW50KG5vaXNlLnByb3BlcnR5KFwibWF4XCIpKTtcbiAgaWYgKHN0YXRlLm5vaXNlID4gY3VycmVudE1heCkge1xuICAgIGlmIChzdGF0ZS5ub2lzZSA8PSA4MCkge1xuICAgICAgbm9pc2UucHJvcGVydHkoXCJtYXhcIiwgc3RhdGUubm9pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5ub2lzZSA9IDUwO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0ZS5ub2lzZSA8IDApIHtcbiAgICBzdGF0ZS5ub2lzZSA9IDA7XG4gIH1cbiAgbm9pc2UucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5ub2lzZSk7XG4gIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0nbm9pc2UnXSAudmFsdWVcIikudGV4dChzdGF0ZS5ub2lzZSk7XG5cbiAgbGV0IGJhdGNoU2l6ZSA9IGQzLnNlbGVjdChcIiNiYXRjaFNpemVcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5iYXRjaFNpemUgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG5cbiAgICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J2JhdGNoU2l6ZSddIC52YWx1ZVwiKS50ZXh0KHRoaXMudmFsdWUpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgYmF0Y2hTaXplLnByb3BlcnR5KFwidmFsdWVcIiwgc3RhdGUuYmF0Y2hTaXplKTtcbiAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdiYXRjaFNpemUnXSAudmFsdWVcIikudGV4dChzdGF0ZS5iYXRjaFNpemUpO1xuXG4gIGxldCBhY3RpdmF0aW9uRHJvcGRvd24gPSBkMy5zZWxlY3QoXCIjYWN0aXZhdGlvbnNcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUuYWN0aXZhdGlvbiA9IGFjdGl2YXRpb25zW3RoaXMudmFsdWVdO1xuXG4gICAgdmFyIHN0cjtcbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHN0ciA9IFwibm9uZVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwxXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMlwiO1xuICAgIH1cblxuXG5cbiAgICB2YXIgc3RyMjtcbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5SRUxVKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiUkVMVVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuVEFOSClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlRBTkhcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuU0lHTU9JRClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlNJR01PSURcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0cjIrXCImcmVndWxhcml6YXRpb249XCIrc3RyK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcblxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIGFjdGl2YXRpb25Ecm9wZG93bi5wcm9wZXJ0eShcInZhbHVlXCIsXG4gICAgICBnZXRLZXlGcm9tVmFsdWUoYWN0aXZhdGlvbnMsIHN0YXRlLmFjdGl2YXRpb24pKTtcblxuICBsZXQgbGVhcm5pbmdSYXRlID0gZDMuc2VsZWN0KFwiI2xlYXJuaW5nUmF0ZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5sZWFybmluZ1JhdGUgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIHN0cjtcbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHN0ciA9IFwibm9uZVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwxXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMlwiO1xuICAgIH1cblxuXG5cbiAgICB2YXIgc3RyMjtcbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5SRUxVKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiUkVMVVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuVEFOSClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlRBTkhcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuU0lHTU9JRClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlNJR01PSURcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0cjIrXCImcmVndWxhcml6YXRpb249XCIrc3RyK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcblxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgfSk7XG4gIGxlYXJuaW5nUmF0ZS5wcm9wZXJ0eShcInZhbHVlXCIsIHN0YXRlLmxlYXJuaW5nUmF0ZSk7XG5cbiAgbGV0IHJlZ3VsYXJEcm9wZG93biA9IGQzLnNlbGVjdChcIiNyZWd1bGFyaXphdGlvbnNcIikub24oXCJjaGFuZ2VcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLnJlZ3VsYXJpemF0aW9uID0gcmVndWxhcml6YXRpb25zW3RoaXMudmFsdWVdO1xuXG4gICAgdmFyIHN0cjtcbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHN0ciA9IFwibm9uZVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwxXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMlwiO1xuICAgIH1cblxuXG5cbiAgICB2YXIgc3RyMjtcbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5SRUxVKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiUkVMVVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuVEFOSClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlRBTkhcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuU0lHTU9JRClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlNJR01PSURcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0cjIrXCImcmVndWxhcml6YXRpb249XCIrc3RyK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9hcmd1bWVudHMvXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgcmVndWxhckRyb3Bkb3duLnByb3BlcnR5KFwidmFsdWVcIixcbiAgICAgIGdldEtleUZyb21WYWx1ZShyZWd1bGFyaXphdGlvbnMsIHN0YXRlLnJlZ3VsYXJpemF0aW9uKSk7XG5cbiAgbGV0IHJlZ3VsYXJSYXRlID0gZDMuc2VsZWN0KFwiI3JlZ3VsYXJSYXRlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZSA9IHRoaXMudmFsdWU7XG5cbiAgICB2YXIgc3RyO1xuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwyXCI7XG4gICAgfVxuXG5cblxuICAgIHZhciBzdHIyO1xuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuXG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL2FyZ3VtZW50cy9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICByZWd1bGFyUmF0ZS5wcm9wZXJ0eShcInZhbHVlXCIsIHN0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZSk7XG5cbiAgbGV0IHByb2JsZW0gPSBkMy5zZWxlY3QoXCIjcHJvYmxlbVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5wcm9ibGVtID0gcHJvYmxlbXNbdGhpcy52YWx1ZV07XG5cbiAgICB2YXIgc3RyO1xuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwyXCI7XG4gICAgfVxuXG5cblxuICAgIHZhciBzdHIyO1xuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuXG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL2FyZ3VtZW50cy9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgZHJhd0RhdGFzZXRUaHVtYm5haWxzKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBwcm9ibGVtLnByb3BlcnR5KFwidmFsdWVcIiwgZ2V0S2V5RnJvbVZhbHVlKHByb2JsZW1zLCBzdGF0ZS5wcm9ibGVtKSk7XG5cbiAgLy8gQWRkIHNjYWxlIHRvIHRoZSBncmFkaWVudCBjb2xvciBtYXAuXG4gIGxldCB4ID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFstMSwgMV0pLnJhbmdlKFswLCAxNDRdKTtcbiAgbGV0IHhBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgIC5zY2FsZSh4KVxuICAgIC5vcmllbnQoXCJib3R0b21cIilcbiAgICAudGlja1ZhbHVlcyhbLTEsIDAsIDFdKVxuICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcImRcIikpO1xuICBkMy5zZWxlY3QoXCIjY29sb3JtYXAgZy5jb3JlXCIpLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwxMClcIilcbiAgICAuY2FsbCh4QXhpcyk7XG5cbiAgLy8gTGlzdGVuIGZvciBjc3MtcmVzcG9uc2l2ZSBjaGFuZ2VzIGFuZCByZWRyYXcgdGhlIHN2ZyBuZXR3b3JrLlxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBsZXQgbmV3V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tcGFydFwiKVxuICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKG5ld1dpZHRoICE9PSBtYWluV2lkdGgpIHtcbiAgICAgIG1haW5XaWR0aCA9IG5ld1dpZHRoO1xuICAgICAgZHJhd05ldHdvcmsobmV0d29yayk7XG4gICAgICB1cGRhdGVVSSh0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEhpZGUgdGhlIHRleHQgYmVsb3cgdGhlIHZpc3VhbGl6YXRpb24gZGVwZW5kaW5nIG9uIHRoZSBVUkwuXG4gIGlmIChzdGF0ZS5oaWRlVGV4dCkge1xuICAgIGQzLnNlbGVjdChcIiNhcnRpY2xlLXRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICBkMy5zZWxlY3QoXCJkaXYubW9yZVwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcImhlYWRlclwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJpYXNlc1VJKG5ldHdvcms6IG5uLk5vZGVbXVtdKSB7XG4gIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgIGQzLnNlbGVjdChgcmVjdCNiaWFzLSR7bm9kZS5pZH1gKS5zdHlsZShcImZpbGxcIiwgY29sb3JTY2FsZShub2RlLmJpYXMpKTtcbiAgfSk7XG5cbiAgIHN0YXRlLmJpYXNlcyA9IHRydWU7XG4gIHZhciBkYXRhID0gXCJkYXRhc2V0PVwiK2RqYW5nb0RhdGFzZXQrXCImd2VpZ2h0cz1cIitzdGF0ZS53ZWlnaHRzK1wiJmJpYXNlcz1cIitzdGF0ZS5iaWFzZXM7XG4gICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc2V0dGluZ3MvXCIpO1xuICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgIHhoci5zZW5kKGRhdGEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXZWlnaHRzVUkobmV0d29yazogbm4uTm9kZVtdW10sIGNvbnRhaW5lcjogZDMuU2VsZWN0aW9uPGFueT4pIHtcblxuXG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBVcGRhdGUgYWxsIHRoZSBub2RlcyBpbiB0aGlzIGxheWVyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBjb250YWluZXIuc2VsZWN0KGAjbGluayR7bGluay5zb3VyY2UuaWR9LSR7bGluay5kZXN0LmlkfWApXG4gICAgICAgICAgICAuc3R5bGUoe1xuICAgICAgICAgICAgICBcInN0cm9rZS1kYXNob2Zmc2V0XCI6IC1pdGVyIC8gMyxcbiAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogbGlua1dpZHRoU2NhbGUoTWF0aC5hYnMobGluay53ZWlnaHQpKSxcbiAgICAgICAgICAgICAgXCJzdHJva2VcIjogY29sb3JTY2FsZShsaW5rLndlaWdodClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGF0dW0obGluayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbnN0YXRlLndlaWdodHMgPSB0cnVlO1xuICB2YXIgZGF0YSA9IFwiZGF0YXNldD1cIitkamFuZ29EYXRhc2V0K1wiJndlaWdodHM9XCIrc3RhdGUud2VpZ2h0cytcIiZiaWFzZXM9XCIrc3RhdGUuYmlhc2VzO1xuICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3NldHRpbmdzL1wiKTtcbiAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuXG4gICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICB4aHIuc2VuZChkYXRhKTtcbn1cblxuZnVuY3Rpb24gZHJhd05vZGUoY3g6IG51bWJlciwgY3k6IG51bWJlciwgbm9kZUlkOiBzdHJpbmcsIGlzSW5wdXQ6IGJvb2xlYW4sXG4gICAgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55Piwgbm9kZT86IG5uLk5vZGUpIHtcbiAgbGV0IHggPSBjeCAtIFJFQ1RfU0laRSAvIDI7XG4gIGxldCB5ID0gY3kgLSBSRUNUX1NJWkUgLyAyO1xuXG4gIGxldCBub2RlR3JvdXAgPSBjb250YWluZXIuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKHtcbiAgICAgIFwiY2xhc3NcIjogXCJub2RlXCIsXG4gICAgICBcImlkXCI6IGBub2RlJHtub2RlSWR9YCxcbiAgICAgIFwidHJhbnNmb3JtXCI6IGB0cmFuc2xhdGUoJHt4fSwke3l9KWBcbiAgICB9KTtcblxuICAvLyBEcmF3IHRoZSBtYWluIHJlY3RhbmdsZS5cbiAgbm9kZUdyb3VwLmFwcGVuZChcInJlY3RcIilcbiAgICAuYXR0cih7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHdpZHRoOiBSRUNUX1NJWkUsXG4gICAgICBoZWlnaHQ6IFJFQ1RfU0laRSxcbiAgICB9KTtcbiAgbGV0IGFjdGl2ZU9yTm90Q2xhc3MgPSBzdGF0ZVtub2RlSWRdID8gXCJhY3RpdmVcIiA6IFwiaW5hY3RpdmVcIjtcbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBsZXQgbGFiZWwgPSBJTlBVVFNbbm9kZUlkXS5sYWJlbCAhPSBudWxsID9cbiAgICAgICAgSU5QVVRTW25vZGVJZF0ubGFiZWwgOiBub2RlSWQ7XG4gICAgLy8gRHJhdyB0aGUgaW5wdXQgbGFiZWwuXG4gICAgbGV0IHRleHQgPSBub2RlR3JvdXAuYXBwZW5kKFwidGV4dFwiKS5hdHRyKHtcbiAgICAgIGNsYXNzOiBcIm1haW4tbGFiZWxcIixcbiAgICAgIHg6IC0xMCxcbiAgICAgIHk6IFJFQ1RfU0laRSAvIDIsIFwidGV4dC1hbmNob3JcIjogXCJlbmRcIlxuICAgIH0pO1xuICAgIGlmICgvW19eXS8udGVzdChsYWJlbCkpIHtcbiAgICAgIGxldCBteVJlID0gLyguKj8pKFtfXl0pKC4pL2c7XG4gICAgICBsZXQgbXlBcnJheTtcbiAgICAgIGxldCBsYXN0SW5kZXg7XG4gICAgICB3aGlsZSAoKG15QXJyYXkgPSBteVJlLmV4ZWMobGFiZWwpKSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IG15UmUubGFzdEluZGV4O1xuICAgICAgICBsZXQgcHJlZml4ID0gbXlBcnJheVsxXTtcbiAgICAgICAgbGV0IHNlcCA9IG15QXJyYXlbMl07XG4gICAgICAgIGxldCBzdWZmaXggPSBteUFycmF5WzNdO1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKS50ZXh0KHByZWZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKVxuICAgICAgICAuYXR0cihcImJhc2VsaW5lLXNoaWZ0XCIsIHNlcCA9PT0gXCJfXCIgPyBcInN1YlwiIDogXCJzdXBlclwiKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCI5cHhcIilcbiAgICAgICAgLnRleHQoc3VmZml4KTtcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbC5zdWJzdHJpbmcobGFzdEluZGV4KSkge1xuICAgICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLnRleHQobGFiZWwuc3Vic3RyaW5nKGxhc3RJbmRleCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLnRleHQobGFiZWwpO1xuICAgIH1cbiAgICBub2RlR3JvdXAuY2xhc3NlZChhY3RpdmVPck5vdENsYXNzLCB0cnVlKTtcbiAgfVxuICBpZiAoIWlzSW5wdXQpIHtcbiAgICAvLyBEcmF3IHRoZSBub2RlJ3MgYmlhcy5cbiAgICBub2RlR3JvdXAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoe1xuICAgICAgICBpZDogYGJpYXMtJHtub2RlSWR9YCxcbiAgICAgICAgeDogLUJJQVNfU0laRSAtIDIsXG4gICAgICAgIHk6IFJFQ1RfU0laRSAtIEJJQVNfU0laRSArIDMsXG4gICAgICAgIHdpZHRoOiBCSUFTX1NJWkUsXG4gICAgICAgIGhlaWdodDogQklBU19TSVpFLFxuICAgICAgfSkub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVIb3ZlckNhcmQoSG92ZXJUeXBlLkJJQVMsIG5vZGUsIGQzLm1vdXNlKGNvbnRhaW5lci5ub2RlKCkpKTtcbiAgICAgIH0pLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlSG92ZXJDYXJkKG51bGwpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBEcmF3IHRoZSBub2RlJ3MgY2FudmFzLlxuICBsZXQgZGl2ID0gZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuaW5zZXJ0KFwiZGl2XCIsIFwiOmZpcnN0LWNoaWxkXCIpXG4gICAgLmF0dHIoe1xuICAgICAgXCJpZFwiOiBgY2FudmFzLSR7bm9kZUlkfWAsXG4gICAgICBcImNsYXNzXCI6IFwiY2FudmFzXCJcbiAgICB9KVxuICAgIC5zdHlsZSh7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogYCR7eCArIDN9cHhgLFxuICAgICAgdG9wOiBgJHt5ICsgM31weGBcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxlY3RlZE5vZGVJZCA9IG5vZGVJZDtcbiAgICAgIGRpdi5jbGFzc2VkKFwiaG92ZXJlZFwiLCB0cnVlKTtcbiAgICAgIG5vZGVHcm91cC5jbGFzc2VkKFwiaG92ZXJlZFwiLCB0cnVlKTtcbiAgICAgIHVwZGF0ZURlY2lzaW9uQm91bmRhcnkobmV0d29yaywgZmFsc2UpO1xuICAgICAgaGVhdE1hcC51cGRhdGVCYWNrZ3JvdW5kKGJvdW5kYXJ5W25vZGVJZF0sIHN0YXRlLmRpc2NyZXRpemUpO1xuICAgIH0pXG4gICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGVjdGVkTm9kZUlkID0gbnVsbDtcbiAgICAgIGRpdi5jbGFzc2VkKFwiaG92ZXJlZFwiLCBmYWxzZSk7XG4gICAgICBub2RlR3JvdXAuY2xhc3NlZChcImhvdmVyZWRcIiwgZmFsc2UpO1xuICAgICAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmYWxzZSk7XG4gICAgICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbbm4uZ2V0T3V0cHV0Tm9kZShuZXR3b3JrKS5pZF0sXG4gICAgICAgICAgc3RhdGUuZGlzY3JldGl6ZSk7XG4gICAgfSk7XG4gIGlmIChpc0lucHV0KSB7XG4gICAgZGl2Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBzdGF0ZVtub2RlSWRdID0gIXN0YXRlW25vZGVJZF07XG4gICAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICByZXNldCgpO1xuICAgIH0pO1xuICAgIGRpdi5zdHlsZShcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gIH1cbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBkaXYuY2xhc3NlZChhY3RpdmVPck5vdENsYXNzLCB0cnVlKTtcbiAgfVxuICBsZXQgbm9kZUhlYXRNYXAgPSBuZXcgSGVhdE1hcChSRUNUX1NJWkUsIERFTlNJVFkgLyAxMCwgeERvbWFpbixcbiAgICAgIHhEb21haW4sIGRpdiwge25vU3ZnOiB0cnVlfSk7XG4gIGRpdi5kYXR1bSh7aGVhdG1hcDogbm9kZUhlYXRNYXAsIGlkOiBub2RlSWR9KTtcblxufVxuXG4vLyBEcmF3IG5ldHdvcmtcbmZ1bmN0aW9uIGRyYXdOZXR3b3JrKG5ldHdvcms6IG5uLk5vZGVbXVtdKTogdm9pZCB7XG4gIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnXCIpO1xuICAvLyBSZW1vdmUgYWxsIHN2ZyBlbGVtZW50cy5cbiAgc3ZnLnNlbGVjdChcImcuY29yZVwiKS5yZW1vdmUoKTtcbiAgLy8gUmVtb3ZlIGFsbCBkaXYgZWxlbWVudHMuXG4gIGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpLnNlbGVjdEFsbChcImRpdi5jYW52YXNcIikucmVtb3ZlKCk7XG4gIGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpLnNlbGVjdEFsbChcImRpdi5wbHVzLW1pbnVzLW5ldXJvbnNcIikucmVtb3ZlKCk7XG5cbiAgLy8gR2V0IHRoZSB3aWR0aCBvZiB0aGUgc3ZnIGNvbnRhaW5lci5cbiAgbGV0IHBhZGRpbmcgPSAzO1xuICBsZXQgY28gPSBkMy5zZWxlY3QoXCIuY29sdW1uLm91dHB1dFwiKS5ub2RlKCkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGxldCBjZiA9IGQzLnNlbGVjdChcIi5jb2x1bW4uZmVhdHVyZXNcIikubm9kZSgpIGFzIEhUTUxEaXZFbGVtZW50O1xuICBsZXQgd2lkdGggPSBjby5vZmZzZXRMZWZ0IC0gY2Yub2Zmc2V0TGVmdDtcbiAgc3ZnLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCk7XG5cbiAgLy8gTWFwIG9mIGFsbCBub2RlIGNvb3JkaW5hdGVzLlxuICBsZXQgbm9kZTJjb29yZDoge1tpZDogc3RyaW5nXToge2N4OiBudW1iZXIsIGN5OiBudW1iZXJ9fSA9IHt9O1xuICBsZXQgY29udGFpbmVyID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAuY2xhc3NlZChcImNvcmVcIiwgdHJ1ZSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cGFkZGluZ30sJHtwYWRkaW5nfSlgKTtcbiAgLy8gRHJhdyB0aGUgbmV0d29yayBsYXllciBieSBsYXllci5cbiAgbGV0IG51bUxheWVycyA9IG5ldHdvcmsubGVuZ3RoO1xuICBsZXQgZmVhdHVyZVdpZHRoID0gMTE4O1xuICBsZXQgbGF5ZXJTY2FsZSA9IGQzLnNjYWxlLm9yZGluYWw8bnVtYmVyLCBudW1iZXI+KClcbiAgICAgIC5kb21haW4oZDMucmFuZ2UoMSwgbnVtTGF5ZXJzIC0gMSkpXG4gICAgICAucmFuZ2VQb2ludHMoW2ZlYXR1cmVXaWR0aCwgd2lkdGggLSBSRUNUX1NJWkVdLCAwLjcpO1xuICBsZXQgbm9kZUluZGV4U2NhbGUgPSAobm9kZUluZGV4OiBudW1iZXIpID0+IG5vZGVJbmRleCAqIChSRUNUX1NJWkUgKyAyNSk7XG5cblxuICBsZXQgY2FsbG91dFRodW1iID0gZDMuc2VsZWN0KFwiLmNhbGxvdXQudGh1bWJuYWlsXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxldCBjYWxsb3V0V2VpZ2h0cyA9IGQzLnNlbGVjdChcIi5jYWxsb3V0LndlaWdodHNcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGV0IGlkV2l0aENhbGxvdXQgPSBudWxsO1xuICBsZXQgdGFyZ2V0SWRXaXRoQ2FsbG91dCA9IG51bGw7XG5cbiAgLy8gRHJhdyB0aGUgaW5wdXQgbGF5ZXIgc2VwYXJhdGVseS5cbiAgbGV0IGN4ID0gUkVDVF9TSVpFIC8gMiArIDUwO1xuICBsZXQgbm9kZUlkcyA9IE9iamVjdC5rZXlzKElOUFVUUyk7XG4gIGxldCBtYXhZID0gbm9kZUluZGV4U2NhbGUobm9kZUlkcy5sZW5ndGgpO1xuICBub2RlSWRzLmZvckVhY2goKG5vZGVJZCwgaSkgPT4ge1xuICAgIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKGkpICsgUkVDVF9TSVpFIC8gMjtcbiAgICBub2RlMmNvb3JkW25vZGVJZF0gPSB7Y3gsIGN5fTtcbiAgICBkcmF3Tm9kZShjeCwgY3ksIG5vZGVJZCwgdHJ1ZSwgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gRHJhdyB0aGUgaW50ZXJtZWRpYXRlIGxheWVycy5cbiAgZm9yIChsZXQgbGF5ZXJJZHggPSAxOyBsYXllcklkeCA8IG51bUxheWVycyAtIDE7IGxheWVySWR4KyspIHtcbiAgICBsZXQgbnVtTm9kZXMgPSBuZXR3b3JrW2xheWVySWR4XS5sZW5ndGg7XG4gICAgbGV0IGN4ID0gbGF5ZXJTY2FsZShsYXllcklkeCkgKyBSRUNUX1NJWkUgLyAyO1xuICAgIG1heFkgPSBNYXRoLm1heChtYXhZLCBub2RlSW5kZXhTY2FsZShudW1Ob2RlcykpO1xuICAgIGFkZFBsdXNNaW51c0NvbnRyb2wobGF5ZXJTY2FsZShsYXllcklkeCksIGxheWVySWR4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gbmV0d29ya1tsYXllcklkeF1baV07XG4gICAgICBsZXQgY3kgPSBub2RlSW5kZXhTY2FsZShpKSArIFJFQ1RfU0laRSAvIDI7XG4gICAgICBub2RlMmNvb3JkW25vZGUuaWRdID0ge2N4LCBjeX07XG4gICAgICBkcmF3Tm9kZShjeCwgY3ksIG5vZGUuaWQsIGZhbHNlLCBjb250YWluZXIsIG5vZGUpO1xuXG4gICAgICAvLyBTaG93IGNhbGxvdXQgdG8gdGh1bWJuYWlscy5cbiAgICAgIGxldCBudW1Ob2RlcyA9IG5ldHdvcmtbbGF5ZXJJZHhdLmxlbmd0aDtcbiAgICAgIGxldCBuZXh0TnVtTm9kZXMgPSBuZXR3b3JrW2xheWVySWR4ICsgMV0ubGVuZ3RoO1xuICAgICAgaWYgKGlkV2l0aENhbGxvdXQgPT0gbnVsbCAmJlxuICAgICAgICAgIGkgPT09IG51bU5vZGVzIC0gMSAmJlxuICAgICAgICAgIG5leHROdW1Ob2RlcyA8PSBudW1Ob2Rlcykge1xuICAgICAgICBjYWxsb3V0VGh1bWIuc3R5bGUoe1xuICAgICAgICAgIGRpc3BsYXk6IG51bGwsXG4gICAgICAgICAgdG9wOiBgJHsyMCArIDMgKyBjeX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7Y3h9cHhgXG4gICAgICAgIH0pO1xuICAgICAgICBpZFdpdGhDYWxsb3V0ID0gbm9kZS5pZDtcbiAgICAgIH1cblxuICAgICAgLy8gRHJhdyBsaW5rcy5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBsZXQgcGF0aDogU1ZHUGF0aEVsZW1lbnQgPSBkcmF3TGluayhsaW5rLCBub2RlMmNvb3JkLCBuZXR3b3JrLFxuICAgICAgICAgICAgY29udGFpbmVyLCBqID09PSAwLCBqLCBub2RlLmlucHV0TGlua3MubGVuZ3RoKS5ub2RlKCkgYXMgYW55O1xuICAgICAgICAvLyBTaG93IGNhbGxvdXQgdG8gd2VpZ2h0cy5cbiAgICAgICAgbGV0IHByZXZMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHggLSAxXTtcbiAgICAgICAgbGV0IGxhc3ROb2RlUHJldkxheWVyID0gcHJldkxheWVyW3ByZXZMYXllci5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRhcmdldElkV2l0aENhbGxvdXQgPT0gbnVsbCAmJlxuICAgICAgICAgICAgaSA9PT0gbnVtTm9kZXMgLSAxICYmXG4gICAgICAgICAgICBsaW5rLnNvdXJjZS5pZCA9PT0gbGFzdE5vZGVQcmV2TGF5ZXIuaWQgJiZcbiAgICAgICAgICAgIChsaW5rLnNvdXJjZS5pZCAhPT0gaWRXaXRoQ2FsbG91dCB8fCBudW1MYXllcnMgPD0gNSkgJiZcbiAgICAgICAgICAgIGxpbmsuZGVzdC5pZCAhPT0gaWRXaXRoQ2FsbG91dCAmJlxuICAgICAgICAgICAgcHJldkxheWVyLmxlbmd0aCA+PSBudW1Ob2Rlcykge1xuICAgICAgICAgIGxldCBtaWRQb2ludCA9IHBhdGguZ2V0UG9pbnRBdExlbmd0aChwYXRoLmdldFRvdGFsTGVuZ3RoKCkgKiAwLjcpO1xuICAgICAgICAgIGNhbGxvdXRXZWlnaHRzLnN0eWxlKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG51bGwsXG4gICAgICAgICAgICB0b3A6IGAke21pZFBvaW50LnkgKyA1fXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IGAke21pZFBvaW50LnggKyAzfXB4YFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRhcmdldElkV2l0aENhbGxvdXQgPSBsaW5rLmRlc3QuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEcmF3IHRoZSBvdXRwdXQgbm9kZSBzZXBhcmF0ZWx5LlxuICBjeCA9IHdpZHRoICsgUkVDVF9TSVpFIC8gMjtcbiAgbGV0IG5vZGUgPSBuZXR3b3JrW251bUxheWVycyAtIDFdWzBdO1xuICBsZXQgY3kgPSBub2RlSW5kZXhTY2FsZSgwKSArIFJFQ1RfU0laRSAvIDI7XG4gIG5vZGUyY29vcmRbbm9kZS5pZF0gPSB7Y3gsIGN5fTtcbiAgLy8gRHJhdyBsaW5rcy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmlucHV0TGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbGluayA9IG5vZGUuaW5wdXRMaW5rc1tpXTtcbiAgICBkcmF3TGluayhsaW5rLCBub2RlMmNvb3JkLCBuZXR3b3JrLCBjb250YWluZXIsIGkgPT09IDAsIGksXG4gICAgICAgIG5vZGUuaW5wdXRMaW5rcy5sZW5ndGgpO1xuICB9XG4gIC8vIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBzdmcuXG4gIHN2Zy5hdHRyKFwiaGVpZ2h0XCIsIG1heFkpO1xuXG4gIC8vIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBmZWF0dXJlcyBjb2x1bW4uXG4gIGxldCBoZWlnaHQgPSBNYXRoLm1heChcbiAgICBnZXRSZWxhdGl2ZUhlaWdodChjYWxsb3V0VGh1bWIpLFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGNhbGxvdXRXZWlnaHRzKSxcbiAgICBnZXRSZWxhdGl2ZUhlaWdodChkMy5zZWxlY3QoXCIjbmV0d29ya1wiKSlcbiAgKTtcbiAgZDMuc2VsZWN0KFwiLmNvbHVtbi5mZWF0dXJlc1wiKS5zdHlsZShcImhlaWdodFwiLCBoZWlnaHQgKyBcInB4XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZUhlaWdodChzZWxlY3Rpb246IGQzLlNlbGVjdGlvbjxhbnk+KSB7XG4gIGxldCBub2RlID0gc2VsZWN0aW9uLm5vZGUoKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUub2Zmc2V0SGVpZ2h0ICsgbm9kZS5vZmZzZXRUb3A7XG59XG5cbmZ1bmN0aW9uIGFkZFBsdXNNaW51c0NvbnRyb2woeDogbnVtYmVyLCBsYXllcklkeDogbnVtYmVyKSB7XG4gIGxldCBkaXYgPSBkMy5zZWxlY3QoXCIjbmV0d29ya1wiKS5hcHBlbmQoXCJkaXZcIilcbiAgICAuY2xhc3NlZChcInBsdXMtbWludXMtbmV1cm9uc1wiLCB0cnVlKVxuICAgIC5zdHlsZShcImxlZnRcIiwgYCR7eCAtIDEwfXB4YCk7XG5cbiAgbGV0IGkgPSBsYXllcklkeCAtIDE7XG4gIGxldCBmaXJzdFJvdyA9IGRpdi5hcHBlbmQoXCJkaXZcIikuYXR0cihcImNsYXNzXCIsIGB1aS1udW1Ob2RlcyR7bGF5ZXJJZHh9YCk7XG4gIGZpcnN0Um93LmFwcGVuZChcImJ1dHRvblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIpXG4gICAgICAub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBudW1OZXVyb25zID0gc3RhdGUubmV0d29ya1NoYXBlW2ldO1xuICAgICAgICBpZiAobnVtTmV1cm9ucyA+PSAzMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0rKztcblxuICAgICAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICBcdGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgICAgIFx0XHQgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgXHRcdCB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICBcdFx0ICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICByZXNldCgpO1xuICAgICAgfSlcbiAgICAuYXBwZW5kKFwiaVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgICAudGV4dChcImFkZFwiKTtcblxuICBmaXJzdFJvdy5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgbnVtTmV1cm9ucyA9IHN0YXRlLm5ldHdvcmtTaGFwZVtpXTtcbiAgICAgICAgaWYgKG51bU5ldXJvbnMgPD0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0tLTtcblxuICAgICAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgICAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgICAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICB9KVxuICAgIC5hcHBlbmQoXCJpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICAgIC50ZXh0KFwicmVtb3ZlXCIpO1xuXG4gIGxldCBzdWZmaXggPSBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0gPiAxID8gXCJzXCIgOiBcIlwiO1xuICBkaXYuYXBwZW5kKFwiZGl2XCIpLnRleHQoXG4gICAgc3RhdGUubmV0d29ya1NoYXBlW2ldICsgXCIgbmV1cm9uXCIgKyBzdWZmaXhcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSG92ZXJDYXJkKHR5cGU6IEhvdmVyVHlwZSwgbm9kZU9yTGluaz86IG5uLk5vZGUgfCBubi5MaW5rLFxuICAgIGNvb3JkaW5hdGVzPzogW251bWJlciwgbnVtYmVyXSkge1xuICBsZXQgaG92ZXJjYXJkID0gZDMuc2VsZWN0KFwiI2hvdmVyY2FyZFwiKTtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIGhvdmVyY2FyZC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcIiNzdmdcIikub24oXCJjbGlja1wiLCBudWxsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZDMuc2VsZWN0KFwiI3N2Z1wiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBob3ZlcmNhcmQuc2VsZWN0KFwiLnZhbHVlXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgbGV0IGlucHV0ID0gaG92ZXJjYXJkLnNlbGVjdChcImlucHV0XCIpO1xuICAgIGlucHV0LnN0eWxlKFwiZGlzcGxheVwiLCBudWxsKTtcbiAgICBpbnB1dC5vbihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbnVsbCAmJiB0aGlzLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBIb3ZlclR5cGUuV0VJR0hUKSB7XG4gICAgICAgICAgKG5vZGVPckxpbmsgYXMgbm4uTGluaykud2VpZ2h0ID0gK3RoaXMudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKG5vZGVPckxpbmsgYXMgbm4uTm9kZSkuYmlhcyA9ICt0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVVJKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaW5wdXQub24oXCJrZXlwcmVzc1wiLCAoKSA9PiB7XG4gICAgICBpZiAoKGQzLmV2ZW50IGFzIGFueSkua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdXBkYXRlSG92ZXJDYXJkKHR5cGUsIG5vZGVPckxpbmssIGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAoaW5wdXQubm9kZSgpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZvY3VzKCk7XG4gIH0pO1xuICBsZXQgdmFsdWUgPSAodHlwZSA9PT0gSG92ZXJUeXBlLldFSUdIVCkgP1xuICAgIChub2RlT3JMaW5rIGFzIG5uLkxpbmspLndlaWdodCA6XG4gICAgKG5vZGVPckxpbmsgYXMgbm4uTm9kZSkuYmlhcztcbiAgbGV0IG5hbWUgPSAodHlwZSA9PT0gSG92ZXJUeXBlLldFSUdIVCkgPyBcIldlaWdodFwiIDogXCJCaWFzXCI7XG4gIGhvdmVyY2FyZC5zdHlsZSh7XG4gICAgXCJsZWZ0XCI6IGAke2Nvb3JkaW5hdGVzWzBdICsgMjB9cHhgLFxuICAgIFwidG9wXCI6IGAke2Nvb3JkaW5hdGVzWzFdfXB4YCxcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH0pO1xuICBob3ZlcmNhcmQuc2VsZWN0KFwiLnR5cGVcIikudGV4dChuYW1lKTtcbiAgaG92ZXJjYXJkLnNlbGVjdChcIi52YWx1ZVwiKVxuICAgIC5zdHlsZShcImRpc3BsYXlcIiwgbnVsbClcbiAgICAudGV4dCh2YWx1ZS50b1ByZWNpc2lvbigyKSk7XG4gIGhvdmVyY2FyZC5zZWxlY3QoXCJpbnB1dFwiKVxuICAgIC5wcm9wZXJ0eShcInZhbHVlXCIsIHZhbHVlLnRvUHJlY2lzaW9uKDIpKVxuICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufVxuXG5mdW5jdGlvbiBkcmF3TGluayhcbiAgICBpbnB1dDogbm4uTGluaywgbm9kZTJjb29yZDoge1tpZDogc3RyaW5nXToge2N4OiBudW1iZXIsIGN5OiBudW1iZXJ9fSxcbiAgICBuZXR3b3JrOiBubi5Ob2RlW11bXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PixcbiAgICBpc0ZpcnN0OiBib29sZWFuLCBpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xuICBsZXQgbGluZSA9IGNvbnRhaW5lci5pbnNlcnQoXCJwYXRoXCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICBsZXQgc291cmNlID0gbm9kZTJjb29yZFtpbnB1dC5zb3VyY2UuaWRdO1xuICBsZXQgZGVzdCA9IG5vZGUyY29vcmRbaW5wdXQuZGVzdC5pZF07XG4gIGxldCBkYXR1bSA9IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIHk6IHNvdXJjZS5jeCArIFJFQ1RfU0laRSAvIDIgKyAyLFxuICAgICAgeDogc291cmNlLmN5XG4gICAgfSxcbiAgICB0YXJnZXQ6IHtcbiAgICAgIHk6IGRlc3QuY3ggLSBSRUNUX1NJWkUgLyAyLFxuICAgICAgeDogZGVzdC5jeSArICgoaW5kZXggLSAobGVuZ3RoIC0gMSkgLyAyKSAvIGxlbmd0aCkgKiAxMlxuICAgIH1cbiAgfTtcbiAgbGV0IGRpYWdvbmFsID0gZDMuc3ZnLmRpYWdvbmFsKCkucHJvamVjdGlvbihkID0+IFtkLnksIGQueF0pO1xuICBsaW5lLmF0dHIoe1xuICAgIFwibWFya2VyLXN0YXJ0XCI6IFwidXJsKCNtYXJrZXJBcnJvdylcIixcbiAgICBjbGFzczogXCJsaW5rXCIsXG4gICAgaWQ6IFwibGlua1wiICsgaW5wdXQuc291cmNlLmlkICsgXCItXCIgKyBpbnB1dC5kZXN0LmlkLFxuICAgIGQ6IGRpYWdvbmFsKGRhdHVtLCAwKVxuICB9KTtcblxuICAvLyBBZGQgYW4gaW52aXNpYmxlIHRoaWNrIGxpbmsgdGhhdCB3aWxsIGJlIHVzZWQgZm9yXG4gIC8vIHNob3dpbmcgdGhlIHdlaWdodCB2YWx1ZSBvbiBob3Zlci5cbiAgY29udGFpbmVyLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImRcIiwgZGlhZ29uYWwoZGF0dW0sIDApKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rLWhvdmVyXCIpXG4gICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUhvdmVyQ2FyZChIb3ZlclR5cGUuV0VJR0hULCBpbnB1dCwgZDMubW91c2UodGhpcykpO1xuICAgIH0pLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUhvdmVyQ2FyZChudWxsKTtcbiAgICB9KTtcbiAgcmV0dXJuIGxpbmU7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBuZXVyYWwgbmV0d29yaywgaXQgYXNrcyB0aGUgbmV0d29yayBmb3IgdGhlIG91dHB1dCAocHJlZGljdGlvbilcbiAqIG9mIGV2ZXJ5IG5vZGUgaW4gdGhlIG5ldHdvcmsgdXNpbmcgaW5wdXRzIHNhbXBsZWQgb24gYSBzcXVhcmUgZ3JpZC5cbiAqIEl0IHJldHVybnMgYSBtYXAgd2hlcmUgZWFjaCBrZXkgaXMgdGhlIG5vZGUgSUQgYW5kIHRoZSB2YWx1ZSBpcyBhIHNxdWFyZVxuICogbWF0cml4IG9mIHRoZSBvdXRwdXRzIG9mIHRoZSBuZXR3b3JrIGZvciBlYWNoIGlucHV0IGluIHRoZSBncmlkIHJlc3BlY3RpdmVseS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrOiBubi5Ob2RlW11bXSwgZmlyc3RUaW1lOiBib29sZWFuKSB7XG4gIGlmIChmaXJzdFRpbWUpIHtcbiAgICBib3VuZGFyeSA9IHt9O1xuICAgIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgICAgYm91bmRhcnlbbm9kZS5pZF0gPSBuZXcgQXJyYXkoREVOU0lUWSk7XG4gICAgfSk7XG4gICAgLy8gR28gdGhyb3VnaCBhbGwgcHJlZGVmaW5lZCBpbnB1dHMuXG4gICAgZm9yIChsZXQgbm9kZUlkIGluIElOUFVUUykge1xuICAgICAgYm91bmRhcnlbbm9kZUlkXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICB9XG4gIH1cbiAgbGV0IHhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLmRvbWFpbihbMCwgREVOU0lUWSAtIDFdKS5yYW5nZSh4RG9tYWluKTtcbiAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLmRvbWFpbihbREVOU0lUWSAtIDEsIDBdKS5yYW5nZSh4RG9tYWluKTtcblxuICBsZXQgaSA9IDAsIGogPSAwO1xuICBmb3IgKGkgPSAwOyBpIDwgREVOU0lUWTsgaSsrKSB7XG4gICAgaWYgKGZpcnN0VGltZSkge1xuICAgICAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgICAgIGJvdW5kYXJ5W25vZGUuaWRdW2ldID0gbmV3IEFycmF5KERFTlNJVFkpO1xuICAgICAgfSk7XG4gICAgICAvLyBHbyB0aHJvdWdoIGFsbCBwcmVkZWZpbmVkIGlucHV0cy5cbiAgICAgIGZvciAobGV0IG5vZGVJZCBpbiBJTlBVVFMpIHtcbiAgICAgICAgYm91bmRhcnlbbm9kZUlkXVtpXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChqID0gMDsgaiA8IERFTlNJVFk7IGorKykge1xuICAgICAgLy8gMSBmb3IgcG9pbnRzIGluc2lkZSB0aGUgY2lyY2xlLCBhbmQgMCBmb3IgcG9pbnRzIG91dHNpZGUgdGhlIGNpcmNsZS5cbiAgICAgIGxldCB4ID0geFNjYWxlKGkpO1xuICAgICAgbGV0IHkgPSB5U2NhbGUoaik7XG4gICAgICBsZXQgaW5wdXQgPSBjb25zdHJ1Y3RJbnB1dCh4LCB5KTtcbiAgICAgIG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICAgIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgICAgICBib3VuZGFyeVtub2RlLmlkXVtpXVtqXSA9IG5vZGUub3V0cHV0O1xuICAgICAgfSk7XG4gICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgIC8vIEdvIHRocm91Z2ggYWxsIHByZWRlZmluZWQgaW5wdXRzLlxuICAgICAgICBmb3IgKGxldCBub2RlSWQgaW4gSU5QVVRTKSB7XG4gICAgICAgICAgYm91bmRhcnlbbm9kZUlkXVtpXVtqXSA9IElOUFVUU1tub2RlSWRdLmYoeCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9zcyhuZXR3b3JrOiBubi5Ob2RlW11bXSwgZGF0YVBvaW50czogRXhhbXBsZTJEW10pOiBudW1iZXIge1xuICBsZXQgbG9zcyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkYXRhUG9pbnQgPSBkYXRhUG9pbnRzW2ldO1xuICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KGRhdGFQb2ludC54LCBkYXRhUG9pbnQueSk7XG4gICAgbGV0IG91dHB1dCA9IG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICBsb3NzICs9IG5uLkVycm9ycy5TUVVBUkUuZXJyb3Iob3V0cHV0LCBkYXRhUG9pbnQubGFiZWwpO1xuICB9XG4gIHJldHVybiBsb3NzIC8gZGF0YVBvaW50cy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVJKGZpcnN0U3RlcCA9IGZhbHNlKSB7XG4gIC8vIFVwZGF0ZSB0aGUgbGlua3MgdmlzdWFsbHkuXG4gIHVwZGF0ZVdlaWdodHNVSShuZXR3b3JrLCBkMy5zZWxlY3QoXCJnLmNvcmVcIikpO1xuICAvLyBVcGRhdGUgdGhlIGJpYXMgdmFsdWVzIHZpc3VhbGx5LlxuICB1cGRhdGVCaWFzZXNVSShuZXR3b3JrKTtcbiAgLy8gR2V0IHRoZSBkZWNpc2lvbiBib3VuZGFyeSBvZiB0aGUgbmV0d29yay5cbiAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmaXJzdFN0ZXApO1xuICBsZXQgc2VsZWN0ZWRJZCA9IHNlbGVjdGVkTm9kZUlkICE9IG51bGwgP1xuICAgICAgc2VsZWN0ZWROb2RlSWQgOiBubi5nZXRPdXRwdXROb2RlKG5ldHdvcmspLmlkO1xuICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbc2VsZWN0ZWRJZF0sIHN0YXRlLmRpc2NyZXRpemUpO1xuXG4gIC8vIFVwZGF0ZSBhbGwgZGVjaXNpb24gYm91bmRhcmllcy5cbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LmNhbnZhc1wiKVxuICAgICAgLmVhY2goZnVuY3Rpb24oZGF0YToge2hlYXRtYXA6IEhlYXRNYXAsIGlkOiBzdHJpbmd9KSB7XG4gICAgZGF0YS5oZWF0bWFwLnVwZGF0ZUJhY2tncm91bmQocmVkdWNlTWF0cml4KGJvdW5kYXJ5W2RhdGEuaWRdLCAxMCksXG4gICAgICAgIHN0YXRlLmRpc2NyZXRpemUpO1xuICB9KTtcblxuICBmdW5jdGlvbiB6ZXJvUGFkKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHBhZCA9IFwiMDAwMDAwXCI7XG4gICAgcmV0dXJuIChwYWQgKyBuKS5zbGljZSgtcGFkLmxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tYXMoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIH1cblxuICBmdW5jdGlvbiBodW1hblJlYWRhYmxlKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG4udG9GaXhlZCgzKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBsb3NzIGFuZCBpdGVyYXRpb24gbnVtYmVyLlxuICBkMy5zZWxlY3QoXCIjbG9zcy10cmFpblwiKS50ZXh0KGh1bWFuUmVhZGFibGUobG9zc1RyYWluKSk7XG4gIGQzLnNlbGVjdChcIiNsb3NzLXRlc3RcIikudGV4dChodW1hblJlYWRhYmxlKGxvc3NUZXN0KSk7XG4gIGQzLnNlbGVjdChcIiNpdGVyLW51bWJlclwiKS50ZXh0KGFkZENvbW1hcyh6ZXJvUGFkKGl0ZXIpKSk7XG4gIGxpbmVDaGFydC5hZGREYXRhUG9pbnQoW2xvc3NUcmFpbiwgbG9zc1Rlc3RdKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SW5wdXRJZHMoKTogc3RyaW5nW10ge1xuICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGxldCBpbnB1dE5hbWUgaW4gSU5QVVRTKSB7XG4gICAgaWYgKHN0YXRlW2lucHV0TmFtZV0pIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlucHV0TmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdElucHV0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICBsZXQgaW5wdXQ6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGlucHV0TmFtZSBpbiBJTlBVVFMpIHtcbiAgICBpZiAoc3RhdGVbaW5wdXROYW1lXSkge1xuICAgICAgaW5wdXQucHVzaChJTlBVVFNbaW5wdXROYW1lXS5mKHgsIHkpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBvbmVTdGVwKCk6IHZvaWQge1xuICBpdGVyKys7XG4gIHRyYWluRGF0YS5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KHBvaW50LngsIHBvaW50LnkpO1xuICAgIG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICBubi5iYWNrUHJvcChuZXR3b3JrLCBwb2ludC5sYWJlbCwgbm4uRXJyb3JzLlNRVUFSRSk7XG4gICAgaWYgKChpICsgMSkgJSBzdGF0ZS5iYXRjaFNpemUgPT09IDApIHtcbiAgICAgIG5uLnVwZGF0ZVdlaWdodHMobmV0d29yaywgc3RhdGUubGVhcm5pbmdSYXRlLCBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUpO1xuICAgIH1cbiAgfSk7XG4gIC8vIENvbXB1dGUgdGhlIGxvc3MuXG4gIGxvc3NUcmFpbiA9IGdldExvc3MobmV0d29yaywgdHJhaW5EYXRhKTtcbiAgbG9zc1Rlc3QgPSBnZXRMb3NzKG5ldHdvcmssIHRlc3REYXRhKTtcbiAgdXBkYXRlVUkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE91dHB1dFdlaWdodHMobmV0d29yazogbm4uTm9kZVtdW10pOiBudW1iZXJbXSB7XG4gIGxldCB3ZWlnaHRzOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBsYXllcklkeCA9IDA7IGxheWVySWR4IDwgbmV0d29yay5sZW5ndGggLSAxOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5vdXRwdXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBub2RlLm91dHB1dHNbal07XG4gICAgICAgIHdlaWdodHMucHVzaChvdXRwdXQud2VpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdlaWdodHM7XG59XG5cbmZ1bmN0aW9uIHRvSnNvbihvblN0YXJ0dXA9ZmFsc2Upe1xuXG4gIHZhciBqc29uT2JqID0ge1wiZGF0YXNldFwiIDogc3RhdGUuZGF0YXNldCwgXCJuZXdEYXRhc2V0XCIgOiBzdGF0ZS5yZWdEYXRhc2V0LCBcIm51bUhpZGRlbkxheWVyc1wiIDogc3RhdGUubnVtSGlkZGVuTGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ldHdvcmtTaGFwZVwiIDogc3RhdGUubmV0d29ya1NoYXBlLCBcInNob3dUZXN0RGF0YVwiIDogc3RhdGUuc2hvd1Rlc3REYXRhLCBcImRpc2NyZXRpemVcIiA6IHN0YXRlLmRpc2NyZXRpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyY1RyYWluRGF0YVwiIDogc3RhdGUucGVyY1RyYWluRGF0YSwgXCJub2lzZVwiIDogc3RhdGUubm9pc2UsIFwiYmF0Y2hTaXplXCIgOiBzdGF0ZS5iYXRjaFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZhdGlvblwiIDogc3RhdGUuYWN0aXZhdGlvbiwgXCJsZWFybmluZ1JhdGVcIiA6IHN0YXRlLmxlYXJuaW5nUmF0ZSwgXCJyZWd1bGFyaXphdGlvblwiIDogc3RhdGUucmVndWxhcml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVndWxhcml6YXRpb25SYXRlXCIgOiBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUsIFwicHJvYmxlbVwiIDogc3RhdGUucHJvYmxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbml0WmVyb1wiIDogc3RhdGUuaW5pdFplcm8sIFwidHV0b3JpYWxcIiA6IHN0YXRlLnR1dG9yaWFsICB9O1xuXG4gICAgcmV0dXJuIGpzb25PYmo7XG59O1xuXG5mdW5jdGlvbiByZXNldChvblN0YXJ0dXA9ZmFsc2UpIHtcbiAgbGluZUNoYXJ0LnJlc2V0KCk7XG4gIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICBpZiAoIW9uU3RhcnR1cCkge1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gIH1cbiAgcGxheWVyLnBhdXNlKCk7XG5cbiAgbGV0IHN1ZmZpeCA9IHN0YXRlLm51bUhpZGRlbkxheWVycyAhPT0gMSA/IFwic1wiIDogXCJcIjtcbiAgZDMuc2VsZWN0KFwiI2xheWVycy1sYWJlbFwiKS50ZXh0KFwiSGlkZGVuIGxheWVyXCIgKyBzdWZmaXgpO1xuICBkMy5zZWxlY3QoXCIjbnVtLWxheWVyc1wiKS50ZXh0KHN0YXRlLm51bUhpZGRlbkxheWVycyk7XG5cblxuICAvLyBNYWtlIGEgc2ltcGxlIG5ldHdvcmsuXG4gIGl0ZXIgPSAwO1xuICBsZXQgbnVtSW5wdXRzID0gY29uc3RydWN0SW5wdXQoMCAsIDApLmxlbmd0aDtcbiAgbGV0IHNoYXBlID0gW251bUlucHV0c10uY29uY2F0KHN0YXRlLm5ldHdvcmtTaGFwZSkuY29uY2F0KFsxXSk7XG4gIGxldCBvdXRwdXRBY3RpdmF0aW9uID0gKHN0YXRlLnByb2JsZW0gPT09IFByb2JsZW0uUkVHUkVTU0lPTikgP1xuICAgICAgbm4uQWN0aXZhdGlvbnMuTElORUFSIDogbm4uQWN0aXZhdGlvbnMuVEFOSDtcbiAgbmV0d29yayA9IG5uLmJ1aWxkTmV0d29yayhzaGFwZSwgc3RhdGUuYWN0aXZhdGlvbiwgb3V0cHV0QWN0aXZhdGlvbixcbiAgICAgIHN0YXRlLnJlZ3VsYXJpemF0aW9uLCBjb25zdHJ1Y3RJbnB1dElkcygpLCBzdGF0ZS5pbml0WmVybyk7XG4gIGxvc3NUcmFpbiA9IGdldExvc3MobmV0d29yaywgdHJhaW5EYXRhKTtcbiAgbG9zc1Rlc3QgPSBnZXRMb3NzKG5ldHdvcmssIHRlc3REYXRhKTtcbiAgZHJhd05ldHdvcmsobmV0d29yayk7XG4gIHVwZGF0ZVVJKHRydWUpO1xufTtcblxuZnVuY3Rpb24gaW5pdFR1dG9yaWFsKCkge1xuICBpZiAoc3RhdGUudHV0b3JpYWwgPT0gbnVsbCB8fCBzdGF0ZS50dXRvcmlhbCA9PT0gJycgfHwgc3RhdGUuaGlkZVRleHQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gUmVtb3ZlIGFsbCBvdGhlciB0ZXh0LlxuICBkMy5zZWxlY3RBbGwoXCJhcnRpY2xlIGRpdi5sLS1ib2R5XCIpLnJlbW92ZSgpO1xuICBsZXQgdHV0b3JpYWwgPSBkMy5zZWxlY3QoXCJhcnRpY2xlXCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsLS1ib2R5XCIpO1xuICAvLyBJbnNlcnQgdHV0b3JpYWwgdGV4dC5cbiAgZDMuaHRtbChgdHV0b3JpYWxzLyR7c3RhdGUudHV0b3JpYWx9Lmh0bWxgLCAoZXJyLCBodG1sRnJhZ21lbnQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHR1dG9yaWFsLm5vZGUoKS5hcHBlbmRDaGlsZChodG1sRnJhZ21lbnQpO1xuICAgIC8vIElmIHRoZSB0dXRvcmlhbCBoYXMgYSA8dGl0bGU+IHRhZywgc2V0IHRoZSBwYWdlIHRpdGxlIHRvIHRoYXQuXG4gICAgbGV0IHRpdGxlID0gdHV0b3JpYWwuc2VsZWN0KFwidGl0bGVcIik7XG4gICAgaWYgKHRpdGxlLnNpemUoKSkge1xuICAgICAgZDMuc2VsZWN0KFwiaGVhZGVyIGgxXCIpLnN0eWxlKHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIyMHB4XCIsXG4gICAgICB9KVxuICAgICAgLnRleHQodGl0bGUudGV4dCgpKTtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGUudGV4dCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXdEYXRhc2V0VGh1bWJuYWlscygpIHtcbiAgZnVuY3Rpb24gcmVuZGVyVGh1bWJuYWlsKGNhbnZhcywgZGF0YUdlbmVyYXRvcikge1xuICAgIGxldCB3ID0gMTAwO1xuICAgIGxldCBoID0gMTAwO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3KTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgZGF0YSA9IGRhdGFHZW5lcmF0b3IoMjAwLCAwKTtcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclNjYWxlKGQubGFiZWwpO1xuICAgICAgY29udGV4dC5maWxsUmVjdCh3ICogKGQueCArIDYpIC8gMTIsIGggKiAoZC55ICsgNikgLyAxMiwgNCwgNCk7XG4gICAgfSk7XG4gICAgZDMuc2VsZWN0KGNhbnZhcy5wYXJlbnROb2RlKS5zdHlsZShcImRpc3BsYXlcIiwgbnVsbCk7XG4gIH1cbiAgZDMuc2VsZWN0QWxsKFwiLmRhdGFzZXRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblxuICBpZiAoc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5DTEFTU0lGSUNBVElPTikge1xuICAgIGZvciAobGV0IGRhdGFzZXQgaW4gZGF0YXNldHMpIHtcbiAgICAgIGxldCBjYW52YXM6IGFueSA9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgY2FudmFzW2RhdGEtZGF0YXNldD0ke2RhdGFzZXR9XWApO1xuICAgICAgbGV0IGRhdGFHZW5lcmF0b3IgPSBkYXRhc2V0c1tkYXRhc2V0XTtcbiAgICAgIHJlbmRlclRodW1ibmFpbChjYW52YXMsIGRhdGFHZW5lcmF0b3IpO1xuICAgIH1cbiAgfVxuICBpZiAoc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5SRUdSRVNTSU9OKSB7XG4gICAgZm9yIChsZXQgcmVnRGF0YXNldCBpbiByZWdEYXRhc2V0cykge1xuICAgICAgbGV0IGNhbnZhczogYW55ID1cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBjYW52YXNbZGF0YS1yZWdEYXRhc2V0PSR7cmVnRGF0YXNldH1dYCk7XG4gICAgICBsZXQgZGF0YUdlbmVyYXRvciA9IHJlZ0RhdGFzZXRzW3JlZ0RhdGFzZXRdO1xuICAgICAgcmVuZGVyVGh1bWJuYWlsKGNhbnZhcywgZGF0YUdlbmVyYXRvcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVDb250cm9scygpIHtcbiAgLy8gU2V0IGRpc3BsYXk6bm9uZSB0byBhbGwgdGhlIFVJIGVsZW1lbnRzIHRoYXQgYXJlIGhpZGRlbi5cbiAgbGV0IGhpZGRlblByb3BzID0gc3RhdGUuZ2V0SGlkZGVuUHJvcHMoKTtcbiAgaGlkZGVuUHJvcHMuZm9yRWFjaChwcm9wID0+IHtcbiAgICBsZXQgY29udHJvbHMgPSBkMy5zZWxlY3RBbGwoYC51aS0ke3Byb3B9YCk7XG4gICAgaWYgKGNvbnRyb2xzLnNpemUoKSA9PT0gMCkge1xuICAgICAgY29uc29sZS53YXJuKGAwIGh0bWwgZWxlbWVudHMgZm91bmQgd2l0aCBjbGFzcyAudWktJHtwcm9wfWApO1xuICAgIH1cbiAgICBjb250cm9scy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICB9KTtcblxuICAvLyBBbHNvIGFkZCBjaGVja2JveCBmb3IgZWFjaCBoaWRhYmxlIGNvbnRyb2wgaW4gdGhlIFwidXNlIGl0IGluIGNsYXNzcm9tXCJcbiAgLy8gc2VjdGlvbi5cbiAgbGV0IGhpZGVDb250cm9scyA9IGQzLnNlbGVjdChcIi5oaWRlLWNvbnRyb2xzXCIpO1xuICBISURBQkxFX0NPTlRST0xTLmZvckVhY2goKFt0ZXh0LCBpZF0pID0+IHtcbiAgICBsZXQgbGFiZWwgPSBoaWRlQ29udHJvbHMuYXBwZW5kKFwibGFiZWxcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIpO1xuICAgIGxldCBpbnB1dCA9IGxhYmVsLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAuYXR0cih7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgY2xhc3M6IFwibWRsLWNoZWNrYm94X19pbnB1dFwiLFxuICAgICAgfSk7XG4gICAgaWYgKGhpZGRlblByb3BzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgaW5wdXQuYXR0cihcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgICBpbnB1dC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHN0YXRlLnNldEhpZGVQcm9wZXJ0eShpZCwgIXRoaXMuY2hlY2tlZCk7XG4gICAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgICBkMy5zZWxlY3QoXCIuaGlkZS1jb250cm9scy1saW5rXCIpXG4gICAgICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgfSk7XG4gICAgbGFiZWwuYXBwZW5kKFwic3BhblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1jaGVja2JveF9fbGFiZWwgbGFiZWxcIilcbiAgICAgIC50ZXh0KHRleHQpO1xuICB9KTtcbiAgZDMuc2VsZWN0KFwiLmhpZGUtY29udHJvbHMtbGlua1wiKVxuICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGF0YShmaXJzdFRpbWUgPSBmYWxzZSkge1xuICBpZiAoIWZpcnN0VGltZSkge1xuICAgIC8vIENoYW5nZSB0aGUgc2VlZC5cbiAgICBzdGF0ZS5zZWVkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDUpO1xuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gIH1cbiAgTWF0aC5zZWVkcmFuZG9tKHN0YXRlLnNlZWQpO1xuICBsZXQgbnVtU2FtcGxlcyA9IChzdGF0ZS5wcm9ibGVtID09PSBQcm9ibGVtLlJFR1JFU1NJT04pID9cbiAgICAgIE5VTV9TQU1QTEVTX1JFR1JFU1MgOiBOVU1fU0FNUExFU19DTEFTU0lGWTtcbiAgbGV0IGdlbmVyYXRvciA9IHN0YXRlLnByb2JsZW0gPT09IFByb2JsZW0uQ0xBU1NJRklDQVRJT04gP1xuICAgICAgc3RhdGUuZGF0YXNldCA6IHN0YXRlLnJlZ0RhdGFzZXQ7XG4gIGxldCBkYXRhID0gZ2VuZXJhdG9yKG51bVNhbXBsZXMsIHN0YXRlLm5vaXNlIC8gMTAwKTtcbiAgLy8gU2h1ZmZsZSB0aGUgZGF0YSBpbi1wbGFjZS5cbiAgc2h1ZmZsZShkYXRhKTtcbiAgLy8gU3BsaXQgaW50byB0cmFpbiBhbmQgdGVzdCBkYXRhLlxuICBsZXQgc3BsaXRJbmRleCA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggKiBzdGF0ZS5wZXJjVHJhaW5EYXRhIC8gMTAwKTtcbiAgdHJhaW5EYXRhID0gZGF0YS5zbGljZSgwLCBzcGxpdEluZGV4KTtcbiAgdGVzdERhdGEgPSBkYXRhLnNsaWNlKHNwbGl0SW5kZXgpO1xuICBoZWF0TWFwLnVwZGF0ZVBvaW50cyh0cmFpbkRhdGEpO1xuICBoZWF0TWFwLnVwZGF0ZVRlc3RQb2ludHMoc3RhdGUuc2hvd1Rlc3REYXRhID8gdGVzdERhdGEgOiBbXSk7XG59XG5cbmxldCBmaXJzdEludGVyYWN0aW9uID0gdHJ1ZTtcbmxldCBwYXJhbWV0ZXJzQ2hhbmdlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB1c2VySGFzSW50ZXJhY3RlZCgpIHtcbiAgaWYgKCFmaXJzdEludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZpcnN0SW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgbGV0IHBhZ2UgPSAnaW5kZXgnO1xuICBpZiAoc3RhdGUudHV0b3JpYWwgIT0gbnVsbCAmJiBzdGF0ZS50dXRvcmlhbCAhPT0gJycpIHtcbiAgICBwYWdlID0gYC92L3R1dG9yaWFscy8ke3N0YXRlLnR1dG9yaWFsfWA7XG4gIH1cbiAgZ2EoJ3NldCcsICdwYWdlJywgcGFnZSk7XG4gIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgeydzZXNzaW9uQ29udHJvbCc6ICdzdGFydCd9KTtcbn1cblxuZnVuY3Rpb24gc2ltdWxhdGlvblN0YXJ0ZWQoKSB7XG4gIGdhKCdzZW5kJywge1xuICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgZXZlbnRDYXRlZ29yeTogJ1N0YXJ0aW5nIFNpbXVsYXRpb24nLFxuICAgIGV2ZW50QWN0aW9uOiBwYXJhbWV0ZXJzQ2hhbmdlZCA/ICdjaGFuZ2VkJyA6ICd1bmNoYW5nZWQnLFxuICAgIGV2ZW50TGFiZWw6IHN0YXRlLnR1dG9yaWFsID09IG51bGwgPyAnJyA6IHN0YXRlLnR1dG9yaWFsXG4gIH0pO1xuICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IGZhbHNlO1xufVxuXG5kcmF3RGF0YXNldFRodW1ibmFpbHMoKTtcbmluaXRUdXRvcmlhbCgpO1xubWFrZUdVSSgpO1xuZ2VuZXJhdGVEYXRhKHRydWUpO1xucmVzZXQodHJ1ZSk7XG5oaWRlQ29udHJvbHMoKTtcbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuaW1wb3J0ICogYXMgbm4gZnJvbSBcIi4vbm5cIjtcbmltcG9ydCAqIGFzIGRhdGFzZXQgZnJvbSBcIi4vZGF0YXNldFwiO1xuXG4vKiogU3VmZml4IGFkZGVkIHRvIHRoZSBzdGF0ZSB3aGVuIHN0b3JpbmcgaWYgYSBjb250cm9sIGlzIGhpZGRlbiBvciBub3QuICovXG5jb25zdCBISURFX1NUQVRFX1NVRkZJWCA9IFwiX2hpZGVcIjtcblxuLyoqIEEgbWFwIGJldHdlZW4gbmFtZXMgYW5kIGFjdGl2YXRpb24gZnVuY3Rpb25zLiAqL1xuZXhwb3J0IGxldCBhY3RpdmF0aW9uczoge1trZXk6IHN0cmluZ106IG5uLkFjdGl2YXRpb25GdW5jdGlvbn0gPSB7XG4gIFwicmVsdVwiOiBubi5BY3RpdmF0aW9ucy5SRUxVLFxuICBcInRhbmhcIjogbm4uQWN0aXZhdGlvbnMuVEFOSCxcbiAgXCJzaWdtb2lkXCI6IG5uLkFjdGl2YXRpb25zLlNJR01PSUQsXG59O1xuXG4vKiogQSBtYXAgYmV0d2VlbiBuYW1lcyBhbmQgcmVndWxhcml6YXRpb24gZnVuY3Rpb25zLiAqL1xuZXhwb3J0IGxldCByZWd1bGFyaXphdGlvbnM6IHtba2V5OiBzdHJpbmddOiBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9ufSA9IHtcbiAgXCJub25lXCI6IG51bGwsXG4gIFwiTDFcIjogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSxcbiAgXCJMMlwiOiBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyXG59O1xuXG4vKiogQSBtYXAgYmV0d2VlbiBkYXRhc2V0IG5hbWVzIGFuZCBmdW5jdGlvbnMgdGhhdCBnZW5lcmF0ZSBjbGFzc2lmaWNhdGlvbiBkYXRhLiAqL1xuZXhwb3J0IGxldCBkYXRhc2V0czoge1trZXk6IHN0cmluZ106IGRhdGFzZXQuRGF0YUdlbmVyYXRvcn0gPSB7XG4gIC8vXCJmbV9tdXRhdGlvbnNfaW5kZXBlbmRlbnRcIjogZGF0YXNldC5jbGFzc2lmeVhPUkRhdGEsXG4gIFwiZm1fbXV0YXRpb25zX2luZGVwZW5kZW50XCI6IGRhdGFzZXQuY2xhc3NpZnlGbU11dGF0aW9uc0luZGVwZW5kZW50LFxuICBcImZtX3NhbXBsZV9pbmRlcGVuZGVudFwiOiBkYXRhc2V0LmNsYXNzaWZ5Rm1TYW1wbGVJbmRlcGVuZGVudCxcbiAgXCJ0b3AxMDAwMEx1bmdNZWxcIjogZGF0YXNldC5jbGFzc2lmeXRvcDEwMDAwTHVuZ01lbCxcbiAgXCJ0b3AxMDAwTHVuZ01lbFwiOiBkYXRhc2V0LmNsYXNzaWZ5dG9wMTAwMEx1bmdNZWwsXG4gIFwidG9wMTAwTHVuZ01lbFwiOiBkYXRhc2V0LmNsYXNzaWZ5dG9wMTAwTHVuZ01lbCxcbiAgXCJ0b3AxMEx1bmdNZWxcIjogZGF0YXNldC5jbGFzc2lmeXRvcDEwTHVuZ01lbFxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gZGF0YXNldCBuYW1lcyBhbmQgZnVuY3Rpb25zIHRoYXQgZ2VuZXJhdGUgcmVncmVzc2lvbiBkYXRhLiAqL1xuZXhwb3J0IGxldCByZWdEYXRhc2V0czoge1trZXk6IHN0cmluZ106IGRhdGFzZXQuRGF0YUdlbmVyYXRvcn0gPSB7XG4gIFwiZm1fc2FtcGxlX2luZGVwZW5kZW50XCI6IGRhdGFzZXQucmVncmVzc0ZtU2FtcGxlSW5kZXBlbmRlbnQsXG4gIC8vXCJmbV9tdXRhdGlvbnNfaW5kZXBlbmRlbnRcIjogZGF0YXNldC5yZWdyZXNzUGxhbmUsXG4gIFwiZm1fbXV0YXRpb25zX2luZGVwZW5kZW50XCI6IGRhdGFzZXQucmVncmVzc0ZtTXV0YXRpb25zSW5kZXBlbmRlbnQsXG4gIFwidG9wMTAwMDBMdW5nTWVsXCI6IGRhdGFzZXQucmVncmVzc3RvcDEwMDAwTHVuZ01lbCxcbiAgXCJ0b3AxMDAwTHVuZ01lbFwiOiBkYXRhc2V0LnJlZ3Jlc3N0b3AxMDAwTHVuZ01lbCxcbiAgXCJ0b3AxMDBMdW5nTWVsXCI6IGRhdGFzZXQucmVncmVzc3RvcDEwMEx1bmdNZWwsXG4gIFwidG9wMTBMdW5nTWVsXCI6IGRhdGFzZXQucmVncmVzc3RvcDEwTHVuZ01lbFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUZyb21WYWx1ZShvYmo6IGFueSwgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBlbmRzV2l0aChzOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBzLnN1YnN0cigtc3VmZml4Lmxlbmd0aCkgPT09IHN1ZmZpeDtcbn1cblxuZnVuY3Rpb24gZ2V0SGlkZVByb3BzKG9iajogYW55KTogc3RyaW5nW10ge1xuICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xuICAgIGlmIChlbmRzV2l0aChwcm9wLCBISURFX1NUQVRFX1NVRkZJWCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHByb3ApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBkYXRhIHR5cGUgb2YgYSBzdGF0ZSB2YXJpYWJsZS4gVXNlZCBmb3IgZGV0ZXJtaW5pbmcgdGhlXG4gKiAoZGUpc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cbmV4cG9ydCBlbnVtIFR5cGUge1xuICBTVFJJTkcsXG4gIE5VTUJFUixcbiAgQVJSQVlfTlVNQkVSLFxuICBBUlJBWV9TVFJJTkcsXG4gIEJPT0xFQU4sXG4gIE9CSkVDVFxufVxuXG5leHBvcnQgZW51bSBQcm9ibGVtIHtcbiAgQ0xBU1NJRklDQVRJT04sXG4gIFJFR1JFU1NJT05cbn1cblxuZXhwb3J0IGxldCBwcm9ibGVtcyA9IHtcbiAgXCJjbGFzc2lmaWNhdGlvblwiOiBQcm9ibGVtLkNMQVNTSUZJQ0FUSU9OLFxuICBcInJlZ3Jlc3Npb25cIjogUHJvYmxlbS5SRUdSRVNTSU9OXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBUeXBlO1xuICBrZXlNYXA/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbn07XG5cbi8vIEFkZCB0aGUgR1VJIHN0YXRlLlxuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgUFJPUFM6IFByb3BlcnR5W10gPSBbXG4gICAge25hbWU6IFwiaXNQbGF5aW5nXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiYWN0aXZhdGlvblwiLCB0eXBlOiBUeXBlLk9CSkVDVCwga2V5TWFwOiBhY3RpdmF0aW9uc30sXG4gICAge25hbWU6IFwicmVndWxhcml6YXRpb25cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogcmVndWxhcml6YXRpb25zfSxcbiAgICB7bmFtZTogXCJiYXRjaFNpemVcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcImRhdGFzZXRcIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogZGF0YXNldHN9LFxuICAgIHtuYW1lOiBcInJlZ0RhdGFzZXRcIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogcmVnRGF0YXNldHN9LFxuICAgIHtuYW1lOiBcImxlYXJuaW5nUmF0ZVwiLCB0eXBlOiBUeXBlLk5VTUJFUn0sXG4gICAge25hbWU6IFwicmVndWxhcml6YXRpb25SYXRlXCIsIHR5cGU6IFR5cGUuTlVNQkVSfSxcbiAgICB7bmFtZTogXCJub2lzZVwiLCB0eXBlOiBUeXBlLk5VTUJFUn0sXG4gICAge25hbWU6IFwibmV0d29ya1NoYXBlXCIsIHR5cGU6IFR5cGUuQVJSQVlfTlVNQkVSfSxcbiAgICB7bmFtZTogXCJzZWVkXCIsIHR5cGU6IFR5cGUuU1RSSU5HfSxcbiAgICB7bmFtZTogXCJzaG93VGVzdERhdGFcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJkaXNjcmV0aXplXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwicGVyY1RyYWluRGF0YVwiLCB0eXBlOiBUeXBlLk5VTUJFUn0sXG4gICAge25hbWU6IFwiXzVBXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiXzVDXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiXzVHXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiXzVUXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiX0NBXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiX0NHXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiX0NUXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiX1RBXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiX1RDXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiX1RHXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiXzNBXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiXzNDXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiXzNHXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiXzNUXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiY29sbGVjdFN0YXRzXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwidHV0b3JpYWxcIiwgdHlwZTogVHlwZS5TVFJJTkd9LFxuICAgIHtuYW1lOiBcInByb2JsZW1cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogcHJvYmxlbXN9LFxuICAgIHtuYW1lOiBcImluaXRaZXJvXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiaGlkZVRleHRcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJ3ZWlnaHRzXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiYmlhc2VzXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gIF07XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIGxlYXJuaW5nUmF0ZSA9IDAuMTtcbiAgICByZWd1bGFyaXphdGlvblJhdGUgPSAwO1xuICAgIHNob3dUZXN0RGF0YSA9IGZhbHNlO1xuICAgIG5vaXNlID0gMjtcbiAgICBiYXRjaFNpemUgPSAxMDtcbiAgICBkaXNjcmV0aXplID0gZmFsc2U7XG4gICAgdHV0b3JpYWw6IHN0cmluZyA9IG51bGw7XG4gICAgcGVyY1RyYWluRGF0YSA9IDUwO1xuICAgIGFjdGl2YXRpb24gPSBubi5BY3RpdmF0aW9ucy5SRUxVO1xuICAgIHJlZ3VsYXJpemF0aW9uOiBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcm9ibGVtID0gUHJvYmxlbS5DTEFTU0lGSUNBVElPTjtcbiAgICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBpbml0WmVybyA9IGZhbHNlO1xuICAgIGhpZGVUZXh0ID0gZmFsc2U7XG4gICAgY29sbGVjdFN0YXRlcyA9IGZhbHNlO1xuICAgIG51bUhpZGRlbkxheWVycyA9IDU7XG4gICAgaGlkZGVuTGF5ZXJDb250cm9sczogYW55W10gPSBbXTtcbiAgICBuZXR3b3JrU2hhcGU6IG51bWJlcltdID0gWzEwLCAxMCwgMTAsIDEwLCAxMF07XG4gICAgXzVBID0gZmFsc2U7XG4gICAgXzVDID0gZmFsc2U7XG4gICAgXzVHID0gZmFsc2U7XG4gICAgXzVUID0gZmFsc2U7XG4gICAgX0NBID0gdHJ1ZTtcbiAgICBfQ0cgPSB0cnVlO1xuICAgIF9DVCA9IHRydWU7XG4gICAgX1RBID0gdHJ1ZTtcbiAgICBfVEMgPSB0cnVlO1xuICAgIF9URyA9IHRydWU7XG4gICAgXzNBID0gZmFsc2U7XG4gICAgXzNDID0gZmFsc2U7XG4gICAgXzNHID0gZmFsc2U7XG4gICAgXzNUID0gZmFsc2U7XG4gICAgZGF0YXNldDogZGF0YXNldC5EYXRhR2VuZXJhdG9yID0gZGF0YXNldC5jbGFzc2lmeVhPUkRhdGE7XG4gICAgcmVnRGF0YXNldDogZGF0YXNldC5EYXRhR2VuZXJhdG9yID0gZGF0YXNldC5yZWdyZXNzUGxhbmU7XG4gICAgc2VlZDogc3RyaW5nO1xuICAgIHdlaWdodHMgPSBmYWxzZTtcbiAgICBiaWFzZXMgPSBmYWxzZTtcblxuXG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgdGhlIHN0YXRlIGZyb20gdGhlIHVybCBoYXNoLlxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplU3RhdGUoKTogU3RhdGUge1xuICAgIGxldCBtYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZm9yIChsZXQga2V5dmFsdWUgb2Ygd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkuc3BsaXQoXCImXCIpKSB7XG4gICAgICBsZXQgW25hbWUsIHZhbHVlXSA9IGtleXZhbHVlLnNwbGl0KFwiPVwiKTtcbiAgICAgIG1hcFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcblxuICAgIGZ1bmN0aW9uIGhhc0tleShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBuYW1lIGluIG1hcCAmJiBtYXBbbmFtZV0gIT0gbnVsbCAmJiBtYXBbbmFtZV0udHJpbSgpICE9PSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlQXJyYXkodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiB2YWx1ZS50cmltKCkgPT09IFwiXCIgPyBbXSA6IHZhbHVlLnNwbGl0KFwiLFwiKTtcbiAgICB9XG5cbiAgICAvLyBEZXNlcmlhbGl6ZSByZWd1bGFyIHByb3BlcnRpZXMuXG4gICAgU3RhdGUuUFJPUFMuZm9yRWFjaCgoe25hbWUsIHR5cGUsIGtleU1hcH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFR5cGUuT0JKRUNUOlxuICAgICAgICAgIGlmIChrZXlNYXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJBIGtleS12YWx1ZSBtYXAgbXVzdCBiZSBwcm92aWRlZCBmb3Igc3RhdGUgXCIgK1xuICAgICAgICAgICAgICAgIFwidmFyaWFibGVzIG9mIHR5cGUgT2JqZWN0XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpICYmIG1hcFtuYW1lXSBpbiBrZXlNYXApIHtcbiAgICAgICAgICAgIHN0YXRlW25hbWVdID0ga2V5TWFwW21hcFtuYW1lXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuTlVNQkVSOlxuICAgICAgICAgIGlmIChoYXNLZXkobmFtZSkpIHtcbiAgICAgICAgICAgIC8vIFRoZSArIG9wZXJhdG9yIGlzIGZvciBjb252ZXJ0aW5nIGEgc3RyaW5nIHRvIGEgbnVtYmVyLlxuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSArbWFwW25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUeXBlLlNUUklORzpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IG1hcFtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5CT09MRUFOOlxuICAgICAgICAgIGlmIChoYXNLZXkobmFtZSkpIHtcbiAgICAgICAgICAgIHN0YXRlW25hbWVdID0gKG1hcFtuYW1lXSA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5BUlJBWV9OVU1CRVI6XG4gICAgICAgICAgaWYgKG5hbWUgaW4gbWFwKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IHBhcnNlQXJyYXkobWFwW25hbWVdKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5BUlJBWV9TVFJJTkc6XG4gICAgICAgICAgaWYgKG5hbWUgaW4gbWFwKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IHBhcnNlQXJyYXkobWFwW25hbWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgRXJyb3IoXCJFbmNvdW50ZXJlZCBhbiB1bmtub3duIHR5cGUgZm9yIGEgc3RhdGUgdmFyaWFibGVcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZXNlcmlhbGl6ZSBzdGF0ZSBwcm9wZXJ0aWVzIHRoYXQgY29ycmVzcG9uZCB0byBoaWRpbmcgVUkgY29udHJvbHMuXG4gICAgZ2V0SGlkZVByb3BzKG1hcCkuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIHN0YXRlW3Byb3BdID0gKG1hcFtwcm9wXSA9PT0gXCJ0cnVlXCIpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0pO1xuICAgIHN0YXRlLm51bUhpZGRlbkxheWVycyA9IHN0YXRlLm5ldHdvcmtTaGFwZS5sZW5ndGg7XG4gICAgaWYgKHN0YXRlLnNlZWQgPT0gbnVsbCkge1xuICAgICAgc3RhdGUuc2VlZCA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCg1KTtcbiAgICB9XG4gICAgTWF0aC5zZWVkcmFuZG9tKHN0YXRlLnNlZWQpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIHRoZSBzdGF0ZSBpbnRvIHRoZSB1cmwgaGFzaC5cbiAgICovXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBTZXJpYWxpemUgcmVndWxhciBwcm9wZXJ0aWVzLlxuICAgIGxldCBwcm9wczogc3RyaW5nW10gPSBbXTtcbiAgICBTdGF0ZS5QUk9QUy5mb3JFYWNoKCh7bmFtZSwgdHlwZSwga2V5TWFwfSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgIC8vIERvbid0IHNlcmlhbGl6ZSBtaXNzaW5nIHZhbHVlcy5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBUeXBlLk9CSkVDVCkge1xuICAgICAgICB2YWx1ZSA9IGdldEtleUZyb21WYWx1ZShrZXlNYXAsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVHlwZS5BUlJBWV9OVU1CRVIgfHxcbiAgICAgICAgICB0eXBlID09PSBUeXBlLkFSUkFZX1NUUklORykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oXCIsXCIpO1xuICAgICAgfVxuICAgICAgcHJvcHMucHVzaChgJHtuYW1lfT0ke3ZhbHVlfWApO1xuICAgIH0pO1xuICAgIC8vIFNlcmlhbGl6ZSBwcm9wZXJ0aWVzIHRoYXQgY29ycmVzcG9uZCB0byBoaWRpbmcgVUkgY29udHJvbHMuXG4gICAgZ2V0SGlkZVByb3BzKHRoaXMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBwcm9wcy5wdXNoKGAke3Byb3B9PSR7dGhpc1twcm9wXX1gKTtcbiAgICB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHByb3BzLmpvaW4oXCImXCIpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYWxsIHRoZSBoaWRkZW4gcHJvcGVydGllcy4gKi9cbiAgZ2V0SGlkZGVuUHJvcHMoKTogc3RyaW5nW10ge1xuICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAoZW5kc1dpdGgocHJvcCwgSElERV9TVEFURV9TVUZGSVgpICYmICBTdHJpbmcodGhpc1twcm9wXSkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHByb3AucmVwbGFjZShISURFX1NUQVRFX1NVRkZJWCwgXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0SGlkZVByb3BlcnR5KG5hbWU6IHN0cmluZywgaGlkZGVuOiBib29sZWFuKSB7XG4gICAgdGhpc1tuYW1lICsgSElERV9TVEFURV9TVUZGSVhdID0gaGlkZGVuO1xuICB9XG59XG4iXX0=
