'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var styles = {"ctn":"Navbar-module_ctn__28RyD"};

var img$l = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch --%3e %3ctitle%3echat_icn %3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cdefs%3e%3c/defs%3e %3cg id='chat_icn-' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='chat_icn' opacity='0.300000012'%3e%3c/g%3e %3cpath d='M26.2536825%2c5 L9.20187987%2c5 C8.23839754%2c5 7.45556238%2c5.78283516 7.45556238%2c6.7463481 L7.45556238%2c8.31306642 L22.8030819%2c8.31306642 C24.3166224%2c8.31306642 25.5481352%2c9.54678446 25.5481352%2c11.0630203 L25.5481352%2c19.0645917 L26.2536825%2c19.0645917 C27.2171648%2c19.0645916 28%2c18.2817565 28%2c17.3182742 L28%2c6.7463481 C28%2c5.78283516 27.2171648%2c5 26.2536825%2c5 Z' id='Shape' fill='%232C496B' fill-rule='nonzero'%3e%3c/path%3e %3cpath d='M24.5444376%2c11.0630509 L24.5444376%2c21.6299845 C24.5444376%2c22.5934668 23.7616024%2c23.3763019 22.8031432%2c23.3763019 L12.0756547%2c23.3763019 C11.6963938%2c23.6996617 10.2795885%2c24.9075611 7.82523877%2c27 L7.82523877%2c23.3763019 L5.74631744%2c23.3763019 C4.78283516%2c23.3763019 4%2c22.5934668 4%2c21.6299845 L4%2c11.0630509 C4%2c10.0995686 4.78283516%2c9.31673339 5.74631749%2c9.31673339 L22.8031432%2c9.31673339 C23.7616025%2c9.31673339 24.5444376%2c10.0995686 24.5444376%2c11.0630509 Z' id='Shape' fill='%232C496B' fill-rule='nonzero'%3e%3c/path%3e %3c/g%3e%3c/svg%3e";

var img$k = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e%3csvg width='32px' height='32px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch --%3e %3ctitle%3echat_icn active%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cdefs%3e%3c/defs%3e %3cg id='chat_icn-active' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg id='chat_icn' opacity='0.300000012'%3e%3c/g%3e %3cg id='Group' transform='translate(4.000000%2c 5.000000)' fill='white' fill-rule='nonzero'%3e %3cpath d='M22.2536825%2c0 L5.20187987%2c0 C4.23839754%2c0 3.45556238%2c0.782835159 3.45556238%2c1.7463481 L3.45556238%2c3.31306642 L18.8030819%2c3.31306642 C20.3166224%2c3.31306642 21.5481352%2c4.54678446 21.5481352%2c6.06302027 L21.5481352%2c14.0645917 L22.2536825%2c14.0645917 C23.2171648%2c14.0645916 24%2c13.2817565 24%2c12.3182742 L24%2c1.7463481 C24%2c0.782835159 23.2171648%2c0 22.2536825%2c0 Z' id='Shape'%3e%3c/path%3e %3cpath d='M20.5444376%2c6.06305088 L20.5444376%2c16.6299845 C20.5444376%2c17.5934668 19.7616024%2c18.3763019 18.8031432%2c18.3763019 L8.07565473%2c18.3763019 C7.69639385%2c18.6996617 6.27958853%2c19.9075611 3.82523877%2c22 L3.82523877%2c18.3763019 L1.74631744%2c18.3763019 C0.782835159%2c18.3763019 0%2c17.5934668 0%2c16.6299845 L0%2c6.06305088 C0%2c5.09956855 0.782835159%2c4.31673339 1.74631749%2c4.31673339 L18.8031432%2c4.31673339 C19.7616025%2c4.31673339 20.5444376%2c5.09956855 20.5444376%2c6.06305088 Z' id='Shape'%3e%3c/path%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var img$j = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.006.093H23.96v6.462H.006z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath fill='%232C496B' d='M15.449 18.679a.802.802 0 0 0 1.062 0c.193-.17 4.71-4.197 4.71-8.374a5.249 5.249 0 0 0-5.241-5.243 5.249 5.249 0 0 0-5.242 5.243c0 4.177 4.518 8.204 4.71 8.374zm.53-9.744c.751 0 1.36.614 1.36 1.37 0 .757-.609 1.37-1.36 1.37-.75 0-1.358-.613-1.358-1.37 0-.756.608-1.37 1.359-1.37z'/%3e %3cpath fill='%232C496B' d='M26.052 18.676l-.607-2.128a.804.804 0 0 0-.773-.583h-4.334a20.052 20.052 0 0 1-3.083 3.559 1.928 1.928 0 0 1-2.55 0 20.1 20.1 0 0 1-3.084-3.559H7.288a.805.805 0 0 0-.774.583l-.723 2.536 16.177 2.964 4.084-3.372z'/%3e %3cg transform='translate(4 19.723)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='%232C496B' d='M23.929 5.53L22.377.093 14.68 6.555h8.476a.804.804 0 0 0 .773-1.025zM3.936.9L1.481.45.03 5.53a.805.805 0 0 0 .773 1.024h3.132V.9z' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='%232C496B' d='M9.062 20.828v5.45h7.868l3.919-3.29z'/%3e %3c/g%3e%3c/svg%3e";

var img$i = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.006.093H23.96v6.462H.006z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath fill='white' d='M15.449 18.679a.802.802 0 0 0 1.062 0c.193-.17 4.71-4.197 4.71-8.374a5.249 5.249 0 0 0-5.241-5.243 5.249 5.249 0 0 0-5.242 5.243c0 4.177 4.518 8.204 4.71 8.374zm.53-9.744c.751 0 1.36.614 1.36 1.37 0 .757-.609 1.37-1.36 1.37-.75 0-1.358-.613-1.358-1.37 0-.756.608-1.37 1.359-1.37z'/%3e %3cpath fill='white' d='M26.052 18.676l-.607-2.128a.804.804 0 0 0-.773-.583h-4.334a20.052 20.052 0 0 1-3.083 3.559 1.928 1.928 0 0 1-2.55 0 20.1 20.1 0 0 1-3.084-3.559H7.288a.805.805 0 0 0-.774.583l-.723 2.536 16.177 2.964 4.084-3.372z'/%3e %3cg transform='translate(4 19.723)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='white' d='M23.929 5.53L22.377.093 14.68 6.555h8.476a.804.804 0 0 0 .773-1.025zM3.936.9L1.481.45.03 5.53a.805.805 0 0 0 .773 1.024h3.132V.9z' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='white' d='M9.062 20.828v5.45h7.868l3.919-3.29z'/%3e %3c/g%3e%3c/svg%3e";

var img$h = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='nonzero' d='M25.053 4H6.632A2.64 2.64 0 0 0 4 6.632v18.42a2.64 2.64 0 0 0 2.632 2.632h18.42a2.64 2.64 0 0 0 2.632-2.631V6.632A2.64 2.64 0 0 0 25.053 4zM11.895 22.421H9.263v-9.21h2.632v9.21zm5.263 0h-2.632V9.263h2.632v13.158zm5.263 0H19.79v-5.263h2.632v5.263z'/%3e%3c/svg%3e";

var img$g = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M26.904 5.215L5.215 26.904A1.992 1.992 0 0 1 5 26V7a2 2 0 0 1 2-2h19c.325 0 .632.078.904.215zm1.09 1.621c.004.054.006.109.006.164v19a2 2 0 0 1-2 2H7c-.055 0-.11-.002-.164-.007L27.993 6.836zm-12.48 5.005l-3.88-3.846-3.879 3.846h2.217v3.297h3.325V11.84h2.217zm9.777 9.111h-2.217v-3.297h-3.325v3.297h-2.217l3.88 3.846 3.879-3.846z'/%3e%3c/svg%3e";

var img$f = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M26.904 5.215L5.215 26.904A1.992 1.992 0 0 1 5 26V7a2 2 0 0 1 2-2h19c.325 0 .632.078.904.215zm1.09 1.621c.004.054.006.109.006.164v19a2 2 0 0 1-2 2H7c-.055 0-.11-.002-.164-.007L27.993 6.836zm-12.48 5.005l-3.88-3.846-3.879 3.846h2.217v3.297h3.325V11.84h2.217zm9.777 9.111h-2.217v-3.297h-3.325v3.297h-2.217l3.88 3.846 3.879-3.846z'/%3e%3c/svg%3e";

var img$e = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M18.996 9.571h7.722c.446 0 .607.047.77.134.163.087.291.215.378.378.088.163.134.325.134.77v14.58c0 .445-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.133-.77.133h-7.722c-.446 0-.607-.046-.77-.133a.909.909 0 0 1-.378-.378c-.087-.163-.134-.325-.134-.77v-14.58c0-.445.047-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.087.324-.134.77-.134zm1.645 12.572c-.223 0-.304.023-.385.067a.454.454 0 0 0-.19.189c-.043.081-.066.162-.066.385v1.004c0 .222.023.303.067.385a.454.454 0 0 0 .189.189c.081.043.162.067.385.067h4.432c.223 0 .304-.024.385-.067a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.384v-1.004c0-.223-.023-.304-.066-.385a.454.454 0 0 0-.19-.19c-.081-.043-.162-.066-.385-.066h-4.432zM5.281 5h7.723c.446 0 .607.046.77.134.163.087.291.215.378.378.087.163.134.324.134.77V20.86c0 .446-.047.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.134-.77.134H5.282c-.446 0-.607-.047-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V6.28c0-.445.046-.606.134-.77a.909.909 0 0 1 .378-.377c.163-.088.324-.134.77-.134zm1.646 2.286c-.223 0-.304.023-.385.066a.454.454 0 0 0-.19.19c-.043.081-.066.162-.066.385V8.93c0 .223.023.304.066.386a.454.454 0 0 0 .19.189c.081.043.162.066.385.066h4.432c.223 0 .304-.023.385-.066a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.385V7.927c0-.223-.023-.304-.067-.385a.454.454 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066H6.927z'/%3e%3c/svg%3e";

var img$d = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='nonzero' d='M25.053 4H6.632A2.64 2.64 0 0 0 4 6.632v18.42a2.64 2.64 0 0 0 2.632 2.632h18.42a2.64 2.64 0 0 0 2.632-2.631V6.632A2.64 2.64 0 0 0 25.053 4zM11.895 22.421H9.263v-9.21h2.632v9.21zm5.263 0h-2.632V9.263h2.632v13.158zm5.263 0H19.79v-5.263h2.632v5.263z'/%3e%3c/svg%3e";

var img$c = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath d='M0 0h32v32H0z'/%3e %3cpath fill='white' d='M18.996 9.571h7.722c.446 0 .607.047.77.134.163.087.291.215.378.378.088.163.134.325.134.77v14.58c0 .445-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.133-.77.133h-7.722c-.446 0-.607-.046-.77-.133a.909.909 0 0 1-.378-.378c-.087-.163-.134-.325-.134-.77v-14.58c0-.445.047-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.087.324-.134.77-.134zm1.645 12.572c-.223 0-.304.023-.385.067a.454.454 0 0 0-.19.189c-.043.081-.066.162-.066.385v1.004c0 .222.023.303.067.385a.454.454 0 0 0 .189.189c.081.043.162.067.385.067h4.432c.223 0 .304-.024.385-.067a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.384v-1.004c0-.223-.023-.304-.066-.385a.454.454 0 0 0-.19-.19c-.081-.043-.162-.066-.385-.066h-4.432zM5.281 5h7.723c.446 0 .607.046.77.134.163.087.291.215.378.378.087.163.134.324.134.77V20.86c0 .446-.047.607-.134.77a.909.909 0 0 1-.378.378c-.163.087-.324.134-.77.134H5.282c-.446 0-.607-.047-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77V6.28c0-.445.046-.606.134-.77a.909.909 0 0 1 .378-.377c.163-.088.324-.134.77-.134zm1.646 2.286c-.223 0-.304.023-.385.066a.454.454 0 0 0-.19.19c-.043.081-.066.162-.066.385V8.93c0 .223.023.304.066.386a.454.454 0 0 0 .19.189c.081.043.162.066.385.066h4.432c.223 0 .304-.023.385-.066a.454.454 0 0 0 .19-.19c.043-.08.066-.162.066-.385V7.927c0-.223-.023-.304-.067-.385a.454.454 0 0 0-.189-.19c-.081-.043-.162-.066-.385-.066H6.927z'/%3e %3c/g%3e%3c/svg%3e";

var img$b = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.317 0h22.019v22.209H.317z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(6.91 5)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='white' d='M20.764 0H1.89C1.025 0 .317.714.317 1.586v19.037c0 .872.708 1.586 1.573 1.586h18.874c.865 0 1.572-.714 1.572-1.586V1.586C22.336.714 21.63 0 20.764 0' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='%232C496B' d='M18.236 9.362c1.95 0 3.54 1.603 3.54 3.57 0 1.967-1.59 3.569-3.54 3.569s-3.538-1.602-3.538-3.57c0-1.966 1.588-3.569 3.538-3.569M25.314 24.036H11.159v-1.19c0-2.38 4.718-3.569 7.077-3.569 2.36 0 7.078 1.19 7.078 3.57v1.19z'/%3e %3cpath fill='white' d='M3 10.578h3.293V8.942H3zM3 16.923h3.293v-1.636H3zM3 23.268h3.293v-1.635H3z'/%3e %3c/g%3e%3c/svg%3e";

var img$a = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' viewBox='0 0 32 32'%3e %3cdefs%3e %3cpath id='a' d='M.317 0h22.019v22.209H.317z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg transform='translate(6.91 5)'%3e %3cmask id='b' fill='white'%3e %3cuse xlink:href='%23a'/%3e %3c/mask%3e %3cpath fill='%232C496B' d='M20.764 0H1.89C1.025 0 .317.714.317 1.586v19.037c0 .872.708 1.586 1.573 1.586h18.874c.865 0 1.572-.714 1.572-1.586V1.586C22.336.714 21.63 0 20.764 0' mask='url(%23b)'/%3e %3c/g%3e %3cpath fill='white' d='M18.236 9.362c1.95 0 3.54 1.603 3.54 3.57 0 1.967-1.59 3.569-3.54 3.569s-3.538-1.602-3.538-3.57c0-1.966 1.588-3.569 3.538-3.569M25.314 24.036H11.159v-1.19c0-2.38 4.718-3.569 7.077-3.569 2.36 0 7.078 1.19 7.078 3.57v1.19z'/%3e %3cpath fill='%232C496B' d='M3 10.578h3.293V8.942H3zM3 16.923h3.293v-1.636H3zM3 23.268h3.293v-1.635H3z'/%3e %3c/g%3e%3c/svg%3e";

var img$9 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.6 6H6.4C5.08 6 4.012 7.08 4.012 8.4L4 22.8C4 24.12 5.08 25.2 6.4 25.2H25.6C26.92 25.2 28 24.12 28 22.8V8.4C28 7.08 26.92 6 25.6 6ZM25.6 10.8L16 16.8L6.4 10.8V8.4L16 14.4L25.6 8.4V10.8Z' fill='white'/%3e%3c/svg%3e";

var img$8 = "data:image/svg+xml,%3csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M25.6 6H6.4C5.08 6 4.012 7.08 4.012 8.4L4 22.8C4 24.12 5.08 25.2 6.4 25.2H25.6C26.92 25.2 28 24.12 28 22.8V8.4C28 7.08 26.92 6 25.6 6ZM24.4 22.8H7.6C6.94 22.8 6.4 22.26 6.4 21.6V10.8L14.728 16.008C15.508 16.5 16.492 16.5 17.272 16.008L25.6 10.8V21.6C25.6 22.26 25.06 22.8 24.4 22.8ZM16 14.4L6.4 8.4H25.6L16 14.4Z' fill='%232C496B'/%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M16.25 4c.685 0 1.283.371 1.603.923H20.8c.552 0 1 .448 1 1l-.001.722H24.5c.552 0 1 .448 1 1V27c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1V7.646c0-.553.448-1 1-1l2.699-.001.001-.722c0-.552.448-1 1-1h2.947c.32-.552.918-.923 1.603-.923zm2.956 9.387l-4.269 4.411-1.63-1.732c-.493-.523-1.303-.534-1.809-.026-.506.509-.517 1.345-.025 1.868l2.535 2.692c.497.528 1.316.534 1.82.013l5.186-5.358c.5-.516.5-1.352 0-1.868-.499-.516-1.309-.516-1.808 0z'/%3e%3c/svg%3e";

var img$6 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='%232C496B' fill-rule='evenodd' d='M16.25 4c.685 0 1.283.371 1.603.923H20.8c.552 0 1 .448 1 1l-.001.722H24.5c.552 0 1 .448 1 1V27c0 .552-.448 1-1 1H8c-.552 0-1-.448-1-1V7.646c0-.553.448-1 1-1l2.699-.001.001-.722c0-.552.448-1 1-1h2.947c.32-.552.918-.923 1.603-.923zm2.956 9.387l-4.269 4.411-1.63-1.732c-.493-.523-1.303-.534-1.809-.026-.506.509-.517 1.345-.025 1.868l2.535 2.692c.497.528 1.316.534 1.82.013l5.186-5.358c.5-.516.5-1.352 0-1.868-.499-.516-1.309-.516-1.808 0z'/%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='nonzero'%3e %3cpath fill='white' stroke='white' d='M4.293 6.276h22.954V26.87H4.293z'/%3e %3cpath fill='%231B2E43' stroke='white' d='M4.293 6.276h22.954V9.13H4.293z'/%3e %3cpath fill='%231B2E43' stroke='%231B2E43' stroke-width='.5' d='M15.478 14h9.739v1.391h-9.739zM15.478 21.304h9.739v1.391h-9.739zM9.094 15.02L7.39 13.485l-.955.888 2.676 2.41 4.28-3.998-.972-.872zM9.094 21.977L7.39 20.439l-.955.89 2.676 2.41 4.28-3.998-.972-.871z'/%3e %3c/g%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd' transform='translate(4 6)'%3e %3cpath fill='%232C496B' fill-rule='nonzero' stroke='%232C496B' d='M2.293.276h18.954a2 2 0 0 1 2 2V18.87a2 2 0 0 1-2 2H2.293a2 2 0 0 1-2-2V2.276a2 2 0 0 1 2-2z'/%3e %3crect width='10' height='2' x='11' y='8' fill='white' fill-rule='nonzero' rx='1'/%3e %3crect width='10' height='2' x='11' y='15' fill='white' fill-rule='nonzero' rx='1'/%3e %3cpath fill='white' fill-rule='nonzero' d='M3.093 7.798L2 8.813l3.062 2.756L9.96 6.997 8.847 6 5.042 9.554zM3.093 14.796L2 15.815l3.062 2.757 4.898-4.574L8.847 13l-3.805 3.556z'/%3e %3cpath fill='white' d='M2 2h20v2H2z'/%3e %3c/g%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cpath fill='white' fill-rule='evenodd' d='M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zM10 22c-1.667 0-5 1-5 3v1h10v-1c0-2-3.333-3-5-3zm0-7c-1.654 0-3 1.347-3 3 0 1.654 1.346 3 3 3 1.652 0 3-1.346 3-3 0-1.653-1.348-3-3-3zm11-5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zm-4 2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm8-4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cpath fill='%232C496B' d='M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zM10 22c-1.667 0-5 1-5 3v1h10v-1c0-2-3.333-3-5-3zm0-7c-1.654 0-3 1.347-3 3 0 1.654 1.346 3 3 3 1.652 0 3-1.346 3-3 0-1.653-1.348-3-3-3zm11-5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1zm-4 2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm8-4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z'/%3e %3cpath fill='%23979797' fill-rule='nonzero' d='M13 12.5l9 4.5V8l-9 4.5z'/%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='white' fill-rule='nonzero'%3e %3cpath d='M8.228 18.433c-.082-1.866-1.063-2.177-1.063-2.177.082-1.762.409-2.177.409-2.177l8.586 3.835 8.871-3.835v5.7l-.245.622c-.776 1.348-2.984 2.332-4.006 2.591-1.023.26-3.108.674-7.032.415-3.925-.26-6.174-2.747-6.174-2.747.859-.984.654-2.227.654-2.227z'/%3e %3cpath d='M16.323 8.95l-7.645 3.73 7.42 3.213 13.798-5.855s.859-.934-.204-1.348c-1.063-.415-13.287-5.596-13.287-5.596s-.286-.104-.572 0S2.75 8.674 2.75 8.674s-.709.212-.627.796c.082.585.327.585.327.585l3.162 1.313s-1.445 2.039-1.227 5.044c0 0-.954.483-.899 1.762 0 0-.027 1.175.845 1.52 0 0-.054 3.87-2.807 6.806l2.371 1.486s1.827-.622 2.017-3.628c0 0 0-3.385-.245-4.87 0 0 .654-.553.654-1.417 0 0-.027-1.313-.79-1.658 0 0-.164-3.765 1.99-4.975l8.067-4.145s.818-.311 1.117.276c0-.001.38.966-.382 1.38z'/%3e %3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3e %3cg fill='%232C496B' fill-rule='nonzero'%3e %3cpath d='M8.228 18.433c-.082-1.866-1.063-2.177-1.063-2.177.082-1.762.409-2.177.409-2.177l8.586 3.835 8.871-3.835v5.7l-.245.622c-.776 1.348-2.984 2.332-4.006 2.591-1.023.26-3.108.674-7.032.415-3.925-.26-6.174-2.747-6.174-2.747.859-.984.654-2.227.654-2.227z'/%3e %3cpath d='M16.323 8.95l-7.645 3.73 7.42 3.213 13.798-5.855s.859-.934-.204-1.348c-1.063-.415-13.287-5.596-13.287-5.596s-.286-.104-.572 0S2.75 8.674 2.75 8.674s-.709.212-.627.796c.082.585.327.585.327.585l3.162 1.313s-1.445 2.039-1.227 5.044c0 0-.954.483-.899 1.762 0 0-.027 1.175.845 1.52 0 0-.054 3.87-2.807 6.806l2.371 1.486s1.827-.622 2.017-3.628c0 0 0-3.385-.245-4.87 0 0 .654-.553.654-1.417 0 0-.027-1.313-.79-1.658 0 0-.164-3.765 1.99-4.975l8.067-4.145s.818-.311 1.117.276c0-.001.38.966-.382 1.38z'/%3e %3c/g%3e%3c/svg%3e";

var navList = [
    {
        link: '/dashboard',
        image: img$h,
        activeImage: img$d,
        linkName: 'Dashboard',
    },
    {
        link: '/boards',
        image: img$c,
        activeImage: img$e,
        linkName: 'Boards',
    },
    {
        link: '/task',
        image: img$5,
        activeImage: img$4,
        linkName: 'Task',
    },
    {
        link: '/import-export',
        // activeLink: '/upload/download',
        image: img$g,
        activeImage: img$f,
        linkName: 'Export/Import',
        target: '_blank',
    },
    {
        link: '/teamdirectory',
        image: img$b,
        activeImage: img$a,
        linkName: 'Team',
    },
    {
        link: '/training',
        image: img$3,
        activeImage: img$2,
        linkName: 'Manage Training',
        target: '_blank',
    },
    {
        link: '/academy',
        image: img$1,
        activeImage: img,
        linkName: 'Learning Academy',
        target: '_blank',
    },
    {
        link: '/track',
        image: img$i,
        activeImage: img$j,
        linkName: 'Track Users',
        target: '_blank',
    },
    {
        link: '/chat',
        image: img$k,
        activeImage: img$l,
        linkName: 'Chat',
        target: '_blank',
    },
    {
        link: '/places',
        image: img$i,
        activeImage: img$j,
        linkName: 'Places',
    },
    {
        link: '/schedule',
        image: img$9,
        activeImage: img$8,
        linkName: 'Engage - Unicasts',
    },
    {
        link: '/checklist',
        image: img$7,
        activeImage: img$6,
        linkName: 'Checklist',
    },
];

var Navbar = function () {
    console.log(navList);
    return (React__default['default'].createElement("div", { className: styles.ctn }, navList.map(function (item) { return (React__default['default'].createElement("img", { src: item.image, alt: '' })); })));
};

exports.Navbar = Navbar;
//# sourceMappingURL=index.js.map
