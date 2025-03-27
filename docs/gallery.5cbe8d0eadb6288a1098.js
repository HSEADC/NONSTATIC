/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/gallery.json
const gallery_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":1,"author":"Lili Polacsek","title":"Vera Molnar Levelei","imgSrc":"images/art-gallery/VeraMolnarLevelei_LiliPolacsek.webp","altText":"Vera Molnar voice transformation in generative art","programTag":"installation","link":"gallery/LiliPolacsek_VeraMolnarLevelei.html"},{"id":2,"author":"Glitchdo","title":"Generative Landscape","imgSrc":"images/art-gallery/GenerativeLandscape_Glitchdo.webp","altText":"Glitch art resembling animated landscapes","programTag":"web","link":"gallery/Glitchdo_GenerativeLandscape.html"},{"id":3,"author":"Amy Karle","title":"Echoes From the Valley of Existence","imgSrc":"images/art-gallery/EchoesFromTheValleyOfExistence_AmyKarle.webp","altText":"Installation dedicated to bio-digital postmortal life","programTag":"installation","link":"gallery/AmyKarle_EchoesFromTheValleyOfExistence.html"},{"id":4,"author":"Dan Hoopert","title":"Audio Synthesis: Through the Forst","imgSrc":"images/art-gallery/AudioSynthesisThroughTheForst_DanHoopert.webp","altText":"Audiovisual experiment with LiDAR-scans of the forest","programTag":"installation","link":"gallery/DanHoopert_AudioSynthesisThroughTheForest.html"},{"id":5,"author":"Майкл Хансмайер","title":"Гроты для оперы Моцарта","imgSrc":"images/art-gallery/MozartGrots/1.png","altText":"Mozart Grots","programTag":"installation","link":"gallery/MozartGrots.html"},{"id":6,"author":"Kuflex","title":"Interactive Solutions for Any Space","imgSrc":"images/art-gallery/Kuflex/1.png","altText":"Kuflex","programTag":"installation","link":"gallery/Kuflex.html"},{"id":7,"author":"Radugadesign","title":"Portal #00FF00","imgSrc":"images/art-gallery/Radugadesign/1.png","altText":"Radugadesign","programTag":"installation","link":"gallery/Radugadesign.html"},{"id":8,"author":"Цао Юйси","title":"SEASONAL PROXIMITIES","imgSrc":"images/art-gallery/SeasonalProximities/1.gif","altText":"SEASONAL PROXIMITIES","programTag":"installation","link":"gallery/SeasonalProximities.html"},{"id":9,"author":"TeamLab","title":"Sculptures of Dissipative Birds in the Wind","imgSrc":"images/art-gallery/DissipativeBird/1.png","altText":"Sculptures of Dissipative Birds in the WindS","programTag":"installation","link":"gallery/DissipativeBird.html"},{"id":10,"author":"Working Knowledge","title":"Камень на распутье","imgSrc":"images/art-gallery/WorkingKnowledge/1.png","altText":"Working Knowledge","programTag":"installation","link":"gallery/WorkingKnowledge.html"},{"id":11,"author":"Team böõnt","title":"Will-o’-the-wisps","imgSrc":"images/art-gallery/WillOTheWisps/1.png","altText":"WillOTheWisps","programTag":"installation","link":"gallery/WillOTheWisps.html"},{"id":12,"author":"Item Author","title":"MYCELIUM","imgSrc":"images/art-gallery/Mycelium/1.png","altText":"Mycelium","programTag":"installation","link":"gallery/Mycelium.html"},{"id":13,"author":"Софья Борискевич","title":"Календарь квантовых частиц","imgSrc":"images/art-gallery/QuantParticles/1.png","altText":"QuantParticles","programTag":"branding","link":"gallery/QuantParticles.html"},{"id":14,"author":"Glitchdo","title":"POX & POL","imgSrc":"images/art-gallery/PoxAndPol/1.png","altText":"PoxAndPol","programTag":"branding","link":"gallery/PoxAndPol.html"},{"id":15,"author":"Рома Ерохнович","title":"G8 identity","imgSrc":"images/art-gallery/G8Identity/1.png","altText":"G8Identity","programTag":"branding","link":"gallery/G8Identity.html"},{"id":16,"author":"Absurdo","title":"Generative visual identity","imgSrc":"images/art-gallery/Absurdo/1.gif","altText":"Absurdo","programTag":"branding","link":"gallery/Absurdo.html"},{"id":17,"author":"ВЭЙ-ГУАН У и др.","title":"Design Punk 2020","imgSrc":"images/art-gallery/DesignPunk2020/1.gif","altText":"DesignPunk2020","programTag":"branding","link":"gallery/DesignPunk2020.html"},{"id":18,"author":"Kuflex","title":"Another land","imgSrc":"images/art-gallery/AnotherLandKuflex/1.png","altText":"AnotherLandKuflex","programTag":"installation","link":"gallery/AnotherLandKuflex.html"},{"id":19,"author":"VISUAL SCIENTIST","title":"MELTING BEACH","imgSrc":"images/art-gallery/MeltingBeach/1.gif","altText":"MeltingBeach","programTag":"web","link":"gallery/MeltingBeach.html"},{"id":20,"author":"Андреион де Кастро","title":"CREATIVE CODING EXPLORATIONS III","imgSrc":"images/art-gallery/AndreonDeCastro/1.png","altText":"AndreonDeCastro","programTag":"web","link":"gallery/AndreonDeCastro.html"},{"id":21,"author":"Тим Зарки","title":"Edge of Chaos","imgSrc":"images/art-gallery/EdgeOfChaous/1.png","altText":"EdgeOfChaous","programTag":"web","link":"gallery/EdgeOfChaous.html"},{"id":22,"author":"Item Author","title":"Fluffy Chaos","imgSrc":"images/art-gallery/FluffyChaous/1.png","altText":"FluffyChaous","programTag":"web","link":"gallery/FluffyChaous.html"},{"id":23,"author":"Анастасия Медведева","title":"Ghost City","imgSrc":"images/art-gallery/GhostCity/1.gif","altText":"GhostCity","programTag":"insllation","link":"gallery/GhostCity.html"},{"id":23,"author":"Харман Бхатия","title":"Aadatein","imgSrc":"images/art-gallery/Aadatein/1.webp","altText":"Aadatein","programTag":"clips","link":"gallery/Aadatein.html"},{"id":24,"author":"Aphex Twin","title":"T69 Collapse","imgSrc":"images/art-gallery/T69Collapse/1.gif","altText":"T69Collapse","programTag":"clips","link":"gallery/T69Collapse.html"}]');
;// ./node_modules/simplex-noise/dist/esm/simplex-noise.js
/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.

 Copyright (c) 2024 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
// these __PURE__ comments help uglifyjs with dead code removal
//
const SQRT3 = /*#__PURE__*/ Math.sqrt(3.0);
const SQRT5 = /*#__PURE__*/ Math.sqrt(5.0);
const F2 = 0.5 * (SQRT3 - 1.0);
const G2 = (3.0 - SQRT3) / 6.0;
const F3 = (/* unused pure expression or super */ null && (1.0 / 3.0));
const G3 = (/* unused pure expression or super */ null && (1.0 / 6.0));
const F4 = (SQRT5 - 1.0) / 4.0;
const G4 = (5.0 - SQRT5) / 20.0;
// I'm really not sure why this | 0 (basically a coercion to int)
// is making this faster but I get ~5 million ops/sec more on the
// benchmarks across the board or a ~10% speedup.
const fastFloor = (x) => Math.floor(x) | 0;
const grad2 = /*#__PURE__*/ new Float64Array([1, 1,
    -1, 1,
    1, -1,
    -1, -1,
    1, 0,
    -1, 0,
    1, 0,
    -1, 0,
    0, 1,
    0, -1,
    0, 1,
    0, -1]);
// double seems to be faster than single or int's
// probably because most operations are in double precision
const grad3 = /*#__PURE__*/ new Float64Array([1, 1, 0,
    -1, 1, 0,
    1, -1, 0,
    -1, -1, 0,
    1, 0, 1,
    -1, 0, 1,
    1, 0, -1,
    -1, 0, -1,
    0, 1, 1,
    0, -1, 1,
    0, 1, -1,
    0, -1, -1]);
// double is a bit quicker here as well
const grad4 = /*#__PURE__*/ new Float64Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
    0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
    1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
    -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
    1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
    -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
    1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
    -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
/**
 * Creates a 2D noise function
 * @param random the random function that will be used to build the permutation table
 * @returns {NoiseFunction2D}
 */
function createNoise2D(random = Math.random) {
    const perm = buildPermutationTable(random);
    // precalculating this yields a little ~3% performance improvement.
    const permGrad2x = new Float64Array(perm).map(v => grad2[(v % 12) * 2]);
    const permGrad2y = new Float64Array(perm).map(v => grad2[(v % 12) * 2 + 1]);
    return function noise2D(x, y) {
        // if(!isFinite(x) || !isFinite(y)) return 0;
        let n0 = 0; // Noise contributions from the three corners
        let n1 = 0;
        let n2 = 0;
        // Skew the input space to determine which simplex cell we're in
        const s = (x + y) * F2; // Hairy factor for 2D
        const i = fastFloor(x + s);
        const j = fastFloor(y + s);
        const t = (i + j) * G2;
        const X0 = i - t; // Unskew the cell origin back to (x,y) space
        const Y0 = j - t;
        const x0 = x - X0; // The x,y distances from the cell origin
        const y0 = y - Y0;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        else {
            i1 = 0;
            j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        const x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
        const y2 = y0 - 1.0 + 2.0 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        const ii = i & 255;
        const jj = j & 255;
        // Calculate the contribution from the three corners
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            const gi0 = ii + perm[jj];
            const g0x = permGrad2x[gi0];
            const g0y = permGrad2y[gi0];
            t0 *= t0;
            // n0 = t0 * t0 * (grad2[gi0] * x0 + grad2[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
            n0 = t0 * t0 * (g0x * x0 + g0y * y0);
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            const gi1 = ii + i1 + perm[jj + j1];
            const g1x = permGrad2x[gi1];
            const g1y = permGrad2y[gi1];
            t1 *= t1;
            // n1 = t1 * t1 * (grad2[gi1] * x1 + grad2[gi1 + 1] * y1);
            n1 = t1 * t1 * (g1x * x1 + g1y * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            const gi2 = ii + 1 + perm[jj + 1];
            const g2x = permGrad2x[gi2];
            const g2y = permGrad2y[gi2];
            t2 *= t2;
            // n2 = t2 * t2 * (grad2[gi2] * x2 + grad2[gi2 + 1] * y2);
            n2 = t2 * t2 * (g2x * x2 + g2y * y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70.0 * (n0 + n1 + n2);
    };
}
/**
 * Creates a 3D noise function
 * @param random the random function that will be used to build the permutation table
 * @returns {NoiseFunction3D}
 */
function createNoise3D(random = Math.random) {
    const perm = buildPermutationTable(random);
    // precalculating these seems to yield a speedup of over 15%
    const permGrad3x = new Float64Array(perm).map(v => grad3[(v % 12) * 3]);
    const permGrad3y = new Float64Array(perm).map(v => grad3[(v % 12) * 3 + 1]);
    const permGrad3z = new Float64Array(perm).map(v => grad3[(v % 12) * 3 + 2]);
    return function noise3D(x, y, z) {
        let n0, n1, n2, n3; // Noise contributions from the four corners
        // Skew the input space to determine which simplex cell we're in
        const s = (x + y + z) * F3; // Very nice and simple skew factor for 3D
        const i = fastFloor(x + s);
        const j = fastFloor(y + s);
        const k = fastFloor(z + s);
        const t = (i + j + k) * G3;
        const X0 = i - t; // Unskew the cell origin back to (x,y,z) space
        const Y0 = j - t;
        const Z0 = k - t;
        const x0 = x - X0; // The x,y,z distances from the cell origin
        const y0 = y - Y0;
        const z0 = z - Z0;
        // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
        // Determine which simplex we are in.
        let i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
        let i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
        if (x0 >= y0) {
            if (y0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } // X Y Z order
            else if (x0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } // X Z Y order
            else {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } // Z X Y order
        }
        else { // x0<y0
            if (y0 < z0) {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } // Z Y X order
            else if (x0 < z0) {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } // Y Z X order
            else {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } // Y X Z order
        }
        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
        // c = 1/6.
        const x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
        const y1 = y0 - j1 + G3;
        const z1 = z0 - k1 + G3;
        const x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
        const y2 = y0 - j2 + 2.0 * G3;
        const z2 = z0 - k2 + 2.0 * G3;
        const x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
        const y3 = y0 - 1.0 + 3.0 * G3;
        const z3 = z0 - 1.0 + 3.0 * G3;
        // Work out the hashed gradient indices of the four simplex corners
        const ii = i & 255;
        const jj = j & 255;
        const kk = k & 255;
        // Calculate the contribution from the four corners
        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0)
            n0 = 0.0;
        else {
            const gi0 = ii + perm[jj + perm[kk]];
            t0 *= t0;
            n0 = t0 * t0 * (permGrad3x[gi0] * x0 + permGrad3y[gi0] * y0 + permGrad3z[gi0] * z0);
        }
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0)
            n1 = 0.0;
        else {
            const gi1 = ii + i1 + perm[jj + j1 + perm[kk + k1]];
            t1 *= t1;
            n1 = t1 * t1 * (permGrad3x[gi1] * x1 + permGrad3y[gi1] * y1 + permGrad3z[gi1] * z1);
        }
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0)
            n2 = 0.0;
        else {
            const gi2 = ii + i2 + perm[jj + j2 + perm[kk + k2]];
            t2 *= t2;
            n2 = t2 * t2 * (permGrad3x[gi2] * x2 + permGrad3y[gi2] * y2 + permGrad3z[gi2] * z2);
        }
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0)
            n3 = 0.0;
        else {
            const gi3 = ii + 1 + perm[jj + 1 + perm[kk + 1]];
            t3 *= t3;
            n3 = t3 * t3 * (permGrad3x[gi3] * x3 + permGrad3y[gi3] * y3 + permGrad3z[gi3] * z3);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to stay just inside [-1,1]
        return 32.0 * (n0 + n1 + n2 + n3);
    };
}
/**
 * Creates a 4D noise function
 * @param random the random function that will be used to build the permutation table
 * @returns {NoiseFunction4D}
 */
function createNoise4D(random = Math.random) {
    const perm = buildPermutationTable(random);
    // precalculating these leads to a ~10% speedup
    const permGrad4x = new Float64Array(perm).map(v => grad4[(v % 32) * 4]);
    const permGrad4y = new Float64Array(perm).map(v => grad4[(v % 32) * 4 + 1]);
    const permGrad4z = new Float64Array(perm).map(v => grad4[(v % 32) * 4 + 2]);
    const permGrad4w = new Float64Array(perm).map(v => grad4[(v % 32) * 4 + 3]);
    return function noise4D(x, y, z, w) {
        let n0, n1, n2, n3, n4; // Noise contributions from the five corners
        // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
        const s = (x + y + z + w) * F4; // Factor for 4D skewing
        const i = fastFloor(x + s);
        const j = fastFloor(y + s);
        const k = fastFloor(z + s);
        const l = fastFloor(w + s);
        const t = (i + j + k + l) * G4; // Factor for 4D unskewing
        const X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
        const Y0 = j - t;
        const Z0 = k - t;
        const W0 = l - t;
        const x0 = x - X0; // The x,y,z,w distances from the cell origin
        const y0 = y - Y0;
        const z0 = z - Z0;
        const w0 = w - W0;
        // For the 4D case, the simplex is a 4D shape I won't even try to describe.
        // To find out which of the 24 possible simplices we're in, we need to
        // determine the magnitude ordering of x0, y0, z0 and w0.
        // Six pair-wise comparisons are performed between each possible pair
        // of the four coordinates, and the results are used to rank the numbers.
        let rankx = 0;
        let ranky = 0;
        let rankz = 0;
        let rankw = 0;
        if (x0 > y0)
            rankx++;
        else
            ranky++;
        if (x0 > z0)
            rankx++;
        else
            rankz++;
        if (x0 > w0)
            rankx++;
        else
            rankw++;
        if (y0 > z0)
            ranky++;
        else
            rankz++;
        if (y0 > w0)
            ranky++;
        else
            rankw++;
        if (z0 > w0)
            rankz++;
        else
            rankw++;
        // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
        // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
        // impossible. Only the 24 indices which have non-zero entries make any sense.
        // We use a thresholding to set the coordinates in turn from the largest magnitude.
        // Rank 3 denotes the largest coordinate.
        // Rank 2 denotes the second largest coordinate.
        // Rank 1 denotes the second smallest coordinate.
        // The integer offsets for the second simplex corner
        const i1 = rankx >= 3 ? 1 : 0;
        const j1 = ranky >= 3 ? 1 : 0;
        const k1 = rankz >= 3 ? 1 : 0;
        const l1 = rankw >= 3 ? 1 : 0;
        // The integer offsets for the third simplex corner
        const i2 = rankx >= 2 ? 1 : 0;
        const j2 = ranky >= 2 ? 1 : 0;
        const k2 = rankz >= 2 ? 1 : 0;
        const l2 = rankw >= 2 ? 1 : 0;
        // The integer offsets for the fourth simplex corner
        const i3 = rankx >= 1 ? 1 : 0;
        const j3 = ranky >= 1 ? 1 : 0;
        const k3 = rankz >= 1 ? 1 : 0;
        const l3 = rankw >= 1 ? 1 : 0;
        // The fifth corner has all coordinate offsets = 1, so no need to compute that.
        const x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
        const y1 = y0 - j1 + G4;
        const z1 = z0 - k1 + G4;
        const w1 = w0 - l1 + G4;
        const x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
        const y2 = y0 - j2 + 2.0 * G4;
        const z2 = z0 - k2 + 2.0 * G4;
        const w2 = w0 - l2 + 2.0 * G4;
        const x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
        const y3 = y0 - j3 + 3.0 * G4;
        const z3 = z0 - k3 + 3.0 * G4;
        const w3 = w0 - l3 + 3.0 * G4;
        const x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
        const y4 = y0 - 1.0 + 4.0 * G4;
        const z4 = z0 - 1.0 + 4.0 * G4;
        const w4 = w0 - 1.0 + 4.0 * G4;
        // Work out the hashed gradient indices of the five simplex corners
        const ii = i & 255;
        const jj = j & 255;
        const kk = k & 255;
        const ll = l & 255;
        // Calculate the contribution from the five corners
        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
        if (t0 < 0)
            n0 = 0.0;
        else {
            const gi0 = ii + perm[jj + perm[kk + perm[ll]]];
            t0 *= t0;
            n0 = t0 * t0 * (permGrad4x[gi0] * x0 + permGrad4y[gi0] * y0 + permGrad4z[gi0] * z0 + permGrad4w[gi0] * w0);
        }
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
        if (t1 < 0)
            n1 = 0.0;
        else {
            const gi1 = ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]];
            t1 *= t1;
            n1 = t1 * t1 * (permGrad4x[gi1] * x1 + permGrad4y[gi1] * y1 + permGrad4z[gi1] * z1 + permGrad4w[gi1] * w1);
        }
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
        if (t2 < 0)
            n2 = 0.0;
        else {
            const gi2 = ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]];
            t2 *= t2;
            n2 = t2 * t2 * (permGrad4x[gi2] * x2 + permGrad4y[gi2] * y2 + permGrad4z[gi2] * z2 + permGrad4w[gi2] * w2);
        }
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
        if (t3 < 0)
            n3 = 0.0;
        else {
            const gi3 = ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]];
            t3 *= t3;
            n3 = t3 * t3 * (permGrad4x[gi3] * x3 + permGrad4y[gi3] * y3 + permGrad4z[gi3] * z3 + permGrad4w[gi3] * w3);
        }
        let t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
        if (t4 < 0)
            n4 = 0.0;
        else {
            const gi4 = ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]];
            t4 *= t4;
            n4 = t4 * t4 * (permGrad4x[gi4] * x4 + permGrad4y[gi4] * y4 + permGrad4z[gi4] * z4 + permGrad4w[gi4] * w4);
        }
        // Sum up and scale the result to cover the range [-1,1]
        return 27.0 * (n0 + n1 + n2 + n3 + n4);
    };
}
/**
 * Builds a random permutation table.
 * This is exported only for (internal) testing purposes.
 * Do not rely on this export.
 * @private
 */
function buildPermutationTable(random) {
    const tableSize = 512;
    const p = new Uint8Array(tableSize);
    for (let i = 0; i < tableSize / 2; i++) {
        p[i] = i;
    }
    for (let i = 0; i < tableSize / 2 - 1; i++) {
        const r = i + ~~(random() * (256 - i));
        const aux = p[i];
        p[i] = p[r];
        p[r] = aux;
    }
    for (let i = 256; i < tableSize; i++) {
        p[i] = p[i - 256];
    }
    return p;
}
//# sourceMappingURL=simplex-noise.js.map
;// ./src/scripts/generativeSelection.js

function generativeSelection(cardSelector) {
  var canvasSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.A_ElectricCanvas';
  document.querySelectorAll(cardSelector).forEach(function (card) {
    var canvas = card.querySelector(canvasSelector);
    var ctx = canvas.getContext('2d');
    var noise2D = createNoise2D();
    var scaleFactor = 2;
    canvas.width = card.clientWidth * scaleFactor;
    canvas.height = card.clientHeight * scaleFactor;
    ctx.scale(scaleFactor, scaleFactor);
    var time = 0;
    function generateElectricPath() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#CAFF4F';
      ctx.lineWidth = 8;
      ctx.shadowColor = '#CAFF4F';
      ctx.shadowBlur = 12;
      var points = [];
      var numPoints = 600;
      var padding = 15;
      for (var i = 0; i < numPoints; i++) {
        var progress = i / numPoints;
        var x = void 0,
          y = void 0;
        if (progress < 0.25) {
          x = padding + progress * (canvas.width / scaleFactor - 2 * padding) * 4;
          y = padding;
        } else if (progress < 0.5) {
          x = canvas.width / scaleFactor - padding;
          y = padding + (progress - 0.25) * (canvas.height / scaleFactor - 2 * padding) * 4;
        } else if (progress < 0.75) {
          x = canvas.width / scaleFactor - padding - (progress - 0.5) * (canvas.width / scaleFactor - 2 * padding) * 4;
          y = canvas.height / scaleFactor - padding;
        } else {
          x = padding;
          y = canvas.height / scaleFactor - padding - (progress - 0.75) * (canvas.height / scaleFactor - 2 * padding) * 4;
        }
        var noiseFactorX = noise2D(i * 0.0103, time * 0.005) * 150;
        var noiseFactorY = noise2D(i * 0.0103, time * 0.005 + 100) * 150;
        if (Math.random() < 0.2) {
          noiseFactorX *= 1.1;
          noiseFactorY *= 1.1;
        }
        x += noiseFactorX;
        y += noiseFactorY;
        x = Math.max(padding, Math.min(x, canvas.width / scaleFactor - padding));
        y = Math.max(padding, Math.min(y, canvas.height / scaleFactor - padding));
        points.push({
          x: x,
          y: y
        });
      }
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var _i = 1; _i < points.length - 1; _i++) {
        var midX = (points[_i].x + points[_i + 1].x) / 2;
        var midY = (points[_i].y + points[_i + 1].y) / 2;
        ctx.quadraticCurveTo(points[_i].x, points[_i].y, midX, midY);
      }
      ctx.closePath();
      ctx.stroke();
    }
    var interval;
    card.addEventListener('mouseenter', function () {
      interval = setInterval(function () {
        time += 1;
        generateElectricPath();
      }, 50);
    });
    card.addEventListener('mouseleave', function () {
      clearInterval(interval);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  });
}
;// ./src/scripts/gallery.js




function generateGalleryCards() {
  var galleryContainer = document.querySelector('.C_GalleryCards');
  galleryContainer.innerHTML = '';
  gallery_namespaceObject.forEach(function (item) {
    var card = document.createElement('div');
    card.classList.add('M_GalleryCard');
    card.setAttribute('id', "gallery-card-".concat(item.id));
    card.setAttribute('data-category', item.programTag);
    var canvas = document.createElement('canvas');
    canvas.classList.add('A_ElectricCanvas');
    var authorLabel = document.createElement('h4');
    authorLabel.classList.add('A_Label');
    authorLabel.classList.add('Important');
    authorLabel.textContent = item.author;
    var titleLabel = document.createElement('h4');
    titleLabel.classList.add('A_Label');
    titleLabel.classList.add('Important');
    titleLabel.textContent = item.title;
    var imgElement = document.createElement('a');
    imgElement.classList.add('A_GalleryCardIMG');
    imgElement.style.backgroundImage = "url('./".concat(item.imgSrc, "')");
    imgElement.href = item.link;
    card.appendChild(authorLabel);
    card.appendChild(titleLabel);
    card.appendChild(imgElement);
    card.appendChild(canvas);
    galleryContainer.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  generateGalleryCards();
  generativeSelection('.M_GalleryCard');
});
/******/ })()
;