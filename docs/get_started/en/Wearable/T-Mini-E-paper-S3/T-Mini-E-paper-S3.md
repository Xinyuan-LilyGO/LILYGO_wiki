---
title: LILYGO T-Mini E paper S3
show_source: false
---
<!-- **[English](README.MD) | 中文** -->

<div style="width:100%; display:flex;justify-content: center;">

![T-Deck](./assets/T-Mini-E-paper-S3-1.jpg)

</div>

<div style="padding: 1em 0 0 0; display: flex; justify-content: center">
    <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://lilygo.cc/products/t-mini-epaper-s3">官网购买</a>
    <!-- <a target="_blank" style="margin: 1em;color: white; font-size: 0.9em; border-radius: 0.3em; padding: 0.5em 2em; background-color:rgb(63, 201, 28)" href="https://www.aliexpress.com/store/911876460">速卖通</a>-->
</div> 

## Introduction
The LILYGO T-MINI E-Paper S3 Kit is a compact (102x24.5x53 mm) multifunctional development board powered by the ESP32-S3FN4R2 dual-core processor with Wi-Fi and Bluetooth 5 support.  
Its core highlight is the integration of a low-power 1.02-inch e-paper display (128x80 resolution), the SX1262 LoRa long-range communication module supporting 868/915/923 MHz frequency bands, and 3.7V 18350 lithium battery power supply.  
Onboard features include TF card storage expansion, a PCF85063ATL RTC real-time clock, rich GPIO interfaces (SPI/I2C, etc.), and deep-sleep mode support.  
It is ideal for building remote environmental monitoring nodes, low-power information display tags, portable data loggers, and other IoT application scenarios.

## Appearance and Functions
### Appearance

<img src="./assets/T-Mini-E-paper-S3-2.jpg" alt="summary" width=80%>

### Pin Diagram

<img src="./assets/T-Mini-E-paper-S3-pin.jpg" alt="summary" width=100%>

## Module Information and Specifications
### Development Board Specifications


<img src="./assets/T-Mini-E-paper-S3-info.jpg" alt="summary" width=100%>



| Component | Description |
| ---  | --- |
| MCU | ESP32-S3FN4R2 Dual-core LX7 microprocessor |
| Flash | 4MB |
| PSRAM | 2MB |
| LoRa | SX1262 868MHz / 915MHz / 923MHz (optional) |
| RTC | PCF85063ATL |
| Wireless | 2.4 GHz Wi-Fi & Bluetooth 5 (LE) |
| Storage | TF card |
| Display | 1.02-inch e-paper, 128x80 resolution |
| Battery | 18350 3.7V lithium battery |
| Buttons | 1 × RST button + 1 × BOOT button |
| USB | 1 × Type-C port |
| Expansion Ports | 1 × LoRa antenna port + 1 × QWIIC port |
| Dimensions | **102 × 24.5 × 53 mm** |
| Mounting Holes | **M1 × 4** |


### Related Resources

GitHub: [LilyGO-Mini-Epaper-S3](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3)

#### Schematics


[LilyGO-Mini-Epaper-S3](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/schematic/Mini-Epaper-S3-V1.2.pdf)

[LoRa Shield](https://github.com/Xinyuan-LilyGO/LilyGO-Mini-Epaper-S3/blob/main/schematic/Mini%20e-paper-LoRa%20Shield_Schematic.pdf)


#### Dependencies

* [AceButton](https://github.com/bxparks/AceButton)
* [RadioLib](https://github.com/jgromes/RadioLib)
* [adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel)
* [arduino_json](https://github.com/bblanchon/ArduinoJson)
* [Adafruit_GFX_Library](https://github.com/adafruit/Adafruit-GFX-Library)
* [BMA423](https://github.com/BoschSensortec/BMA423-Sensor-API)
* [GxEPD](https://github.com/bot1131357/GxEPD)
* [Mecha_QMC5883L-master](https://github.com/bot1131357/Mecha_QMC5883L-master)
* [PCF8563_library](https://github.com/lewisxhe/PCF8563_Library)
* [QMC5883LCompass](https://github.com/mprograms/QMC5883LCompass)


## Software Development
### Arduino IDE Settings


| Arduino IDE Setting | Value |
| ----------- | ----------- |
| Board | ESP32S3 Dev Module |
| Port | Your port |
| USB CDC On Boot | Enable |
| CPU Frequency | 240 MHz (Wi-Fi) |
| Core Debug Level | None |
| USB DFU On Boot | Disable |
| Erase All Flash Before Sketch Upload | Disable |
| Events Run On | Core 1 |
| Flash Mode | QIO 80 MHz |
| Flash Size | 4MB (32Mb) |
| Arduino Runs On | Core 1 |
| USB Firmware MSC On Boot | Disable |
| Partition Scheme | Default 4MB with SPIFFS (1.5MB APP / 1.5MB SPIFFS) |
| PSRAM | QSPI PSRAM |
| Upload Mode | UART0 / Hardware CDC |
| Upload Speed | 921600 |
| USB Mode | CDC and JTAG |
  

### Development Platforms
1. [VS Code](https://code.visualstudio.com/)
2. [Arduino IDE](https://www.arduino.cc/en/software)
3. [Platform IO](https://platformio.org/)
4. [Micropython](https://micropython.org/)

## Technical Support 


