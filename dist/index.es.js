import { Menu, Tooltip, Dropdown, Modal, Upload, Spin, Input } from 'antd';
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

var img$g = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cpath id='a' d='M5.679 2H1.99C.898 2 0 2.893 0 3.994v12.012C0 17.106.891 18 1.99 18h16.02c1.092 0 1.99-.893 1.99-1.994V3.994C20 2.894 19.109 2 18.01 2h-3.064l-.02-.068C14.623.864 13.477 0 12.367 0H8.259c-1.107 0-2.255.865-2.56 1.932L5.678 2z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd' transform='translate(2 3)'%3e %3cuse fill='white' xlink:href='%23a'/%3e %3cpath stroke='white' stroke-width='2' d='M6.66 2.206L6.433 3H1.99A.997.997 0 0 0 1 3.994v12.012c0 .548.445.994.99.994h16.02c.542 0 .99-.448.99-.994V3.994A.994.994 0 0 0 18.01 3h-3.818l-.227-.794C13.783 1.57 13.03 1 12.367 1H8.258c-.661 0-1.416.57-1.598 1.206z'/%3e %3ccircle cx='10' cy='10' r='3' stroke='%232D7DD2' stroke-width='2'/%3e %3c/g%3e%3c/svg%3e";

var img$f = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='nonzero' d='M25.053 4H6.632A2.64 2.64 0 0 0 4 6.632v18.42a2.64 2.64 0 0 0 2.632 2.632h18.42a2.64 2.64 0 0 0 2.632-2.631V6.632A2.64 2.64 0 0 0 25.053 4zM11.895 22.421H9.263v-9.21h2.632v9.21zm5.263 0h-2.632V9.263h2.632v13.158zm5.263 0H19.79v-5.263h2.632v5.263z'/%3e%3c/svg%3e";

var img$e = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M26.904 5.215L5.215 26.904A1.992 1.992 0 0 1 5 26V7a2 2 0 0 1 2-2h19c.325 0 .632.078.904.215zm1.09 1.621c.004.054.006.109.006.164v19a2 2 0 0 1-2 2H7c-.055 0-.11-.002-.164-.007L27.993 6.836zm-12.48 5.005l-3.88-3.846-3.879 3.846h2.217v3.297h3.325V11.84h2.217zm9.777 9.111h-2.217v-3.297h-3.325v3.297h-2.217l3.88 3.846 3.879-3.846z'/%3e%3c/svg%3e";

var img$d = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M26.904 5.215L5.215 26.904A1.992 1.992 0 0 1 5 26V7a2 2 0 0 1 2-2h19c.325 0 .632.078.904.215zm1.09 1.621c.004.054.006.109.006.164v19a2 2 0 0 1-2 2H7c-.055 0-.11-.002-.164-.007L27.993 6.836zm-12.48 5.005l-3.88-3.846-3.879 3.846h2.217v3.297h3.325V11.84h2.217zm9.777 9.111h-2.217v-3.297h-3.325v3.297h-2.217l3.88 3.846 3.879-3.846z'/%3e%3c/svg%3e";

var img$c = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M18.996 9.571h7.722c.446 0 .607.047.77.134.163.087.291.215.378.378.088.163.134.325.134.77v14.58c0 .445-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.133-.77.133h-7.722c-.446 0-.607-.046-.77-.133a.909.909 0 0 1-.378-.378c-.087-.163-.134-.325-.134-.77v-14.58c0-.445.047-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.087.324-.134.77-.134zm1.645 12.572c-.223 0-.304.023-.385.067a.454.454 0 0 0-.19.189c-.043.081-.066.162-.066.385v1.004c0 .222.023.303.067.385a.454.454 0 0 0 .189.189c.081.043.162.067.385.067h4.432c.223 0 .304-.024.385-.067a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.384v-1.004c0-.223-.023-.304-.066-.385a.454.454 0 0 0-.19-.19c-.081-.043-.162-.066-.385-.066h-4.432zM5.281 5h7.723c.446 0 .607.046.77.134.163.087.291.215.378.378.087.163.134.324.134.77V20.86c0 .446-.047.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.134-.77.134H5.282c-.446 0-.607-.047-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V6.28c0-.445.046-.606.134-.77a.909.909 0 0 1 .378-.377c.163-.088.324-.134.77-.134zm1.646 2.286c-.223 0-.304.023-.385.066a.454.454 0 0 0-.19.19c-.043.081-.066.162-.066.385V8.93c0 .223.023.304.066.386a.454.454 0 0 0 .19.189c.081.043.162.066.385.066h4.432c.223 0 .304-.023.385-.066a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.385V7.927c0-.223-.023-.304-.067-.385a.454.454 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066H6.927z'/%3e%3c/svg%3e";

var img$b = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='nonzero' d='M25.053 4H6.632A2.64 2.64 0 0 0 4 6.632v18.42a2.64 2.64 0 0 0 2.632 2.632h18.42a2.64 2.64 0 0 0 2.632-2.631V6.632A2.64 2.64 0 0 0 25.053 4zM11.895 22.421H9.263v-9.21h2.632v9.21zm5.263 0h-2.632V9.263h2.632v13.158zm5.263 0H19.79v-5.263h2.632v5.263z'/%3e%3c/svg%3e";

var img$a = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath d='M0 0h32v32H0z'/%3e %3cpath fill='white' d='M18.996 9.571h7.722c.446 0 .607.047.77.134.163.087.291.215.378.378.088.163.134.325.134.77v14.58c0 .445-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.133-.77.133h-7.722c-.446 0-.607-.046-.77-.133a.909.909 0 0 1-.378-.378c-.087-.163-.134-.325-.134-.77v-14.58c0-.445.047-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.087.324-.134.77-.134zm1.645 12.572c-.223 0-.304.023-.385.067a.454.454 0 0 0-.19.189c-.043.081-.066.162-.066.385v1.004c0 .222.023.303.067.385a.454.454 0 0 0 .189.189c.081.043.162.067.385.067h4.432c.223 0 .304-.024.385-.067a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.384v-1.004c0-.223-.023-.304-.066-.385a.454.454 0 0 0-.19-.19c-.081-.043-.162-.066-.385-.066h-4.432zM5.281 5h7.723c.446 0 .607.046.77.134.163.087.291.215.378.378.087.163.134.324.134.77V20.86c0 .446-.047.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.134-.77.134H5.282c-.446 0-.607-.047-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V6.28c0-.445.046-.606.134-.77a.909.909 0 0 1 .378-.377c.163-.088.324-.134.77-.134zm1.646 2.286c-.223 0-.304.023-.385.066a.454.454 0 0 0-.19.19c-.043.081-.066.162-.066.385V8.93c0 .223.023.304.066.386a.454.454 0 0 0 .19.189c.081.043.162.066.385.066h4.432c.223 0 .304-.023.385-.066a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.385V7.927c0-.223-.023-.304-.067-.385a.454.454 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066H6.927z'/%3e %3c/g%3e%3c/svg%3e";

var img$9 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.317 0h22.019v22.209H.317z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(6.91 5)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='white' d='M20.764 0H1.89C1.025 0 .317.714.317 1.586v19.037c0 .872.708 1.586 1.573 1.586h18.874c.865 0 1.572-.714 1.572-1.586V1.586C22.336.714 21.63 0 20.764 0' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='%232C496B' d='M18.236 9.362c1.95 0 3.54 1.603 3.54 3.57 0 1.967-1.59 3.569-3.54 3.569s-3.538-1.602-3.538-3.57c0-1.966 1.588-3.569 3.538-3.569M25.314 24.036H11.159v-1.19c0-2.38 4.718-3.569 7.077-3.569 2.36 0 7.078 1.19 7.078 3.57v1.19z'/%3e %3cpath fill='white' d='M3 10.578h3.293V8.942H3zM3 16.923h3.293v-1.636H3zM3 23.268h3.293v-1.635H3z'/%3e %3c/g%3e%3c/svg%3e";

var img$8 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.317 0h22.019v22.209H.317z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(6.91 5)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='%232C496B' d='M20.764 0H1.89C1.025 0 .317.714.317 1.586v19.037c0 .872.708 1.586 1.573 1.586h18.874c.865 0 1.572-.714 1.572-1.586V1.586C22.336.714 21.63 0 20.764 0' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='white' d='M18.236 9.362c1.95 0 3.54 1.603 3.54 3.57 0 1.967-1.59 3.569-3.54 3.569s-3.538-1.602-3.538-3.57c0-1.966 1.588-3.569 3.538-3.569M25.314 24.036H11.159v-1.19c0-2.38 4.718-3.569 7.077-3.569 2.36 0 7.078 1.19 7.078 3.57v1.19z'/%3e %3cpath fill='%232C496B' d='M3 10.578h3.293V8.942H3zM3 16.923h3.293v-1.636H3zM3 23.268h3.293v-1.635H3z'/%3e %3c/g%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.6 6H6.4C5.08 6 4.012 7.08 4.012 8.4L4 22.8C4 24.12 5.08 25.2 6.4 25.2H25.6C26.92 25.2 28 24.12 28 22.8V8.4C28 7.08 26.92 6 25.6 6ZM25.6 10.8L16 16.8L6.4 10.8V8.4L16 14.4L25.6 8.4V10.8Z' fill='white'/%3e%3c/svg%3e";

var img$6 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.6 6H6.4C5.08 6 4.012 7.08 4.012 8.4L4 22.8C4 24.12 5.08 25.2 6.4 25.2H25.6C26.92 25.2 28 24.12 28 22.8V8.4C28 7.08 26.92 6 25.6 6ZM24.4 22.8H7.6C6.94 22.8 6.4 22.26 6.4 21.6V10.8L14.728 16.008C15.508 16.5 16.492 16.5 17.272 16.008L25.6 10.8V21.6C25.6 22.26 25.06 22.8 24.4 22.8ZM16 14.4L6.4 8.4H25.6L16 14.4Z' fill='%232C496B'/%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M16.25 4c.685 0 1.283.371 1.603.923H20.8c.552 0 1 .448 1 1l-.001.722H24.5c.552 0 1 .448 1 1V27c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1V7.646c0-.553.448-1 1-1l2.699-.001.001-.722c0-.552.448-1 1-1h2.947c.32-.552.918-.923 1.603-.923zm2.956 9.387l-4.269 4.411-1.63-1.732c-.493-.523-1.303-.534-1.809-.026-.506.509-.517 1.345-.025 1.868l2.535 2.692c.497.528 1.316.534 1.82.013l5.186-5.358c.5-.516.5-1.352 0-1.868-.499-.516-1.309-.516-1.808 0z'/%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M16.25 4c.685 0 1.283.371 1.603.923H20.8c.552 0 1 .448 1 1l-.001.722H24.5c.552 0 1 .448 1 1V27c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1V7.646c0-.553.448-1 1-1l2.699-.001.001-.722c0-.552.448-1 1-1h2.947c.32-.552.918-.923 1.603-.923zm2.956 9.387l-4.269 4.411-1.63-1.732c-.493-.523-1.303-.534-1.809-.026-.506.509-.517 1.345-.025 1.868l2.535 2.692c.497.528 1.316.534 1.82.013l5.186-5.358c.5-.516.5-1.352 0-1.868-.499-.516-1.309-.516-1.808 0z'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='nonzero'%3e %3cpath fill='white' stroke='white' d='M4.293 6.276h22.954V26.87H4.293z'/%3e %3cpath fill='%231B2E43' stroke='white' d='M4.293 6.276h22.954V9.13H4.293z'/%3e %3cpath fill='%231B2E43' stroke='%231B2E43' stroke-width='.5' d='M15.478 14h9.739v1.391h-9.739zM15.478 21.304h9.739v1.391h-9.739zM9.094 15.02L7.39 13.485l-.955.888 2.676 2.41 4.28-3.998-.972-.872zM9.094 21.977L7.39 20.439l-.955.89 2.676 2.41 4.28-3.998-.972-.871z'/%3e %3c/g%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd' transform='translate(4 6)'%3e %3cpath fill='%232C496B' fill-rule='nonzero' stroke='%232C496B' d='M2.293.276h18.954a2 2 0 0 1 2 2V18.87a2 2 0 0 1-2 2H2.293a2 2 0 0 1-2-2V2.276a2 2 0 0 1 2-2z'/%3e %3crect width='10' height='2' x='11' y='8' fill='white' fill-rule='nonzero' rx='1'/%3e %3crect width='10' height='2' x='11' y='15' fill='white' fill-rule='nonzero' rx='1'/%3e %3cpath fill='white' fill-rule='nonzero' d='M3.093 7.798L2 8.813l3.062 2.756L9.96 6.997 8.847 6 5.042 9.554zM3.093 14.796L2 15.815l3.062 2.757 4.898-4.574L8.847 13l-3.805 3.556z'/%3e %3cpath fill='white' d='M2 2h20v2H2z'/%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zM10 22c-1.667 0-5 1-5 3v1h10v-1c0-2-3.333-3-5-3zm0-7c-1.654 0-3 1.347-3 3 0 1.654 1.346 3 3 3 1.652 0 3-1.346 3-3 0-1.653-1.348-3-3-3zm11-5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zm-4 2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm8-4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath fill='%232C496B' d='M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zM10 22c-1.667 0-5 1-5 3v1h10v-1c0-2-3.333-3-5-3zm0-7c-1.654 0-3 1.347-3 3 0 1.654 1.346 3 3 3 1.652 0 3-1.346 3-3 0-1.653-1.348-3-3-3zm11-5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zm-4 2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm8-4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z'/%3e %3cpath fill='%23979797' fill-rule='nonzero' d='M13 12.5l9 4.5V8l-9 4.5z'/%3e %3c/g%3e%3c/svg%3e";

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

var cloudinaryUrl = function (url, width, height) {
    if (width === void 0) { width = 64; }
    if (height === void 0) { height = 64; }
    return !url && url !== 'null'
        ? undefined
        : "https://res.cloudinary.com/noticeboard/image/upload/w_" + width + ",h_" + height + ",c_scale,f_auto,q_auto:best/" + url;
};
var colorPalette = [
    {
        fg: '#FF8A80',
        bg: '#FFECEA',
    },
    {
        fg: '#FF80AB',
        bg: '#FFEAF1',
    },
    {
        fg: '#EA80FC',
        bg: '#FBEAFE',
    },
    {
        fg: '#B388FF',
        bg: '#F3ECFF',
    },
    {
        fg: '#8C9EFF',
        bg: '#ECEFFF',
    },
    {
        fg: '#82B1FF',
        bg: '#EBF2FF',
    },
    {
        fg: '#80D8FF',
        bg: '#E6F7FF',
    },
    {
        fg: '#FFD180',
        bg: '#FFF6E6',
    },
];
function getInitials(name) {
    var temp = name.split(' ');
    switch (temp.length) {
        case 0:
            return 'NB';
        case 1:
            return temp[0].charAt(0).toUpperCase() + temp[0].charAt(1).toUpperCase();
        case 2:
            return temp[0].charAt(0).toUpperCase() + temp[1].charAt(0).toUpperCase();
        default:
            return temp[0].substring(0, 2);
    }
}

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

var css_248z = ".Navbar-module_ctn__28RyD {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 60px;\n  height: 100vh;\n  background-color: #1b2e43;\n}\n.Navbar-module_iconCtn__2R9HJ {\n  text-align: center;\n  padding: 10px;\n}\n.Navbar-module_icon__1heqF {\n  height: 25px;\n  width: auto;\n}\n.Navbar-module_logoCtn__2TI6o,\n.Navbar-module_profileCtn__3RCxO {\n  padding: 20px 10px 30px 10px;\n  display: flex;\n  justify-content: center;\n}\n.Navbar-module_profileCtn__3RCxO {\n  padding: 10px 10px 20px 10px;\n}\n.Navbar-module_logo__3rvZB {\n  border-radius: 50%;\n  height: 35px;\n  width: 35px;\n  cursor: pointer;\n}\n.Navbar-module_logoLarge__1QVyd {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n  cursor: pointer;\n}\n.Navbar-module_item__92WQ5 {\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  padding: 8px 0;\n}\n.Navbar-module_active__HzQfF {\n  display: flex;\n  justify-content: center;\n  margin: 8px 0;\n  padding: 8px 0;\n  background-color: white;\n}\n\n.Navbar-module_itemCtn__1dQI_ {\n  max-height: calc(100vh - 70px);\n  overflow-y: auto;\n  scrollbar-width: none; /* Firefox */\n  -ms-overflow-style: none; /* IE 10+ */\n}\n.Navbar-module_itemCtn__1dQI_::-webkit-scrollbar {\n  /* Chrome/Safari/Webkit */\n  width: 0px;\n  background: transparent;\n}\n.Navbar-module_modal__Zs7sh {\n  display: flex;\n  flex-direction: column;\n}\n.Navbar-module_details__o6JoD {\n  display: flex;\n  justify-content: space-around;\n}\n.Navbar-module_imageCtn__zEqBR {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin-left: 2rem;\n  margin-top: 1rem;\n}\n\n.Navbar-module_profileDetails__1sFME {\n}\n.Navbar-module_contactCtn__1vETu {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.Navbar-module_email__27xwg {\n  /* text-align: center; */\n  margin-top: 1rem;\n  color: var(--grey-text-light);\n}\n.Navbar-module_hoverEdit__2g6Yu {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Navbar-module_uploadButton__28lC- {\n  width: 156px;\n  height: 38px;\n  background-color: #2ecc71;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.Navbar-module_uploadButton__28lC-:hover {\n  transition: all 0.1s;\n  background-color: #26b963;\n}\n";
var styles = {"ctn":"Navbar-module_ctn__28RyD","iconCtn":"Navbar-module_iconCtn__2R9HJ","icon":"Navbar-module_icon__1heqF","logoCtn":"Navbar-module_logoCtn__2TI6o","profileCtn":"Navbar-module_profileCtn__3RCxO","logo":"Navbar-module_logo__3rvZB","logoLarge":"Navbar-module_logoLarge__1QVyd","item":"Navbar-module_item__92WQ5","active":"Navbar-module_active__HzQfF","itemCtn":"Navbar-module_itemCtn__1dQI_","modal":"Navbar-module_modal__Zs7sh","details":"Navbar-module_details__o6JoD","imageCtn":"Navbar-module_imageCtn__zEqBR","profileDetails":"Navbar-module_profileDetails__1sFME","contactCtn":"Navbar-module_contactCtn__1vETu","email":"Navbar-module_email__27xwg","hoverEdit":"Navbar-module_hoverEdit__2g6Yu","uploadButton":"Navbar-module_uploadButton__28lC-"};
styleInject(css_248z);

function DefaultLogo(_a) {
    var id = _a.id, name = _a.name, alternate = _a.alternate, profilePic = _a.profilePic, large = _a.large;
    return (React.createElement(React.Fragment, null, profilePic ? (React.createElement("img", { className: large ? styles.logoLarge : styles.logo, src: cloudinaryUrl(profilePic), alt: '' })) : (React.createElement("div", { style: {
            backgroundColor: "" + colorPalette[Number(id) % 8].bg,
            borderRadius: '50%',
            height: alternate ? 100 : 35,
            width: alternate ? 100 : 35,
            fontSize: alternate ? 22 : 14,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        } },
        React.createElement("span", { style: {
                color: "" + colorPalette[Number(id) % 8].fg,
                fontWeight: 'bold',
            } }, getInitials(name))))));
}

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

var NavItem = function (_a) {
    var title = _a.title, href = _a.href, hidden = _a.hidden, children = _a.children, active = _a.active;
    return (React.createElement(Tooltip, { placement: 'right', title: title },
        React.createElement("a", { href: href },
            React.createElement("span", { className: active ? styles.active : styles.item, hidden: hidden }, children))));
};

var ItemContainer = function (_a) {
    var config = _a.config, active = _a.active, team = _a.team;
    return (React.createElement("div", { className: styles.itemCtn },
        config.showDashboard &&
            (active === 'boards' ||
                active === 'dashboard' ||
                active === 'task' ||
                active === 'teamdirectory' ||
                active === 'schedule') && (React.createElement(NavItem, { active: active === 'dashboard', href: '/dashboard', title: 'Dashboard' }, active === 'dashboard' ? (React.createElement("img", { src: img$b })) : (React.createElement("img", { src: img$f })))),
        React.createElement(NavItem, { active: active === 'boards', href: '/boards', title: 'Boards' }, active === 'boards' ? (React.createElement("img", { src: img$c })) : (React.createElement("img", { src: img$a }))),
        config.showTask &&
            (active === 'boards' ||
                active === 'dashboard' ||
                active === 'task' ||
                active === 'teamdirectory' ||
                active === 'schedule') && (React.createElement(NavItem, { active: active === 'task', href: '/task', title: 'Task' }, active === 'task' ? (React.createElement("img", { src: img$2 })) : (React.createElement("img", { src: img$3 })))),
        config.showAdmin && (React.createElement(NavItem, { active: active === 'import-export', href: '/import-export', title: 'Export/Import' }, active === 'import-export' ? (React.createElement("img", { src: img$d })) : (React.createElement("img", { src: img$e })))),
        config.showTeam &&
            (active === 'boards' ||
                active === 'dashboard' ||
                active === 'task' ||
                active === 'teamdirectory' ||
                active === 'schedule') && (React.createElement(NavItem, { active: active === 'teamdirectory', href: '/teamdirectory', title: 'Team' }, active === 'teamdirectory' ? (React.createElement("img", { src: img$8 })) : (React.createElement("img", { src: img$9 })))),
        config.showTraining && (React.createElement(NavItem, { active: active === 'training' || active === 'course', href: '/training', title: 'Manage Training' }, active === 'training' ? (React.createElement("img", { src: img })) : (React.createElement("img", { src: img$1 })))),
        config.showSchedule &&
            (active === 'boards' ||
                active === 'dashboard' ||
                active === 'task' ||
                active === 'teamdirectory' ||
                active === 'schedule') && (React.createElement(NavItem, { active: active === 'schedule', href: '/schedule', title: 'Engage - Unicasts' }, active === 'schedule' ? (React.createElement("img", { src: img$6 })) : (React.createElement("img", { src: img$7 })))),
        config.showChecklist && (React.createElement(NavItem, { active: active === 'compliance', href: team.id === '1' || team.plan === 'trial'
                ? '/compliance'
                : '/checklist', title: 'Checklists' }, active === 'compliance' ? (React.createElement("img", { src: img$4 })) : (React.createElement("img", { src: img$5 }))))));
};

var Navbar = function (_a) {
    var _b = _a.team, team = _b === void 0 ? {
        id: '',
        name: '',
        plan: 'trial',
    } : _b, _c = _a.user, user = _c === void 0 ? {
        id: '',
        name: '',
        email: '',
        profilePic: '',
    } : _c, _d = _a.config, config = _d === void 0 ? {
        showDashboard: true,
        showTask: true,
        showTeam: true,
        showAdmin: true,
        showAcademy: true,
        showTraining: true,
        showChecklist: true,
        showSchedule: true,
    } : _d, _e = _a.router, router = _e === void 0 ? false : _e, list = _a.list, updateName = _a.updateName, updateProfilePic = _a.updateProfilePic;
    var _f = useState(false), profileVisible = _f[0], setProfileVisible = _f[1];
    var _g = useState(false), imageUploading = _g[0], setImageUploading = _g[1];
    var _h = useState(user.name), userName = _h[0], setUserName = _h[1];
    var _j = useState(false), profileHover = _j[0], setProfileHover = _j[1];
    var _k = useState(), newImage = _k[0], setNewImage = _k[1];
    var location = useLocation()[0];
    var active = location.split('/')[1];
    var uploadFile = useCallback(function (info) {
        if (info.file.status === 'uploading') {
            setImageUploading(true);
            return;
        }
        if (info.file.status === 'done') {
            var tempFormData = new FormData();
            tempFormData.append('upload_preset', 'nkoljiea');
            tempFormData.append('file', info.fileList[0].originFileObj);
            axios
                .post('https://api.cloudinary.com/v1_1/noticeboard/upload', tempFormData)
                .then(function (response) {
                setNewImage(response.data.public_id);
                updateProfilePic(response.data);
                setImageUploading(false);
            });
        }
        if (info.file.status === 'error') {
            setImageUploading(false);
        }
    }, []);
    return (React.createElement("div", { className: styles.ctn },
        React.createElement("div", null,
            React.createElement("div", { className: styles.logoCtn },
                React.createElement("a", { href: '/team' },
                    React.createElement(DefaultLogo, { id: team.id, name: team.name, profilePic: team.logo }))),
            router && list ? (list()) : (React.createElement(ItemContainer, { config: config, active: active, team: team }))),
        React.createElement("div", { className: styles.profileCtn },
            React.createElement(Dropdown, { destroyPopupOnHide: true, overlay: React.createElement(ProfileMenu, __assign({}, { setProfileVisible: setProfileVisible })) },
                React.createElement("div", null,
                    React.createElement(DefaultLogo, { id: user.id, name: user.name, profilePic: newImage ? newImage : user.profilePic }))),
            React.createElement(Modal, { destroyOnClose: true, width: 720, title: 'Update Profile', visible: profileVisible, footer: null, onCancel: function () { return setProfileVisible(false); }, okText: 'Update Profile' },
                React.createElement("div", { className: styles.modal },
                    React.createElement("div", { className: styles.details },
                        React.createElement("div", { className: styles.imageCtn },
                            React.createElement("div", { onMouseEnter: function () { return setProfileHover(true); }, onMouseLeave: function () { return setProfileHover(false); } },
                                React.createElement(Upload, { showUploadList: false, onChange: uploadFile },
                                    profileHover && !imageUploading && (React.createElement("div", { className: styles.hoverEdit },
                                        React.createElement("img", { src: img$g, alt: '', style: { width: 35, height: 35 } }))),
                                    imageUploading && (React.createElement("div", { className: styles.hoverEdit },
                                        React.createElement(Spin, null))),
                                    React.createElement(DefaultLogo, { alternate: true, id: user.id, name: user.name, large: true, profilePic: newImage ? newImage : user.profilePic })),
                                React.createElement("p", { style: {
                                        marginTop: 8,
                                        fontSize: 12,
                                        opacity: 0.8,
                                        textAlign: 'center',
                                    } }, "Add/Edit picture"))),
                        React.createElement("div", { className: styles.contactCtn },
                            React.createElement("div", { className: styles.profileDetails },
                                React.createElement(Input, { value: userName, onChange: function (e) { return setUserName(e.target.value); } })),
                            React.createElement("p", { className: styles.email },
                                React.createElement("b", null, "Contact:"),
                                " ",
                                user.email))),
                    React.createElement("div", { style: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '2rem',
                        } },
                        React.createElement("button", { onClick: function () {
                                setProfileVisible(false);
                                updateName(userName);
                            }, className: styles.uploadButton }, "Update Profile")))))));
};

export { Navbar };
//# sourceMappingURL=index.es.js.map
