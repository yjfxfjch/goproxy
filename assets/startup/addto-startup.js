function CreateShortcut(filename)
{
    wsh = new ActiveXObject('WScript.Shell');
    link = wsh.CreateShortcut(wsh.SpecialFolders("Startup") + '\\goagent.lnk');
    link.TargetPath = '"' + filename + '"';
    link.Arguments = '';
    link.WindowStyle = 7;
    link.Description = 'GoAgent';
    link.WorkingDirectory = wsh.CurrentDirectory;
    link.Save();
}

function main()
{
    wsh = new ActiveXObject('WScript.Shell');
    fso = new ActiveXObject('Scripting.FileSystemObject');

    if(wsh.Popup('是否将 goagent.exe 加入到启动项？(本对话框 6 秒后消失)', 6, 'GoAgent 对话框', 1+32) == 1) {
        filename = wsh.CurrentDirectory + '\\goagent.exe'
        if (!fso.FileExists(filename)) {
            wsh.Popup('当前目录下不存在 goagent.exe ', 5, 'GoAgent 对话框', 16);
            return
        }
        CreateShortcut(filename);
        wsh.Popup('成功加入 GoAgent 到启动项', 5, 'GoAgent 对话框', 64);
    }
}

main();
