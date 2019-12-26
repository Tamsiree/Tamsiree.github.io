---
title: Office2019激活
date: 2019-04-13 12:09:09
tags:
  - Windows
  - Software
categories:
  - Windows
  - Software
  - Office2019
cover: https://cdn.jsdelivr.net/gh/Tamsiree/Assets@master/Picture/Blog/Cover/wallhaven-md3vjm.jpg
---
> 前提：电脑需要联网

# office 2019 激活，只需两步操作

第一步：新建一个文本文件，粘贴保存下面代码，文本文档后缀（.txt）直接改成（.bat）

```dos
@echo off
(cd /d "%~dp0")&&(NET FILE||(powershell start-process -FilePath '%0' -verb runas)&&(exit /B)) >NUL 2>&1
title Office 2019 Activator r/Piracy
echo Converting... & mode 40,25
(if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16")&(if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16")&(for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2019VL*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul)&(for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2019VL*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul)
cscript //nologo ospp.vbs /unpkey:6MWKP >nul&cscript //nologo ospp.vbs /inpkey:NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP >nul&set i=1
:server
if %i%==1 set KMS_Sev=kms7.MSGuides.com
if %i%==2 set KMS_Sev=kms8.MSGuides.com
if %i%==3 set KMS_Sev=kms9.MSGuides.com
cscript //nologo ospp.vbs /sethst:%KMS_Sev% >nul
echo %KMS_Sev% & echo Activating...
cscript //nologo ospp.vbs /act | find /i "successful" && (echo Complete) || (echo Trying another KMS Server & set /a i+=1 & goto server)
pause >nul
exit
```

第二步：双击bat批处理文件，弹出黑框框，等待20s激活成功

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTI2OTQ2Ni8yMDE5MDYvMTI2OTQ2Ni0yMDE5MDYyMzAyMTE0MzkzOS05MzI4Njk2MjQucG5n?x-oss-process=image/format,png)


---
> to be continued...