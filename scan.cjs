const { TwainSDK } = require("node-twain");
const ap = new TwainSDK({
    productName: "productName!",
    productFamily: "productFamily!",
    manufacturer: "manufacturer!",
    version: {  
      majorNum: 1,
      minorNum: 1,
      country: 86,//TWCY_CHINA
      language: 37,//TWLG_CHINESE
      info: "v0.0.1"
    }
  });
const scannDoc = (dpi, path) => {
  // 打印dpi和path
  console.log(dpi);
  console.log(path);
  try {
    // 获取可用的扫描仪
    const sources = ap.getDataSources();
    // 打印可用的扫描仪
    // console.log("Available Scanner:", sources);
    // 获取默认的扫描仪
    const defaultSource = ap.getDefaultSource();
    // 打印默认的扫描仪
    console.log("defaultSource:", defaultSource);
    // 设置默认的扫描仪
    ap.setDefaultSource(sources[0]);
    // 打开默认的扫描仪
    ap.openDataSource(defaultSource);
//     // 设置扫描仪的分辨率
//     ap.setCapability(300);
    // 设置回调函数
    ap.setCallback();
    // 扫描文档
    ap.scan(1, path);
  } catch (error) {
    // 打印错误信息
    console.error("error", error);
  }
};
scannDoc(300, "e:/da/dat/abc.png");