import{_ as e,o as i,c as n,a as l}from"./app.60b0c704.js";const a={},d=l(`<h2 id="kaslr-la-gi" tabindex="-1"><a class="header-anchor" href="#kaslr-la-gi" aria-hidden="true">#</a> KASLR l\xE0 g\xEC?</h2><p>N\xF3 l\xE0 vi\u1EBFt t\u1EAFt c\u1EE7a c\u1EE5m t\u1EEB\xA0<strong>Kernel address space layout randomization</strong>. N\xF3 l\xE0 1 c\xF4ng c\u1EE5 b\u1EA3o m\u1EADt c\u1EE7a Apple l\xE0m cho nh\u1EEFng Hacker kh\xF3 c\xF3 th\u1EC3 t\xECm ra nh\u1EEFng object quan tr\u1ECDng trong b\u1ED9 nh\u1EDB v\xEC n\xF3 lu\xF4n thay \u0111\u1ED5i ng\u1EABu nhi\xEAn sau m\u1ED7i l\u1EA7n kh\u1EDFi \u0111\u1ED9ng chi ti\u1EBFt xem\xA0<a href="https://lwn.net/Articles/569635/" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a>.</p><p>\u0110\u1ED1i v\u1EDBi nh\u1EEFng m\xE1y c\xF3 memory maps nh\u1ECF ho\u1EB7c ho\u1EB7c c\xF3 qu\xE1 nhi\u1EC1u device trong DSDT. C\xF3 th\u1EC3 s\u1EBD c\xF3 space cho kernel ho\u1EA1t \u0111\u1ED9ng nh\u01B0ng c\u0169ng c\xF3 th\u1EC3 s\u1EBD c\xF3 free space m\xE0 kernel kh\xF4ng bao ph\u1EE7 t\u1EDBi. V\xEC th\u1EBF ta s\u1EBD kh\xF4ng \u0111\u1EC3 macOS ch\u1ECDn 1 khu v\u1EF1c ng\u1EABu nhi\xEAn \u0111\u1EC3 ho\u1EA1t \u0111\u1ED9ng trong m\u1ED7i l\u1EA7n reboot m\xE0 ta s\u1EBD gi\u1EDBi h\u1EA1n khu v\u1EF1c b\u1EA5t k\xEC m\xE0 ch\u1EAFc ch\u1EAFn n\xF3 s\u1EBD ho\u1EA1t \u0111\u1ED9ng.</p><h2 id="vay-khi-nao-can-fix-kaslr" tabindex="-1"><a class="header-anchor" href="#vay-khi-nao-can-fix-kaslr" aria-hidden="true">#</a> V\u1EADy khi n\xE0o c\u1EA7n Fix KASLR</h2><p>Th\u01B0\u1EDDng khi boot macOS s\u1EBD g\u1EB7p c\xE1c l\u1ED7i nh\u01B0 sau:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Error allocating 0x1197b pages at 0x0000000017a80000 alloc type 2
Couldn&#39;t allocate runtime area

//ho\u1EB7c

Only 244/256 slide values are usable!

//ho\u1EB7c

panic(cpu 6 caller 0xffffff801fc057ba): a freed zone element has been modified in zone kalloc.4096: expected 0x3f00116dbe8a46f6 but found 0x3f00116d00000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chuan-bi" tabindex="-1"><a class="header-anchor" href="#chuan-bi" aria-hidden="true">#</a> Chu\u1EA9n b\u1ECB:</h2><p>B1: T\u1EA3i OpenRuntime.efi (trong OpenCorePKG xem chi ti\u1EBFt\xA0<a href="https://heavietnam.ga/2020/11/23/cach-tao-efi-cho-opencore/" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a>).</p><p>B2: T\u1EA3i OpenShell.efi (xem c\xE1ch t\u1EA3i OpenShell\xA0<a href="https://heavietnam.ga/2020/11/23/cach-tao-efi-cho-opencore/" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a>).</p><p>B3: ch\u1EC9nh config --&gt; Booter theo sau:</p><ul><li>AvoidRuntimeDefrag: YES</li><li>DevirtualiseMmio: YES</li><li>EnableSafeModeSlide: YES</li><li>ProtectUefiServices: NO</li><li>ProvideCustomSlide: YES</li><li>RebuildAppleMemoryMap: YES</li></ul><h2 id="setting-bios" tabindex="-1"><a class="header-anchor" href="#setting-bios" aria-hidden="true">#</a> Setting BIOS</h2><p>B1: Update BIOS (kh\xE1 quan tr\u1ECDng \u0111\u1EB7c bi\u1EC7t l\xE0 Z390).</p><p>B2: Clear CMOS.</p><p>B3: B\u1EADt c\xE1c option sau trong BIOS:</p><ul><li>Above4GDecoding (\u0111\u1EA3m b\u1EA3o r\u1EB1ng Booter -&gt; Quirks -&gt; ResizeAppleGpuBars: 0).</li><li>Boot Options -&gt; Windows8.1/10 mode.</li><li>Disable c\xE1c option kh\xF4ng c\u1EA7n thi\u1EBFt trong bios (kh\xF4ng c\u1EA7n thi\u1EBFt \u1EDF \u0111\xE2y c\xF3 ngh\u0129a l\xE0 b\u1EA1n kh\xF4ng s\u1EED d\u1EE5ng): <ul><li>CSM</li><li>Intel SGX</li><li>Parallel Port</li><li>Serial Port</li><li>iGPU</li><li>Thunderbolt</li><li>LED lighting</li><li>Legacy USB</li></ul></li></ul><h2 id="tim-slide-value" tabindex="-1"><a class="header-anchor" href="#tim-slide-value" aria-hidden="true">#</a> T\xECm Slide Value</h2><p>B1: B\u1EA1n ch\u1ECDn OpenShell.efi t\u1EA1i picker c\u1EE7a OpenCore.</p><p>B2: \u1EA4n Enter ho\u1EB7c \u0111\u1EE3i v\xE0i gi\xE2y.</p><p>B3: C\xE1c b\u1EA1n g\xF5 l\u1EC7nh:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//truy c\u1EADp v\xE0o \u1ED5 \u0111\u0129a

fs0:

// ki\u1EC3m tra xem b\u1EA1n c\xF3 \u0111ang \u1EDF \u0111\xFAng \u0111\u01B0\u1EDDng d\u1EABn mong mu\u1ED1n kh\xF4ng n\u1EBFu kh\xF4ng c\xF3 th\u1EC3 th\u1EED fs1:

ls

// t\u1EA1o file memmap.txt

memmap &gt; memmap.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i.imgur.com/uQQPkHc.jpg" alt=""></p><p>B4: M\u1EDF file memmap.txt ra ta s\u1EBD \u0111\u01B0\u1EE3c:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Type       Start            End              # Pages          Attributes
BS_Code    0000000000000000-0000000000007FFF 0000000000000008 000000000000000F
Available  0000000000008000-000000000005DFFF 0000000000000056 000000000000000F
BS_Data    000000000005E000-000000000005FFFF 0000000000000002 000000000000000F
BS_Code    0000000000060000-000000000009EFFF 000000000000003F 000000000000000F
RT_Data    000000000009F000-000000000009FFFF 0000000000000001 800000000000000F
Available  0000000000100000-0000000000FFFFFF 0000000000000F00 000000000000000F
LoaderData 0000000001000000-00000000010FFFFF 0000000000000100 000000000000000F
Available  0000000001100000-000000001FFFFFFF 000000000001EF00 000000000000000F
Reserved   0000000020000000-00000000201FFFFF 0000000000000200 000000000000000F
Available  0000000020200000-0000000040003FFF 000000000001FE04 000000000000000F
Reserved   0000000040004000-0000000040004FFF 0000000000000001 000000000000000F
Available  0000000040005000-00000000CD431FFF 000000000008D42D 000000000000000F
LoaderCode 00000000CD432000-00000000CD53AFFF 0000000000000109 000000000000000F
BS_Data    00000000CD53B000-00000000CE025FFF 0000000000000AEB 000000000000000F
Available  00000000CE026000-00000000CE220FFF 00000000000001FB 000000000000000F
BS_Data    00000000CE221000-00000000CE5C2FFF 00000000000003A2 000000000000000F
Available  00000000CE5C3000-00000000CE5D6FFF 0000000000000014 000000000000000F
BS_Data    00000000CE5D7000-00000000CE762FFF 000000000000018C 000000000000000F
LoaderCode 00000000CE763000-00000000CE7EAFFF 0000000000000088 000000000000000F
BS_Data    00000000CE7EB000-00000000D90E3FFF 000000000000A8F9 000000000000000F
Available  00000000D90E4000-00000000D96C3FFF 00000000000005E0 000000000000000F
BS_Code    00000000D96C4000-00000000D9762FFF 000000000000009F 000000000000000F
RT_Code    00000000D9763000-00000000D9767FFF 0000000000000005 800000000000000F
BS_Code    00000000D9768000-00000000D97C5FFF 000000000000005E 000000000000000F
ACPI_NVS   00000000D97C6000-00000000D9DC6FFF 0000000000000601 000000000000000F
RT_Code    00000000D9DC7000-00000000D9DC9FFF 0000000000000003 800000000000000F
BS_Code    00000000D9DCA000-00000000D9DE0FFF 0000000000000017 000000000000000F
RT_Code    00000000D9DE1000-00000000D9DE6FFF 0000000000000006 800000000000000F
BS_Code    00000000D9DE7000-00000000D9DE8FFF 0000000000000002 000000000000000F
RT_Code    00000000D9DE9000-00000000D9DF6FFF 000000000000000E 800000000000000F
BS_Code    00000000D9DF7000-00000000D9F4DFFF 0000000000000157 000000000000000F
RT_Code    00000000D9F4E000-00000000D9F51FFF 0000000000000004 800000000000000F
BS_Code    00000000D9F52000-00000000D9F9CFFF 000000000000004B 000000000000000F
RT_Code    00000000D9F9D000-00000000D9FA3FFF 0000000000000007 800000000000000F
RT_Data    00000000D9FA4000-00000000D9FB0FFF 000000000000000D 800000000000000F
RT_Code    00000000D9FB1000-00000000D9FC2FFF 0000000000000012 800000000000000F
BS_Code    00000000D9FC3000-00000000D9FC5FFF 0000000000000003 000000000000000F
RT_Code    00000000D9FC6000-00000000D9FC7FFF 0000000000000002 800000000000000F
BS_Code    00000000D9FC8000-00000000D9FDEFFF 0000000000000017 000000000000000F
RT_Code    00000000D9FDF000-00000000D9FE4FFF 0000000000000006 800000000000000F
BS_Code    00000000D9FE5000-00000000D9FECFFF 0000000000000008 000000000000000F
RT_Code    00000000D9FED000-00000000D9FEDFFF 0000000000000001 800000000000000F
BS_Code    00000000D9FEE000-00000000D9FFCFFF 000000000000000F 000000000000000F
RT_Code    00000000D9FFD000-00000000D9FFDFFF 0000000000000001 800000000000000F
BS_Code    00000000D9FFE000-00000000DA008FFF 000000000000000B 000000000000000F
RT_Code    00000000DA009000-00000000DA00DFFF 0000000000000005 800000000000000F
BS_Code    00000000DA00E000-00000000DA039FFF 000000000000002C 000000000000000F
RT_Code    00000000DA03A000-00000000DA03AFFF 0000000000000001 800000000000000F
BS_Code    00000000DA03B000-00000000DA04AFFF 0000000000000010 000000000000000F
RT_Code    00000000DA04B000-00000000DA070FFF 0000000000000026 800000000000000F
BS_Code    00000000DA071000-00000000DA083FFF 0000000000000013 000000000000000F
RT_Code    00000000DA084000-00000000DA084FFF 0000000000000001 800000000000000F
BS_Code    00000000DA085000-00000000DA085FFF 0000000000000001 000000000000000F
RT_Code    00000000DA086000-00000000DA087FFF 0000000000000002 800000000000000F
BS_Code    00000000DA088000-00000000DA088FFF 0000000000000001 000000000000000F
RT_Code    00000000DA089000-00000000DA08DFFF 0000000000000005 800000000000000F
BS_Code    00000000DA08E000-00000000DA0A2FFF 0000000000000015 000000000000000F
RT_Data    00000000DA0A3000-00000000DA102FFF 0000000000000060 800000000000000F
RT_Code    00000000DA103000-00000000DA11DFFF 000000000000001B 800000000000000F
RT_Data    00000000DA11E000-00000000DA120FFF 0000000000000003 800000000000000F
RT_Data    00000000DA121000-00000000DA127FFF 0000000000000007 800000000000000F
RT_Data    00000000DA128000-00000000DA128FFF 0000000000000001 800000000000000F
RT_Data    00000000DA129000-00000000DA147FFF 000000000000001F 800000000000000F
Reserved   00000000DA148000-00000000DA4ADFFF 0000000000000366 000000000000000F
Reserved   00000000DA4AE000-00000000DA647FFF 000000000000019A 000000000000000F
ACPI_NVS   00000000DA648000-00000000DA70DFFF 00000000000000C6 000000000000000F
ACPI_NVS   00000000DA70E000-00000000DA8C7FFF 00000000000001BA 000000000000000F
ACPI_Recl  00000000DA8C8000-00000000DA8CCFFF 0000000000000005 000000000000000F
BS_Data    00000000DA8CD000-00000000DA8CDFFF 0000000000000001 000000000000000F
ACPI_NVS   00000000DA8CE000-00000000DA910FFF 0000000000000043 000000000000000F
BS_Data    00000000DA911000-00000000DAA5CFFF 000000000000014C 000000000000000F
BS_Code    00000000DAA5D000-00000000DACF6FFF 000000000000029A 000000000000000F
BS_Data    00000000DACF7000-00000000DAD06FFF 0000000000000010 000000000000000F
BS_Code    00000000DAD07000-00000000DAD18FFF 0000000000000012 000000000000000F
BS_Data    00000000DAD19000-00000000DAD1FFFF 0000000000000007 000000000000000F
RT_Data    00000000DAD20000-00000000DAFF3FFF 00000000000002D4 800000000000000F
BS_Data    00000000DAFF4000-00000000DAFFFFFF 000000000000000C 000000000000000F
Available  0000000100000000-000000011F1FFFFF 000000000001F200 000000000000000F
Reserved   00000000DBC00000-00000000DFDFFFFF 0000000000004200 8000000000000000
MMIO       00000000F8000000-00000000FBFFFFFF 0000000000004000 8000000000000001
MMIO       00000000FEC00000-00000000FEC00FFF 0000000000000001 8000000000000001
MMIO       00000000FED00000-00000000FED03FFF 0000000000000004 8000000000000001
MMIO       00000000FED1C000-00000000FED1FFFF 0000000000000004 8000000000000001
MMIO       00000000FEE00000-00000000FEE00FFF 0000000000000001 8000000000000001
MMIO       00000000FF000000-00000000FFFFFFFF 0000000000001000 8000000000000001

  Reserved  :         18,689 Pages (76,550,144 Bytes)
  LoaderCode:            401 Pages (1,642,496 Bytes)
  LoaderData:            256 Pages (1,048,576 Bytes)
  BS_Code   :          1,613 Pages (6,606,848 Bytes)
  BS_Data   :         47,748 Pages (195,575,808 Bytes)
  RT_Code   :            146 Pages (598,016 Bytes)
  RT_Data   :            876 Pages (3,588,096 Bytes)
  ACPI_Recl :              5 Pages (20,480 Bytes)
  ACPI_NVS  :          2,244 Pages (9,191,424 Bytes)
  MMIO      :         20,490 Pages (83,927,040 Bytes)
  MMIO_Port :              0 Pages (0 Bytes)
  PalCode   :              0 Pages (0 Bytes)
  Available :        969,334 Pages (3,970,392,064 Bytes)
  Persistent:              0 Pages (0 Bytes)
              -------------- 
Total Memory:          3,994 MB (4,188,663,808 Bytes)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B5: B\xE2y gi\u1EDD ta s\u1EBD ti\u1EBFn h\xE0nh chuy\u1EC3n gi\xE1 tr\u1ECB th\xE0nh Slide value ch\xFA \xFD v\xE0o gi\xE1 tr\u1ECB\xA0<code>Available</code>\xA0l\u1EDBn nh\u1EA5t \u1EDF c\u1ED9t\xA0<code>start</code>\xA0(chuy\u1EC3n sang decimal \u0111\u1EC3 so s\xE1nh).</p><p>B6: C\xE1c b\u1EA1n s\u1EBD th\u1EF1c hi\u1EC7n t\xEDnh to\xE1n theo c\xF4ng th\u1EE9c (chuy\u1EC3n sang decimal \u0111\u1EC3 t\xEDnh to\xE1n).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(HEX - 0x100000)/0x200000 = Slide Value in HEX

(DECIMAL - 0x100000)/0x200000 = Slide Value in decimal

(0000000100000000 - 0x100000)/0x200000

// convert hex to decimal 

(4294967296 - 1048576)/2097152 = 2047,5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i.imgur.com/LiarwbH.png" alt=""></p><p>B7: Nh\u01B0ng con s\u1ED1 n\xE0y qu\xE1 l\u1EDBn (<strong>&gt; 256</strong>) v\xEC v\u1EADy ta c\u1EA7n ph\u1EA3i h\u1EA1 xu\u1ED1ng c\xE1c\xA0<code>Available</code>\xA0c\xF3 gi\xE1 tr\u1ECB nh\u1ECF h\u01A1n cho \u0111\u1EBFn khi b\xE9 h\u01A1n ho\u1EB7c b\u1EB1ng 256.</p><p>B8: Ta s\u1EBD th\u1EED v\u1EDBi\xA0<code>0000000001100000</code>\xA0covert to decimal:\xA0<code>17825792</code>\xA0ta \u0111\u01B0\u1EE3c k\u1EBFt qu\u1EA3 l\xE0 8.</p><p>B9: Add v\xE0o boot-arg tham s\u1ED1\xA0<code>slide=XXX</code>\xA0(\u1EDF \u0111\xE2y ta s\u1EBD c\xF3 l\xE0 s<code>lide=8</code>).</p><p>B10: Reboot.</p><h3 id="luu-y" tabindex="-1"><a class="header-anchor" href="#luu-y" aria-hidden="true">#</a> <strong>L\u01B0u \xFD:</strong></h3><p>\u1EDE 1 s\u1ED1 m\xE1y s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c slide value r\u1EA5t nh\u1ECF nh\u01B0\xA0<code>slide=-0.379150390625</code>\xA0\u0111\u1ED1i v\u1EDBi tr\u01B0\u1EDFng h\u1EE3p n\xE0y ta s\u1EBD \u0111\u1EB7t\xA0<code>slide=0</code>.</p><h2 id="using-devirtualisemmio" tabindex="-1"><a class="header-anchor" href="#using-devirtualisemmio" aria-hidden="true">#</a> Using DevirtualiseMmio</h2><p>\u0110\u1ED1i v\u1EDBi 1 s\u1ED1 main nh\u01B0 Z390 v\xE0 h\u1EA7u h\u1EBFt d\xF2ng HEDT ch\xFAng ta c\u1EA7n l\u1EADp 1 danh s\xE1ch tr\u1EAFng. \u0110\xF3 l\xE0 l\xFAc MmioWhitelist ph\xE1t huy t\xE1c d\u1EE5ng. V\u1EDBi\xA0<strong>DevirtualiseMmio</strong>\xA0v\xE0\xA0<strong>ProvideCustomSlide</strong>\xA0b\u1EA1n v\u1EEBa c\xF3 th\u1EC3 b\u1EA3o m\u1EADt l\u1EA1i v\u1EEBa c\xF3 th\u1EC3 Boot, 1 combo ho\xE0n h\u1EA3o.</p><p>B1: T\u1EA1o 1 EFI Debug theo h\u01B0\u1EDBng d\u1EABn\xA0<a href="https://heavietnam.ga/forum/topic/opencore-debugging/" target="_blank" rel="noopener noreferrer">t\u1EA1i \u0111\xE2y</a>\xA0(nh\u1EDB enable\xA0<code>DevirtualiseMmio</code>).</p><ul><li>\u0110\u1ED1i v\u1EDBi clover c\xE1c b\u1EA3n c\u0169ng build t\u01B0\u01A1ng t\u1EF1 (s\u1EED d\u1EE5ng b\u1EA3n clover debug) \u0111\u1EC3 dump \u0111\u01B0\u1EE3c log file c\xE1c b\u1EA1n s\u1EBD d\xF9ng hackintool \u2013&gt; log</li></ul><p>B2: B\u1EA1n s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c 1 file log m\u1EDF n\xF3 ra v\xE0 ta s\u1EBD c\xF3:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>21:495 00:009 OCABC: MMIO devirt start
21:499 00:003 OCABC: MMIO devirt 0x60000000 (0x10000 pages, 0x8000000000000001) skip 021:503 00:003 OCABC: MMIO devirt 0xFE000000 (0x11 pages, 0x8000000000000001) skip 021:506 00:003 OCABC: MMIO devirt 0xFEC00000 (0x1 pages, 0x8000000000000001) skip 021:510 00:003 OCABC: MMIO devirt 0xFED00000 (0x1 pages, 0x8000000000000001) skip 021:513 00:003 OCABC: MMIO devirt 0xFEE00000 (0x1 pages, 0x800000000000100D) skip 021:516 00:003 OCABC: MMIO devirt 0xFF000000 (0x1000 pages, 0x800000000000100D) skip 0
21:520 00:003 OCABC: MMIO devirt end, saved 278608 KB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B\xE2y gi\u1EDD ta c\xF3 6 regions c\u1EA7n th\xEAm v\xE0o danh s\xE1ch tr\u1EAFng (in \u0111\u1EADm).</p><p>Ta c\u1EA7n convert hex to decimal (c\xF3 th\u1EC3 d\xF9ng Hackintool).</p><ul><li>MMIO devirt 0x60000000 -&gt; 1610612736</li><li>MMIO devirt 0xFE000000 -&gt; 4261412864</li><li>MMIO devirt 0xFEC00000 -&gt; 4273995776</li><li>MMIO devirt 0xFED00000 -&gt; 4275044352</li><li>MMIO devirt 0xFEE00000 -&gt; 4276092928</li><li>MMIO devirt 0xFF000000 -&gt; 4278190080</li></ul><p><img src="https://imgur.com/4a65sZl.png" alt=""></p><p>B3: Add v\xE0o config ==&gt; booter ==&gt; MmioWhitelist.</p><p><img src="https://dortania.github.io/OpenCore-Install-Guide/assets/img/mmio-white.0ee7b5c7.png" alt=""></p><p><strong>Source tham kh\u1EA3o:\xA0<a href="https://dortania.github.io/OpenCore-Install-Guide/extras/kaslr-fix.html" target="_blank" rel="noopener noreferrer">Fixing KASLR slide values | OpenCore Install Guide (dortania.github.io)</a></strong></p>`,47),s=[d];function F(r,v){return i(),n("div",null,s)}var c=e(a,[["render",F],["__file","2021-11-01-fix-kaslr.html.vue"]]);export{c as default};
