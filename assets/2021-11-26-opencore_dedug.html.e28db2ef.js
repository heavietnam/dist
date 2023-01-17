import{_ as e,o as i,c as l,a as c}from"./app.60b0c704.js";const n={},o=c('<p>\u0110\xE2y l\xE0 phi\xEAn b\u1EA3n gi\xFAp b\u1EA1n xem l\u1ED7i v\xE0 d\u1EC5 d\xE0ng fix l\u1ED7i.</p><p>B1: T\u1EA3i OpenCorePKG version Debug t\u1EA1i \u0111\xE2y.</p><img src="https://i.imgur.com/B1D8Wh7.png"><p>B2: C\xE1c b\u1EA1n s\u1EBD ti\u1EC1n h\xE0nh thay c\xE1c file sau v\xE0o b\u1ED9 EFI \u0111ang s\u1EED d\u1EE5ng (n\u1EBFu ch\u01B0a c\xF3 EFI th\xEC build theo link <a href="https://heavietnam.ga/2020/11/23/cach-tao-efi-cho-opencore" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a>.</p><ul><li><code>BOOTx64.efi</code></li><li><code>EFI/OC/Drivers/</code><ul><li><code>OpenRuntime.efi</code></li><li><code>OpenCanopy.efi</code><code>OpenCore.efi</code></li></ul></li></ul><p>B3: ch\u1EC9nh <code>config.plist</code> theo sau:</p><ul><li>Misc <ul><li>AppleDebug: YES</li><li>ApplePanic: YES <ul><li>Th\u01B0\u1EDDng d\xF9ng k\xE8m v\u1EDBi\xA0<code>keepsyms=1</code>\xA0trong boot-arg</li></ul></li><li>DisableWatchdog: YES</li><li>Target: 67 (khuy\u1EBFn kh\xEDch n\xEAn ch\u1ECDn l\xE0 67). <ul><li>B1: \u0110\u1ECDc b\u1EA3ng sau<br><img src="https://i.imgur.com/0E1M5Gx.png" alt=""></li><li>B2: Ti\u1EBFn h\xE0nh c\u1ED9ng c\xE1c gi\xE1 tr\u1ECB b\u1EA1n ch\u1ECDn l\u1EA1i v\u1EDBi nhau. <ul><li>\u1EDE \u0111\xE2y m\xECnh s\u1EBD c\u1ED9ng\xA0<code>0x01 + 0x02 + 0x40 = 0x43</code></li></ul></li><li>B3: Convert k\u1EBFt qu\u1EA3 nh\u1EADn \u0111\u01B0\u1EE3c t\u1EEB hex sang decimal b\u1EB1ng Hackintool. <ul><li><code>0x43 = 67 ![](https://i.imgur.com/TrjH8yS.png)</code></li></ul></li></ul></li><li>DisplayLevel: 2147483714 (khuy\u1EBFn kh\xEDch n\xEAn ch\u1ECDn 2147483714). <ul><li>B1: \u0110\u1ECDc b\u1EA3n sau<br><img src="https://i.imgur.com/jvDMN1k.png" alt=""></li><li>B2: C\u1ED9ng c\xE1c gi\xE1 tr\u1ECB b\u1EA1n \u0111\xE3 ch\u1ECDn. <ul><li><code>0x00000002 + 0x00000040 + 0x80000000 = 0x80000042</code></li></ul></li><li>B3: Convert Hex to Decimal. <ul><li><code>0x80000042 = 2147483714</code><br><img src="https://i.imgur.com/kpFMyDR.png" alt=""></li></ul></li></ul></li></ul></li></ul><p>B4: Th\xEAm\xA0<code>-v</code>\xA0v\xE0o\xA0<code>boot-arg</code></p><p>Nh\u01B0 v\u1EADy l\xE0 b\u1EA1n \u0111\xE3 c\xF3 1 b\u1ED9 EFI Debug OpenCore (Clover c\u0169ng l\xE0m t\u01B0\u01A1ng t\u1EF1).</p>',9),t=[o];function r(u,p){return i(),l("div",null,t)}var a=e(n,[["render",r],["__file","2021-11-26-opencore_dedug.html.vue"]]);export{a as default};