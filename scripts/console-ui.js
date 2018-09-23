function redefineConsoleLog(newLog, stillLogToConsole = true) {
    var oldLog = console.log
    console.log = function (message) {
        newLog(message)
        if (stillLogToConsole) {
            oldLog.apply(console, arguments)
        }
    }
};