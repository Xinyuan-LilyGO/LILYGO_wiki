---
title: LILYGO T-Keyboard S3 Pro
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Keyboard-S3-Pro](./assets/T-Keyboard-S3-Pro-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-keyboard-s3-pro">Go Buying</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a> -->
</div>


>! A host device is required for operation. The module connects to the host via a magnetic interface.
## Introduction

T-Keyboard-S3 Pro is a high-end programmable keyboard based on a dual-MCU architecture (ESP32-S3 + STM32G030F6P6), designed for developers and professional users.

Key highlights include:

Four 0.85-inch RGB LCD screens (128x128 resolution), capable of independently displaying shortcut commands, system status, or dynamic interactive interfaces. Driven via SPI interface (MOSI/SCLK), these screens enable efficient visual interaction.

Four hot-swappable mechanical keys, compatible with custom switches, combined with RGB WS2812 lighting effects and a rotary encoder (Data-A/B pins), supporting programmable backlight modes and precise parameter adjustments (e.g., volume, scrolling control).

On the hardware side:

The ESP32-S3 main controller features 8MB Flash and 16MB PSRAM, supporting Wi-Fi/Bluetooth communication and complex logic processing.

An external STM32 chip assists in real-time input handling via the I2C bus (SDA: IO06/IO42, SCL: IO07/IO02), ensuring low-latency response.

For expansion, the board offers STEMMA QT/Qwiic, JST-SH 4-PIN interface, and support for up to 5 I2C slave devices, allowing connection to sensors, touchpads, and other peripherals to build a multifunctional control terminal.

## Appearance and function introduction
### Appearance
<img src="./assets/T-Keyboard-S3-Pro-2.jpg" alt="summary" width=80%>

### Pinmap 

<img src="./assets/T-Keyboard-S3-Pro-zh.jpg" alt="summary" width=100%>

## Module Information and Specifications
### Description

>!1.The default firmware is configured for I2C communication expansion mode. Please note that to expand the number of slave devices, each device must have a unique I2C address to avoid address conflicts. Slave devices cannot operate independently; they must be used in a system where one master communicates with multiple slaves.<br>
>2.Up to six devices can be connected. When using multiple devices, the maximum brightness of the onboard LED should be reduced to 10。<br>
>3.Due to limitations in hardware long-trace routing, there are certain constraints on expansion directions. Only one device can be expanded on each side (left and right) of the main board, and a maximum of two devices can be added below (as the USB port blocks further expansion).
>Therefore, a 2x3 grid layout is the maximum supported configuration, allowing a total of six devices.

### Development Board Specifications

| Component | Description |
| ---  | --- |
|MCU	|ESP32-S3R8 Dual-core LX7 microprocessor
|Flash 	|16M
|PSRAM  |8M
|GPS	|MIA-M10Q
| Wireless | Wi-Fi 802.11b /g/n, BLE 5
| Storage | TF card |
| Screen | 0.85 inch All ViewTFT LCD<br> The host has four on-screen keys and the slave has five
| Key | 1 x RST key <br> 1 x BOOT key as well as knob <br> 4 × screen key |
| USB |1 × type-C interface |
|UI | LVGL
| Expansion interface | 2 × QWIIC interface + 4 × magnetic suction interface |
| Size | **164x46x42mm** |



<table role="table" class="center_table">
  <thead>
    <tr>
      <th colspan = "2">STM32 Module</th>
    </tr>
  </thead>
    <tr>
    <td>MCU</td>
    <td>STM32G030F6P6</td>
  </tr>
  <tr>
    <td>Flash</td>
    <td>64kb</td>
  </tr>
  <tr>
    <td>PSRAM</td>
    <td>8kb</td>
  </tr>
</table>

### Related Links
Github：[T-Keyboard S3 Pro](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro)

* [ESP32­-S3-WROOM­-1](https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf)
* [STM32G030F6P6](https://www.st.com/en/microcontrollers-microprocessors/stm32g030f6.html#documentation)
* [GC9107](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/information/GC9107_DataSheet_V1.2.pdf)
* [WS2812C](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/information/WS2812C-2020.pdf)

#### Schematic Diagram

[T-Keyboard S3 Pro](https://github.com/Xinyuan-LilyGO/T-Keyboard-S3-Pro/blob/main/project/SCH_T-Keyboard-S3-Pro_Keyboard_V1.1.pdf)

<!-- * [SY6970](./datasheet/AN_SY6970.pdf) -->

#### Dependency Libraries

* [RadioLib](https://github.com/Xk-w/Arduino_DriveBus)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)
* [LVGL](https://github.com/lvgl/lvgl/tree/v8.4.0)
* [Arduino_GFX](https://github.com/moononournation/Arduino_GFX)



## Software Design
### Arduino Set Parameters

| Arduino IDE Setting  | Value      |
| --------------- | ------------------ |
| Board      | **ESP32S3 Dev Module**            |
| Port           | Your port                   |
| USB CDC On Boot          | Enable                    |
| CPU Frequency           | 240MHZ(WiFi)                 |
| Core Debug Level        | None                     |
| USB DFU On Boot         | Disable                           |
| Erase All Flash Before Sketch Upload | Disable        |
| Events Run On       | Core1            |
| Flash Mode       | QIO 80MHZ                         |
| Flash Size       | **16MB(128Mb)**                   |
| Arduino Runs On    | Core1          |
| USB Firmware MSC On Boot  | Disable           |
| Partition Scheme    | **16M Flash(3M APP/9.9MB FATFS)** |
| PSRAM    | **OPI PSRAM**           |
| Upload Mode       | **UART0/Hardware CDC**            |
| Upload Speed    | 921600                            |
| USB Mode         | **CDC and JTAG**                  |
  

### Development Platform
1. [ESP-IDF](https://www.espressif.com/zh-hans/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)

## Product Technical Support 


