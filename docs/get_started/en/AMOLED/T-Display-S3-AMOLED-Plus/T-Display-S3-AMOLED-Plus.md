---
title: LILYGO T-Display S3 AMOLED Plus
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display S3 AMOLED Plus](./assets/T-Display-S3-AMOLED-Plus-1.jpg)

</div>

<!-- <div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://item.taobao.com/item.htm?id=846226367137">淘宝</a>
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>
</div> -->

## Introduction

T-Display AMOLED Plus 是一款基于 ESP32-S3 微控制器的高集成度开发板，主打多功能与高性能。其核心搭载 16MB Flash 和 8MB PSRAM，支持复杂应用运行。配备 1.25 英寸 AMOLED 显示屏，并支持触摸功能。内置 PMU（电源管理单元）和 RTC（实时时钟），结合 VBUS 电源管理，优化了低功耗设计。扩展方面，提供 STEMMA QT/Qwlic 双接口，兼容快速传感器连接；支持 SD 卡存储，并预留丰富 GPIO、ADC 通道及 UART 通信接口，便于外设扩展。此外，板载 BOOT 模式切换和复位电路，简化开发调试。该产品适用于智能穿戴、物联网终端等需要显示交互与多传感器集成的场景。

## Appearance and function introduction
### Appearance
<img src="./assets/T-Display-S3-AMOLED-Plus-2.jpg" alt="summary" width=80%>

### Pinmap 

<img src="./assets/T-Display-S3-AMOLED-Plus-3.jpg" alt="summary" width=100%>

## Module Information and Specifications
### Description

| Component | Description |
| --- | --- |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 	16MB |
| PSRAM | 8MB|
| Display | 1.91 inch RM67162 IPS AMOLED |
| Touch | Touch capacitive screen |
| LoRa | 1276:868,915Mhz |
| Storage | TF card |
| RTC | PCF85063ATL/1 |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth5 (LE) |
| USB | 1 × USB Port and OTG(TYPE-C interface) |
| IO interface | 2.54mm spacing 2*13 (double row) extension IO interface |
| Extension interface | 1 × FPC antenna extension interface + 1 × TF card interface + 1 × STEMMA QT/QWIIC interface (JST-SH 1.0MM 4Pin) + JST-GH 1.25MM interface |
| Buttons | 1 x RESET Button + 1 x BOOT Button|
| Power supply | 1 x USB / 3.7V Li-ion Battery, 1 x Battery Switch, 1 x Solar Input Interface |
| Mounting holes | 2 x 2mm Positioning Holes |
| Dimensions | 60x32x12mm |


### Related Links
Github：[T-Display S3 AMOLED Plus](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series)



#### Schematic Diagram

[T-Display S3 AMOLED Plus](https://github.com/Xinyuan-LilyGO/LilyGo-AMOLED-Series/blob/master/schematic/T-Display-S3-AMOLED-Plus.pdf)

<!-- * [SY6970](./datasheet/AN_SY6970.pdf) -->

#### Dependency Libraries

* [lvgl 8.3.9](https://github.com/lvgl/lvgl)
* [AceButton](https://github.com/bxparks/AceButton)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)
* [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)
* [Arduino_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [OneWire](https://github.com/PaulStoffregen/OneWire) 
* [SparkFun MAX3010x Pulse and Proximity Sensor Library](https://github.com/sparkfun/SparkFun_MAX3010x_Pulse_and_Proximity_Sensor_Library)

## Software Design
### Arduino Set Parameters

| Setting                               | Value                                 |
| -------------------------------| ------------------------------- |
Board	|ESP32S3 Dev Module
Port	|Your port
USB CDC On Boot	|Enable
CPU Frequency	|240MHZ(WiFi)
Core Debug Level	|None
USB DFU On Boot	|Disable
Erase All Flash Before Sketch Upload	|Disable
Events Run On	|Core1
Flash Mode	|QIO 80MHZ
Flash Size	|16MB(128Mb)
Arduino Runs On	|Core1
USB Firmware MSC On Boot	|Disable
Partition Scheme	|16M Flash(3M APP/9.9MB FATFS)
PSRAM	|OPI PSRAM
Upload Mode	|UART0/Hardware CDC
Upload Speed	|921600
USB Mode	|CDC and JTAG  


### Development Platform
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Product Technical Support 


