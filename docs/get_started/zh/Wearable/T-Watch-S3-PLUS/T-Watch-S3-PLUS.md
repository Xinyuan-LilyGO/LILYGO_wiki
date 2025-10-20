---
title: LILYGO T-Watch S3 Plus
show_source: false
tags: T-Watch, ESP32-S3, Smartwatch, GPS, LoRa
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Watch S3 Plus](./assets/T-Watch-S3-PLUS1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-watch-s3-plus">官网购买</a>
</div>

## 版本迭代:
| Version | Update date | Update description |
| :-----: | :---------: | :---------------- |
| T-Watch-S3-Plus_V1.0 | 2024-01-01 | 初始版本，增加GPS功能 |

## 购买链接

| Product | SOC | FLASH | PSRAM | Link |
| :-----: | :--: | :---: | :---: | :--: |
| T-Watch S3 Plus | ESP32-S3 | 16M | 8M (Octal SPI) | [Link](https://lilygo.cc/products/t-watch-s3-plus) |

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [常见问题](#常见问题)
- [项目](#项目)
- [资料](#资料)
- [依赖库](#依赖库)
<!-- - [引脚总览](#引脚总览)
- [相关测试](#相关测试) -->

## 描述

T-Watch S3 Plus 是基于 T-Watch S3 的增强版本，增加了GPS功能，是一款多功能智能可穿戴设备，集成了高性能硬件与无线通信技术，适用于运动健康监测、远程交互及音频场景。其核心配置包括1.54英寸240x240高清LCD显示屏，搭配BMA423轴传感器和电容式触摸模块，可精准追踪运动轨迹并提供灵敏触控操作，内置Max98357A音频放大器与PDM麦克风，支持高质量音频输出及语音指令输入。目前T-Watch S3 Plus有SX1262和SX1280两个LoRa版本，结合GPS模块，实现精确定位和远距离低功耗无线通信，适用于物联网与智能穿戴场景。

## 预览

### 实物图

<div style="width:100%; display:flex;justify-content: center;">

![T-Watch-S3-Plus](./assets/T-Watch-S3-PLUS2.jpg)

</div>

### 引脚图

<img src="./assets/T-Watch-S3-PLUS3.jpg" alt="summary" width=100%>

## 模块

### MCU

*   芯片：ESP32-S3
*   PSRAM：8M
*   FLASH：16M
*   其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 屏幕

*   尺寸：1.54英寸LCD
*   分辨率：240×240px
*   屏幕类型：LCD
*   总线通信协议：SPI

### 触摸

*   类型：电容触摸屏
*   总线通信协议：I2C

### 传感器

*   轴传感器：BMA423 (I2C)
*   电机驱动：DRV2605 (I2C)

### 音频

*   音频输出：Max98357A (I2S)
*   音频输入：PDM麦克风

### 通信模块

*   LoRa：SX1262/SX1280，支持433~923MHz频段
*   GPS：集成GPS模块
*   Wi-Fi：802.11 b/g/n
*   蓝牙：BLE 5.0

### 电源管理

*   芯片：AXP2101 高度集成的电源管理单元

### 概述

| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3 |
| FLASH| 16MB |
| PSRAM | 8MB|
| 屏幕 | 1.54英寸LCD (240×240) |
| 触摸 | 电容触摸屏 |
| 轴传感器 | BMA423 (I2C) |
| 电机 | DRV2605 (I2C) |
| 音频输出 | Max98357A (I2S) |
| 音频输入 | PDM麦克风 |
| LoRa | SX1262/SX1280 (433~923MHz) |
| GPS | 集成GPS模块 |
| 无线 | Wi-Fi 802.11 b/g/n + BLE 5.0 |
| 电源管理 | AXP2101 PMU |
| USB | 1 × USB Port and OTG (Micro接口) |
| 按键 | POWER按键 + BOOT按键 |
| 尺寸 | **51.5×42×20mm** (不带表带) |

## 快速开始

### 示例支持

| Example | PlatformIO/Arduino | ESP-IDF | Description |
| :------ | :----------------: | :-----: | :---------- |
| [factory](https://github.com/Xinyuan-LilyGO/LilyGoLib/blob/master/examples/factory/factory.ino) | ✓ | | 出厂示例 |
| *（更多示例请参考GitHub仓库）* | | | |

### PlatformIO
1.  安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据你的系统类型选择安装。
2.  打开VisualStudioCode软件侧边栏的"扩展"（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>打开扩展），搜索"PlatformIO IDE"扩展并下载。
3.  在安装扩展的期间，你可以前往GitHub下载程序，你可以通过点击带绿色字样的"<> Code"下载主分支程序，也通过侧边栏下载"Releases"版本程序。
4.  扩展安装完成后，打开侧边栏的资源管理器（或者使用<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>打开），点击"打开文件夹"，找到刚刚你下载的项目代码（整个文件夹），点击"添加"，此时项目文件就添加到你的工作区了。
5.  打开项目文件中的"platformio.ini"（添加文件夹成功后PlatformIO会自动打开对应文件夹的"platformio.ini"）,在"[platformio]"目录下取消注释选择你需要烧录的示例程序（以"default_envs = xxx"为标头），然后点击左下角的"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击左下角"<kbd>→</kbd>"即可进行烧录。

### Arduino
1.  安装[Arduino](https://www.arduino.cc/en/software)，根据你的系统类型选择安装。
2.  打开项目文件夹的"example"目录，选择示例项目文件夹，打开以".ino"结尾的文件即可打开Arduino IDE项目工作区。
3.  打开右上角"工具"菜单栏->选择"开发板"->"开发板管理器"，找到或者搜索"esp32"，下载作者名为"Espressif Systems"的开发板文件。接着返回"开发板"菜单栏，选择"ESP32 Arduino"开发板下的开发板类型，选择的开发板类型由"platformio.ini"文件中以[env]目录下的"board = xxx"标头为准，如果没有对应的开发板，则需要自己手动添加项目文件夹下"board"目录下的开发板。
4.  打开菜单栏"文件"->"首选项"，找到"项目文件夹位置"这一栏，将项目目录下的"libraries"文件夹里的所有库文件连带文件夹复制粘贴到这个目录下的"libraries"里边。
5.  在"工具"菜单中选择正确的设置，如下表所示。

#### ESP32-S3
| Setting | Value |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | UART0/Hardware CDC |
| USB CDC On Boot | Enabled |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240MHz (WiFi) |
| Flash Mode | QIO 80MHz |
| Flash Size | 16MB (128Mb) |
| Core Debug Level | None |
| Partition Scheme | 16M Flash (3MB APP/9.9MB FATFS) |
| PSRAM | OPI PSRAM |
| Arduino Runs On | Core 1 |
| Events Run On | Core 1 |

6.  选择正确的端口。
7.  点击右上角"<kbd>√</kbd>"进行编译，如果编译无误，将单片机连接电脑，点击右上角"<kbd>→</kbd>"即可进行烧录。

### 开发平台
1.  [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2.  [Arduino IDE](https://www.arduino.cc/en/software)
3.  [Platform IO](https://platformio.org/)
4.  [Micropython](https://micropython.org/)


<!-- ## 相关测试

*（功耗、GPS精度、传感器精度测试数据待补充）* -->

## 常见问题

*   **Q. T-Watch S3 Plus 与 T-Watch S3 的主要区别是什么？**
    A. T-Watch S3 Plus 在 T-Watch S3 的基础上增加了GPS功能，其他硬件配置基本一致。

*   **Q. 如何开机和关机？**
    A. 按住POWER按键两秒开机，按住六秒关机。BOOT按键为内置按键，用于进入下载模式。

*   **Q. 支持哪些LoRa频段？**
    A. 目前有SX1262和SX1280两个版本，支持433MHz~923MHz频段，请根据您所在地区的法规选择合适的版本。

*   **Q. 如何开发手表应用程序？**
    A. 建议使用TTGO_TWatch_Library库，该库提供了丰富的手表UI组件和传感器驱动，可以快速开发手表应用。

*   **Q. 电池续航时间如何？**
    A. 电池续航取决于使用场景，正常使用情况下可达数天，具体时间请参考实际测试数据。

## 项目
*   [T-Watch S3 Plus](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/blob/t-watch-s3/schematic/T_WATCH_S3.pdf)

## 资料
*   [ESP32-S3 Datasheet](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
*   [BMA423 Datasheet](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bma423-ds000.pdf)
*   [AXP2101 Datasheet](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library)
*   *（更多资料请参考GitHub仓库）*

## 依赖库
*   [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)