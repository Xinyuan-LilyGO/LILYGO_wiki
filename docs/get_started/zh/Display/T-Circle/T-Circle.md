---
title: LILYGO T-Circle
show_source: false
tags: LCD, Display, ESP32
cover: ./assets/T-Circle-1.jpg
---

<div style="width:100%; display:flex;justify-content: center;">

![T-Circle](./assets/T-Circle-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(103, 175, 8)" href="https://lilygo.cc/products/t-circle-s3?variant=44912874062005">官网购买</a>
</div>

> 注意：T-Circle 为 ESP32 版本，点这里切换到ESP32-S3版本[T-Circle S3](https://wiki.lilygo.cc/get_started/zh/LCD_OLED/T-Circle-S3/T-Circle-S3.html)版本

## 目录
- [描述](#描述)
- [预览](#预览)
- [模块](#模块)
- [快速开始](#快速开始)
- [引脚总览](#引脚总览)
- [相关测试](#相关测试)
- [常见问题](#常见问题)
- [项目](#项目)
- [资料](#资料)
- [依赖库](#依赖库)

## 描述

LILYGO T-Circle是一款基于ESP32芯片的圆形屏幕开发板，专为便携式智能设备与嵌入式交互场景设计。核心搭载0.75英寸TFT LCD圆形显示屏，支持160×160像素分辨率与262K色彩显示，配备CST816D电容式触摸芯片实现精准触控交互。硬件配置包括16MB FLASH存储、8MB Octal SPI PSRAM内存，集成2.4GHz Wi-Fi与Bluetooth 5 (LE)无线通信功能。开发板提供12引脚扩展接口（包含SPI、I2C等通信总线），兼容Arduino等主流开发框架，适用于智能手表、物联网终端、微型交互设备等场景开发，兼具紧凑设计与多功能特性。

## 预览

### 实物图
<div style="width:100%; display:flex;justify-content: center;">
<img src="./assets/T-Circle-2.jpg" alt="T-Circle实物图" width=80%>
</div>

### 引脚图
<img src="./assets/T-Circle-zh.jpg" alt="T-Circle引脚图" width=100%>

## 模块

### 1. MCU
* 芯片：ESP32-S3R8
* PSRAM：8M (Octal SPI)
* FLASH：16M
* 其他说明：更多资料请访问[乐鑫官方ESP32-S3数据手册](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)

### 2. 屏幕
* 尺寸：0.75英寸LCD圆屏幕
* 分辨率：160x160px
* 屏幕类型：TFT LCD
* 驱动芯片：GC9D01N
* 兼容库：TFT_eSPI、Arduino_GFX
* 总线通信协议：SPI

### 3. 触摸
* 芯片：CST816D
* 总线通信协议：I2C

### 4. 音频相关
* 功放芯片：MAX98357A
* 麦克风：MSM261S4030H0R、MP34DT05-A

### 概述
| 组件 | 描述 |
| :--: | :--: |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8M (Octal SPI) |
| 屏幕 | 0.75英寸 GC9D01N LCD 圆屏幕(160x160px) |
| 触摸 | CST816D 电容式触摸芯片 |
| 无线 | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| 拓展接口 | 12pin 拓展接口 |
| 按键 | 1 x RESET 按键 + 1 x BOOT 按键 |
| 电源 | 5V/500mA |
| 孔位 | 2 × M1.6*2 |
| 尺寸 | **32*17mm** |

## 快速开始

### 示例支持

| Example | PlatformIO/Arduino |  Description |
| :------ | :----------------: | :---------- |
| 基础显示示例 | ✓ | 屏幕显示测试 |
| 触摸功能测试 | ✓ | CST816D触摸交互示例 |
| 音频播放示例 | ✓ | MAX98357A功放测试 |
| 麦克风采集示例 | ✓ | 声音传感器数据采集 |
| Wi-Fi连接示例 | ✓ | 无线网络连接测试 |
| 蓝牙通信示例 | ✓ | BLE低功耗蓝牙示例 |

### firmware烧录
1. 打开项目文件"tools"找到ESP32烧录工具并打开。
2. 选择正确的烧录芯片及烧录方式，点击"OK"，按步骤1->2->3->4->5完成烧录。若烧录失败，请按住"BOOT-0"键再尝试下载。
3. 烧录文件位于项目根目录"[firmware](https://github.com/Xinyuan-LilyGO/T-Circle/tree/main/firmware/)"文件夹下，选择对应版本下载即可。

### PlatformIO
1. 安装[VisualStudioCode](https://code.visualstudio.com/Download)，根据系统类型选择安装。
2. 打开VS Code侧边栏"扩展"（或按<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>），搜索"PlatformIO IDE"扩展并下载。
3. 安装扩展期间，前往GitHub下载程序：点击绿色"<> Code"下载主分支，或通过侧边栏下载"Releases"版本。
4. 扩展安装完成后，打开侧边栏"资源管理器"（或按<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>E</kbd>），点击"打开文件夹"，选择下载的项目代码文件夹并添加到工作区。
5. 打开项目中的"platformio.ini"文件，在"[platformio]"目录下取消注释需要烧录的示例程序（以"default_envs = xxx"为标头），点击左下角"<kbd>√</kbd>"编译，无误后连接设备点击"<kbd>→</kbd>"烧录。

### Arduino
1. 安装[Arduino](https://www.arduino.cc/en/software)，根据系统类型选择安装。
2. 打开项目文件夹的"example"目录，选择示例项目文件夹，打开".ino"文件进入Arduino IDE工作区。
3. 打开"工具"->"开发板"->"开发板管理器"，搜索"esp32"，下载"Espressif Systems"提供的开发板文件。返回"开发板"菜单，选择"ESP32 Arduino"下的对应型号（以"platformio.ini"中"board = xxx"为准，若无对应型号需手动添加项目"board"目录下的开发板文件）。
4. 打开"文件"->"首选项"，找到"项目文件夹位置"，将项目"libraries"文件夹中的所有库文件复制到该目录下的"libraries"中。
5. 在"工具"菜单中选择正确设置，如下表：

#### ESP32-S3设置
| Setting | Value |
| :-----: | :---: |
| Board | ESP32S3 Dev Module |
| Upload Speed | 921600 |
| USB Mode | Hardware CDC and JTAG |
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

6. 选择正确的端口。
7. 点击右上角"<kbd>√</kbd>"编译，无误后连接设备点击"<kbd>→</kbd>"烧录。

### 开发平台
1. [Arduino IDE](https://www.arduino.cc/en/software)
2. [Platform IO](https://platformio.org/)
3. [VS Code](https://code.visualstudio.com/)

## 常见问题

* **Q. 不会搭建编程环境怎么办？**  
  A. 参考[LilyGo-Document](https://github.com/Xinyuan-LilyGO/LilyGo-Document)文档说明搭建。

* **Q. Arduino IDE提示是否升级库文件？**  
  A. 选择不升级，不同版本库可能不兼容。

* **Q. "Uart"接口无串口数据输出？**  
  A. 项目默认将USB作为Uart0调试输出，需配置后使用外部"Uart"：  
  PlatformIO用户：修改"platformio.ini"中"build_flags"下的"-DARDUINO_USB_CDC_ON_BOOT=true"为"-DARDUINO_USB_CDC_ON_BOOT=false"。  
  Arduino用户：在"工具"中设置USB CDC On Boot为"Disabled"。

* **Q. 烧录失败？**  
  A. 按住"BOOT-0"按键重新下载程序。

## 项目
* [T-Circle原理图](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/project/T-Circle-S3_V1.0.pdf)

## 资料
* [GC9D01N](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/GC9D01N.pdf)
* [MAX98357A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MAX98357AETE+T.pdf)
* [MSM261S4030H0R](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/MSM261S4030H0R.pdf)
* [MP34DT05-A](https://github.com/Xinyuan-LilyGO/T-Circle-S3/blob/arduino-esp32-libs_V2.0.14/information/mp34dt05-a.pdf)

## 依赖库
* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [Arduino_DriveBus-1.1.16](https://github.com/Xk-w/Arduino_DriveBus)
* [TFT_eSPI-2.5.43](https://github.com/Bodmer/TFT_eSPI)
* [ESP32-audioI2S-3.0.6](https://github.com/schreibfaul1/ESP32-audioI2S)
* [DFRobot_MSM261](https://github.com/DFRobot/DFrobot_MSM261)
* [FastLED-3.6.0](https://github.com/FastLED/FastLED)

