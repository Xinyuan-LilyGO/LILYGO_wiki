---
title: LILYGO T-PCIE
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

<!-- ![T-A7670E](./assets/T-A7670E-1.jpg) -->

</div>


<!-- <div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">淘宝</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>
</div> -->

## 简介


## 芯片型号
### SIM7600E

SIM7600E-PCIE 是一款 LTE Cat 1 模块，支持 LTE-TDD/LTE-FDD/HSPA+/GSM/GPRS/EDGE 等多种无线通信模式。其最大下行速率可达 10Mbps，最大上行速率可达 5Mbps。

T-SIM7600E-PCIE 采用 mini PCIe 外形规格，由一个 SIM7600 系列模块和一个 mini PCIe 适配板组成，便于客户集成。

该模块集成了多种卫星高精度定位 (GNSS) 系统，内置多种网络协议，支持主流操作系统（如 Windows、Linux 和 Android 等的 USB 驱动程序）及软件功能。其 AT 命令与 SIM7500/SIM7600-H 系列模块兼容。

同时，SIM7600-PCIE 系列集成了主要的工业标准接口，具备强大的扩展能力，提供包括 UART、USB、GPIO 等在内的丰富接口，适用于车联网 (telematics)、监控设备、客户终端设备 (CPE)、工业路由器、远程诊断等主要的物联网 (IoT) 应用场景。


规格书: [SIM7600E](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/Files/T-SIM7600E-PCIE.pdf)

#### 外观

<img src="./assets/SIM7600E.jpg" alt="summary" width=80%>

<img src="./assets/SIM7600E-R.jpg" alt="summary" width=80%>

#### 引脚定义 

<div style="display: flex; justify-content: space-between;">
  <!-- 左侧两张图片 -->
   <div style="display: flex; flex-direction: column;">
    <img src="./assets/SIM7600E-1.jpg" alt="summary" width="60%">
    <img src="./assets/SIM7600E-2.jpg" alt="summary" width="60%">
  </div>
  
  <!-- 右侧两张图片 -->
   <div style="display: flex; flex-direction: column;">
    <img src="./assets/SIM7600E-3.jpg" alt="summary" width="40%">
    <img src="./assets/SIM7600E-4.jpg" alt="summary" width="40%">
  </div>
</div>

### 引脚图 


## 模块资料
### 概述

| 组件 | 描述 |
| --- | --- |
| MCU | ESP32-WROVER-B/E(B and E are shipped randomly) |
| FLASH| 4MB/16M(可选) |
| PSRAM | 8MB|
| 时钟频率 | 240MHz |
| 无线 | Wi-Fi: 802.11 b/g/n; BLE V5.0 |
| IO 拓展	|2.54mm间距 × 2*16拓展IO接口 + 1 × 4.4V~6.0V 输入接口|
| 电池 | 18650 电池
| 存储 | TF 卡 |
| 语音通话 | 支持语音功能
| 按键 | 1 x RST 按键 + 1 x BOOT 按键 + 1 × IO0 按键 |
| USB | 1 × USB Port and OTG(Type-C) |
| SIM | 支持2G 3G 4G (Nano Sim)
| 电源 | 5V/500mA 输入|
| 工作电压 | 2.7V~3.6V |
| 睡眠电流 | 700uA(±10%) |
| 尺寸 | **75x33x10.5mm**  |
| 孔位 | 4×2mm 定位孔 |
 
 
<table role="table" class="center_table">
  <thead>
    <tr>
      <th colspan = "2">无线通讯模块</th>
    </tr>
  </thead>
    <tr>
    <td>MCU</td>
    <td>A7670E</td>
  </tr>
  <tr>
    <td>支持地区</td>
    <td>欧洲 中东 韩国 泰国</td>
  </tr>
  <tr>
    <td>尺寸规格</td>
    <td>LCC+LGA,124Pin</td>
  </tr>
  </tr>
    <tr>
    <td>大小</td>
    <td>24*24*2.3mm</td>
  </tr>
    </tr>
    <tr>
    <td>频率波特率</td>
    <td>LTE-FDD :B1/B3/B5/B8/B20<br>
        LTE-TDD :N/A<br>
        GSM:900/1800MHz,
        </td>
  </tr>
  </tr>
    </tr>
    <tr>
    <td>功耗</td>
    <td>LTE(Mbps) :10(DL)/5(UL)<br>
        GPRS/EDGE(Kbps) :236.8(DL) / 236.8(UL)<br>
        </td>
  </tr>
    <tr>
    <td>数据传输</td>
    <td>LTE :3.8mA<br>
        GSM :3.5mA<br>
        </td>
  </tr>
    <tr>
    <td>协议支持</td>
    <td>TCP/IP/IPV4/IPV6/DNS/Multi-PDP/FTP/FTPS/HTTP/HTTPS</td>
  </tr>
  </tr>
    <tr>
    <td>Android RIL</td>
    <td>Android 5.0及以上版本</td>
  </tr>
    </tr>
    <tr>
    <td>USB 驱动</td>
    <td>windows/linux/Android</td>
  </tr>
    </tr>
    <tr>
    <td>可选拓展</td>
    <td>GNSS<br>蓝牙</td>
  </tr>
    </tr>
    <tr>
    <td>认证</td>
    <td>RoHS/CE(RED)/REACH</td>

</table>


> ⚠️⚠️⚠️ 4G版本不支持语音以及SIM功能 4G版本只支持数据传输

### 相关资料链接

Github:[T-A7670E](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX)


#### 原理图

[T-A7670E](https://github.com/Xinyuan-LilyGO/LilyGO-T-A76XX/blob/main/schematic/T-A7670X-V1.4.pdf)

#### 依赖库

* [Adafruit_BusIO](https://github.com/adafruit/Adafruit_BusIO)
* [Adafruit-GFX-Library](https://github.com/adafruit/Adafruit-GFX-Library)                     
* [Adafruit_INA219](https://github.com/adafruit/Adafruit_INA219)       
* [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)   
* [Adafruit_SSD1306](https://github.com/adafruit/Adafruit_SSD1306) 
* [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor)    
* [ArduinoHttpClient](https://github.com/arduino-libraries/ArduinoHttpClient)      
* [blynk](https://blynk.io)                     
* [BlynkNcpDriver](https://blynk.io)       
* [DHT-sensor-library](https://github.com/adafruit/DHT-sensor-library)   
* [TinyGPSPlus](http://pubsubclient.knolleary.net) 
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)    
* [StreamDebugger](https://github.com/vshymanskyy/StreamDebugger)      
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)       
* [TinyGSM-fork](https://github.com/lewisxhe/TinyGSM-fork)   
 

## 软件开发
### Arduino 设置参数

| Setting                               | Value                                 |
| :-------------------------------: | :-------------------------------: |
| Board                                 | ESP32 Dev Module           |
| CPU Frequency                   | 240MHz (WiFi/BT)     
| Core Debug Level                | None  
| Erase All Flash Before Sketch Upload | Disabled                             |
| Events Run On                   | Core 1                               |
| Flash Frequency                  | 80MHz
| Flash Mode                         | QIO                      |
| Flash Size                           | 4MB (32Mb)                    |
| JATG  Adapter                      | Disabled                             |
| Arduino Runs On                  | Core 1                               |
| Partition Scheme                | default 4MB with spiffs (1.2MB APP/1.5MB spiffs) |
| PSRAM                              | ENabled                             |
| Upload Speed                      | 921600                             |


### 开发平台

1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Platform IO](https://platformio.org/)

## 产品技术支持 


