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

## Introduction

The **LILYGO T-Watch Ultra** is a high-performance smartwatch development module based on the ESP32-S3 dual-core processor, equipped with 16MB flash and 8MB PSRAM, and supports Arduino / ESP-IDF / MicroPython development environments.  
Its core functions are highly integrated:

* **Display & Interaction**: Equipped with a 2.06-inch AMOLED display (410×502 resolution, 16M colors), supporting capacitive touch and QSPI high-speed rendering.

* **Quadruple Wireless Communication**: Integrated Wi-Fi / BLE 5.0, LoRa (SX1262/SX1280, covering 433/868/915MHz bands), GNSS positioning (MIA-M10Q module), and NFC (ST25R3916).

* **Smart Sensing & Feedback**: Built-in BHI260AP AI motion sensor, DRV2605 haptic vibration motor, and MAX98357A audio amplifier for motion recognition and multi-modal interaction.

* **Expansion & Battery Life**: Supports MicroSD card expansion (32GB FAT32), powered by the AXP2101 power management chip for dynamic energy optimization, paired with a 1100mAh battery (4.07Wh). USB Type-C interface supports 5V charging and programming, with a physical power button for short-press ON and long-press OFF (6.5 seconds).

* **Industrial-grade Design**: Compact size (49×63.5×22mm), wide temperature operation (-40℃~85℃), suitable for outdoor sports devices, industrial IoT gateways, and other scenarios requiring multi-protocol integration and low-power architecture for complex applications.

## Appearance and Function Overview
### Appearance
<img src="./assets/T-Watch-Ultra-2.jpg" alt="summary" width=80%>

### Pinout Diagram 

<img src="./assets/T-Watch-Ultra-3.jpg" alt="summary" width=100%>

## Module Information
### Overview


The T-Watch Ultra meets the needs of developers wanting to experiment with LoRa and ESP32-S3 technology in a wearable device. It is highly customizable and suitable for various applications.


| Component      | Description |
| --- | --- |
| MCU | ESP32-S3 |
| FLASH | 16MB |
| PSRAM | 8MB |
| RTC | PCF85063A |
| NFC | ST25R3916 |
| GPS | MIA-M10Q |
| Smart Sensor | BHI260AP AI motion sensor |
| Wireless | Wi-Fi: 802.11 b/g/n; BLE V5.0 |
| LoRa | SX1262, SX1280; Supported bands: 433~923MHz (optional) |
| Audio Output | Max98357A |
| Motor | DRV2605 haptic vibration motor |
| Power Management | AXP2101 high-integration PMU |
| USB | 1 × USB Port and OTG (micro interface) |
| Buttons | 1 × POWER button (press 2s to power ON, 6s to power OFF) + 1 × BOOT button (built-in) |
| Screen | 2.01-inch AMOLED display, 410×502 (SPI) |
| IO Expansion | XL9555, 16 extended IO ports |
| Audio Module | T3902 |
| Touch | CST9217 capacitive touch screen |
| Battery | 1100mAh lithium battery |
| Power Supply | 5V/500mA input |
| Dimensions | **Without strap: 63.5 × 49 × 22mm** |


### Related Resources

**GitHub**: [T-Watch Ultra](https://github.com/Xinyuan-LilyGO/LilyGoLib)

**Schematics**:  
[T-Watch Ultra](https://github.com/Xinyuan-LilyGO/LilyGoLib/tree/master/docs/hardware/)

**Dependencies**:  
- [TTGO_TWatch_Library](https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library/tree/t-watch-s3)

## Software Development
### Arduino Settings


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
   
### Development Platforms

1. [ESP-IDF](https://www.espressif.com/en/products/sdks/esp-idf)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [VS Code](https://code.visualstudio.com/)
4. [MicroPython](https://micropython.org/)

## Product Technical Support


