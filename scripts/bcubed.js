! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.THREE = t.THREE || {})
}(this, function(t) {
    "use strict";

    function e() {}

    function n(t, e) {
        this.x = t || 0, this.y = e || 0
    }

    function i(t, e, r, o, a, s, c, u, l, h) {
        Object.defineProperty(this, "id", {
            value: ts++
        }), this.uuid = $a.generateUUID(), this.name = "", this.image = void 0 !== t ? t : i.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : i.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : na, this.wrapT = void 0 !== o ? o : na, this.magFilter = void 0 !== a ? a : sa, this.minFilter = void 0 !== s ? s : ua, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== c ? c : Ea, this.type = void 0 !== u ? u : la, this.offset = new n(0, 0), this.repeat = new n(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== h ? h : ja, this.version = 0, this.onUpdate = null
    }

    function r(t, e, n, i) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== i ? i : 1
    }

    function o(t, e, n) {
        this.uuid = $a.generateUUID(), this.width = t, this.height = e, this.scissor = new r(0, 0, t, e), this.scissorTest = !1, this.viewport = new r(0, 0, t, e), n = n || {}, void 0 === n.minFilter && (n.minFilter = sa), this.texture = new i(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }

    function a(t, e, n) {
        o.call(this, t, e, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }

    function s(t, e, n, i) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== i ? i : 1
    }

    function c(t, e, n) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0
    }

    function u() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function l(t, e, n, r, o, a, s, c, u, l) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : Yo, i.call(this, t, e, n, r, o, a, s, c, u, l), this.flipY = !1
    }

    function h() {
        this.seq = [], this.map = {}
    }

    function d(t, e, n) {
        var i = t[0];
        if (i <= 0 || i > 0) return t;
        var r = e * n,
            o = is[r];
        if (void 0 === o && (o = new Float32Array(r), is[r] = o), 0 !== e) {
            i.toArray(o, 0);
            for (var a = 1, s = 0; a !== e; ++a) s += n, t[a].toArray(o, s)
        }
        return o
    }

    function p(t, e) {
        var n = rs[e];
        void 0 === n && (n = new Int32Array(e), rs[e] = n);
        for (var i = 0; i !== e; ++i) n[i] = t.allocTextureUnit();
        return n
    }

    function f(t, e) {
        t.uniform1f(this.addr, e)
    }

    function m(t, e) {
        t.uniform1i(this.addr, e)
    }

    function g(t, e) {
        void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
    }

    function v(t, e) {
        void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
    }

    function y(t, e) {
        void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
    }

    function _(t, e) {
        t.uniformMatrix2fv(this.addr, !1, e.elements || e)
    }

    function b(t, e) {
        t.uniformMatrix3fv(this.addr, !1, e.elements || e)
    }

    function x(t, e) {
        t.uniformMatrix4fv(this.addr, !1, e.elements || e)
    }

    function w(t, e, n) {
        var i = n.allocTextureUnit();
        t.uniform1i(this.addr, i), n.setTexture2D(e || es, i)
    }

    function M(t, e, n) {
        var i = n.allocTextureUnit();
        t.uniform1i(this.addr, i), n.setTextureCube(e || ns, i)
    }

    function E(t, e) {
        t.uniform2iv(this.addr, e)
    }

    function T(t, e) {
        t.uniform3iv(this.addr, e)
    }

    function S(t, e) {
        t.uniform4iv(this.addr, e)
    }

    function A(t) {
        switch (t) {
            case 5126:
                return f;
            case 35664:
                return g;
            case 35665:
                return v;
            case 35666:
                return y;
            case 35674:
                return _;
            case 35675:
                return b;
            case 35676:
                return x;
            case 35678:
                return w;
            case 35680:
                return M;
            case 5124:
            case 35670:
                return m;
            case 35667:
            case 35671:
                return E;
            case 35668:
            case 35672:
                return T;
            case 35669:
            case 35673:
                return S
        }
    }

    function L(t, e) {
        t.uniform1fv(this.addr, e)
    }

    function R(t, e) {
        t.uniform1iv(this.addr, e)
    }

    function P(t, e) {
        t.uniform2fv(this.addr, d(e, this.size, 2))
    }

    function C(t, e) {
        t.uniform3fv(this.addr, d(e, this.size, 3))
    }

    function I(t, e) {
        t.uniform4fv(this.addr, d(e, this.size, 4))
    }

    function B(t, e) {
        t.uniformMatrix2fv(this.addr, !1, d(e, this.size, 4))
    }

    function O(t, e) {
        t.uniformMatrix3fv(this.addr, !1, d(e, this.size, 9))
    }

    function N(t, e) {
        t.uniformMatrix4fv(this.addr, !1, d(e, this.size, 16))
    }

    function U(t, e, n) {
        var i = e.length,
            r = p(n, i);
        t.uniform1iv(this.addr, r);
        for (var o = 0; o !== i; ++o) n.setTexture2D(e[o] || es, r[o])
    }

    function D(t, e, n) {
        var i = e.length,
            r = p(n, i);
        t.uniform1iv(this.addr, r);
        for (var o = 0; o !== i; ++o) n.setTextureCube(e[o] || ns, r[o])
    }

    function F(t) {
        switch (t) {
            case 5126:
                return L;
            case 35664:
                return P;
            case 35665:
                return C;
            case 35666:
                return I;
            case 35674:
                return B;
            case 35675:
                return O;
            case 35676:
                return N;
            case 35678:
                return U;
            case 35680:
                return D;
            case 5124:
            case 35670:
                return R;
            case 35667:
            case 35671:
                return E;
            case 35668:
            case 35672:
                return T;
            case 35669:
            case 35673:
                return S
        }
    }

    function z(t, e, n) {
        this.id = t, this.addr = n, this.setValue = A(e.type)
    }

    function G(t, e, n) {
        this.id = t, this.addr = n, this.size = e.size, this.setValue = F(e.type)
    }

    function k(t) {
        this.id = t, h.call(this)
    }

    function H(t, e) {
        t.seq.push(e), t.map[e.id] = e
    }

    function V(t, e, n) {
        var i = t.name,
            r = i.length;
        for (os.lastIndex = 0;;) {
            var o = os.exec(i),
                a = os.lastIndex,
                s = o[1],
                c = "]" === o[2],
                u = o[3];
            if (c && (s |= 0), void 0 === u || "[" === u && a + 2 === r) {
                H(n, void 0 === u ? new z(s, t, e) : new G(s, t, e));
                break
            }
            var l = n.map,
                h = l[s];
            void 0 === h && (h = new k(s), H(n, h)), n = h
        }
    }

    function j(t, e, n) {
        h.call(this), this.renderer = n;
        for (var i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < i; ++r) {
            var o = t.getActiveUniform(e, r),
                a = o.name;
            V(o, t.getUniformLocation(e, a), this)
        }
    }

    function W(t, e, n) {
        return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }

    function X(t, e, n, r, o, a, s, c, u, l, h, d) {
        i.call(this, null, a, s, c, u, l, r, o, h, d), this.image = {
            data: t,
            width: e,
            height: n
        }, this.magFilter = void 0 !== u ? u : ra, this.minFilter = void 0 !== l ? l : ra, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }

    function q(t, e) {
        this.min = void 0 !== t ? t : new n(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new n(-1 / 0, -1 / 0)
    }

    function Y(t, e) {
        function i() {
            var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            o = f.createBuffer(), a = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, o), f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, a), f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW), d = f.createTexture(), p = f.createTexture(), m.bindTexture(f.TEXTURE_2D, d), f.texImage2D(f.TEXTURE_2D, 0, f.RGB, 16, 16, 0, f.RGB, f.UNSIGNED_BYTE, null), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST), m.bindTexture(f.TEXTURE_2D, p), f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, 16, 16, 0, f.RGBA, f.UNSIGNED_BYTE, null), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST), s = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
            }, u = r(s), l = {
                vertex: f.getAttribLocation(u, "position"),
                uv: f.getAttribLocation(u, "uv")
            }, h = {
                renderType: f.getUniformLocation(u, "renderType"),
                map: f.getUniformLocation(u, "map"),
                occlusionMap: f.getUniformLocation(u, "occlusionMap"),
                opacity: f.getUniformLocation(u, "opacity"),
                color: f.getUniformLocation(u, "color"),
                scale: f.getUniformLocation(u, "scale"),
                rotation: f.getUniformLocation(u, "rotation"),
                screenPosition: f.getUniformLocation(u, "screenPosition")
            }
        }

        function r(e) {
            var n = f.createProgram(),
                i = f.createShader(f.FRAGMENT_SHADER),
                r = f.createShader(f.VERTEX_SHADER),
                o = "precision " + t.getPrecision() + " float;\n";
            return f.shaderSource(i, o + e.fragmentShader), f.shaderSource(r, o + e.vertexShader), f.compileShader(i), f.compileShader(r), f.attachShader(n, i), f.attachShader(n, r), f.linkProgram(n), n
        }
        var o, a, s, u, l, h, d, p, f = t.context,
            m = t.state;
        this.render = function(r, s, g) {
            if (0 !== e.length) {
                var v = new c,
                    y = g.w / g.z,
                    _ = .5 * g.z,
                    b = .5 * g.w,
                    x = 16 / g.w,
                    w = new n(x * y, x),
                    M = new c(1, 1, 0),
                    E = new n(1, 1),
                    T = new q;
                T.min.set(g.x, g.y), T.max.set(g.x + (g.z - 16), g.y + (g.w - 16)), void 0 === u && i(), f.useProgram(u), m.initAttributes(), m.enableAttribute(l.vertex), m.enableAttribute(l.uv), m.disableUnusedAttributes(), f.uniform1i(h.occlusionMap, 0), f.uniform1i(h.map, 1), f.bindBuffer(f.ARRAY_BUFFER, o), f.vertexAttribPointer(l.vertex, 2, f.FLOAT, !1, 16, 0), f.vertexAttribPointer(l.uv, 2, f.FLOAT, !1, 16, 8), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, a), m.disable(f.CULL_FACE), m.setDepthWrite(!1);
                for (var S = 0, A = e.length; S < A; S++) {
                    x = 16 / g.w, w.set(x * y, x);
                    var L = e[S];
                    if (v.set(L.matrixWorld.elements[12], L.matrixWorld.elements[13], L.matrixWorld.elements[14]), v.applyMatrix4(s.matrixWorldInverse), v.applyMatrix4(s.projectionMatrix), M.copy(v), E.x = g.x + M.x * _ + _ - 8, E.y = g.y + M.y * b + b - 8, !0 === T.containsPoint(E)) {
                        m.activeTexture(f.TEXTURE0), m.bindTexture(f.TEXTURE_2D, null), m.activeTexture(f.TEXTURE1), m.bindTexture(f.TEXTURE_2D, d), f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGB, E.x, E.y, 16, 16, 0), f.uniform1i(h.renderType, 0), f.uniform2f(h.scale, w.x, w.y), f.uniform3f(h.screenPosition, M.x, M.y, M.z), m.disable(f.BLEND), m.enable(f.DEPTH_TEST), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0), m.activeTexture(f.TEXTURE0), m.bindTexture(f.TEXTURE_2D, p), f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGBA, E.x, E.y, 16, 16, 0), f.uniform1i(h.renderType, 1), m.disable(f.DEPTH_TEST), m.activeTexture(f.TEXTURE1), m.bindTexture(f.TEXTURE_2D, d), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0), L.positionScreen.copy(M), L.customUpdateCallback ? L.customUpdateCallback(L) : L.updateLensFlares(), f.uniform1i(h.renderType, 2), m.enable(f.BLEND);
                        for (var R = 0, P = L.lensFlares.length; R < P; R++) {
                            var C = L.lensFlares[R];
                            C.opacity > .001 && C.scale > .001 && (M.x = C.x, M.y = C.y, M.z = C.z, x = C.size * C.scale / g.w, w.x = x * y, w.y = x, f.uniform3f(h.screenPosition, M.x, M.y, M.z), f.uniform2f(h.scale, w.x, w.y), f.uniform1f(h.rotation, C.rotation), f.uniform1f(h.opacity, C.opacity), f.uniform3f(h.color, C.color.r, C.color.g, C.color.b), m.setBlending(C.blending, C.blendEquation, C.blendSrc, C.blendDst), t.setTexture2D(C.texture, 1), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                m.enable(f.CULL_FACE), m.enable(f.DEPTH_TEST), m.setDepthWrite(!0), t.resetGLState()
            }
        }
    }

    function Z(t, e) {
        function n() {
            var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            a = f.createBuffer(), u = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, a), f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, u), f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW), l = r(), h = {
                position: f.getAttribLocation(l, "position"),
                uv: f.getAttribLocation(l, "uv")
            }, d = {
                uvOffset: f.getUniformLocation(l, "uvOffset"),
                uvScale: f.getUniformLocation(l, "uvScale"),
                rotation: f.getUniformLocation(l, "rotation"),
                scale: f.getUniformLocation(l, "scale"),
                color: f.getUniformLocation(l, "color"),
                map: f.getUniformLocation(l, "map"),
                opacity: f.getUniformLocation(l, "opacity"),
                modelViewMatrix: f.getUniformLocation(l, "modelViewMatrix"),
                projectionMatrix: f.getUniformLocation(l, "projectionMatrix"),
                fogType: f.getUniformLocation(l, "fogType"),
                fogDensity: f.getUniformLocation(l, "fogDensity"),
                fogNear: f.getUniformLocation(l, "fogNear"),
                fogFar: f.getUniformLocation(l, "fogFar"),
                fogColor: f.getUniformLocation(l, "fogColor"),
                alphaTest: f.getUniformLocation(l, "alphaTest")
            };
            var n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            n.width = 8, n.height = 8;
            var o = n.getContext("2d");
            o.fillStyle = "white", o.fillRect(0, 0, 8, 8), p = new i(n), p.needsUpdate = !0
        }

        function r() {
            var e = f.createProgram(),
                n = f.createShader(f.VERTEX_SHADER),
                i = f.createShader(f.FRAGMENT_SHADER);
            return f.shaderSource(n, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), f.shaderSource(i, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), f.compileShader(n), f.compileShader(i), f.attachShader(e, n), f.attachShader(e, i), f.linkProgram(e), e
        }

        function o(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }
        var a, u, l, h, d, p, f = t.context,
            m = t.state,
            g = new c,
            v = new s,
            y = new c;
        this.render = function(i, r) {
            if (0 !== e.length) {
                void 0 === l && n(), f.useProgram(l), m.initAttributes(), m.enableAttribute(h.position), m.enableAttribute(h.uv), m.disableUnusedAttributes(), m.disable(f.CULL_FACE), m.enable(f.BLEND), f.bindBuffer(f.ARRAY_BUFFER, a), f.vertexAttribPointer(h.position, 2, f.FLOAT, !1, 16, 0), f.vertexAttribPointer(h.uv, 2, f.FLOAT, !1, 16, 8), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, u), f.uniformMatrix4fv(d.projectionMatrix, !1, r.projectionMatrix.elements), m.activeTexture(f.TEXTURE0), f.uniform1i(d.map, 0);
                var s = 0,
                    c = 0,
                    _ = i.fog;
                _ ? (f.uniform3f(d.fogColor, _.color.r, _.color.g, _.color.b), _.isFog ? (f.uniform1f(d.fogNear, _.near), f.uniform1f(d.fogFar, _.far), f.uniform1i(d.fogType, 1), s = 1, c = 1) : _.isFogExp2 && (f.uniform1f(d.fogDensity, _.density), f.uniform1i(d.fogType, 2), s = 2, c = 2)) : (f.uniform1i(d.fogType, 0), s = 0, c = 0);
                for (var b = 0, x = e.length; b < x; b++) {
                    var w = e[b];
                    w.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, w.matrixWorld), w.z = -w.modelViewMatrix.elements[14]
                }
                e.sort(o);
                for (var M = [], b = 0, x = e.length; b < x; b++) {
                    var w = e[b],
                        E = w.material;
                    if (!1 !== E.visible) {
                        f.uniform1f(d.alphaTest, E.alphaTest), f.uniformMatrix4fv(d.modelViewMatrix, !1, w.modelViewMatrix.elements), w.matrixWorld.decompose(g, v, y), M[0] = y.x, M[1] = y.y;
                        var T = 0;
                        i.fog && E.fog && (T = c), s !== T && (f.uniform1i(d.fogType, T), s = T), null !== E.map ? (f.uniform2f(d.uvOffset, E.map.offset.x, E.map.offset.y), f.uniform2f(d.uvScale, E.map.repeat.x, E.map.repeat.y)) : (f.uniform2f(d.uvOffset, 0, 0), f.uniform2f(d.uvScale, 1, 1)), f.uniform1f(d.opacity, E.opacity), f.uniform3f(d.color, E.color.r, E.color.g, E.color.b), f.uniform1f(d.rotation, E.rotation), f.uniform2fv(d.scale, M), m.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst), m.setDepthTest(E.depthTest), m.setDepthWrite(E.depthWrite), E.map ? t.setTexture2D(E.map, 0) : t.setTexture2D(p, 0), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0)
                    }
                }
                m.enable(f.CULL_FACE), t.resetGLState()
            }
        }
    }

    function J() {
        Object.defineProperty(this, "id", {
            value: hs++
        }), this.uuid = $a.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = lo, this.side = eo, this.shading = oo, this.vertexColors = ao, this.opacity = 1, this.transparent = !1, this.blendSrc = To, this.blendDst = So, this.blendEquation = go, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = No, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
    }

    function Q(t) {
        J.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
    }

    function K(t) {
        J.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Qa, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    function $(t, e) {
        this.min = void 0 !== t ? t : new c(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new c(-1 / 0, -1 / 0, -1 / 0)
    }

    function tt(t, e) {
        this.center = void 0 !== t ? t : new c, this.radius = void 0 !== e ? e : 0
    }

    function et() {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }

    function nt(t, e) {
        this.normal = void 0 !== t ? t : new c(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }

    function it(t, e, n, i, r, o) {
        this.planes = [void 0 !== t ? t : new nt, void 0 !== e ? e : new nt, void 0 !== n ? n : new nt, void 0 !== i ? i : new nt, void 0 !== r ? r : new nt, void 0 !== o ? o : new nt]
    }

    function rt(t, e, i, a) {
        function s(e, n, i, r) {
            var o = e.geometry,
                a = null,
                s = E,
                c = e.customDepthMaterial;
            if (i && (s = T, c = e.customDistanceMaterial), c) a = c;
            else {
                var u = !1;
                n.morphTargets && (o && o.isBufferGeometry ? u = o.morphAttributes && o.morphAttributes.position && o.morphAttributes.position.length > 0 : o && o.isGeometry && (u = o.morphTargets && o.morphTargets.length > 0));
                var l = e.isSkinnedMesh && n.skinning,
                    h = 0;
                u && (h |= x), l && (h |= w), a = s[h]
            }
            if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                var d = a.uuid,
                    p = n.uuid,
                    f = S[d];
                void 0 === f && (f = {}, S[d] = f);
                var m = f[p];
                void 0 === m && (m = a.clone(), f[p] = m), a = m
            }
            a.visible = n.visible, a.wireframe = n.wireframe;
            var g = n.side;
            return F.renderSingleSided && g == io && (g = eo), F.renderReverseSided && (g === eo ? g = no : g === no && (g = eo)), a.side = g, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, i && void 0 !== a.uniforms.lightPos && a.uniforms.lightPos.value.copy(r), a
        }

        function l(t, e, n) {
            if (!1 !== t.visible) {
                if (0 != (t.layers.mask & e.layers.mask) && (t.isMesh || t.isLine || t.isPoints) && t.castShadow && (!1 === t.frustumCulled || !0 === p.intersectsObject(t))) {
                    !0 === t.material.visible && (t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), b.push(t))
                }
                for (var i = t.children, r = 0, o = i.length; r < o; r++) l(i[r], e, n)
            }
        }
        var h = t.context,
            d = t.state,
            p = new it,
            f = new u,
            m = e.shadows,
            g = new n,
            v = new n(a.maxTextureSize, a.maxTextureSize),
            y = new c,
            _ = new c,
            b = [],
            x = 1,
            w = 2,
            M = 1 + (x | w),
            E = new Array(M),
            T = new Array(M),
            S = {},
            A = [new c(1, 0, 0), new c(-1, 0, 0), new c(0, 0, 1), new c(0, 0, -1), new c(0, 1, 0), new c(0, -1, 0)],
            L = [new c(0, 1, 0), new c(0, 1, 0), new c(0, 1, 0), new c(0, 1, 0), new c(0, 0, 1), new c(0, 0, -1)],
            R = [new r, new r, new r, new r, new r, new r],
            P = new K;
        P.depthPacking = Ka, P.clipping = !0;
        for (var C = ls.distanceRGBA, I = as.clone(C.uniforms), B = 0; B !== M; ++B) {
            var O = 0 != (B & x),
                N = 0 != (B & w),
                U = P.clone();
            U.morphTargets = O, U.skinning = N, E[B] = U;
            var D = new Q({
                defines: {
                    USE_SHADOWMAP: ""
                },
                uniforms: I,
                vertexShader: C.vertexShader,
                fragmentShader: C.fragmentShader,
                morphTargets: O,
                skinning: N,
                clipping: !0
            });
            T[B] = D
        }
        var F = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = $r, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function(e, n) {
            if (!1 !== F.enabled && (!1 !== F.autoUpdate || !1 !== F.needsUpdate) && 0 !== m.length) {
                d.buffers.color.setClear(1, 1, 1, 1), d.disable(h.BLEND), d.setDepthTest(!0), d.setScissorTest(!1);
                for (var r, a, c = 0, u = m.length; c < u; c++) {
                    var x = m[c],
                        w = x.shadow;
                    if (void 0 !== w) {
                        var M = w.camera;
                        if (g.copy(w.mapSize), g.min(v), x && x.isPointLight) {
                            r = 6, a = !0;
                            var E = g.x,
                                T = g.y;
                            R[0].set(2 * E, T, E, T), R[1].set(0, T, E, T), R[2].set(3 * E, T, E, T), R[3].set(E, T, E, T), R[4].set(3 * E, 0, E, T), R[5].set(E, 0, E, T), g.x *= 4, g.y *= 2
                        } else r = 1, a = !1;
                        if (null === w.map) {
                            var S = {
                                minFilter: ra,
                                magFilter: ra,
                                format: Ea
                            };
                            w.map = new o(g.x, g.y, S), M.updateProjectionMatrix()
                        }
                        w.isSpotLightShadow && w.update(x), w && w.isRectAreaLightShadow && w.update(x);
                        var P = w.map,
                            C = w.matrix;
                        _.setFromMatrixPosition(x.matrixWorld), M.position.copy(_), t.setRenderTarget(P), t.clear();
                        for (var I = 0; I < r; I++) {
                            if (a) {
                                y.copy(M.position), y.add(A[I]), M.up.copy(L[I]), M.lookAt(y);
                                var B = R[I];
                                d.viewport(B)
                            } else y.setFromMatrixPosition(x.target.matrixWorld), M.lookAt(y);
                            M.updateMatrixWorld(), M.matrixWorldInverse.getInverse(M.matrixWorld), C.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), C.multiply(M.projectionMatrix), C.multiply(M.matrixWorldInverse), f.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse), p.setFromMatrix(f), b.length = 0, l(e, n, M);
                            for (var O = 0, N = b.length; O < N; O++) {
                                var U = b[O],
                                    D = i.update(U),
                                    z = U.material;
                                if (z && z.isMultiMaterial)
                                    for (var G = D.groups, k = z.materials, H = 0, V = G.length; H < V; H++) {
                                        var j = G[H],
                                            W = k[j.materialIndex];
                                        if (!0 === W.visible) {
                                            var X = s(U, W, a, _);
                                            t.renderBufferDirect(M, null, D, X, U, j)
                                        }
                                    } else {
                                        var X = s(U, z, a, _);
                                        t.renderBufferDirect(M, null, D, X, U, null)
                                    }
                            }
                        }
                    } else console.warn("THREE.WebGLShadowMap:", x, "has no shadow.")
                }
                var q = t.getClearColor(),
                    Y = t.getClearAlpha();
                t.setClearColor(q, Y), F.needsUpdate = !1
            }
        }
    }

    function ot(t, e) {
        this.origin = void 0 !== t ? t : new c, this.direction = void 0 !== e ? e : new c
    }

    function at(t, e, n, i) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = i || at.DefaultOrder
    }

    function st() {
        this.mask = 1
    }

    function ct() {
        function t() {
            r.setFromEuler(i, !1)
        }

        function e() {
            i.setFromQuaternion(r, void 0, !1)
        }
        Object.defineProperty(this, "id", {
            value: ds++
        }), this.uuid = $a.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ct.DefaultUp.clone();
        var n = new c,
            i = new at,
            r = new s,
            o = new c(1, 1, 1);
        i.onChange(t), r.onChange(e), Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: n
            },
            rotation: {
                enumerable: !0,
                value: i
            },
            quaternion: {
                enumerable: !0,
                value: r
            },
            scale: {
                enumerable: !0,
                value: o
            },
            modelViewMatrix: {
                value: new u
            },
            normalMatrix: {
                value: new et
            }
        }), this.matrix = new u, this.matrixWorld = new u, this.matrixAutoUpdate = ct.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new st, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}, this.onBeforeRender = function() {}, this.onAfterRender = function() {}
    }

    function ut(t, e) {
        this.start = void 0 !== t ? t : new c, this.end = void 0 !== e ? e : new c
    }

    function lt(t, e, n) {
        this.a = void 0 !== t ? t : new c, this.b = void 0 !== e ? e : new c, this.c = void 0 !== n ? n : new c
    }

    function ht(t, e, n, i, r, o) {
        this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new c, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new W, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== o ? o : 0
    }

    function dt(t) {
        J.call(this), this.type = "MeshBasicMaterial", this.color = new W(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Go, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
    }

    function pt(t, e, n) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = $a.generateUUID(), this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function() {}, this.version = 0
    }

    function ft(t, e) {
        pt.call(this, new Int8Array(t), e)
    }

    function mt(t, e) {
        pt.call(this, new Uint8Array(t), e)
    }

    function gt(t, e) {
        pt.call(this, new Uint8ClampedArray(t), e)
    }

    function vt(t, e) {
        pt.call(this, new Int16Array(t), e)
    }

    function yt(t, e) {
        pt.call(this, new Uint16Array(t), e)
    }

    function _t(t, e) {
        pt.call(this, new Int32Array(t), e)
    }

    function bt(t, e) {
        pt.call(this, new Uint32Array(t), e)
    }

    function xt(t, e) {
        pt.call(this, new Float32Array(t), e)
    }

    function wt(t, e) {
        pt.call(this, new Float64Array(t), e)
    }

    function Mt() {
        this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function Et(t) {
        for (var e = t.length, n = -1 / 0; e--;) t[e] > n && (n = t[e]);
        return n
    }

    function Tt() {
        return ps++
    }

    function St() {
        Object.defineProperty(this, "id", {
            value: Tt()
        }), this.uuid = $a.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    }

    function At() {
        Object.defineProperty(this, "id", {
            value: Tt()
        }), this.uuid = $a.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }

    function Lt(t, e) {
        ct.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new At, this.material = void 0 !== e ? e : new dt({
            color: 16777215 * Math.random()
        }), this.drawMode = ka, this.updateMorphTargets()
    }

    function Rt(t, e, n, i, r, o) {
        St.call(this), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: o
        }, this.fromBufferGeometry(new Pt(t, e, n, i, r, o)), this.mergeVertices()
    }

    function Pt(t, e, n, i, r, o) {
        function a(t, e, n, i, r, o, a, m, g, v, y) {
            var _, b, x = o / g,
                w = a / v,
                M = o / 2,
                E = a / 2,
                T = m / 2,
                S = g + 1,
                A = v + 1,
                L = 0,
                R = 0,
                P = new c;
            for (b = 0; b < A; b++) {
                var C = b * w - E;
                for (_ = 0; _ < S; _++) {
                    var I = _ * x - M;
                    P[t] = I * i, P[e] = C * r, P[n] = T, l.push(P.x, P.y, P.z), P[t] = 0, P[e] = 0, P[n] = m > 0 ? 1 : -1, h.push(P.x, P.y, P.z), d.push(_ / g), d.push(1 - b / v), L += 1
                }
            }
            for (b = 0; b < v; b++)
                for (_ = 0; _ < g; _++) {
                    var B = p + _ + S * b,
                        O = p + _ + S * (b + 1),
                        N = p + (_ + 1) + S * (b + 1),
                        U = p + (_ + 1) + S * b;
                    u.push(B, O, U), u.push(O, N, U), R += 6
                }
            s.addGroup(f, R, y), f += R, p += L
        }
        At.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: o
        };
        var s = this;
        i = Math.floor(i) || 1, r = Math.floor(r) || 1, o = Math.floor(o) || 1;
        var u = [],
            l = [],
            h = [],
            d = [],
            p = 0,
            f = 0;
        a("z", "y", "x", -1, -1, n, e, t, o, r, 0), a("z", "y", "x", 1, -1, n, e, -t, o, r, 1), a("x", "z", "y", 1, 1, t, n, e, i, o, 2), a("x", "z", "y", 1, -1, t, n, -e, i, o, 3), a("x", "y", "z", 1, -1, t, e, n, i, r, 4), a("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(u), this.addAttribute("position", new xt(l, 3)), this.addAttribute("normal", new xt(h, 3)), this.addAttribute("uv", new xt(d, 2))
    }

    function Ct(t, e, n, i) {
        St.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        }, this.fromBufferGeometry(new It(t, e, n, i))
    }

    function It(t, e, n, i) {
        At.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        };
        var r, o, a = t / 2,
            s = e / 2,
            c = Math.floor(n) || 1,
            u = Math.floor(i) || 1,
            l = c + 1,
            h = u + 1,
            d = t / c,
            p = e / u,
            f = [],
            m = [],
            g = [],
            v = [];
        for (o = 0; o < h; o++) {
            var y = o * p - s;
            for (r = 0; r < l; r++) {
                var _ = r * d - a;
                m.push(_, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - o / u)
            }
        }
        for (o = 0; o < u; o++)
            for (r = 0; r < c; r++) {
                var b = r + l * o,
                    x = r + l * (o + 1),
                    w = r + 1 + l * (o + 1),
                    M = r + 1 + l * o;
                f.push(b, x, M), f.push(x, w, M)
            }
        this.setIndex(f), this.addAttribute("position", new xt(m, 3)), this.addAttribute("normal", new xt(g, 3)), this.addAttribute("uv", new xt(v, 2))
    }

    function Bt() {
        ct.call(this), this.type = "Camera", this.matrixWorldInverse = new u, this.projectionMatrix = new u
    }

    function Ot(t, e, n, i) {
        Bt.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== i ? i : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function Nt(t, e, n, i, r, o) {
        Bt.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = void 0 !== r ? r : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
    }

    function Ut(t, e, n) {
        function i(t) {
            s = t
        }

        function r(n) {
            n.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (c = t.UNSIGNED_INT, u = 4) : n.array instanceof Uint16Array ? (c = t.UNSIGNED_SHORT, u = 2) : (c = t.UNSIGNED_BYTE, u = 1)
        }

        function o(e, i) {
            t.drawElements(s, i, c, e * u), n.calls++, n.vertices += i, s === t.TRIANGLES && (n.faces += i / 3)
        }

        function a(i, r, o) {
            var a = e.get("ANGLE_instanced_arrays");
            if (null === a) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            a.drawElementsInstancedANGLE(s, o, c, r * u, i.maxInstancedCount), n.calls++, n.vertices += o * i.maxInstancedCount, s === t.TRIANGLES && (n.faces += i.maxInstancedCount * o / 3)
        }
        var s, c, u;
        return {
            setMode: i,
            setIndex: r,
            render: o,
            renderInstances: a
        }
    }

    function Dt(t, e, n) {
        function i(t) {
            a = t
        }

        function r(e, i) {
            t.drawArrays(a, e, i), n.calls++, n.vertices += i, a === t.TRIANGLES && (n.faces += i / 3)
        }

        function o(i) {
            var r = e.get("ANGLE_instanced_arrays");
            if (null === r) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            var o = i.attributes.position,
                s = 0;
            o.isInterleavedBufferAttribute ? (s = o.data.count, r.drawArraysInstancedANGLE(a, 0, s, i.maxInstancedCount)) : (s = o.count, r.drawArraysInstancedANGLE(a, 0, s, i.maxInstancedCount)), n.calls++, n.vertices += s * i.maxInstancedCount, a === t.TRIANGLES && (n.faces += i.maxInstancedCount * s / 3)
        }
        var a;
        return {
            setMode: i,
            render: r,
            renderInstances: o
        }
    }

    function Ft() {
        var t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                var i;
                switch (e.type) {
                    case "DirectionalLight":
                        i = {
                            direction: new c,
                            color: new W,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new c,
                            direction: new c,
                            color: new W,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new c,
                            color: new W,
                            distance: 0,
                            decay: 0,
                            shadow: !1,
                            shadowBias: 0,
                            shadowRadius: 1,
                            shadowMapSize: new n
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new c,
                            skyColor: new W,
                            groundColor: new W
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new W,
                            position: new c,
                            halfWidth: new c,
                            halfHeight: new c
                        }
                }
                return t[e.id] = i, i
            }
        }
    }

    function zt(t) {
        for (var e = t.split("\n"), n = 0; n < e.length; n++) e[n] = n + 1 + ": " + e[n];
        return e.join("\n")
    }

    function Gt(t, e, n) {
        var i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), !1 === t.getShaderParameter(i, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(i), zt(n)), i
    }

    function kt(t) {
        switch (t) {
            case ja:
                return ["Linear", "( value )"];
            case Wa:
                return ["sRGB", "( value )"];
            case qa:
                return ["RGBE", "( value )"];
            case Ya:
                return ["RGBM", "( value, 7.0 )"];
            case Za:
                return ["RGBM", "( value, 16.0 )"];
            case Ja:
                return ["RGBD", "( value, 256.0 )"];
            case Xa:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + t)
        }
    }

    function Ht(t, e) {
        var n = kt(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }

    function Vt(t, e) {
        var n = kt(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
    }

    function jt(t, e) {
        var n;
        switch (e) {
            case jo:
                n = "Linear";
                break;
            case Wo:
                n = "Reinhard";
                break;
            case Xo:
                n = "Uncharted2";
                break;
            case qo:
                n = "OptimizedCineon";
                break;
            default:
                throw new Error("unsupported toneMapping: " + e)
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }

    function Wt(t, e, n) {
        return t = t || {}, [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Yt).join("\n")
    }

    function Xt(t) {
        var e = [];
        for (var n in t) {
            var i = t[n];
            !1 !== i && e.push("#define " + n + " " + i)
        }
        return e.join("\n")
    }

    function qt(t, e, n) {
        for (var i = {}, r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), o = 0; o < r; o++) {
            var a = t.getActiveAttrib(e, o),
                s = a.name;
            i[s] = t.getAttribLocation(e, s)
        }
        return i
    }

    function Yt(t) {
        return "" !== t
    }

    function Zt(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }

    function Jt(t) {
        function e(t, e) {
            var n = ss[e];
            if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
            return Jt(n)
        }
        return t.replace(/#include +<([\w\d.]+)>/g, e)
    }

    function Qt(t) {
        function e(t, e, n, i) {
            for (var r = "", o = parseInt(e); o < parseInt(n); o++) r += i.replace(/\[ i \]/g, "[ " + o + " ]");
            return r
        }
        return t.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, e)
    }

    function Kt(t, e, n, i) {
        var r = t.context,
            o = n.extensions,
            a = n.defines,
            s = n.__webglShader.vertexShader,
            c = n.__webglShader.fragmentShader,
            u = "SHADOWMAP_TYPE_BASIC";
        i.shadowMapType === $r ? u = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === to && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var l = "ENVMAP_TYPE_CUBE",
            h = "ENVMAP_MODE_REFLECTION",
            d = "ENVMAP_BLENDING_MULTIPLY";
        if (i.envMap) {
            switch (n.envMap.mapping) {
                case Yo:
                case Zo:
                    l = "ENVMAP_TYPE_CUBE";
                    break;
                case $o:
                case ta:
                    l = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case Jo:
                case Qo:
                    l = "ENVMAP_TYPE_EQUIREC";
                    break;
                case Ko:
                    l = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
                case Zo:
                case Qo:
                    h = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
                case Go:
                    d = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case ko:
                    d = "ENVMAP_BLENDING_MIX";
                    break;
                case Ho:
                    d = "ENVMAP_BLENDING_ADD"
            }
        }
        var p, f, m = t.gammaFactor > 0 ? t.gammaFactor : 1,
            g = Wt(o, i, t.extensions),
            v = Xt(a),
            y = r.createProgram();
        n.isRawShaderMaterial ? (p = [v, "\n"].filter(Yt).join("\n"), f = [g, v, "\n"].filter(Yt).join("\n")) : (p = ["precision " + i.precision + " float;", "precision " + i.precision + " int;", "#define SHADER_NAME " + n.__webglShader.name, v, i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + m, "#define MAX_BONES " + i.maxBones, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + h : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.vertexColors ? "#define USE_COLOR" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.useVertexTexture ? "#define BONE_TEXTURE" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + i.numClippingPlanes, i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + u : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Yt).join("\n"), f = [g, "precision " + i.precision + " float;", "precision " + i.precision + " int;", "#define SHADER_NAME " + n.__webglShader.name, v, i.alphaTest ? "#define ALPHATEST " + i.alphaTest : "", "#define GAMMA_FACTOR " + m, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + l : "", i.envMap ? "#define " + h : "", i.envMap ? "#define " + d : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.vertexColors ? "#define USE_COLOR" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + i.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (i.numClippingPlanes - i.numClipIntersection), i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + u : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", i.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", i.toneMapping !== Vo ? "#define TONE_MAPPING" : "", i.toneMapping !== Vo ? ss.tonemapping_pars_fragment : "", i.toneMapping !== Vo ? jt("toneMapping", i.toneMapping) : "", i.outputEncoding || i.mapEncoding || i.envMapEncoding || i.emissiveMapEncoding ? ss.encodings_pars_fragment : "", i.mapEncoding ? Ht("mapTexelToLinear", i.mapEncoding) : "", i.envMapEncoding ? Ht("envMapTexelToLinear", i.envMapEncoding) : "", i.emissiveMapEncoding ? Ht("emissiveMapTexelToLinear", i.emissiveMapEncoding) : "", i.outputEncoding ? Vt("linearToOutputTexel", i.outputEncoding) : "", i.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Yt).join("\n")), s = Jt(s, i), s = Zt(s, i), c = Jt(c, i), c = Zt(c, i), n.isShaderMaterial || (s = Qt(s), c = Qt(c));
        var _ = p + s,
            b = f + c,
            x = Gt(r, r.VERTEX_SHADER, _),
            w = Gt(r, r.FRAGMENT_SHADER, b);
        r.attachShader(y, x), r.attachShader(y, w), void 0 !== n.index0AttributeName ? r.bindAttribLocation(y, 0, n.index0AttributeName) : !0 === i.morphTargets && r.bindAttribLocation(y, 0, "position"), r.linkProgram(y);
        var M = r.getProgramInfoLog(y),
            E = r.getShaderInfoLog(x),
            T = r.getShaderInfoLog(w),
            S = !0,
            A = !0;
        !1 === r.getProgramParameter(y, r.LINK_STATUS) ? (S = !1, console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(y, r.VALIDATE_STATUS), "gl.getProgramInfoLog", M, E, T)) : "" !== M ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", M) : "" !== E && "" !== T || (A = !1), A && (this.diagnostics = {
            runnable: S,
            material: n,
            programLog: M,
            vertexShader: {
                log: E,
                prefix: p
            },
            fragmentShader: {
                log: T,
                prefix: f
            }
        }), r.deleteShader(x), r.deleteShader(w);
        var L;
        this.getUniforms = function() {
            return void 0 === L && (L = new j(r, y, t)), L
        };
        var R;
        return this.getAttributes = function() {
            return void 0 === R && (R = qt(r, y)), R
        }, this.destroy = function() {
            r.deleteProgram(y), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.id = fs++, this.code = e, this.usedTimes = 1, this.program = y, this.vertexShader = x, this.fragmentShader = w, this
    }

    function $t(t, e) {
        function n(t) {
            if (e.floatVertexTextures && t && t.skeleton && t.skeleton.useVertexTexture) return 1024;
            var n = e.maxVertexUniforms,
                i = Math.floor((n - 20) / 4),
                r = i;
            return void 0 !== t && t && t.isSkinnedMesh && (r = Math.min(t.skeleton.bones.length, r)) < t.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + t.skeleton.bones.length + ", this GPU supports just " + r + " (try OpenGL instead of ANGLE)"), r
        }

        function i(t, e) {
            var n;
            return t ? t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = t.texture.encoding) : n = ja, n === ja && e && (n = Xa), n
        }
        var r = [],
            o = {
                MeshDepthMaterial: "depth",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "phong",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points"
            },
            a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking"];
        this.getParameters = function(r, a, s, c, u, l) {
            var h = o[r.type],
                d = n(l),
                p = t.getPrecision();
            null !== r.precision && (p = e.getMaxPrecision(r.precision)) !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", p, "instead.");
            var f = t.getCurrentRenderTarget();
            return {
                shaderID: h,
                precision: p,
                supportsVertexTextures: e.vertexTextures,
                outputEncoding: i(f ? f.texture : null, t.gammaOutput),
                map: !!r.map,
                mapEncoding: i(r.map, t.gammaInput),
                envMap: !!r.envMap,
                envMapMode: r.envMap && r.envMap.mapping,
                envMapEncoding: i(r.envMap, t.gammaInput),
                envMapCubeUV: !!r.envMap && (r.envMap.mapping === $o || r.envMap.mapping === ta),
                lightMap: !!r.lightMap,
                aoMap: !!r.aoMap,
                emissiveMap: !!r.emissiveMap,
                emissiveMapEncoding: i(r.emissiveMap, t.gammaInput),
                bumpMap: !!r.bumpMap,
                normalMap: !!r.normalMap,
                displacementMap: !!r.displacementMap,
                roughnessMap: !!r.roughnessMap,
                metalnessMap: !!r.metalnessMap,
                specularMap: !!r.specularMap,
                alphaMap: !!r.alphaMap,
                gradientMap: !!r.gradientMap,
                combine: r.combine,
                vertexColors: r.vertexColors,
                fog: !!s,
                useFog: r.fog,
                fogExp: s && s.isFogExp2,
                flatShading: r.shading === ro,
                sizeAttenuation: r.sizeAttenuation,
                logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                skinning: r.skinning,
                maxBones: d,
                useVertexTexture: e.floatVertexTextures && l && l.skeleton && l.skeleton.useVertexTexture,
                morphTargets: r.morphTargets,
                morphNormals: r.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: a.directional.length,
                numPointLights: a.point.length,
                numSpotLights: a.spot.length,
                numRectAreaLights: a.rectArea.length,
                numHemiLights: a.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: u,
                shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && a.shadows.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: r.premultipliedAlpha,
                alphaTest: r.alphaTest,
                doubleSided: r.side === io,
                flipSided: r.side === no,
                depthPacking: void 0 !== r.depthPacking && r.depthPacking
            }
        }, this.getProgramCode = function(t, e) {
            var n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(t.fragmentShader), n.push(t.vertexShader)), void 0 !== t.defines)
                for (var i in t.defines) n.push(i), n.push(t.defines[i]);
            for (var r = 0; r < a.length; r++) n.push(e[a[r]]);
            return n.join()
        }, this.acquireProgram = function(e, n, i) {
            for (var o, a = 0, s = r.length; a < s; a++) {
                var c = r[a];
                if (c.code === i) {
                    o = c, ++o.usedTimes;
                    break
                }
            }
            return void 0 === o && (o = new Kt(t, i, e, n), r.push(o)), o
        }, this.releaseProgram = function(t) {
            if (0 == --t.usedTimes) {
                var e = r.indexOf(t);
                r[e] = r[r.length - 1], r.pop(), t.destroy()
            }
        }, this.programs = r
    }

    function te(t, e, n) {
        function i(t) {
            var r = t.target,
                s = c[r.id];
            null !== s.index && o(s.index), a(s.attributes), r.removeEventListener("dispose", i), delete c[r.id];
            var u = e.get(r);
            u.wireframe && o(u.wireframe), e.delete(r);
            var l = e.get(s);
            l.wireframe && o(l.wireframe), e.delete(s), n.memory.geometries--
        }

        function r(t) {
            return t.isInterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }

        function o(e) {
            var n = r(e);
            void 0 !== n && (t.deleteBuffer(n), s(e))
        }

        function a(t) {
            for (var e in t) o(t[e])
        }

        function s(t) {
            t.isInterleavedBufferAttribute ? e.delete(t.data) : e.delete(t)
        }
        var c = {};
        return {
            get: function(t) {
                var e = t.geometry;
                if (void 0 !== c[e.id]) return c[e.id];
                e.addEventListener("dispose", i);
                var r;
                return e.isBufferGeometry ? r = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new At).setFromObject(t)), r = e._bufferGeometry), c[e.id] = r, n.memory.geometries++, r
            }
        }
    }

    function ee(t, e, n) {
        function i(e) {
            var n = l.get(e);
            e.geometry.isGeometry && n.updateFromObject(e);
            var i = n.index,
                o = n.attributes;
            null !== i && r(i, t.ELEMENT_ARRAY_BUFFER);
            for (var a in o) r(o[a], t.ARRAY_BUFFER);
            var s = n.morphAttributes;
            for (var a in s)
                for (var c = s[a], u = 0, h = c.length; u < h; u++) r(c[u], t.ARRAY_BUFFER);
            return n
        }

        function r(t, n) {
            var i = t.isInterleavedBufferAttribute ? t.data : t,
                r = e.get(i);
            void 0 === r.__webglBuffer ? o(r, i, n) : r.version !== i.version && a(r, i, n)
        }

        function o(e, n, i) {
            e.__webglBuffer = t.createBuffer(), t.bindBuffer(i, e.__webglBuffer);
            var r = n.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
            t.bufferData(i, n.array, r);
            var o = t.FLOAT,
                a = n.array;
            a instanceof Float32Array ? o = t.FLOAT : a instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : a instanceof Uint16Array ? o = t.UNSIGNED_SHORT : a instanceof Int16Array ? o = t.SHORT : a instanceof Uint32Array ? o = t.UNSIGNED_INT : a instanceof Int32Array ? o = t.INT : a instanceof Int8Array ? o = t.BYTE : a instanceof Uint8Array && (o = t.UNSIGNED_BYTE), e.bytesPerElement = a.BYTES_PER_ELEMENT, e.type = o, e.version = n.version, n.onUploadCallback()
        }

        function a(e, n, i) {
            t.bindBuffer(i, e.__webglBuffer), !1 === n.dynamic ? t.bufferData(i, n.array, t.STATIC_DRAW) : -1 === n.updateRange.count ? t.bufferSubData(i, 0, n.array) : 0 === n.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(i, n.updateRange.offset * n.array.BYTES_PER_ELEMENT, n.array.subarray(n.updateRange.offset, n.updateRange.offset + n.updateRange.count)), n.updateRange.count = 0), e.version = n.version
        }

        function s(t) {
            return t.isInterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }

        function c(t) {
            return t.isInterleavedBufferAttribute ? e.get(t.data) : e.get(t)
        }

        function u(n) {
            var i = e.get(n);
            if (void 0 !== i.wireframe) return i.wireframe;
            var o = [],
                a = n.index,
                s = n.attributes;
            if (null !== a)
                for (var c = a.array, u = 0, l = c.length; u < l; u += 3) {
                    var h = c[u + 0],
                        d = c[u + 1],
                        p = c[u + 2];
                    o.push(h, d, d, p, p, h)
                } else
                    for (var c = s.position.array, u = 0, l = c.length / 3 - 1; u < l; u += 3) {
                        var h = u + 0,
                            d = u + 1,
                            p = u + 2;
                        o.push(h, d, d, p, p, h)
                    }
            var f = new(Et(o) > 65535 ? bt : yt)(o, 1);
            return r(f, t.ELEMENT_ARRAY_BUFFER), i.wireframe = f, f
        }
        var l = new te(t, e, n);
        return {
            getAttributeBuffer: s,
            getAttributeProperties: c,
            getWireframeAttribute: u,
            update: i
        }
    }

    function ne(t, e, n, i, r, o, a) {
        function s(t, e) {
            if (t.width > e || t.height > e) {
                var n = e / Math.max(t.width, t.height),
                    i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                i.width = Math.floor(t.width * n), i.height = Math.floor(t.height * n);
                return i.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + i.width + "x" + i.height, t), i
            }
            return t
        }

        function c(t) {
            return $a.isPowerOfTwo(t.width) && $a.isPowerOfTwo(t.height)
        }

        function u(t) {
            if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
                var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                e.width = $a.nearestPowerOfTwo(t.width), e.height = $a.nearestPowerOfTwo(t.height);
                return e.getContext("2d").drawImage(t, 0, 0, e.width, e.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + e.width + "x" + e.height, t), e
            }
            return t
        }

        function l(t) {
            return t.wrapS !== na || t.wrapT !== na || t.minFilter !== ra && t.minFilter !== sa
        }

        function h(e) {
            return e === ra || e === oa || e === aa ? t.NEAREST : t.LINEAR
        }

        function d(t) {
            var e = t.target;
            e.removeEventListener("dispose", d), f(e), A.textures--
        }

        function p(t) {
            var e = t.target;
            e.removeEventListener("dispose", p), m(e), A.textures--
        }

        function f(e) {
            var n = i.get(e);
            if (e.image && n.__image__webglTextureCube) t.deleteTexture(n.__image__webglTextureCube);
            else {
                if (void 0 === n.__webglInit) return;
                t.deleteTexture(n.__webglTexture)
            }
            i.delete(e)
        }

        function m(e) {
            var n = i.get(e),
                r = i.get(e.texture);
            if (e) {
                if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
                    for (var o = 0; o < 6; o++) t.deleteFramebuffer(n.__webglFramebuffer[o]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[o]);
                else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                i.delete(e.texture), i.delete(e)
            }
        }

        function g(e, r) {
            var o = i.get(e);
            if (e.version > 0 && o.__version !== e.version) {
                var a = e.image;
                if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e);
                else {
                    if (!1 !== a.complete) return void b(o, e, r);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
                }
            }
            n.activeTexture(t.TEXTURE0 + r), n.bindTexture(t.TEXTURE_2D, o.__webglTexture)
        }

        function v(e, a) {
            var u = i.get(e);
            if (6 === e.image.length)
                if (e.version > 0 && u.__version !== e.version) {
                    u.__image__webglTextureCube || (e.addEventListener("dispose", d), u.__image__webglTextureCube = t.createTexture(), A.textures++), n.activeTexture(t.TEXTURE0 + a), n.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                    for (var l = e && e.isCompressedTexture, h = e.image[0] && e.image[0].isDataTexture, p = [], f = 0; f < 6; f++) p[f] = l || h ? h ? e.image[f].image : e.image[f] : s(e.image[f], r.maxCubemapSize);
                    var m = p[0],
                        g = c(m),
                        v = o(e.format),
                        y = o(e.type);
                    _(t.TEXTURE_CUBE_MAP, e, g);
                    for (var f = 0; f < 6; f++)
                        if (l)
                            for (var b, x = p[f].mipmaps, w = 0, M = x.length; w < M; w++) b = x[w], e.format !== Ea && e.format !== Ma ? n.getCompressedTextureFormats().indexOf(v) > -1 ? n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + f, w, v, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + f, w, v, b.width, b.height, 0, v, y, b.data);
                        else h ? n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, v, p[f].width, p[f].height, 0, v, y, p[f].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, v, v, y, p[f]);
                    e.generateMipmaps && g && t.generateMipmap(t.TEXTURE_CUBE_MAP), u.__version = e.version, e.onUpdate && e.onUpdate(e)
                } else n.activeTexture(t.TEXTURE0 + a), n.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube)
        }

        function y(e, r) {
            n.activeTexture(t.TEXTURE0 + r), n.bindTexture(t.TEXTURE_CUBE_MAP, i.get(e).__webglTexture)
        }

        function _(n, a, s) {
            var c;
            if (s ? (t.texParameteri(n, t.TEXTURE_WRAP_S, o(a.wrapS)), t.texParameteri(n, t.TEXTURE_WRAP_T, o(a.wrapT)), t.texParameteri(n, t.TEXTURE_MAG_FILTER, o(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, o(a.minFilter))) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), a.wrapS === na && a.wrapT === na || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", a), t.texParameteri(n, t.TEXTURE_MAG_FILTER, h(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, h(a.minFilter)), a.minFilter !== ra && a.minFilter !== sa && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", a)), c = e.get("EXT_texture_filter_anisotropic")) {
                if (a.type === ga && null === e.get("OES_texture_float_linear")) return;
                if (a.type === va && null === e.get("OES_texture_half_float_linear")) return;
                (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
            }
        }

        function b(e, i, a) {
            void 0 === e.__webglInit && (e.__webglInit = !0, i.addEventListener("dispose", d), e.__webglTexture = t.createTexture(), A.textures++), n.activeTexture(t.TEXTURE0 + a), n.bindTexture(t.TEXTURE_2D, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, i.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, i.unpackAlignment);
            var h = s(i.image, r.maxTextureSize);
            l(i) && !1 === c(h) && (h = u(h));
            var p = c(h),
                f = o(i.format),
                m = o(i.type);
            _(t.TEXTURE_2D, i, p);
            var g, v = i.mipmaps;
            if (i.isDepthTexture) {
                var y = t.DEPTH_COMPONENT;
                if (i.type === ga) {
                    if (!L) throw new Error("Float Depth Texture only supported in WebGL2.0");
                    y = t.DEPTH_COMPONENT32F
                } else L && (y = t.DEPTH_COMPONENT16);
                i.format === La && y === t.DEPTH_COMPONENT && i.type !== pa && i.type !== ma && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = pa, m = o(i.type)), i.format === Ra && (y = t.DEPTH_STENCIL, i.type !== xa && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = xa, m = o(i.type))), n.texImage2D(t.TEXTURE_2D, 0, y, h.width, h.height, 0, f, m, null)
            } else if (i.isDataTexture)
                if (v.length > 0 && p) {
                    for (var b = 0, x = v.length; b < x; b++) g = v[b], n.texImage2D(t.TEXTURE_2D, b, f, g.width, g.height, 0, f, m, g.data);
                    i.generateMipmaps = !1
                } else n.texImage2D(t.TEXTURE_2D, 0, f, h.width, h.height, 0, f, m, h.data);
            else if (i.isCompressedTexture)
                for (var b = 0, x = v.length; b < x; b++) g = v[b], i.format !== Ea && i.format !== Ma ? n.getCompressedTextureFormats().indexOf(f) > -1 ? n.compressedTexImage2D(t.TEXTURE_2D, b, f, g.width, g.height, 0, g.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(t.TEXTURE_2D, b, f, g.width, g.height, 0, f, m, g.data);
            else if (v.length > 0 && p) {
                for (var b = 0, x = v.length; b < x; b++) g = v[b], n.texImage2D(t.TEXTURE_2D, b, f, f, m, g);
                i.generateMipmaps = !1
            } else n.texImage2D(t.TEXTURE_2D, 0, f, f, m, h);
            i.generateMipmaps && p && t.generateMipmap(t.TEXTURE_2D), e.__version = i.version, i.onUpdate && i.onUpdate(i)
        }

        function x(e, r, a, s) {
            var c = o(r.texture.format),
                u = o(r.texture.type);
            n.texImage2D(s, 0, c, r.width, r.height, 0, c, u, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, a, s, i.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function w(e, n) {
            t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : n.depthBuffer && n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, n.width, n.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
        }

        function M(e, n) {
            if (n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported!");
            if (t.bindFramebuffer(t.FRAMEBUFFER, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            i.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), g(n.depthTexture, 0);
            var r = i.get(n.depthTexture).__webglTexture;
            if (n.depthTexture.format === La) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
            else {
                if (n.depthTexture.format !== Ra) throw new Error("Unknown depthTexture format");
                t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
            }
        }

        function E(e) {
            var n = i.get(e),
                r = !0 === e.isWebGLRenderTargetCube;
            if (e.depthTexture) {
                if (r) throw new Error("target.depthTexture not supported in Cube render targets");
                M(n.__webglFramebuffer, e)
            } else if (r) {
                n.__webglDepthbuffer = [];
                for (var o = 0; o < 6; o++) t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer[o]), n.__webglDepthbuffer[o] = t.createRenderbuffer(), w(n.__webglDepthbuffer[o], e)
            } else t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), w(n.__webglDepthbuffer, e);
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function T(e) {
            var r = i.get(e),
                o = i.get(e.texture);
            e.addEventListener("dispose", p), o.__webglTexture = t.createTexture(), A.textures++;
            var a = !0 === e.isWebGLRenderTargetCube,
                s = c(e);
            if (a) {
                r.__webglFramebuffer = [];
                for (var u = 0; u < 6; u++) r.__webglFramebuffer[u] = t.createFramebuffer()
            } else r.__webglFramebuffer = t.createFramebuffer();
            if (a) {
                n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture), _(t.TEXTURE_CUBE_MAP, e.texture, s);
                for (var u = 0; u < 6; u++) x(r.__webglFramebuffer[u], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + u);
                e.texture.generateMipmaps && s && t.generateMipmap(t.TEXTURE_CUBE_MAP), n.bindTexture(t.TEXTURE_CUBE_MAP, null)
            } else n.bindTexture(t.TEXTURE_2D, o.__webglTexture), _(t.TEXTURE_2D, e.texture, s), x(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), e.texture.generateMipmaps && s && t.generateMipmap(t.TEXTURE_2D), n.bindTexture(t.TEXTURE_2D, null);
            e.depthBuffer && E(e)
        }

        function S(e) {
            var r = e.texture;
            if (r.generateMipmaps && c(e) && r.minFilter !== ra && r.minFilter !== sa) {
                var o = e && e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
                    a = i.get(r).__webglTexture;
                n.bindTexture(o, a), t.generateMipmap(o), n.bindTexture(o, null)
            }
        }
        var A = a.memory,
            L = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext;
        this.setTexture2D = g, this.setTextureCube = v, this.setTextureCubeDynamic = y, this.setupRenderTarget = T, this.updateRenderTargetMipmap = S
    }

    function ie() {
        var t = {};
        return {
            get: function(e) {
                var n = e.uuid,
                    i = t[n];
                return void 0 === i && (i = {}, t[n] = i), i
            },
            delete: function(e) {
                delete t[e.uuid]
            },
            clear: function() {
                t = {}
            }
        }
    }

    function re(t, e, n) {
        function i() {
            var e = !1,
                n = new r,
                i = null,
                o = new r;
            return {
                setMask: function(n) {
                    i === n || e || (t.colorMask(n, n, n, n), i = n)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e, i, r, a, s) {
                    !0 === s && (e *= a, i *= a, r *= a), n.set(e, i, r, a), !1 === o.equals(n) && (t.clearColor(e, i, r, a), o.copy(n))
                },
                reset: function() {
                    e = !1, i = null, o.set(0, 0, 0, 1)
                }
            }
        }

        function o() {
            var e = !1,
                n = null,
                i = null,
                r = null;
            return {
                setTest: function(e) {
                    e ? p(t.DEPTH_TEST) : f(t.DEPTH_TEST)
                },
                setMask: function(i) {
                    n === i || e || (t.depthMask(i), n = i)
                },
                setFunc: function(e) {
                    if (i !== e) {
                        if (e) switch (e) {
                            case Io:
                                t.depthFunc(t.NEVER);
                                break;
                            case Bo:
                                t.depthFunc(t.ALWAYS);
                                break;
                            case Oo:
                                t.depthFunc(t.LESS);
                                break;
                            case No:
                                t.depthFunc(t.LEQUAL);
                                break;
                            case Uo:
                                t.depthFunc(t.EQUAL);
                                break;
                            case Do:
                                t.depthFunc(t.GEQUAL);
                                break;
                            case Fo:
                                t.depthFunc(t.GREATER);
                                break;
                            case zo:
                                t.depthFunc(t.NOTEQUAL);
                                break;
                            default:
                                t.depthFunc(t.LEQUAL)
                        } else t.depthFunc(t.LEQUAL);
                        i = e
                    }
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    r !== e && (t.clearDepth(e), r = e)
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null
                }
            }
        }

        function a() {
            var e = !1,
                n = null,
                i = null,
                r = null,
                o = null,
                a = null,
                s = null,
                c = null,
                u = null;
            return {
                setTest: function(e) {
                    e ? p(t.STENCIL_TEST) : f(t.STENCIL_TEST)
                },
                setMask: function(i) {
                    n === i || e || (t.stencilMask(i), n = i)
                },
                setFunc: function(e, n, a) {
                    i === e && r === n && o === a || (t.stencilFunc(e, n, a), i = e, r = n, o = a)
                },
                setOp: function(e, n, i) {
                    a === e && s === n && c === i || (t.stencilOp(e, n, i), a = e, s = n, c = i)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    u !== e && (t.clearStencil(e), u = e)
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null, o = null, a = null, s = null, c = null, u = null
                }
            }
        }

        function s(e, n, i) {
            var r = new Uint8Array(4),
                o = t.createTexture();
            t.bindTexture(e, o), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
            for (var a = 0; a < i; a++) t.texImage2D(n + a, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
            return o
        }

        function c() {
            F.setClear(0, 0, 0, 1), z.setClear(1), G.setClear(0), p(t.DEPTH_TEST), b(No), T(!1), S(Jr), p(t.CULL_FACE), p(t.BLEND), g(lo)
        }

        function u() {
            for (var t = 0, e = H.length; t < e; t++) H[t] = 0
        }

        function l(n) {
            if (H[n] = 1, 0 === V[n] && (t.enableVertexAttribArray(n), V[n] = 1), 0 !== j[n]) {
                e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(n, 0), j[n] = 0
            }
        }

        function h(e, n, i) {
            H[e] = 1, 0 === V[e] && (t.enableVertexAttribArray(e), V[e] = 1), j[e] !== n && (i.vertexAttribDivisorANGLE(e, n), j[e] = n)
        }

        function d() {
            for (var e = 0, n = V.length; e !== n; ++e) V[e] !== H[e] && (t.disableVertexAttribArray(e), V[e] = 0)
        }

        function p(e) {
            !0 !== W[e] && (t.enable(e), W[e] = !0)
        }

        function f(e) {
            !1 !== W[e] && (t.disable(e), W[e] = !1)
        }

        function m() {
            if (null === X && (X = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                for (var n = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), i = 0; i < n.length; i++) X.push(n[i]);
            return X
        }

        function g(e, i, r, o, a, s, c, u) {
            e !== uo ? p(t.BLEND) : f(t.BLEND), e === q && u === tt || (e === ho ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === po ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === fo ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR)) : u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)), q = e, tt = u), e === mo ? (a = a || i, s = s || r, c = c || o, i === Y && a === Q || (t.blendEquationSeparate(n(i), n(a)), Y = i, Q = a), r === Z && o === J && s === K && c === $ || (t.blendFuncSeparate(n(r), n(o), n(s), n(c)), Z = r, J = o, K = s, $ = c)) : (Y = null, Z = null, J = null, Q = null, K = null, $ = null)
        }

        function v(t) {
            F.setMask(t)
        }

        function y(t) {
            z.setTest(t)
        }

        function _(t) {
            z.setMask(t)
        }

        function b(t) {
            z.setFunc(t)
        }

        function x(t) {
            G.setTest(t)
        }

        function w(t) {
            G.setMask(t)
        }

        function M(t, e, n) {
            G.setFunc(t, e, n)
        }

        function E(t, e, n) {
            G.setOp(t, e, n)
        }

        function T(e) {
            et !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), et = e)
        }

        function S(e) {
            e !== Zr ? (p(t.CULL_FACE),
                e !== nt && (e === Jr ? t.cullFace(t.BACK) : e === Qr ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : f(t.CULL_FACE), nt = e
        }

        function A(e) {
            e !== it && (ut && t.lineWidth(e), it = e)
        }

        function L(e, n, i) {
            e ? (p(t.POLYGON_OFFSET_FILL), rt === n && ot === i || (t.polygonOffset(n, i), rt = n, ot = i)) : f(t.POLYGON_OFFSET_FILL)
        }

        function R() {
            return at
        }

        function P(e) {
            at = e, e ? p(t.SCISSOR_TEST) : f(t.SCISSOR_TEST)
        }

        function C(e) {
            void 0 === e && (e = t.TEXTURE0 + st - 1), lt !== e && (t.activeTexture(e), lt = e)
        }

        function I(e, n) {
            null === lt && C();
            var i = ht[lt];
            void 0 === i && (i = {
                type: void 0,
                texture: void 0
            }, ht[lt] = i), i.type === e && i.texture === n || (t.bindTexture(e, n || ft[e]), i.type = e, i.texture = n)
        }

        function B() {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }

        function O() {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }

        function N(e) {
            !1 === dt.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), dt.copy(e))
        }

        function U(e) {
            !1 === pt.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), pt.copy(e))
        }

        function D() {
            for (var e = 0; e < V.length; e++) 1 === V[e] && (t.disableVertexAttribArray(e), V[e] = 0);
            W = {}, X = null, lt = null, ht = {}, q = null, et = null, nt = null, F.reset(), z.reset(), G.reset()
        }
        var F = new i,
            z = new o,
            G = new a,
            k = t.getParameter(t.MAX_VERTEX_ATTRIBS),
            H = new Uint8Array(k),
            V = new Uint8Array(k),
            j = new Uint8Array(k),
            W = {},
            X = null,
            q = null,
            Y = null,
            Z = null,
            J = null,
            Q = null,
            K = null,
            $ = null,
            tt = !1,
            et = null,
            nt = null,
            it = null,
            rt = null,
            ot = null,
            at = null,
            st = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
            ct = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]),
            ut = parseFloat(ct) >= 1,
            lt = null,
            ht = {},
            dt = new r,
            pt = new r,
            ft = {};
        return ft[t.TEXTURE_2D] = s(t.TEXTURE_2D, t.TEXTURE_2D, 1), ft[t.TEXTURE_CUBE_MAP] = s(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), {
            buffers: {
                color: F,
                depth: z,
                stencil: G
            },
            init: c,
            initAttributes: u,
            enableAttribute: l,
            enableAttributeAndDivisor: h,
            disableUnusedAttributes: d,
            enable: p,
            disable: f,
            getCompressedTextureFormats: m,
            setBlending: g,
            setColorWrite: v,
            setDepthTest: y,
            setDepthWrite: _,
            setDepthFunc: b,
            setStencilTest: x,
            setStencilWrite: w,
            setStencilFunc: M,
            setStencilOp: E,
            setFlipSided: T,
            setCullFace: S,
            setLineWidth: A,
            setPolygonOffset: L,
            getScissorTest: R,
            setScissorTest: P,
            activeTexture: C,
            bindTexture: I,
            compressedTexImage2D: B,
            texImage2D: O,
            scissor: N,
            viewport: U,
            reset: D
        }
    }

    function oe(t, e, n) {
        function i() {
            if (void 0 !== o) return o;
            var n = e.get("EXT_texture_filter_anisotropic");
            return o = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }

        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        var o, a = void 0 !== n.precision ? n.precision : "highp",
            s = r(a);
        s !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", s, "instead."), a = s);
        var c = !0 === n.logarithmicDepthBuffer && !!e.get("EXT_frag_depth"),
            u = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
            l = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            h = t.getParameter(t.MAX_TEXTURE_SIZE),
            d = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
            p = t.getParameter(t.MAX_VERTEX_ATTRIBS),
            f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
            m = t.getParameter(t.MAX_VARYING_VECTORS),
            g = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
            v = l > 0,
            y = !!e.get("OES_texture_float");
        return {
            getMaxAnisotropy: i,
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: u,
            maxVertexTextures: l,
            maxTextureSize: h,
            maxCubemapSize: d,
            maxAttributes: p,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: v && y
        }
    }

    function ae(t) {
        var e = {};
        return {
            get: function(n) {
                if (void 0 !== e[n]) return e[n];
                var i;
                switch (n) {
                    case "WEBGL_depth_texture":
                        i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                        break;
                    case "EXT_texture_filter_anisotropic":
                        i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    case "WEBGL_compressed_texture_etc1":
                        i = t.getExtension("WEBGL_compressed_texture_etc1");
                        break;
                    default:
                        i = t.getExtension(n)
                }
                return null === i && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = i, i
            }
        }
    }

    function se() {
        function t() {
            u.value !== i && (u.value = i, u.needsUpdate = r > 0), n.numPlanes = r, n.numIntersection = 0
        }

        function e(t, e, i, r) {
            var o = null !== t ? t.length : 0,
                a = null;
            if (0 !== o) {
                if (a = u.value, !0 !== r || null === a) {
                    var l = i + 4 * o,
                        h = e.matrixWorldInverse;
                    c.getNormalMatrix(h), (null === a || a.length < l) && (a = new Float32Array(l));
                    for (var d = 0, p = i; d !== o; ++d, p += 4) s.copy(t[d]).applyMatrix4(h, c), s.normal.toArray(a, p), a[p + 3] = s.constant
                }
                u.value = a, u.needsUpdate = !0
            }
            return n.numPlanes = o, a
        }
        var n = this,
            i = null,
            r = 0,
            o = !1,
            a = !1,
            s = new nt,
            c = new et,
            u = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = u, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, n, a) {
            var s = 0 !== t.length || n || 0 !== r || o;
            return o = n, i = e(t, a, 0), r = t.length, s
        }, this.beginShadows = function() {
            a = !0, e(null)
        }, this.endShadows = function() {
            a = !1, t()
        }, this.setState = function(n, s, c, l, h, d) {
            if (!o || null === n || 0 === n.length || a && !c) a ? e(null) : t();
            else {
                var p = a ? 0 : r,
                    f = 4 * p,
                    m = h.clippingState || null;
                u.value = m, m = e(n, l, f, d);
                for (var g = 0; g !== f; ++g) m[g] = i[g];
                h.clippingState = m, this.numIntersection = s ? this.numPlanes : 0, this.numPlanes += p
            }
        }
    }

    function ce(t) {
        function e() {
            return null === pt ? St : 1
        }

        function n() {
            ce.init(), ce.scissor(yt.copy(Rt).multiplyScalar(St)), ce.viewport(bt.copy(Bt).multiplyScalar(St)), ce.buffers.color.setClear(wt.r, wt.g, wt.b, Mt, J)
        }

        function i() {
            ht = null, vt = null, gt = "", mt = -1, ce.reset()
        }

        function o(t) {
            t.preventDefault(), i(), n(), ue.clear()
        }

        function a(t) {
            var e = t.target;
            e.removeEventListener("dispose", a), s(e)
        }

        function s(t) {
            l(t), ue.delete(t)
        }

        function l(t) {
            var e = ue.get(t).program;
            t.program = void 0, void 0 !== e && de.releaseProgram(e)
        }

        function h(t, e, n, i) {
            var r;
            if (n && n.isInstancedBufferGeometry && null === (r = Kt.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            void 0 === i && (i = 0), ce.initAttributes();
            var o = n.attributes,
                a = e.getAttributes(),
                s = t.defaultAttributeValues;
            for (var c in a) {
                var u = a[c];
                if (u >= 0) {
                    var l = o[c];
                    if (void 0 !== l) {
                        var h = l.normalized,
                            d = l.itemSize,
                            p = he.getAttributeProperties(l),
                            f = p.__webglBuffer,
                            m = p.type,
                            g = p.bytesPerElement;
                        if (l.isInterleavedBufferAttribute) {
                            var v = l.data,
                                y = v.stride,
                                _ = l.offset;
                            v && v.isInstancedInterleavedBuffer ? (ce.enableAttributeAndDivisor(u, v.meshPerAttribute, r), void 0 === n.maxInstancedCount && (n.maxInstancedCount = v.meshPerAttribute * v.count)) : ce.enableAttribute(u), Jt.bindBuffer(Jt.ARRAY_BUFFER, f), Jt.vertexAttribPointer(u, d, m, h, y * g, (i * y + _) * g)
                        } else l.isInstancedBufferAttribute ? (ce.enableAttributeAndDivisor(u, l.meshPerAttribute, r), void 0 === n.maxInstancedCount && (n.maxInstancedCount = l.meshPerAttribute * l.count)) : ce.enableAttribute(u), Jt.bindBuffer(Jt.ARRAY_BUFFER, f), Jt.vertexAttribPointer(u, d, m, h, 0, i * d * g)
                    } else if (void 0 !== s) {
                        var b = s[c];
                        if (void 0 !== b) switch (b.length) {
                            case 2:
                                Jt.vertexAttrib2fv(u, b);
                                break;
                            case 3:
                                Jt.vertexAttrib3fv(u, b);
                                break;
                            case 4:
                                Jt.vertexAttrib4fv(u, b);
                                break;
                            default:
                                Jt.vertexAttrib1fv(u, b)
                        }
                    }
                }
            }
            ce.disableUnusedAttributes()
        }

        function d(t, e) {
            return Math.abs(e[0]) - Math.abs(t[0])
        }

        function p(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.material.program && e.material.program && t.material.program !== e.material.program ? t.material.program.id - e.material.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }

        function f(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }

        function m(t, e, n, i, r) {
            var o, a;
            n.transparent ? (o = ot, a = ++at) : (o = et, a = ++nt);
            var s = o[a];
            void 0 !== s ? (s.id = t.id, s.object = t, s.geometry = e, s.material = n, s.z = Wt.z, s.group = r) : (s = {
                id: t.id,
                object: t,
                geometry: e,
                material: n,
                z: Wt.z,
                group: r
            }, o.push(s))
        }

        function g(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), Vt.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), y(Vt)
        }

        function v(t) {
            return Vt.center.set(0, 0, 0), Vt.radius = .7071067811865476, Vt.applyMatrix4(t.matrixWorld), y(Vt)
        }

        function y(t) {
            if (!zt.intersectsSphere(t)) return !1;
            var e = Gt.numPlanes;
            if (0 === e) return !0;
            var n = lt.clippingPlanes,
                i = t.center,
                r = -t.radius,
                o = 0;
            do {
                if (n[o].distanceToPoint(i) < r) return !1
            } while (++o !== e);
            return !0
        }

        function _(t, e) {
            if (!1 !== t.visible) {
                if (0 != (t.layers.mask & e.layers.mask))
                    if (t.isLight) $.push(t);
                    else if (t.isSprite) !1 !== t.frustumCulled && !0 !== v(t) || ct.push(t);
                else if (t.isLensFlare) ut.push(t);
                else if (t.isImmediateRenderObject) !0 === lt.sortObjects && (Wt.setFromMatrixPosition(t.matrixWorld), Wt.applyMatrix4(jt)), m(t, null, t.material, Wt.z, null);
                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !1 === t.frustumCulled || !0 === g(t))) {
                    var n = t.material;
                    if (!0 === n.visible) {
                        !0 === lt.sortObjects && (Wt.setFromMatrixPosition(t.matrixWorld), Wt.applyMatrix4(jt));
                        var i = he.update(t);
                        if (n.isMultiMaterial)
                            for (var r = i.groups, o = n.materials, a = 0, s = r.length; a < s; a++) {
                                var c = r[a],
                                    u = o[c.materialIndex];
                                !0 === u.visible && m(t, i, u, Wt.z, c)
                            } else m(t, i, n, Wt.z, null)
                    }
                }
                for (var l = t.children, a = 0, s = l.length; a < s; a++) _(l[a], e)
            }
        }

        function b(t, e, n, i) {
            for (var r = 0, o = t.length; r < o; r++) {
                var a = t[r],
                    s = a.object,
                    c = a.geometry,
                    u = void 0 === i ? a.material : i,
                    l = a.group;
                if (s.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, s.matrixWorld), s.normalMatrix.getNormalMatrix(s.modelViewMatrix), s.onBeforeRender(lt, e, n, c, u, l), s.isImmediateRenderObject) {
                    w(u);
                    var h = M(n, e.fog, u, s);
                    gt = "", s.render(function(t) {
                        lt.renderBufferImmediate(t, h, u)
                    })
                } else lt.renderBufferDirect(n, e.fog, c, u, s, l);
                s.onAfterRender(lt, e, n, c, u, l)
            }
        }

        function x(t, e, n) {
            var i = ue.get(t),
                r = de.getParameters(t, Yt, e, Gt.numPlanes, Gt.numIntersection, n),
                o = de.getProgramCode(t, r),
                s = i.program,
                c = !0;
            if (void 0 === s) t.addEventListener("dispose", a);
            else if (s.code !== o) l(t);
            else {
                if (void 0 !== r.shaderID) return;
                c = !1
            }
            if (c) {
                if (r.shaderID) {
                    var u = ls[r.shaderID];
                    i.__webglShader = {
                        name: t.type,
                        uniforms: as.clone(u.uniforms),
                        vertexShader: u.vertexShader,
                        fragmentShader: u.fragmentShader
                    }
                } else i.__webglShader = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                };
                t.__webglShader = i.__webglShader, s = de.acquireProgram(t, r, o), i.program = s, t.program = s
            }
            var h = s.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var d = 0; d < lt.maxMorphTargets; d++) h["morphTarget" + d] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (var d = 0; d < lt.maxMorphNormals; d++) h["morphNormal" + d] >= 0 && t.numSupportedMorphNormals++
            }
            var p = i.__webglShader.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = Gt.numPlanes, i.numIntersection = Gt.numIntersection, p.clippingPlanes = Gt.uniform), i.fog = e, i.lightsHash = Yt.hash, t.lights && (p.ambientLightColor.value = Yt.ambient, p.directionalLights.value = Yt.directional, p.spotLights.value = Yt.spot, p.rectAreaLights.value = Yt.rectArea, p.pointLights.value = Yt.point, p.hemisphereLights.value = Yt.hemi, p.directionalShadowMap.value = Yt.directionalShadowMap, p.directionalShadowMatrix.value = Yt.directionalShadowMatrix, p.spotShadowMap.value = Yt.spotShadowMap, p.spotShadowMatrix.value = Yt.spotShadowMatrix, p.pointShadowMap.value = Yt.pointShadowMap, p.pointShadowMatrix.value = Yt.pointShadowMatrix);
            var f = i.program.getUniforms(),
                m = j.seqWithValue(f.seq, p);
            i.uniformsList = m
        }

        function w(t) {
            t.side === io ? ce.disable(Jt.CULL_FACE) : ce.enable(Jt.CULL_FACE), ce.setFlipSided(t.side === no), !0 === t.transparent ? ce.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : ce.setBlending(uo), ce.setDepthFunc(t.depthFunc), ce.setDepthTest(t.depthTest), ce.setDepthWrite(t.depthWrite), ce.setColorWrite(t.colorWrite), ce.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
        }

        function M(t, e, n, i) {
            xt = 0;
            var r = ue.get(n);
            if (kt && (Ht || t !== vt)) {
                var o = t === vt && n.id === mt;
                Gt.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, r, o)
            }!1 === n.needsUpdate && (void 0 === r.program ? n.needsUpdate = !0 : n.fog && r.fog !== e ? n.needsUpdate = !0 : n.lights && r.lightsHash !== Yt.hash ? n.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === Gt.numPlanes && r.numIntersection === Gt.numIntersection || (n.needsUpdate = !0)), n.needsUpdate && (x(n, e, i), n.needsUpdate = !1);
            var a = !1,
                s = !1,
                c = !1,
                u = r.program,
                l = u.getUniforms(),
                h = r.__webglShader.uniforms;
            if (u.id !== ht && (Jt.useProgram(u.program), ht = u.id, a = !0, s = !0, c = !0), n.id !== mt && (mt = n.id, s = !0), a || t !== vt) {
                if (l.set(Jt, t, "projectionMatrix"), te.logarithmicDepthBuffer && l.setValue(Jt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), t !== vt && (vt = t, s = !0, c = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
                    var d = l.map.cameraPosition;
                    void 0 !== d && d.setValue(Jt, Wt.setFromMatrixPosition(t.matrixWorld))
                }(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && l.setValue(Jt, "viewMatrix", t.matrixWorldInverse), l.set(Jt, lt, "toneMappingExposure"), l.set(Jt, lt, "toneMappingWhitePoint")
            }
            if (n.skinning) {
                l.setOptional(Jt, i, "bindMatrix"), l.setOptional(Jt, i, "bindMatrixInverse");
                var p = i.skeleton;
                p && (te.floatVertexTextures && p.useVertexTexture ? (l.set(Jt, p, "boneTexture"), l.set(Jt, p, "boneTextureWidth"), l.set(Jt, p, "boneTextureHeight")) : l.setOptional(Jt, p, "boneMatrices"))
            }
            return s && (n.lights && N(h, c), e && n.fog && L(h, e), (n.isMeshBasicMaterial || n.isMeshLambertMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.isMeshNormalMaterial || n.isMeshDepthMaterial) && E(h, n), n.isLineBasicMaterial ? T(h, n) : n.isLineDashedMaterial ? (T(h, n), S(h, n)) : n.isPointsMaterial ? A(h, n) : n.isMeshLambertMaterial ? R(h, n) : n.isMeshToonMaterial ? C(h, n) : n.isMeshPhongMaterial ? P(h, n) : n.isMeshPhysicalMaterial ? B(h, n) : n.isMeshStandardMaterial ? I(h, n) : n.isMeshDepthMaterial ? n.displacementMap && (h.displacementMap.value = n.displacementMap, h.displacementScale.value = n.displacementScale, h.displacementBias.value = n.displacementBias) : n.isMeshNormalMaterial && O(h, n), void 0 !== h.ltcMat && (h.ltcMat.value = THREE.UniformsLib.LTC_MAT_TEXTURE), void 0 !== h.ltcMag && (h.ltcMag.value = THREE.UniformsLib.LTC_MAG_TEXTURE), j.upload(Jt, r.uniformsList, h, lt)), l.set(Jt, i, "modelViewMatrix"), l.set(Jt, i, "normalMatrix"), l.setValue(Jt, "modelMatrix", i.matrixWorld), u
        }

        function E(t, e) {
            t.opacity.value = e.opacity, t.diffuse.value = e.color, e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), t.map.value = e.map, t.specularMap.value = e.specularMap, t.alphaMap.value = e.alphaMap, e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
            var n;
            if (e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n) {
                n.isWebGLRenderTarget && (n = n.texture);
                var i = n.offset,
                    r = n.repeat;
                t.offsetRepeat.value.set(i.x, i.y, r.x, r.y)
            }
            t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio
        }

        function T(t, e) {
            t.diffuse.value = e.color, t.opacity.value = e.opacity
        }

        function S(t, e) {
            t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
        }

        function A(t, e) {
            if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * St, t.scale.value = .5 * Tt, t.map.value = e.map, null !== e.map) {
                var n = e.map.offset,
                    i = e.map.repeat;
                t.offsetRepeat.value.set(n.x, n.y, i.x, i.y)
            }
        }

        function L(t, e) {
            t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
        }

        function R(t, e) {
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
        }

        function P(t, e) {
            t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function C(t, e) {
            P(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
        }

        function I(t, e) {
            t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }

        function B(t, e) {
            t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, I(t, e)
        }

        function O(t, e) {
            e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function N(t, e) {
            t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
        }

        function U(t) {
            for (var e = 0, n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                r.castShadow && (Yt.shadows[e++] = r)
            }
            Yt.shadows.length = e
        }

        function D(t, e) {
            var n, i, r, o, a, s, c, l = 0,
                h = 0,
                d = 0,
                p = e.matrixWorldInverse,
                f = 0,
                m = 0,
                g = 0,
                v = 0,
                y = 0;
            for (n = 0, i = t.length; n < i; n++)
                if (r = t[n], o = r.color, a = r.intensity, s = r.distance, c = r.shadow && r.shadow.map ? r.shadow.map.texture : null, r.isAmbientLight) l += o.r * a, h += o.g * a, d += o.b * a;
                else if (r.isDirectionalLight) {
                var _ = pe.get(r);
                _.color.copy(r.color).multiplyScalar(r.intensity), _.direction.setFromMatrixPosition(r.matrixWorld), Wt.setFromMatrixPosition(r.target.matrixWorld), _.direction.sub(Wt), _.direction.transformDirection(p), _.shadow = r.castShadow, r.castShadow && (_.shadowBias = r.shadow.bias, _.shadowRadius = r.shadow.radius, _.shadowMapSize = r.shadow.mapSize), Yt.directionalShadowMap[f] = c, Yt.directionalShadowMatrix[f] = r.shadow.matrix, Yt.directional[f++] = _
            } else if (r.isSpotLight) {
                var _ = pe.get(r);
                _.position.setFromMatrixPosition(r.matrixWorld), _.position.applyMatrix4(p), _.color.copy(o).multiplyScalar(a), _.distance = s, _.direction.setFromMatrixPosition(r.matrixWorld), Wt.setFromMatrixPosition(r.target.matrixWorld), _.direction.sub(Wt), _.direction.transformDirection(p), _.coneCos = Math.cos(r.angle), _.penumbraCos = Math.cos(r.angle * (1 - r.penumbra)), _.decay = 0 === r.distance ? 0 : r.decay, _.shadow = r.castShadow, r.castShadow && (_.shadowBias = r.shadow.bias, _.shadowRadius = r.shadow.radius, _.shadowMapSize = r.shadow.mapSize), Yt.spotShadowMap[g] = c, Yt.spotShadowMatrix[g] = r.shadow.matrix, Yt.spot[g++] = _
            } else if (r.isRectAreaLight) {
                var _ = pe.get(r);
                _.color.copy(o).multiplyScalar(a / (r.width * r.height)), _.position.setFromMatrixPosition(r.matrixWorld), _.position.applyMatrix4(p), qt.identity(), Xt.copy(r.matrixWorld), Xt.premultiply(p), qt.extractRotation(Xt), _.halfWidth.set(.5 * r.width, 0, 0), _.halfHeight.set(0, .5 * r.height, 0), _.halfWidth.applyMatrix4(qt), _.halfHeight.applyMatrix4(qt), Yt.rectArea[v++] = _
            } else if (r.isPointLight) {
                var _ = pe.get(r);
                _.position.setFromMatrixPosition(r.matrixWorld), _.position.applyMatrix4(p), _.color.copy(r.color).multiplyScalar(r.intensity), _.distance = r.distance, _.decay = 0 === r.distance ? 0 : r.decay, _.shadow = r.castShadow, r.castShadow && (_.shadowBias = r.shadow.bias, _.shadowRadius = r.shadow.radius, _.shadowMapSize = r.shadow.mapSize), Yt.pointShadowMap[m] = c, void 0 === Yt.pointShadowMatrix[m] && (Yt.pointShadowMatrix[m] = new u), Wt.setFromMatrixPosition(r.matrixWorld).negate(), Yt.pointShadowMatrix[m].identity().setPosition(Wt), Yt.point[m++] = _
            } else if (r.isHemisphereLight) {
                var _ = pe.get(r);
                _.direction.setFromMatrixPosition(r.matrixWorld), _.direction.transformDirection(p), _.direction.normalize(), _.skyColor.copy(r.color).multiplyScalar(a), _.groundColor.copy(r.groundColor).multiplyScalar(a), Yt.hemi[y++] = _
            }
            Yt.ambient[0] = l, Yt.ambient[1] = h, Yt.ambient[2] = d, Yt.directional.length = f, Yt.spot.length = g, Yt.rectArea.length = v, Yt.point.length = m, Yt.hemi.length = y, Yt.hash = f + "," + m + "," + g + "," + v + "," + y + "," + Yt.shadows.length
        }

        function F() {
            var t = xt;
            return t >= te.maxTextures && console.warn("WebGLRenderer: trying to use " + t + " texture units while this GPU supports only " + te.maxTextures), xt += 1, t
        }

        function z(t) {
            var e;
            if (t === ea) return Jt.REPEAT;
            if (t === na) return Jt.CLAMP_TO_EDGE;
            if (t === ia) return Jt.MIRRORED_REPEAT;
            if (t === ra) return Jt.NEAREST;
            if (t === oa) return Jt.NEAREST_MIPMAP_NEAREST;
            if (t === aa) return Jt.NEAREST_MIPMAP_LINEAR;
            if (t === sa) return Jt.LINEAR;
            if (t === ca) return Jt.LINEAR_MIPMAP_NEAREST;
            if (t === ua) return Jt.LINEAR_MIPMAP_LINEAR;
            if (t === la) return Jt.UNSIGNED_BYTE;
            if (t === ya) return Jt.UNSIGNED_SHORT_4_4_4_4;
            if (t === _a) return Jt.UNSIGNED_SHORT_5_5_5_1;
            if (t === ba) return Jt.UNSIGNED_SHORT_5_6_5;
            if (t === ha) return Jt.BYTE;
            if (t === da) return Jt.SHORT;
            if (t === pa) return Jt.UNSIGNED_SHORT;
            if (t === fa) return Jt.INT;
            if (t === ma) return Jt.UNSIGNED_INT;
            if (t === ga) return Jt.FLOAT;
            if (t === va && null !== (e = Kt.get("OES_texture_half_float"))) return e.HALF_FLOAT_OES;
            if (t === wa) return Jt.ALPHA;
            if (t === Ma) return Jt.RGB;
            if (t === Ea) return Jt.RGBA;
            if (t === Ta) return Jt.LUMINANCE;
            if (t === Sa) return Jt.LUMINANCE_ALPHA;
            if (t === La) return Jt.DEPTH_COMPONENT;
            if (t === Ra) return Jt.DEPTH_STENCIL;
            if (t === go) return Jt.FUNC_ADD;
            if (t === vo) return Jt.FUNC_SUBTRACT;
            if (t === yo) return Jt.FUNC_REVERSE_SUBTRACT;
            if (t === xo) return Jt.ZERO;
            if (t === wo) return Jt.ONE;
            if (t === Mo) return Jt.SRC_COLOR;
            if (t === Eo) return Jt.ONE_MINUS_SRC_COLOR;
            if (t === To) return Jt.SRC_ALPHA;
            if (t === So) return Jt.ONE_MINUS_SRC_ALPHA;
            if (t === Ao) return Jt.DST_ALPHA;
            if (t === Lo) return Jt.ONE_MINUS_DST_ALPHA;
            if (t === Ro) return Jt.DST_COLOR;
            if (t === Po) return Jt.ONE_MINUS_DST_COLOR;
            if (t === Co) return Jt.SRC_ALPHA_SATURATE;
            if ((t === Pa || t === Ca || t === Ia || t === Ba) && null !== (e = Kt.get("WEBGL_compressed_texture_s3tc"))) {
                if (t === Pa) return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === Ca) return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === Ia) return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === Ba) return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if ((t === Oa || t === Na || t === Ua || t === Da) && null !== (e = Kt.get("WEBGL_compressed_texture_pvrtc"))) {
                if (t === Oa) return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (t === Na) return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (t === Ua) return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (t === Da) return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (t === Fa && null !== (e = Kt.get("WEBGL_compressed_texture_etc1"))) return e.COMPRESSED_RGB_ETC1_WEBGL;
            if ((t === _o || t === bo) && null !== (e = Kt.get("EXT_blend_minmax"))) {
                if (t === _o) return e.MIN_EXT;
                if (t === bo) return e.MAX_EXT
            }
            return t === xa && null !== (e = Kt.get("WEBGL_depth_texture")) ? e.UNSIGNED_INT_24_8_WEBGL : 0
        }
        console.log("THREE.WebGLRenderer", qr), t = t || {};
        var G = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            k = void 0 !== t.context ? t.context : null,
            H = void 0 !== t.alpha && t.alpha,
            V = void 0 === t.depth || t.depth,
            X = void 0 === t.stencil || t.stencil,
            q = void 0 !== t.antialias && t.antialias,
            J = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            K = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            $ = [],
            et = [],
            nt = -1,
            ot = [],
            at = -1,
            st = new Float32Array(8),
            ct = [],
            ut = [];
        this.domElement = G, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = jo, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var lt = this,
            ht = null,
            pt = null,
            ft = null,
            mt = -1,
            gt = "",
            vt = null,
            yt = new r,
            _t = null,
            bt = new r,
            xt = 0,
            wt = new W(0),
            Mt = 0,
            Et = G.width,
            Tt = G.height,
            St = 1,
            Rt = new r(0, 0, Et, Tt),
            Ct = !1,
            Bt = new r(0, 0, Et, Tt),
            zt = new it,
            Gt = new se,
            kt = !1,
            Ht = !1,
            Vt = new tt,
            jt = new u,
            Wt = new c,
            Xt = new u,
            qt = new u,
            Yt = {
                hash: "",
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],
                shadows: []
            },
            Zt = {
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
        this.info = {
            render: Zt,
            memory: {
                geometries: 0,
                textures: 0
            },
            programs: null
        };
        var Jt;
        try {
            var Qt = {
                alpha: H,
                depth: V,
                stencil: X,
                antialias: q,
                premultipliedAlpha: J,
                preserveDrawingBuffer: K
            };
            if (null === (Jt = k || G.getContext("webgl", Qt) || G.getContext("experimental-webgl", Qt))) throw null !== G.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
            void 0 === Jt.getShaderPrecisionFormat && (Jt.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }), G.addEventListener("webglcontextlost", o, !1)
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t)
        }
        var Kt = new ae(Jt);
        Kt.get("WEBGL_depth_texture"), Kt.get("OES_texture_float"), Kt.get("OES_texture_float_linear"), Kt.get("OES_texture_half_float"), Kt.get("OES_texture_half_float_linear"), Kt.get("OES_standard_derivatives"), Kt.get("ANGLE_instanced_arrays"), Kt.get("OES_element_index_uint") && (At.MaxIndex = 4294967296);
        var te = new oe(Jt, Kt, t),
            ce = new re(Jt, Kt, z),
            ue = new ie,
            le = new ne(Jt, Kt, ce, ue, te, z, this.info),
            he = new ee(Jt, ue, this.info),
            de = new $t(this, te),
            pe = new Ft;
        this.info.programs = de.programs;
        var fe, me, ge, ve, ye = new Dt(Jt, Kt, Zt),
            _e = new Ut(Jt, Kt, Zt);
        n(), this.context = Jt, this.capabilities = te, this.extensions = Kt, this.properties = ue, this.state = ce;
        var be = new rt(this, Yt, he, te);
        this.shadowMap = be;
        var xe = new Z(this, ct),
            we = new Y(this, ut);
        this.getContext = function() {
            return Jt
        }, this.getContextAttributes = function() {
            return Jt.getContextAttributes()
        }, this.forceContextLoss = function() {
            Kt.get("WEBGL_lose_context").loseContext()
        }, this.getMaxAnisotropy = function() {
            return te.getMaxAnisotropy()
        }, this.getPrecision = function() {
            return te.precision
        }, this.getPixelRatio = function() {
            return St
        }, this.setPixelRatio = function(t) {
            void 0 !== t && (St = t, this.setSize(Bt.z, Bt.w, !1))
        }, this.getSize = function() {
            return {
                width: Et,
                height: Tt
            }
        }, this.setSize = function(t, e, n) {
            Et = t, Tt = e, G.width = t * St, G.height = e * St, !1 !== n && (G.style.width = t + "px", G.style.height = e + "px"), this.setViewport(0, 0, t, e)
        }, this.setViewport = function(t, e, n, i) {
            ce.viewport(Bt.set(t, e, n, i))
        }, this.setScissor = function(t, e, n, i) {
            ce.scissor(Rt.set(t, e, n, i))
        }, this.setScissorTest = function(t) {
            ce.setScissorTest(Ct = t)
        }, this.getClearColor = function() {
            return wt
        }, this.setClearColor = function(t, e) {
            wt.set(t), Mt = void 0 !== e ? e : 1, ce.buffers.color.setClear(wt.r, wt.g, wt.b, Mt, J)
        }, this.getClearAlpha = function() {
            return Mt
        }, this.setClearAlpha = function(t) {
            Mt = t, ce.buffers.color.setClear(wt.r, wt.g, wt.b, Mt, J)
        }, this.clear = function(t, e, n) {
            var i = 0;
            (void 0 === t || t) && (i |= Jt.COLOR_BUFFER_BIT), (void 0 === e || e) && (i |= Jt.DEPTH_BUFFER_BIT), (void 0 === n || n) && (i |= Jt.STENCIL_BUFFER_BIT), Jt.clear(i)
        }, this.clearColor = function() {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function(t, e, n, i) {
            this.setRenderTarget(t), this.clear(e, n, i)
        }, this.resetGLState = i, this.dispose = function() {
            ot = [], at = -1, et = [], nt = -1, G.removeEventListener("webglcontextlost", o, !1)
        }, this.renderBufferImmediate = function(t, e, n) {
            ce.initAttributes();
            var i = ue.get(t);
            t.hasPositions && !i.position && (i.position = Jt.createBuffer()), t.hasNormals && !i.normal && (i.normal = Jt.createBuffer()), t.hasUvs && !i.uv && (i.uv = Jt.createBuffer()), t.hasColors && !i.color && (i.color = Jt.createBuffer());
            var r = e.getAttributes();
            if (t.hasPositions && (Jt.bindBuffer(Jt.ARRAY_BUFFER, i.position), Jt.bufferData(Jt.ARRAY_BUFFER, t.positionArray, Jt.DYNAMIC_DRAW), ce.enableAttribute(r.position), Jt.vertexAttribPointer(r.position, 3, Jt.FLOAT, !1, 0, 0)), t.hasNormals) {
                if (Jt.bindBuffer(Jt.ARRAY_BUFFER, i.normal), !n.isMeshPhongMaterial && !n.isMeshStandardMaterial && !n.isMeshNormalMaterial && n.shading === ro)
                    for (var o = 0, a = 3 * t.count; o < a; o += 9) {
                        var s = t.normalArray,
                            c = (s[o + 0] + s[o + 3] + s[o + 6]) / 3,
                            u = (s[o + 1] + s[o + 4] + s[o + 7]) / 3,
                            l = (s[o + 2] + s[o + 5] + s[o + 8]) / 3;
                        s[o + 0] = c, s[o + 1] = u, s[o + 2] = l, s[o + 3] = c, s[o + 4] = u, s[o + 5] = l, s[o + 6] = c, s[o + 7] = u, s[o + 8] = l
                    }
                Jt.bufferData(Jt.ARRAY_BUFFER, t.normalArray, Jt.DYNAMIC_DRAW), ce.enableAttribute(r.normal), Jt.vertexAttribPointer(r.normal, 3, Jt.FLOAT, !1, 0, 0)
            }
            t.hasUvs && n.map && (Jt.bindBuffer(Jt.ARRAY_BUFFER, i.uv), Jt.bufferData(Jt.ARRAY_BUFFER, t.uvArray, Jt.DYNAMIC_DRAW), ce.enableAttribute(r.uv), Jt.vertexAttribPointer(r.uv, 2, Jt.FLOAT, !1, 0, 0)), t.hasColors && n.vertexColors !== ao && (Jt.bindBuffer(Jt.ARRAY_BUFFER, i.color), Jt.bufferData(Jt.ARRAY_BUFFER, t.colorArray, Jt.DYNAMIC_DRAW), ce.enableAttribute(r.color), Jt.vertexAttribPointer(r.color, 3, Jt.FLOAT, !1, 0, 0)), ce.disableUnusedAttributes(), Jt.drawArrays(Jt.TRIANGLES, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function(t, n, i, r, o, a) {
            w(r);
            var s = M(t, n, r, o),
                c = !1,
                u = i.id + "_" + s.id + "_" + r.wireframe;
            u !== gt && (gt = u, c = !0);
            var l = o.morphTargetInfluences;
            if (void 0 !== l) {
                for (var p = [], f = 0, m = l.length; f < m; f++) {
                    var g = l[f];
                    p.push([g, f])
                }
                p.sort(d), p.length > 8 && (p.length = 8);
                for (var v = i.morphAttributes, f = 0, m = p.length; f < m; f++) {
                    var g = p[f];
                    if (st[f] = g[0], 0 !== g[0]) {
                        var y = g[1];
                        !0 === r.morphTargets && v.position && i.addAttribute("morphTarget" + f, v.position[y]), !0 === r.morphNormals && v.normal && i.addAttribute("morphNormal" + f, v.normal[y])
                    } else !0 === r.morphTargets && i.removeAttribute("morphTarget" + f), !0 === r.morphNormals && i.removeAttribute("morphNormal" + f)
                }
                for (var f = p.length, _ = st.length; f < _; f++) st[f] = 0;
                s.getUniforms().setValue(Jt, "morphTargetInfluences", st), c = !0
            }
            var y = i.index,
                b = i.attributes.position,
                x = 1;
            !0 === r.wireframe && (y = he.getWireframeAttribute(i), x = 2);
            var E;
            null !== y ? (E = _e, E.setIndex(y)) : E = ye, c && (h(r, s, i), null !== y && Jt.bindBuffer(Jt.ELEMENT_ARRAY_BUFFER, he.getAttributeBuffer(y)));
            var T = 0;
            null !== y ? T = y.count : void 0 !== b && (T = b.count);
            var S = i.drawRange.start * x,
                A = i.drawRange.count * x,
                L = null !== a ? a.start * x : 0,
                R = null !== a ? a.count * x : 1 / 0,
                P = Math.max(S, L),
                C = Math.min(T, S + A, L + R) - 1,
                I = Math.max(0, C - P + 1);
            if (0 !== I) {
                if (o.isMesh)
                    if (!0 === r.wireframe) ce.setLineWidth(r.wireframeLinewidth * e()), E.setMode(Jt.LINES);
                    else switch (o.drawMode) {
                        case ka:
                            E.setMode(Jt.TRIANGLES);
                            break;
                        case Ha:
                            E.setMode(Jt.TRIANGLE_STRIP);
                            break;
                        case Va:
                            E.setMode(Jt.TRIANGLE_FAN)
                    } else if (o.isLine) {
                        var B = r.linewidth;
                        void 0 === B && (B = 1), ce.setLineWidth(B * e()), o.isLineSegments ? E.setMode(Jt.LINES) : E.setMode(Jt.LINE_STRIP)
                    } else o.isPoints && E.setMode(Jt.POINTS);
                i && i.isInstancedBufferGeometry ? i.maxInstancedCount > 0 && E.renderInstances(i, P, I) : E.render(P, I)
            }
        }, this.render = function(t, e, n, i) {
            if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            gt = "", mt = -1, vt = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), jt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), zt.setFromMatrix(jt), $.length = 0, nt = -1, at = -1, ct.length = 0, ut.length = 0, Ht = this.localClippingEnabled, kt = Gt.init(this.clippingPlanes, Ht, e), _(t, e), et.length = nt + 1, ot.length = at + 1, !0 === lt.sortObjects && (et.sort(p), ot.sort(f)), kt && Gt.beginShadows(), U($), be.render(t, e), D($, e), kt && Gt.endShadows(), Zt.calls = 0, Zt.vertices = 0, Zt.faces = 0, Zt.points = 0, void 0 === n && (n = null), this.setRenderTarget(n);
            var r = t.background;
            if (null === r ? ce.buffers.color.setClear(wt.r, wt.g, wt.b, Mt, J) : r && r.isColor && (ce.buffers.color.setClear(r.r, r.g, r.b, 1, J), i = !0), (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), r && r.isCubeTexture ? (void 0 === ge && (ge = new Ot, ve = new Lt(new Pt(5, 5, 5), new Q({
                        uniforms: ls.cube.uniforms,
                        vertexShader: ls.cube.vertexShader,
                        fragmentShader: ls.cube.fragmentShader,
                        side: no,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))),
                    ge.projectionMatrix.copy(e.projectionMatrix), ge.matrixWorld.extractRotation(e.matrixWorld), ge.matrixWorldInverse.getInverse(ge.matrixWorld), ve.material.uniforms.tCube.value = r, ve.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse, ve.matrixWorld), he.update(ve), lt.renderBufferDirect(ge, null, ve.geometry, ve.material, ve, null)) : r && r.isTexture && (void 0 === fe && (fe = new Nt(-1, 1, 1, -1, 0, 1), me = new Lt(new It(2, 2), new dt({
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                }))), me.material.map = r, he.update(me), lt.renderBufferDirect(fe, null, me.geometry, me.material, me, null)), t.overrideMaterial) {
                var o = t.overrideMaterial;
                b(et, t, e, o), b(ot, t, e, o)
            } else ce.setBlending(uo), b(et, t, e), b(ot, t, e);
            xe.render(t, e), we.render(t, e, bt), n && le.updateRenderTargetMipmap(n), ce.setDepthTest(!0), ce.setDepthWrite(!0), ce.setColorWrite(!0)
        }, this.setFaceCulling = function(t, e) {
            ce.setCullFace(t), ce.setFlipSided(e === Kr)
        }, this.allocTextureUnit = F, this.setTexture2D = function() {
            var t = !1;
            return function(e, n) {
                e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), le.setTexture2D(e, n)
            }
        }(), this.setTexture = function() {
            var t = !1;
            return function(e, n) {
                t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), le.setTexture2D(e, n)
            }
        }(), this.setTextureCube = function() {
            var t = !1;
            return function(e, n) {
                e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? le.setTextureCube(e, n) : le.setTextureCubeDynamic(e, n)
            }
        }(), this.getCurrentRenderTarget = function() {
            return pt
        }, this.setRenderTarget = function(t) {
            pt = t, t && void 0 === ue.get(t).__webglFramebuffer && le.setupRenderTarget(t);
            var e, n = t && t.isWebGLRenderTargetCube;
            if (t) {
                var i = ue.get(t);
                e = n ? i.__webglFramebuffer[t.activeCubeFace] : i.__webglFramebuffer, yt.copy(t.scissor), _t = t.scissorTest, bt.copy(t.viewport)
            } else e = null, yt.copy(Rt).multiplyScalar(St), _t = Ct, bt.copy(Bt).multiplyScalar(St);
            if (ft !== e && (Jt.bindFramebuffer(Jt.FRAMEBUFFER, e), ft = e), ce.scissor(yt), ce.setScissorTest(_t), ce.viewport(bt), n) {
                var r = ue.get(t.texture);
                Jt.framebufferTexture2D(Jt.FRAMEBUFFER, Jt.COLOR_ATTACHMENT0, Jt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
            }
        }, this.readRenderTargetPixels = function(t, e, n, i, r, o) {
            if (!1 === (t && t.isWebGLRenderTarget)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            var a = ue.get(t).__webglFramebuffer;
            if (a) {
                var s = !1;
                a !== ft && (Jt.bindFramebuffer(Jt.FRAMEBUFFER, a), s = !0);
                try {
                    var c = t.texture,
                        u = c.format,
                        l = c.type;
                    if (u !== Ea && z(u) !== Jt.getParameter(Jt.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(l === la || z(l) === Jt.getParameter(Jt.IMPLEMENTATION_COLOR_READ_TYPE) || l === ga && (Kt.get("OES_texture_float") || Kt.get("WEBGL_color_buffer_float")) || l === va && Kt.get("EXT_color_buffer_half_float"))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    Jt.checkFramebufferStatus(Jt.FRAMEBUFFER) === Jt.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && Jt.readPixels(e, n, i, r, z(u), z(l), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    s && Jt.bindFramebuffer(Jt.FRAMEBUFFER, ft)
                }
            }
        }
    }

    function ue(t, e) {
        this.name = "", this.color = new W(t), this.density = void 0 !== e ? e : 25e-5
    }

    function le(t, e, n) {
        this.name = "", this.color = new W(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3
    }

    function he() {
        ct.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    }

    function de(t, e, n, i, r) {
        ct.call(this), this.lensFlares = [], this.positionScreen = new c, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, n, i, r)
    }

    function pe(t) {
        J.call(this), this.type = "SpriteMaterial", this.color = new W(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(t)
    }

    function fe(t) {
        ct.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new pe
    }

    function me() {
        ct.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }

    function ge(t, e, n) {
        if (this.useVertexTexture = void 0 === n || n, this.identityMatrix = new u, t = t || [], this.bones = t.slice(0), this.useVertexTexture) {
            var i = Math.sqrt(4 * this.bones.length);
            i = $a.nextPowerOfTwo(Math.ceil(i)), i = Math.max(i, 4), this.boneTextureWidth = i, this.boneTextureHeight = i, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new X(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, Ea, ga)
        } else this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else {
            console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
            for (var r = 0, o = this.bones.length; r < o; r++) this.boneInverses.push(new u)
        }
    }

    function ve() {
        ct.call(this), this.type = "Bone"
    }

    function ye(t, e, n) {
        Lt.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new u, this.bindMatrixInverse = new u;
        var i = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (var r, o, a = 0, s = this.geometry.bones.length; a < s; ++a) o = this.geometry.bones[a], r = new ve, i.push(r), r.name = o.name, r.position.fromArray(o.pos), r.quaternion.fromArray(o.rotq), void 0 !== o.scl && r.scale.fromArray(o.scl);
            for (var a = 0, s = this.geometry.bones.length; a < s; ++a) o = this.geometry.bones[a], -1 !== o.parent && null !== o.parent && void 0 !== i[o.parent] ? i[o.parent].add(i[a]) : this.add(i[a])
        }
        this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new ge(i, void 0, n), this.matrixWorld)
    }

    function _e(t) {
        J.call(this), this.type = "LineBasicMaterial", this.color = new W(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
    }

    function be(t, e, n) {
        if (1 === n) return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new xe(t, e);
        ct.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new At, this.material = void 0 !== e ? e : new _e({
            color: 16777215 * Math.random()
        })
    }

    function xe(t, e) {
        be.call(this, t, e), this.type = "LineSegments"
    }

    function we(t) {
        J.call(this), this.type = "PointsMaterial", this.color = new W(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(t)
    }

    function Me(t, e) {
        ct.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new At, this.material = void 0 !== e ? e : new we({
            color: 16777215 * Math.random()
        })
    }

    function Ee() {
        ct.call(this), this.type = "Group"
    }

    function Te(t, e, n, r, o, a, s, c, u) {
        function l() {
            requestAnimationFrame(l), t.readyState >= t.HAVE_CURRENT_DATA && (h.needsUpdate = !0)
        }
        i.call(this, t, e, n, r, o, a, s, c, u), this.generateMipmaps = !1;
        var h = this;
        l()
    }

    function Se(t, e, n, r, o, a, s, c, u, l, h, d) {
        i.call(this, null, a, s, c, u, l, r, o, h, d), this.image = {
            width: e,
            height: n
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    }

    function Ae(t, e, n, r, o, a, s, c, u) {
        i.call(this, t, e, n, r, o, a, s, c, u), this.needsUpdate = !0
    }

    function Le(t, e, n, r, o, a, s, c, u, l) {
        if ((l = void 0 !== l ? l : La) !== La && l !== Ra) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && l === La && (n = pa), void 0 === n && l === Ra && (n = xa), i.call(this, null, r, o, a, s, c, l, n, u), this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== s ? s : ra, this.minFilter = void 0 !== c ? c : ra, this.flipY = !1, this.generateMipmaps = !1
    }

    function Re(t) {
        function e(t, e) {
            return t - e
        }
        At.call(this), this.type = "WireframeGeometry";
        var n, i, r, o, a, s, u, l, h = [],
            d = [0, 0],
            p = {},
            f = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var m = t.faces;
            for (n = 0, r = m.length; n < r; n++) {
                var g = m[n];
                for (i = 0; i < 3; i++) d[0] = g[f[i]], d[1] = g[f[(i + 1) % 3]], d.sort(e), u = d.toString(), void 0 === p[u] && (p[u] = {
                    index1: d[0],
                    index2: d[1]
                })
            }
            for (u in p) s = p[u], l = t.vertices[s.index1], h.push(l.x, l.y, l.z), l = t.vertices[s.index2], h.push(l.x, l.y, l.z)
        } else if (t && t.isBufferGeometry) {
            var v, y, _, b, x, w, M, E;
            if (l = new c, null !== t.index) {
                for (v = t.attributes.position, y = t.index, _ = t.groups, 0 === _.length && t.addGroup(0, y.count), o = 0, a = _.length; o < a; ++o)
                    for (b = _[o], x = b.start, w = b.count, n = x, r = x + w; n < r; n += 3)
                        for (i = 0; i < 3; i++) d[0] = y.getX(n + i), d[1] = y.getX(n + (i + 1) % 3), d.sort(e), u = d.toString(), void 0 === p[u] && (p[u] = {
                            index1: d[0],
                            index2: d[1]
                        });
                for (u in p) s = p[u], l.fromBufferAttribute(v, s.index1), h.push(l.x, l.y, l.z), l.fromBufferAttribute(v, s.index2), h.push(l.x, l.y, l.z)
            } else
                for (v = t.attributes.position, n = 0, r = v.count / 3; n < r; n++)
                    for (i = 0; i < 3; i++) M = 3 * n + i, l.fromBufferAttribute(v, M), h.push(l.x, l.y, l.z), E = 3 * n + (i + 1) % 3, l.fromBufferAttribute(v, E), h.push(l.x, l.y, l.z)
        }
        this.addAttribute("position", new xt(h, 3))
    }

    function Pe(t, e, n) {
        St.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: n
        }, this.fromBufferGeometry(new Ce(t, e, n)), this.mergeVertices()
    }

    function Ce(t, e, n) {
        At.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: n
        };
        var i, r, o = [],
            a = [],
            s = [],
            c = e + 1;
        for (i = 0; i <= n; i++) {
            var u = i / n;
            for (r = 0; r <= e; r++) {
                var l = r / e,
                    h = t(l, u);
                a.push(h.x, h.y, h.z), s.push(l, u)
            }
        }
        for (i = 0; i < n; i++)
            for (r = 0; r < e; r++) {
                var d = i * c + r,
                    p = i * c + r + 1,
                    f = (i + 1) * c + r + 1,
                    m = (i + 1) * c + r;
                o.push(d, p, m), o.push(p, f, m)
            }
        this.setIndex(o), this.addAttribute("position", new xt(a, 3)), this.addAttribute("uv", new xt(s, 2)), this.computeVertexNormals()
    }

    function Ie(t, e, n, i) {
        St.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: i
        }, this.fromBufferGeometry(new Be(t, e, n, i)), this.mergeVertices()
    }

    function Be(t, e, i, r) {
        function o(t, e, n, i) {
            var r, o, a = Math.pow(2, i),
                c = [];
            for (r = 0; r <= a; r++) {
                c[r] = [];
                var u = t.clone().lerp(n, r / a),
                    l = e.clone().lerp(n, r / a),
                    h = a - r;
                for (o = 0; o <= h; o++) c[r][o] = 0 === o && r === a ? u : u.clone().lerp(l, o / h)
            }
            for (r = 0; r < a; r++)
                for (o = 0; o < 2 * (a - r) - 1; o++) {
                    var d = Math.floor(o / 2);
                    o % 2 == 0 ? (s(c[r][d + 1]), s(c[r + 1][d]), s(c[r][d])) : (s(c[r][d + 1]), s(c[r + 1][d + 1]), s(c[r + 1][d]))
                }
        }

        function a() {
            for (var t = 0; t < m.length; t += 6) {
                var e = m[t + 0],
                    n = m[t + 2],
                    i = m[t + 4],
                    r = Math.max(e, n, i),
                    o = Math.min(e, n, i);
                r > .9 && o < .1 && (e < .2 && (m[t + 0] += 1), n < .2 && (m[t + 2] += 1), i < .2 && (m[t + 4] += 1))
            }
        }

        function s(t) {
            f.push(t.x, t.y, t.z)
        }

        function u(e, n) {
            var i = 3 * e;
            n.x = t[i + 0], n.y = t[i + 1], n.z = t[i + 2]
        }

        function l() {
            for (var t = new c, e = new c, i = new c, r = new c, o = new n, a = new n, s = new n, u = 0, l = 0; u < f.length; u += 9, l += 6) {
                t.set(f[u + 0], f[u + 1], f[u + 2]), e.set(f[u + 3], f[u + 4], f[u + 5]), i.set(f[u + 6], f[u + 7], f[u + 8]), o.set(m[l + 0], m[l + 1]), a.set(m[l + 2], m[l + 3]), s.set(m[l + 4], m[l + 5]), r.copy(t).add(e).add(i).divideScalar(3);
                var p = d(r);
                h(o, l + 0, t, p), h(a, l + 2, e, p), h(s, l + 4, i, p)
            }
        }

        function h(t, e, n, i) {
            i < 0 && 1 === t.x && (m[e] = t.x - 1), 0 === n.x && 0 === n.z && (m[e] = i / 2 / Math.PI + .5)
        }

        function d(t) {
            return Math.atan2(t.z, -t.x)
        }

        function p(t) {
            return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
        }
        At.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: r
        }, i = i || 1, r = r || 0;
        var f = [],
            m = [];
        ! function(t) {
            for (var n = new c, i = new c, r = new c, a = 0; a < e.length; a += 3) u(e[a + 0], n), u(e[a + 1], i), u(e[a + 2], r), o(n, i, r, t)
        }(r),
        function(t) {
            for (var e = new c, n = 0; n < f.length; n += 3) e.x = f[n + 0], e.y = f[n + 1], e.z = f[n + 2], e.normalize().multiplyScalar(t), f[n + 0] = e.x, f[n + 1] = e.y, f[n + 2] = e.z
        }(i),
        function() {
            for (var t = new c, e = 0; e < f.length; e += 3) {
                t.x = f[e + 0], t.y = f[e + 1], t.z = f[e + 2];
                var n = d(t) / 2 / Math.PI + .5,
                    i = p(t) / Math.PI + .5;
                m.push(n, 1 - i)
            }
            l(), a()
        }(), this.addAttribute("position", new xt(f, 3)), this.addAttribute("normal", new xt(f.slice(), 3)), this.addAttribute("uv", new xt(m, 2)), this.normalizeNormals()
    }

    function Oe(t, e) {
        St.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Ne(t, e)), this.mergeVertices()
    }

    function Ne(t, e) {
        var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
            i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        Be.call(this, n, i, t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Ue(t, e) {
        St.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new De(t, e)), this.mergeVertices()
    }

    function De(t, e) {
        var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
            i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        Be.call(this, n, i, t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Fe(t, e) {
        St.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new ze(t, e)), this.mergeVertices()
    }

    function ze(t, e) {
        var n = (1 + Math.sqrt(5)) / 2,
            i = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1],
            r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        Be.call(this, i, r, t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Ge(t, e) {
        St.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new ke(t, e)), this.mergeVertices()
    }

    function ke(t, e) {
        var n = (1 + Math.sqrt(5)) / 2,
            i = 1 / n,
            r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i],
            o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        Be.call(this, r, o, t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function He(t, e, n, i, r, o) {
        St.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: i,
            closed: r
        }, void 0 !== o && console.warn("THREE.TubeGeometry: taper has been removed.");
        var a = new Ve(t, e, n, i, r);
        this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals, this.fromBufferGeometry(a), this.mergeVertices()
    }

    function Ve(t, e, i, r, o) {
        function a(n) {
            var o = t.getPointAt(n / e),
                a = l.normals[n],
                s = l.binormals[n];
            for (d = 0; d <= r; d++) {
                var c = d / r * Math.PI * 2,
                    u = Math.sin(c),
                    h = -Math.cos(c);
                f.x = h * a.x + u * s.x, f.y = h * a.y + u * s.y, f.z = h * a.z + u * s.z, f.normalize(), v.push(f.x, f.y, f.z), p.x = o.x + i * f.x, p.y = o.y + i * f.y, p.z = o.z + i * f.z, g.push(p.x, p.y, p.z)
            }
        }

        function s() {
            for (d = 1; d <= e; d++)
                for (h = 1; h <= r; h++) {
                    var t = (r + 1) * (d - 1) + (h - 1),
                        n = (r + 1) * d + (h - 1),
                        i = (r + 1) * d + h,
                        o = (r + 1) * (d - 1) + h;
                    _.push(t, n, o), _.push(n, i, o)
                }
        }

        function u() {
            for (h = 0; h <= e; h++)
                for (d = 0; d <= r; d++) m.x = h / e, m.y = d / r, y.push(m.x, m.y)
        }
        At.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: r,
            closed: o
        }, e = e || 64, i = i || 1, r = r || 8, o = o || !1;
        var l = t.computeFrenetFrames(e, o);
        this.tangents = l.tangents, this.normals = l.normals, this.binormals = l.binormals;
        var h, d, p = new c,
            f = new c,
            m = new n,
            g = [],
            v = [],
            y = [],
            _ = [];
        ! function() {
            for (h = 0; h < e; h++) a(h);
            a(!1 === o ? e : 0), u(), s()
        }(), this.setIndex(_), this.addAttribute("position", new xt(g, 3)), this.addAttribute("normal", new xt(v, 3)), this.addAttribute("uv", new xt(y, 2))
    }

    function je(t, e, n, i, r, o, a) {
        St.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: r,
            q: o
        }, void 0 !== a && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new We(t, e, n, i, r, o)), this.mergeVertices()
    }

    function We(t, e, i, r, o, a) {
        function s(t, e, n, i, r) {
            var o = Math.cos(t),
                a = Math.sin(t),
                s = n / e * t,
                c = Math.cos(s);
            r.x = i * (2 + c) * .5 * o, r.y = i * (2 + c) * a * .5, r.z = i * Math.sin(s) * .5
        }
        At.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: r,
            p: o,
            q: a
        }, t = t || 100, e = e || 40, i = Math.floor(i) || 64, r = Math.floor(r) || 8, o = o || 2, a = a || 3;
        var u, l, h = [],
            d = [],
            p = [],
            f = [],
            m = new c,
            g = new c,
            v = (new n, new c),
            y = new c,
            _ = new c,
            b = new c,
            x = new c;
        for (u = 0; u <= i; ++u) {
            var w = u / i * o * Math.PI * 2;
            for (s(w, o, a, t, v), s(w + .01, o, a, t, y), b.subVectors(y, v), x.addVectors(y, v), _.crossVectors(b, x), x.crossVectors(_, b), _.normalize(), x.normalize(), l = 0; l <= r; ++l) {
                var M = l / r * Math.PI * 2,
                    E = -e * Math.cos(M),
                    T = e * Math.sin(M);
                m.x = v.x + (E * x.x + T * _.x), m.y = v.y + (E * x.y + T * _.y), m.z = v.z + (E * x.z + T * _.z), d.push(m.x, m.y, m.z), g.subVectors(m, v).normalize(), p.push(g.x, g.y, g.z), f.push(u / i), f.push(l / r)
            }
        }
        for (l = 1; l <= i; l++)
            for (u = 1; u <= r; u++) {
                var S = (r + 1) * (l - 1) + (u - 1),
                    A = (r + 1) * l + (u - 1),
                    L = (r + 1) * l + u,
                    R = (r + 1) * (l - 1) + u;
                h.push(S, A, R), h.push(A, L, R)
            }
        this.setIndex(h), this.addAttribute("position", new xt(d, 3)), this.addAttribute("normal", new xt(p, 3)), this.addAttribute("uv", new xt(f, 2))
    }

    function Xe(t, e, n, i, r) {
        St.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        }, this.fromBufferGeometry(new qe(t, e, n, i, r))
    }

    function qe(t, e, n, i, r) {
        At.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        }, t = t || 100, e = e || 40, n = Math.floor(n) || 8, i = Math.floor(i) || 6, r = r || 2 * Math.PI;
        var o, a, s = [],
            u = [],
            l = [],
            h = [],
            d = new c,
            p = new c,
            f = new c;
        for (o = 0; o <= n; o++)
            for (a = 0; a <= i; a++) {
                var m = a / i * r,
                    g = o / n * Math.PI * 2;
                p.x = (t + e * Math.cos(g)) * Math.cos(m), p.y = (t + e * Math.cos(g)) * Math.sin(m), p.z = e * Math.sin(g), u.push(p.x, p.y, p.z), d.x = t * Math.cos(m), d.y = t * Math.sin(m), f.subVectors(p, d).normalize(), l.push(f.x, f.y, f.z), h.push(a / i), h.push(o / n)
            }
        for (o = 1; o <= n; o++)
            for (a = 1; a <= i; a++) {
                var v = (i + 1) * o + a - 1,
                    y = (i + 1) * (o - 1) + a - 1,
                    _ = (i + 1) * (o - 1) + a,
                    b = (i + 1) * o + a;
                s.push(v, y, b), s.push(y, _, b)
            }
        this.setIndex(s), this.addAttribute("position", new xt(u, 3)), this.addAttribute("normal", new xt(l, 3)), this.addAttribute("uv", new xt(h, 2))
    }

    function Ye(t, e) {
        if (void 0 === t) return void(t = []);
        St.call(this), this.type = "ExtrudeGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), this.computeFaceNormals()
    }

    function Ze(t, e) {
        e = e || {};
        var n = e.font;
        if (!1 === (n && n.isFont)) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new St;
        var i = n.generateShapes(t, e.size, e.curveSegments);
        e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Ye.call(this, i, e), this.type = "TextGeometry"
    }

    function Je(t, e, n, i, r, o, a) {
        St.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: o,
            thetaLength: a
        }, this.fromBufferGeometry(new Qe(t, e, n, i, r, o, a))
    }

    function Qe(t, e, n, i, r, o, a) {
        At.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: o,
            thetaLength: a
        }, t = t || 50, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : Math.PI;
        var s, u, l = o + a,
            h = 0,
            d = [],
            p = new c,
            f = new c,
            m = [],
            g = [],
            v = [],
            y = [];
        for (u = 0; u <= n; u++) {
            var _ = [],
                b = u / n;
            for (s = 0; s <= e; s++) {
                var x = s / e;
                p.x = -t * Math.cos(i + x * r) * Math.sin(o + b * a), p.y = t * Math.cos(o + b * a), p.z = t * Math.sin(i + x * r) * Math.sin(o + b * a), g.push(p.x, p.y, p.z), f.set(p.x, p.y, p.z).normalize(), v.push(f.x, f.y, f.z), y.push(x, 1 - b), _.push(h++)
            }
            d.push(_)
        }
        for (u = 0; u < n; u++)
            for (s = 0; s < e; s++) {
                var w = d[u][s + 1],
                    M = d[u][s],
                    E = d[u + 1][s],
                    T = d[u + 1][s + 1];
                (0 !== u || o > 0) && m.push(w, M, T), (u !== n - 1 || l < Math.PI) && m.push(M, E, T)
            }
        this.setIndex(m), this.addAttribute("position", new xt(g, 3)), this.addAttribute("normal", new xt(v, 3)), this.addAttribute("uv", new xt(y, 2))
    }

    function Ke(t, e, n, i, r, o) {
        St.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: r,
            thetaLength: o
        }, this.fromBufferGeometry(new $e(t, e, n, i, r, o))
    }

    function $e(t, e, i, r, o, a) {
        At.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: r,
            thetaStart: o,
            thetaLength: a
        }, t = t || 20, e = e || 50, o = void 0 !== o ? o : 0, a = void 0 !== a ? a : 2 * Math.PI, i = void 0 !== i ? Math.max(3, i) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
        var s, u, l, h = [],
            d = [],
            p = [],
            f = [],
            m = t,
            g = (e - t) / r,
            v = new c,
            y = new n;
        for (u = 0; u <= r; u++) {
            for (l = 0; l <= i; l++) s = o + l / i * a, v.x = m * Math.cos(s), v.y = m * Math.sin(s), d.push(v.x, v.y, v.z), p.push(0, 0, 1), y.x = (v.x / e + 1) / 2, y.y = (v.y / e + 1) / 2, f.push(y.x, y.y);
            m += g
        }
        for (u = 0; u < r; u++) {
            var _ = u * (i + 1);
            for (l = 0; l < i; l++) {
                s = l + _;
                var b = s,
                    x = s + i + 1,
                    w = s + i + 2,
                    M = s + 1;
                h.push(b, x, M), h.push(x, w, M)
            }
        }
        this.setIndex(h), this.addAttribute("position", new xt(d, 3)), this.addAttribute("normal", new xt(p, 3)), this.addAttribute("uv", new xt(f, 2))
    }

    function tn(t, e, n, i) {
        St.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: i
        }, this.fromBufferGeometry(new en(t, e, n, i)), this.mergeVertices()
    }

    function en(t, e, i, r) {
        At.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: r
        }, e = Math.floor(e) || 12, i = i || 0, r = r || 2 * Math.PI, r = $a.clamp(r, 0, 2 * Math.PI);
        var o, a, s, u = [],
            l = [],
            h = [],
            d = 1 / e,
            p = new c,
            f = new n;
        for (a = 0; a <= e; a++) {
            var m = i + a * d * r,
                g = Math.sin(m),
                v = Math.cos(m);
            for (s = 0; s <= t.length - 1; s++) p.x = t[s].x * g, p.y = t[s].y, p.z = t[s].x * v, l.push(p.x, p.y, p.z), f.x = a / e, f.y = s / (t.length - 1), h.push(f.x, f.y)
        }
        for (a = 0; a < e; a++)
            for (s = 0; s < t.length - 1; s++) {
                o = s + a * t.length;
                var y = o,
                    _ = o + t.length,
                    b = o + t.length + 1,
                    x = o + 1;
                u.push(y, _, x), u.push(_, b, x)
            }
        if (this.setIndex(u), this.addAttribute("position", new xt(l, 3)), this.addAttribute("uv", new xt(h, 2)), this.computeVertexNormals(), r === 2 * Math.PI) {
            var w = this.attributes.normal.array,
                M = new c,
                E = new c,
                T = new c;
            for (o = e * t.length * 3, a = 0, s = 0; a < t.length; a++, s += 3) M.x = w[s + 0], M.y = w[s + 1], M.z = w[s + 2], E.x = w[o + s + 0], E.y = w[o + s + 1], E.z = w[o + s + 2], T.addVectors(M, E).normalize(), w[s + 0] = w[o + s + 0] = T.x, w[s + 1] = w[o + s + 1] = T.y, w[s + 2] = w[o + s + 2] = T.z
        }
    }

    function nn(t, e) {
        St.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
            shapes: t,
            curveSegments: e
        }, this.fromBufferGeometry(new rn(t, e)), this.mergeVertices()
    }

    function rn(t, e) {
        function n(t) {
            var n, s, u, l = r.length / 3,
                h = t.extractPoints(e),
                d = h.shape,
                p = h.holes;
            if (!1 === ms.isClockWise(d))
                for (d = d.reverse(), n = 0, s = p.length; n < s; n++) u = p[n], !0 === ms.isClockWise(u) && (p[n] = u.reverse());
            var f = ms.triangulateShape(d, p);
            for (n = 0, s = p.length; n < s; n++) u = p[n], d = d.concat(u);
            for (n = 0, s = d.length; n < s; n++) {
                var m = d[n];
                r.push(m.x, m.y, 0), o.push(0, 0, 1), a.push(m.x, m.y)
            }
            for (n = 0, s = f.length; n < s; n++) {
                var g = f[n],
                    v = g[0] + l,
                    y = g[1] + l,
                    _ = g[2] + l;
                i.push(v, y, _), c += 3
            }
        }
        At.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
        }, e = e || 12;
        var i = [],
            r = [],
            o = [],
            a = [],
            s = 0,
            c = 0;
        if (!1 === Array.isArray(t)) n(t);
        else
            for (var u = 0; u < t.length; u++) n(t[u]), this.addGroup(s, c, u), s += c, c = 0;
        this.setIndex(i), this.addAttribute("position", new xt(r, 3)), this.addAttribute("normal", new xt(o, 3)), this.addAttribute("uv", new xt(a, 2))
    }

    function on(t, e) {
        function n(t, e) {
            return t - e
        }
        At.call(this), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: e
        }, e = void 0 !== e ? e : 1;
        var i, r, o = [],
            a = Math.cos($a.DEG2RAD * e),
            s = [0, 0],
            c = {},
            u = ["a", "b", "c"];
        t.isBufferGeometry ? (r = new St, r.fromBufferGeometry(t)) : r = t.clone(), r.mergeVertices(), r.computeFaceNormals();
        for (var l = r.vertices, h = r.faces, d = 0, p = h.length; d < p; d++)
            for (var f = h[d], m = 0; m < 3; m++) s[0] = f[u[m]], s[1] = f[u[(m + 1) % 3]], s.sort(n), i = s.toString(), void 0 === c[i] ? c[i] = {
                index1: s[0],
                index2: s[1],
                face1: d,
                face2: void 0
            } : c[i].face2 = d;
        for (i in c) {
            var g = c[i];
            if (void 0 === g.face2 || h[g.face1].normal.dot(h[g.face2].normal) <= a) {
                var v = l[g.index1];
                o.push(v.x, v.y, v.z), v = l[g.index2], o.push(v.x, v.y, v.z)
            }
        }
        this.addAttribute("position", new xt(o, 3))
    }

    function an(t, e, n, i, r, o, a, s) {
        St.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: i,
            heightSegments: r,
            openEnded: o,
            thetaStart: a,
            thetaLength: s
        }, this.fromBufferGeometry(new sn(t, e, n, i, r, o, a, s)), this.mergeVertices()
    }

    function sn(t, e, i, r, o, a, s, u) {
        function l(i) {
            var o, a, l, v = new n,
                b = new c,
                x = 0,
                w = !0 === i ? t : e,
                M = !0 === i ? 1 : -1;
            for (a = g, o = 1; o <= r; o++) p.push(0, y * M, 0), f.push(0, M, 0), m.push(.5, .5), g++;
            for (l = g, o = 0; o <= r; o++) {
                var E = o / r,
                    T = E * u + s,
                    S = Math.cos(T),
                    A = Math.sin(T);
                b.x = w * A, b.y = y * M, b.z = w * S, p.push(b.x, b.y, b.z), f.push(0, M, 0), v.x = .5 * S + .5, v.y = .5 * A * M + .5, m.push(v.x, v.y), g++
            }
            for (o = 0; o < r; o++) {
                var L = a + o,
                    R = l + o;
                !0 === i ? d.push(R, R + 1, L) : d.push(R + 1, R, L), x += 3
            }
            h.addGroup(_, x, !0 === i ? 1 : 2), _ += x
        }
        At.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: r,
            heightSegments: o,
            openEnded: a,
            thetaStart: s,
            thetaLength: u
        };
        var h = this;
        t = void 0 !== t ? t : 20, e = void 0 !== e ? e : 20, i = void 0 !== i ? i : 100, r = Math.floor(r) || 8, o = Math.floor(o) || 1, a = void 0 !== a && a, s = void 0 !== s ? s : 0, u = void 0 !== u ? u : 2 * Math.PI;
        var d = [],
            p = [],
            f = [],
            m = [],
            g = 0,
            v = [],
            y = i / 2,
            _ = 0;
        ! function() {
            var n, a, l = new c,
                b = new c,
                x = 0,
                w = (e - t) / i;
            for (a = 0; a <= o; a++) {
                var M = [],
                    E = a / o,
                    T = E * (e - t) + t;
                for (n = 0; n <= r; n++) {
                    var S = n / r,
                        A = S * u + s,
                        L = Math.sin(A),
                        R = Math.cos(A);
                    b.x = T * L, b.y = -E * i + y, b.z = T * R, p.push(b.x, b.y, b.z), l.set(L, w, R).normalize(), f.push(l.x, l.y, l.z), m.push(S, 1 - E), M.push(g++)
                }
                v.push(M)
            }
            for (n = 0; n < r; n++)
                for (a = 0; a < o; a++) {
                    var P = v[a][n],
                        C = v[a + 1][n],
                        I = v[a + 1][n + 1],
                        B = v[a][n + 1];
                    d.push(P, C, B), d.push(C, I, B), x += 6
                }
            h.addGroup(_, x, 0), _ += x
        }(), !1 === a && (t > 0 && l(!0), e > 0 && l(!1)), this.setIndex(d), this.addAttribute("position", new xt(p, 3)), this.addAttribute("normal", new xt(f, 3)), this.addAttribute("uv", new xt(m, 2))
    }

    function cn(t, e, n, i, r, o, a) {
        an.call(this, 0, t, e, n, i, r, o, a), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: o,
            thetaLength: a
        }
    }

    function un(t, e, n, i, r, o, a) {
        sn.call(this, 0, t, e, n, i, r, o, a), this.type = "ConeBufferGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: i,
            openEnded: r,
            thetaStart: o,
            thetaLength: a
        }
    }

    function ln(t, e, n, i) {
        St.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: i
        }, this.fromBufferGeometry(new hn(t, e, n, i))
    }

    function hn(t, e, i, r) {
        At.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: r
        }, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, i = void 0 !== i ? i : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var o, a, s = [],
            u = [],
            l = [],
            h = [],
            d = new c,
            p = new n;
        for (u.push(0, 0, 0), l.push(0, 0, 1), h.push(.5, .5), a = 0, o = 3; a <= e; a++, o += 3) {
            var f = i + a / e * r;
            d.x = t * Math.cos(f), d.y = t * Math.sin(f), u.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (u[o] / t + 1) / 2, p.y = (u[o + 1] / t + 1) / 2, h.push(p.x, p.y)
        }
        for (o = 1; o <= e; o++) s.push(o, o + 1, 0);
        this.setIndex(s), this.addAttribute("position", new xt(u, 3)), this.addAttribute("normal", new xt(l, 3)), this.addAttribute("uv", new xt(h, 2))
    }

    function dn() {
        Q.call(this, {
            uniforms: as.merge([us.lights, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: ss.shadow_vert,
            fragmentShader: ss.shadow_frag
        }), this.lights = !0, this.transparent = !0, Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(t) {
                    this.uniforms.opacity.value = t
                }
            }
        })
    }

    function pn(t) {
        Q.call(this, t), this.type = "RawShaderMaterial"
    }

    function fn(t) {
        this.uuid = $a.generateUUID(), this.type = "MultiMaterial", this.materials = Array.isArray(t) ? t : [], this.visible = !0
    }

    function mn(t) {
        J.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new W(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new W(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function gn(t) {
        mn.call(this), this.defines = {
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
    }

    function vn(t) {
        J.call(this), this.type = "MeshPhongMaterial", this.color = new W(16777215), this.specular = new W(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new W(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Go, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function yn(t) {
        vn.call(this), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
    }

    function _n(t) {
        J.call(this, t), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function bn(t) {
        J.call(this), this.type = "MeshLambertMaterial", this.color = new W(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new W(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Go, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    }

    function xn(t) {
        J.call(this), this.type = "LineDashedMaterial", this.color = new W(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.lights = !1, this.setValues(t)
    }

    function wn(t, e, n) {
        var i = this,
            r = !1,
            o = 0,
            a = 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
            a++, !1 === r && void 0 !== i.onStart && i.onStart(t, o, a), r = !0
        }, this.itemEnd = function(t) {
            o++, void 0 !== i.onProgress && i.onProgress(t, o, a), o === a && (r = !1, void 0 !== i.onLoad && i.onLoad())
        }, this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
        }
    }

    function Mn(t) {
        this.manager = void 0 !== t ? t : _s
    }

    function En(t) {
        this.manager = void 0 !== t ? t : _s, this._parser = null
    }

    function Tn(t) {
        this.manager = void 0 !== t ? t : _s, this._parser = null
    }

    function Sn(t) {
        this.manager = void 0 !== t ? t : _s
    }

    function An(t) {
        this.manager = void 0 !== t ? t : _s
    }

    function Ln(t) {
        this.manager = void 0 !== t ? t : _s
    }

    function Rn(t, e) {
        ct.call(this), this.type = "Light", this.color = new W(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    }

    function Pn(t, e, n) {
        Rn.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(ct.DefaultUp), this.updateMatrix(), this.groundColor = new W(e)
    }

    function Cn(t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new n(512, 512), this.map = null, this.matrix = new u
    }

    function In() {
        Cn.call(this, new Ot(50, 1, .5, 500))
    }

    function Bn(t, e, n, i, r, o) {
        Rn.call(this, t, e), this.type = "SpotLight", this.position.copy(ct.DefaultUp), this.updateMatrix(), this.target = new ct, Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== o ? o : 1, this.shadow = new In
    }

    function On(t, e, n, i) {
        Rn.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new Cn(new Ot(90, 1, .5, 500))
    }

    function Nn() {
        Cn.call(this, new Nt(-5, 5, 5, -5, .5, 500))
    }

    function Un(t, e) {
        Rn.call(this, t, e), this.type = "DirectionalLight", this.position.copy(ct.DefaultUp), this.updateMatrix(), this.target = new ct, this.shadow = new Nn
    }

    function Dn(t, e) {
        Rn.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    }

    function Fn(t, e, n, i) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n
    }

    function zn(t, e, n, i) {
        Fn.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }

    function Gn(t, e, n, i) {
        Fn.call(this, t, e, n, i)
    }

    function kn(t, e, n, i) {
        Fn.call(this, t, e, n, i)
    }

    function Hn(t, e, n, i) {
        if (void 0 === t) throw new Error("track name is undefined");
        if (void 0 === e || 0 === e.length) throw new Error("no keyframes in track named " + t);
        this.name = t, this.times = bs.convertArray(e, this.TimeBufferType),
            this.values = bs.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation), this.validate(), this.optimize()
    }

    function Vn(t, e, n, i) {
        Hn.call(this, t, e, n, i)
    }

    function jn(t, e, n, i) {
        Fn.call(this, t, e, n, i)
    }

    function Wn(t, e, n, i) {
        Hn.call(this, t, e, n, i)
    }

    function Xn(t, e, n, i) {
        Hn.call(this, t, e, n, i)
    }

    function qn(t, e, n, i) {
        Hn.call(this, t, e, n, i)
    }

    function Yn(t, e, n) {
        Hn.call(this, t, e, n)
    }

    function Zn(t, e, n, i) {
        Hn.call(this, t, e, n, i)
    }

    function Jn(t, e, n, i) {
        Hn.apply(this, arguments)
    }

    function Qn(t, e, n) {
        this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = $a.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
    }

    function Kn(t) {
        this.manager = void 0 !== t ? t : _s, this.textures = {}
    }

    function $n(t) {
        this.manager = void 0 !== t ? t : _s
    }

    function ti() {
        this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
    }

    function ei(t) {
        "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : _s, this.withCredentials = !1
    }

    function ni(t) {
        this.manager = void 0 !== t ? t : _s, this.texturePath = ""
    }

    function ii(t, e, n, i, r) {
        var o = .5 * (i - e),
            a = .5 * (r - n),
            s = t * t;
        return (2 * n - 2 * i + o + a) * (t * s) + (-3 * n + 3 * i - 2 * o - a) * s + o * t + n
    }

    function ri(t, e) {
        var n = 1 - t;
        return n * n * e
    }

    function oi(t, e) {
        return 2 * (1 - t) * t * e
    }

    function ai(t, e) {
        return t * t * e
    }

    function si(t, e, n, i) {
        return ri(t, e) + oi(t, n) + ai(t, i)
    }

    function ci(t, e) {
        var n = 1 - t;
        return n * n * n * e
    }

    function ui(t, e) {
        var n = 1 - t;
        return 3 * n * n * t * e
    }

    function li(t, e) {
        return 3 * (1 - t) * t * t * e
    }

    function hi(t, e) {
        return t * t * t * e
    }

    function di(t, e, n, i, r) {
        return ci(t, e) + ui(t, n) + li(t, i) + hi(t, r)
    }

    function pi() {}

    function fi(t, e) {
        this.v1 = t, this.v2 = e
    }

    function mi() {
        this.curves = [], this.autoClose = !1
    }

    function gi(t, e, n, i, r, o, a, s) {
        this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = o, this.aClockwise = a, this.aRotation = s || 0
    }

    function vi(t) {
        this.points = void 0 === t ? [] : t
    }

    function yi(t, e, n, i) {
        this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
    }

    function _i(t, e, n) {
        this.v0 = t, this.v1 = e, this.v2 = n
    }

    function bi(t) {
        mi.call(this), this.currentPoint = new n, t && this.fromPoints(t)
    }

    function xi() {
        bi.apply(this, arguments), this.holes = []
    }

    function wi() {
        this.subPaths = [], this.currentPath = null
    }

    function Mi(t) {
        this.data = t
    }

    function Ei(t) {
        this.manager = void 0 !== t ? t : _s
    }

    function Ti(t) {
        this.manager = void 0 !== t ? t : _s
    }

    function Si(t, e, n, i) {
        Rn.call(this, t, e), this.type = "RectAreaLight", this.position.set(0, 1, 0), this.updateMatrix(), this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
    }

    function Ai() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new Ot, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Ot, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }

    function Li(t, e, n) {
        ct.call(this), this.type = "CubeCamera";
        var i = new Ot(90, 1, t, e);
        i.up.set(0, -1, 0), i.lookAt(new c(1, 0, 0)), this.add(i);
        var r = new Ot(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new c(-1, 0, 0)), this.add(r);
        var o = new Ot(90, 1, t, e);
        o.up.set(0, 0, 1), o.lookAt(new c(0, 1, 0)), this.add(o);
        var s = new Ot(90, 1, t, e);
        s.up.set(0, 0, -1), s.lookAt(new c(0, -1, 0)), this.add(s);
        var u = new Ot(90, 1, t, e);
        u.up.set(0, -1, 0), u.lookAt(new c(0, 0, 1)), this.add(u);
        var l = new Ot(90, 1, t, e);
        l.up.set(0, -1, 0), l.lookAt(new c(0, 0, -1)), this.add(l);
        var h = {
            format: Ma,
            magFilter: sa,
            minFilter: sa
        };
        this.renderTarget = new a(n, n, h), this.updateCubeMap = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var n = this.renderTarget,
                a = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, n.activeCubeFace = 0, t.render(e, i, n), n.activeCubeFace = 1, t.render(e, r, n), n.activeCubeFace = 2, t.render(e, o, n), n.activeCubeFace = 3, t.render(e, s, n), n.activeCubeFace = 4, t.render(e, u, n), n.texture.generateMipmaps = a, n.activeCubeFace = 5, t.render(e, l, n), t.setRenderTarget(null)
        }
    }

    function Ri() {
        ct.call(this), this.type = "AudioListener", this.context = Es.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }

    function Pi(t) {
        ct.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function Ci(t) {
        Pi.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function Ii(t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    }

    function Bi(t, e, n) {
        this.binding = t, this.valueSize = n;
        var i, r = Float64Array;
        switch (e) {
            case "quaternion":
                i = this._slerp;
                break;
            case "string":
            case "bool":
                r = Array, i = this._select;
                break;
            default:
                i = this._lerp
        }
        this.buffer = new r(4 * n), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    }

    function Oi(t, e, n) {
        this.path = e, this.parsedPath = n || Oi.parseTrackName(e), this.node = Oi.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
    }

    function Ni(t) {
        this.uuid = $a.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var e = {};
        this._indicesByUUID = e;
        for (var n = 0, i = arguments.length; n !== i; ++n) e[arguments[n].uuid] = n;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var r = this;
        this.stats = {
            objects: {
                get total() {
                    return r._objects.length
                },
                get inUse() {
                    return this.total - r.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return r._bindings.length
            }
        }
    }

    function Ui(t, e, n) {
        this._mixer = t, this._clip = e, this._localRoot = n || null;
        for (var i = e.tracks, r = i.length, o = new Array(r), a = {
                endingStart: Ga,
                endingEnd: Ga
            }, s = 0; s !== r; ++s) {
            var c = i[s].createInterpolant(null);
            o[s] = c, c.settings = a
        }
        this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = za, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }

    function Di(t) {
        this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }

    function Fi(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
    }

    function zi() {
        At.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function Gi(t, e, n, i) {
        this.uuid = $a.generateUUID(), this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
    }

    function ki(t, e) {
        this.uuid = $a.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function() {}, this.version = 0
    }

    function Hi(t, e, n) {
        ki.call(this, t, e), this.meshPerAttribute = n || 1
    }

    function Vi(t, e, n) {
        pt.call(this, t, e), this.meshPerAttribute = n || 1
    }

    function ji(t, e, n, i) {
        this.ray = new ot(t, e), this.near = n || 0, this.far = i || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }

    function Wi(t, e) {
        return t.distance - e.distance
    }

    function Xi(t, e, n, i) {
        if (!1 !== t.visible && (t.raycast(e, n), !0 === i))
            for (var r = t.children, o = 0, a = r.length; o < a; o++) Xi(r[o], e, n, !0)
    }

    function qi(t) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }

    function Yi(t, e, n) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this
    }

    function Zi(t, e, n) {
        return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== n ? n : 0, this
    }

    function Ji(t, e) {
        Lt.call(this, t, e), this.animationsMap = {}, this.animationsList = [];
        var n = this.geometry.morphTargets.length,
            i = n - 1,
            r = n / 1;
        this.createAnimation("__default", 0, i, r), this.setAnimationWeight("__default", 1)
    }

    function Qi(t) {
        ct.call(this), this.material = t, this.render = function(t) {}
    }

    function Ki(t, e, n, i) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== n ? n : 16711680,
            o = void 0 !== i ? i : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry ? a = 3 * s.faces.length : s && s.isBufferGeometry && (a = s.attributes.normal.count);
        var c = new At,
            u = new xt(2 * a * 3, 3);
        c.addAttribute("position", u), xe.call(this, c, new _e({
            color: r,
            linewidth: o
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function $i(t) {
        ct.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
        for (var e = new At, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, r = 1; i < 32; i++, r++) {
            var o = i / 32 * Math.PI * 2,
                a = r / 32 * Math.PI * 2;
            n.push(Math.cos(o), Math.sin(o), 1, Math.cos(a), Math.sin(a), 1)
        }
        e.addAttribute("position", new xt(n, 3));
        var s = new _e({
            fog: !1
        });
        this.cone = new xe(e, s), this.add(this.cone), this.update()
    }

    function tr(t) {
        this.bones = this.getBoneList(t);
        for (var e = new At, n = [], i = [], r = new W(0, 0, 1), o = new W(0, 1, 0), a = 0; a < this.bones.length; a++) {
            var s = this.bones[a];
            s.parent && s.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), i.push(r.r, r.g, r.b), i.push(o.r, o.g, o.b))
        }
        e.addAttribute("position", new xt(n, 3)), e.addAttribute("color", new xt(i, 3));
        var c = new _e({
            vertexColors: co,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        xe.call(this, e, c), this.root = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function er(t, e) {
        this.light = t, this.light.updateMatrixWorld();
        var n = new Qe(e, 4, 2),
            i = new dt({
                wireframe: !0,
                fog: !1
            });
        i.color.copy(this.light.color).multiplyScalar(this.light.intensity), Lt.call(this, n, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
    }

    function nr(t) {
        ct.call(this), this.light = t, this.light.updateMatrixWorld();
        var e = new dt({
                color: t.color,
                fog: !1
            }),
            n = new dt({
                color: t.color,
                fog: !1,
                wireframe: !0
            }),
            i = new At;
        i.addAttribute("position", new pt(new Float32Array(18), 3)), this.add(new Lt(i, e)), this.add(new Lt(i, n)), this.update()
    }

    function ir(t, e) {
        ct.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
        var n = new De(e);
        n.rotateY(.5 * Math.PI);
        var i = new dt({
                vertexColors: co,
                wireframe: !0
            }),
            r = n.getAttribute("position"),
            o = new Float32Array(3 * r.count);
        n.addAttribute("color", new pt(o, 3)), this.add(new Lt(n, i)), this.update()
    }

    function rr(t, e, n, i) {
        t = t || 10, e = e || 10, n = new W(void 0 !== n ? n : 4473924), i = new W(void 0 !== i ? i : 8947848);
        for (var r = e / 2, o = t / e, a = t / 2, s = [], c = [], u = 0, l = 0, h = -a; u <= e; u++, h += o) {
            s.push(-a, 0, h, a, 0, h), s.push(h, 0, -a, h, 0, a);
            var d = u === r ? n : i;
            d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3
        }
        var p = new At;
        p.addAttribute("position", new xt(s, 3)), p.addAttribute("color", new xt(c, 3));
        var f = new _e({
            vertexColors: co
        });
        xe.call(this, p, f)
    }

    function or(t, e, n, i, r, o) {
        t = t || 10, e = e || 16, n = n || 8, i = i || 64, r = new W(void 0 !== r ? r : 4473924), o = new W(void 0 !== o ? o : 8947848);
        var a, s, c, u, l, h, d, p = [],
            f = [];
        for (u = 0; u <= e; u++) c = u / e * (2 * Math.PI), a = Math.sin(c) * t, s = Math.cos(c) * t, p.push(0, 0, 0), p.push(a, 0, s), d = 1 & u ? r : o, f.push(d.r, d.g, d.b), f.push(d.r, d.g, d.b);
        for (u = 0; u <= n; u++)
            for (d = 1 & u ? r : o, h = t - t / n * u, l = 0; l < i; l++) c = l / i * (2 * Math.PI), a = Math.sin(c) * h, s = Math.cos(c) * h, p.push(a, 0, s), f.push(d.r, d.g, d.b), c = (l + 1) / i * (2 * Math.PI), a = Math.sin(c) * h, s = Math.cos(c) * h, p.push(a, 0, s), f.push(d.r, d.g, d.b);
        var m = new At;
        m.addAttribute("position", new xt(p, 3)), m.addAttribute("color", new xt(f, 3));
        var g = new _e({
            vertexColors: co
        });
        xe.call(this, m, g)
    }

    function ar(t, e, n, i) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var r = void 0 !== n ? n : 16776960,
            o = void 0 !== i ? i : 1,
            a = 0,
            s = this.object.geometry;
        s && s.isGeometry ? a = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new At,
            u = new xt(2 * a * 3, 3);
        c.addAttribute("position", u), xe.call(this, c, new _e({
            color: r,
            linewidth: o
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function sr(t, e) {
        ct.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, void 0 === e && (e = 1);
        var n = new At;
        n.addAttribute("position", new xt([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
        var i = new _e({
            fog: !1
        });
        this.add(new be(n, i)), n = new At, n.addAttribute("position", new xt([0, 0, 0, 0, 0, 1], 3)), this.add(new be(n, i)), this.update()
    }

    function cr(t) {
        function e(t, e, i) {
            n(t, i), n(e, i)
        }

        function n(t, e) {
            o.push(0, 0, 0), a.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(o.length / 3 - 1)
        }
        var i = new At,
            r = new _e({
                color: 16777215,
                vertexColors: so
            }),
            o = [],
            a = [],
            s = {},
            c = new W(16755200),
            u = new W(16711680),
            l = new W(43775),
            h = new W(16777215),
            d = new W(3355443);
        e("n1", "n2", c), e("n2", "n4", c), e("n4", "n3", c), e("n3", "n1", c), e("f1", "f2", c), e("f2", "f4", c), e("f4", "f3", c), e("f3", "f1", c), e("n1", "f1", c), e("n2", "f2", c), e("n3", "f3", c), e("n4", "f4", c), e("p", "n1", u), e("p", "n2", u), e("p", "n3", u), e("p", "n4", u), e("u1", "u2", l), e("u2", "u3", l), e("u3", "u1", l), e("c", "t", h), e("p", "c", d), e("cn1", "cn2", d), e("cn3", "cn4", d), e("cf1", "cf2", d), e("cf3", "cf4", d), i.addAttribute("position", new xt(o, 3)), i.addAttribute("color", new xt(a, 3)), xe.call(this, i, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
    }

    function ur(t, e) {
        void 0 === e && (e = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
            i = new Float32Array(24),
            r = new At;
        r.setIndex(new pt(n, 1)), r.addAttribute("position", new pt(i, 3)), xe.call(this, r, new _e({
            color: e
        })), void 0 !== t && this.update(t)
    }

    function lr(t, e, n, i, r, o) {
        ct.call(this), void 0 === i && (i = 16776960), void 0 === n && (n = 1), void 0 === r && (r = .2 * n), void 0 === o && (o = .2 * r), void 0 === Ts && (Ts = new At, Ts.addAttribute("position", new xt([0, 0, 0, 0, 1, 0], 3)), Ss = new sn(0, .5, 1, 5, 1), Ss.translate(0, -.5, 0)), this.position.copy(e), this.line = new be(Ts, new _e({
            color: i
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Lt(Ss, new dt({
            color: i
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, o)
    }

    function hr(t) {
        t = t || 1;
        var e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
            n = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],
            i = new At;
        i.addAttribute("position", new xt(e, 3)), i.addAttribute("color", new xt(n, 3));
        var r = new _e({
            vertexColors: co
        });
        xe.call(this, i, r)
    }

    function dr() {
        function t(t, o, a, s) {
            e = t, n = a, i = -3 * t + 3 * o - 2 * a - s, r = 2 * t - 2 * o + a + s
        }
        var e = 0,
            n = 0,
            i = 0,
            r = 0;
        return {
            initCatmullRom: function(e, n, i, r, o) {
                t(n, i, o * (i - e), o * (r - n))
            },
            initNonuniformCatmullRom: function(e, n, i, r, o, a, s) {
                var c = (n - e) / o - (i - e) / (o + a) + (i - n) / a,
                    u = (i - n) / a - (r - n) / (a + s) + (r - i) / s;
                c *= a, u *= a, t(n, i, c, u)
            },
            calc: function(t) {
                var o = t * t;
                return e + n * t + i * o + r * (o * t)
            }
        }
    }

    function pr(t) {
        this.points = t || [], this.closed = !1
    }

    function fr(t, e, n, i) {
        this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
    }

    function mr(t, e, n) {
        this.v0 = t, this.v1 = e, this.v2 = n
    }

    function gr(t, e) {
        this.v1 = t, this.v2 = e
    }

    function vr(t, e, n, i, r, o) {
        gi.call(this, t, e, n, n, i, r, o)
    }

    function yr(t, e, n, i, r, o, a) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new ht(t, e, n, r, o, a)
    }

    function _r(t) {
        return console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial."), new fn(t)
    }

    function br(t, e) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Me(t, e)
    }

    function xr(t) {
        return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new fe(t)
    }

    function wr(t, e) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Me(t, e)
    }

    function Mr(t) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new we(t)
    }

    function Er(t) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new we(t)
    }

    function Tr(t) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new we(t)
    }

    function Sr(t, e, n) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new c(t, e, n)
    }

    function Ar(t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new pt(t, e).setDynamic(!0)
    }

    function Lr(t, e) {
        return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new ft(t, e)
    }

    function Rr(t, e) {
        return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new mt(t, e)
    }

    function Pr(t, e) {
        return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new gt(t, e)
    }

    function Cr(t, e) {
        return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new vt(t, e)
    }

    function Ir(t, e) {
        return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new yt(t, e)
    }

    function Br(t, e) {
        return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new _t(t, e)
    }

    function Or(t, e) {
        return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new bt(t, e)
    }

    function Nr(t, e) {
        return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new xt(t, e)
    }

    function Ur(t, e) {
        return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new wt(t, e)
    }

    function Dr(t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), pr.call(this, t), this.type = "catmullrom", this.closed = !0
    }

    function Fr(t) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), pr.call(this, t), this.type = "catmullrom"
    }

    function zr(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), pr.call(this, t), this.type = "catmullrom"
    }

    function Gr(t, e) {
        return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new ur(t, e)
    }

    function kr(t, e) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new xe(new on(t.geometry), new _e({
            color: void 0 !== e ? e : 16777215
        }))
    }

    function Hr(t, e) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new xe(new Re(t.geometry), new _e({
            color: void 0 !== e ? e : 16777215
        }))
    }

    function Vr(t) {
        return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new Mn(t)
    }

    function jr(t) {
        return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Tn(t)
    }

    function Wr() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
        }, this.unprojectVector = function(t, e) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
        }, this.pickingRay = function() {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }

    function Xr() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && function() {
        Object.assign = function(t) {
            if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (void 0 !== i && null !== i)
                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
            }
            return e
        }
    }(), e.prototype = {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners) return !1;
            var n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            if (void 0 !== this._listeners) {
                var n = this._listeners,
                    i = n[t];
                if (void 0 !== i) {
                    var r = i.indexOf(e); - 1 !== r && i.splice(r, 1)
                }
            }
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners,
                    n = e[t.type];
                if (void 0 !== n) {
                    t.target = this;
                    var i = [],
                        r = 0,
                        o = n.length;
                    for (r = 0; r < o; r++) i[r] = n[r];
                    for (r = 0; r < o; r++) i[r].call(this, t)
                }
            }
        }
    };
    var qr = "84",
        Yr = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        },
        Zr = 0,
        Jr = 1,
        Qr = 2,
        Kr = 0,
        $r = 1,
        to = 2,
        eo = 0,
        no = 1,
        io = 2,
        ro = 1,
        oo = 2,
        ao = 0,
        so = 1,
        co = 2,
        uo = 0,
        lo = 1,
        ho = 2,
        po = 3,
        fo = 4,
        mo = 5,
        go = 100,
        vo = 101,
        yo = 102,
        _o = 103,
        bo = 104,
        xo = 200,
        wo = 201,
        Mo = 202,
        Eo = 203,
        To = 204,
        So = 205,
        Ao = 206,
        Lo = 207,
        Ro = 208,
        Po = 209,
        Co = 210,
        Io = 0,
        Bo = 1,
        Oo = 2,
        No = 3,
        Uo = 4,
        Do = 5,
        Fo = 6,
        zo = 7,
        Go = 0,
        ko = 1,
        Ho = 2,
        Vo = 0,
        jo = 1,
        Wo = 2,
        Xo = 3,
        qo = 4,
        Yo = 301,
        Zo = 302,
        Jo = 303,
        Qo = 304,
        Ko = 305,
        $o = 306,
        ta = 307,
        ea = 1e3,
        na = 1001,
        ia = 1002,
        ra = 1003,
        oa = 1004,
        aa = 1005,
        sa = 1006,
        ca = 1007,
        ua = 1008,
        la = 1009,
        ha = 1010,
        da = 1011,
        pa = 1012,
        fa = 1013,
        ma = 1014,
        ga = 1015,
        va = 1016,
        ya = 1017,
        _a = 1018,
        ba = 1019,
        xa = 1020,
        wa = 1021,
        Ma = 1022,
        Ea = 1023,
        Ta = 1024,
        Sa = 1025,
        Aa = Ea,
        La = 1026,
        Ra = 1027,
        Pa = 2001,
        Ca = 2002,
        Ia = 2003,
        Ba = 2004,
        Oa = 2100,
        Na = 2101,
        Ua = 2102,
        Da = 2103,
        Fa = 2151,
        za = 2201,
        Ga = 2400,
        ka = 0,
        Ha = 1,
        Va = 2,
        ja = 3e3,
        Wa = 3001,
        Xa = 3007,
        qa = 3002,
        Ya = 3004,
        Za = 3005,
        Ja = 3006,
        Qa = 3200,
        Ka = 3201,
        $a = {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: 180 / Math.PI,
            generateUUID: function() {
                var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                    n = new Array(36),
                    i = 0;
                return function() {
                    for (var r = 0; r < 36; r++) 8 === r || 13 === r || 18 === r || 23 === r ? n[r] = "-" : 14 === r ? n[r] = "4" : (i <= 2 && (i = 33554432 + 16777216 * Math.random() | 0), t = 15 & i, i >>= 4, n[r] = e[19 === r ? 3 & t | 8 : t]);
                    return n.join("")
                }
            }(),
            clamp: function(t, e, n) {
                return Math.max(e, Math.min(n, t))
            },
            euclideanModulo: function(t, e) {
                return (t % e + e) % e
            },
            mapLinear: function(t, e, n, i, r) {
                return i + (t - e) * (r - i) / (n - e)
            },
            lerp: function(t, e, n) {
                return (1 - n) * t + n * e
            },
            smoothstep: function(t, e, n) {
                return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
            },
            smootherstep: function(t, e, n) {
                return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
            },
            randInt: function(t, e) {
                return t + Math.floor(Math.random() * (e - t + 1))
            },
            randFloat: function(t, e) {
                return t + Math.random() * (e - t)
            },
            randFloatSpread: function(t) {
                return t * (.5 - Math.random())
            },
            degToRad: function(t) {
                return t * $a.DEG2RAD
            },
            radToDeg: function(t) {
                return t * $a.RAD2DEG
            },
            isPowerOfTwo: function(t) {
                return 0 == (t & t - 1) && 0 !== t
            },
            nearestPowerOfTwo: function(t) {
                return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
            },
            nextPowerOfTwo: function(t) {
                return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, ++t
            }
        };
    n.prototype = {
        constructor: n,
        isVector2: !0,
        get width() {
            return this.x
        },
        set width(t) {
            this.x = t
        },
        get height() {
            return this.y
        },
        set height(t) {
            this.y = t
        },
        set: function(t, e) {
            return this.x = t, this.y = e, this
        },
        setScalar: function(t) {
            return this.x = t, this.y = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t, this.y *= t) : (this.x = 0, this.y = 0), this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        },
        clampScalar: function() {
            var t, e;
            return function(i, r) {
                return void 0 === t && (t = new n, e = new n), t.set(i, i), e.set(r, r), this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var n = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, n)) / n)
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                n = this.y - t.y;
            return e * e + n * n
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
        },
        rotateAround: function(t, e) {
            var n = Math.cos(e),
                i = Math.sin(e),
                r = this.x - t.x,
                o = this.y - t.y;
            return this.x = r * n - o * i + t.x, this.y = r * i + o * n + t.y, this
        }
    };
    var ts = 0;
    i.DEFAULT_IMAGE = void 0, i.DEFAULT_MAPPING = 300, i.prototype = {
        constructor: i,
        isTexture: !0,
        set needsUpdate(t) {
            !0 === t && this.version++
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function(t) {
            if (void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var e = {
                metadata: {
                    version: 4.4,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var n = this.image;
                void 0 === n.uuid && (n.uuid = $a.generateUUID()), void 0 === t.images[n.uuid] && (t.images[n.uuid] = {
                    uuid: n.uuid,
                    url: function(t) {
                        var e;
                        return void 0 !== t.toDataURL ? e = t : (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)), e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
                    }(n)
                }), e.image = n.uuid
            }
            return t.textures[this.uuid] = e, e
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (300 === this.mapping) {
                if (t.multiply(this.repeat), t.add(this.offset), t.x < 0 || t.x > 1) switch (this.wrapS) {
                    case ea:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case na:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case ia:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
                if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                    case ea:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case na:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case ia:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    }, Object.assign(i.prototype, e.prototype), r.prototype = {
        constructor: r,
        isVector4: !0,
        set: function(t, e, n, i) {
            return this.x = t, this.y = e, this.z = n, this.w = i, this
        },
        setScalar: function(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setW: function(t) {
            return this.w = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t, this.w *= t) : (this.x = 0, this.y = 0, this.z = 0, this.w = 0), this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = this.w,
                o = t.elements;
            return this.x = o[0] * e + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * e + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * e + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * e + o[7] * n + o[11] * i + o[15] * r, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e, n, i, r, o = t.elements,
                a = o[0],
                s = o[4],
                c = o[8],
                u = o[1],
                l = o[5],
                h = o[9],
                d = o[2],
                p = o[6],
                f = o[10];
            if (Math.abs(s - u) < .01 && Math.abs(c - d) < .01 && Math.abs(h - p) < .01) {
                if (Math.abs(s + u) < .1 && Math.abs(c + d) < .1 && Math.abs(h + p) < .1 && Math.abs(a + l + f - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                var m = (a + 1) / 2,
                    g = (l + 1) / 2,
                    v = (f + 1) / 2,
                    y = (s + u) / 4,
                    _ = (c + d) / 4,
                    b = (h + p) / 4;
                return m > g && m > v ? m < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(m), i = y / n, r = _ / n) : g > v ? g < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(g), n = y / i, r = b / i) : v < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = _ / r, i = b / r), this.set(n, i, r, e), this
            }
            var x = Math.sqrt((p - h) * (p - h) + (c - d) * (c - d) + (u - s) * (u - s));
            return Math.abs(x) < .001 && (x = 1), this.x = (p - h) / x, this.y = (c - d) / x, this.z = (u - s) / x, this.w = Math.acos((a + l + f - 1) / 2), this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)),
                this
        },
        clampScalar: function() {
            var t, e;
            return function(n, i) {
                return void 0 === t && (t = new r, e = new r), t.set(n, n, n, n), e.set(i, i, i, i), this.clamp(t, e)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
    }, o.prototype = {
        constructor: o,
        isWebGLRenderTarget: !0,
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, Object.assign(o.prototype, e.prototype), a.prototype = Object.create(o.prototype), a.prototype.constructor = a, a.prototype.isWebGLRenderTargetCube = !0, s.prototype = {
        constructor: s,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t, this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(t) {
            this._w = t, this.onChangeCallback()
        },
        set: function(t, e, n, i) {
            return this._x = t, this._y = e, this._z = n, this._w = i, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        },
        setFromEuler: function(t, e) {
            if (!1 === (t && t.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var n = Math.cos(t._x / 2),
                i = Math.cos(t._y / 2),
                r = Math.cos(t._z / 2),
                o = Math.sin(t._x / 2),
                a = Math.sin(t._y / 2),
                s = Math.sin(t._z / 2),
                c = t.order;
            return "XYZ" === c ? (this._x = o * i * r + n * a * s, this._y = n * a * r - o * i * s, this._z = n * i * s + o * a * r, this._w = n * i * r - o * a * s) : "YXZ" === c ? (this._x = o * i * r + n * a * s, this._y = n * a * r - o * i * s, this._z = n * i * s - o * a * r, this._w = n * i * r + o * a * s) : "ZXY" === c ? (this._x = o * i * r - n * a * s, this._y = n * a * r + o * i * s, this._z = n * i * s + o * a * r, this._w = n * i * r - o * a * s) : "ZYX" === c ? (this._x = o * i * r - n * a * s, this._y = n * a * r + o * i * s, this._z = n * i * s - o * a * r, this._w = n * i * r + o * a * s) : "YZX" === c ? (this._x = o * i * r + n * a * s, this._y = n * a * r + o * i * s, this._z = n * i * s - o * a * r, this._w = n * i * r - o * a * s) : "XZY" === c && (this._x = o * i * r - n * a * s, this._y = n * a * r - o * i * s, this._z = n * i * s + o * a * r, this._w = n * i * r + o * a * s), !1 !== e && this.onChangeCallback(), this
        },
        setFromAxisAngle: function(t, e) {
            var n = e / 2,
                i = Math.sin(n);
            return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(t) {
            var e, n = t.elements,
                i = n[0],
                r = n[4],
                o = n[8],
                a = n[1],
                s = n[5],
                c = n[9],
                u = n[2],
                l = n[6],
                h = n[10],
                d = i + s + h;
            return d > 0 ? (e = .5 / Math.sqrt(d + 1), this._w = .25 / e, this._x = (l - c) * e, this._y = (o - u) * e, this._z = (a - r) * e) : i > s && i > h ? (e = 2 * Math.sqrt(1 + i - s - h), this._w = (l - c) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (o + u) / e) : s > h ? (e = 2 * Math.sqrt(1 + s - i - h), this._w = (o - u) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + h - i - s), this._w = (a - r) / e, this._x = (o + u) / e, this._y = (c + l) / e, this._z = .25 * e), this.onChangeCallback(), this
        },
        setFromUnitVectors: function() {
            var t, e;
            return function(n, i) {
                return void 0 === t && (t = new c), e = n.dot(i) + 1, e < 1e-6 ? (e = 0, Math.abs(n.x) > Math.abs(n.z) ? t.set(-n.y, n.x, 0) : t.set(0, -n.z, n.y)) : t.crossVectors(n, i), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var n = t._x,
                i = t._y,
                r = t._z,
                o = t._w,
                a = e._x,
                s = e._y,
                c = e._z,
                u = e._w;
            return this._x = n * u + o * a + i * c - r * s, this._y = i * u + o * s + r * a - n * c, this._z = r * u + o * c + n * s - i * a, this._w = o * u - n * a - i * s - r * c, this.onChangeCallback(), this
        },
        slerp: function(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var n = this._x,
                i = this._y,
                r = this._z,
                o = this._w,
                a = o * t._w + n * t._x + i * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
            var s = Math.sqrt(1 - a * a);
            if (Math.abs(s) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (n + this._x), this._y = .5 * (i + this._y), this._z = .5 * (r + this._z), this;
            var c = Math.atan2(s, a),
                u = Math.sin((1 - e) * c) / s,
                l = Math.sin(e * c) / s;
            return this._w = o * u + this._w * l, this._x = n * u + this._x * l, this._y = i * u + this._y * l, this._z = r * u + this._z * l, this.onChangeCallback(), this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        },
        onChange: function(t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function() {}
    }, Object.assign(s, {
        slerp: function(t, e, n, i) {
            return n.copy(t).slerp(e, i)
        },
        slerpFlat: function(t, e, n, i, r, o, a) {
            var s = n[i + 0],
                c = n[i + 1],
                u = n[i + 2],
                l = n[i + 3],
                h = r[o + 0],
                d = r[o + 1],
                p = r[o + 2],
                f = r[o + 3];
            if (l !== f || s !== h || c !== d || u !== p) {
                var m = 1 - a,
                    g = s * h + c * d + u * p + l * f,
                    v = g >= 0 ? 1 : -1,
                    y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var _ = Math.sqrt(y),
                        b = Math.atan2(_, g * v);
                    m = Math.sin(m * b) / _, a = Math.sin(a * b) / _
                }
                var x = a * v;
                if (s = s * m + h * x, c = c * m + d * x, u = u * m + p * x, l = l * m + f * x, m === 1 - a) {
                    var w = 1 / Math.sqrt(s * s + c * c + u * u + l * l);
                    s *= w, c *= w, u *= w, l *= w
                }
            }
            t[e] = s, t[e + 1] = c, t[e + 2] = u, t[e + 3] = l
        }
    }), c.prototype = {
        constructor: c,
        isVector3: !0,
        set: function(t, e, n) {
            return this.x = t, this.y = e, this.z = n, this
        },
        setScalar: function(t) {
            return this.x = t, this.y = t, this.z = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t) : (this.x = 0, this.y = 0, this.z = 0), this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        },
        applyEuler: function() {
            var t;
            return function(e) {
                return !1 === (e && e.isEuler) && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === t && (t = new s), this.applyQuaternion(t.setFromEuler(e))
            }
        }(),
        applyAxisAngle: function() {
            var t;
            return function(e, n) {
                return void 0 === t && (t = new s), this.applyQuaternion(t.setFromAxisAngle(e, n))
            }
        }(),
        applyMatrix3: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements;
            this.x = r[0] * e + r[4] * n + r[8] * i + r[12], this.y = r[1] * e + r[5] * n + r[9] * i + r[13], this.z = r[2] * e + r[6] * n + r[10] * i + r[14];
            var o = r[3] * e + r[7] * n + r[11] * i + r[15];
            return this.divideScalar(o)
        },
        applyQuaternion: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.x,
                o = t.y,
                a = t.z,
                s = t.w,
                c = s * e + o * i - a * n,
                u = s * n + a * e - r * i,
                l = s * i + r * n - o * e,
                h = -r * e - o * n - a * i;
            return this.x = c * s + h * -r + u * -a - l * -o, this.y = u * s + h * -o + l * -r - c * -a, this.z = l * s + h * -a + c * -o - u * -r, this
        },
        project: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyMatrix4(t)
            }
        }(),
        unproject: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyMatrix4(t)
            }
        }(),
        transformDirection: function(t) {
            var e = this.x,
                n = this.y,
                i = this.z,
                r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        },
        clampScalar: function() {
            var t, e;
            return function(n, i) {
                return void 0 === t && (t = new c, e = new c), t.set(n, n, n), e.set(i, i, i), this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var n = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, n)) / n)
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        cross: function(t, e) {
            if (void 0 !== e) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e);
            var n = this.x,
                i = this.y,
                r = this.z;
            return this.x = i * t.z - r * t.y, this.y = r * t.x - n * t.z, this.z = n * t.y - i * t.x, this
        },
        crossVectors: function(t, e) {
            var n = t.x,
                i = t.y,
                r = t.z,
                o = e.x,
                a = e.y,
                s = e.z;
            return this.x = i * s - r * a, this.y = r * o - n * s, this.z = n * a - i * o, this
        },
        projectOnVector: function(t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new c), t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(),
        reflect: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new c), this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function(t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos($a.clamp(e, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                n = this.y - t.y,
                i = this.z - t.z;
            return e * e + n * n + i * i
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
        },
        setFromCylindrical: function(t) {
            return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this
        },
        setFromMatrixPosition: function(t) {
            return this.setFromMatrixColumn(t, 3)
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length(),
                n = this.setFromMatrixColumn(t, 1).length(),
                i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = i, this
        },
        setFromMatrixColumn: function(t, e) {
            if ("number" == typeof t) {
                console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
                var n = t;
                t = e, e = n
            }
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
    }, u.prototype = {
        constructor: u,
        isMatrix4: !0,
        set: function(t, e, n, i, r, o, a, s, c, u, l, h, d, p, f, m) {
            var g = this.elements;
            return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = o, g[9] = a, g[13] = s, g[2] = c, g[6] = u, g[10] = l, g[14] = h, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new u).fromArray(this.elements)
        },
        copy: function(t) {
            return this.elements.set(t.elements), this
        },
        copyPosition: function(t) {
            var e = this.elements,
                n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
        },
        extractBasis: function(t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new c);
                var n = this.elements,
                    i = e.elements,
                    r = 1 / t.setFromMatrixColumn(e, 0).length(),
                    o = 1 / t.setFromMatrixColumn(e, 1).length(),
                    a = 1 / t.setFromMatrixColumn(e, 2).length();
                return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[4] = i[4] * o, n[5] = i[5] * o, n[6] = i[6] * o, n[8] = i[8] * a, n[9] = i[9] * a, n[10] = i[10] * a, this
            }
        }(),
        makeRotationFromEuler: function(t) {
            !1 === (t && t.isEuler) && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z,
                o = Math.cos(n),
                a = Math.sin(n),
                s = Math.cos(i),
                c = Math.sin(i),
                u = Math.cos(r),
                l = Math.sin(r);
            if ("XYZ" === t.order) {
                var h = o * u,
                    d = o * l,
                    p = a * u,
                    f = a * l;
                e[0] = s * u, e[4] = -s * l, e[8] = c, e[1] = d + p * c, e[5] = h - f * c, e[9] = -a * s, e[2] = f - h * c, e[6] = p + d * c, e[10] = o * s
            } else if ("YXZ" === t.order) {
                var m = s * u,
                    g = s * l,
                    v = c * u,
                    y = c * l;
                e[0] = m + y * a, e[4] = v * a - g, e[8] = o * c, e[1] = o * l, e[5] = o * u, e[9] = -a, e[2] = g * a - v, e[6] = y + m * a, e[10] = o * s
            } else if ("ZXY" === t.order) {
                var m = s * u,
                    g = s * l,
                    v = c * u,
                    y = c * l;
                e[0] = m - y * a, e[4] = -o * l, e[8] = v + g * a, e[1] = g + v * a, e[5] = o * u, e[9] = y - m * a, e[2] = -o * c, e[6] = a, e[10] = o * s
            } else if ("ZYX" === t.order) {
                var h = o * u,
                    d = o * l,
                    p = a * u,
                    f = a * l;
                e[0] = s * u, e[4] = p * c - d, e[8] = h * c + f, e[1] = s * l, e[5] = f * c + h, e[9] = d * c - p, e[2] = -c, e[6] = a * s, e[10] = o * s
            } else if ("YZX" === t.order) {
                var _ = o * s,
                    b = o * c,
                    x = a * s,
                    w = a * c;
                e[0] = s * u, e[4] = w - _ * l, e[8] = x * l + b, e[1] = l, e[5] = o * u, e[9] = -a * u, e[2] = -c * u, e[6] = b * l + x, e[10] = _ - w * l
            } else if ("XZY" === t.order) {
                var _ = o * s,
                    b = o * c,
                    x = a * s,
                    w = a * c;
                e[0] = s * u, e[4] = -l, e[8] = c * u, e[1] = _ * l + w, e[5] = o * u, e[9] = b * l - x, e[2] = x * l - b, e[6] = a * u, e[10] = w * l + _
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromQuaternion: function(t) {
            var e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z,
                o = t.w,
                a = n + n,
                s = i + i,
                c = r + r,
                u = n * a,
                l = n * s,
                h = n * c,
                d = i * s,
                p = i * c,
                f = r * c,
                m = o * a,
                g = o * s,
                v = o * c;
            return e[0] = 1 - (d + f), e[4] = l - v, e[8] = h + g, e[1] = l + v, e[5] = 1 - (u + f), e[9] = p - m, e[2] = h - g, e[6] = p + m, e[10] = 1 - (u + d), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        lookAt: function() {
            var t, e, n;
            return function(i, r, o) {
                void 0 === t && (t = new c, e = new c, n = new c);
                var a = this.elements;
                return n.subVectors(i, r).normalize(), 0 === n.lengthSq() && (n.z = 1), t.crossVectors(o, n).normalize(), 0 === t.lengthSq() && (n.z += 1e-4, t.crossVectors(o, n).normalize()), e.crossVectors(n, t), a[0] = t.x, a[4] = e.x, a[8] = n.x, a[1] = t.y, a[5] = e.y, a[9] = n.y, a[2] = t.z, a[6] = e.z, a[10] = n.z, this
            }
        }(),
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var n = t.elements,
                i = e.elements,
                r = this.elements,
                o = n[0],
                a = n[4],
                s = n[8],
                c = n[12],
                u = n[1],
                l = n[5],
                h = n[9],
                d = n[13],
                p = n[2],
                f = n[6],
                m = n[10],
                g = n[14],
                v = n[3],
                y = n[7],
                _ = n[11],
                b = n[15],
                x = i[0],
                w = i[4],
                M = i[8],
                E = i[12],
                T = i[1],
                S = i[5],
                A = i[9],
                L = i[13],
                R = i[2],
                P = i[6],
                C = i[10],
                I = i[14],
                B = i[3],
                O = i[7],
                N = i[11],
                U = i[15];
            return r[0] = o * x + a * T + s * R + c * B, r[4] = o * w + a * S + s * P + c * O, r[8] = o * M + a * A + s * C + c * N, r[12] = o * E + a * L + s * I + c * U, r[1] = u * x + l * T + h * R + d * B, r[5] = u * w + l * S + h * P + d * O, r[9] = u * M + l * A + h * C + d * N, r[13] = u * E + l * L + h * I + d * U, r[2] = p * x + f * T + m * R + g * B, r[6] = p * w + f * S + m * P + g * O, r[10] = p * M + f * A + m * C + g * N, r[14] = p * E + f * L + m * I + g * U, r[3] = v * x + y * T + _ * R + b * B, r[7] = v * w + y * S + _ * P + b * O, r[11] = v * M + y * A + _ * C + b * N, r[15] = v * E + y * L + _ * I + b * U, this
        },
        multiplyToArray: function(t, e, n) {
            var i = this.elements;
            return this.multiplyMatrices(t, e), n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3], n[4] = i[4], n[5] = i[5], n[6] = i[6], n[7] = i[7], n[8] = i[8], n[9] = i[9], n[10] = i[10], n[11] = i[11], n[12] = i[12], n[13] = i[13], n[14] = i[14], n[15] = i[15], this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        },
        applyToBufferAttribute: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new c);
                for (var n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix4(this), e.setXYZ(n, t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function() {
            var t = this.elements,
                e = t[0],
                n = t[4],
                i = t[8],
                r = t[12],
                o = t[1],
                a = t[5],
                s = t[9],
                c = t[13],
                u = t[2],
                l = t[6],
                h = t[10],
                d = t[14];
            return t[3] * (+r * s * l - i * c * l - r * a * h + n * c * h + i * a * d - n * s * d) + t[7] * (+e * s * d - e * c * h + r * o * h - i * o * d + i * c * u - r * s * u) + t[11] * (+e * c * l - e * a * d - r * o * l + n * o * d + r * a * u - n * c * u) + t[15] * (-i * a * u - e * s * l + e * a * h + i * o * l - n * o * h + n * s * u)
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        },
        setPosition: function(t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        },
        getInverse: function(t, e) {
            var n = this.elements,
                i = t.elements,
                r = i[0],
                o = i[1],
                a = i[2],
                s = i[3],
                c = i[4],
                u = i[5],
                l = i[6],
                h = i[7],
                d = i[8],
                p = i[9],
                f = i[10],
                m = i[11],
                g = i[12],
                v = i[13],
                y = i[14],
                _ = i[15],
                b = p * y * h - v * f * h + v * l * m - u * y * m - p * l * _ + u * f * _,
                x = g * f * h - d * y * h - g * l * m + c * y * m + d * l * _ - c * f * _,
                w = d * v * h - g * p * h + g * u * m - c * v * m - d * u * _ + c * p * _,
                M = g * p * l - d * v * l - g * u * f + c * v * f + d * u * y - c * p * y,
                E = r * b + o * x + a * w + s * M;
            if (0 === E) {
                var T = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(T);
                return console.warn(T), this.identity()
            }
            var S = 1 / E;
            return n[0] = b * S, n[1] = (v * f * s - p * y * s - v * a * m + o * y * m + p * a * _ - o * f * _) * S, n[2] = (u * y * s - v * l * s + v * a * h - o * y * h - u * a * _ + o * l * _) * S, n[3] = (p * l * s - u * f * s - p * a * h + o * f * h + u * a * m - o * l * m) * S, n[4] = x * S, n[5] = (d * y * s - g * f * s + g * a * m - r * y * m - d * a * _ + r * f * _) * S, n[6] = (g * l * s - c * y * s - g * a * h + r * y * h + c * a * _ - r * l * _) * S, n[7] = (c * f * s - d * l * s + d * a * h - r * f * h - c * a * m + r * l * m) * S, n[8] = w * S, n[9] = (g * p * s - d * v * s - g * o * m + r * v * m + d * o * _ - r * p * _) * S, n[10] = (c * v * s - g * u * s + g * o * h - r * v * h - c * o * _ + r * u * _) * S, n[11] = (d * u * s - c * p * s - d * o * h + r * p * h + c * o * m - r * u * m) * S, n[12] = M * S, n[13] = (d * v * a - g * p * a + g * o * f - r * v * f - d * o * y + r * p * y) * S, n[14] = (g * u * a - c * v * a - g * o * l + r * v * l + c * o * y - r * u * y) * S, n[15] = (c * p * a - d * u * a + d * o * l - r * p * l - c * o * f + r * u * f) * S, this
        },
        scale: function(t) {
            var e = this.elements,
                n = t.x,
                i = t.y,
                r = t.z;
            return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements,
                e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i))
        },
        makeTranslation: function(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t),
                n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t),
                n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t),
                n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function(t, e) {
            var n = Math.cos(e),
                i = Math.sin(e),
                r = 1 - n,
                o = t.x,
                a = t.y,
                s = t.z,
                c = r * o,
                u = r * a;
            return this.set(c * o + n, c * a - i * s, c * s + i * a, 0, c * a + i * s, u * a + n, u * s - i * o, 0, c * s - i * a, u * s + i * o, r * s * s + n, 0, 0, 0, 0, 1), this
        },
        makeScale: function(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        },
        makeShear: function(t, e, n) {
            return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this
        },
        compose: function(t, e, n) {
            return this.makeRotationFromQuaternion(e), this.scale(n), this.setPosition(t), this
        },
        decompose: function() {
            var t, e;
            return function(n, i, r) {
                void 0 === t && (t = new c, e = new u);
                var o = this.elements,
                    a = t.set(o[0], o[1], o[2]).length(),
                    s = t.set(o[4], o[5], o[6]).length(),
                    l = t.set(o[8], o[9], o[10]).length();
                this.determinant() < 0 && (a = -a), n.x = o[12], n.y = o[13], n.z = o[14], e.elements.set(this.elements);
                var h = 1 / a,
                    d = 1 / s,
                    p = 1 / l;
                return e.elements[0] *= h, e.elements[1] *= h, e.elements[2] *= h, e.elements[4] *= d, e.elements[5] *= d, e.elements[6] *= d, e.elements[8] *= p, e.elements[9] *= p, e.elements[10] *= p, i.setFromRotationMatrix(e), r.x = a, r.y = s, r.z = l, this
            }
        }(),
        makePerspective: function(t, e, n, i, r, o) {
            void 0 === o && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var a = this.elements,
                s = 2 * r / (e - t),
                c = 2 * r / (n - i),
                u = (e + t) / (e - t),
                l = (n + i) / (n - i),
                h = -(o + r) / (o - r),
                d = -2 * o * r / (o - r);
            return a[0] = s, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = c, a[9] = l, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = h, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        },
        makeOrthographic: function(t, e, n, i, r, o) {
            var a = this.elements,
                s = 1 / (e - t),
                c = 1 / (n - i),
                u = 1 / (o - r),
                l = (e + t) * s,
                h = (n + i) * c,
                d = (o + r) * u;
            return a[0] = 2 * s, a[4] = 0, a[8] = 0, a[12] = -l, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -h, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        },
        equals: function(t) {
            for (var e = this.elements, n = t.elements, i = 0; i < 16; i++)
                if (e[i] !== n[i]) return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 16; n++) this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
        }
    }, l.prototype = Object.create(i.prototype), l.prototype.constructor = l, l.prototype.isCubeTexture = !0, Object.defineProperty(l.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    });
    var es = new i,
        ns = new l,
        is = [],
        rs = [];
    k.prototype.setValue = function(t, e) {
        for (var n = this.seq, i = 0, r = n.length; i !== r; ++i) {
            var o = n[i];
            o.setValue(t, e[o.id])
        }
    };
    var os = /([\w\d_]+)(\])?(\[|\.)?/g;
    j.prototype.setValue = function(t, e, n) {
        var i = this.map[e];
        void 0 !== i && i.setValue(t, n, this.renderer)
    }, j.prototype.set = function(t, e, n) {
        var i = this.map[n];
        void 0 !== i && i.setValue(t, e[n], this.renderer)
    }, j.prototype.setOptional = function(t, e, n) {
        var i = e[n];
        void 0 !== i && this.setValue(t, n, i)
    }, j.upload = function(t, e, n, i) {
        for (var r = 0, o = e.length; r !== o; ++r) {
            var a = e[r],
                s = n[a.id];
            !1 !== s.needsUpdate && a.setValue(t, s.value, i)
        }
    }, j.seqWithValue = function(t, e) {
        for (var n = [], i = 0, r = t.length; i !== r; ++i) {
            var o = t[i];
            o.id in e && n.push(o)
        }
        return n
    };
    var as = {
            merge: function(t) {
                for (var e = {}, n = 0; n < t.length; n++) {
                    var i = this.clone(t[n]);
                    for (var r in i) e[r] = i[r]
                }
                return e
            },
            clone: function(t) {
                var e = {};
                for (var n in t) {
                    e[n] = {};
                    for (var i in t[n]) {
                        var r = t[n][i];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
                    }
                }
                return e
            }
        },
        ss = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
            alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
            aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "\nvec3 transformed = vec3( position );\n",
            beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
            bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5/LUT_SIZE;\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n\tint config = 0;\n\tif ( L[0].z > 0.0 ) config += 1;\n\tif ( L[1].z > 0.0 ) config += 2;\n\tif ( L[2].z > 0.0 ) config += 4;\n\tif ( L[3].z > 0.0 ) config += 8;\n\tn = 0;\n\tif ( config == 0 ) {\n\t} else if ( config == 1 ) {\n\t\tn = 3;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 2 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 3 ) {\n\t\tn = 4;\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t\tL[3] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 4 ) {\n\t\tn = 3;\n\t\tL[0] = -L[3].z * L[2] + L[2].z * L[3];\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t} else if ( config == 5 ) {\n\t\tn = 0;\n\t} else if ( config == 6 ) {\n\t\tn = 4;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 7 ) {\n\t\tn = 5;\n\t\tL[4] = -L[3].z * L[0] + L[0].z * L[3];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 8 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[1] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] =  L[3];\n\t} else if ( config == 9 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[2].z * L[3] + L[3].z * L[2];\n\t} else if ( config == 10 ) {\n\t\tn = 0;\n\t} else if ( config == 11 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 12 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t} else if ( config == 13 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = L[2];\n\t\tL[2] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t} else if ( config == 14 ) {\n\t\tn = 5;\n\t\tL[4] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t} else if ( config == 15 ) {\n\t\tn = 4;\n\t}\n\tif ( n == 3 )\n\t\tL[3] = L[0];\n\tif ( n == 4 )\n\t\tL[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n\tfloat cosTheta = dot( v1, v2 );\n\tfloat theta = acos( cosTheta );\n\tfloat res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n\treturn res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n\trectPoints[0] = pos - halfWidth - halfHeight;\n\trectPoints[1] = pos + halfWidth - halfHeight;\n\trectPoints[2] = pos + halfWidth + halfHeight;\n\trectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[5];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tint n;\n\tclipQuadToHorizon(clippedRect, n);\n\tif ( n == 0 )\n\t\treturn vec3( 0, 0, 0 );\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tclippedRect[4] = normalize( clippedRect[4] );\n\tfloat sum = 0.0;\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n\tif (n >= 4)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n\tif (n == 5)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n\tsum = max( 0.0, sum );\n\tvec3 Lo_i = vec3( sum, sum, sum );\n\treturn Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n\t\tconst in float roughness,\n\t\tconst in sampler2D ltcMat, const in sampler2D ltcMag ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tvec2 uv = ltcTextureCoords( geometry, roughness );\n\tvec4 brdfLtcApproxParams, t;\n\tbrdfLtcApproxParams = texture2D( ltcMat, uv );\n\tt = texture2D( ltcMat, uv );\n\tfloat brdfLtcScalar = texture2D( ltcMag, uv ).a;\n\tmat3 brdfLtcApproxMat = mat3(\n\t\tvec3(   1,   0, t.y ),\n\t\tvec3(   0, t.z,   0 ),\n\t\tvec3( t.w,   0, t.x )\n\t);\n\tvec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n\tspecularReflectance *= brdfLtcScalar;\n\treturn specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tmat3 diffuseBrdfMat = mat3(1);\n\tvec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n\treturn diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
            color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
            color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
            color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
            common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
            defaultnormal_vertex: "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
            encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
            encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
            envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
            envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
            envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
            fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
            fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
            gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
            lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
            lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
            logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
            map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
            map_particle_fragment: "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
            map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
            normal_flip: "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",
            normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
            project_vertex: "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
            shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
            shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
            shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
            skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
            skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",
            skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
            tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
            uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
            uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",
            cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
            cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
            distanceRGBA_frag: "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
            distanceRGBA_vert: "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
            equirect_frag: "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
            equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
            normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            shadow_frag: "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",
            shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"
        };
    W.prototype = {
        constructor: W,
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        },
        setScalar: function(t) {
            return this.r = t, this.g = t, this.b = t, this
        },
        setHex: function(t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        },
        setRGB: function(t, e, n) {
            return this.r = t, this.g = e, this.b = n, this
        },
        setHSL: function() {
            function t(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
            }
            return function(e, n, i) {
                if (e = $a.euclideanModulo(e, 1), n = $a.clamp(n, 0, 1), i = $a.clamp(i, 0, 1), 0 === n) this.r = this.g = this.b = i;
                else {
                    var r = i <= .5 ? i * (1 + n) : i + n - i * n,
                        o = 2 * i - r;
                    this.r = t(o, r, e + 1 / 3), this.g = t(o, r, e), this.b = t(o, r, e - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var i, r = n[1],
                    o = n[2];
                switch (r) {
                    case "rgb":
                    case "rgba":
                        if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, e(i[5]), this;
                        if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, e(i[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
                            var a = parseFloat(i[1]) / 360,
                                s = parseInt(i[2], 10) / 100,
                                c = parseInt(i[3], 10) / 100;
                            return e(i[5]), this.setHSL(a, s, c)
                        }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var u = n[1],
                    l = u.length;
                if (3 === l) return this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255, this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255, this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255, this;
                if (6 === l) return this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255, this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255, this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255, this
            }
            if (t && t.length > 0) {
                var u = cs[t];
                void 0 !== u ? this.setHex(u) : console.warn("THREE.Color: Unknown color " + t)
            }
            return this
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        copyLinearToGamma: function(t, e) {
            void 0 === e && (e = 2);
            var n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
        },
        convertGammaToLinear: function() {
            var t = this.r,
                e = this.g,
                n = this.b;
            return this.r = t * t, this.g = e * e, this.b = n * n, this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            var e, n, i = t || {
                    h: 0,
                    s: 0,
                    l: 0
                },
                r = this.r,
                o = this.g,
                a = this.b,
                s = Math.max(r, o, a),
                c = Math.min(r, o, a),
                u = (c + s) / 2;
            if (c === s) e = 0, n = 0;
            else {
                var l = s - c;
                switch (n = u <= .5 ? l / (s + c) : l / (2 - s - c), s) {
                    case r:
                        e = (o - a) / l + (o < a ? 6 : 0);
                        break;
                    case o:
                        e = (a - r) / l + 2;
                        break;
                    case a:
                        e = (r - o) / l + 4
                }
                e /= 6
            }
            return i.h = e, i.s = n, i.l = u, i
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(t, e, n) {
            var i = this.getHSL();
            return i.h += t, i.s += e, i.l += n, this.setHSL(i.h, i.s, i.l), this
        },
        add: function(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        },
        addScalar: function(t) {
            return this.r += t, this.g += t, this.b += t, this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
        },
        multiply: function(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        },
        multiplyScalar: function(t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        },
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        },
        toJSON: function() {
            return this.getHex()
        }
    };
    var cs = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    X.prototype = Object.create(i.prototype), X.prototype.constructor = X, X.prototype.isDataTexture = !0;
    var us = {
            common: {
                diffuse: {
                    value: new W(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new r(0, 0, 1, 1)
                },
                specularMap: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new n(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new W(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new W(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new r(0, 0, 1, 1)
                }
            }
        },
        ls = {
            basic: {
                uniforms: as.merge([us.common, us.aomap, us.lightmap, us.fog]),
                vertexShader: ss.meshbasic_vert,
                fragmentShader: ss.meshbasic_frag
            },
            lambert: {
                uniforms: as.merge([us.common, us.aomap, us.lightmap, us.emissivemap, us.fog, us.lights, {
                    emissive: {
                        value: new W(0)
                    }
                }]),
                vertexShader: ss.meshlambert_vert,
                fragmentShader: ss.meshlambert_frag
            },
            phong: {
                uniforms: as.merge([us.common, us.aomap, us.lightmap, us.emissivemap, us.bumpmap, us.normalmap, us.displacementmap, us.gradientmap, us.fog, us.lights, {
                    emissive: {
                        value: new W(0)
                    },
                    specular: {
                        value: new W(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: ss.meshphong_vert,
                fragmentShader: ss.meshphong_frag
            },
            standard: {
                uniforms: as.merge([us.common, us.aomap, us.lightmap, us.emissivemap, us.bumpmap, us.normalmap, us.displacementmap, us.roughnessmap, us.metalnessmap, us.fog, us.lights, {
                    emissive: {
                        value: new W(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: ss.meshphysical_vert,
                fragmentShader: ss.meshphysical_frag
            },
            points: {
                uniforms: as.merge([us.points, us.fog]),
                vertexShader: ss.points_vert,
                fragmentShader: ss.points_frag
            },
            dashed: {
                uniforms: as.merge([us.common, us.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: ss.linedashed_vert,
                fragmentShader: ss.linedashed_frag
            },
            depth: {
                uniforms: as.merge([us.common, us.displacementmap]),
                vertexShader: ss.depth_vert,
                fragmentShader: ss.depth_frag
            },
            normal: {
                uniforms: as.merge([us.common, us.bumpmap, us.normalmap, us.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: ss.normal_vert,
                fragmentShader: ss.normal_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: ss.cube_vert,
                fragmentShader: ss.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    }
                },
                vertexShader: ss.equirect_vert,
                fragmentShader: ss.equirect_frag
            },
            distanceRGBA: {
                uniforms: {
                    lightPos: {
                        value: new c
                    }
                },
                vertexShader: ss.distanceRGBA_vert,
                fragmentShader: ss.distanceRGBA_frag
            }
        };
    ls.physical = {
        uniforms: as.merge([ls.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: ss.meshphysical_vert,
        fragmentShader: ss.meshphysical_frag
    }, q.prototype = {
        constructor: q,
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new n;
            return function(e, n) {
                var i = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(t) {
            var e = t || new n;
            return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            var e = t || new n;
            return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            return (e || new n).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            return (e || new n).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new n;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    };
    var hs = 0;
    J.prototype = {
        constructor: J,
        isMaterial: !0,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(t) {
            !0 === t && this.update(), this._needsUpdate = t
        },
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var n = t[e];
                    if (void 0 !== n) {
                        var i = this[e];
                        void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = "overdraw" === e ? Number(n) : n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                    } else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                }
        },
        toJSON: function(t) {
            function e(t) {
                var e = [];
                for (var n in t) {
                    var i = t[n];
                    delete i.metadata, e.push(i)
                }
                return e
            }
            var n = void 0 === t;
            n && (t = {
                textures: {},
                images: {}
            });
            var i = {
                metadata: {
                    version: 4.4,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearCoat && (i.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (i.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, i.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (i.size = this.size), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== lo && (i.blending = this.blending), this.shading !== oo && (i.shading = this.shading), this.side !== eo && (i.side = this.side), this.vertexColors !== ao && (i.vertexColors = this.vertexColors), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), i.skinning = this.skinning, i.morphTargets = this.morphTargets, n) {
                var r = e(t.textures),
                    o = e(t.images);
                r.length > 0 && (i.textures = r), o.length > 0 && (i.images = o)
            }
            return i
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.shading = t.shading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes,
                n = null;
            if (null !== e) {
                var i = e.length;
                n = new Array(i);
                for (var r = 0; r !== i; ++r) n[r] = e[r].clone()
            }
            return this.clippingPlanes = n, this
        },
        update: function() {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, Object.assign(J.prototype, e.prototype), Q.prototype = Object.create(J.prototype), Q.prototype.constructor = Q, Q.prototype.isShaderMaterial = !0, Q.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = as.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, Q.prototype.toJSON = function(t) {
        var e = J.prototype.toJSON.call(this, t);
        return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    }, K.prototype = Object.create(J.prototype), K.prototype.constructor = K, K.prototype.isMeshDepthMaterial = !0, K.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, $.prototype = {
        constructor: $,
        isBox3: !0,
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromArray: function(t) {
            for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var u = t[s],
                    l = t[s + 1],
                    h = t[s + 2];
                u < e && (e = u), l < n && (n = l), h < i && (i = h), u > r && (r = u), l > o && (o = l), h > a && (a = h)
            }
            return this.min.set(e, n, i), this.max.set(r, o, a), this
        },
        setFromBufferAttribute: function(t) {
            for (var e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var u = t.getX(s),
                    l = t.getY(s),
                    h = t.getZ(s);
                u < e && (e = u), l < n && (n = l), h < i && (i = h), u > r && (r = u), l > o && (o = l), h > a && (a = h)
            }
            return this.min.set(e, n, i), this.max.set(r, o, a), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new c;
            return function(e, n) {
                var i = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
            }
        }(),
        setFromObject: function(t) {
            return this.makeEmpty(), this.expandByObject(t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(t) {
            var e = t || new c;
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            var e = t || new c;
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        expandByObject: function() {
            var t = new c;
            return function(e) {
                var n = this;
                return e.updateMatrixWorld(!0), e.traverse(function(e) {
                    var i, r, o = e.geometry;
                    if (void 0 !== o)
                        if (o.isGeometry) {
                            var a = o.vertices;
                            for (i = 0, r = a.length; i < r; i++) t.copy(a[i]), t.applyMatrix4(e.matrixWorld), n.expandByPoint(t)
                        } else if (o.isBufferGeometry) {
                        var s = o.attributes.position;
                        if (void 0 !== s)
                            for (i = 0, r = s.count; i < r; i++) t.fromBufferAttribute(s, i).applyMatrix4(e.matrixWorld), n.expandByPoint(t)
                    }
                }), this
            }
        }(),
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            return (e || new c).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new c), this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(),
        intersectsPlane: function(t) {
            var e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= t.constant && n >= t.constant
        },
        clampPoint: function(t, e) {
            return (e || new c).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new c;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        getBoundingSphere: function() {
            var t = new c;
            return function(e) {
                var n = e || new tt;
                return this.getCenter(n.center), n.radius = .5 * this.getSize(t).length(), n
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        applyMatrix4: function() {
            var t = [new c, new c, new c, new c, new c, new c, new c, new c];
            return function(e) {
                return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
            }
        }(),
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }, tt.prototype = {
        constructor: tt,
        set: function(t, e) {
            return this.center.copy(t), this.radius = e, this
        },
        setFromPoints: function() {
            var t;
            return function(e, n) {
                void 0 === t && (t = new $);
                var i = this.center;
                void 0 !== n ? i.copy(n) : t.setFromPoints(e).getCenter(i);
                for (var r = 0, o = 0, a = e.length; o < a; o++) r = Math.max(r, i.distanceToSquared(e[o]));
                return this.radius = Math.sqrt(r), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius
        },
        clampPoint: function(t, e) {
            var n = this.center.distanceToSquared(t),
                i = e || new c;
            return i.copy(t), n > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)), i
        },
        getBoundingBox: function(t) {
            var e = t || new $;
            return e.set(this.center, this.center), e.expandByScalar(this.radius), e
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        },
        translate: function(t) {
            return this.center.add(t), this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }, et.prototype = {
        constructor: et,
        isMatrix3: !0,
        set: function(t, e, n, i, r, o, a, s, c) {
            var u = this.elements;
            return u[0] = t, u[1] = i, u[2] = a, u[3] = e, u[4] = r, u[5] = s, u[6] = n, u[7] = o, u[8] = c, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = t.elements;
            return this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
        },
        setFromMatrix4: function(t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        },
        applyToBufferAttribute: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new c);
                for (var n = 0, i = e.count; n < i; n++) t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.applyMatrix3(this), e.setXYZ(n, t.x, t.y, t.z);
                return e
            }
        }(),
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        },
        determinant: function() {
            var t = this.elements,
                e = t[0],
                n = t[1],
                i = t[2],
                r = t[3],
                o = t[4],
                a = t[5],
                s = t[6],
                c = t[7],
                u = t[8];
            return e * o * u - e * a * c - n * r * u + n * a * s + i * r * c - i * o * s
        },
        getInverse: function(t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var n = t.elements,
                i = this.elements,
                r = n[0],
                o = n[1],
                a = n[2],
                s = n[3],
                c = n[4],
                u = n[5],
                l = n[6],
                h = n[7],
                d = n[8],
                p = d * c - u * h,
                f = u * l - d * s,
                m = h * s - c * l,
                g = r * p + o * f + a * m;
            if (0 === g) {
                var v = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
                if (!0 === e) throw new Error(v);
                return console.warn(v), this.identity()
            }
            var y = 1 / g;
            return i[0] = p * y, i[1] = (a * h - d * o) * y, i[2] = (u * o - a * c) * y, i[3] = f * y, i[4] = (d * r - a * l) * y, i[5] = (a * s - u * r) * y, i[6] = m * y, i[7] = (o * l - h * r) * y, i[8] = (c * r - o * s) * y, this
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 9; n++) this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
        }
    }, nt.prototype = {
        constructor: nt,
        set: function(t, e) {
            return this.normal.copy(t), this.constant = e, this
        },
        setComponents: function(t, e, n, i) {
            return this.normal.set(t, e, n), this.constant = i, this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        },
        setFromCoplanarPoints: function() {
            var t = new c,
                e = new c;
            return function(n, i, r) {
                var o = t.subVectors(r, i).cross(e.subVectors(n, i)).normalize();
                return this.setFromNormalAndCoplanarPoint(o, n), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        },
        negate: function() {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return this.orthoPoint(t, e).sub(t).negate()
        },
        orthoPoint: function(t, e) {
            var n = this.distanceToPoint(t);
            return (e || new c).copy(this.normal).multiplyScalar(n)
        },
        intersectLine: function() {
            var t = new c;
            return function(e, n) {
                var i = n || new c,
                    r = e.delta(t),
                    o = this.normal.dot(r);
                if (0 !== o) {
                    var a = -(e.start.dot(this.normal) + this.constant) / o;
                    if (!(a < 0 || a > 1)) return i.copy(r).multiplyScalar(a).add(e.start)
                } else if (0 === this.distanceToPoint(e.start)) return i.copy(e.start)
            }
        }(),
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start),
                n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            return (t || new c).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var t = new c,
                e = new et;
            return function(n, i) {
                var r = this.coplanarPoint(t).applyMatrix4(n),
                    o = i || e.getNormalMatrix(n),
                    a = this.normal.applyMatrix3(o).normalize();
                return this.constant = -r.dot(a), this
            }
        }(),
        translate: function(t) {
            return this.constant = this.constant - t.dot(this.normal), this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }, it.prototype = {
        constructor: it,
        set: function(t, e, n, i, r, o) {
            var a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++) e[n].copy(t.planes[n]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes,
                n = t.elements,
                i = n[0],
                r = n[1],
                o = n[2],
                a = n[3],
                s = n[4],
                c = n[5],
                u = n[6],
                l = n[7],
                h = n[8],
                d = n[9],
                p = n[10],
                f = n[11],
                m = n[12],
                g = n[13],
                v = n[14],
                y = n[15];
            return e[0].setComponents(a - i, l - s, f - h, y - m).normalize(), e[1].setComponents(a + i, l + s, f + h, y + m).normalize(), e[2].setComponents(a + r, l + c, f + d, y + g).normalize(), e[3].setComponents(a - r, l - c, f - d, y - g).normalize(), e[4].setComponents(a - o, l - u, f - p, y - v).normalize(), e[5].setComponents(a + o, l + u, f + p, y + v).normalize(), this
        },
        intersectsObject: function() {
            var t = new tt;
            return function(e) {
                var n = e.geometry;
                return null === n.boundingSphere && n.computeBoundingSphere(), t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSprite: function() {
            var t = new tt;
            return function(e) {
                return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function(t) {
            for (var e = this.planes, n = t.center, i = -t.radius, r = 0; r < 6; r++) {
                if (e[r].distanceToPoint(n) < i) return !1
            }
            return !0
        },
        intersectsBox: function() {
            var t = new c,
                e = new c;
            return function(n) {
                for (var i = this.planes, r = 0; r < 6; r++) {
                    var o = i[r];
                    t.x = o.normal.x > 0 ? n.min.x : n.max.x, e.x = o.normal.x > 0 ? n.max.x : n.min.x, t.y = o.normal.y > 0 ? n.min.y : n.max.y, e.y = o.normal.y > 0 ? n.max.y : n.min.y, t.z = o.normal.z > 0 ? n.min.z : n.max.z, e.z = o.normal.z > 0 ? n.max.z : n.min.z;
                    var a = o.distanceToPoint(t),
                        s = o.distanceToPoint(e);
                    if (a < 0 && s < 0) return !1
                }
                return !0
            }
        }(),
        containsPoint: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++)
                if (e[n].distanceToPoint(t) < 0) return !1;
            return !0
        }
    }, ot.prototype = {
        constructor: ot,
        set: function(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        },
        at: function(t, e) {
            return (e || new c).copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
        },
        recast: function() {
            var t = new c;
            return function(e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(),
        closestPointToPoint: function(t, e) {
            var n = e || new c;
            n.subVectors(t, this.origin);
            var i = n.dot(this.direction);
            return i < 0 ? n.copy(this.origin) : n.copy(this.direction).multiplyScalar(i).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function() {
            var t = new c;
            return function(e) {
                var n = t.subVectors(e, this.origin).dot(this.direction);
                return n < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(n).add(this.origin), t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: function() {
            var t = new c,
                e = new c,
                n = new c;
            return function(i, r, o, a) {
                t.copy(i).add(r).multiplyScalar(.5), e.copy(r).sub(i).normalize(), n.copy(this.origin).sub(t);
                var s, c, u, l, h = .5 * i.distanceTo(r),
                    d = -this.direction.dot(e),
                    p = n.dot(this.direction),
                    f = -n.dot(e),
                    m = n.lengthSq(),
                    g = Math.abs(1 - d * d);
                if (g > 0)
                    if (s = d * f - p, c = d * p - f, l = h * g, s >= 0)
                        if (c >= -l)
                            if (c <= l) {
                                var v = 1 / g;
                                s *= v, c *= v, u = s * (s + d * c + 2 * p) + c * (d * s + c + 2 * f) + m
                            } else c = h, s = Math.max(0, -(d * c + p)), u = -s * s + c * (c + 2 * f) + m;
                else c = -h, s = Math.max(0, -(d * c + p)), u = -s * s + c * (c + 2 * f) + m;
                else c <= -l ? (s = Math.max(0, -(-d * h + p)), c = s > 0 ? -h : Math.min(Math.max(-h, -f), h), u = -s * s + c * (c + 2 * f) + m) : c <= l ? (s = 0, c = Math.min(Math.max(-h, -f), h), u = c * (c + 2 * f) + m) : (s = Math.max(0, -(d * h + p)), c = s > 0 ? h : Math.min(Math.max(-h, -f), h), u = -s * s + c * (c + 2 * f) + m);
                else c = d > 0 ? -h : h, s = Math.max(0, -(d * c + p)), u = -s * s + c * (c + 2 * f) + m;
                return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(e).multiplyScalar(c).add(t), u
            }
        }(),
        intersectSphere: function() {
            var t = new c;
            return function(e, n) {
                t.subVectors(e.center, this.origin);
                var i = t.dot(this.direction),
                    r = t.dot(t) - i * i,
                    o = e.radius * e.radius;
                if (r > o) return null;
                var a = Math.sqrt(o - r),
                    s = i - a,
                    c = i + a;
                return s < 0 && c < 0 ? null : s < 0 ? this.at(c, n) : this.at(s, n)
            }
        }(),
        intersectsSphere: function(t) {
            return this.distanceToPoint(t.center) <= t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        },
        intersectPlane: function(t, e) {
            var n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        },
        intersectBox: function(t, e) {
            var n, i, r, o, a, s, c = 1 / this.direction.x,
                u = 1 / this.direction.y,
                l = 1 / this.direction.z,
                h = this.origin;
            return c >= 0 ? (n = (t.min.x - h.x) * c, i = (t.max.x - h.x) * c) : (n = (t.max.x - h.x) * c, i = (t.min.x - h.x) * c), u >= 0 ? (r = (t.min.y - h.y) * u, o = (t.max.y - h.y) * u) : (r = (t.max.y - h.y) * u, o = (t.min.y - h.y) * u), n > o || r > i ? null : ((r > n || n !== n) && (n = r), (o < i || i !== i) && (i = o), l >= 0 ? (a = (t.min.z - h.z) * l, s = (t.max.z - h.z) * l) : (a = (t.max.z - h.z) * l, s = (t.min.z - h.z) * l), n > s || a > i ? null : ((a > n || n !== n) && (n = a), (s < i || i !== i) && (i = s), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
        },
        intersectsBox: function() {
            var t = new c;
            return function(e) {
                return null !== this.intersectBox(e, t)
            }
        }(),
        intersectTriangle: function() {
            var t = new c,
                e = new c,
                n = new c,
                i = new c;
            return function(r, o, a, s, c) {
                e.subVectors(o, r), n.subVectors(a, r), i.crossVectors(e, n);
                var u, l = this.direction.dot(i);
                if (l > 0) {
                    if (s) return null;
                    u = 1
                } else {
                    if (!(l < 0)) return null;
                    u = -1, l = -l
                }
                t.subVectors(this.origin, r);
                var h = u * this.direction.dot(n.crossVectors(t, n));
                if (h < 0) return null;
                var d = u * this.direction.dot(e.cross(t));
                if (d < 0) return null;
                if (h + d > l) return null;
                var p = -u * t.dot(i);
                return p < 0 ? null : this.at(p / l, c)
            }
        }(),
        applyMatrix4: function(t) {
            return this.direction.add(this.origin).applyMatrix4(t), this.origin.applyMatrix4(t), this.direction.sub(this.origin), this.direction.normalize(), this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }, at.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], at.DefaultOrder = "XYZ", at.prototype = {
        constructor: at,
        isEuler: !0,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t, this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(t) {
            this._order = t, this.onChangeCallback()
        },
        set: function(t, e, n, i) {
            return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(t, e, n) {
            var i = $a.clamp,
                r = t.elements,
                o = r[0],
                a = r[4],
                s = r[8],
                c = r[1],
                u = r[5],
                l = r[9],
                h = r[2],
                d = r[6],
                p = r[10];
            return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(i(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, p), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(d, u), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-i(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(c, u)) : (this._y = Math.atan2(-h, o), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-a, u)) : (this._y = 0, this._z = Math.atan2(c, o))) : "ZYX" === e ? (this._y = Math.asin(-i(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-a, u))) : "YZX" === e ? (this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, u), this._y = Math.atan2(-h, o)) : (this._x = 0, this._y = Math.atan2(s, p))) : "XZY" === e ? (this._z = Math.asin(-i(a, -1, 1)), Math.abs(a) < .99999 ? (this._x = Math.atan2(d, u),
                this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-l, p), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== n && this.onChangeCallback(), this
        },
        setFromQuaternion: function() {
            var t;
            return function(e, n, i) {
                return void 0 === t && (t = new u), t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, n, i)
            }
        }(),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function() {
            var t = new s;
            return function(e) {
                return t.setFromEuler(this), this.setFromQuaternion(t, e)
            }
        }(),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new c(this._x, this._y, this._z)
        },
        onChange: function(t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function() {}
    }, st.prototype = {
        constructor: st,
        set: function(t) {
            this.mask = 1 << t
        },
        enable: function(t) {
            this.mask |= 1 << t
        },
        toggle: function(t) {
            this.mask ^= 1 << t
        },
        disable: function(t) {
            this.mask &= ~(1 << t)
        },
        test: function(t) {
            return 0 != (this.mask & t.mask)
        }
    };
    var ds = 0;
    ct.DefaultUp = new c(0, 1, 0), ct.DefaultMatrixAutoUpdate = !0, ct.prototype = {
        constructor: ct,
        isObject3D: !0,
        applyMatrix: function(t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function() {
            var t = new s;
            return function(e, n) {
                return t.setFromAxisAngle(e, n), this.quaternion.multiply(t), this
            }
        }(),
        rotateX: function() {
            var t = new c(1, 0, 0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function() {
            var t = new c(0, 1, 0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function() {
            var t = new c(0, 0, 1);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function() {
            var t = new c;
            return function(e, n) {
                return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(n)), this
            }
        }(),
        translateX: function() {
            var t = new c(1, 0, 0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function() {
            var t = new c(0, 1, 0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function() {
            var t = new c(0, 0, 1);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var t = new u;
            return function(e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var t = new u;
            return function(e) {
                t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
            }
        }(),
        add: function(t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                type: "added"
            }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        },
        remove: function(t) {
            if (arguments.length > 1)
                for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
            var n = this.children.indexOf(t); - 1 !== n && (t.parent = null, t.dispatchEvent({
                type: "removed"
            }), this.children.splice(n, 1))
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e) return this;
            for (var n = 0, i = this.children.length; n < i; n++) {
                var r = this.children[n],
                    o = r.getObjectByProperty(t, e);
                if (void 0 !== o) return o
            }
        },
        getWorldPosition: function(t) {
            var e = t || new c;
            return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var t = new c,
                e = new c;
            return function(n) {
                var i = n || new s;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, i, e), i
            }
        }(),
        getWorldRotation: function() {
            var t = new s;
            return function(e) {
                var n = e || new at;
                return this.getWorldQuaternion(t), n.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var t = new c,
                e = new s;
            return function(n) {
                var i = n || new c;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i
            }
        }(),
        getWorldDirection: function() {
            var t = new s;
            return function(e) {
                var n = e || new c;
                return this.getWorldQuaternion(t), n.set(0, 0, 1).applyQuaternion(t)
            }
        }(),
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            !0 === this.matrixAutoUpdate && this.updateMatrix(), !0 !== this.matrixWorldNeedsUpdate && !0 !== t || (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = this.children, n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
        },
        toJSON: function(t) {
            function e(t) {
                var e = [];
                for (var n in t) {
                    var i = t[n];
                    delete i.metadata, e.push(i)
                }
                return e
            }
            var n = void 0 === t || "" === t,
                i = {};
            n && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            }, i.metadata = {
                version: 4.4,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var r = {};
            if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), !0 === this.castShadow && (r.castShadow = !0), !0 === this.receiveShadow && (r.receiveShadow = !0), !1 === this.visible && (r.visible = !1), r.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)), r.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)), r.material = this.material.uuid), this.children.length > 0) {
                r.children = [];
                for (var o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(t).object)
            }
            if (n) {
                var a = e(t.geometries),
                    s = e(t.materials),
                    c = e(t.textures),
                    u = e(t.images);
                a.length > 0 && (i.geometries = a), s.length > 0 && (i.materials = s), c.length > 0 && (i.textures = c), u.length > 0 && (i.images = u)
            }
            return i.object = r, i
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (var n = 0; n < t.children.length; n++) {
                    var i = t.children[n];
                    this.add(i.clone())
                }
            return this
        }
    }, Object.assign(ct.prototype, e.prototype), ut.prototype = {
        constructor: ut,
        set: function(t, e) {
            return this.start.copy(t), this.end.copy(e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        },
        getCenter: function(t) {
            return (t || new c).addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            return (t || new c).subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            var n = e || new c;
            return this.delta(n).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function() {
            var t = new c,
                e = new c;
            return function(n, i) {
                t.subVectors(n, this.start), e.subVectors(this.end, this.start);
                var r = e.dot(e),
                    o = e.dot(t),
                    a = o / r;
                return i && (a = $a.clamp(a, 0, 1)), a
            }
        }(),
        closestPointToPoint: function(t, e, n) {
            var i = this.closestPointToPointParameter(t, e),
                r = n || new c;
            return this.delta(r).multiplyScalar(i).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }, lt.normal = function() {
        var t = new c;
        return function(e, n, i, r) {
            var o = r || new c;
            o.subVectors(i, n), t.subVectors(e, n), o.cross(t);
            var a = o.lengthSq();
            return a > 0 ? o.multiplyScalar(1 / Math.sqrt(a)) : o.set(0, 0, 0)
        }
    }(), lt.barycoordFromPoint = function() {
        var t = new c,
            e = new c,
            n = new c;
        return function(i, r, o, a, s) {
            t.subVectors(a, r), e.subVectors(o, r), n.subVectors(i, r);
            var u = t.dot(t),
                l = t.dot(e),
                h = t.dot(n),
                d = e.dot(e),
                p = e.dot(n),
                f = u * d - l * l,
                m = s || new c;
            if (0 === f) return m.set(-2, -1, -1);
            var g = 1 / f,
                v = (d * h - l * p) * g,
                y = (u * p - l * h) * g;
            return m.set(1 - v - y, y, v)
        }
    }(), lt.containsPoint = function() {
        var t = new c;
        return function(e, n, i, r) {
            var o = lt.barycoordFromPoint(e, n, i, r, t);
            return o.x >= 0 && o.y >= 0 && o.x + o.y <= 1
        }
    }(), lt.prototype = {
        constructor: lt,
        set: function(t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
        },
        setFromPointsAndIndices: function(t, e, n, i) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        },
        area: function() {
            var t = new c,
                e = new c;
            return function() {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(),
        midpoint: function(t) {
            return (t || new c).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(t) {
            return lt.normal(this.a, this.b, this.c, t)
        },
        plane: function(t) {
            return (t || new nt).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(t, e) {
            return lt.barycoordFromPoint(t, this.a, this.b, this.c, e)
        },
        containsPoint: function(t) {
            return lt.containsPoint(t, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var t, e, n, i;
            return function(r, o) {
                void 0 === t && (t = new nt, e = [new ut, new ut, new ut], n = new c, i = new c);
                var a = o || new c,
                    s = 1 / 0;
                if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(r, n), !0 === this.containsPoint(n)) a.copy(n);
                else {
                    e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a);
                    for (var u = 0; u < e.length; u++) {
                        e[u].closestPointToPoint(n, !0, i);
                        var l = n.distanceToSquared(i);
                        l < s && (s = l, a.copy(i))
                    }
                }
                return a
            }
        }(),
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }, ht.prototype = {
        constructor: ht,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
            for (var e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (var e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    }, dt.prototype = Object.create(J.prototype), dt.prototype.constructor = dt, dt.prototype.isMeshBasicMaterial = !0, dt.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    }, pt.prototype = {
        constructor: pt,
        isBufferAttribute: !0,
        set needsUpdate(t) {
            !0 === t && this.version++
        },
        setArray: function(t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t
        },
        setDynamic: function(t) {
            return this.dynamic = t, this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
        },
        copyAt: function(t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for (var i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t), this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new W), e[n++] = o.r, e[n++] = o.g, e[n++] = o.b
            }
            return this
        },
        copyIndicesArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var o = t[i];
                e[n++] = o.a, e[n++] = o.b, e[n++] = o.c
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, i = 0, r = 0, o = t.length; r < o; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new n), e[i++] = a.x, e[i++] = a.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, r = t.length; i < r; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new c), e[n++] = o.x, e[n++] = o.y, e[n++] = o.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, o = t.length; i < o; i++) {
                var a = t[i];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new r), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z, e[n++] = a.w
            }
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e, this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e, this
        },
        setXY: function(t, e, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
        },
        setXYZ: function(t, e, n, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
        },
        setXYZW: function(t, e, n, i, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
        },
        onUpload: function(t) {
            return this.onUploadCallback = t, this
        },
        clone: function() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
    }, ft.prototype = Object.create(pt.prototype), ft.prototype.constructor = ft, mt.prototype = Object.create(pt.prototype), mt.prototype.constructor = mt, gt.prototype = Object.create(pt.prototype), gt.prototype.constructor = gt, vt.prototype = Object.create(pt.prototype), vt.prototype.constructor = vt, yt.prototype = Object.create(pt.prototype), yt.prototype.constructor = yt, _t.prototype = Object.create(pt.prototype), _t.prototype.constructor = _t, bt.prototype = Object.create(pt.prototype), bt.prototype.constructor = bt, xt.prototype = Object.create(pt.prototype), xt.prototype.constructor = xt, wt.prototype = Object.create(pt.prototype), wt.prototype.constructor = wt, Object.assign(Mt.prototype, {
        computeGroups: function(t) {
            for (var e, n = [], i = void 0, r = t.faces, o = 0; o < r.length; o++) {
                var a = r[o];
                a.materialIndex !== i && (i = a.materialIndex, void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), e = {
                    start: 3 * o,
                    materialIndex: i
                })
            }
            void 0 !== e && (e.count = 3 * o - e.start, n.push(e)), this.groups = n
        },
        fromGeometry: function(t) {
            var e, i = t.faces,
                r = t.vertices,
                o = t.faceVertexUvs,
                a = o[0] && o[0].length > 0,
                s = o[1] && o[1].length > 0,
                c = t.morphTargets,
                u = c.length;
            if (u > 0) {
                e = [];
                for (var l = 0; l < u; l++) e[l] = [];
                this.morphTargets.position = e
            }
            var h, d = t.morphNormals,
                p = d.length;
            if (p > 0) {
                h = [];
                for (var l = 0; l < p; l++) h[l] = [];
                this.morphTargets.normal = h
            }
            for (var f = t.skinIndices, m = t.skinWeights, g = f.length === r.length, v = m.length === r.length, l = 0; l < i.length; l++) {
                var y = i[l];
                this.vertices.push(r[y.a], r[y.b], r[y.c]);
                var _ = y.vertexNormals;
                if (3 === _.length) this.normals.push(_[0], _[1], _[2]);
                else {
                    var b = y.normal;
                    this.normals.push(b, b, b)
                }
                var x = y.vertexColors;
                if (3 === x.length) this.colors.push(x[0], x[1], x[2]);
                else {
                    var w = y.color;
                    this.colors.push(w, w, w)
                }
                if (!0 === a) {
                    var M = o[0][l];
                    void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new n, new n, new n))
                }
                if (!0 === s) {
                    var M = o[1][l];
                    void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new n, new n, new n))
                }
                for (var E = 0; E < u; E++) {
                    var T = c[E].vertices;
                    e[E].push(T[y.a], T[y.b], T[y.c])
                }
                for (var E = 0; E < p; E++) {
                    var S = d[E].vertexNormals[l];
                    h[E].push(S.a, S.b, S.c)
                }
                g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }
    });
    var ps = 0;
    St.prototype = {
        constructor: St,
        isGeometry: !0,
        applyMatrix: function(t) {
            for (var e = (new et).getNormalMatrix(t), n = 0, i = this.vertices.length; n < i; n++) {
                this.vertices[n].applyMatrix4(t)
            }
            for (var n = 0, i = this.faces.length; n < i; n++) {
                var r = this.faces[n];
                r.normal.applyMatrix3(e).normalize();
                for (var o = 0, a = r.vertexNormals.length; o < a; o++) r.vertexNormals[o].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        },
        rotateX: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function() {
            var t;
            return function(e, n, i) {
                return void 0 === t && (t = new u), t.makeTranslation(e, n, i), this.applyMatrix(t), this
            }
        }(),
        scale: function() {
            var t;
            return function(e, n, i) {
                return void 0 === t && (t = new u), t.makeScale(e, n, i), this.applyMatrix(t), this
            }
        }(),
        lookAt: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new ct), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        fromBufferGeometry: function(t) {
            function e(t, e, n, r) {
                var o = void 0 !== s ? [d[t].clone(), d[e].clone(), d[n].clone()] : [],
                    a = void 0 !== u ? [i.colors[t].clone(), i.colors[e].clone(), i.colors[n].clone()] : [],
                    c = new ht(t, e, n, o, a, r);
                i.faces.push(c), void 0 !== l && i.faceVertexUvs[0].push([p[t].clone(), p[e].clone(), p[n].clone()]), void 0 !== h && i.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[n].clone()])
            }
            var i = this,
                r = null !== t.index ? t.index.array : void 0,
                o = t.attributes,
                a = o.position.array,
                s = void 0 !== o.normal ? o.normal.array : void 0,
                u = void 0 !== o.color ? o.color.array : void 0,
                l = void 0 !== o.uv ? o.uv.array : void 0,
                h = void 0 !== o.uv2 ? o.uv2.array : void 0;
            void 0 !== h && (this.faceVertexUvs[1] = []);
            for (var d = [], p = [], f = [], m = 0, g = 0; m < a.length; m += 3, g += 2) i.vertices.push(new c(a[m], a[m + 1], a[m + 2])), void 0 !== s && d.push(new c(s[m], s[m + 1], s[m + 2])), void 0 !== u && i.colors.push(new W(u[m], u[m + 1], u[m + 2])), void 0 !== l && p.push(new n(l[g], l[g + 1])), void 0 !== h && f.push(new n(h[g], h[g + 1]));
            if (void 0 !== r) {
                var v = t.groups;
                if (v.length > 0)
                    for (var m = 0; m < v.length; m++)
                        for (var y = v[m], _ = y.start, b = y.count, g = _, x = _ + b; g < x; g += 3) e(r[g], r[g + 1], r[g + 2], y.materialIndex);
                else
                    for (var m = 0; m < r.length; m += 3) e(r[m], r[m + 1], r[m + 2])
            } else
                for (var m = 0; m < a.length / 3; m += 3) e(m, m + 1, m + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center,
                e = this.boundingSphere.radius,
                n = 0 === e ? 1 : 1 / e,
                i = new u;
            return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix(i), this
        },
        computeFaceNormals: function() {
            for (var t = new c, e = new c, n = 0, i = this.faces.length; n < i; n++) {
                var r = this.faces[n],
                    o = this.vertices[r.a],
                    a = this.vertices[r.b],
                    s = this.vertices[r.c];
                t.subVectors(s, a), e.subVectors(o, a), t.cross(e), t.normalize(), r.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            void 0 === t && (t = !0);
            var e, n, i, r, o, a;
            for (a = new Array(this.vertices.length), e = 0, n = this.vertices.length; e < n; e++) a[e] = new c;
            if (t) {
                var s, u, l, h = new c,
                    d = new c;
                for (i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], s = this.vertices[o.a], u = this.vertices[o.b], l = this.vertices[o.c], h.subVectors(l, u), d.subVectors(s, u), h.cross(d), a[o.a].add(h), a[o.b].add(h), a[o.c].add(h)
            } else
                for (this.computeFaceNormals(), i = 0, r = this.faces.length; i < r; i++) o = this.faces[i], a[o.a].add(o.normal), a[o.b].add(o.normal), a[o.c].add(o.normal);
            for (e = 0, n = this.vertices.length; e < n; e++) a[e].normalize();
            for (i = 0, r = this.faces.length; i < r; i++) {
                o = this.faces[i];
                var p = o.vertexNormals;
                3 === p.length ? (p[0].copy(a[o.a]), p[1].copy(a[o.b]), p[2].copy(a[o.c])) : (p[0] = a[o.a].clone(), p[1] = a[o.b].clone(), p[2] = a[o.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var t, e, n;
            for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
                n = this.faces[t];
                var i = n.vertexNormals;
                3 === i.length ? (i[0].copy(n.normal), i[1].copy(n.normal), i[2].copy(n.normal)) : (i[0] = n.normal.clone(), i[1] = n.normal.clone(), i[2] = n.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, n, i, r;
            for (n = 0, i = this.faces.length; n < i; n++)
                for (r = this.faces[n], r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone();
            var o = new St;
            for (o.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                    var a, s, u = this.morphNormals[t].faceNormals,
                        l = this.morphNormals[t].vertexNormals;
                    for (n = 0, i = this.faces.length; n < i; n++) a = new c, s = {
                        a: new c,
                        b: new c,
                        c: new c
                    }, u.push(a), l.push(s)
                }
                var h = this.morphNormals[t];
                o.vertices = this.morphTargets[t].vertices, o.computeFaceNormals(), o.computeVertexNormals();
                var a, s;
                for (n = 0, i = this.faces.length; n < i; n++) r = this.faces[n], a = h.faceNormals[n], s = h.vertexNormals[n], a.copy(r.normal), s.a.copy(r.vertexNormals[0]), s.b.copy(r.vertexNormals[1]), s.c.copy(r.vertexNormals[2])
            }
            for (n = 0, i = this.faces.length; n < i; n++) r = this.faces[n], r.normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
        },
        computeLineDistances: function() {
            for (var t = 0, e = this.vertices, n = 0, i = e.length; n < i; n++) n > 0 && (t += e[n].distanceTo(e[n - 1])), this.lineDistances[n] = t
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new $), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new tt), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, n) {
            if (!1 === (t && t.isGeometry)) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
            var i, r = this.vertices.length,
                o = this.vertices,
                a = t.vertices,
                s = this.faces,
                c = t.faces,
                u = this.faceVertexUvs[0],
                l = t.faceVertexUvs[0],
                h = this.colors,
                d = t.colors;
            void 0 === n && (n = 0), void 0 !== e && (i = (new et).getNormalMatrix(e));
            for (var p = 0, f = a.length; p < f; p++) {
                var m = a[p],
                    g = m.clone();
                void 0 !== e && g.applyMatrix4(e), o.push(g)
            }
            for (var p = 0, f = d.length; p < f; p++) h.push(d[p].clone());
            for (p = 0, f = c.length; p < f; p++) {
                var v, y, _, b = c[p],
                    x = b.vertexNormals,
                    w = b.vertexColors;
                v = new ht(b.a + r, b.b + r, b.c + r), v.normal.copy(b.normal), void 0 !== i && v.normal.applyMatrix3(i).normalize();
                for (var M = 0, E = x.length; M < E; M++) y = x[M].clone(), void 0 !== i && y.applyMatrix3(i).normalize(), v.vertexNormals.push(y);
                v.color.copy(b.color);
                for (var M = 0, E = w.length; M < E; M++) _ = w[M], v.vertexColors.push(_.clone());
                v.materialIndex = b.materialIndex + n, s.push(v)
            }
            for (p = 0, f = l.length; p < f; p++) {
                var T = l[p],
                    S = [];
                if (void 0 !== T) {
                    for (var M = 0, E = T.length; M < E; M++) S.push(T[M].clone());
                    u.push(S)
                }
            }
        },
        mergeMesh: function(t) {
            if (!1 === (t && t.isMesh)) return void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t);
            t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)
        },
        mergeVertices: function() {
            var t, e, n, i, r, o, a, s, c = {},
                u = [],
                l = [],
                h = Math.pow(10, 4);
            for (n = 0, i = this.vertices.length; n < i; n++) t = this.vertices[n], e = Math.round(t.x * h) + "_" + Math.round(t.y * h) + "_" + Math.round(t.z * h), void 0 === c[e] ? (c[e] = n, u.push(this.vertices[n]), l[n] = u.length - 1) : l[n] = l[c[e]];
            var d = [];
            for (n = 0, i = this.faces.length; n < i; n++) {
                r = this.faces[n], r.a = l[r.a], r.b = l[r.b], r.c = l[r.c], o = [r.a, r.b, r.c];
                for (var p = 0; p < 3; p++)
                    if (o[p] === o[(p + 1) % 3]) {
                        d.push(n);
                        break
                    }
            }
            for (n = d.length - 1; n >= 0; n--) {
                var f = d[n];
                for (this.faces.splice(f, 1), a = 0, s = this.faceVertexUvs.length; a < s; a++) this.faceVertexUvs[a].splice(f, 1)
            }
            var m = this.vertices.length - u.length;
            return this.vertices = u, m
        },
        sortFacesByMaterialIndex: function() {
            function t(t, e) {
                return t.materialIndex - e.materialIndex
            }
            for (var e = this.faces, n = e.length, i = 0; i < n; i++) e[i]._id = i;
            e.sort(t);
            var r, o, a = this.faceVertexUvs[0],
                s = this.faceVertexUvs[1];
            a && a.length === n && (r = []), s && s.length === n && (o = []);
            for (var i = 0; i < n; i++) {
                var c = e[i]._id;
                r && r.push(a[c]), o && o.push(s[c])
            }
            r && (this.faceVertexUvs[0] = r), o && (this.faceVertexUvs[1] = o)
        },
        toJSON: function() {
            function t(t, e, n) {
                return n ? t | 1 << e : t & ~(1 << e)
            }

            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== d[e] ? d[e] : (d[e] = h.length / 3, h.push(t.x, t.y, t.z), d[e])
            }

            function n(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== f[e] ? f[e] : (f[e] = p.length, p.push(t.getHex()), f[e])
            }

            function i(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2, m.push(t.x, t.y), g[e])
            }
            var r = {
                metadata: {
                    version: 4.4,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
                var o = this.parameters;
                for (var a in o) void 0 !== o[a] && (r[a] = o[a]);
                return r
            }
            for (var s = [], c = 0; c < this.vertices.length; c++) {
                var u = this.vertices[c];
                s.push(u.x, u.y, u.z)
            }
            for (var l = [], h = [], d = {}, p = [], f = {}, m = [], g = {}, c = 0; c < this.faces.length; c++) {
                var v = this.faces[c],
                    y = void 0 !== this.faceVertexUvs[0][c],
                    _ = v.normal.length() > 0,
                    b = v.vertexNormals.length > 0,
                    x = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
                    w = v.vertexColors.length > 0,
                    M = 0;
                if (M = t(M, 0, 0), M = t(M, 1, !0), M = t(M, 2, !1), M = t(M, 3, y), M = t(M, 4, _), M = t(M, 5, b), M = t(M, 6, x), M = t(M, 7, w), l.push(M), l.push(v.a, v.b, v.c), l.push(v.materialIndex), y) {
                    var E = this.faceVertexUvs[0][c];
                    l.push(i(E[0]), i(E[1]), i(E[2]))
                }
                if (_ && l.push(e(v.normal)), b) {
                    var T = v.vertexNormals;
                    l.push(e(T[0]), e(T[1]), e(T[2]))
                }
                if (x && l.push(n(v.color)), w) {
                    var S = v.vertexColors;
                    l.push(n(S[0]), n(S[1]), n(S[2]))
                }
            }
            return r.data = {}, r.data.vertices = s, r.data.normals = h, p.length > 0 && (r.data.colors = p), m.length > 0 && (r.data.uvs = [m]), r.data.faces = l, r
        },
        clone: function() {
            return (new St).copy(this)
        },
        copy: function(t) {
            var e, n, i, r, o, a;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var s = t.vertices;
            for (e = 0, n = s.length; e < n; e++) this.vertices.push(s[e].clone());
            var c = t.colors;
            for (e = 0, n = c.length; e < n; e++) this.colors.push(c[e].clone());
            var u = t.faces;
            for (e = 0, n = u.length; e < n; e++) this.faces.push(u[e].clone());
            for (e = 0, n = t.faceVertexUvs.length; e < n; e++) {
                var l = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), i = 0, r = l.length; i < r; i++) {
                    var h = l[i],
                        d = [];
                    for (o = 0, a = h.length; o < a; o++) {
                        var p = h[o];
                        d.push(p.clone())
                    }
                    this.faceVertexUvs[e].push(d)
                }
            }
            var f = t.morphTargets;
            for (e = 0, n = f.length; e < n; e++) {
                var m = {};
                if (m.name = f[e].name, void 0 !== f[e].vertices)
                    for (m.vertices = [], i = 0, r = f[e].vertices.length; i < r; i++) m.vertices.push(f[e].vertices[i].clone());
                if (void 0 !== f[e].normals)
                    for (m.normals = [], i = 0, r = f[e].normals.length; i < r; i++) m.normals.push(f[e].normals[i].clone());
                this.morphTargets.push(m)
            }
            var g = t.morphNormals;
            for (e = 0, n = g.length; e < n; e++) {
                var v = {};
                if (void 0 !== g[e].vertexNormals)
                    for (v.vertexNormals = [], i = 0, r = g[e].vertexNormals.length; i < r; i++) {
                        var y = g[e].vertexNormals[i],
                            _ = {};
                        _.a = y.a.clone(), _.b = y.b.clone(), _.c = y.c.clone(), v.vertexNormals.push(_)
                    }
                if (void 0 !== g[e].faceNormals)
                    for (v.faceNormals = [], i = 0, r = g[e].faceNormals.length; i < r; i++) v.faceNormals.push(g[e].faceNormals[i].clone());
                this.morphNormals.push(v)
            }
            var b = t.skinWeights;
            for (e = 0, n = b.length; e < n; e++) this.skinWeights.push(b[e].clone());
            var x = t.skinIndices;
            for (e = 0, n = x.length; e < n; e++) this.skinIndices.push(x[e].clone());
            var w = t.lineDistances;
            for (e = 0, n = w.length; e < n; e++) this.lineDistances.push(w[e]);
            var M = t.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var E = t.boundingSphere;
            return null !== E && (this.boundingSphere = E.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, Object.assign(St.prototype, e.prototype), At.prototype = {
        constructor: At,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            Array.isArray(t) ? this.index = new(Et(t) > 65535 ? bt : yt)(t, 1) : this.index = t
        },
        addAttribute: function(t, e) {
            return !1 === (e && e.isBufferAttribute) && !1 === (e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(t, new pt(arguments[1], arguments[2]))) : "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(e)) : (this.attributes[t] = e, this)
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        removeAttribute: function(t) {
            return delete this.attributes[t], this
        },
        addGroup: function(t, e, n) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== n ? n : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
            var n = this.attributes.normal;
            if (void 0 !== n) {
                (new et).getNormalMatrix(t).applyToBufferAttribute(n), n.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u), t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function() {
            var t;
            return function(e, n, i) {
                return void 0 === t && (t = new u), t.makeTranslation(e, n, i), this.applyMatrix(t), this
            }
        }(),
        scale: function() {
            var t;
            return function(e, n, i) {
                return void 0 === t && (t = new u), t.makeScale(e, n, i), this.applyMatrix(t), this
            }
        }(),
        lookAt: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new ct), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        setFromObject: function(t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var n = new xt(3 * e.vertices.length, 3),
                    i = new xt(3 * e.colors.length, 3);
                if (this.addAttribute("position", n.copyVector3sArray(e.vertices)), this.addAttribute("color", i.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var r = new xt(e.lineDistances.length, 1);
                    this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                    null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        updateFromObject: function(t) {
            var e = t.geometry;
            if (t.isMesh) {
                var n = e.__directGeometry;
                if (!0 === e.elementsNeedUpdate && (n = void 0, e.elementsNeedUpdate = !1), void 0 === n) return this.fromGeometry(e);
                n.verticesNeedUpdate = e.verticesNeedUpdate, n.normalsNeedUpdate = e.normalsNeedUpdate, n.colorsNeedUpdate = e.colorsNeedUpdate, n.uvsNeedUpdate = e.uvsNeedUpdate, n.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = n
            }
            var i;
            return !0 === e.verticesNeedUpdate && (i = this.attributes.position, void 0 !== i && (i.copyVector3sArray(e.vertices), i.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (i = this.attributes.normal, void 0 !== i && (i.copyVector3sArray(e.normals), i.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (i = this.attributes.color, void 0 !== i && (i.copyColorsArray(e.colors), i.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (i = this.attributes.uv, void 0 !== i && (i.copyVector2sArray(e.uvs), i.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (i = this.attributes.lineDistance, void 0 !== i && (i.copyArray(e.lineDistances), i.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new Mt).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new pt(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                var n = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new pt(n, 3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var i = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new pt(i, 3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var r = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new pt(r, 2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var o = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new pt(o, 2).copyVector2sArray(t.uvs2))
            }
            if (t.indices.length > 0) {
                var a = Et(t.indices) > 65535 ? Uint32Array : Uint16Array,
                    s = new a(3 * t.indices.length);
                this.setIndex(new pt(s, 1).copyIndicesArray(t.indices))
            }
            this.groups = t.groups;
            for (var c in t.morphTargets) {
                for (var u = [], l = t.morphTargets[c], h = 0, d = l.length; h < d; h++) {
                    var p = l[h],
                        f = new xt(3 * p.length, 3);
                    u.push(f.copyVector3sArray(p))
                }
                this.morphAttributes[c] = u
            }
            if (t.skinIndices.length > 0) {
                var m = new xt(4 * t.skinIndices.length, 4);
                this.addAttribute("skinIndex", m.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var g = new xt(4 * t.skinWeights.length, 4);
                this.addAttribute("skinWeight", g.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new $);
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var t = new $,
                e = new c;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new tt);
                var n = this.attributes.position;
                if (n) {
                    var i = this.boundingSphere.center;
                    t.setFromBufferAttribute(n), t.getCenter(i);
                    for (var r = 0, o = 0, a = n.count; o < a; o++) e.x = n.getX(o), e.y = n.getY(o), e.z = n.getZ(o), r = Math.max(r, i.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index,
                e = this.attributes,
                n = this.groups;
            if (e.position) {
                var i = e.position.array;
                if (void 0 === e.normal) this.addAttribute("normal", new pt(new Float32Array(i.length), 3));
                else
                    for (var r = e.normal.array, o = 0, a = r.length; o < a; o++) r[o] = 0;
                var s, u, l, h = e.normal.array,
                    d = new c,
                    p = new c,
                    f = new c,
                    m = new c,
                    g = new c;
                if (t) {
                    var v = t.array;
                    0 === n.length && this.addGroup(0, v.length);
                    for (var y = 0, _ = n.length; y < _; ++y)
                        for (var b = n[y], x = b.start, w = b.count, o = x, a = x + w; o < a; o += 3) s = 3 * v[o + 0], u = 3 * v[o + 1], l = 3 * v[o + 2], d.fromArray(i, s), p.fromArray(i, u), f.fromArray(i, l), m.subVectors(f, p), g.subVectors(d, p), m.cross(g), h[s] += m.x, h[s + 1] += m.y, h[s + 2] += m.z, h[u] += m.x, h[u + 1] += m.y, h[u + 2] += m.z, h[l] += m.x, h[l + 1] += m.y, h[l + 2] += m.z
                } else
                    for (var o = 0, a = i.length; o < a; o += 9) d.fromArray(i, o), p.fromArray(i, o + 3), f.fromArray(i, o + 6), m.subVectors(f, p), g.subVectors(d, p), m.cross(g), h[o] = m.x, h[o + 1] = m.y, h[o + 2] = m.z, h[o + 3] = m.x, h[o + 4] = m.y, h[o + 5] = m.z, h[o + 6] = m.x, h[o + 7] = m.y, h[o + 8] = m.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (!1 === (t && t.isBufferGeometry)) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0);
            var n = this.attributes;
            for (var i in n)
                if (void 0 !== t.attributes[i])
                    for (var r = n[i], o = r.array, a = t.attributes[i], s = a.array, c = a.itemSize, u = 0, l = c * e; u < s.length; u++, l++) o[l] = s[u];
            return this
        },
        normalizeNormals: function() {
            for (var t, e, n, i, r = this.attributes.normal.array, o = 0, a = r.length; o < a; o += 3) t = r[o], e = r[o + 1], n = r[o + 2], i = 1 / Math.sqrt(t * t + e * e + n * n), r[o] *= i, r[o + 1] *= i, r[o + 2] *= i
        },
        toNonIndexed: function() {
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var t = new At,
                e = this.index.array,
                n = this.attributes;
            for (var i in n) {
                for (var r = n[i], o = r.array, a = r.itemSize, s = new o.constructor(e.length * a), c = 0, u = 0, l = 0, h = e.length; l < h; l++) {
                    c = e[l] * a;
                    for (var d = 0; d < a; d++) s[u++] = o[c++]
                }
                t.addAttribute(i, new pt(s, a))
            }
            return t
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.4,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var i = this.index;
            if (null !== i) {
                var r = Array.prototype.slice.call(i.array);
                t.data.index = {
                    type: i.array.constructor.name,
                    array: r
                }
            }
            var o = this.attributes;
            for (var n in o) {
                var a = o[n],
                    r = Array.prototype.slice.call(a.array);
                t.data.attributes[n] = {
                    itemSize: a.itemSize,
                    type: a.array.constructor.name,
                    array: r,
                    normalized: a.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (t.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            }), t
        },
        clone: function() {
            return (new At).copy(this)
        },
        copy: function(t) {
            var e, n, i;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
            var r = t.index;
            null !== r && this.setIndex(r.clone());
            var o = t.attributes;
            for (e in o) {
                var a = o[e];
                this.addAttribute(e, a.clone())
            }
            var s = t.morphAttributes;
            for (e in s) {
                var c = [],
                    u = s[e];
                for (n = 0, i = u.length; n < i; n++) c.push(u[n].clone());
                this.morphAttributes[e] = c
            }
            var l = t.groups;
            for (n = 0, i = l.length; n < i; n++) {
                var h = l[n];
                this.addGroup(h.start, h.count, h.materialIndex)
            }
            var d = t.boundingBox;
            null !== d && (this.boundingBox = d.clone());
            var p = t.boundingSphere;
            return null !== p && (this.boundingSphere = p.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }, At.MaxIndex = 65535, Object.assign(At.prototype, e.prototype), Lt.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: Lt,
        isMesh: !0,
        setDrawMode: function(t) {
            this.drawMode = t
        },
        copy: function(t) {
            return ct.prototype.copy.call(this, t), this.drawMode = t.drawMode, this
        },
        updateMorphTargets: function() {
            var t = this.geometry.morphTargets;
            if (void 0 !== t && t.length > 0) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var e = 0, n = t.length; e < n; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[t[e].name] = e
            }
        },
        raycast: function() {
            function t(t, e, n, i, r, o, a) {
                return lt.barycoordFromPoint(t, e, n, i, y), r.multiplyScalar(y.x), o.multiplyScalar(y.y), a.multiplyScalar(y.z), r.add(o).add(a), r.clone()
            }

            function e(t, e, n, i, r, o, a) {
                var s = t.material;
                if (null === (s.side === no ? n.intersectTriangle(o, r, i, !0, a) : n.intersectTriangle(i, r, o, s.side !== io, a))) return null;
                b.copy(a), b.applyMatrix4(t.matrixWorld);
                var c = e.ray.origin.distanceTo(b);
                return c < e.near || c > e.far ? null : {
                    distance: c,
                    point: b.clone(),
                    object: t
                }
            }

            function i(n, i, r, o, a, c, u, d) {
                s.fromBufferAttribute(o, c), l.fromBufferAttribute(o, u), h.fromBufferAttribute(o, d);
                var p = e(n, i, r, s, l, h, _);
                return p && (a && (m.fromBufferAttribute(a, c), g.fromBufferAttribute(a, u), v.fromBufferAttribute(a, d), p.uv = t(_, s, l, h, m, g, v)), p.face = new ht(c, u, d, lt.normal(s, l, h)), p.faceIndex = c), p
            }
            var r = new u,
                o = new ot,
                a = new tt,
                s = new c,
                l = new c,
                h = new c,
                d = new c,
                p = new c,
                f = new c,
                m = new n,
                g = new n,
                v = new n,
                y = new c,
                _ = new c,
                b = new c;
            return function(n, c) {
                var u = this.geometry,
                    y = this.material,
                    b = this.matrixWorld;
                if (void 0 !== y && (null === u.boundingSphere && u.computeBoundingSphere(), a.copy(u.boundingSphere), a.applyMatrix4(b), !1 !== n.ray.intersectsSphere(a) && (r.getInverse(b), o.copy(n.ray).applyMatrix4(r), null === u.boundingBox || !1 !== o.intersectsBox(u.boundingBox)))) {
                    var x;
                    if (u.isBufferGeometry) {
                        var w, M, E, T, S, A = u.index,
                            L = u.attributes.position,
                            R = u.attributes.uv;
                        if (null !== A)
                            for (T = 0, S = A.count; T < S; T += 3) w = A.getX(T), M = A.getX(T + 1), E = A.getX(T + 2), (x = i(this, n, o, L, R, w, M, E)) && (x.faceIndex = Math.floor(T / 3), c.push(x));
                        else
                            for (T = 0, S = L.count; T < S; T += 3) w = T, M = T + 1, E = T + 2, (x = i(this, n, o, L, R, w, M, E)) && (x.index = w, c.push(x))
                    } else if (u.isGeometry) {
                        var P, C, I, B, O = y && y.isMultiMaterial,
                            N = !0 === O ? y.materials : null,
                            U = u.vertices,
                            D = u.faces,
                            F = u.faceVertexUvs[0];
                        F.length > 0 && (B = F);
                        for (var z = 0, G = D.length; z < G; z++) {
                            var k = D[z],
                                H = !0 === O ? N[k.materialIndex] : y;
                            if (void 0 !== H) {
                                if (P = U[k.a], C = U[k.b], I = U[k.c], !0 === H.morphTargets) {
                                    var V = u.morphTargets,
                                        j = this.morphTargetInfluences;
                                    s.set(0, 0, 0), l.set(0, 0, 0), h.set(0, 0, 0);
                                    for (var W = 0, X = V.length; W < X; W++) {
                                        var q = j[W];
                                        if (0 !== q) {
                                            var Y = V[W].vertices;
                                            s.addScaledVector(d.subVectors(Y[k.a], P), q), l.addScaledVector(p.subVectors(Y[k.b], C), q), h.addScaledVector(f.subVectors(Y[k.c], I), q)
                                        }
                                    }
                                    s.add(P), l.add(C), h.add(I), P = s, C = l, I = h
                                }
                                if (x = e(this, n, o, P, C, I, _)) {
                                    if (B) {
                                        var Z = B[z];
                                        m.copy(Z[0]), g.copy(Z[1]), v.copy(Z[2]), x.uv = t(_, P, C, I, m, g, v)
                                    }
                                    x.face = k, x.faceIndex = z, c.push(x)
                                }
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Rt.prototype = Object.create(St.prototype), Rt.prototype.constructor = Rt, Pt.prototype = Object.create(At.prototype), Pt.prototype.constructor = Pt, Ct.prototype = Object.create(St.prototype), Ct.prototype.constructor = Ct, It.prototype = Object.create(At.prototype), It.prototype.constructor = It, Bt.prototype = Object.create(ct.prototype), Bt.prototype.constructor = Bt, Bt.prototype.isCamera = !0, Bt.prototype.getWorldDirection = function() {
        var t = new s;
        return function(e) {
            var n = e || new c;
            return this.getWorldQuaternion(t), n.set(0, 0, -1).applyQuaternion(t)
        }
    }(), Bt.prototype.lookAt = function() {
        var t = new u;
        return function(e) {
            t.lookAt(this.position, e, this.up), this.quaternion.setFromRotationMatrix(t)
        }
    }(), Bt.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }, Bt.prototype.copy = function(t) {
        return ct.prototype.copy.call(this, t), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
    }, Ot.prototype = Object.assign(Object.create(Bt.prototype), {
        constructor: Ot,
        isPerspectiveCamera: !0,
        copy: function(t) {
            return Bt.prototype.copy.call(this, t), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        },
        setFocalLength: function(t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * $a.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var t = Math.tan(.5 * $a.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * $a.RAD2DEG * Math.atan(Math.tan(.5 * $a.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, n, i, r, o) {
            this.aspect = t / e, this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: n,
                offsetY: i,
                width: r,
                height: o
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = this.near,
                e = t * Math.tan(.5 * $a.DEG2RAD * this.fov) / this.zoom,
                n = 2 * e,
                i = this.aspect * n,
                r = -.5 * i,
                o = this.view;
            if (null !== o) {
                var a = o.fullWidth,
                    s = o.fullHeight;
                r += o.offsetX * i / a, e -= o.offsetY * n / s, i *= o.width / a, n *= o.height / s
            }
            var c = this.filmOffset;
            0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far)
        },
        toJSON: function(t) {
            var e = ct.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    }), Nt.prototype = Object.assign(Object.create(Bt.prototype), {
        constructor: Nt,
        isOrthographicCamera: !0,
        copy: function(t) {
            return Bt.prototype.copy.call(this, t), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        },
        setViewOffset: function(t, e, n, i, r, o) {
            this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: n,
                offsetY: i,
                width: r,
                height: o
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                n = (this.right + this.left) / 2,
                i = (this.top + this.bottom) / 2,
                r = n - t,
                o = n + t,
                a = i + e,
                s = i - e;
            if (null !== this.view) {
                var c = this.zoom / (this.view.width / this.view.fullWidth),
                    u = this.zoom / (this.view.height / this.view.fullHeight),
                    l = (this.right - this.left) / this.view.width,
                    h = (this.top - this.bottom) / this.view.height;
                r += l * (this.view.offsetX / c), o = r + l * (this.view.width / c), a -= h * (this.view.offsetY / u), s = a - h * (this.view.height / u)
            }
            this.projectionMatrix.makeOrthographic(r, o, a, s, this.near, this.far)
        },
        toJSON: function(t) {
            var e = ct.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
    });
    var fs = 0;
    ue.prototype.isFogExp2 = !0, ue.prototype.clone = function() {
        return new ue(this.color.getHex(), this.density)
    }, ue.prototype.toJSON = function(t) {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }, le.prototype.isFog = !0, le.prototype.clone = function() {
        return new le(this.color.getHex(), this.near, this.far)
    }, le.prototype.toJSON = function(t) {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }, he.prototype = Object.create(ct.prototype), he.prototype.constructor = he, he.prototype.copy = function(t, e) {
        return ct.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    }, he.prototype.toJSON = function(t) {
        var e = ct.prototype.toJSON.call(this, t);
        return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
    }, de.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: de,
        isLensFlare: !0,
        copy: function(t) {
            ct.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, n = t.lensFlares.length; e < n; e++) this.lensFlares.push(t.lensFlares[e]);
            return this
        },
        add: function(t, e, n, i, r, o) {
            void 0 === e && (e = -1), void 0 === n && (n = 0), void 0 === o && (o = 1), void 0 === r && (r = new W(16777215)), void 0 === i && (i = lo), n = Math.min(n, Math.max(0, n)), this.lensFlares.push({
                texture: t,
                size: e,
                distance: n,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: o,
                color: r,
                blending: i
            })
        },
        updateLensFlares: function() {
            var t, e, n = this.lensFlares.length,
                i = 2 * -this.positionScreen.x,
                r = 2 * -this.positionScreen.y;
            for (t = 0; t < n; t++) e = this.lensFlares[t], e.x = this.positionScreen.x + i * e.distance, e.y = this.positionScreen.y + r * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
        }
    }), pe.prototype = Object.create(J.prototype), pe.prototype.constructor = pe, pe.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
    }, fe.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: fe,
        isSprite: !0,
        raycast: function() {
            var t = new c;
            return function(e, n) {
                t.setFromMatrixPosition(this.matrixWorld);
                var i = e.ray.distanceSqToPoint(t);
                i > this.scale.x * this.scale.y / 4 || n.push({
                    distance: Math.sqrt(i),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        }
    }), me.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: me,
        copy: function(t) {
            ct.prototype.copy.call(this, t, !1);
            for (var e = t.levels, n = 0, i = e.length; n < i; n++) {
                var r = e[n];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var n = this.levels, i = 0; i < n.length && !(e < n[i].distance); i++);
            n.splice(i, 0, {
                distance: e,
                object: t
            }), this.add(t)
        },
        getObjectForDistance: function(t) {
            for (var e = this.levels, n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
            return e[n - 1].object
        },
        raycast: function() {
            var t = new c;
            return function(e, n) {
                t.setFromMatrixPosition(this.matrixWorld);
                var i = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(i).raycast(e, n)
            }
        }(),
        update: function() {
            var t = new c,
                e = new c;
            return function(n) {
                var i = this.levels;
                if (i.length > 1) {
                    t.setFromMatrixPosition(n.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                    var r = t.distanceTo(e);
                    i[0].object.visible = !0;
                    for (var o = 1, a = i.length; o < a && r >= i[o].distance; o++) i[o - 1].object.visible = !1, i[o].object.visible = !0;
                    for (; o < a; o++) i[o].object.visible = !1
                }
            }
        }(),
        toJSON: function(t) {
            var e = ct.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var n = this.levels, i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                e.object.levels.push({
                    object: o.object.uuid,
                    distance: o.distance
                })
            }
            return e
        }
    }), Object.assign(ge.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var n = new u;
                this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
            }
        },
        pose: function() {
            for (var t, e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (var e = 0, n = this.bones.length; e < n; e++)(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: function() {
            var t = new u;
            return function() {
                for (var e = 0, n = this.bones.length; e < n; e++) {
                    var i = this.bones[e] ? this.bones[e].matrixWorld : this.identityMatrix;
                    t.multiplyMatrices(i, this.boneInverses[e]), t.toArray(this.boneMatrices, 16 * e)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new ge(this.bones, this.boneInverses, this.useVertexTexture)
        }
    }), ve.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: ve,
        isBone: !0
    }), ye.prototype = Object.assign(Object.create(Lt.prototype), {
        constructor: ye,
        isSkinnedMesh: !0,
        bind: function(t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            if (this.geometry && this.geometry.isGeometry)
                for (var t = 0; t < this.geometry.skinWeights.length; t++) {
                    var e = this.geometry.skinWeights[t],
                        n = 1 / e.lengthManhattan();
                    n !== 1 / 0 ? e.multiplyScalar(n) : e.set(1, 0, 0, 0)
                } else if (this.geometry && this.geometry.isBufferGeometry)
                    for (var i = new r, o = this.geometry.attributes.skinWeight, t = 0; t < o.count; t++) {
                        i.x = o.getX(t), i.y = o.getY(t), i.z = o.getZ(t), i.w = o.getW(t);
                        var n = 1 / i.lengthManhattan();
                        n !== 1 / 0 ? i.multiplyScalar(n) : i.set(1, 0, 0, 0), o.setXYZW(t, i.x, i.y, i.z, i.w)
                    }
        },
        updateMatrixWorld: function(t) {
            Lt.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material, this.skeleton.useVertexTexture).copy(this)
        }
    }), _e.prototype = Object.create(J.prototype), _e.prototype.constructor = _e, _e.prototype.isLineBasicMaterial = !0, _e.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    }, be.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: be,
        isLine: !0,
        raycast: function() {
            var t = new u,
                e = new ot,
                n = new tt;
            return function(i, r) {
                var o = i.linePrecision,
                    a = o * o,
                    s = this.geometry,
                    u = this.matrixWorld;
                if (null === s.boundingSphere && s.computeBoundingSphere(), n.copy(s.boundingSphere), n.applyMatrix4(u), !1 !== i.ray.intersectsSphere(n)) {
                    t.getInverse(u), e.copy(i.ray).applyMatrix4(t);
                    var l = new c,
                        h = new c,
                        d = new c,
                        p = new c,
                        f = this && this.isLineSegments ? 2 : 1;
                    if (s.isBufferGeometry) {
                        var m = s.index,
                            g = s.attributes,
                            v = g.position.array;
                        if (null !== m)
                            for (var y = m.array, _ = 0, b = y.length - 1; _ < b; _ += f) {
                                var x = y[_],
                                    w = y[_ + 1];
                                l.fromArray(v, 3 * x), h.fromArray(v, 3 * w);
                                var M = e.distanceSqToSegment(l, h, p, d);
                                if (!(M > a)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var E = i.ray.origin.distanceTo(p);
                                    E < i.near || E > i.far || r.push({
                                        distance: E,
                                        point: d.clone().applyMatrix4(this.matrixWorld),
                                        index: _,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            } else
                                for (var _ = 0, b = v.length / 3 - 1; _ < b; _ += f) {
                                    l.fromArray(v, 3 * _), h.fromArray(v, 3 * _ + 3);
                                    var M = e.distanceSqToSegment(l, h, p, d);
                                    if (!(M > a)) {
                                        p.applyMatrix4(this.matrixWorld);
                                        var E = i.ray.origin.distanceTo(p);
                                        E < i.near || E > i.far || r.push({
                                            distance: E,
                                            point: d.clone().applyMatrix4(this.matrixWorld),
                                            index: _,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                                }
                    } else if (s.isGeometry)
                        for (var T = s.vertices, S = T.length, _ = 0; _ < S - 1; _ += f) {
                            var M = e.distanceSqToSegment(T[_], T[_ + 1], p, d);
                            if (!(M > a)) {
                                p.applyMatrix4(this.matrixWorld);
                                var E = i.ray.origin.distanceTo(p);
                                E < i.near || E > i.far || r.push({
                                    distance: E,
                                    point: d.clone().applyMatrix4(this.matrixWorld),
                                    index: _,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), xe.prototype = Object.assign(Object.create(be.prototype), {
        constructor: xe,
        isLineSegments: !0
    }), we.prototype = Object.create(J.prototype), we.prototype.constructor = we, we.prototype.isPointsMaterial = !0, we.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
    }, Me.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: Me,
        isPoints: !0,
        raycast: function() {
            var t = new u,
                e = new ot,
                n = new tt;
            return function(i, r) {
                function o(t, n) {
                    var o = e.distanceSqToPoint(t);
                    if (o < d) {
                        var s = e.closestPointToPoint(t);
                        s.applyMatrix4(u);
                        var c = i.ray.origin.distanceTo(s);
                        if (c < i.near || c > i.far) return;
                        r.push({
                            distance: c,
                            distanceToRay: Math.sqrt(o),
                            point: s.clone(),
                            index: n,
                            face: null,
                            object: a
                        })
                    }
                }
                var a = this,
                    s = this.geometry,
                    u = this.matrixWorld,
                    l = i.params.Points.threshold;
                if (null === s.boundingSphere && s.computeBoundingSphere(), n.copy(s.boundingSphere), n.applyMatrix4(u), !1 !== i.ray.intersectsSphere(n)) {
                    t.getInverse(u), e.copy(i.ray).applyMatrix4(t);
                    var h = l / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        d = h * h,
                        p = new c;
                    if (s.isBufferGeometry) {
                        var f = s.index,
                            m = s.attributes,
                            g = m.position.array;
                        if (null !== f)
                            for (var v = f.array, y = 0, _ = v.length; y < _; y++) {
                                var b = v[y];
                                p.fromArray(g, 3 * b), o(p, b)
                            } else
                                for (var y = 0, x = g.length / 3; y < x; y++) p.fromArray(g, 3 * y), o(p, y)
                    } else
                        for (var w = s.vertices, y = 0, x = w.length; y < x; y++) o(w[y], y)
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), Ee.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: Ee
    }), Te.prototype = Object.create(i.prototype), Te.prototype.constructor = Te, Se.prototype = Object.create(i.prototype), Se.prototype.constructor = Se, Se.prototype.isCompressedTexture = !0, Ae.prototype = Object.create(i.prototype), Ae.prototype.constructor = Ae, Le.prototype = Object.create(i.prototype), Le.prototype.constructor = Le, Le.prototype.isDepthTexture = !0, Re.prototype = Object.create(At.prototype), Re.prototype.constructor = Re, Pe.prototype = Object.create(St.prototype), Pe.prototype.constructor = Pe, Ce.prototype = Object.create(At.prototype), Ce.prototype.constructor = Ce, Ie.prototype = Object.create(St.prototype), Ie.prototype.constructor = Ie, Be.prototype = Object.create(At.prototype), Be.prototype.constructor = Be, Oe.prototype = Object.create(St.prototype), Oe.prototype.constructor = Oe, Ne.prototype = Object.create(Be.prototype), Ne.prototype.constructor = Ne, Ue.prototype = Object.create(St.prototype), Ue.prototype.constructor = Ue, De.prototype = Object.create(Be.prototype), De.prototype.constructor = De, Fe.prototype = Object.create(St.prototype), Fe.prototype.constructor = Fe, ze.prototype = Object.create(Be.prototype), ze.prototype.constructor = ze, Ge.prototype = Object.create(St.prototype), Ge.prototype.constructor = Ge, ke.prototype = Object.create(Be.prototype), ke.prototype.constructor = ke, He.prototype = Object.create(St.prototype), He.prototype.constructor = He, Ve.prototype = Object.create(At.prototype), Ve.prototype.constructor = Ve, je.prototype = Object.create(St.prototype), je.prototype.constructor = je, We.prototype = Object.create(At.prototype), We.prototype.constructor = We, Xe.prototype = Object.create(St.prototype), Xe.prototype.constructor = Xe, qe.prototype = Object.create(At.prototype), qe.prototype.constructor = qe;
    var ms = {
        area: function(t) {
            for (var e = t.length, n = 0, i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
            return .5 * n
        },
        triangulate: function() {
            function t(t, e, n, i, r, o) {
                var a, s, c, u, l, h, d, p, f;
                if (s = t[o[e]].x, c = t[o[e]].y, u = t[o[n]].x, l = t[o[n]].y, h = t[o[i]].x, d = t[o[i]].y, (u - s) * (d - c) - (l - c) * (h - s) <= 0) return !1;
                var m, g, v, y, _, b, x, w, M, E, T, S, A, L, R;
                for (m = h - u, g = d - l, v = s - h, y = c - d, _ = u - s, b = l - c, a = 0; a < r; a++)
                    if (p = t[o[a]].x, f = t[o[a]].y, !(p === s && f === c || p === u && f === l || p === h && f === d) && (x = p - s, w = f - c, M = p - u, E = f - l, T = p - h, S = f - d, R = m * E - g * M, A = _ * w - b * x, L = v * S - y * T, R >= -Number.EPSILON && L >= -Number.EPSILON && A >= -Number.EPSILON)) return !1;
                return !0
            }
            return function(e, n) {
                var i = e.length;
                if (i < 3) return null;
                var r, o, a, s = [],
                    c = [],
                    u = [];
                if (ms.area(e) > 0)
                    for (o = 0; o < i; o++) c[o] = o;
                else
                    for (o = 0; o < i; o++) c[o] = i - 1 - o;
                var l = i,
                    h = 2 * l;
                for (o = l - 1; l > 2;) {
                    if (h-- <= 0) return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"), n ? u : s;
                    if (r = o, l <= r && (r = 0), o = r + 1, l <= o && (o = 0), a = o + 1, l <= a && (a = 0), t(e, r, o, a, l, c)) {
                        var d, p, f, m, g;
                        for (d = c[r], p = c[o], f = c[a], s.push([e[d], e[p], e[f]]), u.push([c[r], c[o], c[a]]), m = o, g = o + 1; g < l; m++, g++) c[m] = c[g];
                        l--, h = 2 * l
                    }
                }
                return n ? u : s
            }
        }(),
        triangulateShape: function(t, e) {
            function n(t) {
                var e = t.length;
                e > 2 && t[e - 1].equals(t[0]) && t.pop()
            }

            function i(t, e, n) {
                return t.x !== e.x ? t.x < e.x ? t.x <= n.x && n.x <= e.x : e.x <= n.x && n.x <= t.x : t.y < e.y ? t.y <= n.y && n.y <= e.y : e.y <= n.y && n.y <= t.y
            }

            function r(t, e, n, r, o) {
                var a = e.x - t.x,
                    s = e.y - t.y,
                    c = r.x - n.x,
                    u = r.y - n.y,
                    l = t.x - n.x,
                    h = t.y - n.y,
                    d = s * c - a * u,
                    p = s * l - a * h;
                if (Math.abs(d) > Number.EPSILON) {
                    var f;
                    if (d > 0) {
                        if (p < 0 || p > d) return [];
                        if ((f = u * l - c * h) < 0 || f > d) return []
                    } else {
                        if (p > 0 || p < d) return [];
                        if ((f = u * l - c * h) > 0 || f < d) return []
                    }
                    if (0 === f) return !o || 0 !== p && p !== d ? [t] : [];
                    if (f === d) return !o || 0 !== p && p !== d ? [e] : [];
                    if (0 === p) return [n];
                    if (p === d) return [r];
                    var m = f / d;
                    return [{
                        x: t.x + m * a,
                        y: t.y + m * s
                    }]
                }
                if (0 !== p || u * l != c * h) return [];
                var g = 0 === a && 0 === s,
                    v = 0 === c && 0 === u;
                if (g && v) return t.x !== n.x || t.y !== n.y ? [] : [t];
                if (g) return i(n, r, t) ? [t] : [];
                if (v) return i(t, e, n) ? [n] : [];
                var y, _, b, x, w, M, E, T;
                return 0 !== a ? (t.x < e.x ? (y = t, b = t.x, _ = e, x = e.x) : (y = e, b = e.x, _ = t, x = t.x), n.x < r.x ? (w = n, E = n.x, M = r, T = r.x) : (w = r, E = r.x, M = n, T = n.x)) : (t.y < e.y ? (y = t, b = t.y, _ = e, x = e.y) : (y = e, b = e.y, _ = t, x = t.y), n.y < r.y ? (w = n, E = n.y, M = r, T = r.y) : (w = r, E = r.y, M = n, T = n.y)), b <= E ? x < E ? [] : x === E ? o ? [] : [w] : x <= T ? [w, _] : [w, M] : b > T ? [] : b === T ? o ? [] : [y] : x <= T ? [y, _] : [y, M]
            }

            function o(t, e, n, i) {
                var r = e.x - t.x,
                    o = e.y - t.y,
                    a = n.x - t.x,
                    s = n.y - t.y,
                    c = i.x - t.x,
                    u = i.y - t.y,
                    l = r * s - o * a,
                    h = r * u - o * c;
                if (Math.abs(l) > Number.EPSILON) {
                    var d = c * s - u * a;
                    return l > 0 ? h >= 0 && d >= 0 : h >= 0 || d >= 0
                }
                return h > 0
            }
            n(t), e.forEach(n);
            for (var a, s, c, u, l, h, d = {}, p = t.concat(), f = 0, m = e.length; f < m; f++) Array.prototype.push.apply(p, e[f]);
            for (a = 0, s = p.length; a < s; a++) l = p[a].x + ":" + p[a].y, void 0 !== d[l] && console.warn("THREE.ShapeUtils: Duplicate point", l, a), d[l] = a;
            var g = function(t, e) {
                    for (var n, i, a, s, c, u, l, h, d, p, f, m = t.concat(), g = [], v = [], y = 0, _ = e.length; y < _; y++) g.push(y);
                    for (var b = 0, x = 2 * g.length; g.length > 0;) {
                        if (--x < 0) {
                            console.log("Infinite Loop! Holes left:" + g.length + ", Probably Hole outside Shape!");
                            break
                        }
                        for (a = b; a < m.length; a++) {
                            s = m[a], i = -1;
                            for (var y = 0; y < g.length; y++)
                                if (u = g[y], l = s.x + ":" + s.y + ":" + u, void 0 === v[l]) {
                                    n = e[u];
                                    for (var w = 0; w < n.length; w++)
                                        if (c = n[w], function(t, e) {
                                                var i = m.length - 1,
                                                    r = t - 1;
                                                r < 0 && (r = i);
                                                var a = t + 1;
                                                a > i && (a = 0);
                                                var s = o(m[t], m[r], m[a], n[e]);
                                                if (!s) return !1;
                                                var c = n.length - 1,
                                                    u = e - 1;
                                                u < 0 && (u = c);
                                                var l = e + 1;
                                                return l > c && (l = 0), !!(s = o(n[e], n[u], n[l], m[t]))
                                            }(a, w) && ! function(t, e) {
                                                var n, i, o;
                                                for (n = 0; n < m.length; n++)
                                                    if (i = n + 1, i %= m.length, o = r(t, e, m[n], m[i], !0), o.length > 0) return !0;
                                                return !1
                                            }(s, c) && ! function(t, n) {
                                                var i, o, a, s, c;
                                                for (i = 0; i < g.length; i++)
                                                    for (o = e[g[i]], a = 0; a < o.length; a++)
                                                        if (s = a + 1, s %= o.length, c = r(t, n, o[a], o[s], !0), c.length > 0) return !0;
                                                return !1
                                            }(s, c)) {
                                            i = w, g.splice(y, 1), h = m.slice(0, a + 1), d = m.slice(a), p = n.slice(i), f = n.slice(0, i + 1), m = h.concat(p).concat(f).concat(d), b = a;
                                            break
                                        }
                                    if (i >= 0) break;
                                    v[l] = !0
                                }
                            if (i >= 0) break
                        }
                    }
                    return m
                }(t, e),
                v = ms.triangulate(g, !1);
            for (a = 0, s = v.length; a < s; a++)
                for (u = v[a], c = 0; c < 3; c++) l = u[c].x + ":" + u[c].y, void 0 !== (h = d[l]) && (u[c] = h);
            return v.concat()
        },
        isClockWise: function(t) {
            return ms.area(t) < 0
        }
    };
    Ye.prototype = Object.create(St.prototype), Ye.prototype.constructor = Ye, Ye.prototype.addShapeList = function(t, e) {
        for (var n = t.length, i = 0; i < n; i++) {
            var r = t[i];
            this.addShape(r, e)
        }
    }, Ye.prototype.addShape = function(t, e) {
        function i(t, e, n) {
            return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
        }

        function r(t, e, i) {
            var r, o, a = 1,
                s = t.x - e.x,
                c = t.y - e.y,
                u = i.x - t.x,
                l = i.y - t.y,
                h = s * s + c * c,
                d = s * l - c * u;
            if (Math.abs(d) > Number.EPSILON) {
                var p = Math.sqrt(h),
                    f = Math.sqrt(u * u + l * l),
                    m = e.x - c / p,
                    g = e.y + s / p,
                    v = i.x - l / f,
                    y = i.y + u / f,
                    _ = ((v - m) * l - (y - g) * u) / (s * l - c * u);
                r = m + s * _ - t.x, o = g + c * _ - t.y;
                var b = r * r + o * o;
                if (b <= 2) return new n(r, o);
                a = Math.sqrt(b / 2)
            } else {
                var x = !1;
                s > Number.EPSILON ? u > Number.EPSILON && (x = !0) : s < -Number.EPSILON ? u < -Number.EPSILON && (x = !0) : Math.sign(c) === Math.sign(l) && (x = !0), x ? (r = -c, o = s, a = Math.sqrt(h)) : (r = s, o = c, a = Math.sqrt(h / 2))
            }
            return new n(r / a, o / a)
        }

        function o(t, e) {
            var n, i;
            for (W = t.length; --W >= 0;) {
                n = W, i = W - 1, i < 0 && (i = t.length - 1);
                var r = 0,
                    o = x + 2 * y;
                for (r = 0; r < o; r++) {
                    var a = H * r,
                        s = H * (r + 1);
                    u(e + n + a, e + i + a, e + i + s, e + n + s, t, r, o, n, i)
                }
            }
        }

        function a(t, e, n) {
            L.vertices.push(new c(t, e, n))
        }

        function s(t, e, n) {
            t += R, e += R, n += R, L.faces.push(new ht(t, e, n, null, null, 0));
            var i = E.generateTopUV(L, t, e, n);
            L.faceVertexUvs[0].push(i)
        }

        function u(t, e, n, i, r, o, a, s, c) {
            t += R, e += R, n += R, i += R, L.faces.push(new ht(t, e, i, null, null, 1)), L.faces.push(new ht(e, n, i, null, null, 1));
            var u = E.generateSideWallUV(L, t, e, n, i);
            L.faceVertexUvs[0].push([u[0], u[1], u[3]]), L.faceVertexUvs[0].push([u[1], u[2], u[3]])
        }
        var l, h, d, p, f, m = void 0 !== e.amount ? e.amount : 100,
            g = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            v = void 0 !== e.bevelSize ? e.bevelSize : g - 2,
            y = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            _ = void 0 === e.bevelEnabled || e.bevelEnabled,
            b = void 0 !== e.curveSegments ? e.curveSegments : 12,
            x = void 0 !== e.steps ? e.steps : 1,
            w = e.extrudePath,
            M = !1,
            E = void 0 !== e.UVGenerator ? e.UVGenerator : Ye.WorldUVGenerator;
        w && (l = w.getSpacedPoints(x), M = !0, _ = !1, h = void 0 !== e.frames ? e.frames : w.computeFrenetFrames(x, !1), d = new c, p = new c, f = new c), _ || (y = 0, g = 0, v = 0);
        var T, S, A, L = this,
            R = this.vertices.length,
            P = t.extractPoints(b),
            C = P.shape,
            I = P.holes,
            B = !ms.isClockWise(C);
        if (B) {
            for (C = C.reverse(), S = 0, A = I.length; S < A; S++) T = I[S], ms.isClockWise(T) && (I[S] = T.reverse());
            B = !1
        }
        var O = ms.triangulateShape(C, I),
            N = C;
        for (S = 0, A = I.length; S < A; S++) T = I[S], C = C.concat(T);
        for (var U, D, F, z, G, k, H = C.length, V = O.length, j = [], W = 0, X = N.length, q = X - 1, Y = W + 1; W < X; W++, q++, Y++) q === X && (q = 0), Y === X && (Y = 0), j[W] = r(N[W], N[q], N[Y]);
        var Z, J = [],
            Q = j.concat();
        for (S = 0, A = I.length; S < A; S++) {
            for (T = I[S], Z = [], W = 0, X = T.length, q = X - 1, Y = W + 1; W < X; W++, q++, Y++) q === X && (q = 0), Y === X && (Y = 0), Z[W] = r(T[W], T[q], T[Y]);
            J.push(Z), Q = Q.concat(Z)
        }
        for (U = 0; U < y; U++) {
            for (F = U / y, z = g * Math.cos(F * Math.PI / 2), D = v * Math.sin(F * Math.PI / 2), W = 0, X = N.length; W < X; W++) G = i(N[W], j[W], D), a(G.x, G.y, -z);
            for (S = 0, A = I.length; S < A; S++)
                for (T = I[S], Z = J[S], W = 0, X = T.length; W < X; W++) G = i(T[W], Z[W], D), a(G.x, G.y, -z)
        }
        for (D = v, W = 0; W < H; W++) G = _ ? i(C[W], Q[W], D) : C[W], M ? (p.copy(h.normals[0]).multiplyScalar(G.x), d.copy(h.binormals[0]).multiplyScalar(G.y), f.copy(l[0]).add(p).add(d), a(f.x, f.y, f.z)) : a(G.x, G.y, 0);
        var K;
        for (K = 1; K <= x; K++)
            for (W = 0; W < H; W++) G = _ ? i(C[W], Q[W], D) : C[W], M ? (p.copy(h.normals[K]).multiplyScalar(G.x), d.copy(h.binormals[K]).multiplyScalar(G.y), f.copy(l[K]).add(p).add(d), a(f.x, f.y, f.z)) : a(G.x, G.y, m / x * K);
        for (U = y - 1; U >= 0; U--) {
            for (F = U / y, z = g * Math.cos(F * Math.PI / 2), D = v * Math.sin(F * Math.PI / 2), W = 0, X = N.length; W < X; W++) G = i(N[W], j[W], D), a(G.x, G.y, m + z);
            for (S = 0, A = I.length; S < A; S++)
                for (T = I[S], Z = J[S], W = 0, X = T.length; W < X; W++) G = i(T[W], Z[W], D), M ? a(G.x, G.y + l[x - 1].y, l[x - 1].x + z) : a(G.x, G.y, m + z)
        }! function() {
            if (_) {
                var t = 0,
                    e = H * t;
                for (W = 0; W < V; W++) k = O[W], s(k[2] + e, k[1] + e, k[0] + e);
                for (t = x + 2 * y, e = H * t, W = 0; W < V; W++) k = O[W], s(k[0] + e, k[1] + e, k[2] + e)
            } else {
                for (W = 0; W < V; W++) k = O[W], s(k[2], k[1], k[0]);
                for (W = 0; W < V; W++) k = O[W], s(k[0] + H * x, k[1] + H * x, k[2] + H * x)
            }
        }(),
        function() {
            var t = 0;
            for (o(N, t), t += N.length, S = 0, A = I.length; S < A; S++) T = I[S], o(T, t), t += T.length
        }()
    }, Ye.WorldUVGenerator = {
        generateTopUV: function(t, e, i, r) {
            var o = t.vertices,
                a = o[e],
                s = o[i],
                c = o[r];
            return [new n(a.x, a.y), new n(s.x, s.y), new n(c.x, c.y)]
        },
        generateSideWallUV: function(t, e, i, r, o) {
            var a = t.vertices,
                s = a[e],
                c = a[i],
                u = a[r],
                l = a[o];
            return Math.abs(s.y - c.y) < .01 ? [new n(s.x, 1 - s.z), new n(c.x, 1 - c.z), new n(u.x, 1 - u.z), new n(l.x, 1 - l.z)] : [new n(s.y, 1 - s.z), new n(c.y, 1 - c.z), new n(u.y, 1 - u.z), new n(l.y, 1 - l.z)]
        }
    }, Ze.prototype = Object.create(Ye.prototype), Ze.prototype.constructor = Ze, Je.prototype = Object.create(St.prototype), Je.prototype.constructor = Je, Qe.prototype = Object.create(At.prototype), Qe.prototype.constructor = Qe, Ke.prototype = Object.create(St.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(At.prototype), $e.prototype.constructor = $e, tn.prototype = Object.create(St.prototype), tn.prototype.constructor = tn, en.prototype = Object.create(At.prototype), en.prototype.constructor = en, nn.prototype = Object.create(St.prototype), nn.prototype.constructor = nn, rn.prototype = Object.create(At.prototype), rn.prototype.constructor = rn, on.prototype = Object.create(At.prototype), on.prototype.constructor = on, an.prototype = Object.create(St.prototype), an.prototype.constructor = an, sn.prototype = Object.create(At.prototype), sn.prototype.constructor = sn, cn.prototype = Object.create(an.prototype), cn.prototype.constructor = cn, un.prototype = Object.create(sn.prototype), un.prototype.constructor = un, ln.prototype = Object.create(St.prototype), ln.prototype.constructor = ln, hn.prototype = Object.create(At.prototype), hn.prototype.constructor = hn;
    var gs = Object.freeze({
        WireframeGeometry: Re,
        ParametricGeometry: Pe,
        ParametricBufferGeometry: Ce,
        TetrahedronGeometry: Oe,
        TetrahedronBufferGeometry: Ne,
        OctahedronGeometry: Ue,
        OctahedronBufferGeometry: De,
        IcosahedronGeometry: Fe,
        IcosahedronBufferGeometry: ze,
        DodecahedronGeometry: Ge,
        DodecahedronBufferGeometry: ke,
        PolyhedronGeometry: Ie,
        PolyhedronBufferGeometry: Be,
        TubeGeometry: He,
        TubeBufferGeometry: Ve,
        TorusKnotGeometry: je,
        TorusKnotBufferGeometry: We,
        TorusGeometry: Xe,
        TorusBufferGeometry: qe,
        TextGeometry: Ze,
        SphereGeometry: Je,
        SphereBufferGeometry: Qe,
        RingGeometry: Ke,
        RingBufferGeometry: $e,
        PlaneGeometry: Ct,
        PlaneBufferGeometry: It,
        LatheGeometry: tn,
        LatheBufferGeometry: en,
        ShapeGeometry: nn,
        ShapeBufferGeometry: rn,
        ExtrudeGeometry: Ye,
        EdgesGeometry: on,
        ConeGeometry: cn,
        ConeBufferGeometry: un,
        CylinderGeometry: an,
        CylinderBufferGeometry: sn,
        CircleGeometry: ln,
        CircleBufferGeometry: hn,
        BoxGeometry: Rt,
        BoxBufferGeometry: Pt
    });
    dn.prototype = Object.create(Q.prototype), dn.prototype.constructor = dn, dn.prototype.isShadowMaterial = !0, pn.prototype = Object.create(Q.prototype), pn.prototype.constructor = pn, pn.prototype.isRawShaderMaterial = !0, fn.prototype = {
        constructor: fn,
        isMultiMaterial: !0,
        toJSON: function(t) {
            for (var e = {
                    metadata: {
                        version: 4.2,
                        type: "material",
                        generator: "MaterialExporter"
                    },
                    uuid: this.uuid,
                    type: this.type,
                    materials: []
                }, n = this.materials, i = 0, r = n.length; i < r; i++) {
                var o = n[i].toJSON(t);
                delete o.metadata, e.materials.push(o)
            }
            return e.visible = this.visible, e
        },
        clone: function() {
            for (var t = new this.constructor, e = 0; e < this.materials.length; e++) t.materials.push(this.materials[e].clone());
            return t.visible = this.visible, t
        }
    }, mn.prototype = Object.create(J.prototype), mn.prototype.constructor = mn, mn.prototype.isMeshStandardMaterial = !0, mn.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.defines = {
            STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, gn.prototype = Object.create(mn.prototype), gn.prototype.constructor = gn, gn.prototype.isMeshPhysicalMaterial = !0, gn.prototype.copy = function(t) {
        return mn.prototype.copy.call(this, t), this.defines = {
            PHYSICAL: ""
        }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
    }, vn.prototype = Object.create(J.prototype), vn.prototype.constructor = vn, vn.prototype.isMeshPhongMaterial = !0, vn.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, yn.prototype = Object.create(vn.prototype), yn.prototype.constructor = yn, yn.prototype.isMeshToonMaterial = !0, yn.prototype.copy = function(t) {
        return vn.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
    }, _n.prototype = Object.create(J.prototype), _n.prototype.constructor = _n, _n.prototype.isMeshNormalMaterial = !0, _n.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, bn.prototype = Object.create(J.prototype), bn.prototype.constructor = bn, bn.prototype.isMeshLambertMaterial = !0, bn.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, xn.prototype = Object.create(J.prototype), xn.prototype.constructor = xn, xn.prototype.isLineDashedMaterial = !0, xn.prototype.copy = function(t) {
        return J.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    };
    var vs = Object.freeze({
            ShadowMaterial: dn,
            SpriteMaterial: pe,
            RawShaderMaterial: pn,
            ShaderMaterial: Q,
            PointsMaterial: we,
            MultiMaterial: fn,
            MeshPhysicalMaterial: gn,
            MeshStandardMaterial: mn,
            MeshPhongMaterial: vn,
            MeshToonMaterial: yn,
            MeshNormalMaterial: _n,
            MeshLambertMaterial: bn,
            MeshDepthMaterial: K,
            MeshBasicMaterial: dt,
            LineDashedMaterial: xn,
            LineBasicMaterial: _e,
            Material: J
        }),
        ys = {
            enabled: !1,
            files: {},
            add: function(t, e) {
                !1 !== this.enabled && (this.files[t] = e)
            },
            get: function(t) {
                if (!1 !== this.enabled) return this.files[t]
            },
            remove: function(t) {
                delete this.files[t]
            },
            clear: function() {
                this.files = {}
            }
        },
        _s = new wn;
    Object.assign(Mn.prototype, {
        load: function(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
            var r = this,
                o = ys.get(t);
            if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                e && e(o), r.manager.itemEnd(t)
            }, 0), o;
            var a = t.match(/^data:(.*?)(;base64)?,(.*)$/);
            if (a) {
                var s = a[1],
                    c = !!a[2],
                    u = a[3];
                u = window.decodeURIComponent(u), c && (u = window.atob(u));
                try {
                    var l, h = (this.responseType || "").toLowerCase();
                    switch (h) {
                        case "arraybuffer":
                        case "blob":
                            l = new ArrayBuffer(u.length);
                            for (var d = new Uint8Array(l), p = 0; p < u.length; p++) d[p] = u.charCodeAt(p);
                            "blob" === h && (l = new Blob([l], {
                                type: s
                            }));
                            break;
                        case "document":
                            var f = new DOMParser;
                            l = f.parseFromString(u, s);
                            break;
                        case "json":
                            l = JSON.parse(u);
                            break;
                        default:
                            l = u
                    }
                    window.setTimeout(function() {
                        e && e(l), r.manager.itemEnd(t)
                    }, 0)
                } catch (e) {
                    window.setTimeout(function() {
                        i && i(e), r.manager.itemError(t)
                    }, 0)
                }
            } else {
                var m = new XMLHttpRequest;
                m.open("GET", t, !0), m.addEventListener("load", function(n) {
                    var o = n.target.response;
                    ys.add(t, o), 200 === this.status ? (e && e(o), r.manager.itemEnd(t)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."), e && e(o), r.manager.itemEnd(t)) : (i && i(n), r.manager.itemError(t))
                }, !1), void 0 !== n && m.addEventListener("progress", function(t) {
                    n(t)
                }, !1), m.addEventListener("error", function(e) {
                    i && i(e), r.manager.itemError(t)
                }, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), m.send(null)
            }
            return r.manager.itemStart(t), m
        },
        setPath: function(t) {
            return this.path = t, this
        },
        setResponseType: function(t) {
            return this.responseType = t, this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t, this
        },
        setMimeType: function(t) {
            return this.mimeType = t, this
        }
    }), Object.assign(En.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                o = [],
                a = new Se;
            a.image = o;
            var s = new Mn(this.manager);
            if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t))
                for (var c = 0, u = 0, l = t.length; u < l; ++u) ! function(u) {
                    s.load(t[u], function(t) {
                        var n = r._parser(t, !0);
                        o[u] = {
                            width: n.width,
                            height: n.height,
                            format: n.format,
                            mipmaps: n.mipmaps
                        }, 6 === (c += 1) && (1 === n.mipmapCount && (a.minFilter = sa), a.format = n.format, a.needsUpdate = !0, e && e(a))
                    }, n, i)
                }(u);
            else s.load(t, function(t) {
                var n = r._parser(t, !0);
                if (n.isCubemap)
                    for (var i = n.mipmaps.length / n.mipmapCount, s = 0; s < i; s++) {
                        o[s] = {
                            mipmaps: []
                        };
                        for (var c = 0; c < n.mipmapCount; c++) o[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]), o[s].format = n.format, o[s].width = n.width, o[s].height = n.height
                    } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (a.minFilter = sa), a.format = n.format, a.needsUpdate = !0, e && e(a)
            }, n, i);
            return a
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), Object.assign(Tn.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                o = new X,
                a = new Mn(this.manager);
            return a.setResponseType("arraybuffer"), a.load(t, function(t) {
                var n = r._parser(t);
                n && (void 0 !== n.image ? o.image = n.image : void 0 !== n.data && (o.image.width = n.width, o.image.height = n.height, o.image.data = n.data), o.wrapS = void 0 !== n.wrapS ? n.wrapS : na, o.wrapT = void 0 !== n.wrapT ? n.wrapT : na, o.magFilter = void 0 !== n.magFilter ? n.magFilter : sa, o.minFilter = void 0 !== n.minFilter ? n.minFilter : ua, o.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (o.format = n.format), void 0 !== n.type && (o.type = n.type), void 0 !== n.mipmaps && (o.mipmaps = n.mipmaps), 1 === n.mipmapCount && (o.minFilter = sa), o.needsUpdate = !0, e && e(o, n))
            }, n, i), o
        }
    }), Object.assign(Sn.prototype, {
        load: function(t, e, n, i) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
            var r = this,
                o = ys.get(t);
            if (void 0 !== o) return r.manager.itemStart(t), setTimeout(function() {
                e && e(o), r.manager.itemEnd(t)
            }, 0), o;
            var a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            return a.addEventListener("load", function() {
                ys.add(t, this), e && e(this), r.manager.itemEnd(t)
            }, !1), a.addEventListener("error", function(e) {
                i && i(e), r.manager.itemError(t)
            }, !1), void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), Object.assign(An.prototype, {
        load: function(t, e, n, i) {
            var r = new l,
                o = new Sn(this.manager);
            o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
            for (var a = 0, s = 0; s < t.length; ++s) ! function(n) {
                o.load(t[n], function(t) {
                    r.images[n] = t, 6 == ++a && (r.needsUpdate = !0, e && e(r))
                }, void 0, i)
            }(s);
            return r
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), Object.assign(Ln.prototype, {
        load: function(t, e, n, r) {
            var o = new i,
                a = new Sn(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(n) {
                var i = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                o.format = i ? Ma : Ea, o.image = n, o.needsUpdate = !0, void 0 !== e && e(o)
            }, n, r), o
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), Rn.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: Rn,
        isLight: !0,
        copy: function(t) {
            return ct.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
        },
        toJSON: function(t) {
            var e = ct.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
        }
    }), Pn.prototype = Object.assign(Object.create(Rn.prototype), {
        constructor: Pn,
        isHemisphereLight: !0,
        copy: function(t) {
            return Rn.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
        }
    }), Object.assign(Cn.prototype, {
        copy: function(t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
        }
    }), In.prototype = Object.assign(Object.create(Cn.prototype), {
        constructor: In,
        isSpotLightShadow: !0,
        update: function(t) {
            var e = 2 * $a.RAD2DEG * t.angle,
                n = this.mapSize.width / this.mapSize.height,
                i = t.distance || 500,
                r = this.camera;
            e === r.fov && n === r.aspect && i === r.far || (r.fov = e, r.aspect = n, r.far = i, r.updateProjectionMatrix())
        }
    }), Bn.prototype = Object.assign(Object.create(Rn.prototype), {
        constructor: Bn,
        isSpotLight: !0,
        copy: function(t) {
            return Rn.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), On.prototype = Object.assign(Object.create(Rn.prototype), {
        constructor: On,
        isPointLight: !0,
        copy: function(t) {
            return Rn.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    }), Nn.prototype = Object.assign(Object.create(Cn.prototype), {
        constructor: Nn
    }), Un.prototype = Object.assign(Object.create(Rn.prototype), {
        constructor: Un,
        isDirectionalLight: !0,
        copy: function(t) {
            return Rn.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), Dn.prototype = Object.assign(Object.create(Rn.prototype), {
        constructor: Dn,
        isAmbientLight: !0
    });
    var bs = {
        arraySlice: function(t, e, n) {
            return bs.isTypedArray(t) ? new t.constructor(t.subarray(e, n)) : t.slice(e, n)
        },
        convertArray: function(t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            function e(e, n) {
                return t[e] - t[n]
            }
            for (var n = t.length, i = new Array(n), r = 0; r !== n; ++r) i[r] = r;
            return i.sort(e), i
        },
        sortedArray: function(t, e, n) {
            for (var i = t.length, r = new t.constructor(i), o = 0, a = 0; a !== i; ++o)
                for (var s = n[o] * e, c = 0; c !== e; ++c) r[a++] = t[s + c];
            return r
        },
        flattenJSON: function(t, e, n, i) {
            for (var r = 1, o = t[0]; void 0 !== o && void 0 === o[i];) o = t[r++];
            if (void 0 !== o) {
                var a = o[i];
                if (void 0 !== a)
                    if (Array.isArray(a))
                        do {
                            a = o[i], void 0 !== a && (e.push(o.time), n.push.apply(n, a)), o = t[r++]
                        } while (void 0 !== o);
                    else if (void 0 !== a.toArray)
                    do {
                        a = o[i], void 0 !== a && (e.push(o.time), a.toArray(n, n.length)), o = t[r++]
                    } while (void 0 !== o);
                else
                    do {
                        a = o[i], void 0 !== a && (e.push(o.time), n.push(a)), o = t[r++]
                    } while (void 0 !== o)
            }
        }
    };
    Fn.prototype = {
        constructor: Fn,
        evaluate: function(t) {
            var e = this.parameterPositions,
                n = this._cachedIndex,
                i = e[n],
                r = e[n - 1];
            t: {
                e: {
                    var o;n: {
                        i: if (!(t < i)) {
                            for (var a = n + 2;;) {
                                if (void 0 === i) {
                                    if (t < r) break i;
                                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r)
                                }
                                if (n === a) break;
                                if (r = i, i = e[++n], t < i) break e
                            }
                            o = e.length;
                            break n
                        } {
                            if (t >= r) break t;
                            var s = e[1];
                            t < s && (n = 2, r = s);
                            for (var a = n - 2;;) {
                                if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                                if (n === a) break;
                                if (i = r, r = e[--n - 1], t >= r) break e
                            }
                            o = n, n = 0
                        }
                    }
                    for (; n < o;) {
                        var c = n + o >>> 1;
                        t < e[c] ? o = c : n = c + 1
                    }
                    if (i = e[n], void 0 === (r = e[n - 1])) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                    if (void 0 === i) return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, r, t)
                }
                this._cachedIndex = n,
                this.intervalChanged_(n, r, i)
            }
            return this.interpolate_(n, r, t, i)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            for (var e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i, o = 0; o !== i; ++o) e[o] = n[r + o];
            return e
        },
        interpolate_: function(t, e, n, i) {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function(t, e, n) {}
    }, Object.assign(Fn.prototype, {
        beforeStart_: Fn.prototype.copySampleValue_,
        afterEnd_: Fn.prototype.copySampleValue_
    }), zn.prototype = Object.assign(Object.create(Fn.prototype), {
        constructor: zn,
        DefaultSettings_: {
            endingStart: Ga,
            endingEnd: Ga
        },
        intervalChanged_: function(t, e, n) {
            var i = this.parameterPositions,
                r = t - 2,
                o = t + 1,
                a = i[r],
                s = i[o];
            if (void 0 === a) switch (this.getSettings_().endingStart) {
                case 2401:
                    r = t, a = 2 * e - n;
                    break;
                case 2402:
                    r = i.length - 2, a = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t, a = n
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case 2401:
                    o = t, s = 2 * n - e;
                    break;
                case 2402:
                    o = 1, s = n + i[1] - i[0];
                    break;
                default:
                    o = t - 1, s = e
            }
            var c = .5 * (n - e),
                u = this.valueSize;
            this._weightPrev = c / (e - a), this._weightNext = c / (s - n), this._offsetPrev = r * u, this._offsetNext = o * u
        },
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = s - a, u = this._offsetPrev, l = this._offsetNext, h = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e), f = p * p, m = f * p, g = -h * m + 2 * h * f - h * p, v = (1 + h) * m + (-1.5 - 2 * h) * f + (-.5 + h) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, _ = d * m - d * f, b = 0; b !== a; ++b) r[b] = g * o[u + b] + v * o[c + b] + y * o[s + b] + _ * o[l + b];
            return r
        }
    }), Gn.prototype = Object.assign(Object.create(Fn.prototype), {
        constructor: Gn,
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, c = s - a, u = (n - e) / (i - e), l = 1 - u, h = 0; h !== a; ++h) r[h] = o[c + h] * l + o[s + h] * u;
            return r
        }
    }), kn.prototype = Object.assign(Object.create(Fn.prototype), {
        constructor: kn,
        interpolate_: function(t, e, n, i) {
            return this.copySampleValue_(t - 1)
        }
    });
    var xs;
    xs = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new kn(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new Gn(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new zn(this.times, this.values, this.getValueSize(), t)
        },
        setInterpolation: function(t) {
            var e;
            switch (t) {
                case 2300:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(n);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return void console.warn(n)
            }
            this.createInterpolant = e
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, n = 0, i = e.length; n !== i; ++n) e[n] *= t;
            return this
        },
        trim: function(t, e) {
            for (var n = this.times, i = n.length, r = 0, o = i - 1; r !== i && n[r] < t;) ++r;
            for (; - 1 !== o && n[o] > e;) --o;
            if (++o, 0 !== r || o !== i) {
                r >= o && (o = Math.max(o, 1), r = o - 1);
                var a = this.getValueSize();
                this.times = bs.arraySlice(n, r, o), this.values = bs.arraySlice(this.values, r * a, o * a)
            }
            return this
        },
        validate: function() {
            var t = !0,
                e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("invalid value size in track", this), t = !1);
            var n = this.times,
                i = this.values,
                r = n.length;
            0 === r && (console.error("track is empty", this), t = !1);
            for (var o = null, a = 0; a !== r; a++) {
                var s = n[a];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("time is not a valid number", this, a, s), t = !1;
                    break
                }
                if (null !== o && o > s) {
                    console.error("out of order keys", this, a, s, o), t = !1;
                    break
                }
                o = s
            }
            if (void 0 !== i && bs.isTypedArray(i))
                for (var a = 0, c = i.length; a !== c; ++a) {
                    var u = i[a];
                    if (isNaN(u)) {
                        console.error("value is not a valid number", this, a, u), t = !1;
                        break
                    }
                }
            return t
        },
        optimize: function() {
            for (var t = this.times, e = this.values, n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = 1, o = t.length - 1, a = 1; a < o; ++a) {
                var s = !1,
                    c = t[a];
                if (c !== t[a + 1] && (1 !== a || c !== c[0]))
                    if (i) s = !0;
                    else
                        for (var u = a * n, l = u - n, h = u + n, d = 0; d !== n; ++d) {
                            var p = e[u + d];
                            if (p !== e[l + d] || p !== e[h + d]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (a !== r) {
                        t[r] = t[a];
                        for (var f = a * n, m = r * n, d = 0; d !== n; ++d) e[m + d] = e[f + d]
                    }++r
                }
            }
            if (o > 0) {
                t[r] = t[o];
                for (var f = o * n, m = r * n, d = 0; d !== n; ++d) e[m + d] = e[f + d];
                ++r
            }
            return r !== t.length && (this.times = bs.arraySlice(t, 0, r), this.values = bs.arraySlice(e, 0, r * n)), this
        }
    }, Vn.prototype = Object.assign(Object.create(xs), {
        constructor: Vn,
        ValueTypeName: "vector"
    }), jn.prototype = Object.assign(Object.create(Fn.prototype), {
        constructor: jn,
        interpolate_: function(t, e, n, i) {
            for (var r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = t * a, u = (n - e) / (i - e), l = c + a; c !== l; c += 4) s.slerpFlat(r, 0, o, c - a, o, c, u);
            return r
        }
    }), Wn.prototype = Object.assign(Object.create(xs), {
        constructor: Wn,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(t) {
            return new jn(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }), Xn.prototype = Object.assign(Object.create(xs), {
        constructor: Xn,
        ValueTypeName: "number"
    }), qn.prototype = Object.assign(Object.create(xs), {
        constructor: qn,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Yn.prototype = Object.assign(Object.create(xs), {
        constructor: Yn,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Zn.prototype = Object.assign(Object.create(xs), {
        constructor: Zn,
        ValueTypeName: "color"
    }), Jn.prototype = xs, xs.constructor = Jn, Object.assign(Jn, {
        parse: function(t) {
            if (void 0 === t.type) throw new Error("track type undefined, can not parse");
            var e = Jn._getTrackTypeForValueTypeName(t.type);
            if (void 0 === t.times) {
                var n = [],
                    i = [];
                bs.flattenJSON(t.keys, n, i, "value"), t.times = n, t.values = i
            }
            return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
        },
        toJSON: function(t) {
            var e, n = t.constructor;
            if (void 0 !== n.toJSON) e = n.toJSON(t);
            else {
                e = {
                    name: t.name,
                    times: bs.convertArray(t.times, Array),
                    values: bs.convertArray(t.values, Array)
                };
                var i = t.getInterpolation();
                i !== t.DefaultInterpolation && (e.interpolation = i)
            }
            return e.type = t.ValueTypeName, e
        },
        _getTrackTypeForValueTypeName: function(t) {
            switch (t.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return Xn;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Vn;
                case "color":
                    return Zn;
                case "quaternion":
                    return Wn;
                case "bool":
                case "boolean":
                    return Yn;
                case "string":
                    return qn
            }
            throw new Error("Unsupported typeName: " + t)
        }
    }), Qn.prototype = {
        constructor: Qn,
        resetDuration: function() {
            for (var t = this.tracks, e = 0, n = 0, i = t.length; n !== i; ++n) {
                var r = this.tracks[n];
                e = Math.max(e, r.times[r.times.length - 1])
            }
            this.duration = e
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
            return this
        }
    }, Object.assign(Qn, {
        parse: function(t) {
            for (var e = [], n = t.tracks, i = 1 / (t.fps || 1), r = 0, o = n.length; r !== o; ++r) e.push(Jn.parse(n[r]).scale(i));
            return new Qn(t.name, t.duration, e)
        },
        toJSON: function(t) {
            for (var e = [], n = t.tracks, i = {
                    name: t.name,
                    duration: t.duration,
                    tracks: e
                }, r = 0, o = n.length; r !== o; ++r) e.push(Jn.toJSON(n[r]));
            return i
        },
        CreateFromMorphTargetSequence: function(t, e, n, i) {
            for (var r = e.length, o = [], a = 0; a < r; a++) {
                var s = [],
                    c = [];
                s.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
                var u = bs.getKeyframeOrder(s);
                s = bs.sortedArray(s, 1, u), c = bs.sortedArray(c, 1, u), i || 0 !== s[0] || (s.push(r), c.push(c[0])), o.push(new Xn(".morphTargetInfluences[" + e[a].name + "]", s, c).scale(1 / n))
            }
            return new Qn(t, -1, o)
        },
        findByName: function(t, e) {
            var n = t;
            if (!Array.isArray(t)) {
                var i = t;
                n = i.geometry && i.geometry.animations || i.animations
            }
            for (var r = 0; r < n.length; r++)
                if (n[r].name === e) return n[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, n) {
            for (var i = {}, r = 0, o = t.length; r < o; r++) {
                var a = t[r],
                    s = a.name.match(/^([\w-]*?)([\d]+)$/);
                if (s && s.length > 1) {
                    var c = s[1],
                        u = i[c];
                    u || (i[c] = u = []), u.push(a)
                }
            }
            var l = [];
            for (var c in i) l.push(Qn.CreateFromMorphTargetSequence(c, i[c], e, n));
            return l
        },
        parseAnimation: function(t, e) {
            if (!t) return console.error("  no animation in JSONLoader data"), null;
            for (var n = function(t, e, n, i, r) {
                    if (0 !== n.length) {
                        var o = [],
                            a = [];
                        bs.flattenJSON(n, o, a, i), 0 !== o.length && r.push(new t(e, o, a))
                    }
                }, i = [], r = t.name || "default", o = t.length || -1, a = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                var u = s[c].keys;
                if (u && 0 !== u.length)
                    if (u[0].morphTargets) {
                        for (var l = {}, h = 0; h < u.length; h++)
                            if (u[h].morphTargets)
                                for (var d = 0; d < u[h].morphTargets.length; d++) l[u[h].morphTargets[d]] = -1;
                        for (var p in l) {
                            for (var f = [], m = [], d = 0; d !== u[h].morphTargets.length; ++d) {
                                var g = u[h];
                                f.push(g.time), m.push(g.morphTarget === p ? 1 : 0)
                            }
                            i.push(new Xn(".morphTargetInfluence[" + p + "]", f, m))
                        }
                        o = l.length * (a || 1)
                    } else {
                        var v = ".bones[" + e[c].name + "]";
                        n(Vn, v + ".position", u, "pos", i), n(Wn, v + ".quaternion", u, "rot", i), n(Vn, v + ".scale", u, "scl", i)
                    }
            }
            return 0 === i.length ? null : new Qn(r, o, i)
        }
    }), Object.assign(Kn.prototype, {
        load: function(t, e, n, i) {
            var r = this;
            new Mn(r.manager).load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, n, i)
        },
        setTextures: function(t) {
            this.textures = t
        },
        parse: function(t) {
            function e(t) {
                return void 0 === i[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), i[t]
            }
            var i = this.textures,
                r = new vs[t.type];
            if (void 0 !== t.uuid && (r.uuid = t.uuid), void 0 !== t.name && (r.name = t.name), void 0 !== t.color && r.color.setHex(t.color), void 0 !== t.roughness && (r.roughness = t.roughness), void 0 !== t.metalness && (r.metalness = t.metalness), void 0 !== t.emissive && r.emissive.setHex(t.emissive), void 0 !== t.specular && r.specular.setHex(t.specular), void 0 !== t.shininess && (r.shininess = t.shininess), void 0 !== t.clearCoat && (r.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (r.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (r.uniforms = t.uniforms), void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (r.vertexColors = t.vertexColors), void 0 !== t.fog && (r.fog = t.fog), void 0 !== t.shading && (r.shading = t.shading), void 0 !== t.blending && (r.blending = t.blending), void 0 !== t.side && (r.side = t.side), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.transparent && (r.transparent = t.transparent), void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest), void 0 !== t.depthTest && (r.depthTest = t.depthTest), void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite), void 0 !== t.wireframe && (r.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.skinning && (r.skinning = t.skinning), void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets), void 0 !== t.size && (r.size = t.size), void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (r.map = e(t.map)), void 0 !== t.alphaMap && (r.alphaMap = e(t.alphaMap), r.transparent = !0), void 0 !== t.bumpMap && (r.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale), void 0 !== t.normalMap && (r.normalMap = e(t.normalMap)), void 0 !== t.normalScale) {
                var o = t.normalScale;
                !1 === Array.isArray(o) && (o = [o, o]), r.normalScale = (new n).fromArray(o)
            }
            if (void 0 !== t.displacementMap && (r.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (r.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (r.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (r.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (r.specularMap = e(t.specularMap)), void 0 !== t.envMap && (r.envMap = e(t.envMap)), void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity), void 0 !== t.lightMap && (r.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (r.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (r.gradientMap = e(t.gradientMap)), void 0 !== t.materials)
                for (var a = 0, s = t.materials.length; a < s; a++) r.materials.push(this.parse(t.materials[a]));
            return r
        }
    }), Object.assign($n.prototype, {
        load: function(t, e, n, i) {
            var r = this;
            new Mn(r.manager).load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, n, i)
        },
        parse: function(t) {
            var e = new At,
                n = t.data.index,
                i = {
                    Int8Array: Int8Array,
                    Uint8Array: Uint8Array,
                    Uint8ClampedArray: Uint8ClampedArray,
                    Int16Array: Int16Array,
                    Uint16Array: Uint16Array,
                    Int32Array: Int32Array,
                    Uint32Array: Uint32Array,
                    Float32Array: Float32Array,
                    Float64Array: Float64Array
                };
            if (void 0 !== n) {
                var r = new i[n.type](n.array);
                e.setIndex(new pt(r, 1))
            }
            var o = t.data.attributes;
            for (var a in o) {
                var s = o[a],
                    r = new i[s.type](s.array);
                e.addAttribute(a, new pt(r, s.itemSize, s.normalized))
            }
            var u = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== u)
                for (var l = 0, h = u.length; l !== h; ++l) {
                    var d = u[l];
                    e.addGroup(d.start, d.count, d.materialIndex)
                }
            var p = t.data.boundingSphere;
            if (void 0 !== p) {
                var f = new c;
                void 0 !== p.center && f.fromArray(p.center), e.boundingSphere = new tt(f, p.radius)
            }
            return e
        }
    }), ti.prototype = {
        constructor: ti,
        crossOrigin: void 0,
        extractUrlBase: function(t) {
            var e = t.split("/");
            return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
        },
        initMaterials: function(t, e, n) {
            for (var i = [], r = 0; r < t.length; ++r) i[r] = this.createMaterial(t[r], e, n);
            return i
        },
        createMaterial: function() {
            var t, e, n, i = {
                NoBlending: uo,
                NormalBlending: lo,
                AdditiveBlending: ho,
                SubtractiveBlending: po,
                MultiplyBlending: fo,
                CustomBlending: mo
            };
            return function(r, o, a) {
                function s(t, n, i, r, s) {
                    var u, l = o + t,
                        h = ti.Handlers.get(l);
                    null !== h ? u = h.load(l) : (e.setCrossOrigin(a), u = e.load(l)), void 0 !== n && (u.repeat.fromArray(n), 1 !== n[0] && (u.wrapS = ea), 1 !== n[1] && (u.wrapT = ea)), void 0 !== i && u.offset.fromArray(i), void 0 !== r && ("repeat" === r[0] && (u.wrapS = ea), "mirror" === r[0] && (u.wrapS = ia), "repeat" === r[1] && (u.wrapT = ea), "mirror" === r[1] && (u.wrapT = ia)), void 0 !== s && (u.anisotropy = s);
                    var d = $a.generateUUID();
                    return c[d] = u, d
                }
                void 0 === t && (t = new W), void 0 === e && (e = new Ln), void 0 === n && (n = new Kn);
                var c = {},
                    u = {
                        uuid: $a.generateUUID(),
                        type: "MeshLambertMaterial"
                    };
                for (var l in r) {
                    var h = r[l];
                    switch (l) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            u.name = h;
                            break;
                        case "blending":
                            u.blending = i[h];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                            break;
                        case "colorDiffuse":
                            u.color = t.fromArray(h).getHex();
                            break;
                        case "colorSpecular":
                            u.specular = t.fromArray(h).getHex();
                            break;
                        case "colorEmissive":
                            u.emissive = t.fromArray(h).getHex();
                            break;
                        case "specularCoef":
                            u.shininess = h;
                            break;
                        case "shading":
                            "basic" === h.toLowerCase() && (u.type = "MeshBasicMaterial"), "phong" === h.toLowerCase() && (u.type = "MeshPhongMaterial"), "standard" === h.toLowerCase() && (u.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            u.map = s(h, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            u.emissiveMap = s(h, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            u.lightMap = s(h, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            u.aoMap = s(h, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            u.bumpMap = s(h, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            u.bumpScale = h;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            u.normalMap = s(h, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            u.normalScale = [h, h];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            u.specularMap = s(h, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            u.metalnessMap = s(h, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            u.roughnessMap = s(h, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            u.alphaMap = s(h, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            u.side = no;
                            break;
                        case "doubleSided":
                            u.side = io;
                            break;
                        case "transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), u.opacity = h;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            u[l] = h;
                            break;
                        case "vertexColors":
                            !0 === h && (u.vertexColors = co), "face" === h && (u.vertexColors = so);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", l, h)
                    }
                }
                return "MeshBasicMaterial" === u.type && delete u.emissive, "MeshPhongMaterial" !== u.type && delete u.specular, u.opacity < 1 && (u.transparent = !0), n.setTextures(c), n.parse(u)
            }
        }()
    }, ti.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = this.handlers, n = 0, i = e.length; n < i; n += 2) {
                var r = e[n],
                    o = e[n + 1];
                if (r.test(t)) return o
            }
            return null
        }
    }, Object.assign(ei.prototype, {
        load: function(t, e, n, i) {
            var r = this,
                o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : ti.prototype.extractUrlBase(t),
                a = new Mn(this.manager);
            a.setWithCredentials(this.withCredentials), a.load(t, function(n) {
                var i = JSON.parse(n),
                    a = i.metadata;
                if (void 0 !== a) {
                    var s = a.type;
                    if (void 0 !== s) {
                        if ("object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                    }
                }
                var c = r.parse(i, o);
                e(c.geometry, c.materials)
            }, n, i)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        parse: function(t, e) {
            var i = new St,
                o = void 0 !== t.scale ? 1 / t.scale : 1;
            if (function(e) {
                    function r(t, e) {
                        return t & 1 << e
                    }
                    var o, a, s, u, l, h, d, p, f, m, g, v, y, _, b, x, w, M, E, T, S, A, L, R, P, C, I, B = t.faces,
                        O = t.vertices,
                        N = t.normals,
                        U = t.colors,
                        D = 0;
                    if (void 0 !== t.uvs) {
                        for (o = 0; o < t.uvs.length; o++) t.uvs[o].length && D++;
                        for (o = 0; o < D; o++) i.faceVertexUvs[o] = []
                    }
                    for (u = 0, l = O.length; u < l;) M = new c, M.x = O[u++] * e, M.y = O[u++] * e, M.z = O[u++] * e, i.vertices.push(M);
                    for (u = 0, l = B.length; u < l;)
                        if (m = B[u++], g = r(m, 0), v = r(m, 1), y = r(m, 3), _ = r(m, 4), b = r(m, 5), x = r(m, 6), w = r(m, 7), g) {
                            if (T = new ht, T.a = B[u], T.b = B[u + 1], T.c = B[u + 3], S = new ht, S.a = B[u + 1], S.b = B[u + 2], S.c = B[u + 3], u += 4, v && (f = B[u++], T.materialIndex = f, S.materialIndex = f), s = i.faces.length, y)
                                for (o = 0; o < D; o++)
                                    for (R = t.uvs[o], i.faceVertexUvs[o][s] = [], i.faceVertexUvs[o][s + 1] = [], a = 0; a < 4; a++) p = B[u++], C = R[2 * p], I = R[2 * p + 1], P = new n(C, I), 2 !== a && i.faceVertexUvs[o][s].push(P), 0 !== a && i.faceVertexUvs[o][s + 1].push(P);
                            if (_ && (d = 3 * B[u++], T.normal.set(N[d++], N[d++], N[d]), S.normal.copy(T.normal)), b)
                                for (o = 0; o < 4; o++) d = 3 * B[u++], L = new c(N[d++], N[d++], N[d]), 2 !== o && T.vertexNormals.push(L), 0 !== o && S.vertexNormals.push(L);
                            if (x && (h = B[u++], A = U[h], T.color.setHex(A), S.color.setHex(A)), w)
                                for (o = 0; o < 4; o++) h = B[u++], A = U[h], 2 !== o && T.vertexColors.push(new W(A)), 0 !== o && S.vertexColors.push(new W(A));
                            i.faces.push(T), i.faces.push(S)
                        } else {
                            if (E = new ht, E.a = B[u++], E.b = B[u++], E.c = B[u++], v && (f = B[u++], E.materialIndex = f), s = i.faces.length, y)
                                for (o = 0; o < D; o++)
                                    for (R = t.uvs[o], i.faceVertexUvs[o][s] = [], a = 0; a < 3; a++) p = B[u++], C = R[2 * p], I = R[2 * p + 1], P = new n(C, I), i.faceVertexUvs[o][s].push(P);
                            if (_ && (d = 3 * B[u++], E.normal.set(N[d++], N[d++], N[d])), b)
                                for (o = 0; o < 3; o++) d = 3 * B[u++], L = new c(N[d++], N[d++], N[d]), E.vertexNormals.push(L);
                            if (x && (h = B[u++], E.color.setHex(U[h])), w)
                                for (o = 0; o < 3; o++) h = B[u++], E.vertexColors.push(new W(U[h]));
                            i.faces.push(E)
                        }
                }(o), function() {
                    var e = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                    if (t.skinWeights)
                        for (var n = 0, o = t.skinWeights.length; n < o; n += e) {
                            var a = t.skinWeights[n],
                                s = e > 1 ? t.skinWeights[n + 1] : 0,
                                c = e > 2 ? t.skinWeights[n + 2] : 0,
                                u = e > 3 ? t.skinWeights[n + 3] : 0;
                            i.skinWeights.push(new r(a, s, c, u))
                        }
                    if (t.skinIndices)
                        for (var n = 0, o = t.skinIndices.length; n < o; n += e) {
                            var l = t.skinIndices[n],
                                h = e > 1 ? t.skinIndices[n + 1] : 0,
                                d = e > 2 ? t.skinIndices[n + 2] : 0,
                                p = e > 3 ? t.skinIndices[n + 3] : 0;
                            i.skinIndices.push(new r(l, h, d, p))
                        }
                    i.bones = t.bones, i.bones && i.bones.length > 0 && (i.skinWeights.length !== i.skinIndices.length || i.skinIndices.length !== i.vertices.length) && console.warn("When skinning, number of vertices (" + i.vertices.length + "), skinIndices (" + i.skinIndices.length + "), and skinWeights (" + i.skinWeights.length + ") should match.")
                }(), function(e) {
                    if (void 0 !== t.morphTargets)
                        for (var n = 0, r = t.morphTargets.length; n < r; n++) {
                            i.morphTargets[n] = {}, i.morphTargets[n].name = t.morphTargets[n].name, i.morphTargets[n].vertices = [];
                            for (var o = i.morphTargets[n].vertices, a = t.morphTargets[n].vertices, s = 0, u = a.length; s < u; s += 3) {
                                var l = new c;
                                l.x = a[s] * e, l.y = a[s + 1] * e, l.z = a[s + 2] * e, o.push(l)
                            }
                        }
                    if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                        console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                        for (var h = i.faces, d = t.morphColors[0].colors, n = 0, r = h.length; n < r; n++) h[n].color.fromArray(d, 3 * n)
                    }
                }(o), function() {
                    var e = [],
                        n = [];
                    void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
                    for (var r = 0; r < n.length; r++) {
                        var o = Qn.parseAnimation(n[r], i.bones);
                        o && e.push(o)
                    }
                    if (i.morphTargets) {
                        var a = Qn.CreateClipsFromMorphTargetSequences(i.morphTargets, 10);
                        e = e.concat(a)
                    }
                    e.length > 0 && (i.animations = e)
                }(), i.computeFaceNormals(), i.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length) return {
                geometry: i
            };
            var a = ti.prototype.initMaterials(t.materials, e, this.crossOrigin);
            return {
                geometry: i,
                materials: a
            }
        }
    }), Object.assign(ni.prototype, {
        load: function(t, e, n, i) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var r = this;
            new Mn(r.manager).load(t, function(n) {
                var o = null;
                try {
                    o = JSON.parse(n)
                } catch (e) {
                    return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                }
                var a = o.metadata;
                if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) return void console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.");
                r.parse(o, e)
            }, n, i)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        },
        parse: function(t, e) {
            var n = this.parseGeometries(t.geometries),
                i = this.parseImages(t.images, function() {
                    void 0 !== e && e(a)
                }),
                r = this.parseTextures(t.textures, i),
                o = this.parseMaterials(t.materials, r),
                a = this.parseObject(t.object, n, o);
            return t.animations && (a.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(a), a
        },
        parseGeometries: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var n = new ei, i = new $n, r = 0, o = t.length; r < o; r++) {
                    var a, s = t[r];
                    switch (s.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            a = new gs[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            a = new gs[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            a = new gs[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            a = new gs[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            a = new gs[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            a = new gs[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "IcosahedronGeometry":
                        case "OctahedronGeometry":
                        case "TetrahedronGeometry":
                            a = new gs[s.type](s.radius, s.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            a = new gs[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            a = new gs[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            a = new gs[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            a = new gs[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                            break;
                        case "BufferGeometry":
                            a = i.parse(s);
                            break;
                        case "Geometry":
                            a = n.parse(s.data, this.texturePath).geometry;
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                            continue
                    }
                    a.uuid = s.uuid, void 0 !== s.name && (a.name = s.name), e[s.uuid] = a
                }
            return e
        },
        parseMaterials: function(t, e) {
            var n = {};
            if (void 0 !== t) {
                var i = new Kn;
                i.setTextures(e);
                for (var r = 0, o = t.length; r < o; r++) {
                    var a = i.parse(t[r]);
                    n[a.uuid] = a
                }
            }
            return n
        },
        parseAnimations: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i = Qn.parse(t[n]);
                e.push(i)
            }
            return e
        },
        parseImages: function(t, e) {
            var n = this,
                i = {};
            if (void 0 !== t && t.length > 0) {
                var r = new wn(e),
                    o = new Sn(r);
                o.setCrossOrigin(this.crossOrigin);
                for (var a = 0, s = t.length; a < s; a++) {
                    var c = t[a],
                        u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
                    i[c.uuid] = function(t) {
                        return n.manager.itemStart(t), o.load(t, function() {
                            n.manager.itemEnd(t)
                        }, void 0, function() {
                            n.manager.itemError(t)
                        })
                    }(u)
                }
            }
            return i
        },
        parseTextures: function(t, e) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
            }
            var r = {
                    UVMapping: 300,
                    CubeReflectionMapping: Yo,
                    CubeRefractionMapping: Zo,
                    EquirectangularReflectionMapping: Jo,
                    EquirectangularRefractionMapping: Qo,
                    SphericalReflectionMapping: Ko,
                    CubeUVReflectionMapping: $o,
                    CubeUVRefractionMapping: ta
                },
                o = {
                    RepeatWrapping: ea,
                    ClampToEdgeWrapping: na,
                    MirroredRepeatWrapping: ia
                },
                a = {
                    NearestFilter: ra,
                    NearestMipMapNearestFilter: oa,
                    NearestMipMapLinearFilter: aa,
                    LinearFilter: sa,
                    LinearMipMapNearestFilter: ca,
                    LinearMipMapLinearFilter: ua
                },
                s = {};
            if (void 0 !== t)
                for (var c = 0, u = t.length; c < u; c++) {
                    var l = t[c];
                    void 0 === l.image && console.warn('THREE.ObjectLoader: No "image" specified for', l.uuid), void 0 === e[l.image] && console.warn("THREE.ObjectLoader: Undefined image", l.image);
                    var h = new i(e[l.image]);
                    h.needsUpdate = !0, h.uuid = l.uuid, void 0 !== l.name && (h.name = l.name), void 0 !== l.mapping && (h.mapping = n(l.mapping, r)), void 0 !== l.offset && h.offset.fromArray(l.offset), void 0 !== l.repeat && h.repeat.fromArray(l.repeat), void 0 !== l.wrap && (h.wrapS = n(l.wrap[0], o), h.wrapT = n(l.wrap[1], o)), void 0 !== l.minFilter && (h.minFilter = n(l.minFilter, a)), void 0 !== l.magFilter && (h.magFilter = n(l.magFilter, a)), void 0 !== l.anisotropy && (h.anisotropy = l.anisotropy), void 0 !== l.flipY && (h.flipY = l.flipY), s[l.uuid] = h
                }
            return s
        },
        parseObject: function() {
            var t = new u;
            return function(e, n, i) {
                function r(t) {
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), n[t]
                }

                function o(t) {
                    if (void 0 !== t) return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t]
                }
                var a;
                switch (e.type) {
                    case "Scene":
                        a = new he, void 0 !== e.background && Number.isInteger(e.background) && (a.background = new W(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? a.fog = new le(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (a.fog = new ue(e.fog.color, e.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        a = new Ot(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (a.focus = e.focus), void 0 !== e.zoom && (a.zoom = e.zoom), void 0 !== e.filmGauge && (a.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (a.filmOffset = e.filmOffset), void 0 !== e.view && (a.view = Object.assign({}, e.view));
                        break;
                    case "OrthographicCamera":
                        a = new Nt(e.left, e.right, e.top, e.bottom, e.near, e.far);
                        break;
                    case "AmbientLight":
                        a = new Dn(e.color, e.intensity);
                        break;
                    case "DirectionalLight":
                        a = new Un(e.color, e.intensity);
                        break;
                    case "PointLight":
                        a = new On(e.color, e.intensity, e.distance, e.decay);
                        break;
                    case "SpotLight":
                        a = new Bn(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                        break;
                    case "HemisphereLight":
                        a = new Pn(e.color, e.groundColor, e.intensity);
                        break;
                    case "Mesh":
                        var s = r(e.geometry),
                            c = o(e.material);
                        a = s.bones && s.bones.length > 0 ? new ye(s, c) : new Lt(s, c);
                        break;
                    case "LOD":
                        a = new me;
                        break;
                    case "Line":
                        a = new be(r(e.geometry), o(e.material), e.mode);
                        break;
                    case "LineSegments":
                        a = new xe(r(e.geometry), o(e.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        a = new Me(r(e.geometry), o(e.material));
                        break;
                    case "Sprite":
                        a = new fe(o(e.material));
                        break;
                    case "Group":
                        a = new Ee;
                        break;
                    case "SkinnedMesh":
                        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh type. Instantiates Object3D instead.");
                    default:
                        a = new ct
                }
                if (a.uuid = e.uuid, void 0 !== e.name && (a.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== e.position && a.position.fromArray(e.position), void 0 !== e.rotation && a.rotation.fromArray(e.rotation), void 0 !== e.quaternion && a.quaternion.fromArray(e.quaternion), void 0 !== e.scale && a.scale.fromArray(e.scale)), void 0 !== e.castShadow && (a.castShadow = e.castShadow), void 0 !== e.receiveShadow && (a.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (a.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (a.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && a.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (a.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (a.visible = e.visible), void 0 !== e.userData && (a.userData = e.userData), void 0 !== e.children)
                    for (var u in e.children) a.add(this.parseObject(e.children[u], n, i));
                if ("LOD" === e.type)
                    for (var l = e.levels, h = 0; h < l.length; h++) {
                        var d = l[h],
                            u = a.getObjectByProperty("uuid", d.object);
                        void 0 !== u && a.addLevel(u, d.distance)
                    }
                return a
            }
        }()
    }), pi.prototype = {
        constructor: pi,
        getPoint: function(t) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
        },
        getPointAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getPoint(e)
        },
        getPoints: function(t) {
            isNaN(t) && (t = 5);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return e
        },
        getSpacedPoints: function(t) {
            isNaN(t) && (t = 5);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (isNaN(t) && (t = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, n, i = [],
                r = this.getPoint(0),
                o = 0;
            for (i.push(0), n = 1; n <= t; n++) e = this.getPoint(n / t), o += e.distanceTo(r), i.push(o), r = e;
            return this.cacheArcLengths = i, i
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var n, i = this.getLengths(),
                r = 0,
                o = i.length;
            n = e || t * i[o - 1];
            for (var a, s = 0, c = o - 1; s <= c;)
                if (r = Math.floor(s + (c - s) / 2), (a = i[r] - n) < 0) s = r + 1;
                else {
                    if (!(a > 0)) {
                        c = r;
                        break
                    }
                    c = r - 1
                }
            if (r = c, i[r] === n) {
                var u = r / (o - 1);
                return u
            }
            var l = i[r],
                h = i[r + 1],
                d = h - l,
                p = (n - l) / d,
                u = (r + p) / (o - 1);
            return u
        },
        getTangent: function(t) {
            var e = t - 1e-4,
                n = t + 1e-4;
            e < 0 && (e = 0), n > 1 && (n = 1);
            var i = this.getPoint(e);
            return this.getPoint(n).clone().sub(i).normalize()
        },
        getTangentAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        },
        computeFrenetFrames: function(t, e) {
            var n, i, r, o = new c,
                a = [],
                s = [],
                l = [],
                h = new c,
                d = new u;
            for (n = 0; n <= t; n++) i = n / t, a[n] = this.getTangentAt(i), a[n].normalize();
            s[0] = new c, l[0] = new c;
            var p = Number.MAX_VALUE,
                f = Math.abs(a[0].x),
                m = Math.abs(a[0].y),
                g = Math.abs(a[0].z);
            for (f <= p && (p = f, o.set(1, 0, 0)), m <= p && (p = m, o.set(0, 1, 0)), g <= p && o.set(0, 0, 1), h.crossVectors(a[0], o).normalize(), s[0].crossVectors(a[0], h), l[0].crossVectors(a[0], s[0]), n = 1; n <= t; n++) s[n] = s[n - 1].clone(), l[n] = l[n - 1].clone(), h.crossVectors(a[n - 1], a[n]), h.length() > Number.EPSILON && (h.normalize(), r = Math.acos($a.clamp(a[n - 1].dot(a[n]), -1, 1)), s[n].applyMatrix4(d.makeRotationAxis(h, r))), l[n].crossVectors(a[n], s[n]);
            if (!0 === e)
                for (r = Math.acos($a.clamp(s[0].dot(s[t]), -1, 1)), r /= t, a[0].dot(h.crossVectors(s[0], s[t])) > 0 && (r = -r), n = 1; n <= t; n++) s[n].applyMatrix4(d.makeRotationAxis(a[n], r * n)), l[n].crossVectors(a[n], s[n]);
            return {
                tangents: a,
                normals: s,
                binormals: l
            }
        }
    }, fi.prototype = Object.create(pi.prototype), fi.prototype.constructor = fi, fi.prototype.isLineCurve = !0, fi.prototype.getPoint = function(t) {
        if (1 === t) return this.v2.clone();
        var e = this.v2.clone().sub(this.v1);
        return e.multiplyScalar(t).add(this.v1), e
    }, fi.prototype.getPointAt = function(t) {
        return this.getPoint(t)
    }, fi.prototype.getTangent = function(t) {
        return this.v2.clone().sub(this.v1).normalize()
    }, mi.prototype = Object.assign(Object.create(pi.prototype), {
        constructor: mi,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new fi(e, t))
        },
        getPoint: function(t) {
            for (var e = t * this.getLength(), n = this.getCurveLengths(), i = 0; i < n.length;) {
                if (n[i] >= e) {
                    var r = n[i] - e,
                        o = this.curves[i],
                        a = o.getLength(),
                        s = 0 === a ? 0 : 1 - r / a;
                    return o.getPointAt(s)
                }
                i++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
            return this.cacheLengths = t, t
        },
        getSpacedPoints: function(t) {
            isNaN(t) && (t = 40);
            for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]), e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, n = [], i = 0, r = this.curves; i < r.length; i++)
                for (var o = r[i], a = o && o.isEllipseCurve ? 2 * t : o && o.isLineCurve ? 1 : o && o.isSplineCurve ? t * o.points.length : t, s = o.getPoints(a), c = 0; c < s.length; c++) {
                    var u = s[c];
                    e && e.equals(u) || (n.push(u), e = u)
                }
            return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
        },
        createPointsGeometry: function(t) {
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function(t) {
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function(t) {
            for (var e = new St, n = 0, i = t.length; n < i; n++) {
                var r = t[n];
                e.vertices.push(new c(r.x, r.y, r.z || 0))
            }
            return e
        }
    }), gi.prototype = Object.create(pi.prototype), gi.prototype.constructor = gi, gi.prototype.isEllipseCurve = !0, gi.prototype.getPoint = function(t) {
        for (var e = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, r = Math.abs(i) < Number.EPSILON; i < 0;) i += e;
        for (; i > e;) i -= e;
        i < Number.EPSILON && (i = r ? 0 : e), !0 !== this.aClockwise || r || (i === e ? i = -e : i -= e);
        var o = this.aStartAngle + t * i,
            a = this.aX + this.xRadius * Math.cos(o),
            s = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            var c = Math.cos(this.aRotation),
                u = Math.sin(this.aRotation),
                l = a - this.aX,
                h = s - this.aY;
            a = l * c - h * u + this.aX, s = l * u + h * c + this.aY
        }
        return new n(a, s)
    }, vi.prototype = Object.create(pi.prototype), vi.prototype.constructor = vi, vi.prototype.isSplineCurve = !0, vi.prototype.getPoint = function(t) {
        var e = this.points,
            i = (e.length - 1) * t,
            r = Math.floor(i),
            o = i - r,
            a = e[0 === r ? r : r - 1],
            s = e[r],
            c = e[r > e.length - 2 ? e.length - 1 : r + 1],
            u = e[r > e.length - 3 ? e.length - 1 : r + 2];
        return new n(ii(o, a.x, s.x, c.x, u.x), ii(o, a.y, s.y, c.y, u.y))
    }, yi.prototype = Object.create(pi.prototype), yi.prototype.constructor = yi, yi.prototype.getPoint = function(t) {
        var e = this.v0,
            i = this.v1,
            r = this.v2,
            o = this.v3;
        return new n(di(t, e.x, i.x, r.x, o.x), di(t, e.y, i.y, r.y, o.y))
    }, _i.prototype = Object.create(pi.prototype), _i.prototype.constructor = _i, _i.prototype.getPoint = function(t) {
        var e = this.v0,
            i = this.v1,
            r = this.v2;
        return new n(si(t, e.x, i.x, r.x), si(t, e.y, i.y, r.y))
    };
    var ws = Object.assign(Object.create(mi.prototype), {
        fromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function(t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function(t, e) {
            var i = new fi(this.currentPoint.clone(), new n(t, e));
            this.curves.push(i), this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, i, r) {
            var o = new _i(this.currentPoint.clone(), new n(t, e), new n(i, r));
            this.curves.push(o), this.currentPoint.set(i, r)
        },
        bezierCurveTo: function(t, e, i, r, o, a) {
            var s = new yi(this.currentPoint.clone(), new n(t, e), new n(i, r), new n(o, a));
            this.curves.push(s), this.currentPoint.set(o, a)
        },
        splineThru: function(t) {
            var e = [this.currentPoint.clone()].concat(t),
                n = new vi(e);
            this.curves.push(n), this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, n, i, r, o) {
            var a = this.currentPoint.x,
                s = this.currentPoint.y;
            this.absarc(t + a, e + s, n, i, r, o)
        },
        absarc: function(t, e, n, i, r, o) {
            this.absellipse(t, e, n, n, i, r, o)
        },
        ellipse: function(t, e, n, i, r, o, a, s) {
            var c = this.currentPoint.x,
                u = this.currentPoint.y;
            this.absellipse(t + c, e + u, n, i, r, o, a, s)
        },
        absellipse: function(t, e, n, i, r, o, a, s) {
            var c = new gi(t, e, n, i, r, o, a, s);
            if (this.curves.length > 0) {
                var u = c.getPoint(0);
                u.equals(this.currentPoint) || this.lineTo(u.x, u.y)
            }
            this.curves.push(c);
            var l = c.getPoint(1);
            this.currentPoint.copy(l)
        }
    });
    bi.prototype = ws, ws.constructor = bi, xi.prototype = Object.assign(Object.create(ws), {
        constructor: xi,
        getPointsHoles: function(t) {
            for (var e = [], n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
            return e
        },
        extractAllPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        extractPoints: function(t) {
            return this.extractAllPoints(t)
        }
    }), wi.prototype = {
        moveTo: function(t, e) {
            this.currentPath = new bi, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
        },
        lineTo: function(t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function(t, e, n, i) {
            this.currentPath.quadraticCurveTo(t, e, n, i)
        },
        bezierCurveTo: function(t, e, n, i, r, o) {
            this.currentPath.bezierCurveTo(t, e, n, i, r, o)
        },
        splineThru: function(t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function(t, e) {
            function n(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) {
                    var r = t[n],
                        o = new xi;
                    o.curves = r.curves, e.push(o)
                }
                return e
            }
            var i = ms.isClockWise,
                r = this.subPaths;
            if (0 === r.length) return [];
            if (!0 === e) return n(r);
            var o, a, s, c = [];
            if (1 === r.length) return a = r[0], s = new xi, s.curves = a.curves, c.push(s), c;
            var u = !i(r[0].getPoints());
            u = t ? !u : u;
            var l, h = [],
                d = [],
                p = [],
                f = 0;
            d[f] = void 0, p[f] = [];
            for (var m = 0, g = r.length; m < g; m++) a = r[m], l = a.getPoints(), o = i(l), o = t ? !o : o, o ? (!u && d[f] && f++, d[f] = {
                s: new xi,
                p: l
            }, d[f].s.curves = a.curves, u && f++, p[f] = []) : p[f].push({
                h: a,
                p: l[0]
            });
            if (!d[0]) return n(r);
            if (d.length > 1) {
                for (var v = !1, y = [], _ = 0, b = d.length; _ < b; _++) h[_] = [];
                for (var _ = 0, b = d.length; _ < b; _++)
                    for (var x = p[_], w = 0; w < x.length; w++) {
                        for (var M = x[w], E = !0, T = 0; T < d.length; T++)(function(t, e) {
                            for (var n = e.length, i = !1, r = n - 1, o = 0; o < n; r = o++) {
                                var a = e[r],
                                    s = e[o],
                                    c = s.x - a.x,
                                    u = s.y - a.y;
                                if (Math.abs(u) > Number.EPSILON) {
                                    if (u < 0 && (a = e[o], c = -c, s = e[r], u = -u), t.y < a.y || t.y > s.y) continue;
                                    if (t.y === a.y) {
                                        if (t.x === a.x) return !0
                                    } else {
                                        var l = u * (t.x - a.x) - c * (t.y - a.y);
                                        if (0 === l) return !0;
                                        if (l < 0) continue;
                                        i = !i
                                    }
                                } else {
                                    if (t.y !== a.y) continue;
                                    if (s.x <= t.x && t.x <= a.x || a.x <= t.x && t.x <= s.x) return !0
                                }
                            }
                            return i
                        })(M.p, d[T].p) && (_ !== T && y.push({
                            froms: _,
                            tos: T,
                            hole: w
                        }), E ? (E = !1, h[T].push(M)) : v = !0);
                        E && h[_].push(M)
                    }
                y.length > 0 && (v || (p = h))
            }
            for (var S, m = 0, A = d.length; m < A; m++) {
                s = d[m].s, c.push(s), S = p[m];
                for (var L = 0, R = S.length; L < R; L++) s.holes.push(S[L].h)
            }
            return c
        }
    }, Object.assign(Mi.prototype, {
        isFont: !0,
        generateShapes: function(t, e, n) {
            function i(t, e, i, o) {
                var a = r.glyphs[t] || r.glyphs["?"];
                if (a) {
                    var s, c, u, l, h, d, p, f, m, g, v, y = new wi,
                        _ = [];
                    if (a.o)
                        for (var b = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), x = 0, w = b.length; x < w;) {
                            var M = b[x++];
                            switch (M) {
                                case "m":
                                    s = b[x++] * e + i, c = b[x++] * e + o, y.moveTo(s, c);
                                    break;
                                case "l":
                                    s = b[x++] * e + i, c = b[x++] * e + o, y.lineTo(s, c);
                                    break;
                                case "q":
                                    if (u = b[x++] * e + i, l = b[x++] * e + o, p = b[x++] * e + i, f = b[x++] * e + o, y.quadraticCurveTo(p, f, u, l), v = _[_.length - 1]) {
                                        h = v.x, d = v.y;
                                        for (var E = 1; E <= n; E++) {
                                            var T = E / n;
                                            si(T, h, p, u), si(T, d, f, l)
                                        }
                                    }
                                    break;
                                case "b":
                                    if (u = b[x++] * e + i, l = b[x++] * e + o, p = b[x++] * e + i, f = b[x++] * e + o, m = b[x++] * e + i, g = b[x++] * e + o, y.bezierCurveTo(p, f, m, g, u, l), v = _[_.length - 1]) {
                                        h = v.x, d = v.y;
                                        for (var E = 1; E <= n; E++) {
                                            var T = E / n;
                                            di(T, h, p, m, u), di(T, d, f, g, l)
                                        }
                                    }
                            }
                        }
                    return {
                        offsetX: a.ha * e,
                        path: y
                    }
                }
            }
            void 0 === e && (e = 100), void 0 === n && (n = 4);
            for (var r = this.data, o = function(t) {
                    for (var n = String(t).split(""), o = e / r.resolution, a = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * o, s = 0, c = 0, u = [], l = 0; l < n.length; l++) {
                        var h = n[l];
                        if ("\n" === h) s = 0, c -= a;
                        else {
                            var d = i(h, o, s, c);
                            s += d.offsetX, u.push(d.path)
                        }
                    }
                    return u
                }(t), a = [], s = 0, c = o.length; s < c; s++) Array.prototype.push.apply(a, o[s].toShapes());
            return a
        }
    }), Object.assign(Ei.prototype, {
        load: function(t, e, n, i) {
            var r = this;
            new Mn(this.manager).load(t, function(t) {
                var n;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
                }
                var i = r.parse(n);
                e && e(i)
            }, n, i)
        },
        parse: function(t) {
            return new Mi(t)
        }
    });
    var Ms, Es = {
        getContext: function() {
            return void 0 === Ms && (Ms = new(window.AudioContext || window.webkitAudioContext)), Ms
        },
        setContext: function(t) {
            Ms = t
        }
    };
    Object.assign(Ti.prototype, {
        load: function(t, e, n, i) {
            var r = new Mn(this.manager);
            r.setResponseType("arraybuffer"), r.load(t, function(t) {
                Es.getContext().decodeAudioData(t, function(t) {
                    e(t)
                })
            }, n, i)
        }
    }), Si.prototype = Object.assign(Object.create(Rn.prototype), {
        constructor: Si,
        isRectAreaLight: !0,
        copy: function(t) {
            return Rn.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
        }
    }), Object.assign(Ai.prototype, {
        update: function() {
            var t, e, n, i, r, o, a, s = new u,
                c = new u;
            return function(u) {
                if (t !== this || e !== u.focus || n !== u.fov || i !== u.aspect * this.aspect || r !== u.near || o !== u.far || a !== u.zoom) {
                    t = this, e = u.focus, n = u.fov, i = u.aspect * this.aspect, r = u.near, o = u.far, a = u.zoom;
                    var l, h, d = u.projectionMatrix.clone(),
                        p = this.eyeSep / 2,
                        f = p * r / e,
                        m = r * Math.tan($a.DEG2RAD * n * .5) / a;
                    c.elements[12] = -p, s.elements[12] = p, l = -m * i + f, h = m * i + f, d.elements[0] = 2 * r / (h - l), d.elements[8] = (h + l) / (h - l), this.cameraL.projectionMatrix.copy(d), l = -m * i - f, h = m * i - f, d.elements[0] = 2 * r / (h - l), d.elements[8] = (h + l) / (h - l), this.cameraR.projectionMatrix.copy(d)
                }
                this.cameraL.matrixWorld.copy(u.matrixWorld).multiply(c), this.cameraR.matrixWorld.copy(u.matrixWorld).multiply(s)
            }
        }()
    }), Li.prototype = Object.create(ct.prototype), Li.prototype.constructor = Li, Ri.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: Ri,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            this.gain.gain.value = t
        },
        updateMatrixWorld: function() {
            var t = new c,
                e = new s,
                n = new c,
                i = new c;
            return function(r) {
                ct.prototype.updateMatrixWorld.call(this, r);
                var o = this.context.listener,
                    a = this.up;
                this.matrixWorld.decompose(t, e, n), i.set(0, 0, -1).applyQuaternion(e), o.positionX ? (o.positionX.setValueAtTime(t.x, this.context.currentTime), o.positionY.setValueAtTime(t.y, this.context.currentTime), o.positionZ.setValueAtTime(t.z, this.context.currentTime), o.forwardX.setValueAtTime(i.x, this.context.currentTime), o.forwardY.setValueAtTime(i.y, this.context.currentTime), o.forwardZ.setValueAtTime(i.z, this.context.currentTime), o.upX.setValueAtTime(a.x, this.context.currentTime), o.upY.setValueAtTime(a.y, this.context.currentTime), o.upZ.setValueAtTime(a.z, this.context.currentTime)) : (o.setPosition(t.x, t.y, t.z), o.setOrientation(i.x, i.y, i.z, a.x, a.y, a.z))
            }
        }()
    }), Pi.prototype = Object.assign(Object.create(ct.prototype), {
        constructor: Pi,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        },
        setBuffer: function(t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function() {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            var t = this.context.createBufferSource();
            return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), t.start(0, this.startTime), this.isPlaying = !0, this.source = t, this.connect()
        },
        pause: function() {
            return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
                this.startTime = this.context.currentTime, this.isPlaying = !1, this)
        },
        stop: function() {
            return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this.startTime = 0, this.isPlaying = !1, this)
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this)
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function(t) {
            return !1 === this.hasPlaybackControl ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this)
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.value = t, this
        }
    }), Ci.prototype = Object.assign(Object.create(Pi.prototype), {
        constructor: Ci,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            this.panner.refDistance = t
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            this.panner.rolloffFactor = t
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            this.panner.distanceModel = t
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            this.panner.maxDistance = t
        },
        updateMatrixWorld: function() {
            var t = new c;
            return function(e) {
                ct.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
            }
        }()
    }), Object.assign(Ii.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++) t += e[n];
            return t / e.length
        }
    }), Bi.prototype = {
        constructor: Bi,
        accumulate: function(t, e) {
            var n = this.buffer,
                i = this.valueSize,
                r = t * i + i,
                o = this.cumulativeWeight;
            if (0 === o) {
                for (var a = 0; a !== i; ++a) n[r + a] = n[a];
                o = e
            } else {
                o += e;
                var s = e / o;
                this._mixBufferRegion(n, r, 0, s, i)
            }
            this.cumulativeWeight = o
        },
        apply: function(t) {
            var e = this.valueSize,
                n = this.buffer,
                i = t * e + e,
                r = this.cumulativeWeight,
                o = this.binding;
            if (this.cumulativeWeight = 0, r < 1) {
                var a = 3 * e;
                this._mixBufferRegion(n, i, a, 1 - r, e)
            }
            for (var s = e, c = e + e; s !== c; ++s)
                if (n[s] !== n[s + e]) {
                    o.setValue(n, i);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.binding,
                e = this.buffer,
                n = this.valueSize,
                i = 3 * n;
            t.getValue(e, i);
            for (var r = n, o = i; r !== o; ++r) e[r] = e[i + r % n];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function(t, e, n, i, r) {
            if (i >= .5)
                for (var o = 0; o !== r; ++o) t[e + o] = t[n + o]
        },
        _slerp: function(t, e, n, i, r) {
            s.slerpFlat(t, e, t, e, t, n, i)
        },
        _lerp: function(t, e, n, i, r) {
            for (var o = 1 - i, a = 0; a !== r; ++a) {
                var s = e + a;
                t[s] = t[s] * o + t[n + a] * i
            }
        }
    }, Oi.prototype = {
        constructor: Oi,
        getValue: function(t, e) {
            this.bind(), this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(), this.setValue(t, e)
        },
        bind: function() {
            var t = this.node,
                e = this.parsedPath,
                n = e.objectName,
                i = e.propertyName,
                r = e.propertyIndex;
            if (t || (t = Oi.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                var o = e.objectIndex;
                switch (n) {
                    case "materials":
                        if (!t.material) return void console.error("  can not bind to material as node does not have a material", this);
                        if (!t.material.materials) return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton) return void console.error("  can not bind to bones as node does not have a skeleton", this);
                        t = t.skeleton.bones;
                        for (var a = 0; a < t.length; a++)
                            if (t[a].name === o) {
                                o = a;
                                break
                            }
                        break;
                    default:
                        if (void 0 === t[n]) return void console.error("  can not bind to objectName of node, undefined", this);
                        t = t[n]
                }
                if (void 0 !== o) {
                    if (void 0 === t[o]) return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, t);
                    t = t[o]
                }
            }
            var s = t[i];
            if (void 0 === s) {
                var c = e.nodeName;
                return void console.error("  trying to update property for track: " + c + "." + i + " but it wasn't found.", t)
            }
            var u = this.Versioning.None;
            void 0 !== t.needsUpdate ? (u = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (u = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
            var l = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!t.geometry) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                    if (!t.geometry.morphTargets) return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                    for (var a = 0; a < this.node.geometry.morphTargets.length; a++)
                        if (t.geometry.morphTargets[a].name === r) {
                            r = a;
                            break
                        }
                }
                l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : void 0 !== s.length ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][u]
        },
        unbind: function() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }, Object.assign(Oi.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        _getValue_unbound: Oi.prototype.getValue,
        _setValue_unbound: Oi.prototype.setValue,
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }, function(t, e) {
            for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
        }, function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }, function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }],
        SetterByBindingTypeAndVersioning: [
            [function(t, e) {
                this.node[this.propertyName] = t[e]
            }, function(t, e) {
                this.node[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.node[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
            }, function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                this.targetObject.needsUpdate = !0
            }, function(t, e) {
                for (var n = this.resolvedProperty, i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e]
            }, function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                this.resolvedProperty.fromArray(t, e)
            }, function(t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ]
    }), Oi.Composite = function(t, e, n) {
        var i = n || Oi.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, i)
    }, Oi.Composite.prototype = {
        constructor: Oi.Composite,
        getValue: function(t, e) {
            this.bind();
            var n = this._targetGroup.nCachedObjects_,
                i = this._bindings[n];
            void 0 !== i && i.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var n = this._bindings, i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
        }
    }, Oi.create = function(t, e, n) {
        return t && t.isAnimationObjectGroup ? new Oi.Composite(t, e, n) : new Oi(t, e, n)
    }, Oi.parseTrackName = function(t) {
        var e = /^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/,
            n = e.exec(t);
        if (!n) throw new Error("cannot parse trackName at all: " + t);
        var i = {
            nodeName: n[2],
            objectName: n[3],
            objectIndex: n[4],
            propertyName: n[5],
            propertyIndex: n[6]
        };
        if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("can not parse propertyName from trackName: " + t);
        return i
    }, Oi.findNode = function(t, e) {
        if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
        if (t.skeleton) {
            var n = function(t) {
                for (var n = 0; n < t.bones.length; n++) {
                    var i = t.bones[n];
                    if (i.name === e) return i
                }
                return null
            }(t.skeleton);
            if (n) return n
        }
        if (t.children) {
            var i = function(t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (r.name === e || r.uuid === e) return r;
                        var o = i(r.children);
                        if (o) return o
                    }
                    return null
                },
                r = i(t.children);
            if (r) return r
        }
        return null
    }, Ni.prototype = {
        constructor: Ni,
        isAnimationObjectGroup: !0,
        add: function(t) {
            for (var e = this._objects, n = e.length, i = this.nCachedObjects_, r = this._indicesByUUID, o = this._paths, a = this._parsedPaths, s = this._bindings, c = s.length, u = 0, l = arguments.length; u !== l; ++u) {
                var h = arguments[u],
                    d = h.uuid,
                    p = r[d],
                    f = void 0;
                if (void 0 === p) {
                    p = n++, r[d] = p, e.push(h);
                    for (var m = 0, g = c; m !== g; ++m) s[m].push(new Oi(h, o[m], a[m]))
                } else if (p < i) {
                    f = e[p];
                    var v = --i,
                        y = e[v];
                    r[y.uuid] = p, e[p] = y, r[d] = v, e[v] = h;
                    for (var m = 0, g = c; m !== g; ++m) {
                        var _ = s[m],
                            b = _[v],
                            x = _[p];
                        _[p] = b, void 0 === x && (x = new Oi(h, o[m], a[m])), _[v] = x
                    }
                } else e[p] !== f && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = i
        },
        remove: function(t) {
            for (var e = this._objects, n = this.nCachedObjects_, i = this._indicesByUUID, r = this._bindings, o = r.length, a = 0, s = arguments.length; a !== s; ++a) {
                var c = arguments[a],
                    u = c.uuid,
                    l = i[u];
                if (void 0 !== l && l >= n) {
                    var h = n++,
                        d = e[h];
                    i[d.uuid] = l, e[l] = d, i[u] = h, e[h] = c;
                    for (var p = 0, f = o; p !== f; ++p) {
                        var m = r[p],
                            g = m[h],
                            v = m[l];
                        m[l] = g, m[h] = v
                    }
                }
            }
            this.nCachedObjects_ = n
        },
        uncache: function(t) {
            for (var e = this._objects, n = e.length, i = this.nCachedObjects_, r = this._indicesByUUID, o = this._bindings, a = o.length, s = 0, c = arguments.length; s !== c; ++s) {
                var u = arguments[s],
                    l = u.uuid,
                    h = r[l];
                if (void 0 !== h)
                    if (delete r[l], h < i) {
                        var d = --i,
                            p = e[d],
                            f = --n,
                            m = e[f];
                        r[p.uuid] = h, e[h] = p, r[m.uuid] = d, e[d] = m, e.pop();
                        for (var g = 0, v = a; g !== v; ++g) {
                            var y = o[g],
                                _ = y[d],
                                b = y[f];
                            y[h] = _, y[d] = b, y.pop()
                        }
                    } else {
                        var f = --n,
                            m = e[f];
                        r[m.uuid] = h, e[h] = m, e.pop();
                        for (var g = 0, v = a; g !== v; ++g) {
                            var y = o[g];
                            y[h] = y[f], y.pop()
                        }
                    }
            }
            this.nCachedObjects_ = i
        },
        subscribe_: function(t, e) {
            var n = this._bindingsIndicesByPath,
                i = n[t],
                r = this._bindings;
            if (void 0 !== i) return r[i];
            var o = this._paths,
                a = this._parsedPaths,
                s = this._objects,
                c = s.length,
                u = this.nCachedObjects_,
                l = new Array(c);
            i = r.length, n[t] = i, o.push(t), a.push(e), r.push(l);
            for (var h = u, d = s.length; h !== d; ++h) {
                var p = s[h];
                l[h] = new Oi(p, t, e)
            }
            return l
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath,
                n = e[t];
            if (void 0 !== n) {
                var i = this._paths,
                    r = this._parsedPaths,
                    o = this._bindings,
                    a = o.length - 1,
                    s = o[a];
                e[t[a]] = n, o[n] = s, o.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop()
            }
        }
    }, Ui.prototype = {
        constructor: Ui,
        play: function() {
            return this._mixer._activateAction(this), this
        },
        stop: function() {
            return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t, this
        },
        setLoop: function(t, e) {
            return this.loop = t, this.repetitions = e, this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, n) {
            if (t.fadeOut(e), this.fadeIn(e), n) {
                var i = this._clip.duration,
                    r = t._clip.duration,
                    o = r / i,
                    a = i / r;
                t.warp(1, o, e), this.warp(a, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, n) {
            return t.crossFadeFrom(this, e, n)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, n) {
            var i = this._mixer,
                r = i.time,
                o = this._timeScaleInterpolant,
                a = this.timeScale;
            null === o && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
            var s = o.parameterPositions,
                c = o.sampleValues;
            return s[0] = r, s[1] = r + n, c[0] = t / a, c[1] = e / a, this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, n, i) {
            var r = this._startTime;
            if (null !== r) {
                var o = (t - r) * n;
                if (o < 0 || 0 === n) return;
                this._startTime = null, e = n * o
            }
            e *= this._updateTimeScale(t);
            var a = this._updateTime(e),
                s = this._updateWeight(t);
            if (s > 0)
                for (var c = this._interpolants, u = this._propertyBindings, l = 0, h = c.length; l !== h; ++l) c[l].evaluate(a), u[l].accumulate(i, s)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var i = n.evaluate(t)[0];
                    e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e, e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var n = this._timeScaleInterpolant;
                if (null !== n) {
                    e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                }
            }
            return this._effectiveTimeScale = e, e
        },
        _updateTime: function(t) {
            var e = this.time + t;
            if (0 === t) return e;
            var n = this._clip.duration,
                i = this.loop,
                r = this._loopCount;
            if (2200 === i) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (e >= n) e = n;
                    else {
                        if (!(e < 0)) break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                var o = 2202 === i;
                if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)), e >= n || e < 0) {
                    var a = Math.floor(e / n);
                    e -= n * a, r += Math.abs(a);
                    var s = this.repetitions - r;
                    if (s < 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? n : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    });
                    else {
                        if (0 === s) {
                            var c = t < 0;
                            this._setEndings(c, !c, o)
                        } else this._setEndings(!1, !1, o);
                        this._loopCount = r, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: a
                        })
                    }
                }
                if (o && 1 == (1 & r)) return this.time = e, n - e
            }
            return this.time = e, e
        },
        _setEndings: function(t, e, n) {
            var i = this._interpolantSettings;
            n ? (i.endingStart = 2401, i.endingEnd = 2401) : (i.endingStart = t ? this.zeroSlopeAtStart ? 2401 : Ga : 2402, i.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : Ga : 2402)
        },
        _scheduleFading: function(t, e, n) {
            var i = this._mixer,
                r = i.time,
                o = this._weightInterpolant;
            null === o && (o = i._lendControlInterpolant(), this._weightInterpolant = o);
            var a = o.parameterPositions,
                s = o.sampleValues;
            return a[0] = r, s[0] = e, a[1] = r + t, s[1] = n, this
        }
    }, Di.prototype = {
        constructor: Di,
        clipAction: function(t, e) {
            var n = e || this._root,
                i = n.uuid,
                r = "string" == typeof t ? Qn.findByName(n, t) : t,
                o = null !== r ? r.uuid : t,
                a = this._actionsByClip[o],
                s = null;
            if (void 0 !== a) {
                var c = a.actionByRoot[i];
                if (void 0 !== c) return c;
                s = a.knownActions[0], null === r && (r = s._clip)
            }
            if (null === r) return null;
            var u = new Ui(this, r, e);
            return this._bindAction(u, s), this._addInactiveAction(u, o, i), u
        },
        existingAction: function(t, e) {
            var n = e || this._root,
                i = n.uuid,
                r = "string" == typeof t ? Qn.findByName(n, t) : t,
                o = r ? r.uuid : t,
                a = this._actionsByClip[o];
            return void 0 !== a ? a.actionByRoot[i] || null : null
        },
        stopAllAction: function() {
            var t = this._actions,
                e = this._nActiveActions,
                n = this._bindings,
                i = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var r = 0; r !== e; ++r) t[r].reset();
            for (var r = 0; r !== i; ++r) n[r].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), o = this._accuIndex ^= 1, a = 0; a !== n; ++a) {
                var s = e[a];
                s.enabled && s._update(i, t, r, o)
            }
            for (var c = this._bindings, u = this._nActiveBindings, a = 0; a !== u; ++a) c[a].apply(o);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions,
                n = t.uuid,
                i = this._actionsByClip,
                r = i[n];
            if (void 0 !== r) {
                for (var o = r.knownActions, a = 0, s = o.length; a !== s; ++a) {
                    var c = o[a];
                    this._deactivateAction(c);
                    var u = c._cacheIndex,
                        l = e[e.length - 1];
                    c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = u, e[u] = l, e.pop(), this._removeInactiveBindingsForAction(c)
                }
                delete i[n]
            }
        },
        uncacheRoot: function(t) {
            var e = t.uuid,
                n = this._actionsByClip;
            for (var i in n) {
                var r = n[i].actionByRoot,
                    o = r[e];
                void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
            }
            var a = this._bindingsByRootAndName,
                s = a[e];
            if (void 0 !== s)
                for (var c in s) {
                    var u = s[c];
                    u.restoreOriginalState(), this._removeInactiveBinding(u)
                }
        },
        uncacheAction: function(t, e) {
            var n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
        }
    }, Object.assign(Di.prototype, {
        _bindAction: function(t, e) {
            var n = t._localRoot || this._root,
                i = t._clip.tracks,
                r = i.length,
                o = t._propertyBindings,
                a = t._interpolants,
                s = n.uuid,
                c = this._bindingsByRootAndName,
                u = c[s];
            void 0 === u && (u = {}, c[s] = u);
            for (var l = 0; l !== r; ++l) {
                var h = i[l],
                    d = h.name,
                    p = u[d];
                if (void 0 !== p) o[l] = p;
                else {
                    if (void 0 !== (p = o[l])) {
                        null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, s, d));
                        continue
                    }
                    var f = e && e._propertyBindings[l].binding.parsedPath;
                    p = new Bi(Oi.create(n, d, f), h.ValueTypeName, h.getValueSize()), ++p.referenceCount, this._addInactiveBinding(p, s, d), o[l] = p
                }
                a[l].resultBuffer = p.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid,
                        n = t._clip.uuid,
                        i = this._actionsByClip[n];
                    this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
                }
                for (var r = t._propertyBindings, o = 0, a = r.length; o !== a; ++o) {
                    var s = r[o];
                    0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                    var r = e[n];
                    0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function(t, e, n) {
            var i = this._actions,
                r = this._actionsByClip,
                o = r[e];
            if (void 0 === o) o = {
                knownActions: [t],
                actionByRoot: {}
            }, t._byClipCacheIndex = 0, r[e] = o;
            else {
                var a = o.knownActions;
                t._byClipCacheIndex = a.length, a.push(t)
            }
            t._cacheIndex = i.length, i.push(t), o.actionByRoot[n] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions,
                n = e[e.length - 1],
                i = t._cacheIndex;
            n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
            var r = t._clip.uuid,
                o = this._actionsByClip,
                a = o[r],
                s = a.knownActions,
                c = s[s.length - 1],
                u = t._byClipCacheIndex;
            c._byClipCacheIndex = u, s[u] = c, s.pop(), t._byClipCacheIndex = null, delete a.actionByRoot[(e._localRoot || this._root).uuid], 0 === s.length && delete o[r], this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = t._propertyBindings, n = 0, i = e.length; n !== i; ++n) {
                var r = e[n];
                0 == --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function(t) {
            var e = this._actions,
                n = t._cacheIndex,
                i = this._nActiveActions++,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _takeBackAction: function(t) {
            var e = this._actions,
                n = t._cacheIndex,
                i = --this._nActiveActions,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _addInactiveBinding: function(t, e, n) {
            var i = this._bindingsByRootAndName,
                r = i[e],
                o = this._bindings;
            void 0 === r && (r = {}, i[e] = r), r[n] = t, t._cacheIndex = o.length, o.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings,
                n = t.binding,
                i = n.rootNode.uuid,
                r = n.path,
                o = this._bindingsByRootAndName,
                a = o[i],
                s = e[e.length - 1],
                c = t._cacheIndex;
            s._cacheIndex = c, e[c] = s, e.pop(), delete a[r];
            t: {
                for (var u in a) break t;delete o[i]
            }
        },
        _lendBinding: function(t) {
            var e = this._bindings,
                n = t._cacheIndex,
                i = this._nActiveBindings++,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _takeBackBinding: function(t) {
            var e = this._bindings,
                n = t._cacheIndex,
                i = --this._nActiveBindings,
                r = e[i];
            t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants,
                e = this._nActiveControlInterpolants++,
                n = t[e];
            return void 0 === n && (n = new Gn(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants,
                n = t.__cacheIndex,
                i = --this._nActiveControlInterpolants,
                r = e[i];
            t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1)
    }), Object.assign(Di.prototype, e.prototype), Fi.prototype.clone = function() {
        return new Fi(void 0 === this.value.clone ? this.value : this.value.clone())
    }, zi.prototype = Object.create(At.prototype), zi.prototype.constructor = zi, zi.prototype.isInstancedBufferGeometry = !0, zi.prototype.addGroup = function(t, e, n) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: n
        })
    }, zi.prototype.copy = function(t) {
        var e = t.index;
        null !== e && this.setIndex(e.clone());
        var n = t.attributes;
        for (var i in n) {
            var r = n[i];
            this.addAttribute(i, r.clone())
        }
        for (var o = t.groups, a = 0, s = o.length; a < s; a++) {
            var c = o[a];
            this.addGroup(c.start, c.count, c.materialIndex)
        }
        return this
    }, Gi.prototype = {
        constructor: Gi,
        isInterleavedBufferAttribute: !0,
        get count() {
            return this.data.count
        },
        get array() {
            return this.data.array
        },
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
        },
        setXYZ: function(t, e, n, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
        },
        setXYZW: function(t, e, n, i, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
        }
    }, ki.prototype = {
        constructor: ki,
        isInterleavedBuffer: !0,
        set needsUpdate(t) {
            !0 === t && this.version++
        },
        setArray: function(t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t
        },
        setDynamic: function(t) {
            return this.dynamic = t, this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
        },
        copyAt: function(t, e, n) {
            t *= this.stride, n *= e.stride;
            for (var i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(t) {
            return this.onUploadCallback = t, this
        }
    }, Hi.prototype = Object.create(ki.prototype), Hi.prototype.constructor = Hi, Hi.prototype.isInstancedInterleavedBuffer = !0, Hi.prototype.copy = function(t) {
        return ki.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }, Vi.prototype = Object.create(pt.prototype), Vi.prototype.constructor = Vi, Vi.prototype.isInstancedBufferAttribute = !0, Vi.prototype.copy = function(t) {
        return pt.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }, ji.prototype = {
        constructor: ji,
        linePrecision: 1,
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(t, e) {
            var n = [];
            return Xi(t, this, n, e), n.sort(Wi), n
        },
        intersectObjects: function(t, e) {
            var n = [];
            if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), n;
            for (var i = 0, r = t.length; i < r; i++) Xi(t[i], this, n, e);
            return n.sort(Wi), n
        }
    }, qi.prototype = {
        constructor: qi,
        start: function() {
            this.startTime = (performance || Date).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
        },
        stop: function() {
            this.getElapsedTime(), this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running && this.start(), this.running) {
                var e = (performance || Date).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }, Yi.prototype = {
        constructor: Yi,
        set: function(t, e, n) {
            return this.radius = t, this.phi = e, this.theta = n, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        },
        setFromVector3: function(t) {
            return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos($a.clamp(t.y / this.radius, -1, 1))), this
        }
    }, Zi.prototype = {
        constructor: Zi,
        set: function(t, e, n) {
            return this.radius = t, this.theta = e, this.y = n, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        },
        setFromVector3: function(t) {
            return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this
        }
    }, Ji.prototype = Object.create(Lt.prototype), Ji.prototype.constructor = Ji, Ji.prototype.createAnimation = function(t, e, n, i) {
        var r = {
            start: e,
            end: n,
            length: n - e + 1,
            fps: i,
            duration: (n - e) / i,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        };
        this.animationsMap[t] = r, this.animationsList.push(r)
    }, Ji.prototype.autoCreateAnimations = function(t) {
        for (var e, n = {}, i = this.geometry, r = 0, o = i.morphTargets.length; r < o; r++) {
            var a = i.morphTargets[r],
                s = a.name.match(/([a-z]+)_?(\d+)/i);
            if (s && s.length > 1) {
                var c = s[1];
                n[c] || (n[c] = {
                    start: 1 / 0,
                    end: -1 / 0
                });
                var u = n[c];
                r < u.start && (u.start = r), r > u.end && (u.end = r), e || (e = c)
            }
        }
        for (var c in n) {
            var u = n[c];
            this.createAnimation(c, u.start, u.end, t)
        }
        this.firstAnimation = e
    }, Ji.prototype.setAnimationDirectionForward = function(t) {
        var e = this.animationsMap[t];
        e && (e.direction = 1, e.directionBackwards = !1)
    }, Ji.prototype.setAnimationDirectionBackward = function(t) {
        var e = this.animationsMap[t];
        e && (e.direction = -1, e.directionBackwards = !0)
    }, Ji.prototype.setAnimationFPS = function(t, e) {
        var n = this.animationsMap[t];
        n && (n.fps = e, n.duration = (n.end - n.start) / n.fps)
    }, Ji.prototype.setAnimationDuration = function(t, e) {
        var n = this.animationsMap[t];
        n && (n.duration = e, n.fps = (n.end - n.start) / n.duration)
    }, Ji.prototype.setAnimationWeight = function(t, e) {
        var n = this.animationsMap[t];
        n && (n.weight = e)
    }, Ji.prototype.setAnimationTime = function(t, e) {
        var n = this.animationsMap[t];
        n && (n.time = e)
    }, Ji.prototype.getAnimationTime = function(t) {
        var e = 0,
            n = this.animationsMap[t];
        return n && (e = n.time), e
    }, Ji.prototype.getAnimationDuration = function(t) {
        var e = -1,
            n = this.animationsMap[t];
        return n && (e = n.duration), e
    }, Ji.prototype.playAnimation = function(t) {
        var e = this.animationsMap[t];
        e ? (e.time = 0, e.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
    }, Ji.prototype.stopAnimation = function(t) {
        var e = this.animationsMap[t];
        e && (e.active = !1)
    }, Ji.prototype.update = function(t) {
        for (var e = 0, n = this.animationsList.length; e < n; e++) {
            var i = this.animationsList[e];
            if (i.active) {
                var r = i.duration / i.length;
                i.time += i.direction * t, i.mirroredLoop ? (i.time > i.duration || i.time < 0) && (i.direction *= -1, i.time > i.duration && (i.time = i.duration, i.directionBackwards = !0), i.time < 0 && (i.time = 0, i.directionBackwards = !1)) : (i.time = i.time % i.duration, i.time < 0 && (i.time += i.duration));
                var o = i.start + $a.clamp(Math.floor(i.time / r), 0, i.length - 1),
                    a = i.weight;
                o !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0, this.morphTargetInfluences[i.currentFrame] = 1 * a, this.morphTargetInfluences[o] = 0, i.lastFrame = i.currentFrame, i.currentFrame = o);
                var s = i.time % r / r;
                i.directionBackwards && (s = 1 - s), i.currentFrame !== i.lastFrame ? (this.morphTargetInfluences[i.currentFrame] = s * a, this.morphTargetInfluences[i.lastFrame] = (1 - s) * a) : this.morphTargetInfluences[i.currentFrame] = a
            }
        }
    }, Qi.prototype = Object.create(ct.prototype), Qi.prototype.constructor = Qi, Qi.prototype.isImmediateRenderObject = !0, Ki.prototype = Object.create(xe.prototype), Ki.prototype.constructor = Ki, Ki.prototype.update = function() {
        var t = new c,
            e = new c,
            n = new et;
        return function() {
            var i = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            var r = this.object.matrixWorld,
                o = this.geometry.attributes.position,
                a = this.object.geometry;
            if (a && a.isGeometry)
                for (var s = a.vertices, c = a.faces, u = 0, l = 0, h = c.length; l < h; l++)
                    for (var d = c[l], p = 0, f = d.vertexNormals.length; p < f; p++) {
                        var m = s[d[i[p]]],
                            g = d.vertexNormals[p];
                        t.copy(m).applyMatrix4(r), e.copy(g).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), o.setXYZ(u, t.x, t.y, t.z), u += 1, o.setXYZ(u, e.x, e.y, e.z), u += 1
                    } else if (a && a.isBufferGeometry)
                        for (var v = a.attributes.position, y = a.attributes.normal, u = 0, p = 0, f = v.count; p < f; p++) t.set(v.getX(p), v.getY(p), v.getZ(p)).applyMatrix4(r), e.set(y.getX(p), y.getY(p), y.getZ(p)), e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), o.setXYZ(u, t.x, t.y, t.z), u += 1, o.setXYZ(u, e.x, e.y, e.z), u += 1;
            return o.needsUpdate = !0, this
        }
    }(), $i.prototype = Object.create(ct.prototype), $i.prototype.constructor = $i, $i.prototype.dispose = function() {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, $i.prototype.update = function() {
        var t = new c,
            e = new c;
        return function() {
            var n = this.light.distance ? this.light.distance : 1e3,
                i = n * Math.tan(this.light.angle);
            this.cone.scale.set(i, i, n), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)),
                this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(), tr.prototype = Object.create(xe.prototype), tr.prototype.constructor = tr, tr.prototype.getBoneList = function(t) {
        var e = [];
        t && t.isBone && e.push(t);
        for (var n = 0; n < t.children.length; n++) e.push.apply(e, this.getBoneList(t.children[n]));
        return e
    }, tr.prototype.update = function() {
        var t = new c,
            e = new u,
            n = new u;
        return function() {
            var i = this.geometry,
                r = i.getAttribute("position");
            n.getInverse(this.root.matrixWorld);
            for (var o = 0, a = 0; o < this.bones.length; o++) {
                var s = this.bones[o];
                s.parent && s.parent.isBone && (e.multiplyMatrices(n, s.matrixWorld), t.setFromMatrixPosition(e), r.setXYZ(a, t.x, t.y, t.z), e.multiplyMatrices(n, s.parent.matrixWorld), t.setFromMatrixPosition(e), r.setXYZ(a + 1, t.x, t.y, t.z), a += 2)
            }
            i.getAttribute("position").needsUpdate = !0
        }
    }(), er.prototype = Object.create(Lt.prototype), er.prototype.constructor = er, er.prototype.dispose = function() {
        this.geometry.dispose(), this.material.dispose()
    }, er.prototype.update = function() {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }, nr.prototype = Object.create(ct.prototype), nr.prototype.constructor = nr, nr.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose(), this.children[1].geometry.dispose(), this.children[1].material.dispose()
    }, nr.prototype.update = function() {
        var t = new c,
            e = new c;
        return function() {
            var n = this.children[0],
                i = this.children[1];
            if (this.light.target) {
                t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld);
                var r = e.clone().sub(t);
                n.lookAt(r), i.lookAt(r)
            }
            n.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
            var o = .5 * this.light.width,
                a = .5 * this.light.height,
                s = n.geometry.getAttribute("position"),
                c = s.array;
            c[0] = o, c[1] = -a, c[2] = 0, c[3] = o, c[4] = a, c[5] = 0, c[6] = -o, c[7] = a, c[8] = 0, c[9] = -o, c[10] = a, c[11] = 0, c[12] = -o, c[13] = -a, c[14] = 0, c[15] = o, c[16] = -a, c[17] = 0, s.needsUpdate = !0
        }
    }(), ir.prototype = Object.create(ct.prototype), ir.prototype.constructor = ir, ir.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, ir.prototype.update = function() {
        var t = new c,
            e = new W,
            n = new W;
        return function() {
            var i = this.children[0],
                r = i.geometry.getAttribute("color");
            e.copy(this.light.color).multiplyScalar(this.light.intensity), n.copy(this.light.groundColor).multiplyScalar(this.light.intensity);
            for (var o = 0, a = r.count; o < a; o++) {
                var s = o < a / 2 ? e : n;
                r.setXYZ(o, s.r, s.g, s.b)
            }
            i.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()), r.needsUpdate = !0
        }
    }(), rr.prototype = Object.create(xe.prototype), rr.prototype.constructor = rr, or.prototype = Object.create(xe.prototype), or.prototype.constructor = or, ar.prototype = Object.create(xe.prototype), ar.prototype.constructor = ar, ar.prototype.update = function() {
        var t = new c,
            e = new c,
            n = new et;
        return function() {
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            for (var i = this.object.matrixWorld, r = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, c = 0, u = 0, l = s.length; u < l; u++) {
                var h = s[u],
                    d = h.normal;
                t.copy(a[h.a]).add(a[h.b]).add(a[h.c]).divideScalar(3).applyMatrix4(i), e.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), r.setXYZ(c, t.x, t.y, t.z), c += 1, r.setXYZ(c, e.x, e.y, e.z), c += 1
            }
            return r.needsUpdate = !0, this
        }
    }(), sr.prototype = Object.create(ct.prototype), sr.prototype.constructor = sr, sr.prototype.dispose = function() {
        var t = this.children[0],
            e = this.children[1];
        t.geometry.dispose(), t.material.dispose(), e.geometry.dispose(), e.material.dispose()
    }, sr.prototype.update = function() {
        var t = new c,
            e = new c,
            n = new c;
        return function() {
            t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(e, t);
            var i = this.children[0],
                r = this.children[1];
            i.lookAt(n), i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), r.lookAt(n), r.scale.z = n.length()
        }
    }(), cr.prototype = Object.create(xe.prototype), cr.prototype.constructor = cr, cr.prototype.update = function() {
        function t(t, o, a, s) {
            i.set(o, a, s).unproject(r);
            var c = n[t];
            if (void 0 !== c)
                for (var u = e.getAttribute("position"), l = 0, h = c.length; l < h; l++) u.setXYZ(c[l], i.x, i.y, i.z)
        }
        var e, n, i = new c,
            r = new Bt;
        return function() {
            e = this.geometry, n = this.pointMap;
            r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", .7, 1.1, -1), t("u2", -.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
        }
    }(), ur.prototype = Object.create(xe.prototype), ur.prototype.constructor = ur, ur.prototype.update = function() {
        var t = new $;
        return function(e) {
            if (e && e.isBox3 ? t.copy(e) : t.setFromObject(e), !t.isEmpty()) {
                var n = t.min,
                    i = t.max,
                    r = this.geometry.attributes.position,
                    o = r.array;
                o[0] = i.x, o[1] = i.y, o[2] = i.z, o[3] = n.x, o[4] = i.y, o[5] = i.z, o[6] = n.x, o[7] = n.y, o[8] = i.z, o[9] = i.x, o[10] = n.y, o[11] = i.z, o[12] = i.x, o[13] = i.y, o[14] = n.z, o[15] = n.x, o[16] = i.y, o[17] = n.z, o[18] = n.x, o[19] = n.y, o[20] = n.z, o[21] = i.x, o[22] = n.y, o[23] = n.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }();
    var Ts, Ss;
    lr.prototype = Object.create(ct.prototype), lr.prototype.constructor = lr, lr.prototype.setDirection = function() {
        var t, e = new c;
        return function(n) {
            n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(n.z, 0, -n.x).normalize(), t = Math.acos(n.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), lr.prototype.setLength = function(t, e, n) {
        void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
    }, lr.prototype.setColor = function(t) {
        this.line.material.color.copy(t), this.cone.material.color.copy(t)
    }, hr.prototype = Object.create(xe.prototype), hr.prototype.constructor = hr;
    var As = new c,
        Ls = new dr,
        Rs = new dr,
        Ps = new dr;
    pr.prototype = Object.create(pi.prototype), pr.prototype.constructor = pr, pr.prototype.getPoint = function(t) {
        var e = this.points,
            n = e.length;
        n < 2 && console.log("duh, you need at least 2 points");
        var i = (n - (this.closed ? 0 : 1)) * t,
            r = Math.floor(i),
            o = i - r;
        this.closed ? r += r > 0 ? 0 : (Math.floor(Math.abs(r) / e.length) + 1) * e.length : 0 === o && r === n - 1 && (r = n - 2, o = 1);
        var a, s, u, l;
        if (this.closed || r > 0 ? a = e[(r - 1) % n] : (As.subVectors(e[0], e[1]).add(e[0]), a = As), s = e[r % n], u = e[(r + 1) % n], this.closed || r + 2 < n ? l = e[(r + 2) % n] : (As.subVectors(e[n - 1], e[n - 2]).add(e[n - 1]), l = As), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var h = "chordal" === this.type ? .5 : .25,
                d = Math.pow(a.distanceToSquared(s), h),
                p = Math.pow(s.distanceToSquared(u), h),
                f = Math.pow(u.distanceToSquared(l), h);
            p < 1e-4 && (p = 1), d < 1e-4 && (d = p), f < 1e-4 && (f = p), Ls.initNonuniformCatmullRom(a.x, s.x, u.x, l.x, d, p, f), Rs.initNonuniformCatmullRom(a.y, s.y, u.y, l.y, d, p, f), Ps.initNonuniformCatmullRom(a.z, s.z, u.z, l.z, d, p, f)
        } else if ("catmullrom" === this.type) {
            var m = void 0 !== this.tension ? this.tension : .5;
            Ls.initCatmullRom(a.x, s.x, u.x, l.x, m), Rs.initCatmullRom(a.y, s.y, u.y, l.y, m), Ps.initCatmullRom(a.z, s.z, u.z, l.z, m)
        }
        return new c(Ls.calc(o), Rs.calc(o), Ps.calc(o))
    }, fr.prototype = Object.create(pi.prototype), fr.prototype.constructor = fr, fr.prototype.getPoint = function(t) {
        var e = this.v0,
            n = this.v1,
            i = this.v2,
            r = this.v3;
        return new c(di(t, e.x, n.x, i.x, r.x), di(t, e.y, n.y, i.y, r.y), di(t, e.z, n.z, i.z, r.z))
    }, mr.prototype = Object.create(pi.prototype), mr.prototype.constructor = mr, mr.prototype.getPoint = function(t) {
        var e = this.v0,
            n = this.v1,
            i = this.v2;
        return new c(si(t, e.x, n.x, i.x), si(t, e.y, n.y, i.y), si(t, e.z, n.z, i.z))
    }, gr.prototype = Object.create(pi.prototype), gr.prototype.constructor = gr, gr.prototype.getPoint = function(t) {
        if (1 === t) return this.v2.clone();
        var e = new c;
        return e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
    }, vr.prototype = Object.create(gi.prototype), vr.prototype.constructor = vr;
    var Cs = {
        createMultiMaterialObject: function(t, e) {
            for (var n = new Ee, i = 0, r = e.length; i < r; i++) n.add(new Lt(t, e[i]));
            return n
        },
        detach: function(t, e, n) {
            t.applyMatrix(e.matrixWorld), e.remove(t), n.add(t)
        },
        attach: function(t, e, n) {
            var i = new u;
            i.getInverse(n.matrixWorld), t.applyMatrix(i), e.remove(t), n.add(t)
        }
    };
    pi.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(pi.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, Dr.prototype = Object.create(pr.prototype), Fr.prototype = Object.create(pr.prototype), zr.prototype = Object.create(pr.prototype), Object.assign(zr.prototype, {
        initFromArray: function(t) {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function(t) {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function(t) {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }), rr.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, Object.assign(q.prototype, {
        center: function(t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        size: function(t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Object.assign($.prototype, {
        center: function(t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        },
        size: function(t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), ut.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
    }, $a.random16 = function() {
        return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
    }, Object.assign(et.prototype, {
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        },
        multiplyVector3Array: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
        },
        applyToBuffer: function(t, e, n) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function(t, e, n) {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }), Object.assign(u.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        getPosition: function() {
            var t;
            return function() {
                return void 0 === t && (t = new c), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector3Array: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(t, e, n) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function(t, e, n) {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(t, e, n, i, r, o) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, o)
        }
    }), nt.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
    }, s.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
    }, Object.assign(ot.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }
    }), Object.assign(xi.prototype, {
        extrude: function(t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Ye(this, t)
        },
        makeGeometry: function(t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new nn(this, t)
        }
    }), Object.assign(n.prototype, {
        fromAttribute: function(t, e, n) {
            return console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        }
    }), Object.assign(c.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
        },
        applyProjection: function(t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
        },
        fromAttribute: function(t, e, n) {
            return console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        }
    }), Object.assign(r.prototype, {
        fromAttribute: function(t, e, n) {
            return console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
        }
    }), St.prototype.computeTangents = function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    }, Object.assign(ct.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
        }
    }), Object.defineProperties(ct.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(me.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), Ot.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
    }, Object.defineProperties(Rn.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
            }
        }
    }), Object.defineProperties(pt.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
            }
        }
    }), Object.assign(At.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
        },
        addDrawCall: function(t, e, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(At.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(Fi.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }
        }
    }), Object.defineProperties(J.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new W
            }
        }
    }), Object.defineProperties(vn.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(Q.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
            }
        }
    }), Object.assign(ce.prototype, {
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }), Object.defineProperties(ce.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = t
            }
        }
    }), Object.defineProperties(rt.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? Qr : Jr
            },
            set: function(t) {
                var e = t !== Jr;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."), this.renderReverseSided = e
            }
        }
    }), Object.defineProperties(o.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
            }
        }
    }), Pi.prototype.load = function(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return (new Ti).load(t, function(t) {
            e.setBuffer(t)
        }), this
    }, Ii.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    };
    var Is = {
            merge: function(t, e, n) {
                console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
                var i;
                e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), i = e.matrix, e = e.geometry), t.merge(e, i, n)
            },
            center: function(t) {
                return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
            }
        },
        Bs = {
            crossOrigin: void 0,
            loadTexture: function(t, e, n, i) {
                console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
                var r = new Ln;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(t, n, void 0, i);
                return e && (o.mapping = e), o
            },
            loadTextureCube: function(t, e, n, i) {
                console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
                var r = new An;
                r.setCrossOrigin(this.crossOrigin);
                var o = r.load(t, n, void 0, i);
                return e && (o.mapping = e), o
            },
            loadCompressedTexture: function() {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            },
            loadCompressedTextureCube: function() {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            }
        };
    t.WebGLRenderTargetCube = a, t.WebGLRenderTarget = o, t.WebGLRenderer = ce, t.ShaderLib = ls, t.UniformsLib = us, t.UniformsUtils = as, t.ShaderChunk = ss, t.FogExp2 = ue, t.Fog = le, t.Scene = he, t.LensFlare = de, t.Sprite = fe, t.LOD = me, t.SkinnedMesh = ye, t.Skeleton = ge, t.Bone = ve, t.Mesh = Lt, t.LineSegments = xe, t.Line = be, t.Points = Me, t.Group = Ee, t.VideoTexture = Te, t.DataTexture = X, t.CompressedTexture = Se, t.CubeTexture = l, t.CanvasTexture = Ae, t.DepthTexture = Le, t.Texture = i, t.CompressedTextureLoader = En, t.DataTextureLoader = Tn, t.CubeTextureLoader = An, t.TextureLoader = Ln, t.ObjectLoader = ni, t.MaterialLoader = Kn, t.BufferGeometryLoader = $n, t.DefaultLoadingManager = _s, t.LoadingManager = wn, t.JSONLoader = ei, t.ImageLoader = Sn, t.FontLoader = Ei, t.FileLoader = Mn, t.Loader = ti, t.Cache = ys, t.AudioLoader = Ti, t.SpotLightShadow = In, t.SpotLight = Bn, t.PointLight = On, t.RectAreaLight = Si, t.HemisphereLight = Pn, t.DirectionalLightShadow = Nn, t.DirectionalLight = Un, t.AmbientLight = Dn, t.LightShadow = Cn, t.Light = Rn, t.StereoCamera = Ai, t.PerspectiveCamera = Ot, t.OrthographicCamera = Nt, t.CubeCamera = Li, t.Camera = Bt, t.AudioListener = Ri, t.PositionalAudio = Ci, t.AudioContext = Es, t.AudioAnalyser = Ii, t.Audio = Pi, t.VectorKeyframeTrack = Vn, t.StringKeyframeTrack = qn, t.QuaternionKeyframeTrack = Wn, t.NumberKeyframeTrack = Xn, t.ColorKeyframeTrack = Zn, t.BooleanKeyframeTrack = Yn, t.PropertyMixer = Bi, t.PropertyBinding = Oi, t.KeyframeTrack = Jn, t.AnimationUtils = bs, t.AnimationObjectGroup = Ni, t.AnimationMixer = Di, t.AnimationClip = Qn, t.Uniform = Fi, t.InstancedBufferGeometry = zi, t.BufferGeometry = At, t.GeometryIdCount = Tt, t.Geometry = St, t.InterleavedBufferAttribute = Gi, t.InstancedInterleavedBuffer = Hi, t.InterleavedBuffer = ki, t.InstancedBufferAttribute = Vi, t.Face3 = ht, t.Object3D = ct, t.Raycaster = ji, t.Layers = st, t.EventDispatcher = e, t.Clock = qi, t.QuaternionLinearInterpolant = jn, t.LinearInterpolant = Gn, t.DiscreteInterpolant = kn, t.CubicInterpolant = zn, t.Interpolant = Fn, t.Triangle = lt, t.Math = $a, t.Spherical = Yi, t.Cylindrical = Zi, t.Plane = nt, t.Frustum = it, t.Sphere = tt, t.Ray = ot, t.Matrix4 = u, t.Matrix3 = et, t.Box3 = $, t.Box2 = q, t.Line3 = ut, t.Euler = at, t.Vector4 = r, t.Vector3 = c, t.Vector2 = n, t.Quaternion = s, t.Color = W, t.MorphBlendMesh = Ji, t.ImmediateRenderObject = Qi, t.VertexNormalsHelper = Ki, t.SpotLightHelper = $i, t.SkeletonHelper = tr, t.PointLightHelper = er, t.RectAreaLightHelper = nr, t.HemisphereLightHelper = ir, t.GridHelper = rr, t.PolarGridHelper = or, t.FaceNormalsHelper = ar, t.DirectionalLightHelper = sr, t.CameraHelper = cr, t.BoxHelper = ur, t.ArrowHelper = lr, t.AxisHelper = hr, t.CatmullRomCurve3 = pr, t.CubicBezierCurve3 = fr, t.QuadraticBezierCurve3 = mr, t.LineCurve3 = gr, t.ArcCurve = vr, t.EllipseCurve = gi, t.SplineCurve = vi, t.CubicBezierCurve = yi, t.QuadraticBezierCurve = _i, t.LineCurve = fi, t.Shape = xi, t.Path = bi, t.ShapePath = wi, t.Font = Mi, t.CurvePath = mi, t.Curve = pi, t.ShapeUtils = ms, t.SceneUtils = Cs,
        t.WireframeGeometry = Re, t.ParametricGeometry = Pe, t.ParametricBufferGeometry = Ce, t.TetrahedronGeometry = Oe, t.TetrahedronBufferGeometry = Ne, t.OctahedronGeometry = Ue, t.OctahedronBufferGeometry = De, t.IcosahedronGeometry = Fe, t.IcosahedronBufferGeometry = ze, t.DodecahedronGeometry = Ge, t.DodecahedronBufferGeometry = ke, t.PolyhedronGeometry = Ie, t.PolyhedronBufferGeometry = Be, t.TubeGeometry = He, t.TubeBufferGeometry = Ve, t.TorusKnotGeometry = je, t.TorusKnotBufferGeometry = We, t.TorusGeometry = Xe, t.TorusBufferGeometry = qe, t.TextGeometry = Ze, t.SphereGeometry = Je, t.SphereBufferGeometry = Qe, t.RingGeometry = Ke, t.RingBufferGeometry = $e, t.PlaneGeometry = Ct, t.PlaneBufferGeometry = It, t.LatheGeometry = tn, t.LatheBufferGeometry = en, t.ShapeGeometry = nn, t.ShapeBufferGeometry = rn, t.ExtrudeGeometry = Ye, t.EdgesGeometry = on, t.ConeGeometry = cn, t.ConeBufferGeometry = un, t.CylinderGeometry = an, t.CylinderBufferGeometry = sn, t.CircleGeometry = ln, t.CircleBufferGeometry = hn, t.BoxGeometry = Rt, t.BoxBufferGeometry = Pt, t.ShadowMaterial = dn, t.SpriteMaterial = pe, t.RawShaderMaterial = pn, t.ShaderMaterial = Q, t.PointsMaterial = we, t.MultiMaterial = fn, t.MeshPhysicalMaterial = gn, t.MeshStandardMaterial = mn, t.MeshPhongMaterial = vn, t.MeshToonMaterial = yn;
    t.MeshNormalMaterial = _n, t.MeshLambertMaterial = bn, t.MeshDepthMaterial = K, t.MeshBasicMaterial = dt, t.LineDashedMaterial = xn, t.LineBasicMaterial = _e, t.Material = J, t.Float64BufferAttribute = wt, t.Float32BufferAttribute = xt, t.Uint32BufferAttribute = bt, t.Int32BufferAttribute = _t, t.Uint16BufferAttribute = yt, t.Int16BufferAttribute = vt, t.Uint8ClampedBufferAttribute = gt, t.Uint8BufferAttribute = mt, t.Int8BufferAttribute = ft, t.BufferAttribute = pt, t.REVISION = qr, t.MOUSE = Yr, t.CullFaceNone = Zr, t.CullFaceBack = Jr, t.CullFaceFront = Qr, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = Kr, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = $r, t.PCFSoftShadowMap = to, t.FrontSide = eo, t.BackSide = no, t.DoubleSide = io, t.FlatShading = ro, t.SmoothShading = oo, t.NoColors = ao, t.FaceColors = so, t.VertexColors = co, t.NoBlending = uo, t.NormalBlending = lo, t.AdditiveBlending = ho, t.SubtractiveBlending = po, t.MultiplyBlending = fo, t.CustomBlending = mo, t.AddEquation = go, t.SubtractEquation = vo, t.ReverseSubtractEquation = yo, t.MinEquation = _o, t.MaxEquation = bo, t.ZeroFactor = xo, t.OneFactor = wo, t.SrcColorFactor = Mo, t.OneMinusSrcColorFactor = Eo, t.SrcAlphaFactor = To, t.OneMinusSrcAlphaFactor = So, t.DstAlphaFactor = Ao, t.OneMinusDstAlphaFactor = Lo, t.DstColorFactor = Ro, t.OneMinusDstColorFactor = Po, t.SrcAlphaSaturateFactor = Co, t.NeverDepth = Io, t.AlwaysDepth = Bo, t.LessDepth = Oo, t.LessEqualDepth = No, t.EqualDepth = Uo, t.GreaterEqualDepth = Do, t.GreaterDepth = Fo, t.NotEqualDepth = zo, t.MultiplyOperation = Go, t.MixOperation = ko, t.AddOperation = Ho, t.NoToneMapping = Vo, t.LinearToneMapping = jo, t.ReinhardToneMapping = Wo, t.Uncharted2ToneMapping = Xo, t.CineonToneMapping = qo, t.UVMapping = 300, t.CubeReflectionMapping = Yo, t.CubeRefractionMapping = Zo, t.EquirectangularReflectionMapping = Jo, t.EquirectangularRefractionMapping = Qo, t.SphericalReflectionMapping = Ko, t.CubeUVReflectionMapping = $o, t.CubeUVRefractionMapping = ta, t.RepeatWrapping = ea, t.ClampToEdgeWrapping = na, t.MirroredRepeatWrapping = ia, t.NearestFilter = ra, t.NearestMipMapNearestFilter = oa, t.NearestMipMapLinearFilter = aa, t.LinearFilter = sa, t.LinearMipMapNearestFilter = ca, t.LinearMipMapLinearFilter = ua, t.UnsignedByteType = la, t.ByteType = ha, t.ShortType = da, t.UnsignedShortType = pa, t.IntType = fa, t.UnsignedIntType = ma, t.FloatType = ga, t.HalfFloatType = va, t.UnsignedShort4444Type = ya, t.UnsignedShort5551Type = _a, t.UnsignedShort565Type = ba, t.UnsignedInt248Type = xa, t.AlphaFormat = wa, t.RGBFormat = Ma, t.RGBAFormat = Ea, t.LuminanceFormat = Ta, t.LuminanceAlphaFormat = Sa, t.RGBEFormat = Aa, t.DepthFormat = La, t.DepthStencilFormat = Ra, t.RGB_S3TC_DXT1_Format = Pa, t.RGBA_S3TC_DXT1_Format = Ca, t.RGBA_S3TC_DXT3_Format = Ia, t.RGBA_S3TC_DXT5_Format = Ba, t.RGB_PVRTC_4BPPV1_Format = Oa, t.RGB_PVRTC_2BPPV1_Format = Na, t.RGBA_PVRTC_4BPPV1_Format = Ua, t.RGBA_PVRTC_2BPPV1_Format = Da, t.RGB_ETC1_Format = Fa, t.LoopOnce = 2200, t.LoopRepeat = za, t.LoopPingPong = 2202, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = Ga, t.ZeroSlopeEnding = 2401, t.WrapAroundEnding = 2402, t.TrianglesDrawMode = ka, t.TriangleStripDrawMode = Ha, t.TriangleFanDrawMode = Va, t.LinearEncoding = ja, t.sRGBEncoding = Wa, t.GammaEncoding = Xa, t.RGBEEncoding = qa, t.LogLuvEncoding = 3003, t.RGBM7Encoding = Ya, t.RGBM16Encoding = Za, t.RGBDEncoding = Ja, t.BasicDepthPacking = Qa, t.RGBADepthPacking = Ka, t.CubeGeometry = Rt, t.Face4 = yr, t.LineStrip = 0, t.LinePieces = 1, t.MeshFaceMaterial = _r, t.PointCloud = br, t.Particle = xr, t.ParticleSystem = wr, t.PointCloudMaterial = Mr, t.ParticleBasicMaterial = Er, t.ParticleSystemMaterial = Tr, t.Vertex = Sr, t.DynamicBufferAttribute = Ar, t.Int8Attribute = Lr, t.Uint8Attribute = Rr, t.Uint8ClampedAttribute = Pr, t.Int16Attribute = Cr, t.Uint16Attribute = Ir, t.Int32Attribute = Br, t.Uint32Attribute = Or, t.Float32Attribute = Nr, t.Float64Attribute = Ur, t.ClosedSplineCurve3 = Dr, t.SplineCurve3 = Fr, t.Spline = zr, t.BoundingBoxHelper = Gr, t.EdgesHelper = kr, t.WireframeHelper = Hr, t.XHRLoader = Vr, t.BinaryTextureLoader = jr, t.GeometryUtils = Is, t.ImageUtils = Bs, t.Projector = Wr, t.CanvasRenderer = Xr, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function() {
    "use strict";
    var t = function() {
        this.init()
    };
    t.prototype = {
        init: function() {
            var t = this || e;
            return t._counter = 0, t._codecs = {}, t._howls = [], t._muted = !1, t._volume = 1, t._canPlayEvent = "canplaythrough", t._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, t.masterGain = null, t.noAudio = !1, t.usingWebAudio = !0, t.autoSuspend = !0, t.ctx = null, t.mobileAutoEnable = !0, t._setup(), t
        },
        volume: function(t) {
            var n = this || e;
            if (t = parseFloat(t), n.ctx || u(), void 0 !== t && t >= 0 && t <= 1) {
                if (n._volume = t, n._muted) return n;
                n.usingWebAudio && (n.masterGain.gain.value = t);
                for (var i = 0; i < n._howls.length; i++)
                    if (!n._howls[i]._webAudio)
                        for (var r = n._howls[i]._getSoundIds(), o = 0; o < r.length; o++) {
                            var a = n._howls[i]._soundById(r[o]);
                            a && a._node && (a._node.volume = a._volume * t)
                        }
                return n
            }
            return n._volume
        },
        mute: function(t) {
            var n = this || e;
            n.ctx || u(), n._muted = t, n.usingWebAudio && (n.masterGain.gain.value = t ? 0 : n._volume);
            for (var i = 0; i < n._howls.length; i++)
                if (!n._howls[i]._webAudio)
                    for (var r = n._howls[i]._getSoundIds(), o = 0; o < r.length; o++) {
                        var a = n._howls[i]._soundById(r[o]);
                        a && a._node && (a._node.muted = !!t || a._muted)
                    }
            return n
        },
        unload: function() {
            for (var t = this || e, n = t._howls.length - 1; n >= 0; n--) t._howls[n].unload();
            return t.usingWebAudio && t.ctx && void 0 !== t.ctx.close && (t.ctx.close(), t.ctx = null, u()), t
        },
        codecs: function(t) {
            return (this || e)._codecs[t.replace(/^x-/, "")]
        },
        _setup: function() {
            var t = this || e;
            if (t.state = t.ctx ? t.ctx.state || "running" : "running", t._autoSuspend(), !t.usingWebAudio)
                if ("undefined" != typeof Audio) try {
                    var n = new Audio;
                    void 0 === n.oncanplaythrough && (t._canPlayEvent = "canplay")
                } catch (e) {
                    t.noAudio = !0
                } else t.noAudio = !0;
            try {
                var n = new Audio;
                n.muted && (t.noAudio = !0)
            } catch (t) {}
            return t.noAudio || t._setupCodecs(), t
        },
        _setupCodecs: function() {
            var t = this || e,
                n = null;
            try {
                n = "undefined" != typeof Audio ? new Audio : null
            } catch (e) {
                return t
            }
            if (!n || "function" != typeof n.canPlayType) return t;
            var i = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                r = t._navigator && t._navigator.userAgent.match(/OPR\/([0-6].)/g),
                o = r && parseInt(r[0].split("/")[1], 10) < 33;
            return t._codecs = {
                mp3: !(o || !i && !n.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!i,
                opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(/^no$/, "")
            }, t
        },
        _enableMobileAudio: function() {
            var t = this || e,
                n = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(t._navigator && t._navigator.userAgent),
                i = !!("ontouchend" in window || t._navigator && t._navigator.maxTouchPoints > 0 || t._navigator && t._navigator.msMaxTouchPoints > 0);
            if (!t._mobileEnabled && t.ctx && (n || i)) {
                t._mobileEnabled = !1, t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0, t.unload()), t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
                var r = function() {
                    var e = t.ctx.createBufferSource();
                    e.buffer = t._scratchBuffer, e.connect(t.ctx.destination), void 0 === e.start ? e.noteOn(0) : e.start(0), e.onended = function() {
                        e.disconnect(0), t._mobileEnabled = !0, t.mobileAutoEnable = !1, document.removeEventListener("touchend", r, !0)
                    }
                };
                return document.addEventListener("touchend", r, !0), t
            }
        },
        _autoSuspend: function() {
            var t = this;
            if (t.autoSuspend && t.ctx && void 0 !== t.ctx.suspend && e.usingWebAudio) {
                for (var n = 0; n < t._howls.length; n++)
                    if (t._howls[n]._webAudio)
                        for (var i = 0; i < t._howls[n]._sounds.length; i++)
                            if (!t._howls[n]._sounds[i]._paused) return t;
                return t._suspendTimer && clearTimeout(t._suspendTimer), t._suspendTimer = setTimeout(function() {
                    t.autoSuspend && (t._suspendTimer = null, t.state = "suspending", t.ctx.suspend().then(function() {
                        t.state = "suspended", t._resumeAfterSuspend && (delete t._resumeAfterSuspend, t._autoResume())
                    }))
                }, 3e4), t
            }
        },
        _autoResume: function() {
            var t = this;
            if (t.ctx && void 0 !== t.ctx.resume && e.usingWebAudio) return "running" === t.state && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : "suspended" === t.state ? (t.state = "resuming", t.ctx.resume().then(function() {
                t.state = "running";
                for (var e = 0; e < t._howls.length; e++) t._howls[e]._emit("resume")
            }), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0), t
        }
    };
    var e = new t,
        n = function(t) {
            var e = this;
            if (!t.src || 0 === t.src.length) return void console.error("An array of source files must be passed with any new Howl.");
            e.init(t)
        };
    n.prototype = {
        init: function(t) {
            var n = this;
            return e.ctx || u(), n._autoplay = t.autoplay || !1, n._format = "string" != typeof t.format ? t.format : [t.format], n._html5 = t.html5 || !1, n._muted = t.mute || !1, n._loop = t.loop || !1, n._pool = t.pool || 5, n._preload = "boolean" != typeof t.preload || t.preload, n._rate = t.rate || 1, n._sprite = t.sprite || {}, n._src = "string" != typeof t.src ? t.src : [t.src], n._volume = void 0 !== t.volume ? t.volume : 1, n._duration = 0, n._state = "unloaded", n._sounds = [], n._endTimers = {}, n._queue = [], n._onend = t.onend ? [{
                fn: t.onend
            }] : [], n._onfade = t.onfade ? [{
                fn: t.onfade
            }] : [], n._onload = t.onload ? [{
                fn: t.onload
            }] : [], n._onloaderror = t.onloaderror ? [{
                fn: t.onloaderror
            }] : [], n._onpause = t.onpause ? [{
                fn: t.onpause
            }] : [], n._onplay = t.onplay ? [{
                fn: t.onplay
            }] : [], n._onstop = t.onstop ? [{
                fn: t.onstop
            }] : [], n._onmute = t.onmute ? [{
                fn: t.onmute
            }] : [], n._onvolume = t.onvolume ? [{
                fn: t.onvolume
            }] : [], n._onrate = t.onrate ? [{
                fn: t.onrate
            }] : [], n._onseek = t.onseek ? [{
                fn: t.onseek
            }] : [], n._onresume = [], n._webAudio = e.usingWebAudio && !n._html5, void 0 !== e.ctx && e.ctx && e.mobileAutoEnable && e._enableMobileAudio(), e._howls.push(n), n._autoplay && n._queue.push({
                event: "play",
                action: function() {
                    n.play()
                }
            }), n._preload && n.load(), n
        },
        load: function() {
            var t = this,
                n = null;
            if (e.noAudio) return void t._emit("loaderror", null, "No audio support.");
            "string" == typeof t._src && (t._src = [t._src]);
            for (var r = 0; r < t._src.length; r++) {
                var a, s;
                if (t._format && t._format[r]) a = t._format[r];
                else {
                    if ("string" != typeof(s = t._src[r])) {
                        t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue
                    }
                    a = /^data:audio\/([^;,]+);/i.exec(s), a || (a = /\.([^.]+)$/.exec(s.split("?", 1)[0])), a && (a = a[1].toLowerCase())
                }
                if (a || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), a && e.codecs(a)) {
                    n = t._src[r];
                    break
                }
            }
            return n ? (t._src = n, t._state = "loading", "https:" === window.location.protocol && "http:" === n.slice(0, 5) && (t._html5 = !0, t._webAudio = !1), new i(t), t._webAudio && o(t), t) : void t._emit("loaderror", null, "No codec support for selected audio sources.")
        },
        play: function(t, n) {
            var i = this,
                r = null;
            if ("number" == typeof t) r = t, t = null;
            else {
                if ("string" == typeof t && "loaded" === i._state && !i._sprite[t]) return null;
                if (void 0 === t) {
                    t = "__default";
                    for (var o = 0, a = 0; a < i._sounds.length; a++) i._sounds[a]._paused && !i._sounds[a]._ended && (o++, r = i._sounds[a]._id);
                    1 === o ? t = null : r = null
                }
            }
            var s = r ? i._soundById(r) : i._inactiveSound();
            if (!s) return null;
            if (r && !t && (t = s._sprite || "__default"), "loaded" !== i._state && !i._sprite[t]) return i._queue.push({
                event: "play",
                action: function() {
                    i.play(i._soundById(s._id) ? s._id : void 0)
                }
            }), s._id;
            if (r && !s._paused) return n || setTimeout(function() {
                i._emit("play", s._id)
            }, 0), s._id;
            i._webAudio && e._autoResume();
            var c = Math.max(0, s._seek > 0 ? s._seek : i._sprite[t][0] / 1e3),
                u = Math.max(0, (i._sprite[t][0] + i._sprite[t][1]) / 1e3 - c),
                l = 1e3 * u / Math.abs(s._rate);
            s._paused = !1, s._ended = !1, s._sprite = t, s._seek = c, s._start = i._sprite[t][0] / 1e3, s._stop = (i._sprite[t][0] + i._sprite[t][1]) / 1e3, s._loop = !(!s._loop && !i._sprite[t][2]);
            var h = s._node;
            if (i._webAudio) {
                var d = function() {
                        i._refreshBuffer(s);
                        var t = s._muted || i._muted ? 0 : s._volume;
                        h.gain.setValueAtTime(t, e.ctx.currentTime), s._playStart = e.ctx.currentTime, void 0 === h.bufferSource.start ? s._loop ? h.bufferSource.noteGrainOn(0, c, 86400) : h.bufferSource.noteGrainOn(0, c, u) : s._loop ? h.bufferSource.start(0, c, 86400) : h.bufferSource.start(0, c, u), l !== 1 / 0 && (i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), l)), n || setTimeout(function() {
                            i._emit("play", s._id)
                        }, 0)
                    },
                    p = "running" === e.state;
                if ("loaded" === i._state && p) d();
                else {
                    var f = p || "loaded" !== i._state ? "load" : "resume";
                    i.once(f, d, p ? s._id : null), i._clearTimer(s._id)
                }
            } else {
                var m = function() {
                        h.currentTime = c, h.muted = s._muted || i._muted || e._muted || h.muted, h.volume = s._volume * e.volume(), h.playbackRate = s._rate, h.play(), l !== 1 / 0 && (i._endTimers[s._id] = setTimeout(i._ended.bind(i, s), l)), n || i._emit("play", s._id)
                    },
                    g = "loaded" === i._state && (window && window.ejecta || !h.readyState && e._navigator.isCocoonJS);
                if (4 === h.readyState || g) m();
                else {
                    var v = function() {
                        m(), h.removeEventListener(e._canPlayEvent, v, !1)
                    };
                    h.addEventListener(e._canPlayEvent, v, !1), i._clearTimer(s._id)
                }
            }
            return s._id
        },
        pause: function(t) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "pause",
                action: function() {
                    e.pause(t)
                }
            }), e;
            for (var n = e._getSoundIds(t), i = 0; i < n.length; i++) {
                e._clearTimer(n[i]);
                var r = e._soundById(n[i]);
                if (r && !r._paused && (r._seek = e.seek(n[i]), r._rateSeek = 0, r._paused = !0, e._stopFade(n[i]), r._node))
                    if (e._webAudio) {
                        if (!r._node.bufferSource) return e;
                        void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), e._cleanBuffer(r._node)
                    } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
                arguments[1] || e._emit("pause", r ? r._id : null)
            }
            return e
        },
        stop: function(t, e) {
            var n = this;
            if ("loaded" !== n._state) return n._queue.push({
                event: "stop",
                action: function() {
                    n.stop(t)
                }
            }), n;
            for (var i = n._getSoundIds(t), r = 0; r < i.length; r++) {
                n._clearTimer(i[r]);
                var o = n._soundById(i[r]);
                if (o && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, n._stopFade(i[r]), o._node))
                    if (n._webAudio) {
                        if (!o._node.bufferSource) return e || n._emit("stop", o._id), n;
                        void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), n._cleanBuffer(o._node)
                    } else isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause());
                o && !e && n._emit("stop", o._id)
            }
            return n
        },
        mute: function(t, n) {
            var i = this;
            if ("loaded" !== i._state) return i._queue.push({
                event: "mute",
                action: function() {
                    i.mute(t, n)
                }
            }), i;
            if (void 0 === n) {
                if ("boolean" != typeof t) return i._muted;
                i._muted = t
            }
            for (var r = i._getSoundIds(n), o = 0; o < r.length; o++) {
                var a = i._soundById(r[o]);
                a && (a._muted = t, i._webAudio && a._node ? a._node.gain.setValueAtTime(t ? 0 : a._volume, e.ctx.currentTime) : a._node && (a._node.muted = !!e._muted || t), i._emit("mute", a._id))
            }
            return i
        },
        volume: function() {
            var t, n, i = this,
                r = arguments;
            if (0 === r.length) return i._volume;
            if (1 === r.length || 2 === r.length && void 0 === r[1]) {
                i._getSoundIds().indexOf(r[0]) >= 0 ? n = parseInt(r[0], 10) : t = parseFloat(r[0])
            } else r.length >= 2 && (t = parseFloat(r[0]), n = parseInt(r[1], 10));
            var o;
            if (!(void 0 !== t && t >= 0 && t <= 1)) return o = n ? i._soundById(n) : i._sounds[0], o ? o._volume : 0;
            if ("loaded" !== i._state) return i._queue.push({
                event: "volume",
                action: function() {
                    i.volume.apply(i, r)
                }
            }), i;
            void 0 === n && (i._volume = t), n = i._getSoundIds(n);
            for (var a = 0; a < n.length; a++)(o = i._soundById(n[a])) && (o._volume = t, r[2] || i._stopFade(n[a]), i._webAudio && o._node && !o._muted ? o._node.gain.setValueAtTime(t, e.ctx.currentTime) : o._node && !o._muted && (o._node.volume = t * e.volume()), i._emit("volume", o._id));
            return i
        },
        fade: function(t, n, i, r) {
            var o = this,
                a = Math.abs(t - n),
                s = t > n ? "out" : "in",
                c = a / .01,
                u = c > 0 ? i / c : i;
            if (u < 4 && (c = Math.ceil(c / (4 / u)), u = 4), "loaded" !== o._state) return o._queue.push({
                event: "fade",
                action: function() {
                    o.fade(t, n, i, r)
                }
            }), o;
            o.volume(t, r);
            for (var l = o._getSoundIds(r), h = 0; h < l.length; h++) {
                var d = o._soundById(l[h]);
                if (d) {
                    if (r || o._stopFade(l[h]), o._webAudio && !d._muted) {
                        var p = e.ctx.currentTime,
                            f = p + i / 1e3;
                        d._volume = t, d._node.gain.setValueAtTime(t, p), d._node.gain.linearRampToValueAtTime(n, f)
                    }
                    var m = t;
                    d._interval = setInterval(function(e, i) {
                        c > 0 && (m += "in" === s ? .01 : -.01), m = Math.max(0, m), m = Math.min(1, m), m = Math.round(100 * m) / 100, o._webAudio ? (void 0 === r && (o._volume = m), i._volume = m) : o.volume(m, e, !0), (n < t && m <= n || n > t && m >= n) && (clearInterval(i._interval), i._interval = null, o.volume(n, e), o._emit("fade", e))
                    }.bind(o, l[h], d), u)
                }
            }
            return o
        },
        _stopFade: function(t) {
            var n = this,
                i = n._soundById(t);
            return i && i._interval && (n._webAudio && i._node.gain.cancelScheduledValues(e.ctx.currentTime), clearInterval(i._interval), i._interval = null, n._emit("fade", t)), n
        },
        loop: function() {
            var t, e, n, i = this,
                r = arguments;
            if (0 === r.length) return i._loop;
            if (1 === r.length) {
                if ("boolean" != typeof r[0]) return !!(n = i._soundById(parseInt(r[0], 10))) && n._loop;
                t = r[0], i._loop = t
            } else 2 === r.length && (t = r[0], e = parseInt(r[1], 10));
            for (var o = i._getSoundIds(e), a = 0; a < o.length; a++)(n = i._soundById(o[a])) && (n._loop = t, i._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = t, t && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop)));
            return i
        },
        rate: function() {
            var t, n, i = this,
                r = arguments;
            if (0 === r.length) n = i._sounds[0]._id;
            else if (1 === r.length) {
                var o = i._getSoundIds(),
                    a = o.indexOf(r[0]);
                a >= 0 ? n = parseInt(r[0], 10) : t = parseFloat(r[0])
            } else 2 === r.length && (t = parseFloat(r[0]), n = parseInt(r[1], 10));
            var s;
            if ("number" != typeof t) return s = i._soundById(n), s ? s._rate : i._rate;
            if ("loaded" !== i._state) return i._queue.push({
                event: "rate",
                action: function() {
                    i.rate.apply(i, r)
                }
            }), i;
            void 0 === n && (i._rate = t), n = i._getSoundIds(n);
            for (var c = 0; c < n.length; c++)
                if (s = i._soundById(n[c])) {
                    s._rateSeek = i.seek(n[c]), s._playStart = i._webAudio ? e.ctx.currentTime : s._playStart, s._rate = t, i._webAudio && s._node && s._node.bufferSource ? s._node.bufferSource.playbackRate.value = t : s._node && (s._node.playbackRate = t);
                    var u = i.seek(n[c]),
                        l = (i._sprite[s._sprite][0] + i._sprite[s._sprite][1]) / 1e3 - u,
                        h = 1e3 * l / Math.abs(s._rate);
                    !i._endTimers[n[c]] && s._paused || (i._clearTimer(n[c]), i._endTimers[n[c]] = setTimeout(i._ended.bind(i, s), h)), i._emit("rate", s._id)
                }
            return i
        },
        seek: function() {
            var t, n, i = this,
                r = arguments;
            if (0 === r.length) n = i._sounds[0]._id;
            else if (1 === r.length) {
                var o = i._getSoundIds(),
                    a = o.indexOf(r[0]);
                a >= 0 ? n = parseInt(r[0], 10) : (n = i._sounds[0]._id, t = parseFloat(r[0]))
            } else 2 === r.length && (t = parseFloat(r[0]), n = parseInt(r[1], 10));
            if (void 0 === n) return i;
            if ("loaded" !== i._state) return i._queue.push({
                event: "seek",
                action: function() {
                    i.seek.apply(i, r)
                }
            }), i;
            var s = i._soundById(n);
            if (s) {
                if (!("number" == typeof t && t >= 0)) {
                    if (i._webAudio) {
                        var c = i.playing(n) ? e.ctx.currentTime - s._playStart : 0,
                            u = s._rateSeek ? s._rateSeek - s._seek : 0;
                        return s._seek + (u + c * Math.abs(s._rate))
                    }
                    return s._node.currentTime
                }
                var l = i.playing(n);
                l && i.pause(n, !0), s._seek = t, s._ended = !1, i._clearTimer(n), l && i.play(n, !0), !i._webAudio && s._node && (s._node.currentTime = t), i._emit("seek", n)
            }
            return i
        },
        playing: function(t) {
            var e = this;
            if ("number" == typeof t) {
                var n = e._soundById(t);
                return !!n && !n._paused
            }
            for (var i = 0; i < e._sounds.length; i++)
                if (!e._sounds[i]._paused) return !0;
            return !1
        },
        duration: function(t) {
            var e = this,
                n = e._duration,
                i = e._soundById(t);
            return i && (n = e._sprite[i._sprite][1] / 1e3), n
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var t = this, n = t._sounds, i = 0; i < n.length; i++) {
                n[i]._paused || t.stop(n[i]._id), t._webAudio || (n[i]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA", n[i]._node.removeEventListener("error", n[i]._errorFn, !1), n[i]._node.removeEventListener(e._canPlayEvent, n[i]._loadFn, !1)), delete n[i]._node, t._clearTimer(n[i]._id);
                var o = e._howls.indexOf(t);
                o >= 0 && e._howls.splice(o, 1)
            }
            var a = !0;
            for (i = 0; i < e._howls.length; i++)
                if (e._howls[i]._src === t._src) {
                    a = !1;
                    break
                }
            return r && a && delete r[t._src], e.noAudio = !1, t._state = "unloaded", t._sounds = [], t = null, null
        },
        on: function(t, e, n, i) {
            var r = this,
                o = r["_on" + t];
            return "function" == typeof e && o.push(i ? {
                id: n,
                fn: e,
                once: i
            } : {
                id: n,
                fn: e
            }), r
        },
        off: function(t, e, n) {
            var i = this,
                r = i["_on" + t],
                o = 0;
            if (e) {
                for (o = 0; o < r.length; o++)
                    if (e === r[o].fn && n === r[o].id) {
                        r.splice(o, 1);
                        break
                    }
            } else if (t) i["_on" + t] = [];
            else {
                var a = Object.keys(i);
                for (o = 0; o < a.length; o++) 0 === a[o].indexOf("_on") && Array.isArray(i[a[o]]) && (i[a[o]] = [])
            }
            return i
        },
        once: function(t, e, n) {
            var i = this;
            return i.on(t, e, n, 1), i
        },
        _emit: function(t, e, n) {
            for (var i = this, r = i["_on" + t], o = r.length - 1; o >= 0; o--) r[o].id && r[o].id !== e && "load" !== t || (setTimeout(function(t) {
                t.call(this, e, n)
            }.bind(i, r[o].fn), 0), r[o].once && i.off(t, r[o].fn, r[o].id));
            return i
        },
        _loadQueue: function() {
            var t = this;
            if (t._queue.length > 0) {
                var e = t._queue[0];
                t.once(e.event, function() {
                    t._queue.shift(), t._loadQueue()
                }), e.action()
            }
            return t
        },
        _ended: function(t) {
            var n = this,
                i = t._sprite,
                r = !(!t._loop && !n._sprite[i][2]);
            if (n._emit("end", t._id), !n._webAudio && r && n.stop(t._id, !0).play(t._id), n._webAudio && r) {
                n._emit("play", t._id), t._seek = t._start || 0, t._rateSeek = 0, t._playStart = e.ctx.currentTime;
                var o = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                n._endTimers[t._id] = setTimeout(n._ended.bind(n, t), o)
            }
            return n._webAudio && !r && (t._paused = !0, t._ended = !0, t._seek = t._start || 0, t._rateSeek = 0, n._clearTimer(t._id), n._cleanBuffer(t._node), e._autoSuspend()), n._webAudio || r || n.stop(t._id), n
        },
        _clearTimer: function(t) {
            var e = this;
            return e._endTimers[t] && (clearTimeout(e._endTimers[t]), delete e._endTimers[t]), e
        },
        _soundById: function(t) {
            for (var e = this, n = 0; n < e._sounds.length; n++)
                if (t === e._sounds[n]._id) return e._sounds[n];
            return null
        },
        _inactiveSound: function() {
            var t = this;
            t._drain();
            for (var e = 0; e < t._sounds.length; e++)
                if (t._sounds[e]._ended) return t._sounds[e].reset();
            return new i(t)
        },
        _drain: function() {
            var t = this,
                e = t._pool,
                n = 0,
                i = 0;
            if (!(t._sounds.length < e)) {
                for (i = 0; i < t._sounds.length; i++) t._sounds[i]._ended && n++;
                for (i = t._sounds.length - 1; i >= 0; i--) {
                    if (n <= e) return;
                    t._sounds[i]._ended && (t._webAudio && t._sounds[i]._node && t._sounds[i]._node.disconnect(0), t._sounds.splice(i, 1), n--)
                }
            }
        },
        _getSoundIds: function(t) {
            var e = this;
            if (void 0 === t) {
                for (var n = [], i = 0; i < e._sounds.length; i++) n.push(e._sounds[i]._id);
                return n
            }
            return [t]
        },
        _refreshBuffer: function(t) {
            var n = this;
            return t._node.bufferSource = e.ctx.createBufferSource(), t._node.bufferSource.buffer = r[n._src], t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node), t._node.bufferSource.loop = t._loop, t._loop && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop), t._node.bufferSource.playbackRate.value = t._rate, n
        },
        _cleanBuffer: function(t) {
            var e = this;
            if (e._scratchBuffer) {
                t.bufferSource.onended = null, t.bufferSource.disconnect(0);
                try {
                    t.bufferSource.buffer = e._scratchBuffer
                } catch (t) {}
            }
            return t.bufferSource = null, e
        }
    };
    var i = function(t) {
        this._parent = t, this.init()
    };
    i.prototype = {
        init: function() {
            var t = this,
                n = t._parent;
            return t._muted = n._muted, t._loop = n._loop, t._volume = n._volume, t._muted = n._muted, t._rate = n._rate, t._seek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++e._counter, n._sounds.push(t), t.create(), t
        },
        create: function() {
            var t = this,
                n = t._parent,
                i = e._muted || t._muted || t._parent._muted ? 0 : t._volume;
            return n._webAudio ? (t._node = void 0 === e.ctx.createGain ? e.ctx.createGainNode() : e.ctx.createGain(), t._node.gain.setValueAtTime(i, e.ctx.currentTime), t._node.paused = !0, t._node.connect(e.masterGain)) : (t._node = new Audio, t._errorFn = t._errorListener.bind(t), t._node.addEventListener("error", t._errorFn, !1), t._loadFn = t._loadListener.bind(t), t._node.addEventListener(e._canPlayEvent, t._loadFn, !1), t._node.src = n._src, t._node.preload = "auto", t._node.volume = i * e.volume(), t._node.load()), t
        },
        reset: function() {
            var t = this,
                n = t._parent;
            return t._muted = n._muted, t._loop = n._loop, t._volume = n._volume, t._muted = n._muted, t._rate = n._rate, t._seek = 0, t._rateSeek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++e._counter, t
        },
        _errorListener: function() {
            var t = this;
            t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0), t._node.removeEventListener("error", t._errorListener, !1)
        },
        _loadListener: function() {
            var t = this,
                n = t._parent;
            n._duration = Math.ceil(10 * t._node.duration) / 10, 0 === Object.keys(n._sprite).length && (n._sprite = {
                __default: [0, 1e3 * n._duration]
            }), "loaded" !== n._state && (n._state = "loaded", n._emit("load"), n._loadQueue()), t._node.removeEventListener(e._canPlayEvent, t._loadFn, !1)
        }
    };
    var r = {},
        o = function(t) {
            var e = t._src;
            if (r[e]) return t._duration = r[e].duration, void c(t);
            if (/^data:[^;]+;base64,/.test(e)) {
                for (var n = atob(e.split(",")[1]), i = new Uint8Array(n.length), o = 0; o < n.length; ++o) i[o] = n.charCodeAt(o);
                s(i.buffer, t)
            } else {
                var u = new XMLHttpRequest;
                u.open("GET", e, !0), u.responseType = "arraybuffer", u.onload = function() {
                    var e = (u.status + "")[0];
                    if ("0" !== e && "2" !== e && "3" !== e) return void t._emit("loaderror", null, "Failed loading audio file with status: " + u.status + ".");
                    s(u.response, t)
                }, u.onerror = function() {
                    t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete r[e], t.load())
                }, a(u)
            }
        },
        a = function(t) {
            try {
                t.send()
            } catch (e) {
                t.onerror()
            }
        },
        s = function(t, n) {
            e.ctx.decodeAudioData(t, function(t) {
                t && n._sounds.length > 0 && (r[n._src] = t, c(n, t))
            }, function() {
                n._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        c = function(t, e) {
            e && !t._duration && (t._duration = e.duration), 0 === Object.keys(t._sprite).length && (t._sprite = {
                __default: [0, 1e3 * t._duration]
            }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue())
        },
        u = function() {
            try {
                "undefined" != typeof AudioContext ? e.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? e.ctx = new webkitAudioContext : e.usingWebAudio = !1
            } catch (t) {
                e.usingWebAudio = !1
            }
            var t = /iP(hone|od|ad)/.test(e._navigator && e._navigator.platform),
                n = e._navigator && e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                i = n ? parseInt(n[1], 10) : null;
            if (t && i && i < 9) {
                var r = /safari/.test(e._navigator && e._navigator.userAgent.toLowerCase());
                (e._navigator && e._navigator.standalone && !r || e._navigator && !e._navigator.standalone && !r) && (e.usingWebAudio = !1)
            }
            e.usingWebAudio && (e.masterGain = void 0 === e.ctx.createGain ? e.ctx.createGainNode() : e.ctx.createGain(), e.masterGain.gain.value = 1, e.masterGain.connect(e.ctx.destination)), e._setup()
        };
    "function" == typeof define && define.amd && define([], function() {
        return {
            Howler: e,
            Howl: n
        }
    }), "undefined" != typeof exports && (exports.Howler = e, exports.Howl = n), "undefined" != typeof window ? (window.HowlerGlobal = t, window.Howler = e, window.Howl = n, window.Sound = i) : "undefined" != typeof global && (global.HowlerGlobal = t, global.Howler = e, global.Howl = n, global.Sound = i)
}(),
function() {
    "use strict";
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
        var e = this;
        if (!e.ctx || !e.ctx.listener) return e;
        for (var n = e._howls.length - 1; n >= 0; n--) e._howls[n].stereo(t);
        return e
    }, HowlerGlobal.prototype.pos = function(t, e, n) {
        var i = this;
        return i.ctx && i.ctx.listener ? (e = "number" != typeof e ? i._pos[1] : e, n = "number" != typeof n ? i._pos[2] : n, "number" != typeof t ? i._pos : (i._pos = [t, e, n], i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]), i)) : i
    }, HowlerGlobal.prototype.orientation = function(t, e, n, i, r, o) {
        var a = this;
        if (!a.ctx || !a.ctx.listener) return a;
        var s = a._orientation;
        return e = "number" != typeof e ? s[1] : e, n = "number" != typeof n ? s[2] : n, i = "number" != typeof i ? s[3] : i, r = "number" != typeof r ? s[4] : r, o = "number" != typeof o ? s[5] : o, "number" != typeof t ? s : (a._orientation = [t, e, n, i, r, o], a.ctx.listener.setOrientation(t, e, n, i, r, o), a)
    }, Howl.prototype.init = function(t) {
        return function(e) {
            var n = this;
            return n._orientation = e.orientation || [1, 0, 0], n._stereo = e.stereo || null, n._pos = e.pos || null, n._pannerAttr = {
                coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
                coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
                coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
                distanceModel: void 0 !== e.distanceModel ? e.distanceModel : "inverse",
                maxDistance: void 0 !== e.maxDistance ? e.maxDistance : 1e4,
                panningModel: void 0 !== e.panningModel ? e.panningModel : "HRTF",
                refDistance: void 0 !== e.refDistance ? e.refDistance : 1,
                rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : 1
            }, n._onstereo = e.onstereo ? [{
                fn: e.onstereo
            }] : [], n._onpos = e.onpos ? [{
                fn: e.onpos
            }] : [], n._onorientation = e.onorientation ? [{
                fn: e.onorientation
            }] : [], t.call(this, e)
        }
    }(Howl.prototype.init), Howl.prototype.stereo = function(e, n) {
        var i = this;
        if (!i._webAudio) return i;
        if ("loaded" !== i._state) return i._queue.push({
            event: "stereo",
            action: function() {
                i.stereo(e, n)
            }
        }), i;
        var r = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if (void 0 === n) {
            if ("number" != typeof e) return i._stereo;
            i._stereo = e, i._pos = [e, 0, 0]
        }
        for (var o = i._getSoundIds(n), a = 0; a < o.length; a++) {
            var s = i._soundById(o[a]);
            if (s) {
                if ("number" != typeof e) return s._stereo;
                s._stereo = e, s._pos = [e, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", s._panner && s._panner.pan || t(s, r), "spatial" === r ? s._panner.setPosition(e, 0, 0) : s._panner.pan.value = e), i._emit("stereo", s._id)
            }
        }
        return i
    }, Howl.prototype.pos = function(e, n, i, r) {
        var o = this;
        if (!o._webAudio) return o;
        if ("loaded" !== o._state) return o._queue.push({
            event: "pos",
            action: function() {
                o.pos(e, n, i, r)
            }
        }), o;
        if (n = "number" != typeof n ? 0 : n, i = "number" != typeof i ? -.5 : i, void 0 === r) {
            if ("number" != typeof e) return o._pos;
            o._pos = [e, n, i]
        }
        for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
            var c = o._soundById(a[s]);
            if (c) {
                if ("number" != typeof e) return c._pos;
                c._pos = [e, n, i], c._node && (c._panner && !c._panner.pan || t(c, "spatial"), c._panner.setPosition(e, n, i)), o._emit("pos", c._id)
            }
        }
        return o
    }, Howl.prototype.orientation = function(e, n, i, r) {
        var o = this;
        if (!o._webAudio) return o;
        if ("loaded" !== o._state) return o._queue.push({
            event: "orientation",
            action: function() {
                o.orientation(e, n, i, r)
            }
        }), o;
        if (n = "number" != typeof n ? o._orientation[1] : n, i = "number" != typeof i ? o._orientation[2] : i, void 0 === r) {
            if ("number" != typeof e) return o._orientation;
            o._orientation = [e, n, i]
        }
        for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
            var c = o._soundById(a[s]);
            if (c) {
                if ("number" != typeof e) return c._orientation;
                c._orientation = [e, n, i], c._node && (c._panner || (c._pos || (c._pos = o._pos || [0, 0, -.5]), t(c, "spatial")), c._panner.setOrientation(e, n, i)), o._emit("orientation", c._id)
            }
        }
        return o
    }, Howl.prototype.pannerAttr = function() {
        var e, n, i, r = this,
            o = arguments;
        if (!r._webAudio) return r;
        if (0 === o.length) return r._pannerAttr;
        if (1 === o.length) {
            if ("object" != typeof o[0]) return i = r._soundById(parseInt(o[0], 10)), i ? i._pannerAttr : r._pannerAttr;
            e = o[0], void 0 === n && (r._pannerAttr = {
                coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : r._coneInnerAngle,
                coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : r._coneOuterAngle,
                coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : r._coneOuterGain,
                distanceModel: void 0 !== e.distanceModel ? e.distanceModel : r._distanceModel,
                maxDistance: void 0 !== e.maxDistance ? e.maxDistance : r._maxDistance,
                panningModel: void 0 !== e.panningModel ? e.panningModel : r._panningModel,
                refDistance: void 0 !== e.refDistance ? e.refDistance : r._refDistance,
                rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : r._rolloffFactor
            })
        } else 2 === o.length && (e = o[0], n = parseInt(o[1], 10));
        for (var a = r._getSoundIds(n), s = 0; s < a.length; s++)
            if (i = r._soundById(a[s])) {
                var c = i._pannerAttr;
                c = {
                    coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : c.coneInnerAngle,
                    coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : c.coneOuterAngle,
                    coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : c.coneOuterGain,
                    distanceModel: void 0 !== e.distanceModel ? e.distanceModel : c.distanceModel,
                    maxDistance: void 0 !== e.maxDistance ? e.maxDistance : c.maxDistance,
                    panningModel: void 0 !== e.panningModel ? e.panningModel : c.panningModel,
                    refDistance: void 0 !== e.refDistance ? e.refDistance : c.refDistance,
                    rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : c.rolloffFactor
                };
                var u = i._panner;
                u ? (u.coneInnerAngle = c.coneInnerAngle, u.coneOuterAngle = c.coneOuterAngle, u.coneOuterGain = c.coneOuterGain, u.distanceModel = c.distanceModel, u.maxDistance = c.maxDistance, u.panningModel = c.panningModel, u.refDistance = c.refDistance, u.rolloffFactor = c.rolloffFactor) : (i._pos || (i._pos = r._pos || [0, 0, -.5]), t(i, "spatial"))
            }
        return r
    }, Sound.prototype.init = function(t) {
        return function() {
            var e = this,
                n = e._parent;
            e._orientation = n._orientation, e._stereo = n._stereo, e._pos = n._pos, e._pannerAttr = n._pannerAttr, t.call(this), e._stereo ? n.stereo(e._stereo) : e._pos && n.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
        }
    }(Sound.prototype.init), Sound.prototype.reset = function(t) {
        return function() {
            var e = this,
                n = e._parent;
            return e._orientation = n._orientation, e._pos = n._pos, e._pannerAttr = n._pannerAttr, t.call(this)
        }
    }(Sound.prototype.reset);
    var t = function(t, e) {
        e = e || "spatial", "spatial" === e ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.panningModel = t._pannerAttr.panningModel, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.value = t._stereo), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id)
    }
}(), this.createjs = this.createjs || {}, createjs.extend = function(t, e) {
        "use strict";

        function n() {
            this.constructor = t
        }
        return n.prototype = e.prototype, t.prototype = new n
    }, this.createjs = this.createjs || {}, createjs.promote = function(t, e) {
        "use strict";
        var n = t.prototype,
            i = Object.getPrototypeOf && Object.getPrototypeOf(n) || n.__proto__;
        if (i) {
            n[(e += "_") + "constructor"] = i.constructor;
            for (var r in i) n.hasOwnProperty(r) && "function" == typeof i[r] && (n[e + r] = i[r])
        }
        return t
    }, this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, n) {
            this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!n, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var e = t.prototype;
        e.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        }, e.stopPropagation = function() {
            this.propagationStopped = !0
        }, e.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, e.remove = function() {
            this.removed = !0
        }, e.clone = function() {
            return new t(this.type, this.bubbles, this.cancelable)
        }, e.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this
        }, e.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this._listeners = null, this._captureListeners = null
        }
        var e = t.prototype;
        t.initialize = function(t) {
            t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
        }, e.addEventListener = function(t, e, n) {
            var i;
            i = n ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var r = i[t];
            return r && this.removeEventListener(t, e, n), r = i[t], r ? r.push(e) : i[t] = [e], e
        }, e.on = function(t, e, n, i, r, o) {
            return e.handleEvent && (n = n || e, e = e.handleEvent), n = n || this, this.addEventListener(t, function(t) {
                e.call(n, t, r), i && t.remove()
            }, o)
        }, e.removeEventListener = function(t, e, n) {
            var i = n ? this._captureListeners : this._listeners;
            if (i) {
                var r = i[t];
                if (r)
                    for (var o = 0, a = r.length; o < a; o++)
                        if (r[o] == e) {
                            1 == a ? delete i[t] : r.splice(o, 1);
                            break
                        }
            }
        }, e.off = e.removeEventListener, e.removeAllEventListeners = function(t) {
            t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
        }, e.dispatchEvent = function(t, e, n) {
            if ("string" == typeof t) {
                var i = this._listeners;
                if (!(e || i && i[t])) return !0;
                t = new createjs.Event(t, e, n)
            } else t.target && t.clone && (t = t.clone());
            try {
                t.target = this
            } catch (t) {}
            if (t.bubbles && this.parent) {
                for (var r = this, o = [r]; r.parent;) o.push(r = r.parent);
                var a, s = o.length;
                for (a = s - 1; a >= 0 && !t.propagationStopped; a--) o[a]._dispatchEvent(t, 1 + (0 == a));
                for (a = 1; a < s && !t.propagationStopped; a++) o[a]._dispatchEvent(t, 3)
            } else this._dispatchEvent(t, 2);
            return !t.defaultPrevented
        }, e.hasEventListener = function(t) {
            var e = this._listeners,
                n = this._captureListeners;
            return !!(e && e[t] || n && n[t])
        }, e.willTrigger = function(t) {
            for (var e = this; e;) {
                if (e.hasEventListener(t)) return !0;
                e = e.parent
            }
            return !1
        }, e.toString = function() {
            return "[EventDispatcher]"
        }, e._dispatchEvent = function(t, e) {
            var n, i = 1 == e ? this._captureListeners : this._listeners;
            if (t && i) {
                var r = i[t.type];
                if (!r || !(n = r.length)) return;
                try {
                    t.currentTarget = this
                } catch (t) {}
                try {
                    t.eventPhase = e
                } catch (t) {}
                t.removed = !1, r = r.slice();
                for (var o = 0; o < n && !t.immediatePropagationStopped; o++) {
                    var a = r[o];
                    a.handleEvent ? a.handleEvent(t) : a(t), t.removed && (this.off(t.type, a, 1 == e), t.removed = !1)
                }
            }
        }, createjs.EventDispatcher = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            throw "Ticker cannot be instantiated."
        }
        t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.useRAF = !1, t.timingMode = null, t.maxDelta = 0, t.paused = !1, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function() {
            return !t._inited && t.init(), t._addEventListener.apply(t, arguments)
        }, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t._raf = !0, t.setInterval = function(e) {
            t._interval = e, t._inited && t._setupTick()
        }, t.getInterval = function() {
            return t._interval
        }, t.setFPS = function(e) {
            t.setInterval(1e3 / e)
        }, t.getFPS = function() {
            return 1e3 / t._interval
        };
        try {
            Object.defineProperties(t, {
                interval: {
                    get: t.getInterval,
                    set: t.setInterval
                },
                framerate: {
                    get: t.getFPS,
                    set: t.setFPS
                }
            })
        } catch (t) {
            console.log(t)
        }
        t.init = function() {
            t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(), t._times.push(t._lastTime = 0), t.interval = t._interval)
        }, t.reset = function() {
            if (t._raf) {
                var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
                e && e(t._timerId)
            } else clearTimeout(t._timerId);
            t.removeAllEventListeners("tick"), t._timerId = t._times = t._tickTimes = null, t._startTime = t._lastTime = t._ticks = 0, t._inited = !1
        }, t.getMeasuredTickTime = function(e) {
            var n = 0,
                i = t._tickTimes;
            if (!i || i.length < 1) return -1;
            e = Math.min(i.length, e || 0 | t.getFPS());
            for (var r = 0; r < e; r++) n += i[r];
            return n / e
        }, t.getMeasuredFPS = function(e) {
            var n = t._times;
            return !n || n.length < 2 ? -1 : (e = Math.min(n.length - 1, e || 0 | t.getFPS()), 1e3 / ((n[0] - n[e]) / e))
        }, t.setPaused = function(e) {
            t.paused = e
        }, t.getPaused = function() {
            return t.paused
        }, t.getTime = function(e) {
            return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
        }, t.getEventTime = function(e) {
            return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
        }, t.getTicks = function(e) {
            return t._ticks - (e ? t._pausedTicks : 0)
        }, t._handleSynch = function() {
            t._timerId = null, t._setupTick(), t._getTime() - t._lastTime >= .97 * (t._interval - 1) && t._tick()
        }, t._handleRAF = function() {
            t._timerId = null, t._setupTick(), t._tick()
        }, t._handleTimeout = function() {
            t._timerId = null, t._setupTick(), t._tick()
        }, t._setupTick = function() {
            if (null == t._timerId) {
                var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
                if (e == t.RAF_SYNCHED || e == t.RAF) {
                    var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                    if (n) return t._timerId = n(e == t.RAF ? t._handleRAF : t._handleSynch), void(t._raf = !0)
                }
                t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval)
            }
        }, t._tick = function() {
            var e = t.paused,
                n = t._getTime(),
                i = n - t._lastTime;
            if (t._lastTime = n, t._ticks++, e && (t._pausedTicks++, t._pausedTime += i), t.hasEventListener("tick")) {
                var r = new createjs.Event("tick"),
                    o = t.maxDelta;
                r.delta = o && i > o ? o : i, r.paused = e, r.time = n, r.runTime = n - t._pausedTime, t.dispatchEvent(r)
            }
            for (t._tickTimes.unshift(t._getTime() - n); t._tickTimes.length > 100;) t._tickTimes.pop();
            for (t._times.unshift(n); t._times.length > 100;) t._times.pop()
        };
        var e = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
        t._getTime = function() {
            return (e && e.call(performance) || (new Date).getTime()) - t._startTime
        }, createjs.Ticker = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(e, n, i) {
            this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = i || {}, this.target = e, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = e, this._useTicks = !1, this._inited = !1, this._registered = !1, n && (this._useTicks = n.useTicks, this.ignoreGlobalPause = n.ignoreGlobalPause, this.loop = n.loop, n.onChange && this.addEventListener("change", n.onChange), n.override && t.removeTweens(e)), n && n.paused ? this._paused = !0 : createjs.Tween._register(this, !0), n && null != n.position && this.setPosition(n.position, t.NONE)
        }
        var e = createjs.extend(t, createjs.EventDispatcher);
        t.NONE = 0, t.LOOP = 1, t.REVERSE = 2, t.IGNORE = {}, t._tweens = [], t._plugins = {}, t.get = function(e, n, i, r) {
            return r && t.removeTweens(e), new t(e, n, i)
        }, t.tick = function(e, n) {
            for (var i = t._tweens.slice(), r = i.length - 1; r >= 0; r--) {
                var o = i[r];
                n && !o.ignoreGlobalPause || o._paused || o.tick(o._useTicks ? 1 : e)
            }
        }, t.handleEvent = function(t) {
            "tick" == t.type && this.tick(t.delta, t.paused)
        }, t.removeTweens = function(e) {
            if (e.tweenjs_count) {
                for (var n = t._tweens, i = n.length - 1; i >= 0; i--) {
                    var r = n[i];
                    r._target == e && (r._paused = !0, n.splice(i, 1))
                }
                e.tweenjs_count = 0
            }
        }, t.removeAllTweens = function() {
            for (var e = t._tweens, n = 0, i = e.length; n < i; n++) {
                var r = e[n];
                r._paused = !0, r.target && (r.target.tweenjs_count = 0)
            }
            e.length = 0
        }, t.hasActiveTweens = function(e) {
            return e ? null != e.tweenjs_count && !!e.tweenjs_count : t._tweens && !!t._tweens.length
        }, t.installPlugin = function(e, n) {
            var i = e.priority;
            null == i && (e.priority = i = 0);
            for (var r = 0, o = n.length, a = t._plugins; r < o; r++) {
                var s = n[r];
                if (a[s]) {
                    for (var c = a[s], u = 0, l = c.length; u < l && !(i < c[u].priority); u++);
                    a[s].splice(u, 0, e)
                } else a[s] = [e]
            }
        }, t._register = function(e, n) {
            var i = e._target,
                r = t._tweens;
            if (n && !e._registered) i && (i.tweenjs_count = i.tweenjs_count ? i.tweenjs_count + 1 : 1), r.push(e), !t._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", t), t._inited = !0);
            else if (!n && e._registered) {
                i && i.tweenjs_count--;
                for (var o = r.length; o--;)
                    if (r[o] == e) {
                        r.splice(o, 1);
                        break
                    }
            }
            e._registered = n
        }, e.wait = function(t, e) {
            if (null == t || t <= 0) return this;
            var n = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: t,
                p0: n,
                e: this._linearEase,
                p1: n,
                v: e
            })
        }, e.to = function(t, e, n) {
            return (isNaN(e) || e < 0) && (e = 0), this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: n,
                p1: this._cloneProps(this._appendQueueProps(t))
            })
        }, e.call = function(t, e, n) {
            return this._addAction({
                f: t,
                p: e || [this],
                o: n || this._target
            })
        }, e.set = function(t, e) {
            return this._addAction({
                f: this._set,
                o: this,
                p: [t, e || this._target]
            })
        }, e.play = function(t) {
            return t || (t = this), this.call(t.setPaused, [!1], t)
        }, e.pause = function(t) {
            return t || (t = this), this.call(t.setPaused, [!0], t)
        }, e.setPosition = function(t, e) {
            t < 0 && (t = 0), null == e && (e = 1);
            var n = t,
                i = !1;
            if (n >= this.duration && (this.loop ? n %= this.duration : (n = this.duration, i = !0)), n == this._prevPos) return i;
            var r = this._prevPos;
            if (this.position = this._prevPos = n, this._prevPosition = t, this._target)
                if (i) this._updateTargetProps(null, 1);
                else if (this._steps.length > 0) {
                for (var o = 0, a = this._steps.length; o < a && !(this._steps[o].t > n); o++);
                var s = this._steps[o - 1];
                this._updateTargetProps(s, (this._stepPosition = n - s.t) / s.d)
            }
            return 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(n, n) : 1 == e && n < r ? (r != this.duration && this._runActions(r, this.duration), this._runActions(0, n, !0)) : this._runActions(r, n)), i && this.setPaused(!0), this.dispatchEvent("change"), i
        }, e.tick = function(t) {
            this._paused || this.setPosition(this._prevPosition + t)
        }, e.setPaused = function(e) {
            return this._paused === !!e ? this : (this._paused = !!e, t._register(this, !e), this)
        }, e.w = e.wait, e.t = e.to, e.c = e.call, e.s = e.set, e.toString = function() {
            return "[Tween]"
        }, e.clone = function() {
            throw "Tween can not be cloned."
        }, e._updateTargetProps = function(e, n) {
            var i, r, o, a, s, c;
            if (e || 1 != n) {
                if (this.passive = !!e.v, this.passive) return;
                e.e && (n = e.e(n, 0, 1, 1)), i = e.p0, r = e.p1
            } else this.passive = !1, i = r = this._curQueueProps;
            for (var u in this._initQueueProps) {
                null == (a = i[u]) && (i[u] = a = this._initQueueProps[u]), null == (s = r[u]) && (r[u] = s = a), o = a == s || 0 == n || 1 == n || "number" != typeof a ? 1 == n ? s : a : a + (s - a) * n;
                var l = !1;
                if (c = t._plugins[u])
                    for (var h = 0, d = c.length; h < d; h++) {
                        var p = c[h].tween(this, u, o, i, r, n, !!e && i == r, !e);
                        p == t.IGNORE ? l = !0 : o = p
                    }
                l || (this._target[u] = o)
            }
        }, e._runActions = function(t, e, n) {
            var i = t,
                r = e,
                o = -1,
                a = this._actions.length,
                s = 1;
            for (t > e && (i = e, r = t, o = a, a = s = -1);
                (o += s) != a;) {
                var c = this._actions[o],
                    u = c.t;
                (u == r || u > i && u < r || n && u == t) && c.f.apply(c.o, c.p)
            }
        }, e._appendQueueProps = function(e) {
            var n, i, r, o, a;
            for (var s in e)
                if (void 0 === this._initQueueProps[s]) {
                    if (i = this._target[s], n = t._plugins[s])
                        for (r = 0, o = n.length; r < o; r++) i = n[r].init(this, s, i);
                    this._initQueueProps[s] = this._curQueueProps[s] = void 0 === i ? null : i
                } else i = this._curQueueProps[s];
            for (var s in e) {
                if (i = this._curQueueProps[s], n = t._plugins[s])
                    for (a = a || {}, r = 0, o = n.length; r < o; r++) n[r].step && n[r].step(this, s, i, e[s], a);
                this._curQueueProps[s] = e[s]
            }
            return a && this._appendQueueProps(a), this._curQueueProps
        }, e._cloneProps = function(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e
        }, e._addStep = function(t) {
            return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
        }, e._addAction = function(t) {
            return t.t = this.duration, this._actions.push(t), this
        }, e._set = function(t, e) {
            for (var n in t) e[n] = t[n]
        }, createjs.Tween = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, n) {
            this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, this._registered = !1, n && (this._useTicks = n.useTicks, this.loop = n.loop, this.ignoreGlobalPause = n.ignoreGlobalPause, n.onChange && this.addEventListener("change", n.onChange)), t && this.addTween.apply(this, t), this.setLabels(e), n && n.paused ? this._paused = !0 : createjs.Tween._register(this, !0), n && null != n.position && this.setPosition(n.position, createjs.Tween.NONE)
        }
        var e = createjs.extend(t, createjs.EventDispatcher);
        e.addTween = function(t) {
            var e = arguments.length;
            if (e > 1) {
                for (var n = 0; n < e; n++) this.addTween(arguments[n]);
                return arguments[0]
            }
            return 0 == e ? null : (this.removeTween(t), this._tweens.push(t), t.setPaused(!0), t._paused = !1, t._useTicks = this._useTicks, t.duration > this.duration && (this.duration = t.duration), this._prevPos >= 0 && t.setPosition(this._prevPos, createjs.Tween.NONE), t)
        }, e.removeTween = function(t) {
            var e = arguments.length;
            if (e > 1) {
                for (var n = !0, i = 0; i < e; i++) n = n && this.removeTween(arguments[i]);
                return n
            }
            if (0 == e) return !1;
            for (var r = this._tweens, i = r.length; i--;)
                if (r[i] == t) return r.splice(i, 1), t.duration >= this.duration && this.updateDuration(), !0;
            return !1
        }, e.addLabel = function(t, e) {
            this._labels[t] = e;
            var n = this._labelList;
            if (n) {
                for (var i = 0, r = n.length; i < r && !(e < n[i].position); i++);
                n.splice(i, 0, {
                    label: t,
                    position: e
                })
            }
        }, e.setLabels = function(t) {
            this._labels = t || {}
        }, e.getLabels = function() {
            var t = this._labelList;
            if (!t) {
                t = this._labelList = [];
                var e = this._labels;
                for (var n in e) t.push({
                    label: n,
                    position: e[n]
                });
                t.sort(function(t, e) {
                    return t.position - e.position
                })
            }
            return t
        }, e.getCurrentLabel = function() {
            var t = this.getLabels(),
                e = this.position,
                n = t.length;
            if (n) {
                for (var i = 0; i < n && !(e < t[i].position); i++);
                return 0 == i ? null : t[i - 1].label
            }
            return null
        }, e.gotoAndPlay = function(t) {
            this.setPaused(!1), this._goto(t)
        }, e.gotoAndStop = function(t) {
            this.setPaused(!0), this._goto(t)
        }, e.setPosition = function(t, e) {
            var n = this._calcPosition(t),
                i = !this.loop && t >= this.duration;
            if (n == this._prevPos) return i;
            this._prevPosition = t, this.position = this._prevPos = n;
            for (var r = 0, o = this._tweens.length; r < o; r++)
                if (this._tweens[r].setPosition(n, e), n != this._prevPos) return !1;
            return i && this.setPaused(!0), this.dispatchEvent("change"), i
        }, e.setPaused = function(t) {
            this._paused = !!t, createjs.Tween._register(this, !t)
        }, e.updateDuration = function() {
            this.duration = 0;
            for (var t = 0, e = this._tweens.length; t < e; t++) {
                var n = this._tweens[t];
                n.duration > this.duration && (this.duration = n.duration)
            }
        }, e.tick = function(t) {
            this.setPosition(this._prevPosition + t)
        }, e.resolve = function(t) {
            var e = Number(t);
            return isNaN(e) && (e = this._labels[t]), e
        }, e.toString = function() {
            return "[Timeline]"
        }, e.clone = function() {
            throw "Timeline can not be cloned."
        }, e._goto = function(t) {
            var e = this.resolve(t);
            null != e && this.setPosition(e)
        }, e._calcPosition = function(t) {
            return t < 0 ? 0 : t < this.duration ? t : this.loop ? t % this.duration : this.duration
        }, createjs.Timeline = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            throw "Ease cannot be instantiated."
        }
        t.linear = function(t) {
            return t
        }, t.none = t.linear, t.get = function(t) {
            return t < -1 && (t = -1), t > 1 && (t = 1),
                function(e) {
                    return 0 == t ? e : t < 0 ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
                }
        }, t.getPowIn = function(t) {
            return function(e) {
                return Math.pow(e, t)
            }
        }, t.getPowOut = function(t) {
            return function(e) {
                return 1 - Math.pow(1 - e, t)
            }
        }, t.getPowInOut = function(t) {
            return function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
            }
        }, t.quadIn = t.getPowIn(2), t.quadOut = t.getPowOut(2), t.quadInOut = t.getPowInOut(2), t.cubicIn = t.getPowIn(3), t.cubicOut = t.getPowOut(3), t.cubicInOut = t.getPowInOut(3), t.quartIn = t.getPowIn(4), t.quartOut = t.getPowOut(4), t.quartInOut = t.getPowInOut(4), t.quintIn = t.getPowIn(5), t.quintOut = t.getPowOut(5), t.quintInOut = t.getPowInOut(5), t.sineIn = function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, t.sineOut = function(t) {
            return Math.sin(t * Math.PI / 2)
        }, t.sineInOut = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, t.getBackIn = function(t) {
            return function(e) {
                return e * e * ((t + 1) * e - t)
            }
        }, t.backIn = t.getBackIn(1.7), t.getBackOut = function(t) {
            return function(e) {
                return --e * e * ((t + 1) * e + t) + 1
            }
        }, t.backOut = t.getBackOut(1.7), t.getBackInOut = function(t) {
            return t *= 1.525,
                function(e) {
                    return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
        }, t.backInOut = t.getBackInOut(1.7), t.circIn = function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }, t.circOut = function(t) {
            return Math.sqrt(1 - --t * t)
        }, t.circInOut = function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, t.bounceIn = function(e) {
            return 1 - t.bounceOut(1 - e)
        }, t.bounceOut = function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, t.bounceInOut = function(e) {
            return e < .5 ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
        }, t.getElasticIn = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var r = e / n * Math.asin(1 / t);
                return -t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e)
            }
        }, t.elasticIn = t.getElasticIn(1, .3), t.getElasticOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var r = e / n * Math.asin(1 / t);
                return t * Math.pow(2, -10 * i) * Math.sin((i - r) * n / e) + 1
            }
        }, t.elasticOut = t.getElasticOut(1, .3), t.getElasticInOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                var r = e / n * Math.asin(1 / t);
                return (i *= 2) < 1 ? t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e) * -.5 : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - r) * n / e) * .5 + 1
            }
        }, t.elasticInOut = t.getElasticInOut(1, .3 * 1.5), createjs.Ease = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            throw "MotionGuidePlugin cannot be instantiated."
        }
        t.priority = 0, t._rotOffS, t._rotOffE, t._rotNormS, t._rotNormE, t.install = function() {
            return createjs.Tween.installPlugin(t, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
        }, t.init = function(t, e, n) {
            var i = t.target;
            return i.hasOwnProperty("x") || (i.x = 0), i.hasOwnProperty("y") || (i.y = 0), i.hasOwnProperty("rotation") || (i.rotation = 0), "rotation" == e && (t.__needsRot = !0), "guide" == e ? null : n
        }, t.step = function(e, n, i, r, o) {
            if ("rotation" == n && (e.__rotGlobalS = i, e.__rotGlobalE = r, t.testRotData(e, o)), "guide" != n) return r;
            var a, s = r;
            s.hasOwnProperty("path") || (s.path = []);
            var c = s.path;
            if (s.hasOwnProperty("end") || (s.end = 1), s.hasOwnProperty("start") || (s.start = i && i.hasOwnProperty("end") && i.path === c ? i.end : 0), s.hasOwnProperty("_segments") && s._length) return r;
            var u = c.length;
            if (!(u >= 6 && (u - 2) % 4 == 0)) throw "invalid 'path' data, please see documentation for valid paths";
            s._segments = [], s._length = 0;
            for (var l = 2; l < u; l += 4) {
                for (var h, d, p = c[l - 2], f = c[l - 1], m = c[l + 0], g = c[l + 1], v = c[l + 2], y = c[l + 3], _ = p, b = f, x = 0, w = [], M = 1; M <= 10; M++) {
                    var E = M / 10,
                        T = 1 - E;
                    h = T * T * p + 2 * T * E * m + E * E * v, d = T * T * f + 2 * T * E * g + E * E * y, x += w[w.push(Math.sqrt((a = h - _) * a + (a = d - b) * a)) - 1], _ = h, b = d
                }
                s._segments.push(x), s._segments.push(w), s._length += x
            }
            a = s.orient, s.orient = !0;
            var S = {};
            return t.calc(s, s.start, S), e.__rotPathS = Number(S.rotation.toFixed(5)), t.calc(s, s.end, S), e.__rotPathE = Number(S.rotation.toFixed(5)), s.orient = !1, t.calc(s, s.end, o), s.orient = a, s.orient ? (e.__guideData = s, t.testRotData(e, o), r) : r
        }, t.testRotData = function(t, e) {
            if (void 0 === t.__rotGlobalS || void 0 === t.__rotGlobalE) {
                if (t.__needsRot) return;
                void 0 !== t._curQueueProps.rotation ? t.__rotGlobalS = t.__rotGlobalE = t._curQueueProps.rotation : t.__rotGlobalS = t.__rotGlobalE = e.rotation = t.target.rotation || 0
            }
            if (void 0 !== t.__guideData) {
                var n = t.__guideData,
                    i = t.__rotGlobalE - t.__rotGlobalS,
                    r = t.__rotPathE - t.__rotPathS,
                    o = i - r;
                if ("auto" == n.orient) o > 180 ? o -= 360 : o < -180 && (o += 360);
                else if ("cw" == n.orient) {
                    for (; o < 0;) o += 360;
                    0 == o && i > 0 && 180 != i && (o += 360)
                } else if ("ccw" == n.orient) {
                    for (o = i - (r > 180 ? 360 - r : r); o > 0;) o -= 360;
                    0 == o && i < 0 && -180 != i && (o -= 360)
                }
                n.rotDelta = o, n.rotOffS = t.__rotGlobalS - t.__rotPathS, t.__rotGlobalS = t.__rotGlobalE = t.__guideData = t.__needsRot = void 0
            }
        }, t.tween = function(e, n, i, r, o, a, s, c) {
            var u = o.guide;
            if (void 0 == u || u === r.guide) return i;
            if (u.lastRatio != a) {
                var l = (u.end - u.start) * (s ? u.end : a) + u.start;
                switch (t.calc(u, l, e.target), u.orient) {
                    case "cw":
                    case "ccw":
                    case "auto":
                        e.target.rotation += u.rotOffS + u.rotDelta * a;
                        break;
                    case "fixed":
                    default:
                        e.target.rotation += u.rotOffS
                }
                u.lastRatio = a
            }
            return "rotation" != n || u.orient && "false" != u.orient ? e.target[n] : i
        }, t.calc = function(t, e, n) {
            if (void 0 == t._segments) throw "Missing critical pre-calculated information, please file a bug";
            void 0 == n && (n = {
                x: 0,
                y: 0,
                rotation: 0
            });
            for (var i = t._segments, r = t.path, o = t._length * e, a = i.length - 2, s = 0; o > i[s] && s < a;) o -= i[s], s += 2;
            var c = i[s + 1],
                u = 0;
            for (a = c.length - 1; o > c[u] && u < a;) o -= c[u], u++;
            var l = u / ++a + o / (a * c[u]);
            s = 2 * s + 2;
            var h = 1 - l;
            return n.x = h * h * r[s - 2] + 2 * h * l * r[s + 0] + l * l * r[s + 2], n.y = h * h * r[s - 1] + 2 * h * l * r[s + 1] + l * l * r[s + 3], t.orient && (n.rotation = 57.2957795 * Math.atan2((r[s + 1] - r[s - 1]) * h + (r[s + 3] - r[s + 1]) * l, (r[s + 0] - r[s - 2]) * h + (r[s + 2] - r[s + 0]) * l)), n
        }, createjs.MotionGuidePlugin = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var t = createjs.TweenJS = createjs.TweenJS || {};
        t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(),
    function() {
        "use strict";

        function t(t, e, n) {
            var i = BCubed.Cache.atlasJSON.frames["game/" + n + ".png"].frame,
                r = BCubed.Cache.atlasTexture.image.width,
                a = BCubed.Cache.atlasTexture.image.height,
                s = (i.x + 2) / r,
                c = (i.y + 2) / a,
                u = (i.w - 4) / r,
                l = (i.h - 4) / a,
                h = o[e];
            t.faceVertexUvs[0][h][0].set(s, 1 - c - l), t.faceVertexUvs[0][h][1].set(s, 1 - c), t.faceVertexUvs[0][h][2].set(s + u, 1 - c - l), t.faceVertexUvs[0][h + 1][0].set(s, 1 - c), t.faceVertexUvs[0][h + 1][1].set(s + u, 1 - c), t.faceVertexUvs[0][h + 1][2].set(s + u, 1 - c - l)
        }

        function e(e, n, i, r) {
            if ("player" === r && (r = "regular"), "bridge" === r) {
                var o = new THREE.PlaneGeometry(1, 1);
                t(o, "right", "bridge")
            } else {
                var o = new THREE.BoxGeometry(1, 1, 1);
                "spawn" === r ? (t(o, "top", "spawn"), r = "regular") : t(o, "top", r + "_top"), t(o, "left", r + "_sides"), t(o, "right", r + "_sides"), t(o, "front", r + "_sides"), t(o, "back", r + "_sides"), t(o, "bottom", r + "_bottom")
            }
            var a = new THREE.MeshBasicMaterial({
                    color: 16777215,
                    map: BCubed.Cache.atlasTexture,
                    transparent: !0
                }),
                s = new THREE.Mesh(o, a);
            return s.position.set(e, n, i), "bridge" === r && (s.position.y += .5, s.rotation.x = -Math.PI / 2, s.visible = !1, a.opacity = 0), s.frustumCulled = !1, s
        }

        function n(e, n, i) {
            var r = new THREE.BoxGeometry(.99, .99, .99);
            t(r, "top", "player_top"), t(r, "left", "player_sides"), t(r, "right", "player_sides"), t(r, "front", "player_sides"), t(r, "back", "player_sides"), t(r, "bottom", "player_bottom");
            var o = new THREE.MeshBasicMaterial({
                color: 16777215,
                map: BCubed.Cache.atlasTexture,
                combine: THREE.MixOperation,
                reflectivity: .75,
                transparent: !0
            });
            o.overdraw = 0;
            var a = new THREE.Mesh(r, o);
            return a.position.set(e, n, i), a.frustumCulled = !1, a
        }

        function i() {
            var t = new THREE.BoxGeometry(1.01, 1, 1.01),
                e = new THREE.MeshBasicMaterial({
                    color: 16777088,
                    transparent: !0,
                    opacity: .5
                }),
                n = new THREE.Mesh(t, e);
            return n.visible = !1, n.scale.y = 1e-5, n.frustumCulled = !1, n
        }

        function r(t, e, n, i) {
            t.visible = !0, t.position.copy(e.position), t.position.y -= .5, createjs.Tween.get(t.position).to({
                y: t.position.y + 10
            }, 1e3, createjs.Ease.quintIn), createjs.Tween.get(t.scale).to({
                y: 20
            }, 1e3, createjs.Ease.quintIn);
            var r = createjs.Tween.get(e.position).wait(750).to({
                y: e.position.y + 15
            }, 1250, createjs.Ease.cubicIn);
            n && r.call(n, null, i), BCubed.sound.play("beam", {
                delay: 1250
            })
        }
        var o = {
            right: 0,
            left: 2,
            top: 4,
            bottom: 6,
            front: 8,
            back: 10
        };
        BCubed.common = {
            applyTexture: t,
            createCube: e,
            createPlayer: n,
            createBeam: i,
            showBeam: r
        }
    }(),
    function() {
        "use strict";

        function t(t) {
            t.visible ? (t.visible = !1, t.image.style.transform = "scale(0, 0)") : t.free = !0
        }

        function e() {
            a = !0
        }

        function n() {
            for (var t = 0; t < o.length; t++)
                if (o[t].free) return o[t];
            return null
        }

        function i() {
            if (requestAnimationFrame(i), a && !(80 * Math.random() >= 3)) {
                var t = n();
                if (t) {
                    var e = 1 + Math.random();
                    t.image.style.left = Math.floor(Math.random() * window.innerWidth) + "px", t.image.style.top = Math.floor(Math.random() * window.innerHeight) + "px", t.image.style.transform = "scale(" + e + ", " + e + ")", t.free = !1, t.visible = !0
                }
            }
        }
        if (!0 === BCubed.loadGame) {
            for (var r = document.getElementById("bcubed-stars"), o = new Array(6), a = !1, s = 0; s < o.length; s++) {
                var c = document.createElement("img");
                0 === s && (c.onload = e), c.src = "images/menu/star.png", r.appendChild(c), o[s] = {
                    image: c,
                    free: !0,
                    visible: !1
                }, c.addEventListener("transitionend", t.bind(null, o[s]), !0)
            }
            window.addEventListener("load", i)
        }
    }(),
    function() {
        "use strict";

        function t(t, n, i) {
            return new Howl({
                src: ["sounds/" + t + ".mp3", "sounds/" + t + ".ogg"],
                preload: !1,
                html5: !0 === n,
                loop: !0 === i,
                onload: n ? void 0 : e
            })
        }

        function e() {
            if (0 === (l -= 1)) {
                BCubed.sound.onLoadComplete(), u.scrape_1.mute(!0), u.scrape_2.mute(!0);
                for (var t = 0; t < u.scrape_1._pool; t++) u.scrape_1.play();
                for (var t = 0; t < u.scrape_2._pool; t++) u.scrape_2.play()
            } else BCubed.sound.onLoadProgress(1 - l / Object.keys(u).length)
        }

        function n() {
            for (var t in u) u[t].load()
        }

        function i(e) {
            t = !e, Howler.mute(e);
            try {
                localStorage.setItem("BCubed.sound", Number(!e))
            } catch (t) {}
        }

        function r(t) {
            h = !t, u.menuMusic.mute(t), u.gameMusic.mute(t);
            try {
                localStorage.setItem("BCubed.music", Number(!t))
            } catch (t) {}
        }

        function o() {
            u.menuMusic.playing() || u.menuMusic.play(), u.gameMusic.stop()
        }

        function a() {
            u.menuMusic.stop(), u.gameMusic.playing() || u.gameMusic.play()
        }

        function s(t, e) {
            u.scrape_1.mute(!1), u.scrape_2.mute(!1), u[t].play()
        }

        function c() {
            document[d] ? Howler.mute(!0) : Howler.mute(!t)
        }
        if (!0 === BCubed.loadGame) {
            var u = {
                    beam: t("beam"),
                    bridge: t("bridge"),
                    drop: t("drop"),
                    lock: t("lock"),
                    scrape_1: t("scrape_1"),
                    scrape_2: t("scrape_2"),
                    teleport: t("teleport"),
                    gameMusic: t("game_music", !0, !0),
                    menuMusic: t("menu_music", !0, !0)
                },
                l = Object.keys(u).length - 2,
                h = parseInt(localStorage.getItem("BCubed.music")),
                t = parseInt(localStorage.getItem("BCubed.sound"));
            h = 0 !== h && 1 !== h || Boolean(h), t = 0 !== t && 1 !== t || Boolean(t), Howler.mute(!t);
            var d, p;
            void 0 !== document.hidden ? (d = "hidden", p = "visibilitychange") : void 0 !== document.msHidden ? (d = "msHidden", p = "msvisibilitychange") : void 0 !== document.webkitHidden && (d = "webkitHidden", p = "webkitvisibilitychange"), void 0 !== document.addEventListener && void 0 !== document[d] && document.addEventListener(p, c, !1), window.addEventListener("blur", function() {
                Howler.mute(!0)
            }), window.addEventListener("focus", function() {
                Howler.mute(!t)
            }), BCubed.sound = {
                sounds: u,
                onLoadProgress: function() {},
                onLoadComplete: function() {},
                load: n,
                muteAll: i,
                muteMusic: r,
                mutedAll: function() {
                    return !t
                },
                mutedMusic: function() {
                    return !h
                },
                playMenuMusic: o,
                playGameMusic: a,
                play: s
            }
        }
    }(),
    function() {
        "use strict";

        function t(t) {
            var n = t.key || e[t.keyCode];
            "Left" === n || "Up" === n || "Right" === n || "Down" === n ? n = "Arrow" + n : "Esc" === n ? n = "Escape" : " " === n && (n = "Spacebar");
            var i = "on" + n;
            BCubed.keyboard.keys[i] && (t.preventDefault(), BCubed.keyboard.keys[i](n))
        }
        if (!0 === BCubed.loadGame) {
            var e = {
                13: "Enter",
                27: "Escape",
                32: "Spacebar",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                65: "a",
                68: "d",
                83: "s",
                87: "w"
            };
            window.addEventListener("keydown", t), BCubed.keyboard = {
                keys: {}
            }
        }
    }(),
    function() {
        "use strict";

        function t(t) {
            var e = t.changedTouches[0];
            null === o && (o = e.identifier, i = e.pageX, r = e.pageY), t.preventDefault()
        }

        function e(t) {
            if (null !== o)
                for (var e = 0; e < t.changedTouches.length; e++) {
                    var n = t.changedTouches[e];
                    if (n.identifier === o) {
                        var a = n.pageX - i,
                            s = n.pageY - r;
                        (Math.abs(a) >= .09 * window.innerWidth || Math.abs(s) >= .09 * window.innerHeight) && (Math.abs(a) > 5 * Math.abs(s) || Math.abs(a) < 5 * Math.abs(s)) && (BCubed.touch.onSwipe(a, s), i = n.pageX, r = n.pageY);
                        break
                    }
                }
        }

        function n(t) {
            if (null !== o)
                for (var e = 0; e < t.changedTouches.length; e++)
                    if (t.changedTouches[e].identifier === o) {
                        o = null;
                        break
                    }
        }
        var i, r, o = null;
        BCubed.touch = {
            enable: function(i) {
                i.addEventListener("touchstart", t, {
                    passive: !1
                }), i.addEventListener("touchmove", e, {
                    passive: !1
                }), i.addEventListener("touchend", n, {
                    passive: !1
                }), document.addEventListener("gesturestart", function(t) {
                    t.preventDefault()
                })
            },
            onSwipe: function(t, e) {}
        }
    }(),
    function() {
        "use strict";

        function t(t) {
            return Math.floor(20 * createjs.Ease.quadIn(t) % 2)
        }

        function e(t, e, n, i, r) {
            this.name = t, this.width = e, this.height = n, this.board = i, this.players = r, this.movementQueue = [], this.startTime = -1, this.stopTime = -1, this.playerCubes = [], this.boardCubes = [], this.beamCubes = [], this._acceptingInput = 0, this._animating = 0, this.dirty = !0, this.moves = 0, this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(75, 1, .01, 100), this.initializeScene()
        }
        e.onFailed = function() {}, e.onWon = function() {}, e.PIECES_REGEX = {
            empty: /░░░░░░░░░░░░░░░░░░/,
            regular: /(\+\d|██)████████████████/,
            more: /(\+\d|██)██████\+(\d)████████/,
            teleport: /(\+\d|██)██████▲(\d)████████/,
            spawn: /(\+\d|██)██████▼(\d)████████/,
            lock: /(\+\d|██)██████L(\d)████████/,
            bridge_trigger: /(\+\d|██)██████b(\d)████████/,
            bridge: /▒▒▒▒▒▒▒▒B(\d)▒▒▒▒▒▒▒▒/,
            double: /(\+\d|██)██████==████████/,
            finish: /(\+\d|┏━)━━━┓┃ F(\d) ┃┗━━━━┛/,
            player: /(\+\d|╔═)═══╗║ ☻(\d) ║╚════╝/
        }, e.getPieceFromString = function(t, n, i) {
            var r = t % n * 7,
                o = 3 * Math.floor(t / n) + 1,
                a = i[o].substr(r, 6),
                s = i[o + 1].substr(r, 6),
                c = i[o + 2].substr(r, 6),
                u = a + s + c;
            for (var l in e.PIECES_REGEX) {
                var h = u.match(e.PIECES_REGEX[l]);
                if (h) {
                    var d = parseInt(h[2]),
                        p = parseInt(h[1]),
                        f = null;
                    return "bridge" === l || p >= 0 ? ("bridge" === l && (d = p, p = -1), f = l, l = "empty") : "double" === l && (f = "double_hit"), {
                        type: l,
                        hiddenType: f,
                        prevType: null,
                        id: isNaN(d) ? -1 : d,
                        group: isNaN(p) ? -1 : p
                    }
                }
            }
            throw new Error("Unknown piece: " + u)
        }, e.parse = function(t) {
            for (var n = t[0], i = (t[1].length + 1) / 7, r = (t.length - 1) / 3, o = [], a = new Array(i * r), s = 0; s < i * r; s++) {
                var c = e.getPieceFromString(s, i, t);
                a[s] = c, "player" === c.type && (o[Math.max(0, c.id)] = s)
            }
            return new e(n, i, r, a, o)
        }, e.load = function(t) {
            for (var n = e.parse(BCubed.LEVELS[t - 1]), i = 0; i < n.board.length; i++) {
                var r, o = n.board[i],
                    a = i % n.width - n.width / 2 + .5,
                    s = Math.floor(i / n.width) - n.height / 2 + .5;
                "empty" !== o.type || null !== o.hiddenType ? ("double" === o.type ? (r = BCubed.common.createCube(a, 0, s, o.type), o.group >= 0 && (r.visible = !1, r.material.opacity = 0)) : "empty" === o.type && "bridge" === o.hiddenType ? (r = BCubed.common.createCube(a, 0, s, o.hiddenType), r.visible = !1, r.material.opacity = 0) : "empty" === o.type && null !== o.hiddenType ? (r = BCubed.common.createCube(a, 5, s, o.hiddenType), r.visible = !1, r.material.opacity = 0) : r = BCubed.common.createCube(a, 0, s, o.hiddenType || o.type), n.boardCubes[i] = r, n.scene.add(r)) : n.boardCubes[i] = null
            }
            for (var i = 0; i < n.players.length; i++) n.playerCubes[i] = BCubed.common.createPlayer(n.getRenderX(n.players[i]), 1, n.getRenderZ(n.players[i])), n.scene.add(n.playerCubes[i]),
                n.beamCubes[i] = BCubed.common.createBeam(), n.scene.add(n.beamCubes[i]);
            return n.startTime = window.performance.now(), n
        }, e.prototype.initializeScene = function() {
            this.scene.add(new THREE.AmbientLight(16777215, 1)), this.camera.position.set(0, 10, 8), this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.lookAt(this.players)
        }, e.prototype.resize = function(t, e) {
            this.camera.aspect = t / e, this.camera.zoom = Math.max(5, 17 - Math.max(this.width, this.height)) / 5, t < e && (this.camera.zoom *= this.camera.aspect), this.camera.updateProjectionMatrix(), this.dirty = !0
        }, e.prototype.player0Finished = function() {
            return "finish" === this.board[this.players[0]].type
        }, e.prototype.playerCanMove = function(t) {
            var e = this.board[this.players[t]];
            return 0 === t ? "finish" !== e.type : !!this.player0Finished() || "lock" !== e.type
        }, e.prototype.move = function(t, e) {
            if (this.acceptingInput) {
                this.beforeMove(), t = Math.sign(t), e = Math.sign(e);
                for (var n = this.players.length - 1; n >= 0; n--) {
                    var i = this.players[n] % this.width + t,
                        r = Math.floor(this.players[n] / this.width) + e;
                    i >= 0 && i < this.width && r >= 0 && r < this.height && this.playerCanMove(n) && (this.players[n] = r * this.width + i)
                }
                this.movePlayerCubes(), BCubed.sound.play(t ? "scrape_1" : "scrape_2")
            }
        }, e.prototype.getX = function(t) {
            return t % this.width
        }, e.prototype.getZ = function(t) {
            return Math.floor(t / this.width)
        }, e.prototype.getRenderX = function(t) {
            return t % this.width - this.width / 2 + .5
        }, e.prototype.getRenderZ = function(t) {
            return Math.floor(t / this.width) - this.height / 2 + .5
        }, e.prototype.movePlayerCubes = function() {
            for (var t = 0; t < this.players.length; t++) {
                "empty" === this.board[this.players[t]].type && this.failed()
            }
            for (var t = 0; t < this.players.length; t++) {
                var e = this.getRenderX(this.players[t]),
                    n = this.getRenderZ(this.players[t]),
                    i = createjs.Tween.get(this.playerCubes[t].position).to({
                        x: e,
                        z: n
                    }, 125, createjs.Ease.quadIn);
                0 === t && i.call(this.afterMove, null, this)
            }
            this.startAnimation(), this.denyInput()
        }, e.prototype.beforeMove = function() {
            this.moves += 1;
            for (var t = 0; t < this.players.length; t++) {
                var e = this.board[this.players[t]];
                if ("double" === e.type) this.triggerDoublePiece2(this.players[t]);
                else {
                    if ("lock" === e.type && 0 !== t && !this.player0Finished()) continue;
                    "finish" !== e.type && ("bridge" === e.type ? this.pieceFlickerOut(this.players[t]) : this.pieceFallDown(this.players[t]), "spawn" === e.type && (e.hiddenType = "spawn"), e.prevType = e.type, e.type = "empty")
                }
            }
        }, e.prototype.afterMove = function() {
            for (var t = 0, e = !1, n = 0; n < this.players.length; n++) {
                var i = this.board[this.players[n]];
                "lock" === i.type && 0 === n ? BCubed.sound.play("lock") : "double" === i.type ? this.triggerDoublePiece1(this.players[n]) : "empty" === i.type ? this.playerFallDown(n) : "bridge_trigger" === i.type ? this.showBridge(i.id) : "more" === i.type ? this.showHiddenPieces(i.id) : "teleport" === i.type ? this.teleport(n) : "finish" === i.type && 1 === (t += 1) && n > 0 && (e = !0)
            }
            e ? this.failed() : t === this.players.length && this.finish(), -1 === this.stopTime && this.acceptInput(), this.stopAnimation()
        }, e.prototype.showBridge = function(t) {
            BCubed.sound.play("bridge");
            for (var e = 0; e < this.board.length; e++) {
                var n = this.board[e];
                if ("empty" === n.type && "bridge" === n.hiddenType && n.id < t) return
            }
            for (var e = 0; e < this.board.length; e++) {
                var n = this.board[e];
                "empty" === n.type && "bridge" === n.hiddenType && n.id === t && (n.type = n.hiddenType, n.hiddenType = null, this.boardCubes[e].visible = !0, this.boardCubes[e].material.opacity = 1)
            }
        }, e.prototype.showHiddenPieces = function(t) {
            for (var e = !0, n = 0; n < this.board.length; n++) {
                var i = this.board[n];
                if ("empty" === i.type && null !== i.hiddenType && i.group === t) {
                    i.type = i.hiddenType, i.hiddenType = null;
                    var r = this.boardCubes[n];
                    r.visible = !0;
                    var o = createjs.Tween.get(r.material).to({
                        opacity: 1
                    }, 250);
                    e && o.call(this.acceptInput, null, this), o = createjs.Tween.get(r.position).to({
                        y: 0
                    }, 1250, createjs.Ease.elasticOut), e && (o.call(this.stopAnimation, null, this), e = !1)
                }
            }
            BCubed.sound.play("drop"), this.denyInput(), this.startAnimation()
        }, e.prototype.triggerDoublePiece1 = function(t) {
            var e = this.boardCubes[t].geometry;
            BCubed.common.applyTexture(e, "top", "double_hit_top"), BCubed.common.applyTexture(e, "left", "double_hit_sides"), BCubed.common.applyTexture(e, "right", "double_hit_sides"), BCubed.common.applyTexture(e, "front", "double_hit_sides"), BCubed.common.applyTexture(e, "back", "double_hit_sides"), BCubed.common.applyTexture(e, "bottom", "double_hit_bottom"), e.uvsNeedUpdate = !0, this.dirty = !0
        }, e.prototype.triggerDoublePiece2 = function(t) {
            var e = this.board[t];
            e.type = e.hiddenType, e.hiddenType = null
        }, e.prototype.findTeleportSpawnPoint = function(t) {
            for (var e = this.board[t].id, n = 0; n < this.board.length; n++) {
                var i = this.board[n];
                if (("spawn" === i.type || "spawn" === i.hiddenType || "spawn" === i.prevType) && i.id === e) return n
            }
            return -1
        }, e.prototype.teleport = function(t) {
            var e = this.players[t];
            this.denyInput(), this.board[e].prevType = this.board[e].type, this.board[e].type = "empty", this.pieceFallDown(e), this.players[t] = this.findTeleportSpawnPoint(e);
            var n = this.getRenderX(this.players[t]),
                i = this.getRenderZ(this.players[t]),
                r = this.playerCubes[t];
            this.startAnimation();
            var o = createjs.Tween.get(r.material).wait(250).to({
                    opacity: 0
                }, 100).to({
                    opacity: 1
                }, 100),
                a = createjs.Tween.get(r.position).to({
                    y: 4
                }, 350, createjs.Ease.quadIn).set({
                    x: n,
                    z: i
                });
            "empty" === this.board[this.players[t]].type ? (a.to({
                y: -6
            }, 750, createjs.Ease.quadIn).call(this.failed, null, this), o.wait(400).to({
                opacity: 0
            }, 250)) : a.to({
                y: 1
            }, 450, createjs.Ease.bounceOut), a.call(this.stopAnimation, null, this).call(this.acceptInput, null, this), BCubed.sound.play("teleport")
        }, e.prototype.playerFallDown = function(t) {
            this.startAnimation();
            var e = this.playerCubes[t];
            createjs.Tween.get(e.position).to({
                y: -12
            }, 1500, createjs.Ease.quadIn), createjs.Tween.get(e.material).wait(1250).to({
                opacity: 0
            }, 250).call(this.stopAnimation, null, this)
        }, e.prototype.pieceFallDown = function(t) {
            this.startAnimation();
            var e = this.boardCubes[t];
            createjs.Tween.get(e.position).to({
                y: -18
            }, 1300, createjs.Ease.quadIn).call(this.stopAnimation, null, this), createjs.Tween.get(e.rotation).to({
                z: 4 * Math.PI
            }, 1300 + 300 * Math.random(), createjs.Ease.quadIn), createjs.Tween.get(e.material).wait(1e3).to({
                opacity: 0
            }, 250).call(this.hideCube, [e], this)
        }, e.prototype.pieceFlickerOut = function(e) {
            this.startAnimation();
            var n = this.boardCubes[e];
            createjs.Tween.get(n.material).to({
                opacity: 0
            }, 1e3, t).call(this.hideCube, [n], this).call(this.stopAnimation, null, this)
        }, e.prototype.hideCube = function(t) {
            t.visible = !1
        }, e.prototype.finish = function() {
            for (var t = 0; t < this.board.length; t++)
                if ("empty" !== this.board[t].type && "finish" !== this.board[t].type) return void this.won();
            this.won()
        }, e.prototype.failed = function() {
            this.stopTime = window.performance.now(), setTimeout(e.onFailed, 2e3)
        }, e.prototype.won = function() {
            this.stopTime = window.performance.now();
            for (var t = 0; t < this.players.length; t++) BCubed.common.showBeam(this.beamCubes[t], this.playerCubes[t], 0 === t ? this.stopAnimation : null, this);
            this.startAnimation(), setTimeout(e.onWon, 2e3)
        }, e.prototype.startAnimation = function() {
            this._animating += 1
        }, e.prototype.stopAnimation = function() {
            this._animating -= 1, 0 === this._animating && (this.dirty = !0)
        }, e.prototype.denyInput = function() {
            this._acceptingInput += 1
        }, e.prototype.acceptInput = function() {
            this._acceptingInput -= 1
        }, Object.defineProperties(e.prototype, {
            animating: {
                get: function() {
                    return this._animating > 0
                }
            },
            acceptingInput: {
                get: function() {
                    return 0 === this._acceptingInput
                }
            },
            playTime: {
                get: function() {
                    return ((-1 !== this.stopTime ? this.stopTime : window.performance.now()) - this.startTime) / 1e3
                }
            }
        }), BCubed.Level = e
    }(),
    function() {
        "use strict";
        BCubed.LEVELS = [
            ["LEVEL: 1", 
            
                        "░░░░░░ ░░░░░░ ░░░░░░ ░░░░░░ ░░░░░░",

                        "░░░░░░ ░░░░░░ ░░░░░░ ░░░░░░ ░░░░░░",

                        "░░░░░░ ░░░░░░ ░░░░░░ ░░░░░░ ░░░░░░",
                    
                        "░░░░░░ ╔════╗ ██████ ┏━━━━┓ ░░░░░░",
                    
                        "░░░░░░ ║ ☻0 ║ ██████ ┃ F0 ┃ ░░░░░░",
                    
                        "░░░░░░ ╚════╝ ██████ ┗━━━━┛ ░░░░░░",
                    
                        "░░░░░░ ░░░░░░ ██████ ░░░░░░ ░░░░░░",

                        "░░░░░░ ░░░░░░ ██████ ░░░░░░ ░░░░░░",

                        "░░░░░░ ░░░░░░ ██████ ░░░░░░ ░░░░░░"],


            ["LEVEL: 2", "xxxxxx",],
            ["LEVEL: 3", "xxxxxx",],
            ["LEVEL: 4", "xxxxxx",],
            ["LEVEL: 5", "xxxxxx",],
            ["LEVEL: 6", "xxxxxx",],
            ["LEVEL: 7", "xxxxxx",],
            ["LEVEL: 8", "xxxxxx",],
            ["LEVEL: 9", "xxxxxx",],
            ["LEVEL: 10", "xxxxxx",]
        
        ]
    }(),
    function() {
        "use strict";

        function t() {
            this.animating = !0, this.dirty = !1, this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(75, 1, .01, 100), this.scene.add(new THREE.AmbientLight(16777215, 1)), this.camera.position.set(0, 10, 8), this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.lookAt(this.player), this.cubes = new Array(343);
            for (var t = 0; t < this.cubes.length; t++) {
                var e = t % 7,
                    n = Math.floor(t / 7 / 7),
                    i = Math.floor(t / 7) % 7,
                    r = BCubed.common.createCube(3 - e, n - 3, i - 3, "regular");
                this.scene.add(r), this.cubes[t] = r
            }
            this.player = BCubed.common.createPlayer(-3, 4, 3), this.scene.add(this.player), this.beam = BCubed.common.createBeam(), this.scene.add(this.beam), this.layerProgress = 0, this.layerIndex = 6, this.interval = setInterval(this.step.bind(this), 12 * this.layerIndex), this.endTimeout = -1
        }
        var e = [
            [48, 47, 46, 45, 44, 43, 42, 35, 28, 21, 14, 7, 0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 40, 39, 38, 37, 36, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33, 32, 31, 30, 23, 16, 17, 18, 25, 24],
            [24, 23, 16, 17, 18, 25, 32, 31, 30, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 36, 35, 28, 21, 14, 7, 0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 42],
            [42, 35, 28, 21, 14, 7, 0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 36, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 30, 23, 16, 17, 18, 25, 32, 31, 24],
            [24, 23, 16, 17, 18, 25, 32, 31, 30, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 36, 35, 28, 21, 14, 7, 0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 42],
            [42, 35, 28, 21, 14, 7, 0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 36, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 30, 23, 16, 17, 18, 25, 32, 31, 24],
            [24, 23, 16, 17, 18, 25, 32, 31, 30, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 36, 35, 28, 21, 14, 7, 0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 42],
            [42, 35, 28, 21, 14, 7, 0, 1, 2, 3, 4, 5, 6, 13, 20, 27, 34, 41, 48, 47, 46, 45, 44, 43, 36, 29, 22, 15, 8, 9, 10, 11, 12, 19, 26, 33, 40, 39, 38, 37, 30, 23, 16, 17, 18, 25, 32, 31, 24]
        ];
        t.prototype.onEnd = function() {}, t.prototype.end = function() {
            this.animationEnd(), -1 !== this.endTimeout && (clearTimeout(this.endTimeout), this.endTimeout = -1)
        }, t.prototype.animationEnd = function() {
            this.animating = !1, -1 !== this.interval && (clearInterval(this.interval), this.interval = -1), -1 === this.endTimeout && (this.endTimeout = setTimeout(this.onEnd, 1e3))
        }, t.prototype.resize = function(t, e) {
            this.camera.aspect = t / e, this.camera.zoom = .75, t < e && (this.camera.zoom *= this.camera.aspect), this.camera.updateProjectionMatrix(), this.dirty = !0
        }, t.prototype.step = function() {
            var t = e[6 - this.layerIndex];
            this.layerProgress < t.length ? (this.layerProgress + 1 < t.length ? (this.player.position.copy(this.cubes[t[this.layerProgress + 1] + 7 * this.layerIndex * 7].position), this.player.position.y += 1) : this.player.position.y -= 1, 0 !== this.layerIndex || this.layerProgress !== t.length - 1 ? this.cubes[t[this.layerProgress] + 7 * this.layerIndex * 7].visible = !1 : (this.player.position.y += 1, BCubed.common.showBeam(this.beam, this.player, this.animationEnd, this)), this.layerProgress += 1) : this.layerIndex >= 1 ? (this.layerIndex -= 1, this.layerProgress = 0, clearInterval(this.interval), this.interval = setInterval(this.step.bind(this), 6 * (this.layerIndex + 3)), this.player.position.copy(this.cubes[e[6 - this.layerIndex][this.layerProgress] + 7 * this.layerIndex * 7].position), this.player.position.y += 1) : -1 !== this.interval && (clearInterval(this.interval), this.interval = -1)
        }, BCubed.Outro = t
    }(),
    function() {
        "use strict";

        function t(t) {
            var e = Math.floor(t) % 60,
                n = Math.floor(t / 60);
            return (n < 10 ? "0" : "") + n + ":" + (e < 10 ? "0" : "") + e
        }

        function e(t, e, n) {
            n && (e = e.bind(n)), document.querySelector(t).addEventListener("click", e)
        }

        function n(t) {
            t.classList.add("bcubed-visible")
        }

        function i(t) {
            t.classList.remove("bcubed-visible")
        }

        function r(t) {
            return t.create && t.create(), t
        }

        function o(t, e) {
            if (h) {
                h.exit && h.exit();
                for (var n in h) "key:" === n.substr(0, 4) && (BCubed.keyboard.keys["on" + n.slice(4)] = null)
            }
            if (h = t) {
                h.enter && h.enter.apply(h, e || []);
                for (var n in h) "key:" === n.substr(0, 4) && (BCubed.keyboard.keys["on" + n.slice(4)] = h[n].bind(h))
            }
        }

        function a() {
            var t = Math.min(window.innerWidth / 600, window.innerHeight / 550, 1);
            u.style.transform = "scale(" + t + ", " + t + ")"
        }
        if (!0 === BCubed.loadGame) {
            var s = document.getElementById("bcubed-game"),
                c = document.getElementById("bcubed-menu"),
                u = document.getElementById("bcubed-menu-scale"),
                l = c.getElementsByClassName("bcubed-page"),
                h = null,
                d = r({
                    create: function() {
                        this.levelTimeElement = document.getElementById("bcubed-level-time"), this.levelNameElement = document.getElementById("bcubed-level-name"), this.lastRenderSeconds = 0, e("#bcubed-game button.bcubed-level-menu", function() {
                            this.onLevelMenu()
                        }, this)
                    },
                    enter: function(t) {
                        this.level = t, this.levelNameElement.textContent = t.name
                    },
                    onLevelMenu: function() {},
                    "key:Escape": function() {
                        this.onLevelMenu()
                    },
                    update: function() {
                        var t = this.level.playTime,
                            e = Math.floor(t) % 60;
                        if (e !== this.lastRenderSeconds) {
                            var n = Math.floor(t / 60);
                            this.levelTimeElement.textContent = (n < 10 ? "0" : "") + n + ":" + (e < 10 ? "0" : "") + e, this.lastRenderSeconds = e
                        }
                    }
                }),
                p = r({
                    create: function() {
                        var t = c.querySelector(".bcubed-page.bcubed-level-won");
                        this.titleElement = t.querySelector("h1"), this.levelTimeElement = t.querySelector(".bcubed-level-won-time"), this.overallTimeElement = null, this.button = null, this.buttonCallback = null, e("button.bcubed-page.bcubed-level-won.bcubed-level-menu", function() {
                            this.onLevelMenu()
                        }, this)
                    },
                    enter: function(e, n, i, r) {
                        this.buttonCallback = this.onNextLevel.bind(this);
                        var o = c.querySelector(".bcubed-page.bcubed-level-won");
                        r ? (this.overallTimeElement = o.querySelector(".bcubed-game-completed .bcubed-level-won-overall-time"), this.button = o.querySelector(".bcubed-game-completed button"), o.querySelector(".bcubed-game-completed").style.display = "block", o.querySelector(".bcubed-level-completed").style.display = "none") : (this.overallTimeElement = o.querySelector(".bcubed-level-completed .bcubed-level-won-overall-time"), this.button = o.querySelector(".bcubed-level-completed button"), o.querySelector(".bcubed-game-completed").style.display = "none", o.querySelector(".bcubed-level-completed").style.display = "block"), this.button.addEventListener("click", this.buttonCallback), this.titleElement.textContent = e, this.levelTimeElement.textContent = t(n), this.overallTimeElement.textContent = t(i)
                    },
                    onNextLevel: function() {},
                    onLevelMenu: function() {},
                    "key:Spacebar": function() {
                        this.onNextLevel()
                    },
                    "key:Enter": function() {
                        this.onNextLevel()
                    },
                    "key:Escape": function() {
                        this.onLevelMenu()
                    },
                    exit: function() {
                        this.button.removeEventListener("click", this.buttonCallback)
                    }
                }),
                f = r({
                    create: function() {
                        e(".bcubed-page.bcubed-level-list button.bcubed-back", function() {
                            this.onBack()
                        }, this);
                        for (var t = c.querySelector(".bcubed-page.bcubed-level-list ul"), n = "", i = 0; i < BCubed.LEVELS.length; i++) n += "<li><button>" + (i + 1) + "</button></li>";
                        t.innerHTML += n;
                        for (var r = c.querySelectorAll(".bcubed-page.bcubed-level-list ul button"), i = 0; i < BCubed.LEVELS.length; i++) r[i].addEventListener("click", this.selectLevel.bind(this, i))
                    },
                    enter: function(t) {
                        this.lastLevel = 0;
                        for (var e = c.querySelectorAll(".bcubed-page.bcubed-level-list li button"), n = 1; n < t.length; n++) t[n - 1] < 0 ? e[n].classList.add("bcubed-disabled") : (e[n].classList.remove("bcubed-disabled"), this.lastLevel = n)
                    },
                    selectLevel: function(t) {
                        this.onSelectLevel(t + 1)
                    },
                    onSelectLevel: function() {},
                    onBack: function() {},
                    "key:Spacebar": function() {
                        this.onSelectLevel(this.lastLevel + 1)
                    },
                    "key:Enter": function() {
                        this.onSelectLevel(this.lastLevel + 1)
                    },
                    "key:Escape": function() {
                        this.onBack()
                    }
                }),
                m = r({
                    create: function() {
                        e("button.bcubed-back.bcubed-page.bcubed-game-won", function() {
                            this.onBack()
                        }, this)
                    },
                    enter: function() {
                        this.ui = document.getElementsByClassName("bcubed-game-ui");
                        for (var t = 0; t < this.ui.length; t++) this.ui[t].style.visibility = "hidden"
                    },
                    onBack: function() {},
                    "key:Spacebar": function() {
                        this.onBack()
                    },
                    "key:Enter": function() {
                        this.onBack()
                    },
                    exit: function() {
                        var t = this.ui;
                        setTimeout(function() {
                            for (var e = 0; e < t.length; e++) t[e].style.visibility = "visible"
                        }, 500)
                    }
                }),
                g = r({
                    create: function() {
                        e(".bcubed-page.bcubed-title button.bcubed-start", function() {
                            this.onStart()
                        }, this)
                    },
                    onStart: function() {},
                    "key:Spacebar": function() {
                        this.onStart()
                    },
                    "key:Enter": function() {
                        this.onStart()
                    }
                });
            e("#bcubed-music-toggle", function() {
                this.classList.toggle("bcubed-off"), BCubed.menu.onMusicToggle(!this.classList.contains("bcubed-off"))
            }), BCubed.sound.mutedMusic() && document.getElementById("bcubed-music-toggle").classList.add("bcubed-off"), e("#bcubed-sound-toggle", function() {
                this.classList.toggle("bcubed-off"), BCubed.menu.onSoundToggle(!this.classList.contains("bcubed-off"))
            }), BCubed.sound.mutedAll() && document.getElementById("bcubed-sound-toggle").classList.add("bcubed-off"), window.addEventListener("resize", a), a(), BCubed.menu = {
                show: function(t) {
                    s.classList.remove("bcubed-visible"), c.classList.add("bcubed-visible");
                    for (var e = 0; e < l.length; e++) l[e].classList.contains(t) ? n(l[e]) : i(l[e])
                },
                hide: function() {
                    o(null), c.classList.remove("bcubed-visible");
                    for (var t = 0; t < l.length; t++) i(l[t]);
                    s.classList.add("bcubed-visible")
                },
                inGame: function() {
                    return h === d
                },
                levelPage: d,
                showLevel: function(t) {
                    BCubed.menu.hide(), o(d, [t])
                },
                levelWonPage: p,
                showLevelWon: function(t, e, n, i) {
                    o(p, [t, e, n, i]), BCubed.menu.show("bcubed-level-won")
                },
                levelListPage: f,
                showLevelList: function(t) {
                    o(f, [t]), BCubed.menu.show("bcubed-level-list")
                },
                gameWonPage: m,
                showGameWon: function() {
                    o(m), BCubed.menu.show("bcubed-game-won"), s.classList.add("bcubed-visible")
                },
                titlePage: g,
                showTitle: function() {
                    o(g), BCubed.menu.show("bcubed-title")
                },
                update: function() {
                    h && h.update && h.update()
                },
                onNextLevel: function() {},
                updateLevel: function(t) {},
                onMusicToggle: function() {},
                onSoundToggle: function() {}
            }
        }
    }(),
    function() {
        "use strict";

        function t(t) {
            try {
                localStorage.setItem("BCubed.times", JSON.stringify(t))
            } catch (t) {}
        }

        function e() {
            if ((m += 1) === f) {
                var t = parseInt(window.location.search.substr(6));
                t >= 1 && t <= BCubed.LEVELS.length ? n(t) : (BCubed.menu.showTitle(), BCubed.sound.playMenuMusic()), BCubed.loading.hide()
            } else BCubed.loading.progress((m + 1) / f)
        }

        function n(t) {
            h = t, BCubed.level = l = BCubed.Level.load(t), l.resize(window.innerWidth, window.innerHeight), BCubed.keyboard.keys.onArrowLeft = l.move.bind(l, -1, 0), BCubed.keyboard.keys.onArrowUp = l.move.bind(l, 0, -1), BCubed.keyboard.keys.onArrowRight = l.move.bind(l, 1, 0), BCubed.keyboard.keys.onArrowDown = l.move.bind(l, 0, 1), BCubed.keyboard.keys.ona = l.move.bind(l, -1, 0), BCubed.keyboard.keys.onw = l.move.bind(l, 0, -1), BCubed.keyboard.keys.ond = l.move.bind(l, 1, 0), BCubed.keyboard.keys.ons = l.move.bind(l, 0, 1), BCubed.touch.onSwipe = function(t, e) {
                Math.abs(t) > Math.abs(e) ? l.move(t, 0) : l.move(0, e)
            }, BCubed.menu.showLevel(l), BCubed.sound.playGameMusic()
        }

        function i() {
            setTimeout(function() {
                u.setSize(window.innerWidth, window.innerHeight), l && l.resize(window.innerWidth, window.innerHeight)
            }, 200)
        }

        function r() {
            l && (l.animating || l.dirty) && (u.render(l.scene, l.camera), l.dirty = !1), BCubed.menu.update(), requestAnimationFrame(r)
        }
        if (!0 === BCubed.loadGame) {
            window.unlockAllLevels = function() {
                for (var e = 0; e < o.length; e++) o[e] = 0;
                t(o)
            }, createjs.Ticker.timingMode = createjs.Ticker.RAF;
            for (var o = new Array(BCubed.LEVELS.length), a = 0; a < o.length; a++) o[a] = -1;
            ! function(t) {
                try {
                    for (var e = JSON.parse(localStorage.getItem("BCubed.times")), n = 0; n < BCubed.LEVELS.length; n++) "number" == typeof e[n] && (t[n] = e[n])
                } catch (t) {}
            }(o);
            var s = window.innerWidth,
                c = window.innerHeight,
                u = new THREE.WebGLRenderer({
                    alpha: !0,
                    clearColor: 0,
                    clearAlpha: 0,
                    canvas: document.getElementById("bcubed-scene")
                });
            u.setPixelRatio(Math.max(2, window.devicePixelRatio)), u.setSize(s, c), u.sortObjects = !1, BCubed.renderer = u, BCubed.touch.enable(u.domElement);
            var l, h, d = new THREE.FileLoader,
                p = new THREE.TextureLoader,
                f = 4 + Object.keys(BCubed.sound.sounds).length - 2,
                m = 0;
            window.addEventListener("load", e), BCubed.sound.onLoadProgress = e, BCubed.sound.onLoadComplete = e, THREE.DefaultLoadingManager.onProgress = e, THREE.DefaultLoadingManager.onLoad = e, BCubed.sound.load(), d.load("images/game.json", function(t) {
                BCubed.Cache.atlasJSON = JSON.parse(t)
            }), BCubed.Cache.atlasTexture = p.load("images/game.png"), BCubed.loading.progress((m + 1) / f), BCubed.Level.onFailed = function() {
                BCubed.menu.inGame() && n(h)
            }, BCubed.Level.onWon = function() {
                if (BCubed.menu.inGame()) {
                    var e = Math.floor(l.playTime);
                    (o[h - 1] <= 0 || o[h - 1] > l.playTime) && (o[h - 1] = e, t(o));
                    for (var n = 0, i = 0; i < o.length; i++) o[i] >= 0 && (n += o[i]);
                    BCubed.menu.showLevelWon("LEVEL " + h, e, n, 30 === h)
                }
            }, BCubed.menu.levelWonPage.onLevelMenu = function() {
                BCubed.menu.showLevelList(o), BCubed.sound.playMenuMusic()
            }, BCubed.menu.levelPage.onLevelMenu = function() {
                BCubed.menu.showLevelList(o), BCubed.sound.playMenuMusic()
            }, BCubed.menu.levelWonPage.onNextLevel = function() {
                h === BCubed.LEVELS.length ? (BCubed.menu.showGameWon(), BCubed.level = l = new BCubed.Outro, l.resize(window.innerWidth, window.innerHeight), l.onEnd = BCubed.menu.gameWonPage.onBack) : (n(h + 1), window.cmgGameEvent ? window.cmgGameEvent("start", String(h)) : window.parent.cmgGameEvent && window.parent.cmgGameEvent("start", String(h)))
            }, BCubed.menu.levelListPage.onSelectLevel = function(t) {
                (1 === t || o[t - 2] >= 0) && (n(t), window.cmgGameEvent ? window.cmgGameEvent("start", String(t)) : window.parent.cmgGameEvent && window.parent.cmgGameEvent("start", String(t)))
            }, BCubed.menu.levelListPage.onBack = function(t) {
                BCubed.menu.showTitle()
            }, BCubed.menu.gameWonPage.onBack = function(t) {
                l.end(), BCubed.level = l = null, BCubed.menu.showTitle()
            }, BCubed.menu.titlePage.onStart = function(t) {
                o[1] >= 0 ? BCubed.menu.showLevelList(o) : n(1), window.cmgGameEvent ? window.cmgGameEvent("start") : window.parent.cmgGameEvent && window.parent.cmgGameEvent("start")
            }, BCubed.menu.onMusicToggle = function(t) {
                BCubed.sound.muteMusic(!t)
            }, BCubed.menu.onSoundToggle = function(t) {
                BCubed.sound.muteAll(!t)
            }, window.addEventListener("resize", i), window.scrollTo(0, 1), r()
        }
    }();