---
title: LILYGO T-Display S3 AMOLED 1.43
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-S3-AMOLED-1.43](./assets/T-Display-S3-AMOLED-1.43-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-s3-amoled-1-64?variant=44507650556085">Go Buying</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a> -->
</div>

## Introduction

The T-Display-S3-AMOLED-1.43 is an intelligent display development board integrating the high-performance ESP32-S3 dual-core Wi-Fi/Bluetooth SoC, designed specifically for IoT and interactive applications. At its core is a 1.43-inch AMOLED display with a high resolution of 466×466 pixels, supporting touch input and featuring a built-in PCF8563 real-time clock (RTC) for precise time management.

The board is equipped with 16MB of FLASH storage and 8MB of Octal SPI PSRAM, and supports Micro SD card expansion for additional storage needs. It also integrates battery voltage detection via ADC and a USB Type-C power interface, making it convenient for portable and mobile use cases.

Offering a range of expansion interfaces including SPI, I2C, and GPIO, the board is compatible with touchscreen interaction and SD card data operations. It's well-suited for applications such as smart wearables, industrial control systems, and embedded GUI development, combining high performance with low power consumption.



## Appearance and function introduction
### Appearance
<img src="./assets/T-Display-S3-AMOLED-1.43-2.jpg" alt="summary" width=80%>

### Pinmap 

<img src="./assets/T-Display-S3-AMOLED-1.43-en.jpg" alt="summary" width=100%>

## Module Information and Specifications
### Description
<img src="./assets/T-Display-S3-AMOLED-1.43-info-en.jpg" alt="summary" width=80%>

| Component | Description |
| --- | --- |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH| 16MB |
| PSRAM | 8MB|
| Screen | 1.43-inch SH8601 AMOLED |
| Touch | FT3168 touch capacitive screen
| Bus | QSPI
| LoRa | 1276:868,915Mhz |
| Storage | TF Card |
| Charging chip | SY6970
| RTC | PCF8563 |
| Wireless | 2.4GHz Wi-Fi & Bluetooth 5 (LE)
| USB | 1 × USB Port and OTG(TYPE-C interface) |
| IO interface |2 x 2.54mm pitch 2*7 extended IO interface |
| Extended Interface | 1 × QWIIC interface + JST-GH 1.25MM interface +1 x battery socket |
| Keys | 1 x RESET key + 1 x BOOT key |
| Dimensions | 45x45x11mm |

> The output waveform of this chip will be very unstable when it is not powered by a 5V battery. It is necessary to connect a battery for use or use software to close the battery channel. In this case, the situation will be alleviated

### Related Links

Github：[T-Display-S3-AMOLED-1.43](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/tree/main)

* [PCF8563](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/PCF8563.pdf)
* [SH8601](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SH8601Z.pdf)
* [DO0143FAT01](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/SPEC-DO0143FAT01-20230830.pdf)
* [AN_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/AN_SY6970.pdf)
* [EVB_SY6970](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/information/EVB_SY6970.pdf)


#### Schematic Diagram

* [T-Display-S3-AMOLED-1.43-1.75_V1.0](https://github.com/Xinyuan-LilyGO/T-Display-S3-AMOLED-1.43-1.75/blob/main/project/T-Display-S3-AMOLED-1.43-1.75_V1.0.pdf)

<!-- * [SY6970](./datasheet/AN_SY6970.pdf) -->

#### Dependency Libraries

* [Arduino_GFX-1.3.7](https://github.com/moononournation/Arduino_GFX)
* [Arduino_DriveBus-1.1.12](https://github.com/Xk-w/Arduino_DriveBus)
* [JPEGDEC-1.2.8](https://github.com/bitbank2/JPEGDEC)
* [lvgl-8.3.5](https://lvgl.io)
* [MiniTV](https://github.com/moononournation/MiniTV)
* [SensorLib](https://github.com/lewisxhe/SensorsLib)

## Software Design
### Arduino Set Parameters

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

### Development Platform
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Product Technical Support 


