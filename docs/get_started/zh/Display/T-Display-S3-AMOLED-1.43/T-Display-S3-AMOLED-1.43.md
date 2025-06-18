---
title: LILYGO T-Display S3 AMOLED 1.43
show_source: false
tags: AMOLED, Display
cover: ./assets/T-Display-S3-AMOLED-1.43-1.jpg
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.43](./assets/T-Display-S3-AMOLED-1.43-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44507650556085">官网购买</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a> -->
</div>

## 简介

T-Display-S3-AMOLED-1.43 是一款集成 ESP32-S3 高性能 Wi-Fi/蓝牙双模芯片的智能显示开发板，专为物联网与交互应用设计。其核心搭载 1.43 英寸 AMOLED 显示屏，提供 466×466 像素高分辨率，支持触控操作并内置 PCF8563 实时时钟（RTC），可精准管理时间任务。硬件配置包括 16MB FLASH 存储、8MB Octal SPI PSRAM 内存，支持 Micro SD 卡扩展存储，同时集成电池电量检测（ADC）功能与 Type-C 供电接口，方便移动场景使用。开发板提供丰富的扩展接口（如 SPI、I2C、GPIO 等），兼容触摸屏交互与 SD 卡数据读写，适用于智能穿戴、工业控制、嵌入式 GUI 开发等场景，兼具高性能与低功耗特性。

## 外观及功能介绍
### 外观
<img src="./assets/T-Display-S3-AMOLED-1.43-2.jpg" alt="summary" width=80%>

### 引脚图 

<img src="./assets/T-Display-S3-AMOLED-1.43-zh.jpg" alt="summary" width=100%>

## 模块资料以及参数

### 概述
<img src="./assets/T-Display-S3-AMOLED-1.43-info-zh.jpg" alt="summary" width=80%>

| 组件 | 描述 |
| --- | --- |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.43 英寸 SH8601 AMOLED |
| 触摸 | FT3168 触摸电容屏
| 总线 | QSPI
| LoRa | 1276:868,915Mhz |
| 存储 | TF 卡 |
| 充电芯片 | SY6970
| RTC | PCF8563 |
| 无线 |2.4 GHz Wi-Fi & Bluetooth 5 (LE)
| USB | 1 × USB Port and OTG(TYPE-C接口) |
| IO 接口 |2 x 2.54mm间距 2*7 拓展IO接口 |
| 拓展接口|  1 × QWIIC接口 + JST-GH 1.25MM 接口 +1 x 电池座子|
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键|
| 尺寸 | **45x45x11mm**  |

> 该芯片在未接电池5V供电时输出波形将非常不稳定，需要连接电池使用或者软件关闭电池通道，这样的话情况将会得到缓解

### 相关资料

Github：[T-Display-S3-AMOLED-1.43](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main)

* [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/PCF8563.pdf)
* [SH8601](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SH8601Z.pdf)
* [DO0143FAT01](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SPEC-DO0143FAT01-20230830.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/AN_SY6970.pdf)
* [EVB_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/EVB_SY6970.pdf)


#### 原理图

* [T-Display-S3-AMOLED-1.43-1.75_V1.0](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/project/T-Display-S3-AMOLED-1.43-1.75_V1.0.pdf)

<!-- * [SY6970](./datasheet/AN_SY6970.pdf) -->

#### 依赖库

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [Arduino_DriveBus-1.1.12](https://github.com/Xk-w/Arduino_DriveBus)
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [lvgl-8.3.5](https://lvgl.io)
* [MiniTV](https://github.com/moononournation/MiniTV)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)

## 软件开发
### Arduino 设置参数

| Setting                  | Value                            |
|--------------------------|----------------------------------|
| Board                    | ESP32S3 Dev Module               |
| Upload Speed             | 921600                           |
| USB Mode                 | Hardware CDC and JTAG            |
| USB CDC On Boot          | Enabled                          |
| USB Firmware MSC On Boot | Disabled                         |
| USB DFU On Boot          | Disabled                         |
| CPU Frequency            | 240MHz (WiFi)                    |
| Flash Mode               | QIO 80MHz                        |
| Flash Size               | 16MB (128Mb)                     |
| Core Debug Level         | None                             |
| Partition Scheme         | 16M Flash (3MB APP/9.9MB FATFS)  |
| PSRAM                    | OPI PSRAM                        |
| Arduino Runs On          | Core 1                           |
| Events Run On            | Core 1                           |

### 开发平台
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## 产品技术支持 


