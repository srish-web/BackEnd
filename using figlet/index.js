import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hello World!!");
  console.log(text);
}

doStuff();

//   _   _      _ _        __        __         _     _ _ _
//  | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
//  | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
//  |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
//  |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)
