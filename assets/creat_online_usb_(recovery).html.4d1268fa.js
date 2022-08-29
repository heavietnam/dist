import{_ as e,o as n,c,d as a}from"./app.189aeba0.js";const o={},i=a(`<h1 id="cach-tao-bo-cai-online-recovery" tabindex="-1"><a class="header-anchor" href="#cach-tao-bo-cai-online-recovery" aria-hidden="true">#</a> C\xE1ch t\u1EA1o b\u1ED9 c\xE0i online (recovery)</h1><blockquote><p>Ch\u1EC9 \xE1p d\u1EE5ng v\u1EDBi OpenCore</p></blockquote><h2 id="formart-o-usb" tabindex="-1"><a class="header-anchor" href="#formart-o-usb" aria-hidden="true">#</a> Formart \u1ED5 USB</h2><h3 id="toi-thieu-can-4gb" tabindex="-1"><a class="header-anchor" href="#toi-thieu-can-4gb" aria-hidden="true">#</a> T\u1ED1i thi\u1EC3u c\u1EA7n 4GB</h3><p>B1: Nh\u1EA5n chu\u1ED9t ph\u1EA3i t\u1EA1i n\xFAt Start tr\xEAn Windows</p><p>B2: Ch\u1ECDn Disk Management</p><p>B3: Nh\u1EA5p chu\u1ED9t ph\u1EA3i ch\u1ECDn\xA0<code>Forma</code>t, s\u1EED d\u1EE5ng \u0111\u1ECBnh d\u1EA1ng\xA0<code>FAT32</code></p><p><img src="https://everythingforhackintosher.files.wordpress.com/2021/09/cleanshot-2021-09-14-at-12.25.19-1.png?w=533" alt=""></p><h3 id="o-usb-16gb-tro-len" tabindex="-1"><a class="header-anchor" href="#o-usb-16gb-tro-len" aria-hidden="true">#</a> \u1ED4 USB 16GB tr\u1EDF l\xEAn:</h3><p>B1: T\u1EA3i Rufus\xA0<a href="https://rufus.ie/en/" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a></p><p>B2: Ch\u1ECDn m\u1EE5c\xA0<code>Boot selection</code>\xA0l\xE0\xA0<code>Non bootable</code></p><p>B3: Ch\u1ECDn type l\xE0 <code>fat32</code></p><p>B4: Click\xA0<code>Start</code></p><p><img src="https://everythingforhackintosher.files.wordpress.com/2021/09/cleanshot-2021-09-14-at-12.37.44-2.png?w=471" alt=""></p><h3 id="danh-cho-cac-may-legacy" tabindex="-1"><a class="header-anchor" href="#danh-cho-cac-may-legacy" aria-hidden="true">#</a> D\xE0nh cho c\xE1c m\xE1y Legacy:</h3><p>B1: Nh\u1EA5n t\u1ED5 h\u1EE3p ph\xEDm\xA0<code>Windows + R</code>, g\xF5\xA0<code>diskpart</code>\xA0v\xE0 nh\u1EA5n enter</p><p>B2: G\xF5\xA0<code>list disk</code></p><p>B3: Nh\xECn v\xE0o t\xEAn \u1ED5 USB, x\xE1c \u0111\u1ECBnh xem \u1EDF disk m\u1EA5y sau \u0111\xF3 g\xF5 select disk # ( thay # th\xE0nh s\u1ED1 th\u1EE9 t\u1EF1 c\u1EE7a \u1ED5 USB. V\xED d\u1EE5:\xA0<code>select disk 1</code>\xA0)</p><p>B4: G\xF5\xA0<code>clean</code></p><p>B5: G\xF5\xA0<code>convert gpt</code></p><p>B6: G\xF5 create\xA0<code>partition primary</code></p><p>B7: G\xF5\xA0<code>list partition</code></p><p>B7: G\xF5\xA0<code>select partition #</code>\xA0( thay # th\xE0nh s\u1ED1 th\u1EE9 t\u1EF1 c\u1EE7a partion )</p><p>B8: G\xF5\xA0<code>format fs=fat32 quick</code></p><p>B9: G\xF5\xA0<code>assign letter=#</code>\xA0( thay # th\xE0nh t\xEAn letter m\xE0 b\u1EA1n mu\u1ED1n )</p><h2 id="tai-bo-cai" tabindex="-1"><a class="header-anchor" href="#tai-bo-cai" aria-hidden="true">#</a> T\u1EA3i b\u1ED9 c\xE0i</h2><p>B1: T\u1EA3i\xA0<a href="https://github.com/acidanthera/opencorepkg/releases" target="_blank" rel="noopener noreferrer">OpenCorePkg</a></p><p>B2: T\xECm \u0111\u1EBFn th\u01B0 m\u1EE5c\xA0<code>Utilities/macrecovery/</code>\xA0v\xE0 ch\u1ECDn m\u1EE5c copy path</p><p><img src="https://everythingforhackintosher.files.wordpress.com/2021/09/cleanshot-2021-09-14-at-18.55.12.png?w=898" alt=""></p><p>B3: M\u1EDF cmd v\xE0 g\xF5 l\u1EC7nh\xA0<code>cd</code>\xA0+ control v</p><p>B4: G\xF5 m\u1ED9t tron c\xE1c l\u1EC7nh sau, t\xF9y v\xE0o b\u1EA3n macOS m\xE0 b\u1EA1n mu\u1ED1n c\xE0i:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Lion(10.7):
python macrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download
python macrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download

# Mountain Lion(10.8):
python macrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download

# Mavericks(10.9):
python macrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download

# Yosemite(10.10):
python macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download

# El Capitan(10.11):
python macrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download

# Sierra(10.12):
python macrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download

# High Sierra(10.13)
python macrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download
python macrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download

# Mojave(10.14)
python macrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download

# Catalina(10.15)
python macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download

# Big Sur(11)
python macrecovery.py -b Mac-42FD25EABCABB274 -m 00000000000000000 download

# Monterey(12)
python ./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download

#Latest version
./macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 -os latest download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://everythingforhackintosher.files.wordpress.com/2021/09/cleanshot-2021-09-14-at-19.04.38-1.png?w=904" alt=""></p><p>B5: B\u1ECF 2 file\xA0<code>BaseSystem.dmg</code>\xA0v\xE0\xA0<code>BaseSystem.chunklist</code>\xA0v\xE0o th\u01B0 m\u1EE5c\xA0<code>com.apple.recovery.boot</code>\xA0( t\u1EA1o th\u01B0 m\u1EE5c n\xE0y \u1EDF th\u01B0 m\u1EE5c g\u1ED1c c\u1EE7a \u1ED5 USB )</p><p>B6: C\xE1c b\u1EA1n t\u1EA1o EFI theo h\u01B0\u1EDBng d\u1EABn\xA0<a href="https://heavietnam.ga/2021/11/23/cach-tao-efi-cho-opencore/" target="_blank" rel="noopener noreferrer">\u1EDF \u0111\xE2y</a>\xA0sau \u0111\xF3 b\u1ECF folder EFI v\xE0o usb ( chung ph\xE2n v\xF9ng v\u1EDBi folder\xA0<code>com.apple.recovery.boot</code>\xA0)</p>`,35),r=[i];function d(t,s){return n(),c("div",null,r)}var h=e(o,[["render",d],["__file","creat_online_usb_(recovery).html.vue"]]);export{h as default};
