/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/js/card-product.js":
/*!********************************!*\
  !*** ./src/js/card-product.js ***!
  \********************************/
/*! exports provided: cardProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardProduct", function() { return cardProduct; });
function cardProduct() {
  if (document.querySelector('.card-product')) {
    var showSale = function showSale() {
      var sales = document.querySelectorAll('.card-product__sale');
      sales.forEach(function (el) {
        if (el.getAttribute('data-sale')) {
          el.classList.add('card-product__sale_active');
        }
      });
    };

    showSale();
  }
}

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
function card() {
  if (document.getElementById('map')) {
    var callMap = function callMap() {
      var map;
      DG.then(function () {
        if (window.matchMedia("(max-width: 590px)").matches) {
          map = DG.map('map', {
            center: [43.261388, 76.929194],
            zoom: 16,
            scrollWheelZoom: false,
            touchZoom: false
          });
          var myIcon = DG.icon({
            iconUrl: './img/logo.svg',
            iconRetinaUrl: './img/logo.svg',
            iconSize: [80, 20],
            iconAnchor: [60, 30],
            popupAnchor: [-10, -20]
          });
          DG.marker([43.261258, 76.929526], {
            icon: myIcon
          }).addTo(map).bindPopup('г. Алматы, пр. Жибек Жолы, 135/10а, 3 этаж (пересечение пр. Жибек Жолы и ул. Масанчи)');
        } else {
          map = DG.map('map', {
            center: [43.261668, 76.930531],
            zoom: 17,
            scrollWheelZoom: false,
            touchZoom: false
          });
          var myIcon = DG.icon({
            iconUrl: './img/logo.svg',
            iconRetinaUrl: './img/logo.svg',
            iconSize: [100.8, 25],
            iconAnchor: [90, 60],
            popupAnchor: [-30, -40]
          });
          DG.marker([43.261258, 76.929526], {
            icon: myIcon
          }).addTo(map).bindPopup('г. Алматы, пр. Жибек Жолы, 135/10а, 3 этаж (пересечение пр. Жибек Жолы и ул. Масанчи)');
        }
      });
    };

    callMap();
  }
}

/***/ }),

/***/ "./src/js/catalog.js":
/*!***************************!*\
  !*** ./src/js/catalog.js ***!
  \***************************/
/*! exports provided: catalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catalog", function() { return catalog; });
function catalog() {
  // range
  var $range = $(".js_price-range"),
      $inputFrom = $(".js_price-before"),
      $inputTo = $(".js_price-after"),
      instance,
      min = min,
      max = max,
      from = 0,
      to = 0;
  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: min,
    to: max,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value"); // range - validate

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });
  $inputTo.on("input", function () {
    var val = $(this).prop("value"); // range - validate

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });
}

/***/ }),

/***/ "./src/js/collections.js":
/*!*******************************!*\
  !*** ./src/js/collections.js ***!
  \*******************************/
/*! exports provided: collections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collections", function() { return collections; });
function collections() {
  if (document.querySelector('.collections__panel')) {
    var arrowEvent = function arrowEvent() {
      var arrowPrev = document.querySelector('.collections__arrow_prev');
      var arrowNext = document.querySelector('.collections__arrow_next');
      arrowPrev.addEventListener('click', changeSlide);
      arrowNext.addEventListener('click', changeSlide);

      function changeSlide(e) {
        //увеличиваю шаг позиции
        if (e.target == arrowPrev) {
          position = position - 1;
        } else {
          position = position + 1;
        } //если шаг выше количества табов, то снова шаг 1


        if (position > tabs.length - 1) {
          position = 0;
        } else if (position == -1) {
          position = tabs.length - 1;
        }

        for (var _i = 0; _i < tabs.length; _i++) {
          var tabItem = tabs[_i];
          var card = cards[_i];
          tabItem.classList.remove('collections__button_active');
          card.classList.remove('collections__cards_active');
        }

        tabs[position].classList.add('collections__button_active');
        cards[position].classList.add('collections__cards_active');
        $(".collections__cards-slider").slick("refresh");
        $(".collections__pagination-slider").slick("refresh");
      }
    };

    var tabEvent = function tabEvent(tab) {
      for (var _i2 = 0; _i2 < tabs.length; _i2++) {
        var tabItem = tabs[_i2];
        var card = cards[_i2];
        tabItem.classList.remove('collections__button_active');
        card.classList.remove('collections__cards_active');

        if (tab.target !== undefined) {
          if (tab.target == tabItem) {
            position = _i2;
          }
        }
      }

      if (tab.target !== undefined) {
        tab.target.classList.add('collections__button_active');
        cards[position].classList.add('collections__cards_active');
      } else {
        tab.classList.add('collections__button_active');
        cards[0].classList.add('collections__cards_active');
      }

      $(".collections__cards-slider").slick("refresh");
      $(".collections__pagination-slider").slick("refresh");
    };

    var tabPanel = document.querySelector('.collections__panel');
    var tabs = tabPanel.querySelectorAll('.collections__button');
    var cards = document.querySelectorAll('.collections__cards');
    var position = 0;
    tabEvent(tabs[0]);
    arrowEvent();

    for (var i = 0; i < tabs.length; i++) {
      var tab = tabs[i];
      tab.addEventListener('click', tabEvent);
    }
  }
}

/***/ }),

/***/ "./src/js/feedback-popup.js":
/*!**********************************!*\
  !*** ./src/js/feedback-popup.js ***!
  \**********************************/
/*! exports provided: feedbackPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedbackPopup", function() { return feedbackPopup; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


//данный код работает при поддержке следующего ролика https://www.youtube.com/watch?v=PqTrhfjLQBI
function feedbackPopup() {
  if (document.querySelectorAll('.popup__feedback-form')) {
    var forms = document.querySelectorAll('.popup__feedback-form');

    var _loop = function _loop(i) {
      var form = forms[i];
      form.addEventListener('submit', formSend); //при отправке формы запускается ф-я formSend
      //функция отправки

      function formSend(_x) {
        return _formSend.apply(this, arguments);
      }

      function _formSend() {
        _formSend = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
          var error, formData, response, result;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault(); //запрет стандартной отправки форм

                  error = formValidate(form); //присваивается результат работы функции

                  formData = new FormData(form); //новый массив с данными всех полей

                  if (!(error === 0)) {
                    _context.next = 19;
                    break;
                  }

                  _context.next = 6;
                  return fetch('sendmail-popup.php', {
                    method: 'POST',
                    body: formData
                  });

                case 6:
                  response = _context.sent;

                  if (!response.ok) {
                    _context.next = 16;
                    break;
                  }

                  _context.next = 10;
                  return response.json();

                case 10:
                  result = _context.sent;
                  console.log(result.message);
                  form.reset();
                  e.target.querySelector('.popup__feedback-nextlink').click();
                  _context.next = 17;
                  break;

                case 16:
                  alert('Ошибка');

                case 17:
                  _context.next = 20;
                  break;

                case 19:
                  alert('Заполните обязательные поля!');

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _formSend.apply(this, arguments);
      }

      function formValidate(form) {
        var error = 0;
        var formReq = form.querySelectorAll('.js_req'); //require - обязательное поле //создаёт объект со всеми элементами с классом обязательности
        //присвоение каждому обязательному объекту определённого результата

        for (var index = 0; index < formReq.length; index++) {
          var input = formReq[index];
          formRemoveError(input); //в начале проверки объектов убрать у всех объектов класс '__error'
          //проверка заполненности оставшихся полей

          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }

        return error;
      } //функции добавляют/убирают класс '__error' себе и родительскому объету


      function formAddError(input) {
        input.parentElement.classList.add('js_error');
        input.classList.add('js_error');
      }

      function formRemoveError(input) {
        input.parentElement.classList.remove('js_error');
        input.classList.remove('js_error');
      }
    };

    for (var i = 0; i < forms.length; i++) {
      _loop(i);
    }
  }
}

/***/ }),

/***/ "./src/js/feedback.js":
/*!****************************!*\
  !*** ./src/js/feedback.js ***!
  \****************************/
/*! exports provided: feedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedback", function() { return feedback; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


//данный код работает при поддержке следующего ролика https://www.youtube.com/watch?v=PqTrhfjLQBI
function feedback() {
  if (document.getElementById('form')) {
    //при отправке формы запускается ф-я formSend
    //функция отправки
    var formSend = /*#__PURE__*/function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var error, formData, response, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); //запрет стандартной отправки форм

                error = formValidate(form); //присваивается результат работы функции

                formData = new FormData(form); //новый массив с данными всех полей

                if (!(error === 0)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 6;
                return fetch('sendmail.php', {
                  method: 'POST',
                  body: formData
                });

              case 6:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 16;
                  break;
                }

                _context.next = 10;
                return response.json();

              case 10:
                result = _context.sent;
                console.log(result.message);
                form.reset();
                e.target.querySelector('.js_popup-thx').click();
                _context.next = 17;
                break;

              case 16:
                alert('Ошибка');

              case 17:
                _context.next = 20;
                break;

              case 19:
                alert('Заполните обязательные поля!');

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function formSend(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var formValidate = function formValidate(form) {
      var error = 0;
      var formReq = form.querySelectorAll('.js_req'); //require - обязательное поле //создаёт объект со всеми элементами с классом обязательности
      //присвоение каждому обязательному объекту определённого результата

      for (var index = 0; index < formReq.length; index++) {
        var input = formReq[index];
        formRemoveError(input); //в начале проверки объектов убрать у всех объектов класс '__error'
        //проверка на присутствие класса '__email' у объекта

        if (input.classList.contains('js_email')) {
          //если объект имеет ошибку в тексте email, то ему добавляется класс '__error'
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else {
          //проверка заполненности оставшихся полей
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
      }

      return error;
    }; //функции добавляют/убирают класс '__error' себе и родительскому объету


    var formAddError = function formAddError(input) {
      input.parentElement.classList.add('js_error');
      input.classList.add('js_error');
    };

    var formRemoveError = function formRemoveError(input) {
      input.parentElement.classList.remove('js_error');
      input.classList.remove('js_error');
    }; //Regexp функция теста email


    var emailTest = function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    };

    var form = document.getElementById('form');
    form.addEventListener('submit', formSend);
  }
}

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
function header(fPopups) {
  var nav = document.querySelector('.header__nav');
  var bodyofpage = document.querySelector('body');
  var burgerItem = document.querySelector('.header__burger');
  var header = document.querySelector('.header__inner');
  var pseudo = document.querySelector('.pseudo-item__link');
  var category = document.querySelectorAll('.js_category');
  burgerItem.addEventListener('click', burgerStateShow);
  changeLink();
  window.addEventListener('resize', changeLink);

  function burgerStateShow() {
    if (window.matchMedia("(max-width: 1350px)").matches) {
      if (!nav.classList.contains('header__nav_active')) {
        nav.classList.add('header__nav_active');
        burgerItem.classList.add('header__burger_active');
        header.classList.add('header__inner_active');
        bodyofpage.style.overflow = 'hidden';
      } else {
        nav.classList.remove('header__nav_active');
        burgerItem.classList.remove('header__burger_active');
        header.classList.remove('header__inner_active');
        bodyofpage.style.overflow = 'visible';
      }
    }
  }

  function changeLink() {
    if (window.matchMedia("(max-width: 890px)").matches) {
      pseudo.classList.add('js_popup-link');
      pseudo.href = "#popup-delivery";
      fPopups();
    } else {
      pseudo.classList.remove('js_popup-link');
      pseudo.href = "#";
    }

    for (var i = 0; i < category.length; i++) {
      var cat = category[i];

      if (window.matchMedia("(max-width: 1250px)").matches) {
        cat.classList.remove('js_popup-link');
        cat.href = "catalog.html";
      } else {
        cat.classList.add('js_popup-link');
        cat.href = "#popup-category";
        fPopups();
      }
    }
  }
}

/***/ }),

/***/ "./src/js/intro.js":
/*!*************************!*\
  !*** ./src/js/intro.js ***!
  \*************************/
/*! exports provided: intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intro", function() { return intro; });
function intro() {
  setFunc();
  window.addEventListener('resize', function () {
    setFunc();
  });

  function setFunc() {
    if (window.matchMedia("(max-width: 1250px)").matches) {
      document.removeEventListener('mousemove', parallax);
    } else {
      document.addEventListener('mousemove', parallax);
    }
  }

  function parallax(e) {
    var clientWidth = window.innerWidth;
    var clientHeight = window.innerHeight;
    var posX = -(-clientWidth / 2 + e.clientX);
    var posY = -(-clientHeight / 2 + e.clientY);
    var might = 100;
    var might_0 = might * 0.15;
    var might_1 = might * 0.3;
    var might_2 = might * 1;
    var might_3 = might * 1.5;

    if (document.querySelector('.intro__bg')) {
      var bg = document.querySelector('.intro__bg');
      bg.style.background = "\n      url(img/intro-el1.png) calc(-45% + ".concat(posX / might_1, "px) calc(135% + ").concat(posY / might_1, "px)/57% no-repeat,\n      url(img/intro-el4.png) calc(112% + ").concat(posX / might_1, "px) calc(73% + ").concat(posY / might_1, "px)/32% no-repeat,\n      url(img/intro-el2.png) calc(38.5% + ").concat(posX / might_2, "px) calc(20% + ").concat(posY / might_1, "px)/15% no-repeat,\n      url(img/intro-el3.png) calc(66.5% + ").concat(posX / might_2, "px) calc(29% + ").concat(posY / might_1, "px)/18% no-repeat,\n      url(img/intro-bg.jpg) center/cover no-repeat\n      ");
    }

    if (document.querySelector('.collections__header_list')) {
      var _bg = document.querySelector('.collections__header_list');

      _bg.style.background = "\n      url(img/intro-el1.png) calc(-45% + ".concat(posX / might_1, "px) calc(40% + ").concat(posY / might_1, "px)/54% no-repeat,\n      url(img/intro-el4.png) calc(108% + ").concat(posX / might_1, "px) calc(73% + ").concat(posY / might_1, "px)/32% no-repeat,\n      url(img/intro-el2.png) calc(38.5% + ").concat(posX / might_2, "px) calc(-500% + ").concat(posY / might_1, "px)/15% no-repeat,\n      url(img/intro-el3.png) calc(66.5% + ").concat(posX / might_2, "px) calc(-200% + ").concat(posY / might_1, "px)/18% no-repeat,\n      url(img/intro-bg.jpg) center/cover no-repeat\n      ");
    }

    if (document.querySelector('.main-message__bg')) {
      var mmbg = document.querySelector('.main-message__bg');
      mmbg.style.background = "url(img/main-message-bg.png) calc(80% + ".concat(posX / might_1, "px) calc(40% + ").concat(posY / might_1, "px)/20% no-repeat");
    }
  }
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_move_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/move-up.js */ "./src/js/move-up.js");
/* harmony import */ var _js_popups_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/popups.js */ "./src/js/popups.js");
/* harmony import */ var _js_intro_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/intro.js */ "./src/js/intro.js");
/* harmony import */ var _js_card_product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/card-product.js */ "./src/js/card-product.js");
/* harmony import */ var _js_catalog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/catalog.js */ "./src/js/catalog.js");
/* harmony import */ var _js_sliders_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/sliders.js */ "./src/js/sliders.js");
/* harmony import */ var _js_shift_widget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/shift-widget.js */ "./src/js/shift-widget.js");
/* harmony import */ var _js_product_body_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/product-body.js */ "./src/js/product-body.js");
/* harmony import */ var _js_card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../js/card.js */ "./src/js/card.js");
/* harmony import */ var _js_collections_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/collections.js */ "./src/js/collections.js");
/* harmony import */ var _js_feedback_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../js/feedback.js */ "./src/js/feedback.js");
/* harmony import */ var _js_feedback_popup_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../js/feedback-popup.js */ "./src/js/feedback-popup.js");
/* harmony import */ var _js_send_to_txt_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../js/send-to-txt.js */ "./src/js/send-to-txt.js");
/* harmony import */ var _js_search_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../js/search.js */ "./src/js/search.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../js/header.js */ "./src/js/header.js");







/**/









$(document).ready(function () {
  Object(_js_move_up_js__WEBPACK_IMPORTED_MODULE_0__["moveUp"])();
  Object(_js_intro_js__WEBPACK_IMPORTED_MODULE_2__["intro"])();
  Object(_js_card_product_js__WEBPACK_IMPORTED_MODULE_3__["cardProduct"])();
  Object(_js_catalog_js__WEBPACK_IMPORTED_MODULE_4__["catalog"])();
  Object(_js_sliders_js__WEBPACK_IMPORTED_MODULE_5__["sliders"])();
  Object(_js_shift_widget_js__WEBPACK_IMPORTED_MODULE_6__["shiftWidget"])();
  Object(_js_product_body_js__WEBPACK_IMPORTED_MODULE_7__["productBody"])();
  Object(_js_card_js__WEBPACK_IMPORTED_MODULE_8__["card"])();
  Object(_js_collections_js__WEBPACK_IMPORTED_MODULE_9__["collections"])();
  Object(_js_feedback_js__WEBPACK_IMPORTED_MODULE_10__["feedback"])();
  Object(_js_feedback_popup_js__WEBPACK_IMPORTED_MODULE_11__["feedbackPopup"])();
  Object(_js_send_to_txt_js__WEBPACK_IMPORTED_MODULE_12__["sendToTXT"])();
  Object(_js_search_js__WEBPACK_IMPORTED_MODULE_13__["search"])();
  Object(_js_header_js__WEBPACK_IMPORTED_MODULE_14__["header"])(_js_popups_js__WEBPACK_IMPORTED_MODULE_1__["popups"]); // eslint-disable-next-line no-console
});

/***/ }),

/***/ "./src/js/move-up.js":
/*!***************************!*\
  !*** ./src/js/move-up.js ***!
  \***************************/
/*! exports provided: moveUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveUp", function() { return moveUp; });
/* move-up */
function moveUp(point) {
  //результат проверки нативной поддержки плавного скролла (ie11)
  var supportsNativeSmoothScroll = ('scrollBehavior' in document.documentElement.style); //получение объектов

  var moveUpItem = document.querySelector('.move-up'); //вызов функции, добавляющей функции в объект

  setFunc(moveUpItem); //вызов функции оценки положения окна при загрузке старицы, для отображения/скрытия скролл-кнопки

  lvlScroll(); //обработка события onScroll

  window.addEventListener('scroll', lvlScroll); //обработка события onClick

  moveUpItem.addEventListener('click', function () {
    if (supportsNativeSmoothScroll) {
      //обработка кода по условию "если есть скролл"
      if (window.pageYOffset) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      if (window.pageYOffset) {
        scrollToElem('#header');
      }
    }
  }); //изменение статуса объекта

  function fz_hider() {
    this.classList.add('move-up_hide');
  }

  function fz_shower() {
    this.classList.remove('move-up_hide');
  } //запись функций в каждый анимируемый объект


  function setFunc(moveUpItem) {
    moveUpItem.hider = fz_hider;
    moveUpItem.shower = fz_shower;
  } //функция, определяющая статус объектов по высоте скролла


  function lvlScroll() {
    if (document.documentElement.clientWidth * 0.05 > window.pageYOffset) {
      moveUpItem.hider();
    } else {
      moveUpItem.shower();
    }
  }
}

/***/ }),

/***/ "./src/js/popups.js":
/*!**************************!*\
  !*** ./src/js/popups.js ***!
  \**************************/
/*! exports provided: popups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popups", function() { return popups; });
/* modal window */
//код написан при поддержке этого ролика https://www.youtube.com/watch?v=qoO1ZNi1LyI
function popups() {
  var popupLinks = document.querySelectorAll(".js_popup-link");
  var body = document.querySelector("body");
  var lockPadding = document.querySelectorAll(".js_lock-padding"); //константа для сбора объектов, которым дать паддинг ширины скролла (например фиксированный header)

  var unlock = true;
  var timeout = 300;
  popupsFilter(false);

  if (popupLinks.length > 0) {
    var _loop = function _loop(index) {
      var popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        var popupName = popupLink.getAttribute("href").replace("#", "");
        var curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup, e.target);

        if (popupLink.classList.contains('js_popup-link')) {
          e.preventDefault(); //запрет перезагружать страницу
        }
      });
    };

    for (var index = 0; index < popupLinks.length; index++) {
      _loop(index);
    }
  }

  var popupCloseIcon = document.querySelectorAll(".popup__close");

  if (popupCloseIcon.length > 0) {
    var _loop2 = function _loop2(_index) {
      var e1 = popupCloseIcon[_index];
      e1.addEventListener("click", function (e) {
        popupClose(e1.closest(".popup")); //передача в функцию ближайшего родителя с классом 'popup'

        e.preventDefault(); //запрет перезагружать страницу
      });
    };

    for (var _index = 0; _index < popupCloseIcon.length; _index++) {
      _loop2(_index);
    }
  }

  function popupOpen(curentPopup, curentButton) {
    if (curentPopup && unlock) {
      var popupActive = document.querySelector(".popup.open");

      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }

      if (curentButton.closest('.card-product')) {
        var curentCard = curentButton.closest('.card-product');
        var curentProduct = curentCard.querySelector('.card-product__header').innerHTML;
        var productBox = curentPopup.querySelector('.popup__product-name');
        var productTitle = curentPopup.querySelector('.popup__feedback-title');

        if (curentPopup.querySelector('.popup__feedback-form')) {
          productBox.value = curentProduct;
          productTitle.innerHTML = curentProduct;
        }
      }

      curentPopup.classList.add("open");

      if (curentPopup.querySelector('.js_focus')) {
        setTimeout(function () {
          document.querySelector(".js_focus").focus();
        }, 200);
      }

      if (curentPopup.classList.contains('js_close')) {
        setTimeout(function () {
          popupClose(curentPopup);
        }, 2000);
      }

      curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }

  function popupClose(popupActive) {
    var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (unlock) {
      popupActive.classList.remove("open");

      if (doUnlock) {
        bodyUnLock();
        popupsFilter(popupActive);
      }
    }
  }

  function bodyLock() {
    var lockPaddingValue = window.innerWidth - document.querySelector("body").offsetWidth + "px";

    if (lockPadding.length > 0) {
      for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
        var e1 = lockPadding[_index2];
        e1.style.paddingRight = lockPaddingValue;
      }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");
    /*фикс ошибки, если во время действия анимации закрытия быстро пытаться открывать новую модалку*/

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
          var e1 = lockPadding[_index3];
          e1.style.paddingRight = "0px";
        }
      }

      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);
    /*фикс ошибки, если во время действия анимации закрытия быстро пытаться открывать новую модалку*/

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  } //закрытие модалки по escape


  if (document.querySelector(".popup.open")) {
    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        var popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
      }
    });
  }

  function popupsFilter(curentPopup) {
    var notification = document.querySelector('#popup-notification-filter');
    var durationsTime = 3000; //нажатие на кнопки

    popupFilterButtons();
    checkboxes(); //кнопки

    function popupFilterButtons() {
      var notification = document.querySelector('#popup-notification-filter');
      var popupFilters = document.querySelectorAll('.popup_filter');

      if (popupFilters) {
        for (var i = 0; i < popupFilters.length; i++) {
          var popup = popupFilters[i];
          var buttons = popup.querySelectorAll('button');

          if (buttons) {
            for (var _i = 0; _i < buttons.length; _i++) {
              var button = buttons[_i];
              button.addEventListener('click', function (e) {
                notification.innerHTML = 'фильтр "' + e.target.innerHTML + '" выбран';
                notification.classList.remove('notification_play');
                notification.classList.add('notification_play');
                setTimeout(function () {
                  notification.classList.remove('notification_play');
                }, 3000);
              });
            }
          }
        }
      }
    }

    function checkboxes() {
      if (curentPopup) {
        var popupCloser = curentPopup.querySelector('.popup__close');

        if (curentPopup.classList.contains('popup_filter')) {
          var chbNotification = function chbNotification() {
            for (var i = 0; i < chbs.length; i++) {
              var chb = chbs[i];

              if (chb.checked) {
                chb_counter++;
              }
            }

            if (chb_counter > 0) {
              notification.innerHTML = 'в разделе "' + popupCloser.innerHTML + '" выбрано опций: ' + chb_counter;
              notification.classList.remove('notification_play');
              notification.classList.add('notification_play');
              setTimeout(function () {
                notification.classList.remove('notification_play');
              }, durationsTime);
            }

            chb_counter = 0;
          };

          //нажатие на чекбоксы
          var chbs = curentPopup.querySelectorAll('.js_filter-chb');
          var chb_counter = 0;
          chbNotification();
        }
      }
    }
  } //фильтры


  openFilterBlock();
  checkForChildren();
  checkOffChildren(); //сворачивание и разворачивание эл-ов

  function openFilterBlock() {
    $('.popup__filter-arrow').unbind().click(function (e) {
      if ($(this).parent(".popup__filter-item").hasClass('js_open')) {
        $(this).parent(".popup__filter-item").next($('.popup__filter-item_to-lvl2')).slideUp();
        $(this).parent(".popup__filter-item").removeClass('js_open');
      } else {
        $('.popup__filter-arrow').parent(".popup__filter-item").next($('.popup__filter-item_to-lvl2')).slideUp();
        $('.popup__filter-arrow').parent(".popup__filter-item").removeClass('js_open');
        $(this).parent(".popup__filter-item").next($('.popup__filter-item_to-lvl2')).slideDown();
        $(this).parent(".popup__filter-item").addClass('js_open');
      }
    });
  } //чекбоксы для детей


  function checkForChildren() {
    $('.popup__filter-item').find('.js_filter-chb').click(function (e) {
      if (!$(this).closest('.popup__filter-item_to-lvl2').length) {
        if ($(this).is(':checked')) {
          $(this).closest('.popup__filter-item').next('.popup__filter-item_to-lvl2').find('.js_filter-chb').prop('checked', true);
        } else {
          $(this).closest('.popup__filter-item').next('.popup__filter-item_to-lvl2').find('.js_filter-chb').prop('checked', false);
        }
      }
    });
  } //чекбокс для родителя


  function checkOffChildren() {
    $('.popup__filter-item').find('.js_filter-chb').click(function (e) {
      if ($(this).closest('.popup__filter-item_to-lvl2').length) {
        var main_chb = $(this).closest('.popup__filter-list').closest('.popup__filter-item').prev('.popup__filter-item').find('.js_filter-chb');
        var neighbour_chb = $(this).closest('.popup__filter-list').find('.js_filter-chb');
        var counter = 0;

        for (var i = 0; i < neighbour_chb.length; i++) {
          var el = neighbour_chb[i];
          counter = counter + $(el).is(':checked');
        }

        if (neighbour_chb.length != counter) {
          main_chb.prop('checked', false);
        } else {
          main_chb.prop('checked', true);
        }
      }
    });
  } //полифиллы


  (function () {
    //проверяем поддержку
    if (!Element.prototype.closest) {
      //реализуем
      Element.prototype.closest = function (css) {
        var node = this;

        while (node) {
          if (node.matches(css)) return node;else node = node.parentElement;
        }

        return null;
      };
    }
  })();

  (function () {
    //проверяем поддержку
    if (!Element.prototype.matches) {
      //определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }
  })();
}

/***/ }),

/***/ "./src/js/product-body.js":
/*!********************************!*\
  !*** ./src/js/product-body.js ***!
  \********************************/
/*! exports provided: productBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productBody", function() { return productBody; });
function productBody() {
  $('.product-body__gallery').magnificPopup({
    delegate: '.js_gallery-image',
    // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    } // other options

  });
}

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
function search() {
  var unit = document.querySelectorAll('.js_unit');
  var dust = document.querySelectorAll('.js_dust');

  if (unit.length > 0) {
    if (dust.length > 0) {
      for (var i = 0; i < dust.length; i++) {
        var el = dust[i];
        el.style.display = 'none';
      }
    }
  }
}

/***/ }),

/***/ "./src/js/send-to-txt.js":
/*!*******************************!*\
  !*** ./src/js/send-to-txt.js ***!
  \*******************************/
/*! exports provided: sendToTXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendToTXT", function() { return sendToTXT; });
function sendToTXT() {
  $('.js_saver').on('submit', function (e) {
    e.preventDefault();
    var child = $(e.target).find('.js_email')[0];
    $(e.target).find('.js_email').removeClass('js_error');

    if (child) {
      if (!emailTest(child) && child.value != '') {
        $.post({
          type: "POST",
          url: 'saver.php',
          data: $(child).serialize(),
          success: function success(data) {
            e.target.querySelector('.js_popup-thx').click();
          } //Здесь пишем функцию, которая произойдет при успешной отправке

        });
      } else {
        $(e.target).find('.js_email').addClass('js_error');
        alert('Некорректный адрес электронной почты. Пожалуйста, повторите ввод');
      }
    }

    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  });
}

/***/ }),

/***/ "./src/js/shift-widget.js":
/*!********************************!*\
  !*** ./src/js/shift-widget.js ***!
  \********************************/
/*! exports provided: shiftWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftWidget", function() { return shiftWidget; });
function shiftWidget() {
  $(document).ready(function () {
    $('.js_shift-header').click(function (event) {
      $('.js_shift-header').not($(this)).parent('.js_shift').removeClass('shift-widget_active');
      $('.js_shift-header').not($(this)).parent('.js_shift').children('.js_shift-body').slideUp(300);

      if (!$(this).closest('.shift-widget_active').length) {
        $(this).parent('.shift-widget').children('.js_shift-body').slideToggle(300);
        $(this).parent('.shift-widget').addClass('shift-widget_active');
      } else {
        $(this).parent('.shift-widget').removeClass('shift-widget_active');
        $(this).parent('.shift-widget').children('.js_shift-body').slideToggle(300);
      }
    });
    $(document).click(function (e) {
      var div = $(".js_shift");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.js_shift').children('.js_shift-body').slideUp(300);
        $('.js_shift').not($(this)).removeClass('shift-widget_active');
      }
    });
  });
}

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/*! exports provided: sliders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliders", function() { return sliders; });
function sliders() {
  //sliders
  $(".header__adress").slick({
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    cssEase: "linear",
    accessibility: false,
    arrows: false
  });
  $(".product-slider__card-box-inner").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    responsive: [{
      breakpoint: 1380,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '250px'
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '200px'
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      }
    }, {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px',
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      }
    }, {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '50px',
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      }
    }]
  });
  $(".product-slider__card-box-inner").slick("refresh");
  $(".collections__cards-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
    fade: true,
    asNavFor: ".collections__pagination-slider"
  });
  $(".collections__pagination-slider").slick({
    centerMode: true,
    centerPadding: "5px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    asNavFor: ".collections__cards-slider",
    focusOnSelect: true
  });

  function slickify() {
    // if (!$('.collections__panel').hasClass('slick-slider')) {
    //   $('.collections__panel').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 1000,
    //     cssEase: `linear`,
    //     focusOnSelect: true,
    //     mobileFirst: true,
    //     responsive: [
    //       {
    //         breakpoint: 790,
    //         settings: 'unslick'
    //       }
    //     ]
    //   });
    // }
    // $('.collections__panel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //   console.log('hello');
    // });
    if (!$('.catalog-header__panel').hasClass('slick-slider')) {
      $('.catalog-header__panel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: "linear",
        focusOnSelect: true,
        mobileFirst: true,
        responsive: [{
          breakpoint: 790,
          settings: 'unslick'
        }]
      });
    }
  }

  function slickifymin() {
    if (!$('.product-body__galery-box').hasClass('slick-slider')) {
      $('.product-body__galery-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '80px',
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        focusOnSelect: true,
        mobileFirst: true,
        arrows: false,
        responsive: [{
          breakpoint: 425,
          settings: 'unslick'
        }]
      });
    }
  }

  slickify();
  slickifymin();
  $(window).resize(function () {
    var $windowWidth = $(window).width();

    if ($windowWidth < 790) {
      slickify();
    }

    if ($windowWidth < 425) {
      slickifymin();
    }
  });
  $(".brand-slider__slider").slick({
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [{
      breakpoint: 1380,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '150px'
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '100px'
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '50px',
        speed: 5000
      }
    }, {
      breakpoint: 430,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        speed: 5000
      }
    }]
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map