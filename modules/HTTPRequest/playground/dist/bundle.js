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
function classifyTwoGaussData(numSamples, noise) {
    var points = [];
    var varianceScale = d3.scale.linear().domain([0, .5]).range([0.5, 4]);
    var variance = varianceScale(noise);
    function genGauss(cx, cy, label) {
        for (var i = 0; i < numSamples / 2; i++) {
            var x = normalRandom(cx, variance);
            var y = normalRandom(cy, variance);
            points.push({ x: x, y: y, label: label });
        }
    }
    genGauss(2, 2, 1);
    genGauss(-2, -2, -1);
    return points;
}
exports.classifyTwoGaussData = classifyTwoGaussData;
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
function classifySpiralData(numSamples, noise) {
    var points = [];
    var n = numSamples / 2;
    function genSpiral(deltaT, label) {
        for (var i = 0; i < n; i++) {
            var r = i / n * 5;
            var t = 1.75 * i / n * 2 * Math.PI + deltaT;
            var x = r * Math.sin(t) + randUniform(-1, 1) * noise;
            var y = r * Math.cos(t) + randUniform(-1, 1) * noise;
            points.push({ x: x, y: y, label: label });
        }
    }
    genSpiral(0, 1);
    genSpiral(Math.PI, -1);
    return points;
}
exports.classifySpiralData = classifySpiralData;
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
var HoverType;
(function (HoverType) {
    HoverType[HoverType["BIAS"] = 0] = "BIAS";
    HoverType[HoverType["WEIGHT"] = 1] = "WEIGHT";
})(HoverType || (HoverType = {}));
var INPUTS = {
    "x": { f: function (x, y) { return x; }, label: "X_1" },
    "y": { f: function (x, y) { return y; }, label: "X_2" },
    "xSquared": { f: function (x, y) { return x * x; }, label: "X_1^2" },
    "ySquared": { f: function (x, y) { return y * y; }, label: "X_2^2" },
    "xTimesY": { f: function (x, y) { return x * y; }, label: "X_1X_2" },
    "sinX": { f: function (x, y) { return Math.sin(x); }, label: "sin(X_1)" },
    "sinY": { f: function (x, y) { return Math.sin(y); }, label: "sin(X_2)" }
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "http://35.184.171.249/v1/run/");
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
        if (state.numHiddenLayers >= 6) {
            return;
        }
        state.networkShape[state.numHiddenLayers] = 2;
        state.numHiddenLayers++;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        var data = "learningRate=" + state.learningRate + "&activation=" + state.activation + "&regularization=" + state.regularization
            + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    });
    activationDropdown.property("value", state_1.getKeyFromValue(state_1.activations, state.activation));
    var learningRate = d3.select("#learningRate").on("change", function () {
        state.learningRate = +this.value;
        var data = "learningRate=" + state.learningRate + "&activation=" + state.activation + "&regularization=" + state.regularization
            + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        var data = "learningRate=" + state.learningRate + "&activation=" + state.activation + "&regularization=" + state.regularization
            + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "http://35.184.171.249/v1/arguments/");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Authorization", "Basic c2tqZW5hOmFtZGI5YXJzdHJhZGFsZUAmJSM=");
        xhr.send(data);
        parametersChanged = true;
        reset();
    });
    regularDropdown.property("value", state_1.getKeyFromValue(state_1.regularizations, state.regularization));
    var regularRate = d3.select("#regularRate").on("change", function () {
        state.regularizationRate = +this.value;
        var data = "learningRate=" + state.learningRate + "&activation=" + state.activation + "&regularization=" + state.regularization
            + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        var data = "learningRate=" + state.learningRate + "&activation=" + state.activation + "&regularization=" + state.regularization
            + "&regularizationRate=" + state.regularizationRate + "&problemType=" + state.problem;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        if (numNeurons >= 8) {
            return;
        }
        state.networkShape[i]++;
        var data = "batchSize=" + state.batchSize + "&noise=" + state.noise + "&trainToTestRatio=" + state.percTrainData
            + "&numHiddenLayers=" + state.numHiddenLayers + "&networkShape=" + state.networkShape;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
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
    "sigmoid": nn.Activations.SIGMOID,
    "linear": nn.Activations.LINEAR
};
exports.regularizations = {
    "none": null,
    "L1": nn.RegularizationFunction.L1,
    "L2": nn.RegularizationFunction.L2
};
exports.datasets = {
    "circle": dataset.classifyCircleData,
    "xor": dataset.classifyXORData,
    "gauss": dataset.classifyTwoGaussData,
    "spiral": dataset.classifySpiralData
};
exports.regDatasets = {
    "reg-plane": dataset.regressPlane,
    "reg-gauss": dataset.regressGaussian
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
        this.numHiddenLayers = 2;
        this.hiddenLayerControls = [];
        this.networkShape = [10, 10];
        this.x = true;
        this.y = true;
        this.xTimesY = false;
        this.xSquared = false;
        this.ySquared = false;
        this.cosX = false;
        this.sinX = false;
        this.cosY = false;
        this.sinY = false;
        this.dataset = dataset.classifyCircleData;
        this.regDataset = dataset.regressPlane;
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
    { name: "x", type: Type.BOOLEAN },
    { name: "y", type: Type.BOOLEAN },
    { name: "xTimesY", type: Type.BOOLEAN },
    { name: "xSquared", type: Type.BOOLEAN },
    { name: "ySquared", type: Type.BOOLEAN },
    { name: "cosX", type: Type.BOOLEAN },
    { name: "sinX", type: Type.BOOLEAN },
    { name: "cosY", type: Type.BOOLEAN },
    { name: "sinY", type: Type.BOOLEAN },
    { name: "collectStats", type: Type.BOOLEAN },
    { name: "tutorial", type: Type.STRING },
    { name: "problem", type: Type.OBJECT, keyMap: exports.problems },
    { name: "initZero", type: Type.BOOLEAN },
    { name: "hideText", type: Type.BOOLEAN },
];
exports.State = State;

},{"./dataset":1,"./nn":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGF0YXNldC50cyIsInNyYy9oZWF0bWFwLnRzIiwic3JjL2xpbmVjaGFydC50cyIsInNyYy9ubi50cyIsInNyYy9wbGF5Z3JvdW5kLnRzIiwic3JjL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ2tDQSxpQkFBd0IsS0FBWTtJQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBRW5CLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUU1QyxPQUFPLEVBQUUsQ0FBQztRQUVWLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDO0FBZkQsMEJBZUM7QUFJRCw4QkFBcUMsVUFBa0IsRUFBRSxLQUFhO0lBRXBFLElBQUksTUFBTSxHQUFnQixFQUFFLENBQUM7SUFFN0IsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEMsa0JBQWtCLEVBQVUsRUFBRSxFQUFVLEVBQUUs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QyxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRDtZQUNsRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLE1BQU0sR0FBZSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7UUFDL0MsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7WUFDL0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBRVosR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDaEMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFD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ZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyoqXG4gKiBBIHR3byBkaW1lbnNpb25hbCBleGFtcGxlOiB4IGFuZCB5IGNvb3JkaW5hdGVzIHdpdGggdGhlIGxhYmVsLlxuICovXG5leHBvcnQgdHlwZSBFeGFtcGxlMkQgPSB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBsYWJlbDogbnVtYmVyXG59O1xuXG50eXBlIFBvaW50ID0ge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlclxufTtcblxuXG4vKipcbiAqIFNodWZmbGVzIHRoZSBhcnJheSB1c2luZyBGaXNoZXItWWF0ZXMgYWxnb3JpdGhtLiBVc2VzIHRoZSBzZWVkcmFuZG9tXG4gKiBsaWJyYXJ5IGFzIHRoZSByYW5kb20gZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheTogYW55W10pOiB2b2lkIHtcbiAgbGV0IGNvdW50ZXIgPSBhcnJheS5sZW5ndGg7XG4gIGxldCB0ZW1wID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgLy8gV2hpbGUgdGhlcmUgYXJlIGVsZW1lbnRzIGluIHRoZSBhcnJheVxuICB3aGlsZSAoY291bnRlciA+IDApIHtcbiAgICAvLyBQaWNrIGEgcmFuZG9tIGluZGV4XG4gICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb3VudGVyKTtcbiAgICAvLyBEZWNyZWFzZSBjb3VudGVyIGJ5IDFcbiAgICBjb3VudGVyLS07XG4gICAgLy8gQW5kIHN3YXAgdGhlIGxhc3QgZWxlbWVudCB3aXRoIGl0XG4gICAgdGVtcCA9IGFycmF5W2NvdW50ZXJdO1xuICAgIGFycmF5W2NvdW50ZXJdID0gYXJyYXlbaW5kZXhdO1xuICAgIGFycmF5W2luZGV4XSA9IHRlbXA7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgRGF0YUdlbmVyYXRvciA9IChudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpID0+IEV4YW1wbGUyRFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlUd29HYXVzc0RhdGEobnVtU2FtcGxlczogbnVtYmVyLCBub2lzZTogbnVtYmVyKTpcbiAgICBFeGFtcGxlMkRbXSB7XG4gIGxldCBwb2ludHM6IEV4YW1wbGUyRFtdID0gW107XG5cbiAgbGV0IHZhcmlhbmNlU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKS5kb21haW4oWzAsIC41XSkucmFuZ2UoWzAuNSwgNF0pO1xuICBsZXQgdmFyaWFuY2UgPSB2YXJpYW5jZVNjYWxlKG5vaXNlKTtcblxuICBmdW5jdGlvbiBnZW5HYXVzcyhjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBsYWJlbDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzIC8gMjsgaSsrKSB7XG4gICAgICBsZXQgeCA9IG5vcm1hbFJhbmRvbShjeCwgdmFyaWFuY2UpO1xuICAgICAgbGV0IHkgPSBub3JtYWxSYW5kb20oY3ksIHZhcmlhbmNlKTtcbiAgICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICAgIH1cbiAgfVxuXG4gIGdlbkdhdXNzKDIsIDIsIDEpOyAvLyBHYXVzc2lhbiB3aXRoIHBvc2l0aXZlIGV4YW1wbGVzLlxuICBnZW5HYXVzcygtMiwgLTIsIC0xKTsgLy8gR2F1c3NpYW4gd2l0aCBuZWdhdGl2ZSBleGFtcGxlcy5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3Jlc3NQbGFuZShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICBFeGFtcGxlMkRbXSB7XG4gIGxldCByYWRpdXMgPSA2O1xuICBsZXQgbGFiZWxTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgLmRvbWFpbihbLTEwLCAxMF0pXG4gICAgLnJhbmdlKFstMSwgMV0pO1xuICBsZXQgZ2V0TGFiZWwgPSAoeCwgeSkgPT4gbGFiZWxTY2FsZSh4ICsgeSk7XG5cbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzOyBpKyspIHtcbiAgICBsZXQgeCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cyk7XG4gICAgbGV0IHkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRMYWJlbCh4ICsgbm9pc2VYLCB5ICsgbm9pc2VZKTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVncmVzc0dhdXNzaWFuKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcblxuICBsZXQgbGFiZWxTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgLmRvbWFpbihbMCwgMl0pXG4gICAgLnJhbmdlKFsxLCAwXSlcbiAgICAuY2xhbXAodHJ1ZSk7XG5cbiAgbGV0IGdhdXNzaWFucyA9IFtcbiAgICBbLTQsIDIuNSwgMV0sXG4gICAgWzAsIDIuNSwgLTFdLFxuICAgIFs0LCAyLjUsIDFdLFxuICAgIFstNCwgLTIuNSwgLTFdLFxuICAgIFswLCAtMi41LCAxXSxcbiAgICBbNCwgLTIuNSwgLTFdXG4gIF07XG5cbiAgZnVuY3Rpb24gZ2V0TGFiZWwoeCwgeSkge1xuICAgIC8vIENob29zZSB0aGUgb25lIHRoYXQgaXMgbWF4aW11bSBpbiBhYnMgdmFsdWUuXG4gICAgbGV0IGxhYmVsID0gMDtcbiAgICBnYXVzc2lhbnMuZm9yRWFjaCgoW2N4LCBjeSwgc2lnbl0pID0+IHtcbiAgICAgIGxldCBuZXdMYWJlbCA9IHNpZ24gKiBsYWJlbFNjYWxlKGRpc3Qoe3gsIHl9LCB7eDogY3gsIHk6IGN5fSkpO1xuICAgICAgaWYgKE1hdGguYWJzKG5ld0xhYmVsKSA+IE1hdGguYWJzKGxhYmVsKSkge1xuICAgICAgICBsYWJlbCA9IG5ld0xhYmVsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuICBsZXQgcmFkaXVzID0gNjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzOyBpKyspIHtcbiAgICBsZXQgeCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cyk7XG4gICAgbGV0IHkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpO1xuICAgIGxldCBub2lzZVggPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IG5vaXNlWSA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRMYWJlbCh4ICsgbm9pc2VYLCB5ICsgbm9pc2VZKTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfTtcbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5U3BpcmFsRGF0YShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgbGV0IG4gPSBudW1TYW1wbGVzIC8gMjtcblxuICBmdW5jdGlvbiBnZW5TcGlyYWwoZGVsdGFUOiBudW1iZXIsIGxhYmVsOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgbGV0IHIgPSBpIC8gbiAqIDU7XG4gICAgICBsZXQgdCA9IDEuNzUgKiBpIC8gbiAqIDIgKiBNYXRoLlBJICsgZGVsdGFUO1xuICAgICAgbGV0IHggPSByICogTWF0aC5zaW4odCkgKyByYW5kVW5pZm9ybSgtMSwgMSkgKiBub2lzZTtcbiAgICAgIGxldCB5ID0gciAqIE1hdGguY29zKHQpICsgcmFuZFVuaWZvcm0oLTEsIDEpICogbm9pc2U7XG4gICAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgICB9XG4gIH1cblxuICBnZW5TcGlyYWwoMCwgMSk7IC8vIFBvc2l0aXZlIGV4YW1wbGVzLlxuICBnZW5TcGlyYWwoTWF0aC5QSSwgLTEpOyAvLyBOZWdhdGl2ZSBleGFtcGxlcy5cbiAgcmV0dXJuIHBvaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Q2lyY2xlRGF0YShudW1TYW1wbGVzOiBudW1iZXIsIG5vaXNlOiBudW1iZXIpOlxuICAgIEV4YW1wbGUyRFtdIHtcbiAgbGV0IHBvaW50czogRXhhbXBsZTJEW10gPSBbXTtcbiAgbGV0IHJhZGl1cyA9IDU7XG4gIGZ1bmN0aW9uIGdldENpcmNsZUxhYmVsKHA6IFBvaW50LCBjZW50ZXI6IFBvaW50KSB7XG4gICAgcmV0dXJuIChkaXN0KHAsIGNlbnRlcikgPCAocmFkaXVzICogMC41KSkgPyAxIDogLTE7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBwb3NpdGl2ZSBwb2ludHMgaW5zaWRlIHRoZSBjaXJjbGUuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2FtcGxlcyAvIDI7IGkrKykge1xuICAgIGxldCByID0gcmFuZFVuaWZvcm0oMCwgcmFkaXVzICogMC41KTtcbiAgICBsZXQgYW5nbGUgPSByYW5kVW5pZm9ybSgwLCAyICogTWF0aC5QSSk7XG4gICAgbGV0IHggPSByICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIGxldCB5ID0gciAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICBsZXQgbm9pc2VYID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtcmFkaXVzLCByYWRpdXMpICogbm9pc2U7XG4gICAgbGV0IGxhYmVsID0gZ2V0Q2lyY2xlTGFiZWwoe3g6IHggKyBub2lzZVgsIHk6IHkgKyBub2lzZVl9LCB7eDogMCwgeTogMH0pO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgbmVnYXRpdmUgcG9pbnRzIG91dHNpZGUgdGhlIGNpcmNsZS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TYW1wbGVzIC8gMjsgaSsrKSB7XG4gICAgbGV0IHIgPSByYW5kVW5pZm9ybShyYWRpdXMgKiAwLjcsIHJhZGl1cyk7XG4gICAgbGV0IGFuZ2xlID0gcmFuZFVuaWZvcm0oMCwgMiAqIE1hdGguUEkpO1xuICAgIGxldCB4ID0gciAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICBsZXQgeSA9IHIgKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgbGV0IG5vaXNlWCA9IHJhbmRVbmlmb3JtKC1yYWRpdXMsIHJhZGl1cykgKiBub2lzZTtcbiAgICBsZXQgbm9pc2VZID0gcmFuZFVuaWZvcm0oLXJhZGl1cywgcmFkaXVzKSAqIG5vaXNlO1xuICAgIGxldCBsYWJlbCA9IGdldENpcmNsZUxhYmVsKHt4OiB4ICsgbm9pc2VYLCB5OiB5ICsgbm9pc2VZfSwge3g6IDAsIHk6IDB9KTtcbiAgICBwb2ludHMucHVzaCh7eCwgeSwgbGFiZWx9KTtcbiAgfVxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlYT1JEYXRhKG51bVNhbXBsZXM6IG51bWJlciwgbm9pc2U6IG51bWJlcik6XG4gICAgRXhhbXBsZTJEW10ge1xuICBmdW5jdGlvbiBnZXRYT1JMYWJlbChwOiBQb2ludCkgeyByZXR1cm4gcC54ICogcC55ID49IDAgPyAxIDogLTE7IH1cblxuICBsZXQgcG9pbnRzOiBFeGFtcGxlMkRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNhbXBsZXM7IGkrKykge1xuICAgIGxldCB4ID0gcmFuZFVuaWZvcm0oLTUsIDUpO1xuICAgIGxldCBwYWRkaW5nID0gMC4zO1xuICAgIHggKz0geCA+IDAgPyBwYWRkaW5nIDogLXBhZGRpbmc7ICAvLyBQYWRkaW5nLlxuICAgIGxldCB5ID0gcmFuZFVuaWZvcm0oLTUsIDUpO1xuICAgIHkgKz0geSA+IDAgPyBwYWRkaW5nIDogLXBhZGRpbmc7XG4gICAgbGV0IG5vaXNlWCA9IHJhbmRVbmlmb3JtKC01LCA1KSAqIG5vaXNlO1xuICAgIGxldCBub2lzZVkgPSByYW5kVW5pZm9ybSgtNSwgNSkgKiBub2lzZTtcbiAgICBsZXQgbGFiZWwgPSBnZXRYT1JMYWJlbCh7eDogeCArIG5vaXNlWCwgeTogeSArIG5vaXNlWX0pO1xuICAgIHBvaW50cy5wdXNoKHt4LCB5LCBsYWJlbH0pO1xuICB9XG4gIHJldHVybiBwb2ludHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNhbXBsZSBmcm9tIGEgdW5pZm9ybSBbYSwgYl0gZGlzdHJpYnV0aW9uLlxuICogVXNlcyB0aGUgc2VlZHJhbmRvbSBsaWJyYXJ5IGFzIHRoZSByYW5kb20gZ2VuZXJhdG9yLlxuICovXG5mdW5jdGlvbiByYW5kVW5pZm9ybShhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChiIC0gYSkgKyBhO1xufVxuXG4vKipcbiAqIFNhbXBsZXMgZnJvbSBhIG5vcm1hbCBkaXN0cmlidXRpb24uIFVzZXMgdGhlIHNlZWRyYW5kb20gbGlicmFyeSBhcyB0aGVcbiAqIHJhbmRvbSBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtIG1lYW4gVGhlIG1lYW4uIERlZmF1bHQgaXMgMC5cbiAqIEBwYXJhbSB2YXJpYW5jZSBUaGUgdmFyaWFuY2UuIERlZmF1bHQgaXMgMS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsUmFuZG9tKG1lYW4gPSAwLCB2YXJpYW5jZSA9IDEpOiBudW1iZXIge1xuICBsZXQgdjE6IG51bWJlciwgdjI6IG51bWJlciwgczogbnVtYmVyO1xuICBkbyB7XG4gICAgdjEgPSAyICogTWF0aC5yYW5kb20oKSAtIDE7XG4gICAgdjIgPSAyICogTWF0aC5yYW5kb20oKSAtIDE7XG4gICAgcyA9IHYxICogdjEgKyB2MiAqIHYyO1xuICB9IHdoaWxlIChzID4gMSk7XG5cbiAgbGV0IHJlc3VsdCA9IE1hdGguc3FydCgtMiAqIE1hdGgubG9nKHMpIC8gcykgKiB2MTtcbiAgcmV0dXJuIG1lYW4gKyBNYXRoLnNxcnQodmFyaWFuY2UpICogcmVzdWx0O1xufVxuXG4vKiogUmV0dXJucyB0aGUgZXVjbGVkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50cyBpbiBzcGFjZS4gKi9cbmZ1bmN0aW9uIGRpc3QoYTogUG9pbnQsIGI6IFBvaW50KTogbnVtYmVyIHtcbiAgbGV0IGR4ID0gYS54IC0gYi54O1xuICBsZXQgZHkgPSBhLnkgLSBiLnk7XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5pbXBvcnQge0V4YW1wbGUyRH0gZnJvbSBcIi4vZGF0YXNldFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXRNYXBTZXR0aW5ncyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgc2hvd0F4ZXM/OiBib29sZWFuO1xuICBub1N2Zz86IGJvb2xlYW47XG59XG5cbi8qKiBOdW1iZXIgb2YgZGlmZmVyZW50IHNoYWRlcyAoY29sb3JzKSB3aGVuIGRyYXdpbmcgYSBncmFkaWVudCBoZWF0bWFwICovXG5jb25zdCBOVU1fU0hBREVTID0gMzA7XG5cbi8qKlxuICogRHJhd3MgYSBoZWF0bWFwIHVzaW5nIGNhbnZhcy4gVXNlZCBmb3Igc2hvd2luZyB0aGUgbGVhcm5lZCBkZWNpc2lvblxuICogYm91bmRhcnkgb2YgdGhlIGNsYXNzaWZpY2F0aW9uIGFsZ29yaXRobS4gQ2FuIGFsc28gZHJhdyBkYXRhIHBvaW50c1xuICogdXNpbmcgYW4gc3ZnIG92ZXJsYXllZCBvbiB0b3Agb2YgdGhlIGNhbnZhcyBoZWF0bWFwLlxuICovXG5leHBvcnQgY2xhc3MgSGVhdE1hcCB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IEhlYXRNYXBTZXR0aW5ncyA9IHtcbiAgICBzaG93QXhlczogZmFsc2UsXG4gICAgbm9Tdmc6IGZhbHNlXG4gIH07XG4gIHByaXZhdGUgeFNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIHlTY2FsZTogZDMuc2NhbGUuTGluZWFyPG51bWJlciwgbnVtYmVyPjtcbiAgcHJpdmF0ZSBudW1TYW1wbGVzOiBudW1iZXI7XG4gIHByaXZhdGUgY29sb3I6IGQzLnNjYWxlLlF1YW50aXplPHN0cmluZz47XG4gIHByaXZhdGUgY2FudmFzOiBkMy5TZWxlY3Rpb248YW55PjtcbiAgcHJpdmF0ZSBzdmc6IGQzLlNlbGVjdGlvbjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgd2lkdGg6IG51bWJlciwgbnVtU2FtcGxlczogbnVtYmVyLCB4RG9tYWluOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgeURvbWFpbjogW251bWJlciwgbnVtYmVyXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PixcbiAgICAgIHVzZXJTZXR0aW5ncz86IEhlYXRNYXBTZXR0aW5ncykge1xuICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgbGV0IGhlaWdodCA9IHdpZHRoO1xuICAgIGxldCBwYWRkaW5nID0gdXNlclNldHRpbmdzLnNob3dBeGVzID8gMjAgOiAwO1xuXG4gICAgaWYgKHVzZXJTZXR0aW5ncyAhPSBudWxsKSB7XG4gICAgICAvLyBvdmVyd3JpdGUgdGhlIGRlZmF1bHRzIHdpdGggdGhlIHVzZXItc3BlY2lmaWVkIHNldHRpbmdzLlxuICAgICAgZm9yIChsZXQgcHJvcCBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1twcm9wXSA9IHVzZXJTZXR0aW5nc1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAuZG9tYWluKHhEb21haW4pXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoIC0gMiAqIHBhZGRpbmddKTtcblxuICAgIHRoaXMueVNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgIC5kb21haW4oeURvbWFpbilcbiAgICAgIC5yYW5nZShbaGVpZ2h0IC0gMiAqIHBhZGRpbmcsIDBdKTtcblxuICAgIC8vIEdldCBhIHJhbmdlIG9mIGNvbG9ycy5cbiAgICBsZXQgdG1wU2NhbGUgPSBkMy5zY2FsZS5saW5lYXI8c3RyaW5nLCBzdHJpbmc+KClcbiAgICAgICAgLmRvbWFpbihbMCwgLjUsIDFdKVxuICAgICAgICAucmFuZ2UoW1wiI2Y1OTMyMlwiLCBcIiNlOGVhZWJcIiwgXCIjMDg3N2JkXCJdKVxuICAgICAgICAuY2xhbXAodHJ1ZSk7XG4gICAgLy8gRHVlIHRvIG51bWVyaWNhbCBlcnJvciwgd2UgbmVlZCB0byBzcGVjaWZ5XG4gICAgLy8gZDMucmFuZ2UoMCwgZW5kICsgc21hbGxfZXBzaWxvbiwgc3RlcClcbiAgICAvLyBpbiBvcmRlciB0byBndWFyYW50ZWUgdGhhdCB3ZSB3aWxsIGhhdmUgZW5kL3N0ZXAgZW50cmllcyB3aXRoXG4gICAgLy8gdGhlIGxhc3QgZWxlbWVudCBiZWluZyBlcXVhbCB0byBlbmQuXG4gICAgbGV0IGNvbG9ycyA9IGQzLnJhbmdlKDAsIDEgKyAxRS05LCAxIC8gTlVNX1NIQURFUykubWFwKGEgPT4ge1xuICAgICAgcmV0dXJuIHRtcFNjYWxlKGEpO1xuICAgIH0pO1xuICAgIHRoaXMuY29sb3IgPSBkMy5zY2FsZS5xdWFudGl6ZTxzdHJpbmc+KClcbiAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWy0xLCAxXSlcbiAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShjb2xvcnMpO1xuXG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLmFwcGVuZChcImRpdlwiKVxuICAgICAgLnN0eWxlKHtcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICB0b3A6IGAtJHtwYWRkaW5nfXB4YCxcbiAgICAgICAgbGVmdDogYC0ke3BhZGRpbmd9cHhgXG4gICAgICB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IGNvbnRhaW5lci5hcHBlbmQoXCJjYW52YXNcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgbnVtU2FtcGxlcylcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIG51bVNhbXBsZXMpXG4gICAgICAuc3R5bGUoXCJ3aWR0aFwiLCAod2lkdGggLSAyICogcGFkZGluZykgKyBcInB4XCIpXG4gICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgKGhlaWdodCAtIDIgKiBwYWRkaW5nKSArIFwicHhcIilcbiAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgIC5zdHlsZShcInRvcFwiLCBgJHtwYWRkaW5nfXB4YClcbiAgICAgIC5zdHlsZShcImxlZnRcIiwgYCR7cGFkZGluZ31weGApO1xuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLm5vU3ZnKSB7XG4gICAgICB0aGlzLnN2ZyA9IGNvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cih7XG4gICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aCxcbiAgICAgICAgICBcImhlaWdodFwiOiBoZWlnaHRcbiAgICAgIH0pLnN0eWxlKHtcbiAgICAgICAgLy8gT3ZlcmxheSB0aGUgc3ZnIG9uIHRvcCBvZiB0aGUgY2FudmFzLlxuICAgICAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICAgICAgXCJsZWZ0XCI6IFwiMFwiLFxuICAgICAgICBcInRvcFwiOiBcIjBcIlxuICAgICAgfSkuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cGFkZGluZ30sJHtwYWRkaW5nfSlgKTtcblxuICAgICAgdGhpcy5zdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0cmFpblwiKTtcbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGVzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93QXhlcykge1xuICAgICAgbGV0IHhBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgICAgICAuc2NhbGUodGhpcy54U2NhbGUpXG4gICAgICAgIC5vcmllbnQoXCJib3R0b21cIik7XG5cbiAgICAgIGxldCB5QXhpcyA9IGQzLnN2Zy5heGlzKClcbiAgICAgICAgLnNjYWxlKHRoaXMueVNjYWxlKVxuICAgICAgICAub3JpZW50KFwicmlnaHRcIik7XG5cbiAgICAgIHRoaXMuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHQgLSAyICogcGFkZGluZ30pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgICB0aGlzLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAod2lkdGggLSAyICogcGFkZGluZykgKyBcIiwwKVwiKVxuICAgICAgICAuY2FsbCh5QXhpcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGVzdFBvaW50cyhwb2ludHM6IEV4YW1wbGUyRFtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mubm9TdmcpIHtcbiAgICAgIHRocm93IEVycm9yKFwiQ2FuJ3QgYWRkIHBvaW50cyBzaW5jZSBub1N2Zz10cnVlXCIpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNpcmNsZXModGhpcy5zdmcuc2VsZWN0KFwiZy50ZXN0XCIpLCBwb2ludHMpO1xuICB9XG5cbiAgdXBkYXRlUG9pbnRzKHBvaW50czogRXhhbXBsZTJEW10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5ub1N2Zykge1xuICAgICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBhZGQgcG9pbnRzIHNpbmNlIG5vU3ZnPXRydWVcIik7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2lyY2xlcyh0aGlzLnN2Zy5zZWxlY3QoXCJnLnRyYWluXCIpLCBwb2ludHMpO1xuICB9XG5cbiAgdXBkYXRlQmFja2dyb3VuZChkYXRhOiBudW1iZXJbXVtdLCBkaXNjcmV0aXplOiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IGR4ID0gZGF0YVswXS5sZW5ndGg7XG4gICAgbGV0IGR5ID0gZGF0YS5sZW5ndGg7XG5cbiAgICBpZiAoZHggIT09IHRoaXMubnVtU2FtcGxlcyB8fCBkeSAhPT0gdGhpcy5udW1TYW1wbGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJUaGUgcHJvdmlkZWQgZGF0YSBtYXRyaXggbXVzdCBiZSBvZiBzaXplIFwiICtcbiAgICAgICAgICBcIm51bVNhbXBsZXMgWCBudW1TYW1wbGVzXCIpO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgdGhlIHBpeGVsIGNvbG9yczsgc2NhbGVkIGJ5IENTUy5cbiAgICBsZXQgY29udGV4dCA9ICh0aGlzLmNhbnZhcy5ub2RlKCkgYXMgSFRNTENhbnZhc0VsZW1lbnQpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgaW1hZ2UgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YShkeCwgZHkpO1xuXG4gICAgZm9yIChsZXQgeSA9IDAsIHAgPSAtMTsgeSA8IGR5OyArK3kpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZHg7ICsreCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW3hdW3ldO1xuICAgICAgICBpZiAoZGlzY3JldGl6ZSkge1xuICAgICAgICAgIHZhbHVlID0gKHZhbHVlID49IDAgPyAxIDogLTEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjID0gZDMucmdiKHRoaXMuY29sb3IodmFsdWUpKTtcbiAgICAgICAgaW1hZ2UuZGF0YVsrK3BdID0gYy5yO1xuICAgICAgICBpbWFnZS5kYXRhWysrcF0gPSBjLmc7XG4gICAgICAgIGltYWdlLmRhdGFbKytwXSA9IGMuYjtcbiAgICAgICAgaW1hZ2UuZGF0YVsrK3BdID0gMTYwO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZSwgMCwgMCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNpcmNsZXMoY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PiwgcG9pbnRzOiBFeGFtcGxlMkRbXSkge1xuICAgIC8vIEtlZXAgb25seSBwb2ludHMgdGhhdCBhcmUgaW5zaWRlIHRoZSBib3VuZHMuXG4gICAgbGV0IHhEb21haW4gPSB0aGlzLnhTY2FsZS5kb21haW4oKTtcbiAgICBsZXQgeURvbWFpbiA9IHRoaXMueVNjYWxlLmRvbWFpbigpO1xuICAgIHBvaW50cyA9IHBvaW50cy5maWx0ZXIocCA9PiB7XG4gICAgICByZXR1cm4gcC54ID49IHhEb21haW5bMF0gJiYgcC54IDw9IHhEb21haW5bMV1cbiAgICAgICAgJiYgcC55ID49IHlEb21haW5bMF0gJiYgcC55IDw9IHlEb21haW5bMV07XG4gICAgfSk7XG5cbiAgICAvLyBBdHRhY2ggZGF0YSB0byBpbml0aWFsbHkgZW1wdHkgc2VsZWN0aW9uLlxuICAgIGxldCBzZWxlY3Rpb24gPSBjb250YWluZXIuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLmRhdGEocG9pbnRzKTtcblxuICAgIC8vIEluc2VydCBlbGVtZW50cyB0byBtYXRjaCBsZW5ndGggb2YgcG9pbnRzIGFycmF5LlxuICAgIHNlbGVjdGlvbi5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiclwiLCAzKTtcblxuICAgIC8vIFVwZGF0ZSBwb2ludHMgdG8gYmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24uXG4gICAgc2VsZWN0aW9uXG4gICAgICAuYXR0cih7XG4gICAgICAgIGN4OiAoZDogRXhhbXBsZTJEKSA9PiB0aGlzLnhTY2FsZShkLngpLFxuICAgICAgICBjeTogKGQ6IEV4YW1wbGUyRCkgPT4gdGhpcy55U2NhbGUoZC55KSxcbiAgICAgIH0pXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gdGhpcy5jb2xvcihkLmxhYmVsKSk7XG5cbiAgICAvLyBSZW1vdmUgcG9pbnRzIGlmIHRoZSBsZW5ndGggaGFzIGdvbmUgZG93bi5cbiAgICBzZWxlY3Rpb24uZXhpdCgpLnJlbW92ZSgpO1xuICB9XG59ICAvLyBDbG9zZSBjbGFzcyBIZWF0TWFwLlxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlTWF0cml4KG1hdHJpeDogbnVtYmVyW11bXSwgZmFjdG9yOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgaWYgKG1hdHJpeC5sZW5ndGggIT09IG1hdHJpeFswXS5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcHJvdmlkZWQgbWF0cml4IG11c3QgYmUgYSBzcXVhcmUgbWF0cml4XCIpO1xuICB9XG4gIGlmIChtYXRyaXgubGVuZ3RoICUgZmFjdG9yICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHdpZHRoL2hlaWdodCBvZiB0aGUgbWF0cml4IG11c3QgYmUgZGl2aXNpYmxlIGJ5IFwiICtcbiAgICAgICAgXCJ0aGUgcmVkdWN0aW9uIGZhY3RvclwiKTtcbiAgfVxuICBsZXQgcmVzdWx0OiBudW1iZXJbXVtdID0gbmV3IEFycmF5KG1hdHJpeC5sZW5ndGggLyBmYWN0b3IpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkgKz0gZmFjdG9yKSB7XG4gICAgcmVzdWx0W2kgLyBmYWN0b3JdID0gbmV3IEFycmF5KG1hdHJpeC5sZW5ndGggLyBmYWN0b3IpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4Lmxlbmd0aDsgaiArPSBmYWN0b3IpIHtcbiAgICAgIGxldCBhdmcgPSAwO1xuICAgICAgLy8gU3VtIGFsbCB0aGUgdmFsdWVzIGluIHRoZSBuZWlnaGJvcmhvb2QuXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGZhY3RvcjsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgZmFjdG9yOyBsKyspIHtcbiAgICAgICAgICBhdmcgKz0gbWF0cml4W2kgKyBrXVtqICsgbF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF2ZyAvPSAoZmFjdG9yICogZmFjdG9yKTtcbiAgICAgIHJlc3VsdFtpIC8gZmFjdG9yXVtqIC8gZmFjdG9yXSA9IGF2ZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbnR5cGUgRGF0YVBvaW50ID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcltdO1xufTtcblxuLyoqXG4gKiBBIG11bHRpLXNlcmllcyBsaW5lIGNoYXJ0IHRoYXQgYWxsb3dzIHlvdSB0byBhcHBlbmQgbmV3IGRhdGEgcG9pbnRzXG4gKiBhcyBkYXRhIGJlY29tZXMgYXZhaWxhYmxlLlxuICovXG5leHBvcnQgY2xhc3MgQXBwZW5kaW5nTGluZUNoYXJ0IHtcbiAgcHJpdmF0ZSBudW1MaW5lczogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFQb2ludFtdID0gW107XG4gIHByaXZhdGUgc3ZnOiBkMy5TZWxlY3Rpb248YW55PjtcbiAgcHJpdmF0ZSB4U2NhbGU6IGQzLnNjYWxlLkxpbmVhcjxudW1iZXIsIG51bWJlcj47XG4gIHByaXZhdGUgeVNjYWxlOiBkMy5zY2FsZS5MaW5lYXI8bnVtYmVyLCBudW1iZXI+O1xuICBwcml2YXRlIHBhdGhzOiBBcnJheTxkMy5TZWxlY3Rpb248YW55Pj47XG4gIHByaXZhdGUgbGluZUNvbG9yczogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSBtaW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgcHJpdmF0ZSBtYXhZID0gTnVtYmVyLk1JTl9WQUxVRTtcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LCBsaW5lQ29sb3JzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubGluZUNvbG9ycyA9IGxpbmVDb2xvcnM7XG4gICAgdGhpcy5udW1MaW5lcyA9IGxpbmVDb2xvcnMubGVuZ3RoO1xuICAgIGxldCBub2RlID0gY29udGFpbmVyLm5vZGUoKSBhcyBIVE1MRWxlbWVudDtcbiAgICBsZXQgdG90YWxXaWR0aCA9IG5vZGUub2Zmc2V0V2lkdGg7XG4gICAgbGV0IHRvdGFsSGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IG1hcmdpbiA9IHt0b3A6IDIsIHJpZ2h0OiAwLCBib3R0b206IDIsIGxlZnQ6IDJ9O1xuICAgIGxldCB3aWR0aCA9IHRvdGFsV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBsZXQgaGVpZ2h0ID0gdG90YWxIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGUubGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIDBdKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMF0pXG4gICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xuXG4gICAgdGhpcy5zdmcgPSBjb250YWluZXIuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKTtcblxuICAgIHRoaXMucGF0aHMgPSBuZXcgQXJyYXkodGhpcy5udW1MaW5lcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpbmVzOyBpKyspIHtcbiAgICAgIHRoaXMucGF0aHNbaV0gPSB0aGlzLnN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAgIC5zdHlsZSh7XG4gICAgICAgICAgXCJmaWxsXCI6IFwibm9uZVwiLFxuICAgICAgICAgIFwic3Ryb2tlXCI6IGxpbmVDb2xvcnNbaV0sXG4gICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogXCIxLjVweFwiXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMucmVkcmF3KCk7XG4gICAgdGhpcy5taW5ZID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB0aGlzLm1heFkgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICB9XG5cbiAgYWRkRGF0YVBvaW50KGRhdGFQb2ludDogbnVtYmVyW10pIHtcbiAgICBpZiAoZGF0YVBvaW50Lmxlbmd0aCAhPT0gdGhpcy5udW1MaW5lcykge1xuICAgICAgdGhyb3cgRXJyb3IoXCJMZW5ndGggb2YgZGF0YVBvaW50IG11c3QgZXF1YWwgbnVtYmVyIG9mIGxpbmVzXCIpO1xuICAgIH1cbiAgICBkYXRhUG9pbnQuZm9yRWFjaCh5ID0+IHtcbiAgICAgIHRoaXMubWluWSA9IE1hdGgubWluKHRoaXMubWluWSwgeSk7XG4gICAgICB0aGlzLm1heFkgPSBNYXRoLm1heCh0aGlzLm1heFksIHkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhLnB1c2goe3g6IHRoaXMuZGF0YS5sZW5ndGggKyAxLCB5OiBkYXRhUG9pbnR9KTtcbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWRyYXcoKSB7XG4gICAgLy8gQWRqdXN0IHRoZSB4IGFuZCB5IGRvbWFpbi5cbiAgICB0aGlzLnhTY2FsZS5kb21haW4oWzEsIHRoaXMuZGF0YS5sZW5ndGhdKTtcbiAgICB0aGlzLnlTY2FsZS5kb21haW4oW3RoaXMubWluWSwgdGhpcy5tYXhZXSk7XG4gICAgLy8gQWRqdXN0IGFsbCB0aGUgPHBhdGg+IGVsZW1lbnRzIChsaW5lcykuXG4gICAgbGV0IGdldFBhdGhNYXAgPSAobGluZUluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiBkMy5zdmcubGluZTxEYXRhUG9pbnQ+KClcbiAgICAgIC54KGQgPT4gdGhpcy54U2NhbGUoZC54KSlcbiAgICAgIC55KGQgPT4gdGhpcy55U2NhbGUoZC55W2xpbmVJbmRleF0pKTtcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaW5lczsgaSsrKSB7XG4gICAgICB0aGlzLnBhdGhzW2ldLmRhdHVtKHRoaXMuZGF0YSkuYXR0cihcImRcIiwgZ2V0UGF0aE1hcChpKSk7XG4gICAgfVxuICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qKlxuICogQSBub2RlIGluIGEgbmV1cmFsIG5ldHdvcmsuIEVhY2ggbm9kZSBoYXMgYSBzdGF0ZVxuICogKHRvdGFsIGlucHV0LCBvdXRwdXQsIGFuZCB0aGVpciByZXNwZWN0aXZlbHkgZGVyaXZhdGl2ZXMpIHdoaWNoIGNoYW5nZXNcbiAqIGFmdGVyIGV2ZXJ5IGZvcndhcmQgYW5kIGJhY2sgcHJvcGFnYXRpb24gcnVuLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gIGlkOiBzdHJpbmc7XG4gIC8qKiBMaXN0IG9mIGlucHV0IGxpbmtzLiAqL1xuICBpbnB1dExpbmtzOiBMaW5rW10gPSBbXTtcbiAgYmlhcyA9IDAuMTtcbiAgLyoqIExpc3Qgb2Ygb3V0cHV0IGxpbmtzLiAqL1xuICBvdXRwdXRzOiBMaW5rW10gPSBbXTtcbiAgdG90YWxJbnB1dDogbnVtYmVyO1xuICBvdXRwdXQ6IG51bWJlcjtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgbm9kZSdzIG91dHB1dC4gKi9cbiAgb3V0cHV0RGVyID0gMDtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgbm9kZSdzIHRvdGFsIGlucHV0LiAqL1xuICBpbnB1dERlciA9IDA7XG4gIC8qKlxuICAgKiBBY2N1bXVsYXRlZCBlcnJvciBkZXJpdmF0aXZlIHdpdGggcmVzcGVjdCB0byB0aGlzIG5vZGUncyB0b3RhbCBpbnB1dCBzaW5jZVxuICAgKiB0aGUgbGFzdCB1cGRhdGUuIFRoaXMgZGVyaXZhdGl2ZSBlcXVhbHMgZEUvZGIgd2hlcmUgYiBpcyB0aGUgbm9kZSdzXG4gICAqIGJpYXMgdGVybS5cbiAgICovXG4gIGFjY0lucHV0RGVyID0gMDtcbiAgLyoqXG4gICAqIE51bWJlciBvZiBhY2N1bXVsYXRlZCBlcnIuIGRlcml2YXRpdmVzIHdpdGggcmVzcGVjdCB0byB0aGUgdG90YWwgaW5wdXRcbiAgICogc2luY2UgdGhlIGxhc3QgdXBkYXRlLlxuICAgKi9cbiAgbnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgLyoqIEFjdGl2YXRpb24gZnVuY3Rpb24gdGhhdCB0YWtlcyB0b3RhbCBpbnB1dCBhbmQgcmV0dXJucyBub2RlJ3Mgb3V0cHV0ICovXG4gIGFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBub2RlIHdpdGggdGhlIHByb3ZpZGVkIGlkIGFuZCBhY3RpdmF0aW9uIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgYWN0aXZhdGlvbjogQWN0aXZhdGlvbkZ1bmN0aW9uLCBpbml0WmVybz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5hY3RpdmF0aW9uID0gYWN0aXZhdGlvbjtcbiAgICBpZiAoaW5pdFplcm8pIHtcbiAgICAgIHRoaXMuYmlhcyA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlY29tcHV0ZXMgdGhlIG5vZGUncyBvdXRwdXQgYW5kIHJldHVybnMgaXQuICovXG4gIHVwZGF0ZU91dHB1dCgpOiBudW1iZXIge1xuICAgIC8vIFN0b3JlcyB0b3RhbCBpbnB1dCBpbnRvIHRoZSBub2RlLlxuICAgIHRoaXMudG90YWxJbnB1dCA9IHRoaXMuYmlhcztcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGxpbmsgPSB0aGlzLmlucHV0TGlua3Nbal07XG4gICAgICB0aGlzLnRvdGFsSW5wdXQgKz0gbGluay53ZWlnaHQgKiBsaW5rLnNvdXJjZS5vdXRwdXQ7XG4gICAgfVxuICAgIHRoaXMub3V0cHV0ID0gdGhpcy5hY3RpdmF0aW9uLm91dHB1dCh0aGlzLnRvdGFsSW5wdXQpO1xuICAgIHJldHVybiB0aGlzLm91dHB1dDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGVycm9yIGZ1bmN0aW9uIGFuZCBpdHMgZGVyaXZhdGl2ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcnJvckZ1bmN0aW9uIHtcbiAgZXJyb3I6IChvdXRwdXQ6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIpID0+IG51bWJlcjtcbiAgZGVyOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBBIG5vZGUncyBhY3RpdmF0aW9uIGZ1bmN0aW9uIGFuZCBpdHMgZGVyaXZhdGl2ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZhdGlvbkZ1bmN0aW9uIHtcbiAgb3V0cHV0OiAoaW5wdXQ6IG51bWJlcikgPT4gbnVtYmVyO1xuICBkZXI6IChpbnB1dDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBGdW5jdGlvbiB0aGF0IGNvbXB1dGVzIGEgcGVuYWx0eSBjb3N0IGZvciBhIGdpdmVuIHdlaWdodCBpbiB0aGUgbmV0d29yay4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVndWxhcml6YXRpb25GdW5jdGlvbiB7XG4gIG91dHB1dDogKHdlaWdodDogbnVtYmVyKSA9PiBudW1iZXI7XG4gIGRlcjogKHdlaWdodDogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbi8qKiBCdWlsdC1pbiBlcnJvciBmdW5jdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBFcnJvcnMge1xuICBwdWJsaWMgc3RhdGljIFNRVUFSRTogRXJyb3JGdW5jdGlvbiA9IHtcbiAgICBlcnJvcjogKG91dHB1dDogbnVtYmVyLCB0YXJnZXQ6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgIDAuNSAqIE1hdGgucG93KG91dHB1dCAtIHRhcmdldCwgMiksXG4gICAgZGVyOiAob3V0cHV0OiBudW1iZXIsIHRhcmdldDogbnVtYmVyKSA9PiBvdXRwdXQgLSB0YXJnZXRcbiAgfTtcbn1cblxuLyoqIFBvbHlmaWxsIGZvciBUQU5IICovXG4oTWF0aCBhcyBhbnkpLnRhbmggPSAoTWF0aCBhcyBhbnkpLnRhbmggfHwgZnVuY3Rpb24oeCkge1xuICBpZiAoeCA9PT0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh4ID09PSAtSW5maW5pdHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGUyeCA9IE1hdGguZXhwKDIgKiB4KTtcbiAgICByZXR1cm4gKGUyeCAtIDEpIC8gKGUyeCArIDEpO1xuICB9XG59O1xuXG4vKiogQnVpbHQtaW4gYWN0aXZhdGlvbiBmdW5jdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBBY3RpdmF0aW9ucyB7XG4gIHB1YmxpYyBzdGF0aWMgVEFOSDogQWN0aXZhdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogeCA9PiAoTWF0aCBhcyBhbnkpLnRhbmgoeCksXG4gICAgZGVyOiB4ID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSBBY3RpdmF0aW9ucy5UQU5ILm91dHB1dCh4KTtcbiAgICAgIHJldHVybiAxIC0gb3V0cHV0ICogb3V0cHV0O1xuICAgIH1cbiAgfTtcbiAgcHVibGljIHN0YXRpYyBSRUxVOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IE1hdGgubWF4KDAsIHgpLFxuICAgIGRlcjogeCA9PiB4IDw9IDAgPyAwIDogMVxuICB9O1xuICBwdWJsaWMgc3RhdGljIFNJR01PSUQ6IEFjdGl2YXRpb25GdW5jdGlvbiA9IHtcbiAgICBvdXRwdXQ6IHggPT4gMSAvICgxICsgTWF0aC5leHAoLXgpKSxcbiAgICBkZXI6IHggPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IEFjdGl2YXRpb25zLlNJR01PSUQub3V0cHV0KHgpO1xuICAgICAgcmV0dXJuIG91dHB1dCAqICgxIC0gb3V0cHV0KTtcbiAgICB9XG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgTElORUFSOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSB7XG4gICAgb3V0cHV0OiB4ID0+IHgsXG4gICAgZGVyOiB4ID0+IDFcbiAgfTtcbn1cblxuLyoqIEJ1aWxkLWluIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9ucyAqL1xuZXhwb3J0IGNsYXNzIFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24ge1xuICBwdWJsaWMgc3RhdGljIEwxOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogdyA9PiBNYXRoLmFicyh3KSxcbiAgICBkZXI6IHcgPT4gdyA8IDAgPyAtMSA6ICh3ID4gMCA/IDEgOiAwKVxuICB9O1xuICBwdWJsaWMgc3RhdGljIEwyOiBSZWd1bGFyaXphdGlvbkZ1bmN0aW9uID0ge1xuICAgIG91dHB1dDogdyA9PiAwLjUgKiB3ICogdyxcbiAgICBkZXI6IHcgPT4gd1xuICB9O1xufVxuXG4vKipcbiAqIEEgbGluayBpbiBhIG5ldXJhbCBuZXR3b3JrLiBFYWNoIGxpbmsgaGFzIGEgd2VpZ2h0IGFuZCBhIHNvdXJjZSBhbmRcbiAqIGRlc3RpbmF0aW9uIG5vZGUuIEFsc28gaXQgaGFzIGFuIGludGVybmFsIHN0YXRlIChlcnJvciBkZXJpdmF0aXZlXG4gKiB3aXRoIHJlc3BlY3QgdG8gYSBwYXJ0aWN1bGFyIGlucHV0KSB3aGljaCBnZXRzIHVwZGF0ZWQgYWZ0ZXJcbiAqIGEgcnVuIG9mIGJhY2sgcHJvcGFnYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaW5rIHtcbiAgaWQ6IHN0cmluZztcbiAgc291cmNlOiBOb2RlO1xuICBkZXN0OiBOb2RlO1xuICB3ZWlnaHQgPSBNYXRoLnJhbmRvbSgpIC0gMC41O1xuICBpc0RlYWQgPSBmYWxzZTtcbiAgLyoqIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIHRoaXMgd2VpZ2h0LiAqL1xuICBlcnJvckRlciA9IDA7XG4gIC8qKiBBY2N1bXVsYXRlZCBlcnJvciBkZXJpdmF0aXZlIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZS4gKi9cbiAgYWNjRXJyb3JEZXIgPSAwO1xuICAvKiogTnVtYmVyIG9mIGFjY3VtdWxhdGVkIGRlcml2YXRpdmVzIHNpbmNlIHRoZSBsYXN0IHVwZGF0ZS4gKi9cbiAgbnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgcmVndWxhcml6YXRpb246IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBsaW5rIGluIHRoZSBuZXVyYWwgbmV0d29yayBpbml0aWFsaXplZCB3aXRoIHJhbmRvbSB3ZWlnaHQuXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBub2RlLlxuICAgKiBAcGFyYW0gZGVzdCBUaGUgZGVzdGluYXRpb24gbm9kZS5cbiAgICogQHBhcmFtIHJlZ3VsYXJpemF0aW9uIFRoZSByZWd1bGFyaXphdGlvbiBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIHRoZVxuICAgKiAgICAgcGVuYWx0eSBmb3IgdGhpcyB3ZWlnaHQuIElmIG51bGwsIHRoZXJlIHdpbGwgYmUgbm8gcmVndWxhcml6YXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IE5vZGUsIGRlc3Q6IE5vZGUsXG4gICAgICByZWd1bGFyaXphdGlvbjogUmVndWxhcml6YXRpb25GdW5jdGlvbiwgaW5pdFplcm8/OiBib29sZWFuKSB7XG4gICAgdGhpcy5pZCA9IHNvdXJjZS5pZCArIFwiLVwiICsgZGVzdC5pZDtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmRlc3QgPSBkZXN0O1xuICAgIHRoaXMucmVndWxhcml6YXRpb24gPSByZWd1bGFyaXphdGlvbjtcbiAgICBpZiAoaW5pdFplcm8pIHtcbiAgICAgIHRoaXMud2VpZ2h0ID0gMDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgYSBuZXVyYWwgbmV0d29yay5cbiAqXG4gKiBAcGFyYW0gbmV0d29ya1NoYXBlIFRoZSBzaGFwZSBvZiB0aGUgbmV0d29yay4gRS5nLiBbMSwgMiwgMywgMV0gbWVhbnNcbiAqICAgdGhlIG5ldHdvcmsgd2lsbCBoYXZlIG9uZSBpbnB1dCBub2RlLCAyIG5vZGVzIGluIGZpcnN0IGhpZGRlbiBsYXllcixcbiAqICAgMyBub2RlcyBpbiBzZWNvbmQgaGlkZGVuIGxheWVyIGFuZCAxIG91dHB1dCBub2RlLlxuICogQHBhcmFtIGFjdGl2YXRpb24gVGhlIGFjdGl2YXRpb24gZnVuY3Rpb24gb2YgZXZlcnkgaGlkZGVuIG5vZGUuXG4gKiBAcGFyYW0gb3V0cHV0QWN0aXZhdGlvbiBUaGUgYWN0aXZhdGlvbiBmdW5jdGlvbiBmb3IgdGhlIG91dHB1dCBub2Rlcy5cbiAqIEBwYXJhbSByZWd1bGFyaXphdGlvbiBUaGUgcmVndWxhcml6YXRpb24gZnVuY3Rpb24gdGhhdCBjb21wdXRlcyBhIHBlbmFsdHlcbiAqICAgICBmb3IgYSBnaXZlbiB3ZWlnaHQgKHBhcmFtZXRlcikgaW4gdGhlIG5ldHdvcmsuIElmIG51bGwsIHRoZXJlIHdpbGwgYmVcbiAqICAgICBubyByZWd1bGFyaXphdGlvbi5cbiAqIEBwYXJhbSBpbnB1dElkcyBMaXN0IG9mIGlkcyBmb3IgdGhlIGlucHV0IG5vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROZXR3b3JrKFxuICAgIG5ldHdvcmtTaGFwZTogbnVtYmVyW10sIGFjdGl2YXRpb246IEFjdGl2YXRpb25GdW5jdGlvbixcbiAgICBvdXRwdXRBY3RpdmF0aW9uOiBBY3RpdmF0aW9uRnVuY3Rpb24sXG4gICAgcmVndWxhcml6YXRpb246IFJlZ3VsYXJpemF0aW9uRnVuY3Rpb24sXG4gICAgaW5wdXRJZHM6IHN0cmluZ1tdLCBpbml0WmVybz86IGJvb2xlYW4pOiBOb2RlW11bXSB7XG4gIGxldCBudW1MYXllcnMgPSBuZXR3b3JrU2hhcGUubGVuZ3RoO1xuICBsZXQgaWQgPSAxO1xuICAvKiogTGlzdCBvZiBsYXllcnMsIHdpdGggZWFjaCBsYXllciBiZWluZyBhIGxpc3Qgb2Ygbm9kZXMuICovXG4gIGxldCBuZXR3b3JrOiBOb2RlW11bXSA9IFtdO1xuICBmb3IgKGxldCBsYXllcklkeCA9IDA7IGxheWVySWR4IDwgbnVtTGF5ZXJzOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGlzT3V0cHV0TGF5ZXIgPSBsYXllcklkeCA9PT0gbnVtTGF5ZXJzIC0gMTtcbiAgICBsZXQgaXNJbnB1dExheWVyID0gbGF5ZXJJZHggPT09IDA7XG4gICAgbGV0IGN1cnJlbnRMYXllcjogTm9kZVtdID0gW107XG4gICAgbmV0d29yay5wdXNoKGN1cnJlbnRMYXllcik7XG4gICAgbGV0IG51bU5vZGVzID0gbmV0d29ya1NoYXBlW2xheWVySWR4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgIGxldCBub2RlSWQgPSBpZC50b1N0cmluZygpO1xuICAgICAgaWYgKGlzSW5wdXRMYXllcikge1xuICAgICAgICBub2RlSWQgPSBpbnB1dElkc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkKys7XG4gICAgICB9XG4gICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKG5vZGVJZCxcbiAgICAgICAgICBpc091dHB1dExheWVyID8gb3V0cHV0QWN0aXZhdGlvbiA6IGFjdGl2YXRpb24sIGluaXRaZXJvKTtcbiAgICAgIGN1cnJlbnRMYXllci5wdXNoKG5vZGUpO1xuICAgICAgaWYgKGxheWVySWR4ID49IDEpIHtcbiAgICAgICAgLy8gQWRkIGxpbmtzIGZyb20gbm9kZXMgaW4gdGhlIHByZXZpb3VzIGxheWVyIHRvIHRoaXMgbm9kZS5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXR3b3JrW2xheWVySWR4IC0gMV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgcHJldk5vZGUgPSBuZXR3b3JrW2xheWVySWR4IC0gMV1bal07XG4gICAgICAgICAgbGV0IGxpbmsgPSBuZXcgTGluayhwcmV2Tm9kZSwgbm9kZSwgcmVndWxhcml6YXRpb24sIGluaXRaZXJvKTtcbiAgICAgICAgICBwcmV2Tm9kZS5vdXRwdXRzLnB1c2gobGluayk7XG4gICAgICAgICAgbm9kZS5pbnB1dExpbmtzLnB1c2gobGluayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldHdvcms7XG59XG5cbi8qKlxuICogUnVucyBhIGZvcndhcmQgcHJvcGFnYXRpb24gb2YgdGhlIHByb3ZpZGVkIGlucHV0IHRocm91Z2ggdGhlIHByb3ZpZGVkXG4gKiBuZXR3b3JrLiBUaGlzIG1ldGhvZCBtb2RpZmllcyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIG5ldHdvcmsgLSB0aGVcbiAqIHRvdGFsIGlucHV0IGFuZCBvdXRwdXQgb2YgZWFjaCBub2RlIGluIHRoZSBuZXR3b3JrLlxuICpcbiAqIEBwYXJhbSBuZXR3b3JrIFRoZSBuZXVyYWwgbmV0d29yay5cbiAqIEBwYXJhbSBpbnB1dHMgVGhlIGlucHV0IGFycmF5LiBJdHMgbGVuZ3RoIHNob3VsZCBtYXRjaCB0aGUgbnVtYmVyIG9mIGlucHV0XG4gKiAgICAgbm9kZXMgaW4gdGhlIG5ldHdvcmsuXG4gKiBAcmV0dXJuIFRoZSBmaW5hbCBvdXRwdXQgb2YgdGhlIG5ldHdvcmsuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkUHJvcChuZXR3b3JrOiBOb2RlW11bXSwgaW5wdXRzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGxldCBpbnB1dExheWVyID0gbmV0d29ya1swXTtcbiAgaWYgKGlucHV0cy5sZW5ndGggIT09IGlucHV0TGF5ZXIubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG51bWJlciBvZiBpbnB1dHMgbXVzdCBtYXRjaCB0aGUgbnVtYmVyIG9mIG5vZGVzIGluXCIgK1xuICAgICAgICBcIiB0aGUgaW5wdXQgbGF5ZXJcIik7XG4gIH1cbiAgLy8gVXBkYXRlIHRoZSBpbnB1dCBsYXllci5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBpbnB1dExheWVyW2ldO1xuICAgIG5vZGUub3V0cHV0ID0gaW5wdXRzW2ldO1xuICB9XG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBVcGRhdGUgYWxsIHRoZSBub2RlcyBpbiB0aGlzIGxheWVyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIG5vZGUudXBkYXRlT3V0cHV0KCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXR3b3JrW25ldHdvcmsubGVuZ3RoIC0gMV1bMF0ub3V0cHV0O1xufVxuXG4vKipcbiAqIFJ1bnMgYSBiYWNrd2FyZCBwcm9wYWdhdGlvbiB1c2luZyB0aGUgcHJvdmlkZWQgdGFyZ2V0IGFuZCB0aGVcbiAqIGNvbXB1dGVkIG91dHB1dCBvZiB0aGUgcHJldmlvdXMgY2FsbCB0byBmb3J3YXJkIHByb3BhZ2F0aW9uLlxuICogVGhpcyBtZXRob2QgbW9kaWZpZXMgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBuZXR3b3JrIC0gdGhlIGVycm9yXG4gKiBkZXJpdmF0aXZlcyB3aXRoIHJlc3BlY3QgdG8gZWFjaCBub2RlLCBhbmQgZWFjaCB3ZWlnaHRcbiAqIGluIHRoZSBuZXR3b3JrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFja1Byb3AobmV0d29yazogTm9kZVtdW10sIHRhcmdldDogbnVtYmVyLFxuICAgIGVycm9yRnVuYzogRXJyb3JGdW5jdGlvbik6IHZvaWQge1xuICAvLyBUaGUgb3V0cHV0IG5vZGUgaXMgYSBzcGVjaWFsIGNhc2UuIFdlIHVzZSB0aGUgdXNlci1kZWZpbmVkIGVycm9yXG4gIC8vIGZ1bmN0aW9uIGZvciB0aGUgZGVyaXZhdGl2ZS5cbiAgbGV0IG91dHB1dE5vZGUgPSBuZXR3b3JrW25ldHdvcmsubGVuZ3RoIC0gMV1bMF07XG4gIG91dHB1dE5vZGUub3V0cHV0RGVyID0gZXJyb3JGdW5jLmRlcihvdXRwdXROb2RlLm91dHB1dCwgdGFyZ2V0KTtcblxuICAvLyBHbyB0aHJvdWdoIHRoZSBsYXllcnMgYmFja3dhcmRzLlxuICBmb3IgKGxldCBsYXllcklkeCA9IG5ldHdvcmsubGVuZ3RoIC0gMTsgbGF5ZXJJZHggPj0gMTsgbGF5ZXJJZHgtLSkge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICAvLyBDb21wdXRlIHRoZSBlcnJvciBkZXJpdmF0aXZlIG9mIGVhY2ggbm9kZSB3aXRoIHJlc3BlY3QgdG86XG4gICAgLy8gMSkgaXRzIHRvdGFsIGlucHV0XG4gICAgLy8gMikgZWFjaCBvZiBpdHMgaW5wdXQgd2VpZ2h0cy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBub2RlLmlucHV0RGVyID0gbm9kZS5vdXRwdXREZXIgKiBub2RlLmFjdGl2YXRpb24uZGVyKG5vZGUudG90YWxJbnB1dCk7XG4gICAgICBub2RlLmFjY0lucHV0RGVyICs9IG5vZGUuaW5wdXREZXI7XG4gICAgICBub2RlLm51bUFjY3VtdWxhdGVkRGVycysrO1xuICAgIH1cblxuICAgIC8vIEVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIGVhY2ggd2VpZ2h0IGNvbWluZyBpbnRvIHRoZSBub2RlLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBpZiAobGluay5pc0RlYWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rLmVycm9yRGVyID0gbm9kZS5pbnB1dERlciAqIGxpbmsuc291cmNlLm91dHB1dDtcbiAgICAgICAgbGluay5hY2NFcnJvckRlciArPSBsaW5rLmVycm9yRGVyO1xuICAgICAgICBsaW5rLm51bUFjY3VtdWxhdGVkRGVycysrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF5ZXJJZHggPT09IDEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgcHJldkxheWVyID0gbmV0d29ya1tsYXllcklkeCAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldkxheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IHByZXZMYXllcltpXTtcbiAgICAgIC8vIENvbXB1dGUgdGhlIGVycm9yIGRlcml2YXRpdmUgd2l0aCByZXNwZWN0IHRvIGVhY2ggbm9kZSdzIG91dHB1dC5cbiAgICAgIG5vZGUub3V0cHV0RGVyID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5vdXRwdXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBub2RlLm91dHB1dHNbal07XG4gICAgICAgIG5vZGUub3V0cHV0RGVyICs9IG91dHB1dC53ZWlnaHQgKiBvdXRwdXQuZGVzdC5pbnB1dERlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSB3ZWlnaHRzIG9mIHRoZSBuZXR3b3JrIHVzaW5nIHRoZSBwcmV2aW91c2x5IGFjY3VtdWxhdGVkIGVycm9yXG4gKiBkZXJpdmF0aXZlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdlaWdodHMobmV0d29yazogTm9kZVtdW10sIGxlYXJuaW5nUmF0ZTogbnVtYmVyLFxuICAgIHJlZ3VsYXJpemF0aW9uUmF0ZTogbnVtYmVyKSB7XG4gIGZvciAobGV0IGxheWVySWR4ID0gMTsgbGF5ZXJJZHggPCBuZXR3b3JrLmxlbmd0aDsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBjdXJyZW50TGF5ZXIgPSBuZXR3b3JrW2xheWVySWR4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICAvLyBVcGRhdGUgdGhlIG5vZGUncyBiaWFzLlxuICAgICAgaWYgKG5vZGUubnVtQWNjdW11bGF0ZWREZXJzID4gMCkge1xuICAgICAgICBub2RlLmJpYXMgLT0gbGVhcm5pbmdSYXRlICogbm9kZS5hY2NJbnB1dERlciAvIG5vZGUubnVtQWNjdW11bGF0ZWREZXJzO1xuICAgICAgICBub2RlLmFjY0lucHV0RGVyID0gMDtcbiAgICAgICAgbm9kZS5udW1BY2N1bXVsYXRlZERlcnMgPSAwO1xuICAgICAgfVxuICAgICAgLy8gVXBkYXRlIHRoZSB3ZWlnaHRzIGNvbWluZyBpbnRvIHRoaXMgbm9kZS5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5pbnB1dExpbmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2pdO1xuICAgICAgICBpZiAobGluay5pc0RlYWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVndWxEZXIgPSBsaW5rLnJlZ3VsYXJpemF0aW9uID9cbiAgICAgICAgICAgIGxpbmsucmVndWxhcml6YXRpb24uZGVyKGxpbmsud2VpZ2h0KSA6IDA7XG4gICAgICAgIGlmIChsaW5rLm51bUFjY3VtdWxhdGVkRGVycyA+IDApIHtcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHdlaWdodCBiYXNlZCBvbiBkRS9kdy5cbiAgICAgICAgICBsaW5rLndlaWdodCA9IGxpbmsud2VpZ2h0IC1cbiAgICAgICAgICAgICAgKGxlYXJuaW5nUmF0ZSAvIGxpbmsubnVtQWNjdW11bGF0ZWREZXJzKSAqIGxpbmsuYWNjRXJyb3JEZXI7XG4gICAgICAgICAgLy8gRnVydGhlciB1cGRhdGUgdGhlIHdlaWdodCBiYXNlZCBvbiByZWd1bGFyaXphdGlvbi5cbiAgICAgICAgICBsZXQgbmV3TGlua1dlaWdodCA9IGxpbmsud2VpZ2h0IC1cbiAgICAgICAgICAgICAgKGxlYXJuaW5nUmF0ZSAqIHJlZ3VsYXJpemF0aW9uUmF0ZSkgKiByZWd1bERlcjtcbiAgICAgICAgICBpZiAobGluay5yZWd1bGFyaXphdGlvbiA9PT0gUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMSAmJlxuICAgICAgICAgICAgICBsaW5rLndlaWdodCAqIG5ld0xpbmtXZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgd2VpZ2h0IGNyb3NzZWQgMCBkdWUgdG8gdGhlIHJlZ3VsYXJpemF0aW9uIHRlcm0uIFNldCBpdCB0byAwLlxuICAgICAgICAgICAgbGluay53ZWlnaHQgPSAwO1xuICAgICAgICAgICAgbGluay5pc0RlYWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaW5rLndlaWdodCA9IG5ld0xpbmtXZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpbmsuYWNjRXJyb3JEZXIgPSAwO1xuICAgICAgICAgIGxpbmsubnVtQWNjdW11bGF0ZWREZXJzID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiogSXRlcmF0ZXMgb3ZlciBldmVyeSBub2RlIGluIHRoZSBuZXR3b3JrLyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2hOb2RlKG5ldHdvcms6IE5vZGVbXVtdLCBpZ25vcmVJbnB1dHM6IGJvb2xlYW4sXG4gICAgYWNjZXNzb3I6IChub2RlOiBOb2RlKSA9PiBhbnkpIHtcbiAgZm9yIChsZXQgbGF5ZXJJZHggPSBpZ25vcmVJbnB1dHMgPyAxIDogMDtcbiAgICAgIGxheWVySWR4IDwgbmV0d29yay5sZW5ndGg7XG4gICAgICBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGFjY2Vzc29yKG5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiogUmV0dXJucyB0aGUgb3V0cHV0IG5vZGUgaW4gdGhlIG5ldHdvcmsuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3V0cHV0Tm9kZShuZXR3b3JrOiBOb2RlW11bXSkge1xuICByZXR1cm4gbmV0d29ya1tuZXR3b3JrLmxlbmd0aCAtIDFdWzBdO1xufVxuIiwiLyogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5pbXBvcnQgKiBhcyBubiBmcm9tIFwiLi9ublwiO1xuaW1wb3J0IHtIZWF0TWFwLCByZWR1Y2VNYXRyaXh9IGZyb20gXCIuL2hlYXRtYXBcIjtcbmltcG9ydCB7XG4gIFN0YXRlLFxuICBkYXRhc2V0cyxcbiAgcmVnRGF0YXNldHMsXG4gIGFjdGl2YXRpb25zLFxuICBwcm9ibGVtcyxcbiAgcmVndWxhcml6YXRpb25zLFxuICBnZXRLZXlGcm9tVmFsdWUsXG4gIFByb2JsZW1cbn0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7RXhhbXBsZTJELCBzaHVmZmxlfSBmcm9tIFwiLi9kYXRhc2V0XCI7XG5pbXBvcnQge0FwcGVuZGluZ0xpbmVDaGFydH0gZnJvbSBcIi4vbGluZWNoYXJ0XCI7XG5cbmxldCBtYWluV2lkdGg7XG5cbi8vIE1vcmUgc2Nyb2xsaW5nXG5sZXQgc3RhdGUgPSBTdGF0ZS5kZXNlcmlhbGl6ZVN0YXRlKCk7XG5sZXQgZ2xvYmFsSXNQbGF5aW5nID0gZmFsc2U7XG5kMy5zZWxlY3QoXCIubW9yZSBidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgbGV0IHBvc2l0aW9uID0gODAwO1xuICBkMy50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMTAwMClcbiAgICAudHdlZW4oXCJzY3JvbGxcIiwgc2Nyb2xsVHdlZW4ocG9zaXRpb24pKTtcbn0pO1xuXG5mdW5jdGlvbiBzY3JvbGxUd2VlbihvZmZzZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBpID0gZDMuaW50ZXJwb2xhdGVOdW1iZXIod2luZG93LnBhZ2VZT2Zmc2V0IHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIG9mZnNldCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHsgc2Nyb2xsVG8oMCwgaSh0KSk7IH07XG4gIH07XG59XG5cbmNvbnN0IFJFQ1RfU0laRSA9IDMwO1xuY29uc3QgQklBU19TSVpFID0gNTtcbmNvbnN0IE5VTV9TQU1QTEVTX0NMQVNTSUZZID0gNTAwO1xuY29uc3QgTlVNX1NBTVBMRVNfUkVHUkVTUyA9IDEyMDA7XG5jb25zdCBERU5TSVRZID0gMTAwO1xuXG5lbnVtIEhvdmVyVHlwZSB7XG4gIEJJQVMsIFdFSUdIVFxufVxuXG5pbnRlcmZhY2UgSW5wdXRGZWF0dXJlIHtcbiAgZjogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiBudW1iZXI7XG4gIGxhYmVsPzogc3RyaW5nO1xufVxuXG5sZXQgSU5QVVRTOiB7W25hbWU6IHN0cmluZ106IElucHV0RmVhdHVyZX0gPSB7XG4gIFwieFwiOiB7ZjogKHgsIHkpID0+IHgsIGxhYmVsOiBcIlhfMVwifSxcbiAgXCJ5XCI6IHtmOiAoeCwgeSkgPT4geSwgbGFiZWw6IFwiWF8yXCJ9LFxuICBcInhTcXVhcmVkXCI6IHtmOiAoeCwgeSkgPT4geCAqIHgsIGxhYmVsOiBcIlhfMV4yXCJ9LFxuICBcInlTcXVhcmVkXCI6IHtmOiAoeCwgeSkgPT4geSAqIHksICBsYWJlbDogXCJYXzJeMlwifSxcbiAgXCJ4VGltZXNZXCI6IHtmOiAoeCwgeSkgPT4geCAqIHksIGxhYmVsOiBcIlhfMVhfMlwifSxcbiAgXCJzaW5YXCI6IHtmOiAoeCwgeSkgPT4gTWF0aC5zaW4oeCksIGxhYmVsOiBcInNpbihYXzEpXCJ9LFxuICBcInNpbllcIjoge2Y6ICh4LCB5KSA9PiBNYXRoLnNpbih5KSwgbGFiZWw6IFwic2luKFhfMilcIn0sXG59O1xuXG5sZXQgSElEQUJMRV9DT05UUk9MUyA9IFtcbiAgW1wiU2hvdyB0ZXN0IGRhdGFcIiwgXCJzaG93VGVzdERhdGFcIl0sXG4gIFtcIkRpc2NyZXRpemUgb3V0cHV0XCIsIFwiZGlzY3JldGl6ZVwiXSxcbiAgW1wiUGxheSBidXR0b25cIiwgXCJwbGF5QnV0dG9uXCJdLFxuICBbXCJTdGVwIGJ1dHRvblwiLCBcInN0ZXBCdXR0b25cIl0sXG4gIFtcIlJlc2V0IGJ1dHRvblwiLCBcInJlc2V0QnV0dG9uXCJdLFxuICBbXCJMZWFybmluZyByYXRlXCIsIFwibGVhcm5pbmdSYXRlXCJdLFxuICBbXCJBY3RpdmF0aW9uXCIsIFwiYWN0aXZhdGlvblwiXSxcbiAgW1wiUmVndWxhcml6YXRpb25cIiwgXCJyZWd1bGFyaXphdGlvblwiXSxcbiAgW1wiUmVndWxhcml6YXRpb24gcmF0ZVwiLCBcInJlZ3VsYXJpemF0aW9uUmF0ZVwiXSxcbiAgW1wiUHJvYmxlbSB0eXBlXCIsIFwicHJvYmxlbVwiXSxcbiAgW1wiV2hpY2ggZGF0YXNldFwiLCBcImRhdGFzZXRcIl0sXG4gIFtcIlJhdGlvIHRyYWluIGRhdGFcIiwgXCJwZXJjVHJhaW5EYXRhXCJdLFxuICBbXCJOb2lzZSBsZXZlbFwiLCBcIm5vaXNlXCJdLFxuICBbXCJCYXRjaCBzaXplXCIsIFwiYmF0Y2hTaXplXCJdLFxuICBbXCIjIG9mIGhpZGRlbiBsYXllcnNcIiwgXCJudW1IaWRkZW5MYXllcnNcIl0sXG5dO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBwcml2YXRlIHRpbWVySW5kZXggPSAwO1xuICBwcml2YXRlIGlzUGxheWluZyA9IGZhbHNlO1xuICBwcml2YXRlIGNhbGxiYWNrOiAoaXNQbGF5aW5nOiBib29sZWFuKSA9PiB2b2lkID0gbnVsbDtcblxuICAvKiogUGxheXMvcGF1c2VzIHRoZSBwbGF5ZXIuICovXG4gIHBsYXlPclBhdXNlKCkge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgaWYgKGl0ZXIgPT09IDApIHtcbiAgICAgICAgc2ltdWxhdGlvblN0YXJ0ZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGxheVBhdXNlKGNhbGxiYWNrOiAoaXNQbGF5aW5nOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnBhdXNlKCk7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgIHN0YXRlLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nXG5cbiAgICB2YXIgZGF0YSA9IFwiZGlzY3JldGl6ZT1cIitzdGF0ZS5kaXNjcmV0aXplK1wiJnBsYXk9VHJ1ZSZzaG93VGVzdERhdGE9XCIrc3RhdGUuc2hvd1Rlc3REYXRhO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvcnVuL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmlzUGxheWluZyk7XG4gICAgfVxuICAgIHRoaXMuc3RhcnQodGhpcy50aW1lckluZGV4KTtcbiAgfVxuXG4vLyBzZW5kIHBvc3QgcmVxdWVzdFxuICBwYXVzZSgpIHtcbiAgICB0aGlzLnRpbWVySW5kZXgrKztcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgIHN0YXRlLmlzUGxheWluZyA9IHRoaXMuaXNQbGF5aW5nXG5cbiAgICAvLyBzZW50IHBvc3QgcmVxdWVzdFxuICAgIHZhciBkYXRhID0gXCJkaXNjcmV0aXplPVwiK3N0YXRlLmRpc2NyZXRpemUrXCImcGxheT1GYWxzZSZzaG93VGVzdERhdGE9XCIrc3RhdGUuc2hvd1Rlc3REYXRhO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvcnVuL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmlzUGxheWluZyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydChsb2NhbFRpbWVySW5kZXg6IG51bWJlcikge1xuICAgIGQzLnRpbWVyKCgpID0+IHtcbiAgICAgIGlmIChsb2NhbFRpbWVySW5kZXggPCB0aGlzLnRpbWVySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7ICAvLyBEb25lLlxuICAgICAgfVxuICAgICAgb25lU3RlcCgpO1xuICAgICAgcmV0dXJuIGZhbHNlOyAgLy8gTm90IGRvbmUuXG4gICAgfSwgMCk7XG4gIH1cbn1cblxuLy9sZXQgc3RhdGUgPSBTdGF0ZS5kZXNlcmlhbGl6ZVN0YXRlKCk7XG5cbi8vIEZpbHRlciBvdXQgaW5wdXRzIHRoYXQgYXJlIGhpZGRlbi5cbnN0YXRlLmdldEhpZGRlblByb3BzKCkuZm9yRWFjaChwcm9wID0+IHtcbiAgaWYgKHByb3AgaW4gSU5QVVRTKSB7XG4gICAgZGVsZXRlIElOUFVUU1twcm9wXTtcbiAgfVxufSk7XG5cbmxldCBib3VuZGFyeToge1tpZDogc3RyaW5nXTogbnVtYmVyW11bXX0gPSB7fTtcbmxldCBzZWxlY3RlZE5vZGVJZDogc3RyaW5nID0gbnVsbDtcbi8vIFBsb3QgdGhlIGhlYXRtYXAuXG5sZXQgeERvbWFpbjogW251bWJlciwgbnVtYmVyXSA9IFstNiwgNl07XG5sZXQgaGVhdE1hcCA9XG4gICAgbmV3IEhlYXRNYXAoMzAwLCBERU5TSVRZLCB4RG9tYWluLCB4RG9tYWluLCBkMy5zZWxlY3QoXCIjaGVhdG1hcFwiKSxcbiAgICAgICAge3Nob3dBeGVzOiB0cnVlfSk7XG5sZXQgbGlua1dpZHRoU2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKVxuICAuZG9tYWluKFswLCA1XSlcbiAgLnJhbmdlKFsxLCAxMF0pXG4gIC5jbGFtcCh0cnVlKTtcbmxldCBjb2xvclNjYWxlID0gZDMuc2NhbGUubGluZWFyPHN0cmluZz4oKVxuICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbLTEsIDAsIDFdKVxuICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFtcIiNmNTkzMjJcIiwgXCIjZThlYWViXCIsIFwiIzA4NzdiZFwiXSlcbiAgICAgICAgICAgICAgICAgICAgIC5jbGFtcCh0cnVlKTtcbmxldCBpdGVyID0gMDtcbmxldCB0cmFpbkRhdGE6IEV4YW1wbGUyRFtdID0gW107XG5sZXQgdGVzdERhdGE6IEV4YW1wbGUyRFtdID0gW107XG5sZXQgbmV0d29yazogbm4uTm9kZVtdW10gPSBudWxsO1xubGV0IGxvc3NUcmFpbiA9IDA7XG5sZXQgbG9zc1Rlc3QgPSAwO1xubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbmxldCBsaW5lQ2hhcnQgPSBuZXcgQXBwZW5kaW5nTGluZUNoYXJ0KGQzLnNlbGVjdChcIiNsaW5lY2hhcnRcIiksXG4gICAgW1wiIzc3N1wiLCBcImJsYWNrXCJdKTtcblxuZnVuY3Rpb24gbWFrZUdVSSgpIHtcbiAgZDMuc2VsZWN0KFwiI3Jlc2V0LWJ1dHRvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZXNldCgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgZDMuc2VsZWN0KFwiI3BsYXktcGF1c2UtYnV0dG9uXCIpO1xuICB9KTtcblxuICBkMy5zZWxlY3QoXCIjcGxheS1wYXVzZS1idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hhbmdlIHRoZSBidXR0b24ncyBjb250ZW50LlxuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgcGxheWVyLnBsYXlPclBhdXNlKCk7XG4gIH0pO1xuXG4gIHBsYXllci5vblBsYXlQYXVzZShpc1BsYXlpbmcgPT4ge1xuICAgIGQzLnNlbGVjdChcIiNwbGF5LXBhdXNlLWJ1dHRvblwiKS5jbGFzc2VkKFwicGxheWluZ1wiLCBpc1BsYXlpbmcpO1xuICB9KTtcblxuICBkMy5zZWxlY3QoXCIjbmV4dC1zdGVwLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICB1c2VySGFzSW50ZXJhY3RlZCgpO1xuICAgIGlmIChpdGVyID09PSAwKSB7XG4gICAgICBzaW11bGF0aW9uU3RhcnRlZCgpO1xuICAgIH1cbiAgICBvbmVTdGVwKCk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNkYXRhLXJlZ2VuLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gIH0pO1xuXG4gIGxldCBkYXRhVGh1bWJuYWlscyA9IGQzLnNlbGVjdEFsbChcImNhbnZhc1tkYXRhLWRhdGFzZXRdXCIpO1xuICBkYXRhVGh1bWJuYWlscy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBuZXdEYXRhc2V0ID0gZGF0YXNldHNbdGhpcy5kYXRhc2V0LmRhdGFzZXRdO1xuICAgIGlmIChuZXdEYXRhc2V0ID09PSBzdGF0ZS5kYXRhc2V0KSB7XG4gICAgICByZXR1cm47IC8vIE5vLW9wLlxuICAgIH1cbiAgICBzdGF0ZS5kYXRhc2V0ID0gIG5ld0RhdGFzZXQ7XG4gICAgZGF0YVRodW1ibmFpbHMuY2xhc3NlZChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZChcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgIGdlbmVyYXRlRGF0YSgpO1xuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcblxuICBsZXQgZGF0YXNldEtleSA9IGdldEtleUZyb21WYWx1ZShkYXRhc2V0cywgc3RhdGUuZGF0YXNldCk7XG4gIC8vIFNlbGVjdCB0aGUgZGF0YXNldCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXG4gIGQzLnNlbGVjdChgY2FudmFzW2RhdGEtZGF0YXNldD0ke2RhdGFzZXRLZXl9XWApXG4gICAgLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCB0cnVlKTtcblxuICBsZXQgcmVnRGF0YVRodW1ibmFpbHMgPSBkMy5zZWxlY3RBbGwoXCJjYW52YXNbZGF0YS1yZWdEYXRhc2V0XVwiKTtcbiAgcmVnRGF0YVRodW1ibmFpbHMub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgbmV3RGF0YXNldCA9IHJlZ0RhdGFzZXRzW3RoaXMuZGF0YXNldC5yZWdkYXRhc2V0XTtcbiAgICBpZiAobmV3RGF0YXNldCA9PT0gc3RhdGUucmVnRGF0YXNldCkge1xuICAgICAgcmV0dXJuOyAvLyBOby1vcC5cbiAgICB9XG4gICAgc3RhdGUucmVnRGF0YXNldCA9ICBuZXdEYXRhc2V0O1xuICAgIHJlZ0RhdGFUaHVtYm5haWxzLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICBnZW5lcmF0ZURhdGEoKTtcbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG5cbiAgbGV0IHJlZ0RhdGFzZXRLZXkgPSBnZXRLZXlGcm9tVmFsdWUocmVnRGF0YXNldHMsIHN0YXRlLnJlZ0RhdGFzZXQpO1xuICAvLyBTZWxlY3QgdGhlIGRhdGFzZXQgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkMy5zZWxlY3QoYGNhbnZhc1tkYXRhLXJlZ0RhdGFzZXQ9JHtyZWdEYXRhc2V0S2V5fV1gKVxuICAgIC5jbGFzc2VkKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG5cbiAgZDMuc2VsZWN0KFwiI2FkZC1sYXllcnNcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLm51bUhpZGRlbkxheWVycyA+PSA2KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLm5ldHdvcmtTaGFwZVtzdGF0ZS5udW1IaWRkZW5MYXllcnNdID0gMjtcbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMrKztcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuXG4gIGQzLnNlbGVjdChcIiNyZW1vdmUtbGF5ZXJzXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5udW1IaWRkZW5MYXllcnMgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMtLTtcbiAgICBzdGF0ZS5uZXR3b3JrU2hhcGUuc3BsaWNlKHN0YXRlLm51bUhpZGRlbkxheWVycyk7XG5cbiAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICArXCImbnVtSGlkZGVuTGF5ZXJzPVwiK3N0YXRlLm51bUhpZGRlbkxheWVycytcIiZuZXR3b3JrU2hhcGU9XCIrc3RhdGUubmV0d29ya1NoYXBlO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcblxuICBsZXQgc2hvd1Rlc3REYXRhID0gZDMuc2VsZWN0KFwiI3Nob3ctdGVzdC1kYXRhXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLnNob3dUZXN0RGF0YSA9IHRoaXMuY2hlY2tlZDtcblxuICAgIHZhciBkYXRhID0gXCJkaXNjcmV0aXplPVwiK3N0YXRlLmRpc2NyZXRpemUrXCImcGxheT1cIitzdGF0ZS5pc1BsYXlpbmcrXCImc2hvd1Rlc3REYXRhPVwiK3N0YXRlLnNob3dUZXN0RGF0YTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3J1bi9cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgc3RhdGUuc2VyaWFsaXplKCk7XG4gICAgdXNlckhhc0ludGVyYWN0ZWQoKTtcbiAgICBoZWF0TWFwLnVwZGF0ZVRlc3RQb2ludHMoc3RhdGUuc2hvd1Rlc3REYXRhID8gdGVzdERhdGEgOiBbXSk7XG4gIH0pO1xuICAvLyBDaGVjay91bmNoZWNrIHRoZSBjaGVja2JveCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGUuXG4gIHNob3dUZXN0RGF0YS5wcm9wZXJ0eShcImNoZWNrZWRcIiwgc3RhdGUuc2hvd1Rlc3REYXRhKTtcblxuICBsZXQgZGlzY3JldGl6ZSA9IGQzLnNlbGVjdChcIiNkaXNjcmV0aXplXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgIHN0YXRlLmRpc2NyZXRpemUgPSB0aGlzLmNoZWNrZWQ7XG5cbiAgICB2YXIgZGF0YSA9IFwiZGlzY3JldGl6ZT1cIitzdGF0ZS5kaXNjcmV0aXplK1wiJnBsYXk9XCIrc3RhdGUuaXNQbGF5aW5nK1wiJnNob3dUZXN0RGF0YT1cIitzdGF0ZS5zaG93VGVzdERhdGE7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9ydW4vXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgdXBkYXRlVUkoKTtcbiAgfSk7XG4gIC8vIENoZWNrL3VuY2hlY2sgdGhlIGNoZWNib3ggYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICBkaXNjcmV0aXplLnByb3BlcnR5KFwiY2hlY2tlZFwiLCBzdGF0ZS5kaXNjcmV0aXplKTtcblxuICBsZXQgcGVyY1RyYWluID0gZDMuc2VsZWN0KFwiI3BlcmNUcmFpbkRhdGFcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5wZXJjVHJhaW5EYXRhID0gdGhpcy52YWx1ZTtcblxuICAgIHZhciBkYXRhID0gXCJiYXRjaFNpemU9XCIrc3RhdGUuYmF0Y2hTaXplK1wiJm5vaXNlPVwiK3N0YXRlLm5vaXNlK1wiJnRyYWluVG9UZXN0UmF0aW89XCIrc3RhdGUucGVyY1RyYWluRGF0YVxuICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9zdGF0ZS9cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdwZXJjVHJhaW5EYXRhJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBwZXJjVHJhaW4ucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5wZXJjVHJhaW5EYXRhKTtcbiAgZDMuc2VsZWN0KFwibGFiZWxbZm9yPSdwZXJjVHJhaW5EYXRhJ10gLnZhbHVlXCIpLnRleHQoc3RhdGUucGVyY1RyYWluRGF0YSk7XG5cbiAgbGV0IG5vaXNlID0gZDMuc2VsZWN0KFwiI25vaXNlXCIpLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUubm9pc2UgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J25vaXNlJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBsZXQgY3VycmVudE1heCA9IHBhcnNlSW50KG5vaXNlLnByb3BlcnR5KFwibWF4XCIpKTtcbiAgaWYgKHN0YXRlLm5vaXNlID4gY3VycmVudE1heCkge1xuICAgIGlmIChzdGF0ZS5ub2lzZSA8PSA4MCkge1xuICAgICAgbm9pc2UucHJvcGVydHkoXCJtYXhcIiwgc3RhdGUubm9pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5ub2lzZSA9IDUwO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0ZS5ub2lzZSA8IDApIHtcbiAgICBzdGF0ZS5ub2lzZSA9IDA7XG4gIH1cbiAgbm9pc2UucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5ub2lzZSk7XG4gIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0nbm9pc2UnXSAudmFsdWVcIikudGV4dChzdGF0ZS5ub2lzZSk7XG5cbiAgbGV0IGJhdGNoU2l6ZSA9IGQzLnNlbGVjdChcIiNiYXRjaFNpemVcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5iYXRjaFNpemUgPSB0aGlzLnZhbHVlO1xuXG4gICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cblxuICAgIGQzLnNlbGVjdChcImxhYmVsW2Zvcj0nYmF0Y2hTaXplJ10gLnZhbHVlXCIpLnRleHQodGhpcy52YWx1ZSk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBiYXRjaFNpemUucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5iYXRjaFNpemUpO1xuICBkMy5zZWxlY3QoXCJsYWJlbFtmb3I9J2JhdGNoU2l6ZSddIC52YWx1ZVwiKS50ZXh0KHN0YXRlLmJhdGNoU2l6ZSk7XG5cbiAgbGV0IGFjdGl2YXRpb25Ecm9wZG93biA9IGQzLnNlbGVjdChcIiNhY3RpdmF0aW9uc1wiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5hY3RpdmF0aW9uID0gYWN0aXZhdGlvbnNbdGhpcy52YWx1ZV07XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0YXRlLmFjdGl2YXRpb24rXCImcmVndWxhcml6YXRpb249XCIrc3RhdGUucmVndWxhcml6YXRpb25cbiAgICAgICAgICAgICAgICArXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIGFjdGl2YXRpb25Ecm9wZG93bi5wcm9wZXJ0eShcInZhbHVlXCIsXG4gICAgICBnZXRLZXlGcm9tVmFsdWUoYWN0aXZhdGlvbnMsIHN0YXRlLmFjdGl2YXRpb24pKTtcblxuICBsZXQgbGVhcm5pbmdSYXRlID0gZDMuc2VsZWN0KFwiI2xlYXJuaW5nUmF0ZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5sZWFybmluZ1JhdGUgPSArdGhpcy52YWx1ZTtcblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RhdGUuYWN0aXZhdGlvbitcIiZyZWd1bGFyaXphdGlvbj1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblxuICAgICAgICAgICAgICAgICtcIiZyZWd1bGFyaXphdGlvblJhdGU9XCIrc3RhdGUucmVndWxhcml6YXRpb25SYXRlK1wiJnByb2JsZW1UeXBlPVwiK3N0YXRlLnByb2JsZW07XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9hcmd1bWVudHMvXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICB9KTtcbiAgbGVhcm5pbmdSYXRlLnByb3BlcnR5KFwidmFsdWVcIiwgc3RhdGUubGVhcm5pbmdSYXRlKTtcblxuICBsZXQgcmVndWxhckRyb3Bkb3duID0gZDMuc2VsZWN0KFwiI3JlZ3VsYXJpemF0aW9uc1wiKS5vbihcImNoYW5nZVwiLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUucmVndWxhcml6YXRpb24gPSByZWd1bGFyaXphdGlvbnNbdGhpcy52YWx1ZV07XG5cbiAgICB2YXIgZGF0YSA9IFwibGVhcm5pbmdSYXRlPVwiK3N0YXRlLmxlYXJuaW5nUmF0ZStcIiZhY3RpdmF0aW9uPVwiK3N0YXRlLmFjdGl2YXRpb24rXCImcmVndWxhcml6YXRpb249XCIrc3RhdGUucmVndWxhcml6YXRpb25cbiAgICAgICAgICAgICAgICArXCImcmVndWxhcml6YXRpb25SYXRlPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uUmF0ZStcIiZwcm9ibGVtVHlwZT1cIitzdGF0ZS5wcm9ibGVtO1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvYXJndW1lbnRzL1wiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCYXNpYyBjMnRxWlc1aE9tRnRaR0k1WVhKemRISmhaR0ZzWlVBbUpTTT1cIik7XG4gICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgcmVzZXQoKTtcbiAgfSk7XG4gIHJlZ3VsYXJEcm9wZG93bi5wcm9wZXJ0eShcInZhbHVlXCIsXG4gICAgICBnZXRLZXlGcm9tVmFsdWUocmVndWxhcml6YXRpb25zLCBzdGF0ZS5yZWd1bGFyaXphdGlvbikpO1xuXG4gIGxldCByZWd1bGFyUmF0ZSA9IGQzLnNlbGVjdChcIiNyZWd1bGFyUmF0ZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUgPSArdGhpcy52YWx1ZTtcblxuICAgIHZhciBkYXRhID0gXCJsZWFybmluZ1JhdGU9XCIrc3RhdGUubGVhcm5pbmdSYXRlK1wiJmFjdGl2YXRpb249XCIrc3RhdGUuYWN0aXZhdGlvbitcIiZyZWd1bGFyaXphdGlvbj1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblxuICAgICAgICAgICAgICAgICtcIiZyZWd1bGFyaXphdGlvblJhdGU9XCIrc3RhdGUucmVndWxhcml6YXRpb25SYXRlK1wiJnByb2JsZW1UeXBlPVwiK3N0YXRlLnByb2JsZW07XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8veGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly8zNS4xODQuMTcxLjI0OS92MS9hcmd1bWVudHMvXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICByZXNldCgpO1xuICB9KTtcbiAgcmVndWxhclJhdGUucHJvcGVydHkoXCJ2YWx1ZVwiLCBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUpO1xuXG4gIGxldCBwcm9ibGVtID0gZDMuc2VsZWN0KFwiI3Byb2JsZW1cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3RhdGUucHJvYmxlbSA9IHByb2JsZW1zW3RoaXMudmFsdWVdO1xuXG4gICAgdmFyIGRhdGEgPSBcImxlYXJuaW5nUmF0ZT1cIitzdGF0ZS5sZWFybmluZ1JhdGUrXCImYWN0aXZhdGlvbj1cIitzdGF0ZS5hY3RpdmF0aW9uK1wiJnJlZ3VsYXJpemF0aW9uPVwiK3N0YXRlLnJlZ3VsYXJpemF0aW9uXG4gICAgICAgICAgICAgICAgK1wiJnJlZ3VsYXJpemF0aW9uUmF0ZT1cIitzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUrXCImcHJvYmxlbVR5cGU9XCIrc3RhdGUucHJvYmxlbTtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL2FyZ3VtZW50cy9cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgZ2VuZXJhdGVEYXRhKCk7XG4gICAgZHJhd0RhdGFzZXRUaHVtYm5haWxzKCk7XG4gICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgIHJlc2V0KCk7XG4gIH0pO1xuICBwcm9ibGVtLnByb3BlcnR5KFwidmFsdWVcIiwgZ2V0S2V5RnJvbVZhbHVlKHByb2JsZW1zLCBzdGF0ZS5wcm9ibGVtKSk7XG5cbiAgLy8gQWRkIHNjYWxlIHRvIHRoZSBncmFkaWVudCBjb2xvciBtYXAuXG4gIGxldCB4ID0gZDMuc2NhbGUubGluZWFyKCkuZG9tYWluKFstMSwgMV0pLnJhbmdlKFswLCAxNDRdKTtcbiAgbGV0IHhBeGlzID0gZDMuc3ZnLmF4aXMoKVxuICAgIC5zY2FsZSh4KVxuICAgIC5vcmllbnQoXCJib3R0b21cIilcbiAgICAudGlja1ZhbHVlcyhbLTEsIDAsIDFdKVxuICAgIC50aWNrRm9ybWF0KGQzLmZvcm1hdChcImRcIikpO1xuICBkMy5zZWxlY3QoXCIjY29sb3JtYXAgZy5jb3JlXCIpLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwxMClcIilcbiAgICAuY2FsbCh4QXhpcyk7XG5cbiAgLy8gTGlzdGVuIGZvciBjc3MtcmVzcG9uc2l2ZSBjaGFuZ2VzIGFuZCByZWRyYXcgdGhlIHN2ZyBuZXR3b3JrLlxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICBsZXQgbmV3V2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tcGFydFwiKVxuICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKG5ld1dpZHRoICE9PSBtYWluV2lkdGgpIHtcbiAgICAgIG1haW5XaWR0aCA9IG5ld1dpZHRoO1xuICAgICAgZHJhd05ldHdvcmsobmV0d29yayk7XG4gICAgICB1cGRhdGVVSSh0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEhpZGUgdGhlIHRleHQgYmVsb3cgdGhlIHZpc3VhbGl6YXRpb24gZGVwZW5kaW5nIG9uIHRoZSBVUkwuXG4gIGlmIChzdGF0ZS5oaWRlVGV4dCkge1xuICAgIGQzLnNlbGVjdChcIiNhcnRpY2xlLXRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICBkMy5zZWxlY3QoXCJkaXYubW9yZVwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcImhlYWRlclwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJpYXNlc1VJKG5ldHdvcms6IG5uLk5vZGVbXVtdKSB7XG4gIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgIGQzLnNlbGVjdChgcmVjdCNiaWFzLSR7bm9kZS5pZH1gKS5zdHlsZShcImZpbGxcIiwgY29sb3JTY2FsZShub2RlLmJpYXMpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlaWdodHNVSShuZXR3b3JrOiBubi5Ob2RlW11bXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55Pikge1xuICBmb3IgKGxldCBsYXllcklkeCA9IDE7IGxheWVySWR4IDwgbmV0d29yay5sZW5ndGg7IGxheWVySWR4KyspIHtcbiAgICBsZXQgY3VycmVudExheWVyID0gbmV0d29ya1tsYXllcklkeF07XG4gICAgLy8gVXBkYXRlIGFsbCB0aGUgbm9kZXMgaW4gdGhpcyBsYXllci5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMYXllci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBjdXJyZW50TGF5ZXJbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgbGluayA9IG5vZGUuaW5wdXRMaW5rc1tqXTtcbiAgICAgICAgY29udGFpbmVyLnNlbGVjdChgI2xpbmske2xpbmsuc291cmNlLmlkfS0ke2xpbmsuZGVzdC5pZH1gKVxuICAgICAgICAgICAgLnN0eWxlKHtcbiAgICAgICAgICAgICAgXCJzdHJva2UtZGFzaG9mZnNldFwiOiAtaXRlciAvIDMsXG4gICAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IGxpbmtXaWR0aFNjYWxlKE1hdGguYWJzKGxpbmsud2VpZ2h0KSksXG4gICAgICAgICAgICAgIFwic3Ryb2tlXCI6IGNvbG9yU2NhbGUobGluay53ZWlnaHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRhdHVtKGxpbmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3Tm9kZShjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBub2RlSWQ6IHN0cmluZywgaXNJbnB1dDogYm9vbGVhbixcbiAgICBjb250YWluZXI6IGQzLlNlbGVjdGlvbjxhbnk+LCBub2RlPzogbm4uTm9kZSkge1xuICBsZXQgeCA9IGN4IC0gUkVDVF9TSVpFIC8gMjtcbiAgbGV0IHkgPSBjeSAtIFJFQ1RfU0laRSAvIDI7XG5cbiAgbGV0IG5vZGVHcm91cCA9IGNvbnRhaW5lci5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoe1xuICAgICAgXCJjbGFzc1wiOiBcIm5vZGVcIixcbiAgICAgIFwiaWRcIjogYG5vZGUke25vZGVJZH1gLFxuICAgICAgXCJ0cmFuc2Zvcm1cIjogYHRyYW5zbGF0ZSgke3h9LCR7eX0pYFxuICAgIH0pO1xuXG4gIC8vIERyYXcgdGhlIG1haW4gcmVjdGFuZ2xlLlxuICBub2RlR3JvdXAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgd2lkdGg6IFJFQ1RfU0laRSxcbiAgICAgIGhlaWdodDogUkVDVF9TSVpFLFxuICAgIH0pO1xuICBsZXQgYWN0aXZlT3JOb3RDbGFzcyA9IHN0YXRlW25vZGVJZF0gPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZVwiO1xuICBpZiAoaXNJbnB1dCkge1xuICAgIGxldCBsYWJlbCA9IElOUFVUU1tub2RlSWRdLmxhYmVsICE9IG51bGwgP1xuICAgICAgICBJTlBVVFNbbm9kZUlkXS5sYWJlbCA6IG5vZGVJZDtcbiAgICAvLyBEcmF3IHRoZSBpbnB1dCBsYWJlbC5cbiAgICBsZXQgdGV4dCA9IG5vZGVHcm91cC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoe1xuICAgICAgY2xhc3M6IFwibWFpbi1sYWJlbFwiLFxuICAgICAgeDogLTEwLFxuICAgICAgeTogUkVDVF9TSVpFIC8gMiwgXCJ0ZXh0LWFuY2hvclwiOiBcImVuZFwiXG4gICAgfSk7XG4gICAgaWYgKC9bX15dLy50ZXN0KGxhYmVsKSkge1xuICAgICAgbGV0IG15UmUgPSAvKC4qPykoW19eXSkoLikvZztcbiAgICAgIGxldCBteUFycmF5O1xuICAgICAgbGV0IGxhc3RJbmRleDtcbiAgICAgIHdoaWxlICgobXlBcnJheSA9IG15UmUuZXhlYyhsYWJlbCkpICE9IG51bGwpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gbXlSZS5sYXN0SW5kZXg7XG4gICAgICAgIGxldCBwcmVmaXggPSBteUFycmF5WzFdO1xuICAgICAgICBsZXQgc2VwID0gbXlBcnJheVsyXTtcbiAgICAgICAgbGV0IHN1ZmZpeCA9IG15QXJyYXlbM107XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpLnRleHQocHJlZml4KTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0LmFwcGVuZChcInRzcGFuXCIpXG4gICAgICAgIC5hdHRyKFwiYmFzZWxpbmUtc2hpZnRcIiwgc2VwID09PSBcIl9cIiA/IFwic3ViXCIgOiBcInN1cGVyXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjlweFwiKVxuICAgICAgICAudGV4dChzdWZmaXgpO1xuICAgICAgfVxuICAgICAgaWYgKGxhYmVsLnN1YnN0cmluZyhsYXN0SW5kZXgpKSB7XG4gICAgICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikudGV4dChsYWJlbC5zdWJzdHJpbmcobGFzdEluZGV4KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQuYXBwZW5kKFwidHNwYW5cIikudGV4dChsYWJlbCk7XG4gICAgfVxuICAgIG5vZGVHcm91cC5jbGFzc2VkKGFjdGl2ZU9yTm90Q2xhc3MsIHRydWUpO1xuICB9XG4gIGlmICghaXNJbnB1dCkge1xuICAgIC8vIERyYXcgdGhlIG5vZGUncyBiaWFzLlxuICAgIG5vZGVHcm91cC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cih7XG4gICAgICAgIGlkOiBgYmlhcy0ke25vZGVJZH1gLFxuICAgICAgICB4OiAtQklBU19TSVpFIC0gMixcbiAgICAgICAgeTogUkVDVF9TSVpFIC0gQklBU19TSVpFICsgMyxcbiAgICAgICAgd2lkdGg6IEJJQVNfU0laRSxcbiAgICAgICAgaGVpZ2h0OiBCSUFTX1NJWkUsXG4gICAgICB9KS5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZUhvdmVyQ2FyZChIb3ZlclR5cGUuQklBUywgbm9kZSwgZDMubW91c2UoY29udGFpbmVyLm5vZGUoKSkpO1xuICAgICAgfSkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB1cGRhdGVIb3ZlckNhcmQobnVsbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIERyYXcgdGhlIG5vZGUncyBjYW52YXMuXG4gIGxldCBkaXYgPSBkMy5zZWxlY3QoXCIjbmV0d29ya1wiKS5pbnNlcnQoXCJkaXZcIiwgXCI6Zmlyc3QtY2hpbGRcIilcbiAgICAuYXR0cih7XG4gICAgICBcImlkXCI6IGBjYW52YXMtJHtub2RlSWR9YCxcbiAgICAgIFwiY2xhc3NcIjogXCJjYW52YXNcIlxuICAgIH0pXG4gICAgLnN0eWxlKHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiBgJHt4ICsgM31weGAsXG4gICAgICB0b3A6IGAke3kgKyAzfXB4YFxuICAgIH0pXG4gICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGVjdGVkTm9kZUlkID0gbm9kZUlkO1xuICAgICAgZGl2LmNsYXNzZWQoXCJob3ZlcmVkXCIsIHRydWUpO1xuICAgICAgbm9kZUdyb3VwLmNsYXNzZWQoXCJob3ZlcmVkXCIsIHRydWUpO1xuICAgICAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmYWxzZSk7XG4gICAgICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbbm9kZUlkXSwgc3RhdGUuZGlzY3JldGl6ZSk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZWN0ZWROb2RlSWQgPSBudWxsO1xuICAgICAgZGl2LmNsYXNzZWQoXCJob3ZlcmVkXCIsIGZhbHNlKTtcbiAgICAgIG5vZGVHcm91cC5jbGFzc2VkKFwiaG92ZXJlZFwiLCBmYWxzZSk7XG4gICAgICB1cGRhdGVEZWNpc2lvbkJvdW5kYXJ5KG5ldHdvcmssIGZhbHNlKTtcbiAgICAgIGhlYXRNYXAudXBkYXRlQmFja2dyb3VuZChib3VuZGFyeVtubi5nZXRPdXRwdXROb2RlKG5ldHdvcmspLmlkXSxcbiAgICAgICAgICBzdGF0ZS5kaXNjcmV0aXplKTtcbiAgICB9KTtcbiAgaWYgKGlzSW5wdXQpIHtcbiAgICBkaXYub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHN0YXRlW25vZGVJZF0gPSAhc3RhdGVbbm9kZUlkXTtcbiAgICAgIHBhcmFtZXRlcnNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHJlc2V0KCk7XG4gICAgfSk7XG4gICAgZGl2LnN0eWxlKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgfVxuICBpZiAoaXNJbnB1dCkge1xuICAgIGRpdi5jbGFzc2VkKGFjdGl2ZU9yTm90Q2xhc3MsIHRydWUpO1xuICB9XG4gIGxldCBub2RlSGVhdE1hcCA9IG5ldyBIZWF0TWFwKFJFQ1RfU0laRSwgREVOU0lUWSAvIDEwLCB4RG9tYWluLFxuICAgICAgeERvbWFpbiwgZGl2LCB7bm9Tdmc6IHRydWV9KTtcbiAgZGl2LmRhdHVtKHtoZWF0bWFwOiBub2RlSGVhdE1hcCwgaWQ6IG5vZGVJZH0pO1xuXG59XG5cbi8vIERyYXcgbmV0d29ya1xuZnVuY3Rpb24gZHJhd05ldHdvcmsobmV0d29yazogbm4uTm9kZVtdW10pOiB2b2lkIHtcbiAgbGV0IHN2ZyA9IGQzLnNlbGVjdChcIiNzdmdcIik7XG4gIC8vIFJlbW92ZSBhbGwgc3ZnIGVsZW1lbnRzLlxuICBzdmcuc2VsZWN0KFwiZy5jb3JlXCIpLnJlbW92ZSgpO1xuICAvLyBSZW1vdmUgYWxsIGRpdiBlbGVtZW50cy5cbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LmNhbnZhc1wiKS5yZW1vdmUoKTtcbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LnBsdXMtbWludXMtbmV1cm9uc1wiKS5yZW1vdmUoKTtcblxuICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzdmcgY29udGFpbmVyLlxuICBsZXQgcGFkZGluZyA9IDM7XG4gIGxldCBjbyA9IGQzLnNlbGVjdChcIi5jb2x1bW4ub3V0cHV0XCIpLm5vZGUoKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgbGV0IGNmID0gZDMuc2VsZWN0KFwiLmNvbHVtbi5mZWF0dXJlc1wiKS5ub2RlKCkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGxldCB3aWR0aCA9IGNvLm9mZnNldExlZnQgLSBjZi5vZmZzZXRMZWZ0O1xuICBzdmcuYXR0cihcIndpZHRoXCIsIHdpZHRoKTtcblxuICAvLyBNYXAgb2YgYWxsIG5vZGUgY29vcmRpbmF0ZXMuXG4gIGxldCBub2RlMmNvb3JkOiB7W2lkOiBzdHJpbmddOiB7Y3g6IG51bWJlciwgY3k6IG51bWJlcn19ID0ge307XG4gIGxldCBjb250YWluZXIgPSBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jbGFzc2VkKFwiY29yZVwiLCB0cnVlKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtwYWRkaW5nfSwke3BhZGRpbmd9KWApO1xuICAvLyBEcmF3IHRoZSBuZXR3b3JrIGxheWVyIGJ5IGxheWVyLlxuICBsZXQgbnVtTGF5ZXJzID0gbmV0d29yay5sZW5ndGg7XG4gIGxldCBmZWF0dXJlV2lkdGggPSAxMTg7XG4gIGxldCBsYXllclNjYWxlID0gZDMuc2NhbGUub3JkaW5hbDxudW1iZXIsIG51bWJlcj4oKVxuICAgICAgLmRvbWFpbihkMy5yYW5nZSgxLCBudW1MYXllcnMgLSAxKSlcbiAgICAgIC5yYW5nZVBvaW50cyhbZmVhdHVyZVdpZHRoLCB3aWR0aCAtIFJFQ1RfU0laRV0sIDAuNyk7XG4gIGxldCBub2RlSW5kZXhTY2FsZSA9IChub2RlSW5kZXg6IG51bWJlcikgPT4gbm9kZUluZGV4ICogKFJFQ1RfU0laRSArIDI1KTtcblxuXG4gIGxldCBjYWxsb3V0VGh1bWIgPSBkMy5zZWxlY3QoXCIuY2FsbG91dC50aHVtYm5haWxcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgbGV0IGNhbGxvdXRXZWlnaHRzID0gZDMuc2VsZWN0KFwiLmNhbGxvdXQud2VpZ2h0c1wiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICBsZXQgaWRXaXRoQ2FsbG91dCA9IG51bGw7XG4gIGxldCB0YXJnZXRJZFdpdGhDYWxsb3V0ID0gbnVsbDtcblxuICAvLyBEcmF3IHRoZSBpbnB1dCBsYXllciBzZXBhcmF0ZWx5LlxuICBsZXQgY3ggPSBSRUNUX1NJWkUgLyAyICsgNTA7XG4gIGxldCBub2RlSWRzID0gT2JqZWN0LmtleXMoSU5QVVRTKTtcbiAgbGV0IG1heFkgPSBub2RlSW5kZXhTY2FsZShub2RlSWRzLmxlbmd0aCk7XG4gIG5vZGVJZHMuZm9yRWFjaCgobm9kZUlkLCBpKSA9PiB7XG4gICAgbGV0IGN5ID0gbm9kZUluZGV4U2NhbGUoaSkgKyBSRUNUX1NJWkUgLyAyO1xuICAgIG5vZGUyY29vcmRbbm9kZUlkXSA9IHtjeCwgY3l9O1xuICAgIGRyYXdOb2RlKGN4LCBjeSwgbm9kZUlkLCB0cnVlLCBjb250YWluZXIpO1xuICB9KTtcblxuICAvLyBEcmF3IHRoZSBpbnRlcm1lZGlhdGUgbGF5ZXJzLlxuICBmb3IgKGxldCBsYXllcklkeCA9IDE7IGxheWVySWR4IDwgbnVtTGF5ZXJzIC0gMTsgbGF5ZXJJZHgrKykge1xuICAgIGxldCBudW1Ob2RlcyA9IG5ldHdvcmtbbGF5ZXJJZHhdLmxlbmd0aDtcbiAgICBsZXQgY3ggPSBsYXllclNjYWxlKGxheWVySWR4KSArIFJFQ1RfU0laRSAvIDI7XG4gICAgbWF4WSA9IE1hdGgubWF4KG1heFksIG5vZGVJbmRleFNjYWxlKG51bU5vZGVzKSk7XG4gICAgYWRkUGx1c01pbnVzQ29udHJvbChsYXllclNjYWxlKGxheWVySWR4KSwgbGF5ZXJJZHgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTm9kZXM7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBuZXR3b3JrW2xheWVySWR4XVtpXTtcbiAgICAgIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKGkpICsgUkVDVF9TSVpFIC8gMjtcbiAgICAgIG5vZGUyY29vcmRbbm9kZS5pZF0gPSB7Y3gsIGN5fTtcbiAgICAgIGRyYXdOb2RlKGN4LCBjeSwgbm9kZS5pZCwgZmFsc2UsIGNvbnRhaW5lciwgbm9kZSk7XG5cbiAgICAgIC8vIFNob3cgY2FsbG91dCB0byB0aHVtYm5haWxzLlxuICAgICAgbGV0IG51bU5vZGVzID0gbmV0d29ya1tsYXllcklkeF0ubGVuZ3RoO1xuICAgICAgbGV0IG5leHROdW1Ob2RlcyA9IG5ldHdvcmtbbGF5ZXJJZHggKyAxXS5sZW5ndGg7XG4gICAgICBpZiAoaWRXaXRoQ2FsbG91dCA9PSBudWxsICYmXG4gICAgICAgICAgaSA9PT0gbnVtTm9kZXMgLSAxICYmXG4gICAgICAgICAgbmV4dE51bU5vZGVzIDw9IG51bU5vZGVzKSB7XG4gICAgICAgIGNhbGxvdXRUaHVtYi5zdHlsZSh7XG4gICAgICAgICAgZGlzcGxheTogbnVsbCxcbiAgICAgICAgICB0b3A6IGAkezIwICsgMyArIGN5fXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHtjeH1weGBcbiAgICAgICAgfSk7XG4gICAgICAgIGlkV2l0aENhbGxvdXQgPSBub2RlLmlkO1xuICAgICAgfVxuXG4gICAgICAvLyBEcmF3IGxpbmtzLlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmlucHV0TGlua3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGxpbmsgPSBub2RlLmlucHV0TGlua3Nbal07XG4gICAgICAgIGxldCBwYXRoOiBTVkdQYXRoRWxlbWVudCA9IGRyYXdMaW5rKGxpbmssIG5vZGUyY29vcmQsIG5ldHdvcmssXG4gICAgICAgICAgICBjb250YWluZXIsIGogPT09IDAsIGosIG5vZGUuaW5wdXRMaW5rcy5sZW5ndGgpLm5vZGUoKSBhcyBhbnk7XG4gICAgICAgIC8vIFNob3cgY2FsbG91dCB0byB3ZWlnaHRzLlxuICAgICAgICBsZXQgcHJldkxheWVyID0gbmV0d29ya1tsYXllcklkeCAtIDFdO1xuICAgICAgICBsZXQgbGFzdE5vZGVQcmV2TGF5ZXIgPSBwcmV2TGF5ZXJbcHJldkxheWVyLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodGFyZ2V0SWRXaXRoQ2FsbG91dCA9PSBudWxsICYmXG4gICAgICAgICAgICBpID09PSBudW1Ob2RlcyAtIDEgJiZcbiAgICAgICAgICAgIGxpbmsuc291cmNlLmlkID09PSBsYXN0Tm9kZVByZXZMYXllci5pZCAmJlxuICAgICAgICAgICAgKGxpbmsuc291cmNlLmlkICE9PSBpZFdpdGhDYWxsb3V0IHx8IG51bUxheWVycyA8PSA1KSAmJlxuICAgICAgICAgICAgbGluay5kZXN0LmlkICE9PSBpZFdpdGhDYWxsb3V0ICYmXG4gICAgICAgICAgICBwcmV2TGF5ZXIubGVuZ3RoID49IG51bU5vZGVzKSB7XG4gICAgICAgICAgbGV0IG1pZFBvaW50ID0gcGF0aC5nZXRQb2ludEF0TGVuZ3RoKHBhdGguZ2V0VG90YWxMZW5ndGgoKSAqIDAuNyk7XG4gICAgICAgICAgY2FsbG91dFdlaWdodHMuc3R5bGUoe1xuICAgICAgICAgICAgZGlzcGxheTogbnVsbCxcbiAgICAgICAgICAgIHRvcDogYCR7bWlkUG9pbnQueSArIDV9cHhgLFxuICAgICAgICAgICAgbGVmdDogYCR7bWlkUG9pbnQueCArIDN9cHhgXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGFyZ2V0SWRXaXRoQ2FsbG91dCA9IGxpbmsuZGVzdC5pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERyYXcgdGhlIG91dHB1dCBub2RlIHNlcGFyYXRlbHkuXG4gIGN4ID0gd2lkdGggKyBSRUNUX1NJWkUgLyAyO1xuICBsZXQgbm9kZSA9IG5ldHdvcmtbbnVtTGF5ZXJzIC0gMV1bMF07XG4gIGxldCBjeSA9IG5vZGVJbmRleFNjYWxlKDApICsgUkVDVF9TSVpFIC8gMjtcbiAgbm9kZTJjb29yZFtub2RlLmlkXSA9IHtjeCwgY3l9O1xuICAvLyBEcmF3IGxpbmtzLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuaW5wdXRMaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5rID0gbm9kZS5pbnB1dExpbmtzW2ldO1xuICAgIGRyYXdMaW5rKGxpbmssIG5vZGUyY29vcmQsIG5ldHdvcmssIGNvbnRhaW5lciwgaSA9PT0gMCwgaSxcbiAgICAgICAgbm9kZS5pbnB1dExpbmtzLmxlbmd0aCk7XG4gIH1cbiAgLy8gQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIHN2Zy5cbiAgc3ZnLmF0dHIoXCJoZWlnaHRcIiwgbWF4WSk7XG5cbiAgLy8gQWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGZlYXR1cmVzIGNvbHVtbi5cbiAgbGV0IGhlaWdodCA9IE1hdGgubWF4KFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGNhbGxvdXRUaHVtYiksXG4gICAgZ2V0UmVsYXRpdmVIZWlnaHQoY2FsbG91dFdlaWdodHMpLFxuICAgIGdldFJlbGF0aXZlSGVpZ2h0KGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpKVxuICApO1xuICBkMy5zZWxlY3QoXCIuY29sdW1uLmZlYXR1cmVzXCIpLnN0eWxlKFwiaGVpZ2h0XCIsIGhlaWdodCArIFwicHhcIik7XG59XG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlSGVpZ2h0KHNlbGVjdGlvbjogZDMuU2VsZWN0aW9uPGFueT4pIHtcbiAgbGV0IG5vZGUgPSBzZWxlY3Rpb24ubm9kZSgpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICByZXR1cm4gbm9kZS5vZmZzZXRIZWlnaHQgKyBub2RlLm9mZnNldFRvcDtcbn1cblxuZnVuY3Rpb24gYWRkUGx1c01pbnVzQ29udHJvbCh4OiBudW1iZXIsIGxheWVySWR4OiBudW1iZXIpIHtcbiAgbGV0IGRpdiA9IGQzLnNlbGVjdChcIiNuZXR3b3JrXCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5jbGFzc2VkKFwicGx1cy1taW51cy1uZXVyb25zXCIsIHRydWUpXG4gICAgLnN0eWxlKFwibGVmdFwiLCBgJHt4IC0gMTB9cHhgKTtcblxuICBsZXQgaSA9IGxheWVySWR4IC0gMTtcbiAgbGV0IGZpcnN0Um93ID0gZGl2LmFwcGVuZChcImRpdlwiKS5hdHRyKFwiY2xhc3NcIiwgYHVpLW51bU5vZGVzJHtsYXllcklkeH1gKTtcbiAgZmlyc3RSb3cuYXBwZW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb25cIilcbiAgICAgIC5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IG51bU5ldXJvbnMgPSBzdGF0ZS5uZXR3b3JrU2hhcGVbaV07XG4gICAgICAgIGlmIChudW1OZXVyb25zID49IDgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUubmV0d29ya1NoYXBlW2ldKys7XG5cbiAgICAgICAgdmFyIGRhdGEgPSBcImJhdGNoU2l6ZT1cIitzdGF0ZS5iYXRjaFNpemUrXCImbm9pc2U9XCIrc3RhdGUubm9pc2UrXCImdHJhaW5Ub1Rlc3RSYXRpbz1cIitzdGF0ZS5wZXJjVHJhaW5EYXRhXG4gICAgICAgICAgICAgICAgICAgICtcIiZudW1IaWRkZW5MYXllcnM9XCIrc3RhdGUubnVtSGlkZGVuTGF5ZXJzK1wiJm5ldHdvcmtTaGFwZT1cIitzdGF0ZS5uZXR3b3JrU2hhcGU7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgLy94aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovLzM1LjE4NC4xNzEuMjQ5L3YxL3N0YXRlL1wiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIGMydHFaVzVoT21GdFpHSTVZWEp6ZEhKaFpHRnNaVUFtSlNNPVwiKTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgICAgcGFyYW1ldGVyc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICByZXNldCgpO1xuICAgICAgfSlcbiAgICAuYXBwZW5kKFwiaVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1hdGVyaWFsLWljb25zXCIpXG4gICAgICAudGV4dChcImFkZFwiKTtcblxuICBmaXJzdFJvdy5hcHBlbmQoXCJidXR0b25cIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvblwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgbnVtTmV1cm9ucyA9IHN0YXRlLm5ldHdvcmtTaGFwZVtpXTtcbiAgICAgICAgaWYgKG51bU5ldXJvbnMgPD0gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0tLTtcblxuICAgICAgICB2YXIgZGF0YSA9IFwiYmF0Y2hTaXplPVwiK3N0YXRlLmJhdGNoU2l6ZStcIiZub2lzZT1cIitzdGF0ZS5ub2lzZStcIiZ0cmFpblRvVGVzdFJhdGlvPVwiK3N0YXRlLnBlcmNUcmFpbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgK1wiJm51bUhpZGRlbkxheWVycz1cIitzdGF0ZS5udW1IaWRkZW5MYXllcnMrXCImbmV0d29ya1NoYXBlPVwiK3N0YXRlLm5ldHdvcmtTaGFwZTtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAvL3hoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vMzUuMTg0LjE3MS4yNDkvdjEvc3RhdGUvXCIpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmFzaWMgYzJ0cVpXNWhPbUZ0WkdJNVlYSnpkSEpoWkdGc1pVQW1KU009XCIpO1xuICAgICAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgICAgICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICB9KVxuICAgIC5hcHBlbmQoXCJpXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgICAgIC50ZXh0KFwicmVtb3ZlXCIpO1xuXG4gIGxldCBzdWZmaXggPSBzdGF0ZS5uZXR3b3JrU2hhcGVbaV0gPiAxID8gXCJzXCIgOiBcIlwiO1xuICBkaXYuYXBwZW5kKFwiZGl2XCIpLnRleHQoXG4gICAgc3RhdGUubmV0d29ya1NoYXBlW2ldICsgXCIgbmV1cm9uXCIgKyBzdWZmaXhcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSG92ZXJDYXJkKHR5cGU6IEhvdmVyVHlwZSwgbm9kZU9yTGluaz86IG5uLk5vZGUgfCBubi5MaW5rLFxuICAgIGNvb3JkaW5hdGVzPzogW251bWJlciwgbnVtYmVyXSkge1xuICBsZXQgaG92ZXJjYXJkID0gZDMuc2VsZWN0KFwiI2hvdmVyY2FyZFwiKTtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIGhvdmVyY2FyZC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgIGQzLnNlbGVjdChcIiNzdmdcIikub24oXCJjbGlja1wiLCBudWxsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZDMuc2VsZWN0KFwiI3N2Z1wiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBob3ZlcmNhcmQuc2VsZWN0KFwiLnZhbHVlXCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgbGV0IGlucHV0ID0gaG92ZXJjYXJkLnNlbGVjdChcImlucHV0XCIpO1xuICAgIGlucHV0LnN0eWxlKFwiZGlzcGxheVwiLCBudWxsKTtcbiAgICBpbnB1dC5vbihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbnVsbCAmJiB0aGlzLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBIb3ZlclR5cGUuV0VJR0hUKSB7XG4gICAgICAgICAgKG5vZGVPckxpbmsgYXMgbm4uTGluaykud2VpZ2h0ID0gK3RoaXMudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKG5vZGVPckxpbmsgYXMgbm4uTm9kZSkuYmlhcyA9ICt0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVVJKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaW5wdXQub24oXCJrZXlwcmVzc1wiLCAoKSA9PiB7XG4gICAgICBpZiAoKGQzLmV2ZW50IGFzIGFueSkua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdXBkYXRlSG92ZXJDYXJkKHR5cGUsIG5vZGVPckxpbmssIGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAoaW5wdXQubm9kZSgpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZvY3VzKCk7XG4gIH0pO1xuICBsZXQgdmFsdWUgPSAodHlwZSA9PT0gSG92ZXJUeXBlLldFSUdIVCkgP1xuICAgIChub2RlT3JMaW5rIGFzIG5uLkxpbmspLndlaWdodCA6XG4gICAgKG5vZGVPckxpbmsgYXMgbm4uTm9kZSkuYmlhcztcbiAgbGV0IG5hbWUgPSAodHlwZSA9PT0gSG92ZXJUeXBlLldFSUdIVCkgPyBcIldlaWdodFwiIDogXCJCaWFzXCI7XG4gIGhvdmVyY2FyZC5zdHlsZSh7XG4gICAgXCJsZWZ0XCI6IGAke2Nvb3JkaW5hdGVzWzBdICsgMjB9cHhgLFxuICAgIFwidG9wXCI6IGAke2Nvb3JkaW5hdGVzWzFdfXB4YCxcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH0pO1xuICBob3ZlcmNhcmQuc2VsZWN0KFwiLnR5cGVcIikudGV4dChuYW1lKTtcbiAgaG92ZXJjYXJkLnNlbGVjdChcIi52YWx1ZVwiKVxuICAgIC5zdHlsZShcImRpc3BsYXlcIiwgbnVsbClcbiAgICAudGV4dCh2YWx1ZS50b1ByZWNpc2lvbigyKSk7XG4gIGhvdmVyY2FyZC5zZWxlY3QoXCJpbnB1dFwiKVxuICAgIC5wcm9wZXJ0eShcInZhbHVlXCIsIHZhbHVlLnRvUHJlY2lzaW9uKDIpKVxuICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xufVxuXG5mdW5jdGlvbiBkcmF3TGluayhcbiAgICBpbnB1dDogbm4uTGluaywgbm9kZTJjb29yZDoge1tpZDogc3RyaW5nXToge2N4OiBudW1iZXIsIGN5OiBudW1iZXJ9fSxcbiAgICBuZXR3b3JrOiBubi5Ob2RlW11bXSwgY29udGFpbmVyOiBkMy5TZWxlY3Rpb248YW55PixcbiAgICBpc0ZpcnN0OiBib29sZWFuLCBpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xuICBsZXQgbGluZSA9IGNvbnRhaW5lci5pbnNlcnQoXCJwYXRoXCIsIFwiOmZpcnN0LWNoaWxkXCIpO1xuICBsZXQgc291cmNlID0gbm9kZTJjb29yZFtpbnB1dC5zb3VyY2UuaWRdO1xuICBsZXQgZGVzdCA9IG5vZGUyY29vcmRbaW5wdXQuZGVzdC5pZF07XG4gIGxldCBkYXR1bSA9IHtcbiAgICBzb3VyY2U6IHtcbiAgICAgIHk6IHNvdXJjZS5jeCArIFJFQ1RfU0laRSAvIDIgKyAyLFxuICAgICAgeDogc291cmNlLmN5XG4gICAgfSxcbiAgICB0YXJnZXQ6IHtcbiAgICAgIHk6IGRlc3QuY3ggLSBSRUNUX1NJWkUgLyAyLFxuICAgICAgeDogZGVzdC5jeSArICgoaW5kZXggLSAobGVuZ3RoIC0gMSkgLyAyKSAvIGxlbmd0aCkgKiAxMlxuICAgIH1cbiAgfTtcbiAgbGV0IGRpYWdvbmFsID0gZDMuc3ZnLmRpYWdvbmFsKCkucHJvamVjdGlvbihkID0+IFtkLnksIGQueF0pO1xuICBsaW5lLmF0dHIoe1xuICAgIFwibWFya2VyLXN0YXJ0XCI6IFwidXJsKCNtYXJrZXJBcnJvdylcIixcbiAgICBjbGFzczogXCJsaW5rXCIsXG4gICAgaWQ6IFwibGlua1wiICsgaW5wdXQuc291cmNlLmlkICsgXCItXCIgKyBpbnB1dC5kZXN0LmlkLFxuICAgIGQ6IGRpYWdvbmFsKGRhdHVtLCAwKVxuICB9KTtcblxuICAvLyBBZGQgYW4gaW52aXNpYmxlIHRoaWNrIGxpbmsgdGhhdCB3aWxsIGJlIHVzZWQgZm9yXG4gIC8vIHNob3dpbmcgdGhlIHdlaWdodCB2YWx1ZSBvbiBob3Zlci5cbiAgY29udGFpbmVyLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImRcIiwgZGlhZ29uYWwoZGF0dW0sIDApKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rLWhvdmVyXCIpXG4gICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUhvdmVyQ2FyZChIb3ZlclR5cGUuV0VJR0hULCBpbnB1dCwgZDMubW91c2UodGhpcykpO1xuICAgIH0pLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZUhvdmVyQ2FyZChudWxsKTtcbiAgICB9KTtcbiAgcmV0dXJuIGxpbmU7XG59XG5cbi8qKlxuICogR2l2ZW4gYSBuZXVyYWwgbmV0d29yaywgaXQgYXNrcyB0aGUgbmV0d29yayBmb3IgdGhlIG91dHB1dCAocHJlZGljdGlvbilcbiAqIG9mIGV2ZXJ5IG5vZGUgaW4gdGhlIG5ldHdvcmsgdXNpbmcgaW5wdXRzIHNhbXBsZWQgb24gYSBzcXVhcmUgZ3JpZC5cbiAqIEl0IHJldHVybnMgYSBtYXAgd2hlcmUgZWFjaCBrZXkgaXMgdGhlIG5vZGUgSUQgYW5kIHRoZSB2YWx1ZSBpcyBhIHNxdWFyZVxuICogbWF0cml4IG9mIHRoZSBvdXRwdXRzIG9mIHRoZSBuZXR3b3JrIGZvciBlYWNoIGlucHV0IGluIHRoZSBncmlkIHJlc3BlY3RpdmVseS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrOiBubi5Ob2RlW11bXSwgZmlyc3RUaW1lOiBib29sZWFuKSB7XG4gIGlmIChmaXJzdFRpbWUpIHtcbiAgICBib3VuZGFyeSA9IHt9O1xuICAgIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgICAgYm91bmRhcnlbbm9kZS5pZF0gPSBuZXcgQXJyYXkoREVOU0lUWSk7XG4gICAgfSk7XG4gICAgLy8gR28gdGhyb3VnaCBhbGwgcHJlZGVmaW5lZCBpbnB1dHMuXG4gICAgZm9yIChsZXQgbm9kZUlkIGluIElOUFVUUykge1xuICAgICAgYm91bmRhcnlbbm9kZUlkXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICB9XG4gIH1cbiAgbGV0IHhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLmRvbWFpbihbMCwgREVOU0lUWSAtIDFdKS5yYW5nZSh4RG9tYWluKTtcbiAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLmRvbWFpbihbREVOU0lUWSAtIDEsIDBdKS5yYW5nZSh4RG9tYWluKTtcblxuICBsZXQgaSA9IDAsIGogPSAwO1xuICBmb3IgKGkgPSAwOyBpIDwgREVOU0lUWTsgaSsrKSB7XG4gICAgaWYgKGZpcnN0VGltZSkge1xuICAgICAgbm4uZm9yRWFjaE5vZGUobmV0d29yaywgdHJ1ZSwgbm9kZSA9PiB7XG4gICAgICAgIGJvdW5kYXJ5W25vZGUuaWRdW2ldID0gbmV3IEFycmF5KERFTlNJVFkpO1xuICAgICAgfSk7XG4gICAgICAvLyBHbyB0aHJvdWdoIGFsbCBwcmVkZWZpbmVkIGlucHV0cy5cbiAgICAgIGZvciAobGV0IG5vZGVJZCBpbiBJTlBVVFMpIHtcbiAgICAgICAgYm91bmRhcnlbbm9kZUlkXVtpXSA9IG5ldyBBcnJheShERU5TSVRZKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChqID0gMDsgaiA8IERFTlNJVFk7IGorKykge1xuICAgICAgLy8gMSBmb3IgcG9pbnRzIGluc2lkZSB0aGUgY2lyY2xlLCBhbmQgMCBmb3IgcG9pbnRzIG91dHNpZGUgdGhlIGNpcmNsZS5cbiAgICAgIGxldCB4ID0geFNjYWxlKGkpO1xuICAgICAgbGV0IHkgPSB5U2NhbGUoaik7XG4gICAgICBsZXQgaW5wdXQgPSBjb25zdHJ1Y3RJbnB1dCh4LCB5KTtcbiAgICAgIG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICAgIG5uLmZvckVhY2hOb2RlKG5ldHdvcmssIHRydWUsIG5vZGUgPT4ge1xuICAgICAgICBib3VuZGFyeVtub2RlLmlkXVtpXVtqXSA9IG5vZGUub3V0cHV0O1xuICAgICAgfSk7XG4gICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgIC8vIEdvIHRocm91Z2ggYWxsIHByZWRlZmluZWQgaW5wdXRzLlxuICAgICAgICBmb3IgKGxldCBub2RlSWQgaW4gSU5QVVRTKSB7XG4gICAgICAgICAgYm91bmRhcnlbbm9kZUlkXVtpXVtqXSA9IElOUFVUU1tub2RlSWRdLmYoeCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9zcyhuZXR3b3JrOiBubi5Ob2RlW11bXSwgZGF0YVBvaW50czogRXhhbXBsZTJEW10pOiBudW1iZXIge1xuICBsZXQgbG9zcyA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkYXRhUG9pbnQgPSBkYXRhUG9pbnRzW2ldO1xuICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KGRhdGFQb2ludC54LCBkYXRhUG9pbnQueSk7XG4gICAgbGV0IG91dHB1dCA9IG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICBsb3NzICs9IG5uLkVycm9ycy5TUVVBUkUuZXJyb3Iob3V0cHV0LCBkYXRhUG9pbnQubGFiZWwpO1xuICB9XG4gIHJldHVybiBsb3NzIC8gZGF0YVBvaW50cy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVJKGZpcnN0U3RlcCA9IGZhbHNlKSB7XG4gIC8vIFVwZGF0ZSB0aGUgbGlua3MgdmlzdWFsbHkuXG4gIHVwZGF0ZVdlaWdodHNVSShuZXR3b3JrLCBkMy5zZWxlY3QoXCJnLmNvcmVcIikpO1xuICAvLyBVcGRhdGUgdGhlIGJpYXMgdmFsdWVzIHZpc3VhbGx5LlxuICB1cGRhdGVCaWFzZXNVSShuZXR3b3JrKTtcbiAgLy8gR2V0IHRoZSBkZWNpc2lvbiBib3VuZGFyeSBvZiB0aGUgbmV0d29yay5cbiAgdXBkYXRlRGVjaXNpb25Cb3VuZGFyeShuZXR3b3JrLCBmaXJzdFN0ZXApO1xuICBsZXQgc2VsZWN0ZWRJZCA9IHNlbGVjdGVkTm9kZUlkICE9IG51bGwgP1xuICAgICAgc2VsZWN0ZWROb2RlSWQgOiBubi5nZXRPdXRwdXROb2RlKG5ldHdvcmspLmlkO1xuICBoZWF0TWFwLnVwZGF0ZUJhY2tncm91bmQoYm91bmRhcnlbc2VsZWN0ZWRJZF0sIHN0YXRlLmRpc2NyZXRpemUpO1xuXG4gIC8vIFVwZGF0ZSBhbGwgZGVjaXNpb24gYm91bmRhcmllcy5cbiAgZDMuc2VsZWN0KFwiI25ldHdvcmtcIikuc2VsZWN0QWxsKFwiZGl2LmNhbnZhc1wiKVxuICAgICAgLmVhY2goZnVuY3Rpb24oZGF0YToge2hlYXRtYXA6IEhlYXRNYXAsIGlkOiBzdHJpbmd9KSB7XG4gICAgZGF0YS5oZWF0bWFwLnVwZGF0ZUJhY2tncm91bmQocmVkdWNlTWF0cml4KGJvdW5kYXJ5W2RhdGEuaWRdLCAxMCksXG4gICAgICAgIHN0YXRlLmRpc2NyZXRpemUpO1xuICB9KTtcblxuICBmdW5jdGlvbiB6ZXJvUGFkKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IHBhZCA9IFwiMDAwMDAwXCI7XG4gICAgcmV0dXJuIChwYWQgKyBuKS5zbGljZSgtcGFkLmxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tYXMoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gIH1cblxuICBmdW5jdGlvbiBodW1hblJlYWRhYmxlKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG4udG9GaXhlZCgzKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBsb3NzIGFuZCBpdGVyYXRpb24gbnVtYmVyLlxuICBkMy5zZWxlY3QoXCIjbG9zcy10cmFpblwiKS50ZXh0KGh1bWFuUmVhZGFibGUobG9zc1RyYWluKSk7XG4gIGQzLnNlbGVjdChcIiNsb3NzLXRlc3RcIikudGV4dChodW1hblJlYWRhYmxlKGxvc3NUZXN0KSk7XG4gIGQzLnNlbGVjdChcIiNpdGVyLW51bWJlclwiKS50ZXh0KGFkZENvbW1hcyh6ZXJvUGFkKGl0ZXIpKSk7XG4gIGxpbmVDaGFydC5hZGREYXRhUG9pbnQoW2xvc3NUcmFpbiwgbG9zc1Rlc3RdKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SW5wdXRJZHMoKTogc3RyaW5nW10ge1xuICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGxldCBpbnB1dE5hbWUgaW4gSU5QVVRTKSB7XG4gICAgaWYgKHN0YXRlW2lucHV0TmFtZV0pIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlucHV0TmFtZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdElucHV0KHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyW10ge1xuICBsZXQgaW5wdXQ6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGlucHV0TmFtZSBpbiBJTlBVVFMpIHtcbiAgICBpZiAoc3RhdGVbaW5wdXROYW1lXSkge1xuICAgICAgaW5wdXQucHVzaChJTlBVVFNbaW5wdXROYW1lXS5mKHgsIHkpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBvbmVTdGVwKCk6IHZvaWQge1xuICBpdGVyKys7XG4gIHRyYWluRGF0YS5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgIGxldCBpbnB1dCA9IGNvbnN0cnVjdElucHV0KHBvaW50LngsIHBvaW50LnkpO1xuICAgIG5uLmZvcndhcmRQcm9wKG5ldHdvcmssIGlucHV0KTtcbiAgICBubi5iYWNrUHJvcChuZXR3b3JrLCBwb2ludC5sYWJlbCwgbm4uRXJyb3JzLlNRVUFSRSk7XG4gICAgaWYgKChpICsgMSkgJSBzdGF0ZS5iYXRjaFNpemUgPT09IDApIHtcbiAgICAgIG5uLnVwZGF0ZVdlaWdodHMobmV0d29yaywgc3RhdGUubGVhcm5pbmdSYXRlLCBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUpO1xuICAgIH1cbiAgfSk7XG4gIC8vIENvbXB1dGUgdGhlIGxvc3MuXG4gIGxvc3NUcmFpbiA9IGdldExvc3MobmV0d29yaywgdHJhaW5EYXRhKTtcbiAgbG9zc1Rlc3QgPSBnZXRMb3NzKG5ldHdvcmssIHRlc3REYXRhKTtcbiAgdXBkYXRlVUkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE91dHB1dFdlaWdodHMobmV0d29yazogbm4uTm9kZVtdW10pOiBudW1iZXJbXSB7XG4gIGxldCB3ZWlnaHRzOiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBsYXllcklkeCA9IDA7IGxheWVySWR4IDwgbmV0d29yay5sZW5ndGggLSAxOyBsYXllcklkeCsrKSB7XG4gICAgbGV0IGN1cnJlbnRMYXllciA9IG5ldHdvcmtbbGF5ZXJJZHhdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudExheWVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRMYXllcltpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5vdXRwdXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSBub2RlLm91dHB1dHNbal07XG4gICAgICAgIHdlaWdodHMucHVzaChvdXRwdXQud2VpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdlaWdodHM7XG59XG5cbmZ1bmN0aW9uIHRvSnNvbihvblN0YXJ0dXA9ZmFsc2Upe1xuXG4gIHZhciBqc29uT2JqID0ge1wiZGF0YXNldFwiIDogc3RhdGUuZGF0YXNldCwgXCJuZXdEYXRhc2V0XCIgOiBzdGF0ZS5yZWdEYXRhc2V0LCBcIm51bUhpZGRlbkxheWVyc1wiIDogc3RhdGUubnVtSGlkZGVuTGF5ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5ldHdvcmtTaGFwZVwiIDogc3RhdGUubmV0d29ya1NoYXBlLCBcInNob3dUZXN0RGF0YVwiIDogc3RhdGUuc2hvd1Rlc3REYXRhLCBcImRpc2NyZXRpemVcIiA6IHN0YXRlLmRpc2NyZXRpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyY1RyYWluRGF0YVwiIDogc3RhdGUucGVyY1RyYWluRGF0YSwgXCJub2lzZVwiIDogc3RhdGUubm9pc2UsIFwiYmF0Y2hTaXplXCIgOiBzdGF0ZS5iYXRjaFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZhdGlvblwiIDogc3RhdGUuYWN0aXZhdGlvbiwgXCJsZWFybmluZ1JhdGVcIiA6IHN0YXRlLmxlYXJuaW5nUmF0ZSwgXCJyZWd1bGFyaXphdGlvblwiIDogc3RhdGUucmVndWxhcml6YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVndWxhcml6YXRpb25SYXRlXCIgOiBzdGF0ZS5yZWd1bGFyaXphdGlvblJhdGUsIFwicHJvYmxlbVwiIDogc3RhdGUucHJvYmxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbml0WmVyb1wiIDogc3RhdGUuaW5pdFplcm8sIFwidHV0b3JpYWxcIiA6IHN0YXRlLnR1dG9yaWFsICB9O1xuXG4gICAgcmV0dXJuIGpzb25PYmo7XG59O1xuXG5mdW5jdGlvbiByZXNldChvblN0YXJ0dXA9ZmFsc2UpIHtcbiAgbGluZUNoYXJ0LnJlc2V0KCk7XG4gIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICBpZiAoIW9uU3RhcnR1cCkge1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gIH1cbiAgcGxheWVyLnBhdXNlKCk7XG5cbiAgbGV0IHN1ZmZpeCA9IHN0YXRlLm51bUhpZGRlbkxheWVycyAhPT0gMSA/IFwic1wiIDogXCJcIjtcbiAgZDMuc2VsZWN0KFwiI2xheWVycy1sYWJlbFwiKS50ZXh0KFwiSGlkZGVuIGxheWVyXCIgKyBzdWZmaXgpO1xuICBkMy5zZWxlY3QoXCIjbnVtLWxheWVyc1wiKS50ZXh0KHN0YXRlLm51bUhpZGRlbkxheWVycyk7XG5cblxuICAvLyBNYWtlIGEgc2ltcGxlIG5ldHdvcmsuXG4gIGl0ZXIgPSAwO1xuICBsZXQgbnVtSW5wdXRzID0gY29uc3RydWN0SW5wdXQoMCAsIDApLmxlbmd0aDtcbiAgbGV0IHNoYXBlID0gW251bUlucHV0c10uY29uY2F0KHN0YXRlLm5ldHdvcmtTaGFwZSkuY29uY2F0KFsxXSk7XG4gIGxldCBvdXRwdXRBY3RpdmF0aW9uID0gKHN0YXRlLnByb2JsZW0gPT09IFByb2JsZW0uUkVHUkVTU0lPTikgP1xuICAgICAgbm4uQWN0aXZhdGlvbnMuTElORUFSIDogbm4uQWN0aXZhdGlvbnMuVEFOSDtcbiAgbmV0d29yayA9IG5uLmJ1aWxkTmV0d29yayhzaGFwZSwgc3RhdGUuYWN0aXZhdGlvbiwgb3V0cHV0QWN0aXZhdGlvbixcbiAgICAgIHN0YXRlLnJlZ3VsYXJpemF0aW9uLCBjb25zdHJ1Y3RJbnB1dElkcygpLCBzdGF0ZS5pbml0WmVybyk7XG4gIGxvc3NUcmFpbiA9IGdldExvc3MobmV0d29yaywgdHJhaW5EYXRhKTtcbiAgbG9zc1Rlc3QgPSBnZXRMb3NzKG5ldHdvcmssIHRlc3REYXRhKTtcbiAgZHJhd05ldHdvcmsobmV0d29yayk7XG4gIHVwZGF0ZVVJKHRydWUpO1xufTtcblxuZnVuY3Rpb24gaW5pdFR1dG9yaWFsKCkge1xuICBpZiAoc3RhdGUudHV0b3JpYWwgPT0gbnVsbCB8fCBzdGF0ZS50dXRvcmlhbCA9PT0gJycgfHwgc3RhdGUuaGlkZVRleHQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gUmVtb3ZlIGFsbCBvdGhlciB0ZXh0LlxuICBkMy5zZWxlY3RBbGwoXCJhcnRpY2xlIGRpdi5sLS1ib2R5XCIpLnJlbW92ZSgpO1xuICBsZXQgdHV0b3JpYWwgPSBkMy5zZWxlY3QoXCJhcnRpY2xlXCIpLmFwcGVuZChcImRpdlwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsLS1ib2R5XCIpO1xuICAvLyBJbnNlcnQgdHV0b3JpYWwgdGV4dC5cbiAgZDMuaHRtbChgdHV0b3JpYWxzLyR7c3RhdGUudHV0b3JpYWx9Lmh0bWxgLCAoZXJyLCBodG1sRnJhZ21lbnQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHR1dG9yaWFsLm5vZGUoKS5hcHBlbmRDaGlsZChodG1sRnJhZ21lbnQpO1xuICAgIC8vIElmIHRoZSB0dXRvcmlhbCBoYXMgYSA8dGl0bGU+IHRhZywgc2V0IHRoZSBwYWdlIHRpdGxlIHRvIHRoYXQuXG4gICAgbGV0IHRpdGxlID0gdHV0b3JpYWwuc2VsZWN0KFwidGl0bGVcIik7XG4gICAgaWYgKHRpdGxlLnNpemUoKSkge1xuICAgICAgZDMuc2VsZWN0KFwiaGVhZGVyIGgxXCIpLnN0eWxlKHtcbiAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMjBweFwiLFxuICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIyMHB4XCIsXG4gICAgICB9KVxuICAgICAgLnRleHQodGl0bGUudGV4dCgpKTtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGUudGV4dCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXdEYXRhc2V0VGh1bWJuYWlscygpIHtcbiAgZnVuY3Rpb24gcmVuZGVyVGh1bWJuYWlsKGNhbnZhcywgZGF0YUdlbmVyYXRvcikge1xuICAgIGxldCB3ID0gMTAwO1xuICAgIGxldCBoID0gMTAwO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3KTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGgpO1xuICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgZGF0YSA9IGRhdGFHZW5lcmF0b3IoMjAwLCAwKTtcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclNjYWxlKGQubGFiZWwpO1xuICAgICAgY29udGV4dC5maWxsUmVjdCh3ICogKGQueCArIDYpIC8gMTIsIGggKiAoZC55ICsgNikgLyAxMiwgNCwgNCk7XG4gICAgfSk7XG4gICAgZDMuc2VsZWN0KGNhbnZhcy5wYXJlbnROb2RlKS5zdHlsZShcImRpc3BsYXlcIiwgbnVsbCk7XG4gIH1cbiAgZDMuc2VsZWN0QWxsKFwiLmRhdGFzZXRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblxuICBpZiAoc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5DTEFTU0lGSUNBVElPTikge1xuICAgIGZvciAobGV0IGRhdGFzZXQgaW4gZGF0YXNldHMpIHtcbiAgICAgIGxldCBjYW52YXM6IGFueSA9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgY2FudmFzW2RhdGEtZGF0YXNldD0ke2RhdGFzZXR9XWApO1xuICAgICAgbGV0IGRhdGFHZW5lcmF0b3IgPSBkYXRhc2V0c1tkYXRhc2V0XTtcbiAgICAgIHJlbmRlclRodW1ibmFpbChjYW52YXMsIGRhdGFHZW5lcmF0b3IpO1xuICAgIH1cbiAgfVxuICBpZiAoc3RhdGUucHJvYmxlbSA9PT0gUHJvYmxlbS5SRUdSRVNTSU9OKSB7XG4gICAgZm9yIChsZXQgcmVnRGF0YXNldCBpbiByZWdEYXRhc2V0cykge1xuICAgICAgbGV0IGNhbnZhczogYW55ID1cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBjYW52YXNbZGF0YS1yZWdEYXRhc2V0PSR7cmVnRGF0YXNldH1dYCk7XG4gICAgICBsZXQgZGF0YUdlbmVyYXRvciA9IHJlZ0RhdGFzZXRzW3JlZ0RhdGFzZXRdO1xuICAgICAgcmVuZGVyVGh1bWJuYWlsKGNhbnZhcywgZGF0YUdlbmVyYXRvcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVDb250cm9scygpIHtcbiAgLy8gU2V0IGRpc3BsYXk6bm9uZSB0byBhbGwgdGhlIFVJIGVsZW1lbnRzIHRoYXQgYXJlIGhpZGRlbi5cbiAgbGV0IGhpZGRlblByb3BzID0gc3RhdGUuZ2V0SGlkZGVuUHJvcHMoKTtcbiAgaGlkZGVuUHJvcHMuZm9yRWFjaChwcm9wID0+IHtcbiAgICBsZXQgY29udHJvbHMgPSBkMy5zZWxlY3RBbGwoYC51aS0ke3Byb3B9YCk7XG4gICAgaWYgKGNvbnRyb2xzLnNpemUoKSA9PT0gMCkge1xuICAgICAgY29uc29sZS53YXJuKGAwIGh0bWwgZWxlbWVudHMgZm91bmQgd2l0aCBjbGFzcyAudWktJHtwcm9wfWApO1xuICAgIH1cbiAgICBjb250cm9scy5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICB9KTtcblxuICAvLyBBbHNvIGFkZCBjaGVja2JveCBmb3IgZWFjaCBoaWRhYmxlIGNvbnRyb2wgaW4gdGhlIFwidXNlIGl0IGluIGNsYXNzcm9tXCJcbiAgLy8gc2VjdGlvbi5cbiAgbGV0IGhpZGVDb250cm9scyA9IGQzLnNlbGVjdChcIi5oaWRlLWNvbnRyb2xzXCIpO1xuICBISURBQkxFX0NPTlRST0xTLmZvckVhY2goKFt0ZXh0LCBpZF0pID0+IHtcbiAgICBsZXQgbGFiZWwgPSBoaWRlQ29udHJvbHMuYXBwZW5kKFwibGFiZWxcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCIpO1xuICAgIGxldCBpbnB1dCA9IGxhYmVsLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAuYXR0cih7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgY2xhc3M6IFwibWRsLWNoZWNrYm94X19pbnB1dFwiLFxuICAgICAgfSk7XG4gICAgaWYgKGhpZGRlblByb3BzLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgaW5wdXQuYXR0cihcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgICBpbnB1dC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHN0YXRlLnNldEhpZGVQcm9wZXJ0eShpZCwgIXRoaXMuY2hlY2tlZCk7XG4gICAgICBzdGF0ZS5zZXJpYWxpemUoKTtcbiAgICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gICAgICBkMy5zZWxlY3QoXCIuaGlkZS1jb250cm9scy1saW5rXCIpXG4gICAgICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgfSk7XG4gICAgbGFiZWwuYXBwZW5kKFwic3BhblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIm1kbC1jaGVja2JveF9fbGFiZWwgbGFiZWxcIilcbiAgICAgIC50ZXh0KHRleHQpO1xuICB9KTtcbiAgZDMuc2VsZWN0KFwiLmhpZGUtY29udHJvbHMtbGlua1wiKVxuICAgIC5hdHRyKFwiaHJlZlwiLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGF0YShmaXJzdFRpbWUgPSBmYWxzZSkge1xuICBpZiAoIWZpcnN0VGltZSkge1xuICAgIC8vIENoYW5nZSB0aGUgc2VlZC5cbiAgICBzdGF0ZS5zZWVkID0gTWF0aC5yYW5kb20oKS50b0ZpeGVkKDUpO1xuICAgIHN0YXRlLnNlcmlhbGl6ZSgpO1xuICAgIHVzZXJIYXNJbnRlcmFjdGVkKCk7XG4gIH1cbiAgTWF0aC5zZWVkcmFuZG9tKHN0YXRlLnNlZWQpO1xuICBsZXQgbnVtU2FtcGxlcyA9IChzdGF0ZS5wcm9ibGVtID09PSBQcm9ibGVtLlJFR1JFU1NJT04pID9cbiAgICAgIE5VTV9TQU1QTEVTX1JFR1JFU1MgOiBOVU1fU0FNUExFU19DTEFTU0lGWTtcbiAgbGV0IGdlbmVyYXRvciA9IHN0YXRlLnByb2JsZW0gPT09IFByb2JsZW0uQ0xBU1NJRklDQVRJT04gP1xuICAgICAgc3RhdGUuZGF0YXNldCA6IHN0YXRlLnJlZ0RhdGFzZXQ7XG4gIGxldCBkYXRhID0gZ2VuZXJhdG9yKG51bVNhbXBsZXMsIHN0YXRlLm5vaXNlIC8gMTAwKTtcbiAgLy8gU2h1ZmZsZSB0aGUgZGF0YSBpbi1wbGFjZS5cbiAgc2h1ZmZsZShkYXRhKTtcbiAgLy8gU3BsaXQgaW50byB0cmFpbiBhbmQgdGVzdCBkYXRhLlxuICBsZXQgc3BsaXRJbmRleCA9IE1hdGguZmxvb3IoZGF0YS5sZW5ndGggKiBzdGF0ZS5wZXJjVHJhaW5EYXRhIC8gMTAwKTtcbiAgdHJhaW5EYXRhID0gZGF0YS5zbGljZSgwLCBzcGxpdEluZGV4KTtcbiAgdGVzdERhdGEgPSBkYXRhLnNsaWNlKHNwbGl0SW5kZXgpO1xuICBoZWF0TWFwLnVwZGF0ZVBvaW50cyh0cmFpbkRhdGEpO1xuICBoZWF0TWFwLnVwZGF0ZVRlc3RQb2ludHMoc3RhdGUuc2hvd1Rlc3REYXRhID8gdGVzdERhdGEgOiBbXSk7XG59XG5cbmxldCBmaXJzdEludGVyYWN0aW9uID0gdHJ1ZTtcbmxldCBwYXJhbWV0ZXJzQ2hhbmdlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB1c2VySGFzSW50ZXJhY3RlZCgpIHtcbiAgaWYgKCFmaXJzdEludGVyYWN0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZpcnN0SW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgbGV0IHBhZ2UgPSAnaW5kZXgnO1xuICBpZiAoc3RhdGUudHV0b3JpYWwgIT0gbnVsbCAmJiBzdGF0ZS50dXRvcmlhbCAhPT0gJycpIHtcbiAgICBwYWdlID0gYC92L3R1dG9yaWFscy8ke3N0YXRlLnR1dG9yaWFsfWA7XG4gIH1cbiAgZ2EoJ3NldCcsICdwYWdlJywgcGFnZSk7XG4gIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgeydzZXNzaW9uQ29udHJvbCc6ICdzdGFydCd9KTtcbn1cblxuZnVuY3Rpb24gc2ltdWxhdGlvblN0YXJ0ZWQoKSB7XG4gIGdhKCdzZW5kJywge1xuICAgIGhpdFR5cGU6ICdldmVudCcsXG4gICAgZXZlbnRDYXRlZ29yeTogJ1N0YXJ0aW5nIFNpbXVsYXRpb24nLFxuICAgIGV2ZW50QWN0aW9uOiBwYXJhbWV0ZXJzQ2hhbmdlZCA/ICdjaGFuZ2VkJyA6ICd1bmNoYW5nZWQnLFxuICAgIGV2ZW50TGFiZWw6IHN0YXRlLnR1dG9yaWFsID09IG51bGwgPyAnJyA6IHN0YXRlLnR1dG9yaWFsXG4gIH0pO1xuICBwYXJhbWV0ZXJzQ2hhbmdlZCA9IGZhbHNlO1xufVxuXG5kcmF3RGF0YXNldFRodW1ibmFpbHMoKTtcbmluaXRUdXRvcmlhbCgpO1xubWFrZUdVSSgpO1xuZ2VuZXJhdGVEYXRhKHRydWUpO1xucmVzZXQodHJ1ZSk7XG5oaWRlQ29udHJvbHMoKTtcbiIsIi8qIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuaW1wb3J0ICogYXMgbm4gZnJvbSBcIi4vbm5cIjtcbmltcG9ydCAqIGFzIGRhdGFzZXQgZnJvbSBcIi4vZGF0YXNldFwiO1xuXG4vKiogU3VmZml4IGFkZGVkIHRvIHRoZSBzdGF0ZSB3aGVuIHN0b3JpbmcgaWYgYSBjb250cm9sIGlzIGhpZGRlbiBvciBub3QuICovXG5jb25zdCBISURFX1NUQVRFX1NVRkZJWCA9IFwiX2hpZGVcIjtcblxuLyoqIEEgbWFwIGJldHdlZW4gbmFtZXMgYW5kIGFjdGl2YXRpb24gZnVuY3Rpb25zLiAqL1xuZXhwb3J0IGxldCBhY3RpdmF0aW9uczoge1trZXk6IHN0cmluZ106IG5uLkFjdGl2YXRpb25GdW5jdGlvbn0gPSB7XG4gIFwicmVsdVwiOiBubi5BY3RpdmF0aW9ucy5SRUxVLFxuICBcInRhbmhcIjogbm4uQWN0aXZhdGlvbnMuVEFOSCxcbiAgXCJzaWdtb2lkXCI6IG5uLkFjdGl2YXRpb25zLlNJR01PSUQsXG4gIFwibGluZWFyXCI6IG5uLkFjdGl2YXRpb25zLkxJTkVBUlxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gbmFtZXMgYW5kIHJlZ3VsYXJpemF0aW9uIGZ1bmN0aW9ucy4gKi9cbmV4cG9ydCBsZXQgcmVndWxhcml6YXRpb25zOiB7W2tleTogc3RyaW5nXTogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbn0gPSB7XG4gIFwibm9uZVwiOiBudWxsLFxuICBcIkwxXCI6IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24uTDEsXG4gIFwiTDJcIjogbm4uUmVndWxhcml6YXRpb25GdW5jdGlvbi5MMlxufTtcblxuLyoqIEEgbWFwIGJldHdlZW4gZGF0YXNldCBuYW1lcyBhbmQgZnVuY3Rpb25zIHRoYXQgZ2VuZXJhdGUgY2xhc3NpZmljYXRpb24gZGF0YS4gKi9cbmV4cG9ydCBsZXQgZGF0YXNldHM6IHtba2V5OiBzdHJpbmddOiBkYXRhc2V0LkRhdGFHZW5lcmF0b3J9ID0ge1xuICBcImNpcmNsZVwiOiBkYXRhc2V0LmNsYXNzaWZ5Q2lyY2xlRGF0YSxcbiAgXCJ4b3JcIjogZGF0YXNldC5jbGFzc2lmeVhPUkRhdGEsXG4gIFwiZ2F1c3NcIjogZGF0YXNldC5jbGFzc2lmeVR3b0dhdXNzRGF0YSxcbiAgXCJzcGlyYWxcIjogZGF0YXNldC5jbGFzc2lmeVNwaXJhbERhdGEsXG59O1xuXG4vKiogQSBtYXAgYmV0d2VlbiBkYXRhc2V0IG5hbWVzIGFuZCBmdW5jdGlvbnMgdGhhdCBnZW5lcmF0ZSByZWdyZXNzaW9uIGRhdGEuICovXG5leHBvcnQgbGV0IHJlZ0RhdGFzZXRzOiB7W2tleTogc3RyaW5nXTogZGF0YXNldC5EYXRhR2VuZXJhdG9yfSA9IHtcbiAgXCJyZWctcGxhbmVcIjogZGF0YXNldC5yZWdyZXNzUGxhbmUsXG4gIFwicmVnLWdhdXNzXCI6IGRhdGFzZXQucmVncmVzc0dhdXNzaWFuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RnJvbVZhbHVlKG9iajogYW55LCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHMuc3Vic3RyKC1zdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4O1xufVxuXG5mdW5jdGlvbiBnZXRIaWRlUHJvcHMob2JqOiBhbnkpOiBzdHJpbmdbXSB7XG4gIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKGVuZHNXaXRoKHByb3AsIEhJREVfU1RBVEVfU1VGRklYKSkge1xuICAgICAgcmVzdWx0LnB1c2gocHJvcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGRhdGEgdHlwZSBvZiBhIHN0YXRlIHZhcmlhYmxlLiBVc2VkIGZvciBkZXRlcm1pbmluZyB0aGVcbiAqIChkZSlzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGVudW0gVHlwZSB7XG4gIFNUUklORyxcbiAgTlVNQkVSLFxuICBBUlJBWV9OVU1CRVIsXG4gIEFSUkFZX1NUUklORyxcbiAgQk9PTEVBTixcbiAgT0JKRUNUXG59XG5cbmV4cG9ydCBlbnVtIFByb2JsZW0ge1xuICBDTEFTU0lGSUNBVElPTixcbiAgUkVHUkVTU0lPTlxufVxuXG5leHBvcnQgbGV0IHByb2JsZW1zID0ge1xuICBcImNsYXNzaWZpY2F0aW9uXCI6IFByb2JsZW0uQ0xBU1NJRklDQVRJT04sXG4gIFwicmVncmVzc2lvblwiOiBQcm9ibGVtLlJFR1JFU1NJT05cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFR5cGU7XG4gIGtleU1hcD86IHtba2V5OiBzdHJpbmddOiBhbnl9O1xufTtcblxuLy8gQWRkIHRoZSBHVUkgc3RhdGUuXG5leHBvcnQgY2xhc3MgU3RhdGUge1xuXG4gIHByaXZhdGUgc3RhdGljIFBST1BTOiBQcm9wZXJ0eVtdID0gW1xuICAgIHtuYW1lOiBcImlzUGxheWluZ1wiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImFjdGl2YXRpb25cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogYWN0aXZhdGlvbnN9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uXCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ3VsYXJpemF0aW9uc30sXG4gICAge25hbWU6IFwiYmF0Y2hTaXplXCIsIHR5cGU6IFR5cGUuTlVNQkVSfSxcbiAgICB7bmFtZTogXCJkYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IGRhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJyZWdEYXRhc2V0XCIsIHR5cGU6IFR5cGUuT0JKRUNULCBrZXlNYXA6IHJlZ0RhdGFzZXRzfSxcbiAgICB7bmFtZTogXCJsZWFybmluZ1JhdGVcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcInJlZ3VsYXJpemF0aW9uUmF0ZVwiLCB0eXBlOiBUeXBlLk5VTUJFUn0sXG4gICAge25hbWU6IFwibm9pc2VcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcIm5ldHdvcmtTaGFwZVwiLCB0eXBlOiBUeXBlLkFSUkFZX05VTUJFUn0sXG4gICAge25hbWU6IFwic2VlZFwiLCB0eXBlOiBUeXBlLlNUUklOR30sXG4gICAge25hbWU6IFwic2hvd1Rlc3REYXRhXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiZGlzY3JldGl6ZVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInBlcmNUcmFpbkRhdGFcIiwgdHlwZTogVHlwZS5OVU1CRVJ9LFxuICAgIHtuYW1lOiBcInhcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJ5XCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwieFRpbWVzWVwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcInhTcXVhcmVkXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwieVNxdWFyZWRcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJjb3NYXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwic2luWFwiLCB0eXBlOiBUeXBlLkJPT0xFQU59LFxuICAgIHtuYW1lOiBcImNvc1lcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgICB7bmFtZTogXCJzaW5ZXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiY29sbGVjdFN0YXRzXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwidHV0b3JpYWxcIiwgdHlwZTogVHlwZS5TVFJJTkd9LFxuICAgIHtuYW1lOiBcInByb2JsZW1cIiwgdHlwZTogVHlwZS5PQkpFQ1QsIGtleU1hcDogcHJvYmxlbXN9LFxuICAgIHtuYW1lOiBcImluaXRaZXJvXCIsIHR5cGU6IFR5cGUuQk9PTEVBTn0sXG4gICAge25hbWU6IFwiaGlkZVRleHRcIiwgdHlwZTogVHlwZS5CT09MRUFOfSxcbiAgXTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgbGVhcm5pbmdSYXRlID0gMC4xO1xuICAgIHJlZ3VsYXJpemF0aW9uUmF0ZSA9IDA7XG4gICAgc2hvd1Rlc3REYXRhID0gZmFsc2U7XG4gICAgbm9pc2UgPSAwO1xuICAgIGJhdGNoU2l6ZSA9IDEwO1xuICAgIGRpc2NyZXRpemUgPSBmYWxzZTtcbiAgICB0dXRvcmlhbDogc3RyaW5nID0gbnVsbDtcbiAgICBwZXJjVHJhaW5EYXRhID0gNTA7XG4gICAgYWN0aXZhdGlvbiA9IG5uLkFjdGl2YXRpb25zLlJFTFU7XG4gICAgcmVndWxhcml6YXRpb246IG5uLlJlZ3VsYXJpemF0aW9uRnVuY3Rpb24gPSBudWxsO1xuICAgIHByb2JsZW0gPSBQcm9ibGVtLkNMQVNTSUZJQ0FUSU9OO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGluaXRaZXJvID0gZmFsc2U7XG4gICAgaGlkZVRleHQgPSBmYWxzZTtcbiAgICBjb2xsZWN0U3RhdGVzID0gZmFsc2U7XG4gICAgbnVtSGlkZGVuTGF5ZXJzID0gMjtcbiAgICBoaWRkZW5MYXllckNvbnRyb2xzOiBhbnlbXSA9IFtdO1xuICAgIG5ldHdvcmtTaGFwZTogbnVtYmVyW10gPSBbMTAsIDEwXTtcbiAgICB4ID0gdHJ1ZTtcbiAgICB5ID0gdHJ1ZTtcbiAgICB4VGltZXNZID0gZmFsc2U7XG4gICAgeFNxdWFyZWQgPSBmYWxzZTtcbiAgICB5U3F1YXJlZCA9IGZhbHNlO1xuICAgIGNvc1ggPSBmYWxzZTtcbiAgICBzaW5YID0gZmFsc2U7XG4gICAgY29zWSA9IGZhbHNlO1xuICAgIHNpblkgPSBmYWxzZTtcbiAgICBkYXRhc2V0OiBkYXRhc2V0LkRhdGFHZW5lcmF0b3IgPSBkYXRhc2V0LmNsYXNzaWZ5Q2lyY2xlRGF0YTtcbiAgICByZWdEYXRhc2V0OiBkYXRhc2V0LkRhdGFHZW5lcmF0b3IgPSBkYXRhc2V0LnJlZ3Jlc3NQbGFuZTtcbiAgICBzZWVkOiBzdHJpbmc7XG5cblxuICAvKipcbiAgICogRGVzZXJpYWxpemVzIHRoZSBzdGF0ZSBmcm9tIHRoZSB1cmwgaGFzaC5cbiAgICovXG4gIHN0YXRpYyBkZXNlcmlhbGl6ZVN0YXRlKCk6IFN0YXRlIHtcbiAgICBsZXQgbWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgIGZvciAobGV0IGtleXZhbHVlIG9mIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnNwbGl0KFwiJlwiKSkge1xuICAgICAgbGV0IFtuYW1lLCB2YWx1ZV0gPSBrZXl2YWx1ZS5zcGxpdChcIj1cIik7XG4gICAgICBtYXBbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXkobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gbmFtZSBpbiBtYXAgJiYgbWFwW25hbWVdICE9IG51bGwgJiYgbWFwW25hbWVdLnRyaW0oKSAhPT0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUFycmF5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gdmFsdWUudHJpbSgpID09PSBcIlwiID8gW10gOiB2YWx1ZS5zcGxpdChcIixcIik7XG4gICAgfVxuXG4gICAgLy8gRGVzZXJpYWxpemUgcmVndWxhciBwcm9wZXJ0aWVzLlxuICAgIFN0YXRlLlBST1BTLmZvckVhY2goKHtuYW1lLCB0eXBlLCBrZXlNYXB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBUeXBlLk9CSkVDVDpcbiAgICAgICAgICBpZiAoa2V5TWFwID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSBrZXktdmFsdWUgbWFwIG11c3QgYmUgcHJvdmlkZWQgZm9yIHN0YXRlIFwiICtcbiAgICAgICAgICAgICAgICBcInZhcmlhYmxlcyBvZiB0eXBlIE9iamVjdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhc0tleShuYW1lKSAmJiBtYXBbbmFtZV0gaW4ga2V5TWFwKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IGtleU1hcFttYXBbbmFtZV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUeXBlLk5VTUJFUjpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBUaGUgKyBvcGVyYXRvciBpcyBmb3IgY29udmVydGluZyBhIHN0cmluZyB0byBhIG51bWJlci5cbiAgICAgICAgICAgIHN0YXRlW25hbWVdID0gK21hcFtuYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHlwZS5TVFJJTkc6XG4gICAgICAgICAgaWYgKGhhc0tleShuYW1lKSkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBtYXBbbmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQk9PTEVBTjpcbiAgICAgICAgICBpZiAoaGFzS2V5KG5hbWUpKSB7XG4gICAgICAgICAgICBzdGF0ZVtuYW1lXSA9IChtYXBbbmFtZV0gPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQVJSQVlfTlVNQkVSOlxuICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBwYXJzZUFycmF5KG1hcFtuYW1lXSkubWFwKE51bWJlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR5cGUuQVJSQVlfU1RSSU5HOlxuICAgICAgICAgIGlmIChuYW1lIGluIG1hcCkge1xuICAgICAgICAgICAgc3RhdGVbbmFtZV0gPSBwYXJzZUFycmF5KG1hcFtuYW1lXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IEVycm9yKFwiRW5jb3VudGVyZWQgYW4gdW5rbm93biB0eXBlIGZvciBhIHN0YXRlIHZhcmlhYmxlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVzZXJpYWxpemUgc3RhdGUgcHJvcGVydGllcyB0aGF0IGNvcnJlc3BvbmQgdG8gaGlkaW5nIFVJIGNvbnRyb2xzLlxuICAgIGdldEhpZGVQcm9wcyhtYXApLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBzdGF0ZVtwcm9wXSA9IChtYXBbcHJvcF0gPT09IFwidHJ1ZVwiKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9KTtcbiAgICBzdGF0ZS5udW1IaWRkZW5MYXllcnMgPSBzdGF0ZS5uZXR3b3JrU2hhcGUubGVuZ3RoO1xuICAgIGlmIChzdGF0ZS5zZWVkID09IG51bGwpIHtcbiAgICAgIHN0YXRlLnNlZWQgPSBNYXRoLnJhbmRvbSgpLnRvRml4ZWQoNSk7XG4gICAgfVxuICAgIE1hdGguc2VlZHJhbmRvbShzdGF0ZS5zZWVkKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyB0aGUgc3RhdGUgaW50byB0aGUgdXJsIGhhc2guXG4gICAqL1xuICBzZXJpYWxpemUoKSB7XG4gICAgLy8gU2VyaWFsaXplIHJlZ3VsYXIgcHJvcGVydGllcy5cbiAgICBsZXQgcHJvcHM6IHN0cmluZ1tdID0gW107XG4gICAgU3RhdGUuUFJPUFMuZm9yRWFjaCgoe25hbWUsIHR5cGUsIGtleU1hcH0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAvLyBEb24ndCBzZXJpYWxpemUgbWlzc2luZyB2YWx1ZXMuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gVHlwZS5PQkpFQ1QpIHtcbiAgICAgICAgdmFsdWUgPSBnZXRLZXlGcm9tVmFsdWUoa2V5TWFwLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFR5cGUuQVJSQVlfTlVNQkVSIHx8XG4gICAgICAgICAgdHlwZSA9PT0gVHlwZS5BUlJBWV9TVFJJTkcpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKFwiLFwiKTtcbiAgICAgIH1cbiAgICAgIHByb3BzLnB1c2goYCR7bmFtZX09JHt2YWx1ZX1gKTtcbiAgICB9KTtcbiAgICAvLyBTZXJpYWxpemUgcHJvcGVydGllcyB0aGF0IGNvcnJlc3BvbmQgdG8gaGlkaW5nIFVJIGNvbnRyb2xzLlxuICAgIGdldEhpZGVQcm9wcyh0aGlzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgcHJvcHMucHVzaChgJHtwcm9wfT0ke3RoaXNbcHJvcF19YCk7XG4gICAgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwcm9wcy5qb2luKFwiJlwiKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIGFsbCB0aGUgaGlkZGVuIHByb3BlcnRpZXMuICovXG4gIGdldEhpZGRlblByb3BzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKGVuZHNXaXRoKHByb3AsIEhJREVfU1RBVEVfU1VGRklYKSAmJiAgU3RyaW5nKHRoaXNbcHJvcF0pID09PSBcInRydWVcIikge1xuICAgICAgICByZXN1bHQucHVzaChwcm9wLnJlcGxhY2UoSElERV9TVEFURV9TVUZGSVgsIFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNldEhpZGVQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIGhpZGRlbjogYm9vbGVhbikge1xuICAgIHRoaXNbbmFtZSArIEhJREVfU1RBVEVfU1VGRklYXSA9IGhpZGRlbjtcbiAgfVxufVxuIl19
