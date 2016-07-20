const _controllers = {};

function Route(path, controller) {
  if(!_controllers[path]) {
    _controllers[path] = controller;
  }

  return [path, () =>_controllers[path].setup() ];
}

export default Route;
