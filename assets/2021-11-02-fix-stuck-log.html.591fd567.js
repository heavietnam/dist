import{_ as n,o as i,c as t,d as e}from"./app.f9351318.js";const l={},h=e('<p>Ph\u1EA7n n\xE0y s\u1EBD \u0111\u01B0\u1EE3c chia l\xE0m 3 ph\u1EA7n:</p><ul><li>V\u1EA5n \u0111\u1EC1 v\u1EC1 booter</li><li>V\u1EA5n \u0111\u1EC1 v\u1EC1 Patch Kernel</li><li>V\u1EA5n \u0111\u1EC1 v\u1EC1 UEFI</li><li>V\u1EA5n \u0111\u1EC1 v\u1EC1 m\xE1y \u1EA3o</li></ul><h2 id="loi-lien-quan-\u0111en-booster" tabindex="-1"><a class="header-anchor" href="#loi-lien-quan-\u0111en-booster" aria-hidden="true">#</a> <strong>L\u1ED7i li\xEAn quan\xA0\u0111\u1EBFn booster</strong></h2><p>Nh\u1EEFng nguy\xEAn nh\xE2n ch\xEDnh g\xE2y ra l\u1ED7i n\xE0y l\xE0:</p><h3 id="devirtualisemmio" tabindex="-1"><a class="header-anchor" href="#devirtualisemmio" aria-hidden="true">#</a> <strong>DevirtualiseMmio</strong></h3><ul><li><p>M\u1ED9t v\xE0i v\xF9ng MMIO v\u1EABn b\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 \u0111\u1EC3 ho\u1EA1t \u0111\u1ED9ng b\xECnh th\u01B0\u1EDDng, v\xEC v\u1EADy b\u1EA1n c\u1EA7n ph\u1EA3i lo\u1EA1i nh\u1EEFng v\xF9ng n\xE0y \u1EDF trong Booter -&gt; MMIOWhitelist ho\u1EB7c l\xE0 b\u1EA1n ph\u1EA3i t\u1EAFt c\xE1i d\xF2ng config n\xE0y lu\xF4n. C\xE1c b\u1EA1n c\xF3 th\u1EC3 xem \u1EDF \u0111\xE2y:\xA0<a href="https://heavietnam.ga/2022/01/31/using-devirtualisemmio/" target="_blank" rel="noopener noreferrer">Using Devirtualise MMIO</a></p><ul><li><p>\u0110\u1ED1i v\u1EDBi nh\u1EEFng b\u1EA1n d\xF9ng mainboard chipset TRx40 c\u1EE7a AMD th\xEC h\xE3y b\u1EADt c\xE1i d\xF2ng config n\xE0y</p></li><li><p>\u0110\u1ED1i v\u1EDBi nh\u1EEFng b\u1EA1n d\xF9ng Mainboard chipset X99 th\xEC h\xE3y t\u1EAFt c\xE1i d\xF2ng config n\xE0y v\xEC n\xF3 c\xF3 th\u1EC3 v\xF4 t\xE1c d\u1EE5ng \u0111\u1ED1i v\u1EDBi m\u1ED9t s\u1ED1 firmware</p></li></ul></li></ul><h3 id="setupvirtualmap" tabindex="-1"><a class="header-anchor" href="#setupvirtualmap" aria-hidden="true">#</a> <strong>SetupVirtualMap</strong></h3><ul><li><p>D\xF2ng config n\xE0y l\xE0 b\u1EAFt bu\u1ED9c ph\u1EC9a b\u1EADt \u0111\u1ED1i v\u1EDBi h\u1EA7u h\u1EBFt c\xE1c firrmware, n\u1EBFu kh\xF4ng c\xF3 n\xF3 th\xEC m\xE1y c\xE1c b\u1EA1n s\u1EBD d\u1EC5 b\u1ECB d\xEDnh l\u1ED7i kernel pannic \u1EDF \u0111\xE2y, v\xEC v\u1EADy c\xE1c b\u1EA1n n\xEAn b\u1EADt n\xF3 n\u1EBFu nh\u01B0 c\xE1c b\u1EA1n v\u1EABn ch\u01B0a b\u1EADt n\xF3 trong config</p></li><li><p>Nh\u1EEFng m\xE1y n\xE0o c\xF3 chipset Z390 ho\u1EB7c c\u0169 h\u01A1n th\xEC b\u1EAFt bu\u1ED9c ph\u1EA3i b\u1EADt c\xE1i n\xE0y</p></li><li><p><strong>Tuy nhi\xEAn</strong>,\xA0m\u1ED9t s\u1ED1 firmware(ch\u1EE7 y\u1EBFu l\xE0 nh\u1EEFng firmware t\u1EEB n\u0103m 2020 tr\u1EDF \u0111i) s\u1EBD kh\xF4ng t\u01B0\u01A1ng th\xEDch v\u1EDBi c\xE1i setting n\xE0y v\xE0 l\xE0m cho m\xE1y b\u1EA1n b\u1ECB kernel pannic ch\u1EA3ng h\u1EA1n nh\u01B0:</p><ul><li><p>CPU Intel d\xF2ng Icelake</p></li><li><p>Chipset Intel d\xF2ng Commet Lake(B460, H470, Z490, vv)</p></li><li><p>Mainboard AMD chipset B550 ,A520(bao g\u1ED3m c\u1EA3 chipset X570 v\u1EDBi bios b\u1EA3n m\u1EDBi nh\u1EA5t)</p></li><li><p>M\u1ED9t s\u1ED1 mainboard AMD chipset B450 v\xE0 X470 c\u0169ng gi\u1ED1ng v\u1EDBi nh\u1EEFng mainboard \u1EDF tr\xEAn khi c\u1EADp nh\u1EADt bios l\xEAn b\u1EA3n m\u1EDBi nh\u1EA5t</p></li><li><p>Mainboard chipset TRx40 c\u1EE7a AMD</p></li><li><p>C\xE1c m\xE1y \u1EA3o ch\u1EB3ng h\u1EA1n nh\u01B0 QEMU</p></li><li><p>Mainboard chipset X299 v\u1EDBi bios t\u1EEB n\u0103m 2020 tr\u1EDF \u0111i (c\xE1i n\xE0y c\u0169ng \xE1p d\u1EE5ng cho nh\u1EEFng mainboard X299 v\u1EDBi b\u1EA3n BIOS t\u1EEB cu\u1ED1i n\u0103m 2019 v\xE0 sau t\u1EEB n\u0103m 2020 tr\u1EDF \u0111i)</p></li></ul></li></ul><h3 id="enablewriteunprotector" tabindex="-1"><a class="header-anchor" href="#enablewriteunprotector" aria-hidden="true">#</a> <strong>EnableWriteUnprotector</strong></h3><p>M\u1ED9t v\u1EA5n \u0111\u1EC1 kh\xE1c ch\xEDnh l\xE0 macOS c\xF3 th\u1EC3 \u0111ang b\u1ECB xung \u0111\u1ED9t v\u1EDBi l\u1EA1i ch\u1EE9c n\u0103ng ch\u1ED1ng ghi t\u1EEB CR0, \u0111\u1EC3 fix c\xE1i n\xE0y ch\u0169ng ta c\xF3 2 l\u1EF1a ch\u1ECDn:</p><ul><li>N\u1EBFu frmware c\u1EE7a m\xE1y c\xE1c ban h\u1ED7 tr\u1EE3 MATs (firmware t\xF9 n\u0103m 2018 tr\u1EDF \u0111i) <ul><li>EnableWriteUnprotector -&gt; False</li><li>RebuildAppleMemoryMap -&gt; True</li><li>SyncRuntimePermissions -&gt; True</li></ul></li><li>\u0110\u1ED1i v\u1EDBi nh\u1EEFng m\xE1y c\xF3 firmware c\u0169 h\u01A1n: <ul><li>EnableWriteUnprotector -&gt; True</li><li>RebuildAppleMemoryMap -&gt; False</li><li>SyncRuntimePermissions -&gt; True</li></ul></li></ul><p>L\u01B0u \xFD: M\u1ED9t v\xE0i laptop (v\xED d\u1EE5 nh\u01B0 Dell Inspiron 5370) m\u1EB7c d\xF9 c\xF3 h\u1ED7 tr\u1EE3 MATs nh\u01B0ng ch\u0169ng v\u1EABn b\u1ECB l\u1ED7i khi boot l\xEAn, \u0111\u1ED1i v\u1EDBi nh\u0169ng m\xE1y nh\u01B0 th\u1EBF n\xE0y c\xE1c b\u1EA1n c\xF3 2 l\u1EF1a ch\u1ECDn:</p><ul><li><p>Boot m\xE1y v\u1EDBi setting c\u1EE7a m\xE1y c\xF3 firrmware c\u0169 h\u01A1n (*\u0110\u1ED1i v\u1EDBi nh\u1EEFng m\xE1y c\xF3 firmware c\u0169 h\u01A1n)</p></li><li><p>B\u1EADt DevirtualiseMmio v\xE0 l\xE0m theo\xA0<a href="https://heavietnam.ga/2022/01/31/using-devirtualisemmio/" target="_blank" rel="noopener noreferrer">Using DevirtualiseMmio</a></p></li></ul><p>V\u1EC1 v\u1EA5n \u0111\u1EC1 h\u1ED7 tr\u1EE3 MATs nh\u1EEFng firmware ch\u1ED1ng l\u1EA1i EDK 2018\u0111\xE3 h\u1ED7 tr\u1EE3 MATs v\xE0 nh\u1EC1u OEM \u0111\xE3 support n\xF3 t\u1EEB th\u1EDDi laptop Skylake(2016) v\u1EA5n \u0111\u1EC1 ch\u1EC9 l\xE0 ch\u0169ng ta kh\xF4ng rx li\u1EC7u c\xE1c OEM \u0111\xE3 c\u1EADp nh\u1EADt firrmware \u0111\u1EC1 h\u1ED7 tr\u1EE3 t\xEDnh n\u0103ng n\xE0y hay ch\u01B0a. \u0110\u1EC3 ki\u1EC3m tra xem amsy c\xE1c b\u1EA1n c\xF3 h\u1ED7 t\u1EE3 MATS hay kh\xF4ng, c\xE1c b\u1EA1n c\xF3 th\u1EC3 d\xF9ng t\xEDnh n\u0103ng l\u1EA5y log c\u1EE7a OpenCore</p><p><code>OCABC: MAT support is 1</code></p><p>*L\u01B0u \xFD: \xA0c\xF3 ngh\u0129a l\xE0 firrmware c\u1EE7a m\xE1y c\xE1c b\u1EA1n h\u1ED7 tr\u1EE3 MAT c\xF2n 0 c\xF3 ngh\u0129 l\xE0 n\xF3 kh\xF4ng h\u1ED7 tr\u1EE3</p><h2 id="loi-lien-quan-\u0111en-patch-kernel" tabindex="-1"><a class="header-anchor" href="#loi-lien-quan-\u0111en-patch-kernel" aria-hidden="true">#</a> <strong>L\u1ED7i li\xEAn quan \u0111\u1EBFn</strong>\xA0<strong>Patch Kernel</strong></h2><p>L\u1ED7i li\xEAn quan \u0111\u1EBFn c\xE1i n\xE0y s\u1EBD \u0111\u01B0\u1EE3c ph\xE2n ra l\xE0m 2 gi\u1EEFa Intel v\xE0 AMD</p><h3 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> AMD</h3><p>Thi\u1EBFu c\xE1c\xA0<a href="https://github.com/AMD-OSX/AMD_Vanilla" target="_blank" rel="noopener noreferrer">patch kernel</a>\xA0(ch\u1EC9 \xE1p d\u1EE5ng cho CPU AMD, h\xE3y \u0111\u1EA3m b\u1EA3o l\xE0 ch\u0169ng l\xE0 nh\u0169ng patch OpenCore ch\u1EE9 kh\xF4ng ph\u1EA3i Clover). Clover s\u1EED d\u1EE5ng MatchOS trong khi OpenCore d\xF9ng MinKernel and Maxkernel)</p><p><strong>L\u01B0u \xFD l\xE0 nh\u1EEFng b\u1EA3n patch c\u0169ng g\xE2y ra nh\u1EEFng l\u1ED7i t\u01B0\u01A1ng t\u1EF1 n\xEAn c\xE1c b\u1EA1n h\xE3y \u0111\u1EA3m b\u1EA3o r\u1EB1ng c\xE1c b\u1EA1n \u0111ang d\xF9ng b\u1EA3n patch m\u1EDBi nh\u1EA5t cho AMD OS X</strong></p><h3 id="intel" tabindex="-1"><a class="header-anchor" href="#intel" aria-hidden="true">#</a> Intel</h3><ul><li>AppleXcpmCfgLock v\xE0 AppleCpuPmCfgLock</li><li>N\u1EBFu thi\u1EBFu patch CFG ho\u1EB7c XCPM th\xEC c\xE1c b\u1EA1n h\xE3y b\u1EADt AppleXcpmCfgLock v\xE0 AppleCpuPmCfgLock trong config <ul><li>C\xE1c m\xE1y d\xF9ng CPU Haswell v\xE0 m\u1EDBi h\u01A1n ch\u1EC9 c\u1EA7n AppleXcpmCfgLock</li><li>C\xE1c m\xE1y d\xF9ng CPU Ivy Bridge v\xE0 c\u0169 h\u01A1n ch\u1EC9 c\u1EA7n AppleCpuPmCfgLock</li><li>C\xE1c m\xE1y d\xF9ng CPU Broadwell v\xE0 c\u0169 h\u01A1n c\u1EA7n ph\u1EA3i b\u1EADt AppleCpuPmCfgLock khi c\xE1c b\u1EA1n ch\u1EA1y OSX 10.10 tr\u1EDF xu\u1ED1ng</li></ul></li></ul><p><strong>Ngo\xE0i ra c\xE1c b\u1EA1n co th\u1EC3 t\u1EAFt ho\xE0n to\xE0n CFG-Lock: Fixing CFG Lock</strong></p><p>AppleXcpmExtraMsrs C\xF3 th\u1EC3 b\u1EAFt bu\u1ED9c, seting n\xE0y th\u01B0\u1EDDng ch\u1EC9 d\xE0nh cho c\xE1c CPU nh\u01B0 Pentinum, HEDT v\xE0 m\u1ED9t s\u1ED1 c\xE1c m\xE1y kh\xE1c c\xF3 CPU kh\xF4ng \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 ch\u0129nh th\u1EE9c trong macOS</p><ul><li>C\xE1c CPU Intel \u0111\u1EDDi r\u1EA5t c\u0169: <ul><li>\u0110\u1ED1i v\u1EDBi macOS Big Sur, nhi\u1EC1u firmware g\u1EB7p v\u1EA5n \u0111\u1EC1 trong vi\u1EC7c c\xE1c \u0111\u1ECBnh s\u1ED1 nh\xE2n CPU v\xE0 khi \u0111\xF3 s\u1EBD g\u1EB7p kernel pannic s\u1EDBm n\xEAn kh\xF4ng th\u1EC3 in l\u1ED7i n\xE0y l\xEAn m\xE0n h\xECnh . Th\xF4ng qua serial, c\xE1c b\u1EA1n c\xF3 th\u1EC3 th\u1EA5y n\xF3 b\xE1o nh\u01B0 sau:\xA0<code>max_cpus_from_firmware not yet initialized</code></li><li>C\xE1ch gi\u1EA3i quy\u1EBFt: <ul><li>B\u1EADt AvoidRuntimeDefrag \u1EDF trong Booter -&gt; Quirks</li><li>C\xE1ch n\xE0y s\u1EBD ho\u1EA1t \u0111\u1ED9ng \u0111\u1ED1i v\u1EDBi h\u1EA7u h\u1EBFt c\xE1c firmware</li><li>Trong tr\u01B0\u1EDDng h\u1EE3p c\xE1c b\u1EA1n \u0111\xE3 l\xE0m c\xE1ch tr\xEAn nh\u1EEFng n\xF3 v\u1EABn kh\xF4ng fix \u0111\u01B0\u1EE3c thfi c\xE1c b\u1EA1n h\xE3y th\xEAm nh\u01B0 sau v\xE0o m\u1EE5c Kernel -&gt; Patch</li></ul></li></ul></li></ul><h2 id="loi-lien-quan-\u0111en-uefi" tabindex="-1"><a class="header-anchor" href="#loi-lien-quan-\u0111en-uefi" aria-hidden="true">#</a> L\u1ED7i li\xEAn quan \u0111\u1EBFn UEFI</h2><ul><li><p>ProvideConsoleGop</p><ul><li>B\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 cho vi\u1EC7c chuy\u1EC3n t\u1EEB m\xE0n h\xECnh log c\u1EE7a OpenCore. \u0110\xE2y t\u1EEBng l\xE0 m\u1ED9t ph\u1EA7n trong AptioMemoryFix nh\u01B0ng hi\u1EC7n t\u1EA1i th\xEC t\xEDnh n\u0103ng n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c chuy\u1EC3n sang d\u1EA1ng setting trong OpenCore.</li><li>T\u1EEB b\u1EA3n OpenCore version 0.5.6, t\xEDnh n\u0103ng n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c b\u1EADt t\u1EEB \u0111\u1ED9ng trong config.plist</li></ul></li><li><p>IgnoreInvalidFlexRatio</p><ul><li>B\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 \u0111\u1ED1i v\u1EDBi c\xE1c CPU t\u1EEB \u0111\u1EDDi Broadwell tr\u1EDD xu\u1ED1ng, Kh\xF4ng b\u1EAFt bu\u1ED9c \u0111\u1ED1i v\u1EDBi CPU AMD v\xE0 CPU Intel t\u1EEB \u0111\u1EDDi Skylake tr\u1EDD l\xEAn</li></ul></li></ul><p>Sources:\xA0<a href="https://dortania.github.io/OpenCore-Install-Guide/troubleshooting/extended/kernel-issues.html#stuck-on-eb-log-exitbs-start" target="_blank" rel="noopener noreferrer">Dortania</a></p>',29),c=[h];function r(a,o){return i(),t("div",null,c)}var p=n(l,[["render",r],["__file","2021-11-02-fix-stuck-log.html.vue"]]);export{p as default};
