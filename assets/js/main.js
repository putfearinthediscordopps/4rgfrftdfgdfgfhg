const nameData = {
  'cosmin': {
    'title': 'cosmin',
    'content': "@gng.",
    'url': "https://ev1l.club/c"
  },
  'viral': {
    'title': "viral",
    'content': "100 percent paki",
    'url': "https://knives.rip/viral"
  },
  'lewicide': {
    'title': "lewicide",
    'content': "@networkthief",
    'url': "https://knives.rip/lewicide"
  },
  'rqx': {
    'title': "rqx",
    'content': "@indiedev",
    'url': "https://knives.rip/rqx"
  },
  'phoenix': {
    'title': 'phoenix',
    'content': "@phoenix999v",
    'url': "https://knives.rip/phoenix"
  },
  'deniz': {
    'title': 'deniz',
    'content': '@reclamatie',
    'url': "https://knives.rip/deniz"
  },
  'tenous': {
    'title': "tenous",
    'content': "@tenous2.0",
    'url': 'https://knives.rip/tenous'
  },
  'restrict': {
    'title': "restrict",
    'content': "@networkcriminal",
    'url': "https://knives.rip/restrict"
  },
  'bhop': {
    'title': "bhop",
    'content': "@femeie",
    'url': "https://knives.rip/bhop"
  },
  'vlaz': {
    'title': "vlaz",
    'content': '@vlaz',
    'url': "https://knives.rip/vlaz"
  }
};
const nameLinks = document.querySelectorAll(".names a");
nameLinks.forEach(_0x1cfe25 => {
  _0x1cfe25.addEventListener("click", () => {
    const _0x44efa2 = _0x1cfe25.getAttribute("class");
    const {
      title: _0x42d2c5,
      content: _0x152394,
      url: _0x30f25b
    } = nameData[_0x44efa2];
    const _0x3c75f1 = document.createElement('div');
    _0x3c75f1.classList.add("window");
    const _0x5b31eb = document.createElement("div");
    _0x5b31eb.classList.add("window-header");
    const _0x227238 = document.createElement("div");
    _0x227238.classList.add("window-title");
    _0x227238.textContent = _0x42d2c5;
    const _0x1206cd = document.createElement("div");
    _0x1206cd.classList.add("window-close");
    _0x1206cd.textContent = 'x';
    const _0x469b77 = document.createElement("div");
    _0x469b77.classList.add("window-content");
    const _0x1a9f73 = _0x152394.split("\n");
    _0x1a9f73.forEach(_0x47f807 => {
      const _0x1b91d4 = document.createElement('p');
      if (_0x47f807.includes('@')) {
        const _0x1ff4cf = document.createElement('a');
        _0x1ff4cf.href = _0x30f25b;
        _0x1ff4cf.target = "_blank";
        const _0x27ee06 = document.createElement('span');
        _0x27ee06.textContent = _0x47f807;
        _0x1ff4cf.appendChild(_0x27ee06);
        const _0x47225e = document.createElement("span");
        _0x47225e.style.fontSize = "smaller";
        _0x47225e.textContent = " (click)";
        _0x1ff4cf.appendChild(_0x47225e);
        _0x1b91d4.appendChild(_0x1ff4cf);
      } else {
        _0x1b91d4.textContent = _0x47f807;
      }
      _0x469b77.appendChild(_0x1b91d4);
    });
    _0x5b31eb.appendChild(_0x227238);
    _0x5b31eb.appendChild(_0x1206cd);
    _0x3c75f1.appendChild(_0x5b31eb);
    _0x3c75f1.appendChild(_0x469b77);
    document.body.appendChild(_0x3c75f1);
    let _0x4fa39a = false;
    let _0xc76305 = 0x0;
    let _0x5706cd = 0x0;
    const _0xf564aa = _0x2e3fba => {
      _0x4fa39a = true;
      _0xc76305 = _0x2e3fba.clientX - _0x3c75f1.offsetLeft;
      _0x5706cd = _0x2e3fba.clientY - _0x3c75f1.offsetTop;
    };
    const _0xaacaca = _0x440743 => {
      if (_0x4fa39a) {
        const _0x1a2248 = _0x440743.clientX - _0xc76305;
        const _0x5d8dc9 = _0x440743.clientY - _0x5706cd;
        _0x3c75f1.style.left = _0x1a2248 + 'px';
        _0x3c75f1.style.top = _0x5d8dc9 + 'px';
      }
    };
    const _0x55139f = () => {
      _0x4fa39a = false;
    };
    _0x5b31eb.addEventListener("mousedown", _0xf564aa);
    window.addEventListener("mousemove", _0xaacaca);
    window.addEventListener("mouseup", _0x55139f);
    _0x1206cd.addEventListener("click", () => {
      document.body.removeChild(_0x3c75f1);
    });
  });
});