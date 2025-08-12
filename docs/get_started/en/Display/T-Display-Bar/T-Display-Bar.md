---
title: LILYGO T-Display Bar
show_source: false
tags: AMOLED, Display
cover: ./assets/T-Display-Bar-1.jpg
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Display-Bar](./assets/T-Display-Bar-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-display-bar">Official Store</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">AliExpress</a> -->
</div>

## Introduction

The LILYGO T-Display Bar is a highly integrated embedded smart display module, powered by the high-performance ESP32-S3 chip, combining multifunction sensors with high-precision display technology.  
Its core configuration is as follows:

**Display System**

* Equipped with a 2.25-inch full-color IPS LCD screen, driven by the ST7789 IC, with a resolution of 76×284 pixels (RGB arrangement).

* Supports capacitive touch (independent Touch_IRQ/Touch_RST control) for smooth human–machine interaction.

* Connected via SPI bus (CS/DC/RST/BL/MOSI/SCLK pins) to optimize display control efficiency.

**Smart Sensing Capability**

* Integrated BH1260AP AI sensor with six-axis IMU (accelerometer + gyroscope) and personalized motion tracking.

* Features an I²C interface (SDA/SCL) and dedicated control pins (EN/RST/IRQ) for low-power environmental sensing and real-time data interaction.

**Expandability and Interfaces**

* Provides QWIIC ecosystem interface (compatible with I²C devices) for rapid sensor module expansion.

* Built-in TF card storage (SPI interface: MOSI/MISO/SCK/CS) and buzzer driver (BUZZer_IO).

* Uses USB Type-C interface supporting 5V/500mA power supply and integrated programming.

**Physical Characteristics**

* Compact structural design (69×23×15 mm) suitable for both industrial deployment and portable devices.

* Highly optimized pin layout (e.g., TFT CS/DC multiplexed with ESP32 GPIO) to simplify secondary development.

## Appearance and Functions
### Appearance
<img src="./assets/T-Display-Bar-2.jpg" alt="summary" width=80%>

### Pin Diagram
<img src="./assets/T-Display-Bar-pin.jpg" alt="summary" width=100%>

## Module Information and Specifications

### Overview
<img src="./assets/T-Display-Bar-info.jpg" alt="summary" width=80%>

| Component | Description |
| --- | --- |
| MCU | ESP32-S3R8 Dual-core LX7 microprocessor |
| FLASH | 16MB |
| PSRAM | 8MB |
| Screen | 2.25-inch ST7789 IPS LCD (76×284 px) |
| Touch | CST816 capacitive touchscreen |
| Sensor | BHI260AP AI sensor with six-axis IMU <br>Buzzer |
| LoRa | 1276: 868, 915 MHz |
| Storage | TF card |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| USB | 1 × USB Port with OTG (Type-C) |
| IO Interface | 13-pin 2.54 mm pitch interface |
| Expansion Interface | 2 × QWIIC + 1 × Battery connector |
| Buttons | 1 × RESET + 1 × BOOT + 1 × IO38 + 1 × Sleep button |
| Dimensions | **69×23×15 mm** |

### Related Resources

GitHub: [T-Display-Bar](https://github.com/Xinyuan-LilyGO/T-Display-Bar)

#### Schematics

* [T-Display-Bar](https://github.com/Xinyuan-LilyGO/T-Display-Bar/blob/master/hardware/H764%20T-Display%20Bar_V1.1.pdf)

<!-- * [SY6970](./datasheet/AN_SY6970.pdf) -->

#### Dependencies

* [ESP32-BLE-Mouse](https://github.com/T-vK/ESP32-BLE-Mouse)
* [ArduinoJson](https://github.com/bblanchon/ArduinoJson)
* [lvgl](https://github.com/lvgl/lvgl)
* [MadgwickAHRS](https://github.com/arduino-libraries/MadgwickAHRS)
* [SensorsLib](https://github.com/lewisxhe/SensorsLib)
* [XPowersLib](https://github.com/lewisxhe/XPowersLib)
* [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI)

## Software Development
### Arduino IDE Settings

| Arduino IDE Setting                  | Value                                |
|--------------------------------------|--------------------------------------|
| Board                                | ESP32S3 Dev Module                   |
| Port                                 | Your port                            |
| USB CDC On Boot                      | Enable                               |
| CPU Frequency                        | 240 MHz (Wi-Fi)                      |
| Core Debug Level                     | None                                 |
| USB DFU On Boot                      | Disable                              |
| Erase All Flash Before Sketch Upload | Disable                              |
| Events Run On                        | Core 1                               |
| Flash Mode                           | QIO 80 MHz                           |
| Flash Size                           | 16MB (128Mb)                         |
| Arduino Runs On                      | Core 1                               |
| USB Firmware MSC On Boot             | Disable                              |
| Partition Scheme                     | 8M with SPIFFS (3M APP / 1.5MB SPIFFS) |
| PSRAM                                | OPI PSRAM                            |
| Upload Mode                          | UART0 / Hardware CDC                 |
| Upload Speed                         | 921600                               |
| USB Mode                             | CDC and JTAG                         |

### Development Platforms
1. [Micropython](https://micropython.org/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)

## Product Technical Support

(*Contact details here*)
