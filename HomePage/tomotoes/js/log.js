!(function() {
  if (window.console && window.console.log) {
    console.log(
      "\n %c Dreamy.TZK %c https://www.antmoe.com \n",
      "color:#FFFFFB;background:#ffa628;padding:5px 0;border-radius:.5rem 0 0 .5rem;",
      "background: #efefef;padding:5px 0 5px;border-radius:0 .5rem .5rem 0;"
    ),
      console.log(
        `%c页面加载消耗了 ${(
          Math.round(100 * performance.now()) /
          100 /
          1e3
        ).toFixed(2)}s`,
        "background: #fff;color: #333;text-shadow: 0 0 2px #eee, 0 0 3px #eee, 0 0 3px #eee, 0 0 2px #eee, 0 0 3px #eee;"
      ),
      localStorage.getItem("access") ||
        localStorage.setItem("access", new Date().getTime());
    let e = new Date(parseInt(localStorage.getItem("access"))),
      o = `${e.getFullYear()}年${e.getMonth() + 1}月${e.getDate()}日`,
      t = 0;
    localStorage.getItem("hit")
      ? (t = parseInt(localStorage.getItem("hit")))
      : localStorage.setItem("hit", 0),
      localStorage.setItem("hit", ++t),
      console.log(
        `这是你自 ${o} 以来第 ${t} 次在本站打开控制台，你想知道什么秘密嘛~`
      );
    const n = `https://cdn.jsdelivr.net/gh/Tomotoes/images/console/${t %
      5}.jpg`;
    console.log(
      "%c ",
      "\n  background:url(".concat(
        n,
        ") no-repeat center;\n  background-size:200px;\n  margin:5px 0;\n  padding:0 0 162px 200px;\n  border-radius:10px;\n  overflow:hidden;\n  "
      )
    );
  }
})();
