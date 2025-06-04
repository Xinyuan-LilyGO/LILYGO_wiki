---
title: LILYGO T-Display S3 AMOLED Plus
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display S3 AMOLED Plus](./assets/T-Display-S3-AMOLED-Plus-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44507650556085">Go Buying</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a> -->
</div>

## Introduction

T-Display AMOLED Plus is a high-integration development board based on the ESP32-S3 microcontroller, designed for versatility and high performance. It features 16MB of Flash and 8MB of PSRAM, enabling support for complex applications. The board comes with a 1.25-inch AMOLED display with touch functionality, offering vibrant visuals and interactive control.

It includes an onboard PMU (Power Management Unit) and RTC (Real-Time Clock), with VBUS power management to optimize low-power design. For expansion, the board provides dual STEMMA QT/Qwiic connectors for rapid sensor integration, supports SD card storage, and offers a wide range of GPIOs, ADC channels, and UART interfaces for peripheral connections.

Additionally, it integrates BOOT mode switching and a reset circuit, simplifying development and debugging. This board is ideal for scenarios requiring interactive displays and multi-sensor integration, such as smart wearables and IoT terminals.

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
|Board	|ESP32S3 Dev Module
|Port	|Your port
|USB CDC On Boot	|Enable
|CPU Frequency	|240MHZ(WiFi)
|Core Debug Level	|None
|USB DFU On Boot	|Disable
|Erase All Flash Before Sketch Upload	|Disable
|Events Run On	|Core1
|Flash Mode	|QIO 80MHZ
|Flash Size	|16MB(128Mb)
|Arduino Runs On	|Core1
|USB Firmware MSC On Boot	|Disable
|Partition Scheme	|16M Flash(3M APP/9.9MB FATFS)
|PSRAM	|OPI PSRAM
|Upload Mode	|UART0/Hardware CDC
|Upload Speed	|921600
|USB Mode	|CDC and JTAG  


### Development Platform
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Product Technical Support 


