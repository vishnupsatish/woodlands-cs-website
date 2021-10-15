var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");


async function setup_pyodide() {
  // setup pyodide environment to run code blocks as needed
  let pyodide = await pyodideReadyPromise;
  var setup_code = `
import sys, io, traceback
from js import document, console
namespace = {}  # use separate namespace to hide run_code, modules, etc.
def run_code(code):
  """run specified code and return stdout and stderr"""
  out = io.StringIO()
  sys.stdin = io.StringIO(document.getElementById('input-tmp').value)
  oldout = sys.stdout
  olderr = sys.stderr
  sys.stdout = sys.stderr = out
  try:
      # change next line to exec(code, {}) if you want to clear vars each time
      exec(code, namespace)
  except:
      traceback.print_exc()

  sys.stdout = oldout
  sys.stderr = olderr
  return out.getvalue()
`
  pyodide.runPython(setup_code)
}

async function runPython() {
  // run code currently stored in editor
  let pyodide = await pyodideReadyPromise;
  pyodide.globals.code_to_run = editor.getValue()
  document.getElementById("output").innerText = pyodide.runPython('run_code(code_to_run)')
}

async function get_pyodide() {
    let pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
      });
    return pyodide;
    
}

let pyodideReadyPromise = get_pyodide();

pyodideReadyPromise.then(setup_pyodide)