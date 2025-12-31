---
title: Meshtastic FAQ 
show_source: false
---

## Meshtastic 蓝牙

Meshtastic 的蓝牙功能默认处于禁用状态。
如果您需要启用蓝牙以便设备下载，可以通过网页版控制设备将其打开：
1.在 [meshtastic 官方网站](https://meshtastic.org/downloads/) 打开下载界面。

2.点击 [client.meshtastic.org](https://client.meshtastic.org/)

![alt text](assets/Web_client.jpg)

3.点击“通过串行连接”和“添加新设备”

![alt text](assets/image.png)

4.选择与设备对应的串行端口，然后点击“连接”

![alt text](assets/image-1.png)

5.按照步骤启用蓝牙!在此处进行更改后

![alt text](assets/Client_setting.png)

>在此处进行更改后，点击右上角的“保存”按钮，然后等待设备重启。重启完成后，蓝牙功能将被启用。

## T3-S3 E-Paper 无法使用问题

![alt text](assets/t3epaper.png)

- 选择最新版本的固件，勾选 `Full Erase and Install`以及 `Install InkHUD`，然后再进行烧录固件。
- 使用`meshtastic`APP连接到设备,根据提示进行设置。

>InkHUD 是为配备电子墨水显示器的 Meshtastic 设备设计的用户界面。它旨在快速“提前提示”，一目了然地显示重要信息，并配合连接的客户端应用 。它专门针对电子墨水显示屏，作为原始 OLED 用户界面的替代方案。


