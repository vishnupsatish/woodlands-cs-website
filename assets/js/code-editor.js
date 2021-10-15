var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");


// async function main() {
//     let pyodide = await loadPyodide({
//       indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
//       stdin: document.getElementById('input-tmp').value
//     });
//     return pyodide;
//   }
// let pyodideReadyPromise = main();

// async function run_python() {
//     let pyodide = await pyodideReadyPromise;
//     console.log(pyodide.runPython(`
//         input()
//     `));
// }

function setup_pyodide() {
  // setup pyodide environment to run code blocks as needed
  var setup_code = `
import sys, io, traceback
namespace = {}  # use separate namespace to hide run_code, modules, etc.
def run_code(code):
  """run specified code and return stdout and stderr"""
  out = io.StringIO()
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

function runPython() {
  // run code currently stored in editor
  console.log(editor.getValue())
  pyodide.globals.code_to_run = editor.getValue()
  document.getElementById("output").innerText = pyodide.runPython('run_code(code_to_run)')
}

// run setup_pyodide() when pyodide finishes loading
languagePluginLoader.then(setup_pyodide)