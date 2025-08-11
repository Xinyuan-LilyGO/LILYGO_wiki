---
title: LILYGO T-Watch Ultra
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Watch-Ultra](./assets/T-Watch-Ultra-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-watch-ultra">官网购买</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>-->
</div> 

## 简介

LILYGO T-Watch Ultra 是一款高性能智能手表开发模组，基于 ESP32-S3 双核处理器，搭载 16MB闪存 与 8MB PSRAM，支持 Arduino/ESP-IDF/MicroPython 开发环境。核心功能高度集成：

* 显示交互：配备 2.06英寸AMOLED屏（410×502分辨率，1600万色），支持 电容触控 与 QSPI高速渲染。

* 四重无线通信：集成 Wi-Fi/BLE 5.0、LoRa（SX1262/SX1280，覆盖433/868/915MHz频段）、GNSS定位（MIA-M10Q模块）及 NFC（ST25R3916）。

* 智能感知与反馈：内置 BHI260AP AI动作传感器、DRV2605触觉震动马达 及 MAX98357A音频功放，实现运动识别与多模态交互。

* 扩展与续航：支持 MicroSD卡扩展（32GB FAT32），由 AXP2101电源管理芯片 动态优化能耗，搭配 1100mAh电池（4.07Wh），USB Type-C接口 同步支持 5V充电与程序烧录，物理按键控制开关机（短按启/长按6.5秒关）。

* 工业级设计：紧凑尺寸（49×63.5×22mm），宽温域运行（-40℃~85℃），适用于 户外运动设备、工业物联网网关等场景，以多协议融合与低功耗架构满足复杂应用需求。

## 外观及功能介绍
### 外观
<img src="./assets/T-Watch-Ultra-2.jpg" alt="summary" width=80%>

### 引脚图 

<img src="./assets/T-Watch-Ultra-3.jpg" alt="summary" width=100%>

## 模块资料
### 概述

T-Watch Ultra满足了想要在可穿戴设备中试验LoRa和ESP32 S3技术的开发人员的需求，高度可定制且可用于各种应用程序。

| 组件 | 描述 |
| --- | --- |
| MCU | ESP32-S3 |
| FLASH| 16MB |
| PS RAM | 8MB|
| RTC | PCF85063A |
| NFC | ST25R3916 |
| GPS| MIA-M10Q |
| 智能传感器 |  BHI260AP AI动作传感器 |
| 无线 | Wi-Fi: 802.11 b/g/n; BLE V5.0 |
| LoRa | SX1262，SX1280 支持频段：433~923HMZ(可选) |
| 音频输出 | Max98357A |
| 电机 | DRV2605 触觉震动马达|
| 电源管理 | AXP2101 高度集成的电源管理单元 |
| USB | 1 × USB Port and OTG(micro接口) |
| 按键 | 1 x POWER 按键(按住两秒开机，按住六秒关机) + 1 x BOOT 按键(内置) |
| 屏幕 | 2.01英寸AMOLED屏幕 410 * 502(SPI)|
| IO拓展 | XL9555 16拓展IO接口 |
| 通话模块 | T3902|
| 触摸 | CST9217 电容触摸屏 |
| 电池 | 1100mAh 锂电池 |
| 电源 | 5V/500mA 输入|
| 尺寸 | **不带表带 63.5x49x22mm**  |

### 相关资料链接

Github:[T-Watch Ultra](https://github.com/Xinyuan-LilyGO/LilyGoLib)

#### 原理图

[T-Watch Ultra](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/docs/hardware/)

#### 依赖库
- [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)

## 软件开发
### Arduino 设置参数

   | Arduino IDE Setting                  | Value                             |
   | ------------------------------------ | --------------------------------- |
   | Board                                | **LilyGo T-Watch-Ultra**          |
   | Port                                 | Your port                         |
   | USB CDC On Boot                      | Enabled                           |
   | CPU Frequency                        | 240MHZ(WiFi)                      |
   | Core Debug Level                     | None                              |
   | USB DFU On Boot                      | Disable                           |
   | Erase All Flash Before Sketch Upload | Disable                           |
   | Events Run On                        | Core 1                            |
   | JTAG Adapter                         | Disable                           |
   | Arduino Runs On                      | Core 1                            |
   | USB Firmware MSC On Boot             | Disable                           |
   | Partition Scheme                     | **16M Flash(3M APP/9.9MB FATFS)** |
   | Board Revision                       | **Radio-SX1262**                  |
   | Upload Mode                          | **UART0/Hardware CDC**            |
   | Upload Speed                         | 921600                            |
   | USB Mode                             | **CDC and JTAG**                  |

### 开发平台

1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [Micropython](https://micropython.org/)

## 产品技术支持 


