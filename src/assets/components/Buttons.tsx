const Buttons = () => {

    const backTop = () => {
        window.scrollTo(0, 0);
    }

    const changeColor = () => {
        const colors = [
            {"--primary": "#048B9A", "--secondary": "#7A9E7E"},
            {"--primary": "#F18F01", "--secondary": "#006E90"},
            {"--primary": "#439A86", "--secondary": "#6969B3"},
            {"--primary": "#187795", "--secondary": "#2589BD"},
            {"--primary": "#97C100", "--secondary": "#436436"},
            {"--primary": "#EE7B30", "--secondary": "#846B8A"},
            {"--primary": "#679289", "--secondary": "#1D7874"},
            {"--primary": "#246A73", "--secondary": "#E3170A"},
            {"--primary": "#FF668C", "--secondary": "#607196"},
            {"--primary": "#993399", "--secondary": "#F5DEB3"},
            {"--primary": "#008080", "--secondary": "#DAB568"},
            {"--primary": "#483D8B", "--secondary": "#E5D121"},
            {"--primary": "#FF6347", "--secondary": "#006400"},
            {"--primary": "#FFA07A", "--secondary": "#4682B4"},
            {"--primary": "#DA70D6", "--secondary": "#00D66B"},
            {"--primary": "#6495ED", "--secondary": "#8B0000"},
            {"--primary": "#7B68EE", "--secondary": "#F08080"},
            {"--primary": "#9370DB", "--secondary": "#FFA500"}
        ]
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty("--primary", color["--primary"]);
        document.documentElement.style.setProperty("--secondary", color["--secondary"]);
    }

    const KuruPlay = () => {
        const img = document.createElement("img");
        img.src = "src/assets/imgs/kuru.gif";
        img.style.position = "fixed";
        img.alt = "Kuru";
        img.style.top = "50%";
        img.style.left = "120%";
        img.style.width = "600px";
        img.style.transform = "translate(-50%, -50%)";
        img.style.zIndex = "9999";
        img.style.transition = "all 3s";
        document.body.appendChild(img);

        setTimeout(() => {
            img.style.left = "-100%";
          }
          , 100);
          setTimeout(() => {
            const kuru = Math.random() < 0.5 ? "kuru" : "kuru2";
            const audio = new Audio(`src/assets/sounds/${kuru}.mp3`);
            audio.play();
          }, 50);
          setTimeout(() => {
            img.remove();
          }
          , 2000);
    }

    return (
        <div>
            <button className="button-scroll-up" onClick={() => backTop()}>
                <i className="fas fa-arrow-up"></i>
            </button>
            <button className="button-color-shuffle" onClick={() => changeColor()}>
                <i className="fas fa-palette"></i>
            </button>
            <button className="button-kuru" onClick={() => KuruPlay()}>
                <img src="src/assets/imgs/kuru.gif" alt="Kuru" className="kuru" width="60"/>
            </button>
        </div>
    );
};

export default Buttons;