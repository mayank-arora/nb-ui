import { Menu, Tooltip, Dropdown, Modal, Upload, Input } from 'antd';
import axios from 'axios';
import React, { useState, useRef, useEffect, useCallback, createContext, useContext } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var img$i = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='nonzero' d='M25.053 4H6.632A2.64 2.64 0 0 0 4 6.632v18.42a2.64 2.64 0 0 0 2.632 2.632h18.42a2.64 2.64 0 0 0 2.632-2.631V6.632A2.64 2.64 0 0 0 25.053 4zM11.895 22.421H9.263v-9.21h2.632v9.21zm5.263 0h-2.632V9.263h2.632v13.158zm5.263 0H19.79v-5.263h2.632v5.263z'/%3e%3c/svg%3e";

var img$h = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M26.904 5.215L5.215 26.904A1.992 1.992 0 0 1 5 26V7a2 2 0 0 1 2-2h19c.325 0 .632.078.904.215zm1.09 1.621c.004.054.006.109.006.164v19a2 2 0 0 1-2 2H7c-.055 0-.11-.002-.164-.007L27.993 6.836zm-12.48 5.005l-3.88-3.846-3.879 3.846h2.217v3.297h3.325V11.84h2.217zm9.777 9.111h-2.217v-3.297h-3.325v3.297h-2.217l3.88 3.846 3.879-3.846z'/%3e%3c/svg%3e";

var img$g = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M26.904 5.215L5.215 26.904A1.992 1.992 0 0 1 5 26V7a2 2 0 0 1 2-2h19c.325 0 .632.078.904.215zm1.09 1.621c.004.054.006.109.006.164v19a2 2 0 0 1-2 2H7c-.055 0-.11-.002-.164-.007L27.993 6.836zm-12.48 5.005l-3.88-3.846-3.879 3.846h2.217v3.297h3.325V11.84h2.217zm9.777 9.111h-2.217v-3.297h-3.325v3.297h-2.217l3.88 3.846 3.879-3.846z'/%3e%3c/svg%3e";

var img$f = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M18.996 9.571h7.722c.446 0 .607.047.77.134.163.087.291.215.378.378.088.163.134.325.134.77v14.58c0 .445-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.133-.77.133h-7.722c-.446 0-.607-.046-.77-.133a.909.909 0 0 1-.378-.378c-.087-.163-.134-.325-.134-.77v-14.58c0-.445.047-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.087.324-.134.77-.134zm1.645 12.572c-.223 0-.304.023-.385.067a.454.454 0 0 0-.19.189c-.043.081-.066.162-.066.385v1.004c0 .222.023.303.067.385a.454.454 0 0 0 .189.189c.081.043.162.067.385.067h4.432c.223 0 .304-.024.385-.067a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.384v-1.004c0-.223-.023-.304-.066-.385a.454.454 0 0 0-.19-.19c-.081-.043-.162-.066-.385-.066h-4.432zM5.281 5h7.723c.446 0 .607.046.77.134.163.087.291.215.378.378.087.163.134.324.134.77V20.86c0 .446-.047.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.134-.77.134H5.282c-.446 0-.607-.047-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V6.28c0-.445.046-.606.134-.77a.909.909 0 0 1 .378-.377c.163-.088.324-.134.77-.134zm1.646 2.286c-.223 0-.304.023-.385.066a.454.454 0 0 0-.19.19c-.043.081-.066.162-.066.385V8.93c0 .223.023.304.066.386a.454.454 0 0 0 .19.189c.081.043.162.066.385.066h4.432c.223 0 .304-.023.385-.066a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.385V7.927c0-.223-.023-.304-.067-.385a.454.454 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066H6.927z'/%3e%3c/svg%3e";

var img$e = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='nonzero' d='M25.053 4H6.632A2.64 2.64 0 0 0 4 6.632v18.42a2.64 2.64 0 0 0 2.632 2.632h18.42a2.64 2.64 0 0 0 2.632-2.631V6.632A2.64 2.64 0 0 0 25.053 4zM11.895 22.421H9.263v-9.21h2.632v9.21zm5.263 0h-2.632V9.263h2.632v13.158zm5.263 0H19.79v-5.263h2.632v5.263z'/%3e%3c/svg%3e";

var img$d = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath d='M0 0h32v32H0z'/%3e %3cpath fill='white' d='M18.996 9.571h7.722c.446 0 .607.047.77.134.163.087.291.215.378.378.088.163.134.325.134.77v14.58c0 .445-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.133-.77.133h-7.722c-.446 0-.607-.046-.77-.133a.909.909 0 0 1-.378-.378c-.087-.163-.134-.325-.134-.77v-14.58c0-.445.047-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.087.324-.134.77-.134zm1.645 12.572c-.223 0-.304.023-.385.067a.454.454 0 0 0-.19.189c-.043.081-.066.162-.066.385v1.004c0 .222.023.303.067.385a.454.454 0 0 0 .189.189c.081.043.162.067.385.067h4.432c.223 0 .304-.024.385-.067a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.384v-1.004c0-.223-.023-.304-.066-.385a.454.454 0 0 0-.19-.19c-.081-.043-.162-.066-.385-.066h-4.432zM5.281 5h7.723c.446 0 .607.046.77.134.163.087.291.215.378.378.087.163.134.324.134.77V20.86c0 .446-.047.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.134-.77.134H5.282c-.446 0-.607-.047-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V6.28c0-.445.046-.606.134-.77a.909.909 0 0 1 .378-.377c.163-.088.324-.134.77-.134zm1.646 2.286c-.223 0-.304.023-.385.066a.454.454 0 0 0-.19.19c-.043.081-.066.162-.066.385V8.93c0 .223.023.304.066.386a.454.454 0 0 0 .19.189c.081.043.162.066.385.066h4.432c.223 0 .304-.023.385-.066a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.385V7.927c0-.223-.023-.304-.067-.385a.454.454 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066H6.927z'/%3e %3c/g%3e%3c/svg%3e";

var img$c = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.317 0h22.019v22.209H.317z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(6.91 5)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='white' d='M20.764 0H1.89C1.025 0 .317.714.317 1.586v19.037c0 .872.708 1.586 1.573 1.586h18.874c.865 0 1.572-.714 1.572-1.586V1.586C22.336.714 21.63 0 20.764 0' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='%232C496B' d='M18.236 9.362c1.95 0 3.54 1.603 3.54 3.57 0 1.967-1.59 3.569-3.54 3.569s-3.538-1.602-3.538-3.57c0-1.966 1.588-3.569 3.538-3.569M25.314 24.036H11.159v-1.19c0-2.38 4.718-3.569 7.077-3.569 2.36 0 7.078 1.19 7.078 3.57v1.19z'/%3e %3cpath fill='white' d='M3 10.578h3.293V8.942H3zM3 16.923h3.293v-1.636H3zM3 23.268h3.293v-1.635H3z'/%3e %3c/g%3e%3c/svg%3e";

var img$b = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.317 0h22.019v22.209H.317z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(6.91 5)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='%232C496B' d='M20.764 0H1.89C1.025 0 .317.714.317 1.586v19.037c0 .872.708 1.586 1.573 1.586h18.874c.865 0 1.572-.714 1.572-1.586V1.586C22.336.714 21.63 0 20.764 0' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='white' d='M18.236 9.362c1.95 0 3.54 1.603 3.54 3.57 0 1.967-1.59 3.569-3.54 3.569s-3.538-1.602-3.538-3.57c0-1.966 1.588-3.569 3.538-3.569M25.314 24.036H11.159v-1.19c0-2.38 4.718-3.569 7.077-3.569 2.36 0 7.078 1.19 7.078 3.57v1.19z'/%3e %3cpath fill='%232C496B' d='M3 10.578h3.293V8.942H3zM3 16.923h3.293v-1.636H3zM3 23.268h3.293v-1.635H3z'/%3e %3c/g%3e%3c/svg%3e";

var img$a = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.6 6H6.4C5.08 6 4.012 7.08 4.012 8.4L4 22.8C4 24.12 5.08 25.2 6.4 25.2H25.6C26.92 25.2 28 24.12 28 22.8V8.4C28 7.08 26.92 6 25.6 6ZM25.6 10.8L16 16.8L6.4 10.8V8.4L16 14.4L25.6 8.4V10.8Z' fill='white'/%3e%3c/svg%3e";

var img$9 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.6 6H6.4C5.08 6 4.012 7.08 4.012 8.4L4 22.8C4 24.12 5.08 25.2 6.4 25.2H25.6C26.92 25.2 28 24.12 28 22.8V8.4C28 7.08 26.92 6 25.6 6ZM24.4 22.8H7.6C6.94 22.8 6.4 22.26 6.4 21.6V10.8L14.728 16.008C15.508 16.5 16.492 16.5 17.272 16.008L25.6 10.8V21.6C25.6 22.26 25.06 22.8 24.4 22.8ZM16 14.4L6.4 8.4H25.6L16 14.4Z' fill='%232C496B'/%3e%3c/svg%3e";

var img$8 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M16.25 4c.685 0 1.283.371 1.603.923H20.8c.552 0 1 .448 1 1l-.001.722H24.5c.552 0 1 .448 1 1V27c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1V7.646c0-.553.448-1 1-1l2.699-.001.001-.722c0-.552.448-1 1-1h2.947c.32-.552.918-.923 1.603-.923zm2.956 9.387l-4.269 4.411-1.63-1.732c-.493-.523-1.303-.534-1.809-.026-.506.509-.517 1.345-.025 1.868l2.535 2.692c.497.528 1.316.534 1.82.013l5.186-5.358c.5-.516.5-1.352 0-1.868-.499-.516-1.309-.516-1.808 0z'/%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M16.25 4c.685 0 1.283.371 1.603.923H20.8c.552 0 1 .448 1 1l-.001.722H24.5c.552 0 1 .448 1 1V27c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1V7.646c0-.553.448-1 1-1l2.699-.001.001-.722c0-.552.448-1 1-1h2.947c.32-.552.918-.923 1.603-.923zm2.956 9.387l-4.269 4.411-1.63-1.732c-.493-.523-1.303-.534-1.809-.026-.506.509-.517 1.345-.025 1.868l2.535 2.692c.497.528 1.316.534 1.82.013l5.186-5.358c.5-.516.5-1.352 0-1.868-.499-.516-1.309-.516-1.808 0z'/%3e%3c/svg%3e";

var img$6 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='nonzero'%3e %3cpath fill='white' stroke='white' d='M4.293 6.276h22.954V26.87H4.293z'/%3e %3cpath fill='%231B2E43' stroke='white' d='M4.293 6.276h22.954V9.13H4.293z'/%3e %3cpath fill='%231B2E43' stroke='%231B2E43' stroke-width='.5' d='M15.478 14h9.739v1.391h-9.739zM15.478 21.304h9.739v1.391h-9.739zM9.094 15.02L7.39 13.485l-.955.888 2.676 2.41 4.28-3.998-.972-.872zM9.094 21.977L7.39 20.439l-.955.89 2.676 2.41 4.28-3.998-.972-.871z'/%3e %3c/g%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd' transform='translate(4 6)'%3e %3cpath fill='%232C496B' fill-rule='nonzero' stroke='%232C496B' d='M2.293.276h18.954a2 2 0 0 1 2 2V18.87a2 2 0 0 1-2 2H2.293a2 2 0 0 1-2-2V2.276a2 2 0 0 1 2-2z'/%3e %3crect width='10' height='2' x='11' y='8' fill='white' fill-rule='nonzero' rx='1'/%3e %3crect width='10' height='2' x='11' y='15' fill='white' fill-rule='nonzero' rx='1'/%3e %3cpath fill='white' fill-rule='nonzero' d='M3.093 7.798L2 8.813l3.062 2.756L9.96 6.997 8.847 6 5.042 9.554zM3.093 14.796L2 15.815l3.062 2.757 4.898-4.574L8.847 13l-3.805 3.556z'/%3e %3cpath fill='white' d='M2 2h20v2H2z'/%3e %3c/g%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zM10 22c-1.667 0-5 1-5 3v1h10v-1c0-2-3.333-3-5-3zm0-7c-1.654 0-3 1.347-3 3 0 1.654 1.346 3 3 3 1.652 0 3-1.346 3-3 0-1.653-1.348-3-3-3zm11-5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zm-4 2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm8-4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath fill='%232C496B' d='M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zM10 22c-1.667 0-5 1-5 3v1h10v-1c0-2-3.333-3-5-3zm0-7c-1.654 0-3 1.347-3 3 0 1.654 1.346 3 3 3 1.652 0 3-1.346 3-3 0-1.653-1.348-3-3-3zm11-5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zm-4 2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm8-4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z'/%3e %3cpath fill='%23979797' fill-rule='nonzero' d='M13 12.5l9 4.5V8l-9 4.5z'/%3e %3c/g%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='white' fill-rule='nonzero'%3e %3cpath d='M8.228 18.433c-.082-1.866-1.063-2.177-1.063-2.177.082-1.762.409-2.177.409-2.177l8.586 3.835 8.871-3.835v5.7l-.245.622c-.776 1.348-2.984 2.332-4.006 2.591-1.023.26-3.108.674-7.032.415-3.925-.26-6.174-2.747-6.174-2.747.859-.984.654-2.227.654-2.227z'/%3e %3cpath d='M16.323 8.95l-7.645 3.73 7.42 3.213 13.798-5.855s.859-.934-.204-1.348c-1.063-.415-13.287-5.596-13.287-5.596s-.286-.104-.572 0S2.75 8.674 2.75 8.674s-.709.212-.627.796c.082.585.327.585.327.585l3.162 1.313s-1.445 2.039-1.227 5.044c0 0-.954.483-.899 1.762 0 0-.027 1.175.845 1.52 0 0-.054 3.87-2.807 6.806l2.371 1.486s1.827-.622 2.017-3.628c0 0 0-3.385-.245-4.87 0 0 .654-.553.654-1.417 0 0-.027-1.313-.79-1.658 0 0-.164-3.765 1.99-4.975l8.067-4.145s.818-.311 1.117.276c0-.001.38.966-.382 1.38z'/%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='%232C496B' fill-rule='nonzero'%3e %3cpath d='M8.228 18.433c-.082-1.866-1.063-2.177-1.063-2.177.082-1.762.409-2.177.409-2.177l8.586 3.835 8.871-3.835v5.7l-.245.622c-.776 1.348-2.984 2.332-4.006 2.591-1.023.26-3.108.674-7.032.415-3.925-.26-6.174-2.747-6.174-2.747.859-.984.654-2.227.654-2.227z'/%3e %3cpath d='M16.323 8.95l-7.645 3.73 7.42 3.213 13.798-5.855s.859-.934-.204-1.348c-1.063-.415-13.287-5.596-13.287-5.596s-.286-.104-.572 0S2.75 8.674 2.75 8.674s-.709.212-.627.796c.082.585.327.585.327.585l3.162 1.313s-1.445 2.039-1.227 5.044c0 0-.954.483-.899 1.762 0 0-.027 1.175.845 1.52 0 0-.054 3.87-2.807 6.806l2.371 1.486s1.827-.622 2.017-3.628c0 0 0-3.385-.245-4.87 0 0 .654-.553.654-1.417 0 0-.027-1.313-.79-1.658 0 0-.164-3.765 1.99-4.975l8.067-4.145s.818-.311 1.117.276c0-.001.38.966-.382 1.38z'/%3e %3c/g%3e%3c/svg%3e";

// import {
//   IcoAcademyDark,
//   IcoAcademyWhite,
//   IcoAdminstrationDark,
//   IcoAdminstrationWhite,
//   IcoBoardDark,
//   IcoBoardWhite,
//   IcoChecklistDark,
//   IcoChecklistWhite,
//   IcoDashboardDark,
//   IcoDashboardWhite,
//   IcoTaskDark,
//   IcoTaskWhite,
//   IcoTeamDark,
//   IcoTeamWhite,
//   IcoTrainingDark,
//   IcoTrainingWhite,
//   IcoUnicastDark,
//   IcoUnicastWhite,
// } from '@icons'
var cloudinaryUrl = function (url, width, height) {
    if (width === void 0) { width = 64; }
    if (height === void 0) { height = 64; }
    return !url && url !== 'null'
        ? undefined
        : "https://res.cloudinary.com/noticeboard/image/upload/w_" + width + ",h_" + height + ",c_scale,f_auto,q_auto:best/" + url;
};
// type Item = {
//   id: string
//   title: string
//   link: string
//   activeIcon: any
//   inactiveIcon: any
// }
// const navList: Item[] = [
//   {
//     id: 'dashboard',
//     title: 'Dashboard',
//     activeIcon: IcoDashboardWhite,
//   }
// ]

/**
 * History API docs @see https://developer.mozilla.org/en-US/docs/Web/API/History
 */
const eventPopstate = "popstate";
const eventPushState = "pushState";
const eventReplaceState = "replaceState";
const events = [eventPopstate, eventPushState, eventReplaceState];

var locationHook = ({ base = "" } = {}) => {
  const [{ path, search }, update] = useState(() => ({
    path: currentPathname(base),
    search: location.search,
  })); // @see https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const prevHash = useRef(path + search);

  useEffect(() => {
    // this function checks if the location has been changed since the
    // last render and updates the state only when needed.
    // unfortunately, we can't rely on `path` value here, since it can be stale,
    // that's why we store the last pathname in a ref.
    const checkForUpdates = () => {
      const pathname = currentPathname(base);
      const search = location.search;
      const hash = pathname + search;

      if (prevHash.current !== hash) {
        prevHash.current = hash;
        update({ path: pathname, search });
      }
    };

    events.forEach((e) => addEventListener(e, checkForUpdates));

    // it's possible that an update has occurred between render and the effect handler,
    // so we run additional check on mount to catch these updates. Based on:
    // https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189
    checkForUpdates();

    return () => events.forEach((e) => removeEventListener(e, checkForUpdates));
  }, [base]);

  // the 2nd argument of the `useLocation` return value is a function
  // that allows to perform a navigation.
  //
  // the function reference should stay the same between re-renders, so that
  // it can be passed down as an element prop without any performance concerns.
  const navigate = useCallback(
    (to, { replace = false } = {}) =>
      history[replace ? eventReplaceState : eventPushState](
        null,
        "",
        // handle nested routers and absolute paths
        to[0] === "~" ? to.slice(1) : base + to
      ),
    [base]
  );

  return [path, navigate];
};

// While History API does have `popstate` event, the only
// proper way to listen to changes via `push/replaceState`
// is to monkey-patch these methods.
//
// See https://stackoverflow.com/a/4585031
if (typeof history !== "undefined") {
  for (const type of [eventPushState, eventReplaceState]) {
    const original = history[type];

    history[type] = function () {
      const result = original.apply(this, arguments);
      const event = new Event(type);
      event.arguments = arguments;

      dispatchEvent(event);
      return result;
    };
  }
}

const currentPathname = (base, path = location.pathname) =>
  !path.toLowerCase().indexOf(base.toLowerCase())
    ? path.slice(base.length) || "/"
    : "~" + path;

// creates a matcher function
function makeMatcher(makeRegexpFn = pathToRegexp) {
  let cache = {};

  // obtains a cached regexp version of the pattern
  const getRegexp = (pattern) =>
    cache[pattern] || (cache[pattern] = makeRegexpFn(pattern));

  return (pattern, path) => {
    const { regexp, keys } = getRegexp(pattern || "");
    const out = regexp.exec(path);

    if (!out) return [false, null];

    // formats an object with matched params
    const params = keys.reduce((params, key, i) => {
      params[key.name] = out[i + 1];
      return params;
    }, {});

    return [true, params];
  };
}

// escapes a regexp string (borrowed from path-to-regexp sources)
// https://github.com/pillarjs/path-to-regexp/blob/v3.0.0/index.js#L202
const escapeRx = (str) => str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

// returns a segment representation in RegExp based on flags
// adapted and simplified version from path-to-regexp sources
const rxForSegment = (repeat, optional, prefix) => {
  let capture = repeat ? "((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)" : "([^\\/]+?)";
  if (optional && prefix) capture = "(?:\\/" + capture + ")";
  return capture + (optional ? "?" : "");
};

const pathToRegexp = (pattern) => {
  const groupRx = /:([A-Za-z0-9_]+)([?+*]?)/g;

  let match = null,
    lastIndex = 0,
    keys = [],
    result = "";

  while ((match = groupRx.exec(pattern)) !== null) {
    const [_, segment, mod] = match;

    // :foo  [1]      (  )
    // :foo? [0 - 1]  ( o)
    // :foo+ [1 - ∞]  (r )
    // :foo* [0 - ∞]  (ro)
    const repeat = mod === "+" || mod === "*";
    const optional = mod === "?" || mod === "*";
    const prefix = optional && pattern[match.index - 1] === "/" ? 1 : 0;

    const prev = pattern.substring(lastIndex, match.index - prefix);

    keys.push({ name: segment });
    lastIndex = groupRx.lastIndex;

    result += escapeRx(prev) + rxForSegment(repeat, optional, prefix);
  }

  result += escapeRx(pattern.substring(lastIndex));
  return { keys, regexp: new RegExp("^" + result + "(?:\\/)?$", "i") };
};

/*
 * Part 1, Hooks API: useRouter, useRoute and useLocation
 */

// one of the coolest features of `createContext`:
// when no value is provided — default object is used.
// allows us to use the router context as a global ref to store
// the implicitly created router (see `useRouter` below)
const RouterCtx = createContext({});

const buildRouter = ({
  hook = locationHook,
  base = "",
  matcher = makeMatcher(),
} = {}) => ({ hook, base, matcher });

const useRouter = () => {
  const globalRef = useContext(RouterCtx);

  // either obtain the router from the outer context (provided by the
  // `<Router /> component) or create an implicit one on demand.
  return globalRef.v || (globalRef.v = buildRouter());
};

const useLocation = () => {
  const router = useRouter();
  return router.hook(router);
};

var img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMC4xMCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOmVmOTM1MDM3LTNiOWMtNDA2NC05MmNhLWYwOWQzMWQ1YjQ0MDwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjAzN2JjMGE3LWFjYWUtNDJiMS04NGM0LTllMGI0OGJmZTBlYzwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/8AACwgA8ADwAQERAP/EAB0AAQACAwEBAQEAAAAAAAAAAAAHCAQFBgEDAgn/xAA/EAABAwICBQgIBAQHAAAAAAAAAQIDBAUGEQcSITFBIjZRYXF0kaEIExRCYrGywSMyUoEVM5LRJDVDRFNy0v/aAAgBAQAAPwD+qYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMG73y32GmWe4VcVJF0yOyz7E3r+xHd40/Wikc5lvo6ivVPfdlGxfHNfI5qf0hbo5y+ptdJG343ucv2Paf0hbm1yevtVLI34Huav3Ons2nyzVrmsr6Wot7l9/8AmM8tvkSFa7zQ3umSooKqKrhX3onZ5dvQZoAAAAAAAAAABGmkbS/Bht8lutWpVXJNj5F2xwr93dRBF1vFbfKt1VX1MlVO7e6Rc8upE4J1IYYAM+zXyvw/WNqrfVSUsycWLsXqVNyp2k9aOtLdNipWUFxRlJdMsmqmxk3Z0L1EigAAAAAAAAAEa6X9IjsNUaWu3yatyqG5vkbvhYvHtXh4lfHOVzlVVVVVc1Vd6ngAAP0x7ontexyse1c0c1clReksVok0hLiy3LQ1r0/ilK3a5f8AWZu1u3pJCAAAAAAAAAMO8XSGy2qqr51yhp41kd15JuKl3u71F+u1VcKl2tNO9Xr1dCJ1ImwwQAAAbPDd9nw1e6S406qj4Hoqt/U3i1e1C2dvrornQU9XA7WhnjbIxepUzMgAAAAAAAAEZ6erutDhSCiY7J1ZOiO62t2r56pX0AAAAFitBt4W44LSme7WfRTOiT/qvKT5r4EiAAAAAAAAAg/0h51W42aHPkpFI/LtVE+xEIAAAAJn9Hadcr3Dnyfwn5dfKQmcAAAAAAAAEJekRTKlZZajLkrHJHn1oqL9yHgAAAATT6O9MqRXuo91XRRp4OX7oTKAAAAAAAACOtOdlW5YOSqY3WfQypKuX6V5Lvmi/sV2AAAABZHQtZVtOCIJXt1ZKx7qhc/0rsb5Jn+53oAAAAAAAAMevoorlRT0k7deGZixvavFFTJSp+KcPT4XvtVbqhF1onch362L+VydqGpAAABu8G4ZmxbiGlt8SKjHu1pXp7kafmX7dqlrqanjpKeKCJqMiiajGNTgiJkiH1AAAAAAAAAOG0paPW4ztiT0qNbdaZFWJy7PWN4sX7dZW6op5aSeSCeN0U0bla9j0yVqpwU+YAAPtR0c9wqoqamidNPK5GsjYmauUsrozwDHgm0qs2rJc6hEWeRPd6GJ1J5qdmAAAAAAAAAAcRj/AEXUGNGLURqlHdGpk2dqbH9T049u8gPEmDrthSoWK40j42Z5NmamtG/scaQAG+wxgm74tnRlBSudFnk6oemrG3tX7IT/AIC0aW/BMPrdlXcnJk+pcm7qanBPM7EAAAAAAAAAAA+dRTxVcLop4mTROTJzJGo5F/ZTirxoZwzdnOeylfQSLxpX6qf0rmhzVR6O9I5yrDeZ2J0Pha75Kh7T+jxRNciz3id6dEcLW/NVOms2h3DNoc160bq6VPeq366f07E8jtIYY6eJscUbYo2pk1jEyRP2P2AAAAAAAAAAAeGDV3622/P2m4UsGXCSZrV81NRPpKwvTqqPvdLn8Dtb5GK7S5hNq5fxdi9kb/8AyG6XMJuX/N2J2xvT7GXBpJwxUqiMvdJn8b9X5m3pL5brhl7NX01Rn/xytd8lM4AAAAAAAAAHirkcdibSxh/DSvidU+21TdnqKXlKi9a7kIyvmnu81quZbqeC3R8HKnrH+K7PI4i54wvd4VVrLpVTIvurIqN8E2GoVVcuarmvSp4AD1qq1c0XJelDc2vGd9syp7HdaqJE9z1iub4Lmh3Fj0+XejVrLnSw18fF7Pw3/wBvIk3DGlKwYoVsUVV7JVO/29TyHKvUu5fE68AAAAAAAGpxJie34Utzqy4TpFGmxrE2uevQ1OKkAY10s3bFb5IIHut9uXYkMTuU9Pidx7NxwwAAAAB6d7gnS9dMMOjp6xzrlbk2erkd+IxPhd9l8ifrBiKgxNbmVtvnSaF2xU3OYvQ5OCmyAAAAAANXiXEVJhazz3GsdlHGnJam97uDU61Kv4rxXXYvuslbWv6o4kXkxN6E/vxNKAAAAAADfYOxjXYMuzKukcrolVEmgVeTK3oXr6FLQWC+UuI7TT3CjfrwTNzTpavFF60NgAAAAACu+mvFrr3iRbbC/Ojt66mSLsdJ7y/tu8SOQAAAAAAASdoNxa61X11nmf8A4Wu/loq7GyomzxTZ4FgAAAAADEu9clstVZVrughfL4IqlQJ531U8k0i60kjle5V4qq5qfMAAAAAAAH3oKyS311PVRLqyQSNkaqdKLmXBoqltbRwVDfyyxtkTsVMz7AAAAA53SI9WYGvapsX2V6eRVMAAAAAAAALuLa4Mcr8JWZV2qtJF9KG5AAAABzekbmLfO6vKqgAAAAAAABdxbTBXNCy9zi+lDdAAAAA5vSNzFvndXlVQAAAAAAAAu4tpgrmhZe5xfShugAAAAc3pG5i3zuryqoAAAAAAAAXcW0wVzQsvc4vpQ3QAAAAOb0jcxb53V5VUAAAAAAAALuLaYK5oWXucX0oboAAAAHN6RuYt87q8qqAAAAAAAAF3FtMFc0LL3OL6UN0AAAADm9I3MW+d1eVVAAAAAAAAC7i2mCuaFl7nF9KG6AAP/9k=";

var ProfileMenu = function (_a) {
    var setProfileVisible = _a.setProfileVisible;
    return (React.createElement(Menu, null,
        React.createElement(Menu.Item, { onClick: function () { return setProfileVisible(true); }, style: { paddingRight: '2rem' }, key: '0' },
            React.createElement("p", null, "Profile")),
        React.createElement(Menu.Item, { style: { paddingRight: '2rem' }, key: '1' },
            React.createElement("a", { href: 'noticeboard.tech/support', target: '_blank' },
                React.createElement("p", null, "Help and Support"))),
        React.createElement(Menu.Item, { style: { paddingRight: '2rem' }, key: '2' },
            React.createElement("a", { href: 'noticeboard.tech/privacy', target: '_blank' },
                React.createElement("p", null, "Privacy Policy"))),
        React.createElement(Menu.Item, { style: { paddingRight: '2rem' }, key: '3' },
            React.createElement("a", { href: '/logout' },
                React.createElement("p", null, "Logout")))));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Navbar-module_ctn__28RyD {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 60px;\n  height: 100vh;\n  background-color: #1b2e43;\n}\n.Navbar-module_iconCtn__2R9HJ {\n  text-align: center;\n  padding: 10px;\n}\n.Navbar-module_icon__1heqF {\n  height: 25px;\n  width: auto;\n}\n.Navbar-module_logoCtn__2TI6o,\n.Navbar-module_profileCtn__3RCxO {\n  padding: 20px 10px 10px 10px;\n  display: flex;\n  justify-content: center;\n}\n.Navbar-module_profileCtn__3RCxO {\n  padding: 10px 10px 20px 10px;\n}\n.Navbar-module_logo__3rvZB {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  cursor: pointer;\n}\n.Navbar-module_item__92WQ5 {\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  padding: 8px 0;\n}\n.Navbar-module_active__HzQfF {\n  display: flex;\n  justify-content: center;\n  margin: 8px 0;\n  padding: 8px 0;\n  background-color: white;\n}\n\n.Navbar-module_itemCtn__1dQI_ {\n  max-height: calc(100vh - 70px);\n  overflow-y: auto;\n  scrollbar-width: none; /* Firefox */\n  -ms-overflow-style: none; /* IE 10+ */\n}\n.Navbar-module_itemCtn__1dQI_::-webkit-scrollbar {\n  /* Chrome/Safari/Webkit */\n  width: 0px;\n  background: transparent;\n}\n.Navbar-module_modal__Zs7sh {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.Navbar-module_imageCtn__zEqBR {\n  display: flex;\n  justify-content: center;\n}\n.Navbar-module_modal__Zs7sh img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.Navbar-module_profileDetails__1sFME {\n  width: 60%;\n  margin: auto;\n}\n\n.Navbar-module_email__27xwg {\n  text-align: center;\n  margin-top: 1rem;\n  color: var(--grey-text-light);\n}\n";
var styles = {"ctn":"Navbar-module_ctn__28RyD","iconCtn":"Navbar-module_iconCtn__2R9HJ","icon":"Navbar-module_icon__1heqF","logoCtn":"Navbar-module_logoCtn__2TI6o","profileCtn":"Navbar-module_profileCtn__3RCxO","logo":"Navbar-module_logo__3rvZB","item":"Navbar-module_item__92WQ5","active":"Navbar-module_active__HzQfF","itemCtn":"Navbar-module_itemCtn__1dQI_","modal":"Navbar-module_modal__Zs7sh","imageCtn":"Navbar-module_imageCtn__zEqBR","profileDetails":"Navbar-module_profileDetails__1sFME","email":"Navbar-module_email__27xwg"};
styleInject(css_248z);

var NavItem = function (_a) {
    var title = _a.title, href = _a.href, hidden = _a.hidden, children = _a.children, active = _a.active;
    return (React.createElement(Tooltip, { placement: 'right', title: title },
        React.createElement("a", { href: href },
            React.createElement("span", { className: active ? styles.active : styles.item, hidden: hidden }, children))));
};

var Navbar = function (_a) {
    var _b = _a.team, team = _b === void 0 ? {
        id: '',
        name: '',
    } : _b, _c = _a.user, user = _c === void 0 ? {
        id: '',
        name: '',
        email: '',
    } : _c, _d = _a.config, config = _d === void 0 ? {
        showDashboard: true,
        showTask: true,
        showTeam: true,
        showAdmin: true,
        showAcademy: true,
        showTraining: true,
        showChecklist: true,
        showSchedule: true,
    } : _d, updateName = _a.updateName, updateProfilePic = _a.updateProfilePic;
    var uploadFile = useCallback(function (info) {
        console.log(info);
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            var tempFormData = new FormData();
            tempFormData.append('upload_preset', 'nkoljiea');
            tempFormData.append('file', info.fileList[0].originFileObj);
            axios
                .post('/api/cloudinary/upload', tempFormData)
                .then(function (response) { return updateProfilePic(response.data); });
        }
        // console.log(info)
    }, []);
    var location = useLocation()[0];
    var active = location.split('/')[1];
    var _e = useState(false), profileVisible = _e[0], setProfileVisible = _e[1];
    var _f = useState(user.name), userName = _f[0], setUserName = _f[1];
    return (React.createElement("div", { className: styles.ctn },
        React.createElement("div", null,
            React.createElement("div", { className: styles.logoCtn },
                React.createElement("a", { href: '/team' },
                    React.createElement("img", { className: styles.logo, src: team.logo ? cloudinaryUrl(team.logo) : img, alt: '' }))),
            React.createElement("div", { className: styles.itemCtn },
                config.showDashboard && (React.createElement(NavItem, { active: active === 'dashboard', href: '/dashboard', title: 'Dashboard' }, active === 'dashboard' ? (React.createElement("img", { src: img$e })) : (React.createElement("img", { src: img$i })))),
                React.createElement(NavItem, { active: active === 'boards', href: '/boards', title: 'Boards' }, active === 'boards' ? (React.createElement("img", { src: img$f })) : (React.createElement("img", { src: img$d }))),
                config.showTask && (React.createElement(NavItem, { active: active === 'task', href: '/task', title: 'Task' }, active === 'task' ? (React.createElement("img", { src: img$5 })) : (React.createElement("img", { src: img$6 })))),
                config.showAdmin && (React.createElement(NavItem, { active: active === 'import-export', href: '/import-export', title: 'Export/Import' }, active === 'import-export' ? (React.createElement("img", { src: img$g })) : (React.createElement("img", { src: img$h })))),
                config.showTeam && (React.createElement(NavItem, { active: active === 'teamdirectory', href: '/teamdirectory', title: 'Team' }, active === 'teamdirectory' ? (React.createElement("img", { src: img$b })) : (React.createElement("img", { src: img$c })))),
                config.showTraining && (React.createElement(NavItem, { active: active === 'training', href: '/training', title: 'Manage Training' }, active === 'training' ? (React.createElement("img", { src: img$3 })) : (React.createElement("img", { src: img$4 })))),
                config.showAcademy && (React.createElement(NavItem, { active: active === 'academy', href: '/academy', title: 'Learning Academy' }, active === 'academy' ? (React.createElement("img", { src: img$1 })) : (React.createElement("img", { src: img$2 })))),
                config.showSchedule && (React.createElement(NavItem, { active: active === 'schedule', href: '/schedule', title: 'Engage - Unicasts' }, active === 'schedule' ? (React.createElement("img", { src: img$9 })) : (React.createElement("img", { src: img$a })))),
                config.showChecklist && (React.createElement(NavItem, { active: active === 'compliance', href: '/compliance', title: 'Checklists' }, active === 'compliance' ? (React.createElement("img", { src: img$7 })) : (React.createElement("img", { src: img$8 })))))),
        React.createElement("div", { className: styles.profileCtn },
            React.createElement(Dropdown, { overlay: React.createElement(ProfileMenu, __assign({}, { setProfileVisible: setProfileVisible })) },
                React.createElement("img", { className: styles.logo, src: user.profilePic ? cloudinaryUrl(user.profilePic) : img, alt: '' })),
            React.createElement(Modal, { title: 'Edit Profile', visible: profileVisible, onOk: function () {
                    setProfileVisible(false);
                    updateName(userName);
                }, onCancel: function () { return setProfileVisible(false); }, okText: 'Update Profile' },
                React.createElement("div", { className: styles.modal },
                    React.createElement("div", { className: styles.imageCtn },
                        React.createElement(Upload, { showUploadList: false, onChange: uploadFile },
                            React.createElement("img", { src: user.profilePic ? cloudinaryUrl(user.profilePic) : img, alt: '' }))),
                    React.createElement("p", { className: styles.email },
                        React.createElement("b", null, "Contact:"),
                        " ",
                        user.email),
                    React.createElement("div", { className: styles.profileDetails },
                        React.createElement(Input, { value: userName, onChange: function (e) { return setUserName(e.target.value); } })))))));
};

export { Navbar };
//# sourceMappingURL=index.es.js.map
