import React, { useEffect, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

async function getUserInfo() {
  const screenSize = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  const language = window.navigator.language;
  const cookiesEnabled = window.navigator.cookieEnabled;
  const userAgent = window.navigator.userAgent;
  const vendor = window.navigator.vendor;

  const plugins = Array.from(window.navigator.plugins).map((plugin) => ({
    name: plugin.name,
    description: plugin.description,
    version: plugin.version,
    filename: plugin.filename
  }));

  let incognitoMode;
  try {
    const fs = window.webkitRequestFileSystem || window.RequestFileSystem || window.requestFileSystem;
    fs(window.TEMPORARY, 100, () => (incognitoMode = false), () => (incognitoMode = true));
  } catch (error) {
    incognitoMode = undefined;
  }

  let location;
  try {
    location = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  } catch (error) {
    location = undefined;
  }

  let usbDevices;
  try {
    usbDevices = await navigator.usb.getDevices();
  } catch (error) {
    usbDevices = undefined;
  }

  let bluetoothDevices;
  try {
    const bluetooth = await navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] });
    bluetoothDevices = [bluetooth];
  } catch (error) {
    bluetoothDevices = undefined;
  }

  return {
    screen_resolution: screenSize,
    language,
    cookies_enabled: cookiesEnabled,
    user_agent: userAgent,
    vendor,
    plugins,
    incognito_mode: incognitoMode,
    location,
    usb_devices: usbDevices,
    bluetooth_devices: bluetoothDevices
  };
}
async function getIP(){
  let json = fetch("https://ipapi.co/json/")
  return json
}

const CodeSnippet = () => {
    const [info, setInfo] = useState({});
    useEffect(() => {
        let {clientInformation} = window;
        let {appVersion, bluetooth, clipboard, cookieEnabled, credentials, geolocation, gpu, language, languages, platform, plugins, userAgent, userAgentData, vendor, innerHeight, innerWidth, localStorage, location, navigator, outerHeight, outerWidth, screen, scrollX, scrollY, sessionStorage

        } = clientInformation
      
     async function getData(){
        let info = await getUserInfo();
        let ip = await getIP()
        ip = await ip.json()
        setInfo({...info, ip: ip});
      }
      getData();

    }, [])
    
  const codeString = `let userInfo = {
    IP_adresa: ${info.ip?.ip},
    Zeme: "${info.ip?.country}",
    Telefoní předvolba: "${info.ip?.country_calling_code}",
    Poskytovatel: "${info.ip?.org}",
    🍪: ${info?.cookies_enabled},
    Jazyk: "${info?.language}",
    Vaše lokace: "${info?.location?.coords?.latitude}, ${info?.location?.coords?.longitude}",
    Pluginy: ${info?.plugins?.map((plugin) => plugin.name)},
    Rozlišení obrazovky: "${info?.screen_resolution?.width}x${info?.screen_resolution?.height}",
    User_agent: ${info?.user_agent    },
    Anonymní okno: ${info?.incognito_mode},

    }

    `;

 console.log(info);

  return (
    <div style={{maxWidth: "30%", margin: " 0 auto", whiteSpace: "break-spaces !important"}}>
      <SyntaxHighlighter language="javascript" style={{...solarizedDark}}>
      {codeString}
    </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
