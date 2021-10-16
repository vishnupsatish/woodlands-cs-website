var pyodideWorker = new Worker("/assets/js/webworker.js");

var terminated = false;

export function run(script, stdin, onSuccess, onError) {
    pyodideWorker.onerror = onError;
    pyodideWorker.onmessage = (e) => onSuccess(e.data);
    pyodideWorker.postMessage({
        stdin,
        python: script,
    });
}

export function asyncRun(script, stdin) {

    if (terminated) {
        terminated = false;
        pyodideWorker = new Worker("/assets/js/webworker.js");
    }

    return new Promise(function (onSuccess, onError) {
        run(script, stdin, onSuccess, onError);
    });
}

export function asyncTerminate() {
    if (!terminated) {
        pyodideWorker.terminate()
        terminated = true;
    }
}