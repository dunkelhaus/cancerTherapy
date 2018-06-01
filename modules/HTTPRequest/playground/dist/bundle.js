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
    function genFmMutationsIndependent() {
    }
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
var xDomain = [-6, 6];
var heatMap = new heatmap_1.HeatMap(300, DENSITY, xDomain, xDomain, d3.select("#heatmap"), { showAxes: true });
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
    "fm_mutations_independent": dataset.classifyXORData,
    "fm_sample_independent": dataset.classifyFmSampleIndependent,
    "top10000LungMel": dataset.classifytop10000LungMel,
    "top1000LungMel": dataset.classifytop1000LungMel,
    "top100LungMel": dataset.classifytop100LungMel,
    "top10LungMel": dataset.classifytop10LungMel
};
exports.regDatasets = {
    "fm_sample_independent": dataset.regressFmSampleIndependent,
    "fm_mutations_independent": dataset.regressPlane,
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
        this.noise = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YXNldC50cyIsInNyYy9oZWF0bWFwLnRzIiwic3JjL2xpbmVjaGFydC50cyIsInNyYy9ubi50cyIsInNyYy9wbGF5Z3JvdW5kLnRzIiwic3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ2tDQSxpQkFBd0IsS0FBWTtJQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBRW5CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUU1QyxPQUFPLEVBQUUsQ0FBQztRQUVWLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUM7QUFJRCx3Q0FBK0MsVUFBa0IsRUFBRSxLQUFhO0lBRTlFLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7SUFFN0I7SUFHQSxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBVEQsd0VBU0M7QUFHRCxxQ0FBNEMsVUFBa0IsRUFBRSxLQUFhO0lBRTNFLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7SUFFN0I7SUFHQSxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBVEQsa0VBU0M7QUFHRCxpQ0FBd0MsVUFBa0IsRUFBRSxLQUFhO0lBRXZFLElBQUks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QUssR0FBRyxjQUFjLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxHQUFBLEVBQUUsQ0FBQyxHQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xELElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FB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QUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ3BDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7SUFDcEMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztJQUNwQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQ3BDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7SUFDckMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztJQUNyQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDO0lBQ3JDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUM7SUFDckMsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQztJQUNyQyxLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FB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QUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7SUFDL0MsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO0lBQ2xDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBQztJQUMvQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQzFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUN4QyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDakMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsZ0JBQVEsRUFBQztJQUN0RCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7SUFDdEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDO0lBQ3RDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQztJQUNyQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUM7Q0FDckMsQ0FBQztBQXJDUyxzQkFBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4vKipcbiAqIEEgdHdvIGRpbWVuc2lvbmFsIGV4YW1wbGU6IHggYW5kIHkgY29vcmRpbmF0ZXMgd2l0aCB0aGUgbGFiZWwuXG4gKi9cbmV4cG9ydCB0eXBlIEV4YW1wbGUyRCA9IHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIGxhYmVsOiBudW1iZXJcbn07XG5cbnR5cGUgUG9pbnQgPSB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyXG59O1xuXG5cbi8qKlxuICogU2h1ZmZsZXMgdGhlIGFycmF5IHVzaW5nIEZpc2hlci1ZYXRlcyBhbGdvcml0aG0uIFVzZXMgdGhlIHNlZWRyYW5kb21cbiAqIGxpYnJhcnkgYXMgdGhlIHJhbmRvbSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlKGFycmF5OiBhbnlbXSk6IHZvaWQge1xuICBsZXQgY291bnRlciA9IGFycmF5Lmxlbmd0aDtcbiAgbGV0IHRlbXAgPSAwO1xuICBsZXQgaW5kZXggPSAwO1xuICAvLyBXaGlsZSB0aGVyZSBhcmUgZWxlbWVudHMgaW4gdGhlIGFycmF5XG4gIHdoaWxlIChjb3VudGVyID4gMCkge1xuICAgIC8vIFBpY2sgYSByYW5kb20gaW5kZXhcbiAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvdW50ZXIpO1xuICAgIC8vIERlY3JlYXNlIGNvdW50ZXIgYnkgMVxuICAgIGNvdW50ZXItLTtcbiAgICAvLyBBbmQgc3dhcCB0aGUgbGFzdCBlbGVtZW50IHdpdGggaXRcbiAgICB0ZW1wID0gYXJyYXlbY291bnRlcl07XG4gICAgYXJyYXlbY291bnRlcl0gPSBhcnJheVtpbmRleF07XG4gICAgYXJyYXlbaW5kZXhdID0gdGVtcDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEYXRhR2VuZXJhdG9yID0gKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcikgPT4gRXhhbXBsZTJEW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZtTXV0YXRpb25zSW5kZXBlbmRlbnQobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuRm1NdXRhdGlvbnNJbmRlcGVuZGVudCgpIHtcbiAgICBcbiAgICBcbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZtU2FtcGxlSW5kZXBlbmRlbnQobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuRm1TYW1wbGVJbmRlcGVuZGVudCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnl0b3AxMDAwMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuQ2xhc3NpZnlUb3AxMDAwMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnl0b3AxMDAwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5DbGFzc2lmeVRvcDEwMDAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5dG9wMTAwTHVuZ01lbChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBmdW5jdGlvbiBnZW5DbGFzc2lmeVRvcDEwMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnl0b3AxMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuQ2xhc3NpZnlUb3AxMCgpIHtcblxuXG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NGbU11dGF0aW9uc0luZGVwZW5kZW50KG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlbkZtTXV0YXRpb25zSW5kZXBlbmRlbnQoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NGbVNhbXBsZUluZGVwZW5kZW50KG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldEZtU2FtcGxlSW5kZXBlbmRlbnQoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3N0b3AxMDAwMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuUmVncmVzc1RvcDEwMDAwKCkge1xuXG5cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzdG9wMTAwMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuUmVncmVzc1RvcDEwMDAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3N0b3AxMDBMdW5nTWVsKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlblJlZ3Jlc3NUb3AxMDAoKSB7XG5cblxuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3N0b3AxMEx1bmdNZWwobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgZnVuY3Rpb24gZ2VuUmVncmVzc1RvcDEwKCkge1xuXG5cbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWdyZXNzUGxhbmUobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgRXhhbXBsZTJEW10ge1xuICBsZXQgcmFkaXVzID0gNjtcbiAgbGV0IGxhYmVsU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgIC5kb21haW4oWy0xMCwgMTBdKVxuICAgIC5yYW5nZShbLTEsIDFdKTtcbiAgbGV0IGdldExhYmVsID0gKHgsIHkpID0+IGxhYmVsU2NhbGUoeCArIHkpO1xuXG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlczsgaSsrKSB7XG4gICAgbGV0IHggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCB5ID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKTtcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0TGFiZWwoeCArIG5vaXNlWCwgeSArIG5vaXNlWSk7XG4gICAgcG9pbnRzLnB1c2goe3gsIHksIGxhYmVsfSk7XG4gIH1cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NHYXVzc2lhbihudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgbGV0IGxhYmVsU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgIC5kb21haW4oWzAsIDJdKVxuICAgIC5yYW5nZShbMSwgMF0pXG4gICAgLmNsYW1wKHRydWUpO1xuXG4gIGxldCBnYXVzc2lhbnMgPSBbXG4gICAgWy00LCAyLjUsIDFdLFxuICAgIFswLCAyLjUsIC0xXSxcbiAgICBbNCwgMi41LCAxXSxcbiAgICBbLTQsIC0yLjUsIC0xXSxcbiAgICBbMCwgLTIuNSwgMV0sXG4gICAgWzQsIC0yLjUsIC0xXVxuICBdO1xuXG4gIGZ1bmN0aW9uIGdldExhYmVsKHgsIHkpIHtcbiAgICAvLyBDaG9vc2UgdGhlIG9uZSB0aGF0IGlzIG1heGltdW0gaW4gYWJzIHZhbHVlLlxuICAgIGxldCBsYWJlbCA9IDA7XG4gICAgZ2F1c3NpYW5zLmZvckVhY2goKFtjeCwgY3ksIHNpZ25dKSA9PiB7XG4gICAgICBsZXQgbmV3TGFiZWwgPSBzaWduICogbGFiZWxTY2FsZShkaXN0KHt4LCB5fSwge3g6IGN4LCB5OiBjeX0pKTtcbiAgICAgIGlmIChNYXRoLmFicyhuZXdMYWJlbCkgPiBNYXRoLmFicyhsYWJlbCkpIHtcbiAgICAgICAgbGFiZWwgPSBuZXdMYWJlbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbiAgbGV0IHJhZGl1cyA9IDY7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlczsgaSsrKSB7XG4gICAgbGV0IHggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCB5ID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKTtcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0TGFiZWwoeCArIG5vaXNlWCwgeSArIG5vaXNlWSk7XG4gICAgcG9pbnRzLnB1c2goe3gsIHksIGxhYmVsfSk7XG4gIH07XG4gIHJldHVybiBwb2ludHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Q2lyY2xlRGF0YShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgbGV0IHJhZGl1cyA9IDU7XG4gIGZ1bmN0aW9uIGdldENpcmNsZUxhYmVsKHA6IFBvaW50LCBjZW50ZXI6IFBvaW50KSB7XG4gICAgcmV0dXJuIChkaXN0KHAsIGNlbnRlcikgPCAocmFkaXVzICogMC41KSkgPyAxIDogLTE7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBwb3NpdGl2ZSBwb2ludHMgaW5zaWRlIHRoZSBjaXJjbGUuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlcyAvIDI7IGkrKykge1xuICAgIGxldCByID0gcmFuZFVuaWZvcm0oMCwgcmFkaXVzICogMC41KTtcbiAgICBsZXQgYW5nbGUgPSByYW5kVW5pZm9ybSgwLCAyICogTWF0aC5QSSk7XG4gICAgbGV0IHggPSByICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGxldCB5ID0gciAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0Q2lyY2xlTGFiZWwoe3g6IHggKyBub2lzZVgsIHk6IHkgKyBub2lzZVl9LCB7eDogMCwgeTogMH0pO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgbmVnYXRpdmUgcG9pbnRzIG91dHNpZGUgdGhlIGNpcmNsZS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzIC8gMjsgaSsrKSB7XG4gICAgbGV0IHIgPSByYW5kVW5pZm9ybShyYWRpdXMgKiAwLjcsIHJhZGl1cyk7XG4gICAgbGV0IGFuZ2xlID0gcmFuZFVuaWZvcm0oMCwgMiAqIE1hdGguUEkpO1xuICAgIGxldCB4ID0gciAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICBsZXQgeSA9IHIgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgbGV0IG5vaXNlWCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbm9pc2VZID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBsYWJlbCA9IGdldENpcmNsZUxhYmVsKHt4OiB4ICsgbm9pc2VYLCB5OiB5ICsgbm9pc2VZfSwge3g6IDAsIHk6IDB9KTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlYT1JEYXRhKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBmdW5jdGlvbiBnZXRYT1JMYWJlbChwOiBQb2ludCkgeyByZXR1cm4gcC54ICogcC55ID49IDAgPyAxIDogLTE7IH1cblxuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNhbXBsZXM7IGkrKykge1xuICAgIGxldCB4ID0gcmFuZFVuaWZvcm0oLTUsIDUpO1xuICAgIGxldCBwYWRkaW5nID0gMC4zO1xuICAgIHggKz0geCA+IDAgPyBwYWRkaW5nIDogLXBhZGRpbmc7ICAvLyBQYWRkaW5nLlxuICAgIGxldCB5ID0gcmFuZFVuaWZvcm0oLTUsIDUpO1xuICAgIHkgKz0geSA+IDAgPyBwYWRkaW5nIDogLXBhZGRpbmc7XG4gICAgbGV0IG5vaXNlWCA9IHJhbmRVbmlmb3JtKC01LCA1KSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtNSwgNSkgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRYT1JMYWJlbCh7eDogeCArIG5vaXNlWCwgeTogeSArIG5vaXNlWX0pO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNhbXBsZSBmcm9tIGEgdW5pZm9ybSBbYSwgYl0gZGlzdHJpYnV0aW9uLlxuICogVXNlcyB0aGUgc2VlZHJhbmRvbSBsaWJyYXJ5IGFzIHRoZSByYW5kb20gZ2VuZXJhdG9yLlxuICovXG5mdW5jdGlvbiByYW5kVW5pZm9ybShhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChiIC0gYSkgKyBhO1xufVxuXG4vKipcbiAqIFNhbXBsZXMgZnJvbSBhIG5vcm1hbCBkaXN0cmlidXRpb24uIFVzZXMgdGhlIHNlZWRyYW5kb20gbGlicmFyeSBhcyB0aGVcbiAqIHJhbmRvbSBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtIG1lYW4gVGhlIG1lYW4uIERlZmF1bHQgaXMgMC5cbiAqIEBwYXJhbSB2YXJpYW5jZSBUaGUgdmFyaWFuY2UuIERlZmF1bHQgaXMgMS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsUmFuZG9tKG1lYW4gPSAwLCB2YXJpYW5jZSA9IDEpOiBudW1iZXIge1xuICBsZXQgdjE6IG51bWJlciwgdjI6IG51bWJlciwgczogbnVtYmVyO1xuICBkbyB7XG4gICAgdjEgPSAyICogTWF0aC5yYW5kb20oKSAtIDE7XG4gICAgdjIgPSAyICogTWF0aC5yYW5kb20oKSAtIDE7XG4gICAgcyA9IHYxICogdjEgKyB2MiAqIHYyO1xuICB9IHdoaWxlIChzID4gMSk7XG5cbiAgbGV0IHJlc3VsdCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHMpIC8gcykgKiB2MTtcbiAgcmV0dXJuIG1lYW4gKyBNYXRoLnNxcnQodmFyaWFuY2UpICogcmVzdWx0O1xufVxuXG4vKiogUmV0dXJucyB0aGUgZXVjbGVkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50cyBpbiBzcGFjZS4gKi9cbmZ1bmN0aW9uIGRpc3QoYTogUG9pbnQsIGI6IFBvaW50KTogbnVtYmVyIHtcbiAgbGV0IGR4ID0gYS54IC0gYi54O1xuICBsZXQgZHkgPSBhLnkgLSBiLnk7XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5pbXBvcnQge0V4YW1wbGUyRH0gZnJvbSBcIi4vZGF0YXNldFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXRNYXBTZXR0aW5ncyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgc2hvd0F4ZXM/OiBib29sZWFuO1xuICBub1N2Zz86IGJvb2xlYW47XG59XG5cbi8qKiBOdW1iZXIgb2YgZGlmZmVyZW50IHNoYWRlcyAoY29sb3JzKSB3aGVuIGRyYXdpbmcgYSBncmFkaWVudCBoZWF0bWFwICovXG5jb25zdCBOVU1fU0hBREVTID0gMzA7XG5cbi8qKlxuICogRHJhd3MgYSBoZWF0bWFwIHVzaW5nIGNhbnZhcy4gVXNlZCBmb3Igc2hvd2luZyB0aGUgbGVhcm5lZCBkZWNpc2lvblxuICogYm91bmRhcnkgb2YgdGhlIGNsYXNzaWZpY2F0aW9uIGFsZ29yaXRobS4gQ2FuIGFsc28gZHJhdyBkYXRhIHBvaW50c1xuICogdXNpbmcgYW4gc3ZnIG92ZXJsYXllZCBvbiB0b3Agb2YgdGhlIGNhbnZhcyBoZWF0bWFwLlxuICovXG5leHBvcnQgY2xhc3MgSGVhdE1hcCB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IEhlYXRNYXBTZXR0aW5ncyA9IHtcbiAgICBzaG93QXhlczogZmFsc2UsXG4gICAgbm9Tdmc6IGZhbHNlXG4gIH07XG4gIHByaXZhdGUgeFNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIHlTY2FsZTogZDMuc2NhbGUuTGluZWFyPG51bWJlciwgbnVtYmVyPjtcbiAgcHJpdmF0ZSBudW1TYW1wbGVzOiBudW1iZXI7XG4gIHByaXZhdGUgY29sb3I6IGQzLnNjYWxlLlF1YW50aXplPHN0cmluZz47XG4gIHByaXZhdGUgY2FudmFzOiBkMy5TZWxlY3Rpb248YW55PjtcbiAgcHJpdmF0ZSBzdmc6IGQzLlNlbGVjdGlvbjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgd2lkdGg6IG51bWJlciwgbnVtU2FtcGxlczogbnVtYmVyLCB4RG9tYWluOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgeURvbWFpbjogW251bWJlciwgbnVtYmVyXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PixcbiAgICAgIHVzZXJTZXR0aW5ncz86IEhlYXRNYXBTZXR0aW5ncykge1xuICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgbGV0IGhlaWdodCA9IHdpZHRoO1xuICAgIGxldCBwYWRkaW5nID0gdXNlclNldHRpbmdzLnNob3dBeGVzID8gMjAgOiAwO1xuXG4gICAgaWYgKHVzZXJTZXR0aW5ncyAhPSBudWxsKSB7XG4gICAgICAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHRzIHdpdGggdGhlIHVzZXItc3BlY2lmaWVkIHNldHRpbmdzLlxuICAgICAgZm9yIChsZXQgcHJvcCBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1twcm9wXSA9IHVzZXJTZXR0aW5nc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAuZG9tYWluKHhEb21haW4pXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoIC0gMiAqIHBhZGRpbmddKTtcblxuICAgIHRoaXMueVNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgIC5kb21haW4oeURvbWFpbilcbiAgICAgIC5yYW5nZShbaGVpZ2h0IC0gMiAqIHBhZGRpbmcsIDBdKTtcblxuICAgIC8vIEdldCBhIHJhbmdlIG9mIGNvbG9ycy5cbiAgICBsZXQgdG1wU2NhbGUgPSBkMy5zY2FsZS5saW5lYXI8c3RyaW5nLCBzdHJpbmc+KClcbiAgICAgICAgLmRvbWFpbihbMCwgLjUsIDFdKVxuICAgICAgICAucmFuZ2UoW1wiI2Y1OTMyMlwiLCBcIiNlOGVhZWJcIiwgXCIjMDg3N2JkXCJdKVxuICAgICAgICAuY2xhbXAodHJ1ZSk7XG4gICAgLy8gRHVlIHRvIG51bWVyaWNhbCBlcnJvciwgd2UgbmVlZCB0byBzcGVjaWZ5XG4gICAgLy8gZDMucmFuZ2UoMCwgZW5kICsgc21hbGxfZXBzaWxvbiwgc3RlcClcbiAgICAvLyBpbiBvcmRlciB0byBndWFyYW50ZWUgdGhhdCB3ZSB3aWxsIGhhdmUgZW5kL3N0ZXAgZW50cmllcyB3aXRoXG4gICAgLy8gdGhlIGxhc3QgZWxlbWVudCBiZWluZyBlcXVhbCB0byBlbmQuXG4gICAgbGV0IGNvbG9ycyA9IGQzLnJhbmdlKDAsIDEgKyAxRS05LCAxIC8gTlVNX1NIQURFUykubWFwKGEgPT4ge1xuICAgICAgcmV0dXJuIHRtcFNjYWxlKGEpO1xuICAgIH0pO1xuICAgIHRoaXMuY29sb3IgPSBkMy5zY2FsZS5xdWFudGl6ZTxzdHJpbmc+KClcbiAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWy0xLCAxXSlcbiAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShjb2xvcnMpO1xuXG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKHtcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB0b3A6IGAtJHtwYWRkaW5nfXB4YCxcbiAgICAgICAgbGVmdDogYC0ke3BhZGRpbmd9cHhgXG4gICAgICB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IGNvbnRhaW5lci5hcHBlbmQoXCJjYW52YXNcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgbnVtU2FtcGxlcylcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIG51bVNhbXBsZXMpXG4gICAgICAuc3R5bGUoXCJ3aWR0aFwiLCAod2lkdGggLSAyICogcGFkZGluZykgKyBcInB4XCIpXG4gICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgKGhlaWdodCAtIDIgKiBwYWRkaW5nKSArIFwicHhcIilcbiAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgIC5zdHlsZShcInRvcFwiLCBgJHtwYWRkaW5nfXB4YClcbiAgICAgIC5zdHlsZShcImxlZnRcIiwgYCR7cGFkZGluZ31weGApO1xuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLm5vU3ZnKSB7XG4gICAgICB0aGlzLnN2ZyA9IGNvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cih7XG4gICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aCxcbiAgICAgICAgICBcImhlaWdodFwiOiBoZWlnaHRcbiAgICAgIH0pLnN0eWxlKHtcbiAgICAgICAgLy8gT3ZlcmxheSB0aGUgc3ZnIG9uIHRvcCBvZiB0aGUgY2FudmFzLlxuICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJsZWZ0XCI6IFwiMFwiLFxuICAgICAgICBcInRvcFwiOiBcIjBcIlxuICAgICAgfSkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cGFkZGluZ30sJHtwYWRkaW5nfSlgKTtcblxuICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0cmFpblwiKTtcbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGVzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93QXhlcykge1xuICAgICAgbGV0IHhBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgICAgICAuc2NhbGUodGhpcy54U2NhbGUpXG4gICAgICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbiAgICAgIGxldCB5QXhpcyA9IGQzLnN2Zy5heGlzKClcbiAgICAgICAgLnNjYWxlKHRoaXMueVNjYWxlKVxuICAgICAgICAub3JpZW50KFwicmlnaHRcIik7XG5cbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHQgLSAyICogcGFkZGluZ30pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAod2lkdGggLSAyICogcGFkZGluZykgKyBcIiwwKVwiKVxuICAgICAgICAuY2FsbCh5QXhpcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGVzdFBvaW50cyhwb2ludHM6IEV4YW1wbGUyRFtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mubm9TdmcpIHtcbiAgICAgIHRocm93IEVycm9yKFwiQ2FuJ3QgYWRkIHBvaW50cyBzaW5jZSBub1N2Zz10cnVlXCIpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNpcmNsZXModGhpcy5zdmcuc2VsZWN0KFwiZy50ZXN0XCIpLCBwb2ludHMpO1xuICB9XG5cbiAgdXBkYXRlUG9pbnRzKHBvaW50czogRXhhbXBsZTJEW10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5ub1N2Zykge1xuICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBhZGQgcG9pbnRzIHNpbmNlIG5vU3ZnPXRydWVcIik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2lyY2xlcyh0aGlzLnN2Zy5zZWxlY3QoXCJnLnRyYWluXCIpLCBwb2ludHMpO1xuICB9XG5cbiAgdXBkYXRlQmFja2dyb3VuZChkYXRhOiBudW1iZXJbXVtdLCBkaXNjcmV0aXplOiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGR4ID0gZGF0YVswXS5sZW5ndGg7XG4gICAgbGV0IGR5ID0gZGF0YS5sZW5ndGg7XG5cbiAgICBpZiAoZHggIT09IHRoaXMubnVtU2FtcGxlcyB8fCBkeSAhPT0gdGhpcy5udW1TYW1wbGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJUaGUgcHJvdmlkZWQgZGF0YSBtYXRyaXggbXVzdCBiZSBvZiBzaXplIFwiICtcbiAgICAgICAgICBcIm51bVNhbXBsZXMgWCBudW1TYW1wbGVzXCIpO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgdGhlIHBpeGVsIGNvbG9yczsgc2NhbGVkIGJ5IENTUy5cbiAgICBsZXQgY29udGV4dCA9ICh0aGlzLmNhbnZhcy5ub2RlKCkgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgaW1hZ2UgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YShkeCwgZHkpO1xuXG4gICAgZm9yIChsZXQgeSA9IDAsIHAgPSAtMTsgeSA8IGR5OyArK3kpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZHg7ICsreCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW3hdW3ldO1xuICAgICAgICBpZiAoZGlzY3JldGl6ZSkge1xuICAgICAgICAgIHZhbHVlID0gKHZhbHVlID49IDAgPyAxIDogLTEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjID0gZDMucmdiKHRoaXMuY29sb3IodmFsdWUpKTtcbiAgICAgICAgaW1hZ2UuZGF0YVsrK3BdID0gYy5yO1xuICAgICAgICBpbWFnZS5kYXRhWysrcF0gPSBjLmc7XG4gICAgICAgIGltYWdlLmRhdGFbKytwXSA9IGMuYjtcbiAgICAgICAgaW1hZ2UuZGF0YVsrK3BdID0gMTYwO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZSwgMCwgMCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNpcmNsZXMoY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PiwgcG9pbnRzOiBFeGFtcGxlMkRbXSkge1xuICAgIC8vIEtlZXAgb25seSBwb2ludHMgdGhhdCBhcmUgaW5zaWRlIHRoZSBib3VuZHMuXG4gICAgbGV0IHhEb21haW4gPSB0aGlzLnhTY2FsZS5kb21haW4oKTtcbiAgICBsZXQgeURvbWFpbiA9IHRoaXMueVNjYWxlLmRvbWFpbigpO1xuICAgIHBvaW50cyA9IHBvaW50cy5maWx0ZXIocCA9PiB7XG4gICAgICByZXR1cm4gcC54ID49IHhEb21haW5bMF0gJiYgcC54IDw9IHhEb21haW5bMV1cbiAgICAgICAgJiYgcC55ID49IHlEb21haW5bMF0gJiYgcC55IDw9IHlEb21haW5bMV07XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggZGF0YSB0byBpbml0aWFsbHkgZW1wdHkgc2VsZWN0aW9uLlxuICAgIGxldCBzZWxlY3Rpb24gPSBjb250YWluZXIuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEocG9pbnRzKTtcblxuICAgIC8vIEluc2VydCBlbGVtZW50cyB0byBtYXRjaCBsZW5ndGggb2YgcG9pbnRzIGFycmF5LlxuICAgIHNlbGVjdGlvbi5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiclwiLCAzKTtcblxuICAgIC8vIFVwZGF0ZSBwb2ludHMgdG8gYmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgc2VsZWN0aW9uXG4gICAgICAuYXR0cih7XG4gICAgICAgIGN4OiAoZDogRXhhbXBsZTJEKSA9PiB0aGlzLnhTY2FsZShkLngpLFxuICAgICAgICBjeTogKGQ6IEV4YW1wbGUyRCkgPT4gdGhpcy55U2NhbGUoZC55KSxcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gdGhpcy5jb2xvcihkLmxhYmVsKSk7XG5cbiAgICAvLyBSZW1vdmUgcG9pbnRzIGlmIHRoZSBsZW5ndGggaGFzIGdvbmUgZG93bi5cbiAgICBzZWxlY3Rpb24uZXhpdCgpLnJlbW92ZSgpO1xuICB9XG59ICAvLyBDbG9zZSBjbGFzcyBIZWF0TWFwLlxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlTWF0cml4KG1hdHJpeDogbnVtYmVyW11bXSwgZmFjdG9yOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgaWYgKG1hdHJpeC5sZW5ndGggIT09IG1hdHJpeFswXS5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvdmlkZWQgbWF0cml4IG11c3QgYmUgYSBzcXVhcmUgbWF0cml4XCIpO1xuICB9XG4gIGlmIChtYXRyaXgubGVuZ3RoICUgZmFjdG9yICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHdpZHRoL2hlaWdodCBvZiB0aGUgbWF0cml4IG11c3QgYmUgZGl2aXNpYmxlIGJ5IFwiICtcbiAgICAgICAgXCJ0aGUgcmVkdWN0aW9uIGZhY3RvclwiKTtcbiAgfVxuICBsZXQgcmVzdWx0OiBudW1iZXJbXVtdID0gbmV3IEFycmF5KG1hdHJpeC5sZW5ndGggLyBmYWN0b3IpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkgKz0gZmFjdG9yKSB7XG4gICAgcmVzdWx0W2kgLyBmYWN0b3JdID0gbmV3IEFycmF5KG1hdHJpeC5sZW5ndGggLyBmYWN0b3IpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4Lmxlbmd0aDsgaiArPSBmYWN0b3IpIHtcbiAgICAgIGxldCBhdmcgPSAwO1xuICAgICAgLy8gU3VtIGFsbCB0aGUgdmFsdWVzIGluIHRoZSBuZWlnaGJvcmhvb2QuXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZhY3RvcjsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgZmFjdG9yOyBsKyspIHtcbiAgICAgICAgICBhdmcgKz0gbWF0cml4W2kgKyBrXVtqICsgbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF2ZyAvPSAoZmFjdG9yICogZmFjdG9yKTtcbiAgICAgIHJlc3VsdFtpIC8gZmFjdG9yXVtqIC8gZmFjdG9yXSA9IGF2ZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnR5cGUgRGF0YVBvaW50ID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcltdO1xufTtcblxuLyoqXG4gKiBBIG11bHRpLXNlcmllcyBsaW5lIGNoYXJ0IHRoYXQgYWxsb3dzIHlvdSB0byBhcHBlbmQgbmV3IGRhdGEgcG9pbnRzXG4gKiBhcyBkYXRhIGJlY29tZXMgYXZhaWxhYmxlLlxuICovXG5leHBvcnQgY2xhc3MgQXBwZW5kaW5nTGluZUNoYXJ0IHtcbiAgcHJpdmF0ZSBudW1MaW5lczogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFQb2ludFtdID0gW107XG4gIHByaXZhdGUgc3ZnOiBkMy5TZWxlY3Rpb248YW55PjtcbiAgcHJpdmF0ZSB4U2NhbGU6IGQzLnNjYWxlLkxpbmVhcjxudW1iZXIsIG51bWJlcj47XG4gIHByaXZhdGUgeVNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIHBhdGhzOiBBcnJheTxkMy5TZWxlY3Rpb248YW55Pj47XG4gIHByaXZhdGUgbGluZUNvbG9yczogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSBtaW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgcHJpdmF0ZSBtYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LCBsaW5lQ29sb3JzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubGluZUNvbG9ycyA9IGxpbmVDb2xvcnM7XG4gICAgdGhpcy5udW1MaW5lcyA9IGxpbmVDb2xvcnMubGVuZ3RoO1xuICAgIGxldCBub2RlID0gY29udGFpbmVyLm5vZGUoKSBhcyBIVE1MRWxlbWVudDtcbiAgICBsZXQgdG90YWxXaWR0aCA9IG5vZGUub2Zmc2V0V2lkdGg7XG4gICAgbGV0IHRvdGFsSGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IG1hcmdpbiA9IHt0b3A6IDIsIHJpZ2h0OiAwLCBib3R0b206IDIsIGxlZnQ6IDJ9O1xuICAgIGxldCB3aWR0aCA9IHRvdGFsV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBsZXQgaGVpZ2h0ID0gdG90YWxIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDBdKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMF0pXG4gICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4gICAgdGhpcy5zdmcgPSBjb250YWluZXIuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcblxuICAgIHRoaXMucGF0aHMgPSBuZXcgQXJyYXkodGhpcy5udW1MaW5lcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpbmVzOyBpKyspIHtcbiAgICAgIHRoaXMucGF0aHNbaV0gPSB0aGlzLnN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgIC5zdHlsZSh7XG4gICAgICAgICAgXCJmaWxsXCI6IFwibm9uZVwiLFxuICAgICAgICAgIFwic3Ryb2tlXCI6IGxpbmVDb2xvcnNbaV0sXG4gICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXCIxLjVweFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMucmVkcmF3KCk7XG4gICAgdGhpcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB0aGlzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICB9XG5cbiAgYWRkRGF0YVBvaW50KGRhdGFQb2ludDogbnVtYmVyW10pIHtcbiAgICBpZiAoZGF0YVBvaW50Lmxlbmd0aCAhPT0gdGhpcy5udW1MaW5lcykge1xuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgZGF0YVBvaW50IG11c3QgZXF1YWwgbnVtYmVyIG9mIGxpbmVzXCIpO1xuICAgIH1cbiAgICBkYXRhUG9pbnQuZm9yRWFjaCh5ID0+IHtcbiAgICAgIHRoaXMubWluWSA9IE1hdGgubWluKHRoaXMubWluWSwgeSk7XG4gICAgICB0aGlzLm1heFkgPSBNYXRoLm1heCh0aGlzLm1heFksIHkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhLnB1c2goe3g6IHRoaXMuZGF0YS5sZW5ndGggKyAxLCB5OiBkYXRhUG9pbnR9KTtcbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWRyYXcoKSB7XG4gICAgLy8gQWRqdXN0IHRoZSB4IGFuZCB5IGRvbWFpbi5cbiAgICB0aGlzLnhTY2FsZS5kb21haW4oWzEsIHRoaXMuZGF0YS5sZW5ndGhdKTtcbiAgICB0aGlzLnlTY2FsZS5kb21haW4oW3RoaXMubWluWSwgdGhpcy5tYXhZXSk7XG4gICAgLy8gQWRqdXN0IGFsbCB0aGUgPHBhdGg+IGVsZW1lbnRzIChsaW5lcykuXG4gICAgbGV0IGdldFBhdGhNYXAgPSAobGluZUluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiBkMy5zdmcubGluZTxEYXRhUG9pbnQ+KClcbiAgICAgIC54KGQgPT4gdGhpcy54U2NhbGUoZC54KSlcbiAgICAgIC55KGQgPT4gdGhpcy55U2NhbGUoZC55W2xpbmVJbmRleF0pKTtcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaW5lczsgaSsrKSB7XG4gICAgICB0aGlzLnBhdGhzW2ldLmRhdHVtKHRoaXMuZGF0YSkuYXR0cihcImRcIiwgZ2V0UGF0aE1hcChpKSk7XG4gICAgfVxuICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qKlxuICogQSBub2RlIGluIGEgbmV1cmFsIG5ldHdvcmsuIEVhY2ggbm9kZSBoYXMgYSBzdGF0ZVxuICogKHRvdGFsIGlucHV0LCBvdXRwdXQsIGFuZCB0aGVpciByZXNwZWN0aXZlbHkgZGVyaXZhdGl2ZXMpIHdoaWNoIGNoYW5nZXNcbiAqIGFmdGVyIGV2ZXJ5IGZvcndhcmQgYW5kIGJhY2sgcHJvcGFnYXRpb24gcnVuLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gIGlkOiBzdHJpbmc7XG4gIC8qKiBMaXN0IG9mIGlucHV0IGxpbmtzLiAqL1xuICBpbnB1dExpbmtzOiBMaW5rW10gPSBbXTtcbiAgYmlhcyA9IDAuMTtcbiAgLyoqIExpc3Qgb2Ygb3V0cHV0IGxpbmtzLiAqL1xuICBvdXRwdXRzOiBMaW5rW10gPSBbXTtcbiAgdG90YWxJbnB1dDogbnVtYmVyO1xuICBvdXRwdXQ6IG51bWJlcjtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgbm9kZSdzIG91dHB1dC4gKi9cbiAgb3V0cHV0RGVyID0gMDtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgbm9kZSdzIHRvdGFsIGlucHV0LiAqL1xuICBpbnB1dERlciA9IDA7XG4gIC8qKlxuICAgKiBBY2N1bXVsYXRlZCBlcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byB0aGlzIG5vZGUncyB0b3RhbCBpbnB1dCBzaW5jZVxuICAgKiB0aGUgbGFzdCB1cGRhdGUuIFRoaXMgZGVyaXZhdGl2ZSBlcXVhbHMgZEUvZGIgd2hlcmUgYiBpcyB0aGUgbm9kZSdzXG4gICAqIGJpYXMgdGVybS5cbiAgICovXG4gIGFjY0lucHV0RGVyID0gMDtcbiAgLyoqXG4gICAqIE51bWJlciBvZiBhY2N1bXVsYXRlZCBlcnIuIGRlcml2YXRpdmVzIHdpdGggcmVzcGVjdCB0byB0aGUgdG90YWwgaW5wdXRcbiAgICogc2luY2UgdGhlIGxhc3QgdXBkYXRlLlxuICAgKi9cbiAgbnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgLyoqIEFjdGl2YXRpb24gZnVuY3Rpb24gdGhhdCB0YWtlcyB0b3RhbCBpbnB1dCBhbmQgcmV0dXJucyBub2RlJ3Mgb3V0cHV0ICovXG4gIGFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBub2RlIHdpdGggdGhlIHByb3ZpZGVkIGlkIGFuZCBhY3RpdmF0aW9uIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgYWN0aXZhdGlvbjogQWN0aXZhdGlvbkZ1bmN0aW9uLCBpbml0WmVybz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uID0gYWN0aXZhdGlvbjtcbiAgICBpZiAoaW5pdFplcm8pIHtcbiAgICAgIHRoaXMuYmlhcyA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlY29tcHV0ZXMgdGhlIG5vZGUncyBvdXRwdXQgYW5kIHJldHVybnMgaXQuICovXG4gIHVwZGF0ZU91dHB1dCgpOiBudW1iZXIge1xuICAgIC8vIFN0b3JlcyB0b3RhbCBpbnB1dCBpbnRvIHRoZSBub2RlLlxuICAgIHRoaXMudG90YWxJbnB1dCA9IHRoaXMuYmlhcztcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGxpbmsgPSB0aGlzLmlucHV0TGlua3Nbal07XG4gICAgICB0aGlzLnRvdGFsSW5wdXQgKz0gbGluay53ZWlnaHQgKiBsaW5rLnNvdXJjZS5vdXRwdXQ7XG4gICAgfVxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5hY3RpdmF0aW9uLm91dHB1dCh0aGlzLnRvdGFsSW5wdXQpO1xuICAgIHJldHVybiB0aGlzLm91dHB1dDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIGZ1bmN0aW9uIGFuZCBpdHMgZGVyaXZhdGl2ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcnJvckZ1bmN0aW9uIHtcbiAgZXJyb3I6IChvdXRwdXQ6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpID0+IG51bWJlcjtcbiAgZGVyOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBBIG5vZGUncyBhY3RpdmF0aW9uIGZ1bmN0aW9uIGFuZCBpdHMgZGVyaXZhdGl2ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZhdGlvbkZ1bmN0aW9uIHtcbiAgb3V0cHV0OiAoaW5wdXQ6IG51bWJlcikgPT4gbnVtYmVyO1xuICBkZXI6IChpbnB1dDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBGdW5jdGlvbiB0aGF0IGNvbXB1dGVzIGEgcGVuYWx0eSBjb3N0IGZvciBhIGdpdmVuIHdlaWdodCBpbiB0aGUgbmV0d29yay4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVndWxhcml6YXRpb25GdW5jdGlvbiB7XG4gIG91dHB1dDogKHdlaWdodDogbnVtYmVyKSA9PiBudW1iZXI7XG4gIGRlcjogKHdlaWdodDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBCdWlsdC1pbiBlcnJvciBmdW5jdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBFcnJvcnMge1xuICBwdWJsaWMgc3RhdGljIFNRVUFSRTogRXJyb3JGdW5jdGlvbiA9IHtcbiAgICBlcnJvcjogKG91dHB1dDogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgIDAuNSAqIE1hdGgucG93KG91dHB1dCAtIHRhcmdldCwgMiksXG4gICAgZGVyOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiBvdXRwdXQgLSB0YXJnZXRcbiAgfTtcbn1cblxuLyoqIFBvbHlmaWxsIGZvciBUQU5IICovXG4oTWF0aCBhcyBhbnkpLnRhbmggPSAoTWF0aCBhcyBhbnkpLnRhbmggfHwgZnVuY3Rpb24oeCkge1xuICBpZiAoeCA9PT0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh4ID09PSAtSW5maW5pdHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGUyeCA9IE1hdGguZXhwKDIgKiB4KTtcbiAgICByZXR1cm4gKGUyeCAtIDEpIC8gKGUyeCArIDEpO1xuICB9XG59O1xuXG4vKiogQnVpbHQtaW4gYWN0aXZhdGlvbiBmdW5jdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBBY3RpdmF0aW9ucyB7XG4gIHB1YmxpYyBzdGF0aWMgVEFOSDogQWN0aXZhdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogeCA9PiAoTWF0aCBhcyBhbnkpLnRhbmgoeCksXG4gICAgZGVyOiB4ID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSBBY3RpdmF0aW9ucy5UQU5ILm91dHB1dCh4KTtcbiAgICAgIHJldHVybiAxIC0gb3V0cHV0ICogb3V0cHV0O1xuICAgIH1cbiAgfTtcbiAgcHVibGljIHN0YXRpYyBSRUxVOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IE1hdGgubWF4KDAsIHgpLFxuICAgIGRlcjogeCA9PiB4IDw9IDAgPyAwIDogMVxuICB9O1xuICBwdWJsaWMgc3RhdGljIFNJR01PSUQ6IEFjdGl2YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHggPT4gMSAvICgxICsgTWF0aC5leHAoLXgpKSxcbiAgICBkZXI6IHggPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IEFjdGl2YXRpb25zLlNJR01PSUQub3V0cHV0KHgpO1xuICAgICAgcmV0dXJuIG91dHB1dCAqICgxIC0gb3V0cHV0KTtcbiAgICB9XG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgTElORUFSOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IHgsXG4gICAgZGVyOiB4ID0+IDFcbiAgfTtcbn1cblxuLyoqIEJ1aWxkLWluIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIEwxOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogdyA9PiBNYXRoLmFicyh3KSxcbiAgICBkZXI6IHcgPT4gdyA8IDAgPyAtMSA6ICh3ID4gMCA/IDEgOiAwKVxuICB9O1xuICBwdWJsaWMgc3RhdGljIEwyOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogdyA9PiAwLjUgKiB3ICogdyxcbiAgICBkZXI6IHcgPT4gd1xuICB9O1xufVxuXG4vKipcbiAqIEEgbGluayBpbiBhIG5ldXJhbCBuZXR3b3JrLiBFYWNoIGxpbmsgaGFzIGEgd2VpZ2h0IGFuZCBhIHNvdXJjZSBhbmRcbiAqIGRlc3RpbmF0aW9uIG5vZGUuIEFsc28gaXQgaGFzIGFuIGludGVybmFsIHN0YXRlIChlcnJvciBkZXJpdmF0aXZlXG4gKiB3aXRoIHJlc3BlY3QgdG8gYSBwYXJ0aWN1bGFyIGlucHV0KSB3aGljaCBnZXRzIHVwZGF0ZWQgYWZ0ZXJcbiAqIGEgcnVuIG9mIGJhY2sgcHJvcGFnYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaW5rIHtcbiAgaWQ6IHN0cmluZztcbiAgc291cmNlOiBOb2RlO1xuICBkZXN0OiBOb2RlO1xuICB3ZWlnaHQgPSBNYXRoLnJhbmRvbSgpIC0gMC41O1xuICBpc0RlYWQgPSBmYWxzZTtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgd2VpZ2h0LiAqL1xuICBlcnJvckRlciA9IDA7XG4gIC8qKiBBY2N1bXVsYXRlZCBlcnJvciBkZXJpdmF0aXZlIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZS4gKi9cbiAgYWNjRXJyb3JEZXIgPSAwO1xuICAvKiogTnVtYmVyIG9mIGFjY3VtdWxhdGVkIGRlcml2YXRpdmVzIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZS4gKi9cbiAgbnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgcmVndWxhcml6YXRpb246IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBsaW5rIGluIHRoZSBuZXVyYWwgbmV0d29yayBpbml0aWFsaXplZCB3aXRoIHJhbmRvbSB3ZWlnaHQuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBub2RlLlxuICAgKiBAcGFyYW0gZGVzdCBUaGUgZGVzdGluYXRpb24gbm9kZS5cbiAgICogQHBhcmFtIHJlZ3VsYXJpemF0aW9uIFRoZSByZWd1bGFyaXphdGlvbiBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIHRoZVxuICAgKiAgICAgcGVuYWx0eSBmb3IgdGhpcyB3ZWlnaHQuIElmIG51bGwsIHRoZXJlIHdpbGwgYmUgbm8gcmVndWxhcml6YXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IE5vZGUsIGRlc3Q6IE5vZGUsXG4gICAgICByZWd1bGFyaXphdGlvbjogUmVndWxhcml6YXRpb25GdW5jdGlvbiwgaW5pdFplcm8/OiBib29sZWFuKSB7XG4gICAgdGhpcy5pZCA9IHNvdXJjZS5pZCArIFwiLVwiICsgZGVzdC5pZDtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmRlc3QgPSBkZXN0O1xuICAgIHRoaXMucmVndWxhcml6YXRpb24gPSByZWd1bGFyaXphdGlvbjtcbiAgICBpZiAoaW5pdFplcm8pIHtcbiAgICAgIHRoaXMud2VpZ2h0ID0gMDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgYSBuZXVyYWwgbmV0d29yay5cbiAqXG4gKiBAcGFyYW0gbmV0d29ya1NoYXBlIFRoZSBzaGFwZSBvZiB0aGUgbmV0d29yay4gRS5nLiBbMSwgMiwgMywgMV0gbWVhbnNcbiAqICAgdGhlIG5ldHdvcmsgd2lsbCBoYXZlIG9uZSBpbnB1dCBub2RlLCAyIG5vZGVzIGluIGZpcnN0IGhpZGRlbiBsYXllcixcbiAqICAgMyBub2RlcyBpbiBzZWNvbmQgaGlkZGVuIGxheWVyIGFuZCAxIG91dHB1dCBub2RlLlxuICogQHBhcmFtIGFjdGl2YXRpb24gVGhlIGFjdGl2YXRpb24gZnVuY3Rpb24gb2YgZXZlcnkgaGlkZGVuIG5vZGUuXG4gKiBAcGFyYW0gb3V0cHV0QWN0aXZhdGlvbiBUaGUgYWN0aXZhdGlvbiBmdW5jdGlvbiBmb3IgdGhlIG91dHB1dCBub2Rlcy5cbiAqIEBwYXJhbSByZWd1bGFyaXphdGlvbiBUaGUgcmVndWxhcml6YXRpb24gZnVuY3Rpb24gdGhhdCBjb21wdXRlcyBhIHBlbmFsdHlcbiAqICAgICBmb3IgYSBnaXZlbiB3ZWlnaHQgKHBhcmFtZXRlcikgaW4gdGhlIG5ldHdvcmsuIElmIG51bGwsIHRoZXJlIHdpbGwgYmVcbiAqICAgICBubyByZWd1bGFyaXphdGlvbi5cbiAqIEBwYXJhbSBpbnB1dElkcyBMaXN0IG9mIGlkcyBmb3IgdGhlIGlucHV0IG5vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROZXR3b3JrKFxuICAgIG5ldHdvcmtTaGFwZTogbnVtYmVyW10sIGFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbixcbiAgICBvdXRwdXRBY3RpdmF0aW9uOiBBY3RpdmF0aW9uRnVuY3Rpb24sXG4gICAgcmVndWxhcml6YXRpb246IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24sXG4gICAgaW5wdXRJZHM6IHN0cmluZ1tdLCBpbml0WmVybz86IGJvb2xlYW4pOiBOb2RlW11bXSB7XG4gIGxldCBudW1MYXllcnMgPSBuZXR3b3JrU2hhcGUubGVuZ3RoO1xuICBsZXQgaWQgPSAxO1xuICAvKiogTGlzdCBvZiBsYXllcnMsIHdpdGggZWFjaCBsYXllciBiZWluZyBhIGxpc3Qgb2Ygbm9kZXMuICovXG4gIGxldCBuZXR3b3JrOiBOb2RlW11bXSA9IFtdO1xuICBmb3IgKGxldCBsYXllcklkeCA9IDA7IGxheWVySWR4IDwgbnVtTGF5ZXJzOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGlzT3V0cHV0TGF5ZXIgPSBsYXllcklkeCA9PT0gbnVtTGF5ZXJzIC0gMTtcbiAgICBsZXQgaXNJbnB1dExheWVyID0gbGF5ZXJJZHggPT09IDA7XG4gICAgbGV0IGN1cnJlbnRMYXllcjogTm9kZVtdID0gW107XG4gICAgbmV0d29yay5wdXNoKGN1cnJlbnRMYXllcik7XG4gICAgbGV0IG51bU5vZGVzID0gbmV0d29ya1NoYXBlW2xheWVySWR4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgIGxldCBub2RlSWQgPSBpZC50b1N0cmluZygpO1xuICAgICAgaWYgKGlzSW5wdXRMYXllcikge1xuICAgICAgICBub2RlSWQgPSBpbnB1dElkc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkKys7XG4gICAgICB9XG4gICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKG5vZGVJZCxcbiAgICAgICAgICBpc091dHB1dExheWVyID8gb3V0cHV0QWN0aXZhdGlvbiA6IGFjdGl2YXRpb24sIGluaXRaZXJvKTtcbiAgICAgIGN1cnJlbnRMYXllci5wdXNoKG5vZGUpO1xuICAgICAgaWYgKGxheWVySWR4ID49IDEpIHtcbiAgICAgICAgLy8gQWRkIGxpbmtzIGZyb20gbm9kZXMgaW4gdGhlIHByZXZpb3VzIGxheWVyIHRvIHRoaXMgbm9kZS5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXR3b3JrW2xheWVySWR4IC0gMV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgcHJldk5vZGUgPSBuZXR3b3JrW2xheWVySWR4IC0gMV1bal07XG4gICAgICAgICAgbGV0IGxpbmsgPSBuZXcgTGluayhwcmV2Tm9kZSwgbm9kZSwgcmVndWxhcml6YXRpb24sIGluaXRaZXJvKTtcbiAgICAgICAgICBwcmV2Tm9kZS5vdXRwdXRzLnB1c2gobGluayk7XG4gICAgICAgICAgbm9kZS5pbnB1dExpbmtzLnB1c2gobGluayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldHdvcms7XG59XG5cbi8qKlxuICogUnVucyBhIGZvcndhcmQgcHJvcGFnYXRpb24gb2YgdGhlIHByb3ZpZGVkIGlucHV0IHRocm91Z2ggdGhlIHByb3ZpZGVkXG4gKiBuZXR3b3JrLiBUaGlzIG1ldGhvZCBtb2RpZmllcyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIG5ldHdvcmsgLSB0aGVcbiAqIHRvdGFsIGlucHV0IGFuZCBvdXRwdXQgb2YgZWFjaCBub2RlIGluIHRoZSBuZXR3b3JrLlxuICpcbiAqIEBwYXJhbSBuZXR3b3JrIFRoZSBuZXVyYWwgbmV0d29yay5cbiAqIEBwYXJhbSBpbnB1dHMgVGhlIGlucHV0IGFycmF5LiBJdHMgbGVuZ3RoIHNob3VsZCBtYXRjaCB0aGUgbnVtYmVyIG9mIGlucHV0XG4gKiAgICAgbm9kZXMgaW4gdGhlIG5ldHdvcmsuXG4gKiBAcmV0dXJuIFRoZSBmaW5hbCBvdXRwdXQgb2YgdGhlIG5ldHdvcmsuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkUHJvcChuZXR3b3JrOiBOb2RlW11bXSwgaW5wdXRzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGxldCBpbnB1dExheWVyID0gbmV0d29ya1swXTtcbiAgaWYgKGlucHV0cy5sZW5ndGggIT09IGlucHV0TGF5ZXIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG51bWJlciBvZiBpbnB1dHMgbXVzdCBtYXRjaCB0aGUgbnVtYmVyIG9mIG5vZGVzIGluXCIgK1xuICAgICAgICBcIiB0aGUgaW5wdXQgbGF5ZXJcIik7XG4gIH1cbiAgLy8gVXBkYXRlIHRoZSBpbnB1dCBsYXllci5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBpbnB1dExheWVyW2ldO1xuICAgIG5vZGUub3V0cHV0ID0gaW5wdXRzW2ldO1xuICB9XG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBVcGRhdGUgYWxsIHRoZSBub2RlcyBpbiB0aGlzIGxheWVyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIG5vZGUudXBkYXRlT3V0cHV0KCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXR3b3JrW25ldHdvcmsubGVuZ3RoIC0gMV1bMF0ub3V0cHV0O1xufVxuXG4vKipcbiAqIFJ1bnMgYSBiYWNrd2FyZCBwcm9wYWdhdGlvbiB1c2luZyB0aGUgcHJvdmlkZWQgdGFyZ2V0IGFuZCB0aGVcbiAqIGNvbXB1dGVkIG91dHB1dCBvZiB0aGUgcHJldmlvdXMgY2FsbCB0byBmb3J3YXJkIHByb3BhZ2F0aW9uLlxuICogVGhpcyBtZXRob2QgbW9kaWZpZXMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBuZXR3b3JrIC0gdGhlIGVycm9yXG4gKiBkZXJpdmF0aXZlcyB3aXRoIHJlc3BlY3QgdG8gZWFjaCBub2RlLCBhbmQgZWFjaCB3ZWlnaHRcbiAqIGluIHRoZSBuZXR3b3JrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFja1Byb3AobmV0d29yazogTm9kZVtdW10sIHRhcmdldDogbnVtYmVyLFxuICAgIGVycm9yRnVuYzogRXJyb3JGdW5jdGlvbik6IHZvaWQge1xuICAvLyBUaGUgb3V0cHV0IG5vZGUgaXMgYSBzcGVjaWFsIGNhc2UuIFdlIHVzZSB0aGUgdXNlci1kZWZpbmVkIGVycm9yXG4gIC8vIGZ1bmN0aW9uIGZvciB0aGUgZGVyaXZhdGl2ZS5cbiAgbGV0IG91dHB1dE5vZGUgPSBuZXR3b3JrW25ldHdvcmsubGVuZ3RoIC0gMV1bMF07XG4gIG91dHB1dE5vZGUub3V0cHV0RGVyID0gZXJyb3JGdW5jLmRlcihvdXRwdXROb2RlLm91dHB1dCwgdGFyZ2V0KTtcblxuICAvLyBHbyB0aHJvdWdoIHRoZSBsYXllcnMgYmFja3dhcmRzLlxuICBmb3IgKGxldCBsYXllcklkeCA9IG5ldHdvcmsubGVuZ3RoIC0gMTsgbGF5ZXJJZHggPj0gMTsgbGF5ZXJJZHgtLSkge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBDb21wdXRlIHRoZSBlcnJvciBkZXJpdmF0aXZlIG9mIGVhY2ggbm9kZSB3aXRoIHJlc3BlY3QgdG86XG4gICAgLy8gMSkgaXRzIHRvdGFsIGlucHV0XG4gICAgLy8gMikgZWFjaCBvZiBpdHMgaW5wdXQgd2VpZ2h0cy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBub2RlLmlucHV0RGVyID0gbm9kZS5vdXRwdXREZXIgKiBub2RlLmFjdGl2YXRpb24uZGVyKG5vZGUudG90YWxJbnB1dCk7XG4gICAgICBub2RlLmFjY0lucHV0RGVyICs9IG5vZGUuaW5wdXREZXI7XG4gICAgICBub2RlLm51bUFjY3VtdWxhdGVkRGVycysrO1xuICAgIH1cblxuICAgIC8vIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIGVhY2ggd2VpZ2h0IGNvbWluZyBpbnRvIHRoZSBub2RlLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBpZiAobGluay5pc0RlYWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rLmVycm9yRGVyID0gbm9kZS5pbnB1dERlciAqIGxpbmsuc291cmNlLm91dHB1dDtcbiAgICAgICAgbGluay5hY2NFcnJvckRlciArPSBsaW5rLmVycm9yRGVyO1xuICAgICAgICBsaW5rLm51bUFjY3VtdWxhdGVkRGVycysrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF5ZXJJZHggPT09IDEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgcHJldkxheWVyID0gbmV0d29ya1tsYXllcklkeCAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldkxheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IHByZXZMYXllcltpXTtcbiAgICAgIC8vIENvbXB1dGUgdGhlIGVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIGVhY2ggbm9kZSdzIG91dHB1dC5cbiAgICAgIG5vZGUub3V0cHV0RGVyID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5vdXRwdXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBub2RlLm91dHB1dHNbal07XG4gICAgICAgIG5vZGUub3V0cHV0RGVyICs9IG91dHB1dC53ZWlnaHQgKiBvdXRwdXQuZGVzdC5pbnB1dERlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSB3ZWlnaHRzIG9mIHRoZSBuZXR3b3JrIHVzaW5nIHRoZSBwcmV2aW91c2x5IGFjY3VtdWxhdGVkIGVycm9yXG4gKiBkZXJpdmF0aXZlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdlaWdodHMobmV0d29yazogTm9kZVtdW10sIGxlYXJuaW5nUmF0ZTogbnVtYmVyLFxuICAgIHJlZ3VsYXJpemF0aW9uUmF0ZTogbnVtYmVyKSB7XG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICAvLyBVcGRhdGUgdGhlIG5vZGUncyBiaWFzLlxuICAgICAgaWYgKG5vZGUubnVtQWNjdW11bGF0ZWREZXJzID4gMCkge1xuICAgICAgICBub2RlLmJpYXMgLT0gbGVhcm5pbmdSYXRlICogbm9kZS5hY2NJbnB1dERlciAvIG5vZGUubnVtQWNjdW11bGF0ZWREZXJzO1xuICAgICAgICBub2RlLmFjY0lucHV0RGVyID0gMDtcbiAgICAgICAgbm9kZS5udW1BY2N1bXVsYXRlZERlcnMgPSAwO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIHRoZSB3ZWlnaHRzIGNvbWluZyBpbnRvIHRoaXMgbm9kZS5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBpZiAobGluay5pc0RlYWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVndWxEZXIgPSBsaW5rLnJlZ3VsYXJpemF0aW9uID9cbiAgICAgICAgICAgIGxpbmsucmVndWxhcml6YXRpb24uZGVyKGxpbmsud2VpZ2h0KSA6IDA7XG4gICAgICAgIGlmIChsaW5rLm51bUFjY3VtdWxhdGVkRGVycyA+IDApIHtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHdlaWdodCBiYXNlZCBvbiBkRS9kdy5cbiAgICAgICAgICBsaW5rLndlaWdodCA9IGxpbmsud2VpZ2h0IC1cbiAgICAgICAgICAgICAgKGxlYXJuaW5nUmF0ZSAvIGxpbmsubnVtQWNjdW11bGF0ZWREZXJzKSAqIGxpbmsuYWNjRXJyb3JEZXI7XG4gICAgICAgICAgLy8gRnVydGhlciB1cGRhdGUgdGhlIHdlaWdodCBiYXNlZCBvbiByZWd1bGFyaXphdGlvbi5cbiAgICAgICAgICBsZXQgbmV3TGlua1dlaWdodCA9IGxpbmsud2VpZ2h0IC1cbiAgICAgICAgICAgICAgKGxlYXJuaW5nUmF0ZSAqIHJlZ3VsYXJpemF0aW9uUmF0ZSkgKiByZWd1bERlcjtcbiAgICAgICAgICBpZiAobGluay5yZWd1bGFyaXphdGlvbiA9PT0gUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSAmJlxuICAgICAgICAgICAgICBsaW5rLndlaWdodCAqIG5ld0xpbmtXZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgd2VpZ2h0IGNyb3NzZWQgMCBkdWUgdG8gdGhlIHJlZ3VsYXJpemF0aW9uIHRlcm0uIFNldCBpdCB0byAwLlxuICAgICAgICAgICAgbGluay53ZWlnaHQgPSAwO1xuICAgICAgICAgICAgbGluay5pc0RlYWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5rLndlaWdodCA9IG5ld0xpbmtXZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpbmsuYWNjRXJyb3JEZXIgPSAwO1xuICAgICAgICAgIGxpbmsubnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiogSXRlcmF0ZXMgb3ZlciBldmVyeSBub2RlIGluIHRoZSBuZXR3b3JrLyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hOb2RlKG5ldHdvcms6IE5vZGVbXVtdLCBpZ25vcmVJbnB1dHM6IGJvb2xlYW4sXG4gICAgYWNjZXNzb3I6IChub2RlOiBOb2RlKSA9PiBhbnkpIHtcbiAgZm9yIChsZXQgbGF5ZXJJZHggPSBpZ25vcmVJbnB1dHMgPyAxIDogMDtcbiAgICAgIGxheWVySWR4IDwgbmV0d29yay5sZW5ndGg7XG4gICAgICBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGFjY2Vzc29yKG5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiogUmV0dXJucyB0aGUgb3V0cHV0IG5vZGUgaW4gdGhlIG5ldHdvcmsuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0cHV0Tm9kZShuZXR3b3JrOiBOb2RlW11bXSkge1xuICByZXR1cm4gbmV0d29ya1tuZXR3b3JrLmxlbmd0aCAtIDFdWzBdO1xufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5pbXBvcnQgKiBhcyBubiBmcm9tIFwiLi9ublwiO1xuaW1wb3J0IHtIZWF0TWFwLCByZWR1Y2VNYXRyaXh9IGZyb20gXCIuL2hlYXRtYXBcIjtcbmltcG9ydCB7XG4gIFN0YXRlLFxuICBkYXRhc2V0cyxcbiAgcmVnRGF0YXNldHMsXG4gIGFjdGl2YXRpb25zLFxuICBwcm9ibGVtcyxcbiAgcmVndWxhcml6YXRpb25zLFxuICBnZXRLZXlGcm9tVmFsdWUsXG4gIFByb2JsZW1cbn0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7RXhhbXBsZTJELCBzaHVmZmxlfSBmcm9tIFwiLi9kYXRhc2V0XCI7XG5pbXBvcnQge0FwcGVuZGluZ0xpbmVDaGFydH0gZnJvbSBcIi4vbGluZWNoYXJ0XCI7XG5cbmxldCBtYWluV2lkdGg7XG5cbi8vIE1vcmUgc2Nyb2xsaW5nXG5sZXQgc3RhdGUgPSBTdGF0ZS5kZXNlcmlhbGl6ZVN0YXRlKCk7XG5sZXQgZ2xvYmFsSXNQbGF5aW5nID0gZmFsc2U7XG5kMy5zZWxlY3QoXCIubW9yZSBidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgbGV0IHBvc2l0aW9uID0gODAwO1xuICBkMy50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAudHdlZW4oXCJzY3JvbGxcIiwgc2Nyb2xsVHdlZW4ocG9zaXRpb24pKTtcbn0pO1xuXG5mdW5jdGlvbiBzY3JvbGxUd2VlbihvZmZzZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBpID0gZDMuaW50ZXJwb2xhdGVOdW1iZXIod2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIG9mZnNldCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHsgc2Nyb2xsVG8oMCwgaSh0KSk7IH07XG4gIH07XG59XG5cbmNvbnN0IFJFQ1RfU0laRSA9IDMwO1xuY29uc3QgQklBU19TSVpFID0gNTtcbmNvbnN0IE5VTV9TQU1QTEVTX0NMQVNTSUZZID0gNTAwO1xuY29uc3QgTlVNX1NBTVBMRVNfUkVHUkVTUyA9IDEyMDA7XG5jb25zdCBERU5TSVRZID0gMTAwO1xudmFyIGRqYW5nb0RhdGFzZXQgPSBcImZtX3NhbXBsZV9pbmRlcGVuZGVudFwiO1xuXG5lbnVtIEhvdmVyVHlwZSB7XG4gIEJJQVMsIFdFSUdIVFxufVxuXG5pbnRlcmZhY2UgSW5wdXRGZWF0dXJlIHtcbiAgZjogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBudW1iZXI7XG4gIGxhYmVsPzogc3RyaW5nO1xufVxuXG5sZXQgSU5QVVRTOiB7W25hbWU6IHN0cmluZ106IElucHV0RmVhdHVyZX0gPSB7XG4gIFwiXzVBXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiNUFcIn0sXG4gIFwiXzVDXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiNUNcIn0sXG4gIFwiXzVHXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiNUdcIn0sXG4gIFwiXzVUXCI6IHtmOiAoeCwgeSkgPT4geCwgIGxhYmVsOiBcIjVUXCJ9LFxuICBcIl8zQVwiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIjNBXCJ9LFxuICBcIl8zQ1wiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIjNDXCJ9LFxuICBcIl8zR1wiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIjNHXCJ9LFxuICBcIl8zVFwiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIjNUXCJ9LFxuICBcIl9DQVwiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIkM+QVwifSxcbiAgXCJfQ0dcIjoge2Y6ICh4LCB5KSA9PiB4LCBsYWJlbDogXCJDPkdcIn0sXG4gIFwiX0NUXCI6IHtmOiAoeCwgeSkgPT4geCwgbGFiZWw6IFwiQz5UXCJ9LFxuICBcIl9UQVwiOiB7ZjogKHgsIHkpID0+IHksIGxhYmVsOiBcIlQ+QVwifSxcbiAgXCJfVENcIjoge2Y6ICh4LCB5KSA9PiB5LCBsYWJlbDogXCJUPkNcIn0sXG4gIFwiX1RHXCI6IHtmOiAoeCwgeSkgPT4geSwgbGFiZWw6IFwiVD5HXCJ9LFxufTtcblxubGV0IEhJREFCTEVfQ09OVFJPTFMgPSBbXG4gIFtcIlNob3cgdGVzdCBkYXRhXCIsIFwic2hvd1Rlc3REYXRhXCJdLFxuICBbXCJEaXNjcmV0aXplIG91dHB1dFwiLCBcImRpc2NyZXRpemVcIl0sXG4gIFtcIlBsYXkgYnV0dG9uXCIsIFwicGxheUJ1dHRvblwiXSxcbiAgW1wiU3RlcCBidXR0b25cIiwgXCJzdGVwQnV0dG9uXCJdLFxuICBbXCJSZXNldCBidXR0b25cIiwgXCJyZXNldEJ1dHRvblwiXSxcbiAgW1wiTGVhcm5pbmcgcmF0ZVwiLCBcImxlYXJuaW5nUmF0ZVwiXSxcbiAgW1wiQWN0aXZhdGlvblwiLCBcImFjdGl2YXRpb25cIl0sXG4gIFtcIlJlZ3VsYXJpemF0aW9uXCIsIFwicmVndWxhcml6YXRpb25cIl0sXG4gIFtcIlJlZ3VsYXJpemF0aW9uIHJhdGVcIiwgXCJyZWd1bGFyaXphdGlvblJhdGVcIl0sXG4gIFtcIlByb2JsZW0gdHlwZVwiLCBcInByb2JsZW1cIl0sXG4gIFtcIldoaWNoIGRhdGFzZXRcIiwgXCJkYXRhc2V0XCJdLFxuICBbXCJSYXRpbyB0cmFpbiBkYXRhXCIsIFwicGVyY1RyYWluRGF0YVwiXSxcbiAgW1wiTm9pc2UgbGV2ZWxcIiwgXCJub2lzZVwiXSxcbiAgW1wiQmF0Y2ggc2l6ZVwiLCBcImJhdGNoU2l6ZVwiXSxcbiAgW1wiIyBvZiBoaWRkZW4gbGF5ZXJzXCIsIFwibnVtSGlkZGVuTGF5ZXJzXCJdLFxuXTtcblxuY2xhc3MgUGxheWVyIHtcbiAgcHJpdmF0ZSB0aW1lckluZGV4ID0gMDtcbiAgcHJpdmF0ZSBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjYWxsYmFjazogKGlzUGxheWluZzogYm9vbGVhbikgPT4gdm9pZCA9IG51bGw7XG5cbiAgLyoqIFBsYXlzL3BhdXNlcyB0aGUgcGxheWVyLiAqL1xuICBwbGF5T3JQYXVzZSgpIHtcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgIGlmIChpdGVyID09PSAwKSB7XG4gICAgICAgIHNpbXVsYXRpb25TdGFydGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvblBsYXlQYXVzZShjYWxsYmFjazogKGlzUGxheWluZzogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5wYXVzZSgpO1xuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0aGlzLmlzUGxheWluZ1xuXG4gICAgdmFyIGRhdGEgPSBcImRpc2NyZXRpemU9XCIrc3RhdGUuZGlzY3JldGl6ZStcIiZwbGF5PVRydWUmc2hvd1Rlc3REYXRhPVwiK3N0YXRlLnNob3dUZXN0RGF0YTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgXG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gIGZ1bmN0aW9uICgpIHtcblxuXG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvcnVuL1wiKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuaXNQbGF5aW5nKTtcbiAgICB9XG4gICAgdGhpcy5zdGFydCh0aGlzLnRpbWVySW5kZXgpO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy50aW1lckluZGV4Kys7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0aGlzLmlzUGxheWluZ1xuXG4gICAgLy8gc2VudCBwb3N0IHJlcXVlc3RcbiAgICB2YXIgZGF0YSA9IFwiZGlzY3JldGl6ZT1cIitzdGF0ZS5kaXNjcmV0aXplK1wiJnBsYXk9RmFsc2Umc2hvd1Rlc3REYXRhPVwiK3N0YXRlLnNob3dUZXN0RGF0YTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cdCAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KVxuXHQgIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9ydW4vXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgICAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgICAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgICAgIHZhciBzdHI7XG4gICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbnVsbClcbiAgIHtcbiAgICAgICBzdHIgPSBcIm5vbmVcIjsgICAgXG4gICB9XG4gICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgIHtcbiAgICAgICBzdHIgPSBcIkwxXCI7XG4gICB9XG4gICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMilcbiAgIHtcbiAgICAgICBzdHIgPSBcIkwyXCI7XG4gICB9XG5cblxuXG4gICB2YXIgc3RyMjtcbiAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICB7XG4gICAgICAgc3RyMiA9IFwiUkVMVVwiOyAgICBcbiAgIH1cbiAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlRBTkgpXG4gICB7XG4gICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgfVxuICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuU0lHTU9JRClcbiAgIHtcbiAgICAgICBzdHIyID0gXCJTSUdNT0lEXCI7XG4gICB9XG5cbiAgICAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0cjIrXCImcmVndWxhcml6YXRpb249XCIrc3RyK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcbiAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL2FyZ3VtZW50cy9cIik7XG4gICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgICAgIHZhciBkYXRhID0gXCJkYXRhc2V0PVwiK2RqYW5nb0RhdGFzZXQrXCImd2VpZ2h0cz1cIitzdGF0ZS53ZWlnaHRzK1wiJmJpYXNlcz1cIitzdGF0ZS5iaWFzZXM7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3NldHRpbmdzL1wiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICBcblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuaXNQbGF5aW5nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0KGxvY2FsVGltZXJJbmRleDogbnVtYmVyKSB7XG4gICAgZDMudGltZXIoKCkgPT4ge1xuICAgICAgaWYgKGxvY2FsVGltZXJJbmRleCA8IHRoaXMudGltZXJJbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vIERvbmUuXG4gICAgICB9XG4gICAgICBvbmVTdGVwKCk7XG4gICAgICByZXR1cm4gZmFsc2U7ICAvLyBOb3QgZG9uZS5cbiAgICB9LCAwKTtcbiAgfVxufVxuXG4vL2xldCBzdGF0ZSA9IFN0YXRlLmRlc2VyaWFsaXplU3RhdGUoKTtcblxuLy8gRmlsdGVyIG91dCBpbnB1dHMgdGhhdCBhcmUgaGlkZGVuLlxuc3RhdGUuZ2V0SGlkZGVuUHJvcHMoKS5mb3JFYWNoKHByb3AgPT4ge1xuICBpZiAocHJvcCBpbiBJTlBVVFMpIHtcbiAgICBkZWxldGUgSU5QVVRTW3Byb3BdO1xuICB9XG59KTtcblxubGV0IGJvdW5kYXJ5OiB7W2lkOiBzdHJpbmddOiBudW1iZXJbXVtdfSA9IHt9O1xubGV0IHNlbGVjdGVkTm9kZUlkOiBzdHJpbmcgPSBudWxsO1xuLy8gUGxvdCB0aGUgaGVhdG1hcC5cbmxldCB4RG9tYWluOiBbbnVtYmVyLCBudW1iZXJdID0gWy02LCA2XTtcbmxldCBoZWF0TWFwID1cbiAgICBuZXcgSGVhdE1hcCgzMDAsIERFTlNJVFksIHhEb21haW4sIHhEb21haW4sIGQzLnNlbGVjdChcIiNoZWF0bWFwXCIpLFxuICAgICAgICB7c2hvd0F4ZXM6IHRydWV9KTtcbmxldCBsaW5rV2lkdGhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gIC5kb21haW4oWzAsIDVdKVxuICAucmFuZ2UoWzEsIDEwXSlcbiAgLmNsYW1wKHRydWUpO1xubGV0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZS5saW5lYXI8c3RyaW5nPigpXG4gICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFstMSwgMCwgMV0pXG4gICAgICAgICAgICAgICAgICAgICAucmFuZ2UoW1wiI2Y1OTMyMlwiLCBcIiNlOGVhZWJcIiwgXCIjMDg3N2JkXCJdKVxuICAgICAgICAgICAgICAgICAgICAgLmNsYW1wKHRydWUpO1xubGV0IGl0ZXIgPSAwO1xubGV0IHRyYWluRGF0YTogRXhhbXBsZTJEW10gPSBbXTtcbmxldCB0ZXN0RGF0YTogRXhhbXBsZTJEW10gPSBbXTtcbmxldCBuZXR3b3JrOiBubi5Ob2RlW11bXSA9IG51bGw7XG5sZXQgbG9zc1RyYWluID0gMDtcbmxldCBsb3NzVGVzdCA9IDA7XG5sZXQgcGxheWVyID0gbmV3IFBsYXllcigpO1xubGV0IGxpbmVDaGFydCA9IG5ldyBBcHBlbmRpbmdMaW5lQ2hhcnQoZDMuc2VsZWN0KFwiI2xpbmVjaGFydFwiKSxcbiAgICBbXCIjNzc3XCIsIFwiYmxhY2tcIl0pO1xuXG5mdW5jdGlvbiBtYWtlR1VJKCkge1xuICBkMy5zZWxlY3QoXCIjcmVzZXQtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlc2V0KCk7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBkMy5zZWxlY3QoXCIjcGxheS1wYXVzZS1idXR0b25cIik7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNwbGF5LXBhdXNlLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDaGFuZ2UgdGhlIGJ1dHRvbidzIGNvbnRlbnQuXG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBwbGF5ZXIucGxheU9yUGF1c2UoKTtcbiAgfSk7XG5cbiAgcGxheWVyLm9uUGxheVBhdXNlKGlzUGxheWluZyA9PiB7XG4gICAgZDMuc2VsZWN0KFwiI3BsYXktcGF1c2UtYnV0dG9uXCIpLmNsYXNzZWQoXCJwbGF5aW5nXCIsIGlzUGxheWluZyk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNuZXh0LXN0ZXAtYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllci5wYXVzZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgaWYgKGl0ZXIgPT09IDApIHtcbiAgICAgIHNpbXVsYXRpb25TdGFydGVkKCk7XG4gICAgfVxuICAgIG9uZVN0ZXAoKTtcbiAgfSk7XG5cbiAgZDMuc2VsZWN0KFwiI2RhdGEtcmVnZW4tYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGdlbmVyYXRlRGF0YSgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgfSk7XG5cbiAgbGV0IGRhdGFUaHVtYm5haWxzID0gZDMuc2VsZWN0QWxsKFwiY2FudmFzW2RhdGEtZGF0YXNldF1cIik7XG4gIGRhdGFUaHVtYm5haWxzLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5ld0RhdGFzZXQgPSBkYXRhc2V0c1t0aGlzLmRhdGFzZXQuZGF0YXNldF07XG4gICAgaWYgKG5ld0RhdGFzZXQgPT09IHN0YXRlLmRhdGFzZXQpIHtcbiAgICAgIHJldHVybjsgLy8gTm8tb3AuXG4gICAgfVxuXG4gICAgc3RhdGUuZGF0YXNldCA9ICBuZXdEYXRhc2V0O1xuICAgIGRqYW5nb0RhdGFzZXQgPSB0aGlzLmRhdGFzZXQuZGF0YXNldDtcbiAgICB2YXIgZGF0YSA9IFwiZGF0YXNldD1cIit0aGlzLmRhdGFzZXQuZGF0YXNldCtcIiZ3ZWlnaHRzPVwiK3N0YXRlLndlaWdodHMrXCImYmlhc2VzPVwiK3N0YXRlLmJpYXNlcztcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3NldHRpbmdzL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgIGRhdGFUaHVtYm5haWxzLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgbGV0IGRhdGFzZXRLZXkgPSBnZXRLZXlGcm9tVmFsdWUoZGF0YXNldHMsIHN0YXRlLmRhdGFzZXQpO1xuICAvLyBTZWxlY3QgdGhlIGRhdGFzZXQgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkMy5zZWxlY3QoYGNhbnZhc1tkYXRhLWRhdGFzZXQ9JHtkYXRhc2V0S2V5fV1gKVxuICAgIC5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG5cbiAgbGV0IHJlZ0RhdGFUaHVtYm5haWxzID0gZDMuc2VsZWN0QWxsKFwiY2FudmFzW2RhdGEtcmVnRGF0YXNldF1cIik7XG4gIHJlZ0RhdGFUaHVtYm5haWxzLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5ld0RhdGFzZXQgPSByZWdEYXRhc2V0c1t0aGlzLmRhdGFzZXQucmVnZGF0YXNldF07XG4gICAgaWYgKG5ld0RhdGFzZXQgPT09IHN0YXRlLnJlZ0RhdGFzZXQpIHtcbiAgICAgIHJldHVybjsgLy8gTm8tb3AuXG4gICAgfVxuICAgIHN0YXRlLnJlZ0RhdGFzZXQgPSAgbmV3RGF0YXNldDtcbiAgICBkamFuZ29EYXRhc2V0ID0gdGhpcy5kYXRhc2V0LnJlZ2RhdGFzZXQ7XG4gICAgdmFyIGRhdGEgPSBcImRhdGFzZXQ9XCIrdGhpcy5kYXRhc2V0LnJlZ2RhdGFzZXQrXCImd2VpZ2h0cz1cIitzdGF0ZS53ZWlnaHRzK1wiJmJpYXNlcz1cIitzdGF0ZS5iaWFzZXM7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zZXR0aW5ncy9cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICByZWdEYXRhVGh1bWJuYWlscy5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGxldCByZWdEYXRhc2V0S2V5ID0gZ2V0S2V5RnJvbVZhbHVlKHJlZ0RhdGFzZXRzLCBzdGF0ZS5yZWdEYXRhc2V0KTtcbiAgLy8gU2VsZWN0IHRoZSBkYXRhc2V0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgZDMuc2VsZWN0KGBjYW52YXNbZGF0YS1yZWdEYXRhc2V0PSR7cmVnRGF0YXNldEtleX1dYClcbiAgICAuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpO1xuXG4gIGQzLnNlbGVjdChcIiNhZGQtbGF5ZXJzXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5udW1IaWRkZW5MYXllcnMgPj0gMTApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdGUubmV0d29ya1NoYXBlW3N0YXRlLm51bUhpZGRlbkxheWVyc10gPSAyO1xuICAgIHN0YXRlLm51bUhpZGRlbkxheWVycysrO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgZDMuc2VsZWN0KFwiI3JlbW92ZS1sYXllcnNcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLm51bUhpZGRlbkxheWVycyA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLm51bUhpZGRlbkxheWVycy0tO1xuICAgIHN0YXRlLm5ldHdvcmtTaGFwZS5zcGxpY2Uoc3RhdGUubnVtSGlkZGVuTGF5ZXJzKTtcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgbGV0IHNob3dUZXN0RGF0YSA9IGQzLnNlbGVjdChcIiNzaG93LXRlc3QtZGF0YVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5zaG93VGVzdERhdGEgPSB0aGlzLmNoZWNrZWQ7XG5cbiAgICB2YXIgZGF0YSA9IFwiZGlzY3JldGl6ZT1cIitzdGF0ZS5kaXNjcmV0aXplK1wiJnBsYXk9XCIrc3RhdGUuaXNQbGF5aW5nK1wiJnNob3dUZXN0RGF0YT1cIitzdGF0ZS5zaG93VGVzdERhdGE7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3J1bi9cIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICAgIGhlYXRNYXAudXBkYXRlVGVzdFBvaW50cyhzdGF0ZS5zaG93VGVzdERhdGEgPyB0ZXN0RGF0YSA6IFtdKTtcbiAgfSk7XG4gIC8vIENoZWNrL3VuY2hlY2sgdGhlIGNoZWNrYm94IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS5cbiAgc2hvd1Rlc3REYXRhLnByb3BlcnR5KFwiY2hlY2tlZFwiLCBzdGF0ZS5zaG93VGVzdERhdGEpO1xuXG4gIGxldCBkaXNjcmV0aXplID0gZDMuc2VsZWN0KFwiI2Rpc2NyZXRpemVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUuZGlzY3JldGl6ZSA9IHRoaXMuY2hlY2tlZDtcblxuICAgIHZhciBkYXRhID0gXCJkaXNjcmV0aXplPVwiK3N0YXRlLmRpc2NyZXRpemUrXCImcGxheT1cIitzdGF0ZS5pc1BsYXlpbmcrXCImc2hvd1Rlc3REYXRhPVwiK3N0YXRlLnNob3dUZXN0RGF0YTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9ydW4vXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgdXBkYXRlVUkoKTtcbiAgfSk7XG4gIC8vIENoZWNrL3VuY2hlY2sgdGhlIGNoZWNib3ggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkaXNjcmV0aXplLnByb3BlcnR5KFwiY2hlY2tlZFwiLCBzdGF0ZS5kaXNjcmV0aXplKTtcblxuICBsZXQgcGVyY1RyYWluID0gZDMuc2VsZWN0KFwiI3BlcmNUcmFpbkRhdGFcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5wZXJjVHJhaW5EYXRhID0gdGhpcy52YWx1ZTtcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdwZXJjVHJhaW5EYXRhJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBwZXJjVHJhaW4ucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5wZXJjVHJhaW5EYXRhKTtcbiAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdwZXJjVHJhaW5EYXRhJ10gLnZhbHVlXCIpLnRleHQoc3RhdGUucGVyY1RyYWluRGF0YSk7XG5cbiAgbGV0IG5vaXNlID0gZDMuc2VsZWN0KFwiI25vaXNlXCIpLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUubm9pc2UgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J25vaXNlJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBsZXQgY3VycmVudE1heCA9IHBhcnNlSW50KG5vaXNlLnByb3BlcnR5KFwibWF4XCIpKTtcbiAgaWYgKHN0YXRlLm5vaXNlID4gY3VycmVudE1heCkge1xuICAgIGlmIChzdGF0ZS5ub2lzZSA8PSA4MCkge1xuICAgICAgbm9pc2UucHJvcGVydHkoXCJtYXhcIiwgc3RhdGUubm9pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5ub2lzZSA9IDUwO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0ZS5ub2lzZSA8IDApIHtcbiAgICBzdGF0ZS5ub2lzZSA9IDA7XG4gIH1cbiAgbm9pc2UucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5ub2lzZSk7XG4gIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0nbm9pc2UnXSAudmFsdWVcIikudGV4dChzdGF0ZS5ub2lzZSk7XG5cbiAgbGV0IGJhdGNoU2l6ZSA9IGQzLnNlbGVjdChcIiNiYXRjaFNpemVcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5iYXRjaFNpemUgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG5cbiAgICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J2JhdGNoU2l6ZSddIC52YWx1ZVwiKS50ZXh0KHRoaXMudmFsdWUpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgYmF0Y2hTaXplLnByb3BlcnR5KFwidmFsdWVcIiwgc3RhdGUuYmF0Y2hTaXplKTtcbiAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdiYXRjaFNpemUnXSAudmFsdWVcIikudGV4dChzdGF0ZS5iYXRjaFNpemUpO1xuXG4gIGxldCBhY3RpdmF0aW9uRHJvcGRvd24gPSBkMy5zZWxlY3QoXCIjYWN0aXZhdGlvbnNcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUuYWN0aXZhdGlvbiA9IGFjdGl2YXRpb25zW3RoaXMudmFsdWVdO1xuXG4gICAgdmFyIHN0cjtcbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHN0ciA9IFwibm9uZVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwxXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMlwiO1xuICAgIH1cblxuXG5cbiAgICB2YXIgc3RyMjtcbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5SRUxVKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiUkVMVVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuVEFOSClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlRBTkhcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuU0lHTU9JRClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlNJR01PSURcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0cjIrXCImcmVndWxhcml6YXRpb249XCIrc3RyK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcblxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIGFjdGl2YXRpb25Ecm9wZG93bi5wcm9wZXJ0eShcInZhbHVlXCIsXG4gICAgICBnZXRLZXlGcm9tVmFsdWUoYWN0aXZhdGlvbnMsIHN0YXRlLmFjdGl2YXRpb24pKTtcblxuICBsZXQgbGVhcm5pbmdSYXRlID0gZDMuc2VsZWN0KFwiI2xlYXJuaW5nUmF0ZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5sZWFybmluZ1JhdGUgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIHN0cjtcbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHN0ciA9IFwibm9uZVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwxXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMlwiO1xuICAgIH1cblxuXG5cbiAgICB2YXIgc3RyMjtcbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5SRUxVKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiUkVMVVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuVEFOSClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlRBTkhcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuU0lHTU9JRClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlNJR01PSURcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0cjIrXCImcmVndWxhcml6YXRpb249XCIrc3RyK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcblxuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIFx0eGhyLnNlbmQoZGF0YSk7XG5cbiAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgfSk7XG4gIGxlYXJuaW5nUmF0ZS5wcm9wZXJ0eShcInZhbHVlXCIsIHN0YXRlLmxlYXJuaW5nUmF0ZSk7XG5cbiAgbGV0IHJlZ3VsYXJEcm9wZG93biA9IGQzLnNlbGVjdChcIiNyZWd1bGFyaXphdGlvbnNcIikub24oXCJjaGFuZ2VcIixcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLnJlZ3VsYXJpemF0aW9uID0gcmVndWxhcml6YXRpb25zW3RoaXMudmFsdWVdO1xuXG4gICAgdmFyIHN0cjtcbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbnVsbClcbiAgICB7XG4gICAgICAgIHN0ciA9IFwibm9uZVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwxXCI7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJMMlwiO1xuICAgIH1cblxuXG5cbiAgICB2YXIgc3RyMjtcbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5SRUxVKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiUkVMVVwiOyAgICBcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuVEFOSClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlRBTkhcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLmFjdGl2YXRpb24gPT0gbm4uQWN0aXZhdGlvbnMuU0lHTU9JRClcbiAgICB7XG4gICAgICAgIHN0cjIgPSBcIlNJR01PSURcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0cjIrXCImcmVndWxhcml6YXRpb249XCIrc3RyK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBcdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9hcmd1bWVudHMvXCIpO1xuICAgIFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgcmVndWxhckRyb3Bkb3duLnByb3BlcnR5KFwidmFsdWVcIixcbiAgICAgIGdldEtleUZyb21WYWx1ZShyZWd1bGFyaXphdGlvbnMsIHN0YXRlLnJlZ3VsYXJpemF0aW9uKSk7XG5cbiAgbGV0IHJlZ3VsYXJSYXRlID0gZDMuc2VsZWN0KFwiI3JlZ3VsYXJSYXRlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZSA9IHRoaXMudmFsdWU7XG5cbiAgICB2YXIgc3RyO1xuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwyXCI7XG4gICAgfVxuXG5cblxuICAgIHZhciBzdHIyO1xuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuXG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL2FyZ3VtZW50cy9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICByZWd1bGFyUmF0ZS5wcm9wZXJ0eShcInZhbHVlXCIsIHN0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZSk7XG5cbiAgbGV0IHByb2JsZW0gPSBkMy5zZWxlY3QoXCIjcHJvYmxlbVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5wcm9ibGVtID0gcHJvYmxlbXNbdGhpcy52YWx1ZV07XG5cbiAgICB2YXIgc3RyO1xuICAgIGlmIChzdGF0ZS5yZWd1bGFyaXphdGlvbiA9PSBudWxsKVxuICAgIHtcbiAgICAgICAgc3RyID0gXCJub25lXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUucmVndWxhcml6YXRpb24gPT0gbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSlcbiAgICB7XG4gICAgICAgIHN0ciA9IFwiTDFcIjtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnJlZ3VsYXJpemF0aW9uID09IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDIpXG4gICAge1xuICAgICAgICBzdHIgPSBcIkwyXCI7XG4gICAgfVxuXG5cblxuICAgIHZhciBzdHIyO1xuICAgIGlmIChzdGF0ZS5hY3RpdmF0aW9uID09IG5uLkFjdGl2YXRpb25zLlJFTFUpXG4gICAge1xuICAgICAgICBzdHIyID0gXCJSRUxVXCI7ICAgIFxuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5UQU5IKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiVEFOSFwiO1xuICAgIH1cbiAgICBpZiAoc3RhdGUuYWN0aXZhdGlvbiA9PSBubi5BY3RpdmF0aW9ucy5TSUdNT0lEKVxuICAgIHtcbiAgICAgICAgc3RyMiA9IFwiU0lHTU9JRFwiO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RyMitcIiZyZWd1bGFyaXphdGlvbj1cIitzdHIrXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuXG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFx0eGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL2FyZ3VtZW50cy9cIik7XG4gICAgXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICBcdHhoci5zZW5kKGRhdGEpO1xuXG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgZHJhd0RhdGFzZXRUaHVtYm5haWxzKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBwcm9ibGVtLnByb3BlcnR5KFwidmFsdWVcIiwgZ2V0S2V5RnJvbVZhbHVlKHByb2JsZW1zLCBzdGF0ZS5wcm9ibGVtKSk7XG5cbiAgLy8gQWRkIHNjYWxlIHRvIHRoZSBncmFkaWVudCBjb2xvciBtYXAuXG4gIGxldCB4ID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFstMSwgMV0pLnJhbmdlKFswLCAxNDRdKTtcbiAgbGV0IHhBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgIC5zY2FsZSh4KVxuICAgIC5vcmllbnQoXCJib3R0b21cIilcbiAgICAudGlja1ZhbHVlcyhbLTEsIDAsIDFdKVxuICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcImRcIikpO1xuICBkMy5zZWxlY3QoXCIjY29sb3JtYXAgZy5jb3JlXCIpLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwxMClcIilcbiAgICAuY2FsbCh4QXhpcyk7XG5cbiAgLy8gTGlzdGVuIGZvciBjc3MtcmVzcG9uc2l2ZSBjaGFuZ2VzIGFuZCByZWRyYXcgdGhlIHN2ZyBuZXR3b3JrLlxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBsZXQgbmV3V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tcGFydFwiKVxuICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKG5ld1dpZHRoICE9PSBtYWluV2lkdGgpIHtcbiAgICAgIG1haW5XaWR0aCA9IG5ld1dpZHRoO1xuICAgICAgZHJhd05ldHdvcmsobmV0d29yayk7XG4gICAgICB1cGRhdGVVSSh0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEhpZGUgdGhlIHRleHQgYmVsb3cgdGhlIHZpc3VhbGl6YXRpb24gZGVwZW5kaW5nIG9uIHRoZSBVUkwuXG4gIGlmIChzdGF0ZS5oaWRlVGV4dCkge1xuICAgIGQzLnNlbGVjdChcIiNhcnRpY2xlLXRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICBkMy5zZWxlY3QoXCJkaXYubW9yZVwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcImhlYWRlclwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJpYXNlc1VJKG5ldHdvcms6IG5uLk5vZGVbXVtdKSB7XG4gIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgIGQzLnNlbGVjdChgcmVjdCNiaWFzLSR7bm9kZS5pZH1gKS5zdHlsZShcImZpbGxcIiwgY29sb3JTY2FsZShub2RlLmJpYXMpKTtcbiAgfSk7XG5cbiAgIHN0YXRlLmJpYXNlcyA9IHRydWU7XG4gIHZhciBkYXRhID0gXCJkYXRhc2V0PVwiK2RqYW5nb0RhdGFzZXQrXCImd2VpZ2h0cz1cIitzdGF0ZS53ZWlnaHRzK1wiJmJpYXNlcz1cIitzdGF0ZS5iaWFzZXM7XG4gICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc2V0dGluZ3MvXCIpO1xuICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgIHhoci5zZW5kKGRhdGEpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXZWlnaHRzVUkobmV0d29yazogbm4uTm9kZVtdW10sIGNvbnRhaW5lcjogZDMuU2VsZWN0aW9uPGFueT4pIHtcblxuXG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBVcGRhdGUgYWxsIHRoZSBub2RlcyBpbiB0aGlzIGxheWVyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBjb250YWluZXIuc2VsZWN0KGAjbGluayR7bGluay5zb3VyY2UuaWR9LSR7bGluay5kZXN0LmlkfWApXG4gICAgICAgICAgICAuc3R5bGUoe1xuICAgICAgICAgICAgICBcInN0cm9rZS1kYXNob2Zmc2V0XCI6IC1pdGVyIC8gMyxcbiAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogbGlua1dpZHRoU2NhbGUoTWF0aC5hYnMobGluay53ZWlnaHQpKSxcbiAgICAgICAgICAgICAgXCJzdHJva2VcIjogY29sb3JTY2FsZShsaW5rLndlaWdodClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZGF0dW0obGluayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbnN0YXRlLndlaWdodHMgPSB0cnVlO1xuICB2YXIgZGF0YSA9IFwiZGF0YXNldD1cIitkamFuZ29EYXRhc2V0K1wiJndlaWdodHM9XCIrc3RhdGUud2VpZ2h0cytcIiZiaWFzZXM9XCIrc3RhdGUuYmlhc2VzO1xuICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3NldHRpbmdzL1wiKTtcbiAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuXG4gICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICB4aHIuc2VuZChkYXRhKTtcbn1cblxuZnVuY3Rpb24gZHJhd05vZGUoY3g6IG51bWJlciwgY3k6IG51bWJlciwgbm9kZUlkOiBzdHJpbmcsIGlzSW5wdXQ6IGJvb2xlYW4sXG4gICAgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55Piwgbm9kZT86IG5uLk5vZGUpIHtcbiAgbGV0IHggPSBjeCAtIFJFQ1RfU0laRSAvIDI7XG4gIGxldCB5ID0gY3kgLSBSRUNUX1NJWkUgLyAyO1xuXG4gIGxldCBub2RlR3JvdXAgPSBjb250YWluZXIuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKHtcbiAgICAgIFwiY2xhc3NcIjogXCJub2RlXCIsXG4gICAgICBcImlkXCI6IGBub2RlJHtub2RlSWR9YCxcbiAgICAgIFwidHJhbnNmb3JtXCI6IGB0cmFuc2xhdGUoJHt4fSwke3l9KWBcbiAgICB9KTtcblxuICAvLyBEcmF3IHRoZSBtYWluIHJlY3RhbmdsZS5cbiAgbm9kZUdyb3VwLmFwcGVuZChcInJlY3RcIilcbiAgICAuYXR0cih7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHdpZHRoOiBSRUNUX1NJWkUsXG4gICAgICBoZWlnaHQ6IFJFQ1RfU0laRSxcbiAgICB9KTtcbiAgbGV0IGFjdGl2ZU9yTm90Q2xhc3MgPSBzdGF0ZVtub2RlSWRdID8gXCJhY3RpdmVcIiA6IFwiaW5hY3RpdmVcIjtcbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBsZXQgbGFiZWwgPSBJTlBVVFNbbm9kZUlkXS5sYWJlbCAhPSBudWxsID9cbiAgICAgICAgSU5QVVRTW25vZGVJZF0ubGFiZWwgOiBub2RlSWQ7XG4gICAgLy8gRHJhdyB0aGUgaW5wdXQgbGFiZWwuXG4gICAgbGV0IHRleHQgPSBub2RlR3JvdXAuYXBwZW5kKFwidGV4dFwiKS5hdHRyKHtcbiAgICAgIGNsYXNzOiBcIm1haW4tbGFiZWxcIixcbiAgICAgIHg6IC0xMCxcbiAgICAgIHk6IFJFQ1RfU0laRSAvIDIsIFwidGV4dC1hbmNob3JcIjogXCJlbmRcIlxuICAgIH0pO1xuICAgIGlmICgvW19eXS8udGVzdChsYWJlbCkpIHtcbiAgICAgIGxldCBteVJlID0gLyguKj8pKFtfXl0pKC4pL2c7XG4gICAgICBsZXQgbXlBcnJheTtcbiAgICAgIGxldCBsYXN0SW5kZXg7XG4gICAgICB3aGlsZSAoKG15QXJyYXkgPSBteVJlLmV4ZWMobGFiZWwpKSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IG15UmUubGFzdEluZGV4O1xuICAgICAgICBsZXQgcHJlZml4ID0gbXlBcnJheVsxXTtcbiAgICAgICAgbGV0IHNlcCA9IG15QXJyYXlbMl07XG4gICAgICAgIGxldCBzdWZmaXggPSBteUFycmF5WzNdO1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKS50ZXh0KHByZWZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dC5hcHBlbmQoXCJ0c3BhblwiKVxuICAgICAgICAuYXR0cihcImJhc2VsaW5lLXNoaWZ0XCIsIHNlcCA9PT0gXCJfXCIgPyBcInN1YlwiIDogXCJzdXBlclwiKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCI5cHhcIilcbiAgICAgICAgLnRleHQoc3VmZml4KTtcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbC5zdWJzdHJpbmcobGFzdEluZGV4KSkge1xuICAgICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLnRleHQobGFiZWwuc3Vic3RyaW5nKGxhc3RJbmRleCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLnRleHQobGFiZWwpO1xuICAgIH1cbiAgICBub2RlR3JvdXAuY2xhc3NlZChhY3RpdmVPck5vdENsYXNzLCB0cnVlKTtcbiAgfVxuICBpZiAoIWlzSW5wdXQpIHtcbiAgICAvLyBEcmF3IHRoZSBub2RlJ3MgYmlhcy5cbiAgICBub2RlR3JvdXAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoe1xuICAgICAgICBpZDogYGJpYXMtJHtub2RlSWR9YCxcbiAgICAgICAgeDogLUJJQVNfU0laRSAtIDIsXG4gICAgICAgIHk6IFJFQ1RfU0laRSAtIEJJQVNfU0laRSArIDMsXG4gICAgICAgIHdpZHRoOiBCSUFTX1NJWkUsXG4gICAgICAgIGhlaWdodDogQklBU19TSVpFLFxuICAgICAgfSkub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVIb3ZlckNhcmQoSG92ZXJUeXBlLkJJQVMsIG5vZGUsIGQzLm1vdXNlKGNvbnRhaW5lci5ub2RlKCkpKTtcbiAgICAgIH0pLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlSG92ZXJDYXJkKG51bGwpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBEcmF3IHRoZSBub2RlJ3MgY2FudmFzLlxuICBsZXQgZGl2ID0gZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuaW5zZXJ0KFwiZGl2XCIsIFwiOmZpcnN0LWNoaWxkXCIpXG4gICAgLmF0dHIoe1xuICAgICAgXCJpZFwiOiBgY2FudmFzLSR7bm9kZUlkfWAsXG4gICAgICBcImNsYXNzXCI6IFwiY2FudmFzXCJcbiAgICB9KVxuICAgIC5zdHlsZSh7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogYCR7eCArIDN9cHhgLFxuICAgICAgdG9wOiBgJHt5ICsgM31weGBcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxlY3RlZE5vZGVJZCA9IG5vZGVJZDtcbiAgICAgIGRpdi5jbGFzc2VkKFwiaG92ZXJlZFwiLCB0cnVlKTtcbiAgICAgIG5vZGVHcm91cC5jbGFzc2VkKFwiaG92ZXJlZFwiLCB0cnVlKTtcbiAgICAgIHVwZGF0ZURlY2lzaW9uQm91bmRhcnkobmV0d29yaywgZmFsc2UpO1xuICAgICAgaGVhdE1hcC51cGRhdGVCYWNrZ3JvdW5kKGJvdW5kYXJ5W25vZGVJZF0sIHN0YXRlLmRpc2NyZXRpemUpO1xuICAgIH0pXG4gICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGVjdGVkTm9kZUlkID0gbnVsbDtcbiAgICAgIGRpdi5jbGFzc2VkKFwiaG92ZXJlZFwiLCBmYWxzZSk7XG4gICAgICBub2RlR3JvdXAuY2xhc3NlZChcImhvdmVyZWRcIiwgZmFsc2UpO1xuICAgICAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmYWxzZSk7XG4gICAgICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbbm4uZ2V0T3V0cHV0Tm9kZShuZXR3b3JrKS5pZF0sXG4gICAgICAgICAgc3RhdGUuZGlzY3JldGl6ZSk7XG4gICAgfSk7XG4gIGlmIChpc0lucHV0KSB7XG4gICAgZGl2Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBzdGF0ZVtub2RlSWRdID0gIXN0YXRlW25vZGVJZF07XG4gICAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICByZXNldCgpO1xuICAgIH0pO1xuICAgIGRpdi5zdHlsZShcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gIH1cbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBkaXYuY2xhc3NlZChhY3RpdmVPck5vdENsYXNzLCB0cnVlKTtcbiAgfVxuICBsZXQgbm9kZUhlYXRNYXAgPSBuZXcgSGVhdE1hcChSRUNUX1NJWkUsIERFTlNJVFkgLyAxMCwgeERvbWFpbixcbiAgICAgIHhEb21haW4sIGRpdiwge25vU3ZnOiB0cnVlfSk7XG4gIGRpdi5kYXR1bSh7aGVhdG1hcDogbm9kZUhlYXRNYXAsIGlkOiBub2RlSWR9KTtcblxufVxuXG4vLyBEcmF3IG5ldHdvcmtcbmZ1bmN0aW9uIGRyYXdOZXR3b3JrKG5ldHdvcms6IG5uLk5vZGVbXVtdKTogdm9pZCB7XG4gIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjc3ZnXCIpO1xuICAvLyBSZW1vdmUgYWxsIHN2ZyBlbGVtZW50cy5cbiAgc3ZnLnNlbGVjdChcImcuY29yZVwiKS5yZW1vdmUoKTtcbiAgLy8gUmVtb3ZlIGFsbCBkaXYgZWxlbWVudHMuXG4gIGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpLnNlbGVjdEFsbChcImRpdi5jYW52YXNcIikucmVtb3ZlKCk7XG4gIGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpLnNlbGVjdEFsbChcImRpdi5wbHVzLW1pbnVzLW5ldXJvbnNcIikucmVtb3ZlKCk7XG5cbiAgLy8gR2V0IHRoZSB3aWR0aCBvZiB0aGUgc3ZnIGNvbnRhaW5lci5cbiAgbGV0IHBhZGRpbmcgPSAzO1xuICBsZXQgY28gPSBkMy5zZWxlY3QoXCIuY29sdW1uLm91dHB1dFwiKS5ub2RlKCkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGxldCBjZiA9IGQzLnNlbGVjdChcIi5jb2x1bW4uZmVhdHVyZXNcIikubm9kZSgpIGFzIEhUTUxEaXZFbGVtZW50O1xuICBsZXQgd2lkdGggPSBjby5vZmZzZXRMZWZ0IC0gY2Yub2Zmc2V0TGVmdDtcbiAgc3ZnLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCk7XG5cbiAgLy8gTWFwIG9mIGFsbCBub2RlIGNvb3JkaW5hdGVzLlxuICBsZXQgbm9kZTJjb29yZDoge1tpZDogc3RyaW5nXToge2N4OiBudW1iZXIsIGN5OiBudW1iZXJ9fSA9IHt9O1xuICBsZXQgY29udGFpbmVyID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAuY2xhc3NlZChcImNvcmVcIiwgdHJ1ZSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cGFkZGluZ30sJHtwYWRkaW5nfSlgKTtcbiAgLy8gRHJhdyB0aGUgbmV0d29yayBsYXllciBieSBsYXllci5cbiAgbGV0IG51bUxheWVycyA9IG5ldHdvcmsubGVuZ3RoO1xuICBsZXQgZmVhdHVyZVdpZHRoID0gMTE4O1xuICBsZXQgbGF5ZXJTY2FsZSA9IGQzLnNjYWxlLm9yZGluYWw8bnVtYmVyLCBudW1iZXI+KClcbiAgICAgIC5kb21haW4oZDMucmFuZ2UoMSwgbnVtTGF5ZXJzIC0gMSkpXG4gICAgICAucmFuZ2VQb2ludHMoW2ZlYXR1cmVXaWR0aCwgd2lkdGggLSBSRUNUX1NJWkVdLCAwLjcpO1xuICBsZXQgbm9kZUluZGV4U2NhbGUgPSAobm9kZUluZGV4OiBudW1iZXIpID0+IG5vZGVJbmRleCAqIChSRUNUX1NJWkUgKyAyNSk7XG5cblxuICBsZXQgY2FsbG91dFRodW1iID0gZDMuc2VsZWN0KFwiLmNhbGxvdXQudGh1bWJuYWlsXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gIGxldCBjYWxsb3V0V2VpZ2h0cyA9IGQzLnNlbGVjdChcIi5jYWxsb3V0LndlaWdodHNcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGV0IGlkV2l0aENhbGxvdXQgPSBudWxsO1xuICBsZXQgdGFyZ2V0SWRXaXRoQ2FsbG91dCA9IG51bGw7XG5cbiAgLy8gRHJhdyB0aGUgaW5wdXQgbGF5ZXIgc2VwYXJhdGVseS5cbiAgbGV0IGN4ID0gUkVDVF9TSVpFIC8gMiArIDUwO1xuICBsZXQgbm9kZUlkcyA9IE9iamVjdC5rZXlzKElOUFVUUyk7XG4gIGxldCBtYXhZID0gbm9kZUluZGV4U2NhbGUobm9kZUlkcy5sZW5ndGgpO1xuICBub2RlSWRzLmZvckVhY2goKG5vZGVJZCwgaSkgPT4ge1xuICAgIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKGkpICsgUkVDVF9TSVpFIC8gMjtcbiAgICBub2RlMmNvb3JkW25vZGVJZF0gPSB7Y3gsIGN5fTtcbiAgICBkcmF3Tm9kZShjeCwgY3ksIG5vZGVJZCwgdHJ1ZSwgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgLy8gRHJhdyB0aGUgaW50ZXJtZWRpYXRlIGxheWVycy5cbiAgZm9yIChsZXQgbGF5ZXJJZHggPSAxOyBsYXllcklkeCA8IG51bUxheWVycyAtIDE7IGxheWVySWR4KyspIHtcbiAgICBsZXQgbnVtTm9kZXMgPSBuZXR3b3JrW2xheWVySWR4XS5sZW5ndGg7XG4gICAgbGV0IGN4ID0gbGF5ZXJTY2FsZShsYXllcklkeCkgKyBSRUNUX1NJWkUgLyAyO1xuICAgIG1heFkgPSBNYXRoLm1heChtYXhZLCBub2RlSW5kZXhTY2FsZShudW1Ob2RlcykpO1xuICAgIGFkZFBsdXNNaW51c0NvbnRyb2wobGF5ZXJTY2FsZShsYXllcklkeCksIGxheWVySWR4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gbmV0d29ya1tsYXllcklkeF1baV07XG4gICAgICBsZXQgY3kgPSBub2RlSW5kZXhTY2FsZShpKSArIFJFQ1RfU0laRSAvIDI7XG4gICAgICBub2RlMmNvb3JkW25vZGUuaWRdID0ge2N4LCBjeX07XG4gICAgICBkcmF3Tm9kZShjeCwgY3ksIG5vZGUuaWQsIGZhbHNlLCBjb250YWluZXIsIG5vZGUpO1xuXG4gICAgICAvLyBTaG93IGNhbGxvdXQgdG8gdGh1bWJuYWlscy5cbiAgICAgIGxldCBudW1Ob2RlcyA9IG5ldHdvcmtbbGF5ZXJJZHhdLmxlbmd0aDtcbiAgICAgIGxldCBuZXh0TnVtTm9kZXMgPSBuZXR3b3JrW2xheWVySWR4ICsgMV0ubGVuZ3RoO1xuICAgICAgaWYgKGlkV2l0aENhbGxvdXQgPT0gbnVsbCAmJlxuICAgICAgICAgIGkgPT09IG51bU5vZGVzIC0gMSAmJlxuICAgICAgICAgIG5leHROdW1Ob2RlcyA8PSBudW1Ob2Rlcykge1xuICAgICAgICBjYWxsb3V0VGh1bWIuc3R5bGUoe1xuICAgICAgICAgIGRpc3BsYXk6IG51bGwsXG4gICAgICAgICAgdG9wOiBgJHsyMCArIDMgKyBjeX1weGAsXG4gICAgICAgICAgbGVmdDogYCR7Y3h9cHhgXG4gICAgICAgIH0pO1xuICAgICAgICBpZFdpdGhDYWxsb3V0ID0gbm9kZS5pZDtcbiAgICAgIH1cblxuICAgICAgLy8gRHJhdyBsaW5rcy5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBsZXQgcGF0aDogU1ZHUGF0aEVsZW1lbnQgPSBkcmF3TGluayhsaW5rLCBub2RlMmNvb3JkLCBuZXR3b3JrLFxuICAgICAgICAgICAgY29udGFpbmVyLCBqID09PSAwLCBqLCBub2RlLmlucHV0TGlua3MubGVuZ3RoKS5ub2RlKCkgYXMgYW55O1xuICAgICAgICAvLyBTaG93IGNhbGxvdXQgdG8gd2VpZ2h0cy5cbiAgICAgICAgbGV0IHByZXZMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHggLSAxXTtcbiAgICAgICAgbGV0IGxhc3ROb2RlUHJldkxheWVyID0gcHJldkxheWVyW3ByZXZMYXllci5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRhcmdldElkV2l0aENhbGxvdXQgPT0gbnVsbCAmJlxuICAgICAgICAgICAgaSA9PT0gbnVtTm9kZXMgLSAxICYmXG4gICAgICAgICAgICBsaW5rLnNvdXJjZS5pZCA9PT0gbGFzdE5vZGVQcmV2TGF5ZXIuaWQgJiZcbiAgICAgICAgICAgIChsaW5rLnNvdXJjZS5pZCAhPT0gaWRXaXRoQ2FsbG91dCB8fCBudW1MYXllcnMgPD0gNSkgJiZcbiAgICAgICAgICAgIGxpbmsuZGVzdC5pZCAhPT0gaWRXaXRoQ2FsbG91dCAmJlxuICAgICAgICAgICAgcHJldkxheWVyLmxlbmd0aCA+PSBudW1Ob2Rlcykge1xuICAgICAgICAgIGxldCBtaWRQb2ludCA9IHBhdGguZ2V0UG9pbnRBdExlbmd0aChwYXRoLmdldFRvdGFsTGVuZ3RoKCkgKiAwLjcpO1xuICAgICAgICAgIGNhbGxvdXRXZWlnaHRzLnN0eWxlKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG51bGwsXG4gICAgICAgICAgICB0b3A6IGAke21pZFBvaW50LnkgKyA1fXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IGAke21pZFBvaW50LnggKyAzfXB4YFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRhcmdldElkV2l0aENhbGxvdXQgPSBsaW5rLmRlc3QuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEcmF3IHRoZSBvdXRwdXQgbm9kZSBzZXBhcmF0ZWx5LlxuICBjeCA9IHdpZHRoICsgUkVDVF9TSVpFIC8gMjtcbiAgbGV0IG5vZGUgPSBuZXR3b3JrW251bUxheWVycyAtIDFdWzBdO1xuICBsZXQgY3kgPSBub2RlSW5kZXhTY2FsZSgwKSArIFJFQ1RfU0laRSAvIDI7XG4gIG5vZGUyY29vcmRbbm9kZS5pZF0gPSB7Y3gsIGN5fTtcbiAgLy8gRHJhdyBsaW5rcy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmlucHV0TGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbGluayA9IG5vZGUuaW5wdXRMaW5rc1tpXTtcbiAgICBkcmF3TGluayhsaW5rLCBub2RlMmNvb3JkLCBuZXR3b3JrLCBjb250YWluZXIsIGkgPT09IDAsIGksXG4gICAgICAgIG5vZGUuaW5wdXRMaW5rcy5sZW5ndGgpO1xuICB9XG4gIC8vIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBzdmcuXG4gIHN2Zy5hdHRyKFwiaGVpZ2h0XCIsIG1heFkpO1xuXG4gIC8vIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBmZWF0dXJlcyBjb2x1bW4uXG4gIGxldCBoZWlnaHQgPSBNYXRoLm1heChcbiAgICBnZXRSZWxhdGl2ZUhlaWdodChjYWxsb3V0VGh1bWIpLFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGNhbGxvdXRXZWlnaHRzKSxcbiAgICBnZXRSZWxhdGl2ZUhlaWdodChkMy5zZWxlY3QoXCIjbmV0d29ya1wiKSlcbiAgKTtcbiAgZDMuc2VsZWN0KFwiLmNvbHVtbi5mZWF0dXJlc1wiKS5zdHlsZShcImhlaWdodFwiLCBoZWlnaHQgKyBcInB4XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZUhlaWdodChzZWxlY3Rpb246IGQzLlNlbGVjdGlvbjxhbnk+KSB7XG4gIGxldCBub2RlID0gc2VsZWN0aW9uLm5vZGUoKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUub2Zmc2V0SGVpZ2h0ICsgbm9kZS5vZmZzZXRUb3A7XG59XG5cbmZ1bmN0aW9uIGFkZFBsdXNNaW51c0NvbnRyb2woeDogbnVtYmVyLCBsYXllcklkeDogbnVtYmVyKSB7XG4gIGxldCBkaXYgPSBkMy5zZWxlY3QoXCIjbmV0d29ya1wiKS5hcHBlbmQoXCJkaXZcIilcbiAgICAuY2xhc3NlZChcInBsdXMtbWludXMtbmV1cm9uc1wiLCB0cnVlKVxuICAgIC5zdHlsZShcImxlZnRcIiwgYCR7eCAtIDEwfXB4YCk7XG5cbiAgbGV0IGkgPSBsYXllcklkeCAtIDE7XG4gIGxldCBmaXJzdFJvdyA9IGRpdi5hcHBlbmQoXCJkaXZcIikuYXR0cihcImNsYXNzXCIsIGB1aS1udW1Ob2RlcyR7bGF5ZXJJZHh9YCk7XG4gIGZpcnN0Um93LmFwcGVuZChcImJ1dHRvblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uXCIpXG4gICAgICAub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBudW1OZXVyb25zID0gc3RhdGUubmV0d29ya1NoYXBlW2ldO1xuICAgICAgICBpZiAobnVtTmV1cm9ucyA+PSAzMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0rKztcblxuICAgICAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICBcdGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgICAgIFx0XHQgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgXHRcdCB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgICBcdFx0ICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICByZXNldCgpO1xuICAgICAgfSlcbiAgICAuYXBwZW5kKFwiaVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgICAudGV4dChcImFkZFwiKTtcblxuICBmaXJzdFJvdy5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgbnVtTmV1cm9ucyA9IHN0YXRlLm5ldHdvcmtTaGFwZVtpXTtcbiAgICAgICAgaWYgKG51bU5ldXJvbnMgPD0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0tLTtcblxuICAgICAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgXHR4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgICAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICBcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgXHR4aHIuc2VuZChkYXRhKTtcblxuICAgICAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICB9KVxuICAgIC5hcHBlbmQoXCJpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICAgIC50ZXh0KFwicmVtb3ZlXCIpO1xuXG4gIGxldCBzdWZmaXggPSBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0gPiAxID8gXCJzXCIgOiBcIlwiO1xuICBkaXYuYXBwZW5kKFwiZGl2XCIpLnRleHQoXG4gICAgc3RhdGUubmV0d29ya1NoYXBlW2ldICsgXCIgbmV1cm9uXCIgKyBzdWZmaXhcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSG92ZXJDYXJkKHR5cGU6IEhvdmVyVHlwZSwgbm9kZU9yTGluaz86IG5uLk5vZGUgfCBubi5MaW5rLFxuICAgIGNvb3JkaW5hdGVzPzogW251bWJlciwgbnVtYmVyXSkge1xuICBsZXQgaG92ZXJjYXJkID0gZDMuc2VsZWN0KFwiI2hvdmVyY2FyZFwiKTtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIGhvdmVyY2FyZC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcIiNzdmdcIikub24oXCJjbGlja1wiLCBudWxsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZDMuc2VsZWN0KFwiI3N2Z1wiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBob3ZlcmNhcmQuc2VsZWN0KFwiLnZhbHVlXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgbGV0IGlucHV0ID0gaG92ZXJjYXJkLnNlbGVjdChcImlucHV0XCIpO1xuICAgIGlucHV0LnN0eWxlKFwiZGlzcGxheVwiLCBudWxsKTtcbiAgICBpbnB1dC5vbihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbnVsbCAmJiB0aGlzLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBIb3ZlclR5cGUuV0VJR0hUKSB7XG4gICAgICAgICAgKG5vZGVPckxpbmsgYXMgbm4uTGluaykud2VpZ2h0ID0gK3RoaXMudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKG5vZGVPckxpbmsgYXMgbm4uTm9kZSkuYmlhcyA9ICt0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVVJKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaW5wdXQub24oXCJrZXlwcmVzc1wiLCAoKSA9PiB7XG4gICAgICBpZiAoKGQzLmV2ZW50IGFzIGFueSkua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdXBkYXRlSG92ZXJDYXJkKHR5cGUsIG5vZGVPckxpbmssIGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAoaW5wdXQubm9kZSgpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZvY3VzKCk7XG4gIH0pO1xuICBsZXQgdmFsdWUgPSAodHlwZSA9PT0gSG92ZXJUeXBlLldFSUdIVCkgP1xuICAgIChub2RlT3JMaW5rIGFzIG5uLkxpbmspLndlaWdodCA6XG4gICAgKG5vZGVPckxpbmsgYXMgbm4uTm9kZSkuYmlhcztcbiAgbGV0IG5hbWUgPSAodHlwZSA9PT0gSG92ZXJUeXBlLldFSUdIVCkgPyBcIldlaWdodFwiIDogXCJCaWFzXCI7XG4gIGhvdmVyY2FyZC5zdHlsZSh7XG4gICAgXCJsZWZ0XCI6IGAke2Nvb3JkaW5hdGVzWzBdICsgMjB9cHhgLFxuICAgIFwidG9wXCI6IGAke2Nvb3JkaW5hdGVzWzFdfXB4YCxcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH0pO1xuICBob3ZlcmNhcmQuc2VsZWN0KFwiLnR5cGVcIikudGV4dChuYW1lKTtcbiAgaG92ZXJjYXJkLnNlbGVjdChcIi52YWx1ZVwiKVxuICAgIC5zdHlsZShcImRpc3BsYXlcIiwgbnVsbClcbiAgICAudGV4dCh2YWx1ZS50b1ByZWNpc2lvbigyKSk7XG4gIGhvdmVyY2FyZC5zZWxlY3QoXCJpbnB1dFwiKVxuICAgIC5wcm9wZXJ0eShcInZhbHVlXCIsIHZhbHVlLnRvUHJlY2lzaW9uKDIpKVxuICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufVxuXG5mdW5jdGlvbiBkcmF3TGluayhcbiAgICBpbnB1dDogbm4uTGluaywgbm9kZTJjb29yZDoge1tpZDogc3RyaW5nXToge2N4OiBudW1iZXIsIGN5OiBudW1iZXJ9fSxcbiAgICBuZXR3b3JrOiBubi5Ob2RlW11bXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PixcbiAgICBpc0ZpcnN0OiBib29sZWFuLCBpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xuICBsZXQgbGluZSA9IGNvbnRhaW5lci5pbnNlcnQoXCJwYXRoXCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICBsZXQgc291cmNlID0gbm9kZTJjb29yZFtpbnB1dC5zb3VyY2UuaWRdO1xuICBsZXQgZGVzdCA9IG5vZGUyY29vcmRbaW5wdXQuZGVzdC5pZF07XG4gIGxldCBkYXR1bSA9IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIHk6IHNvdXJjZS5jeCArIFJFQ1RfU0laRSAvIDIgKyAyLFxuICAgICAgeDogc291cmNlLmN5XG4gICAgfSxcbiAgICB0YXJnZXQ6IHtcbiAgICAgIHk6IGRlc3QuY3ggLSBSRUNUX1NJWkUgLyAyLFxuICAgICAgeDogZGVzdC5jeSArICgoaW5kZXggLSAobGVuZ3RoIC0gMSkgLyAyKSAvIGxlbmd0aCkgKiAxMlxuICAgIH1cbiAgfTtcbiAgbGV0IGRpYWdvbmFsID0gZDMuc3ZnLmRpYWdvbmFsKCkucHJvamVjdGlvbihkID0+IFtkLnksIGQueF0pO1xuICBsaW5lLmF0dHIoe1xuICAgIFwibWFya2VyLXN0YXJ0XCI6IFwidXJsKCNtYXJrZXJBcnJvdylcIixcbiAgICBjbGFzczogXCJsaW5rXCIsXG4gICAgaWQ6IFwibGlua1wiICsgaW5wdXQuc291cmNlLmlkICsgXCItXCIgKyBpbnB1dC5kZXN0LmlkLFxuICAgIGQ6IGRpYWdvbmFsKGRhdHVtLCAwKVxuICB9KTtcblxuICAvLyBBZGQgYW4gaW52aXNpYmxlIHRoaWNrIGxpbmsgdGhhdCB3aWxsIGJlIHVzZWQgZm9yXG4gIC8vIHNob3dpbmcgdGhlIHdlaWdodCB2YWx1ZSBvbiBob3Zlci5cbiAgY29udGFpbmVyLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImRcIiwgZGlhZ29uYWwoZGF0dW0sIDApKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rLWhvdmVyXCIpXG4gICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUhvdmVyQ2FyZChIb3ZlclR5cGUuV0VJR0hULCBpbnB1dCwgZDMubW91c2UodGhpcykpO1xuICAgIH0pLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUhvdmVyQ2FyZChudWxsKTtcbiAgICB9KTtcbiAgcmV0dXJuIGxpbmU7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBuZXVyYWwgbmV0d29yaywgaXQgYXNrcyB0aGUgbmV0d29yayBmb3IgdGhlIG91dHB1dCAocHJlZGljdGlvbilcbiAqIG9mIGV2ZXJ5IG5vZGUgaW4gdGhlIG5ldHdvcmsgdXNpbmcgaW5wdXRzIHNhbXBsZWQgb24gYSBzcXVhcmUgZ3JpZC5cbiAqIEl0IHJldHVybnMgYSBtYXAgd2hlcmUgZWFjaCBrZXkgaXMgdGhlIG5vZGUgSUQgYW5kIHRoZSB2YWx1ZSBpcyBhIHNxdWFyZVxuICogbWF0cml4IG9mIHRoZSBvdXRwdXRzIG9mIHRoZSBuZXR3b3JrIGZvciBlYWNoIGlucHV0IGluIHRoZSBncmlkIHJlc3BlY3RpdmVseS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrOiBubi5Ob2RlW11bXSwgZmlyc3RUaW1lOiBib29sZWFuKSB7XG4gIGlmIChmaXJzdFRpbWUpIHtcbiAgICBib3VuZGFyeSA9IHt9O1xuICAgIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgICAgYm91bmRhcnlbbm9kZS5pZF0gPSBuZXcgQXJyYXkoREVOU0lUWSk7XG4gICAgfSk7XG4gICAgLy8gR28gdGhyb3VnaCBhbGwgcHJlZGVmaW5lZCBpbnB1dHMuXG4gICAgZm9yIChsZXQgbm9kZUlkIGluIElOUFVUUykge1xuICAgICAgYm91bmRhcnlbbm9kZUlkXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICB9XG4gIH1cbiAgbGV0IHhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLmRvbWFpbihbMCwgREVOU0lUWSAtIDFdKS5yYW5nZSh4RG9tYWluKTtcbiAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLmRvbWFpbihbREVOU0lUWSAtIDEsIDBdKS5yYW5nZSh4RG9tYWluKTtcblxuICBsZXQgaSA9IDAsIGogPSAwO1xuICBmb3IgKGkgPSAwOyBpIDwgREVOU0lUWTsgaSsrKSB7XG4gICAgaWYgKGZpcnN0VGltZSkge1xuICAgICAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgICAgIGJvdW5kYXJ5W25vZGUuaWRdW2ldID0gbmV3IEFycmF5KERFTlNJVFkpO1xuICAgICAgfSk7XG4gICAgICAvLyBHbyB0aHJvdWdoIGFsbCBwcmVkZWZpbmVkIGlucHV0cy5cbiAgICAgIGZvciAobGV0IG5vZGVJZCBpbiBJTlBVVFMpIHtcbiAgICAgICAgYm91bmRhcnlbbm9kZUlkXVtpXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChqID0gMDsgaiA8IERFTlNJVFk7IGorKykge1xuICAgICAgLy8gMSBmb3IgcG9pbnRzIGluc2lkZSB0aGUgY2lyY2xlLCBhbmQgMCBmb3IgcG9pbnRzIG91dHNpZGUgdGhlIGNpcmNsZS5cbiAgICAgIGxldCB4ID0geFNjYWxlKGkpO1xuICAgICAgbGV0IHkgPSB5U2NhbGUoaik7XG4gICAgICBsZXQgaW5wdXQgPSBjb25zdHJ1Y3RJbnB1dCh4LCB5KTtcbiAgICAgIG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICAgIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgICAgICBib3VuZGFyeVtub2RlLmlkXVtpXVtqXSA9IG5vZGUub3V0cHV0O1xuICAgICAgfSk7XG4gICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgIC8vIEdvIHRocm91Z2ggYWxsIHByZWRlZmluZWQgaW5wdXRzLlxuICAgICAgICBmb3IgKGxldCBub2RlSWQgaW4gSU5QVVRTKSB7XG4gICAgICAgICAgYm91bmRhcnlbbm9kZUlkXVtpXVtqXSA9IElOUFVUU1tub2RlSWRdLmYoeCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9zcyhuZXR3b3JrOiBubi5Ob2RlW11bXSwgZGF0YVBvaW50czogRXhhbXBsZTJEW10pOiBudW1iZXIge1xuICBsZXQgbG9zcyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkYXRhUG9pbnQgPSBkYXRhUG9pbnRzW2ldO1xuICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KGRhdGFQb2ludC54LCBkYXRhUG9pbnQueSk7XG4gICAgbGV0IG91dHB1dCA9IG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICBsb3NzICs9IG5uLkVycm9ycy5TUVVBUkUuZXJyb3Iob3V0cHV0LCBkYXRhUG9pbnQubGFiZWwpO1xuICB9XG4gIHJldHVybiBsb3NzIC8gZGF0YVBvaW50cy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVJKGZpcnN0U3RlcCA9IGZhbHNlKSB7XG4gIC8vIFVwZGF0ZSB0aGUgbGlua3MgdmlzdWFsbHkuXG4gIHVwZGF0ZVdlaWdodHNVSShuZXR3b3JrLCBkMy5zZWxlY3QoXCJnLmNvcmVcIikpO1xuICAvLyBVcGRhdGUgdGhlIGJpYXMgdmFsdWVzIHZpc3VhbGx5LlxuICB1cGRhdGVCaWFzZXNVSShuZXR3b3JrKTtcbiAgLy8gR2V0IHRoZSBkZWNpc2lvbiBib3VuZGFyeSBvZiB0aGUgbmV0d29yay5cbiAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmaXJzdFN0ZXApO1xuICBsZXQgc2VsZWN0ZWRJZCA9IHNlbGVjdGVkTm9kZUlkICE9IG51bGwgP1xuICAgICAgc2VsZWN0ZWROb2RlSWQgOiBubi5nZXRPdXRwdXROb2RlKG5ldHdvcmspLmlkO1xuICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbc2VsZWN0ZWRJZF0sIHN0YXRlLmRpc2NyZXRpemUpO1xuXG4gIC8vIFVwZGF0ZSBhbGwgZGVjaXNpb24gYm91bmRhcmllcy5cbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LmNhbnZhc1wiKVxuICAgICAgLmVhY2goZnVuY3Rpb24oZGF0YToge2hlYXRtYXA6IEhlYXRNYXAsIGlkOiBzdHJpbmd9KSB7XG4gICAgZGF0YS5oZWF0bWFwLnVwZGF0ZUJhY2tncm91bmQocmVkdWNlTWF0cml4KGJvdW5kYXJ5W2RhdGEuaWRdLCAxMCksXG4gICAgICAgIHN0YXRlLmRpc2NyZXRpemUpO1xuICB9KTtcblxuICBmdW5jdGlvbiB6ZXJvUGFkKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHBhZCA9IFwiMDAwMDAwXCI7XG4gICAgcmV0dXJuIChwYWQgKyBuKS5zbGljZSgtcGFkLmxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tYXMoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIH1cblxuICBmdW5jdGlvbiBodW1hblJlYWRhYmxlKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG4udG9GaXhlZCgzKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBsb3NzIGFuZCBpdGVyYXRpb24gbnVtYmVyLlxuICBkMy5zZWxlY3QoXCIjbG9zcy10cmFpblwiKS50ZXh0KGh1bWFuUmVhZGFibGUobG9zc1RyYWluKSk7XG4gIGQzLnNlbGVjdChcIiNsb3NzLXRlc3RcIikudGV4dChodW1hblJlYWRhYmxlKGxvc3NUZXN0KSk7XG4gIGQzLnNlbGVjdChcIiNpdGVyLW51bWJlclwiKS50ZXh0KGFkZENvbW1hcyh6ZXJvUGFkKGl0ZXIpKSk7XG4gIGxpbmVDaGFydC5hZGREYXRhUG9pbnQoW2xvc3NUcmFpbiwgbG9zc1Rlc3RdKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SW5wdXRJZHMoKTogc3RyaW5nW10ge1xuICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGxldCBpbnB1dE5hbWUgaW4gSU5QVVRTKSB7XG4gICAgaWYgKHN0YXRlW2lucHV0TmFtZV0pIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlucHV0TmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdElucHV0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICBsZXQgaW5wdXQ6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGlucHV0TmFtZSBpbiBJTlBVVFMpIHtcbiAgICBpZiAoc3RhdGVbaW5wdXROYW1lXSkge1xuICAgICAgaW5wdXQucHVzaChJTlBVVFNbaW5wdXROYW1lXS5mKHgsIHkpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBvbmVTdGVwKCk6IHZvaWQge1xuICBpdGVyKys7XG4gIHRyYWluRGF0YS5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KHBvaW50LngsIHBvaW50LnkpO1xuICAgIG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICBubi5iYWNrUHJvcChuZXR3b3JrLCBwb2ludC5sYWJlbCwgbm4uRXJyb3JzLlNRVUFSRSk7XG4gICAgaWYgKChpICsgMSkgJSBzdGF0ZS5iYXRjaFNpemUgPT09IDApIHtcbiAgICAgIG5uLnVwZGF0ZVdlaWdodHMobmV0d29yaywgc3RhdGUubGVhcm5pbmdSYXRlLCBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUpO1xuICAgIH1cbiAgfSk7XG4gIC8vIENvbXB1dGUgdGhlIGxvc3MuXG4gIGxvc3NUcmFpbiA9IGdldExvc3MobmV0d29yaywgdHJhaW5EYXRhKTtcbiAgbG9zc1Rlc3QgPSBnZXRMb3NzKG5ldHdvcmssIHRlc3REYXRhKTtcbiAgdXBkYXRlVUkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE91dHB1dFdlaWdodHMobmV0d29yazogbm4uTm9kZVtdW10pOiBudW1iZXJbXSB7XG4gIGxldCB3ZWlnaHRzOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBsYXllcklkeCA9IDA7IGxheWVySWR4IDwgbmV0d29yay5sZW5ndGggLSAxOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5vdXRwdXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBub2RlLm91dHB1dHNbal07XG4gICAgICAgIHdlaWdodHMucHVzaChvdXRwdXQud2VpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdlaWdodHM7XG59XG5cbmZ1bmN0aW9uIHRvSnNvbihvblN0YXJ0dXA9ZmFsc2Upe1xuXG4gIHZhciBqc29uT2JqID0ge1wiZGF0YXNldFwiIDogc3RhdGUuZGF0YXNldCwgXCJuZXdEYXRhc2V0XCIgOiBzdGF0ZS5yZWdEYXRhc2V0LCBcIm51bUhpZGRlbkxheWVyc1wiIDogc3RhdGUubnVtSGlkZGVuTGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ldHdvcmtTaGFwZVwiIDogc3RhdGUubmV0d29ya1NoYXBlLCBcInNob3dUZXN0RGF0YVwiIDogc3RhdGUuc2hvd1Rlc3REYXRhLCBcImRpc2NyZXRpemVcIiA6IHN0YXRlLmRpc2NyZXRpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyY1RyYWluRGF0YVwiIDogc3RhdGUucGVyY1RyYWluRGF0YSwgXCJub2lzZVwiIDogc3RhdGUubm9pc2UsIFwiYmF0Y2hTaXplXCIgOiBzdGF0ZS5iYXRjaFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZhdGlvblwiIDogc3RhdGUuYWN0aXZhdGlvbiwgXCJsZWFybmluZ1JhdGVcIiA6IHN0YXRlLmxlYXJuaW5nUmF0ZSwgXCJyZWd1bGFyaXphdGlvblwiIDogc3RhdGUucmVndWxhcml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVndWxhcml6YXRpb25SYXRlXCIgOiBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUsIFwicHJvYmxlbVwiIDogc3RhdGUucHJvYmxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbml0WmVyb1wiIDogc3RhdGUuaW5pdFplcm8sIFwidHV0b3JpYWxcIiA6IHN0YXRlLnR1dG9yaWFsICB9O1xuXG4gICAgcmV0dXJuIGpzb25PYmo7XG59O1xuXG5mdW5jdGlvbiByZXNldChvblN0YXJ0dXA9ZmFsc2UpIHtcbiAgbGluZUNoYXJ0LnJlc2V0KCk7XG4gIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICBpZiAoIW9uU3RhcnR1cCkge1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gIH1cbiAgcGxheWVyLnBhdXNlKCk7XG5cbiAgbGV0IHN1ZmZpeCA9IHN0YXRlLm51bUhpZGRlbkxheWVycyAhPT0gMSA/IFwic1wiIDogXCJcIjtcbiAgZDMuc2VsZWN0KFwiI2xheWVycy1sYWJlbFwiKS50ZXh0KFwiSGlkZGVuIGxheWVyXCIgKyBzdWZmaXgpO1xuICBkMy5zZWxlY3QoXCIjbnVtLWxheWVyc1wiKS50ZXh0KHN0YXRlLm51bUhpZGRlbkxheWVycyk7XG5cblxuICAvLyBNYWtlIGEgc2ltcGxlIG5ldHdvcmsuXG4gIGl0ZXIgPSAwO1xuICBsZXQgbnVtSW5wdXRzID0gY29uc3RydWN0SW5wdXQoMCAsIDApLmxlbmd0aDtcbiAgbGV0IHNoYXBlID0gW251bUlucHV0c10uY29uY2F0KHN0YXRlLm5ldHdvcmtTaGFwZSkuY29uY2F0KFsxXSk7XG4gIGxldCBvdXRwdXRBY3RpdmF0aW9uID0gKHN0YXRlLnByb2JsZW0gPT09IFByb2JsZW0uUkVHUkVTU0lPTikgP1xuICAgICAgbm4uQWN0aXZhdGlvbnMuTElORUFSIDogbm4uQWN0aXZhdGlvbnMuVEFOSDtcbiAgbmV0d29yayA9IG5uLmJ1aWxkTmV0d29yayhzaGFwZSwgc3RhdGUuYWN0aXZhdGlvbiwgb3V0cHV0QWN0aXZhdGlvbixcbiAgICAgIHN0YXRlLnJlZ3VsYXJpemF0aW9uLCBjb25zdHJ1Y3RJbnB1dElkcygpLCBzdGF0ZS5pbml0WmVybyk7XG4gIGxvc3NUcmFpbiA9IGdldExvc3MobmV0d29yaywgdHJhaW5EYXRhKTtcbiAgbG9zc1Rlc3QgPSBnZXRMb3NzKG5ldHdvcmssIHRlc3REYXRhKTtcbiAgZHJhd05ldHdvcmsobmV0d29yayk7XG4gIHVwZGF0ZVVJKHRydWUpO1xufTtcblxuZnVuY3Rpb24gaW5pdFR1dG9yaWFsKCkge1xuICBpZiAoc3RhdGUudHV0b3JpYWwgPT0gbnVsbCB8fCBzdGF0ZS50dXRvcmlhbCA9PT0gJycgfHwgc3RhdGUuaGlkZVRleHQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gUmVtb3ZlIGFsbCBvdGhlciB0ZXh0LlxuICBkMy5zZWxlY3RBbGwoXCJhcnRpY2xlIGRpdi5sLS1ib2R5XCIpLnJlbW92ZSgpO1xuICBsZXQgdHV0b3JpYWwgPSBkMy5zZWxlY3QoXCJhcnRpY2xlXCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsLS1ib2R5XCIpO1xuICAvLyBJbnNlcnQgdHV0b3JpYWwgdGV4dC5cbiAgZDMuaHRtbChgdHV0b3JpYWxzLyR7c3RhdGUudHV0b3JpYWx9Lmh0bWxgLCAoZXJyLCBodG1sRnJhZ21lbnQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHR1dG9yaWFsLm5vZGUoKS5hcHBlbmRDaGlsZChodG1sRnJhZ21lbnQpO1xuICAgIC8vIElmIHRoZSB0dXRvcmlhbCBoYXMgYSA8dGl0bGU+IHRhZywgc2V0IHRoZSBwYWdlIHRpdGxlIHRvIHRoYXQuXG4gICAgbGV0IHRpdGxlID0gdHV0b3JpYWwuc2VsZWN0KFwidGl0bGVcIik7XG4gICAgaWYgKHRpdGxlLnNpemUoKSkge1xuICAgICAgZDMuc2VsZWN0KFwiaGVhZGVyIGgxXCIpLnN0eWxlKHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIyMHB4XCIsXG4gICAgICB9KVxuICAgICAgLnRleHQodGl0bGUudGV4dCgpKTtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGUudGV4dCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXdEYXRhc2V0VGh1bWJuYWlscygpIHtcbiAgZnVuY3Rpb24gcmVuZGVyVGh1bWJuYWlsKGNhbnZhcywgZGF0YUdlbmVyYXRvcikge1xuICAgIGxldCB3ID0gMTAwO1xuICAgIGxldCBoID0gMTAwO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3KTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgZGF0YSA9IGRhdGFHZW5lcmF0b3IoMjAwLCAwKTtcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclNjYWxlKGQubGFiZWwpO1xuICAgICAgY29udGV4dC5maWxsUmVjdCh3ICogKGQueCArIDYpIC8gMTIsIGggKiAoZC55ICsgNikgLyAxMiwgNCwgNCk7XG4gICAgfSk7XG4gICAgZDMuc2VsZWN0KGNhbnZhcy5wYXJlbnROb2RlKS5zdHlsZShcImRpc3BsYXlcIiwgbnVsbCk7XG4gIH1cbiAgZDMuc2VsZWN0QWxsKFwiLmRhdGFzZXRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblxuICBpZiAoc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5DTEFTU0lGSUNBVElPTikge1xuICAgIGZvciAobGV0IGRhdGFzZXQgaW4gZGF0YXNldHMpIHtcbiAgICAgIGxldCBjYW52YXM6IGFueSA9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgY2FudmFzW2RhdGEtZGF0YXNldD0ke2RhdGFzZXR9XWApO1xuICAgICAgbGV0IGRhdGFHZW5lcmF0b3IgPSBkYXRhc2V0c1tkYXRhc2V0XTtcbiAgICAgIHJlbmRlclRodW1ibmFpbChjYW52YXMsIGRhdGFHZW5lcmF0b3IpO1xuICAgIH1cbiAgfVxuICBpZiAoc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5SRUdSRVNTSU9OKSB7XG4gICAgZm9yIChsZXQgcmVnRGF0YXNldCBpbiByZWdEYXRhc2V0cykge1xuICAgICAgbGV0IGNhbnZhczogYW55ID1cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBjYW52YXNbZGF0YS1yZWdEYXRhc2V0PSR7cmVnRGF0YXNldH1dYCk7XG4gICAgICBsZXQgZGF0YUdlbmVyYXRvciA9IHJlZ0RhdGFzZXRzW3JlZ0RhdGFzZXRdO1xuICAgICAgcmVuZGVyVGh1bWJuYWlsKGNhbnZhcywgZGF0YUdlbmVyYXRvcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVDb250cm9scygpIHtcbiAgLy8gU2V0IGRpc3BsYXk6bm9uZSB0byBhbGwgdGhlIFVJIGVsZW1lbnRzIHRoYXQgYXJlIGhpZGRlbi5cbiAgbGV0IGhpZGRlblByb3BzID0gc3RhdGUuZ2V0SGlkZGVuUHJvcHMoKTtcbiAgaGlkZGVuUHJvcHMuZm9yRWFjaChwcm9wID0+IHtcbiAgICBsZXQgY29udHJvbHMgPSBkMy5zZWxlY3RBbGwoYC51aS0ke3Byb3B9YCk7XG4gICAgaWYgKGNvbnRyb2xzLnNpemUoKSA9PT0gMCkge1xuICAgICAgY29uc29sZS53YXJuKGAwIGh0bWwgZWxlbWVudHMgZm91bmQgd2l0aCBjbGFzcyAudWktJHtwcm9wfWApO1xuICAgIH1cbiAgICBjb250cm9scy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICB9KTtcblxuICAvLyBBbHNvIGFkZCBjaGVja2JveCBmb3IgZWFjaCBoaWRhYmxlIGNvbnRyb2wgaW4gdGhlIFwidXNlIGl0IGluIGNsYXNzcm9tXCJcbiAgLy8gc2VjdGlvbi5cbiAgbGV0IGhpZGVDb250cm9scyA9IGQzLnNlbGVjdChcIi5oaWRlLWNvbnRyb2xzXCIpO1xuICBISURBQkxFX0NPTlRST0xTLmZvckVhY2goKFt0ZXh0LCBpZF0pID0+IHtcbiAgICBsZXQgbGFiZWwgPSBoaWRlQ29udHJvbHMuYXBwZW5kKFwibGFiZWxcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIpO1xuICAgIGxldCBpbnB1dCA9IGxhYmVsLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAuYXR0cih7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgY2xhc3M6IFwibWRsLWNoZWNrYm94X19pbnB1dFwiLFxuICAgICAgfSk7XG4gICAgaWYgKGhpZGRlblByb3BzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgaW5wdXQuYXR0cihcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgICBpbnB1dC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHN0YXRlLnNldEhpZGVQcm9wZXJ0eShpZCwgIXRoaXMuY2hlY2tlZCk7XG4gICAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgICBkMy5zZWxlY3QoXCIuaGlkZS1jb250cm9scy1saW5rXCIpXG4gICAgICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgfSk7XG4gICAgbGFiZWwuYXBwZW5kKFwic3BhblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1jaGVja2JveF9fbGFiZWwgbGFiZWxcIilcbiAgICAgIC50ZXh0KHRleHQpO1xuICB9KTtcbiAgZDMuc2VsZWN0KFwiLmhpZGUtY29udHJvbHMtbGlua1wiKVxuICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGF0YShmaXJzdFRpbWUgPSBmYWxzZSkge1xuICBpZiAoIWZpcnN0VGltZSkge1xuICAgIC8vIENoYW5nZSB0aGUgc2VlZC5cbiAgICBzdGF0ZS5zZWVkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDUpO1xuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gIH1cbiAgTWF0aC5zZWVkcmFuZG9tKHN0YXRlLnNlZWQpO1xuICBsZXQgbnVtU2FtcGxlcyA9IChzdGF0ZS5wcm9ibGVtID09PSBQcm9ibGVtLlJFR1JFU1NJT04pID9cbiAgICAgIE5VTV9TQU1QTEVTX1JFR1JFU1MgOiBOVU1fU0FNUExFU19DTEFTU0lGWTtcbiAgbGV0IGdlbmVyYXRvciA9IHN0YXRlLnByb2JsZW0gPT09IFByb2JsZW0uQ0xBU1NJRklDQVRJT04gP1xuICAgICAgc3RhdGUuZGF0YXNldCA6IHN0YXRlLnJlZ0RhdGFzZXQ7XG4gIGxldCBkYXRhID0gZ2VuZXJhdG9yKG51bVNhbXBsZXMsIHN0YXRlLm5vaXNlIC8gMTAwKTtcbiAgLy8gU2h1ZmZsZSB0aGUgZGF0YSBpbi1wbGFjZS5cbiAgc2h1ZmZsZShkYXRhKTtcbiAgLy8gU3BsaXQgaW50byB0cmFpbiBhbmQgdGVzdCBkYXRhLlxuICBsZXQgc3BsaXRJbmRleCA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggKiBzdGF0ZS5wZXJjVHJhaW5EYXRhIC8gMTAwKTtcbiAgdHJhaW5EYXRhID0gZGF0YS5zbGljZSgwLCBzcGxpdEluZGV4KTtcbiAgdGVzdERhdGEgPSBkYXRhLnNsaWNlKHNwbGl0SW5kZXgpO1xuICBoZWF0TWFwLnVwZGF0ZVBvaW50cyh0cmFpbkRhdGEpO1xuICBoZWF0TWFwLnVwZGF0ZVRlc3RQb2ludHMoc3RhdGUuc2hvd1Rlc3REYXRhID8gdGVzdERhdGEgOiBbXSk7XG59XG5cbmxldCBmaXJzdEludGVyYWN0aW9uID0gdHJ1ZTtcbmxldCBwYXJhbWV0ZXJzQ2hhbmdlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB1c2VySGFzSW50ZXJhY3RlZCgpIHtcbiAgaWYgKCFmaXJzdEludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZpcnN0SW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgbGV0IHBhZ2UgPSAnaW5kZXgnO1xuICBpZiAoc3RhdGUudHV0b3JpYWwgIT0gbnVsbCAmJiBzdGF0ZS50dXRvcmlhbCAhPT0gJycpIHtcbiAgICBwYWdlID0gYC92L3R1dG9yaWFscy8ke3N0YXRlLnR1dG9yaWFsfWA7XG4gIH1cbiAgZ2EoJ3NldCcsICdwYWdlJywgcGFnZSk7XG4gIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgeydzZXNzaW9uQ29udHJvbCc6ICdzdGFydCd9KTtcbn1cblxuZnVuY3Rpb24gc2ltdWxhdGlvblN0YXJ0ZWQoKSB7XG4gIGdhKCdzZW5kJywge1xuICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgZXZlbnRDYXRlZ29yeTogJ1N0YXJ0aW5nIFNpbXVsYXRpb24nLFxuICAgIGV2ZW50QWN0aW9uOiBwYXJhbWV0ZXJzQ2hhbmdlZCA/ICdjaGFuZ2VkJyA6ICd1bmNoYW5nZWQnLFxuICAgIGV2ZW50TGFiZWw6IHN0YXRlLnR1dG9yaWFsID09IG51bGwgPyAnJyA6IHN0YXRlLnR1dG9yaWFsXG4gIH0pO1xuICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IGZhbHNlO1xufVxuXG5kcmF3RGF0YXNldFRodW1ibmFpbHMoKTtcbmluaXRUdXRvcmlhbCgpO1xubWFrZUdVSSgpO1xuZ2VuZXJhdGVEYXRhKHRydWUpO1xucmVzZXQodHJ1ZSk7XG5oaWRlQ29udHJvbHMoKTtcbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuaW1wb3J0ICogYXMgbm4gZnJvbSBcIi4vbm5cIjtcbmltcG9ydCAqIGFzIGRhdGFzZXQgZnJvbSBcIi4vZGF0YXNldFwiO1xuXG4vKiogU3VmZml4IGFkZGVkIHRvIHRoZSBzdGF0ZSB3aGVuIHN0b3JpbmcgaWYgYSBjb250cm9sIGlzIGhpZGRlbiBvciBub3QuICovXG5jb25zdCBISURFX1NUQVRFX1NVRkZJWCA9IFwiX2hpZGVcIjtcblxuLyoqIEEgbWFwIGJldHdlZW4gbmFtZXMgYW5kIGFjdGl2YXRpb24gZnVuY3Rpb25zLiAqL1xuZXhwb3J0IGxldCBhY3RpdmF0aW9uczoge1trZXk6IHN0cmluZ106IG5uLkFjdGl2YXRpb25GdW5jdGlvbn0gPSB7XG4gIFwicmVsdVwiOiBubi5BY3RpdmF0aW9ucy5SRUxVLFxuICBcInRhbmhcIjogbm4uQWN0aXZhdGlvbnMuVEFOSCxcbiAgXCJzaWdtb2lkXCI6IG5uLkFjdGl2YXRpb25zLlNJR01PSUQsXG59O1xuXG4vKiogQSBtYXAgYmV0d2VlbiBuYW1lcyBhbmQgcmVndWxhcml6YXRpb24gZnVuY3Rpb25zLiAqL1xuZXhwb3J0IGxldCByZWd1bGFyaXphdGlvbnM6IHtba2V5OiBzdHJpbmddOiBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9ufSA9IHtcbiAgXCJub25lXCI6IG51bGwsXG4gIFwiTDFcIjogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSxcbiAgXCJMMlwiOiBubi5SZWd1bGFyaXphdGlvbkZ1bmN0aW9uLkwyXG59O1xuXG4vKiogQSBtYXAgYmV0d2VlbiBkYXRhc2V0IG5hbWVzIGFuZCBmdW5jdGlvbnMgdGhhdCBnZW5lcmF0ZSBjbGFzc2lmaWNhdGlvbiBkYXRhLiAqL1xuZXhwb3J0IGxldCBkYXRhc2V0czoge1trZXk6IHN0cmluZ106IGRhdGFzZXQuRGF0YUdlbmVyYXRvcn0gPSB7XG4gIFwiZm1fbXV0YXRpb25zX2luZGVwZW5kZW50XCI6IGRhdGFzZXQuY2xhc3NpZnlYT1JEYXRhLFxuICBcImZtX3NhbXBsZV9pbmRlcGVuZGVudFwiOiBkYXRhc2V0LmNsYXNzaWZ5Rm1TYW1wbGVJbmRlcGVuZGVudCxcbiAgXCJ0b3AxMDAwMEx1bmdNZWxcIjogZGF0YXNldC5jbGFzc2lmeXRvcDEwMDAwTHVuZ01lbCxcbiAgXCJ0b3AxMDAwTHVuZ01lbFwiOiBkYXRhc2V0LmNsYXNzaWZ5dG9wMTAwMEx1bmdNZWwsXG4gIFwidG9wMTAwTHVuZ01lbFwiOiBkYXRhc2V0LmNsYXNzaWZ5dG9wMTAwTHVuZ01lbCxcbiAgXCJ0b3AxMEx1bmdNZWxcIjogZGF0YXNldC5jbGFzc2lmeXRvcDEwTHVuZ01lbFxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gZGF0YXNldCBuYW1lcyBhbmQgZnVuY3Rpb25zIHRoYXQgZ2VuZXJhdGUgcmVncmVzc2lvbiBkYXRhLiAqL1xuZXhwb3J0IGxldCByZWdEYXRhc2V0czoge1trZXk6IHN0cmluZ106IGRhdGFzZXQuRGF0YUdlbmVyYXRvcn0gPSB7XG4gIFwiZm1fc2FtcGxlX2luZGVwZW5kZW50XCI6IGRhdGFzZXQucmVncmVzc0ZtU2FtcGxlSW5kZXBlbmRlbnQsXG4gIFwiZm1fbXV0YXRpb25zX2luZGVwZW5kZW50XCI6IGRhdGFzZXQucmVncmVzc1BsYW5lLFxuICBcInRvcDEwMDAwTHVuZ01lbFwiOiBkYXRhc2V0LnJlZ3Jlc3N0b3AxMDAwMEx1bmdNZWwsXG4gIFwidG9wMTAwMEx1bmdNZWxcIjogZGF0YXNldC5yZWdyZXNzdG9wMTAwMEx1bmdNZWwsXG4gIFwidG9wMTAwTHVuZ01lbFwiOiBkYXRhc2V0LnJlZ3Jlc3N0b3AxMDBMdW5nTWVsLFxuICBcInRvcDEwTHVuZ01lbFwiOiBkYXRhc2V0LnJlZ3Jlc3N0b3AxMEx1bmdNZWxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlGcm9tVmFsdWUob2JqOiBhbnksIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9ialtrZXldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZW5kc1dpdGgoczogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcy5zdWJzdHIoLXN1ZmZpeC5sZW5ndGgpID09PSBzdWZmaXg7XG59XG5cbmZ1bmN0aW9uIGdldEhpZGVQcm9wcyhvYmo6IGFueSk6IHN0cmluZ1tdIHtcbiAgbGV0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChsZXQgcHJvcCBpbiBvYmopIHtcbiAgICBpZiAoZW5kc1dpdGgocHJvcCwgSElERV9TVEFURV9TVUZGSVgpKSB7XG4gICAgICByZXN1bHQucHVzaChwcm9wKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgZGF0YSB0eXBlIG9mIGEgc3RhdGUgdmFyaWFibGUuIFVzZWQgZm9yIGRldGVybWluaW5nIHRoZVxuICogKGRlKXNlcmlhbGl6YXRpb24gbWV0aG9kLlxuICovXG5leHBvcnQgZW51bSBUeXBlIHtcbiAgU1RSSU5HLFxuICBOVU1CRVIsXG4gIEFSUkFZX05VTUJFUixcbiAgQVJSQVlfU1RSSU5HLFxuICBCT09MRUFOLFxuICBPQkpFQ1Rcbn1cblxuZXhwb3J0IGVudW0gUHJvYmxlbSB7XG4gIENMQVNTSUZJQ0FUSU9OLFxuICBSRUdSRVNTSU9OXG59XG5cbmV4cG9ydCBsZXQgcHJvYmxlbXMgPSB7XG4gIFwiY2xhc3NpZmljYXRpb25cIjogUHJvYmxlbS5DTEFTU0lGSUNBVElPTixcbiAgXCJyZWdyZXNzaW9uXCI6IFByb2JsZW0uUkVHUkVTU0lPTlxufTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogVHlwZTtcbiAga2V5TWFwPzoge1trZXk6IHN0cmluZ106IGFueX07XG59O1xuXG4vLyBBZGQgdGhlIEdVSSBzdGF0ZS5cbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gIHByaXZhdGUgc3RhdGljIFBST1BTOiBQcm9wZXJ0eVtdID0gW1xuICAgIHtuYW1lOiBcImlzUGxheWluZ1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImFjdGl2YXRpb25cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogYWN0aXZhdGlvbnN9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uXCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ3VsYXJpemF0aW9uc30sXG4gICAge25hbWU6IFwiYmF0Y2hTaXplXCIsIHR5cGU6IFR5cGUuTlVNQkVSfSxcbiAgICB7bmFtZTogXCJkYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IGRhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJyZWdEYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ0RhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJsZWFybmluZ1JhdGVcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uUmF0ZVwiLCB0eXBlOiBUeXBlLk5VTUJFUn0sXG4gICAge25hbWU6IFwibm9pc2VcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcIm5ldHdvcmtTaGFwZVwiLCB0eXBlOiBUeXBlLkFSUkFZX05VTUJFUn0sXG4gICAge25hbWU6IFwic2VlZFwiLCB0eXBlOiBUeXBlLlNUUklOR30sXG4gICAge25hbWU6IFwic2hvd1Rlc3REYXRhXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiZGlzY3JldGl6ZVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInBlcmNUcmFpbkRhdGFcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcIl81QVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl81Q1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl81R1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl81VFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9DQVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9DR1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9DVFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9UQVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9UQ1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl9UR1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zQVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zQ1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zR1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcIl8zVFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImNvbGxlY3RTdGF0c1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInR1dG9yaWFsXCIsIHR5cGU6IFR5cGUuU1RSSU5HfSxcbiAgICB7bmFtZTogXCJwcm9ibGVtXCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHByb2JsZW1zfSxcbiAgICB7bmFtZTogXCJpbml0WmVyb1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImhpZGVUZXh0XCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwid2VpZ2h0c1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImJpYXNlc1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICBdO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICBsZWFybmluZ1JhdGUgPSAwLjE7XG4gICAgcmVndWxhcml6YXRpb25SYXRlID0gMDtcbiAgICBzaG93VGVzdERhdGEgPSBmYWxzZTtcbiAgICBub2lzZSA9IDA7XG4gICAgYmF0Y2hTaXplID0gMTA7XG4gICAgZGlzY3JldGl6ZSA9IGZhbHNlO1xuICAgIHR1dG9yaWFsOiBzdHJpbmcgPSBudWxsO1xuICAgIHBlcmNUcmFpbkRhdGEgPSA1MDtcbiAgICBhY3RpdmF0aW9uID0gbm4uQWN0aXZhdGlvbnMuUkVMVTtcbiAgICByZWd1bGFyaXphdGlvbjogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbiA9IG51bGw7XG4gICAgcHJvYmxlbSA9IFByb2JsZW0uQ0xBU1NJRklDQVRJT047XG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgaW5pdFplcm8gPSBmYWxzZTtcbiAgICBoaWRlVGV4dCA9IGZhbHNlO1xuICAgIGNvbGxlY3RTdGF0ZXMgPSBmYWxzZTtcbiAgICBudW1IaWRkZW5MYXllcnMgPSA1O1xuICAgIGhpZGRlbkxheWVyQ29udHJvbHM6IGFueVtdID0gW107XG4gICAgbmV0d29ya1NoYXBlOiBudW1iZXJbXSA9IFsxMCwgMTAsIDEwLCAxMCwgMTBdO1xuICAgIF81QSA9IGZhbHNlO1xuICAgIF81QyA9IGZhbHNlO1xuICAgIF81RyA9IGZhbHNlO1xuICAgIF81VCA9IGZhbHNlO1xuICAgIF9DQSA9IHRydWU7XG4gICAgX0NHID0gdHJ1ZTtcbiAgICBfQ1QgPSB0cnVlO1xuICAgIF9UQSA9IHRydWU7XG4gICAgX1RDID0gdHJ1ZTtcbiAgICBfVEcgPSB0cnVlO1xuICAgIF8zQSA9IGZhbHNlO1xuICAgIF8zQyA9IGZhbHNlO1xuICAgIF8zRyA9IGZhbHNlO1xuICAgIF8zVCA9IGZhbHNlO1xuICAgIGRhdGFzZXQ6IGRhdGFzZXQuRGF0YUdlbmVyYXRvciA9IGRhdGFzZXQuY2xhc3NpZnlYT1JEYXRhO1xuICAgIHJlZ0RhdGFzZXQ6IGRhdGFzZXQuRGF0YUdlbmVyYXRvciA9IGRhdGFzZXQucmVncmVzc1BsYW5lO1xuICAgIHNlZWQ6IHN0cmluZztcbiAgICB3ZWlnaHRzID0gZmFsc2U7XG4gICAgYmlhc2VzID0gZmFsc2U7XG5cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIHRoZSBzdGF0ZSBmcm9tIHRoZSB1cmwgaGFzaC5cbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZVN0YXRlKCk6IFN0YXRlIHtcbiAgICBsZXQgbWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGZvciAobGV0IGtleXZhbHVlIG9mIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnNwbGl0KFwiJlwiKSkge1xuICAgICAgbGV0IFtuYW1lLCB2YWx1ZV0gPSBrZXl2YWx1ZS5zcGxpdChcIj1cIik7XG4gICAgICBtYXBbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXkobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gbmFtZSBpbiBtYXAgJiYgbWFwW25hbWVdICE9IG51bGwgJiYgbWFwW25hbWVdLnRyaW0oKSAhPT0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUFycmF5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gdmFsdWUudHJpbSgpID09PSBcIlwiID8gW10gOiB2YWx1ZS5zcGxpdChcIixcIik7XG4gICAgfVxuXG4gICAgLy8gRGVzZXJpYWxpemUgcmVndWxhciBwcm9wZXJ0aWVzLlxuICAgIFN0YXRlLlBST1BTLmZvckVhY2goKHtuYW1lLCB0eXBlLCBrZXlNYXB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBUeXBlLk9CSkVDVDpcbiAgICAgICAgICBpZiAoa2V5TWFwID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSBrZXktdmFsdWUgbWFwIG11c3QgYmUgcHJvdmlkZWQgZm9yIHN0YXRlIFwiICtcbiAgICAgICAgICAgICAgICBcInZhcmlhYmxlcyBvZiB0eXBlIE9iamVjdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0tleShuYW1lKSAmJiBtYXBbbmFtZV0gaW4ga2V5TWFwKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IGtleU1hcFttYXBbbmFtZV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUeXBlLk5VTUJFUjpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBUaGUgKyBvcGVyYXRvciBpcyBmb3IgY29udmVydGluZyBhIHN0cmluZyB0byBhIG51bWJlci5cbiAgICAgICAgICAgIHN0YXRlW25hbWVdID0gK21hcFtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5TVFJJTkc6XG4gICAgICAgICAgaWYgKGhhc0tleShuYW1lKSkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBtYXBbbmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQk9PTEVBTjpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IChtYXBbbmFtZV0gPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQVJSQVlfTlVNQkVSOlxuICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBwYXJzZUFycmF5KG1hcFtuYW1lXSkubWFwKE51bWJlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQVJSQVlfU1RSSU5HOlxuICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBwYXJzZUFycmF5KG1hcFtuYW1lXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IEVycm9yKFwiRW5jb3VudGVyZWQgYW4gdW5rbm93biB0eXBlIGZvciBhIHN0YXRlIHZhcmlhYmxlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVzZXJpYWxpemUgc3RhdGUgcHJvcGVydGllcyB0aGF0IGNvcnJlc3BvbmQgdG8gaGlkaW5nIFVJIGNvbnRyb2xzLlxuICAgIGdldEhpZGVQcm9wcyhtYXApLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBzdGF0ZVtwcm9wXSA9IChtYXBbcHJvcF0gPT09IFwidHJ1ZVwiKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9KTtcbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMgPSBzdGF0ZS5uZXR3b3JrU2hhcGUubGVuZ3RoO1xuICAgIGlmIChzdGF0ZS5zZWVkID09IG51bGwpIHtcbiAgICAgIHN0YXRlLnNlZWQgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoNSk7XG4gICAgfVxuICAgIE1hdGguc2VlZHJhbmRvbShzdGF0ZS5zZWVkKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyB0aGUgc3RhdGUgaW50byB0aGUgdXJsIGhhc2guXG4gICAqL1xuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gU2VyaWFsaXplIHJlZ3VsYXIgcHJvcGVydGllcy5cbiAgICBsZXQgcHJvcHM6IHN0cmluZ1tdID0gW107XG4gICAgU3RhdGUuUFJPUFMuZm9yRWFjaCgoe25hbWUsIHR5cGUsIGtleU1hcH0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAvLyBEb24ndCBzZXJpYWxpemUgbWlzc2luZyB2YWx1ZXMuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gVHlwZS5PQkpFQ1QpIHtcbiAgICAgICAgdmFsdWUgPSBnZXRLZXlGcm9tVmFsdWUoa2V5TWFwLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFR5cGUuQVJSQVlfTlVNQkVSIHx8XG4gICAgICAgICAgdHlwZSA9PT0gVHlwZS5BUlJBWV9TVFJJTkcpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKFwiLFwiKTtcbiAgICAgIH1cbiAgICAgIHByb3BzLnB1c2goYCR7bmFtZX09JHt2YWx1ZX1gKTtcbiAgICB9KTtcbiAgICAvLyBTZXJpYWxpemUgcHJvcGVydGllcyB0aGF0IGNvcnJlc3BvbmQgdG8gaGlkaW5nIFVJIGNvbnRyb2xzLlxuICAgIGdldEhpZGVQcm9wcyh0aGlzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgcHJvcHMucHVzaChgJHtwcm9wfT0ke3RoaXNbcHJvcF19YCk7XG4gICAgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwcm9wcy5qb2luKFwiJlwiKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGFsbCB0aGUgaGlkZGVuIHByb3BlcnRpZXMuICovXG4gIGdldEhpZGRlblByb3BzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKGVuZHNXaXRoKHByb3AsIEhJREVfU1RBVEVfU1VGRklYKSAmJiAgU3RyaW5nKHRoaXNbcHJvcF0pID09PSBcInRydWVcIikge1xuICAgICAgICByZXN1bHQucHVzaChwcm9wLnJlcGxhY2UoSElERV9TVEFURV9TVUZGSVgsIFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNldEhpZGVQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIGhpZGRlbjogYm9vbGVhbikge1xuICAgIHRoaXNbbmFtZSArIEhJREVfU1RBVEVfU1VGRklYXSA9IGhpZGRlbjtcbiAgfVxufVxuIl19
