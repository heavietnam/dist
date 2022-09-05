import{_ as e,o as n,c as i,d as a}from"./app.f9351318.js";const r={},t=a(`<h2 id="stuck-at-forcing-cs-runtime-for-entitlement" tabindex="-1"><a class="header-anchor" href="#stuck-at-forcing-cs-runtime-for-entitlement" aria-hidden="true">#</a> Stuck at\xA0<code>Forcing CS_RUNTIME for entitlement</code></h2><p><img src="https://dortania.github.io/OpenCore-Install-Guide/assets/img/cs-stuck.bddc4a2d.jpg" alt=""></p><p>Nh\xECn c\xF3 v\u1EBB gi\u1ED1ng nh\u01B0 1 l\u1ED7i nh\u01B0ng n\xF3 kh\xF4ng ph\u1EA3i l\u1ED7i b\u1EA1n c\u1EA7n kh\xE1 nhi\u1EC1u th\u1EDDi gian \u0111\u1EC3 v\u01B0\u1EE3t qua n\xF3. Kh\xF4ng kh\u1EDFi \u0111\u1ED9ng l\u1EA1i v\xEC n\xF3 c\xF3 th\u1EC3 ph\xE1 h\u1EE7y qu\xE1 tr\xECnh c\xE0i \u0111\u1EB7t c\u1EE7a b\u1EA1n.</p><h2 id="stuck-at-pci-configuration-begins-o-cac-main-x99-va-x299" tabindex="-1"><a class="header-anchor" href="#stuck-at-pci-configuration-begins-o-cac-main-x99-va-x299" aria-hidden="true">#</a> Stuck at\xA0<code>PCI Configuration Begins</code>\xA0\u1EDF c\xE1c main X99 v\xE0 X299</h2><p><img src="https://dortania.github.io/OpenCore-Install-Guide/assets/img/rtc-error.d53fdc66.jpg" alt=""></p><p>\u1EDE Big Sur c\xE1c d\xF2ng main hedt b\u1ECB thi\u1EBFu c\xE1c v\xF9ng rtc do \u0111\xF3 macos g\u1EB7p l\u1ED7i fix chi ti\u1EBFt theo trang\xA0<a href="https://heavietnam.ga/2022/2022/01/22/fix-system-clocks-on-hedt/index.html" target="_blank" rel="noopener noreferrer">sau</a>.</p><h2 id="stuck-on-ramrod" tabindex="-1"><a class="header-anchor" href="#stuck-on-ramrod" aria-hidden="true">#</a> Stuck on\xA0<code>ramrod</code>(^^^^^^^^^^^^^)</h2><p><img src="https://dortania.github.io/OpenCore-Install-Guide/assets/img/ramrod.55591fc5.jpg" alt=""></p><p>Khi b\u1EA1n b\u1ECB stuck \u1EDF d\xF2ng\xA0<code>ramrod</code>th\xEC macOS s\u1EBD b\u1ECB reset sau \u0111\xF3 l\u1EA1i g\u1EB7p d\xF2ng n\xE0y v\xE0 ti\u1EBFp t\u1EE5c reset. N\xF3 \u0111\xE3 t\u1EA1o 1 v\xF2ng l\u1EADp restart. \u0110i\u1EC1u \u0111\xF3 cho th\u1EA5y b\u1ED9 ph\u1EADn gi\u1EA3 l\u1EADp SMC c\u1EE7a b\u1EA1n \u0111\xE3 b\u1ECB h\u1ECFng v\xEC v\u1EADy b\u1EA1n c\xF3 2 s\u1EF1 l\u1EF1a ch\u1ECDn:</p><ul><li>S\u1EED d\u1EE5ng b\u1EA3n c\u1EADp nh\u1EADt m\u1EDBi nh\u1EA5t c\u1EE7a VirtualSMC v\xE0 Lilu sau \u0111\xF3 add boot-arg\xA0\xA0<code>vsmcgen=1</code></li><li>Ho\u1EB7c b\u1EA1n c\xF3 th\u1EC3 chuy\u1EC3n qua kext\xA0<a href="https://bitbucket.org/RehabMan/os-x-fakesmc-kozlek/downloads/" target="_blank" rel="noopener noreferrer">Fake-SMC</a>\xA0c\u1EE7a rehabMan.</li><li>L\u01B0u \xFD: kh\xF4ng \u0111\u1ED3ng th\u1EDDi s\u1EED d\u1EE5ng c\u1EA3 2 kext VirtualSMC v\xE0 Fake-SMC.</li></ul><h2 id="kernel-panic-on-opcifamily-o-x79-and-x99" tabindex="-1"><a class="header-anchor" href="#kernel-panic-on-opcifamily-o-x79-and-x99" aria-hidden="true">#</a> Kernel panic on\xA0<code>OPCIFamily</code>\xA0\u1EDF X79 and X99</h2><p>L\u1ED7i n\xE0y l\xE0 do uncore PCI Bridges kh\xF4ng \u0111\u01B0\u1EE3c enable trong ACPI. Do \u0111\xF3 IOPCIFamily s\u1EBD b\u1ECB kernel panic \u0111\u1EC3 gi\u1EA3i quy\u1EBFt v\u1EA5n \u0111\u1EC1 n\xE0y c\xE1c b\u1EA1n c\xF3 th\u1EC3 d\xF9ng\xA0<a href="https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/Source/SSDT-UNC.dsl" target="_blank" rel="noopener noreferrer">SSDT-UNC</a>\xA0ch\u1EC9 c\u1EA7n bi\xEAn d\u1ECBch b\u1EB1ng Maciasl v\xE0 s\u1EED d\u1EE5ng theo guide chi ti\u1EBFt\xA0<a href="https://heavietnam.ga/2022/2021/09/29/xxviii-patch-dsdt-phan-3/index.html" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a>.</p><h2 id="deviceproperties-injection-failing" tabindex="-1"><a class="header-anchor" href="#deviceproperties-injection-failing" aria-hidden="true">#</a> DeviceProperties injection failing</h2><p>Khi g\u1EB7p l\u1ED7i n\xE0y c\xE1c b\u1EA1n s\u1EBD kh\xF4ng th\u1EC3 ti\xEAm \u0111\u01B0\u1EE3c device-properties \u0111\u01B0\u1EE3c c\xE1ch fix c\xE1c c\xF3 th\u1EC3 d\xF9ng SSDT-BRG0. Fix chi ti\u1EBFt theo trang\xA0<a href="https://heavietnam.ga/2022/2021/09/29/xxiii-patch-card-doi-hoa-amd/index.html" target="_blank" rel="noopener noreferrer">sau</a>.</p><h2 id="keyboard-and-mouse-broken" tabindex="-1"><a class="header-anchor" href="#keyboard-and-mouse-broken" aria-hidden="true">#</a> Keyboard and Mouse broken</h2><p>L\u1ED7i n\xE0y khi\u1EBFn cho c\xE1c HID-based devices nh\u01B0 chu\u1ED9t v\xE0 b\u1EA1n ph\xEDm b\u1ECB h\u1ECFng trong khi c\xE1c c\u1ED5ng USB v\u1EABn ho\u1EA1t \u0111\u1ED9ng, \u0111\u1EC3 kh\u1EAFc ph\u1EE5c t\xECnh tr\u1EA1ng n\xE0y c\xE1c b\u1EA1n add patch nh\u01B0 sau:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// add v\xE0o config.plist -&gt; Kernel -&gt; Patch

base | string | _isSingleUser

Count | Integer | 1

Enabled | Boolean  |  True

Find  | Data | &lt;blank&gt;

Identifier | String | com.apple.iokit.IOHIDFamily

Limit | Integer |  0

Mask | Data | &lt;blank&gt;

MaxKernel | String | &lt;blank&gt;

MinKernel | String | 20.0.0

Replace | Data | B801000000C3

ReplaceMask | Data | &lt;blank&gt;

Skip | Integer | 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="early-kernel-panic-on-max-cpus-from-firmware-not-yet-initialized" tabindex="-1"><a class="header-anchor" href="#early-kernel-panic-on-max-cpus-from-firmware-not-yet-initialized" aria-hidden="true">#</a> Early Kernel Panic on\xA0<code>max_cpus_from_firmware not yet initialized</code></h2><p>\u0110\u1EC3 fix l\u1ED7i n\xE0y c\xE1c b\u1EA1n c\u1EA7n \u0111\u1EA3m b\u1EA3o \u0111ang \u1EDF OpenCore version 0.6.0+ v\xE0\xA0<code>AvoidRuntimeDefrag</code>\xA0\u0111\u01B0\u1EE3c enable.</p><p>Tr\xEAn 1 s\u1ED1 m\xE1y ch\u1EE7 y\u1EBFu tr\xEAn HP DC7900. Kernel kh\xF4ng th\u1EC3 x\xE1c \u0111\u1ECBnh ch\xEDnh x\xE1c c\xF3 bao nhi\xEAu lu\u1ED3ng \u1EDF ph\u1EA7n c\u1EE9ng c\u1EE7a c\xE1c b\u1EA1n g\xE2y panic c\xE1ch fix nh\u01B0 sau.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// add v\xE0o config.plist -&gt; Kernel -&gt; Patch

base | string | _acpi_count_enabled_logical_processors

Count | Integer | 1

Enabled | Boolean  |  True

Find  | Data | &lt;blank&gt;

Identifier | String | Kernel

Limit | Integer |  0

Mask | Data | &lt;blank&gt;

MaxKernel | String | &lt;blank&gt;

MinKernel | String | 20.0.0

Replace | Data | B804000000C3

ReplaceMask | Data | &lt;blank&gt;

Skip | Integer | 0

// thay 04 b\u1EB1ng s\u1ED1 lu\u1ED3ng \u1EDF ph\u1EA7n c\u1EE9ng c\u1EE7a c\xE1c b\u1EA1n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="can-not-update-to-newer-versions-of-big-sur" tabindex="-1"><a class="header-anchor" href="#can-not-update-to-newer-versions-of-big-sur" aria-hidden="true">#</a> Can not update to newer versions of Big Sur</h2><p>C\xF3 2 tr\u01B0\u1EDDng h\u1EE3p Broken Update Utility v\xE0 Broken Seal.</p><h3 id="broken-update-utility" tabindex="-1"><a class="header-anchor" href="#broken-update-utility" aria-hidden="true">#</a> Broken Update Utility</h3><p>l\u1ED7i n\xE0y th\u01B0\u1EDDng x\u1EA3y ra khi b\u1EA1n d\xF9ng b\u1EA3n beta. \u0110\u1EC3 kh\u1EAFc ph\u1EE5c ch\xFAng ta ch\u1EC9 c\u1EA7n h\u1EE7y \u0111\u0103ng k\xED v\xE0 \u0111\u0103ng k\xED l\u1EA1i</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># h\u1EE7y \u0111\u0103ng k\xED
sudo /System/Library/PrivateFrameworks/Seeding.framework/Resources/seedutil unenroll
# \u0111\u0103ng k\xED l\u1EA1i
sudo /System/Library/PrivateFrameworks/Seeding.framework/Resources/seedutil enroll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ti\u1EBFp theo b\u1EA3n v\xE0o c\xE0i \u0111\u1EB7t v\xE0 ki\u1EC3m tra l\u1EA1i n\u1EBFu v\u1EABn ch\u01B0a \u0111\u01B0\u1EE3c h\xE3y ki\u1EC3m tra t\u1EDBi ph\u1EA7n ti\u1EBFp theo.</p><h3 id="broken-seal" tabindex="-1"><a class="header-anchor" href="#broken-seal" aria-hidden="true">#</a> Broken Seal</h3><p>b\u1EA1n g\xF5 c\xE2u l\u1EC7nh sau v\xE0o terminal</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>diskutil apfs list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nh\xECn v\xE0o ph\u1EA7n\xA0<code>Snapshot Sealed</code>\xA0N\u1EBFu n\xF3 tr\u1EA3 v\u1EC1 l\xE0\xA0<code>broken</code>\xA0th\xEC b\u1EA1n h\xE3y fix theo c\xE1c c\xE1ch sau:</p><ul><li>Update OpenCore version 0.6.4+</li><li>Kh\xF4i ph\u1EE5c \u0111\u1EBFn b\u1EA3n Snapshot c\u0169 h\u01A1n tham kh\u1EA3o t\u1EA1i link\xA0<a href="https://dortania.github.io/OpenCore-Install-Guide/troubleshooting/extended/post-issues.html#rolling-back-apfs-snapshot" target="_blank" rel="noopener noreferrer">sau</a>.</li></ul><h2 id="kernel-panic-on-rooting-from-the-live-fs" tabindex="-1"><a class="header-anchor" href="#kernel-panic-on-rooting-from-the-live-fs" aria-hidden="true">#</a> Kernel Panic on\xA0<code>Rooting from the live fs</code></h2><p>L\u1ED7i \u0111\u1EA7y \u0111\u1EE7:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Rooting from the live fs of a sealed volume is not allowed on a RELEASE build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Do SecureBoot \u0111\u01B0\u1EE3c kh\u1EDFi \u0111\u1ED9ng \u0111\u1EC3 kh\u1EAFc ph\u1EE5c ch\u1EC9 c\u1EA7n update l\xEAn version 0.6.4+</p><h2 id="asus-z97-and-hedt-cu-the-la-x99-va-x299-that-bai-trong-giai-\u0111oan-2-cua-qua-trinh-cai-\u0111at" tabindex="-1"><a class="header-anchor" href="#asus-z97-and-hedt-cu-the-la-x99-va-x299-that-bai-trong-giai-\u0111oan-2-cua-qua-trinh-cai-\u0111at" aria-hidden="true">#</a> Asus Z97 and HEDT (c\u1EE5 th\u1EC3 l\xE0 X99 v\xE0 X299) th\u1EA5t b\u1EA1i trong giai \u0111o\u1EA1n 2 c\u1EE7a qu\xE1 tr\xECnh c\xE0i \u0111\u1EB7t.</h2><p>C\xF3 2 c\xE1ch fix:</p><ul><li>C\xE0i Big Sur v\xE0o 1 m\xE1y kh\xE1c sau \u0111\xF3 chuy\u1EC3n \u1ED5 \u0111\u0129a v\xE0o m\xE1y c\u1EA7n c\xE0i</li><li>Fix the motherboard\u2019s NVRAM. <ul><li>Ch\u1EE7 y\u1EBFu cho Asus Z97 series.</li></ul></li><li>Chi ti\u1EBFt tham kh\u1EA3o t\u1EA1i trang\xA0<a href="https://www.reddit.com/r/hackintosh/comments/jw7qf1/haswell_asus_z97_big_sur_update_and_installation/" target="_blank" rel="noopener noreferrer">sau</a>.</li></ul><h2 id="laptops-kernel-panicking-on-cannot-perform-kext-scan" tabindex="-1"><a class="header-anchor" href="#laptops-kernel-panicking-on-cannot-perform-kext-scan" aria-hidden="true">#</a> Laptops kernel panicking on\xA0<code>cannot perform kext scan</code></h2><p>L\u1ED7i n\xE0y th\u01B0\u1EDDng x\u1EA3y ra do c\xF3 nhi\u1EC1u b\u1EA3n sao c\u1EE7a c\xF9ng 1 kext trong b\u1ED9 nh\u1EDB cache c\u1EE7a kernel. Th\u01B0\u1EDDng l\xE0 kext voodooinput. \u0110\u1EC3 kh\u1EAFc ph\u1EE5c t\xECnh tr\u1EA1ng n\xE0y c\xE1c b\u1EA1n h\xE3y ki\u1EC3m tra trong config.plist --&gt;\xA0 kernel --&gt; add v\xE0 ch\u1EC9 enable 1 kext voodooinput duy nh\u1EA5t.</p><h2 id="reboot-on-appleusbhostport-createdevice-failed-to-create-device-on-macos-11-3" tabindex="-1"><a class="header-anchor" href="#reboot-on-appleusbhostport-createdevice-failed-to-create-device-on-macos-11-3" aria-hidden="true">#</a> Reboot on \u201CAppleUSBHostPort::createDevice: failed to create device\u201D on macOS 11.3+</h2><p>\u0110\u1EC3 fix l\u1ED7i n\xE0y c\xE1c b\u1EA1n c\u1EA7n ph\u1EA3i t\u1EAFt\xA0<code>XhciPortLimit</code>\xA0\u1EDF m\u1EE5c\xA0<code>Kernel -&gt; Quirks</code>\xA0 v\xE0 map usb theo h\u01B0\u1EDBng d\u1EABn\xA0<a href="https://heavietnam.ga/2022/2021/09/29/vi-1map-usb-intel-and-amd/index.html" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a>.</p><h2 id="an-error-occurred-preparing-the-software-update" tabindex="-1"><a class="header-anchor" href="#an-error-occurred-preparing-the-software-update" aria-hidden="true">#</a> An error occurred preparing the software update.</h2><p><img src="https://i.imgur.com/ESyQ5QL.jpg" alt=""></p><p>C\xF3 3 c\xE1ch fix cho tr\u01B0\u1EDDng h\u1EE3p n\xE0y:</p><ul><li>B\u1EADt firmwarevolume trong config.plist l\xEAn</li><li>C\xF3 th\u1EC3 l\xE0 do \u1ED5 c\u1EE9ng c\u1EE7a b\u1EA1n: <ul><li>Th\u1EED boot b\u1EB1ng hdd</li><li>Ho\u1EB7c thay \u1ED5 m\u1EDBi</li><li>C\u1EA7n tr\xE1nh mua c\xE1c \u1ED5 sau <ul><li>Kingston, Kingspec, Kingmax, Colorful, Fgloway,\u2026.</li></ul></li></ul></li><li>Ho\u1EB7c b\u1EA1n c\xF3 th\u1EC3 t\u1EA1o m\xE1y \u1EA3o r\u1ED3i d\xF9ng Time Machine t\u1EA1o th\xE0nh file Backup sao \u0111\xF3 ti\u1EBFn h\xE0nh bung file ra trong Recovery c\u1EE7a macOS tr\xEAn USB.</li></ul><h2 id="failed-to-install-required-firmware-update" tabindex="-1"><a class="header-anchor" href="#failed-to-install-required-firmware-update" aria-hidden="true">#</a> Failed to install required firmware update</h2><p><img src="https://i.imgur.com/y4vGxLo.jpg" alt=""></p><p>\u0110\u1EC3 kh\u1EAFc ph\u1EE5 l\u1ED7i n\xE0y c\xE1c b\u1EA1n s\u1EBD c\u1EA7n enable\xA0<code>AdviseFeatures</code>\xA0trong\xA0<code>EFI --&gt; OC --&gt; config.plist</code></p><p>Source tham kh\u1EA3o:\xA0<a href="https://dortania.github.io/OpenCore-Install-Guide/extras/big-sur/#stuck-at-forcing-cs-runtime-for-entitlement" target="_blank" rel="noopener noreferrer">OpenCore and macOS 11: Big Sur | OpenCore Install Guide (dortania.github.io)</a></p>`,51),c=[t];function l(d,s){return n(),i("div",null,c)}var h=e(r,[["render",l],["__file","2021-11-08-bigsur-error.html.vue"]]);export{h as default};
